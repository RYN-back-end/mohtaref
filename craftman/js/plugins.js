/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, (function (t, e) {
    "use strict";
    var n = [], i = Object.getPrototypeOf, r = n.slice, s = n.flat ? function (t) {
            return n.flat.call(t)
        } : function (t) {
            return n.concat.apply([], t)
        }, o = n.push, a = n.indexOf, l = {}, u = l.toString, c = l.hasOwnProperty, h = c.toString, p = h.call(Object),
        d = {}, f = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
        }, g = function (t) {
            return null != t && t === t.window
        }, m = t.document, v = {type: !0, src: !0, nonce: !0, noModule: !0};

    function y(t, e, n) {
        var i, r, s = (n = n || m).createElement("script");
        if (s.text = t, e) for (i in v) (r = e[i] || e.getAttribute && e.getAttribute(i)) && s.setAttribute(i, r);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function x(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[u.call(t)] || "object" : typeof t
    }

    var w = "3.6.0", _ = function (t, e) {
        return new _.fn.init(t, e)
    };

    function b(t) {
        var e = !!t && "length" in t && t.length, n = x(t);
        return !f(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    _.fn = _.prototype = {
        jquery: w, constructor: _, length: 0, toArray: function () {
            return r.call(this)
        }, get: function (t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = _.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return _.each(this, t)
        }, map: function (t) {
            return this.pushStack(_.map(this, (function (e, n) {
                return t.call(e, n, e)
            })))
        }, slice: function () {
            return this.pushStack(r.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(_.grep(this, (function (t, e) {
                return (e + 1) % 2
            })))
        }, odd: function () {
            return this.pushStack(_.grep(this, (function (t, e) {
                return e % 2
            })))
        }, eq: function (t) {
            var e = this.length, n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: o, sort: n.sort, splice: n.splice
    }, _.extend = _.fn.extend = function () {
        var t, e, n, i, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || f(o) || (o = {}), a === l && (o = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = t[e], "__proto__" !== e && o !== i && (u && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[e], s = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}, r = !1, o[e] = _.extend(u, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }, _.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t) || (e = i(t)) && ("function" != typeof (n = c.call(e, "constructor") && e.constructor) || h.call(n) !== p))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t, e, n) {
            y(t, {nonce: e && e.nonce}, n)
        }, each: function (t, e) {
            var n, i = 0;
            if (b(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (b(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : o.call(n, t)), n
        }, inArray: function (t, e, n) {
            return null == e ? -1 : a.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        }, grep: function (t, e, n) {
            for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]);
            return i
        }, map: function (t, e, n) {
            var i, r, o = 0, a = [];
            if (b(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r); else for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
            return s(a)
        }, guid: 1, support: d
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    }));
    var C = function (t) {
        var e, n, i, r, s, o, a, l, u, c, h, p, d, f, g, m, v, y, x, w = "sizzle" + 1 * new Date, _ = t.document, b = 0,
            C = 0, T = lt(), E = lt(), k = lt(), S = lt(), D = function (t, e) {
                return t === e && (h = !0), 0
            }, $ = {}.hasOwnProperty, j = [], A = j.pop, N = j.push, L = j.push, q = j.slice, H = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                return -1
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + P + "*(" + O + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + P + "*\\]",
            R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            I = new RegExp(P + "+", "g"), W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"), F = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"), X = new RegExp(R), V = new RegExp("^" + O + "$"), Q = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, G = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"), nt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, st = function () {
                p()
            }, ot = wt((function (t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }), {dir: "parentNode", next: "legend"});
        try {
            L.apply(j = q.call(_.childNodes), _.childNodes), j[_.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: j.length ? function (t, e) {
                    N.apply(t, q.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                    t.length = n - 1
                }
            }
        }

        function at(t, e, i, r) {
            var s, a, u, c, h, f, v, y = e && e.ownerDocument, _ = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return i;
            if (!r && (p(e), e = e || d, g)) {
                if (11 !== _ && (h = K.exec(t))) if (s = h[1]) {
                    if (9 === _) {
                        if (!(u = e.getElementById(s))) return i;
                        if (u.id === s) return i.push(u), i
                    } else if (y && (u = y.getElementById(s)) && x(e, u) && u.id === s) return i.push(u), i
                } else {
                    if (h[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                    if ((s = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(s)), i
                }
                if (n.qsa && !S[t + " "] && (!m || !m.test(t)) && (1 !== _ || "object" !== e.nodeName.toLowerCase())) {
                    if (v = t, y = e, 1 === _ && (U.test(t) || F.test(t))) {
                        for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(it, rt) : e.setAttribute("id", c = w)), a = (f = o(t)).length; a--;) f[a] = (c ? "#" + c : ":scope") + " " + xt(f[a]);
                        v = f.join(",")
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                        S(t, !0)
                    } finally {
                        c === w && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(W, "$1"), e, i, r)
        }

        function lt() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
        }

        function ut(t) {
            return t[w] = !0, t
        }

        function ct(t) {
            var e = d.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
        }

        function pt(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return -1;
            return t ? 1 : -1
        }

        function dt(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ft(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function gt(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function mt(t) {
            return ut((function (e) {
                return e = +e, ut((function (n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                }))
            }))
        }

        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        for (e in n = at.support = {}, s = at.isXML = function (t) {
            var e = t && t.namespaceURI, n = t && (t.ownerDocument || t).documentElement;
            return !G.test(e || n && n.nodeName || "HTML")
        }, p = at.setDocument = function (t) {
            var e, r, o = t ? t.ownerDocument || t : _;
            return o != d && 9 === o.nodeType && o.documentElement && (f = (d = o).documentElement, g = !s(d), _ != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)), n.scope = ct((function (t) {
                return f.appendChild(t).appendChild(d.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            })), n.attributes = ct((function (t) {
                return t.className = "i", !t.getAttribute("className")
            })), n.getElementsByTagName = ct((function (t) {
                return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
            })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ct((function (t) {
                return f.appendChild(t).id = w, !d.getElementsByName || !d.getElementsByName(w).length
            })), n.getById ? (i.filter.ID = function (t) {
                var e = t.replace(et, nt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, i.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (t) {
                var e = t.replace(et, nt);
                return function (t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, i.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n, i, r, s = e.getElementById(t);
                    if (s) {
                        if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                        for (r = e.getElementsByName(t), i = 0; s = r[i++];) if ((n = s.getAttributeNode("id")) && n.value === t) return [s]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
            }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ct((function (t) {
                var e;
                f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + z + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (e = d.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
            })), ct((function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = d.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
            }))), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ct((function (t) {
                n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", R)
            })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(f.compareDocumentPosition), x = e || J.test(f.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, D = e ? function (t, e) {
                if (t === e) return h = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == d || t.ownerDocument == _ && x(_, t) ? -1 : e == d || e.ownerDocument == _ && x(_, e) ? 1 : c ? H(c, t) - H(c, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return h = !0, 0;
                var n, i = 0, r = t.parentNode, s = e.parentNode, o = [t], a = [e];
                if (!r || !s) return t == d ? -1 : e == d ? 1 : r ? -1 : s ? 1 : c ? H(c, t) - H(c, e) : 0;
                if (r === s) return pt(t, e);
                for (n = t; n = n.parentNode;) o.unshift(n);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (; o[i] === a[i];) i++;
                return i ? pt(o[i], a[i]) : o[i] == _ ? -1 : a[i] == _ ? 1 : 0
            }), d
        }, at.matches = function (t, e) {
            return at(t, null, null, e)
        }, at.matchesSelector = function (t, e) {
            if (p(t), n.matchesSelector && g && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                var i = y.call(t, e);
                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {
                S(e, !0)
            }
            return 0 < at(e, d, null, [t]).length
        }, at.contains = function (t, e) {
            return (t.ownerDocument || t) != d && p(t), x(t, e)
        }, at.attr = function (t, e) {
            (t.ownerDocument || t) != d && p(t);
            var r = i.attrHandle[e.toLowerCase()],
                s = r && $.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
            return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }, at.escape = function (t) {
            return (t + "").replace(it, rt)
        }, at.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, at.uniqueSort = function (t) {
            var e, i = [], r = 0, s = 0;
            if (h = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(D), h) {
                for (; e = t[s++];) e === t[s] && (r = i.push(s));
                for (; r--;) t.splice(i[r], 1)
            }
            return c = null, t
        }, r = at.getText = function (t) {
            var e, n = "", i = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else for (; e = t[i++];) n += r(e);
            return n
        }, (i = at.selectors = {
            cacheLength: 50,
            createPseudo: ut,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = T[t + " "];
                    return e || (e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) && T(t, (function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    }))
                }, ATTR: function (t, e, n) {
                    return function (i) {
                        var r = at.attr(i, t);
                        return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && -1 < r.indexOf(n) : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? -1 < (" " + r.replace(I, " ") + " ").indexOf(n) : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, h, p, d, f, g = s !== o ? "nextSibling" : "previousSibling", m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a, x = !1;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (p = e; p = p[g];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                for (x = (d = (u = (c = (h = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === b && u[1]) && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || f.pop();) if (1 === p.nodeType && ++x && p === e) {
                                    c[t] = [b, d, x];
                                    break
                                }
                            } else if (y && (x = d = (u = (c = (h = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === b && u[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((c = (h = p[w] || (p[w] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] = [b, x]), p !== e));) ;
                            return (x -= r) === i || x % i == 0 && 0 <= x / i
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                    return r[w] ? r(e) : 1 < r.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function (t, n) {
                        for (var i, s = r(t, e), o = s.length; o--;) t[i = H(t, s[o])] = !(n[i] = s[o])
                    })) : function (t) {
                        return r(t, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ut((function (t) {
                    var e = [], n = [], i = a(t.replace(W, "$1"));
                    return i[w] ? ut((function (t, e, n, r) {
                        for (var s, o = i(t, null, r, []), a = t.length; a--;) (s = o[a]) && (t[a] = !(e[a] = s))
                    })) : function (t, r, s) {
                        return e[0] = t, i(e, null, s, n), e[0] = null, !n.pop()
                    }
                })), has: ut((function (t) {
                    return function (e) {
                        return 0 < at(t, e).length
                    }
                })), contains: ut((function (t) {
                    return t = t.replace(et, nt), function (e) {
                        return -1 < (e.textContent || r(e)).indexOf(t)
                    }
                })), lang: ut((function (t) {
                    return V.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function (e) {
                        var n;
                        do {
                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                })), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === f
                }, focus: function (t) {
                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: gt(!1), disabled: gt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !i.pseudos.empty(t)
                }, header: function (t) {
                    return Z.test(t.nodeName)
                }, input: function (t) {
                    return Y.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: mt((function () {
                    return [0]
                })), last: mt((function (t, e) {
                    return [e - 1]
                })), eq: mt((function (t, e, n) {
                    return [n < 0 ? n + e : n]
                })), even: mt((function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                })), odd: mt((function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                })), lt: mt((function (t, e, n) {
                    for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                    return t
                })), gt: mt((function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                }))
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[e] = dt(e);
        for (e in {submit: !0, reset: !0}) i.pseudos[e] = ft(e);

        function yt() {
        }

        function xt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function wt(t, e, n) {
            var i = e.dir, r = e.next, s = r || i, o = n && "parentNode" === s, a = C++;
            return e.first ? function (e, n, r) {
                for (; e = e[i];) if (1 === e.nodeType || o) return t(e, n, r);
                return !1
            } : function (e, n, l) {
                var u, c, h, p = [b, a];
                if (l) {
                    for (; e = e[i];) if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                } else for (; e = e[i];) if (1 === e.nodeType || o) if (c = (h = e[w] || (e[w] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e; else {
                    if ((u = c[s]) && u[0] === b && u[1] === a) return p[2] = u[2];
                    if ((c[s] = p)[2] = t(e, n, l)) return !0
                }
                return !1
            }
        }

        function _t(t) {
            return 1 < t.length ? function (e, n, i) {
                for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function bt(t, e, n, i, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++) (s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function Ct(t, e, n, i, r, s) {
            return i && !i[w] && (i = Ct(i)), r && !r[w] && (r = Ct(r, s)), ut((function (s, o, a, l) {
                var u, c, h, p = [], d = [], f = o.length, g = s || function (t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []), m = !t || !s && e ? g : bt(g, p, t, a, l),
                    v = n ? r || (s ? t : f || i) ? [] : o : m;
                if (n && n(m, v, a, l), i) for (u = bt(v, d), i(u, [], a, l), c = u.length; c--;) (h = u[c]) && (v[d[c]] = !(m[d[c]] = h));
                if (s) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = v.length; c--;) (h = v[c]) && u.push(m[c] = h);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;) (h = v[c]) && -1 < (u = r ? H(s, h) : p[c]) && (s[u] = !(o[u] = h))
                    }
                } else v = bt(v === o ? v.splice(f, v.length) : v), r ? r(null, o, v, l) : L.apply(o, v)
            }))
        }

        function Tt(t) {
            for (var e, n, r, s = t.length, o = i.relative[t[0].type], a = o || i.relative[" "], l = o ? 1 : 0, c = wt((function (t) {
                return t === e
            }), a, !0), h = wt((function (t) {
                return -1 < H(e, t)
            }), a, !0), p = [function (t, n, i) {
                var r = !o && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                return e = null, r
            }]; l < s; l++) if (n = i.relative[t[l].type]) p = [wt(_t(p), n)]; else {
                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                    for (r = ++l; r < s && !i.relative[t[r].type]; r++) ;
                    return Ct(1 < l && _t(p), 1 < l && xt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(W, "$1"), n, l < r && Tt(t.slice(l, r)), r < s && Tt(t = t.slice(r)), r < s && xt(t))
                }
                p.push(n)
            }
            return _t(p)
        }

        return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, o = at.tokenize = function (t, e) {
            var n, r, s, o, a, l, u, c = E[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], u = i.preFilter; a;) {
                for (o in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), a = a.slice(n.length)), i.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? at.error(t) : E(t, l).slice(0)
        }, a = at.compile = function (t, e) {
            var n, r, s, a, l, c, h = [], f = [], m = k[t + " "];
            if (!m) {
                for (e || (e = o(t)), n = e.length; n--;) (m = Tt(e[n]))[w] ? h.push(m) : f.push(m);
                (m = k(t, (r = f, a = 0 < (s = h).length, l = 0 < r.length, c = function (t, e, n, o, c) {
                    var h, f, m, v = 0, y = "0", x = t && [], w = [], _ = u, C = t || l && i.find.TAG("*", c),
                        T = b += null == _ ? 1 : Math.random() || .1, E = C.length;
                    for (c && (u = e == d || e || c); y !== E && null != (h = C[y]); y++) {
                        if (l && h) {
                            for (f = 0, e || h.ownerDocument == d || (p(h), n = !g); m = r[f++];) if (m(h, e || d, n)) {
                                o.push(h);
                                break
                            }
                            c && (b = T)
                        }
                        a && ((h = !m && h) && v--, t && x.push(h))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; m = s[f++];) m(x, w, e, n);
                        if (t) {
                            if (0 < v) for (; y--;) x[y] || w[y] || (w[y] = A.call(o));
                            w = bt(w)
                        }
                        L.apply(o, w), c && !t && 0 < w.length && 1 < v + s.length && at.uniqueSort(o)
                    }
                    return c && (b = T, u = _), x
                }, a ? ut(c) : c))).selector = t
            }
            return m
        }, l = at.select = function (t, e, n, r) {
            var s, l, u, c, h, p = "function" == typeof t && t, d = !r && o(t = p.selector || t);
            if (n = n || [], 1 === d.length) {
                if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                    p && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (s = Q.needsContext.test(t) ? 0 : l.length; s-- && (u = l[s], !i.relative[c = u.type]);) if ((h = i.find[c]) && (r = h(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                    if (l.splice(s, 1), !(t = r.length && xt(l))) return L.apply(n, r), n;
                    break
                }
            }
            return (p || a(t, d))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
        }, n.sortStable = w.split("").sort(D).join("") === w, n.detectDuplicates = !!h, p(), n.sortDetached = ct((function (t) {
            return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
        })), ct((function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        })) || ht("type|href|height|width", (function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        })), n.attributes && ct((function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        })) || ht("value", (function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        })), ct((function (t) {
            return null == t.getAttribute("disabled")
        })) || ht(z, (function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        })), at
    }(t);
    _.find = C, _.expr = C.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = C.uniqueSort, _.text = C.getText, _.isXMLDoc = C.isXML, _.contains = C.contains, _.escapeSelector = C.escape;
    var T = function (t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (r && _(t).is(n)) break;
            i.push(t)
        }
        return i
    }, E = function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    }, k = _.expr.match.needsContext;

    function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function $(t, e, n) {
        return f(e) ? _.grep(t, (function (t, i) {
            return !!e.call(t, i, t) !== n
        })) : e.nodeType ? _.grep(t, (function (t) {
            return t === e !== n
        })) : "string" != typeof e ? _.grep(t, (function (t) {
            return -1 < a.call(e, t) !== n
        })) : _.filter(e, t, n)
    }

    _.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? _.find.matchesSelector(i, t) ? [i] : [] : _.find.matches(t, _.grep(e, (function (t) {
            return 1 === t.nodeType
        })))
    }, _.fn.extend({
        find: function (t) {
            var e, n, i = this.length, r = this;
            if ("string" != typeof t) return this.pushStack(_(t).filter((function () {
                for (e = 0; e < i; e++) if (_.contains(r[e], this)) return !0
            })));
            for (n = this.pushStack([]), e = 0; e < i; e++) _.find(t, r[e], n);
            return 1 < i ? _.uniqueSort(n) : n
        }, filter: function (t) {
            return this.pushStack($(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack($(this, t || [], !0))
        }, is: function (t) {
            return !!$(this, "string" == typeof t && k.test(t) ? _(t) : t || [], !1).length
        }
    });
    var j, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || j, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : A.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), D.test(i[1]) && _.isPlainObject(e)) for (i in e) f(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : f(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this)
    }).prototype = _.fn, j = _(m);
    var N = /^(?:parents|prev(?:Until|All))/, L = {children: !0, contents: !0, next: !0, prev: !0};

    function q(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    _.fn.extend({
        has: function (t) {
            var e = _(t, this), n = e.length;
            return this.filter((function () {
                for (var t = 0; t < n; t++) if (_.contains(this, e[t])) return !0
            }))
        }, closest: function (t, e) {
            var n, i = 0, r = this.length, s = [], o = "string" != typeof t && _(t);
            if (!k.test(t)) for (; i < r; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
                s.push(n);
                break
            }
            return this.pushStack(1 < s.length ? _.uniqueSort(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? a.call(_(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), _.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return T(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return T(t, "parentNode", n)
        }, next: function (t) {
            return q(t, "nextSibling")
        }, prev: function (t) {
            return q(t, "previousSibling")
        }, nextAll: function (t) {
            return T(t, "nextSibling")
        }, prevAll: function (t) {
            return T(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return T(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return T(t, "previousSibling", n)
        }, siblings: function (t) {
            return E((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return E(t.firstChild)
        }, contents: function (t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (S(t, "template") && (t = t.content || t), _.merge([], t.childNodes))
        }
    }, (function (t, e) {
        _.fn[t] = function (n, i) {
            var r = _.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), 1 < this.length && (L[t] || _.uniqueSort(r), N.test(t) && r.reverse()), this.pushStack(r)
        }
    }));
    var H = /[^\x20\t\r\n\f]+/g;

    function z(t) {
        return t
    }

    function P(t) {
        throw t
    }

    function O(t, e, n, i) {
        var r;
        try {
            t && f(r = t.promise) ? r.call(t).done(e).fail(n) : t && f(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    _.Callbacks = function (t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, _.each(e.match(H) || [], (function (t, e) {
            n[e] = !0
        })), n) : _.extend({}, t);
        var i, r, s, o, a = [], l = [], u = -1, c = function () {
            for (o = o || t.once, s = i = !0; l.length; u = -1) for (r = l.shift(); ++u < a.length;) !1 === a[u].apply(r[0], r[1]) && t.stopOnFalse && (u = a.length, r = !1);
            t.memory || (r = !1), i = !1, o && (a = r ? [] : "")
        }, h = {
            add: function () {
                return a && (r && !i && (u = a.length - 1, l.push(r)), function e(n) {
                    _.each(n, (function (n, i) {
                        f(i) ? t.unique && h.has(i) || a.push(i) : i && i.length && "string" !== x(i) && e(i)
                    }))
                }(arguments), r && !i && c()), this
            }, remove: function () {
                return _.each(arguments, (function (t, e) {
                    for (var n; -1 < (n = _.inArray(e, a, n));) a.splice(n, 1), n <= u && u--
                })), this
            }, has: function (t) {
                return t ? -1 < _.inArray(t, a) : 0 < a.length
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return o = l = [], a = r = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return o = l = [], r || i || (a = r = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, e) {
                return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || c()), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return h
    }, _.extend({
        Deferred: function (e) {
            var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return r.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return _.Deferred((function (e) {
                            _.each(n, (function (n, i) {
                                var r = f(t[i[4]]) && t[i[4]];
                                s[i[1]]((function () {
                                    var t = r && r.apply(this, arguments);
                                    t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                }))
                            })), t = null
                        })).promise()
                    }, then: function (e, i, r) {
                        var s = 0;

                        function o(e, n, i, r) {
                            return function () {
                                var a = this, l = arguments, u = function () {
                                    var t, u;
                                    if (!(e < s)) {
                                        if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        u = t && ("object" == typeof t || "function" == typeof t) && t.then, f(u) ? r ? u.call(t, o(s, n, z, r), o(s, n, P, r)) : (s++, u.call(t, o(s, n, z, r), o(s, n, P, r), o(s, n, z, n.notifyWith))) : (i !== z && (a = void 0, l = [t]), (r || n.resolveWith)(a, l))
                                    }
                                }, c = r ? u : function () {
                                    try {
                                        u()
                                    } catch (t) {
                                        _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, c.stackTrace), s <= e + 1 && (i !== P && (a = void 0, l = [t]), n.rejectWith(a, l))
                                    }
                                };
                                e ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }

                        return _.Deferred((function (t) {
                            n[0][3].add(o(0, t, f(r) ? r : z, t.notifyWith)), n[1][3].add(o(0, t, f(e) ? e : z)), n[2][3].add(o(0, t, f(i) ? i : P))
                        })).promise()
                    }, promise: function (t) {
                        return null != t ? _.extend(t, r) : r
                    }
                }, s = {};
            return _.each(n, (function (t, e) {
                var o = e[2], a = e[5];
                r[e[1]] = o.add, a && o.add((function () {
                    i = a
                }), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), o.add(e[3].fire), s[e[0]] = function () {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = o.fireWith
            })), r.promise(s), e && e.call(s, s), s
        }, when: function (t) {
            var e = arguments.length, n = e, i = Array(n), s = r.call(arguments), o = _.Deferred(), a = function (t) {
                return function (n) {
                    i[t] = this, s[t] = 1 < arguments.length ? r.call(arguments) : n, --e || o.resolveWith(i, s)
                }
            };
            if (e <= 1 && (O(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || f(s[n] && s[n].then))) return o.then();
            for (; n--;) O(s[n], a(n), o.reject);
            return o.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && M.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, _.readyException = function (e) {
        t.setTimeout((function () {
            throw e
        }))
    };
    var R = _.Deferred();

    function I() {
        m.removeEventListener("DOMContentLoaded", I), t.removeEventListener("load", I), _.ready()
    }

    _.fn.ready = function (t) {
        return R.then(t).catch((function (t) {
            _.readyException(t)
        })), this
    }, _.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0) !== t && 0 < --_.readyWait || R.resolveWith(m, [_])
        }
    }), _.ready.then = R.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(_.ready) : (m.addEventListener("DOMContentLoaded", I), t.addEventListener("load", I));
    var W = function (t, e, n, i, r, s, o) {
        var a = 0, l = t.length, u = null == n;
        if ("object" === x(n)) for (a in r = !0, n) W(t, e, a, n[a], !0, s, o); else if (void 0 !== i && (r = !0, f(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
            return u.call(_(t), n)
        })), e)) for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : s
    }, B = /^-ms-/, F = /-([a-z])/g;

    function U(t, e) {
        return e.toUpperCase()
    }

    function X(t) {
        return t.replace(B, "ms-").replace(F, U)
    }

    var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function Q() {
        this.expando = _.expando + Q.uid++
    }

    Q.uid = 1, Q.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, V(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[X(e)] = n; else for (i in e) r[X(i)] = e[i];
            return r
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
        }, access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in i ? [e] : e.match(H) || []).length;
                    for (; n--;) delete i[e[n]]
                }
                (void 0 === e || _.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !_.isEmptyObject(e)
        }
    };
    var G = new Q, Y = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

    function K(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
            try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
            } catch (t) {
            }
            Y.set(t, e, n)
        } else n = void 0;
        return n
    }

    _.extend({
        hasData: function (t) {
            return Y.hasData(t) || G.hasData(t)
        }, data: function (t, e, n) {
            return Y.access(t, e, n)
        }, removeData: function (t, e) {
            Y.remove(t, e)
        }, _data: function (t, e, n) {
            return G.access(t, e, n)
        }, _removeData: function (t, e) {
            G.remove(t, e)
        }
    }), _.fn.extend({
        data: function (t, e) {
            var n, i, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = Y.get(s), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = X(i.slice(5)), K(s, i, r[i]));
                    G.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each((function () {
                Y.set(this, t)
            })) : W(this, (function (e) {
                var n;
                if (s && void 0 === e) return void 0 !== (n = Y.get(s, t)) || void 0 !== (n = K(s, t)) ? n : void 0;
                this.each((function () {
                    Y.set(this, t, e)
                }))
            }), null, e, 1 < arguments.length, null, !0)
        }, removeData: function (t) {
            return this.each((function () {
                Y.remove(this, t)
            }))
        }
    }), _.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = G.get(t, e), n && (!i || Array.isArray(n) ? i = G.access(t, e, _.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = _.queue(t, e), i = n.length, r = n.shift(), s = _._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, (function () {
                _.dequeue(t, e)
            }), s)), !i && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return G.get(t, n) || G.access(t, n, {
                empty: _.Callbacks("once memory").add((function () {
                    G.remove(t, [e + "queue", n])
                }))
            })
        }
    }), _.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? _.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                var n = _.queue(this, t, e);
                _._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && _.dequeue(this, t)
            }))
        }, dequeue: function (t) {
            return this.each((function () {
                _.dequeue(this, t)
            }))
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, r = _.Deferred(), s = this, o = this.length, a = function () {
                --i || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) (n = G.get(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"], it = m.documentElement, rt = function (t) {
            return _.contains(t.ownerDocument, t)
        }, st = {composed: !0};
    it.getRootNode && (rt = function (t) {
        return _.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
    });
    var ot = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === _.css(t, "display")
    };

    function at(t, e, n, i) {
        var r, s, o = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return _.css(t, e, "")
            }, l = a(), u = n && n[3] || (_.cssNumber[e] ? "" : "px"),
            c = t.nodeType && (_.cssNumber[e] || "px" !== u && +l) && et.exec(_.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; o--;) _.style(t, e, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), c /= s;
            c *= 2, _.style(t, e, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    var lt = {};

    function ut(t, e) {
        for (var n, i, r, s, o, a, l, u = [], c = 0, h = t.length; c < h; c++) (i = t[c]).style && (n = i.style.display, e ? ("none" === n && (u[c] = G.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ot(i) && (u[c] = (l = o = s = void 0, o = (r = i).ownerDocument, a = r.nodeName, (l = lt[a]) || (s = o.body.appendChild(o.createElement(a)), l = _.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), lt[a] = l)))) : "none" !== n && (u[c] = "none", G.set(i, "display", n)));
        for (c = 0; c < h; c++) null != u[c] && (t[c].style.display = u[c]);
        return t
    }

    _.fn.extend({
        show: function () {
            return ut(this, !0)
        }, hide: function () {
            return ut(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                ot(this) ? _(this).show() : _(this).hide()
            }))
        }
    });
    var ct, ht, pt = /^(?:checkbox|radio)$/i, dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ft = /^$|^module$|\/(?:java|ecma)script/i;
    ct = m.createDocumentFragment().appendChild(m.createElement("div")), (ht = m.createElement("input")).setAttribute("type", "radio"), ht.setAttribute("checked", "checked"), ht.setAttribute("name", "t"), ct.appendChild(ht), d.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue, ct.innerHTML = "<option></option>", d.option = !!ct.lastChild;
    var gt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function mt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? _.merge([t], n) : n
    }

    function vt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
    }

    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, d.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;

    function xt(t, e, n, i, r) {
        for (var s, o, a, l, u, c, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++) if ((s = t[d]) || 0 === s) if ("object" === x(s)) _.merge(p, s.nodeType ? [s] : s); else if (yt.test(s)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (dt.exec(s) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, o.innerHTML = l[1] + _.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            _.merge(p, o.childNodes), (o = h.firstChild).textContent = ""
        } else p.push(e.createTextNode(s));
        for (h.textContent = "", d = 0; s = p[d++];) if (i && -1 < _.inArray(s, i)) r && r.push(s); else if (u = rt(s), o = mt(h.appendChild(s), "script"), u && vt(o), n) for (c = 0; s = o[c++];) ft.test(s.type || "") && n.push(s);
        return h
    }

    var wt = /^([^.]*)(?:\.(.+)|)/;

    function _t() {
        return !0
    }

    function bt() {
        return !1
    }

    function Ct(t, e) {
        return t === function () {
            try {
                return m.activeElement
            } catch (t) {
            }
        }() == ("focus" === e)
    }

    function Tt(t, e, n, i, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, a, n, i, e[a], s);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = bt; else if (!r) return t;
        return 1 === s && (o = r, (r = function (t) {
            return _().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = _.guid++)), t.each((function () {
            _.event.add(this, e, r, i, n)
        }))
    }

    function Et(t, e, n) {
        n ? (G.set(t, e, !1), _.event.add(t, e, {
            namespace: !1, handler: function (t) {
                var i, s, o = G.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (o.length) (_.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = r.call(arguments), G.set(this, e, o), i = n(this, e), this[e](), o !== (s = G.get(this, e)) || i ? G.set(this, e, !1) : s = {}, o !== s) return t.stopImmediatePropagation(), t.preventDefault(), s && s.value
                } else o.length && (G.set(this, e, {value: _.event.trigger(_.extend(o[0], _.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation())
            }
        })) : void 0 === G.get(t, e) && _.event.add(t, e, _t)
    }

    _.event = {
        global: {}, add: function (t, e, n, i, r) {
            var s, o, a, l, u, c, h, p, d, f, g, m = G.get(t);
            if (V(t)) for (n.handler && (n = (s = n).handler, r = s.selector), r && _.find.matchesSelector(it, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = Object.create(null)), (o = m.handle) || (o = m.handle = function (e) {
                return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
            }), u = (e = (e || "").match(H) || [""]).length; u--;) d = g = (a = wt.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), d && (h = _.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = _.event.special[d] || {}, c = _.extend({
                type: d,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && _.expr.match.needsContext.test(r),
                namespace: f.join(".")
            }, s), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), _.event.global[d] = !0)
        }, remove: function (t, e, n, i, r) {
            var s, o, a, l, u, c, h, p, d, f, g, m = G.hasData(t) && G.get(t);
            if (m && (l = m.events)) {
                for (u = (e = (e || "").match(H) || [""]).length; u--;) if (d = g = (a = wt.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
                    for (h = _.event.special[d] || {}, p = l[d = (i ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                    o && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || _.removeEvent(t, d, m.handle), delete l[d])
                } else for (d in l) _.event.remove(t, d + e[u], n, i, !0);
                _.isEmptyObject(l) && G.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, n, i, r, s, o, a = new Array(arguments.length), l = _.event.fix(t),
                u = (G.get(this, "events") || Object.create(null))[l.type] || [], c = _.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (o = _.event.handlers.call(this, l, u), e = 0; (r = o[e++]) && !l.isPropagationStopped();) for (l.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((_.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        }, handlers: function (t, e) {
            var n, i, r, s, o, a = [], l = e.delegateCount, u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? -1 < _(r, this).index(u) : _.find(r, this, null, [u]).length), o[r] && s.push(i);
                s.length && a.push({elem: u, handlers: s})
            }
            return u = this, l < e.length && a.push({elem: u, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: f(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[_.expando] ? t : new _.Event(t)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (t) {
                    var e = this || t;
                    return pt.test(e.type) && e.click && S(e, "input") && Et(e, "click", _t), !1
                }, trigger: function (t) {
                    var e = this || t;
                    return pt.test(e.type) && e.click && S(e, "input") && Et(e, "click"), !0
                }, _default: function (t) {
                    var e = t.target;
                    return pt.test(e.type) && e.click && S(e, "input") && G.get(e, "click") || S(e, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, _.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, _.Event = function (t, e) {
        if (!(this instanceof _.Event)) return new _.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
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
        which: !0
    }, _.event.addProp), _.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
        _.event.special[t] = {
            setup: function () {
                return Et(this, t, Ct), !1
            }, trigger: function () {
                return Et(this, t), !0
            }, _default: function () {
                return !0
            }, delegateType: e
        }
    })), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (t, e) {
        _.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = t.relatedTarget, r = t.handleObj;
                return i && (i === this || _.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    })), _.fn.extend({
        on: function (t, e, n, i) {
            return Tt(this, t, e, n, i)
        }, one: function (t, e, n, i) {
            return Tt(this, t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, _(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = bt), this.each((function () {
                _.event.remove(this, t, n, e)
            }))
        }
    });
    var kt = /<script|<style|<link/i, St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $t(t, e) {
        return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
    }

    function jt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function At(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Nt(t, e) {
        var n, i, r, s, o, a;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (a = G.get(t).events)) for (r in G.remove(e, "handle events"), a) for (n = 0, i = a[r].length; n < i; n++) _.event.add(e, r, a[r][n]);
            Y.hasData(t) && (s = Y.access(t), o = _.extend({}, s), Y.set(e, o))
        }
    }

    function Lt(t, e, n, i) {
        e = s(e);
        var r, o, a, l, u, c, h = 0, p = t.length, g = p - 1, m = e[0], v = f(m);
        if (v || 1 < p && "string" == typeof m && !d.checkClone && St.test(m)) return t.each((function (r) {
            var s = t.eq(r);
            v && (e[0] = m.call(this, r, s.html())), Lt(s, e, n, i)
        }));
        if (p && (o = (r = xt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = _.map(mt(r, "script"), jt)).length; h < p; h++) u = r, h !== g && (u = _.clone(u, !0, !0), l && _.merge(a, mt(u, "script"))), n.call(t[h], u, h);
            if (l) for (c = a[a.length - 1].ownerDocument, _.map(a, At), h = 0; h < l; h++) u = a[h], ft.test(u.type || "") && !G.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, c) : y(u.textContent.replace(Dt, ""), u, c))
        }
        return t
    }

    function qt(t, e, n) {
        for (var i, r = e ? _.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || _.cleanData(mt(i)), i.parentNode && (n && rt(i) && vt(mt(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    _.extend({
        htmlPrefilter: function (t) {
            return t
        }, clone: function (t, e, n) {
            var i, r, s, o, a, l, u, c = t.cloneNode(!0), h = rt(t);
            if (!(d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t))) for (o = mt(c), i = 0, r = (s = mt(t)).length; i < r; i++) a = s[i], "input" === (u = (l = o[i]).nodeName.toLowerCase()) && pt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e) if (n) for (s = s || mt(t), o = o || mt(c), i = 0, r = s.length; i < r; i++) Nt(s[i], o[i]); else Nt(t, c);
            return 0 < (o = mt(c, "script")).length && vt(o, !h && mt(t, "script")), c
        }, cleanData: function (t) {
            for (var e, n, i, r = _.event.special, s = 0; void 0 !== (n = t[s]); s++) if (V(n)) {
                if (e = n[G.expando]) {
                    if (e.events) for (i in e.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle);
                    n[G.expando] = void 0
                }
                n[Y.expando] && (n[Y.expando] = void 0)
            }
        }
    }), _.fn.extend({
        detach: function (t) {
            return qt(this, t, !0)
        }, remove: function (t) {
            return qt(this, t)
        }, text: function (t) {
            return W(this, (function (t) {
                return void 0 === t ? _.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }))
            }), null, t, arguments.length)
        }, append: function () {
            return Lt(this, arguments, (function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            }))
        }, prepend: function () {
            return Lt(this, arguments, (function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }))
        }, before: function () {
            return Lt(this, arguments, (function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }))
        }, after: function () {
            return Lt(this, arguments, (function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }))
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(mt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map((function () {
                return _.clone(this, t, e)
            }))
        }, html: function (t) {
            return W(this, (function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !kt.test(t) && !gt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = _.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(mt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }), null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return Lt(this, arguments, (function (e) {
                var n = this.parentNode;
                _.inArray(this, t) < 0 && (_.cleanData(mt(this)), n && n.replaceChild(e, this))
            }), t)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (t, e) {
        _.fn[t] = function (t) {
            for (var n, i = [], r = _(t), s = r.length - 1, a = 0; a <= s; a++) n = a === s ? this : this.clone(!0), _(r[a])[e](n), o.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var Ht = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"), zt = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, Pt = function (t, e, n) {
        var i, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        for (r in i = n.call(t), e) t.style[r] = s[r];
        return i
    }, Ot = new RegExp(nt.join("|"), "i");

    function Mt(t, e, n) {
        var i, r, s, o, a = t.style;
        return (n = n || zt(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || rt(t) || (o = _.style(t, e)), !d.pixelBoxStyles() && Ht.test(o) && Ot.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Rt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(u).appendChild(c);
                var e = t.getComputedStyle(c);
                i = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", o = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", s = 12 === n(c.offsetWidth / 3), it.removeChild(u), c = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }

        var i, r, s, o, a, l, u = m.createElement("div"), c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(d, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), i
            }, reliableMarginLeft: function () {
                return e(), l
            }, scrollboxSize: function () {
                return e(), s
            }, reliableTrDimensions: function () {
                var e, n, i, r;
                return null == a && (e = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", it.appendChild(e).appendChild(n).appendChild(i), r = t.getComputedStyle(n), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, it.removeChild(e)), a
            }
        }))
    }();
    var It = ["Webkit", "Moz", "ms"], Wt = m.createElement("div").style, Bt = {};

    function Ft(t) {
        return _.cssProps[t] || Bt[t] || (t in Wt ? t : Bt[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = It.length; n--;) if ((t = It[n] + e) in Wt) return t
        }(t) || t)
    }

    var Ut = /^(none|table(?!-c[ea]).+)/, Xt = /^--/,
        Vt = {position: "absolute", visibility: "hidden", display: "block"},
        Qt = {letterSpacing: "0", fontWeight: "400"};

    function Gt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Yt(t, e, n, i, r, s) {
        var o = "width" === e ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === n && (l += _.css(t, n + nt[o], !0, r)), i ? ("content" === n && (l -= _.css(t, "padding" + nt[o], !0, r)), "margin" !== n && (l -= _.css(t, "border" + nt[o] + "Width", !0, r))) : (l += _.css(t, "padding" + nt[o], !0, r), "padding" !== n ? l += _.css(t, "border" + nt[o] + "Width", !0, r) : a += _.css(t, "border" + nt[o] + "Width", !0, r));
        return !i && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0), l
    }

    function Zt(t, e, n) {
        var i = zt(t), r = (!d.boxSizingReliable() || n) && "border-box" === _.css(t, "boxSizing", !1, i), s = r,
            o = Mt(t, e, i), a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Ht.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return (!d.boxSizingReliable() && r || !d.reliableTrDimensions() && S(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === _.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === _.css(t, "boxSizing", !1, i), (s = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + Yt(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function Jt(t, e, n, i, r) {
        return new Jt.prototype.init(t, e, n, i, r)
    }

    _.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Mt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
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
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = X(e), l = Xt.test(e), u = t.style;
                if (l || (e = Ft(a)), o = _.cssHooks[e] || _.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : u[e];
                "string" == (s = typeof n) && (r = et.exec(n)) && r[1] && (n = at(t, e, r), s = "number"), null != n && n == n && ("number" !== s || l || (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var r, s, o, a = X(e);
            return Xt.test(e) || (e = Ft(a)), (o = _.cssHooks[e] || _.cssHooks[a]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = Mt(t, e, i)), "normal" === r && e in Qt && (r = Qt[e]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }), _.each(["height", "width"], (function (t, e) {
        _.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return !Ut.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Zt(t, e, i) : Pt(t, Vt, (function () {
                    return Zt(t, e, i)
                }))
            }, set: function (t, n, i) {
                var r, s = zt(t), o = !d.scrollboxSize() && "absolute" === s.position,
                    a = (o || i) && "border-box" === _.css(t, "boxSizing", !1, s), l = i ? Yt(t, e, i, a, s) : 0;
                return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Yt(t, e, "border", !1, s) - .5)), l && (r = et.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = _.css(t, e)), Gt(0, n, l)
            }
        }
    })), _.cssHooks.marginLeft = Rt(d.reliableMarginLeft, (function (t, e) {
        if (e) return (parseFloat(Mt(t, "marginLeft")) || t.getBoundingClientRect().left - Pt(t, {marginLeft: 0}, (function () {
            return t.getBoundingClientRect().left
        }))) + "px"
    })), _.each({margin: "", padding: "", border: "Width"}, (function (t, e) {
        _.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + nt[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, "margin" !== t && (_.cssHooks[t + e].set = Gt)
    })), _.fn.extend({
        css: function (t, e) {
            return W(this, (function (t, e, n) {
                var i, r, s = {}, o = 0;
                if (Array.isArray(e)) {
                    for (i = zt(t), r = e.length; o < r; o++) s[e[o]] = _.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
            }), t, e, 1 < arguments.length)
        }
    }), ((_.Tween = Jt).prototype = {
        constructor: Jt, init: function (t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (_.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = Jt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = Jt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Jt.propHooks._default.set(this), this
        }
    }).init.prototype = Jt.prototype, (Jt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !_.cssHooks[t.prop] && null == t.elem.style[Ft(t.prop)] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Jt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, _.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, _.fx = Jt.prototype.init, _.fx.step = {};
    var Kt, te, ee, ne, ie = /^(?:toggle|show|hide)$/, re = /queueHooks$/;

    function se() {
        te && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(se) : t.setTimeout(se, _.fx.interval), _.fx.tick())
    }

    function oe() {
        return t.setTimeout((function () {
            Kt = void 0
        })), Kt = Date.now()
    }

    function ae(t, e) {
        var n, i = 0, r = {height: t};
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function le(t, e, n) {
        for (var i, r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), s = 0, o = r.length; s < o; s++) if (i = r[s].call(n, e, t)) return i
    }

    function ue(t, e, n) {
        var i, r, s = 0, o = ue.prefilters.length, a = _.Deferred().always((function () {
            delete l.elem
        })), l = function () {
            if (r) return !1;
            for (var e = Kt || oe(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++) u.tweens[s].run(i);
            return a.notifyWith(t, [u, i, n]), i < 1 && o ? n : (o || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: _.extend({}, e),
            opts: _.extend(!0, {specialEasing: {}, easing: _.easing._default}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Kt || oe(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = _.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (e) {
                var n = 0, i = e ? u.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) u.tweens[n].run(1);
                return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (function (t, e) {
            var n, i, r, s, o;
            for (n in t) if (r = e[i = X(n)], s = t[n], Array.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (o = _.cssHooks[i]) && "expand" in o) for (n in s = o.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = r); else e[i] = r
        }(c, u.opts.specialEasing); s < o; s++) if (i = ue.prefilters[s].call(u, t, c, u.opts)) return f(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(c, le, u), f(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    _.Animation = _.extend(ue, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return at(n.elem, t, et.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            f(t) ? (e = t, t = ["*"]) : t = t.match(H);
            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e)
        }, prefilters: [function (t, e, n) {
            var i, r, s, o, a, l, u, c, h = "width" in e || "height" in e, p = this, d = {}, f = t.style,
                g = t.nodeType && ot(t), m = G.get(t, "fxshow");
            for (i in n.queue || (null == (o = _._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                o.unqueued || a()
            }), o.unqueued++, p.always((function () {
                p.always((function () {
                    o.unqueued--, _.queue(t, "fx").length || o.empty.fire()
                }))
            }))), e) if (r = e[i], ie.test(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0
                }
                d[i] = m && m[i] || _.style(t, i)
            }
            if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(d)) for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = G.get(t, "display")), "none" === (c = _.css(t, "display")) && (u ? c = u : (ut([t], !0), u = t.style.display || u, c = _.css(t, "display"), ut([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(t, "float") && (l || (p.done((function () {
                f.display = u
            })), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always((function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }))), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(t, "fxshow", {display: u}), s && (m.hidden = !g), g && ut([t], !0), p.done((function () {
                for (i in g || ut([t]), G.remove(t, "fxshow"), d) _.style(t, i, d[i])
            }))), l = le(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
        }
    }), _.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? _.extend({}, t) : {
            complete: n || !n && e || f(t) && t,
            duration: t,
            easing: n && e || e && !f(e) && e
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            f(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(ot).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var r = _.isEmptyObject(t), s = _.speed(e, n, i), o = function () {
                var e = ue(this, _.extend({}, t), s);
                (r || G.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
                var e = !0, r = null != t && t + "queueHooks", s = _.timers, o = G.get(this);
                if (r) o[r] && o[r].stop && i(o[r]); else for (r in o) o[r] && o[r].stop && re.test(r) && i(o[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                !e && n || _.dequeue(this, t)
            }))
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each((function () {
                var e, n = G.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], s = _.timers, o = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            }))
        }
    }), _.each(["toggle", "show", "hide"], (function (t, e) {
        var n = _.fn[e];
        _.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ae(e, !0), t, i, r)
        }
    })), _.each({
        slideDown: ae("show"),
        slideUp: ae("hide"),
        slideToggle: ae("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, (function (t, e) {
        _.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    })), _.timers = [], _.fx.tick = function () {
        var t, e = 0, n = _.timers;
        for (Kt = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || _.fx.stop(), Kt = void 0
    }, _.fx.timer = function (t) {
        _.timers.push(t), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
        te || (te = !0, se())
    }, _.fx.stop = function () {
        te = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (e, n) {
        return e = _.fx && _.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function (n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(r)
            }
        }))
    }, ee = m.createElement("input"), ne = m.createElement("select").appendChild(m.createElement("option")), ee.type = "checkbox", d.checkOn = "" !== ee.value, d.optSelected = ne.selected, (ee = m.createElement("input")).value = "t", ee.type = "radio", d.radioValue = "t" === ee.value;
    var ce, he = _.expr.attrHandle;
    _.fn.extend({
        attr: function (t, e) {
            return W(this, _.attr, t, e, 1 < arguments.length)
        }, removeAttr: function (t) {
            return this.each((function () {
                _.removeAttr(this, t)
            }))
        }
    }), _.extend({
        attr: function (t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === s && _.isXMLDoc(t) || (r = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? ce : void 0)), void 0 !== n ? null === n ? void _.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = _.find.attr(t, e)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!d.radioValue && "radio" === e && S(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, i = 0, r = e && e.match(H);
            if (r && 1 === t.nodeType) for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ce = {
        set: function (t, e, n) {
            return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), (function (t, e) {
        var n = he[e] || _.find.attr;
        he[e] = function (t, e, i) {
            var r, s, o = e.toLowerCase();
            return i || (s = he[o], he[o] = r, r = null != n(t, e, i) ? o : null, he[o] = s), r
        }
    }));
    var pe = /^(?:input|select|textarea|button)$/i, de = /^(?:a|area)$/i;

    function fe(t) {
        return (t.match(H) || []).join(" ")
    }

    function ge(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function me(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
    }

    _.fn.extend({
        prop: function (t, e) {
            return W(this, _.prop, t, e, 1 < arguments.length)
        }, removeProp: function (t) {
            return this.each((function () {
                delete this[_.propFix[t] || t]
            }))
        }
    }), _.extend({
        prop: function (t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && _.isXMLDoc(t) || (e = _.propFix[e] || e, r = _.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = _.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : pe.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), d.optSelected || (_.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        _.propFix[this.toLowerCase()] = this
    })), _.fn.extend({
        addClass: function (t) {
            var e, n, i, r, s, o, a, l = 0;
            if (f(t)) return this.each((function (e) {
                _(this).addClass(t.call(this, e, ge(this)))
            }));
            if ((e = me(t)).length) for (; n = this[l++];) if (r = ge(n), i = 1 === n.nodeType && " " + fe(r) + " ") {
                for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                r !== (a = fe(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, r, s, o, a, l = 0;
            if (f(t)) return this.each((function (e) {
                _(this).removeClass(t.call(this, e, ge(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((e = me(t)).length) for (; n = this[l++];) if (r = ge(n), i = 1 === n.nodeType && " " + fe(r) + " ") {
                for (o = 0; s = e[o++];) for (; -1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                r !== (a = fe(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t, i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : f(t) ? this.each((function (n) {
                _(this).toggleClass(t.call(this, n, ge(this), e), e)
            })) : this.each((function () {
                var e, r, s, o;
                if (i) for (r = 0, s = _(this), o = me(t); e = o[r++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else void 0 !== t && "boolean" !== n || ((e = ge(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            }))
        }, hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + fe(ge(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var ve = /\r/g;
    _.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = f(t), this.each((function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, _(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, (function (t) {
                    return null == t ? "" : t + ""
                }))), (e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            }))) : r ? (e = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = _.find.attr(t, "value");
                    return null != e ? e : fe(_.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, n, i, r = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++) if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                        if (e = _(n).val(), o) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var n, i, r = t.options, s = _.makeArray(e), o = r.length; o--;) ((i = r[o]).selected = -1 < _.inArray(_.valHooks.option.get(i), s)) && (n = !0);
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), _.each(["radio", "checkbox"], (function () {
        _.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < _.inArray(_(t).val(), e)
            }
        }, d.checkOn || (_.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    })), d.focusin = "onfocusin" in t;
    var ye = /^(?:focusinfocus|focusoutblur)$/, xe = function (t) {
        t.stopPropagation()
    };
    _.extend(_.event, {
        trigger: function (e, n, i, r) {
            var s, o, a, l, u, h, p, d, v = [i || m], y = c.call(e, "type") ? e.type : e,
                x = c.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !ye.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (x = y.split(".")).shift(), x.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[_.expando] ? e : new _.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : _.makeArray(n, [e]), p = _.event.special[y] || {}, r || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!r && !p.noBubble && !g(i)) {
                    for (l = p.delegateType || y, ye.test(l + y) || (o = o.parentNode); o; o = o.parentNode) v.push(o), a = o;
                    a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0; (o = v[s++]) && !e.isPropagationStopped();) d = o, e.type = 1 < s ? l : p.bindType || y, (h = (G.get(o, "events") || Object.create(null))[e.type] && G.get(o, "handle")) && h.apply(o, n), (h = u && o[u]) && h.apply && V(o) && (e.result = h.apply(o, n), !1 === e.result && e.preventDefault());
                return e.type = y, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !V(i) || u && f(i[y]) && !g(i) && ((a = i[u]) && (i[u] = null), _.event.triggered = y, e.isPropagationStopped() && d.addEventListener(y, xe), i[y](), e.isPropagationStopped() && d.removeEventListener(y, xe), _.event.triggered = void 0, a && (i[u] = a)), e.result
            }
        }, simulate: function (t, e, n) {
            var i = _.extend(new _.Event, n, {type: t, isSimulated: !0});
            _.event.trigger(i, null, e)
        }
    }), _.fn.extend({
        trigger: function (t, e) {
            return this.each((function () {
                _.event.trigger(t, e, this)
            }))
        }, triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return _.event.trigger(t, e, n, !0)
        }
    }), d.focusin || _.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
        var n = function (t) {
            _.event.simulate(e, t.target, _.event.fix(t))
        };
        _.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this, r = G.access(i, e);
                r || i.addEventListener(t, n, !0), G.access(i, e, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this.document || this, r = G.access(i, e) - 1;
                r ? G.access(i, e, r) : (i.removeEventListener(t, n, !0), G.remove(i, e))
            }
        }
    }));
    var we = t.location, _e = {guid: Date.now()}, be = /\?/;
    _.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || _.error("Invalid XML: " + (i ? _.map(i.childNodes, (function (t) {
            return t.textContent
        })).join("\n") : e)), n
    };
    var Ce = /\[\]$/, Te = /\r?\n/g, Ee = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;

    function Se(t, e, n, i) {
        var r;
        if (Array.isArray(e)) _.each(e, (function (e, r) {
            n || Ce.test(t) ? i(t, r) : Se(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        })); else if (n || "object" !== x(e)) i(t, e); else for (r in e) Se(t + "[" + r + "]", e[r], n, i)
    }

    _.param = function (t, e) {
        var n, i = [], r = function (t, e) {
            var n = f(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, (function () {
            r(this.name, this.value)
        })); else for (n in t) Se(n, t[n], e, r);
        return i.join("&")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map((function () {
                var t = _.prop(this, "elements");
                return t ? _.makeArray(t) : this
            })).filter((function () {
                var t = this.type;
                return this.name && !_(this).is(":disabled") && ke.test(this.nodeName) && !Ee.test(t) && (this.checked || !pt.test(t))
            })).map((function (t, e) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, (function (t) {
                    return {name: e.name, value: t.replace(Te, "\r\n")}
                })) : {name: e.name, value: n.replace(Te, "\r\n")}
            })).get()
        }
    });
    var De = /%20/g, $e = /#.*$/, je = /([?&])_=[^&]*/, Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ne = /^(?:GET|HEAD)$/,
        Le = /^\/\//, qe = {}, He = {}, ze = "*/".concat("*"), Pe = m.createElement("a");

    function Oe(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, s = e.toLowerCase().match(H) || [];
            if (f(n)) for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function Me(t, e, n, i) {
        var r = {}, s = t === He;

        function o(a) {
            var l;
            return r[a] = !0, _.each(t[a] || [], (function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            })), l
        }

        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function Re(t, e) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && _.extend(!0, t, i), t
    }

    Pe.href = we.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Re(Re(t, _.ajaxSettings), e) : Re(_.ajaxSettings, t)
        },
        ajaxPrefilter: Oe(qe),
        ajaxTransport: Oe(He),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, r, s, o, a, l, u, c, h, p, d = _.ajaxSetup({}, n), f = d.context || d,
                g = d.context && (f.nodeType || f.jquery) ? _(f) : _.event, v = _.Deferred(),
                y = _.Callbacks("once memory"), x = d.statusCode || {}, w = {}, b = {}, C = "canceled", T = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (u) {
                            if (!o) for (o = {}; e = Ae.exec(s);) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = o[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    }, getAllResponseHeaders: function () {
                        return u ? s : null
                    }, setRequestHeader: function (t, e) {
                        return null == u && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, w[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == u && (d.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (u) T.always(t[T.status]); else for (e in t) x[e] = [x[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || C;
                        return i && i.abort(e), E(0, e), this
                    }
                };
            if (v.promise(T), d.url = ((e || d.url || we.href) + "").replace(Le, we.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(H) || [""], null == d.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = d.url, l.href = l.href, d.crossDomain = Pe.protocol + "//" + Pe.host != l.protocol + "//" + l.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = _.param(d.data, d.traditional)), Me(qe, d, n, T), u) return T;
            for (h in (c = _.event && d.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ne.test(d.type), r = d.url.replace($e, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(De, "+")) : (p = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (be.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(je, "$1"), p = (be.test(r) ? "&" : "?") + "_=" + _e.guid++ + p), d.url = r + p), d.ifModified && (_.lastModified[r] && T.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && T.setRequestHeader("If-None-Match", _.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : d.accepts["*"]), d.headers) T.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f, T, d) || u)) return T.abort();
            if (C = "abort", y.add(d.complete), T.done(d.success), T.fail(d.error), i = Me(He, d, n, T)) {
                if (T.readyState = 1, c && g.trigger("ajaxSend", [T, d]), u) return T;
                d.async && 0 < d.timeout && (a = t.setTimeout((function () {
                    T.abort("timeout")
                }), d.timeout));
                try {
                    u = !1, i.send(w, E)
                } catch (e) {
                    if (u) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(e, n, o, l) {
                var h, p, m, w, b, C = n;
                u || (u = !0, a && t.clearTimeout(a), i = void 0, s = l || "", T.readyState = 0 < e ? 4 : 0, h = 200 <= e && e < 300 || 304 === e, o && (w = function (t, e, n) {
                    for (var i, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) s = l[0]; else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), n[s]
                }(d, T, o)), !h && -1 < _.inArray("script", d.dataTypes) && _.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () {
                }), w = function (t, e, n, i) {
                    var r, s, o, a, l, u = {}, c = t.dataTypes.slice();
                    if (c[1]) for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                    for (s = c.shift(); s;) if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s])) for (r in u) if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                            break
                        }
                        if (!0 !== o) if (o && t.throws) e = o(e); else try {
                            e = o(e)
                        } catch (t) {
                            return {state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s}
                        }
                    }
                    return {state: "success", data: e}
                }(d, w, T, h), h ? (d.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (_.lastModified[r] = b), (b = T.getResponseHeader("etag")) && (_.etag[r] = b)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, p = w.data, h = !(m = w.error))) : (m = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", h ? v.resolveWith(f, [p, C, T]) : v.rejectWith(f, [T, C, m]), T.statusCode(x), x = void 0, c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [T, d, h ? p : m]), y.fireWith(f, [T, C]), c && (g.trigger("ajaxComplete", [T, d]), --_.active || _.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (t, e, n) {
            return _.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return _.get(t, void 0, e, "script")
        }
    }), _.each(["get", "post"], (function (t, e) {
        _[e] = function (t, n, i, r) {
            return f(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, _.isPlainObject(t) && t))
        }
    })), _.ajaxPrefilter((function (t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    })), _._evalUrl = function (t, e, n) {
        return _.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (t) {
                _.globalEval(t, e, n)
            }
        })
    }, _.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (f(t) && (t = t.call(this[0])), e = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            })).append(this)), this
        }, wrapInner: function (t) {
            return f(t) ? this.each((function (e) {
                _(this).wrapInner(t.call(this, e))
            })) : this.each((function () {
                var e = _(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            }))
        }, wrap: function (t) {
            var e = f(t);
            return this.each((function (n) {
                _(this).wrapAll(e ? t.call(this, n) : t)
            }))
        }, unwrap: function (t) {
            return this.parent(t).not("body").each((function () {
                _(this).replaceWith(this.childNodes)
            })), this
        }
    }), _.expr.pseudos.hidden = function (t) {
        return !_.expr.pseudos.visible(t)
    }, _.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, _.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var Ie = {0: 200, 1223: 204}, We = _.ajaxSettings.xhr();
    d.cors = !!We && "withCredentials" in We, d.ajax = We = !!We, _.ajaxTransport((function (e) {
        var n, i;
        if (d.cors || We && !e.crossDomain) return {
            send: function (r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ie[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (r) {
                    if (n) throw r
                }
            }, abort: function () {
                n && n()
            }
        }
    })), _.ajaxPrefilter((function (t) {
        t.crossDomain && (t.contents.script = !1)
    })), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return _.globalEval(t), t
            }
        }
    }), _.ajaxPrefilter("script", (function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    })), _.ajaxTransport("script", (function (t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function (i, r) {
                e = _("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function (t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), m.head.appendChild(e[0])
            }, abort: function () {
                n && n()
            }
        }
    }));
    var Be, Fe = [], Ue = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Fe.pop() || _.expando + "_" + _e.guid++;
            return this[t] = !0, t
        }
    }), _.ajaxPrefilter("json jsonp", (function (e, n, i) {
        var r, s, o,
            a = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ue, "$1" + r) : !1 !== e.jsonp && (e.url += (be.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || _.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
            o = arguments
        }, i.always((function () {
            void 0 === s ? _(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, Fe.push(r)), o && f(s) && s(o[0]), o = s = void 0
        })), "script"
    })), d.createHTMLDocument = ((Be = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Be.childNodes.length), _.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (d.createHTMLDocument ? ((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(i)) : e = m), s = !n && [], (r = D.exec(t)) ? [e.createElement(r[1])] : (r = xt([t], e, s), s && s.length && _(s).remove(), _.merge([], r.childNodes)));
        var i, r, s
    }, _.fn.load = function (t, e, n) {
        var i, r, s, o = this, a = t.indexOf(" ");
        return -1 < a && (i = fe(t.slice(a)), t = t.slice(0, a)), f(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && _.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done((function (t) {
            s = arguments, o.html(i ? _("<div>").append(_.parseHTML(t)).find(i) : t)
        })).always(n && function (t, e) {
            o.each((function () {
                n.apply(this, s || [t.responseText, e, t])
            }))
        }), this
    }, _.expr.pseudos.animated = function (t) {
        return _.grep(_.timers, (function (e) {
            return t === e.elem
        })).length
    }, _.offset = {
        setOffset: function (t, e, n) {
            var i, r, s, o, a, l, u = _.css(t, "position"), c = _(t), h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), s = _.css(t, "top"), l = _.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (i = c.position()).top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), f(e) && (e = e.call(t, n, _.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, _.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                _.offset.setOffset(this, t, e)
            }));
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n, i = this[0], r = {top: 0, left: 0};
                if ("fixed" === _.css(i, "position")) e = i.getBoundingClientRect(); else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = _(t).offset()).top += _.css(t, "borderTopWidth", !0), r.left += _.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - _.css(i, "marginTop", !0),
                    left: e.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map((function () {
                for (var t = this.offsetParent; t && "static" === _.css(t, "position");) t = t.offsetParent;
                return t || it
            }))
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (t, e) {
        var n = "pageYOffset" === e;
        _.fn[t] = function (i) {
            return W(this, (function (t, i, r) {
                var s;
                if (g(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[i];
                s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r
            }), t, i, arguments.length)
        }
    })), _.each(["top", "left"], (function (t, e) {
        _.cssHooks[e] = Rt(d.pixelPosition, (function (t, n) {
            if (n) return n = Mt(t, e), Ht.test(n) ? _(t).position()[e] + "px" : n
        }))
    })), _.each({Height: "height", Width: "width"}, (function (t, e) {
        _.each({padding: "inner" + t, content: e, "": "outer" + t}, (function (n, i) {
            _.fn[i] = function (r, s) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === s ? "margin" : "border");
                return W(this, (function (e, n, r) {
                    var s;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? _.css(e, n, a) : _.style(e, n, r, a)
                }), e, o ? r : void 0, o)
            }
        }))
    })), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
        _.fn[e] = function (t) {
            return this.on(e, t)
        }
    })), _.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }, hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
        _.fn[e] = function (t, n) {
            return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
        }
    }));
    var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    _.proxy = function (t, e) {
        var n, i, s;
        if ("string" == typeof e && (n = t[e], e = t, t = n), f(t)) return i = r.call(arguments, 2), (s = function () {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid = t.guid || _.guid++, s
    }, _.holdReady = function (t) {
        t ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = S, _.isFunction = f, _.isWindow = g, _.camelCase = X, _.type = x, _.now = Date.now, _.isNumeric = function (t) {
        var e = _.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, _.trim = function (t) {
        return null == t ? "" : (t + "").replace(Xe, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return _
    }));
    var Ve = t.jQuery, Qe = t.$;
    return _.noConflict = function (e) {
        return t.$ === _ && (t.$ = Qe), e && t.jQuery === _ && (t.jQuery = Ve), _
    }, void 0 === e && (t.jQuery = t.$ = _), _
})), $(document).ready((function () {
    $("header .normal .nav-links li a").click((function () {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")
    })), $(window).scroll((function () {
        $(window).scrollTop() >= 50 ? ($("header").addClass("scroll"), $(".normal").addClass("scroll"), $("body").css("paddingTop", $("header").innerHeight())) : ($("header").removeClass("scroll"), $(".normal").removeClass("scroll"), $("body").css("paddingTop", 0))
    })), $(".user-name").click((function () {
        $(".user-name i").toggleClass("flip"), $(".drop-down").slideToggle(300)
    })), $("#dropDown2").click((function () {
        $(".nav-items i").toggleClass("flip"), $(".drop-down-2").slideToggle(300)
    })), $(".user-img").click((function () {
        $(".drop-down").slideToggle(300)
    })), $(".icon-menu ").click((function () {
        $(this).toggleClass("active")
    })), $(".icon-menu").click((function () {
        $(".links-res").slideToggle("slow")
    })), $(".offer-company").owlCarousel({
        loop: !0,
        nav: !1,
        dots: !0,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: !0,
        rtl: !0,
        autoplay: !0,
        responsive: {0: {items: 1}, 576: {items: 1}, 768: {items: 2}, 1200: {items: 3}}
    }), $(".offer-slider").owlCarousel({
        loop: !0,
        nav: !1,
        dots: !0,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: !0,
        rtl: !0,
        autoplay: !0,
        responsive: {0: {items: 1}, 576: {items: 1}, 768: {items: 2}, 1200: {items: 3}}
    }), $(".img-gallery .gallery-1 img").click((function () {
        $(this).addClass("active").parents().siblings().find("img").removeClass("active");
        var t = $(this).attr("src");
        $(".main-img img").attr("src", t), console.log(t)
    })), $("#model-book").click((function () {
        $(".model-book").fadeIn(100)
    })), $(".button #addButton2").click((function () {
        $(".model-book").fadeIn(100)
    }))
})), function (t, e, n, i) {
    function r(e, n) {
        this.settings = null, this.options = t.extend({}, r.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy((function (e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }), this)), t.each(r.Plugins, t.proxy((function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }), this)), t.each(r.Workers, t.proxy((function (e, n) {
            this._pipe.push({filter: n.filter, run: t.proxy(n.run, this)})
        }), this)), this.setup(), this.initialize()
    }

    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, r.Width = {Default: "default", Inner: "inner", Outer: "outer"}, r.Type = {
        Event: "event",
        State: "state"
    }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", n = !this.settings.autoWidth, i = this.settings.rtl,
                r = {width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e};
            !n && this.$stage.children().css(r), t.css = r
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, n = null,
                i = this._items.length, r = !this.settings.autoWidth, s = [];
            for (t.items = {
                merge: !1,
                width: e
            }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = r ? e * n : this._items[i].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], n = this._items, i = this.settings, r = Math.max(2 * i.items, 4),
                s = 2 * Math.ceil(n.length / 2), o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0, a = "",
                l = "";
            for (o /= 2; o > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, o -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, n = !this.settings.autoWidth, i = this.$stage.children();
            if (n && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css); else n && (t.css.width = t.items.width, i.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, n, i, r = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s, a = o + this.width() * r, l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], r.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, r.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map((function (e) {
            return t(e)
        })), this._mergers = this._items.map((function () {
            return 1
        })), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, r.prototype.initialize = function () {
        var t, e, n;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, r.prototype.setup = function () {
        var e = this.viewport(), n = this.options.responsive, i = -1, r = null;
        n ? (t.each(n, (function (t) {
            t <= e && t > i && (i = Number(t))
        })), "function" == typeof (r = t.extend({}, this.options, n[i])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, r.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function (e) {
        var n = this.trigger("prepare", {content: e});
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: n.data}), n.data
    }, r.prototype.update = function () {
        for (var e = 0, n = this._pipe.length, i = t.proxy((function (t) {
            return this[t]
        }), this._invalidated), r = {}; e < n;) (this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function (t) {
        switch (t = t || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, r.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, r.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function () {
            return !1
        }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, r.prototype.onDragStart = function (e) {
        var i = null;
        3 !== e.which && (t.support.transform ? i = {
            x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        } : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy((function (e) {
            var i = this.difference(this._drag.pointer, this.pointer(e));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }), this)))
    }, r.prototype.onDragMove = function (t) {
        var e = null, n = null, i = null, r = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
    }, r.prototype.onDragEnd = function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)), r = this._drag.stage.current,
            s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function () {
            return !1
        }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function (e, n) {
        var r = -1, s = this.width(), o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy((function (t, a) {
            return "left" === n && e > a - 30 && e < a + 30 ? r = t : "right" === n && e > a - s - 30 && e < a - s + 30 ? r = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] !== i ? o[t + 1] : a - s) && (r = "left" === n ? t + 1 : t), -1 === r
        }), this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? r = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (r = e = this.maximum())), r
    }, r.prototype.animate = function (e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : n ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, r.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, r.prototype.current = function (t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function (t, e) {
            return e
        }))
    }, r.prototype.reset = function (t) {
        (t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function (t, e) {
        var n = this._items.length, r = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || n < 1 ? t = i : (t < 0 || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2), t
    }, r.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, r.prototype.maximum = function (t) {
        var e, n, i, r = this.settings, s = this._coordinates.length;
        if (r.loop) s = this._clones.length / 2 + this._items.length - 1; else if (r.autoWidth || r.merge) {
            if (e = this._items.length) for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i);) ;
            s = e + 1
        } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, r.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, r.prototype.items = function (t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, r.prototype.mergers = function (t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, r.prototype.clones = function (e) {
        var n = this._clones.length / 2, r = n + this._items.length, s = function (t) {
            return t % 2 == 0 ? r + t / 2 : n - (t + 1) / 2
        };
        return e === i ? t.map(this._clones, (function (t, e) {
            return s(e)
        })) : t.map(this._clones, (function (t, n) {
            return t === e ? s(n) : null
        }))
    }, r.prototype.speed = function (t) {
        return t !== i && (this._speed = t), this._speed
    }, r.prototype.coordinates = function (e) {
        var n, r = 1, s = e - 1;
        return e === i ? t.map(this._coordinates, t.proxy((function (t, e) {
            return this.coordinates(e)
        }), this)) : (this.settings.center ? (this.settings.rtl && (r = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * r) : n = this._coordinates[s] || 0, n = Math.ceil(n))
    }, r.prototype.duration = function (t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, r.prototype.to = function (t, e) {
        var n = this.current(), i = null, r = t - this.relative(n), s = (r > 0) - (r < 0), o = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), (i = (((t = n + r) - a) % o + o) % o + a) !== t && i - r <= l && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
    }, r.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, r.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, r.prototype.onTransitionEnd = function (t) {
        if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, r.prototype.viewport = function () {
        var i;
        return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, r.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function () {
            return 1 === this.nodeType
        })).each(t.proxy((function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function (e, n) {
        var r = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: n
        }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: n
        })
    }, r.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, r.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy((function (e, n) {
            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy((function (t) {
                n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }), this))
    }, r.prototype.destroy = function () {
        for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function (t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case"<":
                return i ? t > n : t < n;
            case">":
                return i ? t < n : t > n;
            case">=":
                return i ? t <= n : t >= n;
            case"<=":
                return i ? t >= n : t <= n
        }
    }, r.prototype.on = function (t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, r.prototype.off = function (t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, r.prototype.trigger = function (e, n, i, s, o) {
        var a = {item: {count: this._items.length, index: this.current()}},
            l = t.camelCase(t.grep(["on", e, i], (function (t) {
                return t
            })).join("-").toLowerCase()),
            u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, n));
        return this._supress[e] || (t.each(this._plugins, (function (t, e) {
            e.onTrigger && e.onTrigger(u)
        })), this.register({
            type: r.Type.Event,
            name: e
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, r.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy((function (t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
        }), this))
    }, r.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy((function (t, e) {
            this._states.current[e]--
        }), this))
    }, r.prototype.register = function (e) {
        if (e.type === r.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var n = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function (n, i) {
            return t.inArray(n, this._states.tags[e.name]) === i
        }), this)))
    }, r.prototype.suppress = function (e) {
        t.each(e, t.proxy((function (t, e) {
            this._supress[e] = !0
        }), this))
    }, r.prototype.release = function (e) {
        t.each(e, t.proxy((function (t, e) {
            delete this._supress[e]
        }), this))
    }, r.prototype.pointer = function (t) {
        var n = {x: null, y: null};
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
    }, r.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, r.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each((function () {
            var i = t(this), s = i.data("owl.carousel");
            s || (s = new r(this, "object" == typeof e && e), i.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function (e, n) {
                s.register({
                    type: r.Type.Event,
                    name: n
                }), s.$element.on(n + ".owl.carousel.core", t.proxy((function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }), s))
            }))), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n)
        }))
    }, t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }), this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var t, n;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items,
                        r = n.center && -1 * i || 0,
                        s = (e.property && undefined !== e.property.value ? e.property.value : this._core.current()) + r,
                        o = this._core.clones().length, a = t.proxy((function (t, e) {
                            this.load(e)
                        }), this);
                    for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (s -= n.lazyLoadEager, i++)); r++ < i;) this.load(o / 2 + this._core.relative(s)), o && t.each(this._core.clones(this._core.relative(s)), a), s++
                }
            }), this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, r.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n), r = i && i.find(".owl-lazy");
        !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy((function (n, i) {
            var r, s = t(i),
                o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: o
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy((function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: o}, "lazy")
            }), this)).attr("src", o) : s.is("source") ? s.one("load.owl.lazy", t.proxy((function () {
                this._core.trigger("loaded", {element: s, url: o}, "lazy")
            }), this)).attr("srcset", o) : ((r = new Image).onload = t.proxy((function () {
                s.css({"background-image": 'url("' + o + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }), this), r.src = o)
        }), this)), this._loaded.push(i.get(0)))
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (n) {
        this._core = n, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }), this), "changed.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }), this), "loaded.owl.lazy": t.proxy((function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }), this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var i = this;
        t(e).on("load", (function () {
            i._core.settings.autoHeight && i.update()
        })), t(e).resize((function () {
            i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout((function () {
                i.update()
            }), 250))
        }))
    };
    r.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, r.prototype.update = function () {
        var e = this._core._current, n = e + this._core.settings.items, i = this._core.settings.lazyLoad,
            r = this._core.$stage.children().toArray().slice(e, n), s = [], o = 0;
        t.each(r, (function (e, n) {
            s.push(t(n).height())
        })), (o = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }), this), "resize.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }), this), "refreshed.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }), this), "changed.owl.carousel": t.proxy((function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }), this), "prepared.owl.carousel": t.proxy((function (e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }
            }), this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function (t) {
            this.play(t)
        }), this))
    };
    r.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, r.prototype.fetch = function (t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            r = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight, o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if ((i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube"; else if (i[3].indexOf("vimeo") > -1) n = "vimeo"; else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[o] = {
            type: n,
            id: i,
            width: r,
            height: s
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, r.prototype.thumbnail = function (e, n) {
        var i, r, s = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
            o = e.find("img"), a = "src", l = "", u = this._core.settings, c = function (n) {
                '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + l,
                    srcType: n
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + n + ")"
                }), e.after(i), e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap(t("<div/>", {
            class: "owl-video-wrapper",
            style: s
        })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), o.length) return c(o.attr(a)), o.remove(), !1;
        "youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", c(r)) : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                r = t[0].thumbnail_large, c(r)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                r = t.framegrab_url, c(r)
            }
        })
    }, r.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, r.prototype.play = function (e) {
        var n, i = t(e.target).closest("." + this._core.settings.itemClass), r = this._videos[i.attr("data-video")],
            s = r.width || "100%", o = r.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), n.attr("width", s), "youtube" === r.type ? n.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? n.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && n.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), t(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function () {
        var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": t.proxy((function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }), this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }), this), "translate.owl.carousel": t.proxy((function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }), this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {animateOut: !1, animateIn: !1}, r.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
        }
    }, r.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy((function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }), this), "initialized.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }), this), "play.owl.autoplay": t.proxy((function (t, e, n) {
                t.namespace && this.play(e, n)
            }), this), "stop.owl.autoplay": t.proxy((function (t) {
                t.namespace && this.stop()
            }), this), "mouseover.owl.autoplay": t.proxy((function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this), "mouseleave.owl.autoplay": t.proxy((function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }), this), "touchstart.owl.core": t.proxy((function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this), "touchend.owl.core": t.proxy((function () {
                this._core.settings.autoplayHoverPause && this.play()
            }), this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, r.prototype._next = function (i) {
        this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
    }, r.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, r.prototype.play = function (n, i) {
        var r;
        this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - r)
    }, r.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, r.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    "use strict";
    var r = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy((function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }), this), "added.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }), this), "remove.owl.carousel": t.proxy((function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }), this), "changed.owl.carousel": t.proxy((function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }), this), "initialized.owl.carousel": t.proxy((function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }), this), "refreshed.owl.carousel": t.proxy((function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }), this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, r.prototype.initialize = function () {
        var e, n = this._core.settings;
        for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function (t) {
            this.prev(n.navSpeed)
        }), this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function (t) {
            this.next(n.navSpeed)
        }), this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function (e) {
            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, r.prototype.destroy = function () {
        var t, e, n, i, r;
        for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, r.prototype.update = function () {
        var t, e, n = this._core.clones().length / 2, i = n + this._core.items().length, r = this._core.maximum(!0),
            s = this._core.settings, o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy) for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
            if (e >= o || 0 === e) {
                if (this._pages.push({start: Math.min(r, t - n), end: t - n + o - 1}), Math.min(r, t - n) === r) break;
                e = 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, r.prototype.draw = function () {
        var e, n = this._core.settings, i = this._core.items().length <= n.items,
            r = this._core.relative(this._core.current()), s = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function (e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, r.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy((function (t, n) {
            return t.start <= e && t.end >= e
        }), this)).pop()
    }, r.prototype.getPosition = function (e) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
    }, r.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, r.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, r.prototype.to = function (e, n, i) {
        var r;
        !i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    "use strict";
    var r = function (n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy((function (n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }), this), "prepared.owl.carousel": t.proxy((function (e) {
                if (e.namespace) {
                    var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = e.content
                }
            }), this), "changed.owl.carousel": t.proxy((function (n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        r = t.map(this._hashes, (function (t, e) {
                            return t === i ? e : null
                        })).join();
                    if (!r || e.location.hash.slice(1) === r) return;
                    e.location.hash = r
                }
            }), this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function (t) {
            var n = e.location.hash.substring(1), i = this._core.$stage.children(),
                r = this._hashes[n] && i.index(this._hashes[n]);
            undefined !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        }), this))
    };
    r.Defaults = {URLhashListener: !1}, r.prototype.destroy = function () {
        var n, i;
        for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    function r(e, n) {
        var i = !1, r = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(r + " ") + r).split(" "), (function (t, e) {
            if (undefined !== o[e]) return i = !n || e, !1
        })), i
    }

    function s(t) {
        return r(t, !0)
    }

    var o = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, u = function () {
        return !!r("transform")
    }, c = function () {
        return !!r("perspective")
    }, h = function () {
        return !!r("animation")
    };
    (function () {
        return !!r("transition")
    })() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u() && (t.support.transform = new String(s("transform")), t.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document);

$(document).mouseup(function (e) {
    if ($(e.target).closest(".book").length
        === 0 && $('.model-book').css('display') === 'block') {
        $(".model-book").hide();
    }
});
$(document).on('click','.close',function () {
    $('.alert').remove()
})
$(document).on('click','.edit-btn',function () {
    var modelId = $(this).data('model')
    $('#'+modelId).fadeIn(100)
})

setTimeout(function (){
    $('.alert .close').click()

    var url =removeURLParameter(window.location.href,'success')
    url =removeURLParameter(url,'error')
    window.history.pushState('page2', 'Title', url);

},5000)

function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
}

var elems = document.getElementsByClassName('confirmation');
var confirmIt = function (e) {
    if (!confirm('هل أنت متأكد؟')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
    elems[i].addEventListener('click', confirmIt, false);
}