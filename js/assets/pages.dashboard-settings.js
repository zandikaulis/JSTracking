webpackJsonp([100], {
    "+bIS": function(e, t, r) {
        "use strict";

        function n(e) {
            return function() {
                return e
            }
        }
        var o = function() {};
        o.thatReturns = n, o.thatReturnsFalse = n(!1), o.thatReturnsTrue = n(!0), o.thatReturnsNull = n(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(e) {
            return e
        }, e.exports = o
    },
    "+cPc": function(e, t, r) {
        var n = r("CUG3"),
            o = r("n8KP"),
            a = r("/UYc");
        e.exports = function(e) {
            var t = o(e);
            return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(r) {
                return r === e || n(r, e, t)
            }
        }
    },
    "+fHz": function(e, t) {},
    "//bJ": function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (a[o++] = s)
            }
            return a
        }
    },
    "/MI9": function(e, t, r) {
        var n = r("fXkM"),
            o = r("11iS");
        e.exports = function(e, t) {
            return null != e && o(e, t, n)
        }
    },
    "/UYc": function(e, t) {
        e.exports = function(e, t) {
            return function(r) {
                return null != r && r[e] === t && (void 0 !== t || e in Object(r))
            }
        }
    },
    "/ewM": function(e, t, r) {
        var n = r("WFpE");
        e.exports = function(e, t, r) {
            for (var o = -1, a = e.criteria, s = t.criteria, i = a.length, u = r.length; ++o < i;) {
                var c = n(a[o], s[o]);
                if (c) return o >= u ? c : c * ("desc" == r[o] ? -1 : 1)
            }
            return e.index - t.index
        }
    },
    "0e1M": function(e, t, r) {
        var n = r("eWqu"),
            o = r("wSgH")(n);
        e.exports = o
    },
    "0pjK": function(e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "0zkw": function(e, t) {
        var r = 800,
            n = 16,
            o = Date.now;
        e.exports = function(e) {
            var t = 0,
                a = 0;
            return function() {
                var s = o(),
                    i = n - (s - a);
                if (a = s, i > 0) {
                    if (++t >= r) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
    },
    "11iS": function(e, t, r) {
        var n = r("aIUG"),
            o = r("H3TN"),
            a = r("mG6l"),
            s = r("cjOD"),
            i = r("2iRz"),
            u = r("F6hB");
        e.exports = function(e, t, r) {
            for (var c = -1, l = (t = n(t, e)).length, d = !1; ++c < l;) {
                var h = u(t[c]);
                if (!(d = null != e && r(e, h))) break;
                e = e[h]
            }
            return d || ++c != l ? d : !!(l = null == e ? 0 : e.length) && i(l) && s(h, l) && (a(e) || o(e))
        }
    },
    "1nXM": function(e, t, r) {
        var n = r("g/lL"),
            o = r("pLne"),
            a = r("HMFB");
        e.exports = function(e) {
            return n(e, a, o)
        }
    },
    "1tEs": function(e, t, r) {
        (function(t) {
            var r = "object" == typeof t && t && t.Object === Object && t;
            e.exports = r
        }).call(t, r("DuR2"))
    },
    "2EIm": function(e, t, r) {
        var n = r("Bh6c");
        e.exports = function() {
            this.__data__ = new n, this.size = 0
        }
    },
    "2hJ3": function(e, t, r) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var r = !0;
            try {
                r = document.execCommand("copy")
            } catch (e) {
                r = !1
            }
            return document.body.removeChild(t), r
        }
    },
    "2iRz": function(e, t) {
        var r = 9007199254740991;
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
        }
    },
    "2oz3": function(e, t, r) {
        var n = r("INOA"),
            o = r("mAEY");
        e.exports = function e(t, r, a, s, i) {
            var u = -1,
                c = t.length;
            for (a || (a = o), i || (i = []); ++u < c;) {
                var l = t[u];
                r > 0 && a(l) ? r > 1 ? e(l, r - 1, a, s, i) : n(i, l) : s || (i[i.length] = l)
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
    "43dD": function(e, t, r) {
        var n = r("JGv7"),
            o = r("H1YI"),
            a = r("OZxy"),
            s = "[object Null]",
            i = "[object Undefined]",
            u = n ? n.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? i : s : u && u in Object(e) ? o(e) : a(e)
        }
    },
    "4UmU": function(e, t, r) {
        var n = r("EpL8"),
            o = r("Czj7"),
            a = r("cjOD"),
            s = r("kl/u");
        e.exports = function(e, t, r) {
            if (!s(r)) return !1;
            var i = typeof t;
            return !!("number" == i ? o(r) && a(t, r.length) : "string" == i && t in r) && n(r[t], e)
        }
    },
    "4hEs": function(e, t, r) {
        var n = r("uIws");
        e.exports = function(e) {
            var t = this.__data__,
                r = n(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
    },
    "50Oj": function(e, t, r) {
        var n = r("HMFi"),
            o = r("SjFU"),
            a = r("Ro3v"),
            s = r("BhXZ"),
            i = r("usEs"),
            u = r("/ewM"),
            c = r("F3kA");
        e.exports = function(e, t, r) {
            var l = -1;
            t = n(t.length ? t : [c], i(o));
            var d = a(e, function(e, r, o) {
                return {
                    criteria: n(t, function(t) {
                        return t(e)
                    }),
                    index: ++l,
                    value: e
                }
            });
            return s(d, function(e, t) {
                return u(e, t, r)
            })
        }
    },
    "57tO": function(e, t, r) {
        var n = r("NDrF")(r("MygC"), "Set");
        e.exports = n
    },
    "5EkD": function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("Odds"),
            a = (r("TJLs"), function(e) {
                return n.createElement(o._35, {
                    className: "settings-page-header",
                    borderTop: !0,
                    borderRight: !0,
                    borderLeft: !0,
                    background: o.n.Base
                }, n.createElement(o._6, {
                    linkTo: e.linkToParent,
                    onClick: e.onClick,
                    alpha: !0
                }, n.createElement(o._8, {
                    display: o.R.Flex,
                    flexWrap: o.U.NoWrap
                }, n.createElement(o._8, {
                    display: o.R.Flex,
                    padding: {
                        x: 1
                    }
                }, n.createElement(o._24, {
                    asset: o._25.AngleLeft,
                    height: 20,
                    width: 20
                })), n.createElement(o._8, {
                    flexGrow: 1,
                    margin: 2
                }, n.createElement(o.Q, {
                    bold: !0,
                    fontSize: o.V.Size4
                }, e.title), n.createElement(o.Q, {
                    color: o.K.Alt2
                }, e.description)))))
            });
        r.d(t, "a", function() {
            return a
        })
    },
    "5Y57": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            o = r("GiK3"),
            a = r("rCmJ"),
            s = r("6sO2"),
            i = r("Odds"),
            u = function() {
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
            c = r("6BvN"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        focusSelectable: !1,
                        isOpen: !1
                    }, t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.onKeyDown = function(e) {
                        e.keyCode === c.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === c.a.Up ? t.focusNext(-1) : e.keyCode === c.a.Down && t.focusNext(1)
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        }), t.props.onClose && t.props.onClose()
                    }, t.onMouseOver = function(e) {
                        var r = e.target.closest("[data-selectable]");
                        r && (r.focus(), r.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                            currentFocus: r
                        }), t.props.onFocusChange && t.props.onFocusChange(r))
                    }, t.getInputRef = function(e) {
                        t.inputRef = e
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.isErrored ? o.createElement(u, null) : o.Children.only(this.props.children);
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
                    }), o.createElement(i.q, n.__assign({
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
                    var t, r = document.querySelectorAll("[data-selectable=true]"),
                        n = document.activeElement,
                        o = Array.prototype.indexOf.call(r, n);
                    if ((t = o < 0 ? e > 0 ? 0 : r.length - 1 : o + e) < 0 && (t = 0), !(t >= r.length)) {
                        var a = r.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        }), this.props.onFocusChange && this.props.onFocusChange(a)
                    }
                }, t
            }(o.Component);
        r.d(t, "a", function() {
            return l
        })
    },
    "5hfY": function(e, t, r) {
        var n = r("L3k4");
        e.exports = function(e) {
            return function(t) {
                return n(t, e)
            }
        }
    },
    "6Exb": function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    "6TIu": function(e, t, r) {
        var n = r("uIws");
        e.exports = function(e) {
            return n(this.__data__, e) > -1
        }
    },
    "81TE": function(e, t) {
        e.exports = function(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
    },
    "8Wze": function(e, t, r) {
        var n, o = r("MA13"),
            a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
        e.exports = function(e) {
            return !!a && a in e
        }
    },
    "8sB4": function(e, t, r) {
        var n = r("SjFU"),
            o = r("Czj7"),
            a = r("HMFB");
        e.exports = function(e) {
            return function(t, r, s) {
                var i = Object(t);
                if (!o(t)) {
                    var u = n(r, 3);
                    t = a(t), r = function(e) {
                        return u(i[e], e, i)
                    }
                }
                var c = e(t, r, s);
                return c > -1 ? i[u ? t[c] : c] : void 0
            }
        }
    },
    "8xms": function(e, t, r) {
        var n = r("w1Jz"),
            o = "__lodash_hash_undefined__",
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            if (n) {
                var r = t[e];
                return r === o ? void 0 : r
            }
            return a.call(t, e) ? t[e] : void 0
        }
    },
    "9GW9": function(e, t) {
        e.exports = function(e) {
            return this.__data__.get(e)
        }
    },
    "9c95": function(e, t, r) {
        var n = r("8sB4")(r("i4TT"));
        e.exports = n
    },
    "9nrn": function(e, t, r) {
        var n = r("NDrF")(r("MygC"), "Map");
        e.exports = n
    },
    A2t5: function(e, t, r) {
        var n = r("L3k4");
        e.exports = function(e, t, r) {
            var o = null == e ? void 0 : n(e, t);
            return void 0 === o ? r : o
        }
    },
    AJkw: function(e, t) {
        e.exports = function(e) {
            return function(t, r, n) {
                for (var o = -1, a = Object(t), s = n(t), i = s.length; i--;) {
                    var u = s[e ? i : ++o];
                    if (!1 === r(a[u], u, a)) break
                }
                return t
            }
        }
    },
    "AQc/": function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("Odds");

        function a(e) {
            var t = null;
            return e.description && (t = n.createElement(o._8, {
                margin: {
                    top: 1
                }
            }, n.createElement(o.Q, {
                color: o.K.Alt2
            }, e.description))), n.createElement(o._8, {
                margin: {
                    y: 2
                }
            }, n.createElement(o.Q, {
                type: o._49.H3,
                fontSize: o.V.Size2
            }, e.title), t)
        }
        r.d(t, "a", function() {
            return a
        })
    },
    Ao0V: function(e, t, r) {
        var n = r("JGv7"),
            o = r("yMkz"),
            a = r("EpL8"),
            s = r("qu3O"),
            i = r("zN4B"),
            u = r("pUak"),
            c = 1,
            l = 2,
            d = "[object Boolean]",
            h = "[object Date]",
            p = "[object Error]",
            f = "[object Map]",
            g = "[object Number]",
            v = "[object RegExp]",
            m = "[object Set]",
            y = "[object String]",
            b = "[object Symbol]",
            S = "[object ArrayBuffer]",
            x = "[object DataView]",
            _ = n ? n.prototype : void 0,
            E = _ ? _.valueOf : void 0;
        e.exports = function(e, t, r, n, _, O, w) {
            switch (r) {
                case x:
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
                case v:
                case y:
                    return e == t + "";
                case f:
                    var C = i;
                case m:
                    var j = n & c;
                    if (C || (C = u), e.size != t.size && !j) return !1;
                    var k = w.get(e);
                    if (k) return k == t;
                    n |= l, w.set(e, t);
                    var T = s(C(e), C(t), n, _, O, w);
                    return w.delete(e), T;
                case b:
                    if (E) return E.call(e) == E.call(t)
            }
            return !1
        }
    },
    BALR: function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
    },
    BaEo: function(e, t) {
        e.exports = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
    },
    Bh6c: function(e, t, r) {
        var n = r("sBY2"),
            o = r("iLYB"),
            a = r("4hEs"),
            s = r("6TIu"),
            i = r("eGfi");

        function u(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = s, u.prototype.set = i, e.exports = u
    },
    BhXZ: function(e, t) {
        e.exports = function(e, t) {
            var r = e.length;
            for (e.sort(t); r--;) e[r] = e[r].value;
            return e
        }
    },
    Bxt2: function(e, t, r) {
        var n = r("DRNv");
        e.exports = function(e) {
            return n(this, e).get(e)
        }
    },
    CTFd: function(e, t, r) {
        var n = r("AJkw")();
        e.exports = n
    },
    CUG3: function(e, t, r) {
        var n = r("gKqb"),
            o = r("GVhz"),
            a = 1,
            s = 2;
        e.exports = function(e, t, r, i) {
            var u = r.length,
                c = u,
                l = !i;
            if (null == e) return !c;
            for (e = Object(e); u--;) {
                var d = r[u];
                if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++u < c;) {
                var h = (d = r[u])[0],
                    p = e[h],
                    f = d[1];
                if (l && d[2]) {
                    if (void 0 === p && !(h in e)) return !1
                } else {
                    var g = new n;
                    if (i) var v = i(p, f, h, e, t, g);
                    if (!(void 0 === v ? o(f, p, a | s, i, g) : v)) return !1
                }
            }
            return !0
        }
    },
    CZUI: function(e, t, r) {
        var n = r("U2kw"),
            o = r("8Wze"),
            a = r("kl/u"),
            s = r("NuOc"),
            i = /^\[object .+?Constructor\]$/,
            u = Function.prototype,
            c = Object.prototype,
            l = u.toString,
            d = c.hasOwnProperty,
            h = RegExp("^" + l.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!a(e) || o(e)) && (n(e) ? h : i).test(s(e))
        }
    },
    Czj7: function(e, t, r) {
        var n = r("U2kw"),
            o = r("2iRz");
        e.exports = function(e) {
            return null != e && o(e.length) && !n(e)
        }
    },
    D4QM: function(e, t, r) {
        var n = /^\./,
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            s = r("ROCN")(function(e) {
                var t = [];
                return n.test(e) && t.push(""), e.replace(o, function(e, r, n, o) {
                    t.push(n ? o.replace(a, "$1") : r || e)
                }), t
            });
        e.exports = s
    },
    DRNv: function(e, t, r) {
        var n = r("enQx");
        e.exports = function(e, t) {
            var r = e.__data__;
            return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
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
    F6hB: function(e, t, r) {
        var n = r("SCwa"),
            o = 1 / 0;
        e.exports = function(e) {
            if ("string" == typeof e || n(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -o ? "-0" : t
        }
    },
    Fbrx: function(e, t, r) {
        var n = r("GVhz"),
            o = r("A2t5"),
            a = r("/MI9"),
            s = r("QQy1"),
            i = r("am5H"),
            u = r("/UYc"),
            c = r("F6hB"),
            l = 1,
            d = 2;
        e.exports = function(e, t) {
            return s(e) && i(t) ? u(c(e), t) : function(r) {
                var s = o(r, e);
                return void 0 === s && s === t ? a(r, e) : n(t, s, l | d)
            }
        }
    },
    FvmC: function(e, t, r) {
        var n = r("NDrF")(r("MygC"), "WeakMap");
        e.exports = n
    },
    Fy4Y: function(e, t, r) {
        var n = r("81TE")(Object.keys, Object);
        e.exports = n
    },
    "GH+X": function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("Odds"),
            a = (r("3fb4"), function(e) {
                var t = null;
                return e.footer && (t = n.createElement(o._35, {
                    padding: 2,
                    background: o.n.Alt2
                }, e.footer)), n.createElement(o._35, {
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
        r.d(t, "a", function() {
            return a
        })
    },
    GVhz: function(e, t, r) {
        var n = r("M+Mb"),
            o = r("VGcK");
        e.exports = function e(t, r, a, s, i) {
            return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, a, s, e, i))
        }
    },
    H1YI: function(e, t, r) {
        var n = r("JGv7"),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.toString,
            i = n ? n.toStringTag : void 0;
        e.exports = function(e) {
            var t = a.call(e, i),
                r = e[i];
            try {
                e[i] = void 0;
                var n = !0
            } catch (e) {}
            var o = s.call(e);
            return n && (t ? e[i] = r : delete e[i]), o
        }
    },
    H3TN: function(e, t, r) {
        var n = r("tobj"),
            o = r("VGcK"),
            a = Object.prototype,
            s = a.hasOwnProperty,
            i = a.propertyIsEnumerable,
            u = n(function() {
                return arguments
            }()) ? n : function(e) {
                return o(e) && s.call(e, "callee") && !i.call(e, "callee")
            };
        e.exports = u
    },
    HMFB: function(e, t, r) {
        var n = r("OScx"),
            o = r("r0iv"),
            a = r("Czj7");
        e.exports = function(e) {
            return a(e) ? n(e) : o(e)
        }
    },
    HMFi: function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
            return o
        }
    },
    INOA: function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
            return e
        }
    },
    Ii8z: function(e, t) {
        e.exports = function(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
    },
    IjoR: function(e, t) {},
    J0u9: function(e, t, r) {
        var n = r("2oz3"),
            o = r("50Oj"),
            a = r("L4AJ"),
            s = r("4UmU"),
            i = a(function(e, t) {
                if (null == e) return [];
                var r = t.length;
                return r > 1 && s(e, t[0], t[1]) ? t = [] : r > 2 && s(t[0], t[1], t[2]) && (t = [t[0]]), o(e, n(t, 1), [])
            });
        e.exports = i
    },
    JGv7: function(e, t, r) {
        var n = r("MygC").Symbol;
        e.exports = n
    },
    JYjH: function(e, t, r) {
        var n = r("m2wS"),
            o = r("5hfY"),
            a = r("QQy1"),
            s = r("F6hB");
        e.exports = function(e) {
            return a(e) ? n(s(e)) : o(e)
        }
    },
    Jo6h: function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("6sO2"),
            a = r("OjIq"),
            s = r("Odds"),
            i = (r("IjoR"), function(e) {
                return n.createElement(s._35, {
                    className: "settings-form-group"
                }, n.createElement(a.a, null, n.createElement(s.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(o.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || s.X.Horizontal
                }, e.children)))
            });
        r.d(t, "a", function() {
            return i
        })
    },
    KYFq: function(e, t, r) {
        var n = r("kl/u"),
            o = r("SCwa"),
            a = NaN,
            s = /^\s+|\s+$/g,
            i = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            l = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e) return e;
            if (o(e)) return a;
            if (n(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = n(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var r = u.test(e);
            return r || c.test(e) ? l(e.slice(2), r ? 2 : 8) : i.test(e) ? a : +e
        }
    },
    Kc4v: function(e, t, r) {
        "use strict";
        var n, o;
        r.d(t, "a", function() {
                return n
            }), r.d(t, "c", function() {
                return o
            }), r.d(t, "b", function() {
                return a
            }),
            function(e) {
                e.Random = "random", e.Ordered = "ordered"
            }(n || (n = {})),
            function(e) {
                e.All = "all", e.Network = "network", e.None = "none"
            }(o || (o = {}));
        var a = {
            vodcastHosting: !1,
            enabled: !1,
            strategy: n.Random,
            teamHost: !1,
            raidPreference: o.None
        }
    },
    L3k4: function(e, t, r) {
        var n = r("aIUG"),
            o = r("F6hB");
        e.exports = function(e, t) {
            for (var r = 0, a = (t = n(t, e)).length; null != e && r < a;) e = e[o(t[r++])];
            return r && r == a ? e : void 0
        }
    },
    L4AJ: function(e, t, r) {
        var n = r("F3kA"),
            o = r("MVM9"),
            a = r("iAlu");
        e.exports = function(e, t) {
            return a(o(e, t, n), e + "")
        }
    },
    "M+Mb": function(e, t, r) {
        var n = r("gKqb"),
            o = r("qu3O"),
            a = r("Ao0V"),
            s = r("k6Ms"),
            i = r("bL9o"),
            u = r("mG6l"),
            c = r("mPnA"),
            l = r("YOyG"),
            d = 1,
            h = "[object Arguments]",
            p = "[object Array]",
            f = "[object Object]",
            g = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, r, v, m, y) {
            var b = u(e),
                S = u(t),
                x = b ? p : i(e),
                _ = S ? p : i(t),
                E = (x = x == h ? f : x) == f,
                O = (_ = _ == h ? f : _) == f,
                w = x == _;
            if (w && c(e)) {
                if (!c(t)) return !1;
                b = !0, E = !1
            }
            if (w && !E) return y || (y = new n), b || l(e) ? o(e, t, r, v, m, y) : a(e, t, x, r, v, m, y);
            if (!(r & d)) {
                var C = E && g.call(e, "__wrapped__"),
                    j = O && g.call(t, "__wrapped__");
                if (C || j) {
                    var k = C ? e.value() : e,
                        T = j ? t.value() : t;
                    return y || (y = new n), m(k, T, r, v, y)
                }
            }
            return !!w && (y || (y = new n), s(e, t, r, v, m, y))
        }
    },
    M0TM: function(e, t, r) {
        var n = r("Bh6c"),
            o = r("9nrn"),
            a = r("ymQA"),
            s = 200;
        e.exports = function(e, t) {
            var r = this.__data__;
            if (r instanceof n) {
                var i = r.__data__;
                if (!o || i.length < s - 1) return i.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new a(i)
            }
            return r.set(e, t), this.size = r.size, this
        }
    },
    MA13: function(e, t, r) {
        var n = r("MygC")["__core-js_shared__"];
        e.exports = n
    },
    MVM9: function(e, t, r) {
        var n = r("Ii8z"),
            o = Math.max;
        e.exports = function(e, t, r) {
            return t = o(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var a = arguments, s = -1, i = o(a.length - t, 0), u = Array(i); ++s < i;) u[s] = a[t + s];
                    s = -1;
                    for (var c = Array(t + 1); ++s < t;) c[s] = a[s];
                    return c[t] = r(u), n(e, this, c)
                }
        }
    },
    MygC: function(e, t, r) {
        var n = r("1tEs"),
            o = "object" == typeof self && self && self.Object === Object && self,
            a = n || o || Function("return this")();
        e.exports = a
    },
    "N/hX": function(e, t) {},
    NDrF: function(e, t, r) {
        var n = r("CZUI"),
            o = r("6Exb");
        e.exports = function(e, t) {
            var r = o(e, t);
            return n(r) ? r : void 0
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
        var r = Function.prototype.toString;
        e.exports = function(e) {
            if (null != e) {
                try {
                    return r.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
    },
    OScx: function(e, t, r) {
        var n = r("YNJY"),
            o = r("H3TN"),
            a = r("mG6l"),
            s = r("mPnA"),
            i = r("cjOD"),
            u = r("YOyG"),
            c = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var r = a(e),
                l = !r && o(e),
                d = !r && !l && s(e),
                h = !r && !l && !d && u(e),
                p = r || l || d || h,
                f = p ? n(e.length, String) : [],
                g = f.length;
            for (var v in e) !t && !c.call(e, v) || p && ("length" == v || d && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || i(v, g)) || f.push(v);
            return f
        }
    },
    OZxy: function(e, t) {
        var r = Object.prototype.toString;
        e.exports = function(e) {
            return r.call(e)
        }
    },
    OjIq: function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("Odds"),
            a = function(e) {
                var t = null;
                return e.title && (t = n.createElement(o._8, {
                    padding: {
                        bottom: 1
                    }
                }, n.createElement(o.Q, {
                    fontSize: o.V.Size6,
                    color: e.error ? o.K.Error : o.K.Base,
                    bold: !0
                }, e.title))), n.createElement(o._35, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && n.createElement(o.Q, {
                    color: o.K.Error,
                    fontSize: o.V.Size7
                }, e.errorMessage))
            };
        r.d(t, "a", function() {
            return a
        })
    },
    "P/Wu": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                !n && i.return && i.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return r
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            a = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
        t.default = function(e) {
            var t, r, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return r = t = function(t) {
                function r(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var t = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                    return t.handleStart = function(e) {
                        var r = t.props,
                            n = r.distance,
                            o = r.shouldCancelStart;
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
                                u = i.index,
                                c = i.collection;
                            if (s && !(0, h.closest)(e.target, function(e) {
                                    return null != e.sortableHandle
                                })) return;
                            t.manager.active = {
                                index: u,
                                collection: c
                            }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), n || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                return t.handlePress(e)
                            }, t.props.pressDelay))
                        }
                    }, t.nodeIsChild = function(e) {
                        return e.sortableInfo.manager === t.manager
                    }, t.handleMove = function(e) {
                        var r = t.props,
                            n = r.distance,
                            o = r.pressThreshold;
                        if (!t.state.sorting && t._touched) {
                            t._delta = {
                                x: t._pos.x - e.pageX,
                                y: t._pos.y - e.pageY
                            };
                            var a = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                            n || o && !(o && a >= o) ? n && a >= n && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                        }
                    }, t.handleEnd = function() {
                        var e = t.props.distance;
                        t._touched = !1, e || t.cancel()
                    }, t.cancel = function() {
                        t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                    }, t.handlePress = function(e) {
                        var r = t.manager.getActive();
                        if (r) {
                            var n = t.props,
                                o = n.axis,
                                a = n.getHelperDimensions,
                                s = n.helperClass,
                                i = n.hideSortableGhost,
                                u = n.onSortStart,
                                c = n.useWindowAsScrollContainer,
                                l = r.node,
                                d = r.collection,
                                p = l.sortableInfo.index,
                                g = (0, h.getElementMargin)(l),
                                v = t.container.getBoundingClientRect(),
                                m = a({
                                    index: p,
                                    node: l,
                                    collection: d
                                });
                            t.node = l, t.margin = g, t.width = m.width, t.height = m.height, t.marginOffset = {
                                x: t.margin.left + t.margin.right,
                                y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = l.getBoundingClientRect(), t.containerBoundingRect = v, t.index = p, t.newIndex = p, t.axis = {
                                x: o.indexOf("x") >= 0,
                                y: o.indexOf("y") >= 0
                            }, t.offsetEdge = t.getEdgeOffset(l), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                top: t.scrollContainer.scrollTop,
                                left: t.scrollContainer.scrollLeft
                            }, t.initialWindowScroll = {
                                top: window.pageYOffset,
                                left: window.pageXOffset
                            };
                            var y, b = l.querySelectorAll("input, textarea, select"),
                                S = l.cloneNode(!0),
                                x = [].concat(f(S.querySelectorAll("input, textarea, select")));
                            if (x.forEach(function(e, t) {
                                    "file" !== e.type && b[t] && (e.value = b[t].value)
                                }), t.helper = t.document.body.appendChild(S), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", i && (t.sortableGhost = l, l.style.visibility = "hidden", l.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (c ? 0 : v.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (c ? t.contentWindow.innerWidth : v.left + v.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (c ? 0 : v.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (c ? t.contentWindow.innerHeight : v.top + v.height) - t.boundingClientRect.top - t.height / 2), s)(y = t.helper.classList).add.apply(y, f(s.split(" ")));
                            t.listenerNode = e.touches ? l : t.contentWindow, h.events.move.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                            }), h.events.end.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                            }), t.setState({
                                sorting: !0,
                                sortingIndex: p
                            }), u && u({
                                node: l,
                                index: p,
                                collection: d
                            }, e)
                        }
                    }, t.handleSortMove = function(e) {
                        var r = t.props.onSortMove;
                        e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), r && r(e)
                    }, t.handleSortEnd = function(e) {
                        var r = t.props,
                            n = r.hideSortableGhost,
                            o = r.onSortEnd,
                            a = t.manager.active.collection;
                        t.listenerNode && (h.events.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                        }), h.events.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                        })), t.helper.parentNode.removeChild(t.helper), n && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                        for (var s = t.manager.refs[a], i = 0, u = s.length; i < u; i++) {
                            var c = s[i],
                                l = c.node;
                            c.edgeOffset = null, l.style[h.vendorPrefix + "Transform"] = "", l.style[h.vendorPrefix + "TransitionDuration"] = ""
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
                            r = {
                                x: 0,
                                y: 0
                            },
                            n = {
                                x: 1,
                                y: 1
                            },
                            o = {
                                x: 10,
                                y: 10
                            };
                        e.y >= t.maxTranslate.y - t.height / 2 ? (r.y = 1, n.y = o.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (r.x = 1, n.x = o.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (r.y = -1, n.y = o.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (r.x = -1, n.x = o.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === r.x && 0 === r.y || (t.autoscrollInterval = setInterval(function() {
                            t.isAutoScrolling = !0;
                            var e = {
                                left: 1 * n.x * r.x,
                                top: 1 * n.y * r.y
                            };
                            t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                        }, 5))
                    }, t.manager = new d.default, t.events = {
                        start: t.handleStart,
                        move: t.handleMove,
                        end: t.handleEnd
                    }, (0, l.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
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
                }(r, t), a(r, [{
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
                            r = t.getContainer,
                            n = t.useWindowAsScrollContainer,
                            o = this.props.contentWindow || window;
                        this.container = "function" == typeof r ? r(this.getWrappedInstance()) : (0, c.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = n ? this.document.body : this.container, this.contentWindow = "function" == typeof o ? o() : o;
                        var a = function(t) {
                            e.events.hasOwnProperty(t) && h.events[t].forEach(function(r) {
                                return e.container.addEventListener(r, e.events[t], !1)
                            })
                        };
                        for (var s in this.events) a(s)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this,
                            t = function(t) {
                                e.events.hasOwnProperty(t) && h.events[t].forEach(function(r) {
                                    return e.container.removeEventListener(r, e.events[t])
                                })
                            };
                        for (var r in this.events) t(r)
                    }
                }, {
                    key: "getEdgeOffset",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            top: 0,
                            left: 0
                        };
                        if (e) {
                            var r = {
                                top: t.top + e.offsetTop,
                                left: t.left + e.offsetLeft
                            };
                            return e.parentNode !== this.container ? this.getEdgeOffset(e.parentNode, r) : r
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
                        Array.isArray(e) || (e = [e, e]), (0, l.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                        var t = e,
                            r = o(t, 2),
                            n = r[0],
                            a = r[1];
                        return [this.getLockPixelOffset(n), this.getLockPixelOffset(a)]
                    }
                }, {
                    key: "getLockPixelOffset",
                    value: function(e) {
                        var t = e,
                            r = e,
                            n = "px";
                        if ("string" == typeof e) {
                            var o = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                            (0, l.default)(null !== o, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = r = parseFloat(e), n = o[1]
                        }
                        return (0, l.default)(isFinite(t) && isFinite(r), "lockOffset value should be a finite. Given %s", e), "%" === n && (t = t * this.width / 100, r = r * this.height / 100), {
                            x: t,
                            y: r
                        }
                    }
                }, {
                    key: "updatePosition",
                    value: function(e) {
                        var t = this.props,
                            r = t.lockAxis,
                            n = t.lockToContainerEdges,
                            a = this.getOffset(e),
                            s = {
                                x: a.x - this.initialOffset.x,
                                y: a.y - this.initialOffset.y
                            };
                        if (s.y -= window.pageYOffset - this.initialWindowScroll.top, s.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = s, n) {
                            var i = this.getLockPixelOffsets(),
                                u = o(i, 2),
                                c = u[0],
                                l = u[1],
                                d = {
                                    x: this.width / 2 - c.x,
                                    y: this.height / 2 - c.y
                                },
                                p = {
                                    x: this.width / 2 - l.x,
                                    y: this.height / 2 - l.y
                                };
                            s.x = (0, h.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - p.x, s.x), s.y = (0, h.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - p.y, s.y)
                        }
                        "x" === r ? s.y = 0 : "y" === r && (s.x = 0), this.helper.style[h.vendorPrefix + "Transform"] = "translate3d(" + s.x + "px," + s.y + "px, 0)"
                    }
                }, {
                    key: "animateNodes",
                    value: function() {
                        var e = this.props,
                            t = e.transitionDuration,
                            r = e.hideSortableGhost,
                            n = this.manager.getOrderedRefs(),
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
                        for (var i = 0, u = n.length; i < u; i++) {
                            var c = n[i].node,
                                l = c.sortableInfo.index,
                                d = c.offsetWidth,
                                p = c.offsetHeight,
                                f = {
                                    width: this.width > d ? d / 2 : this.width / 2,
                                    height: this.height > p ? p / 2 : this.height / 2
                                },
                                g = {
                                    x: 0,
                                    y: 0
                                },
                                v = n[i].edgeOffset;
                            v || (n[i].edgeOffset = v = this.getEdgeOffset(c));
                            var m = i < n.length - 1 && n[i + 1],
                                y = i > 0 && n[i - 1];
                            m && !m.edgeOffset && (m.edgeOffset = this.getEdgeOffset(m.node)), l !== this.index ? (t && (c.style[h.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? l < this.index && (a.left + s.left - f.width <= v.left && a.top + s.top <= v.top + f.height || a.top + s.top + f.height <= v.top) ? (g.x = this.width + this.marginOffset.x, v.left + g.x > this.containerBoundingRect.width - f.width && (g.x = m.edgeOffset.left - v.left, g.y = m.edgeOffset.top - v.top), null === this.newIndex && (this.newIndex = l)) : l > this.index && (a.left + s.left + f.width >= v.left && a.top + s.top + f.height >= v.top || a.top + s.top + f.height >= v.top + p) && (g.x = -(this.width + this.marginOffset.x), v.left + g.x < this.containerBoundingRect.left + f.width && (g.x = y.edgeOffset.left - v.left, g.y = y.edgeOffset.top - v.top), this.newIndex = l) : l > this.index && a.left + s.left + f.width >= v.left ? (g.x = -(this.width + this.marginOffset.x), this.newIndex = l) : l < this.index && a.left + s.left <= v.left + f.width && (g.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = l)) : this.axis.y && (l > this.index && a.top + s.top + f.height >= v.top ? (g.y = -(this.height + this.marginOffset.y), this.newIndex = l) : l < this.index && a.top + s.top <= v.top + f.height && (g.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = l))), c.style[h.vendorPrefix + "Transform"] = "translate3d(" + g.x + "px," + g.y + "px,0)") : r && (this.sortableGhost = c, c.style.visibility = "hidden", c.style.opacity = 0)
                        }
                        null == this.newIndex && (this.newIndex = this.index)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, l.default)(p.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = p.withRef ? "wrappedInstance" : null;
                        return i.default.createElement(e, n({
                            ref: t
                        }, (0, h.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                    }
                }]), r
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
                axis: u.default.oneOf(["x", "y", "xy"]),
                distance: u.default.number,
                lockAxis: u.default.string,
                helperClass: u.default.string,
                transitionDuration: u.default.number,
                contentWindow: u.default.any,
                onSortStart: u.default.func,
                onSortMove: u.default.func,
                onSortEnd: u.default.func,
                shouldCancelStart: u.default.func,
                pressDelay: u.default.number,
                useDragHandle: u.default.bool,
                useWindowAsScrollContainer: u.default.bool,
                hideSortableGhost: u.default.bool,
                lockToContainerEdges: u.default.bool,
                lockOffset: u.default.oneOfType([u.default.number, u.default.string, u.default.arrayOf(u.default.oneOfType([u.default.number, u.default.string]))]),
                getContainer: u.default.func,
                getHelperDimensions: u.default.func
            }, t.childContextTypes = {
                manager: u.default.object.isRequired
            }, r
        };
        var s = r("GiK3"),
            i = p(s),
            u = p(r("qUKr")),
            c = r("O27J"),
            l = p(r("crWv")),
            d = p(r("xKuy")),
            h = r("Vgej");

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
    },
    PWbw: function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    QG23: function(e, t, r) {
        var n = r("w1Jz"),
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return n ? void 0 !== t[e] : o.call(t, e)
        }
    },
    QQy1: function(e, t, r) {
        var n = r("mG6l"),
            o = r("SCwa"),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            s = /^\w*$/;
        e.exports = function(e, t) {
            if (n(e)) return !1;
            var r = typeof e;
            return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || s.test(e) || !a.test(e) || null != t && e in Object(t)
        }
    },
    QxUn: function(e, t, r) {
        var n = r("w1Jz"),
            o = "__lodash_hash_undefined__";
        e.exports = function(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? o : t, this
        }
    },
    ROCN: function(e, t, r) {
        var n = r("idL5"),
            o = 500;
        e.exports = function(e) {
            var t = n(e, function(e) {
                    return r.size === o && r.clear(), e
                }),
                r = t.cache;
            return t
        }
    },
    Ro3v: function(e, t, r) {
        var n = r("0e1M"),
            o = r("Czj7");
        e.exports = function(e, t) {
            var r = -1,
                a = o(e) ? Array(e.length) : [];
            return n(e, function(e, n, o) {
                a[++r] = t(e, n, o)
            }), a
        }
    },
    SCwa: function(e, t, r) {
        var n = r("43dD"),
            o = r("VGcK"),
            a = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || o(e) && n(e) == a
        }
    },
    SR0I: function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("Odds"),
            a = function(e) {
                return n.createElement(o._35, {
                    borderTop: !0
                }, n.createElement(o._6, {
                    linkTo: e.linkTo,
                    alpha: !0
                }, n.createElement(o._35, {
                    padding: 2,
                    alignItems: o.c.Center,
                    display: o.R.Flex,
                    flexWrap: o.U.NoWrap
                }, n.createElement(o._8, {
                    flexGrow: 1
                }, n.createElement(o.Q, {
                    fontSize: o.V.Size6,
                    bold: !0
                }, e.text), n.createElement(o.Q, {
                    type: o._49.Span
                }, e.description)), n.createElement(o._8, null, n.createElement(o._24, {
                    asset: o._25.AngleRight
                })))))
            };
        r.d(t, "a", function() {
            return a
        })
    },
    SVcC: function(e, t, r) {
        var n = r("KYFq"),
            o = 1 / 0,
            a = 1.7976931348623157e308;
        e.exports = function(e) {
            return e ? (e = n(e)) === o || e === -o ? (e < 0 ? -1 : 1) * a : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    SjFU: function(e, t, r) {
        var n = r("+cPc"),
            o = r("Fbrx"),
            a = r("F3kA"),
            s = r("mG6l"),
            i = r("JYjH");
        e.exports = function(e) {
            return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? s(e) ? o(e[0], e[1]) : n(e) : i(e)
        }
    },
    TJLs: function(e, t) {},
    U2kw: function(e, t, r) {
        var n = r("43dD"),
            o = r("kl/u"),
            a = "[object AsyncFunction]",
            s = "[object Function]",
            i = "[object GeneratorFunction]",
            u = "[object Proxy]";
        e.exports = function(e) {
            if (!o(e)) return !1;
            var t = n(e);
            return t == s || t == i || t == a || t == u
        }
    },
    "UT8+": function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
    },
    VEC5: function(e, t) {
        e.exports = function(e, t, r, n) {
            for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o;)
                if (t(e[a], a, e)) return a;
            return -1
        }
    },
    VGcK: function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    Vgej: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = function(e, t, r) {
            var n = e.slice(0);
            if (r >= n.length)
                for (var o = r - n.length; 1 + o--;) n.push(void 0);
            return n.splice(r, 0, n.splice(t, 1)[0]), n
        }, t.omit = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return Object.keys(e).reduce(function(t, n) {
                return -1 === r.indexOf(n) && (t[n] = e[n]), t
            }, {})
        }, t.closest = function(e, t) {
            for (; e;) {
                if (t(e)) return e;
                e = e.parentNode
            }
        }, t.limit = function(e, t, r) {
            if (r < e) return e;
            if (r > t) return t;
            return r
        }, t.getElementMargin = function(e) {
            var t = window.getComputedStyle(e);
            return {
                top: n(t.marginTop),
                right: n(t.marginRight),
                bottom: n(t.marginBottom),
                left: n(t.marginLeft)
            }
        }, t.provideDisplayName = function(e, t) {
            var r = t.displayName || t.name;
            return r ? e + "(" + r + ")" : e
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

        function n(e) {
            return "px" === e.substr(-2) ? parseFloat(e) : 0
        }
    },
    WFpE: function(e, t, r) {
        var n = r("SCwa");
        e.exports = function(e, t) {
            if (e !== t) {
                var r = void 0 !== e,
                    o = null === e,
                    a = e == e,
                    s = n(e),
                    i = void 0 !== t,
                    u = null === t,
                    c = t == t,
                    l = n(t);
                if (!u && !l && !s && e > t || s && i && c && !u && !l || o && i && c || !r && c || !a) return 1;
                if (!o && !s && !l && e < t || l && r && a && !o && !s || u && r && a || !i && a || !c) return -1
            }
            return 0
        }
    },
    WlEI: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    YNJY: function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
    },
    YOyG: function(e, t, r) {
        var n = r("y5ks"),
            o = r("usEs"),
            a = r("skb1"),
            s = a && a.isTypedArray,
            i = s ? o(s) : n;
        e.exports = i
    },
    Zfct: function(e, t, r) {
        var n = r("oDbm"),
            o = r("Bh6c"),
            a = r("9nrn");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new n,
                map: new(a || o),
                string: new n
            }
        }
    },
    "a/6q": function(e, t, r) {
        var n = r("DRNv");
        e.exports = function(e) {
            return n(this, e).has(e)
        }
    },
    aIUG: function(e, t, r) {
        var n = r("mG6l"),
            o = r("QQy1"),
            a = r("D4QM"),
            s = r("kdNP");
        e.exports = function(e, t) {
            return n(e) ? e : o(e, t) ? [e] : a(s(e))
        }
    },
    am5H: function(e, t, r) {
        var n = r("kl/u");
        e.exports = function(e) {
            return e == e && !n(e)
        }
    },
    bL9o: function(e, t, r) {
        var n = r("t3nn"),
            o = r("9nrn"),
            a = r("uS5W"),
            s = r("57tO"),
            i = r("FvmC"),
            u = r("43dD"),
            c = r("NuOc"),
            l = c(n),
            d = c(o),
            h = c(a),
            p = c(s),
            f = c(i),
            g = u;
        (n && "[object DataView]" != g(new n(new ArrayBuffer(1))) || o && "[object Map]" != g(new o) || a && "[object Promise]" != g(a.resolve()) || s && "[object Set]" != g(new s) || i && "[object WeakMap]" != g(new i)) && (g = function(e) {
            var t = u(e),
                r = "[object Object]" == t ? e.constructor : void 0,
                n = r ? c(r) : "";
            if (n) switch (n) {
                case l:
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
    cXqt: function(e, t, r) {
        var n = r("ymQA"),
            o = r("o3xN"),
            a = r("2urJ");

        function s(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.__data__ = new n; ++t < r;) this.add(e[t])
        }
        s.prototype.add = s.prototype.push = o, s.prototype.has = a, e.exports = s
    },
    cjOD: function(e, t) {
        var r = 9007199254740991,
            n = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            return !!(t = null == t ? r : t) && ("number" == typeof e || n.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    deXC: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            o = r("GiK3"),
            a = r("gLfK"),
            s = r("Jo6h"),
            i = r("Odds"),
            u = function(e) {
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
                return n.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(s.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: i.X.Horizontal
                    }, this.renderBody())
                }, t
            }(o.Component);
        r.d(t, "a", function() {
            return u
        })
    },
    eGfi: function(e, t, r) {
        var n = r("uIws");
        e.exports = function(e, t) {
            var r = this.__data__,
                o = n(r, e);
            return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
        }
    },
    eWqu: function(e, t, r) {
        var n = r("CTFd"),
            o = r("HMFB");
        e.exports = function(e, t) {
            return e && n(e, t, o)
        }
    },
    eXGG: function(e, t, r) {
        "use strict";
        var n = function(e) {};
        e.exports = function(e, t, r, o, a, s, i, u) {
            if (n(t), !e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [r, o, a, s, i, u],
                        d = 0;
                    (c = new Error(t.replace(/%s/g, function() {
                        return l[d++]
                    }))).name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        }
    },
    enQx: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    f2K8: function(e, t, r) {
        "use strict";
        var n = r("+fHz");
        r.n(n);
        r.o(n, "AutohostStrategy") && r.d(t, "AutohostStrategy", function() {
            return n.AutohostStrategy
        }), r.o(n, "DEFAULT_AUTOHOST_SETTINGS") && r.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
            return n.DEFAULT_AUTOHOST_SETTINGS
        }), r.o(n, "RaidPreference") && r.d(t, "RaidPreference", function() {
            return n.RaidPreference
        }), r.o(n, "RequestState") && r.d(t, "RequestState", function() {
            return n.RequestState
        });
        var o = r("s6nI");
        r.d(t, "RequestState", function() {
            return o.a
        });
        var a = r("Kc4v");
        r.d(t, "AutohostStrategy", function() {
            return a.a
        }), r.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
            return a.b
        }), r.d(t, "RaidPreference", function() {
            return a.c
        })
    },
    fXkM: function(e, t) {
        e.exports = function(e, t) {
            return null != e && t in Object(e)
        }
    },
    fqzE: function(e, t) {
        var r = {
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
        r.loc.source = {
            body: "query DropsSettingsForm_GetUser($login: String!) {\nuser(login: $login) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "g/lL": function(e, t, r) {
        var n = r("INOA"),
            o = r("mG6l");
        e.exports = function(e, t, r) {
            var a = t(e);
            return o(e) ? a : n(a, r(e))
        }
    },
    gIJZ: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("RH2O"),
            o = r("Aj/L"),
            a = r("TToO"),
            s = r("GiK3"),
            i = r("CIox"),
            u = r("F8kA"),
            c = r("68hr"),
            l = r("zCIC"),
            d = r("3zLD"),
            h = r("6sO2"),
            p = r("j7/Y"),
            f = r("w9tK"),
            g = r("vH/s"),
            v = r("CSlQ"),
            m = r("5EkD"),
            y = r("OjIq"),
            b = r("GH+X"),
            S = r("LIeg"),
            x = r("i61F"),
            _ = r("HM6l"),
            E = r("9u8h"),
            O = r("5LoI"),
            w = r("MAZT");

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
        var j = r("6BvN"),
            k = function(e, t, r, n) {
                if (t) {
                    var o = document.querySelectorAll(".autohost-list-item");
                    if (!(o.length < 1)) {
                        var a = document.activeElement,
                            s = Array.prototype.indexOf.call(o, a),
                            i = s;
                        switch (e) {
                            case j.a.Space:
                                return r ? (n && (o.item(n).tabIndex = 0), {
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
                        if (!r) {
                            var u = o.item(i);
                            u.focus(), u.tabIndex = 0, n && (o.item(n).tabIndex = -1)
                        }
                        if (null !== n) {
                            var c = Object(x.arrayMove)(t, s, i);
                            return r ? {
                                autohostChannels: c,
                                selectedIndex: i
                            } : {
                                autohostChannels: c
                            }
                        }
                    }
                }
            },
            T = function(e, t) {
                return !(e !== j.a.Space || !t)
            },
            P = r("5Y57"),
            A = r("kqTE"),
            I = r("HW6M"),
            R = r("5kgt"),
            D = r("puy8"),
            M = r("Odds"),
            F = (r("x3dg"), function(e) {
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
                        r = {
                            "autohost-list-item": !0,
                            "autohost-list-item--hovered": t,
                            "autohost-list-item--selected": this.props.selected
                        },
                        n = null;
                    (t || this.props.selected) && (n = s.createElement(M._8, {
                        className: "autohost-list-item--remove",
                        padding: {
                            right: 1
                        },
                        display: M.R.Flex,
                        attachRight: !0
                    }, s.createElement(M._52, {
                        label: e,
                        direction: M._54.Left
                    }, s.createElement(M.w, {
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: M._25.Trash,
                        onClick: this.onRemoveClick,
                        overlay: !0
                    }))));
                    var o = this.props.user.avatar || Object(D.c)(this.props.user.id, 64);
                    return s.createElement(M._2, a.__assign({
                        className: I(r),
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(R.a)(this.props)), s.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        tabIndex: -1
                    }, s.createElement(M.C, {
                        row: !0
                    }, s.createElement(M._8, {
                        className: "autohost-list-item__avatar"
                    }, s.createElement(M.k, {
                        ratio: M.l.Aspect1x1
                    }, s.createElement("img", {
                        alt: this.props.user.name,
                        src: o,
                        draggable: !1
                    }))), s.createElement(M._8, {
                        flexGrow: 1,
                        display: M.R.Flex,
                        position: M._15.Relative
                    }, s.createElement(M._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, s.createElement(M.Q, {
                        type: M._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), n)))
                }, t
            }(s.Component)),
            L = Object(x.SortableElement)(function(e) {
                return s.createElement(F, a.__assign({}, e))
            }),
            N = (r("N/hX"), function(e) {
                return s.createElement(l.b, {
                    className: "autohost-list-edit",
                    suppressScrollX: !0
                }, s.createElement("ul", {
                    onKeyDown: e.onKeyDown,
                    role: "listbox",
                    tabIndex: 0,
                    "data-test-selector": "AUTO_HOST_LIST_SELECTOR"
                }, e.autohostChannels && e.autohostChannels.map(function(t, r) {
                    return s.createElement("li", {
                        key: t.id
                    }, s.createElement(L, {
                        user: t,
                        index: r,
                        onRemoveClick: e.onHostRemoved,
                        isSorting: e.isSorting,
                        selected: e.selectedIndex === r
                    }))
                })))
            }),
            K = Object(x.SortableContainer)(function(e) {
                return s.createElement(N, a.__assign({}, e))
            }),
            H = function(e) {
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
                    e = this.props.user.added ? s.createElement(M.v, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: M._25.Check,
                        statusAlertIcon: M._25.Trash,
                        statusAlertText: Object(h.d)("Remove", "AutohostUserResultCard")
                    }, Object(h.d)("Added", "AutohostUserResultCard")) : s.createElement(M.v, {
                        type: M.B.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(h.d)("Add", "AutohostUserResultCard"));
                    var t = this.props.user.avatar || Object(D.c)(this.props.user.id, 64);
                    return s.createElement(M._8, a.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(R.a)(this.props)), s.createElement(M.C, {
                        row: !0
                    }, s.createElement(M.E, {
                        alt: this.props.user.name,
                        src: t,
                        size: M.F.Size4,
                        aspect: M.l.Aspect1x1
                    }), s.createElement(M._8, {
                        flexGrow: 1,
                        display: M.R.Flex,
                        position: M._15.Relative
                    }, s.createElement(M._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, s.createElement(M.Q, {
                        type: M._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(s.Component),
            U = (r("qhiD"), function(e) {
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
                    return this.props.isWaiting ? t = s.createElement(M._10, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return s.createElement(A.a, {
                            key: t.id
                        }, s.createElement(H, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), s.createElement(M._8, {
                        className: "autohost-list",
                        alignContent: M.b.Center
                    }, s.createElement(M._8, {
                        position: M._15.Relative,
                        margin: {
                            y: 1
                        }
                    }, s.createElement(P.a, {
                        onChange: this.props.onUserInputChange,
                        onFocusInput: this.props.onFocusInput,
                        ref: this.setUserSearchRef,
                        placeholder: Object(h.d)("Search channels to host", "AutohostList"),
                        balloonProps: {
                            show: this.props.isUserSearchOpen,
                            direction: M.r.Bottom,
                            size: M.s.Large
                        },
                        onClose: this.props.onSearchClose,
                        isErrored: this.props.isSearchErrored
                    }, s.createElement(M._8, {
                        className: "autohost-list__user-search"
                    }, s.createElement(l.b, {
                        contentClassName: "autohost-list__user-search-content",
                        suppressScrollX: !0
                    }, s.createElement(M._8, {
                        fullWidth: !0
                    }, t, s.createElement(l.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), s.createElement(K, {
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
            G = "/kraken/streams/recommended",
            q = "kraken/autohost/list",
            W = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.state = {
                        userResults: [],
                        userTerm: "",
                        isUserSearchOpen: !1,
                        queryID: "",
                        isWaiting: !1,
                        autohostChannels: [],
                        recommendedChannels: null,
                        currentPage: 0,
                        selectedIndex: null
                    }, r.onUserInputChange = function(e) {
                        if (r.inputTimer && (clearTimeout(r.inputTimer), r.inputTimer = 0), r.props.onUserInput(), !e) return r.setRecommendedChannels(), void r.setState(function() {
                            return {
                                userTerm: "",
                                isWaiting: !1,
                                currentPage: 0
                            }
                        });
                        r.setState({
                            userTerm: e,
                            userResults: [],
                            isWaiting: !0,
                            currentPage: 0
                        }), r.inputTimer = setTimeout(function() {
                            return r.doUserSearch(e)
                        }, z)
                    }, r.loadMore = function() {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var e, t, r, n, o;
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
                                        return r = a.sent(), h.j.error(r, "Algolia page search failed"), this.setState({
                                            isUserSearchOpen: !0
                                        }), this.props.onError(""), [2];
                                    case 4:
                                        return t && t.users ? (n = this.deserializeUserResults(t), o = t.exhaustedHits, this.setState(function(t) {
                                            return {
                                                userResults: t.userResults.concat(n),
                                                isUserSearchOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: o
                                            }
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, r.addChannel = function(e) {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var t, r, n, o = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, E.a.putOrThrow(q, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return r = a.sent(), n = Object(h.d)("Unable to add user to auto host list", "AutohostList"), h.j.error(r, n, {
                                            target: e
                                        }), this.props.onError(n), [2];
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
                    }, r.onFocusInput = function() {
                        r.state.userTerm ? r.state.isUserSearchOpen || r.setState({
                            isUserSearchOpen: !0
                        }) : r.setRecommendedChannels()
                    }, r.setRecommendedChannels = function() {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var e, t, r, n = this;
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
                                        return o.trys.push([1, 3, , 4]), [4, E.a.getOrThrow(G)];
                                    case 2:
                                        return e = o.sent(), [3, 4];
                                    case 3:
                                        return t = o.sent(), h.j.error(t, "Unable to retrieve recomended channels"), [2];
                                    case 4:
                                        return e.body && (r = e.body.recommended_streams.map(function(e) {
                                            var t = String(e.channel._id);
                                            return {
                                                id: t,
                                                name: e.channel.display_name,
                                                login: e.channel.name,
                                                avatar: e.channel.logo,
                                                added: !!n.state.autohostChannels.find(function(e) {
                                                    return e.id === t
                                                })
                                            }
                                        }), this.setState({
                                            recommendedChannels: r,
                                            userResults: r,
                                            isUserSearchOpen: !0
                                        })), [2]
                                }
                            })
                        })
                    }, r.onSearchClose = function() {
                        r.setState({
                            isUserSearchOpen: !1
                        })
                    }, r.fetchChannelsList = function() {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var e, t, r, n;
                            return a.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, E.a.getOrThrow(q)];
                                    case 1:
                                        return e = o.sent(), [3, 3];
                                    case 2:
                                        return t = o.sent(), r = Object(h.d)("Unable to fetch auto host list", "AutohostList"), h.j.error(t, r), this.props.onError(r), [2];
                                    case 3:
                                        return e.body && (n = e.body.targets.map(function(e) {
                                            return {
                                                id: String(e._id),
                                                name: e.display_name,
                                                login: e.name,
                                                avatar: e.logo
                                            }
                                        }), this.setState({
                                            autohostChannels: n
                                        })), [2]
                                }
                            })
                        })
                    }, r.removeChannel = function(e) {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var t, r, n, o, s, i = this;
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
                                        return a.trys.push([1, 3, , 4]), [4, E.a.deleteOrThrow(q)];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return r = a.sent(), this.reportChannelError(e, r), [2];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (t = this.state.autohostChannels.slice(), (n = t.findIndex(function(t) {
                                                return e.id === t.id
                                            })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                        t.splice(n, 1), o = t.map(function(e) {
                                            return e.id
                                        }), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, E.a.putOrThrow(q, {
                                            body: {
                                                targets: o.join(",")
                                            }
                                        })];
                                    case 7:
                                        return a.sent(), [3, 9];
                                    case 8:
                                        return s = a.sent(), this.reportChannelError(e, s), [2];
                                    case 9:
                                        return this.setState(function(r) {
                                            return {
                                                userResults: i.updateAdded(r.userResults, e.id, !1) || [],
                                                recommendedChannels: i.updateAdded(r.recommendedChannels, e.id, !1),
                                                autohostChannels: t
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, r.updateAdded = function(e, t, r) {
                        var n = e ? e.findIndex(function(e) {
                                return t === e.id
                            }) : -1,
                            o = e;
                        return e && n >= 0 && (o = S(e, function(e) {
                            return e[n]
                        }, function(e) {
                            return e.added = r, e
                        })), o
                    }, r.onKeyDown = function(e) {
                        var t = k(e.keyCode, r.state.autohostChannels, r.state.isSorting, r.state.selectedIndex);
                        t && r.setState(t), T(e.keyCode, r.state.isSorting) && r.updateList(r.state.autohostChannels)
                    }, r.onChannelOrderChange = function(e) {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(r) {
                                return e.newIndex === e.oldIndex ? (this.setState({
                                    isSorting: !1
                                }), [2]) : (t = Object(x.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                    autohostChannels: t,
                                    isSorting: !1
                                }), this.updateList(t), [2])
                            })
                        })
                    }, r.onChannelOrderChangeStart = function() {
                        return r.setState({
                            isSorting: !0
                        })
                    }, r.searchClient = new w.a({
                        appId: h.a.algoliaApplicationID,
                        apiKey: h.a.algoliaAPIKey,
                        apolloClient: h.o.apollo.client,
                        logger: h.j,
                        config: h.a
                    }), r
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return s.createElement(U, {
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
                        var t, r, n, o;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(_.a)(), this.setState({
                                        queryID: t
                                    }), r = null, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Users, e, t)];
                                case 2:
                                    return r = a.sent(), [3, 4];
                                case 3:
                                    return n = a.sent(), h.j.error(n, "Algolia autohost user search failed"), this.setState({
                                        isWaiting: !1,
                                        isUserSearchOpen: !0
                                    }), this.props.onError(""), [2];
                                case 4:
                                    return r && r.users ? (o = this.deserializeUserResults(r), this.setState({
                                        userResults: o,
                                        isUserSearchOpen: !0,
                                        isWaiting: !1,
                                        exhaustedHits: r.exhaustedHits,
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
                    var r = Object(h.d)("Unable to remove channel from auto host list", "AutohostList");
                    h.j.error(t, r, {
                        target: e
                    }), this.props.onError(r)
                }, t.prototype.updateList = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, r, n;
                        return a.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    t = e.map(function(e) {
                                        return e.id
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, E.a.putOrThrow(q, {
                                        body: {
                                            targets: t.join(",")
                                        }
                                    })];
                                case 2:
                                    return o.sent(), [3, 4];
                                case 3:
                                    return r = o.sent(), n = Object(h.d)("Unable to re order auto host list", "AutohostList"), h.j.error(r, n), this.props.onError(n), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(s.Component);
        var V, B = Object(n.b)(function(e) {
                return {
                    user: Object(o.c)(e)
                }
            })(W),
            Q = function(e) {
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
                    return s.createElement(M._8, null, s.createElement(m.a, {
                        title: Object(h.d)("Host list", "AuthohostListPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings"
                    }), s.createElement(b.a, null, s.createElement(y.a, {
                        error: !!this.state.autohostError,
                        errorMessage: this.state.autohostError
                    }, s.createElement(M._8, {
                        display: M.R.Flex,
                        justifyContent: M._7.Center
                    }, s.createElement(B, {
                        onError: this.handleAutohostError,
                        onUserInput: this.handleAutohostInput,
                        isSearchErrored: !!this.state.autohostError
                    })))))
                }, t
            }(s.Component),
            J = Object(d.compose)(Object(v.d)("AutohostListPage", {
                autoReportInteractive: !0,
                destination: f.a.AutohostSettings
            }), Object(p.a)({
                location: g.PageviewLocation.AutohostSettings
            }))(Q),
            Y = r("AQc/"),
            X = r("Jo6h"),
            $ = r("SR0I"),
            Z = r("deXC"),
            ee = r("f2K8"),
            te = r("s6nI"),
            re = function(e) {
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
                            strategy: ee.AutohostStrategy.Random
                        })
                    }, t.handleSetOrderedAutohostStrategy = function() {
                        t.props.saveSettings({
                            strategy: ee.AutohostStrategy.Ordered
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(b.a, null, this.props.requestState === te.a.Error && s.createElement(y.a, null, s.createElement(M.Q, {
                        color: M.K.Error
                    }, Object(h.d)("Something went wrong. Give it another try later.", "AutohostSettings"))), s.createElement(Z.a, {
                        label: Object(h.d)("Auto host channels", "AutohostSettings"),
                        name: "enabled",
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.autohostSettings.enabled,
                        onChange: this.handleToggleEnabled,
                        description: Object(h.d)("Automatically host channels from your host list when you're offline", "AutohostSettings"),
                        id: "auto-host-channels-toggle",
                        "data-test-selector": "auto-host-channels-toggle"
                    }), s.createElement(Z.a, {
                        label: Object(h.d)("Host team channels", "AutohostSettings"),
                        name: "teamHost",
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.autohostSettings.teamHost,
                        onChange: this.handleToggleTeamHost,
                        id: "team-host",
                        description: Object(h.d)("Include team channels in your host list", "AutohostSettings")
                    }), s.createElement(Z.a, {
                        label: Object(h.d)("Host pre-recorded videos", "AutohostSettings"),
                        name: "vodcastHosting",
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.autohostSettings.vodcastHosting,
                        onChange: this.handleToggleVodcastHosting,
                        description: Object(h.d)("Include channels streaming pre-recorded video, like Premieres or Reruns", "AutohostSettings"),
                        id: "vodcast-hosting-toggle"
                    }), s.createElement(X.a, {
                        orientation: M.X.Horizontal,
                        label: Object(h.d)("Hosting priority", "AutohostSettings")
                    }, s.createElement(M._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(M._21, {
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.autohostSettings.strategy === ee.AutohostStrategy.Ordered,
                        onChange: this.handleSetOrderedAutohostStrategy,
                        label: Object(h.d)("Host channels by the order they appear in the list", "AutohostSettings"),
                        name: "hostPriority",
                        value: ee.AutohostStrategy.Ordered
                    })), s.createElement(M._21, {
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.autohostSettings.strategy === ee.AutohostStrategy.Random,
                        onChange: this.handleSetRandomAutohostStrategy,
                        label: Object(h.d)("Host channels randomly from the list", "AutohostSettings"),
                        name: "hostPriority",
                        value: ee.AutohostStrategy.Random
                    })), s.createElement($.a, {
                        text: Object(h.d)("Host list", "AutohostSettings"),
                        description: Object(h.d)("Add and manage your hosted channels", "AutohostSettings"),
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/autohost"
                    }))
                }, t
            }(s.Component),
            ne = function(e) {
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
                    return s.createElement(b.a, null, this.props.requestState === te.a.Error && s.createElement(y.a, null, s.createElement(M.Q, {
                        color: M.K.Error
                    }, Object(h.d)("Something went wrong. Give it another try later.", "RaidSettingsForm"))), s.createElement(X.a, {
                        orientation: M.X.Horizontal,
                        label: Object(h.d)("Raid", "RaidSettingsForm")
                    }, s.createElement(M._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(M._21, {
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.raidPreference === ee.RaidPreference.All,
                        onChange: this.handleSetRaidPreference,
                        label: Object(h.d)("Allow all raids", "RaidSettingsForm"),
                        name: "raidPreference",
                        value: ee.RaidPreference.All
                    })), s.createElement(M._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(M._21, {
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.raidPreference === ee.RaidPreference.Network,
                        onChange: this.handleSetRaidPreference,
                        label: Object(h.d)("Only allow raids from friends, teammates, and followed channels", "RaidSettingsForm"),
                        name: "raidPreference",
                        value: ee.RaidPreference.Network
                    })), s.createElement(M._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(M._21, {
                        disabled: this.props.requestState === te.a.Loading,
                        checked: this.props.raidPreference === ee.RaidPreference.None,
                        onChange: this.handleSetRaidPreference,
                        label: Object(h.d)("Block all raids", "RaidSettingsForm"),
                        name: "raidPreference",
                        value: ee.RaidPreference.None
                    }))))
                }, t
            }(s.Component),
            oe = Object(v.d)("RaidSettingsForm")(ne),
            ae = function(e) {
                return s.createElement(s.Fragment, null, s.createElement(Y.a, {
                    title: Object(h.d)("Auto Hosting", "DashboardSettings")
                }), s.createElement(re, {
                    channelName: e.channelName,
                    autohostSettings: e.autohostSettings,
                    requestState: e.requestState,
                    saveSettings: e.saveSettings
                }), s.createElement(Y.a, {
                    title: Object(h.d)("Raids", "DashboardSettings")
                }), s.createElement(oe, {
                    raidPreference: e.autohostSettings.raidPreference,
                    requestState: e.requestState,
                    saveSettings: e.saveSettings
                }))
            },
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autohostSettings: ee.DEFAULT_AUTOHOST_SETTINGS,
                        requestState: ee.RequestState.Loading
                    }, t.logger = h.o.logger.withCategory("raid-settings-form"), t.saveSettings = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, r;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: ee.RequestState.Loading
                                        }), [4, function(e) {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                var t;
                                                return a.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, E.a.put("/kraken/autohost/settings", {
                                                                body: (n = e, {
                                                                    deprioritize_vodcast: !n.vodcastHosting,
                                                                    enabled: n.enabled,
                                                                    strategy: n.strategy,
                                                                    team_host: n.teamHost,
                                                                    can_be_raided_by: n.raidPreference
                                                                })
                                                            })];
                                                        case 1:
                                                            return (t = r.sent()).error || t.requestError ? [2, {
                                                                isError: !0,
                                                                autohostSettings: void 0,
                                                                error: t.error || t.requestError
                                                            }] : [2, {
                                                                isError: !1,
                                                                autohostSettings: C(t.body)
                                                            }]
                                                    }
                                                    var n
                                                })
                                            })
                                        }(a.__assign({}, this.state.autohostSettings, e))];
                                    case 1:
                                        return (t = n.sent()).isError ? (this.setState({
                                            requestState: ee.RequestState.Error
                                        }), r = new Error("Channel Properties Settings error"), this.logger.error(r, "Failed to load channel data", t.error)) : this.setState({
                                            autohostSettings: t.autohostSettings,
                                            requestState: ee.RequestState.Success
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
                                        requestState: ee.RequestState.Error
                                    }) : this.setState({
                                        autohostSettings: e.autohostSettings,
                                        requestState: ee.RequestState.Success
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return s.createElement(ae, {
                        channelName: this.props.channelName,
                        autohostSettings: this.state.autohostSettings,
                        requestState: this.state.requestState,
                        saveSettings: this.saveSettings
                    })
                }, t
            }(s.Component),
            ie = r("2hJ3"),
            ue = r("gLfK"),
            ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        streamKeyCopied: !1
                    }, t.setKeyInputRef = function(e) {
                        return t.keyInput = e
                    }, t.handleSetLatencyPreference = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return [2, this.props.handleSetLatencyPreference(e.currentTarget.value)]
                            })
                        })
                    }, t.copyToClipboard = function() {
                        Object(ie.a)(t.keyInput.value), t.setState({
                            streamKeyCopied: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.channelPropertiesError) return s.createElement(b.a, null, s.createElement(y.a, null, s.createElement(M.Q, {
                        color: M.K.Error
                    }, this.props.channelPropertiesError)));
                    var e = M.A.Default,
                        t = this.props.resetStatus === te.a.Loading;
                    return this.props.resetStatus === te.a.Success ? e = M.A.Success : this.props.resetStatus === te.a.Error ? t = !0 : this.props.resetStatus === te.a.Loading && (e = M.A.Loading), s.createElement(b.a, null, s.createElement(X.a, {
                        label: Object(h.d)("Stream key", "StreamKeySettingsForm"),
                        error: !!this.props.streamKeyError,
                        errorMessage: this.props.streamKeyError || ""
                    }, s.createElement(M._8, {
                        display: M.R.Flex
                    }, s.createElement(M._8, {
                        flexGrow: 1
                    }, s.createElement(M._4, {
                        readOnly: !0,
                        type: this.props.showStreamKey ? M._5.Text : M._5.Password,
                        value: this.props.channelProperties ? this.props.channelProperties.streamKey : "",
                        refDelegate: this.setKeyInputRef
                    })), s.createElement(M.v, {
                        ariaLabel: Object(h.d)("Copy Stream Key", "StreamKeySettingsForm"),
                        onClick: this.copyToClipboard,
                        "data-test-selector": "COPY_BUTTON_SELECTOR"
                    }, this.state.streamKeyCopied ? Object(h.d)("Copied", "StreamKeySettingsForm") : Object(h.d)("Copy", "StreamKeySettingsForm")), s.createElement(M._8, {
                        padding: {
                            left: 1
                        }
                    }, s.createElement(M.v, {
                        ariaLabel: Object(h.d)("Reset Stream Key", "StreamKeySettingsForm"),
                        onClick: this.props.handleResetStreamKeyClicked,
                        type: M.B.Hollow,
                        state: e,
                        disabled: t
                    }, Object(h.d)("Reset", "StreamKeySettings")))), s.createElement(M._8, {
                        padding: {
                            top: .5
                        }
                    }, s.createElement(M.O, {
                        onClick: this.props.handleStreamKeyDisplayToggled
                    }, this.props.showStreamKey ? Object(h.d)("Hide", "StreamKeySettingsForm") : Object(h.d)("Show", "StreamKeySettingsForm")))), s.createElement(X.a, {
                        label: Object(h.d)("Store past broadcasts", "StreamKeySettingsForm"),
                        error: !!this.props.saveVodsError,
                        errorMessage: this.props.saveVodsError || ""
                    }, s.createElement(M._8, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(M._51, {
                        disabled: this.props.saveVodsState === te.a.Loading,
                        checked: !(!this.props.channelProperties || !this.props.channelProperties.saveVods),
                        onChange: this.props.handleSaveVodsToggled
                    }), s.createElement(ue.a, {
                        text: Object(h.d)("Automatically save broadcasts for up to 14 days (60 days for Partners, Turbo and Prime users)", "StreamKeySettingsForm")
                    }))), this.props.channelProperties && this.props.channelProperties.latencyControlsEnabled && s.createElement(X.a, {
                        orientation: M.X.Horizontal,
                        label: Object(h.d)("Optimization preference", "StreamKeySettingsForm"),
                        error: !!this.props.latencyPrefError,
                        errorMessage: this.props.latencyPrefError || ""
                    }, s.createElement(M._8, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(M._21, {
                        disabled: this.props.latencyPrefState === te.a.Loading,
                        checked: !(!this.props.channelProperties || this.props.channelProperties.latencyPreference !== V.Normal),
                        onChange: this.handleSetLatencyPreference,
                        label: Object(h.d)("Normal latency: Best for highest video quality, highest resolution, and to reduce video buffering", "StreamKeySettingsForm"),
                        name: "optPreference",
                        value: V.Normal
                    })), s.createElement(M._21, {
                        disabled: this.props.latencyPrefState === te.a.Loading,
                        checked: !(!this.props.channelProperties || this.props.channelProperties.latencyPreference !== V.Low),
                        onChange: this.handleSetLatencyPreference,
                        label: Object(h.d)("Low latency: Best for near real-time interactions with viewers", "StreamKeySettingsForm"),
                        name: "optPreference",
                        value: V.Low
                    })))
                }, t
            }(s.Component),
            le = Object(v.d)("ChannelPropertiesSettingsForm")(ce);
        ! function(e) {
            e.Normal = "normal", e.Low = "low"
        }(V || (V = {}));
        var de = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    channelProperties: null,
                    channelPropertiesError: null,
                    streamKeyError: null,
                    showStreamKey: !1,
                    resetKeyState: te.a.Loading,
                    saveVodsState: te.a.Loading,
                    saveVodsError: null,
                    latencyPrefState: te.a.Loading,
                    latencyPrefError: null
                }, t.logger = h.o.logger.withCategory("stream-key-settings"), t.fetchChannelProperties = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var e, t, r, n, o, s;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user) return [2];
                                    n = "/v5/channels/" + this.props.user.id + "/channel_properties", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.get(n)];
                                case 2:
                                    return r = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(r),
                                        resetKeyState: null,
                                        saveVodsState: null,
                                        latencyPrefState: null
                                    }), [3, 4];
                                case 3:
                                    return o = a.sent(), e = o, [3, 4];
                                case 4:
                                    return r && r.error && (e = new Error("Channel Properties Settings error"), t = r.error), e ? (s = Object(h.d)("Failed to load channel properties.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load channel data", t), this.setState({
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
                        var e, t, r, n, o, s;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user) return [2];
                                    this.setState({
                                        resetKeyState: te.a.Loading
                                    }), n = "/v5/channels/" + this.props.user.id + "/channel_properties/regenerate_stream_key", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.put(n)];
                                case 2:
                                    return r = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(r),
                                        resetKeyState: te.a.Success
                                    }), [3, 4];
                                case 3:
                                    return o = a.sent(), e = o, [3, 4];
                                case 4:
                                    return r && r.error && (e = new Error("Channel Properties Settings error"), t = r.error), e ? (s = Object(h.d)("Failed to reset stream key.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to reset stream key", t), this.setState({
                                        streamKeyError: s,
                                        resetKeyState: te.a.Error
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.setSaveVods = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var e, t, r, n, o, s;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user || !this.state.channelProperties) return [2];
                                    this.setState({
                                        saveVodsState: te.a.Loading
                                    }), n = "/v5/channels/" + this.props.user.id + "/channel_properties", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.put(n, {
                                        body: {
                                            save_vods: !this.state.channelProperties.saveVods
                                        }
                                    })];
                                case 2:
                                    return r = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(r),
                                        saveVodsState: te.a.Success
                                    }), [3, 4];
                                case 3:
                                    return o = a.sent(), e = o, [3, 4];
                                case 4:
                                    return r && r.error && (e = new Error("Channel Properties Settings error"), t = r.error), e ? (s = Object(h.d)("Failed to update broadcast preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update vods preference", t), this.setState({
                                        saveVodsError: s,
                                        saveVodsState: te.a.Error
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.setLatencyPreference = function(e) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var t, r, n, o, s, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.props.user || !this.state.channelProperties) return [2];
                                    this.setState({
                                        latencyPrefState: te.a.Loading
                                    }), o = "/v5/channels/" + this.props.user.id + "/channel_properties", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, E.a.put(o, {
                                        body: {
                                            latency: e
                                        }
                                    })];
                                case 2:
                                    return n = a.sent(), this.setState({
                                        channelProperties: this.deserializeChannelProperties(n),
                                        latencyPrefState: te.a.Success
                                    }), [3, 4];
                                case 3:
                                    return s = a.sent(), t = s, [3, 4];
                                case 4:
                                    return n && n.error && (t = new Error("Channel Properties Settings error"), r = n.error), t ? (i = Object(h.d)("Failed to update optimization preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to update latency preference", r), this.setState({
                                        latencyPrefError: i,
                                        latencyPrefState: te.a.Error
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t
            }
            return a.__extends(t, e), t.prototype.componentWillMount = function() {
                this.fetchChannelProperties()
            }, t.prototype.render = function() {
                return s.createElement(le, {
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
        var he = Object(n.b)(function(e) {
                return {
                    user: Object(o.c)(e)
                }
            })(de),
            pe = r("7vx8"),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.dropsSettingsError) return s.createElement(b.a, null, s.createElement(y.a, null, s.createElement(M.Q, {
                        color: M.K.Error
                    }, this.props.dropsSettingsError)));
                    var e = s.createElement(M.O, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                        }, Object(h.d)("Learn more", "DropSettingsForm")),
                        t = Object(h.d)("Alert your viewers when they have a chance to earn in-game loot. {learnMoreLink}", {
                            learnMoreLink: e
                        }, "DropSettingsForm");
                    return s.createElement(b.a, null, s.createElement(Z.a, {
                        label: Object(h.d)("Drops", "DropSettingsForm"),
                        disabled: null === this.props.requestState || this.props.requestState === te.a.Loading,
                        checked: !!this.props.isDropsEnabled,
                        onChange: this.props.handleDropSettingsToggle,
                        description: t,
                        id: "drops-settings-toggle"
                    }))
                }, t
            }(s.Component),
            ge = Object(v.d)("DropsSettingsForm")(fe),
            ve = r("fqzE"),
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDropsEnabled: null,
                        dropsSettingsError: null,
                        requestState: null
                    }, t.logger = h.o.logger.withCategory("stream-key-settings"), t.fetchDrops = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, r, n, o, s, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (null !== this.state.requestState || !e.data || !e.data.user) return [2];
                                        this.setState({
                                            requestState: te.a.Loading
                                        }), o = "/kraken/channels/" + e.data.user.id + "/vhs", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, E.a.get(o)];
                                    case 2:
                                        return (n = a.sent()).body && this.setState({
                                            isDropsEnabled: !n.body.opt_out_status,
                                            requestState: te.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), t = s, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Drops Settings error"), r = n.error), t ? (i = Object(h.d)("Failed to load Drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to load channel data", r), this.setState({
                                            dropsSettingsError: i
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.toggleDropsSetting = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, r, n, o, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.props.data || !this.props.data.user) return [2];
                                        this.setState({
                                            requestState: te.a.Loading
                                        }), n = "/kraken/channels/" + this.props.data.user.id + "/vhs", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), this.state.isDropsEnabled ? [4, E.a.delete(n)] : [3, 3];
                                    case 2:
                                        return r = a.sent(), [3, 5];
                                    case 3:
                                        return [4, E.a.put(n)];
                                    case 4:
                                        r = a.sent(), a.label = 5;
                                    case 5:
                                        return this.setState({
                                            isDropsEnabled: !this.state.isDropsEnabled,
                                            requestState: te.a.Success
                                        }), [3, 7];
                                    case 6:
                                        return o = a.sent(), e = o, [3, 7];
                                    case 7:
                                        return r && r.error && (e = new Error("Drops Settings error"), t = r.error), e ? (s = Object(h.d)("Failed to update drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update drops preference", t), this.setState({
                                            dropsSettingsError: s,
                                            requestState: te.a.Error
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
                    return s.createElement(ge, {
                        isDropsEnabled: this.state.isDropsEnabled,
                        dropsSettingsError: this.state.dropsSettingsError,
                        requestState: this.state.requestState,
                        handleDropSettingsToggle: this.toggleDropsSetting
                    })
                }, t
            }(s.Component),
            ye = Object(d.compose)(Object(pe.a)(ve, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }))(me),
            be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(M._8, null, s.createElement(Y.a, {
                        title: Object(h.d)("Stream Key & Preferences", "DashboardSettings")
                    }), s.createElement(he, null), s.createElement(se, {
                        channelName: this.props.match.params.channelName
                    }), s.createElement(Y.a, {
                        title: Object(h.d)("Drops", "DashboardSettings")
                    }), s.createElement(ye, {
                        channelName: this.props.match.params.channelName
                    }))
                }, t
            }(s.Component),
            Se = Object(d.compose)(Object(v.d)("DashboardSettingsIndexPage", {
                autoReportInteractive: !0,
                destination: f.a.DashboardSettingsIndex
            }), Object(p.a)({
                location: g.PageviewLocation.DashboardSettingsIndex
            }))(be),
            xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.match.params.channelName === this.props.userLogin || this.props.isStaff ? s.createElement(l.b, null, s.createElement(M._8, {
                        padding: 2,
                        fullHeight: !0
                    }, s.createElement(u.e, null, s.createElement(i.c, {
                        path: "/:channelName/dashboard/settings/autohost",
                        exact: !0,
                        component: J
                    }), s.createElement(i.c, {
                        path: "/:channelName/dashboard/settings",
                        exact: !0,
                        component: Se
                    }), s.createElement(i.c, {
                        component: c.a
                    })))) : s.createElement(i.b, {
                        to: "/" + this.props.userLogin + "/dashboard/settings"
                    })
                }, t
            }(s.Component);
        var _e = Object(n.b)(function(e) {
            var t = Object(o.c)(e);
            return {
                userLogin: t && t.login,
                isStaff: t && t.roles && t.roles.isStaff
            }
        })(xe);
        r.d(t, "DashboardSettingsRoot", function() {
            return _e
        })
    },
    gKqb: function(e, t, r) {
        var n = r("Bh6c"),
            o = r("2EIm"),
            a = r("UT8+"),
            s = r("9GW9"),
            i = r("PWbw"),
            u = r("M0TM");

        function c(e) {
            var t = this.__data__ = new n(e);
            this.size = t.size
        }
        c.prototype.clear = o, c.prototype.delete = a, c.prototype.get = s, c.prototype.has = i, c.prototype.set = u, e.exports = c
    },
    gLfK: function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = r("Odds"),
            a = function(e) {
                return n.createElement(o._8, {
                    margin: {
                        top: 1
                    }
                }, n.createElement(o.Q, {
                    color: o.K.Alt,
                    "data-a-target": e.textDataTarget
                }, e.text), e.extraText && n.createElement(o._8, {
                    margin: {
                        top: .5
                    }
                }, n.createElement(o.Q, {
                    color: o.K.Alt2
                }, e.extraText)))
            };
        r.d(t, "a", function() {
            return a
        })
    },
    gfva: function(e, t, r) {
        var n = r("SVcC");
        e.exports = function(e) {
            var t = n(e),
                r = t % 1;
            return t == t ? r ? t - r : t : 0
        }
    },
    i4TT: function(e, t, r) {
        var n = r("VEC5"),
            o = r("SjFU"),
            a = r("gfva"),
            s = Math.max;
        e.exports = function(e, t, r) {
            var i = null == e ? 0 : e.length;
            if (!i) return -1;
            var u = null == r ? 0 : a(r);
            return u < 0 && (u = s(i + u, 0)), n(e, o(t, 3), u)
        }
    },
    i61F: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
        var n = r("Vgej");
        Object.defineProperty(t, "arrayMove", {
            enumerable: !0,
            get: function() {
                return n.arrayMove
            }
        });
        var o = i(r("P/Wu")),
            a = i(r("yauq")),
            s = i(r("tslQ"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.SortableContainer = o.default, t.SortableElement = a.default, t.SortableHandle = s.default, t.sortableContainer = o.default, t.sortableElement = a.default, t.sortableHandle = s.default
    },
    iAlu: function(e, t, r) {
        var n = r("ndFl"),
            o = r("0zkw")(n);
        e.exports = o
    },
    iLYB: function(e, t, r) {
        var n = r("uIws"),
            o = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                r = n(t, e);
            return !(r < 0 || (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, 0))
        }
    },
    idL5: function(e, t, r) {
        var n = r("ymQA"),
            o = "Expected a function";

        function a(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o);
            var r = function() {
                var n = arguments,
                    o = t ? t.apply(this, n) : n[0],
                    a = r.cache;
                if (a.has(o)) return a.get(o);
                var s = e.apply(this, n);
                return r.cache = a.set(o, s) || a, s
            };
            return r.cache = new(a.Cache || n), r
        }
        a.Cache = n, e.exports = a
    },
    jZyZ: function(e, t) {
        e.exports = function(e, t) {
            return e.has(t)
        }
    },
    k6Ms: function(e, t, r) {
        var n = r("1nXM"),
            o = 1,
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, r, s, i, u) {
            var c = r & o,
                l = n(e),
                d = l.length;
            if (d != n(t).length && !c) return !1;
            for (var h = d; h--;) {
                var p = l[h];
                if (!(c ? p in t : a.call(t, p))) return !1
            }
            var f = u.get(e);
            if (f && u.get(t)) return f == t;
            var g = !0;
            u.set(e, t), u.set(t, e);
            for (var v = c; ++h < d;) {
                var m = e[p = l[h]],
                    y = t[p];
                if (s) var b = c ? s(y, m, p, t, e, u) : s(m, y, p, e, t, u);
                if (!(void 0 === b ? m === y || i(m, y, r, s, u) : b)) {
                    g = !1;
                    break
                }
                v || (v = "constructor" == p)
            }
            if (g && !v) {
                var S = e.constructor,
                    x = t.constructor;
                S != x && "constructor" in e && "constructor" in t && !("function" == typeof S && S instanceof S && "function" == typeof x && x instanceof x) && (g = !1)
            }
            return u.delete(e), u.delete(t), g
        }
    },
    kdNP: function(e, t, r) {
        var n = r("sa46");
        e.exports = function(e) {
            return null == e ? "" : n(e)
        }
    },
    kjxi: function(e, t, r) {
        var n = r("NDrF"),
            o = function() {
                try {
                    var e = n(Object, "defineProperty");
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
    kqTE: function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            o = function(e) {
                var t = n.Children.only(e.children);
                return n.cloneElement(t, {
                    "data-selectable": !0,
                    tabIndex: -1
                })
            };
        r.d(t, "a", function() {
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
    mAEY: function(e, t, r) {
        var n = r("JGv7"),
            o = r("H3TN"),
            a = r("mG6l"),
            s = n ? n.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return a(e) || o(e) || !!(s && e && e[s])
        }
    },
    mG6l: function(e, t) {
        var r = Array.isArray;
        e.exports = r
    },
    mPnA: function(e, t, r) {
        (function(e) {
            var n = r("MygC"),
                o = r("WlEI"),
                a = "object" == typeof t && t && !t.nodeType && t,
                s = a && "object" == typeof e && e && !e.nodeType && e,
                i = s && s.exports === a ? n.Buffer : void 0,
                u = (i ? i.isBuffer : void 0) || o;
            e.exports = u
        }).call(t, r("3IRH")(e))
    },
    n8KP: function(e, t, r) {
        var n = r("am5H"),
            o = r("HMFB");
        e.exports = function(e) {
            for (var t = o(e), r = t.length; r--;) {
                var a = t[r],
                    s = e[a];
                t[r] = [a, s, n(s)]
            }
            return t
        }
    },
    ndFl: function(e, t, r) {
        var n = r("NSoo"),
            o = r("kjxi"),
            a = r("F3kA"),
            s = o ? function(e, t) {
                return o(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: n(t),
                    writable: !0
                })
            } : a;
        e.exports = s
    },
    o3xN: function(e, t) {
        var r = "__lodash_hash_undefined__";
        e.exports = function(e) {
            return this.__data__.set(e, r), this
        }
    },
    oDbm: function(e, t, r) {
        var n = r("pgw8"),
            o = r("BaEo"),
            a = r("8xms"),
            s = r("QG23"),
            i = r("QxUn");

        function u(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = s, u.prototype.set = i, e.exports = u
    },
    "p+QF": function(e, t) {
        var r = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || r)
        }
    },
    pLne: function(e, t, r) {
        var n = r("//bJ"),
            o = r("v6CG"),
            a = Object.prototype.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            i = s ? function(e) {
                return null == e ? [] : (e = Object(e), n(s(e), function(t) {
                    return a.call(e, t)
                }))
            } : o;
        e.exports = i
    },
    pUak: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(e) {
                r[++t] = e
            }), r
        }
    },
    pgw8: function(e, t, r) {
        var n = r("w1Jz");
        e.exports = function() {
            this.__data__ = n ? n(null) : {}, this.size = 0
        }
    },
    qUKr: function(e, t, r) {
        e.exports = r("xkKI")()
    },
    qhiD: function(e, t) {},
    qu3O: function(e, t, r) {
        var n = r("cXqt"),
            o = r("BALR"),
            a = r("jZyZ"),
            s = 1,
            i = 2;
        e.exports = function(e, t, r, u, c, l) {
            var d = r & s,
                h = e.length,
                p = t.length;
            if (h != p && !(d && p > h)) return !1;
            var f = l.get(e);
            if (f && l.get(t)) return f == t;
            var g = -1,
                v = !0,
                m = r & i ? new n : void 0;
            for (l.set(e, t), l.set(t, e); ++g < h;) {
                var y = e[g],
                    b = t[g];
                if (u) var S = d ? u(b, y, g, t, e, l) : u(y, b, g, e, t, l);
                if (void 0 !== S) {
                    if (S) continue;
                    v = !1;
                    break
                }
                if (m) {
                    if (!o(t, function(e, t) {
                            if (!a(m, t) && (y === e || c(y, e, r, u, l))) return m.push(t)
                        })) {
                        v = !1;
                        break
                    }
                } else if (y !== b && !c(y, b, r, u, l)) {
                    v = !1;
                    break
                }
            }
            return l.delete(e), l.delete(t), v
        }
    },
    r0iv: function(e, t, r) {
        var n = r("p+QF"),
            o = r("Fy4Y"),
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!n(e)) return o(e);
            var t = [];
            for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
            return t
        }
    },
    s6nI: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "a", function() {
                return n
            }),
            function(e) {
                e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
            }(n || (n = {}))
    },
    sBY2: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    sa46: function(e, t, r) {
        var n = r("JGv7"),
            o = r("HMFi"),
            a = r("mG6l"),
            s = r("SCwa"),
            i = 1 / 0,
            u = n ? n.prototype : void 0,
            c = u ? u.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (a(t)) return o(t, e) + "";
            if (s(t)) return c ? c.call(t) : "";
            var r = t + "";
            return "0" == r && 1 / t == -i ? "-0" : r
        }
    },
    skb1: function(e, t, r) {
        (function(e) {
            var n = r("1tEs"),
                o = "object" == typeof t && t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === o && n.process,
                i = function() {
                    try {
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = i
        }).call(t, r("3IRH")(e))
    },
    t3nn: function(e, t, r) {
        var n = r("NDrF")(r("MygC"), "DataView");
        e.exports = n
    },
    tobj: function(e, t, r) {
        var n = r("43dD"),
            o = r("VGcK"),
            a = "[object Arguments]";
        e.exports = function(e) {
            return o(e) && n(e) == a
        }
    },
    tslQ: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
        t.default = function(e) {
            var t, r, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return r = t = function(t) {
                function r() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
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
                }(r, t), o(r, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = (0, i.findDOMNode)(this);
                        e.sortableHandle = !0
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, u.default)(l.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = l.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, n({
                            ref: t
                        }, this.props))
                    }
                }]), r
            }(a.Component), t.displayName = (0, c.provideDisplayName)("sortableHandle", e), r
        };
        var a = r("GiK3"),
            s = l(a),
            i = r("O27J"),
            u = l(r("crWv")),
            c = r("Vgej");

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    uIws: function(e, t, r) {
        var n = r("EpL8");
        e.exports = function(e, t) {
            for (var r = e.length; r--;)
                if (n(e[r][0], t)) return r;
            return -1
        }
    },
    uS5W: function(e, t, r) {
        var n = r("NDrF")(r("MygC"), "Promise");
        e.exports = n
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
    vwDu: function(e, t, r) {
        var n = r("DRNv");
        e.exports = function(e) {
            var t = n(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    w1Jz: function(e, t, r) {
        var n = r("NDrF")(Object, "create");
        e.exports = n
    },
    wSgH: function(e, t, r) {
        var n = r("Czj7");
        e.exports = function(e, t) {
            return function(r, o) {
                if (null == r) return r;
                if (!n(r)) return e(r, o);
                for (var a = r.length, s = t ? a : -1, i = Object(r);
                    (t ? s-- : ++s < a) && !1 !== o(i[s], s, i););
                return r
            }
        }
    },
    wVoL: function(e, t, r) {
        var n = r("DRNv");
        e.exports = function(e, t) {
            var r = n(this, e),
                o = r.size;
            return r.set(e, t), this.size += r.size == o ? 0 : 1, this
        }
    },
    x3dg: function(e, t) {},
    xKuy: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            o = s(r("9c95")),
            a = s(r("J0u9"));

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
            return n(e, [{
                key: "add",
                value: function(e, t) {
                    this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    var r = this.getIndex(e, t); - 1 !== r && this.refs[e].splice(r, 1)
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
    xkKI: function(e, t, r) {
        "use strict";
        var n = r("+bIS"),
            o = r("eXGG"),
            a = r("0pjK");
        e.exports = function() {
            function e(e, t, r, n, s, i) {
                i !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
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
            return r.checkPropTypes = n, r.PropTypes = r, r
        }
    },
    y5ks: function(e, t, r) {
        var n = r("43dD"),
            o = r("2iRz"),
            a = r("VGcK"),
            s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = function(e) {
            return a(e) && o(e.length) && !!s[n(e)]
        }
    },
    yMkz: function(e, t, r) {
        var n = r("MygC").Uint8Array;
        e.exports = n
    },
    yauq: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
        t.default = function(e) {
            var t, r, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return r = t = function(t) {
                function r() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
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
                }(r, t), o(r, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.collection,
                            r = e.disabled,
                            n = e.index;
                        r || this.setDraggable(t, n)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                            var t = e.collection,
                                r = e.disabled,
                                n = e.index;
                            r ? this.removeDraggable(t) : this.setDraggable(t, n)
                        } else this.props.collection !== e.collection && (this.removeDraggable(this.props.collection), this.setDraggable(e.collection, e.index))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this.props,
                            t = e.collection,
                            r = e.disabled;
                        r || this.removeDraggable(t)
                    }
                }, {
                    key: "setDraggable",
                    value: function(e, t) {
                        var r = this.node = (0, u.findDOMNode)(this);
                        r.sortableInfo = {
                            index: t,
                            collection: e,
                            manager: this.context.manager
                        }, this.ref = {
                            node: r
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
                        return (0, c.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = d.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, n({
                            ref: t
                        }, (0, l.omit)(this.props, "collection", "disabled", "index")))
                    }
                }]), r
            }(a.Component), t.displayName = (0, l.provideDisplayName)("sortableElement", e), t.contextTypes = {
                manager: i.default.object.isRequired
            }, t.propTypes = {
                index: i.default.number.isRequired,
                collection: i.default.oneOfType([i.default.number, i.default.string]),
                disabled: i.default.bool
            }, t.defaultProps = {
                collection: 0
            }, r
        };
        var a = r("GiK3"),
            s = d(a),
            i = d(r("qUKr")),
            u = r("O27J"),
            c = d(r("crWv")),
            l = r("Vgej");

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    ymQA: function(e, t, r) {
        var n = r("Zfct"),
            o = r("vwDu"),
            a = r("Bxt2"),
            s = r("a/6q"),
            i = r("wVoL");

        function u(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = s, u.prototype.set = i, e.exports = u
    },
    zN4B: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(e, n) {
                r[++t] = [n, e]
            }), r
        }
    }
});
//# sourceMappingURL=pages.dashboard-settings-31b227b49e63a7dbe035fff2ab670095.js.map