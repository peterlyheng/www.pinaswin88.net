/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery
      );
})(this, function (t, e) {
  "use strict";
  function n(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var i = n(e);
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function a() {
    return (a =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  function s(t) {
    var e = this,
      n = !1;
    return (
      i.default(this).one(l.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var l = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = i.default(t).css("transition-duration"),
        n = i.default(t).css("transition-delay"),
        o = parseFloat(e),
        r = parseFloat(n);
      return o || r
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      i.default(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && l.isElement(r)
                ? "element"
                : null === (s = r) || "undefined" == typeof s
                ? "" + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? l.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof i.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = i.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  l.jQueryDetection(),
    (i.default.fn.emulateTransitionEnd = s),
    (i.default.event.special[l.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (i.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var u = "alert",
    f = i.default.fn[u],
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.alert"),
            (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = l.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest(".alert")[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = i.default.Event("close.bs.alert");
          return i.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (i.default(t).removeClass("show"), i.default(t).hasClass("fade"))
          ) {
            var n = l.getTransitionDurationFromElement(t);
            i.default(t)
              .one(l.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          i.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.alert");
            o || ((o = new t(this)), n.data("bs.alert", o)),
              "close" === e && o[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      d._handleDismiss(new d())
    ),
    (i.default.fn[u] = d._jQueryInterface),
    (i.default.fn[u].Constructor = d),
    (i.default.fn[u].noConflict = function () {
      return (i.default.fn[u] = f), d._jQueryInterface;
    });
  var c = i.default.fn.button,
    h = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var r = n.querySelector(".active");
                  r && i.default(r).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange ||
                  i.default(o).trigger("change")),
                o.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && i.default(this._element).toggleClass("active"));
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this),
              r = o.data("bs.button");
            r || ((r = new t(this)), o.data("bs.button", r)),
              (r.shouldAvoidTriggerChange = n),
              "toggle" === e && r[e]();
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
        n = e;
      if (
        (i.default(e).hasClass("btn") || (e = i.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = e.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          h._jQueryInterface.call(
            i.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var e = i.default(t.target).closest(".btn")[0];
        i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    i.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        "true" === s.getAttribute("aria-pressed")
          ? s.classList.add("active")
          : s.classList.remove("active");
      }
    }),
    (i.default.fn.button = h._jQueryInterface),
    (i.default.fn.button.Constructor = h),
    (i.default.fn.button.noConflict = function () {
      return (i.default.fn.button = c), h._jQueryInterface;
    });
  var p = "carousel",
    m = ".bs.carousel",
    g = i.default.fn[p],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    _ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    b = { TOUCH: "touch", PEN: "pen" },
    y = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide("next");
        }),
        (e.nextWhenVisible = function () {
          var t = i.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              i.default(this._element).one("slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var o = t > n ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (e.dispose = function () {
          i.default(this._element).off(m),
            i.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = a({}, v, t)), l.typeCheckConfig(p, t, _), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            i.default(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              i
                .default(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  b[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            i
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (i
                    .default(this._element)
                    .on("pointerdown.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("pointerup.bs.carousel", function (t) {
                      return n(t);
                    }),
                  this._element.classList.add("pointer-event"))
                : (i
                    .default(this._element)
                    .on("touchstart.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      return (function (e) {
                        e.originalEvent.touches &&
                        e.originalEvent.touches.length > 1
                          ? (t.touchDeltaX = 0)
                          : (t.touchDeltaX =
                              e.originalEvent.touches[0].clientX -
                              t.touchStartX);
                      })(e);
                    }),
                  i
                    .default(this._element)
                    .on("touchend.bs.carousel", function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === a
            ? this._items[this._items.length - 1]
            : this._items[a];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            r = i.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: o,
              to: n,
            });
          return i.default(this._element).trigger(r), r;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            i.default(e).removeClass("active");
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && i.default(n).addClass("active");
          }
        }),
        (e._slide = function (t, e) {
          var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(".active.carousel-item"),
            u = this._getItemIndex(s),
            f = e || (s && this._getItemByDirection(t, s)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);
          if (
            ("next" === t
              ? ((n = "carousel-item-left"),
                (o = "carousel-item-next"),
                (r = "left"))
              : ((n = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (r = "right")),
            f && i.default(f).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
            s &&
            f
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(f);
            var h = i.default.Event("slid.bs.carousel", {
              relatedTarget: f,
              direction: r,
              from: u,
              to: d,
            });
            if (i.default(this._element).hasClass("slide")) {
              i.default(f).addClass(o),
                l.reflow(f),
                i.default(s).addClass(n),
                i.default(f).addClass(n);
              var p = parseInt(f.getAttribute("data-interval"), 10);
              p
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = p))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = l.getTransitionDurationFromElement(s);
              i.default(s)
                .one(l.TRANSITION_END, function () {
                  i
                    .default(f)
                    .removeClass(n + " " + o)
                    .addClass("active"),
                    i.default(s).removeClass("active " + o + " " + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return i.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              i.default(s).removeClass("active"),
                i.default(f).addClass("active"),
                (this._isSliding = !1),
                i.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.carousel"),
              o = a({}, v, i.default(this).data());
            "object" == typeof e && (o = a({}, o, e));
            var r = "string" == typeof e ? e : o.slide;
            if (
              (n ||
                ((n = new t(this, o)), i.default(this).data("bs.carousel", n)),
              "number" == typeof e)
            )
              n.to(e);
            else if ("string" == typeof r) {
              if ("undefined" == typeof n[r])
                throw new TypeError('No method named "' + r + '"');
              n[r]();
            } else o.interval && o.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = l.getSelectorFromElement(this);
          if (n) {
            var o = i.default(n)[0];
            if (o && i.default(o).hasClass("carousel")) {
              var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (r.interval = !1),
                t._jQueryInterface.call(i.default(o), r),
                s && i.default(o).data("bs.carousel").to(s),
                e.preventDefault();
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      y._dataApiClickHandler
    ),
    i.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var o = i.default(t[e]);
        y._jQueryInterface.call(o, o.data());
      }
    }),
    (i.default.fn[p] = y._jQueryInterface),
    (i.default.fn[p].Constructor = y),
    (i.default.fn[p].noConflict = function () {
      return (i.default.fn[p] = g), y._jQueryInterface;
    });
  var w = "collapse",
    E = i.default.fn[w],
    T = { toggle: !0, parent: "" },
    C = { toggle: "boolean", parent: "(string|element)" },
    S = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = l.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (e) {
                return e === t;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          i.default(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            o = this;
          if (
            !this._isTransitioning &&
            !i.default(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (e = null),
            !(
              e &&
              (n = i.default(e).not(this._selector).data("bs.collapse")) &&
              n._isTransitioning
            ))
          ) {
            var r = i.default.Event("show.bs.collapse");
            if (
              (i.default(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  i.default(e).not(this._selector),
                  "hide"
                ),
                n || i.default(e).data("bs.collapse", null));
              var a = this._getDimension();
              i
                .default(this._element)
                .removeClass("collapse")
                .addClass("collapsing"),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  i
                    .default(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                u = l.getTransitionDurationFromElement(this._element);
              i
                .default(this._element)
                .one(l.TRANSITION_END, function () {
                  i
                    .default(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[a] = ""),
                    o.setTransitioning(!1),
                    i.default(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(u),
                (this._element.style[a] = this._element[s] + "px");
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            i.default(this._element).hasClass("show")
          ) {
            var e = i.default.Event("hide.bs.collapse");
            if (
              (i.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                l.reflow(this._element),
                i
                  .default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var a = this._triggerArray[r],
                    s = l.getSelectorFromElement(a);
                  if (null !== s)
                    i
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass("show") ||
                      i
                        .default(a)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var u = l.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(l.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    i
                      .default(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(u);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = a({}, T, t)).toggle = Boolean(t.toggle)),
            l.typeCheckConfig(w, t, C),
            t
          );
        }),
        (e._getDimension = function () {
          return i.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (e._getParent = function () {
          var e,
            n = this;
          l.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(e.querySelectorAll(o));
          return (
            i.default(r).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = i.default(t).hasClass("show");
          e.length &&
            i.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = l.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.collapse"),
              r = a({}, T, n.data(), "object" == typeof e && e ? e : {});
            if (
              (!o &&
                r.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), n.data("bs.collapse", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return T;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var e = i.default(this),
        n = l.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(n));
      i.default(o).each(function () {
        var t = i.default(this),
          n = t.data("bs.collapse") ? "toggle" : e.data();
        S._jQueryInterface.call(t, n);
      });
    }),
    (i.default.fn[w] = S._jQueryInterface),
    (i.default.fn[w].Constructor = S),
    (i.default.fn[w].noConflict = function () {
      return (i.default.fn[w] = E), S._jQueryInterface;
    });
  var D =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    N = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })();
  var k =
    D && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, N));
          };
        };
  function A(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function I(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function O(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function x(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = I(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t));
  }
  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var L = D && !(!window.MSInputMethodContext || !document.documentMode),
    P = D && /MSIE 10/.test(navigator.userAgent);
  function F(t) {
    return 11 === t ? L : 10 === t ? P : L || P;
  }
  function R(t) {
    if (!t) return document.documentElement;
    for (
      var e = F(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === I(n, "position")
        ? R(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function H(t) {
    return null !== t.parentNode ? H(t.parentNode) : t;
  }
  function M(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (s = (a = l).nodeName) ||
        ("HTML" !== s && R(a.firstElementChild) !== a)
        ? R(l)
        : l;
    var u = H(t);
    return u.host ? M(u.host, e) : M(t, H(e).host);
  }
  function B(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function q(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = B(e, "top"),
      o = B(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Q(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"]) +
      parseFloat(t["border" + i + "Width"])
    );
  }
  function W(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      F(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function U(t) {
    var e = t.body,
      n = t.documentElement,
      i = F(10) && getComputedStyle(n);
    return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
  }
  var V = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    Y = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    z = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    X =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function K(t) {
    return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function G(t) {
    var e = {};
    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        var n = B(t, "top"),
          i = B(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
      a = r.width || t.clientWidth || o.width,
      s = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - a,
      u = t.offsetHeight - s;
    if (l || u) {
      var f = I(t);
      (l -= Q(f, "x")), (u -= Q(f, "y")), (o.width -= l), (o.height -= u);
    }
    return K(o);
  }
  function $(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = F(10),
      o = "HTML" === e.nodeName,
      r = G(t),
      a = G(e),
      s = x(t),
      l = I(e),
      u = parseFloat(l.borderTopWidth),
      f = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var d = K({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height,
    });
    if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
      var c = parseFloat(l.marginTop),
        h = parseFloat(l.marginLeft);
      (d.top -= u - c),
        (d.bottom -= u - c),
        (d.left -= f - h),
        (d.right -= f - h),
        (d.marginTop = c),
        (d.marginLeft = h);
    }
    return (
      (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (d = q(d, e)),
      d
    );
  }
  function J(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = $(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      a = e ? 0 : B(n),
      s = e ? 0 : B(n, "left"),
      l = {
        top: a - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return K(l);
  }
  function Z(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === I(t, "position")) return !0;
    var n = O(t);
    return !!n && Z(n);
  }
  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === I(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function et(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      a = o ? tt(t) : M(t, j(e));
    if ("viewport" === i) r = J(a, o);
    else {
      var s = void 0;
      "scrollParent" === i
        ? "BODY" === (s = x(O(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = "window" === i ? t.ownerDocument.documentElement : i);
      var l = $(s, a, o);
      if ("HTML" !== s.nodeName || Z(a)) r = l;
      else {
        var u = U(t.ownerDocument),
          f = u.height,
          d = u.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = f + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = d + l.left);
      }
    }
    var c = "number" == typeof (n = n || 0);
    return (
      (r.left += c ? n : n.left || 0),
      (r.top += c ? n : n.top || 0),
      (r.right -= c ? n : n.right || 0),
      (r.bottom -= c ? n : n.bottom || 0),
      r
    );
  }
  function nt(t) {
    return t.width * t.height;
  }
  function it(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = et(n, i, r, o),
      s = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      l = Object.keys(s)
        .map(function (t) {
          return X({ key: t }, s[t], { area: nt(s[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      u = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      f = u.length > 0 ? u[0].key : l[0].key,
      d = t.split("-")[1];
    return f + (d ? "-" + d : "");
  }
  function ot(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? tt(e) : M(e, j(n));
    return $(n, o, i);
  }
  function rt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function at(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function st(t, e, n) {
    n = n.split("-")[0];
    var i = rt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      u = r ? "width" : "height";
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[at(s)]),
      o
    );
  }
  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ut(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = lt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          A(n) &&
          ((e.offsets.popper = K(e.offsets.popper)),
          (e.offsets.reference = K(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function ft() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = ot(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = it(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = st(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = ut(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function dt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function ct(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function ht() {
    return (
      (this.state.isDestroyed = !0),
      dt(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[ct("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function pt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function mt(t, e, n, i) {
    (n.updateBound = i),
      pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = x(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          a = r ? e.ownerDocument.defaultView : e;
        a.addEventListener(n, i, { passive: !0 }),
          r || t(x(a.parentNode), n, i, o),
          o.push(a);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function gt() {
    this.state.eventsEnabled ||
      (this.state = mt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function vt() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        pt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function _t(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        _t(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var yt = D && /Firefox/i.test(navigator.userAgent);
  function wt(t, e, n) {
    var i = lt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        a = "`" + n + "`";
      console.warn(
        a +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var Et = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Tt = Et.slice(3);
  function Ct(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Tt.indexOf(t),
      i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var St = "flip",
    Dt = "clockwise",
    Nt = "counterclockwise";
  function kt(t, e, n, i) {
    var o = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      a = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      s = a.indexOf(
        lt(a, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    a[s] &&
      -1 === a[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      u =
        -1 !== s
          ? [
              a.slice(0, s).concat([a[s].split(l)[0]]),
              [a[s].split(l)[1]].concat(a.slice(s + 1)),
            ]
          : [a];
    return (
      (u = u.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
          a = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (a = !0), t)
              : a
              ? ((t[t.length - 1] += e), (a = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                a = o[2];
              if (!r) return t;
              if (0 === a.indexOf("%")) {
                var s = void 0;
                switch (a) {
                  case "%p":
                    s = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    s = i;
                }
                return (K(s)[e] / 100) * r;
              }
              if ("vh" === a || "vw" === a) {
                return (
                  (("vh" === a
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  r
                );
              }
              return r;
            })(t, o, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      o
    );
  }
  var At = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                u = s ? "width" : "height",
                f = {
                  start: z({}, l, r[l]),
                  end: z({}, l, r[l] + r[u] - a[u]),
                };
              t.offsets.popper = X({}, a, f[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0;
            return (
              (l = _t(+n) ? [+n, 0] : kt(n, r, a, s)),
              "left" === s
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === s
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === s
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === s && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || R(t.instance.popper);
            t.instance.reference === n && (n = R(n));
            var i = ct("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = et(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
            var u = e.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var n = f[t];
                  return (
                    f[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(f[t], l[t])),
                    z({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = f[n];
                  return (
                    f[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        f[n],
                        l[t] - ("right" === t ? f.width : f.height)
                      )),
                    z({}, n, i)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                f = X({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              u = l ? "height" : "width",
              f = l ? "Top" : "Left",
              d = f.toLowerCase(),
              c = l ? "left" : "top",
              h = l ? "bottom" : "right",
              p = rt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = K(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = I(t.instance.popper),
              v = parseFloat(g["margin" + f]),
              _ = parseFloat(g["border" + f + "Width"]),
              b = m - t.offsets.popper[d] - v - _;
            return (
              (b = Math.max(Math.min(a[u] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (z((n = {}), d, Math.round(b)), z(n, c, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (dt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = et(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = at(i),
              r = t.placement.split("-")[1] || "",
              a = [];
            switch (e.behavior) {
              case St:
                a = [i, o];
                break;
              case Dt:
                a = Ct(i);
                break;
              case Nt:
                a = Ct(i, !0);
                break;
              default:
                a = e.behavior;
            }
            return (
              a.forEach(function (s, l) {
                if (i !== s || a.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = at(i));
                var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c =
                    ("left" === i && d(u.right) > d(f.left)) ||
                    ("right" === i && d(u.left) < d(f.right)) ||
                    ("top" === i && d(u.bottom) > d(f.top)) ||
                    ("bottom" === i && d(u.top) < d(f.bottom)),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  v =
                    ("left" === i && h) ||
                    ("right" === i && p) ||
                    ("top" === i && m) ||
                    ("bottom" === i && g),
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((_ && "start" === r && h) ||
                      (_ && "end" === r && p) ||
                      (!_ && "start" === r && m) ||
                      (!_ && "end" === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((_ && "start" === r && p) ||
                      (_ && "end" === r && h) ||
                      (!_ && "start" === r && g) ||
                      (!_ && "end" === r && m)),
                  w = b || y;
                (c || v || w) &&
                  ((t.flipped = !0),
                  (c || v) && (i = a[l + 1]),
                  w &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = X(
                    {},
                    t.offsets.popper,
                    st(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = ut(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);
            return (
              (o[a ? "left" : "top"] =
                r[n] - (s ? o[a ? "width" : "height"] : 0)),
              (t.placement = at(e)),
              (t.offsets.popper = K(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = lt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = lt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var a = void 0 !== r ? r : e.gpuAcceleration,
              s = R(t.instance.popper),
              l = G(s),
              u = { position: o.position },
              f = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ["left", "right"].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf("-"),
                  c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
                  h = e ? r : s;
                return {
                  left: c(
                    l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left
                  ),
                  top: h(i.top),
                  bottom: h(i.bottom),
                  right: c(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !yt),
              d = "bottom" === n ? "top" : "bottom",
              c = "right" === i ? "left" : "right",
              h = ct("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" === d
                  ? "HTML" === s.nodeName
                    ? -s.clientHeight + f.bottom
                    : -l.height + f.bottom
                  : f.top),
              (p =
                "right" === c
                  ? "HTML" === s.nodeName
                    ? -s.clientWidth + f.right
                    : -l.width + f.right
                  : f.left),
              a && h)
            )
              (u[h] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (u[d] = 0),
                (u[c] = 0),
                (u.willChange = "transform");
            else {
              var g = "bottom" === d ? -1 : 1,
                v = "right" === c ? -1 : 1;
              (u[d] = m * g), (u[c] = p * v), (u.willChange = d + ", " + c);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = X({}, _, t.attributes)),
              (t.styles = X({}, u, t.styles)),
              (t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = ot(o, e, t, n.positionFixed),
              a = it(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", a),
              bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    It = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        V(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = k(this.update.bind(this))),
          (this.options = X({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = X(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return X({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              A(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        Y(t, [
          {
            key: "update",
            value: function () {
              return ft.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return ht.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return gt.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return vt.call(this);
            },
          },
        ]),
        t
      );
    })();
  (It.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (It.placements = Et),
    (It.Defaults = At);
  var Ot = "dropdown",
    xt = i.default.fn[Ot],
    jt = new RegExp("38|40|27"),
    Lt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Pt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    Ft = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass("disabled")
          ) {
            var e = i.default(this._menu).hasClass("show");
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              i.default(this._element).hasClass("disabled") ||
              i.default(this._menu).hasClass("show")
            ))
          ) {
            var n = { relatedTarget: this._element },
              o = i.default.Event("show.bs.dropdown", n),
              r = t._getParentFromElement(this._element);
            if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof It)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var a = this._element;
                "parent" === this._config.reference
                  ? (a = r)
                  : l.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    i.default(r).addClass("position-static"),
                  (this._popper = new It(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === i.default(r).closest(".navbar-nav").length &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                i.default(this._menu).toggleClass("show"),
                i
                  .default(r)
                  .toggleClass("show")
                  .trigger(i.default.Event("shown.bs.dropdown", n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass("disabled") &&
            i.default(this._menu).hasClass("show")
          ) {
            var e = { relatedTarget: this._element },
              n = i.default.Event("hide.bs.dropdown", e),
              o = t._getParentFromElement(this._element);
            i.default(o).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass("show"),
                i
                  .default(o)
                  .toggleClass("show")
                  .trigger(i.default.Event("hidden.bs.dropdown", e)));
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.dropdown"),
            i.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          i.default(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              this.constructor.Default,
              i.default(this._element).data(),
              t
            )),
            l.typeCheckConfig(Ot, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = i.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = i.default(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : i.default(this._menu).hasClass("dropdown-menu-right") &&
                (e = "bottom-end"),
            e
          );
        }),
        (e._detectNavbar = function () {
          return i.default(this._element).closest(".navbar").length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.dropdown");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e ? e : null)),
                i.default(this).data("bs.dropdown", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                r = n.length;
              o < r;
              o++
            ) {
              var a = t._getParentFromElement(n[o]),
                s = i.default(n[o]).data("bs.dropdown"),
                l = { relatedTarget: n[o] };
              if ((e && "click" === e.type && (l.clickEvent = e), s)) {
                var u = s._menu;
                if (
                  i.default(a).hasClass("show") &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    i.default.contains(a, e.target)
                  )
                ) {
                  var f = i.default.Event("hide.bs.dropdown", l);
                  i.default(a).trigger(f),
                    f.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        i
                          .default(document.body)
                          .children()
                          .off("mouseover", null, i.default.noop),
                      n[o].setAttribute("aria-expanded", "false"),
                      s._popper && s._popper.destroy(),
                      i.default(u).removeClass("show"),
                      i
                        .default(a)
                        .removeClass("show")
                        .trigger(i.default.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = l.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    i.default(e.target).closest(".dropdown-menu").length))
              : !jt.test(e.which)) &&
            !this.disabled &&
            !i.default(this).hasClass("disabled")
          ) {
            var n = t._getParentFromElement(this),
              o = i.default(n).hasClass("show");
            if (o || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !o || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    i
                      .default(n.querySelector('[data-toggle="dropdown"]'))
                      .trigger("focus"),
                  void i.default(this).trigger("click")
                );
              var r = [].slice
                .call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return i.default(t).is(":visible");
                });
              if (0 !== r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--,
                  40 === e.which && a < r.length - 1 && a++,
                  a < 0 && (a = 0),
                  r[a].focus();
              }
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Lt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Pt;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      Ft._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ft._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Ft._jQueryInterface.call(i.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (i.default.fn[Ot] = Ft._jQueryInterface),
    (i.default.fn[Ot].Constructor = Ft),
    (i.default.fn[Ot].noConflict = function () {
      return (i.default.fn[Ot] = xt), Ft._jQueryInterface;
    });
  var Rt = i.default.fn.modal,
    Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Mt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    Bt = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            i.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0);
            var n = i.default.Event("show.bs.modal", { relatedTarget: t });
            i.default(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i
                  .default(this._element)
                  .on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                i
                  .default(this._dialog)
                  .on("mousedown.dismiss.bs.modal", function () {
                    i.default(e._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        i.default(t.target).is(e._element) &&
                          (e._ignoreBackdropClick = !0);
                      }
                    );
                  }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = i.default.Event("hide.bs.modal");
            if (
              (i.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = i.default(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(document).off("focusin.bs.modal"),
                i.default(this._element).removeClass("show"),
                i.default(this._element).off("click.dismiss.bs.modal"),
                i.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var r = l.getTransitionDurationFromElement(this._element);
                i.default(this._element)
                  .one(l.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return i.default(t).off(".bs.modal");
          }),
            i.default(document).off("focusin.bs.modal"),
            i.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = a({}, Ht, t)), l.typeCheckConfig("modal", t, Mt), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var e = i.default.Event("hidePrevented.bs.modal");
            if ((i.default(this._element).trigger(e), e.isDefaultPrevented()))
              return;
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var o = l.getTransitionDurationFromElement(this._dialog);
            i.default(this._element).off(l.TRANSITION_END),
              i
                .default(this._element)
                .one(l.TRANSITION_END, function () {
                  t._element.classList.remove("modal-static"),
                    n ||
                      i
                        .default(t._element)
                        .one(l.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, o);
                })
                .emulateTransitionEnd(o),
              this._element.focus();
          } else this.hide();
        }),
        (e._showElement = function (t) {
          var e = this,
            n = i.default(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            i.default(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && l.reflow(this._element),
            i.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
            a = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                i.default(e._element).trigger(r);
            };
          if (n) {
            var s = l.getTransitionDurationFromElement(this._dialog);
            i.default(this._dialog)
              .one(l.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (e._enforceFocus = function () {
          var t = this;
          i.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === i.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? i
                .default(this._element)
                .on("keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
            : this._isShown ||
              i.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : i.default(window).off("resize.bs.modal");
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              i.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger("hidden.bs.modal");
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (i.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = i.default(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              i.default(this._backdrop).appendTo(document.body),
              i
                .default(this._element)
                .on("click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      e._triggerBackdropTransition();
                }),
              n && l.reflow(this._backdrop),
              i.default(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!n) return void t();
            var o = l.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(l.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            i.default(this._backdrop).removeClass("show");
            var r = function () {
              e._removeBackdrop(), t && t();
            };
            if (i.default(this._element).hasClass("fade")) {
              var a = l.getTransitionDurationFromElement(this._backdrop);
              i.default(this._backdrop)
                .one(l.TRANSITION_END, r)
                .emulateTransitionEnd(a);
            } else r();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));
            i.default(e).each(function (e, n) {
              var o = n.style.paddingRight,
                r = i.default(n).css("padding-right");
              i.default(n)
                .data("padding-right", o)
                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
            }),
              i.default(n).each(function (e, n) {
                var o = n.style.marginRight,
                  r = i.default(n).css("margin-right");
                i.default(n)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(r) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              r = i.default(document.body).css("padding-right");
            i.default(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(r) + this._scrollbarWidth + "px"
              );
          }
          i.default(document.body).addClass("modal-open");
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          i.default(t).each(function (t, e) {
            var n = i.default(e).data("padding-right");
            i.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(".sticky-top"));
          i.default(e).each(function (t, e) {
            var n = i.default(e).data("margin-right");
            "undefined" != typeof n &&
              i.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = i.default(document.body).data("padding-right");
          i.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this).data("bs.modal"),
              r = a(
                {},
                Ht,
                i.default(this).data(),
                "object" == typeof e && e ? e : {}
              );
            if (
              (o || ((o = new t(this, r)), i.default(this).data("bs.modal", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](n);
            } else r.show && o.show(n);
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ht;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        o = l.getSelectorFromElement(this);
      o && (e = document.querySelector(o));
      var r = i.default(e).data("bs.modal")
        ? "toggle"
        : a({}, i.default(e).data(), i.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var s = i.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          s.one("hidden.bs.modal", function () {
            i.default(n).is(":visible") && n.focus();
          });
      });
      Bt._jQueryInterface.call(i.default(e), r, this);
    }),
    (i.default.fn.modal = Bt._jQueryInterface),
    (i.default.fn.modal.Constructor = Bt),
    (i.default.fn.modal.noConflict = function () {
      return (i.default.fn.modal = Rt), Bt._jQueryInterface;
    });
  var qt = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Qt = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ut =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Vt(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll("*")),
        a = function (t, n) {
          var i = r[t],
            a = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var s = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[a] || []);
          s.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === qt.indexOf(n) ||
                  Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        s = 0,
        l = r.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Yt = "tooltip",
    zt = i.default.fn[Yt],
    Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Kt = ["sanitize", "whiteList", "sanitizeFn"],
    Gt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    $t = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Jt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Qt,
      popperConfig: null,
    },
    Zt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    te = (function () {
      function t(t, e) {
        if ("undefined" == typeof It)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = i.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                i.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (i.default(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === i.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = i.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            i.default(this.element).trigger(e);
            var n = l.findShadowRoot(this.element),
              o = i.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              a = l.getUID(this.constructor.NAME);
            r.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && i.default(r).addClass("fade");
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              u = this._getAttachment(s);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            i.default(r).data(this.constructor.DATA_KEY, this),
              i.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i.default(r).appendTo(f),
              i.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new It(
                this.element,
                r,
                this._getPopperConfig(u)
              )),
              i.default(r).addClass("show"),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                i.default(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t);
            };
            if (i.default(this.tip).hasClass("fade")) {
              var c = l.getTransitionDurationFromElement(this.tip);
              i.default(this.tip)
                .one(l.TRANSITION_END, d)
                .emulateTransitionEnd(c);
            } else d();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
              "show" !== e._hoverState &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((i.default(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (i.default(n).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .off("mouseover", null, i.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              i.default(this.tip).hasClass("fade"))
            ) {
              var a = l.getTransitionDurationFromElement(n);
              i.default(n).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            i.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            i.default(t).removeClass("fade show");
        }),
        (e.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? i.default(e).parent().is(t) || t.empty().append(e)
            : t.text(i.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return a(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : l.isElement(this.config.container)
            ? i.default(this.config.container)
            : i.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return $t[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              i.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  "hover" === e
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === e
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              i.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            i
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = a({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            i.default(e.getTipElement()).hasClass("show") ||
            "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      "show" === e._hoverState && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = i.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Kt.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = a(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(Xt);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (i.default(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.tooltip"),
              r = "object" == typeof e && e;
            if (
              (o || !/dispose|hide/.test(e)) &&
              (o || ((o = new t(this, r)), n.data("bs.tooltip", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Yt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Zt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gt;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn[Yt] = te._jQueryInterface),
    (i.default.fn[Yt].Constructor = te),
    (i.default.fn[Yt].noConflict = function () {
      return (i.default.fn[Yt] = zt), te._jQueryInterface;
    });
  var ee = "popover",
    ne = i.default.fn[ee],
    ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    oe = a({}, te.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    re = a({}, te.DefaultType, { content: "(string|element|function)" }),
    ae = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    se = (function (t) {
      var e, n;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n);
      var a = o.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = i.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(ie);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }),
        (o._jQueryInterface = function (t) {
          return this.each(function () {
            var e = i.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e ||
                ((e = new o(this, n)), i.default(this).data("bs.popover", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        r(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return oe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return ee;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return ae;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return re;
            },
          },
        ]),
        o
      );
    })(te);
  (i.default.fn[ee] = se._jQueryInterface),
    (i.default.fn[ee].Constructor = se),
    (i.default.fn[ee].noConflict = function () {
      return (i.default.fn[ee] = ne), se._jQueryInterface;
    });
  var le = "scrollspy",
    ue = i.default.fn[le],
    fe = { offset: 10, method: "auto", target: "" },
    de = { offset: "number", method: "string", target: "(string|element)" },
    ce = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          i
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            o = "position" === n ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  r = l.getSelectorFromElement(t);
                if ((r && (e = document.querySelector(r)), e)) {
                  var a = e.getBoundingClientRect();
                  if (a.width || a.height)
                    return [i.default(e)[n]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.scrollspy"),
            i.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = a({}, fe, "object" == typeof t && t ? t : {}))
                .target &&
            l.isElement(t.target)
          ) {
            var e = i.default(t.target).attr("id");
            e || ((e = l.getUID(le)), i.default(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return l.typeCheckConfig(le, t, de), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = i.default(
              [].slice.call(document.querySelectorAll(e.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              n.addClass("active"))
            : (n.addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            i
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.scrollspy");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e && e)),
                i.default(this).data("bs.scrollspy", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return fe;
            },
          },
        ]),
        t
      );
    })();
  i.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = i.default(t[e]);
      ce._jQueryInterface.call(n, n.data());
    }
  }),
    (i.default.fn[le] = ce._jQueryInterface),
    (i.default.fn[le].Constructor = ce),
    (i.default.fn[le].noConflict = function () {
      return (i.default.fn[le] = ue), ce._jQueryInterface;
    });
  var he = i.default.fn.tab,
    pe = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                i.default(this._element).hasClass("active")) ||
              i.default(this._element).hasClass("disabled")
            )
          ) {
            var e,
              n,
              o = i.default(this._element).closest(".nav, .list-group")[0],
              r = l.getSelectorFromElement(this._element);
            if (o) {
              var a =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
            }
            var s = i.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              }),
              u = i.default.Event("show.bs.tab", { relatedTarget: n });
            if (
              (n && i.default(n).trigger(s),
              i.default(this._element).trigger(u),
              !u.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              r && (e = document.querySelector(r)),
                this._activate(this._element, o);
              var f = function () {
                var e = i.default.Event("hidden.bs.tab", {
                    relatedTarget: t._element,
                  }),
                  o = i.default.Event("shown.bs.tab", { relatedTarget: n });
                i.default(n).trigger(e), i.default(t._element).trigger(o);
              };
              e ? this._activate(e, e.parentNode, f) : f();
            }
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var o = this,
            r = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? i.default(e).children(".active")
                : i.default(e).find("> li > .active")
            )[0],
            a = n && r && i.default(r).hasClass("fade"),
            s = function () {
              return o._transitionComplete(t, r, n);
            };
          if (r && a) {
            var u = l.getTransitionDurationFromElement(r);
            i.default(r)
              .removeClass("show")
              .one(l.TRANSITION_END, s)
              .emulateTransitionEnd(u);
          } else s();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            i.default(e).removeClass("active");
            var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
            o && i.default(o).removeClass("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (i.default(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            l.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && i.default(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var r = i.default(t).closest(".dropdown")[0];
            if (r) {
              var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
              i.default(a).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.tab");
            if (
              (o || ((o = new t(this)), n.data("bs.tab", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), pe._jQueryInterface.call(i.default(this), "show");
      }
    ),
    (i.default.fn.tab = pe._jQueryInterface),
    (i.default.fn.tab.Constructor = pe),
    (i.default.fn.tab.noConflict = function () {
      return (i.default.fn.tab = he), pe._jQueryInterface;
    });
  var me = i.default.fn.toast,
    ge = { animation: "boolean", autohide: "boolean", delay: "number" },
    ve = { animation: !0, autohide: !0, delay: 500 },
    _e = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = i.default.Event("show.bs.toast");
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                i.default(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              l.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = l.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(l.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = i.default.Event("hide.bs.toast");
            i.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            i.default(this._element).off("click.dismiss.bs.toast"),
            i.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              ve,
              i.default(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            l.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          i.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add("hide"),
                i.default(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var n = l.getTransitionDurationFromElement(this._element);
            i.default(this._element)
              .one(l.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof e && e)),
                n.data("bs.toast", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](this);
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ge;
            },
          },
          {
            key: "Default",
            get: function () {
              return ve;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.toast = _e._jQueryInterface),
    (i.default.fn.toast.Constructor = _e),
    (i.default.fn.toast.noConflict = function () {
      return (i.default.fn.toast = me), _e._jQueryInterface;
    }),
    (t.Alert = d),
    (t.Button = h),
    (t.Carousel = y),
    (t.Collapse = S),
    (t.Dropdown = Ft),
    (t.Modal = Bt),
    (t.Popover = se),
    (t.Scrollspy = ce),
    (t.Tab = pe),
    (t.Toast = _e),
    (t.Tooltip = te),
    (t.Util = l),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * Swiper 6.7.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 31, 2021
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var i in a)
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function i(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (s) {
        void 0 === e[s]
          ? (e[s] = t[s])
          : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
      });
  }
  var s = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: "" },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }
  var n = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function u(e, t, a) {
    return (u = p()
      ? Reflect.construct
      : function (e, t, a) {
          var i = [null];
          i.push.apply(i, t);
          var s = new (Function.bind.apply(e, i))();
          return a && d(s, a.prototype), s;
        }).apply(null, arguments);
  }
  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function (e) {
      if (
        null === e ||
        ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
      )
        return e;
      var a;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return u(e, arguments, o(this).constructor);
      }
      return (
        (i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(i, e)
      );
    })(e);
  }
  var h = (function (e) {
    var t, a;
    function i(t) {
      var a, i, s;
      return (
        (a = e.call.apply(e, [this].concat(t)) || this),
        (i = (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(a)),
        (s = i.__proto__),
        Object.defineProperty(i, "__proto__", {
          get: function () {
            return s;
          },
          set: function (e) {
            s.__proto__ = e;
          },
        }),
        a
      );
    }
    return (
      (a = e),
      ((t = i).prototype = Object.create(a.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = a),
      i
    );
  })(c(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var a = l(),
      i = r(),
      s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"),
          0 === n.indexOf("<tr") && (o = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
          0 === n.indexOf("<tbody") && (o = "table"),
          0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;
        for (var p = 0; p < d.childNodes.length; p += 1)
          s.push(d.childNodes[p]);
      } else
        s = (function (e, t) {
          if ("string" != typeof e) return [e];
          for (
            var a = [], i = t.querySelectorAll(e), s = 0;
            s < i.length;
            s += 1
          )
            a.push(i[s]);
          return a;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }
    return new h(
      (function (e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
      })(s)
    );
  }
  m.fn = h.prototype;
  var g,
    b,
    y,
    w = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          f(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var a = 0; a < this.length; a += 1)
          if (2 === arguments.length) this[a].setAttribute(e, t);
          else
            for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var a = e.target.dom7EventData || [];
            if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(s))) r.apply(t, a);
            else
              for (var i = m(t).parents(), n = 0; n < i.length; n += 1)
                m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
        function o(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
        for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
          var c = this[u];
          if (s)
            for (d = 0; d < p.length; d += 1) {
              var h = p[d];
              c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []),
                c.dom7LiveListeners[h].push({ listener: r, proxyListener: l }),
                c.addEventListener(h, l, n);
            }
          else
            for (d = 0; d < p.length; d += 1) {
              var v = p[d];
              c.dom7Listeners || (c.dom7Listeners = {}),
                c.dom7Listeners[v] || (c.dom7Listeners[v] = []),
                c.dom7Listeners[v].push({ listener: r, proxyListener: o }),
                c.addEventListener(v, o, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
        for (var l = i.split(" "), o = 0; o < l.length; o += 1)
          for (var d = l[o], p = 0; p < this.length; p += 1) {
            var u = this[p],
              c = void 0;
            if (
              (!s && u.dom7Listeners
                ? (c = u.dom7Listeners[d])
                : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]),
              c && c.length)
            )
              for (var h = c.length - 1; h >= 0; h -= 1) {
                var v = c[h];
                (r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (u.removeEventListener(d, v.proxyListener, n),
                    c.splice(h, 1))
                  : r ||
                    (u.removeEventListener(d, v.proxyListener, n),
                    c.splice(h, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = l(), t = arguments.length, a = new Array(t), i = 0;
          i < t;
          i++
        )
          a[i] = arguments[i];
        for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
          for (var o = s[n], d = 0; d < this.length; d += 1) {
            var p = this[d];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (p.dom7EventData = a.filter(function (e, t) {
                return t > 0;
              })),
                p.dispatchEvent(u),
                (p.dom7EventData = []),
                delete p.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on("transitionend", function a(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", a));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
          return { top: i.top + d - n, left: i.left + p - o };
        }
        return null;
      },
      css: function (e, t) {
        var a,
          i = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1)
              for (var s in e) this[a].style[s] = e[s];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, a) {
              e.apply(t, [t, a]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === i) return n === i;
        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
            if (t[a] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var a = t + e;
          return m(a < 0 ? [] : [this[a]]);
        }
        return m([this[e]]);
      },
      append: function () {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          for (var i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              var s = t.createElement("div");
              for (s.innerHTML = e; s.firstChild; )
                this[i].appendChild(s.firstChild);
            } else if (e instanceof h)
              for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          a,
          i = r();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var s = i.createElement("div");
            for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          } else if (e instanceof h)
            for (a = 0; a < e.length; a += 1)
              this[t].insertBefore(e[a], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([]);
      },
      nextAll: function (e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.nextElementSibling; ) {
          var i = a.nextElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.previousElementSibling; ) {
          var i = a.previousElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      parent: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          null !== this[a].parentNode &&
            (e
              ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
              : t.push(this[a].parentNode));
        return m(t);
      },
      parents: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].parentNode; i; )
            e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        return m(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          try {
            var i = this[a].querySelectorAll(e);
          } catch (t) {
            console.log(e);
          }
          for (var s = 0; s < i.length; s += 1) t.push(i[s]);
        }
        return m(t);
      },
      children: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].children, s = 0; s < i.length; s += 1)
            (e && !m(i[s]).is(e)) || t.push(i[s]);
        return m(t);
      },
      filter: function (e) {
        return m(f(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
      i,
      s,
      r = l(),
      n = (function (e) {
        var t,
          a = l();
        return (
          a.getComputedStyle && (t = a.getComputedStyle(e, null)),
          !t && e.currentStyle && (t = e.currentStyle),
          t || (t = e.style),
          t
        );
      })(e);
    return (
      r.WebKitCSSMatrix
        ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
            (i = i
              .split(", ")
              .map(function (e) {
                return e.replace(",", ".");
              })
              .join(", ")),
          (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
        : (a = (s =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,"))
            .toString()
            .split(",")),
      "x" === t &&
        (i = r.WebKitCSSMatrix
          ? s.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = r.WebKitCSSMatrix
          ? s.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function C(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function S() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"],
        a = 1;
      a < arguments.length;
      a += 1
    ) {
      var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i)
        for (
          var s = Object.keys(Object(i)).filter(function (e) {
              return t.indexOf(e) < 0;
            }),
            r = 0,
            n = s.length;
          r < n;
          r += 1
        ) {
          var l = s[r],
            o = Object.getOwnPropertyDescriptor(i, l);
          void 0 !== o &&
            o.enumerable &&
            (C(e[l]) && C(i[l])
              ? i[l].__swiper__
                ? (e[l] = i[l])
                : S(e[l], i[l])
              : !C(e[l]) && C(i[l])
              ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : S(e[l], i[l]))
              : (e[l] = i[l]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) &&
        Object.keys(t[a]).forEach(function (i) {
          "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
        }),
        (e[a] = t[a]);
    });
  }
  function z(e) {
    return (
      void 0 === e && (e = ""),
      "." +
        e
          .trim()
          .replace(/([\.:\/])/g, "\\$1")
          .replace(/ /g, ".")
    );
  }
  function P(e, t, a, i) {
    var s = r();
    return (
      a &&
        Object.keys(i).forEach(function (a) {
          if (!t[a] && !0 === t.auto) {
            var r = s.createElement("div");
            (r.className = i[a]), e.append(r), (t[a] = r);
          }
        }),
      t
    );
  }
  function k() {
    return (
      g ||
        (g = (function () {
          var e = l(),
            t = r();
          return {
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              "maxTouchPoints" in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, a);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      g
    );
  }
  function $(e) {
    return (
      void 0 === e && (e = {}),
      b ||
        (b = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
            a = k(),
            i = l(),
            s = i.navigator.platform,
            r = t || i.navigator.userAgent,
            n = { ios: !1, android: !1 },
            o = i.screen.width,
            d = i.screen.height,
            p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            u = r.match(/(iPad).*OS\s([\d_]+)/),
            c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === s,
            f = "MacIntel" === s;
          return (
            !u &&
              f &&
              a.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(o + "x" + d) >= 0 &&
              ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
              (f = !1)),
            p && !v && ((n.os = "android"), (n.android = !0)),
            (u || h || c) && ((n.os = "ios"), (n.ios = !0)),
            n
          );
        })(e)),
      b
    );
  }
  function L() {
    return (
      y ||
        (y = (function () {
          var e,
            t = l();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          };
        })()),
      y
    );
  }
  Object.keys(w).forEach(function (e) {
    Object.defineProperty(m.fn, e, { value: w[e], writable: !0 });
  });
  var I = {
      name: "resize",
      create: function () {
        var e = this;
        S(e, {
          resize: {
            observer: null,
            createObserver: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                ((e.resize.observer = new ResizeObserver(function (t) {
                  var a = e.width,
                    i = e.height,
                    s = a,
                    r = i;
                  t.forEach(function (t) {
                    var a = t.contentBoxSize,
                      i = t.contentRect,
                      n = t.target;
                    (n && n !== e.el) ||
                      ((s = i ? i.width : (a[0] || a).inlineSize),
                      (r = i ? i.height : (a[0] || a).blockSize));
                  }),
                    (s === a && r === i) || e.resize.resizeHandler();
                })),
                e.resize.observer.observe(e.el));
            },
            removeObserver: function () {
              e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
            },
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver
            ? e.resize.createObserver()
            : (t.addEventListener("resize", e.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              ));
        },
        destroy: function (e) {
          var t = l();
          e.resize.removeObserver(),
            t.removeEventListener("resize", e.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
      },
    },
    O = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (
            e
          ) {
            if (1 !== e.length) {
              var t = function () {
                i.emit("observerUpdate", e[0]);
              };
              a.requestAnimationFrame
                ? a.requestAnimationFrame(t)
                : a.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s);
      },
      init: function () {
        var e = this;
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    A = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        M(this, { observer: t({}, O, { observers: [] }) });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        },
      },
    };
  function D(e) {
    var t = this,
      a = r(),
      i = l(),
      s = t.touchEventsData,
      n = t.params,
      o = t.touches;
    if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length)
        if (
          ((s.isTouchEvent = "touchstart" === d.type),
          s.isTouchEvent || !("which" in d) || 3 !== d.which)
        )
          if (!(!s.isTouchEvent && "button" in d && d.button > 0))
            if (!s.isTouched || !s.isMoved)
              if (
                (!!n.noSwipingClass &&
                  "" !== n.noSwipingClass &&
                  d.target &&
                  d.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (p = m(e.path[0])),
                n.noSwiping &&
                  p.closest(
                    n.noSwipingSelector
                      ? n.noSwipingSelector
                      : "." + n.noSwipingClass
                  )[0])
              )
                t.allowClick = !0;
              else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                (o.currentX =
                  "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
                  (o.currentY =
                    "touchstart" === d.type
                      ? d.targetTouches[0].pageY
                      : d.pageY);
                var u = o.currentX,
                  c = o.currentY,
                  h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                  v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (h && (u <= v || u >= i.innerWidth - v)) {
                  if ("prevent" !== h) return;
                  e.preventDefault();
                }
                if (
                  (S(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (o.startX = u),
                  (o.startY = c),
                  (s.touchStartTime = x()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  n.threshold > 0 && (s.allowThresholdMove = !1),
                  "touchstart" !== d.type)
                ) {
                  var f = !0;
                  p.is(s.formElements) && (f = !1),
                    a.activeElement &&
                      m(a.activeElement).is(s.formElements) &&
                      a.activeElement !== p[0] &&
                      a.activeElement.blur();
                  var g = f && t.allowTouchMove && n.touchStartPreventDefault;
                  (!n.touchStartForcePreventDefault && !g) ||
                    p[0].isContentEditable ||
                    d.preventDefault();
                }
                t.emit("touchStart", d);
              }
    }
  }
  function N(e) {
    var t = r(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      n = a.touches,
      l = a.rtlTranslate;
    if (a.enabled) {
      var o = e;
      if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var d =
              "touchmove" === o.type &&
              o.targetTouches &&
              (o.targetTouches[0] || o.changedTouches[0]),
            p = "touchmove" === o.type ? d.pageX : o.pageX,
            u = "touchmove" === o.type ? d.pageY : o.pageY;
          if (o.preventedByNestedSwiper)
            return (n.startX = p), void (n.startY = u);
          if (!a.allowTouchMove)
            return (
              (a.allowClick = !1),
              void (
                i.isTouched &&
                (S(n, { startX: p, startY: u, currentX: p, currentY: u }),
                (i.touchStartTime = x()))
              )
            );
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (a.isVertical()) {
              if (
                (u < n.startY && a.translate <= a.maxTranslate()) ||
                (u > n.startY && a.translate >= a.minTranslate())
              )
                return (i.isTouched = !1), void (i.isMoved = !1);
            } else if (
              (p < n.startX && a.translate <= a.maxTranslate()) ||
              (p > n.startX && a.translate >= a.minTranslate())
            )
              return;
          if (
            i.isTouchEvent &&
            t.activeElement &&
            o.target === t.activeElement &&
            m(o.target).is(i.formElements)
          )
            return (i.isMoved = !0), void (a.allowClick = !1);
          if (
            (i.allowTouchCallbacks && a.emit("touchMove", o),
            !(o.targetTouches && o.targetTouches.length > 1))
          ) {
            (n.currentX = p), (n.currentY = u);
            var c = n.currentX - n.startX,
              h = n.currentY - n.startY;
            if (
              !(
                a.params.threshold &&
                Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold
              )
            ) {
              var v;
              if (void 0 === i.isScrolling)
                (a.isHorizontal() && n.currentY === n.startY) ||
                (a.isVertical() && n.currentX === n.startX)
                  ? (i.isScrolling = !1)
                  : c * c + h * h >= 25 &&
                    ((v =
                      (180 * Math.atan2(Math.abs(h), Math.abs(c))) / Math.PI),
                    (i.isScrolling = a.isHorizontal()
                      ? v > s.touchAngle
                      : 90 - v > s.touchAngle));
              if (
                (i.isScrolling && a.emit("touchMoveOpposite", o),
                void 0 === i.startMoving &&
                  ((n.currentX === n.startX && n.currentY === n.startY) ||
                    (i.startMoving = !0)),
                i.isScrolling)
              )
                i.isTouched = !1;
              else if (i.startMoving) {
                (a.allowClick = !1),
                  !s.cssMode && o.cancelable && o.preventDefault(),
                  s.touchMoveStopPropagation &&
                    !s.nested &&
                    o.stopPropagation(),
                  i.isMoved ||
                    (s.loop && a.loopFix(),
                    (i.startTranslate = a.getTranslate()),
                    a.setTransition(0),
                    a.animating &&
                      a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (i.allowMomentumBounce = !1),
                    !s.grabCursor ||
                      (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                      a.setGrabCursor(!0),
                    a.emit("sliderFirstMove", o)),
                  a.emit("sliderMove", o),
                  (i.isMoved = !0);
                var f = a.isHorizontal() ? c : h;
                (n.diff = f),
                  (f *= s.touchRatio),
                  l && (f = -f),
                  (a.swipeDirection = f > 0 ? "prev" : "next"),
                  (i.currentTranslate = f + i.startTranslate);
                var g = !0,
                  b = s.resistanceRatio;
                if (
                  (s.touchReleaseOnEdges && (b = 0),
                  f > 0 && i.currentTranslate > a.minTranslate()
                    ? ((g = !1),
                      s.resistance &&
                        (i.currentTranslate =
                          a.minTranslate() -
                          1 +
                          Math.pow(
                            -a.minTranslate() + i.startTranslate + f,
                            b
                          )))
                    : f < 0 &&
                      i.currentTranslate < a.maxTranslate() &&
                      ((g = !1),
                      s.resistance &&
                        (i.currentTranslate =
                          a.maxTranslate() +
                          1 -
                          Math.pow(
                            a.maxTranslate() - i.startTranslate - f,
                            b
                          ))),
                  g && (o.preventedByNestedSwiper = !0),
                  !a.allowSlideNext &&
                    "next" === a.swipeDirection &&
                    i.currentTranslate < i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  !a.allowSlidePrev &&
                    "prev" === a.swipeDirection &&
                    i.currentTranslate > i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  a.allowSlidePrev ||
                    a.allowSlideNext ||
                    (i.currentTranslate = i.startTranslate),
                  s.threshold > 0)
                ) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove)
                    return (
                      (i.allowThresholdMove = !0),
                      (n.startX = n.currentX),
                      (n.startY = n.currentY),
                      (i.currentTranslate = i.startTranslate),
                      void (n.diff = a.isHorizontal()
                        ? n.currentX - n.startX
                        : n.currentY - n.startY)
                    );
                }
                s.followFinger &&
                  !s.cssMode &&
                  ((s.freeMode ||
                    s.watchSlidesProgress ||
                    s.watchSlidesVisibility) &&
                    (a.updateActiveIndex(), a.updateSlidesClasses()),
                  s.freeMode &&
                    (0 === i.velocities.length &&
                      i.velocities.push({
                        position: n[a.isHorizontal() ? "startX" : "startY"],
                        time: i.touchStartTime,
                      }),
                    i.velocities.push({
                      position: n[a.isHorizontal() ? "currentX" : "currentY"],
                      time: x(),
                    })),
                  a.updateProgress(i.currentTranslate),
                  a.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
  }
  function G(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid;
    if (t.enabled) {
      var d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        a.allowTouchCallbacks && t.emit("touchEnd", d),
        (a.allowTouchCallbacks = !1),
        !a.isTouched)
      )
        return (
          a.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (a.isMoved = !1),
          void (a.startMoving = !1)
        );
      i.grabCursor &&
        a.isMoved &&
        a.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      var p,
        u = x(),
        c = u - a.touchStartTime;
      if (
        (t.allowClick &&
          (t.updateClickedSlide(d),
          t.emit("tap click", d),
          c < 300 &&
            u - a.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d)),
        (a.lastClickTime = x()),
        E(function () {
          t.destroyed || (t.allowClick = !0);
        }),
        !a.isTouched ||
          !a.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          a.currentTranslate === a.startTranslate)
      )
        return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
      if (
        ((a.isTouched = !1),
        (a.isMoved = !1),
        (a.startMoving = !1),
        (p = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -a.currentTranslate),
        !i.cssMode)
      )
        if (i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate())
            return void (t.slides.length < o.length
              ? t.slideTo(o.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var h = a.velocities.pop(),
                v = a.velocities.pop(),
                f = h.position - v.position,
                m = h.time - v.time;
              (t.velocity = f / m),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (m > 150 || x() - h.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= i.freeModeMomentumVelocityRatio),
              (a.velocities.length = 0);
            var g = 1e3 * i.freeModeMomentumRatio,
              b = t.velocity * g,
              y = t.translate + b;
            r && (y = -y);
            var w,
              T,
              C = !1,
              S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                  (w = t.maxTranslate()),
                  (C = !0),
                  (a.allowMomentumBounce = !0))
                : (y = t.maxTranslate()),
                i.loop && i.centeredSlides && (T = !0);
            else if (y > t.minTranslate())
              i.freeModeMomentumBounce
                ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                  (w = t.minTranslate()),
                  (C = !0),
                  (a.allowMomentumBounce = !0))
                : (y = t.minTranslate()),
                i.loop && i.centeredSlides && (T = !0);
            else if (i.freeModeSticky) {
              for (var M, z = 0; z < o.length; z += 1)
                if (o[z] > -y) {
                  M = z;
                  break;
                }
              y = -(y =
                Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) ||
                "next" === t.swipeDirection
                  ? o[M]
                  : o[M - 1]);
            }
            if (
              (T &&
                t.once("transitionEnd", function () {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((g = r
                  ? Math.abs((-y - t.translate) / t.velocity)
                  : Math.abs((y - t.translate) / t.velocity)),
                i.freeModeSticky)
              ) {
                var P = Math.abs((r ? -y : y) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
                g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && C
              ? (t.updateProgress(w),
                t.setTransition(g),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                n.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    a.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(i.speed),
                    setTimeout(function () {
                      t.setTranslate(w),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(y),
                t.setTransition(g),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else {
            if (i.freeModeSticky) return void t.slideToClosest();
            i.freeMode && t.emit("_freeModeNoMomentumRelease");
          }
          (!i.freeModeMomentum || c >= i.longSwipesMs) &&
            (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        } else {
          for (
            var $ = 0, L = t.slidesSizesGrid[0], I = 0;
            I < l.length;
            I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
          ) {
            var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== l[I + O]
              ? p >= l[I] && p < l[I + O] && (($ = I), (L = l[I + O] - l[I]))
              : p >= l[I] && (($ = I), (L = l[l.length - 1] - l[l.length - 2]));
          }
          var A = (p - l[$]) / L,
            D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          if (c > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)),
              "prev" === t.swipeDirection &&
                (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation &&
            (d.target === t.navigation.nextEl ||
              d.target === t.navigation.prevEl)
              ? d.target === t.navigation.nextEl
                ? t.slideTo($ + D)
                : t.slideTo($)
              : ("next" === t.swipeDirection && t.slideTo($ + D),
                "prev" === t.swipeDirection && t.slideTo($));
          }
        }
    }
  }
  function B() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  function H(e) {
    var t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function X() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
    if (e.enabled) {
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = a
              ? t.scrollWidth - t.offsetWidth - t.scrollLeft
              : -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      var i = e.maxTranslate() - e.minTranslate();
      (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
        e.updateProgress(a ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
  }
  var Y = !1;
  function R() {}
  var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      createElements: !1,
      enabled: !0,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    },
    V = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a];
              i.params && S(e, i.params);
            });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a],
                s = e[a] || {};
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(function (e) {
                  t.on(e, i.on[e]);
                }),
                i.create && i.create.bind(t)(s);
            });
        },
      },
      eventsEmitter: {
        on: function (e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var s = a ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t);
            }),
            i
          );
        },
        once: function (e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
              r[n] = arguments[n];
            t.apply(i, r);
          }
          return (s.__emitterProxy = t), i.on(e, s, a);
        },
        onAny: function (e, t) {
          var a = this;
          if ("function" != typeof e) return a;
          var i = t ? "unshift" : "push";
          return (
            a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var a = t.eventsAnyListeners.indexOf(e);
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
        },
        off: function (e, t) {
          var a = this;
          return a.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (a.eventsListeners[e] = [])
                  : a.eventsListeners[e] &&
                    a.eventsListeners[e].forEach(function (i, s) {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        a.eventsListeners[e].splice(s, 1);
                    });
              }),
              a)
            : a;
        },
        emit: function () {
          var e,
            t,
            a,
            i = this;
          if (!i.eventsListeners) return i;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
            : ((e = r[0].events), (t = r[0].data), (a = r[0].context || i)),
            t.unshift(a);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(a, [e].concat(t));
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(a, t);
                  });
            }),
            i
          );
        },
      },
      update: {
        updateSize: function () {
          var e,
            t,
            a = this,
            i = a.$el;
          (e =
            void 0 !== a.params.width && null !== a.params.width
              ? a.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== a.params.height && null !== a.params.height
                ? a.params.height
                : i[0].clientHeight),
            (0 === e && a.isHorizontal()) ||
              (0 === t && a.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              S(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function a(e, a) {
            return parseFloat(e.getPropertyValue(t(a)) || 0);
          }
          var i = e.params,
            s = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [],
            f = i.slidesOffsetBefore;
          "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
          var m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            y = i.spaceBetween,
            w = -f,
            E = 0,
            x = 0;
          if (void 0 !== r) {
            var T, C;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * r),
              (e.virtualSize = -y),
              n
                ? p.css({ marginLeft: "", marginTop: "" })
                : p.css({ marginRight: "", marginBottom: "" }),
              i.slidesPerColumn > 1 &&
                ((T =
                  Math.floor(u / i.slidesPerColumn) ===
                  u / e.params.slidesPerColumn
                    ? u
                    : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                "auto" !== i.slidesPerView &&
                  "row" === i.slidesPerColumnFill &&
                  (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
            for (
              var M,
                z,
                P,
                k = i.slidesPerColumn,
                $ = T / k,
                L = Math.floor(u / i.slidesPerColumn),
                I = 0;
              I < u;
              I += 1
            ) {
              C = 0;
              var O = p.eq(I);
              if (i.slidesPerColumn > 1) {
                var A = void 0,
                  D = void 0,
                  N = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var G = Math.floor(
                      I / (i.slidesPerGroup * i.slidesPerColumn)
                    ),
                    B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                    H =
                      0 === G
                        ? i.slidesPerGroup
                        : Math.min(
                            Math.ceil((u - G * k * i.slidesPerGroup) / k),
                            i.slidesPerGroup
                          );
                  (A =
                    (D =
                      B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) +
                    (N * T) / k),
                    O.css({
                      "-webkit-box-ordinal-group": A,
                      "-moz-box-ordinal-group": A,
                      "-ms-flex-order": A,
                      "-webkit-order": A,
                      order: A,
                    });
                } else
                  "column" === i.slidesPerColumnFill
                    ? ((N = I - (D = Math.floor(I / k)) * k),
                      (D > L || (D === L && N === k - 1)) &&
                        (N += 1) >= k &&
                        ((N = 0), (D += 1)))
                    : (D = I - (N = Math.floor(I / $)) * $);
                O.css(
                  t("margin-top"),
                  0 !== N && i.spaceBetween && i.spaceBetween + "px"
                );
              }
              if ("none" !== O.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var X = getComputedStyle(O[0]),
                    Y = O[0].style.transform,
                    R = O[0].style.webkitTransform;
                  if (
                    (Y && (O[0].style.transform = "none"),
                    R && (O[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                  else {
                    var W = a(X, "width"),
                      V = a(X, "padding-left"),
                      F = a(X, "padding-right"),
                      _ = a(X, "margin-left"),
                      q = a(X, "margin-right"),
                      j = X.getPropertyValue("box-sizing");
                    if (j && "border-box" === j) C = W + _ + q;
                    else {
                      var U = O[0],
                        K = U.clientWidth;
                      C = W + V + F + _ + q + (U.offsetWidth - K);
                    }
                  }
                  Y && (O[0].style.transform = Y),
                    R && (O[0].style.webkitTransform = R),
                    i.roundLengths && (C = Math.floor(C));
                } else
                  (C = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
                    i.roundLengths && (C = Math.floor(C)),
                    p[I] && (p[I].style[t("width")] = C + "px");
                p[I] && (p[I].swiperSlideSize = C),
                  v.push(C),
                  i.centeredSlides
                    ? ((w = w + C / 2 + E / 2 + y),
                      0 === E && 0 !== I && (w = w - r / 2 - y),
                      0 === I && (w = w - r / 2 - y),
                      Math.abs(w) < 0.001 && (w = 0),
                      i.roundLengths && (w = Math.floor(w)),
                      x % i.slidesPerGroup == 0 && c.push(w),
                      h.push(w))
                    : (i.roundLengths && (w = Math.floor(w)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && c.push(w),
                      h.push(w),
                      (w = w + C + y)),
                  (e.virtualSize += C + y),
                  (E = C),
                  (x += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + m),
              n &&
                l &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                s.css({ width: e.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize)
            )
              s.css(
                (((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"),
                z)
              );
            if (i.slidesPerColumn > 1)
              if (
                ((e.virtualSize = (C + i.spaceBetween) * T),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / i.slidesPerColumn) -
                  i.spaceBetween),
                s.css(
                  (((P = {})[t("width")] =
                    e.virtualSize + i.spaceBetween + "px"),
                  P)
                ),
                i.centeredSlides)
              ) {
                M = [];
                for (var Z = 0; Z < c.length; Z += 1) {
                  var J = c[Z];
                  i.roundLengths && (J = Math.floor(J)),
                    c[Z] < e.virtualSize + c[0] && M.push(J);
                }
                c = M;
              }
            if (!i.centeredSlides) {
              M = [];
              for (var Q = 0; Q < c.length; Q += 1) {
                var ee = c[Q];
                i.roundLengths && (ee = Math.floor(ee)),
                  c[Q] <= e.virtualSize - r && M.push(ee);
              }
              (c = M),
                Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) >
                  1 && c.push(e.virtualSize - r);
            }
            if ((0 === c.length && (c = [0]), 0 !== i.spaceBetween)) {
              var te,
                ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
              p.filter(function (e, t) {
                return !i.cssMode || t !== p.length - 1;
              }).css((((te = {})[ae] = y + "px"), te));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              v.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var se = (ie -= i.spaceBetween) - r;
              c = c.map(function (e) {
                return e < 0 ? -f : e > se ? se + m : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var re = 0;
              if (
                (v.forEach(function (e) {
                  re += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (re -= i.spaceBetween) < r)
              ) {
                var ne = (r - re) / 2;
                c.forEach(function (e, t) {
                  c[t] = e - ne;
                }),
                  h.forEach(function (e, t) {
                    h[t] = e + ne;
                  });
              }
            }
            S(e, { slides: p, snapGrid: c, slidesGrid: h, slidesSizesGrid: v }),
              u !== d && e.emit("slidesLengthChange"),
              c.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            a = this,
            i = [],
            s = a.virtual && a.params.virtual.enabled,
            r = 0;
          "number" == typeof e
            ? a.setTransition(e)
            : !0 === e && a.setTransition(a.params.speed);
          var n = function (e) {
            return s
              ? a.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : a.slides.eq(e)[0];
          };
          if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
            if (a.params.centeredSlides)
              a.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var l = a.activeIndex + t;
                if (l > a.slides.length && !s) break;
                i.push(n(l));
              }
          else i.push(n(a.activeIndex));
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var o = i[t].offsetHeight;
              r = o > r ? o : r;
            }
          r && a.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e),
              i.removeClass(a.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var n = 0; n < i.length; n += 1) {
              var l = i[n],
                o =
                  (r +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    l.swiperSlideOffset) /
                  (l.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
                ((d >= 0 && d < t.size - 1) ||
                  (p > 1 && p <= t.size) ||
                  (d <= 0 && p >= t.size)) &&
                  (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(n),
                  i.eq(n).addClass(a.slideVisibleClass));
              }
              l.progress = s ? -o : o;
            }
            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * a) || 0;
          }
          var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
          0 === s
            ? ((r = 0), (n = !0), (l = !0))
            : ((n = (r = (e - t.minTranslate()) / s) <= 0), (l = r >= 1)),
            S(t, { progress: r, isBeginning: n, isEnd: l }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit("reachBeginning toEdge"),
            l && !d && t.emit("reachEnd toEdge"),
            ((o && !n) || (d && !l)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
          a.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (e = l
              ? t.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
                )
              : a.eq(r)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var o = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
          var d = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              d.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;
          if (void 0 === p) {
            for (var u = 0; u < s.length; u += 1)
              void 0 !== s[u + 1]
                ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
                  ? (p = u)
                  : i >= s[u] && i < s[u + 1] && (p = u + 1)
                : i >= s[u] && (p = u);
            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (r.indexOf(i) >= 0) t = r.indexOf(i);
          else {
            var c = Math.min(n.slidesPerGroupSkip, p);
            t = c + Math.floor((p - c) / n.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), p !== l)) {
            var h = parseInt(
              a.slides.eq(p).attr("data-swiper-slide-index") || p,
              10
            );
            S(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p,
            }),
              a.emit("activeIndexChange"),
              a.emit("snapIndexChange"),
              o !== h && a.emit("realIndexChange"),
              (a.initialized || a.params.runCallbacksOnInit) &&
                a.emit("slideChange");
          } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
          if (s)
            for (var n = 0; n < a.slides.length; n += 1)
              if (a.slides[n] === s) {
                (r = !0), (t = n);
                break;
              }
          if (!s || !r)
            return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
          (a.clickedSlide = s),
            a.virtual && a.params.virtual.enabled
              ? (a.clickedIndex = parseInt(
                  m(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (a.clickedIndex = t),
            i.slideToClickedSlide &&
              void 0 !== a.clickedIndex &&
              a.clickedIndex !== a.activeIndex &&
              a.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -s : s;
          if (a.cssMode) return s;
          var n = T(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
          a.isHorizontal() ? (o = i ? -e : e) : (d = e),
            s.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            s.cssMode
              ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  a.isHorizontal() ? -o : -d)
              : s.virtualTranslate ||
                r.transform("translate3d(" + o + "px, " + d + "px, 0px)"),
            (a.previousTranslate = a.translate),
            (a.translate = a.isHorizontal() ? o : d);
          var p = a.maxTranslate() - a.minTranslate();
          (0 === p ? 0 : (e - a.minTranslate()) / p) !== l &&
            a.updateProgress(e),
            a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, a, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            void 0 === i && (i = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            p = r.maxTranslate();
          if (
            ((o = i && e > d ? d : i && e < p ? p : e),
            r.updateProgress(o),
            n.cssMode)
          ) {
            var u,
              c = r.isHorizontal();
            if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;
            else if (l.scrollTo)
              l.scrollTo(
                (((u = {})[c ? "left" : "top"] = -o),
                (u.behavior = "smooth"),
                u)
              );
            else l[c ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(o),
                a &&
                  (r.emit("beforeTransitionStart", t, s),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(o),
                a &&
                  (r.emit("beforeTransitionStart", t, s),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        a && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e),
            a.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (
              (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
              a.emit("transitionStart"),
              e && i !== r)
            ) {
              if ("reset" === n)
                return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"),
                "next" === n
                  ? a.emit("slideNextTransitionStart")
                  : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;
          if (((a.animating = !1), !r.cssMode)) {
            a.setTransition(0);
            var n = t;
            if (
              (n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
              a.emit("transitionEnd"),
              e && i !== s)
            ) {
              if ("reset" === n) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"),
                "next" === n
                  ? a.emit("slideNextTransitionEnd")
                  : a.emit("slidePrevTransitionEnd");
            }
          }
        },
      },
      slide: {
        slideTo: function (e, t, a, i, s) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                "] given."
            );
          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  "] given."
              );
            e = r;
          }
          var n = this,
            l = e;
          l < 0 && (l = 0);
          var o = n.params,
            d = n.snapGrid,
            p = n.slidesGrid,
            u = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate,
            v = n.wrapperEl,
            f = n.enabled;
          if (
            (n.animating && o.preventInteractionOnTransition) ||
            (!f && !i && !s)
          )
            return !1;
          var m = Math.min(n.params.slidesPerGroupSkip, l),
            g = m + Math.floor((l - m) / n.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1),
            (c || o.initialSlide || 0) === (u || 0) &&
              a &&
              n.emit("beforeSlideChangeStart");
          var b,
            y = -d[g];
          if ((n.updateProgress(y), o.normalizeSlideIndex))
            for (var w = 0; w < p.length; w += 1) {
              var E = -Math.floor(100 * y),
                x = Math.floor(100 * p[w]),
                T = Math.floor(100 * p[w + 1]);
              void 0 !== p[w + 1]
                ? E >= x && E < T - (T - x) / 2
                  ? (l = w)
                  : E >= x && E < T && (l = w + 1)
                : E >= x && (l = w);
            }
          if (n.initialized && l !== c) {
            if (!n.allowSlideNext && y < n.translate && y < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              y > n.translate &&
              y > n.maxTranslate() &&
              (c || 0) !== l
            )
              return !1;
          }
          if (
            ((b = l > c ? "next" : l < c ? "prev" : "reset"),
            (h && -y === n.translate) || (!h && y === n.translate))
          )
            return (
              n.updateActiveIndex(l),
              o.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== o.effect && n.setTranslate(y),
              "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)),
              !1
            );
          if (o.cssMode) {
            var C,
              S = n.isHorizontal(),
              M = -y;
            if ((h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t))
              v[S ? "scrollLeft" : "scrollTop"] = M;
            else if (v.scrollTo)
              v.scrollTo(
                (((C = {})[S ? "left" : "top"] = M), (C.behavior = "smooth"), C)
              );
            else v[S ? "scrollLeft" : "scrollTop"] = M;
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(y),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, b),
                n.transitionEnd(a, b))
              : (n.setTransition(t),
                n.setTranslate(y),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, b),
                n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(a, b));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, a, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
          var s = this,
            r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
        },
        slideNext: function (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating;
          if (!i.enabled) return i;
          var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + n, e, t, a);
        },
        slidePrev: function (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
          if (!i.enabled) return i;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p = d(o ? i.translate : -i.translate),
            u = n.map(function (e) {
              return d(e);
            });
          n[u.indexOf(p)];
          var c,
            h = n[u.indexOf(p) - 1];
          return (
            void 0 === h &&
              s.cssMode &&
              n.forEach(function (e) {
                !h && p >= e && (h = e);
              }),
            void 0 !== h && (c = l.indexOf(h)) < 0 && (c = i.activeIndex - 1),
            i.slideTo(c, e, t, a)
          );
        },
        slideReset: function (e, t, a) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, a)
          );
        },
        slideToClosest: function (e, t, a, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;
          if (o >= s.snapGrid[l]) {
            var d = s.snapGrid[l];
            o - d > (s.snapGrid[l + 1] - d) * i &&
              (r += s.params.slidesPerGroup);
          } else {
            var p = s.snapGrid[l - 1];
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, s.slidesGrid.length - 1)),
            s.slideTo(r, e, t, a)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s =
              "auto" === a.slidesPerView
                ? t.slidesPerViewDynamic()
                : a.slidesPerView,
            r = t.clickedIndex;
          if (a.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              a.centeredSlides
                ? r < t.loopedSlides - s / 2 ||
                  r > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - s
                ? (t.loopFix(),
                  (r = i
                    .children(
                      "." +
                        a.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        a.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  E(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
          i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var s = i.children("." + a.slideClass);
          if (a.loopFillGroupWithBlank) {
            var n = a.slidesPerGroup - (s.length % a.slidesPerGroup);
            if (n !== a.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(
                  a.slideClass + " " + a.slideBlankClass
                );
                i.append(o);
              }
              s = i.children("." + a.slideClass);
            }
          }
          "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(a.loopedSlides || a.slidesPerView, 10)
            )),
            (e.loopedSlides += a.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          var d = [],
            p = [];
          s.each(function (t, a) {
            var i = m(t);
            a < e.loopedSlides && p.push(t),
              a < s.length && a >= s.length - e.loopedSlides && d.push(t),
              i.attr("data-swiper-slide-index", a);
          });
          for (var u = 0; u < p.length; u += 1)
            i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (var c = d.length - 1; c >= 0; c -= 1)
            i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -l[a] - e.getTranslate();
          if (a < s)
            (t = i.length - 3 * s + a),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
          else if (a >= i.length - s) {
            (t = -i.length + a + s),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
          t
            .children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                ",." +
                a.slideClass +
                "." +
                a.slideBlankClass
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            var a = t.el;
            (a.style.cursor = "move"),
              (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (a.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = "");
        },
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this,
            a = t.$wrapperEl,
            i = t.params;
          if (
            (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
          else a.append(e);
          i.loop && t.loopCreate(),
            (i.observer && t.support.observer) || t.update();
        },
        prependSlide: function (e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop && t.loopDestroy();
          var r = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
            r = s + e.length;
          } else i.prepend(e);
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            t.slideTo(r, 0, !1);
        },
        addSlide: function (e, t) {
          var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
          s.loop &&
            ((r -= a.loopedSlides),
            a.loopDestroy(),
            (a.slides = i.children("." + s.slideClass)));
          var n = a.slides.length;
          if (e <= 0) a.prependSlide(t);
          else if (e >= n) a.appendSlide(t);
          else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              var p = a.slides.eq(d);
              p.remove(), o.unshift(p);
            }
            if ("object" == typeof t && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
              l = r > e ? r + t.length : r;
            } else i.append(t);
            for (var c = 0; c < o.length; c += 1) i.append(o[c]);
            s.loop && a.loopCreate(),
              (s.observer && a.support.observer) || a.update(),
              s.loop
                ? a.slideTo(l + a.loopedSlides, 0, !1)
                : a.slideTo(l, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop &&
            ((s -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = i.children("." + a.slideClass)));
          var r,
            n = s;
          if ("object" == typeof e && "length" in e) {
            for (var l = 0; l < e.length; l += 1)
              (r = e[l]),
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1);
            n = Math.max(n, 0);
          } else
            (r = e),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1),
              (n = Math.max(n, 0));
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      events: {
        attachEvents: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
          (e.onTouchStart = D.bind(e)),
            (e.onTouchMove = N.bind(e)),
            (e.onTouchEnd = G.bind(e)),
            a.cssMode && (e.onScroll = X.bind(e)),
            (e.onClick = H.bind(e));
          var d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, e.onTouchStart, !1),
              t.addEventListener(i.move, e.onTouchMove, d),
              t.addEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "touchstart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, e.onTouchStart, p),
                s.addEventListener(
                  i.move,
                  e.onTouchMove,
                  o.passiveListener ? { passive: !1, capture: d } : d
                ),
                s.addEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p),
                Y || (t.addEventListener("touchstart", R), (Y = !0));
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.addEventListener("mousedown", e.onTouchStart, !1),
              t.addEventListener("mousemove", e.onTouchMove, d),
              t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.addEventListener("click", e.onClick, !0),
            a.cssMode && n.addEventListener("scroll", e.onScroll),
            a.updateOnWindowResize
              ? e.on(
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  B,
                  !0
                )
              : e.on("observerUpdate", B, !0);
        },
        detachEvents: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(i.start, e.onTouchStart, !1),
              t.removeEventListener(i.move, e.onTouchMove, d),
              t.removeEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "onTouchStart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, e.onTouchStart, p),
                s.removeEventListener(i.move, e.onTouchMove, d),
                s.removeEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.removeEventListener("mousedown", e.onTouchStart, !1),
              t.removeEventListener("mousemove", e.onTouchMove, d),
              t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.removeEventListener("click", e.onClick, !0),
            a.cssMode && n.removeEventListener("scroll", e.onScroll),
            e.off(
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              B
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (o && e.currentBreakpoint !== o) {
              var d = o in l ? l[o] : void 0;
              d &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = d[e];
                  void 0 !== t &&
                    (d[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1,
                h = r.enabled;
              u && !c
                ? (n.removeClass(
                    r.containerModifierClass +
                      "multirow " +
                      r.containerModifierClass +
                      "multirow-column"
                  ),
                  e.emitContainerClasses())
                : !u &&
                  c &&
                  (n.addClass(r.containerModifierClass + "multirow"),
                  "column" === p.slidesPerColumnFill &&
                    n.addClass(r.containerModifierClass + "multirow-column"),
                  e.emitContainerClasses());
              var v = p.direction && p.direction !== r.direction,
                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
              v && a && e.changeDirection(), S(e.params, p);
              var m = e.params.enabled;
              S(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !m ? e.disable() : !h && m && e.enable(),
                (e.currentBreakpoint = o),
                e.emit("_beforeBreakpoint", p),
                f &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", p);
            }
          }
        },
        getBreakpoint: function (e, t, a) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || a))) {
            var i = !1,
              s = l(),
              r = "window" === t ? s.innerWidth : a.clientWidth,
              n = "window" === t ? s.innerHeight : a.clientHeight,
              o = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var d = 0; d < o.length; d += 1) {
              var p = o[d],
                u = p.point;
              p.value <= r && (i = u);
            }
            return i || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.params,
            a = e.isLocked,
            i =
              e.slides.length > 0 &&
              t.slidesOffsetBefore +
                t.spaceBetween * (e.slides.length - 1) +
                e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && i
            ? (e.isLocked = i <= e.size)
            : (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            a &&
              a !== e.isLocked &&
              ((e.isEnd = !1), e.navigation && e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p =
              ((e = [
                "initialized",
                r.direction,
                { "pointer-events": d.pointerEvents && !d.touch },
                { "free-mode": r.freeMode },
                { autoheight: r.autoHeight },
                { rtl: n },
                { multirow: r.slidesPerColumn > 1 },
                {
                  "multirow-column":
                    r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill,
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": r.cssMode },
              ]),
              (t = r.containerModifierClass),
              (a = []),
              e.forEach(function (e) {
                "object" == typeof e
                  ? Object.keys(e).forEach(function (i) {
                      e[i] && a.push(t + i);
                    })
                  : "string" == typeof e && a.push(t + e);
              }),
              a);
          s.push.apply(s, p),
            l.addClass([].concat(s).join(" ")),
            i.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" ")), e.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || (e.complete && s)
            ? d()
            : t
            ? (((n = new o.Image()).onload = d),
              (n.onerror = d),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    F = {},
    _ = (function () {
      function t() {
        for (
          var e, a, i = arguments.length, s = new Array(i), r = 0;
          r < i;
          r++
        )
          s[r] = arguments[r];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (a = s[0])
            : ((e = s[0]), (a = s[1])),
          a || (a = {}),
          (a = S({}, a)),
          e && !a.el && (a.el = e),
          a.el && m(a.el).length > 1)
        ) {
          var n = [];
          return (
            m(a.el).each(function (e) {
              var i = S({}, a, { el: e });
              n.push(new t(i));
            }),
            n
          );
        }
        var l = this;
        (l.__swiper__ = !0),
          (l.support = k()),
          (l.device = $({ userAgent: a.userAgent })),
          (l.browser = L()),
          (l.eventsListeners = {}),
          (l.eventsAnyListeners = []),
          void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s || null === s) return;
              if (
                (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                  !0 === a[i] &&
                  (a[i] = { auto: !0 }),
                !(i in a) || !("enabled" in s))
              )
                return;
              !0 === a[i] && (a[i] = { enabled: !0 }),
                "object" != typeof a[i] ||
                  "enabled" in a[i] ||
                  (a[i].enabled = !0),
                a[i] || (a[i] = { enabled: !1 });
            }
          });
        var o,
          d,
          p = S({}, W);
        return (
          l.useParams(p),
          (l.params = S({}, p, F, a)),
          (l.originalParams = S({}, l.params)),
          (l.passedParams = S({}, a)),
          l.params &&
            l.params.on &&
            Object.keys(l.params.on).forEach(function (e) {
              l.on(e, l.params.on[e]);
            }),
          l.params && l.params.onAny && l.onAny(l.params.onAny),
          (l.$ = m),
          S(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === l.params.direction;
            },
            isVertical: function () {
              return "vertical" === l.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEvents:
              ((o = ["touchstart", "touchmove", "touchend", "touchcancel"]),
              (d = ["mousedown", "mousemove", "mouseup"]),
              l.support.pointerEvents &&
                (d = ["pointerdown", "pointermove", "pointerup"]),
              (l.touchEventsTouch = {
                start: o[0],
                move: o[1],
                end: o[2],
                cancel: o[3],
              }),
              (l.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
              l.support.touch || !l.params.simulateTouch
                ? l.touchEventsTouch
                : l.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements:
                "input, select, option, textarea, button, video, label",
              lastClickTime: x(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          l.useModules(),
          l.emit("_swiper"),
          l.params.init && l.init(),
          l
        );
      }
      var a,
        i,
        s,
        n = t.prototype;
      return (
        (n.enable = function () {
          var e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }),
        (n.disable = function () {
          var e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }),
        (n.setProgress = function (e, t) {
          var a = this;
          e = Math.min(Math.max(e, 0), 1);
          var i = a.minTranslate(),
            s = (a.maxTranslate() - i) * e + i;
          a.translateTo(s, void 0 === t ? 0 : t),
            a.updateActiveIndex(),
            a.updateSlidesClasses();
        }),
        (n.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(" ").filter(function (t) {
              return (
                0 === t.indexOf("swiper-container") ||
                0 === t.indexOf(e.params.containerModifierClass)
              );
            });
            e.emit("_containerClasses", t.join(" "));
          }
        }),
        (n.getSlideClasses = function (e) {
          var t = this;
          return e.className
            .split(" ")
            .filter(function (e) {
              return (
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
              );
            })
            .join(" ");
        }),
        (n.emitSlidesClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = [];
            e.slides.each(function (a) {
              var i = e.getSlideClasses(a);
              t.push({ slideEl: a, classNames: i }),
                e.emit("_slideClass", a, i);
            }),
              e.emit("_slideClasses", t);
          }
        }),
        (n.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var l, o = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !l &&
                ((n += 1), (o += a[d].swiperSlideSize) > s && (l = !0));
            for (var p = r - 1; p >= 0; p -= 1)
              a[p] &&
                !l &&
                ((n += 1), (o += a[p].swiperSlideSize) > s && (l = !0));
          } else
            for (var u = r + 1; u < a.length; u += 1)
              i[u] - i[r] < s && (n += 1);
          return n;
        }),
        (n.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              a = e.params;
            a.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
              a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (n.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var a = this,
            i = a.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (a.$el
                .removeClass("" + a.params.containerModifierClass + i)
                .addClass("" + a.params.containerModifierClass + e),
              a.emitContainerClasses(),
              (a.params.direction = e),
              a.slides.each(function (t) {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              a.emit("changeDirection"),
              t && a.update()),
            a
          );
        }),
        (n.mount = function (e) {
          var t = this;
          if (t.mounted) return !0;
          var a = m(e || t.params.el);
          if (!(e = a[0])) return !1;
          e.swiper = t;
          var i = (function () {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              var i = m(
                e.shadowRoot.querySelector("." + t.params.wrapperClass)
              );
              return (
                (i.children = function (e) {
                  return a.children(e);
                }),
                i
              );
            }
            return a.children("." + t.params.wrapperClass);
          })();
          if (0 === i.length && t.params.createElements) {
            var s = r().createElement("div");
            (i = m(s)),
              (s.className = t.params.wrapperClass),
              a.append(s),
              a.children("." + t.params.slideClass).each(function (e) {
                i.append(e);
              });
          }
          return (
            S(t, {
              $el: a,
              el: e,
              $wrapperEl: i,
              wrapperEl: i[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
              wrongRTL: "-webkit-box" === i.css("display"),
            }),
            !0
          );
        }),
        (n.init = function (e) {
          var t = this;
          return (
            t.initialized ||
              !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }),
        (n.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a,
            i = this,
            s = i.params,
            r = i.$el,
            n = i.$wrapperEl,
            l = i.slides;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r.removeAttr("style"),
                n.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (a = i),
                Object.keys(a).forEach(function (e) {
                  try {
                    a[e] = null;
                  } catch (e) {}
                  try {
                    delete a[e];
                  } catch (e) {}
                })),
              (i.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function (e) {
          S(F, e);
        }),
        (t.installModule = function (e) {
          t.prototype.modules || (t.prototype.modules = {});
          var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
          t.prototype.modules[a] = e;
        }),
        (t.use = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return t.installModule(e);
              }),
              t)
            : (t.installModule(e), t);
        }),
        (a = t),
        (s = [
          {
            key: "extendedDefaults",
            get: function () {
              return F;
            },
          },
          {
            key: "defaults",
            get: function () {
              return W;
            },
          },
        ]),
        (i = null) && e(a.prototype, i),
        s && e(a, s),
        t
      );
    })();
  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      _.prototype[t] = V[e][t];
    });
  }),
    _.use([I, A]);
  var q = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          y = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (b = s + l));
        var w = Math.max((y || 0) - b, 0),
          E = Math.min((y || 0) + g, c.length - 1),
          x = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (S(t.virtual, {
            from: w,
            to: E,
            offset: x,
            slidesGrid: t.slidesGrid,
          }),
          p === w && u === E && !e)
        )
          return (
            t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: w,
              to: E,
              slides: (function () {
                for (var e = [], t = w; t <= E; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate && T())
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var z = p; z <= u; z += 1)
            (z < w || z > E) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]'
                )
                .remove();
        for (var P = 0; P < c.length; P += 1)
          P >= w &&
            P <= E &&
            (void 0 === u || e
              ? M.push(P)
              : (P > u && M.push(P), P < p && C.push(P)));
        M.forEach(function (e) {
          t.$wrapperEl.append(v(c[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(c[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
          T();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? m(i.renderSlide.call(a, e, t))
          : m(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (a.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        var t = this;
        if ("object" == typeof e && "length" in e)
          for (var a = 0; a < e.length; a += 1)
            e[a] && t.virtual.slides.push(e[a]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r]);
          (i = a + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            l = {};
          Object.keys(n).forEach(function (e) {
            var t = n[e],
              a = t.attr("data-swiper-slide-index");
            a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
              (l[parseInt(e, 10) + s] = t);
          }),
            (t.virtual.cache = l);
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0));
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    },
    j = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        M(this, {
          virtual: t({}, q, { slides: this.params.virtual.slides, cache: {} }),
        });
      },
      on: {
        beforeInit: function (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            S(e.params, t),
              S(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function (e) {
          e.params.virtual.enabled && e.virtual.update();
        },
      },
    },
    U = {
      handle: function (e) {
        var t = this;
        if (t.enabled) {
          var a = l(),
            i = r(),
            s = t.rtlTranslate,
            n = e;
          n.originalEvent && (n = n.originalEvent);
          var o = n.keyCode || n.charCode,
            d = t.params.keyboard.pageUpDown,
            p = d && 33 === o,
            u = d && 34 === o,
            c = 37 === o,
            h = 39 === o,
            v = 38 === o,
            f = 40 === o;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && h) || (t.isVertical() && f) || u)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && c) || (t.isVertical() && v) || p)
          )
            return !1;
          if (
            !(
              n.shiftKey ||
              n.altKey ||
              n.ctrlKey ||
              n.metaKey ||
              (i.activeElement &&
                i.activeElement.nodeName &&
                ("input" === i.activeElement.nodeName.toLowerCase() ||
                  "textarea" === i.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (p || u || c || h || v || f)
            ) {
              var m = !1;
              if (
                t.$el.parents("." + t.params.slideClass).length > 0 &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              var g = t.$el,
                b = g[0].clientWidth,
                y = g[0].clientHeight,
                w = a.innerWidth,
                E = a.innerHeight,
                x = t.$el.offset();
              s && (x.left -= t.$el[0].scrollLeft);
              for (
                var T = [
                    [x.left, x.top],
                    [x.left + b, x.top],
                    [x.left, x.top + y],
                    [x.left + b, x.top + y],
                  ],
                  C = 0;
                C < T.length;
                C += 1
              ) {
                var S = T[C];
                if (S[0] >= 0 && S[0] <= w && S[1] >= 0 && S[1] <= E) {
                  if (0 === S[0] && 0 === S[1]) continue;
                  m = !0;
                }
              }
              if (!m) return;
            }
            t.isHorizontal()
              ? ((p || u || c || h) &&
                  (n.preventDefault
                    ? n.preventDefault()
                    : (n.returnValue = !1)),
                (((u || h) && !s) || ((p || c) && s)) && t.slideNext(),
                (((p || c) && !s) || ((u || h) && s)) && t.slidePrev())
              : ((p || u || v || f) &&
                  (n.preventDefault
                    ? n.preventDefault()
                    : (n.returnValue = !1)),
                (u || f) && t.slideNext(),
                (p || v) && t.slidePrev()),
              t.emit("keyPress", o);
          }
        }
      },
      enable: function () {
        var e = this,
          t = r();
        e.keyboard.enabled ||
          (m(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
      },
      disable: function () {
        var e = this,
          t = r();
        e.keyboard.enabled &&
          (m(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
      },
    },
    K = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function () {
        M(this, { keyboard: t({ enabled: !1 }, U) });
      },
      on: {
        init: function (e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function (e) {
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
  var Z = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var e = r(),
                t = "onwheel",
                a = t in e;
              if (!a) {
                var i = e.createElement("div");
                i.setAttribute(t, "return;"),
                  (a = "function" == typeof i.onwheel);
              }
              return (
                !a &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (a = e.implementation.hasFeature("Events.wheel", "3.0")),
                a
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          e.shiftKey && !i && ((i = s), (s = 0)),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function () {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function (e) {
        var t = e,
          a = this;
        if (a.enabled) {
          var i = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var s = a.$el;
          if (
            ("container" !== a.params.mousewheel.eventsTarget &&
              (s = m(a.params.mousewheel.eventsTarget)),
            !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            n = a.rtlTranslate ? -1 : 1,
            l = Z.normalize(t);
          if (i.forceToAxis)
            if (a.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              r = -l.pixelX * n;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              r = -l.pixelY;
            }
          else
            r =
              Math.abs(l.pixelX) > Math.abs(l.pixelY)
                ? -l.pixelX * n
                : -l.pixelY;
          if (0 === r) return !0;
          i.invert && (r = -r);
          var o = a.getTranslate() + r * i.sensitivity;
          if (
            (o >= a.minTranslate() && (o = a.minTranslate()),
            o <= a.maxTranslate() && (o = a.maxTranslate()),
            (!!a.params.loop ||
              !(o === a.minTranslate() || o === a.maxTranslate())) &&
              a.params.nested &&
              t.stopPropagation(),
            a.params.freeMode)
          ) {
            var d = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
              p = a.mousewheel.lastEventBeforeSnap,
              u =
                p &&
                d.time < p.time + 500 &&
                d.delta <= p.delta &&
                d.direction === p.direction;
            if (!u) {
              (a.mousewheel.lastEventBeforeSnap = void 0),
                a.params.loop && a.loopFix();
              var c = a.getTranslate() + r * i.sensitivity,
                h = a.isBeginning,
                v = a.isEnd;
              if (
                (c >= a.minTranslate() && (c = a.minTranslate()),
                c <= a.maxTranslate() && (c = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(c),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                  a.updateSlidesClasses(),
                a.params.freeModeSticky)
              ) {
                clearTimeout(a.mousewheel.timeout),
                  (a.mousewheel.timeout = void 0);
                var f = a.mousewheel.recentWheelEvents;
                f.length >= 15 && f.shift();
                var g = f.length ? f[f.length - 1] : void 0,
                  b = f[0];
                if (
                  (f.push(d),
                  g && (d.delta > g.delta || d.direction !== g.direction))
                )
                  f.splice(0);
                else if (
                  f.length >= 15 &&
                  d.time - b.time < 500 &&
                  b.delta - d.delta >= 1 &&
                  d.delta <= 6
                ) {
                  var y = r > 0 ? 0.8 : 0.2;
                  (a.mousewheel.lastEventBeforeSnap = d),
                    f.splice(0),
                    (a.mousewheel.timeout = E(function () {
                      a.slideToClosest(a.params.speed, !0, void 0, y);
                    }, 0));
                }
                a.mousewheel.timeout ||
                  (a.mousewheel.timeout = E(function () {
                    (a.mousewheel.lastEventBeforeSnap = d),
                      f.splice(0),
                      a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (u || a.emit("scroll", t),
                a.params.autoplay &&
                  a.params.autoplayDisableOnInteraction &&
                  a.autoplay.stop(),
                c === a.minTranslate() || c === a.maxTranslate())
              )
                return !0;
            }
          } else {
            var w = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e,
              },
              T = a.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var C = T.length ? T[T.length - 1] : void 0;
            if (
              (T.push(w),
              C
                ? (w.direction !== C.direction ||
                    w.delta > C.delta ||
                    w.time > C.time + 150) &&
                  a.mousewheel.animateSlider(w)
                : a.mousewheel.animateSlider(w),
              a.mousewheel.releaseScroll(w))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        }
      },
      animateSlider: function (e) {
        var t = this,
          a = l();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            x() - t.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new a.Date().getTime()),
            !1))
        );
      },
      releaseScroll: function (e) {
        var t = this,
          a = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = this,
          t = Z.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.on("mouseenter", e.mousewheel.handleMouseEnter),
          a.on("mouseleave", e.mousewheel.handleMouseLeave),
          a.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = this,
          t = Z.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    },
    J = {
      toggleEl: function (e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function () {
        var e = this,
          t = e.params.navigation,
          a = e.navigation.toggleEl;
        if (!e.params.loop) {
          var i = e.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          r &&
            r.length > 0 &&
            (e.isBeginning ? a(r, !0) : a(r, !1),
            e.params.watchOverflow &&
              e.enabled &&
              r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
            s &&
              s.length > 0 &&
              (e.isEnd ? a(s, !0) : a(s, !1),
              e.params.watchOverflow &&
                e.enabled &&
                s[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
      },
      onNextClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        ((a.params.navigation = P(
          a.$el,
          a.params.navigation,
          a.params.createElements,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = m(i.nextEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = m(i.prevEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", a.navigation.onNextClick),
          t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
          S(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }),
          a.enabled ||
            (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (a.off("click", e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    },
    Q = {
      update: function () {
        var e = this,
          t = e.rtl,
          a = e.params.pagination;
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== e.params.paginationType && (i = n + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === a.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            var l,
              o,
              d,
              p = e.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                ),
                a.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        a.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (l = i - e.pagination.dynamicBulletIndex),
                (d =
                  ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              p.removeClass(
                a.bulletActiveClass +
                  " " +
                  a.bulletActiveClass +
                  "-next " +
                  a.bulletActiveClass +
                  "-next-next " +
                  a.bulletActiveClass +
                  "-prev " +
                  a.bulletActiveClass +
                  "-prev-prev " +
                  a.bulletActiveClass +
                  "-main"
              ),
              r.length > 1)
            )
              p.each(function (e) {
                var t = m(e),
                  s = t.index();
                s === i && t.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                    (s >= l &&
                      s <= o &&
                      t.addClass(a.bulletActiveClass + "-main"),
                    s === l &&
                      t
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                    s === o &&
                      t
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next"));
              });
            else {
              var u = p.eq(i),
                c = u.index();
              if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1)
                  p.eq(f).addClass(a.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (c >= p.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                      p.eq(p.length - g).addClass(
                        a.bulletActiveClass + "-main"
                      );
                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + "-prev"
                    );
                  } else
                    h
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                else
                  h
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
              }
            }
            if (a.dynamicBullets) {
              var b = Math.min(p.length, a.dynamicMainBullets + 4),
                y =
                  (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                w = t ? "right" : "left";
              p.css(e.isHorizontal() ? w : "top", y + "px");
            }
          }
          if (
            ("fraction" === a.type &&
              (r.find(z(a.currentClass)).text(a.formatFractionCurrent(i + 1)),
              r.find(z(a.totalClass)).text(a.formatFractionTotal(n))),
            "progressbar" === a.type)
          ) {
            var E;
            E = a.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var x = (i + 1) / n,
              T = 1,
              C = 1;
            "horizontal" === E ? (T = x) : (C = x),
              r
                .find(z(a.progressbarFillClass))
                .transform(
                  "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === a.type && a.renderCustom
            ? (r.html(a.renderCustom(e, i + 1, n)),
              e.emit("paginationRender", r[0]))
            : e.emit("paginationUpdate", r[0]),
            e.params.watchOverflow &&
              e.enabled &&
              r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            var r = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && r > a && (r = a);
            for (var n = 0; n < r; n += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s), (e.pagination.bullets = i.find(z(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this;
        e.params.pagination = P(
          e.$el,
          e.params.pagination,
          e.params.createElements,
          { el: "swiper-pagination" }
        );
        var t = e.params.pagination;
        if (t.el) {
          var a = m(t.el);
          0 !== a.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              a.length > 1 &&
              (a = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && a.addClass(t.clickableClass),
            a.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (a.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              a.addClass(t.progressbarOppositeClass),
            t.clickable &&
              a.on("click", z(t.bulletClass), function (t) {
                t.preventDefault();
                var a = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (a += e.loopedSlides), e.slideTo(a);
              }),
            S(e.pagination, { $el: a, el: a[0] }),
            e.enabled || a.addClass(t.lockClass));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", z(t.bulletClass));
        }
      },
    },
    ee = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? (p = -p) > 0
              ? ((d = s - p), (p = 0))
              : -p + s > r && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : p + s > r && (d = r - p),
            e.isHorizontal()
              ? (n.transform("translate3d(" + p + "px, 0, 0)"),
                (n[0].style.width = d + "px"))
              : (n.transform("translate3d(0px, " + p + "px, 0)"),
                (n[0].style.height = d + "px")),
            o.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (l[0].style.opacity = 0), l.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        var t = this;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s + "px"),
            (i[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            S(t, { trackSize: r, divider: n, moveDivider: l, dragSize: s }),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : n / 2)) /
          (l - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(d),
          a.setTranslate(d),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === n[0] || e.target === n
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          a.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          r.transition(0),
          t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = E(function () {
              r.css("opacity", 0), r.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o &&
            (l.touch
              ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d),
                o.addEventListener(i.move, e.scrollbar.onDragMove, d),
                o.addEventListener(i.end, e.scrollbar.onDragEnd, p))
              : (o.addEventListener(s.start, e.scrollbar.onDragStart, d),
                t.addEventListener(s.move, e.scrollbar.onDragMove, d),
                t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o &&
            (l.touch
              ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d),
                o.removeEventListener(i.move, e.scrollbar.onDragMove, d),
                o.removeEventListener(i.end, e.scrollbar.onDragEnd, p))
              : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d),
                t.removeEventListener(s.move, e.scrollbar.onDragMove, d),
                t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      init: function () {
        var e = this,
          t = e.scrollbar,
          a = e.$el;
        e.params.scrollbar = P(a, e.params.scrollbar, e.params.createElements, {
          el: "swiper-scrollbar",
        });
        var i = e.params.scrollbar;
        if (i.el) {
          var s = m(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = m(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            S(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable(),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    te = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (n || l
            ? ((n = n || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((n = r), (l = "0"))
            : ((l = r), (n = "0")),
          (n =
            n.indexOf("%") >= 0
              ? parseInt(n, 10) * t * s + "%"
              : n * t * s + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != d)
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
        else {
          var u = o - (o - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            e.parallax.setTransform(t, i);
          }),
          a.each(function (t, a) {
            var r = t.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (r += Math.ceil(a / 2) - i * (s.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              m(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t) {
                  e.parallax.setTransform(t, r);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            var a = m(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (i = 0), a.transition(i);
          });
      },
    },
    ae = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (r.scaleStart = ae.getDistanceBetweenTouches(e));
        }
        (r.$slideEl && r.$slideEl.length) ||
        ((r.$slideEl = m(e.target).closest("." + t.params.slideClass)),
        0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
        (r.$imageEl = r.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
        (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== r.$imageWrapEl.length)
          ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (r.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (!a.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (r.scaleMove = ae.getDistanceBetweenTouches(e));
        }
        r.$imageEl && 0 !== r.$imageEl.length
          ? (a.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (r.scaleMove / r.scaleStart) * s.currentScale),
            s.scale > r.maxRatio &&
              (s.scale =
                r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
            s.scale < i.minRatio &&
              (s.scale =
                i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
            r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
          : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function (e) {
        var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;
        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !a.android)
          )
            return;
          (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
        }
        n.$imageEl &&
          0 !== n.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio)),
          n.$imageEl
            .transition(t.params.speed)
            .transform("translate3d(0,0,0) scale(" + r.scale + ")"),
          (r.currentScale = r.scale),
          (r.isScaling = !1),
          1 === r.scale && (n.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (t.android && e.cancelable && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = T(i.$imageWrapEl[0], "x") || 0),
            (s.startY = T(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            l = s.height * a.scale;
          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
          0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = l), (a.currentY = d);
          var u = a.width * e.scale,
            c = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.scale = 1),
          (t.currentScale = 1),
          (a.$slideEl = void 0),
          (a.$imageEl = void 0),
          (a.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          m,
          g,
          b = this,
          y = l(),
          w = b.zoom,
          E = b.params.zoom,
          x = w.gesture,
          T = w.image;
        (x.$slideEl ||
          (b.params.virtual && b.params.virtual.enabled && b.virtual
            ? (x.$slideEl = b.$wrapperEl.children(
                "." + b.params.slideActiveClass
              ))
            : (x.$slideEl = b.slides.eq(b.activeIndex)),
          (x.$imageEl = x.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (x.$imageWrapEl = x.$imageEl.parent("." + E.containerClass))),
        x.$imageEl &&
          0 !== x.$imageEl.length &&
          x.$imageWrapEl &&
          0 !== x.$imageWrapEl.length) &&
          (x.$slideEl.addClass("" + E.zoomedSlideClass),
          void 0 === T.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
          (w.scale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
          (w.currentScale =
            x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
          e
            ? ((m = x.$slideEl[0].offsetWidth),
              (g = x.$slideEl[0].offsetHeight),
              (i = x.$slideEl.offset().left + y.scrollX + m / 2 - t),
              (s = x.$slideEl.offset().top + y.scrollY + g / 2 - a),
              (o = x.$imageEl[0].offsetWidth),
              (d = x.$imageEl[0].offsetHeight),
              (p = o * w.scale),
              (u = d * w.scale),
              (v = -(c = Math.min(m / 2 - p / 2, 0))),
              (f = -(h = Math.min(g / 2 - u / 2, 0))),
              (r = i * w.scale) < c && (r = c),
              r > v && (r = v),
              (n = s * w.scale) < h && (n = h),
              n > f && (n = f))
            : ((r = 0), (n = 0)),
          x.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          x.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + w.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (i.$slideEl = e.$wrapperEl.children(
                "." + e.params.slideActiveClass
              ))
            : (i.$slideEl = e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            i.$imageWrapEl &&
            0 !== i.$imageWrapEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      toggleGestures: function (e) {
        var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
        t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s),
          t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s),
          t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
      },
      enable: function () {
        var e = this,
          t = e.support,
          a = e.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !t.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !t.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          (e.zoom.passiveListener = i),
            (e.zoom.slideSelector = r),
            t.gestures
              ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i),
                e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                e.touchEvents.cancel &&
                  e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              a.onTouchMove,
              s
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          var a = e.support;
          e.zoom.enabled = !1;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !a.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !a.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          a.gestures
            ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i),
              e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
              e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
              e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove,
              s
            );
        }
      },
    },
    ie = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.lazy;
        if (void 0 !== e && 0 !== a.slides.length) {
          var s =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    "." +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : a.slides.eq(e),
            r = s.find(
              "." +
                i.elementClass +
                ":not(." +
                i.loadedClass +
                "):not(." +
                i.loadingClass +
                ")"
            );
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            r.push(s[0]),
            0 !== r.length &&
              r.each(function (e) {
                var r = m(e);
                r.addClass(i.loadingClass);
                var n = r.attr("data-background"),
                  l = r.attr("data-src"),
                  o = r.attr("data-srcset"),
                  d = r.attr("data-sizes"),
                  p = r.parent("picture");
                a.loadImage(r[0], l || n, o, d, !1, function () {
                  if (null != a && a && (!a || a.params) && !a.destroyed) {
                    if (
                      (n
                        ? (r.css("background-image", 'url("' + n + '")'),
                          r.removeAttr("data-background"))
                        : (o &&
                            (r.attr("srcset", o), r.removeAttr("data-srcset")),
                          d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each(function (e) {
                              var t = m(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          l && (r.attr("src", l), r.removeAttr("data-src"))),
                      r.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find("." + i.preloaderClass).remove(),
                      a.params.loop && t)
                    ) {
                      var e = s.attr("data-swiper-slide-index");
                      if (s.hasClass(a.params.slideDuplicateClass)) {
                        var u = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.params.slideDuplicateClass +
                            ")"
                        );
                        a.lazy.loadInSlide(u.index(), !1);
                      } else {
                        var c = a.$wrapperEl.children(
                          "." +
                            a.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        a.lazy.loadInSlide(c.index(), !1);
                      }
                    }
                    a.emit("lazyImageReady", s[0], r[0]),
                      a.params.autoHeight && a.updateAutoHeight();
                  }
                }),
                  a.emit("lazyImageLoad", s[0], r[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;
        function o(e) {
          if (r) {
            if (
              t.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + a.slideVisibleClass).each(function (t) {
            var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1)
          for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(s);
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var u = n.loadPrevNextAmount,
                c = l,
                h = Math.min(s + c + Math.max(u, c), i.length),
                v = Math.max(s - Math.max(c, u), 0),
                f = s + l;
              f < h;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f);
            for (var g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + a.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(d(b));
            var y = t.children("." + a.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(d(y));
          }
      },
      checkInViewOnLoad: function () {
        var e = l(),
          t = this;
        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement
              ? m(t.params.lazy.scrollingElement)
              : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
          for (
            var d = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height],
              ],
              p = 0;
            p < d.length;
            p += 1
          ) {
            var u = d[p];
            if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
              if (0 === u[0] && 0 === u[1]) continue;
              o = !0;
            }
          }
          var c = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          o
            ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c))
            : t.lazy.scrollHandlerAttached ||
              ((t.lazy.scrollHandlerAttached = !0),
              a.on("scroll", t.lazy.checkInViewOnLoad, c));
        }
      },
    },
    se = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          l = function (e, t) {
            for (i = -1, a = e.length; a - i > 1; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = l(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new se.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new se.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;
        function l(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o]);
        else r instanceof n && t !== r && l(r);
      },
      setTransition: function (e, t) {
        var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;
        function n(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                E(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    "slide" === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (a = 0; a < r.length; a += 1)
            r[a] !== t && r[a] instanceof s && n(r[a]);
        else r instanceof s && t !== r && n(r);
      },
    },
    re = {
      getRandomNumber: function (e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function (e, t) {
        return e.attr("aria-roledescription", t), e;
      },
      addElControls: function (e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function (e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function (e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterOrSpaceKey: function (e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this,
            a = t.params.a11y,
            i = m(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is(z(t.params.pagination.bulletClass)) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
              : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
            a &&
              a.length > 0 &&
              (e.isEnd
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (a) {
            var i = m(a);
            e.a11y.makeElFocusable(i),
              e.params.pagination.renderBullet ||
                (e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(
                  i,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    i.index() + 1
                  )
                ));
          });
      },
      init: function () {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var a = e.$el;
        t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage),
          t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
        var i,
          s,
          r = e.$wrapperEl,
          n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(r, n),
          e.a11y.addElLive(r, l),
          t.itemRoleDescriptionMessage &&
            e.a11y.addElRoleDescription(
              m(e.slides),
              t.itemRoleDescriptionMessage
            ),
          e.a11y.addElRole(m(e.slides), t.slideRole),
          e.slides.each(function (a) {
            var i = m(a),
              s = t.slideLabelMessage
                .replace(/\{\{index\}\}/, i.index() + 1)
                .replace(/\{\{slidesLength\}\}/, e.slides.length);
            e.a11y.addElLabel(i, s);
          }),
          e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
          i &&
            i.length &&
            (e.a11y.makeElFocusable(i),
            "BUTTON" !== i[0].tagName &&
              (e.a11y.addElRole(i, "button"),
              i.on("keydown", e.a11y.onEnterOrSpaceKey)),
            e.a11y.addElLabel(i, t.nextSlideMessage),
            e.a11y.addElControls(i, n)),
          s &&
            s.length &&
            (e.a11y.makeElFocusable(s),
            "BUTTON" !== s[0].tagName &&
              (e.a11y.addElRole(s, "button"),
              s.on("keydown", e.a11y.onEnterOrSpaceKey)),
            e.a11y.addElLabel(s, t.prevSlideMessage),
            e.a11y.addElControls(s, n)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              z(e.params.pagination.bulletClass),
              e.a11y.onEnterOrSpaceKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterOrSpaceKey),
          t && t.off("keydown", a.a11y.onEnterOrSpaceKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              "keydown",
              z(a.params.pagination.bulletClass),
              a.a11y.onEnterOrSpaceKey
            );
      },
    },
    ne = {
      init: function () {
        var e = this,
          t = l();
        if (e.params.history) {
          if (!t.history || !t.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var a = e.history;
          (a.initialized = !0),
            (a.paths = ne.getPathValues(e.params.url)),
            (a.paths.key || a.paths.value) &&
              (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                t.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState ||
          e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        var e = this;
        (e.history.paths = ne.getPathValues(e.params.url)),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function (e) {
        var t = l(),
          a = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          i = a.length;
        return { key: a[i - 2], value: a[i - 1] };
      },
      setHistory: function (e, t) {
        var a = this,
          i = l();
        if (a.history.initialized && a.params.history.enabled) {
          var s;
          s = a.params.url ? new URL(a.params.url) : i.location;
          var r = a.slides.eq(t),
            n = ne.slugify(r.attr("data-history"));
          if (a.params.history.root.length > 0) {
            var o = a.params.history.root;
            "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)),
              (n = o + "/" + e + "/" + n);
          } else s.pathname.includes(e) || (n = e + "/" + n);
          var d = i.history.state;
          (d && d.value === n) ||
            (a.params.history.replaceState
              ? i.history.replaceState({ value: n }, null, n)
              : i.history.pushState({ value: n }, null, n));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              ne.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var l = n.index();
              i.slideTo(l, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    le = {
      onHashCange: function () {
        var e = this,
          t = r();
        e.emit("hashChange");
        var a = t.location.hash.replace("#", "");
        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
            .index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash: function () {
        var e = this,
          t = l(),
          a = r();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            ),
              e.emit("hashSet");
          else {
            var i = e.slides.eq(e.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            (a.location.hash = s || ""), e.emit("hashSet");
          }
      },
      init: function () {
        var e = this,
          t = r(),
          a = l();
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var i = t.location.hash.replace("#", "");
          if (i)
            for (var s = 0, n = e.slides.length; s < n; s += 1) {
              var o = e.slides.eq(s);
              if (
                (o.attr("data-hash") || o.attr("data-history")) === i &&
                !o.hasClass(e.params.slideDuplicateClass)
              ) {
                var d = o.index();
                e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            m(a).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState &&
          m(e).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    oe = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = E(function () {
            var t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    e.emit("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run();
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                  t.$wrapperEl[0].addEventListener(
                    e,
                    t.autoplay.onTransitionEnd
                  );
                })
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = this,
          t = r();
        "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (e.autoplay.run(), (e.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        var t = this;
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
            t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
          }),
          (t.autoplay.paused = !1),
          t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
      onMouseEnter: function () {
        var e = this;
        e.params.autoplay.disableOnInteraction
          ? e.autoplay.stop()
          : e.autoplay.pause(),
          ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
            e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
          });
      },
      onMouseLeave: function () {
        var e = this;
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), e.autoplay.run());
      },
      attachMouseEvents: function () {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter &&
          (e.$el.on("mouseenter", e.autoplay.onMouseEnter),
          e.$el.on("mouseleave", e.autoplay.onMouseLeave));
      },
      detachMouseEvents: function () {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter),
          e.$el.off("mouseleave", e.autoplay.onMouseLeave);
      },
    },
    de = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              (s = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a]);
            }
          });
        }
      },
    },
    pe = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
        p.shadow &&
          (u
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = m('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), a.append(e)));
        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
            g = v;
          c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var b = 90 * g,
            y = Math.floor(b / 360);
          l && ((b = -b), (y = Math.floor(-b / 360)));
          var w = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
          g % 4 == 0
            ? ((E = 4 * -y * o), (T = 0))
            : (g - 1) % 4 == 0
            ? ((E = 0), (T = 4 * -y * o))
            : (g - 2) % 4 == 0
            ? ((E = o + 4 * y * o), (T = o))
            : (g - 3) % 4 == 0 && ((E = -o), (T = 3 * o + 4 * o * y)),
            l && (E = -E),
            u || ((x = E), (E = 0));
          var C =
            "rotateX(" +
            (u ? 0 : -b) +
            "deg) rotateY(" +
            (u ? b : 0) +
            "deg) translate3d(" +
            E +
            "px, " +
            x +
            "px, " +
            T +
            "px)";
          if (
            (w <= 1 &&
              w > -1 &&
              ((h = 90 * g + 90 * w), l && (h = 90 * -g - 90 * w)),
            f.transform(C),
            p.slideShadows)
          ) {
            var S = u
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = u
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = m(
                '<div class="swiper-slide-shadow-' +
                  (u ? "left" : "top") +
                  '"></div>'
              )),
              f.append(S)),
              0 === M.length &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (u ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              S.length && (S[0].style.opacity = Math.max(-w, 0)),
              M.length && (M[0].style.opacity = Math.max(w, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
            "transform-origin": "50% 50% -" + o / 2 + "px",
          }),
          p.shadow)
        )
          if (u)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + p.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                p.shadowScale +
                ")"
            );
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P =
                1.5 -
                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                  Math.cos((2 * z * Math.PI) / 360) / 2),
              k = p.shadowScale,
              $ = p.shadowScale / P,
              L = p.shadowOffset;
            e.transform(
              "scale3d(" +
                k +
                ", 1, " +
                $ +
                ") translate3d(0px, " +
                (n / 2 + L) +
                "px, " +
                -n / 2 / $ +
                "px) rotateX(-90deg)"
            );
          }
        var I = d.isSafari || d.isWebView ? -o / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            I +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : h) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -h : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this,
          a = t.$el;
        t.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            a.find(".swiper-cube-shadow").transition(e);
      },
    },
    ue = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = o), (o = 0), (l = -n), (n = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = m(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === u.length &&
                ((u = m(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(u)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              u.length && (u[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              o +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              l +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (
          (a
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a]);
            }
          });
        }
      },
    },
    ce = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.slidesSizesGrid,
            r = e.params.coverflowEffect,
            n = e.isHorizontal(),
            l = e.translate,
            o = n ? t / 2 - l : a / 2 - l,
            d = n ? r.rotate : -r.rotate,
            p = r.depth,
            u = 0,
            c = i.length;
          u < c;
          u += 1
        ) {
          var h = i.eq(u),
            v = s[u],
            f = ((o - h[0].swiperSlideOffset - v / 2) / v) * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            y = -p * Math.abs(f),
            w = r.stretch;
          "string" == typeof w &&
            -1 !== w.indexOf("%") &&
            (w = (parseFloat(r.stretch) / 100) * v);
          var E = n ? 0 : w * f,
            x = n ? w * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(T) < 0.001 && (T = 0);
          var C =
            "translate3d(" +
            x +
            "px," +
            E +
            "px," +
            y +
            "px)  rotateX(" +
            b +
            "deg) rotateY(" +
            g +
            "deg) scale(" +
            T +
            ")";
          if (
            (h.transform(C),
            (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
            r.slideShadows)
          ) {
            var S = n
                ? h.find(".swiper-slide-shadow-left")
                : h.find(".swiper-slide-shadow-top"),
              M = n
                ? h.find(".swiper-slide-shadow-right")
                : h.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = m(
                '<div class="swiper-slide-shadow-' +
                  (n ? "left" : "top") +
                  '"></div>'
              )),
              h.append(S)),
              0 === M.length &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (n ? "right" : "bottom") +
                    '"></div>'
                )),
                h.append(M)),
              S.length && (S[0].style.opacity = f > 0 ? f : 0),
              M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    he = {
      init: function () {
        var e = this,
          t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var a = e.constructor;
        return (
          t.swiper instanceof a
            ? ((e.thumbs.swiper = t.swiper),
              S(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              S(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : C(t.swiper) &&
              ((e.thumbs.swiper = new a(
                S({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
          !0
        );
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (
            !(
              (i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s;
            if (
              ((s = t.params.loop
                ? parseInt(
                    m(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex));
              var n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                l = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
              "auto" === a.params.slidesPerView
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;
          if (t.realIndex !== a.realIndex || r) {
            var n,
              l,
              o = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (o = a.activeIndex));
              var d = a.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                p = a.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
              (n =
                void 0 === d
                  ? p
                  : void 0 === p
                  ? d
                  : p - o == o - d
                  ? a.params.slidesPerGroup > 1
                    ? p
                    : o
                  : p - o < o - d
                  ? p
                  : d),
                (l = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
            r && (n += "next" === l ? s : -1 * s),
              a.visibleSlidesIndexes &&
                a.visibleSlidesIndexes.indexOf(n) < 0 &&
                (a.params.centeredSlides
                  ? (n =
                      n > o
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > o && a.params.slidesPerGroup,
                a.slideTo(n, e ? 0 : void 0));
          }
          var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (u = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (u = 1),
            (u = Math.floor(u)),
            a.slides.removeClass(c),
            a.params.loop || (a.params.virtual && a.params.virtual.enabled))
          )
            for (var h = 0; h < u; h += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                )
                .addClass(c);
          else
            for (var v = 0; v < u; v += 1)
              a.slides.eq(t.realIndex + v).addClass(c);
        }
      },
    },
    ve = [
      j,
      K,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create: function () {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: Z.enable,
              disable: Z.disable,
              handle: Z.handle,
              handleMouseEnter: Z.handleMouseEnter,
              handleMouseLeave: Z.handleMouseLeave,
              animateSlider: Z.animateSlider,
              releaseScroll: Z.releaseScroll,
            },
          });
        },
        on: {
          init: function (e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy: function (e) {
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          M(this, { navigation: t({}, J) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          "enable disable": function (e) {
            var t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
            a &&
              a[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          },
          click: function (e, t) {
            var a = e.navigation,
              i = a.$nextEl,
              s = a.$prevEl,
              r = t.target;
            if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === r || e.pagination.el.contains(r))
              )
                return;
              var n;
              i
                ? (n = i.hasClass(e.params.navigation.hiddenClass))
                : s && (n = s.hasClass(e.params.navigation.hiddenClass)),
                !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                s && s.toggleClass(e.params.navigation.hiddenClass);
            }
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, Q) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          "enable disable": function (e) {
            var t = e.pagination.$el;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          },
          click: function (e, t) {
            var a = t.target;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
            }
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              ee
            ),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          "enable disable": function (e) {
            var t = e.scrollbar.$el;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          M(this, { parallax: t({}, te) });
        },
        on: {
          beforeInit: function (e) {
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          init: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTranslate: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTransition: function (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this;
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              ae
            ),
          });
          var a = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return a;
            },
            set: function (t) {
              if (a !== t) {
                var i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, i, s);
              }
              a = t;
            },
          });
        },
        on: {
          init: function (e) {
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy: function (e) {
            e.zoom.disable();
          },
          touchStart: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t);
          },
          touchEnd: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t);
          },
          doubleTap: function (e, t) {
            !e.animating &&
              e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
          },
          transitionEnd: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange: function (e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          M(this, { lazy: t({ initialImageLoaded: !1 }, ie) });
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              (e.params.lazy.checkInView
                ? e.lazy.checkInViewOnLoad()
                : e.lazy.load());
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          M(this, {
            controller: t({ control: this.params.controller.control }, se),
          });
        },
        on: {
          update: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate: function (e, t, a) {
            e.controller.control && e.controller.setTranslate(t, a);
          },
          setTransition: function (e, t, a) {
            e.controller.control && e.controller.setTransition(t, a);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
          },
        },
        create: function () {
          M(this, {
            a11y: t({}, re, {
              liveRegion: m(
                '<span class="' +
                  this.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            }),
          });
        },
        on: {
          afterInit: function (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
          },
          toEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          fromEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          paginationUpdate: function (e) {
            e.params.a11y.enabled && e.a11y.updatePagination();
          },
          destroy: function (e) {
            e.params.a11y.enabled && e.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: {
          history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
        },
        create: function () {
          M(this, { history: t({}, ne) });
        },
        on: {
          init: function (e) {
            e.params.history.enabled && e.history.init();
          },
          destroy: function (e) {
            e.params.history.enabled && e.history.destroy();
          },
          "transitionEnd _freeModeNoMomentumRelease": function (e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange: function (e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          M(this, { hashNavigation: t({ initialized: !1 }, le) });
        },
        on: {
          init: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          "transitionEnd _freeModeNoMomentumRelease": function (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange: function (e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        },
        create: function () {
          M(this, { autoplay: t({}, oe, { running: !1, paused: !1 }) });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              r().addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ),
              e.autoplay.attachMouseEvents());
          },
          beforeTransitionStart: function (e, t, a) {
            e.autoplay.running &&
              (a || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.detachMouseEvents(),
              e.autoplay.running && e.autoplay.stop(),
              r().removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          M(this, { fadeEffect: t({}, de) });
        },
        on: {
          beforeInit: function (e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          M(this, { cubeEffect: t({}, pe) });
        },
        on: {
          beforeInit: function (e) {
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "cube" === e.params.effect && e.cubeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "cube" === e.params.effect && e.cubeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          M(this, { flipEffect: t({}, ue) });
        },
        on: {
          beforeInit: function (e) {
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "flip" === e.params.effect && e.flipEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "flip" === e.params.effect && e.flipEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          M(this, { coverflowEffect: t({}, ce) });
        },
        on: {
          beforeInit: function (e) {
            "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function (e) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "coverflow" === e.params.effect &&
              e.coverflowEffect.setTransition(t);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, he) });
        },
        on: {
          beforeInit: function (e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
          },
          slideChange: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          update: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          resize: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          observerUpdate: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          setTransition: function (e, t) {
            var a = e.thumbs.swiper;
            a && a.setTransition(t);
          },
          beforeDestroy: function (e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy();
          },
        },
      },
    ];
  return _.use(ve), _;
});
//# sourceMappingURL=swiper-bundle.min.js.map
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : (a.moment = b());
})(this, function () {
  "use strict";
  function a() {
    return sd.apply(null, arguments);
  }
  function b(a) {
    sd = a;
  }
  function c(a) {
    return (
      a instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(a)
    );
  }
  function d(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }
  function e(a) {
    var b;
    for (b in a) return !1;
    return !0;
  }
  function f(a) {
    return void 0 === a;
  }
  function g(a) {
    return (
      "number" == typeof a ||
      "[object Number]" === Object.prototype.toString.call(a)
    );
  }
  function h(a) {
    return (
      a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    );
  }
  function i(a, b) {
    var c,
      d = [];
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
    return d;
  }
  function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function k(a, b) {
    for (var c in b) j(b, c) && (a[c] = b[c]);
    return (
      j(b, "toString") && (a.toString = b.toString),
      j(b, "valueOf") && (a.valueOf = b.valueOf),
      a
    );
  }
  function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc();
  }
  function m() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    };
  }
  function n(a) {
    return null == a._pf && (a._pf = m()), a._pf;
  }
  function o(a) {
    if (null == a._isValid) {
      var b = n(a),
        c = ud.call(b.parsedDateParts, function (a) {
          return null != a;
        }),
        d =
          !isNaN(a._d.getTime()) &&
          b.overflow < 0 &&
          !b.empty &&
          !b.invalidMonth &&
          !b.invalidWeekday &&
          !b.nullInput &&
          !b.invalidFormat &&
          !b.userInvalidated &&
          (!b.meridiem || (b.meridiem && c));
      if (
        (a._strict &&
          (d =
            d &&
            0 === b.charsLeftOver &&
            0 === b.unusedTokens.length &&
            void 0 === b.bigHour),
        null != Object.isFrozen && Object.isFrozen(a))
      )
        return d;
      a._isValid = d;
    }
    return a._isValid;
  }
  function p(a) {
    var b = l(NaN);
    return null != a ? k(n(b), a) : (n(b).userInvalidated = !0), b;
  }
  function q(a, b) {
    var c, d, e;
    if (
      (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
      f(b._i) || (a._i = b._i),
      f(b._f) || (a._f = b._f),
      f(b._l) || (a._l = b._l),
      f(b._strict) || (a._strict = b._strict),
      f(b._tzm) || (a._tzm = b._tzm),
      f(b._isUTC) || (a._isUTC = b._isUTC),
      f(b._offset) || (a._offset = b._offset),
      f(b._pf) || (a._pf = n(b)),
      f(b._locale) || (a._locale = b._locale),
      vd.length > 0)
    )
      for (c = 0; c < vd.length; c++)
        (d = vd[c]), (e = b[d]), f(e) || (a[d] = e);
    return a;
  }
  function r(b) {
    q(this, b),
      (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      wd === !1 && ((wd = !0), a.updateOffset(this), (wd = !1));
  }
  function s(a) {
    return a instanceof r || (null != a && null != a._isAMomentObject);
  }
  function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }
  function u(a) {
    var b = +a,
      c = 0;
    return 0 !== b && isFinite(b) && (c = t(b)), c;
  }
  function v(a, b, c) {
    var d,
      e = Math.min(a.length, b.length),
      f = Math.abs(a.length - b.length),
      g = 0;
    for (d = 0; d < e; d++)
      ((c && a[d] !== b[d]) || (!c && u(a[d]) !== u(b[d]))) && g++;
    return g + f;
  }
  function w(b) {
    a.suppressDeprecationWarnings === !1 &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + b);
  }
  function x(b, c) {
    var d = !0;
    return k(function () {
      if ((null != a.deprecationHandler && a.deprecationHandler(null, b), d)) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (((e = ""), "object" == typeof arguments[g])) {
            e += "\n[" + g + "] ";
            for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
            e = e.slice(0, -2);
          } else e = arguments[g];
          f.push(e);
        }
        w(
          b +
            "\nArguments: " +
            Array.prototype.slice.call(f).join("") +
            "\n" +
            new Error().stack
        ),
          (d = !1);
      }
      return c.apply(this, arguments);
    }, c);
  }
  function y(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c),
      xd[b] || (w(c), (xd[b] = !0));
  }
  function z(a) {
    return (
      a instanceof Function ||
      "[object Function]" === Object.prototype.toString.call(a)
    );
  }
  function A(a) {
    var b, c;
    for (c in a) (b = a[c]), z(b) ? (this[c] = b) : (this["_" + c] = b);
    (this._config = a),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      ));
  }
  function B(a, b) {
    var c,
      e = k({}, a);
    for (c in b)
      j(b, c) &&
        (d(a[c]) && d(b[c])
          ? ((e[c] = {}), k(e[c], a[c]), k(e[c], b[c]))
          : null != b[c]
          ? (e[c] = b[c])
          : delete e[c]);
    for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
    return e;
  }
  function C(a) {
    null != a && this.set(a);
  }
  function D(a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;
    return z(d) ? d.call(b, c) : d;
  }
  function E(a) {
    var b = this._longDateFormat[a],
      c = this._longDateFormat[a.toUpperCase()];
    return b || !c
      ? b
      : ((this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
          return a.slice(1);
        })),
        this._longDateFormat[a]);
  }
  function F() {
    return this._invalidDate;
  }
  function G(a) {
    return this._ordinal.replace("%d", a);
  }
  function H(a, b, c, d) {
    var e = this._relativeTime[c];
    return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }
  function I(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];
    return z(c) ? c(b) : c.replace(/%s/i, b);
  }
  function J(a, b) {
    var c = a.toLowerCase();
    Hd[c] = Hd[c + "s"] = Hd[b] = a;
  }
  function K(a) {
    return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0;
  }
  function L(a) {
    var b,
      c,
      d = {};
    for (c in a) j(a, c) && ((b = K(c)), b && (d[b] = a[c]));
    return d;
  }
  function M(a, b) {
    Id[a] = b;
  }
  function N(a) {
    var b = [];
    for (var c in a) b.push({ unit: c, priority: Id[c] });
    return (
      b.sort(function (a, b) {
        return a.priority - b.priority;
      }),
      b
    );
  }
  function O(b, c) {
    return function (d) {
      return null != d
        ? (Q(this, b, d), a.updateOffset(this, c), this)
        : P(this, b);
    };
  }
  function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }
  function Q(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }
  function R(a) {
    return (a = K(a)), z(this[a]) ? this[a]() : this;
  }
  function S(a, b) {
    if ("object" == typeof a) {
      a = L(a);
      for (var c = N(a), d = 0; d < c.length; d++)
        this[c[d].unit](a[c[d].unit]);
    } else if (((a = K(a)), z(this[a]))) return this[a](b);
    return this;
  }
  function T(a, b, c) {
    var d = "" + Math.abs(a),
      e = b - d.length,
      f = a >= 0;
    return (
      (f ? (c ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, e)).toString().substr(1) +
      d
    );
  }
  function U(a, b, c, d) {
    var e = d;
    "string" == typeof d &&
      (e = function () {
        return this[d]();
      }),
      a && (Md[a] = e),
      b &&
        (Md[b[0]] = function () {
          return T(e.apply(this, arguments), b[1], b[2]);
        }),
      c &&
        (Md[c] = function () {
          return this.localeData().ordinal(e.apply(this, arguments), a);
        });
  }
  function V(a) {
    return a.match(/\[[\s\S]/)
      ? a.replace(/^\[|\]$/g, "")
      : a.replace(/\\/g, "");
  }
  function W(a) {
    var b,
      c,
      d = a.match(Jd);
    for (b = 0, c = d.length; b < c; b++)
      Md[d[b]] ? (d[b] = Md[d[b]]) : (d[b] = V(d[b]));
    return function (b) {
      var e,
        f = "";
      for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
      return f;
    };
  }
  function X(a, b) {
    return a.isValid()
      ? ((b = Y(b, a.localeData())), (Ld[b] = Ld[b] || W(b)), Ld[b](a))
      : a.localeData().invalidDate();
  }
  function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }
    var d = 5;
    for (Kd.lastIndex = 0; d >= 0 && Kd.test(a); )
      (a = a.replace(Kd, c)), (Kd.lastIndex = 0), (d -= 1);
    return a;
  }
  function Z(a, b, c) {
    ce[a] = z(b)
      ? b
      : function (a, d) {
          return a && c ? c : b;
        };
  }
  function $(a, b) {
    return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a));
  }
  function _(a) {
    return aa(
      a
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (a, b, c, d, e) {
            return b || c || d || e;
          }
        )
    );
  }
  function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function ba(a, b) {
    var c,
      d = b;
    for (
      "string" == typeof a && (a = [a]),
        g(b) &&
          (d = function (a, c) {
            c[b] = u(a);
          }),
        c = 0;
      c < a.length;
      c++
    )
      de[a[c]] = d;
  }
  function ca(a, b) {
    ba(a, function (a, c, d, e) {
      (d._w = d._w || {}), b(a, d._w, d, e);
    });
  }
  function da(a, b, c) {
    null != b && j(de, a) && de[a](b, c._a, c, a);
  }
  function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }
  function fa(a, b) {
    return a
      ? c(this._months)
        ? this._months[a.month()]
        : this._months[
            (this._months.isFormat || oe).test(b) ? "format" : "standalone"
          ][a.month()]
      : c(this._months)
      ? this._months
      : this._months.standalone;
  }
  function ga(a, b) {
    return a
      ? c(this._monthsShort)
        ? this._monthsShort[a.month()]
        : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()]
      : c(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
  }
  function ha(a, b, c) {
    var d,
      e,
      f,
      g = a.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          d = 0;
        d < 12;
        ++d
      )
        (f = l([2e3, d])),
          (this._shortMonthsParse[d] = this.monthsShort(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase());
    return c
      ? "MMM" === b
        ? ((e = ne.call(this._shortMonthsParse, g)), e !== -1 ? e : null)
        : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null)
      : "MMM" === b
      ? ((e = ne.call(this._shortMonthsParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null))
      : ((e = ne.call(this._longMonthsParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._shortMonthsParse, g)), e !== -1 ? e : null));
  }
  function ia(a, b, c) {
    var d, e, f;
    if (this._monthsParseExact) return ha.call(this, a, b, c);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        d = 0;
      d < 12;
      d++
    ) {
      if (
        ((e = l([2e3, d])),
        c &&
          !this._longMonthsParse[d] &&
          ((this._longMonthsParse[d] = new RegExp(
            "^" + this.months(e, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[d] = new RegExp(
            "^" + this.monthsShort(e, "").replace(".", "") + "$",
            "i"
          ))),
        c ||
          this._monthsParse[d] ||
          ((f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, "")),
          (this._monthsParse[d] = new RegExp(f.replace(".", ""), "i"))),
        c && "MMMM" === b && this._longMonthsParse[d].test(a))
      )
        return d;
      if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
      if (!c && this._monthsParse[d].test(a)) return d;
    }
  }
  function ja(a, b) {
    var c;
    if (!a.isValid()) return a;
    if ("string" == typeof b)
      if (/^\d+$/.test(b)) b = u(b);
      else if (((b = a.localeData().monthsParse(b)), !g(b))) return a;
    return (
      (c = Math.min(a.date(), ea(a.year(), b))),
      a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
      a
    );
  }
  function ka(b) {
    return null != b
      ? (ja(this, b), a.updateOffset(this, !0), this)
      : P(this, "Month");
  }
  function la() {
    return ea(this.year(), this.month());
  }
  function ma(a) {
    return this._monthsParseExact
      ? (j(this, "_monthsRegex") || oa.call(this),
        a ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re),
        this._monthsShortStrictRegex && a
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function na(a) {
    return this._monthsParseExact
      ? (j(this, "_monthsRegex") || oa.call(this),
        a ? this._monthsStrictRegex : this._monthsRegex)
      : (j(this, "_monthsRegex") || (this._monthsRegex = se),
        this._monthsStrictRegex && a
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function oa() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d = [],
      e = [],
      f = [];
    for (b = 0; b < 12; b++)
      (c = l([2e3, b])),
        d.push(this.monthsShort(c, "")),
        e.push(this.months(c, "")),
        f.push(this.months(c, "")),
        f.push(this.monthsShort(c, ""));
    for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)
      (d[b] = aa(d[b])), (e[b] = aa(e[b]));
    for (b = 0; b < 24; b++) f[b] = aa(f[b]);
    (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      ));
  }
  function pa(a) {
    return qa(a) ? 366 : 365;
  }
  function qa(a) {
    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
  }
  function ra() {
    return qa(this.year());
  }
  function sa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return (
      a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    );
  }
  function ta(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return (
      a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
      b
    );
  }
  function ua(a, b, c) {
    var d = 7 + b - c,
      e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
    return -e + d - 1;
  }
  function va(a, b, c, d, e) {
    var f,
      g,
      h = (7 + c - d) % 7,
      i = ua(a, d, e),
      j = 1 + 7 * (b - 1) + h + i;
    return (
      j <= 0
        ? ((f = a - 1), (g = pa(f) + j))
        : j > pa(a)
        ? ((f = a + 1), (g = j - pa(a)))
        : ((f = a), (g = j)),
      { year: f, dayOfYear: g }
    );
  }
  function wa(a, b, c) {
    var d,
      e,
      f = ua(a.year(), b, c),
      g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
    return (
      g < 1
        ? ((e = a.year() - 1), (d = g + xa(e, b, c)))
        : g > xa(a.year(), b, c)
        ? ((d = g - xa(a.year(), b, c)), (e = a.year() + 1))
        : ((e = a.year()), (d = g)),
      { week: d, year: e }
    );
  }
  function xa(a, b, c) {
    var d = ua(a, b, c),
      e = ua(a + 1, b, c);
    return (pa(a) - d + e) / 7;
  }
  function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }
  function za() {
    return this._week.dow;
  }
  function Aa() {
    return this._week.doy;
  }
  function Ba(a) {
    var b = this.localeData().week(this);
    return null == a ? b : this.add(7 * (a - b), "d");
  }
  function Ca(a) {
    var b = wa(this, 1, 4).week;
    return null == a ? b : this.add(7 * (a - b), "d");
  }
  function Da(a, b) {
    return "string" != typeof a
      ? a
      : isNaN(a)
      ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null)
      : parseInt(a, 10);
  }
  function Ea(a, b) {
    return "string" == typeof a
      ? b.weekdaysParse(a) % 7 || 7
      : isNaN(a)
      ? null
      : a;
  }
  function Fa(a, b) {
    return a
      ? c(this._weekdays)
        ? this._weekdays[a.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(b) ? "format" : "standalone"
          ][a.day()]
      : c(this._weekdays)
      ? this._weekdays
      : this._weekdays.standalone;
  }
  function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
  }
  function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
  }
  function Ia(a, b, c) {
    var d,
      e,
      f,
      g = a.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          d = 0;
        d < 7;
        ++d
      )
        (f = l([2e3, 1]).day(d)),
          (this._minWeekdaysParse[d] = this.weekdaysMin(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[d] = this.weekdaysShort(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase());
    return c
      ? "dddd" === b
        ? ((e = ne.call(this._weekdaysParse, g)), e !== -1 ? e : null)
        : "ddd" === b
        ? ((e = ne.call(this._shortWeekdaysParse, g)), e !== -1 ? e : null)
        : ((e = ne.call(this._minWeekdaysParse, g)), e !== -1 ? e : null)
      : "dddd" === b
      ? ((e = ne.call(this._weekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._shortWeekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._minWeekdaysParse, g)),
                e !== -1 ? e : null)))
      : "ddd" === b
      ? ((e = ne.call(this._shortWeekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._weekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._minWeekdaysParse, g)),
                e !== -1 ? e : null)))
      : ((e = ne.call(this._minWeekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._weekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._shortWeekdaysParse, g)),
                e !== -1 ? e : null)));
  }
  function Ja(a, b, c) {
    var d, e, f;
    if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        d = 0;
      d < 7;
      d++
    ) {
      if (
        ((e = l([2e3, 1]).day(d)),
        c &&
          !this._fullWeekdaysParse[d] &&
          ((this._fullWeekdaysParse[d] = new RegExp(
            "^" + this.weekdays(e, "").replace(".", ".?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysShort(e, "").replace(".", ".?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
            "i"
          ))),
        this._weekdaysParse[d] ||
          ((f =
            "^" +
            this.weekdays(e, "") +
            "|^" +
            this.weekdaysShort(e, "") +
            "|^" +
            this.weekdaysMin(e, "")),
          (this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i"))),
        c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
      )
        return d;
      if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
      if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
      if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }
  function Ka(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != a
      ? ((a = Da(a, this.localeData())), this.add(a - b, "d"))
      : b;
  }
  function La(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == a ? b : this.add(a - b, "d");
  }
  function Ma(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    if (null != a) {
      var b = Ea(a, this.localeData());
      return this.day(this.day() % 7 ? b : b - 7);
    }
    return this.day() || 7;
  }
  function Na(a) {
    return this._weekdaysParseExact
      ? (j(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye),
        this._weekdaysStrictRegex && a
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function Oa(a) {
    return this._weekdaysParseExact
      ? (j(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze),
        this._weekdaysShortStrictRegex && a
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function Pa(a) {
    return this._weekdaysParseExact
      ? (j(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae),
        this._weekdaysMinStrictRegex && a
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function Qa() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d,
      e,
      f,
      g = [],
      h = [],
      i = [],
      j = [];
    for (b = 0; b < 7; b++)
      (c = l([2e3, 1]).day(b)),
        (d = this.weekdaysMin(c, "")),
        (e = this.weekdaysShort(c, "")),
        (f = this.weekdays(c, "")),
        g.push(d),
        h.push(e),
        i.push(f),
        j.push(d),
        j.push(e),
        j.push(f);
    for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++)
      (h[b] = aa(h[b])), (i[b] = aa(i[b])), (j[b] = aa(j[b]));
    (this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + h.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + g.join("|") + ")",
        "i"
      ));
  }
  function Ra() {
    return this.hours() % 12 || 12;
  }
  function Sa() {
    return this.hours() || 24;
  }
  function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }
  function Ua(a, b) {
    return b._meridiemParse;
  }
  function Va(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }
  function Wa(a, b, c) {
    return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
  }
  function Xa(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }
  function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length; ) {
      for (
        e = Xa(a[f]).split("-"),
          b = e.length,
          c = Xa(a[f + 1]),
          c = c ? c.split("-") : null;
        b > 0;

      ) {
        if ((d = Za(e.slice(0, b).join("-")))) return d;
        if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
        b--;
      }
      f++;
    }
    return null;
  }
  function Za(a) {
    var b = null;
    if (!Fe[a] && "undefined" != typeof module && module && module.exports)
      try {
        (b = Be._abbr), require("./locale/" + a), $a(b);
      } catch (a) {}
    return Fe[a];
  }
  function $a(a, b) {
    var c;
    return a && ((c = f(b) ? bb(a) : _a(a, b)), c && (Be = c)), Be._abbr;
  }
  function _a(a, b) {
    if (null !== b) {
      var c = Ee;
      if (((b.abbr = a), null != Fe[a]))
        y(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (c = Fe[a]._config);
      else if (null != b.parentLocale) {
        if (null == Fe[b.parentLocale])
          return (
            Ge[b.parentLocale] || (Ge[b.parentLocale] = []),
            Ge[b.parentLocale].push({ name: a, config: b }),
            null
          );
        c = Fe[b.parentLocale]._config;
      }
      return (
        (Fe[a] = new C(B(c, b))),
        Ge[a] &&
          Ge[a].forEach(function (a) {
            _a(a.name, a.config);
          }),
        $a(a),
        Fe[a]
      );
    }
    return delete Fe[a], null;
  }
  function ab(a, b) {
    if (null != b) {
      var c,
        d = Ee;
      null != Fe[a] && (d = Fe[a]._config),
        (b = B(d, b)),
        (c = new C(b)),
        (c.parentLocale = Fe[a]),
        (Fe[a] = c),
        $a(a);
    } else null != Fe[a] && (null != Fe[a].parentLocale ? (Fe[a] = Fe[a].parentLocale) : null != Fe[a] && delete Fe[a]);
    return Fe[a];
  }
  function bb(a) {
    var b;
    if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
      return Be;
    if (!c(a)) {
      if ((b = Za(a))) return b;
      a = [a];
    }
    return Ya(a);
  }
  function cb() {
    return Ad(Fe);
  }
  function db(a) {
    var b,
      c = a._a;
    return (
      c &&
        n(a).overflow === -2 &&
        ((b =
          c[fe] < 0 || c[fe] > 11
            ? fe
            : c[ge] < 1 || c[ge] > ea(c[ee], c[fe])
            ? ge
            : c[he] < 0 ||
              c[he] > 24 ||
              (24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]))
            ? he
            : c[ie] < 0 || c[ie] > 59
            ? ie
            : c[je] < 0 || c[je] > 59
            ? je
            : c[ke] < 0 || c[ke] > 999
            ? ke
            : -1),
        n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge),
        n(a)._overflowWeeks && b === -1 && (b = le),
        n(a)._overflowWeekday && b === -1 && (b = me),
        (n(a).overflow = b)),
      a
    );
  }
  function eb(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = a._i,
      i = He.exec(h) || Ie.exec(h);
    if (i) {
      for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
        if (Ke[b][1].exec(i[1])) {
          (e = Ke[b][0]), (d = Ke[b][2] !== !1);
          break;
        }
      if (null == e) return void (a._isValid = !1);
      if (i[3]) {
        for (b = 0, c = Le.length; b < c; b++)
          if (Le[b][1].exec(i[3])) {
            f = (i[2] || " ") + Le[b][0];
            break;
          }
        if (null == f) return void (a._isValid = !1);
      }
      if (!d && null != f) return void (a._isValid = !1);
      if (i[4]) {
        if (!Je.exec(i[4])) return void (a._isValid = !1);
        g = "Z";
      }
      (a._f = e + (f || "") + (g || "")), lb(a);
    } else a._isValid = !1;
  }
  function fb(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = {
        " GMT": " +0000",
        " EDT": " -0400",
        " EST": " -0500",
        " CDT": " -0500",
        " CST": " -0600",
        " MDT": " -0600",
        " MST": " -0700",
        " PDT": " -0700",
        " PST": " -0800",
      },
      k = "YXWVUTSRQPONZABCDEFGHIKLM";
    if (
      ((b = a._i
        .replace(/\([^\)]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s|\s$/g, "")),
      (c = Ne.exec(b)))
    ) {
      if (
        ((d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : ""),
        (e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY ")),
        (f = "HH:mm" + (c[4] ? ":ss" : "")),
        c[1])
      ) {
        var l = new Date(c[2]),
          m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
        if (c[1].substr(0, 3) !== m)
          return (n(a).weekdayMismatch = !0), void (a._isValid = !1);
      }
      switch (c[5].length) {
        case 2:
          0 === i
            ? (h = " +0000")
            : ((i = k.indexOf(c[5][1].toUpperCase()) - 12),
              (h =
                (i < 0 ? " -" : " +") +
                ("" + i).replace(/^-?/, "0").match(/..$/)[0] +
                "00"));
          break;
        case 4:
          h = j[c[5]];
          break;
        default:
          h = j[" GMT"];
      }
      (c[5] = h),
        (a._i = c.splice(1).join("")),
        (g = " ZZ"),
        (a._f = d + e + f + g),
        lb(a),
        (n(a).rfc2822 = !0);
    } else a._isValid = !1;
  }
  function gb(b) {
    var c = Me.exec(b._i);
    return null !== c
      ? void (b._d = new Date(+c[1]))
      : (eb(b),
        void (
          b._isValid === !1 &&
          (delete b._isValid,
          fb(b),
          b._isValid === !1 &&
            (delete b._isValid, a.createFromInputFallback(b)))
        ));
  }
  function hb(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }
  function ib(b) {
    var c = new Date(a.now());
    return b._useUTC
      ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
      : [c.getFullYear(), c.getMonth(), c.getDate()];
  }
  function jb(a) {
    var b,
      c,
      d,
      e,
      f = [];
    if (!a._d) {
      for (
        d = ib(a),
          a._w && null == a._a[ge] && null == a._a[fe] && kb(a),
          null != a._dayOfYear &&
            ((e = hb(a._a[ee], d[ee])),
            (a._dayOfYear > pa(e) || 0 === a._dayOfYear) &&
              (n(a)._overflowDayOfYear = !0),
            (c = ta(e, 0, a._dayOfYear)),
            (a._a[fe] = c.getUTCMonth()),
            (a._a[ge] = c.getUTCDate())),
          b = 0;
        b < 3 && null == a._a[b];
        ++b
      )
        a._a[b] = f[b] = d[b];
      for (; b < 7; b++)
        a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
      24 === a._a[he] &&
        0 === a._a[ie] &&
        0 === a._a[je] &&
        0 === a._a[ke] &&
        ((a._nextDay = !0), (a._a[he] = 0)),
        (a._d = (a._useUTC ? ta : sa).apply(null, f)),
        null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        a._nextDay && (a._a[he] = 24);
    }
  }
  function kb(a) {
    var b, c, d, e, f, g, h, i;
    if (((b = a._w), null != b.GG || null != b.W || null != b.E))
      (f = 1),
        (g = 4),
        (c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year)),
        (d = hb(b.W, 1)),
        (e = hb(b.E, 1)),
        (e < 1 || e > 7) && (i = !0);
    else {
      (f = a._locale._week.dow), (g = a._locale._week.doy);
      var j = wa(tb(), f, g);
      (c = hb(b.gg, a._a[ee], j.year)),
        (d = hb(b.w, j.week)),
        null != b.d
          ? ((e = b.d), (e < 0 || e > 6) && (i = !0))
          : null != b.e
          ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
          : (e = f);
    }
    d < 1 || d > xa(c, f, g)
      ? (n(a)._overflowWeeks = !0)
      : null != i
      ? (n(a)._overflowWeekday = !0)
      : ((h = va(c, d, e, f, g)),
        (a._a[ee] = h.year),
        (a._dayOfYear = h.dayOfYear));
  }
  function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b);
    if (b._f === a.RFC_2822) return void fb(b);
    (b._a = []), (n(b).empty = !0);
    var c,
      d,
      e,
      f,
      g,
      h = "" + b._i,
      i = h.length,
      j = 0;
    for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++)
      (f = e[c]),
        (d = (h.match($(f, b)) || [])[0]),
        d &&
          ((g = h.substr(0, h.indexOf(d))),
          g.length > 0 && n(b).unusedInput.push(g),
          (h = h.slice(h.indexOf(d) + d.length)),
          (j += d.length)),
        Md[f]
          ? (d ? (n(b).empty = !1) : n(b).unusedTokens.push(f), da(f, d, b))
          : b._strict && !d && n(b).unusedTokens.push(f);
    (n(b).charsLeftOver = i - j),
      h.length > 0 && n(b).unusedInput.push(h),
      b._a[he] <= 12 &&
        n(b).bigHour === !0 &&
        b._a[he] > 0 &&
        (n(b).bigHour = void 0),
      (n(b).parsedDateParts = b._a.slice(0)),
      (n(b).meridiem = b._meridiem),
      (b._a[he] = mb(b._locale, b._a[he], b._meridiem)),
      jb(b),
      db(b);
  }
  function mb(a, b, c) {
    var d;
    return null == c
      ? b
      : null != a.meridiemHour
      ? a.meridiemHour(b, c)
      : null != a.isPM
      ? ((d = a.isPM(c)), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b)
      : b;
  }
  function nb(a) {
    var b, c, d, e, f;
    if (0 === a._f.length)
      return (n(a).invalidFormat = !0), void (a._d = new Date(NaN));
    for (e = 0; e < a._f.length; e++)
      (f = 0),
        (b = q({}, a)),
        null != a._useUTC && (b._useUTC = a._useUTC),
        (b._f = a._f[e]),
        lb(b),
        o(b) &&
          ((f += n(b).charsLeftOver),
          (f += 10 * n(b).unusedTokens.length),
          (n(b).score = f),
          (null == d || f < d) && ((d = f), (c = b)));
    k(a, c || b);
  }
  function ob(a) {
    if (!a._d) {
      var b = L(a._i);
      (a._a = i(
        [
          b.year,
          b.month,
          b.day || b.date,
          b.hour,
          b.minute,
          b.second,
          b.millisecond,
        ],
        function (a) {
          return a && parseInt(a, 10);
        }
      )),
        jb(a);
    }
  }
  function pb(a) {
    var b = new r(db(qb(a)));
    return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
  }
  function qb(a) {
    var b = a._i,
      d = a._f;
    return (
      (a._locale = a._locale || bb(a._l)),
      null === b || (void 0 === d && "" === b)
        ? p({ nullInput: !0 })
        : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
          s(b)
            ? new r(db(b))
            : (h(b) ? (a._d = b) : c(d) ? nb(a) : d ? lb(a) : rb(a),
              o(a) || (a._d = null),
              a))
    );
  }
  function rb(b) {
    var e = b._i;
    f(e)
      ? (b._d = new Date(a.now()))
      : h(e)
      ? (b._d = new Date(e.valueOf()))
      : "string" == typeof e
      ? gb(b)
      : c(e)
      ? ((b._a = i(e.slice(0), function (a) {
          return parseInt(a, 10);
        })),
        jb(b))
      : d(e)
      ? ob(b)
      : g(e)
      ? (b._d = new Date(e))
      : a.createFromInputFallback(b);
  }
  function sb(a, b, f, g, h) {
    var i = {};
    return (
      (f !== !0 && f !== !1) || ((g = f), (f = void 0)),
      ((d(a) && e(a)) || (c(a) && 0 === a.length)) && (a = void 0),
      (i._isAMomentObject = !0),
      (i._useUTC = i._isUTC = h),
      (i._l = f),
      (i._i = a),
      (i._f = b),
      (i._strict = g),
      pb(i)
    );
  }
  function tb(a, b, c, d) {
    return sb(a, b, c, d, !1);
  }
  function ub(a, b) {
    var d, e;
    if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return tb();
    for (d = b[0], e = 1; e < b.length; ++e)
      (b[e].isValid() && !b[e][a](d)) || (d = b[e]);
    return d;
  }
  function vb() {
    var a = [].slice.call(arguments, 0);
    return ub("isBefore", a);
  }
  function wb() {
    var a = [].slice.call(arguments, 0);
    return ub("isAfter", a);
  }
  function xb(a) {
    for (var b in a)
      if (Re.indexOf(b) === -1 || (null != a[b] && isNaN(a[b]))) return !1;
    for (var c = !1, d = 0; d < Re.length; ++d)
      if (a[Re[d]]) {
        if (c) return !1;
        parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0);
      }
    return !0;
  }
  function yb() {
    return this._isValid;
  }
  function zb() {
    return Sb(NaN);
  }
  function Ab(a) {
    var b = L(a),
      c = b.year || 0,
      d = b.quarter || 0,
      e = b.month || 0,
      f = b.week || 0,
      g = b.day || 0,
      h = b.hour || 0,
      i = b.minute || 0,
      j = b.second || 0,
      k = b.millisecond || 0;
    (this._isValid = xb(b)),
      (this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60),
      (this._days = +g + 7 * f),
      (this._months = +e + 3 * d + 12 * c),
      (this._data = {}),
      (this._locale = bb()),
      this._bubble();
  }
  function Bb(a) {
    return a instanceof Ab;
  }
  function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }
  function Db(a, b) {
    U(a, 0, 0, function () {
      var a = this.utcOffset(),
        c = "+";
      return (
        a < 0 && ((a = -a), (c = "-")),
        c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
      );
    });
  }
  function Eb(a, b) {
    var c = (b || "").match(a);
    if (null === c) return null;
    var d = c[c.length - 1] || [],
      e = (d + "").match(Se) || ["-", 0, 0],
      f = +(60 * e[1]) + u(e[2]);
    return 0 === f ? 0 : "+" === e[0] ? f : -f;
  }
  function Fb(b, c) {
    var d, e;
    return c._isUTC
      ? ((d = c.clone()),
        (e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf()),
        d._d.setTime(d._d.valueOf() + e),
        a.updateOffset(d, !1),
        d)
      : tb(b).local();
  }
  function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }
  function Hb(b, c, d) {
    var e,
      f = this._offset || 0;
    if (!this.isValid()) return null != b ? this : NaN;
    if (null != b) {
      if ("string" == typeof b) {
        if (((b = Eb(_d, b)), null === b)) return this;
      } else Math.abs(b) < 16 && !d && (b = 60 * b);
      return (
        !this._isUTC && c && (e = Gb(this)),
        (this._offset = b),
        (this._isUTC = !0),
        null != e && this.add(e, "m"),
        f !== b &&
          (!c || this._changeInProgress
            ? Xb(this, Sb(b - f, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              a.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }
    return this._isUTC ? f : Gb(this);
  }
  function Ib(a, b) {
    return null != a
      ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
      : -this.utcOffset();
  }
  function Jb(a) {
    return this.utcOffset(0, a);
  }
  function Kb(a) {
    return (
      this._isUTC &&
        (this.utcOffset(0, a),
        (this._isUTC = !1),
        a && this.subtract(Gb(this), "m")),
      this
    );
  }
  function Lb() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" == typeof this._i) {
      var a = Eb($d, this._i);
      null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
    }
    return this;
  }
  function Mb(a) {
    return (
      !!this.isValid() &&
      ((a = a ? tb(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
    );
  }
  function Nb() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted;
    var a = {};
    if ((q(a, this), (a = qb(a)), a._a)) {
      var b = a._isUTC ? l(a._a) : tb(a._a);
      this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;
    return this._isDSTShifted;
  }
  function Pb() {
    return !!this.isValid() && !this._isUTC;
  }
  function Qb() {
    return !!this.isValid() && this._isUTC;
  }
  function Rb() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  function Sb(a, b) {
    var c,
      d,
      e,
      f = a,
      h = null;
    return (
      Bb(a)
        ? (f = { ms: a._milliseconds, d: a._days, M: a._months })
        : g(a)
        ? ((f = {}), b ? (f[b] = a) : (f.milliseconds = a))
        : (h = Te.exec(a))
        ? ((c = "-" === h[1] ? -1 : 1),
          (f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c,
          }))
        : (h = Ue.exec(a))
        ? ((c = "-" === h[1] ? -1 : 1),
          (f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c),
          }))
        : null == f
        ? (f = {})
        : "object" == typeof f &&
          ("from" in f || "to" in f) &&
          ((e = Vb(tb(f.from), tb(f.to))),
          (f = {}),
          (f.ms = e.milliseconds),
          (f.M = e.months)),
      (d = new Ab(f)),
      Bb(a) && j(a, "_locale") && (d._locale = a._locale),
      d
    );
  }
  function Tb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b;
  }
  function Ub(a, b) {
    var c = { milliseconds: 0, months: 0 };
    return (
      (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
      a.clone().add(c.months, "M").isAfter(b) && --c.months,
      (c.milliseconds = +b - +a.clone().add(c.months, "M")),
      c
    );
  }
  function Vb(a, b) {
    var c;
    return a.isValid() && b.isValid()
      ? ((b = Fb(b, a)),
        a.isBefore(b)
          ? (c = Ub(a, b))
          : ((c = Ub(b, a)),
            (c.milliseconds = -c.milliseconds),
            (c.months = -c.months)),
        c)
      : { milliseconds: 0, months: 0 };
  }
  function Wb(a, b) {
    return function (c, d) {
      var e, f;
      return (
        null === d ||
          isNaN(+d) ||
          (y(
            b,
            "moment()." +
              b +
              "(period, number) is deprecated. Please use moment()." +
              b +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (f = c),
          (c = d),
          (d = f)),
        (c = "string" == typeof c ? +c : c),
        (e = Sb(c, d)),
        Xb(this, e, a),
        this
      );
    };
  }
  function Xb(b, c, d, e) {
    var f = c._milliseconds,
      g = Cb(c._days),
      h = Cb(c._months);
    b.isValid() &&
      ((e = null == e || e),
      f && b._d.setTime(b._d.valueOf() + f * d),
      g && Q(b, "Date", P(b, "Date") + g * d),
      h && ja(b, P(b, "Month") + h * d),
      e && a.updateOffset(b, g || h));
  }
  function Yb(a, b) {
    var c = a.diff(b, "days", !0);
    return c < -6
      ? "sameElse"
      : c < -1
      ? "lastWeek"
      : c < 0
      ? "lastDay"
      : c < 1
      ? "sameDay"
      : c < 2
      ? "nextDay"
      : c < 7
      ? "nextWeek"
      : "sameElse";
  }
  function Zb(b, c) {
    var d = b || tb(),
      e = Fb(d, this).startOf("day"),
      f = a.calendarFormat(this, e) || "sameElse",
      g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
    return this.format(g || this.localeData().calendar(f, this, tb(d)));
  }
  function $b() {
    return new r(this);
  }
  function _b(a, b) {
    var c = s(a) ? a : tb(a);
    return (
      !(!this.isValid() || !c.isValid()) &&
      ((b = K(f(b) ? "millisecond" : b)),
      "millisecond" === b
        ? this.valueOf() > c.valueOf()
        : c.valueOf() < this.clone().startOf(b).valueOf())
    );
  }
  function ac(a, b) {
    var c = s(a) ? a : tb(a);
    return (
      !(!this.isValid() || !c.isValid()) &&
      ((b = K(f(b) ? "millisecond" : b)),
      "millisecond" === b
        ? this.valueOf() < c.valueOf()
        : this.clone().endOf(b).valueOf() < c.valueOf())
    );
  }
  function bc(a, b, c, d) {
    return (
      (d = d || "()"),
      ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) &&
        (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    );
  }
  function cc(a, b) {
    var c,
      d = s(a) ? a : tb(a);
    return (
      !(!this.isValid() || !d.isValid()) &&
      ((b = K(b || "millisecond")),
      "millisecond" === b
        ? this.valueOf() === d.valueOf()
        : ((c = d.valueOf()),
          this.clone().startOf(b).valueOf() <= c &&
            c <= this.clone().endOf(b).valueOf()))
    );
  }
  function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }
  function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }
  function fc(a, b, c) {
    var d, e, f, g;
    return this.isValid()
      ? ((d = Fb(a, this)),
        d.isValid()
          ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
            (b = K(b)),
            "year" === b || "month" === b || "quarter" === b
              ? ((g = gc(this, d)),
                "quarter" === b ? (g /= 3) : "year" === b && (g /= 12))
              : ((f = this - d),
                (g =
                  "second" === b
                    ? f / 1e3
                    : "minute" === b
                    ? f / 6e4
                    : "hour" === b
                    ? f / 36e5
                    : "day" === b
                    ? (f - e) / 864e5
                    : "week" === b
                    ? (f - e) / 6048e5
                    : f)),
            c ? g : t(g))
          : NaN)
      : NaN;
  }
  function gc(a, b) {
    var c,
      d,
      e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
      f = a.clone().add(e, "months");
    return (
      b - f < 0
        ? ((c = a.clone().add(e - 1, "months")), (d = (b - f) / (f - c)))
        : ((c = a.clone().add(e + 1, "months")), (d = (b - f) / (c - f))),
      -(e + d) || 0
    );
  }
  function hc() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function ic() {
    if (!this.isValid()) return null;
    var a = this.clone().utc();
    return a.year() < 0 || a.year() > 9999
      ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      : z(Date.prototype.toISOString)
      ? this.toDate().toISOString()
      : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }
  function jc() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var a = "moment",
      b = "";
    this.isLocal() ||
      ((a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
      (b = "Z"));
    var c = "[" + a + '("]',
      d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
      e = "-MM-DD[T]HH:mm:ss.SSS",
      f = b + '[")]';
    return this.format(c + d + e + f);
  }
  function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
    var c = X(this, b);
    return this.localeData().postformat(c);
  }
  function lc(a, b) {
    return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
      ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate();
  }
  function mc(a) {
    return this.from(tb(), a);
  }
  function nc(a, b) {
    return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
      ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate();
  }
  function oc(a) {
    return this.to(tb(), a);
  }
  function pc(a) {
    var b;
    return void 0 === a
      ? this._locale._abbr
      : ((b = bb(a)), null != b && (this._locale = b), this);
  }
  function qc() {
    return this._locale;
  }
  function rc(a) {
    switch ((a = K(a))) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0);
    }
    return (
      "week" === a && this.weekday(0),
      "isoWeek" === a && this.isoWeekday(1),
      "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
      this
    );
  }
  function sc(a) {
    return (
      (a = K(a)),
      void 0 === a || "millisecond" === a
        ? this
        : ("date" === a && (a = "day"),
          this.startOf(a)
            .add(1, "isoWeek" === a ? "week" : a)
            .subtract(1, "ms"))
    );
  }
  function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }
  function uc() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function vc() {
    return new Date(this.valueOf());
  }
  function wc() {
    var a = this;
    return [
      a.year(),
      a.month(),
      a.date(),
      a.hour(),
      a.minute(),
      a.second(),
      a.millisecond(),
    ];
  }
  function xc() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds(),
    };
  }
  function yc() {
    return this.isValid() ? this.toISOString() : null;
  }
  function zc() {
    return o(this);
  }
  function Ac() {
    return k({}, n(this));
  }
  function Bc() {
    return n(this).overflow;
  }
  function Cc() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  function Dc(a, b) {
    U(0, [a, a.length], 0, b);
  }
  function Ec(a) {
    return Ic.call(
      this,
      a,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function Gc() {
    return xa(this.year(), 1, 4);
  }
  function Hc() {
    var a = this.localeData()._week;
    return xa(this.year(), a.dow, a.doy);
  }
  function Ic(a, b, c, d, e) {
    var f;
    return null == a
      ? wa(this, d, e).year
      : ((f = xa(a, d, e)), b > f && (b = f), Jc.call(this, a, b, c, d, e));
  }
  function Jc(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
      g = ta(f.year, 0, f.dayOfYear);
    return (
      this.year(g.getUTCFullYear()),
      this.month(g.getUTCMonth()),
      this.date(g.getUTCDate()),
      this
    );
  }
  function Kc(a) {
    return null == a
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (a - 1) + (this.month() % 3));
  }
  function Lc(a) {
    var b =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return null == a ? b : this.add(a - b, "d");
  }
  function Mc(a, b) {
    b[ke] = u(1e3 * ("0." + a));
  }
  function Nc() {
    return this._isUTC ? "UTC" : "";
  }
  function Oc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  function Pc(a) {
    return tb(1e3 * a);
  }
  function Qc() {
    return tb.apply(null, arguments).parseZone();
  }
  function Rc(a) {
    return a;
  }
  function Sc(a, b, c, d) {
    var e = bb(),
      f = l().set(d, b);
    return e[c](f, a);
  }
  function Tc(a, b, c) {
    if ((g(a) && ((b = a), (a = void 0)), (a = a || ""), null != b))
      return Sc(a, b, c, "month");
    var d,
      e = [];
    for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
    return e;
  }
  function Uc(a, b, c, d) {
    "boolean" == typeof a
      ? (g(b) && ((c = b), (b = void 0)), (b = b || ""))
      : ((b = a),
        (c = b),
        (a = !1),
        g(b) && ((c = b), (b = void 0)),
        (b = b || ""));
    var e = bb(),
      f = a ? e._week.dow : 0;
    if (null != c) return Sc(b, (c + f) % 7, d, "day");
    var h,
      i = [];
    for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
    return i;
  }
  function Vc(a, b) {
    return Tc(a, b, "months");
  }
  function Wc(a, b) {
    return Tc(a, b, "monthsShort");
  }
  function Xc(a, b, c) {
    return Uc(a, b, c, "weekdays");
  }
  function Yc(a, b, c) {
    return Uc(a, b, c, "weekdaysShort");
  }
  function Zc(a, b, c) {
    return Uc(a, b, c, "weekdaysMin");
  }
  function $c() {
    var a = this._data;
    return (
      (this._milliseconds = df(this._milliseconds)),
      (this._days = df(this._days)),
      (this._months = df(this._months)),
      (a.milliseconds = df(a.milliseconds)),
      (a.seconds = df(a.seconds)),
      (a.minutes = df(a.minutes)),
      (a.hours = df(a.hours)),
      (a.months = df(a.months)),
      (a.years = df(a.years)),
      this
    );
  }
  function _c(a, b, c, d) {
    var e = Sb(b, c);
    return (
      (a._milliseconds += d * e._milliseconds),
      (a._days += d * e._days),
      (a._months += d * e._months),
      a._bubble()
    );
  }
  function ad(a, b) {
    return _c(this, a, b, 1);
  }
  function bd(a, b) {
    return _c(this, a, b, -1);
  }
  function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }
  function dd() {
    var a,
      b,
      c,
      d,
      e,
      f = this._milliseconds,
      g = this._days,
      h = this._months,
      i = this._data;
    return (
      (f >= 0 && g >= 0 && h >= 0) ||
        (f <= 0 && g <= 0 && h <= 0) ||
        ((f += 864e5 * cd(fd(h) + g)), (g = 0), (h = 0)),
      (i.milliseconds = f % 1e3),
      (a = t(f / 1e3)),
      (i.seconds = a % 60),
      (b = t(a / 60)),
      (i.minutes = b % 60),
      (c = t(b / 60)),
      (i.hours = c % 24),
      (g += t(c / 24)),
      (e = t(ed(g))),
      (h += e),
      (g -= cd(fd(e))),
      (d = t(h / 12)),
      (h %= 12),
      (i.days = g),
      (i.months = h),
      (i.years = d),
      this
    );
  }
  function ed(a) {
    return (4800 * a) / 146097;
  }
  function fd(a) {
    return (146097 * a) / 4800;
  }
  function gd(a) {
    if (!this.isValid()) return NaN;
    var b,
      c,
      d = this._milliseconds;
    if (((a = K(a)), "month" === a || "year" === a))
      return (
        (b = this._days + d / 864e5),
        (c = this._months + ed(b)),
        "month" === a ? c : c / 12
      );
    switch (((b = this._days + Math.round(fd(this._months))), a)) {
      case "week":
        return b / 7 + d / 6048e5;
      case "day":
        return b + d / 864e5;
      case "hour":
        return 24 * b + d / 36e5;
      case "minute":
        return 1440 * b + d / 6e4;
      case "second":
        return 86400 * b + d / 1e3;
      case "millisecond":
        return Math.floor(864e5 * b) + d;
      default:
        throw new Error("Unknown unit " + a);
    }
  }
  function hd() {
    return this.isValid()
      ? this._milliseconds +
          864e5 * this._days +
          (this._months % 12) * 2592e6 +
          31536e6 * u(this._months / 12)
      : NaN;
  }
  function id(a) {
    return function () {
      return this.as(a);
    };
  }
  function jd(a) {
    return (a = K(a)), this.isValid() ? this[a + "s"]() : NaN;
  }
  function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }
  function ld() {
    return t(this.days() / 7);
  }
  function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }
  function nd(a, b, c) {
    var d = Sb(a).abs(),
      e = uf(d.as("s")),
      f = uf(d.as("m")),
      g = uf(d.as("h")),
      h = uf(d.as("d")),
      i = uf(d.as("M")),
      j = uf(d.as("y")),
      k = (e <= vf.ss && ["s", e]) ||
        (e < vf.s && ["ss", e]) ||
        (f <= 1 && ["m"]) ||
        (f < vf.m && ["mm", f]) ||
        (g <= 1 && ["h"]) ||
        (g < vf.h && ["hh", g]) ||
        (h <= 1 && ["d"]) ||
        (h < vf.d && ["dd", h]) ||
        (i <= 1 && ["M"]) ||
        (i < vf.M && ["MM", i]) ||
        (j <= 1 && ["y"]) || ["yy", j];
    return (k[2] = b), (k[3] = +a > 0), (k[4] = c), md.apply(null, k);
  }
  function od(a) {
    return void 0 === a ? uf : "function" == typeof a && ((uf = a), !0);
  }
  function pd(a, b) {
    return (
      void 0 !== vf[a] &&
      (void 0 === b ? vf[a] : ((vf[a] = b), "s" === a && (vf.ss = b - 1), !0))
    );
  }
  function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var b = this.localeData(),
      c = nd(this, !a, b);
    return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }
  function rd() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var a,
      b,
      c,
      d = wf(this._milliseconds) / 1e3,
      e = wf(this._days),
      f = wf(this._months);
    (a = t(d / 60)),
      (b = t(a / 60)),
      (d %= 60),
      (a %= 60),
      (c = t(f / 12)),
      (f %= 12);
    var g = c,
      h = f,
      i = e,
      j = b,
      k = a,
      l = d,
      m = this.asSeconds();
    return m
      ? (m < 0 ? "-" : "") +
          "P" +
          (g ? g + "Y" : "") +
          (h ? h + "M" : "") +
          (i ? i + "D" : "") +
          (j || k || l ? "T" : "") +
          (j ? j + "H" : "") +
          (k ? k + "M" : "") +
          (l ? l + "S" : "")
      : "P0D";
  }
  var sd, td;
  td = Array.prototype.some
    ? Array.prototype.some
    : function (a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
          if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1;
      };
  var ud = td,
    vd = (a.momentProperties = []),
    wd = !1,
    xd = {};
  (a.suppressDeprecationWarnings = !1), (a.deprecationHandler = null);
  var yd;
  yd = Object.keys
    ? Object.keys
    : function (a) {
        var b,
          c = [];
        for (b in a) j(a, b) && c.push(b);
        return c;
      };
  var zd,
    Ad = yd,
    Bd = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    },
    Cd = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    Dd = "Invalid date",
    Ed = "%d",
    Fd = /\d{1,2}/,
    Gd = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
    Hd = {},
    Id = {},
    Jd =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Ld = {},
    Md = {},
    Nd = /\d/,
    Od = /\d\d/,
    Pd = /\d{3}/,
    Qd = /\d{4}/,
    Rd = /[+-]?\d{6}/,
    Sd = /\d\d?/,
    Td = /\d\d\d\d?/,
    Ud = /\d\d\d\d\d\d?/,
    Vd = /\d{1,3}/,
    Wd = /\d{1,4}/,
    Xd = /[+-]?\d{1,6}/,
    Yd = /\d+/,
    Zd = /[+-]?\d+/,
    $d = /Z|[+-]\d\d:?\d\d/gi,
    _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[+-]?\d+(\.\d{1,3})?/,
    be =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    ce = {},
    de = {},
    ee = 0,
    fe = 1,
    ge = 2,
    he = 3,
    ie = 4,
    je = 5,
    ke = 6,
    le = 7,
    me = 8;
  zd = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (a) {
        var b;
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return -1;
      };
  var ne = zd;
  U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }),
    U("MMM", 0, 0, function (a) {
      return this.localeData().monthsShort(this, a);
    }),
    U("MMMM", 0, 0, function (a) {
      return this.localeData().months(this, a);
    }),
    J("month", "M"),
    M("month", 8),
    Z("M", Sd),
    Z("MM", Sd, Od),
    Z("MMM", function (a, b) {
      return b.monthsShortRegex(a);
    }),
    Z("MMMM", function (a, b) {
      return b.monthsRegex(a);
    }),
    ba(["M", "MM"], function (a, b) {
      b[fe] = u(a) - 1;
    }),
    ba(["MMM", "MMMM"], function (a, b, c, d) {
      var e = c._locale.monthsParse(a, d, c._strict);
      null != e ? (b[fe] = e) : (n(c).invalidMonth = a);
    });
  var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    pe =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    re = be,
    se = be;
  U("Y", 0, 0, function () {
    var a = this.year();
    return a <= 9999 ? "" + a : "+" + a;
  }),
    U(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    U(0, ["YYYY", 4], 0, "year"),
    U(0, ["YYYYY", 5], 0, "year"),
    U(0, ["YYYYYY", 6, !0], 0, "year"),
    J("year", "y"),
    M("year", 1),
    Z("Y", Zd),
    Z("YY", Sd, Od),
    Z("YYYY", Wd, Qd),
    Z("YYYYY", Xd, Rd),
    Z("YYYYYY", Xd, Rd),
    ba(["YYYYY", "YYYYYY"], ee),
    ba("YYYY", function (b, c) {
      c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
    }),
    ba("YY", function (b, c) {
      c[ee] = a.parseTwoDigitYear(b);
    }),
    ba("Y", function (a, b) {
      b[ee] = parseInt(a, 10);
    }),
    (a.parseTwoDigitYear = function (a) {
      return u(a) + (u(a) > 68 ? 1900 : 2e3);
    });
  var te = O("FullYear", !0);
  U("w", ["ww", 2], "wo", "week"),
    U("W", ["WW", 2], "Wo", "isoWeek"),
    J("week", "w"),
    J("isoWeek", "W"),
    M("week", 5),
    M("isoWeek", 5),
    Z("w", Sd),
    Z("ww", Sd, Od),
    Z("W", Sd),
    Z("WW", Sd, Od),
    ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
      b[d.substr(0, 1)] = u(a);
    });
  var ue = { dow: 0, doy: 6 };
  U("d", 0, "do", "day"),
    U("dd", 0, 0, function (a) {
      return this.localeData().weekdaysMin(this, a);
    }),
    U("ddd", 0, 0, function (a) {
      return this.localeData().weekdaysShort(this, a);
    }),
    U("dddd", 0, 0, function (a) {
      return this.localeData().weekdays(this, a);
    }),
    U("e", 0, 0, "weekday"),
    U("E", 0, 0, "isoWeekday"),
    J("day", "d"),
    J("weekday", "e"),
    J("isoWeekday", "E"),
    M("day", 11),
    M("weekday", 11),
    M("isoWeekday", 11),
    Z("d", Sd),
    Z("e", Sd),
    Z("E", Sd),
    Z("dd", function (a, b) {
      return b.weekdaysMinRegex(a);
    }),
    Z("ddd", function (a, b) {
      return b.weekdaysShortRegex(a);
    }),
    Z("dddd", function (a, b) {
      return b.weekdaysRegex(a);
    }),
    ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
      var e = c._locale.weekdaysParse(a, d, c._strict);
      null != e ? (b.d = e) : (n(c).invalidWeekday = a);
    }),
    ca(["d", "e", "E"], function (a, b, c, d) {
      b[d] = u(a);
    });
  var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    ye = be,
    ze = be,
    Ae = be;
  U("H", ["HH", 2], 0, "hour"),
    U("h", ["hh", 2], 0, Ra),
    U("k", ["kk", 2], 0, Sa),
    U("hmm", 0, 0, function () {
      return "" + Ra.apply(this) + T(this.minutes(), 2);
    }),
    U("hmmss", 0, 0, function () {
      return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
    }),
    U("Hmm", 0, 0, function () {
      return "" + this.hours() + T(this.minutes(), 2);
    }),
    U("Hmmss", 0, 0, function () {
      return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
    }),
    Ta("a", !0),
    Ta("A", !1),
    J("hour", "h"),
    M("hour", 13),
    Z("a", Ua),
    Z("A", Ua),
    Z("H", Sd),
    Z("h", Sd),
    Z("k", Sd),
    Z("HH", Sd, Od),
    Z("hh", Sd, Od),
    Z("kk", Sd, Od),
    Z("hmm", Td),
    Z("hmmss", Ud),
    Z("Hmm", Td),
    Z("Hmmss", Ud),
    ba(["H", "HH"], he),
    ba(["k", "kk"], function (a, b, c) {
      var d = u(a);
      b[he] = 24 === d ? 0 : d;
    }),
    ba(["a", "A"], function (a, b, c) {
      (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
    }),
    ba(["h", "hh"], function (a, b, c) {
      (b[he] = u(a)), (n(c).bigHour = !0);
    }),
    ba("hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d))),
        (n(c).bigHour = !0);
    }),
    ba("hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d, 2))),
        (b[je] = u(a.substr(e))),
        (n(c).bigHour = !0);
    }),
    ba("Hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[he] = u(a.substr(0, d))), (b[ie] = u(a.substr(d)));
    }),
    ba("Hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d, 2))),
        (b[je] = u(a.substr(e)));
    });
  var Be,
    Ce = /[ap]\.?m?\.?/i,
    De = O("Hours", !0),
    Ee = {
      calendar: Bd,
      longDateFormat: Cd,
      invalidDate: Dd,
      ordinal: Ed,
      dayOfMonthOrdinalParse: Fd,
      relativeTime: Gd,
      months: pe,
      monthsShort: qe,
      week: ue,
      weekdays: ve,
      weekdaysMin: xe,
      weekdaysShort: we,
      meridiemParse: Ce,
    },
    Fe = {},
    Ge = {},
    He =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Ie =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Je = /Z|[+-]\d\d(?::?\d\d)?/,
    Ke = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
    ],
    Le = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    Me = /^\/?Date\((\-?\d+)/i,
    Ne =
      /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
  (a.createFromInputFallback = x(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (a) {
      a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }
  )),
    (a.ISO_8601 = function () {}),
    (a.RFC_2822 = function () {});
  var Oe = x(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a < this ? this : a) : p();
      }
    ),
    Pe = x(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a > this ? this : a) : p();
      }
    ),
    Qe = function () {
      return Date.now ? Date.now() : +new Date();
    },
    Re = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  Db("Z", ":"),
    Db("ZZ", ""),
    Z("Z", _d),
    Z("ZZ", _d),
    ba(["Z", "ZZ"], function (a, b, c) {
      (c._useUTC = !0), (c._tzm = Eb(_d, a));
    });
  var Se = /([\+\-]|\d\d)/gi;
  a.updateOffset = function () {};
  var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Ue =
      /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  (Sb.fn = Ab.prototype), (Sb.invalid = zb);
  var Ve = Wb(1, "add"),
    We = Wb(-1, "subtract");
  (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  var Xe = x(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (a) {
      return void 0 === a ? this.localeData() : this.locale(a);
    }
  );
  U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
    U(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Dc("gggg", "weekYear"),
    Dc("ggggg", "weekYear"),
    Dc("GGGG", "isoWeekYear"),
    Dc("GGGGG", "isoWeekYear"),
    J("weekYear", "gg"),
    J("isoWeekYear", "GG"),
    M("weekYear", 1),
    M("isoWeekYear", 1),
    Z("G", Zd),
    Z("g", Zd),
    Z("GG", Sd, Od),
    Z("gg", Sd, Od),
    Z("GGGG", Wd, Qd),
    Z("gggg", Wd, Qd),
    Z("GGGGG", Xd, Rd),
    Z("ggggg", Xd, Rd),
    ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
      b[d.substr(0, 2)] = u(a);
    }),
    ca(["gg", "GG"], function (b, c, d, e) {
      c[e] = a.parseTwoDigitYear(b);
    }),
    U("Q", 0, "Qo", "quarter"),
    J("quarter", "Q"),
    M("quarter", 7),
    Z("Q", Nd),
    ba("Q", function (a, b) {
      b[fe] = 3 * (u(a) - 1);
    }),
    U("D", ["DD", 2], "Do", "date"),
    J("date", "D"),
    M("date", 9),
    Z("D", Sd),
    Z("DD", Sd, Od),
    Z("Do", function (a, b) {
      return a
        ? b._dayOfMonthOrdinalParse || b._ordinalParse
        : b._dayOfMonthOrdinalParseLenient;
    }),
    ba(["D", "DD"], ge),
    ba("Do", function (a, b) {
      b[ge] = u(a.match(Sd)[0], 10);
    });
  var Ye = O("Date", !0);
  U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    J("dayOfYear", "DDD"),
    M("dayOfYear", 4),
    Z("DDD", Vd),
    Z("DDDD", Pd),
    ba(["DDD", "DDDD"], function (a, b, c) {
      c._dayOfYear = u(a);
    }),
    U("m", ["mm", 2], 0, "minute"),
    J("minute", "m"),
    M("minute", 14),
    Z("m", Sd),
    Z("mm", Sd, Od),
    ba(["m", "mm"], ie);
  var Ze = O("Minutes", !1);
  U("s", ["ss", 2], 0, "second"),
    J("second", "s"),
    M("second", 15),
    Z("s", Sd),
    Z("ss", Sd, Od),
    ba(["s", "ss"], je);
  var $e = O("Seconds", !1);
  U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }),
    U(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    }),
    U(0, ["SSS", 3], 0, "millisecond"),
    U(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond();
    }),
    U(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond();
    }),
    U(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond();
    }),
    U(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond();
    }),
    U(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond();
    }),
    U(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond();
    }),
    J("millisecond", "ms"),
    M("millisecond", 16),
    Z("S", Vd, Nd),
    Z("SS", Vd, Od),
    Z("SSS", Vd, Pd);
  var _e;
  for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
  for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
  var af = O("Milliseconds", !1);
  U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
  var bf = r.prototype;
  (bf.add = Ve),
    (bf.calendar = Zb),
    (bf.clone = $b),
    (bf.diff = fc),
    (bf.endOf = sc),
    (bf.format = kc),
    (bf.from = lc),
    (bf.fromNow = mc),
    (bf.to = nc),
    (bf.toNow = oc),
    (bf.get = R),
    (bf.invalidAt = Bc),
    (bf.isAfter = _b),
    (bf.isBefore = ac),
    (bf.isBetween = bc),
    (bf.isSame = cc),
    (bf.isSameOrAfter = dc),
    (bf.isSameOrBefore = ec),
    (bf.isValid = zc),
    (bf.lang = Xe),
    (bf.locale = pc),
    (bf.localeData = qc),
    (bf.max = Pe),
    (bf.min = Oe),
    (bf.parsingFlags = Ac),
    (bf.set = S),
    (bf.startOf = rc),
    (bf.subtract = We),
    (bf.toArray = wc),
    (bf.toObject = xc),
    (bf.toDate = vc),
    (bf.toISOString = ic),
    (bf.inspect = jc),
    (bf.toJSON = yc),
    (bf.toString = hc),
    (bf.unix = uc),
    (bf.valueOf = tc),
    (bf.creationData = Cc),
    (bf.year = te),
    (bf.isLeapYear = ra),
    (bf.weekYear = Ec),
    (bf.isoWeekYear = Fc),
    (bf.quarter = bf.quarters = Kc),
    (bf.month = ka),
    (bf.daysInMonth = la),
    (bf.week = bf.weeks = Ba),
    (bf.isoWeek = bf.isoWeeks = Ca),
    (bf.weeksInYear = Hc),
    (bf.isoWeeksInYear = Gc),
    (bf.date = Ye),
    (bf.day = bf.days = Ka),
    (bf.weekday = La),
    (bf.isoWeekday = Ma),
    (bf.dayOfYear = Lc),
    (bf.hour = bf.hours = De),
    (bf.minute = bf.minutes = Ze),
    (bf.second = bf.seconds = $e),
    (bf.millisecond = bf.milliseconds = af),
    (bf.utcOffset = Hb),
    (bf.utc = Jb),
    (bf.local = Kb),
    (bf.parseZone = Lb),
    (bf.hasAlignedHourOffset = Mb),
    (bf.isDST = Nb),
    (bf.isLocal = Pb),
    (bf.isUtcOffset = Qb),
    (bf.isUtc = Rb),
    (bf.isUTC = Rb),
    (bf.zoneAbbr = Nc),
    (bf.zoneName = Oc),
    (bf.dates = x("dates accessor is deprecated. Use date instead.", Ye)),
    (bf.months = x("months accessor is deprecated. Use month instead", ka)),
    (bf.years = x("years accessor is deprecated. Use year instead", te)),
    (bf.zone = x(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      Ib
    )),
    (bf.isDSTShifted = x(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      Ob
    ));
  var cf = C.prototype;
  (cf.calendar = D),
    (cf.longDateFormat = E),
    (cf.invalidDate = F),
    (cf.ordinal = G),
    (cf.preparse = Rc),
    (cf.postformat = Rc),
    (cf.relativeTime = H),
    (cf.pastFuture = I),
    (cf.set = A),
    (cf.months = fa),
    (cf.monthsShort = ga),
    (cf.monthsParse = ia),
    (cf.monthsRegex = na),
    (cf.monthsShortRegex = ma),
    (cf.week = ya),
    (cf.firstDayOfYear = Aa),
    (cf.firstDayOfWeek = za),
    (cf.weekdays = Fa),
    (cf.weekdaysMin = Ha),
    (cf.weekdaysShort = Ga),
    (cf.weekdaysParse = Ja),
    (cf.weekdaysRegex = Na),
    (cf.weekdaysShortRegex = Oa),
    (cf.weekdaysMinRegex = Pa),
    (cf.isPM = Va),
    (cf.meridiem = Wa),
    $a("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (a) {
        var b = a % 10,
          c =
            1 === u((a % 100) / 10)
              ? "th"
              : 1 === b
              ? "st"
              : 2 === b
              ? "nd"
              : 3 === b
              ? "rd"
              : "th";
        return a + c;
      },
    }),
    (a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a)),
    (a.langData = x(
      "moment.langData is deprecated. Use moment.localeData instead.",
      bb
    ));
  var df = Math.abs,
    ef = id("ms"),
    ff = id("s"),
    gf = id("m"),
    hf = id("h"),
    jf = id("d"),
    kf = id("w"),
    lf = id("M"),
    mf = id("y"),
    nf = kd("milliseconds"),
    of = kd("seconds"),
    pf = kd("minutes"),
    qf = kd("hours"),
    rf = kd("days"),
    sf = kd("months"),
    tf = kd("years"),
    uf = Math.round,
    vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
    wf = Math.abs,
    xf = Ab.prototype;
  return (
    (xf.isValid = yb),
    (xf.abs = $c),
    (xf.add = ad),
    (xf.subtract = bd),
    (xf.as = gd),
    (xf.asMilliseconds = ef),
    (xf.asSeconds = ff),
    (xf.asMinutes = gf),
    (xf.asHours = hf),
    (xf.asDays = jf),
    (xf.asWeeks = kf),
    (xf.asMonths = lf),
    (xf.asYears = mf),
    (xf.valueOf = hd),
    (xf._bubble = dd),
    (xf.get = jd),
    (xf.milliseconds = nf),
    (xf.seconds = of),
    (xf.minutes = pf),
    (xf.hours = qf),
    (xf.days = rf),
    (xf.weeks = ld),
    (xf.months = sf),
    (xf.years = tf),
    (xf.humanize = qd),
    (xf.toISOString = rd),
    (xf.toString = rd),
    (xf.toJSON = rd),
    (xf.locale = pc),
    (xf.localeData = qc),
    (xf.toIsoString = x(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      rd
    )),
    (xf.lang = Xe),
    U("X", 0, 0, "unix"),
    U("x", 0, 0, "valueOf"),
    Z("x", Zd),
    Z("X", ae),
    ba("X", function (a, b, c) {
      c._d = new Date(1e3 * parseFloat(a, 10));
    }),
    ba("x", function (a, b, c) {
      c._d = new Date(u(a));
    }),
    (a.version = "2.18.1"),
    b(tb),
    (a.fn = bf),
    (a.min = vb),
    (a.max = wb),
    (a.now = Qe),
    (a.utc = l),
    (a.unix = Pc),
    (a.months = Vc),
    (a.isDate = h),
    (a.locale = $a),
    (a.invalid = p),
    (a.duration = Sb),
    (a.isMoment = s),
    (a.weekdays = Xc),
    (a.parseZone = Qc),
    (a.localeData = bb),
    (a.isDuration = Bb),
    (a.monthsShort = Wc),
    (a.weekdaysMin = Zc),
    (a.defineLocale = _a),
    (a.updateLocale = ab),
    (a.locales = cb),
    (a.weekdaysShort = Yc),
    (a.normalizeUnits = K),
    (a.relativeTimeRounding = od),
    (a.relativeTimeThreshold = pd),
    (a.calendarFormat = Yb),
    (a.prototype = bf),
    a
  );
});
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).Sweetalert2 = e());
})(this, function () {
  "use strict";
  function r(t) {
    return (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function a(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  function c(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function s() {
    return (s =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }).apply(this, arguments);
  }
  function u(t) {
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function l(t, e) {
    return (l =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function i(t, e, n) {
    return (i = d()
      ? Reflect.construct
      : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          var i = new (Function.bind.apply(t, o))();
          return n && l(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function p(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t)
      : e;
  }
  function f(t, e, n) {
    return (f =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var o = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = u(t));

              );
              return t;
            })(t, e);
            if (o) {
              var i = Object.getOwnPropertyDescriptor(o, e);
              return i.get ? i.get.call(n) : i.value;
            }
          })(t, e, n || t);
  }
  function m(e) {
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  }
  function h(t) {
    return Array.prototype.slice.call(t);
  }
  function g(t, e) {
    var n;
    (n = '"'
      .concat(
        t,
        '" is deprecated and will be removed in the next major release. Please use "'
      )
      .concat(e, '" instead.')),
      -1 === z.indexOf(n) && (z.push(n), _(n));
  }
  function v(t) {
    return t && "function" == typeof t.toPromise;
  }
  function b(t) {
    return v(t) ? t.toPromise() : Promise.resolve(t);
  }
  function y(t) {
    return t && Promise.resolve(t) === t;
  }
  function w(t) {
    return t instanceof Element || ("object" === r((e = t)) && e.jquery);
    var e;
  }
  function t(t) {
    var e = {};
    for (var n in t) e[t[n]] = "swal2-" + t[n];
    return e;
  }
  function C(t) {
    var e = Q();
    return e ? e.querySelector(t) : null;
  }
  function e(t) {
    return C(".".concat(t));
  }
  function n() {
    var t = $();
    return h(t.querySelectorAll(".".concat(Y.icon)));
  }
  function k() {
    var t = n().filter(function (t) {
      return vt(t);
    });
    return t.length ? t[0] : null;
  }
  function x() {
    return e(Y.title);
  }
  function P() {
    return e(Y.content);
  }
  function A() {
    return e(Y.image);
  }
  function B() {
    return e(Y["progress-steps"]);
  }
  function S() {
    return e(Y["validation-message"]);
  }
  function E() {
    return C(".".concat(Y.actions, " .").concat(Y.confirm));
  }
  function O() {
    return C(".".concat(Y.actions, " .").concat(Y.cancel));
  }
  function T() {
    return e(Y.actions);
  }
  function L() {
    return e(Y.header);
  }
  function j() {
    return e(Y.footer);
  }
  function q() {
    return e(Y["timer-progress-bar"]);
  }
  function I() {
    return e(Y.close);
  }
  function V() {
    var t = h(
        $().querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        )
      ).sort(function (t, e) {
        return (
          (t = parseInt(t.getAttribute("tabindex"))),
          (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
        );
      }),
      e = h(
        $().querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        )
      ).filter(function (t) {
        return "-1" !== t.getAttribute("tabindex");
      });
    return (function (t) {
      for (var e = [], n = 0; n < t.length; n++)
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      return e;
    })(t.concat(e)).filter(function (t) {
      return vt(t);
    });
  }
  function M() {
    return !J() && !document.body.classList.contains(Y["no-backdrop"]);
  }
  function R() {
    return $().hasAttribute("data-loading");
  }
  function H(e, t) {
    var n;
    (e.textContent = ""),
      t &&
        ((n = new DOMParser().parseFromString(t, "text/html")),
        h(n.querySelector("head").childNodes).forEach(function (t) {
          e.appendChild(t);
        }),
        h(n.querySelector("body").childNodes).forEach(function (t) {
          e.appendChild(t);
        }));
  }
  function D(t, e) {
    if (e) {
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
        if (!t.classList.contains(n[o])) return;
      return 1;
    }
  }
  function N(t, e, n) {
    var o, i;
    if (
      ((i = e),
      h((o = t).classList).forEach(function (t) {
        -1 === m(Y).indexOf(t) &&
          -1 === m(Z).indexOf(t) &&
          -1 === m(i.showClass).indexOf(t) &&
          o.classList.remove(t);
      }),
      e.customClass && e.customClass[n])
    ) {
      if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach)
        return _(
          "Invalid type of customClass."
            .concat(n, '! Expected string or iterable object, got "')
            .concat(r(e.customClass[n]), '"')
        );
      mt(t, e.customClass[n]);
    }
  }
  var U = "SweetAlert2:",
    _ = function (t) {
      console.warn("".concat(U, " ").concat(t));
    },
    F = function (t) {
      console.error("".concat(U, " ").concat(t));
    },
    z = [],
    W = function (t) {
      return "function" == typeof t ? t() : t;
    },
    K = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    Y = t([
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "toast-column",
      "show",
      "hide",
      "close",
      "title",
      "header",
      "content",
      "html-container",
      "actions",
      "confirm",
      "cancel",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ]),
    Z = t(["success", "warning", "info", "question", "error"]),
    Q = function () {
      return document.body.querySelector(".".concat(Y.container));
    },
    $ = function () {
      return e(Y.popup);
    },
    J = function () {
      return document.body.classList.contains(Y["toast-shown"]);
    },
    X = { previousBodyPadding: null };
  function G(t, e) {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return gt(t, Y[e]);
      case "checkbox":
        return t.querySelector(".".concat(Y.checkbox, " input"));
      case "radio":
        return (
          t.querySelector(".".concat(Y.radio, " input:checked")) ||
          t.querySelector(".".concat(Y.radio, " input:first-child"))
        );
      case "range":
        return t.querySelector(".".concat(Y.range, " input"));
      default:
        return gt(t, Y.input);
    }
  }
  function tt(t) {
    var e;
    t.focus(),
      "file" !== t.type && ((e = t.value), (t.value = ""), (t.value = e));
  }
  function et(t, e, n) {
    t &&
      e &&
      ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach(function (e) {
        t.forEach
          ? t.forEach(function (t) {
              n ? t.classList.add(e) : t.classList.remove(e);
            })
          : n
          ? t.classList.add(e)
          : t.classList.remove(e);
      }));
  }
  function nt(t, e, n) {
    n || 0 === parseInt(n)
      ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
      : t.style.removeProperty(e);
  }
  function ot(t, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : "flex";
    (t.style.opacity = ""), (t.style.display = n);
  }
  function it(t) {
    (t.style.opacity = ""), (t.style.display = "none");
  }
  function rt(t, e, n) {
    e ? ot(t, n) : it(t);
  }
  function at(t) {
    return !!(t.scrollHeight > t.clientHeight);
  }
  function ct(t) {
    var e = window.getComputedStyle(t),
      n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      o = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return 0 < n || 0 < o;
  }
  function st(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
      o = q();
    vt(o) &&
      (n && ((o.style.transition = "none"), (o.style.width = "100%")),
      setTimeout(function () {
        (o.style.transition = "width ".concat(t / 1e3, "s linear")),
          (o.style.width = "0%");
      }, 10));
  }
  function ut() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }
  function lt(t) {
    sn.isVisible() && ft !== t.target.value && sn.resetValidationMessage(),
      (ft = t.target.value);
  }
  function dt(t, e) {
    t instanceof HTMLElement
      ? e.appendChild(t)
      : "object" === r(t)
      ? wt(t, e)
      : t && H(e, t);
  }
  function pt(t, e) {
    var n = T(),
      o = E(),
      i = O();
    e.showConfirmButton || e.showCancelButton || it(n),
      N(n, e, "actions"),
      xt(o, "confirm", e),
      xt(i, "cancel", e),
      e.buttonsStyling
        ? (function (t, e, n) {
            mt([t, e], Y.styled),
              n.confirmButtonColor &&
                (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor &&
              (e.style.backgroundColor = n.cancelButtonColor);
            {
              var o;
              R() ||
                ((o = window
                  .getComputedStyle(t)
                  .getPropertyValue("background-color")),
                (t.style.borderLeftColor = o),
                (t.style.borderRightColor = o));
            }
          })(o, i, e)
        : (ht([o, i], Y.styled),
          (o.style.backgroundColor =
            o.style.borderLeftColor =
            o.style.borderRightColor =
              ""),
          (i.style.backgroundColor =
            i.style.borderLeftColor =
            i.style.borderRightColor =
              "")),
      e.reverseButtons && o.parentNode.insertBefore(i, o);
  }
  var ft,
    mt = function (t, e) {
      et(t, e, !0);
    },
    ht = function (t, e) {
      et(t, e, !1);
    },
    gt = function (t, e) {
      for (var n = 0; n < t.childNodes.length; n++)
        if (D(t.childNodes[n], e)) return t.childNodes[n];
    },
    vt = function (t) {
      return !(
        !t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
      );
    },
    bt = '\n <div aria-labelledby="'
      .concat(Y.title, '" aria-describedby="')
      .concat(Y.content, '" class="')
      .concat(Y.popup, '" tabindex="-1">\n   <div class="')
      .concat(Y.header, '">\n     <ul class="')
      .concat(Y["progress-steps"], '"></ul>\n     <div class="')
      .concat(Y.icon, " ")
      .concat(Z.error, '"></div>\n     <div class="')
      .concat(Y.icon, " ")
      .concat(Z.question, '"></div>\n     <div class="')
      .concat(Y.icon, " ")
      .concat(Z.warning, '"></div>\n     <div class="')
      .concat(Y.icon, " ")
      .concat(Z.info, '"></div>\n     <div class="')
      .concat(Y.icon, " ")
      .concat(Z.success, '"></div>\n     <img class="')
      .concat(Y.image, '" />\n     <h2 class="')
      .concat(Y.title, '" id="')
      .concat(Y.title, '"></h2>\n     <button type="button" class="')
      .concat(Y.close, '"></button>\n   </div>\n   <div class="')
      .concat(Y.content, '">\n     <div id="')
      .concat(Y.content, '" class="')
      .concat(Y["html-container"], '"></div>\n     <input class="')
      .concat(Y.input, '" />\n     <input type="file" class="')
      .concat(Y.file, '" />\n     <div class="')
      .concat(
        Y.range,
        '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
      )
      .concat(Y.select, '"></select>\n     <div class="')
      .concat(Y.radio, '"></div>\n     <label for="')
      .concat(Y.checkbox, '" class="')
      .concat(
        Y.checkbox,
        '">\n       <input type="checkbox" />\n       <span class="'
      )
      .concat(Y.label, '"></span>\n     </label>\n     <textarea class="')
      .concat(Y.textarea, '"></textarea>\n     <div class="')
      .concat(Y["validation-message"], '" id="')
      .concat(Y["validation-message"], '"></div>\n   </div>\n   <div class="')
      .concat(Y.actions, '">\n     <button type="button" class="')
      .concat(Y.confirm, '">OK</button>\n     <button type="button" class="')
      .concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="')
      .concat(Y.footer, '"></div>\n   <div class="')
      .concat(Y["timer-progress-bar-container"], '">\n     <div class="')
      .concat(Y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
      .replace(/(^|\n)\s*/g, ""),
    yt = function (t) {
      var e,
        n,
        o,
        i,
        r,
        a,
        c,
        s,
        u,
        l,
        d,
        p,
        f,
        m,
        h,
        g =
          !!(e = Q()) &&
          (e.parentNode.removeChild(e),
          ht(
            [document.documentElement, document.body],
            [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]
          ),
          !0);
      ut()
        ? F("SweetAlert2 requires document to initialize")
        : (((n = document.createElement("div")).className = Y.container),
          g && mt(n, Y["no-transition"]),
          H(n, bt),
          (o =
            "string" == typeof (i = t.target)
              ? document.querySelector(i)
              : i).appendChild(n),
          (r = t),
          (a = $()).setAttribute("role", r.toast ? "alert" : "dialog"),
          a.setAttribute("aria-live", r.toast ? "polite" : "assertive"),
          r.toast || a.setAttribute("aria-modal", "true"),
          (c = o),
          "rtl" === window.getComputedStyle(c).direction && mt(Q(), Y.rtl),
          (s = P()),
          (u = gt(s, Y.input)),
          (l = gt(s, Y.file)),
          (d = s.querySelector(".".concat(Y.range, " input"))),
          (p = s.querySelector(".".concat(Y.range, " output"))),
          (f = gt(s, Y.select)),
          (m = s.querySelector(".".concat(Y.checkbox, " input"))),
          (h = gt(s, Y.textarea)),
          (u.oninput = lt),
          (l.onchange = lt),
          (f.onchange = lt),
          (m.onchange = lt),
          (h.oninput = lt),
          (d.oninput = function (t) {
            lt(t), (p.value = d.value);
          }),
          (d.onchange = function (t) {
            lt(t), (d.nextSibling.value = d.value);
          }));
    },
    wt = function (t, e) {
      t.jquery ? Ct(e, t) : H(e, t.toString());
    },
    Ct = function (t, e) {
      if (((t.textContent = ""), 0 in e))
        for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
      else t.appendChild(e.cloneNode(!0));
    },
    kt = (function () {
      if (ut()) return !1;
      var t = document.createElement("div"),
        e = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend",
        };
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n])
          return e[n];
      return !1;
    })();
  function xt(t, e, n) {
    var o;
    rt(
      t,
      n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")],
      "inline-block"
    ),
      H(t, n["".concat(e, "ButtonText")]),
      t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]),
      (t.className = Y[e]),
      N(t, n, "".concat(e, "Button")),
      mt(t, n["".concat(e, "ButtonClass")]);
  }
  function Pt(t, e) {
    var n,
      o,
      i,
      r,
      a,
      c,
      s,
      u,
      l = Q();
    l &&
      ((n = l),
      "string" == typeof (o = e.backdrop)
        ? (n.style.background = o)
        : o || mt([document.documentElement, document.body], Y["no-backdrop"]),
      !e.backdrop &&
        e.allowOutsideClick &&
        _(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        ),
      (i = l),
      (r = e.position) in Y
        ? mt(i, Y[r])
        : (_('The "position" parameter is not valid, defaulting to "center"'),
          mt(i, Y.center)),
      (a = l),
      !(c = e.grow) ||
        "string" != typeof c ||
        ((s = "grow-".concat(c)) in Y && mt(a, Y[s])),
      N(l, e, "container"),
      (u = document.body.getAttribute("data-swal2-queue-step")) &&
        (l.setAttribute("data-queue-step", u),
        document.body.removeAttribute("data-swal2-queue-step")));
  }
  function At(t, e) {
    (t.placeholder && !e.inputPlaceholder) ||
      (t.placeholder = e.inputPlaceholder);
  }
  var Bt = {
      promise: new WeakMap(),
      innerParams: new WeakMap(),
      domCache: new WeakMap(),
    },
    St = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    Et = function (t) {
      if (!jt[t.input])
        return F(
          'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
            t.input,
            '"'
          )
        );
      var e = Lt(t.input),
        n = jt[t.input](e, t);
      ot(n),
        setTimeout(function () {
          tt(n);
        });
    },
    Ot = function (t, e) {
      var n = G(P(), t);
      if (n)
        for (var o in (!(function (t) {
          for (var e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            -1 === ["type", "value", "style"].indexOf(n) &&
              t.removeAttribute(n);
          }
        })(n),
        e))
          ("range" === t && "placeholder" === o) || n.setAttribute(o, e[o]);
    },
    Tt = function (t) {
      var e = Lt(t.input);
      t.customClass && mt(e, t.customClass.input);
    },
    Lt = function (t) {
      var e = Y[t] ? Y[t] : Y.input;
      return gt(P(), e);
    },
    jt = {};
  (jt.text =
    jt.email =
    jt.password =
    jt.number =
    jt.tel =
    jt.url =
      function (t, e) {
        return (
          "string" == typeof e.inputValue || "number" == typeof e.inputValue
            ? (t.value = e.inputValue)
            : y(e.inputValue) ||
              _(
                'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                  r(e.inputValue),
                  '"'
                )
              ),
          At(t, e),
          (t.type = e.input),
          t
        );
      }),
    (jt.file = function (t, e) {
      return At(t, e), t;
    }),
    (jt.range = function (t, e) {
      var n = t.querySelector("input"),
        o = t.querySelector("output");
      return (
        (n.value = e.inputValue),
        (n.type = e.input),
        (o.value = e.inputValue),
        t
      );
    }),
    (jt.select = function (t, e) {
      var n;
      return (
        (t.textContent = ""),
        e.inputPlaceholder &&
          ((n = document.createElement("option")),
          H(n, e.inputPlaceholder),
          (n.value = ""),
          (n.disabled = !0),
          (n.selected = !0),
          t.appendChild(n)),
        t
      );
    }),
    (jt.radio = function (t) {
      return (t.textContent = ""), t;
    }),
    (jt.checkbox = function (t, e) {
      var n = G(P(), "checkbox");
      (n.value = 1), (n.id = Y.checkbox), (n.checked = Boolean(e.inputValue));
      var o = t.querySelector("span");
      return H(o, e.inputPlaceholder), t;
    }),
    (jt.textarea = function (e, t) {
      var n, o;
      return (
        (e.value = t.inputValue),
        At(e, t),
        "MutationObserver" in window &&
          ((n = parseInt(window.getComputedStyle($()).width)),
          (o =
            parseInt(window.getComputedStyle($()).paddingLeft) +
            parseInt(window.getComputedStyle($()).paddingRight)),
          new MutationObserver(function () {
            var t = e.offsetWidth + o;
            $().style.width = n < t ? "".concat(t, "px") : null;
          }).observe(e, { attributes: !0, attributeFilter: ["style"] })),
        e
      );
    });
  function qt(t, e) {
    var n,
      o,
      i,
      r,
      a,
      c = P().querySelector("#".concat(Y.content));
    e.html
      ? (dt(e.html, c), ot(c, "block"))
      : e.text
      ? ((c.textContent = e.text), ot(c, "block"))
      : it(c),
      (n = t),
      (o = e),
      (i = P()),
      (r = Bt.innerParams.get(n)),
      (a = !r || o.input !== r.input),
      St.forEach(function (t) {
        var e = Y[t],
          n = gt(i, e);
        Ot(t, o.inputAttributes), (n.className = e), a && it(n);
      }),
      o.input && (a && Et(o), Tt(o)),
      N(P(), e, "content");
  }
  function It() {
    return Q() && Q().getAttribute("data-queue-step");
  }
  function Vt(t, s) {
    var u = B();
    if (!s.progressSteps || 0 === s.progressSteps.length) return it(u), 0;
    ot(u), (u.textContent = "");
    var l = parseInt(
      void 0 === s.currentProgressStep ? It() : s.currentProgressStep
    );
    l >= s.progressSteps.length &&
      _(
        "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
      ),
      s.progressSteps.forEach(function (t, e) {
        var n,
          o,
          i,
          r,
          a,
          c =
            ((n = t),
            (o = document.createElement("li")),
            mt(o, Y["progress-step"]),
            H(o, n),
            o);
        u.appendChild(c),
          e === l && mt(c, Y["active-progress-step"]),
          e !== s.progressSteps.length - 1 &&
            ((r = s),
            (a = document.createElement("li")),
            mt(a, Y["progress-step-line"]),
            r.progressStepsDistance &&
              (a.style.width = r.progressStepsDistance),
            (i = a),
            u.appendChild(i));
      });
  }
  function Mt(t, e) {
    var n,
      o,
      i,
      r,
      a,
      c,
      s,
      u,
      l = L();
    N(l, e, "header"),
      Vt(0, e),
      (n = t),
      (o = e),
      (r = Bt.innerParams.get(n)) && o.icon === r.icon && k()
        ? N(k(), o, "icon")
        : (Dt(),
          o.icon &&
            (-1 !== Object.keys(Z).indexOf(o.icon)
              ? ((i = C(".".concat(Y.icon, ".").concat(Z[o.icon]))),
                ot(i),
                Ut(i, o),
                Nt(),
                N(i, o, "icon"),
                mt(i, o.showClass.icon))
              : F(
                  'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                    o.icon,
                    '"'
                  )
                ))),
      (function (t) {
        var e = A();
        if (!t.imageUrl) return it(e);
        ot(e, ""),
          e.setAttribute("src", t.imageUrl),
          e.setAttribute("alt", t.imageAlt),
          nt(e, "width", t.imageWidth),
          nt(e, "height", t.imageHeight),
          (e.className = Y.image),
          N(e, t, "image");
      })(e),
      (a = e),
      (c = x()),
      rt(c, a.title || a.titleText),
      a.title && dt(a.title, c),
      a.titleText && (c.innerText = a.titleText),
      N(c, a, "title"),
      (s = e),
      (u = I()),
      H(u, s.closeButtonHtml),
      N(u, s, "closeButton"),
      rt(u, s.showCloseButton),
      u.setAttribute("aria-label", s.closeButtonAriaLabel);
  }
  function Rt(t, e) {
    var n, o, i, r;
    (n = e),
      (o = $()),
      nt(o, "width", n.width),
      nt(o, "padding", n.padding),
      n.background && (o.style.background = n.background),
      zt(o, n),
      Pt(0, e),
      Mt(t, e),
      qt(t, e),
      pt(0, e),
      (i = e),
      (r = j()),
      rt(r, i.footer),
      i.footer && dt(i.footer, r),
      N(r, i, "footer"),
      "function" == typeof e.onRender && e.onRender($());
  }
  function Ht() {
    return E() && E().click();
  }
  var Dt = function () {
      for (var t = n(), e = 0; e < t.length; e++) it(t[e]);
    },
    Nt = function () {
      for (
        var t = $(),
          e = window.getComputedStyle(t).getPropertyValue("background-color"),
          n = t.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          ),
          o = 0;
        o < n.length;
        o++
      )
        n[o].style.backgroundColor = e;
    },
    Ut = function (t, e) {
      (t.textContent = ""),
        e.iconHtml
          ? H(t, _t(e.iconHtml))
          : "success" === e.icon
          ? H(
              t,
              '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
            )
          : "error" === e.icon
          ? H(
              t,
              '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
            )
          : H(t, _t({ question: "?", warning: "!", info: "i" }[e.icon]));
    },
    _t = function (t) {
      return '<div class="'.concat(Y["icon-content"], '">').concat(t, "</div>");
    },
    Ft = [],
    zt = function (t, e) {
      (t.className = ""
        .concat(Y.popup, " ")
        .concat(vt(t) ? e.showClass.popup : "")),
        e.toast
          ? (mt([document.documentElement, document.body], Y["toast-shown"]),
            mt(t, Y.toast))
          : mt(t, Y.modal),
        N(t, e, "popup"),
        "string" == typeof e.customClass && mt(t, e.customClass),
        e.icon && mt(t, Y["icon-".concat(e.icon)]);
    };
  function Wt() {
    var t = $();
    t || sn.fire(), (t = $());
    var e = T(),
      n = E();
    ot(e),
      ot(n, "inline-block"),
      mt([t, e], Y.loading),
      (n.disabled = !0),
      t.setAttribute("data-loading", !0),
      t.setAttribute("aria-busy", !0),
      t.focus();
  }
  function Kt() {
    return new Promise(function (t) {
      var e = window.scrollX,
        n = window.scrollY;
      (Xt.restoreFocusTimeout = setTimeout(function () {
        Xt.previousActiveElement && Xt.previousActiveElement.focus
          ? (Xt.previousActiveElement.focus(),
            (Xt.previousActiveElement = null))
          : document.body && document.body.focus(),
          t();
      }, 100)),
        void 0 !== e && void 0 !== n && window.scrollTo(e, n);
    });
  }
  function Yt() {
    if (Xt.timeout)
      return (
        (function () {
          var t = q(),
            e = parseInt(window.getComputedStyle(t).width);
          t.style.removeProperty("transition"), (t.style.width = "100%");
          var n = parseInt(window.getComputedStyle(t).width),
            o = parseInt((e / n) * 100);
          t.style.removeProperty("transition"),
            (t.style.width = "".concat(o, "%"));
        })(),
        Xt.timeout.stop()
      );
  }
  function Zt() {
    if (Xt.timeout) {
      var t = Xt.timeout.start();
      return st(t), t;
    }
  }
  function Qt(t) {
    return Object.prototype.hasOwnProperty.call(Gt, t);
  }
  function $t(t) {
    return ee[t];
  }
  function Jt(t) {
    for (var e in t)
      Qt((i = e)) || _('Unknown parameter "'.concat(i, '"')),
        t.toast &&
          ((o = e),
          -1 !== ne.indexOf(o) &&
            _('The parameter "'.concat(o, '" is incompatible with toasts'))),
        $t((n = e)) && g(n, $t(n));
    var n, o, i;
  }
  var Xt = {},
    Gt = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconHtml: void 0,
      toast: !1,
      animation: !0,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: void 0,
      target: "body",
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showCancelButton: !1,
      preConfirm: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusCancel: !1,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      showLoaderOnConfirm: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      onBeforeOpen: void 0,
      onOpen: void 0,
      onRender: void 0,
      onClose: void 0,
      onAfterClose: void 0,
      onDestroy: void 0,
      scrollbarPadding: !0,
    },
    te = [
      "allowEscapeKey",
      "allowOutsideClick",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "footer",
      "hideClass",
      "html",
      "icon",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "onAfterClose",
      "onClose",
      "onDestroy",
      "progressSteps",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "text",
      "title",
      "titleText",
    ],
    ee = { animation: 'showClass" and "hideClass' },
    ne = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusCancel",
      "heightAuto",
      "keydownListenerCapture",
    ],
    oe = Object.freeze({
      isValidParameter: Qt,
      isUpdatableParameter: function (t) {
        return -1 !== te.indexOf(t);
      },
      isDeprecatedParameter: $t,
      argsToParams: function (o) {
        var i = {};
        return (
          "object" !== r(o[0]) || w(o[0])
            ? ["title", "html", "icon"].forEach(function (t, e) {
                var n = o[e];
                "string" == typeof n || w(n)
                  ? (i[t] = n)
                  : void 0 !== n &&
                    F(
                      "Unexpected type of "
                        .concat(t, '! Expected "string" or "Element", got ')
                        .concat(r(n))
                    );
              })
            : s(i, o[0]),
          i
        );
      },
      isVisible: function () {
        return vt($());
      },
      clickConfirm: Ht,
      clickCancel: function () {
        return O() && O().click();
      },
      getContainer: Q,
      getPopup: $,
      getTitle: x,
      getContent: P,
      getHtmlContainer: function () {
        return e(Y["html-container"]);
      },
      getImage: A,
      getIcon: k,
      getIcons: n,
      getCloseButton: I,
      getActions: T,
      getConfirmButton: E,
      getCancelButton: O,
      getHeader: L,
      getFooter: j,
      getTimerProgressBar: q,
      getFocusableElements: V,
      getValidationMessage: S,
      isLoading: R,
      fire: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return i(this, e);
      },
      mixin: function (r) {
        return (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && l(t, e);
          })(i, t);
          var n,
            o,
            e =
              ((n = i),
              (o = d()),
              function () {
                var t,
                  e = u(n);
                return p(
                  this,
                  o
                    ? ((t = u(this).constructor),
                      Reflect.construct(e, arguments, t))
                    : e.apply(this, arguments)
                );
              });
          function i() {
            return a(this, i), e.apply(this, arguments);
          }
          return (
            c(i, [
              {
                key: "_main",
                value: function (t) {
                  return f(u(i.prototype), "_main", this).call(
                    this,
                    s({}, r, t)
                  );
                },
              },
            ]),
            i
          );
        })(this);
      },
      queue: function (t) {
        var r = this;
        Ft = t;
        function a(t, e) {
          (Ft = []), t(e);
        }
        var c = [];
        return new Promise(function (i) {
          !(function e(n, o) {
            n < Ft.length
              ? (document.body.setAttribute("data-swal2-queue-step", n),
                r.fire(Ft[n]).then(function (t) {
                  void 0 !== t.value
                    ? (c.push(t.value), e(n + 1, o))
                    : a(i, { dismiss: t.dismiss });
                }))
              : a(i, { value: c });
          })(0);
        });
      },
      getQueueStep: It,
      insertQueueStep: function (t, e) {
        return e && e < Ft.length ? Ft.splice(e, 0, t) : Ft.push(t);
      },
      deleteQueueStep: function (t) {
        void 0 !== Ft[t] && Ft.splice(t, 1);
      },
      showLoading: Wt,
      enableLoading: Wt,
      getTimerLeft: function () {
        return Xt.timeout && Xt.timeout.getTimerLeft();
      },
      stopTimer: Yt,
      resumeTimer: Zt,
      toggleTimer: function () {
        var t = Xt.timeout;
        return t && (t.running ? Yt : Zt)();
      },
      increaseTimer: function (t) {
        if (Xt.timeout) {
          var e = Xt.timeout.increase(t);
          return st(e, !0), e;
        }
      },
      isTimerRunning: function () {
        return Xt.timeout && Xt.timeout.isRunning();
      },
    });
  function ie() {
    var t,
      e = Bt.innerParams.get(this);
    e &&
      ((t = Bt.domCache.get(this)),
      e.showConfirmButton ||
        (it(t.confirmButton), e.showCancelButton || it(t.actions)),
      ht([t.popup, t.actions], Y.loading),
      t.popup.removeAttribute("aria-busy"),
      t.popup.removeAttribute("data-loading"),
      (t.confirmButton.disabled = !1),
      (t.cancelButton.disabled = !1));
  }
  function re() {
    null === X.previousBodyPadding &&
      document.body.scrollHeight > window.innerHeight &&
      ((X.previousBodyPadding = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = "".concat(
        X.previousBodyPadding +
          (function () {
            var t = document.createElement("div");
            (t.className = Y["scrollbar-measure"]),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          })(),
        "px"
      )));
  }
  function ae() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }
  function ce() {
    var t = Q(),
      e = $();
    t.style.removeProperty("align-items"),
      e.offsetTop < 0 && (t.style.alignItems = "flex-start");
  }
  var se = function () {
      navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) ||
        ($().scrollHeight > window.innerHeight - 44 &&
          (Q().style.paddingBottom = "".concat(44, "px")));
    },
    ue = function () {
      var e,
        t = Q();
      (t.ontouchstart = function (t) {
        e = le(t.target);
      }),
        (t.ontouchmove = function (t) {
          e && (t.preventDefault(), t.stopPropagation());
        });
    },
    le = function (t) {
      var e = Q();
      return (
        t === e ||
        !(at(e) || "INPUT" === t.tagName || (at(P()) && P().contains(t)))
      );
    },
    de = { swalPromiseResolve: new WeakMap() };
  function pe(t, e, n, o) {
    var i;
    n
      ? he(t, o)
      : (Kt().then(function () {
          return he(t, o);
        }),
        Xt.keydownTarget.removeEventListener("keydown", Xt.keydownHandler, {
          capture: Xt.keydownListenerCapture,
        }),
        (Xt.keydownHandlerAdded = !1)),
      e.parentNode &&
        !document.body.getAttribute("data-swal2-queue-step") &&
        e.parentNode.removeChild(e),
      M() &&
        (null !== X.previousBodyPadding &&
          ((document.body.style.paddingRight = "".concat(
            X.previousBodyPadding,
            "px"
          )),
          (X.previousBodyPadding = null)),
        D(document.body, Y.iosfix) &&
          ((i = parseInt(document.body.style.top, 10)),
          ht(document.body, Y.iosfix),
          (document.body.style.top = ""),
          (document.body.scrollTop = -1 * i)),
        "undefined" != typeof window &&
          ae() &&
          window.removeEventListener("resize", ce),
        h(document.body.children).forEach(function (t) {
          t.hasAttribute("data-previous-aria-hidden")
            ? (t.setAttribute(
                "aria-hidden",
                t.getAttribute("data-previous-aria-hidden")
              ),
              t.removeAttribute("data-previous-aria-hidden"))
            : t.removeAttribute("aria-hidden");
        })),
      ht(
        [document.documentElement, document.body],
        [
          Y.shown,
          Y["height-auto"],
          Y["no-backdrop"],
          Y["toast-shown"],
          Y["toast-column"],
        ]
      );
  }
  function fe(t) {
    var e,
      n,
      o,
      i = $();
    i &&
      (e = Bt.innerParams.get(this)) &&
      !D(i, e.hideClass.popup) &&
      ((n = de.swalPromiseResolve.get(this)),
      ht(i, e.showClass.popup),
      mt(i, e.hideClass.popup),
      (o = Q()),
      ht(o, e.showClass.backdrop),
      mt(o, e.hideClass.backdrop),
      (function (t, e, n) {
        var o = Q(),
          i = kt && ct(e),
          r = n.onClose,
          a = n.onAfterClose;
        if (r !== null && typeof r === "function") {
          r(e);
        }
        if (i) {
          me(t, e, o, a);
        } else {
          pe(t, o, J(), a);
        }
      })(this, i, e),
      void 0 !== t
        ? ((t.isDismissed = void 0 !== t.dismiss),
          (t.isConfirmed = void 0 === t.dismiss))
        : (t = { isDismissed: !0, isConfirmed: !1 }),
      n(t || {}));
  }
  var me = function (t, e, n, o) {
      (Xt.swalCloseEventFinishedCallback = pe.bind(null, t, n, J(), o)),
        e.addEventListener(kt, function (t) {
          t.target === e &&
            (Xt.swalCloseEventFinishedCallback(),
            delete Xt.swalCloseEventFinishedCallback);
        });
    },
    he = function (t, e) {
      setTimeout(function () {
        "function" == typeof e && e(), t._destroy();
      });
    };
  function ge(t, e, n) {
    var o = Bt.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }
  function ve(t, e) {
    if (!t) return !1;
    if ("radio" === t.type)
      for (
        var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0;
        o < n.length;
        o++
      )
        n[o].disabled = e;
    else t.disabled = e;
  }
  var be = (function () {
      function n(t, e) {
        a(this, n),
          (this.callback = t),
          (this.remaining = e),
          (this.running = !1),
          this.start();
      }
      return (
        c(n, [
          {
            key: "start",
            value: function () {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: "stop",
            value: function () {
              return (
                this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -= new Date() - this.started)),
                this.remaining
              );
            },
          },
          {
            key: "increase",
            value: function (t) {
              var e = this.running;
              return (
                e && this.stop(),
                (this.remaining += t),
                e && this.start(),
                this.remaining
              );
            },
          },
          {
            key: "getTimerLeft",
            value: function () {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            },
          },
          {
            key: "isRunning",
            value: function () {
              return this.running;
            },
          },
        ]),
        n
      );
    })(),
    ye = {
      email: function (t, e) {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid email address");
      },
      url: function (t, e) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
          t
        )
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid URL");
      },
    };
  function we(t) {
    var e, n;
    (e = t).inputValidator ||
      Object.keys(ye).forEach(function (t) {
        e.input === t && (e.inputValidator = ye[t]);
      }),
      t.showLoaderOnConfirm &&
        !t.preConfirm &&
        _(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (t.animation = W(t.animation)),
      ((n = t).target &&
        ("string" != typeof n.target || document.querySelector(n.target)) &&
        ("string" == typeof n.target || n.target.appendChild)) ||
        (_('Target parameter is not valid, defaulting to "body"'),
        (n.target = "body")),
      "string" == typeof t.title &&
        (t.title = t.title.split("\n").join("<br />")),
      yt(t);
  }
  function Ce(t) {
    var e = Q(),
      n = $();
    "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
    var o = window.getComputedStyle(document.body).overflowY;
    je(e, n, t),
      Te(e, n),
      M() &&
        (Le(e, t.scrollbarPadding, o),
        h(document.body.children).forEach(function (t) {
          t === Q() ||
            (function (t, e) {
              if ("function" == typeof t.contains) return t.contains(e);
            })(t, Q()) ||
            (t.hasAttribute("aria-hidden") &&
              t.setAttribute(
                "data-previous-aria-hidden",
                t.getAttribute("aria-hidden")
              ),
            t.setAttribute("aria-hidden", "true"));
        })),
      J() ||
        Xt.previousActiveElement ||
        (Xt.previousActiveElement = document.activeElement),
      "function" == typeof t.onOpen &&
        setTimeout(function () {
          return t.onOpen(n);
        }),
      ht(e, Y["no-transition"]);
  }
  function ke(t) {
    var e,
      n = $();
    t.target === n &&
      ((e = Q()), n.removeEventListener(kt, ke), (e.style.overflowY = "auto"));
  }
  function xe(t, e) {
    "select" === e.input || "radio" === e.input
      ? Me(t, e)
      : -1 !==
          ["text", "email", "number", "tel", "textarea"].indexOf(e.input) &&
        (v(e.inputValue) || y(e.inputValue)) &&
        Re(t, e);
  }
  function Pe(t, e) {
    t.disableButtons(), e.input ? Ne(t, e) : Ue(t, e, !0);
  }
  function Ae(t, e) {
    t.disableButtons(), e(K.cancel);
  }
  function Be(t, e) {
    t.closePopup({ value: e });
  }
  function Se(e, t, n, o) {
    t.keydownTarget &&
      t.keydownHandlerAdded &&
      (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
        capture: t.keydownListenerCapture,
      }),
      (t.keydownHandlerAdded = !1)),
      n.toast ||
        ((t.keydownHandler = function (t) {
          return ze(e, t, o);
        }),
        (t.keydownTarget = n.keydownListenerCapture ? window : $()),
        (t.keydownListenerCapture = n.keydownListenerCapture),
        t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
          capture: t.keydownListenerCapture,
        }),
        (t.keydownHandlerAdded = !0));
  }
  function Ee(t, e, n) {
    var o = V(),
      i = 0;
    if (i < o.length)
      return (
        (e += n) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
        o[e].focus()
      );
    $().focus();
  }
  function Oe(t, e, n) {
    Bt.innerParams.get(t).toast ? Qe(t, e, n) : (Je(e), Xe(e), Ge(t, e, n));
  }
  var Te = function (t, e) {
      kt && ct(e)
        ? ((t.style.overflowY = "hidden"), e.addEventListener(kt, ke))
        : (t.style.overflowY = "auto");
    },
    Le = function (t, e, n) {
      var o;
      ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)) &&
        !D(document.body, Y.iosfix) &&
        ((o = document.body.scrollTop),
        (document.body.style.top = "".concat(-1 * o, "px")),
        mt(document.body, Y.iosfix),
        ue(),
        se()),
        "undefined" != typeof window &&
          ae() &&
          (ce(), window.addEventListener("resize", ce)),
        e && "hidden" !== n && re(),
        setTimeout(function () {
          t.scrollTop = 0;
        });
    },
    je = function (t, e, n) {
      mt(t, n.showClass.backdrop),
        ot(e),
        mt(e, n.showClass.popup),
        mt([document.documentElement, document.body], Y.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          mt([document.documentElement, document.body], Y["height-auto"]);
    },
    qe = function (t) {
      return t.checked ? 1 : 0;
    },
    Ie = function (t) {
      return t.checked ? t.value : null;
    },
    Ve = function (t) {
      return t.files.length
        ? null !== t.getAttribute("multiple")
          ? t.files
          : t.files[0]
        : null;
    },
    Me = function (e, n) {
      function o(t) {
        return He[n.input](i, De(t), n);
      }
      var i = P();
      v(n.inputOptions) || y(n.inputOptions)
        ? (Wt(),
          b(n.inputOptions).then(function (t) {
            e.hideLoading(), o(t);
          }))
        : "object" === r(n.inputOptions)
        ? o(n.inputOptions)
        : F(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
              r(n.inputOptions)
            )
          );
    },
    Re = function (e, n) {
      var o = e.getInput();
      it(o),
        b(n.inputValue)
          .then(function (t) {
            (o.value =
              "number" === n.input ? parseFloat(t) || 0 : "".concat(t)),
              ot(o),
              o.focus(),
              e.hideLoading();
          })
          .catch(function (t) {
            F("Error in inputValue promise: ".concat(t)),
              (o.value = ""),
              ot(o),
              o.focus(),
              e.hideLoading();
          });
    },
    He = {
      select: function (t, e, i) {
        function r(t, e, n) {
          var o = document.createElement("option");
          (o.value = n),
            H(o, e),
            i.inputValue.toString() === n.toString() && (o.selected = !0),
            t.appendChild(o);
        }
        var a = gt(t, Y.select);
        e.forEach(function (t) {
          var e,
            n = t[0],
            o = t[1];
          Array.isArray(o)
            ? (((e = document.createElement("optgroup")).label = n),
              (e.disabled = !1),
              a.appendChild(e),
              o.forEach(function (t) {
                return r(e, t[1], t[0]);
              }))
            : r(a, o, n);
        }),
          a.focus();
      },
      radio: function (t, e, a) {
        var c = gt(t, Y.radio);
        e.forEach(function (t) {
          var e = t[0],
            n = t[1],
            o = document.createElement("input"),
            i = document.createElement("label");
          (o.type = "radio"),
            (o.name = Y.radio),
            (o.value = e),
            a.inputValue.toString() === e.toString() && (o.checked = !0);
          var r = document.createElement("span");
          H(r, n),
            (r.className = Y.label),
            i.appendChild(o),
            i.appendChild(r),
            c.appendChild(i);
        });
        var n = c.querySelectorAll("input");
        n.length && n[0].focus();
      },
    },
    De = function o(n) {
      var i = [];
      return (
        "undefined" != typeof Map && n instanceof Map
          ? n.forEach(function (t, e) {
              var n = t;
              "object" === r(n) && (n = o(n)), i.push([e, n]);
            })
          : Object.keys(n).forEach(function (t) {
              var e = n[t];
              "object" === r(e) && (e = o(e)), i.push([t, e]);
            }),
        i
      );
    },
    Ne = function (e, n) {
      var o = (function (t, e) {
        var n = t.getInput();
        if (!n) return null;
        switch (e.input) {
          case "checkbox":
            return qe(n);
          case "radio":
            return Ie(n);
          case "file":
            return Ve(n);
          default:
            return e.inputAutoTrim ? n.value.trim() : n.value;
        }
      })(e, n);
      n.inputValidator
        ? (e.disableInput(),
          Promise.resolve()
            .then(function () {
              return b(n.inputValidator(o, n.validationMessage));
            })
            .then(function (t) {
              e.enableButtons(),
                e.enableInput(),
                t ? e.showValidationMessage(t) : Ue(e, n, o);
            }))
        : e.getInput().checkValidity()
        ? Ue(e, n, o)
        : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    },
    Ue = function (e, t, n) {
      t.showLoaderOnConfirm && Wt(),
        t.preConfirm
          ? (e.resetValidationMessage(),
            Promise.resolve()
              .then(function () {
                return b(t.preConfirm(n, t.validationMessage));
              })
              .then(function (t) {
                vt(S()) || !1 === t
                  ? e.hideLoading()
                  : Be(e, void 0 === t ? n : t);
              }))
          : Be(e, n);
    },
    _e = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Left",
      "Right",
      "Up",
      "Down",
    ],
    Fe = ["Escape", "Esc"],
    ze = function (t, e, n) {
      var o = Bt.innerParams.get(t);
      o.stopKeydownPropagation && e.stopPropagation(),
        "Enter" === e.key
          ? We(t, e, o)
          : "Tab" === e.key
          ? Ke(e, o)
          : -1 !== _e.indexOf(e.key)
          ? Ye()
          : -1 !== Fe.indexOf(e.key) && Ze(e, o, n);
    },
    We = function (t, e, n) {
      if (
        !e.isComposing &&
        e.target &&
        t.getInput() &&
        e.target.outerHTML === t.getInput().outerHTML
      ) {
        if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
        Ht(), e.preventDefault();
      }
    },
    Ke = function (t) {
      for (var e = t.target, n = V(), o = -1, i = 0; i < n.length; i++)
        if (e === n[i]) {
          o = i;
          break;
        }
      t.shiftKey ? Ee(0, o, -1) : Ee(0, o, 1),
        t.stopPropagation(),
        t.preventDefault();
    },
    Ye = function () {
      var t = E(),
        e = O();
      document.activeElement === t && vt(e)
        ? e.focus()
        : document.activeElement === e && vt(t) && t.focus();
    },
    Ze = function (t, e, n) {
      W(e.allowEscapeKey) && (t.preventDefault(), n(K.esc));
    },
    Qe = function (e, t, n) {
      t.popup.onclick = function () {
        var t = Bt.innerParams.get(e);
        t.showConfirmButton ||
          t.showCancelButton ||
          t.showCloseButton ||
          t.input ||
          n(K.close);
      };
    },
    $e = !1,
    Je = function (e) {
      e.popup.onmousedown = function () {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = void 0),
            t.target === e.container && ($e = !0);
        };
      };
    },
    Xe = function (e) {
      e.container.onmousedown = function () {
        e.popup.onmouseup = function (t) {
          (e.popup.onmouseup = void 0),
            (t.target !== e.popup && !e.popup.contains(t.target)) || ($e = !0);
        };
      };
    },
    Ge = function (n, o, i) {
      o.container.onclick = function (t) {
        var e = Bt.innerParams.get(n);
        $e
          ? ($e = !1)
          : t.target === o.container && W(e.allowOutsideClick) && i(K.backdrop);
      };
    };
  var tn = function (t, e, n) {
      var o = q();
      it(o),
        e.timer &&
          ((t.timeout = new be(function () {
            n("timer"), delete t.timeout;
          }, e.timer)),
          e.timerProgressBar &&
            (ot(o),
            setTimeout(function () {
              t.timeout.running && st(e.timer);
            })));
    },
    en = function (t, e) {
      if (!e.toast)
        return W(e.allowEnterKey)
          ? e.focusCancel && vt(t.cancelButton)
            ? t.cancelButton.focus()
            : e.focusConfirm && vt(t.confirmButton)
            ? t.confirmButton.focus()
            : void Ee(0, -1, 1)
          : nn();
    },
    nn = function () {
      document.activeElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  var on,
    rn = function (t) {
      for (var e in t) t[e] = new WeakMap();
    },
    an = Object.freeze({
      hideLoading: ie,
      disableLoading: ie,
      getInput: function (t) {
        var e = Bt.innerParams.get(t || this),
          n = Bt.domCache.get(t || this);
        return n ? G(n.content, e.input) : null;
      },
      close: fe,
      closePopup: fe,
      closeModal: fe,
      closeToast: fe,
      enableButtons: function () {
        ge(this, ["confirmButton", "cancelButton"], !1);
      },
      disableButtons: function () {
        ge(this, ["confirmButton", "cancelButton"], !0);
      },
      enableInput: function () {
        return ve(this.getInput(), !1);
      },
      disableInput: function () {
        return ve(this.getInput(), !0);
      },
      showValidationMessage: function (t) {
        var e = Bt.domCache.get(this);
        H(e.validationMessage, t);
        var n = window.getComputedStyle(e.popup);
        (e.validationMessage.style.marginLeft = "-".concat(
          n.getPropertyValue("padding-left")
        )),
          (e.validationMessage.style.marginRight = "-".concat(
            n.getPropertyValue("padding-right")
          )),
          ot(e.validationMessage);
        var o = this.getInput();
        o &&
          (o.setAttribute("aria-invalid", !0),
          o.setAttribute("aria-describedBy", Y["validation-message"]),
          tt(o),
          mt(o, Y.inputerror));
      },
      resetValidationMessage: function () {
        var t = Bt.domCache.get(this);
        t.validationMessage && it(t.validationMessage);
        var e = this.getInput();
        e &&
          (e.removeAttribute("aria-invalid"),
          e.removeAttribute("aria-describedBy"),
          ht(e, Y.inputerror));
      },
      getProgressSteps: function () {
        return Bt.domCache.get(this).progressSteps;
      },
      _main: function (t) {
        Jt(t),
          Xt.currentInstance && Xt.currentInstance._destroy(),
          (Xt.currentInstance = this);
        var e = (function (t) {
          var e = s({}, Gt.showClass, t.showClass),
            n = s({}, Gt.hideClass, t.hideClass),
            o = s({}, Gt, t);
          if (((o.showClass = e), (o.hideClass = n), t.animation === false)) {
            o.showClass = {
              popup: "swal2-noanimation",
              backdrop: "swal2-noanimation",
            };
            o.hideClass = {};
          }
          return o;
        })(t);
        we(e),
          Object.freeze(e),
          Xt.timeout && (Xt.timeout.stop(), delete Xt.timeout),
          clearTimeout(Xt.restoreFocusTimeout);
        var n = (function (t) {
          var e = {
            popup: $(),
            container: Q(),
            content: P(),
            actions: T(),
            confirmButton: E(),
            cancelButton: O(),
            closeButton: I(),
            validationMessage: S(),
            progressSteps: B(),
          };
          return Bt.domCache.set(t, e), e;
        })(this);
        return (
          Rt(this, e),
          Bt.innerParams.set(this, e),
          (function (n, o, i) {
            return new Promise(function (t) {
              var e = function t(e) {
                n.closePopup({ dismiss: e });
              };
              de.swalPromiseResolve.set(n, t);
              o.confirmButton.onclick = function () {
                return Pe(n, i);
              };
              o.cancelButton.onclick = function () {
                return Ae(n, e);
              };
              o.closeButton.onclick = function () {
                return e(K.close);
              };
              Oe(n, o, e);
              Se(n, Xt, i, e);
              if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                mt(document.body, Y["toast-column"]);
              } else {
                ht(document.body, Y["toast-column"]);
              }
              xe(n, i);
              Ce(i);
              tn(Xt, i, e);
              en(o, i);
              setTimeout(function () {
                o.container.scrollTop = 0;
              });
            });
          })(this, n, e)
        );
      },
      update: function (e) {
        var t = $(),
          n = Bt.innerParams.get(this);
        if (!t || D(t, n.hideClass.popup))
          return _(
            "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
          );
        var o = {};
        Object.keys(e).forEach(function (t) {
          sn.isUpdatableParameter(t)
            ? (o[t] = e[t])
            : _(
                'Invalid parameter to update: "'.concat(
                  t,
                  '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'
                )
              );
        });
        var i = s({}, n, o);
        Rt(this, i),
          Bt.innerParams.set(this, i),
          Object.defineProperties(this, {
            params: {
              value: s({}, this.params, e),
              writable: !1,
              enumerable: !0,
            },
          });
      },
      _destroy: function () {
        var t = Bt.domCache.get(this),
          e = Bt.innerParams.get(this);
        e &&
          (t.popup &&
            Xt.swalCloseEventFinishedCallback &&
            (Xt.swalCloseEventFinishedCallback(),
            delete Xt.swalCloseEventFinishedCallback),
          Xt.deferDisposalTimer &&
            (clearTimeout(Xt.deferDisposalTimer), delete Xt.deferDisposalTimer),
          "function" == typeof e.onDestroy && e.onDestroy(),
          delete this.params,
          delete Xt.keydownHandler,
          delete Xt.keydownTarget,
          rn(Bt),
          rn(de));
      },
    }),
    cn = (function () {
      function r() {
        if ((a(this, r), "undefined" != typeof window)) {
          "undefined" == typeof Promise &&
            F(
              "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"
            ),
            (on = this);
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var o = Object.freeze(this.constructor.argsToParams(e));
          Object.defineProperties(this, {
            params: {
              value: o,
              writable: !1,
              enumerable: !0,
              configurable: !0,
            },
          });
          var i = this._main(this.params);
          Bt.promise.set(this, i);
        }
      }
      return (
        c(r, [
          {
            key: "then",
            value: function (t) {
              return Bt.promise.get(this).then(t);
            },
          },
          {
            key: "finally",
            value: function (t) {
              return Bt.promise.get(this).finally(t);
            },
          },
        ]),
        r
      );
    })();
  s(cn.prototype, an),
    s(cn, oe),
    Object.keys(an).forEach(function (t) {
      cn[t] = function () {
        if (on) return on[t].apply(on, arguments);
      };
    }),
    (cn.DismissReason = K),
    (cn.version = "9.17.2");
  var sn = cn;
  return (sn.default = sn);
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);
"undefined" != typeof document &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'
  );
/*!
 * Bootstrap-select v1.13.14 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!(function (e, t) {
  void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
})(this, function (e) {
  !(function (z) {
    "use strict";
    var d = ["sanitize", "whiteList", "sanitizeFn"],
      r = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      e = {
        "*": [
          "class",
          "dir",
          "id",
          "lang",
          "role",
          "tabindex",
          "style",
          /^aria-[\w-]*$/i,
        ],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      a =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function v(e, t) {
      var i = e.nodeName.toLowerCase();
      if (-1 !== z.inArray(i, t))
        return (
          -1 === z.inArray(i, r) ||
          Boolean(e.nodeValue.match(l) || e.nodeValue.match(a))
        );
      for (
        var s = z(t).filter(function (e, t) {
            return t instanceof RegExp;
          }),
          n = 0,
          o = s.length;
        n < o;
        n++
      )
        if (i.match(s[n])) return !0;
      return !1;
    }
    function P(e, t, i) {
      if (i && "function" == typeof i) return i(e);
      for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
        for (
          var r = e[n].querySelectorAll("*"), l = 0, a = r.length;
          l < a;
          l++
        ) {
          var c = r[l],
            d = c.nodeName.toLowerCase();
          if (-1 !== s.indexOf(d))
            for (
              var h = [].slice.call(c.attributes),
                p = [].concat(t["*"] || [], t[d] || []),
                u = 0,
                f = h.length;
              u < f;
              u++
            ) {
              var m = h[u];
              v(m, p) || c.removeAttribute(m.nodeName);
            }
          else c.parentNode.removeChild(c);
        }
    }
    "classList" in document.createElement("_") ||
      (function (e) {
        if ("Element" in e) {
          var t = "classList",
            i = "prototype",
            s = e.Element[i],
            n = Object,
            o = function () {
              var i = z(this);
              return {
                add: function (e) {
                  return (
                    (e = Array.prototype.slice.call(arguments).join(" ")),
                    i.addClass(e)
                  );
                },
                remove: function (e) {
                  return (
                    (e = Array.prototype.slice.call(arguments).join(" ")),
                    i.removeClass(e)
                  );
                },
                toggle: function (e, t) {
                  return i.toggleClass(e, t);
                },
                contains: function (e) {
                  return i.hasClass(e);
                },
              };
            };
          if (n.defineProperty) {
            var r = { get: o, enumerable: !0, configurable: !0 };
            try {
              n.defineProperty(s, t, r);
            } catch (e) {
              (void 0 !== e.number && -2146823252 !== e.number) ||
                ((r.enumerable = !1), n.defineProperty(s, t, r));
            }
          } else n[i].__defineGetter__ && s.__defineGetter__(t, o);
        }
      })(window);
    var t,
      c,
      i = document.createElement("_");
    if ((i.classList.add("c1", "c2"), !i.classList.contains("c2"))) {
      var s = DOMTokenList.prototype.add,
        n = DOMTokenList.prototype.remove;
      (DOMTokenList.prototype.add = function () {
        Array.prototype.forEach.call(arguments, s.bind(this));
      }),
        (DOMTokenList.prototype.remove = function () {
          Array.prototype.forEach.call(arguments, n.bind(this));
        });
    }
    if ((i.classList.toggle("c3", !1), i.classList.contains("c3"))) {
      var o = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e);
      };
    }
    function h(e) {
      if (null == this) throw new TypeError();
      var t = String(this);
      if (e && "[object RegExp]" == c.call(e)) throw new TypeError();
      var i = t.length,
        s = String(e),
        n = s.length,
        o = 1 < arguments.length ? arguments[1] : void 0,
        r = o ? Number(o) : 0;
      r != r && (r = 0);
      var l = Math.min(Math.max(r, 0), i);
      if (i < n + l) return !1;
      for (var a = -1; ++a < n; )
        if (t.charCodeAt(l + a) != s.charCodeAt(a)) return !1;
      return !0;
    }
    function O(e, t) {
      var i,
        s = e.selectedOptions,
        n = [];
      if (t) {
        for (var o = 0, r = s.length; o < r; o++)
          (i = s[o]).disabled ||
            ("OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled) ||
            n.push(i);
        return n;
      }
      return s;
    }
    function T(e, t) {
      for (
        var i, s = [], n = t || e.selectedOptions, o = 0, r = n.length;
        o < r;
        o++
      )
        (i = n[o]).disabled ||
          ("OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled) ||
          s.push(i.value);
      return e.multiple ? s : s.length ? s[0] : null;
    }
    (i = null),
      String.prototype.startsWith ||
        ((t = (function () {
          try {
            var e = {},
              t = Object.defineProperty,
              i = t(e, e, e) && t;
          } catch (e) {}
          return i;
        })()),
        (c = {}.toString),
        t
          ? t(String.prototype, "startsWith", {
              value: h,
              configurable: !0,
              writable: !0,
            })
          : (String.prototype.startsWith = h)),
      Object.keys ||
        (Object.keys = function (e, t, i) {
          for (t in ((i = []), e)) i.hasOwnProperty.call(e, t) && i.push(t);
          return i;
        }),
      HTMLSelectElement &&
        !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") &&
        Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
          get: function () {
            return this.querySelectorAll(":checked");
          },
        });
    var p = { useDefault: !1, _set: z.valHooks.select.set };
    z.valHooks.select.set = function (e, t) {
      return (
        t && !p.useDefault && z(e).data("selected", !0),
        p._set.apply(this, arguments)
      );
    };
    var A = null,
      u = (function () {
        try {
          return new Event("change"), !0;
        } catch (e) {
          return !1;
        }
      })();
    function k(e, t, i, s) {
      for (
        var n = ["display", "subtext", "tokens"], o = !1, r = 0;
        r < n.length;
        r++
      ) {
        var l = n[r],
          a = e[l];
        if (
          a &&
          ((a = a.toString()),
          "display" === l && (a = a.replace(/<[^>]+>/g, "")),
          s && (a = w(a)),
          (a = a.toUpperCase()),
          (o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))
        )
          break;
      }
      return o;
    }
    function L(e) {
      return parseInt(e, 10) || 0;
    }
    z.fn.triggerNative = function (e) {
      var t,
        i = this[0];
      i.dispatchEvent
        ? (u
            ? (t = new Event(e, { bubbles: !0 }))
            : (t = document.createEvent("Event")).initEvent(e, !0, !1),
          i.dispatchEvent(t))
        : i.fireEvent
        ? (((t = document.createEventObject()).eventType = e),
          i.fireEvent("on" + e, t))
        : this.trigger(e);
    };
    var f = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s",
      },
      m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      g = RegExp(
        "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",
        "g"
      );
    function b(e) {
      return f[e];
    }
    function w(e) {
      return (e = e.toString()) && e.replace(m, b).replace(g, "");
    }
    var I,
      x,
      y,
      $,
      S =
        ((I = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
        }),
        (x = "(?:" + Object.keys(I).join("|") + ")"),
        (y = RegExp(x)),
        ($ = RegExp(x, "g")),
        function (e) {
          return (e = null == e ? "" : "" + e), y.test(e) ? e.replace($, E) : e;
        });
    function E(e) {
      return I[e];
    }
    var C = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      },
      N = 27,
      D = 13,
      H = 32,
      W = 9,
      B = 38,
      M = 40,
      R = { success: !1, major: "3" };
    try {
      (R.full = (z.fn.dropdown.Constructor.VERSION || "")
        .split(" ")[0]
        .split(".")),
        (R.major = R.full[0]),
        (R.success = !0);
    } catch (e) {}
    var U = 0,
      j = ".bs.select",
      V = {
        DISABLED: "disabled",
        DIVIDER: "divider",
        SHOW: "open",
        DROPUP: "dropup",
        MENU: "dropdown-menu",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        BUTTONCLASS: "btn-default",
        POPOVERHEADER: "popover-title",
        ICONBASE: "glyphicon",
        TICKICON: "glyphicon-ok",
      },
      F = { MENU: "." + V.MENU },
      _ = {
        span: document.createElement("span"),
        i: document.createElement("i"),
        subtext: document.createElement("small"),
        a: document.createElement("a"),
        li: document.createElement("li"),
        whitespace: document.createTextNode("\xa0"),
        fragment: document.createDocumentFragment(),
      };
    _.a.setAttribute("role", "option"),
      "4" === R.major && (_.a.className = "dropdown-item"),
      (_.subtext.className = "text-muted"),
      (_.text = _.span.cloneNode(!1)),
      (_.text.className = "text"),
      (_.checkMark = _.span.cloneNode(!1));
    var G = new RegExp(B + "|" + M),
      q = new RegExp("^" + W + "$|" + N),
      K = {
        li: function (e, t, i) {
          var s = _.li.cloneNode(!1);
          return (
            e &&
              (1 === e.nodeType || 11 === e.nodeType
                ? s.appendChild(e)
                : (s.innerHTML = e)),
            void 0 !== t && "" !== t && (s.className = t),
            null != i && s.classList.add("optgroup-" + i),
            s
          );
        },
        a: function (e, t, i) {
          var s = _.a.cloneNode(!0);
          return (
            e &&
              (11 === e.nodeType
                ? s.appendChild(e)
                : s.insertAdjacentHTML("beforeend", e)),
            void 0 !== t &&
              "" !== t &&
              s.classList.add.apply(s.classList, t.split(" ")),
            i && s.setAttribute("style", i),
            s
          );
        },
        text: function (e, t) {
          var i,
            s,
            n = _.text.cloneNode(!1);
          if (e.content) n.innerHTML = e.content;
          else {
            if (((n.textContent = e.text), e.icon)) {
              var o = _.whitespace.cloneNode(!1);
              ((s = (!0 === t ? _.i : _.span).cloneNode(!1)).className =
                this.options.iconBase + " " + e.icon),
                _.fragment.appendChild(s),
                _.fragment.appendChild(o);
            }
            e.subtext &&
              (((i = _.subtext.cloneNode(!1)).textContent = e.subtext),
              n.appendChild(i));
          }
          if (!0 === t)
            for (; 0 < n.childNodes.length; )
              _.fragment.appendChild(n.childNodes[0]);
          else _.fragment.appendChild(n);
          return _.fragment;
        },
        label: function (e) {
          var t,
            i,
            s = _.text.cloneNode(!1);
          if (((s.innerHTML = e.display), e.icon)) {
            var n = _.whitespace.cloneNode(!1);
            ((i = _.span.cloneNode(!1)).className =
              this.options.iconBase + " " + e.icon),
              _.fragment.appendChild(i),
              _.fragment.appendChild(n);
          }
          return (
            e.subtext &&
              (((t = _.subtext.cloneNode(!1)).textContent = e.subtext),
              s.appendChild(t)),
            _.fragment.appendChild(s),
            _.fragment
          );
        },
      },
      Y = function (e, t) {
        var i = this;
        p.useDefault || ((z.valHooks.select.set = p._set), (p.useDefault = !0)),
          (this.$element = z(e)),
          (this.$newElement = null),
          (this.$button = null),
          (this.$menu = null),
          (this.options = t),
          (this.selectpicker = {
            main: {},
            search: {},
            current: {},
            view: {},
            isSearching: !1,
            keydown: {
              keyHistory: "",
              resetKeyHistory: {
                start: function () {
                  return setTimeout(function () {
                    i.selectpicker.keydown.keyHistory = "";
                  }, 800);
                },
              },
            },
          }),
          (this.sizeInfo = {}),
          null === this.options.title &&
            (this.options.title = this.$element.attr("title"));
        var s = this.options.windowPadding;
        "number" == typeof s && (this.options.windowPadding = [s, s, s, s]),
          (this.val = Y.prototype.val),
          (this.render = Y.prototype.render),
          (this.refresh = Y.prototype.refresh),
          (this.setStyle = Y.prototype.setStyle),
          (this.selectAll = Y.prototype.selectAll),
          (this.deselectAll = Y.prototype.deselectAll),
          (this.destroy = Y.prototype.destroy),
          (this.remove = Y.prototype.remove),
          (this.show = Y.prototype.show),
          (this.hide = Y.prototype.hide),
          this.init();
      };
    function Z(e) {
      var l,
        a = arguments,
        c = e;
      if (([].shift.apply(a), !R.success)) {
        try {
          R.full = (z.fn.dropdown.Constructor.VERSION || "")
            .split(" ")[0]
            .split(".");
        } catch (e) {
          Y.BootstrapVersion
            ? (R.full = Y.BootstrapVersion.split(" ")[0].split("."))
            : ((R.full = [R.major, "0", "0"]),
              console.warn(
                "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                e
              ));
        }
        (R.major = R.full[0]), (R.success = !0);
      }
      if ("4" === R.major) {
        var t = [];
        Y.DEFAULTS.style === V.BUTTONCLASS &&
          t.push({ name: "style", className: "BUTTONCLASS" }),
          Y.DEFAULTS.iconBase === V.ICONBASE &&
            t.push({ name: "iconBase", className: "ICONBASE" }),
          Y.DEFAULTS.tickIcon === V.TICKICON &&
            t.push({ name: "tickIcon", className: "TICKICON" }),
          (V.DIVIDER = "dropdown-divider"),
          (V.SHOW = "show"),
          (V.BUTTONCLASS = "btn-light"),
          (V.POPOVERHEADER = "popover-header"),
          (V.ICONBASE = ""),
          (V.TICKICON = "bs-ok-default");
        for (var i = 0; i < t.length; i++) {
          e = t[i];
          Y.DEFAULTS[e.name] = V[e.className];
        }
      }
      var s = this.each(function () {
        var e = z(this);
        if (e.is("select")) {
          var t = e.data("selectpicker"),
            i = "object" == typeof c && c;
          if (t) {
            if (i)
              for (var s in i) i.hasOwnProperty(s) && (t.options[s] = i[s]);
          } else {
            var n = e.data();
            for (var o in n)
              n.hasOwnProperty(o) && -1 !== z.inArray(o, d) && delete n[o];
            var r = z.extend(
              {},
              Y.DEFAULTS,
              z.fn.selectpicker.defaults || {},
              n,
              i
            );
            (r.template = z.extend(
              {},
              Y.DEFAULTS.template,
              z.fn.selectpicker.defaults
                ? z.fn.selectpicker.defaults.template
                : {},
              n.template,
              i.template
            )),
              e.data("selectpicker", (t = new Y(this, r)));
          }
          "string" == typeof c &&
            (l = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]);
        }
      });
      return void 0 !== l ? l : s;
    }
    (Y.VERSION = "1.13.14"),
      (Y.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function (e, t) {
          return 1 == e ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (e, t) {
          return [
            1 == e
              ? "Limit reached ({n} item max)"
              : "Limit reached ({n} items max)",
            1 == t
              ? "Group limit reached ({n} item max)"
              : "Group limit reached ({n} items max)",
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: V.BUTTONCLASS,
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: V.ICONBASE,
        tickIcon: V.TICKICON,
        showTick: !1,
        template: { caret: '<span class="caret"></span>' },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
        windowPadding: 0,
        virtualScroll: 600,
        display: !1,
        sanitize: !0,
        sanitizeFn: null,
        whiteList: e,
      }),
      (Y.prototype = {
        constructor: Y,
        init: function () {
          var i = this,
            e = this.$element.attr("id");
          U++,
            (this.selectId = "bs-select-" + U),
            this.$element[0].classList.add("bs-select-hidden"),
            (this.multiple = this.$element.prop("multiple")),
            (this.autofocus = this.$element.prop("autofocus")),
            this.$element[0].classList.contains("show-tick") &&
              (this.options.showTick = !0),
            (this.$newElement = this.createDropdown()),
            this.buildData(),
            this.$element.after(this.$newElement).prependTo(this.$newElement),
            (this.$button = this.$newElement.children("button")),
            (this.$menu = this.$newElement.children(F.MENU)),
            (this.$menuInner = this.$menu.children(".inner")),
            (this.$searchbox = this.$menu.find("input")),
            this.$element[0].classList.remove("bs-select-hidden"),
            !0 === this.options.dropdownAlignRight &&
              this.$menu[0].classList.add(V.MENURIGHT),
            void 0 !== e && this.$button.attr("data-id", e),
            this.checkDisabled(),
            this.clickListener(),
            this.options.liveSearch
              ? (this.liveSearchListener(),
                (this.focusedParent = this.$searchbox[0]))
              : (this.focusedParent = this.$menuInner[0]),
            this.setStyle(),
            this.render(),
            this.setWidth(),
            this.options.container
              ? this.selectPosition()
              : this.$element.on("hide" + j, function () {
                  if (i.isVirtual()) {
                    var e = i.$menuInner[0],
                      t = e.firstChild.cloneNode(!1);
                    e.replaceChild(t, e.firstChild), (e.scrollTop = 0);
                  }
                }),
            this.$menu.data("this", this),
            this.$newElement.data("this", this),
            this.options.mobile && this.mobile(),
            this.$newElement.on({
              "hide.bs.dropdown": function (e) {
                i.$element.trigger("hide" + j, e);
              },
              "hidden.bs.dropdown": function (e) {
                i.$element.trigger("hidden" + j, e);
              },
              "show.bs.dropdown": function (e) {
                i.$element.trigger("show" + j, e);
              },
              "shown.bs.dropdown": function (e) {
                i.$element.trigger("shown" + j, e);
              },
            }),
            i.$element[0].hasAttribute("required") &&
              this.$element.on("invalid" + j, function () {
                i.$button[0].classList.add("bs-invalid"),
                  i.$element
                    .on("shown" + j + ".invalid", function () {
                      i.$element
                        .val(i.$element.val())
                        .off("shown" + j + ".invalid");
                    })
                    .on("rendered" + j, function () {
                      this.validity.valid &&
                        i.$button[0].classList.remove("bs-invalid"),
                        i.$element.off("rendered" + j);
                    }),
                  i.$button.on("blur" + j, function () {
                    i.$element.trigger("focus").trigger("blur"),
                      i.$button.off("blur" + j);
                  });
              }),
            setTimeout(function () {
              i.buildList(), i.$element.trigger("loaded" + j);
            });
        },
        createDropdown: function () {
          var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = this.multiple ? ' aria-multiselectable="true"' : "",
            i = "",
            s = this.autofocus ? " autofocus" : "";
          R.major < 4 &&
            this.$element.parent().hasClass("input-group") &&
            (i = " input-group-btn");
          var n,
            o = "",
            r = "",
            l = "",
            a = "";
          return (
            this.options.header &&
              (o =
                '<div class="' +
                V.POPOVERHEADER +
                '"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                "</div>"),
            this.options.liveSearch &&
              (r =
                '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ""
                  : ' placeholder="' +
                    S(this.options.liveSearchPlaceholder) +
                    '"') +
                ' role="combobox" aria-label="Search" aria-controls="' +
                this.selectId +
                '" aria-autocomplete="list"></div>'),
            this.multiple &&
              this.options.actionsBox &&
              (l =
                '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                V.BUTTONCLASS +
                '">' +
                this.options.selectAllText +
                '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                V.BUTTONCLASS +
                '">' +
                this.options.deselectAllText +
                "</button></div></div>"),
            this.multiple &&
              this.options.doneButton &&
              (a =
                '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' +
                V.BUTTONCLASS +
                '">' +
                this.options.doneButtonText +
                "</button></div></div>"),
            (n =
              '<div class="dropdown bootstrap-select' +
              e +
              i +
              '"><button type="button" class="' +
              this.options.styleBase +
              ' dropdown-toggle" ' +
              ("static" === this.options.display
                ? 'data-display="static"'
                : "") +
              'data-toggle="dropdown"' +
              s +
              ' role="combobox" aria-owns="' +
              this.selectId +
              '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' +
              ("4" === R.major
                ? ""
                : '<span class="bs-caret">' +
                  this.options.template.caret +
                  "</span>") +
              '</button><div class="' +
              V.MENU +
              " " +
              ("4" === R.major ? "" : V.SHOW) +
              '">' +
              o +
              r +
              l +
              '<div class="inner ' +
              V.SHOW +
              '" role="listbox" id="' +
              this.selectId +
              '" tabindex="-1" ' +
              t +
              '><ul class="' +
              V.MENU +
              " inner " +
              ("4" === R.major ? V.SHOW : "") +
              '" role="presentation"></ul></div>' +
              a +
              "</div></div>"),
            z(n)
          );
        },
        setPositionData: function () {
          this.selectpicker.view.canHighlight = [];
          for (
            var e = (this.selectpicker.view.size = 0);
            e < this.selectpicker.current.data.length;
            e++
          ) {
            var t = this.selectpicker.current.data[e],
              i = !0;
            "divider" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dividerHeight))
              : "optgroup-label" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dropdownHeaderHeight))
              : (t.height = this.sizeInfo.liHeight),
              t.disabled && (i = !1),
              this.selectpicker.view.canHighlight.push(i),
              i &&
                (this.selectpicker.view.size++,
                (t.posinset = this.selectpicker.view.size)),
              (t.position =
                (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) +
                t.height);
          }
        },
        isVirtual: function () {
          return (
            (!1 !== this.options.virtualScroll &&
              this.selectpicker.main.elements.length >=
                this.options.virtualScroll) ||
            !0 === this.options.virtualScroll
          );
        },
        createView: function (A, e, t) {
          var L,
            N,
            D = this,
            i = 0,
            H = [];
          if (
            ((this.selectpicker.isSearching = A),
            (this.selectpicker.current = A
              ? this.selectpicker.search
              : this.selectpicker.main),
            this.setPositionData(),
            e)
          )
            if (t) i = this.$menuInner[0].scrollTop;
            else if (!D.multiple) {
              var s = D.$element[0],
                n = (s.options[s.selectedIndex] || {}).liIndex;
              if ("number" == typeof n && !1 !== D.options.size) {
                var o = D.selectpicker.main.data[n],
                  r = o && o.position;
                r &&
                  (i =
                    r - (D.sizeInfo.menuInnerHeight + D.sizeInfo.liHeight) / 2);
              }
            }
          function l(e, t) {
            var i,
              s,
              n,
              o,
              r,
              l,
              a,
              c,
              d = D.selectpicker.current.elements.length,
              h = [],
              p = !0,
              u = D.isVirtual();
            (D.selectpicker.view.scrollTop = e),
              (i = Math.ceil(
                (D.sizeInfo.menuInnerHeight / D.sizeInfo.liHeight) * 1.5
              )),
              (s = Math.round(d / i) || 1);
            for (var f = 0; f < s; f++) {
              var m = (f + 1) * i;
              if (
                (f === s - 1 && (m = d), (h[f] = [f * i + (f ? 1 : 0), m]), !d)
              )
                break;
              void 0 === r &&
                e - 1 <=
                  D.selectpicker.current.data[m - 1].position -
                    D.sizeInfo.menuInnerHeight &&
                (r = f);
            }
            if (
              (void 0 === r && (r = 0),
              (l = [
                D.selectpicker.view.position0,
                D.selectpicker.view.position1,
              ]),
              (n = Math.max(0, r - 1)),
              (o = Math.min(s - 1, r + 1)),
              (D.selectpicker.view.position0 =
                !1 === u ? 0 : Math.max(0, h[n][0]) || 0),
              (D.selectpicker.view.position1 =
                !1 === u ? d : Math.min(d, h[o][1]) || 0),
              (a =
                l[0] !== D.selectpicker.view.position0 ||
                l[1] !== D.selectpicker.view.position1),
              void 0 !== D.activeIndex &&
                ((N = D.selectpicker.main.elements[D.prevActiveIndex]),
                (H = D.selectpicker.main.elements[D.activeIndex]),
                (L = D.selectpicker.main.elements[D.selectedIndex]),
                t &&
                  (D.activeIndex !== D.selectedIndex && D.defocusItem(H),
                  (D.activeIndex = void 0)),
                D.activeIndex &&
                  D.activeIndex !== D.selectedIndex &&
                  D.defocusItem(L)),
              void 0 !== D.prevActiveIndex &&
                D.prevActiveIndex !== D.activeIndex &&
                D.prevActiveIndex !== D.selectedIndex &&
                D.defocusItem(N),
              (t || a) &&
                ((c = D.selectpicker.view.visibleElements
                  ? D.selectpicker.view.visibleElements.slice()
                  : []),
                (D.selectpicker.view.visibleElements =
                  !1 === u
                    ? D.selectpicker.current.elements
                    : D.selectpicker.current.elements.slice(
                        D.selectpicker.view.position0,
                        D.selectpicker.view.position1
                      )),
                D.setOptionStatus(),
                (A || (!1 === u && t)) &&
                  (p = !(function (e, i) {
                    return (
                      e.length === i.length &&
                      e.every(function (e, t) {
                        return e === i[t];
                      })
                    );
                  })(c, D.selectpicker.view.visibleElements)),
                (t || !0 === u) && p))
            ) {
              var v,
                g,
                b = D.$menuInner[0],
                w = document.createDocumentFragment(),
                I = b.firstChild.cloneNode(!1),
                x = D.selectpicker.view.visibleElements,
                k = [];
              b.replaceChild(I, b.firstChild);
              f = 0;
              for (var y = x.length; f < y; f++) {
                var $,
                  S,
                  E = x[f];
                D.options.sanitize &&
                  ($ = E.lastChild) &&
                  (S =
                    D.selectpicker.current.data[
                      f + D.selectpicker.view.position0
                    ]) &&
                  S.content &&
                  !S.sanitized &&
                  (k.push($), (S.sanitized = !0)),
                  w.appendChild(E);
              }
              if (
                (D.options.sanitize &&
                  k.length &&
                  P(k, D.options.whiteList, D.options.sanitizeFn),
                !0 === u
                  ? ((v =
                      0 === D.selectpicker.view.position0
                        ? 0
                        : D.selectpicker.current.data[
                            D.selectpicker.view.position0 - 1
                          ].position),
                    (g =
                      D.selectpicker.view.position1 > d - 1
                        ? 0
                        : D.selectpicker.current.data[d - 1].position -
                          D.selectpicker.current.data[
                            D.selectpicker.view.position1 - 1
                          ].position),
                    (b.firstChild.style.marginTop = v + "px"),
                    (b.firstChild.style.marginBottom = g + "px"))
                  : ((b.firstChild.style.marginTop = 0),
                    (b.firstChild.style.marginBottom = 0)),
                b.firstChild.appendChild(w),
                !0 === u && D.sizeInfo.hasScrollBar)
              ) {
                var C = b.firstChild.offsetWidth;
                if (
                  t &&
                  C < D.sizeInfo.menuInnerInnerWidth &&
                  D.sizeInfo.totalMenuWidth > D.sizeInfo.selectWidth
                )
                  b.firstChild.style.minWidth =
                    D.sizeInfo.menuInnerInnerWidth + "px";
                else if (C > D.sizeInfo.menuInnerInnerWidth) {
                  D.$menu[0].style.minWidth = 0;
                  var O = b.firstChild.offsetWidth;
                  O > D.sizeInfo.menuInnerInnerWidth &&
                    ((D.sizeInfo.menuInnerInnerWidth = O),
                    (b.firstChild.style.minWidth =
                      D.sizeInfo.menuInnerInnerWidth + "px")),
                    (D.$menu[0].style.minWidth = "");
                }
              }
            }
            if (((D.prevActiveIndex = D.activeIndex), D.options.liveSearch)) {
              if (A && t) {
                var z,
                  T = 0;
                D.selectpicker.view.canHighlight[T] ||
                  (T =
                    1 + D.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                  (z = D.selectpicker.view.visibleElements[T]),
                  D.defocusItem(D.selectpicker.view.currentActive),
                  (D.activeIndex = (
                    D.selectpicker.current.data[T] || {}
                  ).index),
                  D.focusItem(z);
              }
            } else D.$menuInner.trigger("focus");
          }
          l(i, !0),
            this.$menuInner
              .off("scroll.createView")
              .on("scroll.createView", function (e, t) {
                D.noScroll || l(this.scrollTop, t), (D.noScroll = !1);
              }),
            z(window)
              .off("resize" + j + "." + this.selectId + ".createView")
              .on(
                "resize" + j + "." + this.selectId + ".createView",
                function () {
                  D.$newElement.hasClass(V.SHOW) &&
                    l(D.$menuInner[0].scrollTop);
                }
              );
        },
        focusItem: function (e, t, i) {
          if (e) {
            t = t || this.selectpicker.main.data[this.activeIndex];
            var s = e.firstChild;
            s &&
              (s.setAttribute("aria-setsize", this.selectpicker.view.size),
              s.setAttribute("aria-posinset", t.posinset),
              !0 !== i &&
                (this.focusedParent.setAttribute("aria-activedescendant", s.id),
                e.classList.add("active"),
                s.classList.add("active")));
          }
        },
        defocusItem: function (e) {
          e &&
            (e.classList.remove("active"),
            e.firstChild && e.firstChild.classList.remove("active"));
        },
        setPlaceholder: function () {
          var e = !1;
          if (this.options.title && !this.multiple) {
            this.selectpicker.view.titleOption ||
              (this.selectpicker.view.titleOption =
                document.createElement("option")),
              (e = !0);
            var t = this.$element[0],
              i = !1,
              s = !this.selectpicker.view.titleOption.parentNode;
            if (s)
              (this.selectpicker.view.titleOption.className =
                "bs-title-option"),
                (this.selectpicker.view.titleOption.value = ""),
                (i =
                  void 0 === z(t.options[t.selectedIndex]).attr("selected") &&
                  void 0 === this.$element.data("selected"));
            (!s && 0 === this.selectpicker.view.titleOption.index) ||
              t.insertBefore(this.selectpicker.view.titleOption, t.firstChild),
              i && (t.selectedIndex = 0);
          }
          return e;
        },
        buildData: function () {
          var p = ':not([hidden]):not([data-hidden="true"])',
            u = [],
            f = 0,
            e = this.setPlaceholder() ? 1 : 0;
          this.options.hideDisabled && (p += ":not(:disabled)");
          var t = this.$element[0].querySelectorAll("select > *" + p);
          function m(e) {
            var t = u[u.length - 1];
            (t && "divider" === t.type && (t.optID || e.optID)) ||
              (((e = e || {}).type = "divider"), u.push(e));
          }
          function v(e, t) {
            if (
              (((t = t || {}).divider =
                "true" === e.getAttribute("data-divider")),
              t.divider)
            )
              m({ optID: t.optID });
            else {
              var i = u.length,
                s = e.style.cssText,
                n = s ? S(s) : "",
                o = (e.className || "") + (t.optgroupClass || "");
              t.optID && (o = "opt " + o),
                (t.optionClass = o.trim()),
                (t.inlineStyle = n),
                (t.text = e.textContent),
                (t.content = e.getAttribute("data-content")),
                (t.tokens = e.getAttribute("data-tokens")),
                (t.subtext = e.getAttribute("data-subtext")),
                (t.icon = e.getAttribute("data-icon")),
                (e.liIndex = i),
                (t.display = t.content || t.text),
                (t.type = "option"),
                (t.index = i),
                (t.option = e),
                (t.selected = !!e.selected),
                (t.disabled = t.disabled || !!e.disabled),
                u.push(t);
            }
          }
          function i(e, t) {
            var i = t[e],
              s = t[e - 1],
              n = t[e + 1],
              o = i.querySelectorAll("option" + p);
            if (o.length) {
              var r,
                l,
                a = {
                  display: S(i.label),
                  subtext: i.getAttribute("data-subtext"),
                  icon: i.getAttribute("data-icon"),
                  type: "optgroup-label",
                  optgroupClass: " " + (i.className || ""),
                };
              f++, s && m({ optID: f }), (a.optID = f), u.push(a);
              for (var c = 0, d = o.length; c < d; c++) {
                var h = o[c];
                0 === c && (l = (r = u.length - 1) + d),
                  v(h, {
                    headerIndex: r,
                    lastIndex: l,
                    optID: a.optID,
                    optgroupClass: a.optgroupClass,
                    disabled: i.disabled,
                  });
              }
              n && m({ optID: f });
            }
          }
          for (var s = t.length; e < s; e++) {
            var n = t[e];
            "OPTGROUP" !== n.tagName ? v(n, {}) : i(e, t);
          }
          this.selectpicker.main.data = this.selectpicker.current.data = u;
        },
        buildList: function () {
          var s = this,
            e = this.selectpicker.main.data,
            n = [],
            o = 0;
          function t(e) {
            var t,
              i = 0;
            switch (e.type) {
              case "divider":
                t = K.li(!1, V.DIVIDER, e.optID ? e.optID + "div" : void 0);
                break;
              case "option":
                (t = K.li(
                  K.a(K.text.call(s, e), e.optionClass, e.inlineStyle),
                  "",
                  e.optID
                )).firstChild && (t.firstChild.id = s.selectId + "-" + e.index);
                break;
              case "optgroup-label":
                t = K.li(
                  K.label.call(s, e),
                  "dropdown-header" + e.optgroupClass,
                  e.optID
                );
            }
            n.push(t),
              e.display && (i += e.display.length),
              e.subtext && (i += e.subtext.length),
              e.icon && (i += 1),
              o < i &&
                ((o = i), (s.selectpicker.view.widestOption = n[n.length - 1]));
          }
          (!s.options.showTick && !s.multiple) ||
            _.checkMark.parentNode ||
            ((_.checkMark.className =
              this.options.iconBase + " " + s.options.tickIcon + " check-mark"),
            _.a.appendChild(_.checkMark));
          for (var i = e.length, r = 0; r < i; r++) {
            t(e[r]);
          }
          this.selectpicker.main.elements = this.selectpicker.current.elements =
            n;
        },
        findLis: function () {
          return this.$menuInner.find(".inner > li");
        },
        render: function () {
          var e,
            t = this,
            i = this.$element[0],
            s = this.setPlaceholder() && 0 === i.selectedIndex,
            n = O(i, this.options.hideDisabled),
            o = n.length,
            r = this.$button[0],
            l = r.querySelector(".filter-option-inner-inner"),
            a = document.createTextNode(this.options.multipleSeparator),
            c = _.fragment.cloneNode(!1),
            d = !1;
          if (
            (r.classList.toggle("bs-placeholder", t.multiple ? !o : !T(i, n)),
            this.tabIndex(),
            "static" === this.options.selectedTextFormat)
          )
            c = K.text.call(this, { text: this.options.title }, !0);
          else if (
            !1 ===
            (this.multiple &&
              -1 !== this.options.selectedTextFormat.indexOf("count") &&
              1 < o &&
              ((1 < (e = this.options.selectedTextFormat.split(">")).length &&
                o > e[1]) ||
                (1 === e.length && 2 <= o)))
          ) {
            if (!s) {
              for (var h = 0; h < o && h < 50; h++) {
                var p = n[h],
                  u = this.selectpicker.main.data[p.liIndex],
                  f = {};
                this.multiple && 0 < h && c.appendChild(a.cloneNode(!1)),
                  p.title
                    ? (f.text = p.title)
                    : u &&
                      (u.content && t.options.showContent
                        ? ((f.content = u.content.toString()), (d = !0))
                        : (t.options.showIcon && (f.icon = u.icon),
                          t.options.showSubtext &&
                            !t.multiple &&
                            u.subtext &&
                            (f.subtext = " " + u.subtext),
                          (f.text = p.textContent.trim()))),
                  c.appendChild(K.text.call(this, f, !0));
              }
              49 < o && c.appendChild(document.createTextNode("..."));
            }
          } else {
            var m =
              ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
            this.options.hideDisabled && (m += ":not(:disabled)");
            var v = this.$element[0].querySelectorAll(
                "select > option" + m + ", optgroup" + m + " option" + m
              ).length,
              g =
                "function" == typeof this.options.countSelectedText
                  ? this.options.countSelectedText(o, v)
                  : this.options.countSelectedText;
            c = K.text.call(
              this,
              {
                text: g
                  .replace("{0}", o.toString())
                  .replace("{1}", v.toString()),
              },
              !0
            );
          }
          if (
            (null == this.options.title &&
              (this.options.title = this.$element.attr("title")),
            c.childNodes.length ||
              (c = K.text.call(
                this,
                {
                  text:
                    void 0 !== this.options.title
                      ? this.options.title
                      : this.options.noneSelectedText,
                },
                !0
              )),
            (r.title = c.textContent.replace(/<[^>]*>?/g, "").trim()),
            this.options.sanitize &&
              d &&
              P([c], t.options.whiteList, t.options.sanitizeFn),
            (l.innerHTML = ""),
            l.appendChild(c),
            R.major < 4 &&
              this.$newElement[0].classList.contains("bs3-has-addon"))
          ) {
            var b = r.querySelector(".filter-expand"),
              w = l.cloneNode(!0);
            (w.className = "filter-expand"),
              b ? r.replaceChild(w, b) : r.appendChild(w);
          }
          this.$element.trigger("rendered" + j);
        },
        setStyle: function (e, t) {
          var i,
            s = this.$button[0],
            n = this.$newElement[0],
            o = this.options.style.trim();
          this.$element.attr("class") &&
            this.$newElement.addClass(
              this.$element
                .attr("class")
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ""
                )
            ),
            R.major < 4 &&
              (n.classList.add("bs3"),
              n.parentNode.classList.contains("input-group") &&
                (n.previousElementSibling || n.nextElementSibling) &&
                (
                  n.previousElementSibling || n.nextElementSibling
                ).classList.contains("input-group-addon") &&
                n.classList.add("bs3-has-addon")),
            (i = e ? e.trim() : o),
            "add" == t
              ? i && s.classList.add.apply(s.classList, i.split(" "))
              : "remove" == t
              ? i && s.classList.remove.apply(s.classList, i.split(" "))
              : (o && s.classList.remove.apply(s.classList, o.split(" ")),
                i && s.classList.add.apply(s.classList, i.split(" ")));
        },
        liHeight: function (e) {
          if (
            e ||
            (!1 !== this.options.size && !Object.keys(this.sizeInfo).length)
          ) {
            var t = document.createElement("div"),
              i = document.createElement("div"),
              s = document.createElement("div"),
              n = document.createElement("ul"),
              o = document.createElement("li"),
              r = document.createElement("li"),
              l = document.createElement("li"),
              a = document.createElement("a"),
              c = document.createElement("span"),
              d =
                this.options.header &&
                0 < this.$menu.find("." + V.POPOVERHEADER).length
                  ? this.$menu.find("." + V.POPOVERHEADER)[0].cloneNode(!0)
                  : null,
              h = this.options.liveSearch
                ? document.createElement("div")
                : null,
              p =
                this.options.actionsBox &&
                this.multiple &&
                0 < this.$menu.find(".bs-actionsbox").length
                  ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                  : null,
              u =
                this.options.doneButton &&
                this.multiple &&
                0 < this.$menu.find(".bs-donebutton").length
                  ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                  : null,
              f = this.$element.find("option")[0];
            if (
              ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
              (c.className = "text"),
              (a.className = "dropdown-item " + (f ? f.className : "")),
              (t.className = this.$menu[0].parentNode.className + " " + V.SHOW),
              (t.style.width = 0),
              "auto" === this.options.width && (i.style.minWidth = 0),
              (i.className = V.MENU + " " + V.SHOW),
              (s.className = "inner " + V.SHOW),
              (n.className =
                V.MENU + " inner " + ("4" === R.major ? V.SHOW : "")),
              (o.className = V.DIVIDER),
              (r.className = "dropdown-header"),
              c.appendChild(document.createTextNode("\u200b")),
              a.appendChild(c),
              l.appendChild(a),
              r.appendChild(c.cloneNode(!0)),
              this.selectpicker.view.widestOption &&
                n.appendChild(
                  this.selectpicker.view.widestOption.cloneNode(!0)
                ),
              n.appendChild(l),
              n.appendChild(o),
              n.appendChild(r),
              d && i.appendChild(d),
              h)
            ) {
              var m = document.createElement("input");
              (h.className = "bs-searchbox"),
                (m.className = "form-control"),
                h.appendChild(m),
                i.appendChild(h);
            }
            p && i.appendChild(p),
              s.appendChild(n),
              i.appendChild(s),
              u && i.appendChild(u),
              t.appendChild(i),
              document.body.appendChild(t);
            var v,
              g = l.offsetHeight,
              b = r ? r.offsetHeight : 0,
              w = d ? d.offsetHeight : 0,
              I = h ? h.offsetHeight : 0,
              x = p ? p.offsetHeight : 0,
              k = u ? u.offsetHeight : 0,
              y = z(o).outerHeight(!0),
              $ = !!window.getComputedStyle && window.getComputedStyle(i),
              S = i.offsetWidth,
              E = $ ? null : z(i),
              C = {
                vert:
                  L($ ? $.paddingTop : E.css("paddingTop")) +
                  L($ ? $.paddingBottom : E.css("paddingBottom")) +
                  L($ ? $.borderTopWidth : E.css("borderTopWidth")) +
                  L($ ? $.borderBottomWidth : E.css("borderBottomWidth")),
                horiz:
                  L($ ? $.paddingLeft : E.css("paddingLeft")) +
                  L($ ? $.paddingRight : E.css("paddingRight")) +
                  L($ ? $.borderLeftWidth : E.css("borderLeftWidth")) +
                  L($ ? $.borderRightWidth : E.css("borderRightWidth")),
              },
              O = {
                vert:
                  C.vert +
                  L($ ? $.marginTop : E.css("marginTop")) +
                  L($ ? $.marginBottom : E.css("marginBottom")) +
                  2,
                horiz:
                  C.horiz +
                  L($ ? $.marginLeft : E.css("marginLeft")) +
                  L($ ? $.marginRight : E.css("marginRight")) +
                  2,
              };
            (s.style.overflowY = "scroll"),
              (v = i.offsetWidth - S),
              document.body.removeChild(t),
              (this.sizeInfo.liHeight = g),
              (this.sizeInfo.dropdownHeaderHeight = b),
              (this.sizeInfo.headerHeight = w),
              (this.sizeInfo.searchHeight = I),
              (this.sizeInfo.actionsHeight = x),
              (this.sizeInfo.doneButtonHeight = k),
              (this.sizeInfo.dividerHeight = y),
              (this.sizeInfo.menuPadding = C),
              (this.sizeInfo.menuExtras = O),
              (this.sizeInfo.menuWidth = S),
              (this.sizeInfo.menuInnerInnerWidth = S - C.horiz),
              (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
              (this.sizeInfo.scrollBarWidth = v),
              (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
              this.setPositionData();
          }
        },
        getSelectPosition: function () {
          var e,
            t = z(window),
            i = this.$newElement.offset(),
            s = z(this.options.container);
          this.options.container && s.length && !s.is("body")
            ? (((e = s.offset()).top += parseInt(s.css("borderTopWidth"))),
              (e.left += parseInt(s.css("borderLeftWidth"))))
            : (e = { top: 0, left: 0 });
          var n = this.options.windowPadding;
          (this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop()),
            (this.sizeInfo.selectOffsetBot =
              t.height() -
              this.sizeInfo.selectOffsetTop -
              this.sizeInfo.selectHeight -
              e.top -
              n[2]),
            (this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft()),
            (this.sizeInfo.selectOffsetRight =
              t.width() -
              this.sizeInfo.selectOffsetLeft -
              this.sizeInfo.selectWidth -
              e.left -
              n[1]),
            (this.sizeInfo.selectOffsetTop -= n[0]),
            (this.sizeInfo.selectOffsetLeft -= n[3]);
        },
        setMenuSize: function (e) {
          this.getSelectPosition();
          var t,
            i,
            s,
            n,
            o,
            r,
            l,
            a,
            c = this.sizeInfo.selectWidth,
            d = this.sizeInfo.liHeight,
            h = this.sizeInfo.headerHeight,
            p = this.sizeInfo.searchHeight,
            u = this.sizeInfo.actionsHeight,
            f = this.sizeInfo.doneButtonHeight,
            m = this.sizeInfo.dividerHeight,
            v = this.sizeInfo.menuPadding,
            g = 0;
          if (
            (this.options.dropupAuto &&
              ((l = d * this.selectpicker.current.elements.length + v.vert),
              (a =
                this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
                  this.sizeInfo.menuExtras.vert &&
                l + this.sizeInfo.menuExtras.vert + 50 >
                  this.sizeInfo.selectOffsetBot),
              !0 === this.selectpicker.isSearching &&
                (a = this.selectpicker.dropup),
              this.$newElement.toggleClass(V.DROPUP, a),
              (this.selectpicker.dropup = a)),
            "auto" === this.options.size)
          )
            (n =
              3 < this.selectpicker.current.elements.length
                ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2
                : 0),
              (i =
                this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
              (s = n + h + p + u + f),
              (r = Math.max(n - v.vert, 0)),
              this.$newElement.hasClass(V.DROPUP) &&
                (i =
                  this.sizeInfo.selectOffsetTop -
                  this.sizeInfo.menuExtras.vert),
              (t = (o = i) - h - p - u - f - v.vert);
          else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.selectpicker.current.elements.length > this.options.size
          ) {
            for (var b = 0; b < this.options.size; b++)
              "divider" === this.selectpicker.current.data[b].type && g++;
            (t = (i = d * this.options.size + g * m + v.vert) - v.vert),
              (o = i + h + p + u + f),
              (s = r = "");
          }
          this.$menu.css({
            "max-height": o + "px",
            overflow: "hidden",
            "min-height": s + "px",
          }),
            this.$menuInner.css({
              "max-height": t + "px",
              "overflow-y": "auto",
              "min-height": r + "px",
            }),
            (this.sizeInfo.menuInnerHeight = Math.max(t, 1)),
            this.selectpicker.current.data.length &&
              this.selectpicker.current.data[
                this.selectpicker.current.data.length - 1
              ].position > this.sizeInfo.menuInnerHeight &&
              ((this.sizeInfo.hasScrollBar = !0),
              (this.sizeInfo.totalMenuWidth =
                this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth)),
            "auto" === this.options.dropdownAlignRight &&
              this.$menu.toggleClass(
                V.MENURIGHT,
                this.sizeInfo.selectOffsetLeft >
                  this.sizeInfo.selectOffsetRight &&
                  this.sizeInfo.selectOffsetRight <
                    this.sizeInfo.totalMenuWidth - c
              ),
            this.dropdown &&
              this.dropdown._popper &&
              this.dropdown._popper.update();
        },
        setSize: function (e) {
          if (
            (this.liHeight(e),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size)
          ) {
            var t = this,
              i = z(window);
            this.setMenuSize(),
              this.options.liveSearch &&
                this.$searchbox
                  .off("input.setMenuSize propertychange.setMenuSize")
                  .on(
                    "input.setMenuSize propertychange.setMenuSize",
                    function () {
                      return t.setMenuSize();
                    }
                  ),
              "auto" === this.options.size
                ? i
                    .off(
                      "resize" +
                        j +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        j +
                        "." +
                        this.selectId +
                        ".setMenuSize"
                    )
                    .on(
                      "resize" +
                        j +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        j +
                        "." +
                        this.selectId +
                        ".setMenuSize",
                      function () {
                        return t.setMenuSize();
                      }
                    )
                : this.options.size &&
                  "auto" != this.options.size &&
                  this.selectpicker.current.elements.length >
                    this.options.size &&
                  i.off(
                    "resize" +
                      j +
                      "." +
                      this.selectId +
                      ".setMenuSize scroll" +
                      j +
                      "." +
                      this.selectId +
                      ".setMenuSize"
                  );
          }
          this.createView(!1, !0, e);
        },
        setWidth: function () {
          var i = this;
          "auto" === this.options.width
            ? requestAnimationFrame(function () {
                i.$menu.css("min-width", "0"),
                  i.$element.on("loaded" + j, function () {
                    i.liHeight(), i.setMenuSize();
                    var e = i.$newElement.clone().appendTo("body"),
                      t = e
                        .css("width", "auto")
                        .children("button")
                        .outerWidth();
                    e.remove(),
                      (i.sizeInfo.selectWidth = Math.max(
                        i.sizeInfo.totalMenuWidth,
                        t
                      )),
                      i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
                  });
              })
            : "fit" === this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "").addClass("fit-width"))
            : this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", this.options.width))
            : (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "")),
            this.$newElement.hasClass("fit-width") &&
              "fit" !== this.options.width &&
              this.$newElement[0].classList.remove("fit-width");
        },
        selectPosition: function () {
          this.$bsContainer = z('<div class="bs-container" />');
          function e(e) {
            var t = {},
              i =
                r.options.display ||
                (!!z.fn.dropdown.Constructor.Default &&
                  z.fn.dropdown.Constructor.Default.display);
            r.$bsContainer
              .addClass(e.attr("class").replace(/form-control|fit-width/gi, ""))
              .toggleClass(V.DROPUP, e.hasClass(V.DROPUP)),
              (s = e.offset()),
              l.is("body")
                ? (n = { top: 0, left: 0 })
                : (((n = l.offset()).top +=
                    parseInt(l.css("borderTopWidth")) - l.scrollTop()),
                  (n.left +=
                    parseInt(l.css("borderLeftWidth")) - l.scrollLeft())),
              (o = e.hasClass(V.DROPUP) ? 0 : e[0].offsetHeight),
              (R.major < 4 || "static" === i) &&
                ((t.top = s.top - n.top + o), (t.left = s.left - n.left)),
              (t.width = e[0].offsetWidth),
              r.$bsContainer.css(t);
          }
          var s,
            n,
            o,
            r = this,
            l = z(this.options.container);
          this.$button.on("click.bs.dropdown.data-api", function () {
            r.isDisabled() ||
              (e(r.$newElement),
              r.$bsContainer
                .appendTo(r.options.container)
                .toggleClass(V.SHOW, !r.$button.hasClass(V.SHOW))
                .append(r.$menu));
          }),
            z(window)
              .off(
                "resize" +
                  j +
                  "." +
                  this.selectId +
                  " scroll" +
                  j +
                  "." +
                  this.selectId
              )
              .on(
                "resize" +
                  j +
                  "." +
                  this.selectId +
                  " scroll" +
                  j +
                  "." +
                  this.selectId,
                function () {
                  r.$newElement.hasClass(V.SHOW) && e(r.$newElement);
                }
              ),
            this.$element.on("hide" + j, function () {
              r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach();
            });
        },
        setOptionStatus: function (e) {
          var t = this;
          if (
            ((t.noScroll = !1),
            t.selectpicker.view.visibleElements &&
              t.selectpicker.view.visibleElements.length)
          )
            for (
              var i = 0;
              i < t.selectpicker.view.visibleElements.length;
              i++
            ) {
              var s =
                  t.selectpicker.current.data[
                    i + t.selectpicker.view.position0
                  ],
                n = s.option;
              n &&
                (!0 !== e && t.setDisabled(s.index, s.disabled),
                t.setSelected(s.index, n.selected));
            }
        },
        setSelected: function (e, t) {
          var i,
            s,
            n = this.selectpicker.main.elements[e],
            o = this.selectpicker.main.data[e],
            r = void 0 !== this.activeIndex,
            l = this.activeIndex === e || (t && !this.multiple && !r);
          (o.selected = t),
            (s = n.firstChild),
            t && (this.selectedIndex = e),
            n.classList.toggle("selected", t),
            l
              ? (this.focusItem(n, o),
                (this.selectpicker.view.currentActive = n),
                (this.activeIndex = e))
              : this.defocusItem(n),
            s &&
              (s.classList.toggle("selected", t),
              t
                ? s.setAttribute("aria-selected", !0)
                : this.multiple
                ? s.setAttribute("aria-selected", !1)
                : s.removeAttribute("aria-selected")),
            l ||
              r ||
              !t ||
              void 0 === this.prevActiveIndex ||
              ((i = this.selectpicker.main.elements[this.prevActiveIndex]),
              this.defocusItem(i));
        },
        setDisabled: function (e, t) {
          var i,
            s = this.selectpicker.main.elements[e];
          (this.selectpicker.main.data[e].disabled = t),
            (i = s.firstChild),
            s.classList.toggle(V.DISABLED, t),
            i &&
              ("4" === R.major && i.classList.toggle(V.DISABLED, t),
              t
                ? (i.setAttribute("aria-disabled", t),
                  i.setAttribute("tabindex", -1))
                : (i.removeAttribute("aria-disabled"),
                  i.setAttribute("tabindex", 0)));
        },
        isDisabled: function () {
          return this.$element[0].disabled;
        },
        checkDisabled: function () {
          this.isDisabled()
            ? (this.$newElement[0].classList.add(V.DISABLED),
              this.$button
                .addClass(V.DISABLED)
                .attr("tabindex", -1)
                .attr("aria-disabled", !0))
            : (this.$button[0].classList.contains(V.DISABLED) &&
                (this.$newElement[0].classList.remove(V.DISABLED),
                this.$button.removeClass(V.DISABLED).attr("aria-disabled", !1)),
              -1 != this.$button.attr("tabindex") ||
                this.$element.data("tabindex") ||
                this.$button.removeAttr("tabindex"));
        },
        tabIndex: function () {
          this.$element.data("tabindex") !== this.$element.attr("tabindex") &&
            -98 !== this.$element.attr("tabindex") &&
            "-98" !== this.$element.attr("tabindex") &&
            (this.$element.data("tabindex", this.$element.attr("tabindex")),
            this.$button.attr("tabindex", this.$element.data("tabindex"))),
            this.$element.attr("tabindex", -98);
        },
        clickListener: function () {
          var C = this,
            t = z(document);
          function e() {
            C.options.liveSearch
              ? C.$searchbox.trigger("focus")
              : C.$menuInner.trigger("focus");
          }
          function i() {
            C.dropdown &&
            C.dropdown._popper &&
            C.dropdown._popper.state.isCreated
              ? e()
              : requestAnimationFrame(i);
          }
          t.data("spaceSelect", !1),
            this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) &&
                t.data("spaceSelect") &&
                (e.preventDefault(), t.data("spaceSelect", !1));
            }),
            this.$newElement.on("show.bs.dropdown", function () {
              3 < R.major &&
                !C.dropdown &&
                ((C.dropdown = C.$button.data("bs.dropdown")),
                (C.dropdown._menu = C.$menu[0]));
            }),
            this.$button.on("click.bs.dropdown.data-api", function () {
              C.$newElement.hasClass(V.SHOW) || C.setSize();
            }),
            this.$element.on("shown" + j, function () {
              C.$menuInner[0].scrollTop !== C.selectpicker.view.scrollTop &&
                (C.$menuInner[0].scrollTop = C.selectpicker.view.scrollTop),
                3 < R.major ? requestAnimationFrame(i) : e();
            }),
            this.$menuInner.on("mouseenter", "li a", function (e) {
              var t = this.parentElement,
                i = C.isVirtual() ? C.selectpicker.view.position0 : 0,
                s = Array.prototype.indexOf.call(t.parentElement.children, t),
                n = C.selectpicker.current.data[s + i];
              C.focusItem(t, n, !0);
            }),
            this.$menuInner.on("click", "li a", function (e, t) {
              var i = z(this),
                s = C.$element[0],
                n = C.isVirtual() ? C.selectpicker.view.position0 : 0,
                o = C.selectpicker.current.data[i.parent().index() + n],
                r = o.index,
                l = T(s),
                a = s.selectedIndex,
                c = s.options[a],
                d = !0;
              if (
                (C.multiple &&
                  1 !== C.options.maxOptions &&
                  e.stopPropagation(),
                e.preventDefault(),
                !C.isDisabled() && !i.parent().hasClass(V.DISABLED))
              ) {
                var h = o.option,
                  p = z(h),
                  u = h.selected,
                  f = p.parent("optgroup"),
                  m = f.find("option"),
                  v = C.options.maxOptions,
                  g = f.data("maxOptions") || !1;
                if (
                  (r === C.activeIndex && (t = !0),
                  t ||
                    ((C.prevActiveIndex = C.activeIndex),
                    (C.activeIndex = void 0)),
                  C.multiple)
                ) {
                  if (
                    ((h.selected = !u),
                    C.setSelected(r, !u),
                    i.trigger("blur"),
                    !1 !== v || !1 !== g)
                  ) {
                    var b = v < O(s).length,
                      w = g < f.find("option:selected").length;
                    if ((v && b) || (g && w))
                      if (v && 1 == v)
                        (s.selectedIndex = -1),
                          (h.selected = !0),
                          C.setOptionStatus(!0);
                      else if (g && 1 == g) {
                        for (var I = 0; I < m.length; I++) {
                          var x = m[I];
                          (x.selected = !1), C.setSelected(x.liIndex, !1);
                        }
                        (h.selected = !0), C.setSelected(r, !0);
                      } else {
                        var k =
                            "string" == typeof C.options.maxOptionsText
                              ? [
                                  C.options.maxOptionsText,
                                  C.options.maxOptionsText,
                                ]
                              : C.options.maxOptionsText,
                          y = "function" == typeof k ? k(v, g) : k,
                          $ = y[0].replace("{n}", v),
                          S = y[1].replace("{n}", g),
                          E = z('<div class="notify"></div>');
                        y[2] &&
                          (($ = $.replace("{var}", y[2][1 < v ? 0 : 1])),
                          (S = S.replace("{var}", y[2][1 < g ? 0 : 1]))),
                          (h.selected = !1),
                          C.$menu.append(E),
                          v &&
                            b &&
                            (E.append(z("<div>" + $ + "</div>")),
                            (d = !1),
                            C.$element.trigger("maxReached" + j)),
                          g &&
                            w &&
                            (E.append(z("<div>" + S + "</div>")),
                            (d = !1),
                            C.$element.trigger("maxReachedGrp" + j)),
                          setTimeout(function () {
                            C.setSelected(r, !1);
                          }, 10),
                          E[0].classList.add("fadeOut"),
                          setTimeout(function () {
                            E.remove();
                          }, 1050);
                      }
                  }
                } else
                  c && (c.selected = !1),
                    (h.selected = !0),
                    C.setSelected(r, !0);
                !C.multiple || (C.multiple && 1 === C.options.maxOptions)
                  ? C.$button.trigger("focus")
                  : C.options.liveSearch && C.$searchbox.trigger("focus"),
                  d &&
                    ((!C.multiple && a === s.selectedIndex) ||
                      ((A = [h.index, p.prop("selected"), l]),
                      C.$element.triggerNative("change")));
              }
            }),
            this.$menu.on(
              "click",
              "li." +
                V.DISABLED +
                " a, ." +
                V.POPOVERHEADER +
                ", ." +
                V.POPOVERHEADER +
                " :not(.close)",
              function (e) {
                e.currentTarget == this &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  C.options.liveSearch && !z(e.target).hasClass("close")
                    ? C.$searchbox.trigger("focus")
                    : C.$button.trigger("focus"));
              }
            ),
            this.$menuInner.on(
              "click",
              ".divider, .dropdown-header",
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  C.options.liveSearch
                    ? C.$searchbox.trigger("focus")
                    : C.$button.trigger("focus");
              }
            ),
            this.$menu.on(
              "click",
              "." + V.POPOVERHEADER + " .close",
              function () {
                C.$button.trigger("click");
              }
            ),
            this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }),
            this.$menu.on("click", ".actions-btn", function (e) {
              C.options.liveSearch
                ? C.$searchbox.trigger("focus")
                : C.$button.trigger("focus"),
                e.preventDefault(),
                e.stopPropagation(),
                z(this).hasClass("bs-select-all")
                  ? C.selectAll()
                  : C.deselectAll();
            }),
            this.$element
              .on("change" + j, function () {
                C.render(), C.$element.trigger("changed" + j, A), (A = null);
              })
              .on("focus" + j, function () {
                C.options.mobile || C.$button.trigger("focus");
              });
        },
        liveSearchListener: function () {
          var u = this,
            f = document.createElement("li");
          this.$button.on("click.bs.dropdown.data-api", function () {
            u.$searchbox.val() && u.$searchbox.val("");
          }),
            this.$searchbox.on(
              "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
              function (e) {
                e.stopPropagation();
              }
            ),
            this.$searchbox.on("input propertychange", function () {
              var e = u.$searchbox.val();
              if (
                ((u.selectpicker.search.elements = []),
                (u.selectpicker.search.data = []),
                e)
              ) {
                var t = [],
                  i = e.toUpperCase(),
                  s = {},
                  n = [],
                  o = u._searchStyle(),
                  r = u.options.liveSearchNormalize;
                r && (i = w(i));
                for (var l = 0; l < u.selectpicker.main.data.length; l++) {
                  var a = u.selectpicker.main.data[l];
                  s[l] || (s[l] = k(a, i, o, r)),
                    s[l] &&
                      void 0 !== a.headerIndex &&
                      -1 === n.indexOf(a.headerIndex) &&
                      (0 < a.headerIndex &&
                        ((s[a.headerIndex - 1] = !0),
                        n.push(a.headerIndex - 1)),
                      (s[a.headerIndex] = !0),
                      n.push(a.headerIndex),
                      (s[a.lastIndex + 1] = !0)),
                    s[l] && "optgroup-label" !== a.type && n.push(l);
                }
                l = 0;
                for (var c = n.length; l < c; l++) {
                  var d = n[l],
                    h = n[l - 1],
                    p =
                      ((a = u.selectpicker.main.data[d]),
                      u.selectpicker.main.data[h]);
                  ("divider" !== a.type ||
                    ("divider" === a.type &&
                      p &&
                      "divider" !== p.type &&
                      c - 1 !== l)) &&
                    (u.selectpicker.search.data.push(a),
                    t.push(u.selectpicker.main.elements[d]));
                }
                (u.activeIndex = void 0),
                  (u.noScroll = !0),
                  u.$menuInner.scrollTop(0),
                  (u.selectpicker.search.elements = t),
                  u.createView(!0),
                  t.length ||
                    ((f.className = "no-results"),
                    (f.innerHTML = u.options.noneResultsText.replace(
                      "{0}",
                      '"' + S(e) + '"'
                    )),
                    u.$menuInner[0].firstChild.appendChild(f));
              } else u.$menuInner.scrollTop(0), u.createView(!1);
            });
        },
        _searchStyle: function () {
          return this.options.liveSearchStyle || "contains";
        },
        val: function (e) {
          var t = this.$element[0];
          if (void 0 === e) return this.$element.val();
          var i = T(t);
          if (
            ((A = [null, null, i]),
            this.$element.val(e).trigger("changed" + j, A),
            this.$newElement.hasClass(V.SHOW))
          )
            if (this.multiple) this.setOptionStatus(!0);
            else {
              var s = (t.options[t.selectedIndex] || {}).liIndex;
              "number" == typeof s &&
                (this.setSelected(this.selectedIndex, !1),
                this.setSelected(s, !0));
            }
          return this.render(), (A = null), this.$element;
        },
        changeAll: function (e) {
          if (this.multiple) {
            void 0 === e && (e = !0);
            var t = this.$element[0],
              i = 0,
              s = 0,
              n = T(t);
            t.classList.add("bs-select-hidden");
            for (
              var o = 0, r = this.selectpicker.current.data, l = r.length;
              o < l;
              o++
            ) {
              var a = r[o],
                c = a.option;
              c &&
                !a.disabled &&
                "divider" !== a.type &&
                (a.selected && i++, !0 === (c.selected = e) && s++);
            }
            t.classList.remove("bs-select-hidden"),
              i !== s &&
                (this.setOptionStatus(),
                (A = [null, null, n]),
                this.$element.triggerNative("change"));
          }
        },
        selectAll: function () {
          return this.changeAll(!0);
        },
        deselectAll: function () {
          return this.changeAll(!1);
        },
        toggle: function (e) {
          (e = e || window.event) && e.stopPropagation(),
            this.$button.trigger("click.bs.dropdown.data-api");
        },
        keydown: function (e) {
          var t,
            i,
            s,
            n,
            o,
            r = z(this),
            l = r.hasClass("dropdown-toggle"),
            a = (l ? r.closest(".dropdown") : r.closest(F.MENU)).data("this"),
            c = a.findLis(),
            d = !1,
            h = e.which === W && !l && !a.options.selectOnTab,
            p = G.test(e.which) || h,
            u = a.$menuInner[0].scrollTop,
            f = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0;
          if (!(112 <= e.which && e.which <= 123))
            if (
              !(i = a.$newElement.hasClass(V.SHOW)) &&
              (p ||
                (48 <= e.which && e.which <= 57) ||
                (96 <= e.which && e.which <= 105) ||
                (65 <= e.which && e.which <= 90)) &&
              (a.$button.trigger("click.bs.dropdown.data-api"),
              a.options.liveSearch)
            )
              a.$searchbox.trigger("focus");
            else {
              if (
                (e.which === N &&
                  i &&
                  (e.preventDefault(),
                  a.$button
                    .trigger("click.bs.dropdown.data-api")
                    .trigger("focus")),
                p)
              ) {
                if (!c.length) return;
                -1 !==
                  (t = (s = a.selectpicker.main.elements[a.activeIndex])
                    ? Array.prototype.indexOf.call(s.parentElement.children, s)
                    : -1) && a.defocusItem(s),
                  e.which === B
                    ? (-1 !== t && t--,
                      t + f < 0 && (t += c.length),
                      a.selectpicker.view.canHighlight[t + f] ||
                        (-1 ===
                          (t =
                            a.selectpicker.view.canHighlight
                              .slice(0, t + f)
                              .lastIndexOf(!0) - f) &&
                          (t = c.length - 1)))
                    : (e.which !== M && !h) ||
                      (++t + f >= a.selectpicker.view.canHighlight.length &&
                        (t = 0),
                      a.selectpicker.view.canHighlight[t + f] ||
                        (t =
                          t +
                          1 +
                          a.selectpicker.view.canHighlight
                            .slice(t + f + 1)
                            .indexOf(!0))),
                  e.preventDefault();
                var m = f + t;
                e.which === B
                  ? 0 === f && t === c.length - 1
                    ? ((a.$menuInner[0].scrollTop =
                        a.$menuInner[0].scrollHeight),
                      (m = a.selectpicker.current.elements.length - 1))
                    : (d =
                        (o =
                          (n = a.selectpicker.current.data[m]).position -
                          n.height) < u)
                  : (e.which !== M && !h) ||
                    (0 === t
                      ? (m = a.$menuInner[0].scrollTop = 0)
                      : (d =
                          u <
                          (o =
                            (n = a.selectpicker.current.data[m]).position -
                            a.sizeInfo.menuInnerHeight))),
                  (s = a.selectpicker.current.elements[m]),
                  (a.activeIndex = a.selectpicker.current.data[m].index),
                  a.focusItem(s),
                  (a.selectpicker.view.currentActive = s),
                  d && (a.$menuInner[0].scrollTop = o),
                  a.options.liveSearch
                    ? a.$searchbox.trigger("focus")
                    : r.trigger("focus");
              } else if (
                (!r.is("input") && !q.test(e.which)) ||
                (e.which === H && a.selectpicker.keydown.keyHistory)
              ) {
                var v,
                  g,
                  b = [];
                e.preventDefault(),
                  (a.selectpicker.keydown.keyHistory += C[e.which]),
                  a.selectpicker.keydown.resetKeyHistory.cancel &&
                    clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),
                  (a.selectpicker.keydown.resetKeyHistory.cancel =
                    a.selectpicker.keydown.resetKeyHistory.start()),
                  (g = a.selectpicker.keydown.keyHistory),
                  /^(.)\1+$/.test(g) && (g = g.charAt(0));
                for (var w = 0; w < a.selectpicker.current.data.length; w++) {
                  var I = a.selectpicker.current.data[w];
                  k(I, g, "startsWith", !0) &&
                    a.selectpicker.view.canHighlight[w] &&
                    b.push(I.index);
                }
                if (b.length) {
                  var x = 0;
                  c.removeClass("active").find("a").removeClass("active"),
                    1 === g.length &&
                      (-1 === (x = b.indexOf(a.activeIndex)) ||
                      x === b.length - 1
                        ? (x = 0)
                        : x++),
                    (v = b[x]),
                    (d =
                      0 < u - (n = a.selectpicker.main.data[v]).position
                        ? ((o = n.position - n.height), !0)
                        : ((o = n.position - a.sizeInfo.menuInnerHeight),
                          n.position > u + a.sizeInfo.menuInnerHeight)),
                    (s = a.selectpicker.main.elements[v]),
                    (a.activeIndex = b[x]),
                    a.focusItem(s),
                    s && s.firstChild.focus(),
                    d && (a.$menuInner[0].scrollTop = o),
                    r.trigger("focus");
                }
              }
              i &&
                ((e.which === H && !a.selectpicker.keydown.keyHistory) ||
                  e.which === D ||
                  (e.which === W && a.options.selectOnTab)) &&
                (e.which !== H && e.preventDefault(),
                (a.options.liveSearch && e.which === H) ||
                  (a.$menuInner.find(".active a").trigger("click", !0),
                  r.trigger("focus"),
                  a.options.liveSearch ||
                    (e.preventDefault(), z(document).data("spaceSelect", !0))));
            }
        },
        mobile: function () {
          this.$element[0].classList.add("mobile-device");
        },
        refresh: function () {
          var e = z.extend({}, this.options, this.$element.data());
          (this.options = e),
            this.checkDisabled(),
            this.setStyle(),
            this.render(),
            this.buildData(),
            this.buildList(),
            this.setWidth(),
            this.setSize(!0),
            this.$element.trigger("refreshed" + j);
        },
        hide: function () {
          this.$newElement.hide();
        },
        show: function () {
          this.$newElement.show();
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove();
        },
        destroy: function () {
          this.$newElement.before(this.$element).remove(),
            this.$bsContainer
              ? this.$bsContainer.remove()
              : this.$menu.remove(),
            this.$element
              .off(j)
              .removeData("selectpicker")
              .removeClass("bs-select-hidden selectpicker"),
            z(window).off(j + "." + this.selectId);
        },
      });
    var J = z.fn.selectpicker;
    (z.fn.selectpicker = Z),
      (z.fn.selectpicker.Constructor = Y),
      (z.fn.selectpicker.noConflict = function () {
        return (z.fn.selectpicker = J), this;
      });
    var Q =
      z.fn.dropdown.Constructor._dataApiKeydownHandler ||
      z.fn.dropdown.Constructor.prototype.keydown;
    z(document)
      .off("keydown.bs.dropdown.data-api")
      .on(
        "keydown.bs.dropdown.data-api",
        ':not(.bootstrap-select) > [data-toggle="dropdown"]',
        Q
      )
      .on(
        "keydown.bs.dropdown.data-api",
        ":not(.bootstrap-select) > .dropdown-menu",
        Q
      )
      .on(
        "keydown" + j,
        '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
        Y.prototype.keydown
      )
      .on(
        "focusin.modal",
        '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
        function (e) {
          e.stopPropagation();
        }
      ),
      z(window).on("load" + j + ".data-api", function () {
        z(".selectpicker").each(function () {
          var e = z(this);
          Z.call(e, e.data());
        });
      });
  })(e);
});
//# sourceMappingURL=bootstrap-select.min.js.map
/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "object" == typeof module && module.exports
    ? (module.exports = function (e, t) {
        return (
          void 0 === t &&
            (t =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(e)),
          n(t),
          t
        );
      })
    : n(jQuery);
})(function (u) {
  var e = (function () {
      if (u && u.fn && u.fn.select2 && u.fn.select2.amd)
        var e = u.fn.select2.amd;
      var t, n, r, h, o, s, f, g, m, v, y, _, i, a, b;
      function w(e, t) {
        return i.call(e, t);
      }
      function l(e, t) {
        var n,
          r,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          h = t && t.split("/"),
          f = y.map,
          g = (f && f["*"]) || {};
        if (e) {
          for (
            s = (e = e.split("/")).length - 1,
              y.nodeIdCompat && b.test(e[s]) && (e[s] = e[s].replace(b, "")),
              "." === e[0].charAt(0) &&
                h &&
                (e = h.slice(0, h.length - 1).concat(e)),
              u = 0;
            u < e.length;
            u++
          )
            if ("." === (p = e[u])) e.splice(u, 1), (u -= 1);
            else if (".." === p) {
              if (0 === u || (1 === u && ".." === e[2]) || ".." === e[u - 1])
                continue;
              0 < u && (e.splice(u - 1, 2), (u -= 2));
            }
          e = e.join("/");
        }
        if ((h || g) && f) {
          for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
            if (((r = n.slice(0, u).join("/")), h))
              for (d = h.length; 0 < d; d -= 1)
                if ((i = (i = f[h.slice(0, d).join("/")]) && i[r])) {
                  (o = i), (a = u);
                  break;
                }
            if (o) break;
            !l && g && g[r] && ((l = g[r]), (c = u));
          }
          !o && l && ((o = l), (a = c)),
            o && (n.splice(0, a, o), (e = n.join("/")));
        }
        return e;
      }
      function A(t, n) {
        return function () {
          var e = a.call(arguments, 0);
          return (
            "string" != typeof e[0] && 1 === e.length && e.push(null),
            s.apply(h, e.concat([t, n]))
          );
        };
      }
      function x(t) {
        return function (e) {
          m[t] = e;
        };
      }
      function D(e) {
        if (w(v, e)) {
          var t = v[e];
          delete v[e], (_[e] = !0), o.apply(h, t);
        }
        if (!w(m, e) && !w(_, e)) throw new Error("No " + e);
        return m[e];
      }
      function c(e) {
        var t,
          n = e ? e.indexOf("!") : -1;
        return (
          -1 < n &&
            ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
          [t, e]
        );
      }
      function S(e) {
        return e ? c(e) : [];
      }
      return (
        (e && e.requirejs) ||
          (e ? (n = e) : (e = {}),
          (m = {}),
          (v = {}),
          (y = {}),
          (_ = {}),
          (i = Object.prototype.hasOwnProperty),
          (a = [].slice),
          (b = /\.js$/),
          (f = function (e, t) {
            var n,
              r = c(e),
              i = r[0],
              o = t[1];
            return (
              (e = r[1]),
              i && (n = D((i = l(i, o)))),
              i
                ? (e =
                    n && n.normalize
                      ? n.normalize(
                          e,
                          (function (t) {
                            return function (e) {
                              return l(e, t);
                            };
                          })(o)
                        )
                      : l(e, o))
                : ((i = (r = c((e = l(e, o))))[0]),
                  (e = r[1]),
                  i && (n = D(i))),
              { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
            );
          }),
          (g = {
            require: function (e) {
              return A(e);
            },
            exports: function (e) {
              var t = m[e];
              return void 0 !== t ? t : (m[e] = {});
            },
            module: function (e) {
              return {
                id: e,
                uri: "",
                exports: m[e],
                config: (function (e) {
                  return function () {
                    return (y && y.config && y.config[e]) || {};
                  };
                })(e),
              };
            },
          }),
          (o = function (e, t, n, r) {
            var i,
              o,
              s,
              a,
              l,
              c,
              u,
              d = [],
              p = typeof n;
            if (((c = S((r = r || e))), "undefined" == p || "function" == p)) {
              for (
                t =
                  !t.length && n.length ? ["require", "exports", "module"] : t,
                  l = 0;
                l < t.length;
                l += 1
              )
                if ("require" === (o = (a = f(t[l], c)).f)) d[l] = g.require(e);
                else if ("exports" === o) (d[l] = g.exports(e)), (u = !0);
                else if ("module" === o) i = d[l] = g.module(e);
                else if (w(m, o) || w(v, o) || w(_, o)) d[l] = D(o);
                else {
                  if (!a.p) throw new Error(e + " missing " + o);
                  a.p.load(a.n, A(r, !0), x(o), {}), (d[l] = m[o]);
                }
              (s = n ? n.apply(m[e], d) : void 0),
                e &&
                  (i && i.exports !== h && i.exports !== m[e]
                    ? (m[e] = i.exports)
                    : (s === h && u) || (m[e] = s));
            } else e && (m[e] = n);
          }),
          (t =
            n =
            s =
              function (e, t, n, r, i) {
                if ("string" == typeof e)
                  return g[e] ? g[e](t) : D(f(e, S(t)).f);
                if (!e.splice) {
                  if (((y = e).deps && s(y.deps, y.callback), !t)) return;
                  t.splice ? ((e = t), (t = n), (n = null)) : (e = h);
                }
                return (
                  (t = t || function () {}),
                  "function" == typeof n && ((n = r), (r = i)),
                  r
                    ? o(h, e, t, n)
                    : setTimeout(function () {
                        o(h, e, t, n);
                      }, 4),
                  s
                );
              }),
          (s.config = function (e) {
            return s(e);
          }),
          (t._defined = m),
          ((r = function (e, t, n) {
            if ("string" != typeof e)
              throw new Error(
                "See almond README: incorrect module build, no module name"
              );
            t.splice || ((n = t), (t = [])),
              w(m, e) || w(v, e) || (v[e] = [e, t, n]);
          }).amd = { jQuery: !0 }),
          (e.requirejs = t),
          (e.require = n),
          (e.define = r)),
        e.define("almond", function () {}),
        e.define("jquery", [], function () {
          var e = u || $;
          return (
            null == e &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            e
          );
        }),
        e.define("select2/utils", ["jquery"], function (o) {
          var i = {};
          function u(e) {
            var t = e.prototype,
              n = [];
            for (var r in t) {
              "function" == typeof t[r] && "constructor" !== r && n.push(r);
            }
            return n;
          }
          (i.Extend = function (e, t) {
            var n = {}.hasOwnProperty;
            function r() {
              this.constructor = e;
            }
            for (var i in t) n.call(t, i) && (e[i] = t[i]);
            return (
              (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.__super__ = t.prototype),
              e
            );
          }),
            (i.Decorate = function (r, i) {
              var e = u(i),
                t = u(r);
              function o() {
                var e = Array.prototype.unshift,
                  t = i.prototype.constructor.length,
                  n = r.prototype.constructor;
                0 < t &&
                  (e.call(arguments, r.prototype.constructor),
                  (n = i.prototype.constructor)),
                  n.apply(this, arguments);
              }
              (i.displayName = r.displayName),
                (o.prototype = new (function () {
                  this.constructor = o;
                })());
              for (var n = 0; n < t.length; n++) {
                var s = t[n];
                o.prototype[s] = r.prototype[s];
              }
              function a(e) {
                var t = function () {};
                e in o.prototype && (t = o.prototype[e]);
                var n = i.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              }
              for (var l = 0; l < e.length; l++) {
                var c = e[l];
                o.prototype[c] = a(c);
              }
              return o;
            });
          function e() {
            this.listeners = {};
          }
          (e.prototype.on = function (e, t) {
            (this.listeners = this.listeners || {}),
              e in this.listeners
                ? this.listeners[e].push(t)
                : (this.listeners[e] = [t]);
          }),
            (e.prototype.trigger = function (e) {
              var t = Array.prototype.slice,
                n = t.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == n && (n = []),
                0 === n.length && n.push({}),
                (n[0]._type = e) in this.listeners &&
                  this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (e.prototype.invoke = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) e[n].apply(this, t);
            }),
            (i.Observable = e),
            (i.generateChars = function (e) {
              for (var t = "", n = 0; n < e; n++) {
                t += Math.floor(36 * Math.random()).toString(36);
              }
              return t;
            }),
            (i.bind = function (e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }),
            (i._convertData = function (e) {
              for (var t in e) {
                var n = t.split("-"),
                  r = e;
                if (1 !== n.length) {
                  for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in
                      r || (r[o] = {}),
                      i == n.length - 1 && (r[o] = e[t]),
                      (r = r[o]);
                  }
                  delete e[t];
                }
              }
              return e;
            }),
            (i.hasScroll = function (e, t) {
              var n = o(t),
                r = t.style.overflowX,
                i = t.style.overflowY;
              return (
                (r !== i || ("hidden" !== i && "visible" !== i)) &&
                ("scroll" === r ||
                  "scroll" === i ||
                  n.innerHeight() < t.scrollHeight ||
                  n.innerWidth() < t.scrollWidth)
              );
            }),
            (i.escapeMarkup = function (e) {
              var t = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof e
                ? e
                : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e];
                  });
            }),
            (i.appendMany = function (e, t) {
              if ("1.7" === o.fn.jquery.substr(0, 3)) {
                var n = o();
                o.map(t, function (e) {
                  n = n.add(e);
                }),
                  (t = n);
              }
              e.append(t);
            }),
            (i.__cache = {});
          var n = 0;
          return (
            (i.GetUniqueElementId = function (e) {
              var t = e.getAttribute("data-select2-id");
              return (
                null == t &&
                  (e.id
                    ? ((t = e.id), e.setAttribute("data-select2-id", t))
                    : (e.setAttribute("data-select2-id", ++n),
                      (t = n.toString()))),
                t
              );
            }),
            (i.StoreData = function (e, t, n) {
              var r = i.GetUniqueElementId(e);
              i.__cache[r] || (i.__cache[r] = {}), (i.__cache[r][t] = n);
            }),
            (i.GetData = function (e, t) {
              var n = i.GetUniqueElementId(e);
              return t
                ? i.__cache[n] && null != i.__cache[n][t]
                  ? i.__cache[n][t]
                  : o(e).data(t)
                : i.__cache[n];
            }),
            (i.RemoveData = function (e) {
              var t = i.GetUniqueElementId(e);
              null != i.__cache[t] && delete i.__cache[t],
                e.removeAttribute("data-select2-id");
            }),
            i
          );
        }),
        e.define("select2/results", ["jquery", "./utils"], function (h, f) {
          function r(e, t, n) {
            (this.$element = e),
              (this.data = n),
              (this.options = t),
              r.__super__.constructor.call(this);
          }
          return (
            f.Extend(r, f.Observable),
            (r.prototype.render = function () {
              var e = h(
                '<ul class="select2-results__options" role="listbox"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  e.attr("aria-multiselectable", "true"),
                (this.$results = e)
              );
            }),
            (r.prototype.clear = function () {
              this.$results.empty();
            }),
            (r.prototype.displayMessage = function (e) {
              var t = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var n = h(
                  '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                ),
                r = this.options.get("translations").get(e.message);
              n.append(t(r(e.args))),
                (n[0].className += " select2-results__message"),
                this.$results.append(n);
            }),
            (r.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (r.prototype.append = function (e) {
              this.hideLoading();
              var t = [];
              if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                  var r = e.results[n],
                    i = this.option(r);
                  t.push(i);
                }
                this.$results.append(t);
              } else
                0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" });
            }),
            (r.prototype.position = function (e, t) {
              t.find(".select2-results").append(e);
            }),
            (r.prototype.sort = function (e) {
              return this.options.get("sorter")(e);
            }),
            (r.prototype.highlightFirstItem = function () {
              var e = this.$results.find(
                  ".select2-results__option[aria-selected]"
                ),
                t = e.filter("[aria-selected=true]");
              0 < t.length
                ? t.first().trigger("mouseenter")
                : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (r.prototype.setClasses = function () {
              var t = this;
              this.data.current(function (e) {
                var r = h.map(e, function (e) {
                  return e.id.toString();
                });
                t.$results
                  .find(".select2-results__option[aria-selected]")
                  .each(function () {
                    var e = h(this),
                      t = f.GetData(this, "data"),
                      n = "" + t.id;
                    (null != t.element && t.element.selected) ||
                    (null == t.element && -1 < h.inArray(n, r))
                      ? e.attr("aria-selected", "true")
                      : e.attr("aria-selected", "false");
                  });
              });
            }),
            (r.prototype.showLoading = function (e) {
              this.hideLoading();
              var t = {
                  disabled: !0,
                  loading: !0,
                  text: this.options.get("translations").get("searching")(e),
                },
                n = this.option(t);
              (n.className += " loading-results"), this.$results.prepend(n);
            }),
            (r.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (r.prototype.option = function (e) {
              var t = document.createElement("li");
              t.className = "select2-results__option";
              var n = { role: "option", "aria-selected": "false" },
                r =
                  window.Element.prototype.matches ||
                  window.Element.prototype.msMatchesSelector ||
                  window.Element.prototype.webkitMatchesSelector;
              for (var i in (((null != e.element &&
                r.call(e.element, ":disabled")) ||
                (null == e.element && e.disabled)) &&
                (delete n["aria-selected"], (n["aria-disabled"] = "true")),
              null == e.id && delete n["aria-selected"],
              null != e._resultId && (t.id = e._resultId),
              e.title && (t.title = e.title),
              e.children &&
                ((n.role = "group"),
                (n["aria-label"] = e.text),
                delete n["aria-selected"]),
              n)) {
                var o = n[i];
                t.setAttribute(i, o);
              }
              if (e.children) {
                var s = h(t),
                  a = document.createElement("strong");
                a.className = "select2-results__group";
                h(a);
                this.template(e, a);
                for (var l = [], c = 0; c < e.children.length; c++) {
                  var u = e.children[c],
                    d = this.option(u);
                  l.push(d);
                }
                var p = h("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                });
                p.append(l), s.append(a), s.append(p);
              } else this.template(e, t);
              return f.StoreData(t, "data", e), t;
            }),
            (r.prototype.bind = function (t, e) {
              var l = this,
                n = t.id + "-results";
              this.$results.attr("id", n),
                t.on("results:all", function (e) {
                  l.clear(),
                    l.append(e.data),
                    t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }),
                t.on("results:append", function (e) {
                  l.append(e.data), t.isOpen() && l.setClasses();
                }),
                t.on("query", function (e) {
                  l.hideMessages(), l.showLoading(e);
                }),
                t.on("select", function () {
                  t.isOpen() &&
                    (l.setClasses(),
                    l.options.get("scrollAfterSelect") &&
                      l.highlightFirstItem());
                }),
                t.on("unselect", function () {
                  t.isOpen() &&
                    (l.setClasses(),
                    l.options.get("scrollAfterSelect") &&
                      l.highlightFirstItem());
                }),
                t.on("open", function () {
                  l.$results.attr("aria-expanded", "true"),
                    l.$results.attr("aria-hidden", "false"),
                    l.setClasses(),
                    l.ensureHighlightVisible();
                }),
                t.on("close", function () {
                  l.$results.attr("aria-expanded", "false"),
                    l.$results.attr("aria-hidden", "true"),
                    l.$results.removeAttr("aria-activedescendant");
                }),
                t.on("results:toggle", function () {
                  var e = l.getHighlightedResults();
                  0 !== e.length && e.trigger("mouseup");
                }),
                t.on("results:select", function () {
                  var e = l.getHighlightedResults();
                  if (0 !== e.length) {
                    var t = f.GetData(e[0], "data");
                    "true" == e.attr("aria-selected")
                      ? l.trigger("close", {})
                      : l.trigger("select", { data: t });
                  }
                }),
                t.on("results:previous", function () {
                  var e = l.getHighlightedResults(),
                    t = l.$results.find("[aria-selected]"),
                    n = t.index(e);
                  if (!(n <= 0)) {
                    var r = n - 1;
                    0 === e.length && (r = 0);
                    var i = t.eq(r);
                    i.trigger("mouseenter");
                    var o = l.$results.offset().top,
                      s = i.offset().top,
                      a = l.$results.scrollTop() + (s - o);
                    0 === r
                      ? l.$results.scrollTop(0)
                      : s - o < 0 && l.$results.scrollTop(a);
                  }
                }),
                t.on("results:next", function () {
                  var e = l.getHighlightedResults(),
                    t = l.$results.find("[aria-selected]"),
                    n = t.index(e) + 1;
                  if (!(n >= t.length)) {
                    var r = t.eq(n);
                    r.trigger("mouseenter");
                    var i =
                        l.$results.offset().top + l.$results.outerHeight(!1),
                      o = r.offset().top + r.outerHeight(!1),
                      s = l.$results.scrollTop() + o - i;
                    0 === n
                      ? l.$results.scrollTop(0)
                      : i < o && l.$results.scrollTop(s);
                  }
                }),
                t.on("results:focus", function (e) {
                  e.element.addClass("select2-results__option--highlighted");
                }),
                t.on("results:message", function (e) {
                  l.displayMessage(e);
                }),
                h.fn.mousewheel &&
                  this.$results.on("mousewheel", function (e) {
                    var t = l.$results.scrollTop(),
                      n = l.$results.get(0).scrollHeight - t + e.deltaY,
                      r = 0 < e.deltaY && t - e.deltaY <= 0,
                      i = e.deltaY < 0 && n <= l.$results.height();
                    r
                      ? (l.$results.scrollTop(0),
                        e.preventDefault(),
                        e.stopPropagation())
                      : i &&
                        (l.$results.scrollTop(
                          l.$results.get(0).scrollHeight - l.$results.height()
                        ),
                        e.preventDefault(),
                        e.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option[aria-selected]",
                  function (e) {
                    var t = h(this),
                      n = f.GetData(this, "data");
                    "true" !== t.attr("aria-selected")
                      ? l.trigger("select", { originalEvent: e, data: n })
                      : l.options.get("multiple")
                      ? l.trigger("unselect", { originalEvent: e, data: n })
                      : l.trigger("close", {});
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option[aria-selected]",
                  function (e) {
                    var t = f.GetData(this, "data");
                    l
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted"),
                      l.trigger("results:focus", { data: t, element: h(this) });
                  }
                );
            }),
            (r.prototype.getHighlightedResults = function () {
              return this.$results.find(
                ".select2-results__option--highlighted"
              );
            }),
            (r.prototype.destroy = function () {
              this.$results.remove();
            }),
            (r.prototype.ensureHighlightVisible = function () {
              var e = this.getHighlightedResults();
              if (0 !== e.length) {
                var t = this.$results.find("[aria-selected]").index(e),
                  n = this.$results.offset().top,
                  r = e.offset().top,
                  i = this.$results.scrollTop() + (r - n),
                  o = r - n;
                (i -= 2 * e.outerHeight(!1)),
                  t <= 2
                    ? this.$results.scrollTop(0)
                    : (o > this.$results.outerHeight() || o < 0) &&
                      this.$results.scrollTop(i);
              }
            }),
            (r.prototype.template = function (e, t) {
              var n = this.options.get("templateResult"),
                r = this.options.get("escapeMarkup"),
                i = n(e, t);
              null == i
                ? (t.style.display = "none")
                : "string" == typeof i
                ? (t.innerHTML = r(i))
                : h(t).append(i);
            }),
            r
          );
        }),
        e.define("select2/keys", [], function () {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
        }),
        e.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (n, r, i) {
            function o(e, t) {
              (this.$element = e),
                (this.options = t),
                o.__super__.constructor.call(this);
            }
            return (
              r.Extend(o, r.Observable),
              (o.prototype.render = function () {
                var e = n(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != r.GetData(this.$element[0], "old-tabindex")
                    ? (this._tabindex = r.GetData(
                        this.$element[0],
                        "old-tabindex"
                      ))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  e.attr("title", this.$element.attr("title")),
                  e.attr("tabindex", this._tabindex),
                  e.attr("aria-disabled", "false"),
                  (this.$selection = e)
                );
              }),
              (o.prototype.bind = function (e, t) {
                var n = this,
                  r = e.id + "-results";
                (this.container = e),
                  this.$selection.on("focus", function (e) {
                    n.trigger("focus", e);
                  }),
                  this.$selection.on("blur", function (e) {
                    n._handleBlur(e);
                  }),
                  this.$selection.on("keydown", function (e) {
                    n.trigger("keypress", e),
                      e.which === i.SPACE && e.preventDefault();
                  }),
                  e.on("results:focus", function (e) {
                    n.$selection.attr(
                      "aria-activedescendant",
                      e.data._resultId
                    );
                  }),
                  e.on("selection:update", function (e) {
                    n.update(e.data);
                  }),
                  e.on("open", function () {
                    n.$selection.attr("aria-expanded", "true"),
                      n.$selection.attr("aria-owns", r),
                      n._attachCloseHandler(e);
                  }),
                  e.on("close", function () {
                    n.$selection.attr("aria-expanded", "false"),
                      n.$selection.removeAttr("aria-activedescendant"),
                      n.$selection.removeAttr("aria-owns"),
                      n.$selection.trigger("focus"),
                      n._detachCloseHandler(e);
                  }),
                  e.on("enable", function () {
                    n.$selection.attr("tabindex", n._tabindex),
                      n.$selection.attr("aria-disabled", "false");
                  }),
                  e.on("disable", function () {
                    n.$selection.attr("tabindex", "-1"),
                      n.$selection.attr("aria-disabled", "true");
                  });
              }),
              (o.prototype._handleBlur = function (e) {
                var t = this;
                window.setTimeout(function () {
                  document.activeElement == t.$selection[0] ||
                    n.contains(t.$selection[0], document.activeElement) ||
                    t.trigger("blur", e);
                }, 1);
              }),
              (o.prototype._attachCloseHandler = function (e) {
                n(document.body).on("mousedown.select2." + e.id, function (e) {
                  var t = n(e.target).closest(".select2");
                  n(".select2.select2-container--open").each(function () {
                    this != t[0] && r.GetData(this, "element").select2("close");
                  });
                });
              }),
              (o.prototype._detachCloseHandler = function (e) {
                n(document.body).off("mousedown.select2." + e.id);
              }),
              (o.prototype.position = function (e, t) {
                t.find(".selection").append(e);
              }),
              (o.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (o.prototype.update = function (e) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              (o.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (o.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              o
            );
          }
        ),
        e.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (e, t, n, r) {
            function i() {
              i.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(i, t),
              (i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return (
                  e.addClass("select2-selection--single"),
                  e.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  e
                );
              }),
              (i.prototype.bind = function (t, e) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var r = t.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", r)
                  .attr("role", "textbox")
                  .attr("aria-readonly", "true"),
                  this.$selection.attr("aria-labelledby", r),
                  this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on("focus", function (e) {}),
                  this.$selection.on("blur", function (e) {}),
                  t.on("focus", function (e) {
                    t.isOpen() || n.$selection.trigger("focus");
                  });
              }),
              (i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (i.prototype.selectionContainer = function () {
                return e("<span></span>");
              }),
              (i.prototype.update = function (e) {
                if (0 !== e.length) {
                  var t = e[0],
                    n = this.$selection.find(".select2-selection__rendered"),
                    r = this.display(t, n);
                  n.empty().append(r);
                  var i = t.title || t.text;
                  i ? n.attr("title", i) : n.removeAttr("title");
                } else this.clear();
              }),
              i
            );
          }
        ),
        e.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (i, e, l) {
            function n(e, t) {
              n.__super__.constructor.apply(this, arguments);
            }
            return (
              l.Extend(n, e),
              (n.prototype.render = function () {
                var e = n.__super__.render.call(this);
                return (
                  e.addClass("select2-selection--multiple"),
                  e.html('<ul class="select2-selection__rendered"></ul>'),
                  e
                );
              }),
              (n.prototype.bind = function (e, t) {
                var r = this;
                n.__super__.bind.apply(this, arguments),
                  this.$selection.on("click", function (e) {
                    r.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (e) {
                      if (!r.isDisabled()) {
                        var t = i(this).parent(),
                          n = l.GetData(t[0], "data");
                        r.trigger("unselect", { originalEvent: e, data: n });
                      }
                    }
                  );
              }),
              (n.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (n.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (n.prototype.selectionContainer = function () {
                return i(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                );
              }),
              (n.prototype.update = function (e) {
                if ((this.clear(), 0 !== e.length)) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var r = e[n],
                      i = this.selectionContainer(),
                      o = this.display(r, i);
                    i.append(o);
                    var s = r.title || r.text;
                    s && i.attr("title", s),
                      l.StoreData(i[0], "data", r),
                      t.push(i);
                  }
                  var a = this.$selection.find(".select2-selection__rendered");
                  l.appendMany(a, t);
                }
              }),
              n
            );
          }
        ),
        e.define("select2/selection/placeholder", ["../utils"], function (e) {
          function t(e, t, n) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n);
          }
          return (
            (t.prototype.normalizePlaceholder = function (e, t) {
              return "string" == typeof t && (t = { id: "", text: t }), t;
            }),
            (t.prototype.createPlaceholder = function (e, t) {
              var n = this.selectionContainer();
              return (
                n.html(this.display(t)),
                n
                  .addClass("select2-selection__placeholder")
                  .removeClass("select2-selection__choice"),
                n
              );
            }),
            (t.prototype.update = function (e, t) {
              var n = 1 == t.length && t[0].id != this.placeholder.id;
              if (1 < t.length || n) return e.call(this, t);
              this.clear();
              var r = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(r);
            }),
            t
          );
        }),
        e.define(
          "select2/selection/allowClear",
          ["jquery", "../keys", "../utils"],
          function (i, r, a) {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (e) {
                      r._handleClear(e);
                    }
                  ),
                  t.on("keypress", function (e) {
                    r._handleKeyboardClear(e, t);
                  });
              }),
              (e.prototype._handleClear = function (e, t) {
                if (!this.isDisabled()) {
                  var n = this.$selection.find(".select2-selection__clear");
                  if (0 !== n.length) {
                    t.stopPropagation();
                    var r = a.GetData(n[0], "data"),
                      i = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var o = { data: r };
                    if ((this.trigger("clear", o), o.prevented))
                      this.$element.val(i);
                    else {
                      for (var s = 0; s < r.length; s++)
                        if (
                          ((o = { data: r[s] }),
                          this.trigger("unselect", o),
                          o.prevented)
                        )
                          return void this.$element.val(i);
                      this.$element.trigger("input").trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }
              }),
              (e.prototype._handleKeyboardClear = function (e, t, n) {
                n.isOpen() ||
                  (t.which != r.DELETE && t.which != r.BACKSPACE) ||
                  this._handleClear(t);
              }),
              (e.prototype.update = function (e, t) {
                if (
                  (e.call(this, t),
                  !(
                    0 <
                      this.$selection.find(".select2-selection__placeholder")
                        .length || 0 === t.length
                  ))
                ) {
                  var n = this.options
                      .get("translations")
                      .get("removeAllItems"),
                    r = i(
                      '<span class="select2-selection__clear" title="' +
                        n() +
                        '">&times;</span>'
                    );
                  a.StoreData(r[0], "data", t),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .prepend(r);
                }
              }),
              e
            );
          }
        ),
        e.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (r, a, l) {
            function e(e, t, n) {
              e.call(this, t, n);
            }
            return (
              (e.prototype.render = function (e) {
                var t = r(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = t), (this.$search = t.find("input"));
                var n = e.call(this);
                return this._transferTabIndex(), n;
              }),
              (e.prototype.bind = function (e, t, n) {
                var r = this,
                  i = t.id + "-results";
                e.call(this, t, n),
                  t.on("open", function () {
                    r.$search.attr("aria-controls", i),
                      r.$search.trigger("focus");
                  }),
                  t.on("close", function () {
                    r.$search.val(""),
                      r.$search.removeAttr("aria-controls"),
                      r.$search.removeAttr("aria-activedescendant"),
                      r.$search.trigger("focus");
                  }),
                  t.on("enable", function () {
                    r.$search.prop("disabled", !1), r._transferTabIndex();
                  }),
                  t.on("disable", function () {
                    r.$search.prop("disabled", !0);
                  }),
                  t.on("focus", function (e) {
                    r.$search.trigger("focus");
                  }),
                  t.on("results:focus", function (e) {
                    e.data._resultId
                      ? r.$search.attr(
                          "aria-activedescendant",
                          e.data._resultId
                        )
                      : r.$search.removeAttr("aria-activedescendant");
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (e) {
                      r.trigger("focus", e);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (e) {
                      r._handleBlur(e);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (e) {
                      if (
                        (e.stopPropagation(),
                        r.trigger("keypress", e),
                        (r._keyUpPrevented = e.isDefaultPrevented()),
                        e.which === l.BACKSPACE && "" === r.$search.val())
                      ) {
                        var t = r.$searchContainer.prev(
                          ".select2-selection__choice"
                        );
                        if (0 < t.length) {
                          var n = a.GetData(t[0], "data");
                          r.searchRemoveChoice(n), e.preventDefault();
                        }
                      }
                    }
                  ),
                  this.$selection.on(
                    "click",
                    ".select2-search--inline",
                    function (e) {
                      r.$search.val() && e.stopPropagation();
                    }
                  );
                var o = document.documentMode,
                  s = o && o <= 11;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (e) {
                    s
                      ? r.$selection.off("input.search input.searchcheck")
                      : r.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (e) {
                      if (s && "input" === e.type)
                        r.$selection.off("input.search input.searchcheck");
                      else {
                        var t = e.which;
                        t != l.SHIFT &&
                          t != l.CTRL &&
                          t != l.ALT &&
                          t != l.TAB &&
                          r.handleSearch(e);
                      }
                    }
                  );
              }),
              (e.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (e.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text);
              }),
              (e.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  e.call(this, t),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(this.$searchContainer),
                  this.resizeSearch(),
                  n && this.$search.trigger("focus");
              }),
              (e.prototype.handleSearch = function () {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var e = this.$search.val();
                  this.trigger("query", { term: e });
                }
                this._keyUpPrevented = !1;
              }),
              (e.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", { data: t }),
                  this.$search.val(t.text),
                  this.handleSearch();
              }),
              (e.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder")
                  ? (e = this.$selection
                      .find(".select2-selection__rendered")
                      .width())
                  : (e = 0.75 * (this.$search.val().length + 1) + "em");
                this.$search.css("width", e);
              }),
              e
            );
          }
        ),
        e.define("select2/selection/eventRelay", ["jquery"], function (s) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var r = this,
                i = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                  "clear",
                  "clearing",
                ],
                o = [
                  "opening",
                  "closing",
                  "selecting",
                  "unselecting",
                  "clearing",
                ];
              e.call(this, t, n),
                t.on("*", function (e, t) {
                  if (-1 !== s.inArray(e, i)) {
                    t = t || {};
                    var n = s.Event("select2:" + e, { params: t });
                    r.$element.trigger(n),
                      -1 !== s.inArray(e, o) &&
                        (t.prevented = n.isDefaultPrevented());
                  }
                });
            }),
            e
          );
        }),
        e.define("select2/translation", ["jquery", "require"], function (t, n) {
          function r(e) {
            this.dict = e || {};
          }
          return (
            (r.prototype.all = function () {
              return this.dict;
            }),
            (r.prototype.get = function (e) {
              return this.dict[e];
            }),
            (r.prototype.extend = function (e) {
              this.dict = t.extend({}, e.all(), this.dict);
            }),
            (r._cache = {}),
            (r.loadPath = function (e) {
              if (!(e in r._cache)) {
                var t = n(e);
                r._cache[e] = t;
              }
              return new r(r._cache[e]);
            }),
            r
          );
        }),
        e.define("select2/diacritics", [], function () {
          return {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Œ: "OE",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            œ: "oe",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ώ: "ω",
            ς: "σ",
            "’": "'",
          };
        }),
        e.define("select2/data/base", ["../utils"], function (r) {
          function n(e, t) {
            n.__super__.constructor.call(this);
          }
          return (
            r.Extend(n, r.Observable),
            (n.prototype.current = function (e) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (n.prototype.query = function (e, t) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (n.prototype.bind = function (e, t) {}),
            (n.prototype.destroy = function () {}),
            (n.prototype.generateResultId = function (e, t) {
              var n = e.id + "-result-";
              return (
                (n += r.generateChars(4)),
                null != t.id
                  ? (n += "-" + t.id.toString())
                  : (n += "-" + r.generateChars(4)),
                n
              );
            }),
            n
          );
        }),
        e.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (e, a, l) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              a.Extend(n, e),
              (n.prototype.current = function (e) {
                var n = [],
                  r = this;
                this.$element.find(":selected").each(function () {
                  var e = l(this),
                    t = r.item(e);
                  n.push(t);
                }),
                  e(n);
              }),
              (n.prototype.select = function (i) {
                var o = this;
                if (((i.selected = !0), l(i.element).is("option")))
                  return (
                    (i.element.selected = !0),
                    void this.$element.trigger("input").trigger("change")
                  );
                if (this.$element.prop("multiple"))
                  this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                      var r = i[n].id;
                      -1 === l.inArray(r, t) && t.push(r);
                    }
                    o.$element.val(t),
                      o.$element.trigger("input").trigger("change");
                  });
                else {
                  var e = i.id;
                  this.$element.val(e),
                    this.$element.trigger("input").trigger("change");
                }
              }),
              (n.prototype.unselect = function (i) {
                var o = this;
                if (this.$element.prop("multiple")) {
                  if (((i.selected = !1), l(i.element).is("option")))
                    return (
                      (i.element.selected = !1),
                      void this.$element.trigger("input").trigger("change")
                    );
                  this.current(function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                      var r = e[n].id;
                      r !== i.id && -1 === l.inArray(r, t) && t.push(r);
                    }
                    o.$element.val(t),
                      o.$element.trigger("input").trigger("change");
                  });
                }
              }),
              (n.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e).on("select", function (e) {
                  n.select(e.data);
                }),
                  e.on("unselect", function (e) {
                    n.unselect(e.data);
                  });
              }),
              (n.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  a.RemoveData(this);
                });
              }),
              (n.prototype.query = function (r, e) {
                var i = [],
                  o = this;
                this.$element.children().each(function () {
                  var e = l(this);
                  if (e.is("option") || e.is("optgroup")) {
                    var t = o.item(e),
                      n = o.matches(r, t);
                    null !== n && i.push(n);
                  }
                }),
                  e({ results: i });
              }),
              (n.prototype.addOptions = function (e) {
                a.appendMany(this.$element, e);
              }),
              (n.prototype.option = function (e) {
                var t;
                e.children
                  ? ((t = document.createElement("optgroup")).label = e.text)
                  : void 0 !==
                    (t = document.createElement("option")).textContent
                  ? (t.textContent = e.text)
                  : (t.innerText = e.text),
                  void 0 !== e.id && (t.value = e.id),
                  e.disabled && (t.disabled = !0),
                  e.selected && (t.selected = !0),
                  e.title && (t.title = e.title);
                var n = l(t),
                  r = this._normalizeItem(e);
                return (r.element = t), a.StoreData(t, "data", r), n;
              }),
              (n.prototype.item = function (e) {
                var t = {};
                if (null != (t = a.GetData(e[0], "data"))) return t;
                if (e.is("option"))
                  t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title"),
                  };
                else if (e.is("optgroup")) {
                  t = {
                    text: e.prop("label"),
                    children: [],
                    title: e.prop("title"),
                  };
                  for (
                    var n = e.children("option"), r = [], i = 0;
                    i < n.length;
                    i++
                  ) {
                    var o = l(n[i]),
                      s = this.item(o);
                    r.push(s);
                  }
                  t.children = r;
                }
                return (
                  ((t = this._normalizeItem(t)).element = e[0]),
                  a.StoreData(e[0], "data", t),
                  t
                );
              }),
              (n.prototype._normalizeItem = function (e) {
                e !== Object(e) && (e = { id: e, text: e });
                return (
                  null != (e = l.extend({}, { text: "" }, e)).id &&
                    (e.id = e.id.toString()),
                  null != e.text && (e.text = e.text.toString()),
                  null == e._resultId &&
                    e.id &&
                    null != this.container &&
                    (e._resultId = this.generateResultId(this.container, e)),
                  l.extend({}, { selected: !1, disabled: !1 }, e)
                );
              }),
              (n.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t);
              }),
              n
            );
          }
        ),
        e.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (e, f, g) {
            function r(e, t) {
              (this._dataToConvert = t.get("data") || []),
                r.__super__.constructor.call(this, e, t);
            }
            return (
              f.Extend(r, e),
              (r.prototype.bind = function (e, t) {
                r.__super__.bind.call(this, e, t),
                  this.addOptions(this.convertToOptions(this._dataToConvert));
              }),
              (r.prototype.select = function (n) {
                var e = this.$element.find("option").filter(function (e, t) {
                  return t.value == n.id.toString();
                });
                0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                  r.__super__.select.call(this, n);
              }),
              (r.prototype.convertToOptions = function (e) {
                var t = this,
                  n = this.$element.find("option"),
                  r = n
                    .map(function () {
                      return t.item(g(this)).id;
                    })
                    .get(),
                  i = [];
                function o(e) {
                  return function () {
                    return g(this).val() == e.id;
                  };
                }
                for (var s = 0; s < e.length; s++) {
                  var a = this._normalizeItem(e[s]);
                  if (0 <= g.inArray(a.id, r)) {
                    var l = n.filter(o(a)),
                      c = this.item(l),
                      u = g.extend(!0, {}, a, c),
                      d = this.option(u);
                    l.replaceWith(d);
                  } else {
                    var p = this.option(a);
                    if (a.children) {
                      var h = this.convertToOptions(a.children);
                      f.appendMany(p, h);
                    }
                    i.push(p);
                  }
                }
                return i;
              }),
              r
            );
          }
        ),
        e.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (e, t, o) {
            function n(e, t) {
              (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                n.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(n, e),
              (n.prototype._applyDefaults = function (e) {
                var t = {
                  data: function (e) {
                    return o.extend({}, e, { q: e.term });
                  },
                  transport: function (e, t, n) {
                    var r = o.ajax(e);
                    return r.then(t), r.fail(n), r;
                  },
                };
                return o.extend({}, t, e, !0);
              }),
              (n.prototype.processResults = function (e) {
                return e;
              }),
              (n.prototype.query = function (n, r) {
                var i = this;
                null != this._request &&
                  (o.isFunction(this._request.abort) && this._request.abort(),
                  (this._request = null));
                var t = o.extend({ type: "GET" }, this.ajaxOptions);
                function e() {
                  var e = t.transport(
                    t,
                    function (e) {
                      var t = i.processResults(e, n);
                      i.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((t && t.results && o.isArray(t.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        r(t);
                    },
                    function () {
                      ("status" in e && (0 === e.status || "0" === e.status)) ||
                        i.trigger("results:message", {
                          message: "errorLoading",
                        });
                    }
                  );
                  i._request = e;
                }
                "function" == typeof t.url &&
                  (t.url = t.url.call(this.$element, n)),
                  "function" == typeof t.data &&
                    (t.data = t.data.call(this.$element, n)),
                  this.ajaxOptions.delay && null != n.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        e,
                        this.ajaxOptions.delay
                      )))
                    : e();
              }),
              n
            );
          }
        ),
        e.define("select2/data/tags", ["jquery"], function (u) {
          function e(e, t, n) {
            var r = n.get("tags"),
              i = n.get("createTag");
            void 0 !== i && (this.createTag = i);
            var o = n.get("insertTag");
            if (
              (void 0 !== o && (this.insertTag = o),
              e.call(this, t, n),
              u.isArray(r))
            )
              for (var s = 0; s < r.length; s++) {
                var a = r[s],
                  l = this._normalizeItem(a),
                  c = this.option(l);
                this.$element.append(c);
              }
          }
          return (
            (e.prototype.query = function (e, c, u) {
              var d = this;
              this._removeOldTags(),
                null != c.term && null == c.page
                  ? e.call(this, c, function e(t, n) {
                      for (var r = t.results, i = 0; i < r.length; i++) {
                        var o = r[i],
                          s =
                            null != o.children &&
                            !e({ results: o.children }, !0);
                        if (
                          (o.text || "").toUpperCase() ===
                            (c.term || "").toUpperCase() ||
                          s
                        )
                          return !n && ((t.data = r), void u(t));
                      }
                      if (n) return !0;
                      var a = d.createTag(c);
                      if (null != a) {
                        var l = d.option(a);
                        l.attr("data-select2-tag", !0),
                          d.addOptions([l]),
                          d.insertTag(r, a);
                      }
                      (t.results = r), u(t);
                    })
                  : e.call(this, c, u);
            }),
            (e.prototype.createTag = function (e, t) {
              var n = u.trim(t.term);
              return "" === n ? null : { id: n, text: n };
            }),
            (e.prototype.insertTag = function (e, t, n) {
              t.unshift(n);
            }),
            (e.prototype._removeOldTags = function (e) {
              this.$element.find("option[data-select2-tag]").each(function () {
                this.selected || u(this).remove();
              });
            }),
            e
          );
        }),
        e.define("select2/data/tokenizer", ["jquery"], function (d) {
          function e(e, t, n) {
            var r = n.get("tokenizer");
            void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              e.call(this, t, n),
                (this.$search =
                  t.dropdown.$search ||
                  t.selection.$search ||
                  n.find(".select2-search__field"));
            }),
            (e.prototype.query = function (e, t, n) {
              var r = this;
              t.term = t.term || "";
              var i = this.tokenizer(t, this.options, function (e) {
                var t = r._normalizeItem(e);
                if (
                  !r.$element.find("option").filter(function () {
                    return d(this).val() === t.id;
                  }).length
                ) {
                  var n = r.option(t);
                  n.attr("data-select2-tag", !0),
                    r._removeOldTags(),
                    r.addOptions([n]);
                }
                !(function (e) {
                  r.trigger("select", { data: e });
                })(t);
              });
              i.term !== t.term &&
                (this.$search.length &&
                  (this.$search.val(i.term), this.$search.trigger("focus")),
                (t.term = i.term)),
                e.call(this, t, n);
            }),
            (e.prototype.tokenizer = function (e, t, n, r) {
              for (
                var i = n.get("tokenSeparators") || [],
                  o = t.term,
                  s = 0,
                  a =
                    this.createTag ||
                    function (e) {
                      return { id: e.term, text: e.term };
                    };
                s < o.length;

              ) {
                var l = o[s];
                if (-1 !== d.inArray(l, i)) {
                  var c = o.substr(0, s),
                    u = a(d.extend({}, t, { term: c }));
                  null != u
                    ? (r(u), (o = o.substr(s + 1) || ""), (s = 0))
                    : s++;
                } else s++;
              }
              return { term: o };
            }),
            e
          );
        }),
        e.define("select2/data/minimumInputLength", [], function () {
          function e(e, t, n) {
            (this.minimumInputLength = n.get("minimumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                t.term.length < this.minimumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        e.define("select2/data/maximumInputLength", [], function () {
          function e(e, t, n) {
            (this.maximumInputLength = n.get("maximumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                0 < this.maximumInputLength &&
                t.term.length > this.maximumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        e.define("select2/data/maximumSelectionLength", [], function () {
          function e(e, t, n) {
            (this.maximumSelectionLength = n.get("maximumSelectionLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("select", function () {
                  r._checkIfMaximumSelected();
                });
            }),
            (e.prototype.query = function (e, t, n) {
              var r = this;
              this._checkIfMaximumSelected(function () {
                e.call(r, t, n);
              });
            }),
            (e.prototype._checkIfMaximumSelected = function (e, n) {
              var r = this;
              this.current(function (e) {
                var t = null != e ? e.length : 0;
                0 < r.maximumSelectionLength && t >= r.maximumSelectionLength
                  ? r.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: r.maximumSelectionLength },
                    })
                  : n && n();
              });
            }),
            e
          );
        }),
        e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            e.Extend(n, e.Observable),
            (n.prototype.render = function () {
              var e = t(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")), (this.$dropdown = e)
              );
            }),
            (n.prototype.bind = function () {}),
            (n.prototype.position = function (e, t) {}),
            (n.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            n
          );
        }),
        e.define(
          "select2/dropdown/search",
          ["jquery", "../utils"],
          function (o, e) {
            function t() {}
            return (
              (t.prototype.render = function (e) {
                var t = e.call(this),
                  n = o(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                  );
                return (
                  (this.$searchContainer = n),
                  (this.$search = n.find("input")),
                  t.prepend(n),
                  t
                );
              }),
              (t.prototype.bind = function (e, t, n) {
                var r = this,
                  i = t.id + "-results";
                e.call(this, t, n),
                  this.$search.on("keydown", function (e) {
                    r.trigger("keypress", e),
                      (r._keyUpPrevented = e.isDefaultPrevented());
                  }),
                  this.$search.on("input", function (e) {
                    o(this).off("keyup");
                  }),
                  this.$search.on("keyup input", function (e) {
                    r.handleSearch(e);
                  }),
                  t.on("open", function () {
                    r.$search.attr("tabindex", 0),
                      r.$search.attr("aria-controls", i),
                      r.$search.trigger("focus"),
                      window.setTimeout(function () {
                        r.$search.trigger("focus");
                      }, 0);
                  }),
                  t.on("close", function () {
                    r.$search.attr("tabindex", -1),
                      r.$search.removeAttr("aria-controls"),
                      r.$search.removeAttr("aria-activedescendant"),
                      r.$search.val(""),
                      r.$search.trigger("blur");
                  }),
                  t.on("focus", function () {
                    t.isOpen() || r.$search.trigger("focus");
                  }),
                  t.on("results:all", function (e) {
                    (null != e.query.term && "" !== e.query.term) ||
                      (r.showSearch(e)
                        ? r.$searchContainer.removeClass("select2-search--hide")
                        : r.$searchContainer.addClass("select2-search--hide"));
                  }),
                  t.on("results:focus", function (e) {
                    e.data._resultId
                      ? r.$search.attr(
                          "aria-activedescendant",
                          e.data._resultId
                        )
                      : r.$search.removeAttr("aria-activedescendant");
                  });
              }),
              (t.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                  var t = this.$search.val();
                  this.trigger("query", { term: t });
                }
                this._keyUpPrevented = !1;
              }),
              (t.prototype.showSearch = function (e, t) {
                return !0;
              }),
              t
            );
          }
        ),
        e.define("select2/dropdown/hidePlaceholder", [], function () {
          function e(e, t, n, r) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n, r);
          }
          return (
            (e.prototype.append = function (e, t) {
              (t.results = this.removePlaceholder(t.results)), e.call(this, t);
            }),
            (e.prototype.normalizePlaceholder = function (e, t) {
              return "string" == typeof t && (t = { id: "", text: t }), t;
            }),
            (e.prototype.removePlaceholder = function (e, t) {
              for (var n = t.slice(0), r = t.length - 1; 0 <= r; r--) {
                var i = t[r];
                this.placeholder.id === i.id && n.splice(r, 1);
              }
              return n;
            }),
            e
          );
        }),
        e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
          function e(e, t, n, r) {
            (this.lastParams = {}),
              e.call(this, t, n, r),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (e.prototype.append = function (e, t) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                e.call(this, t),
                this.showLoadingMore(t) &&
                  (this.$results.append(this.$loadingMore),
                  this.loadMoreIfNeeded());
            }),
            (e.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("query", function (e) {
                  (r.lastParams = e), (r.loading = !0);
                }),
                t.on("query:append", function (e) {
                  (r.lastParams = e), (r.loading = !0);
                }),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
            }),
            (e.prototype.loadMoreIfNeeded = function () {
              var e = n.contains(
                document.documentElement,
                this.$loadingMore[0]
              );
              if (!this.loading && e) {
                var t =
                  this.$results.offset().top + this.$results.outerHeight(!1);
                this.$loadingMore.offset().top +
                  this.$loadingMore.outerHeight(!1) <=
                  t + 50 && this.loadMore();
              }
            }),
            (e.prototype.loadMore = function () {
              this.loading = !0;
              var e = n.extend({}, { page: 1 }, this.lastParams);
              e.page++, this.trigger("query:append", e);
            }),
            (e.prototype.showLoadingMore = function (e, t) {
              return t.pagination && t.pagination.more;
            }),
            (e.prototype.createLoadingMore = function () {
              var e = n(
                  '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                ),
                t = this.options.get("translations").get("loadingMore");
              return e.html(t(this.lastParams)), e;
            }),
            e
          );
        }),
        e.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (f, a) {
            function e(e, t, n) {
              (this.$dropdownParent = f(
                n.get("dropdownParent") || document.body
              )),
                e.call(this, t, n);
            }
            return (
              (e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  t.on("open", function () {
                    r._showDropdown(),
                      r._attachPositioningHandler(t),
                      r._bindContainerResultHandlers(t);
                  }),
                  t.on("close", function () {
                    r._hideDropdown(), r._detachPositioningHandler(t);
                  }),
                  this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation();
                  });
              }),
              (e.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove();
              }),
              (e.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")),
                  t.removeClass("select2"),
                  t.addClass("select2-container--open"),
                  t.css({ position: "absolute", top: -999999 }),
                  (this.$container = n);
              }),
              (e.prototype.render = function (e) {
                var t = f("<span></span>"),
                  n = e.call(this);
                return t.append(n), (this.$dropdownContainer = t);
              }),
              (e.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach();
              }),
              (e.prototype._bindContainerResultHandlers = function (e, t) {
                if (!this._containerResultsHandlersBound) {
                  var n = this;
                  t.on("results:all", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                    t.on("results:append", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    t.on("results:message", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    t.on("select", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    t.on("unselect", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    (this._containerResultsHandlersBound = !0);
                }
              }),
              (e.prototype._attachPositioningHandler = function (e, t) {
                var n = this,
                  r = "scroll.select2." + t.id,
                  i = "resize.select2." + t.id,
                  o = "orientationchange.select2." + t.id,
                  s = this.$container.parents().filter(a.hasScroll);
                s.each(function () {
                  a.StoreData(this, "select2-scroll-position", {
                    x: f(this).scrollLeft(),
                    y: f(this).scrollTop(),
                  });
                }),
                  s.on(r, function (e) {
                    var t = a.GetData(this, "select2-scroll-position");
                    f(this).scrollTop(t.y);
                  }),
                  f(window).on(r + " " + i + " " + o, function (e) {
                    n._positionDropdown(), n._resizeDropdown();
                  });
              }),
              (e.prototype._detachPositioningHandler = function (e, t) {
                var n = "scroll.select2." + t.id,
                  r = "resize.select2." + t.id,
                  i = "orientationchange.select2." + t.id;
                this.$container.parents().filter(a.hasScroll).off(n),
                  f(window).off(n + " " + r + " " + i);
              }),
              (e.prototype._positionDropdown = function () {
                var e = f(window),
                  t = this.$dropdown.hasClass("select2-dropdown--above"),
                  n = this.$dropdown.hasClass("select2-dropdown--below"),
                  r = null,
                  i = this.$container.offset();
                i.bottom = i.top + this.$container.outerHeight(!1);
                var o = { height: this.$container.outerHeight(!1) };
                (o.top = i.top), (o.bottom = i.top + o.height);
                var s = this.$dropdown.outerHeight(!1),
                  a = e.scrollTop(),
                  l = e.scrollTop() + e.height(),
                  c = a < i.top - s,
                  u = l > i.bottom + s,
                  d = { left: i.left, top: o.bottom },
                  p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var h = { top: 0, left: 0 };
                (f.contains(document.body, p[0]) || p[0].isConnected) &&
                  (h = p.offset()),
                  (d.top -= h.top),
                  (d.left -= h.left),
                  t || n || (r = "below"),
                  u || !c || t ? !c && u && t && (r = "below") : (r = "above"),
                  ("above" == r || (t && "below" !== r)) &&
                    (d.top = o.top - h.top - s),
                  null != r &&
                    (this.$dropdown
                      .removeClass(
                        "select2-dropdown--below select2-dropdown--above"
                      )
                      .addClass("select2-dropdown--" + r),
                    this.$container
                      .removeClass(
                        "select2-container--below select2-container--above"
                      )
                      .addClass("select2-container--" + r)),
                  this.$dropdownContainer.css(d);
              }),
              (e.prototype._resizeDropdown = function () {
                var e = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((e.minWidth = e.width),
                  (e.position = "relative"),
                  (e.width = "auto")),
                  this.$dropdown.css(e);
              }),
              (e.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              e
            );
          }
        ),
        e.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function e(e, t, n, r) {
            (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              e.call(this, t, n, r);
          }
          return (
            (e.prototype.showSearch = function (e, t) {
              return (
                !(
                  (function e(t) {
                    for (var n = 0, r = 0; r < t.length; r++) {
                      var i = t[r];
                      i.children ? (n += e(i.children)) : n++;
                    }
                    return n;
                  })(t.data.results) < this.minimumResultsForSearch
                ) && e.call(this, t)
              );
            }),
            e
          );
        }),
        e.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("close", function (e) {
                  r._handleSelectOnClose(e);
                });
            }),
            (e.prototype._handleSelectOnClose = function (e, t) {
              if (t && null != t.originalSelect2Event) {
                var n = t.originalSelect2Event;
                if ("select" === n._type || "unselect" === n._type) return;
              }
              var r = this.getHighlightedResults();
              if (!(r.length < 1)) {
                var i = o.GetData(r[0], "data");
                (null != i.element && i.element.selected) ||
                  (null == i.element && i.selected) ||
                  this.trigger("select", { data: i });
              }
            }),
            e
          );
        }),
        e.define("select2/dropdown/closeOnSelect", [], function () {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("select", function (e) {
                  r._selectTriggered(e);
                }),
                t.on("unselect", function (e) {
                  r._selectTriggered(e);
                });
            }),
            (e.prototype._selectTriggered = function (e, t) {
              var n = t.originalEvent;
              (n && (n.ctrlKey || n.metaKey)) ||
                this.trigger("close", {
                  originalEvent: n,
                  originalSelect2Event: t,
                });
            }),
            e
          );
        }),
        e.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (e) {
              var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
              return 1 != t && (n += "s"), n;
            },
            inputTooShort: function (e) {
              return (
                "Please enter " +
                (e.minimum - e.input.length) +
                " or more characters"
              );
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (e) {
              var t = "You can only select " + e.maximum + " item";
              return 1 != e.maximum && (t += "s"), t;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
            removeAllItems: function () {
              return "Remove all items";
            },
          };
        }),
        e.define(
          "select2/defaults",
          [
            "jquery",
            "require",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./i18n/en",
          ],
          function (
            c,
            u,
            d,
            p,
            h,
            f,
            g,
            m,
            v,
            y,
            s,
            t,
            _,
            $,
            b,
            w,
            A,
            x,
            D,
            S,
            E,
            C,
            O,
            T,
            q,
            L,
            I,
            j,
            e
          ) {
            function n() {
              this.reset();
            }
            return (
              (n.prototype.apply = function (e) {
                if (
                  null == (e = c.extend(!0, {}, this.defaults, e)).dataAdapter
                ) {
                  if (
                    (null != e.ajax
                      ? (e.dataAdapter = b)
                      : null != e.data
                      ? (e.dataAdapter = $)
                      : (e.dataAdapter = _),
                    0 < e.minimumInputLength &&
                      (e.dataAdapter = y.Decorate(e.dataAdapter, x)),
                    0 < e.maximumInputLength &&
                      (e.dataAdapter = y.Decorate(e.dataAdapter, D)),
                    0 < e.maximumSelectionLength &&
                      (e.dataAdapter = y.Decorate(e.dataAdapter, S)),
                    e.tags && (e.dataAdapter = y.Decorate(e.dataAdapter, w)),
                    (null == e.tokenSeparators && null == e.tokenizer) ||
                      (e.dataAdapter = y.Decorate(e.dataAdapter, A)),
                    null != e.query)
                  ) {
                    var t = u(e.amdBase + "compat/query");
                    e.dataAdapter = y.Decorate(e.dataAdapter, t);
                  }
                  if (null != e.initSelection) {
                    var n = u(e.amdBase + "compat/initSelection");
                    e.dataAdapter = y.Decorate(e.dataAdapter, n);
                  }
                }
                if (
                  (null == e.resultsAdapter &&
                    ((e.resultsAdapter = d),
                    null != e.ajax &&
                      (e.resultsAdapter = y.Decorate(e.resultsAdapter, T)),
                    null != e.placeholder &&
                      (e.resultsAdapter = y.Decorate(e.resultsAdapter, O)),
                    e.selectOnClose &&
                      (e.resultsAdapter = y.Decorate(e.resultsAdapter, I))),
                  null == e.dropdownAdapter)
                ) {
                  if (e.multiple) e.dropdownAdapter = E;
                  else {
                    var r = y.Decorate(E, C);
                    e.dropdownAdapter = r;
                  }
                  if (
                    (0 !== e.minimumResultsForSearch &&
                      (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, L)),
                    e.closeOnSelect &&
                      (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, j)),
                    null != e.dropdownCssClass ||
                      null != e.dropdownCss ||
                      null != e.adaptDropdownCssClass)
                  ) {
                    var i = u(e.amdBase + "compat/dropdownCss");
                    e.dropdownAdapter = y.Decorate(e.dropdownAdapter, i);
                  }
                  e.dropdownAdapter = y.Decorate(e.dropdownAdapter, q);
                }
                if (null == e.selectionAdapter) {
                  if (
                    (e.multiple
                      ? (e.selectionAdapter = h)
                      : (e.selectionAdapter = p),
                    null != e.placeholder &&
                      (e.selectionAdapter = y.Decorate(e.selectionAdapter, f)),
                    e.allowClear &&
                      (e.selectionAdapter = y.Decorate(e.selectionAdapter, g)),
                    e.multiple &&
                      (e.selectionAdapter = y.Decorate(e.selectionAdapter, m)),
                    null != e.containerCssClass ||
                      null != e.containerCss ||
                      null != e.adaptContainerCssClass)
                  ) {
                    var o = u(e.amdBase + "compat/containerCss");
                    e.selectionAdapter = y.Decorate(e.selectionAdapter, o);
                  }
                  e.selectionAdapter = y.Decorate(e.selectionAdapter, v);
                }
                (e.language = this._resolveLanguage(e.language)),
                  e.language.push("en");
                for (var s = [], a = 0; a < e.language.length; a++) {
                  var l = e.language[a];
                  -1 === s.indexOf(l) && s.push(l);
                }
                return (
                  (e.language = s),
                  (e.translations = this._processTranslations(
                    e.language,
                    e.debug
                  )),
                  e
                );
              }),
              (n.prototype.reset = function () {
                function a(e) {
                  return e.replace(/[^\u0000-\u007E]/g, function (e) {
                    return t[e] || e;
                  });
                }
                this.defaults = {
                  amdBase: "./",
                  amdLanguageBase: "./i18n/",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: y.escapeMarkup,
                  language: {},
                  matcher: function e(t, n) {
                    if ("" === c.trim(t.term)) return n;
                    if (n.children && 0 < n.children.length) {
                      for (
                        var r = c.extend(!0, {}, n), i = n.children.length - 1;
                        0 <= i;
                        i--
                      )
                        null == e(t, n.children[i]) && r.children.splice(i, 1);
                      return 0 < r.children.length ? r : e(t, r);
                    }
                    var o = a(n.text).toUpperCase(),
                      s = a(t.term).toUpperCase();
                    return -1 < o.indexOf(s) ? n : null;
                  },
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  scrollAfterSelect: !1,
                  sorter: function (e) {
                    return e;
                  },
                  templateResult: function (e) {
                    return e.text;
                  },
                  templateSelection: function (e) {
                    return e.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (n.prototype.applyFromElement = function (e, t) {
                var n = e.language,
                  r = this.defaults.language,
                  i = t.prop("lang"),
                  o = t.closest("[lang]").prop("lang"),
                  s = Array.prototype.concat.call(
                    this._resolveLanguage(i),
                    this._resolveLanguage(n),
                    this._resolveLanguage(r),
                    this._resolveLanguage(o)
                  );
                return (e.language = s), e;
              }),
              (n.prototype._resolveLanguage = function (e) {
                if (!e) return [];
                if (c.isEmptyObject(e)) return [];
                if (c.isPlainObject(e)) return [e];
                var t;
                t = c.isArray(e) ? e : [e];
                for (var n = [], r = 0; r < t.length; r++)
                  if (
                    (n.push(t[r]),
                    "string" == typeof t[r] && 0 < t[r].indexOf("-"))
                  ) {
                    var i = t[r].split("-")[0];
                    n.push(i);
                  }
                return n;
              }),
              (n.prototype._processTranslations = function (e, t) {
                for (var n = new s(), r = 0; r < e.length; r++) {
                  var i = new s(),
                    o = e[r];
                  if ("string" == typeof o)
                    try {
                      i = s.loadPath(o);
                    } catch (e) {
                      try {
                        (o = this.defaults.amdLanguageBase + o),
                          (i = s.loadPath(o));
                      } catch (e) {
                        t &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              o +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                      }
                    }
                  else i = c.isPlainObject(o) ? new s(o) : o;
                  n.extend(i);
                }
                return n;
              }),
              (n.prototype.set = function (e, t) {
                var n = {};
                n[c.camelCase(e)] = t;
                var r = y._convertData(n);
                c.extend(!0, this.defaults, r);
              }),
              new n()
            );
          }
        ),
        e.define(
          "select2/options",
          ["require", "jquery", "./defaults", "./utils"],
          function (r, d, i, p) {
            function e(e, t) {
              if (
                ((this.options = e),
                null != t && this.fromElement(t),
                null != t &&
                  (this.options = i.applyFromElement(this.options, t)),
                (this.options = i.apply(this.options)),
                t && t.is("input"))
              ) {
                var n = r(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = p.Decorate(
                  this.options.dataAdapter,
                  n
                );
              }
            }
            return (
              (e.prototype.fromElement = function (e) {
                var t = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = e.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = e.prop("disabled")),
                  null == this.options.dir &&
                    (e.prop("dir")
                      ? (this.options.dir = e.prop("dir"))
                      : e.closest("[dir]").prop("dir")
                      ? (this.options.dir = e.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  e.prop("disabled", this.options.disabled),
                  e.prop("multiple", this.options.multiple),
                  p.GetData(e[0], "select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")),
                    p.StoreData(e[0], "tags", !0)),
                  p.GetData(e[0], "ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")),
                    p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
                var n = {};
                function r(e, t) {
                  return t.toUpperCase();
                }
                for (var i = 0; i < e[0].attributes.length; i++) {
                  var o = e[0].attributes[i].name,
                    s = "data-";
                  if (o.substr(0, s.length) == s) {
                    var a = o.substring(s.length),
                      l = p.GetData(e[0], a);
                    n[a.replace(/-([a-z])/g, r)] = l;
                  }
                }
                d.fn.jquery &&
                  "1." == d.fn.jquery.substr(0, 2) &&
                  e[0].dataset &&
                  (n = d.extend(!0, {}, e[0].dataset, n));
                var c = d.extend(!0, {}, p.GetData(e[0]), n);
                for (var u in (c = p._convertData(c)))
                  -1 < d.inArray(u, t) ||
                    (d.isPlainObject(this.options[u])
                      ? d.extend(this.options[u], c[u])
                      : (this.options[u] = c[u]));
                return this;
              }),
              (e.prototype.get = function (e) {
                return this.options[e];
              }),
              (e.prototype.set = function (e, t) {
                this.options[e] = t;
              }),
              e
            );
          }
        ),
        e.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (o, c, u, r) {
            var d = function (e, t) {
              null != u.GetData(e[0], "select2") &&
                u.GetData(e[0], "select2").destroy(),
                (this.$element = e),
                (this.id = this._generateId(e)),
                (t = t || {}),
                (this.options = new c(t, e)),
                d.__super__.constructor.call(this);
              var n = e.attr("tabindex") || 0;
              u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
              var r = this.options.get("dataAdapter");
              this.dataAdapter = new r(e, this.options);
              var i = this.render();
              this._placeContainer(i);
              var o = this.options.get("selectionAdapter");
              (this.selection = new o(e, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, i);
              var s = this.options.get("dropdownAdapter");
              (this.dropdown = new s(e, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, i);
              var a = this.options.get("resultsAdapter");
              (this.results = new a(e, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var l = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (e) {
                  l.trigger("selection:update", { data: e });
                }),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                u.StoreData(e[0], "select2", this),
                e.data("select2", this);
            };
            return (
              u.Extend(d, u.Observable),
              (d.prototype._generateId = function (e) {
                return (
                  "select2-" +
                  (null != e.attr("id")
                    ? e.attr("id")
                    : null != e.attr("name")
                    ? e.attr("name") + "-" + u.generateChars(2)
                    : u.generateChars(4)
                  ).replace(/(:|\.|\[|\]|,)/g, "")
                );
              }),
              (d.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != t && e.css("width", t);
              }),
              (d.prototype._resolveWidth = function (e, t) {
                var n =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                  var r = this._resolveWidth(e, "style");
                  return null != r ? r : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                  var i = e.outerWidth(!1);
                  return i <= 0 ? "auto" : i + "px";
                }
                if ("style" != t)
                  return "computedstyle" != t
                    ? t
                    : window.getComputedStyle(e[0]).width;
                var o = e.attr("style");
                if ("string" != typeof o) return null;
                for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                  var c = s[a].replace(/\s/g, "").match(n);
                  if (null !== c && 1 <= c.length) return c[1];
                }
                return null;
              }),
              (d.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (d.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                  t.dataAdapter.current(function (e) {
                    t.trigger("selection:update", { data: e });
                  });
                }),
                  this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e);
                  }),
                  (this._syncA = u.bind(this._syncAttributes, this)),
                  (this._syncS = u.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent &&
                    this.$element[0].attachEvent(
                      "onpropertychange",
                      this._syncA
                    );
                var e =
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver;
                null != e
                  ? ((this._observer = new e(function (e) {
                      t._syncA(), t._syncS(null, e);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1,
                    }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener(
                      "DOMAttrModified",
                      t._syncA,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeInserted",
                      t._syncS,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeRemoved",
                      t._syncS,
                      !1
                    ));
              }),
              (d.prototype._registerDataEvents = function () {
                var n = this;
                this.dataAdapter.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (d.prototype._registerSelectionEvents = function () {
                var n = this,
                  r = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  n.toggleDropdown();
                }),
                  this.selection.on("focus", function (e) {
                    n.focus(e);
                  }),
                  this.selection.on("*", function (e, t) {
                    -1 === o.inArray(e, r) && n.trigger(e, t);
                  });
              }),
              (d.prototype._registerDropdownEvents = function () {
                var n = this;
                this.dropdown.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (d.prototype._registerResultsEvents = function () {
                var n = this;
                this.results.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (d.prototype._registerEvents = function () {
                var n = this;
                this.on("open", function () {
                  n.$container.addClass("select2-container--open");
                }),
                  this.on("close", function () {
                    n.$container.removeClass("select2-container--open");
                  }),
                  this.on("enable", function () {
                    n.$container.removeClass("select2-container--disabled");
                  }),
                  this.on("disable", function () {
                    n.$container.addClass("select2-container--disabled");
                  }),
                  this.on("blur", function () {
                    n.$container.removeClass("select2-container--focus");
                  }),
                  this.on("query", function (t) {
                    n.isOpen() || n.trigger("open", {}),
                      this.dataAdapter.query(t, function (e) {
                        n.trigger("results:all", { data: e, query: t });
                      });
                  }),
                  this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:append", { data: e, query: t });
                    });
                  }),
                  this.on("keypress", function (e) {
                    var t = e.which;
                    n.isOpen()
                      ? t === r.ESC || t === r.TAB || (t === r.UP && e.altKey)
                        ? (n.close(e), e.preventDefault())
                        : t === r.ENTER
                        ? (n.trigger("results:select", {}), e.preventDefault())
                        : t === r.SPACE && e.ctrlKey
                        ? (n.trigger("results:toggle", {}), e.preventDefault())
                        : t === r.UP
                        ? (n.trigger("results:previous", {}),
                          e.preventDefault())
                        : t === r.DOWN &&
                          (n.trigger("results:next", {}), e.preventDefault())
                      : (t === r.ENTER ||
                          t === r.SPACE ||
                          (t === r.DOWN && e.altKey)) &&
                        (n.open(), e.preventDefault());
                  });
              }),
              (d.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.isDisabled()
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (d.prototype._isChangeMutation = function (e, t) {
                var n = !1,
                  r = this;
                if (
                  !e ||
                  !e.target ||
                  "OPTION" === e.target.nodeName ||
                  "OPTGROUP" === e.target.nodeName
                ) {
                  if (t)
                    if (t.addedNodes && 0 < t.addedNodes.length)
                      for (var i = 0; i < t.addedNodes.length; i++) {
                        t.addedNodes[i].selected && (n = !0);
                      }
                    else
                      t.removedNodes && 0 < t.removedNodes.length
                        ? (n = !0)
                        : o.isArray(t) &&
                          o.each(t, function (e, t) {
                            if (r._isChangeMutation(e, t)) return !(n = !0);
                          });
                  else n = !0;
                  return n;
                }
              }),
              (d.prototype._syncSubtree = function (e, t) {
                var n = this._isChangeMutation(e, t),
                  r = this;
                n &&
                  this.dataAdapter.current(function (e) {
                    r.trigger("selection:update", { data: e });
                  });
              }),
              (d.prototype.trigger = function (e, t) {
                var n = d.__super__.trigger,
                  r = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing",
                  };
                if ((void 0 === t && (t = {}), e in r)) {
                  var i = r[e],
                    o = { prevented: !1, name: e, args: t };
                  if ((n.call(this, i, o), o.prevented))
                    return void (t.prevented = !0);
                }
                n.call(this, e, t);
              }),
              (d.prototype.toggleDropdown = function () {
                this.isDisabled() ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (d.prototype.open = function () {
                this.isOpen() || this.isDisabled() || this.trigger("query", {});
              }),
              (d.prototype.close = function (e) {
                this.isOpen() && this.trigger("close", { originalEvent: e });
              }),
              (d.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (d.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              (d.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
              }),
              (d.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
              }),
              (d.prototype.focus = function (e) {
                this.hasFocus() ||
                  (this.$container.addClass("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (d.prototype.enable = function (e) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null != e && 0 !== e.length) || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t);
              }),
              (d.prototype.data = function () {
                this.options.get("debug") &&
                  0 < arguments.length &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var t = [];
                return (
                  this.dataAdapter.current(function (e) {
                    t = e;
                  }),
                  t
                );
              }),
              (d.prototype.val = function (e) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == e || 0 === e.length)
                )
                  return this.$element.val();
                var t = e[0];
                o.isArray(t) &&
                  (t = o.map(t, function (e) {
                    return e.toString();
                  })),
                  this.$element.val(t).trigger("input").trigger("change");
              }),
              (d.prototype.destroy = function () {
                this.$container.remove(),
                  this.$element[0].detachEvent &&
                    this.$element[0].detachEvent(
                      "onpropertychange",
                      this._syncA
                    ),
                  null != this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this.$element[0].removeEventListener &&
                      (this.$element[0].removeEventListener(
                        "DOMAttrModified",
                        this._syncA,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeInserted",
                        this._syncS,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeRemoved",
                        this._syncS,
                        !1
                      )),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    u.GetData(this.$element[0], "old-tabindex")
                  ),
                  this.$element.removeClass("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  u.RemoveData(this.$element[0]),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (d.prototype.render = function () {
                var e = o(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  e.attr("dir", this.options.get("dir")),
                  (this.$container = e),
                  this.$container.addClass(
                    "select2-container--" + this.options.get("theme")
                  ),
                  u.StoreData(e[0], "element", this.$element),
                  e
                );
              }),
              d
            );
          }
        ),
        e.define("jquery-mousewheel", ["jquery"], function (e) {
          return e;
        }),
        e.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
            "./select2/utils",
          ],
          function (i, e, o, t, s) {
            if (null == i.fn.select2) {
              var a = ["open", "close", "destroy"];
              i.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = i.extend(!0, {}, t);
                      new o(i(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  r = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = s.GetData(this, "select2");
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, r));
                  }),
                  -1 < i.inArray(t, a) ? this : n
                );
              };
            }
            return (
              null == i.fn.select2.defaults && (i.fn.select2.defaults = t), o
            );
          }
        ),
        { define: e.define, require: e.require }
      );
    })(),
    t = e.require("jquery.select2");
  return (u.fn.select2.amd = e), t;
});
