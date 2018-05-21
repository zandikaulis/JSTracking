webpackJsonp([98], {
    "+bIS": function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                return e
            }
        }
        var o = function() {};
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(e) {
            return e
        }, e.exports = o
    },
    "+cPc": function(e, t, n) {
        var r = n("CUG3"),
            o = n("n8KP"),
            a = n("/UYc");
        e.exports = function(e) {
            var t = o(e);
            return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(n) {
                return n === e || r(n, e, t)
            }
        }
    },
    "+fHz": function(e, t) {},
    "//bJ": function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
                var s = e[n];
                t(s, n, e) && (a[o++] = s)
            }
            return a
        }
    },
    "/MI9": function(e, t, n) {
        var r = n("fXkM"),
            o = n("11iS");
        e.exports = function(e, t) {
            return null != e && o(e, t, r)
        }
    },
    "/UYc": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        }
    },
    "/ewM": function(e, t, n) {
        var r = n("WFpE");
        e.exports = function(e, t, n) {
            for (var o = -1, a = e.criteria, s = t.criteria, i = a.length, l = n.length; ++o < i;) {
                var u = r(a[o], s[o]);
                if (u) return o >= l ? u : u * ("desc" == n[o] ? -1 : 1)
            }
            return e.index - t.index
        }
    },
    "0e1M": function(e, t, n) {
        var r = n("eWqu"),
            o = n("wSgH")(r);
        e.exports = o
    },
    "0pjK": function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "0zkw": function(e, t) {
        var n = 800,
            r = 16,
            o = Date.now;
        e.exports = function(e) {
            var t = 0,
                a = 0;
            return function() {
                var s = o(),
                    i = r - (s - a);
                if (a = s, i > 0) {
                    if (++t >= n) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
    },
    "11iS": function(e, t, n) {
        var r = n("aIUG"),
            o = n("H3TN"),
            a = n("mG6l"),
            s = n("cjOD"),
            i = n("2iRz"),
            l = n("F6hB");
        e.exports = function(e, t, n) {
            for (var u = -1, c = (t = r(t, e)).length, d = !1; ++u < c;) {
                var h = l(t[u]);
                if (!(d = null != e && n(e, h))) break;
                e = e[h]
            }
            return d || ++u != c ? d : !!(c = null == e ? 0 : e.length) && i(c) && s(h, c) && (a(e) || o(e))
        }
    },
    "1nXM": function(e, t, n) {
        var r = n("g/lL"),
            o = n("pLne"),
            a = n("HMFB");
        e.exports = function(e) {
            return r(e, a, o)
        }
    },
    "1tEs": function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n("DuR2"))
    },
    "2EIm": function(e, t, n) {
        var r = n("Bh6c");
        e.exports = function() {
            this.__data__ = new r, this.size = 0
        }
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "2iRz": function(e, t) {
        var n = 9007199254740991;
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
        }
    },
    "2oz3": function(e, t, n) {
        var r = n("INOA"),
            o = n("mAEY");
        e.exports = function e(t, n, a, s, i) {
            var l = -1,
                u = t.length;
            for (a || (a = o), i || (i = []); ++l < u;) {
                var c = t[l];
                n > 0 && a(c) ? n > 1 ? e(c, n - 1, a, s, i) : r(i, c) : s || (i[i.length] = c)
            }
            return i
        }
    },
    "2urJ": function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    "3fb4": function(e, t) {},
    "43dD": function(e, t, n) {
        var r = n("JGv7"),
            o = n("H1YI"),
            a = n("OZxy"),
            s = "[object Null]",
            i = "[object Undefined]",
            l = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? i : s : l && l in Object(e) ? o(e) : a(e)
        }
    },
    "4UmU": function(e, t, n) {
        var r = n("EpL8"),
            o = n("Czj7"),
            a = n("cjOD"),
            s = n("kl/u");
        e.exports = function(e, t, n) {
            if (!s(n)) return !1;
            var i = typeof t;
            return !!("number" == i ? o(n) && a(t, n.length) : "string" == i && t in n) && r(n[t], e)
        }
    },
    "4hEs": function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
    },
    "50Oj": function(e, t, n) {
        var r = n("HMFi"),
            o = n("SjFU"),
            a = n("Ro3v"),
            s = n("BhXZ"),
            i = n("usEs"),
            l = n("/ewM"),
            u = n("F3kA");
        e.exports = function(e, t, n) {
            var c = -1;
            t = r(t.length ? t : [u], i(o));
            var d = a(e, function(e, n, o) {
                return {
                    criteria: r(t, function(t) {
                        return t(e)
                    }),
                    index: ++c,
                    value: e
                }
            });
            return s(d, function(e, t) {
                return l(e, t, n)
            })
        }
    },
    "57tO": function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Set");
        e.exports = r
    },
    "5EkD": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("Odds"),
            a = (n("TJLs"), function(e) {
                return r.createElement(o._35, {
                    className: "settings-page-header",
                    borderTop: !0,
                    borderRight: !0,
                    borderLeft: !0,
                    background: o.n.Base
                }, r.createElement(o._6, {
                    linkTo: e.linkToParent,
                    onClick: e.onClick,
                    alpha: !0
                }, r.createElement(o._8, {
                    display: o.R.Flex,
                    flexWrap: o.U.NoWrap
                }, r.createElement(o._8, {
                    display: o.R.Flex,
                    padding: {
                        x: 1
                    }
                }, r.createElement(o._24, {
                    asset: o._25.AngleLeft,
                    height: 20,
                    width: 20
                })), r.createElement(o._8, {
                    flexGrow: 1,
                    margin: 2
                }, r.createElement(o.Q, {
                    bold: !0,
                    fontSize: o.V.Size4
                }, e.title), r.createElement(o.Q, {
                    color: o.K.Alt2
                }, e.description)))))
            });
        n.d(t, "a", function() {
            return a
        })
    },
    "5Y57": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            o = n("GiK3"),
            a = n("rCmJ"),
            s = n("6sO2"),
            i = n("Odds"),
            l = function() {
                return o.createElement(i._8, {
                    display: i.R.Flex,
                    flexDirection: i.T.Column,
                    justifyContent: i._7.Center,
                    alignItems: i.c.Center,
                    flexGrow: 1,
                    fullHeight: !0,
                    padding: {
                        y: 1
                    },
                    zIndex: i._62.Above
                }, o.createElement(i._35, {
                    color: i.K.Alt2,
                    textAlign: i._45.Center,
                    flexShrink: 1
                }, o.createElement(i._24, {
                    asset: i._25.DeadGlitch,
                    width: 46,
                    height: 48
                })), o.createElement(i._2, {
                    margin: {
                        top: 1
                    },
                    textAlign: i._45.Center
                }, o.createElement(i.Q, {
                    type: i._49.H4,
                    "data-test-selector": "search-error-message"
                }, Object(s.d)("Search is not available at this time", "DropdownSearchError"))), o.createElement(i.Q, {
                    type: i._49.P
                }, Object(s.d)("Please try again later", "DropdownSearchError")))
            },
            u = n("6BvN"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        focusSelectable: !1,
                        isOpen: !1
                    }, t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.onKeyDown = function(e) {
                        e.keyCode === u.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === u.a.Up ? t.focusNext(-1) : e.keyCode === u.a.Down && t.focusNext(1)
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        }), t.props.onClose && t.props.onClose()
                    }, t.onMouseOver = function(e) {
                        var n = e.target.closest("[data-selectable]");
                        n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                            currentFocus: n
                        }), t.props.onFocusChange && t.props.onFocusChange(n))
                    }, t.getInputRef = function(e) {
                        t.inputRef = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.isErrored ? o.createElement(l, null) : o.Children.only(this.props.children);
                    return o.createElement(a.a, {
                        onClickOut: this.onClickOut
                    }, o.createElement(i._27, {
                        onChange: this.handleChange,
                        onKeyDown: this.onKeyDown,
                        onFocus: this.props.onFocusInput,
                        placeholder: this.props.placeholder,
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1,
                        refDelegate: this.getInputRef
                    }), o.createElement(i.q, r.__assign({
                        noTail: !0
                    }, this.props.balloonProps, {
                        show: this.state.isOpen
                    }), o.createElement("div", {
                        tabIndex: 0,
                        onKeyDown: this.onKeyDown,
                        onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                    }, e)))
                }, t.prototype.toggle = function(e) {
                    e !== this.state.isOpen && this.setState({
                        isOpen: e
                    })
                }, t.prototype.setValue = function(e) {
                    this.inputRef.value = e
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-selectable=true]"),
                        r = document.activeElement,
                        o = Array.prototype.indexOf.call(n, r);
                    if ((t = o < 0 ? e > 0 ? 0 : n.length - 1 : o + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        }), this.props.onFocusChange && this.props.onFocusChange(a)
                    }
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    "5hfY": function(e, t, n) {
        var r = n("L3k4");
        e.exports = function(e) {
            return function(t) {
                return r(t, e)
            }
        }
    },
    "6Exb": function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    "6TIu": function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e) {
            return r(this.__data__, e) > -1
        }
    },
    "81TE": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    "8Wze": function(e, t, n) {
        var r, o = n("MA13"),
            a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        e.exports = function(e) {
            return !!a && a in e
        }
    },
    "8sB4": function(e, t, n) {
        var r = n("SjFU"),
            o = n("Czj7"),
            a = n("HMFB");
        e.exports = function(e) {
            return function(t, n, s) {
                var i = Object(t);
                if (!o(t)) {
                    var l = r(n, 3);
                    t = a(t), n = function(e) {
                        return l(i[e], e, i)
                    }
                }
                var u = e(t, n, s);
                return u > -1 ? i[l ? t[u] : u] : void 0
            }
        }
    },
    "8xms": function(e, t, n) {
        var r = n("w1Jz"),
            o = "__lodash_hash_undefined__",
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            if (r) {
                var n = t[e];
                return n === o ? void 0 : n
            }
            return a.call(t, e) ? t[e] : void 0
        }
    },
    "9GW9": function(e, t) {
        e.exports = function(e) {
            return this.__data__.get(e)
        }
    },
    "9c95": function(e, t, n) {
        var r = n("8sB4")(n("i4TT"));
        e.exports = r
    },
    "9nrn": function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Map");
        e.exports = r
    },
    A2t5: function(e, t, n) {
        var r = n("L3k4");
        e.exports = function(e, t, n) {
            var o = null == e ? void 0 : r(e, t);
            return void 0 === o ? n : o
        }
    },
    AJkw: function(e, t) {
        e.exports = function(e) {
            return function(t, n, r) {
                for (var o = -1, a = Object(t), s = r(t), i = s.length; i--;) {
                    var l = s[e ? i : ++o];
                    if (!1 === n(a[l], l, a)) break
                }
                return t
            }
        }
    },
    "AQc/": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("Odds");

        function a(e) {
            var t = null;
            return e.description && (t = r.createElement(o._8, {
                margin: {
                    top: 1
                }
            }, r.createElement(o.Q, {
                color: o.K.Alt2
            }, e.description))), r.createElement(o._8, {
                margin: {
                    y: 2
                }
            }, r.createElement(o.Q, {
                type: o._49.H3,
                fontSize: o.V.Size2
            }, e.title), t)
        }
        n.d(t, "a", function() {
            return a
        })
    },
    Ao0V: function(e, t, n) {
        var r = n("JGv7"),
            o = n("yMkz"),
            a = n("EpL8"),
            s = n("qu3O"),
            i = n("zN4B"),
            l = n("pUak"),
            u = 1,
            c = 2,
            d = "[object Boolean]",
            h = "[object Date]",
            p = "[object Error]",
            f = "[object Map]",
            g = "[object Number]",
            m = "[object RegExp]",
            v = "[object Set]",
            y = "[object String]",
            b = "[object Symbol]",
            S = "[object ArrayBuffer]",
            _ = "[object DataView]",
            x = r ? r.prototype : void 0,
            E = x ? x.valueOf : void 0;
        e.exports = function(e, t, n, r, x, O, w) {
            switch (n) {
                case _:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case S:
                    return !(e.byteLength != t.byteLength || !O(new o(e), new o(t)));
                case d:
                case h:
                case g:
                    return a(+e, +t);
                case p:
                    return e.name == t.name && e.message == t.message;
                case m:
                case y:
                    return e == t + "";
                case f:
                    var C = i;
                case v:
                    var j = r & u;
                    if (C || (C = l), e.size != t.size && !j) return !1;
                    var k = w.get(e);
                    if (k) return k == t;
                    r |= c, w.set(e, t);
                    var T = s(C(e), C(t), r, x, O, w);
                    return w.delete(e), T;
                case b:
                    if (E) return E.call(e) == E.call(t)
            }
            return !1
        }
    },
    BALR: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
    },
    BaEo: function(e, t) {
        e.exports = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
    },
    Bh6c: function(e, t, n) {
        var r = n("sBY2"),
            o = n("iLYB"),
            a = n("4hEs"),
            s = n("6TIu"),
            i = n("eGfi");

        function l(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = s, l.prototype.set = i, e.exports = l
    },
    BhXZ: function(e, t) {
        e.exports = function(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }
    },
    Bxt2: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            return r(this, e).get(e)
        }
    },
    CTFd: function(e, t, n) {
        var r = n("AJkw")();
        e.exports = r
    },
    CUG3: function(e, t, n) {
        var r = n("gKqb"),
            o = n("GVhz"),
            a = 1,
            s = 2;
        e.exports = function(e, t, n, i) {
            var l = n.length,
                u = l,
                c = !i;
            if (null == e) return !u;
            for (e = Object(e); l--;) {
                var d = n[l];
                if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++l < u;) {
                var h = (d = n[l])[0],
                    p = e[h],
                    f = d[1];
                if (c && d[2]) {
                    if (void 0 === p && !(h in e)) return !1
                } else {
                    var g = new r;
                    if (i) var m = i(p, f, h, e, t, g);
                    if (!(void 0 === m ? o(f, p, a | s, i, g) : m)) return !1
                }
            }
            return !0
        }
    },
    CZUI: function(e, t, n) {
        var r = n("U2kw"),
            o = n("8Wze"),
            a = n("kl/u"),
            s = n("NuOc"),
            i = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            u = Object.prototype,
            c = l.toString,
            d = u.hasOwnProperty,
            h = RegExp("^" + c.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!a(e) || o(e)) && (r(e) ? h : i).test(s(e))
        }
    },
    Czj7: function(e, t, n) {
        var r = n("U2kw"),
            o = n("2iRz");
        e.exports = function(e) {
            return null != e && o(e.length) && !r(e)
        }
    },
    D4QM: function(e, t, n) {
        var r = /^\./,
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            s = n("ROCN")(function(e) {
                var t = [];
                return r.test(e) && t.push(""), e.replace(o, function(e, n, r, o) {
                    t.push(r ? o.replace(a, "$1") : n || e)
                }), t
            });
        e.exports = s
    },
    DRNv: function(e, t, n) {
        var r = n("enQx");
        e.exports = function(e, t) {
            var n = e.__data__;
            return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    },
    EpL8: function(e, t) {
        e.exports = function(e, t) {
            return e === t || e != e && t != t
        }
    },
    F3kA: function(e, t) {
        e.exports = function(e) {
            return e
        }
    },
    F6hB: function(e, t, n) {
        var r = n("SCwa"),
            o = 1 / 0;
        e.exports = function(e) {
            if ("string" == typeof e || r(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -o ? "-0" : t
        }
    },
    Fbrx: function(e, t, n) {
        var r = n("GVhz"),
            o = n("A2t5"),
            a = n("/MI9"),
            s = n("QQy1"),
            i = n("am5H"),
            l = n("/UYc"),
            u = n("F6hB"),
            c = 1,
            d = 2;
        e.exports = function(e, t) {
            return s(e) && i(t) ? l(u(e), t) : function(n) {
                var s = o(n, e);
                return void 0 === s && s === t ? a(n, e) : r(t, s, c | d)
            }
        }
    },
    FvmC: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "WeakMap");
        e.exports = r
    },
    Fy4Y: function(e, t, n) {
        var r = n("81TE")(Object.keys, Object);
        e.exports = r
    },
    "GH+X": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("Odds"),
            a = (n("3fb4"), function(e) {
                var t = null;
                return e.footer && (t = r.createElement(o._35, {
                    padding: 2,
                    background: o.n.Alt2
                }, e.footer)), r.createElement(o._35, {
                    className: "settings-section",
                    background: o.n.Base,
                    margin: {
                        bottom: 4
                    },
                    borderRight: !0,
                    borderBottom: !0,
                    borderLeft: !0
                }, e.children, t)
            });
        n.d(t, "a", function() {
            return a
        })
    },
    GVhz: function(e, t, n) {
        var r = n("M+Mb"),
            o = n("VGcK");
        e.exports = function e(t, n, a, s, i) {
            return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, a, s, e, i))
        }
    },
    H1YI: function(e, t, n) {
        var r = n("JGv7"),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.toString,
            i = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = a.call(e, i),
                n = e[i];
            try {
                e[i] = void 0;
                var r = !0
            } catch (e) {}
            var o = s.call(e);
            return r && (t ? e[i] = n : delete e[i]), o
        }
    },
    H3TN: function(e, t, n) {
        var r = n("tobj"),
            o = n("VGcK"),
            a = Object.prototype,
            s = a.hasOwnProperty,
            i = a.propertyIsEnumerable,
            l = r(function() {
                return arguments
            }()) ? r : function(e) {
                return o(e) && s.call(e, "callee") && !i.call(e, "callee")
            };
        e.exports = l
    },
    HMFB: function(e, t, n) {
        var r = n("OScx"),
            o = n("r0iv"),
            a = n("Czj7");
        e.exports = function(e) {
            return a(e) ? r(e) : o(e)
        }
    },
    HMFi: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
            return o
        }
    },
    INOA: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
            return e
        }
    },
    Ii8z: function(e, t) {
        e.exports = function(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
    },
    IjoR: function(e, t) {},
    J0u9: function(e, t, n) {
        var r = n("2oz3"),
            o = n("50Oj"),
            a = n("L4AJ"),
            s = n("4UmU"),
            i = a(function(e, t) {
                if (null == e) return [];
                var n = t.length;
                return n > 1 && s(e, t[0], t[1]) ? t = [] : n > 2 && s(t[0], t[1], t[2]) && (t = [t[0]]), o(e, r(t, 1), [])
            });
        e.exports = i
    },
    JGv7: function(e, t, n) {
        var r = n("MygC").Symbol;
        e.exports = r
    },
    JYjH: function(e, t, n) {
        var r = n("m2wS"),
            o = n("5hfY"),
            a = n("QQy1"),
            s = n("F6hB");
        e.exports = function(e) {
            return a(e) ? r(s(e)) : o(e)
        }
    },
    Jo6h: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("6sO2"),
            a = n("OjIq"),
            s = n("Odds"),
            i = (n("IjoR"), function(e) {
                return r.createElement(s._35, {
                    className: "settings-form-group"
                }, r.createElement(a.a, null, r.createElement(s.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(o.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || s.X.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return i
        })
    },
    KYFq: function(e, t, n) {
        var r = n("kl/u"),
            o = n("SCwa"),
            a = NaN,
            s = /^\s+|\s+$/g,
            i = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            c = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e) return e;
            if (o(e)) return a;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = l.test(e);
            return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : i.test(e) ? a : +e
        }
    },
    Kc4v: function(e, t, n) {
        "use strict";
        var r, o;
        n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return a
            }),
            function(e) {
                e.Random = "random", e.Ordered = "ordered"
            }(r || (r = {})),
            function(e) {
                e.All = "all", e.Network = "network", e.None = "none"
            }(o || (o = {}));
        var a = {
            vodcastHosting: !1,
            enabled: !1,
            strategy: r.Random,
            teamHost: !1,
            raidPreference: o.None
        }
    },
    L3k4: function(e, t, n) {
        var r = n("aIUG"),
            o = n("F6hB");
        e.exports = function(e, t) {
            for (var n = 0, a = (t = r(t, e)).length; null != e && n < a;) e = e[o(t[n++])];
            return n && n == a ? e : void 0
        }
    },
    L4AJ: function(e, t, n) {
        var r = n("F3kA"),
            o = n("MVM9"),
            a = n("iAlu");
        e.exports = function(e, t) {
            return a(o(e, t, r), e + "")
        }
    },
    "M+Mb": function(e, t, n) {
        var r = n("gKqb"),
            o = n("qu3O"),
            a = n("Ao0V"),
            s = n("k6Ms"),
            i = n("bL9o"),
            l = n("mG6l"),
            u = n("mPnA"),
            c = n("YOyG"),
            d = 1,
            h = "[object Arguments]",
            p = "[object Array]",
            f = "[object Object]",
            g = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, m, v, y) {
            var b = l(e),
                S = l(t),
                _ = b ? p : i(e),
                x = S ? p : i(t),
                E = (_ = _ == h ? f : _) == f,
                O = (x = x == h ? f : x) == f,
                w = _ == x;
            if (w && u(e)) {
                if (!u(t)) return !1;
                b = !0, E = !1
            }
            if (w && !E) return y || (y = new r), b || c(e) ? o(e, t, n, m, v, y) : a(e, t, _, n, m, v, y);
            if (!(n & d)) {
                var C = E && g.call(e, "__wrapped__"),
                    j = O && g.call(t, "__wrapped__");
                if (C || j) {
                    var k = C ? e.value() : e,
                        T = j ? t.value() : t;
                    return y || (y = new r), v(k, T, n, m, y)
                }
            }
            return !!w && (y || (y = new r), s(e, t, n, m, v, y))
        }
    },
    M0TM: function(e, t, n) {
        var r = n("Bh6c"),
            o = n("9nrn"),
            a = n("ymQA"),
            s = 200;
        e.exports = function(e, t) {
            var n = this.__data__;
            if (n instanceof r) {
                var i = n.__data__;
                if (!o || i.length < s - 1) return i.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new a(i)
            }
            return n.set(e, t), this.size = n.size, this
        }
    },
    MA13: function(e, t, n) {
        var r = n("MygC")["__core-js_shared__"];
        e.exports = r
    },
    MVM9: function(e, t, n) {
        var r = n("Ii8z"),
            o = Math.max;
        e.exports = function(e, t, n) {
            return t = o(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var a = arguments, s = -1, i = o(a.length - t, 0), l = Array(i); ++s < i;) l[s] = a[t + s];
                    s = -1;
                    for (var u = Array(t + 1); ++s < t;) u[s] = a[s];
                    return u[t] = n(l), r(e, this, u)
                }
        }
    },
    MygC: function(e, t, n) {
        var r = n("1tEs"),
            o = "object" == typeof self && self && self.Object === Object && self,
            a = r || o || Function("return this")();
        e.exports = a
    },
    "N/hX": function(e, t) {},
    NDrF: function(e, t, n) {
        var r = n("CZUI"),
            o = n("6Exb");
        e.exports = function(e, t) {
            var n = o(e, t);
            return r(n) ? n : void 0
        }
    },
    NSoo: function(e, t) {
        e.exports = function(e) {
            return function() {
                return e
            }
        }
    },
    NuOc: function(e, t) {
        var n = Function.prototype.toString;
        e.exports = function(e) {
            if (null != e) {
                try {
                    return n.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
    },
    OScx: function(e, t, n) {
        var r = n("YNJY"),
            o = n("H3TN"),
            a = n("mG6l"),
            s = n("mPnA"),
            i = n("cjOD"),
            l = n("YOyG"),
            u = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var n = a(e),
                c = !n && o(e),
                d = !n && !c && s(e),
                h = !n && !c && !d && l(e),
                p = n || c || d || h,
                f = p ? r(e.length, String) : [],
                g = f.length;
            for (var m in e) !t && !u.call(e, m) || p && ("length" == m || d && ("offset" == m || "parent" == m) || h && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || i(m, g)) || f.push(m);
            return f
        }
    },
    OZxy: function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    },
    OjIq: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("Odds"),
            a = function(e) {
                var t = null;
                return e.title && (t = r.createElement(o._8, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(o.Q, {
                    fontSize: o.V.Size6,
                    color: e.error ? o.K.Error : o.K.Base,
                    bold: !0
                }, e.title))), r.createElement(o._35, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && r.createElement(o.Q, {
                    color: o.K.Error,
                    fontSize: o.V.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    "P/Wu": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                !r && i.return && i.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.default = function(e) {
            var t, n, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return n = t = function(t) {
                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var t = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                    return t.handleStart = function(e) {
                        var n = t.props,
                            r = n.distance,
                            o = n.shouldCancelStart;
                        if (2 === e.button || o(e)) return !1;
                        t._touched = !0, t._pos = {
                            x: e.pageX,
                            y: e.pageY
                        };
                        var a = (0, h.closest)(e.target, function(e) {
                            return null != e.sortableInfo
                        });
                        if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                            var s = t.props.useDragHandle,
                                i = a.sortableInfo,
                                l = i.index,
                                u = i.collection;
                            if (s && !(0, h.closest)(e.target, function(e) {
                                    return null != e.sortableHandle
                                })) return;
                            t.manager.active = {
                                index: l,
                                collection: u
                            }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), r || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                return t.handlePress(e)
                            }, t.props.pressDelay))
                        }
                    }, t.nodeIsChild = function(e) {
                        return e.sortableInfo.manager === t.manager
                    }, t.handleMove = function(e) {
                        var n = t.props,
                            r = n.distance,
                            o = n.pressThreshold;
                        if (!t.state.sorting && t._touched) {
                            t._delta = {
                                x: t._pos.x - e.pageX,
                                y: t._pos.y - e.pageY
                            };
                            var a = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                            r || o && !(o && a >= o) ? r && a >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                        }
                    }, t.handleEnd = function() {
                        var e = t.props.distance;
                        t._touched = !1, e || t.cancel()
                    }, t.cancel = function() {
                        t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                    }, t.handlePress = function(e) {
                        var n = t.manager.getActive();
                        if (n) {
                            var r = t.props,
                                o = r.axis,
                                a = r.getHelperDimensions,
                                s = r.helperClass,
                                i = r.hideSortableGhost,
                                l = r.onSortStart,
                                u = r.useWindowAsScrollContainer,
                                c = n.node,
                                d = n.collection,
                                p = c.sortableInfo.index,
                                g = (0, h.getElementMargin)(c),
                                m = t.container.getBoundingClientRect(),
                                v = a({
                                    index: p,
                                    node: c,
                                    collection: d
                                });
                            t.node = c, t.margin = g, t.width = v.width, t.height = v.height, t.marginOffset = {
                                x: t.margin.left + t.margin.right,
                                y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = c.getBoundingClientRect(), t.containerBoundingRect = m, t.index = p, t.newIndex = p, t.axis = {
                                x: o.indexOf("x") >= 0,
                                y: o.indexOf("y") >= 0
                            }, t.offsetEdge = t.getEdgeOffset(c), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                top: t.scrollContainer.scrollTop,
                                left: t.scrollContainer.scrollLeft
                            }, t.initialWindowScroll = {
                                top: window.pageYOffset,
                                left: window.pageXOffset
                            };
                            var y, b = c.querySelectorAll("input, textarea, select"),
                                S = c.cloneNode(!0),
                                _ = [].concat(f(S.querySelectorAll("input, textarea, select")));
                            if (_.forEach(function(e, t) {
                                    "file" !== e.type && b[t] && (e.value = b[t].value)
                                }), t.helper = t.document.body.appendChild(S), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", i && (t.sortableGhost = c, c.style.visibility = "hidden", c.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (u ? 0 : m.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (u ? t.contentWindow.innerWidth : m.left + m.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (u ? 0 : m.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (u ? t.contentWindow.innerHeight : m.top + m.height) - t.boundingClientRect.top - t.height / 2), s)(y = t.helper.classList).add.apply(y, f(s.split(" ")));
                            t.listenerNode = e.touches ? c : t.contentWindow, h.events.move.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                            }), h.events.end.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                            }), t.setState({
                                sorting: !0,
                                sortingIndex: p
                            }), l && l({
                                node: c,
                                index: p,
                                collection: d
                            }, e)
                        }
                    }, t.handleSortMove = function(e) {
                        var n = t.props.onSortMove;
                        e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                    }, t.handleSortEnd = function(e) {
                        var n = t.props,
                            r = n.hideSortableGhost,
                            o = n.onSortEnd,
                            a = t.manager.active.collection;
                        t.listenerNode && (h.events.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                        }), h.events.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                        })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                        for (var s = t.manager.refs[a], i = 0, l = s.length; i < l; i++) {
                            var u = s[i],
                                c = u.node;
                            u.edgeOffset = null, c.style[h.vendorPrefix + "Transform"] = "", c.style[h.vendorPrefix + "TransitionDuration"] = ""
                        }
                        clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                            sorting: !1,
                            sortingIndex: null
                        }), "function" == typeof o && o({
                            oldIndex: t.index,
                            newIndex: t.newIndex,
                            collection: a
                        }, e), t._touched = !1
                    }, t.autoscroll = function() {
                        var e = t.translate,
                            n = {
                                x: 0,
                                y: 0
                            },
                            r = {
                                x: 1,
                                y: 1
                            },
                            o = {
                                x: 10,
                                y: 10
                            };
                        e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, r.y = o.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, r.x = o.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, r.y = o.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, r.x = o.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                            t.isAutoScrolling = !0;
                            var e = {
                                left: 1 * r.x * n.x,
                                top: 1 * r.y * n.y
                            };
                            t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                        }, 5))
                    }, t.manager = new d.default, t.events = {
                        start: t.handleStart,
                        move: t.handleMove,
                        end: t.handleEnd
                    }, (0, c.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(n, t), a(n, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            manager: this.manager
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.getContainer,
                            r = t.useWindowAsScrollContainer,
                            o = this.props.contentWindow || window;
                        this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, u.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = r ? this.document.body : this.container, this.contentWindow = "function" == typeof o ? o() : o;
                        var a = function(t) {
                            e.events.hasOwnProperty(t) && h.events[t].forEach(function(n) {
                                return e.container.addEventListener(n, e.events[t], !1)
                            })
                        };
                        for (var s in this.events) a(s)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this,
                            t = function(t) {
                                e.events.hasOwnProperty(t) && h.events[t].forEach(function(n) {
                                    return e.container.removeEventListener(n, e.events[t])
                                })
                            };
                        for (var n in this.events) t(n)
                    }
                }, {
                    key: "getEdgeOffset",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            top: 0,
                            left: 0
                        };
                        if (e) {
                            var n = {
                                top: t.top + e.offsetTop,
                                left: t.left + e.offsetLeft
                            };
                            return e.parentNode !== this.container ? this.getEdgeOffset(e.parentNode, n) : n
                        }
                    }
                }, {
                    key: "getOffset",
                    value: function(e) {
                        return {
                            x: e.touches ? e.touches[0].pageX : e.pageX,
                            y: e.touches ? e.touches[0].pageY : e.pageY
                        }
                    }
                }, {
                    key: "getLockPixelOffsets",
                    value: function() {
                        var e = this.props.lockOffset;
                        Array.isArray(e) || (e = [e, e]), (0, c.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                        var t = e,
                            n = o(t, 2),
                            r = n[0],
                            a = n[1];
                        return [this.getLockPixelOffset(r), this.getLockPixelOffset(a)]
                    }
                }, {
                    key: "getLockPixelOffset",
                    value: function(e) {
                        var t = e,
                            n = e,
                            r = "px";
                        if ("string" == typeof e) {
                            var o = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                            (0, c.default)(null !== o, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), r = o[1]
                        }
                        return (0, c.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === r && (t = t * this.width / 100, n = n * this.height / 100), {
                            x: t,
                            y: n
                        }
                    }
                }, {
                    key: "updatePosition",
                    value: function(e) {
                        var t = this.props,
                            n = t.lockAxis,
                            r = t.lockToContainerEdges,
                            a = this.getOffset(e),
                            s = {
                                x: a.x - this.initialOffset.x,
                                y: a.y - this.initialOffset.y
                            };
                        if (s.y -= window.pageYOffset - this.initialWindowScroll.top, s.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = s, r) {
                            var i = this.getLockPixelOffsets(),
                                l = o(i, 2),
                                u = l[0],
                                c = l[1],
                                d = {
                                    x: this.width / 2 - u.x,
                                    y: this.height / 2 - u.y
                                },
                                p = {
                                    x: this.width / 2 - c.x,
                                    y: this.height / 2 - c.y
                                };
                            s.x = (0, h.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - p.x, s.x), s.y = (0, h.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - p.y, s.y)
                        }
                        "x" === n ? s.y = 0 : "y" === n && (s.x = 0), this.helper.style[h.vendorPrefix + "Transform"] = "translate3d(" + s.x + "px," + s.y + "px, 0)"
                    }
                }, {
                    key: "animateNodes",
                    value: function() {
                        var e = this.props,
                            t = e.transitionDuration,
                            n = e.hideSortableGhost,
                            r = this.manager.getOrderedRefs(),
                            o = {
                                left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                top: this.scrollContainer.scrollTop - this.initialScroll.top
                            },
                            a = {
                                left: this.offsetEdge.left + this.translate.x + o.left,
                                top: this.offsetEdge.top + this.translate.y + o.top
                            },
                            s = {
                                top: window.pageYOffset - this.initialWindowScroll.top,
                                left: window.pageXOffset - this.initialWindowScroll.left
                            };
                        this.newIndex = null;
                        for (var i = 0, l = r.length; i < l; i++) {
                            var u = r[i].node,
                                c = u.sortableInfo.index,
                                d = u.offsetWidth,
                                p = u.offsetHeight,
                                f = {
                                    width: this.width > d ? d / 2 : this.width / 2,
                                    height: this.height > p ? p / 2 : this.height / 2
                                },
                                g = {
                                    x: 0,
                                    y: 0
                                },
                                m = r[i].edgeOffset;
                            m || (r[i].edgeOffset = m = this.getEdgeOffset(u));
                            var v = i < r.length - 1 && r[i + 1],
                                y = i > 0 && r[i - 1];
                            v && !v.edgeOffset && (v.edgeOffset = this.getEdgeOffset(v.node)), c !== this.index ? (t && (u.style[h.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? c < this.index && (a.left + s.left - f.width <= m.left && a.top + s.top <= m.top + f.height || a.top + s.top + f.height <= m.top) ? (g.x = this.width + this.marginOffset.x, m.left + g.x > this.containerBoundingRect.width - f.width && (g.x = v.edgeOffset.left - m.left, g.y = v.edgeOffset.top - m.top), null === this.newIndex && (this.newIndex = c)) : c > this.index && (a.left + s.left + f.width >= m.left && a.top + s.top + f.height >= m.top || a.top + s.top + f.height >= m.top + p) && (g.x = -(this.width + this.marginOffset.x), m.left + g.x < this.containerBoundingRect.left + f.width && (g.x = y.edgeOffset.left - m.left, g.y = y.edgeOffset.top - m.top), this.newIndex = c) : c > this.index && a.left + s.left + f.width >= m.left ? (g.x = -(this.width + this.marginOffset.x), this.newIndex = c) : c < this.index && a.left + s.left <= m.left + f.width && (g.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = c)) : this.axis.y && (c > this.index && a.top + s.top + f.height >= m.top ? (g.y = -(this.height + this.marginOffset.y), this.newIndex = c) : c < this.index && a.top + s.top <= m.top + f.height && (g.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = c))), u.style[h.vendorPrefix + "Transform"] = "translate3d(" + g.x + "px," + g.y + "px,0)") : n && (this.sortableGhost = u, u.style.visibility = "hidden", u.style.opacity = 0)
                        }
                        null == this.newIndex && (this.newIndex = this.index)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, c.default)(p.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = p.withRef ? "wrappedInstance" : null;
                        return i.default.createElement(e, r({
                            ref: t
                        }, (0, h.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                    }
                }]), n
            }(s.Component), t.displayName = (0, h.provideDisplayName)("sortableList", e), t.defaultProps = {
                axis: "y",
                transitionDuration: 300,
                pressDelay: 0,
                pressThreshold: 5,
                distance: 0,
                useWindowAsScrollContainer: !1,
                hideSortableGhost: !0,
                shouldCancelStart: function(e) {
                    if (-1 !== ["input", "textarea", "select", "option", "button"].indexOf(e.target.tagName.toLowerCase())) return !0
                },
                lockToContainerEdges: !1,
                lockOffset: "50%",
                getHelperDimensions: function(e) {
                    var t = e.node;
                    return {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }
            }, t.propTypes = {
                axis: l.default.oneOf(["x", "y", "xy"]),
                distance: l.default.number,
                lockAxis: l.default.string,
                helperClass: l.default.string,
                transitionDuration: l.default.number,
                contentWindow: l.default.any,
                onSortStart: l.default.func,
                onSortMove: l.default.func,
                onSortEnd: l.default.func,
                shouldCancelStart: l.default.func,
                pressDelay: l.default.number,
                useDragHandle: l.default.bool,
                useWindowAsScrollContainer: l.default.bool,
                hideSortableGhost: l.default.bool,
                lockToContainerEdges: l.default.bool,
                lockOffset: l.default.oneOfType([l.default.number, l.default.string, l.default.arrayOf(l.default.oneOfType([l.default.number, l.default.string]))]),
                getContainer: l.default.func,
                getHelperDimensions: l.default.func
            }, t.childContextTypes = {
                manager: l.default.object.isRequired
            }, n
        };
        var s = n("GiK3"),
            i = p(s),
            l = p(n("qUKr")),
            u = n("O27J"),
            c = p(n("crWv")),
            d = p(n("xKuy")),
            h = n("Vgej");

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
    },
    PWbw: function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    QG23: function(e, t, n) {
        var r = n("w1Jz"),
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return r ? void 0 !== t[e] : o.call(t, e)
        }
    },
    QQy1: function(e, t, n) {
        var r = n("mG6l"),
            o = n("SCwa"),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            s = /^\w*$/;
        e.exports = function(e, t) {
            if (r(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || s.test(e) || !a.test(e) || null != t && e in Object(t)
        }
    },
    QxUn: function(e, t, n) {
        var r = n("w1Jz"),
            o = "__lodash_hash_undefined__";
        e.exports = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? o : t, this
        }
    },
    ROCN: function(e, t, n) {
        var r = n("idL5"),
            o = 500;
        e.exports = function(e) {
            var t = r(e, function(e) {
                    return n.size === o && n.clear(), e
                }),
                n = t.cache;
            return t
        }
    },
    Ro3v: function(e, t, n) {
        var r = n("0e1M"),
            o = n("Czj7");
        e.exports = function(e, t) {
            var n = -1,
                a = o(e) ? Array(e.length) : [];
            return r(e, function(e, r, o) {
                a[++n] = t(e, r, o)
            }), a
        }
    },
    SCwa: function(e, t, n) {
        var r = n("43dD"),
            o = n("VGcK"),
            a = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || o(e) && r(e) == a
        }
    },
    SR0I: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("Odds"),
            a = function(e) {
                return r.createElement(o._35, {
                    borderTop: !0
                }, r.createElement(o._6, {
                    linkTo: e.linkTo,
                    alpha: !0
                }, r.createElement(o._35, {
                    padding: 2,
                    alignItems: o.c.Center,
                    display: o.R.Flex,
                    flexWrap: o.U.NoWrap
                }, r.createElement(o._8, {
                    flexGrow: 1
                }, r.createElement(o.Q, {
                    fontSize: o.V.Size6,
                    bold: !0
                }, e.text), r.createElement(o.Q, {
                    type: o._49.Span
                }, e.description)), r.createElement(o._8, null, r.createElement(o._24, {
                    asset: o._25.AngleRight
                })))))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    SVcC: function(e, t, n) {
        var r = n("KYFq"),
            o = 1 / 0,
            a = 1.7976931348623157e308;
        e.exports = function(e) {
            return e ? (e = r(e)) === o || e === -o ? (e < 0 ? -1 : 1) * a : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    SjFU: function(e, t, n) {
        var r = n("+cPc"),
            o = n("Fbrx"),
            a = n("F3kA"),
            s = n("mG6l"),
            i = n("JYjH");
        e.exports = function(e) {
            return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? s(e) ? o(e[0], e[1]) : r(e) : i(e)
        }
    },
    TJLs: function(e, t) {},
    U2kw: function(e, t, n) {
        var r = n("43dD"),
            o = n("kl/u"),
            a = "[object AsyncFunction]",
            s = "[object Function]",
            i = "[object GeneratorFunction]",
            l = "[object Proxy]";
        e.exports = function(e) {
            if (!o(e)) return !1;
            var t = r(e);
            return t == s || t == i || t == a || t == l
        }
    },
    "UT8+": function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
    },
    UWcj: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            o = n("GiK3"),
            a = n("RH2O"),
            s = n("2KeS"),
            i = n("V5M+"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t,
                            n = function(t) {
                                function n() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return r.__extends(n, t), n.prototype.render = function() {
                                    return e.props.triggerModal(e.closeModal)
                                }, n
                            }(o.Component);
                        t.props.showModal(n, {})
                    }, t.closeModal = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.children(this.openModal)
                }, t
            }(o.Component);
        var u = Object(a.b)(null, function(e) {
            return Object(s.b)({
                showModal: i.d,
                closeModal: i.c
            }, e)
        })(l);
        n.d(t, "a", function() {
            return u
        })
    },
    VEC5: function(e, t) {
        e.exports = function(e, t, n, r) {
            for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o;)
                if (t(e[a], a, e)) return a;
            return -1
        }
    },
    VGcK: function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    Vgej: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = function(e, t, n) {
            var r = e.slice(0);
            if (n >= r.length)
                for (var o = n - r.length; 1 + o--;) r.push(void 0);
            return r.splice(n, 0, r.splice(t, 1)[0]), r
        }, t.omit = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return Object.keys(e).reduce(function(t, r) {
                return -1 === n.indexOf(r) && (t[r] = e[r]), t
            }, {})
        }, t.closest = function(e, t) {
            for (; e;) {
                if (t(e)) return e;
                e = e.parentNode
            }
        }, t.limit = function(e, t, n) {
            if (n < e) return e;
            if (n > t) return t;
            return n
        }, t.getElementMargin = function(e) {
            var t = window.getComputedStyle(e);
            return {
                top: r(t.marginTop),
                right: r(t.marginRight),
                bottom: r(t.marginBottom),
                left: r(t.marginLeft)
            }
        }, t.provideDisplayName = function(e, t) {
            var n = t.displayName || t.name;
            return n ? e + "(" + n + ")" : e
        };
        t.events = {
            start: ["touchstart", "mousedown"],
            move: ["touchmove", "mousemove"],
            end: ["touchend", "touchcancel", "mouseup"]
        }, t.vendorPrefix = function() {
            if ("undefined" == typeof window || "undefined" == typeof document) return "";
            var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
            switch (t) {
                case "ms":
                    return "ms";
                default:
                    return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
            }
        }();

        function r(e) {
            return "px" === e.substr(-2) ? parseFloat(e) : 0
        }
    },
    WFpE: function(e, t, n) {
        var r = n("SCwa");
        e.exports = function(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    o = null === e,
                    a = e == e,
                    s = r(e),
                    i = void 0 !== t,
                    l = null === t,
                    u = t == t,
                    c = r(t);
                if (!l && !c && !s && e > t || s && i && u && !l && !c || o && i && u || !n && u || !a) return 1;
                if (!o && !s && !c && e < t || c && n && a && !o && !s || l && n && a || !i && a || !u) return -1
            }
            return 0
        }
    },
    WgcH: function(e, t) {},
    WlEI: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    YNJY: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
    },
    YOyG: function(e, t, n) {
        var r = n("y5ks"),
            o = n("usEs"),
            a = n("skb1"),
            s = a && a.isTypedArray,
            i = s ? o(s) : r;
        e.exports = i
    },
    Zfct: function(e, t, n) {
        var r = n("oDbm"),
            o = n("Bh6c"),
            a = n("9nrn");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new r,
                map: new(a || o),
                string: new r
            }
        }
    },
    "a/6q": function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            return r(this, e).has(e)
        }
    },
    aIUG: function(e, t, n) {
        var r = n("mG6l"),
            o = n("QQy1"),
            a = n("D4QM"),
            s = n("kdNP");
        e.exports = function(e, t) {
            return r(e) ? e : o(e, t) ? [e] : a(s(e))
        }
    },
    am5H: function(e, t, n) {
        var r = n("kl/u");
        e.exports = function(e) {
            return e == e && !r(e)
        }
    },
    bL9o: function(e, t, n) {
        var r = n("t3nn"),
            o = n("9nrn"),
            a = n("uS5W"),
            s = n("57tO"),
            i = n("FvmC"),
            l = n("43dD"),
            u = n("NuOc"),
            c = u(r),
            d = u(o),
            h = u(a),
            p = u(s),
            f = u(i),
            g = l;
        (r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || o && "[object Map]" != g(new o) || a && "[object Promise]" != g(a.resolve()) || s && "[object Set]" != g(new s) || i && "[object WeakMap]" != g(new i)) && (g = function(e) {
            var t = l(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? u(n) : "";
            if (r) switch (r) {
                case c:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case h:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case f:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = g
    },
    cXqt: function(e, t, n) {
        var r = n("ymQA"),
            o = n("o3xN"),
            a = n("2urJ");

        function s(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new r; ++t < n;) this.add(e[t])
        }
        s.prototype.add = s.prototype.push = o, s.prototype.has = a, e.exports = s
    },
    cjOD: function(e, t) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            return !!(t = null == t ? n : t) && ("number" == typeof e || r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    deXC: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            o = n("GiK3"),
            a = n("gLfK"),
            s = n("Jo6h"),
            i = n("Odds"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? o.createElement(i._14, null) : o.createElement(i._8, null, o.createElement(i._51, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            name: t.props.name,
                            id: t.props.id
                        }), o.createElement(a.a, {
                            text: t.props.description,
                            extraText: t.props.extraDescription
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(s.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: i.X.Horizontal
                    }, this.renderBody())
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return l
        })
    },
    eGfi: function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e, t) {
            var n = this.__data__,
                o = r(n, e);
            return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
        }
    },
    eWqu: function(e, t, n) {
        var r = n("CTFd"),
            o = n("HMFB");
        e.exports = function(e, t) {
            return e && r(e, t, o)
        }
    },
    eXGG: function(e, t, n) {
        "use strict";
        var r = function(e) {};
        e.exports = function(e, t, n, o, a, s, i, l) {
            if (r(t), !e) {
                var u;
                if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [n, o, a, s, i, l],
                        d = 0;
                    (u = new Error(t.replace(/%s/g, function() {
                        return c[d++]
                    }))).name = "Invariant Violation"
                }
                throw u.framesToPop = 1, u
            }
        }
    },
    enQx: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    f2K8: function(e, t, n) {
        "use strict";
        var r = n("+fHz");
        n.n(r);
        n.o(r, "AutohostStrategy") && n.d(t, "AutohostStrategy", function() {
            return r.AutohostStrategy
        }), n.o(r, "ChommentsPublishingMode") && n.d(t, "ChommentsPublishingMode", function() {
            return r.ChommentsPublishingMode
        }), n.o(r, "DEFAULT_AUTOHOST_SETTINGS") && n.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
            return r.DEFAULT_AUTOHOST_SETTINGS
        }), n.o(r, "DEFAULT_VIDEO_MODERATION_SETTINGS") && n.d(t, "DEFAULT_VIDEO_MODERATION_SETTINGS", function() {
            return r.DEFAULT_VIDEO_MODERATION_SETTINGS
        }), n.o(r, "FollowersDurationSeconds") && n.d(t, "FollowersDurationSeconds", function() {
            return r.FollowersDurationSeconds
        }), n.o(r, "RaidPreference") && n.d(t, "RaidPreference", function() {
            return r.RaidPreference
        }), n.o(r, "RequestState") && n.d(t, "RequestState", function() {
            return r.RequestState
        });
        var o = n("s6nI");
        n.d(t, "RequestState", function() {
            return o.a
        });
        var a = n("Kc4v");
        n.d(t, "AutohostStrategy", function() {
            return a.a
        }), n.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
            return a.b
        }), n.d(t, "RaidPreference", function() {
            return a.c
        });
        var s = n("uVWv");
        n.d(t, "ChommentsPublishingMode", function() {
            return s.a
        }), n.d(t, "DEFAULT_VIDEO_MODERATION_SETTINGS", function() {
            return s.b
        }), n.d(t, "FollowersDurationSeconds", function() {
            return s.c
        })
    },
    fXkM: function(e, t) {
        e.exports = function(e, t) {
            return null != e && t in Object(e)
        }
    },
    fqzE: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DropsSettingsForm_GetUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 79
            }
        };
        n.loc.source = {
            body: "query DropsSettingsForm_GetUser($login: String!) {\nuser(login: $login) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "g/lL": function(e, t, n) {
        var r = n("INOA"),
            o = n("mG6l");
        e.exports = function(e, t, n) {
            var a = t(e);
            return o(e) ? a : r(a, n(e))
        }
    },
    gIJZ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            o = n("Aj/L"),
            a = n("TToO"),
            s = n("GiK3"),
            i = n("CIox"),
            l = n("F8kA"),
            u = n("zCIC"),
            c = n("X4PA"),
            d = n("3zLD"),
            h = n("6sO2"),
            p = n("j7/Y"),
            f = n("w9tK"),
            g = n("vH/s"),
            m = n("CSlQ"),
            v = n("5EkD"),
            y = n("OjIq"),
            b = n("GH+X"),
            S = n("LIeg"),
            _ = n("i61F"),
            x = n("HM6l"),
            E = n("9u8h"),
            O = n("5LoI"),
            w = n("MAZT");

        function C(e) {
            var t = e.settings;
            return {
                vodcastHosting: !t.deprioritize_vodcast,
                enabled: t.enabled,
                strategy: t.strategy,
                teamHost: t.team_host,
                raidPreference: t.can_be_raided_by
            }
        }
        var j = n("6BvN"),
            k = function(e, t, n, r) {
                if (t) {
                    var o = document.querySelectorAll(".autohost-list-item");
                    if (!(o.length < 1)) {
                        var a = document.activeElement,
                            s = Array.prototype.indexOf.call(o, a),
                            i = s;
                        switch (e) {
                            case j.a.Space:
                                return n ? (r && (o.item(r).tabIndex = 0), {
                                    isSorting: !1,
                                    selectedIndex: null
                                }) : s >= 0 ? (o.item(s).tabIndex = -1, {
                                    isSorting: !0,
                                    selectedIndex: s
                                }) : void 0;
                            case j.a.Up:
                                if (0 === s) return;
                                i = s < 0 ? o.length - 1 : s - 1;
                                break;
                            case j.a.Down:
                                if ((i = s + 1) >= o.length) return;
                                break;
                            default:
                                return
                        }
                        if (!n) {
                            var l = o.item(i);
                            l.focus(), l.tabIndex = 0, r && (o.item(r).tabIndex = -1)
                        }
                        if (null !== r) {
                            var u = Object(_.arrayMove)(t, s, i);
                            return n ? {
                                autohostChannels: u,
                                selectedIndex: i
                            } : {
                                autohostChannels: u
                            }
                        }
                    }
                }
            },
            T = function(e, t) {
                return !(e !== j.a.Space || !t)
            },
            P = n("f2K8");

        function D(e) {
            return {
                publishingMode: e.publishing_mode,
                followersOnlyDurationSeconds: e.followers_only_duration_seconds || P.FollowersDurationSeconds.Off
            }
        }
        var M = n("5Y57"),
            A = n("kqTE"),
            I = n("HW6M"),
            R = n("5kgt"),
            F = n("puy8"),
            N = n("Odds"),
            L = (n("x3dg"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1
                    }, t.onRemoveClick = function() {
                        t.props.onRemoveClick(t.props.user)
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = Object(h.d)("Remove", "AutohostListItem"),
                        t = !this.props.isSorting && this.state.hovered,
                        n = {
                            "autohost-list-item": !0,
                            "autohost-list-item--hovered": t,
                            "autohost-list-item--selected": this.props.selected
                        },
                        r = null;
                    (t || this.props.selected) && (r = s.createElement(N._8, {
                        className: "autohost-list-item--remove",
                        padding: {
                            right: 1
                        },
                        display: N.R.Flex,
                        attachRight: !0
                    }, s.createElement(N._52, {
                        label: e,
                        direction: N._54.Left
                    }, s.createElement(N.w, {
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: N._25.Trash,
                        onClick: this.onRemoveClick,
                        overlay: !0
                    }))));
                    var o = this.props.user.avatar || Object(F.c)(this.props.user.id, 64);
                    return s.createElement(N._2, a.__assign({
                        className: I(n),
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(R.a)(this.props)), s.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        tabIndex: -1
                    }, s.createElement(N.C, {
                        row: !0
                    }, s.createElement(N._8, {
                        className: "autohost-list-item__avatar"
                    }, s.createElement(N.k, {
                        ratio: N.l.Aspect1x1
                    }, s.createElement("img", {
                        alt: this.props.user.name,
                        src: o,
                        draggable: !1
                    }))), s.createElement(N._8, {
                        flexGrow: 1,
                        display: N.R.Flex,
                        position: N._15.Relative
                    }, s.createElement(N._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, s.createElement(N.Q, {
                        type: N._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), r)))
                }, t
            }(s.Component)),
            K = Object(_.SortableElement)(function(e) {
                return s.createElement(L, a.__assign({}, e))
            }),
            q = (n("N/hX"), function(e) {
                return s.createElement(u.b, {
                    className: "autohost-list-edit",
                    suppressScrollX: !0
                }, s.createElement("ul", {
                    onKeyDown: e.onKeyDown,
                    role: "listbox",
                    tabIndex: 0,
                    "data-test-selector": "AUTO_HOST_LIST_SELECTOR"
                }, e.autohostChannels && e.autohostChannels.map(function(t, n) {
                    return s.createElement("li", {
                        key: t.id
                    }, s.createElement(K, {
                        user: t,
                        index: n,
                        onRemoveClick: e.onHostRemoved,
                        isSorting: e.isSorting,
                        selected: e.selectedIndex === n
                    }))
                })))
            }),
            H = Object(_.SortableContainer)(function(e) {
                return s.createElement(q, a.__assign({}, e))
            }),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onAddClick = function() {
                        t.props.onAddClick(t.props.user)
                    }, t.onAddedClick = function() {
                        t.props.onAddedClick(t.props.user)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    e = this.props.user.added ? s.createElement(N.v, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: N._25.Check,
                        statusAlertIcon: N._25.Trash,
                        statusAlertText: Object(h.d)("Remove", "AutohostUserResultCard")
                    }, Object(h.d)("Added", "AutohostUserResultCard")) : s.createElement(N.v, {
                        type: N.B.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(h.d)("Add", "AutohostUserResultCard"));
                    var t = this.props.user.avatar || Object(F.c)(this.props.user.id, 64);
                    return s.createElement(N._8, a.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(R.a)(this.props)), s.createElement(N.C, {
                        row: !0
                    }, s.createElement(N.E, {
                        alt: this.props.user.name,
                        src: t,
                        size: N.F.Size4,
                        aspect: N.l.Aspect1x1
                    }), s.createElement(N._8, {
                        flexGrow: 1,
                        display: N.R.Flex,
                        position: N._15.Relative
                    }, s.createElement(N._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, s.createElement(N.Q, {
                        type: N._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(s.Component),
            G = (n("qhiD"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userSearch = null, t.setUserSearchRef = function(e) {
                        t.userSearch = e
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                }, t.prototype.render = function() {
                    var e = this,
                        t = null;
                    return this.props.isWaiting ? t = s.createElement(N._10, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return s.createElement(A.a, {
                            key: t.id
                        }, s.createElement(U, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), s.createElement(N._8, {
                        className: "autohost-list",
                        alignContent: N.b.Center
                    }, s.createElement(N._8, {
                        position: N._15.Relative,
                        margin: {
                            y: 1
                        }
                    }, s.createElement(M.a, {
                        onChange: this.props.onUserInputChange,
                        onFocusInput: this.props.onFocusInput,
                        ref: this.setUserSearchRef,
                        placeholder: Object(h.d)("Search channels to host", "AutohostList"),
                        balloonProps: {
                            show: this.props.isUserSearchOpen,
                            direction: N.r.Bottom,
                            size: N.s.Large
                        },
                        onClose: this.props.onSearchClose,
                        isErrored: this.props.isSearchErrored
                    }, s.createElement(N._8, {
                        className: "autohost-list__user-search"
                    }, s.createElement(u.b, {
                        contentClassName: "autohost-list__user-search-content",
                        suppressScrollX: !0
                    }, s.createElement(N._8, {
                        fullWidth: !0
                    }, t, s.createElement(u.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), s.createElement(H, {
                        onHostRemoved: this.props.onHostRemoved,
                        autohostChannels: this.props.autohostChannels,
                        onSortEnd: this.props.onSortEnd,
                        lockToContainerEdges: !0,
                        lockAxis: "y",
                        helperClass: "autohost-list-item--selected",
                        onSortStart: this.props.onSortStart,
                        isSorting: this.props.isSorting,
                        selectedIndex: this.props.selectedIndex,
                        distance: 20,
                        onKeyDown: this.props.onKeyDown
                    }))
                }, t
            }(s.Component)),
            z = 100,
            W = "/kraken/streams/recommended",
            V = "kraken/autohost/list",
            B = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        userResults: [],
                        userTerm: "",
                        isUserSearchOpen: !1,
                        queryID: "",
                        isWaiting: !1,
                        autohostChannels: [],
                        recommendedChannels: null,
                        currentPage: 0,
                        selectedIndex: null
                    }, n.onUserInputChange = function(e) {
                        if (n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.onUserInput(), !e) return n.setRecommendedChannels(), void n.setState(function() {
                            return {
                                userTerm: "",
                                isWaiting: !1,
                                currentPage: 0
                            }
                        });
                        n.setState({
                            userTerm: e,
                            userResults: [],
                            isWaiting: !0,
                            currentPage: 0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doUserSearch(e)
                        }, z)
                    }, n.loadMore = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r, o;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, t = null, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Users, this.state.userTerm, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), h.j.error(n, "Algolia page search failed"), this.setState({
                                            isUserSearchOpen: !0
                                        }), this.props.onError(""), [2];
                                    case 4:
                                        return t && t.users ? (r = this.deserializeUserResults(t), o = t.exhaustedHits, this.setState(function(t) {
                                            return {
                                                userResults: t.userResults.concat(r),
                                                isUserSearchOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: o
                                            }
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, n.addChannel = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, o = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, E.a.putOrThrow(V, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), r = Object(h.d)("Unable to add user to auto host list", "AutohostList"), h.j.error(n, r, {
                                            target: e
                                        }), this.props.onError(r), [2];
                                    case 4:
                                        return this.setState(function(t) {
                                            return {
                                                userResults: o.updateAdded(t.userResults, e.id, !0) || [],
                                                recommendedChannels: o.updateAdded(t.recommendedChannels, e.id, !0),
                                                autohostChannels: t.autohostChannels.concat([e])
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, n.onFocusInput = function() {
                        n.state.userTerm ? n.state.isUserSearchOpen || n.setState({
                            isUserSearchOpen: !0
                        }) : n.setRecommendedChannels()
                    }, n.setRecommendedChannels = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r = this;
                            return a.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.state.recommendedChannels) return this.setState(function(e) {
                                            return {
                                                userResults: e.recommendedChannels || [],
                                                isUserSearchOpen: !0
                                            }
                                        }), [2];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, E.a.getOrThrow(W)];
                                    case 2:
                                        return e = o.sent(), [3, 4];
                                    case 3:
                                        return t = o.sent(), h.j.error(t, "Unable to retrieve recomended channels"), [2];
                                    case 4:
                                        return e.body && (n = e.body.recommended_streams.map(function(e) {
                                            var t = String(e.channel._id);
                                            return {
                                                id: t,
                                                name: e.channel.display_name,
                                                login: e.channel.name,
                                                avatar: e.channel.logo,
                                                added: !!r.state.autohostChannels.find(function(e) {
                                                    return e.id === t
                                                })
                                            }
                                        }), this.setState({
                                            recommendedChannels: n,
                                            userResults: n,
                                            isUserSearchOpen: !0
                                        })), [2]
                                }
                            })
                        })
                    }, n.onSearchClose = function() {
                        n.setState({
                            isUserSearchOpen: !1
                        })
                    }, n.fetchChannelsList = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r;
                            return a.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, E.a.getOrThrow(V)];
                                    case 1:
                                        return e = o.sent(), [3, 3];
                                    case 2:
                                        return t = o.sent(), n = Object(h.d)("Unable to fetch auto host list", "AutohostList"), h.j.error(t, n), this.props.onError(n), [2];
                                    case 3:
                                        return e.body && (r = e.body.targets.map(function(e) {
                                            return {
                                                id: String(e._id),
                                                name: e.display_name,
                                                login: e.name,
                                                avatar: e.logo
                                            }
                                        }), this.setState({
                                            autohostChannels: r
                                        })), [2]
                                }
                            })
                        })
                    }, n.removeChannel = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, o, s, i = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        if (this.setState({
                                                isSorting: !1,
                                                selectedIndex: null
                                            }), t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, E.a.deleteOrThrow(V)];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.reportChannelError(e, n), [2];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (t = this.state.autohostChannels.slice(), (r = t.findIndex(function(t) {
                                                return e.id === t.id
                                            })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                        t.splice(r, 1), o = t.map(function(e) {
                                            return e.id
                                        }), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, E.a.putOrThrow(V, {
                                            body: {
                                                targets: o.join(",")
                                            }
                                        })];
                                    case 7:
                                        return a.sent(), [3, 9];
                                    case 8:
                                        return s = a.sent(), this.reportChannelError(e, s), [2];
                                    case 9:
                                        return this.setState(function(n) {
                                            return {
                                                userResults: i.updateAdded(n.userResults, e.id, !1) || [],
                                                recommendedChannels: i.updateAdded(n.recommendedChannels, e.id, !1),
                                                autohostChannels: t
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, n.updateAdded = function(e, t, n) {
                        var r = e ? e.findIndex(function(e) {
                                return t === e.id
                            }) : -1,
                            o = e;
                        return e && r >= 0 && (o = S(e, function(e) {
                            return e[r]
                        }, function(e) {
                            return e.added = n, e
                        })), o
                    }, n.onKeyDown = function(e) {
                        var t = k(e.keyCode, n.state.autohostChannels, n.state.isSorting, n.state.selectedIndex);
                        t && n.setState(t), T(e.keyCode, n.state.isSorting) && n.updateList(n.state.autohostChannels)
                    }, n.onChannelOrderChange = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                return e.newIndex === e.oldIndex ? (this.setState({
                                    isSorting: !1
                                }), [2]) : (t = Object(_.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                    autohostChannels: t,
                                    isSorting: !1
                                }), this.updateList(t), [2])
                            })
                        })
                    }, n.onChannelOrderChangeStart = function() {
                        return n.setState({
                            isSorting: !0
                        })
                    }, n.searchClient = new w.a({
                        appId: h.a.algoliaApplicationID,
                        apiKey: h.a.algoliaAPIKey,
                        apolloClient: h.o.apollo.client,
                        logger: h.j,
                        config: h.a
                    }), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return s.createElement(G, {
                        onUserInputChange: this.onUserInputChange,
                        isUserSearchOpen: this.state.isUserSearchOpen,
                        userResults: this.state.userResults,
                        onHostAdded: this.addChannel,
                        onFocusInput: this.onFocusInput,
                        autohostChannels: this.state.autohostChannels,
                        onHostRemoved: this.removeChannel,
                        isSearchErrored: this.props.isSearchErrored,
                        isWaiting: this.state.isWaiting,
                        onSearchClose: this.onSearchClose,
                        loadMore: this.loadMore,
                        onSortEnd: this.onChannelOrderChange,
                        onSortStart: this.onChannelOrderChangeStart,
                        isSorting: this.state.isSorting,
                        onKeyDown: this.onKeyDown,
                        selectedIndex: this.state.selectedIndex
                    })
                }, t.prototype.doUserSearch = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, o;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(x.a)(), this.setState({
                                        queryID: t
                                    }), n = null, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Users, e, t)];
                                case 2:
                                    return n = a.sent(), [3, 4];
                                case 3:
                                    return r = a.sent(), h.j.error(r, "Algolia autohost user search failed"), this.setState({
                                        isWaiting: !1,
                                        isUserSearchOpen: !0
                                    }), this.props.onError(""), [2];
                                case 4:
                                    return n && n.users ? (o = this.deserializeUserResults(n), this.setState({
                                        userResults: o,
                                        isUserSearchOpen: !0,
                                        isWaiting: !1,
                                        exhaustedHits: n.exhaustedHits,
                                        queryID: ""
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.prototype.deserializeUserResults = function(e) {
                    var t = this;
                    return e.users ? e.users.hits.filter(function(e) {
                        return !t.props.user || e.objectID !== t.props.user.id
                    }).map(function(e) {
                        return {
                            id: e.objectID,
                            avatar: e.profile_image,
                            name: e.name,
                            login: e.login,
                            added: !!t.state.autohostChannels.find(function(t) {
                                return t.id === e.objectID
                            })
                        }
                    }) : []
                }, t.prototype.reportChannelError = function(e, t) {
                    var n = Object(h.d)("Unable to remove channel from auto host list", "AutohostList");
                    h.j.error(t, n, {
                        target: e
                    }), this.props.onError(n)
                }, t.prototype.updateList = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, r;
                        return a.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    t = e.map(function(e) {
                                        return e.id
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, E.a.putOrThrow(V, {
                                        body: {
                                            targets: t.join(",")
                                        }
                                    })];
                                case 2:
                                    return o.sent(), [3, 4];
                                case 3:
                                    return n = o.sent(), r = Object(h.d)("Unable to re order auto host list", "AutohostList"), h.j.error(n, r), this.props.onError(r), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(s.Component);
        var Q, J = Object(r.b)(function(e) {
                return {
                    user: Object(o.c)(e)
                }
            })(B),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autohostError: void 0
                    }, t.handleAutohostError = function(e) {
                        t.setState({
                            autohostError: e
                        })
                    }, t.handleAutohostInput = function() {
                        t.setState({
                            autohostError: void 0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(N._8, null, s.createElement(v.a, {
                        title: Object(h.d)("Host list", "AuthohostListPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings"
                    }), s.createElement(b.a, null, s.createElement(y.a, {
                        error: !!this.state.autohostError,
                        errorMessage: this.state.autohostError
                    }, s.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Center
                    }, s.createElement(J, {
                        onError: this.handleAutohostError,
                        onUserInput: this.handleAutohostInput,
                        isSearchErrored: !!this.state.autohostError
                    })))))
                }, t
            }(s.Component),
            X = Object(d.compose)(Object(m.d)("AutohostListPage", {
                autoReportInteractive: !0,
                destination: f.a.AutohostSettings
            }), Object(p.a)({
                location: g.PageviewLocation.AutohostSettings
            }))(Y),
            $ = n("7vx8"),
            Z = n("AQc/"),
            ee = n("Jo6h"),
            te = n("SR0I"),
            ne = n("deXC"),
            re = n("s6nI"),
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleToggleEnabled = function(e) {
                        t.props.saveSettings({
                            enabled: e
                        })
                    }, t.handleToggleTeamHost = function(e) {
                        t.props.saveSettings({
                            teamHost: e
                        })
                    }, t.handleToggleVodcastHosting = function(e) {
                        t.props.saveSettings({
                            vodcastHosting: e
                        })
                    }, t.handleSetRandomAutohostStrategy = function() {
                        t.props.saveSettings({
                            strategy: P.AutohostStrategy.Random
                        })
                    }, t.handleSetOrderedAutohostStrategy = function() {
                        t.props.saveSettings({
                            strategy: P.AutohostStrategy.Ordered
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(b.a, null, this.props.requestState === re.a.Error && s.createElement(y.a, null, s.createElement(N.Q, {
                        color: N.K.Error
                    }, Object(h.d)("Something went wrong. Give it another try later.", "AutohostSettings"))), s.createElement(ne.a, {
                        label: Object(h.d)("Auto host channels", "AutohostSettings"),
                        name: "enabled",
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.autohostSettings.enabled,
                        onChange: this.handleToggleEnabled,
                        description: Object(h.d)("Automatically host channels from your host list when you're offline", "AutohostSettings"),
                        id: "auto-host-channels-toggle",
                        "data-test-selector": "auto-host-channels-toggle"
                    }), s.createElement(ne.a, {
                        label: Object(h.d)("Host team channels", "AutohostSettings"),
                        name: "teamHost",
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.autohostSettings.teamHost,
                        onChange: this.handleToggleTeamHost,
                        id: "team-host",
                        description: Object(h.d)("Include team channels in your host list", "AutohostSettings")
                    }), s.createElement(ne.a, {
                        label: Object(h.d)("Host pre-recorded videos", "AutohostSettings"),
                        name: "vodcastHosting",
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.autohostSettings.vodcastHosting,
                        onChange: this.handleToggleVodcastHosting,
                        description: Object(h.d)("Include channels streaming pre-recorded video, like Premieres or Reruns", "AutohostSettings"),
                        id: "vodcast-hosting-toggle"
                    }), s.createElement(ee.a, {
                        orientation: N.X.Horizontal,
                        label: Object(h.d)("Hosting priority", "AutohostSettings")
                    }, s.createElement(N._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(N._21, {
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.autohostSettings.strategy === P.AutohostStrategy.Ordered,
                        onChange: this.handleSetOrderedAutohostStrategy,
                        label: Object(h.d)("Host channels by the order they appear in the list", "AutohostSettings"),
                        name: "hostPriority",
                        value: P.AutohostStrategy.Ordered
                    })), s.createElement(N._21, {
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.autohostSettings.strategy === P.AutohostStrategy.Random,
                        onChange: this.handleSetRandomAutohostStrategy,
                        label: Object(h.d)("Host channels randomly from the list", "AutohostSettings"),
                        name: "hostPriority",
                        value: P.AutohostStrategy.Random
                    })), s.createElement(te.a, {
                        text: Object(h.d)("Host list", "AutohostSettings"),
                        description: Object(h.d)("Add and manage your hosted channels", "AutohostSettings"),
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/autohost"
                    }))
                }, t
            }(s.Component),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleSetRaidPreference = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return [2, this.props.saveSettings({
                                    raidPreference: e.currentTarget.value
                                })]
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(b.a, null, this.props.requestState === re.a.Error && s.createElement(y.a, null, s.createElement(N.Q, {
                        color: N.K.Error
                    }, Object(h.d)("Something went wrong. Give it another try later.", "RaidSettingsForm"))), s.createElement(ee.a, {
                        orientation: N.X.Horizontal,
                        label: Object(h.d)("Raid", "RaidSettingsForm")
                    }, s.createElement(N._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(N._21, {
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.raidPreference === P.RaidPreference.All,
                        onChange: this.handleSetRaidPreference,
                        label: Object(h.d)("Allow all raids", "RaidSettingsForm"),
                        name: "raidPreference",
                        value: P.RaidPreference.All
                    })), s.createElement(N._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(N._21, {
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.raidPreference === P.RaidPreference.Network,
                        onChange: this.handleSetRaidPreference,
                        label: Object(h.d)("Only allow raids from friends, teammates, and followed channels", "RaidSettingsForm"),
                        name: "raidPreference",
                        value: P.RaidPreference.Network
                    })), s.createElement(N._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(N._21, {
                        disabled: this.props.requestState === re.a.Loading,
                        checked: this.props.raidPreference === P.RaidPreference.None,
                        onChange: this.handleSetRaidPreference,
                        label: Object(h.d)("Block all raids", "RaidSettingsForm"),
                        name: "raidPreference",
                        value: P.RaidPreference.None
                    }))))
                }, t
            }(s.Component),
            se = Object(m.d)("RaidSettingsForm")(ae),
            ie = function(e) {
                return s.createElement(s.Fragment, null, s.createElement(Z.a, {
                    title: Object(h.d)("Auto Hosting", "DashboardSettings")
                }), s.createElement(oe, {
                    channelName: e.channelName,
                    autohostSettings: e.autohostSettings,
                    requestState: e.requestState,
                    saveSettings: e.saveSettings
                }), s.createElement(Z.a, {
                    title: Object(h.d)("Raids", "DashboardSettings")
                }), s.createElement(se, {
                    raidPreference: e.autohostSettings.raidPreference,
                    requestState: e.requestState,
                    saveSettings: e.saveSettings
                }))
            },
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autohostSettings: P.DEFAULT_AUTOHOST_SETTINGS,
                        requestState: P.RequestState.Loading
                    }, t.logger = h.o.logger.withCategory("raid-settings-form"), t.saveSettings = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: P.RequestState.Loading
                                        }), [4, function(e) {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                var t;
                                                return a.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, E.a.put("/kraken/autohost/settings", {
                                                                body: (r = e, {
                                                                    deprioritize_vodcast: !r.vodcastHosting,
                                                                    enabled: r.enabled,
                                                                    strategy: r.strategy,
                                                                    team_host: r.teamHost,
                                                                    can_be_raided_by: r.raidPreference
                                                                })
                                                            })];
                                                        case 1:
                                                            return (t = n.sent()).error || t.requestError ? [2, {
                                                                isError: !0,
                                                                autohostSettings: void 0,
                                                                error: t.error || t.requestError
                                                            }] : [2, {
                                                                isError: !1,
                                                                autohostSettings: C(t.body)
                                                            }]
                                                    }
                                                    var r
                                                })
                                            })
                                        }(a.__assign({}, this.state.autohostSettings, e))];
                                    case 1:
                                        return (t = r.sent()).isError ? (this.setState({
                                            requestState: P.RequestState.Error
                                        }), n = new Error("Channel Properties Settings error"), this.logger.error(n, "Failed to load channel data", t.error)) : this.setState({
                                            autohostSettings: t.autohostSettings,
                                            requestState: P.RequestState.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, function() {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var e;
                                            return a.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, E.a.get("/kraken/autohost/settings")];
                                                    case 1:
                                                        return (e = t.sent()).error || e.requestError ? [2, {
                                                            isError: !0,
                                                            autohostSettings: void 0
                                                        }] : [2, {
                                                            isError: !1,
                                                            autohostSettings: C(e.body)
                                                        }]
                                                }
                                            })
                                        })
                                    }()];
                                case 1:
                                    return (e = t.sent()).isError ? this.setState({
                                        requestState: P.RequestState.Error
                                    }) : this.setState({
                                        autohostSettings: e.autohostSettings,
                                        requestState: P.RequestState.Success
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return s.createElement(ie, {
                        channelName: this.props.channelName,
                        autohostSettings: this.state.autohostSettings,
                        requestState: this.state.requestState,
                        saveSettings: this.saveSettings
                    })
                }, t
            }(s.Component),
            ue = n("2hJ3"),
            ce = n("gLfK"),
            de = n("2KeS"),
            he = n("+8VM"),
            pe = (n("WgcH"), {
                "data-test-selector": "i-understand-button"
            }),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(N._35, {
                        className: "stream-key-confirm-modal",
                        borderBottom: !0,
                        background: N.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, s.createElement(N._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, s.createElement(N.Q, {
                        type: N._49.H4,
                        color: N.K.Alt
                    }, Object(h.d)("Stream Key", "StreamKeySettingsForm"))), s.createElement(N._8, {
                        padding: {
                            y: 2
                        }
                    }, s.createElement(N.Q, {
                        color: N.K.Error,
                        bold: !0
                    }, Object(h.d)("Never share your stream key with anyone or show it on stream! Twitch Staff, Admins, or Global Moderators will never ask you for this information.", "StreamKeySettingsForm"))), s.createElement(N._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, Object(h.d)('Please click "I Understand" if you understand the above and would like to view your stream key.', "StreamKeySettingsForm")), s.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Center,
                        padding: {
                            top: 2
                        }
                    }, s.createElement(N.v, a.__assign({}, pe, {
                        onClick: Object(de.d)(this.props.showStreamKey, this.props.onClose)
                    }), Object(h.d)("I Understand", "StreamKeySettingsForm"))), s.createElement(he.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(s.Component),
            ge = n("UWcj"),
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        streamKeyCopied: !1
                    }, t.hideStreamKeyLink = function() {
                        return s.createElement(N.O, {
                            onClick: t.props.handleStreamKeyDisplayToggled
                        }, Object(h.d)("Hide", "StreamKeySettingsForm"))
                    }, t.showStreamKeyLink = function() {
                        return s.createElement(ge.a, {
                            triggerModal: function(e) {
                                return s.createElement(fe, {
                                    onClose: e,
                                    showStreamKey: t.props.handleStreamKeyDisplayToggled
                                })
                            }
                        }, function(e) {
                            return s.createElement(N.O, {
                                onClick: e
                            }, Object(h.d)("Show", "StreamKeySettingsForm"))
                        })
                    }, t.setKeyInputRef = function(e) {
                        return t.keyInput = e
                    }, t.handleSetLatencyPreference = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return [2, this.props.handleSetLatencyPreference(e.currentTarget.value)]
                            })
                        })
                    }, t.copyToClipboard = function() {
                        Object(ue.a)(t.keyInput.value), t.setState({
                            streamKeyCopied: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.channelPropertiesError) return s.createElement(b.a, null, s.createElement(y.a, null, s.createElement(N.Q, {
                        color: N.K.Error
                    }, this.props.channelPropertiesError)));
                    var e = N.A.Default,
                        t = this.props.resetStatus === re.a.Loading;
                    return this.props.resetStatus === re.a.Success ? e = N.A.Success : this.props.resetStatus === re.a.Error ? t = !0 : this.props.resetStatus === re.a.Loading && (e = N.A.Loading), s.createElement(b.a, null, s.createElement(ee.a, {
                        label: Object(h.d)("Stream key", "StreamKeySettingsForm"),
                        error: !!this.props.streamKeyError,
                        errorMessage: this.props.streamKeyError || ""
                    }, s.createElement(N._8, {
                        display: N.R.Flex
                    }, s.createElement(N._8, {
                        flexGrow: 1
                    }, s.createElement(N._4, {
                        readOnly: !0,
                        type: this.props.showStreamKey ? N._5.Text : N._5.Password,
                        value: this.props.channelProperties ? this.props.channelProperties.streamKey : "",
                        refDelegate: this.setKeyInputRef
                    })), s.createElement(N.v, {
                        ariaLabel: Object(h.d)("Copy Stream Key", "StreamKeySettingsForm"),
                        onClick: this.copyToClipboard,
                        "data-test-selector": "COPY_BUTTON_SELECTOR"
                    }, this.state.streamKeyCopied ? Object(h.d)("Copied", "StreamKeySettingsForm") : Object(h.d)("Copy", "StreamKeySettingsForm")), s.createElement(N._8, {
                        padding: {
                            left: 1
                        }
                    }, s.createElement(N.v, {
                        ariaLabel: Object(h.d)("Reset Stream Key", "StreamKeySettingsForm"),
                        onClick: this.props.handleResetStreamKeyClicked,
                        type: N.B.Hollow,
                        state: e,
                        disabled: t
                    }, Object(h.d)("Reset", "StreamKeySettings")))), s.createElement(N._8, {
                        padding: {
                            top: .5
                        }
                    }, this.props.showStreamKey ? this.hideStreamKeyLink() : this.showStreamKeyLink())), s.createElement(ee.a, {
                        label: Object(h.d)("Store past broadcasts", "StreamKeySettingsForm"),
                        error: !!this.props.saveVodsError,
                        errorMessage: this.props.saveVodsError || ""
                    }, s.createElement(N._8, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(N._51, {
                        disabled: this.props.saveVodsState === re.a.Loading,
                        checked: !(!this.props.channelProperties || !this.props.channelProperties.saveVods),
                        onChange: this.props.handleSaveVodsToggled
                    }), s.createElement(ce.a, {
                        text: Object(h.d)("Automatically save broadcasts for up to 14 days (60 days for Partners, Turbo and Prime users)", "StreamKeySettingsForm")
                    }))), this.props.channelProperties && this.props.channelProperties.latencyControlsEnabled && s.createElement(ee.a, {
                        orientation: N.X.Horizontal,
                        label: Object(h.d)("Optimization preference", "StreamKeySettingsForm"),
                        error: !!this.props.latencyPrefError,
                        errorMessage: this.props.latencyPrefError || ""
                    }, s.createElement(N._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(N._21, {
                        disabled: this.props.latencyPrefState === re.a.Loading,
                        checked: !(!this.props.channelProperties || this.props.channelProperties.latencyPreference !== Q.Normal),
                        onChange: this.handleSetLatencyPreference,
                        label: Object(h.d)("Normal latency: Best for highest video quality, highest resolution, and to reduce video buffering", "StreamKeySettingsForm"),
                        name: "optPreference",
                        value: Q.Normal
                    })), s.createElement(N._21, {
                        disabled: this.props.latencyPrefState === re.a.Loading,
                        checked: !(!this.props.channelProperties || this.props.channelProperties.latencyPreference !== Q.Low),
                        onChange: this.handleSetLatencyPreference,
                        label: Object(h.d)("Low latency: Best for near real-time interactions with viewers", "StreamKeySettingsForm"),
                        name: "optPreference",
                        value: Q.Low
                    })))
                }, t
            }(s.Component),
            ve = Object(m.d)("ChannelPropertiesSettingsForm")(me);
        ! function(e) {
            e.Normal = "normal", e.Low = "low"
        }(Q || (Q = {}));
        var ye = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    channelProperties: null,
                    channelPropertiesError: null,
                    streamKeyError: null,
                    showStreamKey: !1,
                    resetKeyState: re.a.Loading,
                    saveVodsState: re.a.Loading,
                    saveVodsError: null,
                    latencyPrefState: re.a.Loading,
                    latencyPrefError: null
                }, t.logger = h.o.logger.withCategory("stream-key-settings"), t.fetchChannelProperties = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r, o, s;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user) return [2];
                                    r = "/v5/channels/" + this.props.user.id + "/channel_properties", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.get(r)];
                                case 2:
                                    return n = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(n),
                                        resetKeyState: null,
                                        saveVodsState: null,
                                        latencyPrefState: null
                                    }), [3, 4];
                                case 3:
                                    return o = a.sent(), e = o, [3, 4];
                                case 4:
                                    return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (s = Object(h.d)("Failed to load channel properties.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load channel data", t), this.setState({
                                        channelPropertiesError: s
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.toggleStreamKeyDisplay = function() {
                    t.setState(function(e) {
                        return {
                            showStreamKey: !e.showStreamKey
                        }
                    })
                }, t.resetStreamKey = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r, o, s;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user) return [2];
                                    this.setState({
                                        resetKeyState: re.a.Loading
                                    }), r = "/v5/channels/" + this.props.user.id + "/channel_properties/regenerate_stream_key", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.put(r)];
                                case 2:
                                    return n = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(n),
                                        resetKeyState: re.a.Success
                                    }), [3, 4];
                                case 3:
                                    return o = a.sent(), e = o, [3, 4];
                                case 4:
                                    return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (s = Object(h.d)("Failed to reset stream key.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to reset stream key", t), this.setState({
                                        streamKeyError: s,
                                        resetKeyState: re.a.Error
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.setSaveVods = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r, o, s;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user || !this.state.channelProperties) return [2];
                                    this.setState({
                                        saveVodsState: re.a.Loading
                                    }), r = "/v5/channels/" + this.props.user.id + "/channel_properties", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.put(r, {
                                        body: {
                                            save_vods: !this.state.channelProperties.saveVods
                                        }
                                    })];
                                case 2:
                                    return n = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(n),
                                        saveVodsState: re.a.Success
                                    }), [3, 4];
                                case 3:
                                    return o = a.sent(), e = o, [3, 4];
                                case 4:
                                    return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (s = Object(h.d)("Failed to update broadcast preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update vods preference", t), this.setState({
                                        saveVodsError: s,
                                        saveVodsState: re.a.Error
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.setLatencyPreference = function(e) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var t, n, r, o, s, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user || !this.state.channelProperties) return [2];
                                    this.setState({
                                        latencyPrefState: re.a.Loading
                                    }), o = "/v5/channels/" + this.props.user.id + "/channel_properties", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.put(o, {
                                        body: {
                                            latency: e
                                        }
                                    })];
                                case 2:
                                    return r = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(r),
                                        latencyPrefState: re.a.Success
                                    }), [3, 4];
                                case 3:
                                    return s = a.sent(), t = s, [3, 4];
                                case 4:
                                    return r && r.error && (t = new Error("Channel Properties Settings error"), n = r.error), t ? (i = Object(h.d)("Failed to update optimization preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to update latency preference", n), this.setState({
                                        latencyPrefError: i,
                                        latencyPrefState: re.a.Error
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t
            }
            return a.__extends(t, e), t.prototype.componentWillMount = function() {
                this.fetchChannelProperties()
            }, t.prototype.render = function() {
                return s.createElement(ve, {
                    channelProperties: this.state.channelProperties,
                    channelPropertiesError: this.state.channelPropertiesError,
                    showStreamKey: this.state.showStreamKey,
                    handleStreamKeyDisplayToggled: this.toggleStreamKeyDisplay,
                    resetStatus: this.state.resetKeyState,
                    handleResetStreamKeyClicked: this.resetStreamKey,
                    streamKeyError: this.state.streamKeyError,
                    saveVodsState: this.state.saveVodsState,
                    saveVodsError: this.state.saveVodsError,
                    handleSaveVodsToggled: this.setSaveVods,
                    latencyPrefState: this.state.latencyPrefState,
                    latencyPrefError: this.state.latencyPrefError,
                    handleSetLatencyPreference: this.setLatencyPreference
                })
            }, t.prototype.deserializeChannelProperties = function(e) {
                return e.body && this.props.user ? {
                    streamKey: "live_" + this.props.user.id + "_" + e.body.stream_key,
                    latencyControlsEnabled: e.body.latency_controls_enabled,
                    latencyPreference: e.body.latency,
                    saveVods: e.body.save_vods
                } : null
            }, t
        }(s.Component);
        var be = Object(r.b)(function(e) {
                return {
                    user: Object(o.c)(e)
                }
            })(ye),
            Se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.dropsSettingsError) return s.createElement(b.a, null, s.createElement(y.a, null, s.createElement(N.Q, {
                        color: N.K.Error
                    }, this.props.dropsSettingsError)));
                    var e = s.createElement(N.O, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                        }, Object(h.d)("Learn more", "DropSettingsForm")),
                        t = Object(h.d)("Alert your viewers when they have a chance to earn in-game loot. {learnMoreLink}", {
                            learnMoreLink: e
                        }, "DropSettingsForm");
                    return s.createElement(b.a, null, s.createElement(ne.a, {
                        label: Object(h.d)("Drops", "DropSettingsForm"),
                        disabled: null === this.props.requestState || this.props.requestState === re.a.Loading,
                        checked: !!this.props.isDropsEnabled,
                        onChange: this.props.handleDropSettingsToggle,
                        description: t,
                        id: "drops-settings-toggle"
                    }))
                }, t
            }(s.Component),
            _e = Object(m.d)("DropsSettingsForm")(Se),
            xe = n("fqzE"),
            Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDropsEnabled: null,
                        dropsSettingsError: null,
                        requestState: null
                    }, t.logger = h.o.logger.withCategory("stream-key-settings"), t.fetchDrops = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, o, s, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (null !== this.state.requestState || !e.data || !e.data.user) return [2];
                                        this.setState({
                                            requestState: re.a.Loading
                                        }), o = "/kraken/channels/" + e.data.user.id + "/vhs", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, E.a.get(o)];
                                    case 2:
                                        return (r = a.sent()).body && this.setState({
                                            isDropsEnabled: !r.body.opt_out_status,
                                            requestState: re.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), t = s, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Drops Settings error"), n = r.error), t ? (i = Object(h.d)("Failed to load Drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to load channel data", n), this.setState({
                                            dropsSettingsError: i
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.toggleDropsSetting = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, o, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.props.data || !this.props.data.user) return [2];
                                        this.setState({
                                            requestState: re.a.Loading
                                        }), r = "/kraken/channels/" + this.props.data.user.id + "/vhs", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), this.state.isDropsEnabled ? [4, E.a.delete(r)] : [3, 3];
                                    case 2:
                                        return n = a.sent(), [3, 5];
                                    case 3:
                                        return [4, E.a.put(r)];
                                    case 4:
                                        n = a.sent(), a.label = 5;
                                    case 5:
                                        return this.setState({
                                            isDropsEnabled: !this.state.isDropsEnabled,
                                            requestState: re.a.Success
                                        }), [3, 7];
                                    case 6:
                                        return o = a.sent(), e = o, [3, 7];
                                    case 7:
                                        return n && n.error && (e = new Error("Drops Settings error"), t = n.error), e ? (s = Object(h.d)("Failed to update drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update drops preference", t), this.setState({
                                            dropsSettingsError: s,
                                            requestState: re.a.Error
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchDrops(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.fetchDrops(e)
                }, t.prototype.render = function() {
                    return s.createElement(_e, {
                        isDropsEnabled: this.state.isDropsEnabled,
                        dropsSettingsError: this.state.dropsSettingsError,
                        requestState: this.state.requestState,
                        handleDropSettingsToggle: this.toggleDropsSetting
                    })
                }, t
            }(s.Component),
            Oe = Object(d.compose)(Object($.a)(xe, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }))(Ee),
            we = function(e) {
                return s.createElement(ee.a, {
                    orientation: N.X.Horizontal,
                    label: Object(h.d)("Followers-only mode", "DashboardSettingsModPrefFollowersOnly")
                }, s.createElement(N._8, {
                    margin: {
                        bottom: .5
                    }
                }, s.createElement(N._8, {
                    display: N.R.Flex
                }, s.createElement(N._8, null, s.createElement(N._30, {
                    onChange: e.onSetFollowersOnlyDuration,
                    value: e.followersOnlyDurationSeconds.toString()
                }, s.createElement("option", {
                    value: P.FollowersDurationSeconds.Off
                }, Object(h.d)("Off", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.TenMinutes
                }, Object(h.d)("10 Minutes", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.ThirtyMinutes
                }, Object(h.d)("30 Minutes", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.OneHour
                }, Object(h.d)("1 Hour", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.OneDay
                }, Object(h.d)("1 Day", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.OneWeek
                }, Object(h.d)("1 Week", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.OneMonth
                }, Object(h.d)("1 Month", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                    value: P.FollowersDurationSeconds.ThreeMonths
                }, Object(h.d)("3 Months", "DashboardSettingsModPrefFollowersOnly"))))), s.createElement(ce.a, {
                    text: Object(h.d)("When enabled, viewers must follow you for the specified amount of time before they are allowed to post messages on your videos.", "DashboardSettingsModPrefFollowersOnly")
                })))
            },
            Ce = function(e) {
                return s.createElement(ee.a, {
                    orientation: N.X.Horizontal,
                    label: Object(h.d)("Messages on videos", "DashboardSettingsModPrefMessages")
                }, s.createElement(N._8, {
                    padding: {
                        bottom: 1
                    }
                }, s.createElement(N._21, {
                    disabled: e.requestState === re.a.Loading,
                    checked: e.publishingMode === P.ChommentsPublishingMode.Open,
                    onChange: e.onSetPublishingMode,
                    label: Object(h.d)("Allow all messages on videos except for those caught by AutoMod", "DashboardSettingsModPrefMessages"),
                    name: "chommentsPublishingMode",
                    value: P.ChommentsPublishingMode.Open
                })), s.createElement(N._8, {
                    padding: {
                        bottom: 1
                    }
                }, s.createElement(N._21, {
                    disabled: e.requestState === re.a.Loading,
                    checked: e.publishingMode === P.ChommentsPublishingMode.Review,
                    onChange: e.onSetPublishingMode,
                    label: Object(h.d)("Hold all messages on videos for review", "DashboardSettingsModPrefMessages"),
                    name: "chommentsPublishingMode",
                    value: P.ChommentsPublishingMode.Review
                })), s.createElement(N._8, {
                    padding: {
                        bottom: 1
                    }
                }, s.createElement(N._21, {
                    disabled: e.requestState === re.a.Loading,
                    checked: e.publishingMode === P.ChommentsPublishingMode.Disabled,
                    onChange: e.onSetPublishingMode,
                    label: Object(h.d)("Disable all messages on videos", "DashboardSettingsModPrefMessages"),
                    name: "chommentsPublishingMode",
                    value: P.ChommentsPublishingMode.Disabled
                })))
            },
            je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleSetPublishingMode = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return this.props.saveSettings({
                                    publishingMode: e.currentTarget.value
                                }), [2]
                            })
                        })
                    }, t.handleSetFollowersOnlyDuration = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return this.props.saveSettings({
                                    followersOnlyDurationSeconds: Number(e.currentTarget.value)
                                }), [2]
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(N._8, null, s.createElement(Z.a, {
                        title: Object(h.d)("Video Moderation", "DashboardSettingsModPref")
                    }), s.createElement(b.a, null, this.props.requestState === re.a.Error && s.createElement(y.a, null, s.createElement(N.Q, {
                        color: N.K.Error
                    }, Object(h.d)("Something went wrong. Give it another try later.", "DashboardSettingsModPrefMessagesError"))), s.createElement(Ce, {
                        onSetPublishingMode: this.handleSetPublishingMode,
                        publishingMode: this.props.moderationSettings.publishingMode,
                        requestState: this.props.requestState
                    }), s.createElement(we, {
                        onSetFollowersOnlyDuration: this.handleSetFollowersOnlyDuration,
                        followersOnlyDurationSeconds: this.props.moderationSettings.followersOnlyDurationSeconds
                    })))
                }, t
            }(s.Component),
            ke = Object(m.d)("VideoModerationSettings")(je),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        moderationSettings: P.DEFAULT_VIDEO_MODERATION_SETTINGS,
                        requestState: P.RequestState.Loading
                    }, t.logger = h.o.logger.withCategory("followers-only-settings-form"), t.saveSettings = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: P.RequestState.Loading
                                        }), [4, function(e, t) {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                var n;
                                                return a.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, E.a.put("/kraken/videos/channels/" + e + "/settings", {
                                                                body: (o = t, {
                                                                    publishing_mode: o.publishingMode,
                                                                    followers_only_duration_seconds: o.followersOnlyDurationSeconds
                                                                })
                                                            })];
                                                        case 1:
                                                            return (n = r.sent()).error || n.requestError ? [2, {
                                                                isError: !0,
                                                                moderationSettings: void 0,
                                                                error: n.error || n.requestError
                                                            }] : [2, {
                                                                isError: !1,
                                                                moderationSettings: D(n.body)
                                                            }]
                                                    }
                                                    var o
                                                })
                                            })
                                        }(this.props.channelID, a.__assign({}, this.state.moderationSettings, e))];
                                    case 1:
                                        return (t = r.sent()).isError ? (this.setState({
                                            requestState: P.RequestState.Error
                                        }), n = new Error("Channel Properties Settings error"), this.logger.error(n, "Failed to load channel data", t.error)) : this.setState({
                                            moderationSettings: t.moderationSettings,
                                            requestState: P.RequestState.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, function(e) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var t;
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, E.a.get("/kraken/videos/channels/" + e + "/settings")];
                                                    case 1:
                                                        return (t = n.sent()).error || t.requestError ? [2, {
                                                            isError: !0,
                                                            moderationSettings: void 0
                                                        }] : [2, {
                                                            isError: !1,
                                                            moderationSettings: D(t.body)
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channelID)];
                                case 1:
                                    return (e = t.sent()).isError ? this.setState({
                                        requestState: P.RequestState.Error
                                    }) : this.setState({
                                        moderationSettings: e.moderationSettings,
                                        requestState: P.RequestState.Success
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return s.createElement(ke, {
                        moderationSettings: this.state.moderationSettings,
                        requestState: this.state.requestState,
                        saveSettings: this.saveSettings
                    })
                }, t
            }(s.Component),
            Pe = n("q5i4"),
            De = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(N._8, null, s.createElement(Z.a, {
                        title: Object(h.d)("Stream Key & Preferences", "DashboardSettings")
                    }), s.createElement(be, null), s.createElement(le, {
                        channelName: this.props.match.params.channelName
                    }), s.createElement(Z.a, {
                        title: Object(h.d)("Drops", "DashboardSettings")
                    }), s.createElement(Oe, {
                        channelName: this.props.match.params.channelName
                    }), this.props.data.channel && this.props.data.channel.id && s.createElement(Te, {
                        channelID: this.props.data.channel.id
                    }))
                }, t
            }(s.Component),
            Me = Object(d.compose)(Object($.a)(Pe, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(m.d)("DashboardSettingsIndexPage", {
                autoReportInteractive: !0,
                destination: f.a.DashboardSettingsIndex
            }), Object(p.a)({
                location: g.PageviewLocation.DashboardSettingsIndex
            }))(De),
            Ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.match.params.channelName === this.props.userLogin || this.props.isStaff ? s.createElement(u.b, null, s.createElement(N._8, {
                        padding: 2,
                        fullHeight: !0
                    }, s.createElement(l.e, null, s.createElement(i.c, {
                        path: "/:channelName/dashboard/settings/autohost",
                        exact: !0,
                        component: X
                    }), s.createElement(i.c, {
                        path: "/:channelName/dashboard/settings",
                        exact: !0,
                        component: Me
                    }), s.createElement(i.c, {
                        path: "/:channelName/dashboard/settings/streamkey",
                        exact: !0,
                        render: function(e) {
                            var t = e.match;
                            return s.createElement(i.b, {
                                to: "/" + t.params.channelName + "/dashboard/settings"
                            })
                        }
                    }), s.createElement(i.c, {
                        component: c.a
                    })))) : s.createElement(i.b, {
                        to: "/" + this.props.userLogin + "/dashboard/settings"
                    })
                }, t
            }(s.Component);
        var Ie = Object(r.b)(function(e) {
            var t = Object(o.c)(e);
            return {
                userLogin: t && t.login,
                isStaff: t && t.roles && t.roles.isStaff
            }
        })(Ae);
        n.d(t, "DashboardSettingsRoot", function() {
            return Ie
        })
    },
    gKqb: function(e, t, n) {
        var r = n("Bh6c"),
            o = n("2EIm"),
            a = n("UT8+"),
            s = n("9GW9"),
            i = n("PWbw"),
            l = n("M0TM");

        function u(e) {
            var t = this.__data__ = new r(e);
            this.size = t.size
        }
        u.prototype.clear = o, u.prototype.delete = a, u.prototype.get = s, u.prototype.has = i, u.prototype.set = l, e.exports = u
    },
    gLfK: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = n("Odds"),
            a = function(e) {
                return r.createElement(o._8, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(o.Q, {
                    color: o.K.Alt,
                    "data-a-target": e.textDataTarget
                }, e.text), e.extraText && r.createElement(o._8, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(o.Q, {
                    color: o.K.Alt2
                }, e.extraText)))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    gfva: function(e, t, n) {
        var r = n("SVcC");
        e.exports = function(e) {
            var t = r(e),
                n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
    },
    i4TT: function(e, t, n) {
        var r = n("VEC5"),
            o = n("SjFU"),
            a = n("gfva"),
            s = Math.max;
        e.exports = function(e, t, n) {
            var i = null == e ? 0 : e.length;
            if (!i) return -1;
            var l = null == n ? 0 : a(n);
            return l < 0 && (l = s(i + l, 0)), r(e, o(t, 3), l)
        }
    },
    i61F: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
        var r = n("Vgej");
        Object.defineProperty(t, "arrayMove", {
            enumerable: !0,
            get: function() {
                return r.arrayMove
            }
        });
        var o = i(n("P/Wu")),
            a = i(n("yauq")),
            s = i(n("tslQ"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.SortableContainer = o.default, t.SortableElement = a.default, t.SortableHandle = s.default, t.sortableContainer = o.default, t.sortableElement = a.default, t.sortableHandle = s.default
    },
    iAlu: function(e, t, n) {
        var r = n("ndFl"),
            o = n("0zkw")(r);
        e.exports = o
    },
    iLYB: function(e, t, n) {
        var r = n("uIws"),
            o = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0))
        }
    },
    idL5: function(e, t, n) {
        var r = n("ymQA"),
            o = "Expected a function";

        function a(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o);
            var n = function() {
                var r = arguments,
                    o = t ? t.apply(this, r) : r[0],
                    a = n.cache;
                if (a.has(o)) return a.get(o);
                var s = e.apply(this, r);
                return n.cache = a.set(o, s) || a, s
            };
            return n.cache = new(a.Cache || r), n
        }
        a.Cache = r, e.exports = a
    },
    jZyZ: function(e, t) {
        e.exports = function(e, t) {
            return e.has(t)
        }
    },
    k6Ms: function(e, t, n) {
        var r = n("1nXM"),
            o = 1,
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, s, i, l) {
            var u = n & o,
                c = r(e),
                d = c.length;
            if (d != r(t).length && !u) return !1;
            for (var h = d; h--;) {
                var p = c[h];
                if (!(u ? p in t : a.call(t, p))) return !1
            }
            var f = l.get(e);
            if (f && l.get(t)) return f == t;
            var g = !0;
            l.set(e, t), l.set(t, e);
            for (var m = u; ++h < d;) {
                var v = e[p = c[h]],
                    y = t[p];
                if (s) var b = u ? s(y, v, p, t, e, l) : s(v, y, p, e, t, l);
                if (!(void 0 === b ? v === y || i(v, y, n, s, l) : b)) {
                    g = !1;
                    break
                }
                m || (m = "constructor" == p)
            }
            if (g && !m) {
                var S = e.constructor,
                    _ = t.constructor;
                S != _ && "constructor" in e && "constructor" in t && !("function" == typeof S && S instanceof S && "function" == typeof _ && _ instanceof _) && (g = !1)
            }
            return l.delete(e), l.delete(t), g
        }
    },
    kdNP: function(e, t, n) {
        var r = n("sa46");
        e.exports = function(e) {
            return null == e ? "" : r(e)
        }
    },
    kjxi: function(e, t, n) {
        var r = n("NDrF"),
            o = function() {
                try {
                    var e = r(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = o
    },
    "kl/u": function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    kqTE: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            o = function(e) {
                var t = r.Children.only(e.children);
                return r.cloneElement(t, {
                    "data-selectable": !0,
                    tabIndex: -1
                })
            };
        n.d(t, "a", function() {
            return o
        })
    },
    m2wS: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
    },
    mAEY: function(e, t, n) {
        var r = n("JGv7"),
            o = n("H3TN"),
            a = n("mG6l"),
            s = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return a(e) || o(e) || !!(s && e && e[s])
        }
    },
    mG6l: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    mPnA: function(e, t, n) {
        (function(e) {
            var r = n("MygC"),
                o = n("WlEI"),
                a = "object" == typeof t && t && !t.nodeType && t,
                s = a && "object" == typeof e && e && !e.nodeType && e,
                i = s && s.exports === a ? r.Buffer : void 0,
                l = (i ? i.isBuffer : void 0) || o;
            e.exports = l
        }).call(t, n("3IRH")(e))
    },
    n8KP: function(e, t, n) {
        var r = n("am5H"),
            o = n("HMFB");
        e.exports = function(e) {
            for (var t = o(e), n = t.length; n--;) {
                var a = t[n],
                    s = e[a];
                t[n] = [a, s, r(s)]
            }
            return t
        }
    },
    ndFl: function(e, t, n) {
        var r = n("NSoo"),
            o = n("kjxi"),
            a = n("F3kA"),
            s = o ? function(e, t) {
                return o(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(t),
                    writable: !0
                })
            } : a;
        e.exports = s
    },
    o3xN: function(e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function(e) {
            return this.__data__.set(e, n), this
        }
    },
    oDbm: function(e, t, n) {
        var r = n("pgw8"),
            o = n("BaEo"),
            a = n("8xms"),
            s = n("QG23"),
            i = n("QxUn");

        function l(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = s, l.prototype.set = i, e.exports = l
    },
    "p+QF": function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    pLne: function(e, t, n) {
        var r = n("//bJ"),
            o = n("v6CG"),
            a = Object.prototype.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            i = s ? function(e) {
                return null == e ? [] : (e = Object(e), r(s(e), function(t) {
                    return a.call(e, t)
                }))
            } : o;
        e.exports = i
    },
    pUak: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e) {
                n[++t] = e
            }), n
        }
    },
    pgw8: function(e, t, n) {
        var r = n("w1Jz");
        e.exports = function() {
            this.__data__ = r ? r(null) : {}, this.size = 0
        }
    },
    q5i4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardSettingsIndex_Channel"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelName"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "channel"
                        },
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 105
            }
        };
        n.loc.source = {
            body: "query DashboardSettingsIndex_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qUKr: function(e, t, n) {
        e.exports = n("xkKI")()
    },
    qhiD: function(e, t) {},
    qu3O: function(e, t, n) {
        var r = n("cXqt"),
            o = n("BALR"),
            a = n("jZyZ"),
            s = 1,
            i = 2;
        e.exports = function(e, t, n, l, u, c) {
            var d = n & s,
                h = e.length,
                p = t.length;
            if (h != p && !(d && p > h)) return !1;
            var f = c.get(e);
            if (f && c.get(t)) return f == t;
            var g = -1,
                m = !0,
                v = n & i ? new r : void 0;
            for (c.set(e, t), c.set(t, e); ++g < h;) {
                var y = e[g],
                    b = t[g];
                if (l) var S = d ? l(b, y, g, t, e, c) : l(y, b, g, e, t, c);
                if (void 0 !== S) {
                    if (S) continue;
                    m = !1;
                    break
                }
                if (v) {
                    if (!o(t, function(e, t) {
                            if (!a(v, t) && (y === e || u(y, e, n, l, c))) return v.push(t)
                        })) {
                        m = !1;
                        break
                    }
                } else if (y !== b && !u(y, b, n, l, c)) {
                    m = !1;
                    break
                }
            }
            return c.delete(e), c.delete(t), m
        }
    },
    r0iv: function(e, t, n) {
        var r = n("p+QF"),
            o = n("Fy4Y"),
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!r(e)) return o(e);
            var t = [];
            for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    s6nI: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
            }(r || (r = {}))
    },
    sBY2: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    sa46: function(e, t, n) {
        var r = n("JGv7"),
            o = n("HMFi"),
            a = n("mG6l"),
            s = n("SCwa"),
            i = 1 / 0,
            l = r ? r.prototype : void 0,
            u = l ? l.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (a(t)) return o(t, e) + "";
            if (s(t)) return u ? u.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -i ? "-0" : n
        }
    },
    skb1: function(e, t, n) {
        (function(e) {
            var r = n("1tEs"),
                o = "object" == typeof t && t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === o && r.process,
                i = function() {
                    try {
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = i
        }).call(t, n("3IRH")(e))
    },
    t3nn: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "DataView");
        e.exports = r
    },
    tobj: function(e, t, n) {
        var r = n("43dD"),
            o = n("VGcK"),
            a = "[object Arguments]";
        e.exports = function(e) {
            return o(e) && r(e) == a
        }
    },
    tslQ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.default = function(e) {
            var t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return n = t = function(t) {
                function n() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(n, t), o(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = (0, i.findDOMNode)(this);
                        e.sortableHandle = !0
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, l.default)(c.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = c.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, r({
                            ref: t
                        }, this.props))
                    }
                }]), n
            }(a.Component), t.displayName = (0, u.provideDisplayName)("sortableHandle", e), n
        };
        var a = n("GiK3"),
            s = c(a),
            i = n("O27J"),
            l = c(n("crWv")),
            u = n("Vgej");

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    uIws: function(e, t, n) {
        var r = n("EpL8");
        e.exports = function(e, t) {
            for (var n = e.length; n--;)
                if (r(e[n][0], t)) return n;
            return -1
        }
    },
    uS5W: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Promise");
        e.exports = r
    },
    uVWv: function(e, t, n) {
        "use strict";
        var r, o;
        n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return a
            }),
            function(e) {
                e.Open = "open", e.Review = "review", e.Disabled = "disabled"
            }(r || (r = {})),
            function(e) {
                e[e.Off = 0] = "Off", e[e.TenMinutes = 600] = "TenMinutes", e[e.ThirtyMinutes = 1800] = "ThirtyMinutes", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.OneWeek = 604800] = "OneWeek", e[e.OneMonth = 2592e3] = "OneMonth", e[e.ThreeMonths = 7776e3] = "ThreeMonths"
            }(o || (o = {}));
        var a = {
            publishingMode: r.Open,
            followersOnlyDurationSeconds: o.OneDay
        }
    },
    usEs: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return e(t)
            }
        }
    },
    v6CG: function(e, t) {
        e.exports = function() {
            return []
        }
    },
    vwDu: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            var t = r(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    w1Jz: function(e, t, n) {
        var r = n("NDrF")(Object, "create");
        e.exports = r
    },
    wSgH: function(e, t, n) {
        var r = n("Czj7");
        e.exports = function(e, t) {
            return function(n, o) {
                if (null == n) return n;
                if (!r(n)) return e(n, o);
                for (var a = n.length, s = t ? a : -1, i = Object(n);
                    (t ? s-- : ++s < a) && !1 !== o(i[s], s, i););
                return n
            }
        }
    },
    wVoL: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e, t) {
            var n = r(this, e),
                o = n.size;
            return n.set(e, t), this.size += n.size == o ? 0 : 1, this
        }
    },
    x3dg: function(e, t) {},
    xKuy: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = s(n("9c95")),
            a = s(n("J0u9"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.refs = {}
            }
            return r(e, [{
                key: "add",
                value: function(e, t) {
                    this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
                }
            }, {
                key: "isActive",
                value: function() {
                    return this.active
                }
            }, {
                key: "getActive",
                value: function() {
                    var e = this;
                    return (0, o.default)(this.refs[this.active.collection], function(t) {
                        return t.node.sortableInfo.index == e.active.index
                    })
                }
            }, {
                key: "getIndex",
                value: function(e, t) {
                    return this.refs[e].indexOf(t)
                }
            }, {
                key: "getOrderedRefs",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                    return (0, a.default)(this.refs[e], function(e) {
                        return e.node.sortableInfo.index
                    })
                }
            }]), e
        }();
        t.default = i
    },
    xkKI: function(e, t, n) {
        "use strict";
        var r = n("+bIS"),
            o = n("eXGG"),
            a = n("0pjK");
        e.exports = function() {
            function e(e, t, n, r, s, i) {
                i !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    },
    y5ks: function(e, t, n) {
        var r = n("43dD"),
            o = n("2iRz"),
            a = n("VGcK"),
            s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = function(e) {
            return a(e) && o(e.length) && !!s[r(e)]
        }
    },
    yMkz: function(e, t, n) {
        var r = n("MygC").Uint8Array;
        e.exports = r
    },
    yauq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.default = function(e) {
            var t, n, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return n = t = function(t) {
                function n() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(n, t), o(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.collection,
                            n = e.disabled,
                            r = e.index;
                        n || this.setDraggable(t, r)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                            var t = e.collection,
                                n = e.disabled,
                                r = e.index;
                            n ? this.removeDraggable(t) : this.setDraggable(t, r)
                        } else this.props.collection !== e.collection && (this.removeDraggable(this.props.collection), this.setDraggable(e.collection, e.index))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this.props,
                            t = e.collection,
                            n = e.disabled;
                        n || this.removeDraggable(t)
                    }
                }, {
                    key: "setDraggable",
                    value: function(e, t) {
                        var n = this.node = (0, l.findDOMNode)(this);
                        n.sortableInfo = {
                            index: t,
                            collection: e,
                            manager: this.context.manager
                        }, this.ref = {
                            node: n
                        }, this.context.manager.add(e, this.ref)
                    }
                }, {
                    key: "removeDraggable",
                    value: function(e) {
                        this.context.manager.remove(e, this.ref)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, u.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = d.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, r({
                            ref: t
                        }, (0, c.omit)(this.props, "collection", "disabled", "index")))
                    }
                }]), n
            }(a.Component), t.displayName = (0, c.provideDisplayName)("sortableElement", e), t.contextTypes = {
                manager: i.default.object.isRequired
            }, t.propTypes = {
                index: i.default.number.isRequired,
                collection: i.default.oneOfType([i.default.number, i.default.string]),
                disabled: i.default.bool
            }, t.defaultProps = {
                collection: 0
            }, n
        };
        var a = n("GiK3"),
            s = d(a),
            i = d(n("qUKr")),
            l = n("O27J"),
            u = d(n("crWv")),
            c = n("Vgej");

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    ymQA: function(e, t, n) {
        var r = n("Zfct"),
            o = n("vwDu"),
            a = n("Bxt2"),
            s = n("a/6q"),
            i = n("wVoL");

        function l(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = s, l.prototype.set = i, e.exports = l
    },
    zN4B: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, r) {
                n[++t] = [r, e]
            }), n
        }
    }
});
//# sourceMappingURL=pages.dashboard-settings-e3aa5afbb8ba98d39d6072598f50aea9.js.map