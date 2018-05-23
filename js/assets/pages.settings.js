webpackJsonp([41], {
    "+0KR": function(e, t, n) {
        "use strict";
        var r = n("oR9V");
        n.d(t, "a", function() {
            return r.a
        }), n.d(t, "b", function() {
            return r.b
        })
    },
    "+bIS": function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                return e
            }
        }
        var i = function() {};
        i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
            return this
        }, i.thatReturnsArgument = function(e) {
            return e
        }, e.exports = i
    },
    "+cPc": function(e, t, n) {
        var r = n("CUG3"),
            i = n("n8KP"),
            o = n("/UYc");
        e.exports = function(e) {
            var t = i(e);
            return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
                return n === e || r(n, e, t)
            }
        }
    },
    "//bJ": function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }
    },
    "/MI9": function(e, t, n) {
        var r = n("fXkM"),
            i = n("11iS");
        e.exports = function(e, t) {
            return null != e && i(e, t, r)
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
            for (var i = -1, o = e.criteria, a = t.criteria, s = o.length, c = n.length; ++i < s;) {
                var l = r(o[i], a[i]);
                if (l) return i >= c ? l : l * ("desc" == n[i] ? -1 : 1)
            }
            return e.index - t.index
        }
    },
    "0cQv": function(e, t) {},
    "0e1M": function(e, t, n) {
        var r = n("eWqu"),
            i = n("wSgH")(r);
        e.exports = i
    },
    "0pjK": function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "0zkw": function(e, t) {
        var n = 800,
            r = 16,
            i = Date.now;
        e.exports = function(e) {
            var t = 0,
                o = 0;
            return function() {
                var a = i(),
                    s = r - (a - o);
                if (o = a, s > 0) {
                    if (++t >= n) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
    },
    "11iS": function(e, t, n) {
        var r = n("aIUG"),
            i = n("H3TN"),
            o = n("mG6l"),
            a = n("cjOD"),
            s = n("2iRz"),
            c = n("F6hB");
        e.exports = function(e, t, n) {
            for (var l = -1, u = (t = r(t, e)).length, d = !1; ++l < u;) {
                var p = c(t[l]);
                if (!(d = null != e && n(e, p))) break;
                e = e[p]
            }
            return d || ++l != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && a(p, u) && (o(e) || i(e))
        }
    },
    "1Sl2": function(e, t) {},
    "1f5k": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PlatformNotificationSettings_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "notificationSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "platforms"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "platformName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "settingState"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 158
            }
        };
        n.loc.source = {
            body: "query PlatformNotificationSettings_User {\ncurrentUser {\nid\ndisplayName\nnotificationSettings {\ncategory\nplatforms {\nplatformName\nsettingState\nisEnabled\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1nXM": function(e, t, n) {
        var r = n("g/lL"),
            i = n("pLne"),
            o = n("HMFB");
        e.exports = function(e) {
            return r(e, o, i)
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
    "2iRz": function(e, t) {
        var n = 9007199254740991;
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
        }
    },
    "2oz3": function(e, t, n) {
        var r = n("INOA"),
            i = n("mAEY");
        e.exports = function e(t, n, o, a, s) {
            var c = -1,
                l = t.length;
            for (o || (o = i), s || (s = []); ++c < l;) {
                var u = t[c];
                n > 0 && o(u) ? n > 1 ? e(u, n - 1, o, a, s) : r(s, u) : a || (s[s.length] = u)
            }
            return s
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
            i = n("H1YI"),
            o = n("OZxy"),
            a = "[object Null]",
            s = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? s : a : c && c in Object(e) ? i(e) : o(e)
        }
    },
    "4UmU": function(e, t, n) {
        var r = n("EpL8"),
            i = n("Czj7"),
            o = n("cjOD"),
            a = n("kl/u");
        e.exports = function(e, t, n) {
            if (!a(n)) return !1;
            var s = typeof t;
            return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e)
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
            i = n("SjFU"),
            o = n("Ro3v"),
            a = n("BhXZ"),
            s = n("usEs"),
            c = n("/ewM"),
            l = n("F3kA");
        e.exports = function(e, t, n) {
            var u = -1;
            t = r(t.length ? t : [l], s(i));
            var d = o(e, function(e, n, i) {
                return {
                    criteria: r(t, function(t) {
                        return t(e)
                    }),
                    index: ++u,
                    value: e
                }
            });
            return a(d, function(e, t) {
                return c(e, t, n)
            })
        }
    },
    "57tO": function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Set");
        e.exports = r
    },
    "5hfY": function(e, t, n) {
        var r = n("L3k4");
        e.exports = function(e) {
            return function(t) {
                return r(t, e)
            }
        }
    },
    "5xsI": function(e, t) {},
    "6Exb": function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    "6T7P": function(e, t, n) {
        e.exports = n.p + "assets/fallback-avatar-c3e7f53e20817a5c44b2b821729da1ee.png"
    },
    "6TIu": function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e) {
            return r(this.__data__, e) > -1
        }
    },
    "8+dp": function(e, t) {},
    "81TE": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    "831n": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserSettings_AutohostSettings_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "primaryTeam"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 103
            }
        };
        n.loc.source = {
            body: "query UserSettings_AutohostSettings_CurrentUser {\ncurrentUser {\nid\nprimaryTeam {\nname\ndisplayName\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8Wze": function(e, t, n) {
        var r, i = n("MA13"),
            o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        e.exports = function(e) {
            return !!o && o in e
        }
    },
    "8sB4": function(e, t, n) {
        var r = n("SjFU"),
            i = n("Czj7"),
            o = n("HMFB");
        e.exports = function(e) {
            return function(t, n, a) {
                var s = Object(t);
                if (!i(t)) {
                    var c = r(n, 3);
                    t = o(t), n = function(e) {
                        return c(s[e], e, s)
                    }
                }
                var l = e(t, n, a);
                return l > -1 ? s[c ? t[l] : l] : void 0
            }
        }
    },
    "8xms": function(e, t, n) {
        var r = n("w1Jz"),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            if (r) {
                var n = t[e];
                return n === i ? void 0 : n
            }
            return o.call(t, e) ? t[e] : void 0
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
            var i = null == e ? void 0 : r(e, t);
            return void 0 === i ? n : i
        }
    },
    AJkw: function(e, t) {
        e.exports = function(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                    var c = a[e ? s : ++i];
                    if (!1 === n(o[c], c, o)) break
                }
                return t
            }
        }
    },
    AQCV: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetChannelGlobalIsEnabled"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "FollowUserInput"
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
                            value: "followUser"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetChannelGlobalIsEnabled($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "AQc/": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds");

        function o(e) {
            var t = null;
            return e.description && (t = r.createElement(i._8, {
                margin: {
                    top: 1
                }
            }, r.createElement(i.Q, {
                color: i.K.Alt2
            }, e.description))), r.createElement(i._8, {
                margin: {
                    y: 2
                }
            }, r.createElement(i.Q, {
                type: i._49.H3,
                fontSize: i.V.Size2
            }, e.title), t)
        }
        n.d(t, "a", function() {
            return o
        })
    },
    Ao0V: function(e, t, n) {
        var r = n("JGv7"),
            i = n("yMkz"),
            o = n("EpL8"),
            a = n("qu3O"),
            s = n("zN4B"),
            c = n("pUak"),
            l = 1,
            u = 2,
            d = "[object Boolean]",
            p = "[object Date]",
            h = "[object Error]",
            m = "[object Map]",
            g = "[object Number]",
            f = "[object RegExp]",
            v = "[object Set]",
            b = "[object String]",
            y = "[object Symbol]",
            S = "[object ArrayBuffer]",
            k = "[object DataView]",
            _ = r ? r.prototype : void 0,
            E = _ ? _.valueOf : void 0;
        e.exports = function(e, t, n, r, _, C, w) {
            switch (n) {
                case k:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case S:
                    return !(e.byteLength != t.byteLength || !C(new i(e), new i(t)));
                case d:
                case p:
                case g:
                    return o(+e, +t);
                case h:
                    return e.name == t.name && e.message == t.message;
                case f:
                case b:
                    return e == t + "";
                case m:
                    var O = s;
                case v:
                    var x = r & l;
                    if (O || (O = c), e.size != t.size && !x) return !1;
                    var N = w.get(e);
                    if (N) return N == t;
                    r |= u, w.set(e, t);
                    var j = a(O(e), O(t), r, _, C, w);
                    return w.delete(e), j;
                case y:
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
            i = n("iLYB"),
            o = n("4hEs"),
            a = n("6TIu"),
            s = n("eGfi");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = s, e.exports = c
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
            i = n("GVhz"),
            o = 1,
            a = 2;
        e.exports = function(e, t, n, s) {
            var c = n.length,
                l = c,
                u = !s;
            if (null == e) return !l;
            for (e = Object(e); c--;) {
                var d = n[c];
                if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++c < l;) {
                var p = (d = n[c])[0],
                    h = e[p],
                    m = d[1];
                if (u && d[2]) {
                    if (void 0 === h && !(p in e)) return !1
                } else {
                    var g = new r;
                    if (s) var f = s(h, m, p, e, t, g);
                    if (!(void 0 === f ? i(m, h, o | a, s, g) : f)) return !1
                }
            }
            return !0
        }
    },
    CZUI: function(e, t, n) {
        var r = n("U2kw"),
            i = n("8Wze"),
            o = n("kl/u"),
            a = n("NuOc"),
            s = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            l = Object.prototype,
            u = c.toString,
            d = l.hasOwnProperty,
            p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!o(e) || i(e)) && (r(e) ? p : s).test(a(e))
        }
    },
    CePw: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BlockGiftedSubsSetting"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftsToFollowedChannelsOnly"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 104
            }
        };
        n.loc.source = {
            body: "query BlockGiftedSubsSetting {\ncurrentUser {\nid\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "CkX/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsTabs_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 92
            }
        };
        n.loc.source = {
            body: "query SettingsTabs_User {\ncurrentUser {\nid\nhasTurbo\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Czj7: function(e, t, n) {
        var r = n("U2kw"),
            i = n("2iRz");
        e.exports = function(e) {
            return null != e && i(e.length) && !r(e)
        }
    },
    D2cp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_ChatDelayRadioButtons"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDelayMs"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 101
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_ChatDelayRadioButtons {\ncurrentUser {\nid\nchatSettings {\nchatDelayMs\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    D4QM: function(e, t, n) {
        var r = /^\./,
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = n("ROCN")(function(e) {
                var t = [];
                return r.test(e) && t.push(""), e.replace(i, function(e, n, r, i) {
                    t.push(r ? i.replace(o, "$1") : n || e)
                }), t
            });
        e.exports = a
    },
    DRNv: function(e, t, n) {
        var r = n("enQx");
        e.exports = function(e, t) {
            var n = e.__data__;
            return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    },
    "DT0+": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("wqO5");
        if (void 0 === r) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
        var o = (new r.Component).updater;
        e.exports = i(r.Component, r.isValidElement, o)
    },
    EQRc: function(e, t) {},
    EaRL: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AdvancedNotificationSettings_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
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
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "follows"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
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
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "profileImageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "70"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "login"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followers"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "notificationSettings"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 303
            }
        };
        n.loc.source = {
            body: "query AdvancedNotificationSettings_User($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nfollows(first: $limit after: $cursor) {\ntotalCount\nedges {\ncursor\nnode {\nid\ndisplayName\nprofileImageURL(width: 70)\nlogin\nfollowers {\ntotalCount\n}\n}\nnotificationSettings {\nisEnabled\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            i = 1 / 0;
        e.exports = function(e) {
            if ("string" == typeof e || r(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -i ? "-0" : t
        }
    },
    Fbrx: function(e, t, n) {
        var r = n("GVhz"),
            i = n("A2t5"),
            o = n("/MI9"),
            a = n("QQy1"),
            s = n("am5H"),
            c = n("/UYc"),
            l = n("F6hB"),
            u = 1,
            d = 2;
        e.exports = function(e, t) {
            return a(e) && s(t) ? c(l(e), t) : function(n) {
                var a = i(n, e);
                return void 0 === a && a === t ? o(n, e) : r(t, a, u | d)
            }
        }
    },
    FsFC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e, t) {
            void 0 === t && (t = i.Humanized);
            var n;
            t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS);
            switch (t) {
                case i.ClockHM:
                case i.ClockHMS:
                    n = r.Hour;
                    break;
                case i.ClockMS:
                    n = r.Minute
            }
            var l = 2;
            t === i.ClockHMS && (l = 3);
            var u = function(e, t) {
                    void 0 === t && (t = r.Month);
                    var n = {};
                    if (n.seconds = e, e < 60 || t === r.Second) return n;
                    if (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute) return n;
                    if (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour) return n;
                    if (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day) return n;
                    if (n.days <= 26 || t === r.Week) return n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n;
                    return n.months = Math.round((n.days + 3) / 30), n
                }(e, n),
                d = Object.keys(u);
            if (d.forEach(function(e, n) {
                    t !== i.Humanized && t !== i.HumanizedShort || u[e] || delete u[e], n < d.length - l && delete u[e]
                }), t === i.Humanized) return function(e) {
                return e.months ? a(r.Month, e.months) : e.weeks && e.days ? a(r.Week, e.weeks) + " " + a(r.Day, e.days) : e.weeks ? a(r.Week, e.weeks) : e.days && e.hours ? a(r.Day, e.days) + " " + a(r.Hour, e.hours) : e.days ? a(r.Day, e.days) : e.hours && e.minutes ? a(r.Hour, e.hours) + " " + a(r.Minute, e.minutes) : e.hours ? a(r.Hour, e.hours) : e.minutes && e.seconds ? a(r.Minute, e.minutes) + " " + a(r.Second, e.seconds) : e.minutes ? a(r.Minute, e.minutes) : a(r.Second, e.seconds || 0)
            }(u);
            if (t === i.HumanizedShort) return function(e) {
                return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
            }(u);
            var p = ":",
                h = !1;
            switch (o.o.intl.getLanguageCode()) {
                case "cy":
                case "da":
                case "fi":
                case "id":
                case "nb":
                case "si":
                    p = ".";
                    break;
                case "af":
                case "fr":
                case "lt":
                    h = !0
            }
            var m = u.seconds || 0,
                g = u.minutes || 0,
                f = u.hours || 0;
            switch (t) {
                case i.ClockHM:
                case i.ClockHMS:
                    var v = h ? c(f, 2) : f,
                        b = v + p + c(g, 2);
                    return t === i.ClockHMS && (b += p + c(m, 2)), b;
                case i.ClockMS:
                    var v = h ? c(g, 2) : g;
                    return v + p + c(m, 2)
            }
        };
        var r, i, o = n("6sO2");

        function a(e, t) {
            switch (e) {
                case r.Second:
                    return Object(o.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case r.Minute:
                    return Object(o.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case r.Hour:
                    return Object(o.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case r.Day:
                    return Object(o.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case r.Week:
                    return Object(o.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case r.Month:
                    return Object(o.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function s(e, t) {
            switch (e) {
                case r.Second:
                    return Object(o.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case r.Minute:
                    return Object(o.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case r.Hour:
                    return Object(o.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case r.Day:
                    return Object(o.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case r.Week:
                    return Object(o.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case r.Month:
                    return Object(o.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function c(e, t) {
            var n = e.toString();
            return n.length < t ? "0".repeat(t - n.length) + n : n
        }! function(e) {
            e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
        }(r || (r = {})),
        function(e) {
            e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
        }(i || (i = {}))
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
            i = n("Odds"),
            o = (n("3fb4"), function(e) {
                var t = null;
                return e.footer && (t = r.createElement(i._35, {
                    padding: 2,
                    background: i.n.Alt2
                }, e.footer)), r.createElement(i._35, {
                    className: "settings-section",
                    background: i.n.Base,
                    margin: {
                        bottom: 4
                    },
                    borderRight: !0,
                    borderBottom: !0,
                    borderLeft: !0
                }, e.children, t)
            });
        n.d(t, "a", function() {
            return o
        })
    },
    GVhz: function(e, t, n) {
        var r = n("M+Mb"),
            i = n("VGcK");
        e.exports = function e(t, n, o, a, s) {
            return t === n || (null == t || null == n || !i(t) && !i(n) ? t != t && n != n : r(t, n, o, a, e, s))
        }
    },
    GWfv: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            i = p(n("GiK3")),
            o = p(n("DT0+")),
            a = p(n("KSGD")),
            s = p(n("tZ8z")),
            c = p(n("HW6M")),
            l = p(n("z15t")),
            u = p(n("Iwjr")),
            d = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("K01h"));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = (0, o.default)({
            mixins: [s.default],
            propTypes: {
                color: a.default.string.isRequired,
                onChange: a.default.func.isRequired
            },
            getDefaultProps: function() {
                return {
                    color: "rgba(0,0,0,1)",
                    opacitySlider: !1
                }
            },
            getInitialState: function() {
                return this.getStateFrom(this.props)
            },
            componentWillReceiveProps: function(e) {
                var t = this.getStateFrom(e);
                d.equals(this.state.color, t.color) || this.setState(t)
            },
            getStateFrom: function(e) {
                return {
                    color: d.parseToHsv(e.color)
                }
            },
            render: function() {
                var e = (0, c.default)("colorpicker", {
                        "with-opacity-slider": this.props.opacitySlider
                    }),
                    t = r(this.state.color, 3),
                    n = t[0],
                    o = t[1],
                    a = t[2];
                return i.default.createElement("div", {
                    className: e
                }, i.default.createElement("div", {
                    className: "hue-slider"
                }, i.default.createElement(u.default, {
                    vertical: !0,
                    value: n,
                    max: 360,
                    onChange: this.handleHueChange
                })), this.props.opacitySlider && i.default.createElement("div", {
                    className: "opacity-slider"
                }, i.default.createElement(u.default, {
                    vertical: !1,
                    value: this.getAlpha(),
                    max: 1,
                    background: this.getBackgroundGradient(),
                    onChange: this.handleAlphaChange
                })), i.default.createElement(l.default, {
                    x: o,
                    y: a,
                    max: 100,
                    className: d.isDark(this.state.color) ? "dark" : "light",
                    backgroundColor: this.getBackgroundHue(),
                    onChange: this.handleSaturationValueChange
                }))
            },
            getAlpha: function() {
                return void 0 === this.state.color[3] ? 1 : this.state.color[3]
            },
            getBackgroundGradient: function() {
                var e = r(this.state.color, 3),
                    t = e[0],
                    n = e[1],
                    i = e[2];
                return "linear-gradient(to right, rgba(0,0,0,0) 0%, " + d.toRgbString([t, n, i, 1]) + " 100%)"
            },
            getBackgroundHue: function() {
                return d.toRgbString([this.state.color[0], 100, 100])
            },
            handleAlphaChange: function(e) {
                var t = r(this.state.color, 3),
                    n = t[0],
                    i = t[1],
                    o = t[2];
                this.update([n, i, o, e])
            },
            handleHueChange: function(e) {
                var t = r(this.state.color, 4),
                    n = t[1],
                    i = t[2],
                    o = t[3];
                this.update([e, n, i, o])
            },
            handleSaturationValueChange: function(e, t) {
                var n = r(this.state.color, 4),
                    i = n[0],
                    o = n[3];
                this.update([i, e, t, o])
            },
            update: function(e) {
                this.setState({
                    color: e
                }), this.props.onChange(d.toRgbString(e))
            }
        });
        t.default = h
    },
    H1YI: function(e, t, n) {
        var r = n("JGv7"),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = o.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var i = a.call(e);
            return r && (t ? e[s] = n : delete e[s]), i
        }
    },
    H3TN: function(e, t, n) {
        var r = n("tobj"),
            i = n("VGcK"),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.propertyIsEnumerable,
            c = r(function() {
                return arguments
            }()) ? r : function(e) {
                return i(e) && a.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = c
    },
    HMFB: function(e, t, n) {
        var r = n("OScx"),
            i = n("r0iv"),
            o = n("Czj7");
        e.exports = function(e) {
            return o(e) ? r(e) : i(e)
        }
    },
    HMFi: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
    },
    II0X: function(e, t) {
        e.exports = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
    },
    INOA: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
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
    Iwjr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = l(n("GiK3")),
            i = l(n("DT0+")),
            o = l(n("KSGD")),
            a = l(n("tZ8z")),
            s = l(n("HW6M")),
            c = l(n("V/Pj"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, i.default)({
            mixins: [c.default, a.default],
            propTypes: {
                value: o.default.number.isRequired,
                vertical: o.default.bool,
                background: o.default.string
            },
            getDefaultProps: function() {
                return {
                    value: 0,
                    vertical: !1,
                    background: ""
                }
            },
            updatePosition: function(e, t, n) {
                var r = void 0;
                r = this.props.vertical ? (e.bottom - n) / e.height : (t - e.left) / e.width, this.props.onChange(this.getScaledValue(r))
            },
            getCss: function() {
                var e, t, n, r = this.props.vertical ? "bottom" : "left";
                return e = {}, t = r, n = this.getPercentageValue(this.props.value), t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            render: function() {
                var e = (0, s.default)("slider", this.props.vertical ? "vertical" : "horizontal"),
                    t = this.props.background;
                return r.default.createElement("div", {
                    className: e,
                    onMouseDown: this.startUpdates,
                    onTouchStart: this.startUpdates
                }, r.default.createElement("div", {
                    className: "track",
                    style: {
                        background: t
                    }
                }), r.default.createElement("div", {
                    className: "pointer",
                    style: this.getCss()
                }))
            }
        });
        t.default = u
    },
    J0u9: function(e, t, n) {
        var r = n("2oz3"),
            i = n("50Oj"),
            o = n("L4AJ"),
            a = n("4UmU"),
            s = o(function(e, t) {
                if (null == e) return [];
                var n = t.length;
                return n > 1 && a(e, t[0], t[1]) ? t = [] : n > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]), i(e, r(t, 1), [])
            });
        e.exports = s
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.c = function(e) {
            i.n.track(o.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            i.n.track(o.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var r, i = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.Settings = "settings", e.Channel = "channel"
        }(r || (r = {}))
    },
    JGv7: function(e, t, n) {
        var r = n("MygC").Symbol;
        e.exports = r
    },
    JYjH: function(e, t, n) {
        var r = n("m2wS"),
            i = n("5hfY"),
            o = n("QQy1"),
            a = n("F6hB");
        e.exports = function(e) {
            return o(e) ? r(a(e)) : i(e)
        }
    },
    Jo6h: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("6sO2"),
            o = n("OjIq"),
            a = n("Odds"),
            s = (n("IjoR"), function(e) {
                return r.createElement(a._35, {
                    className: "settings-form-group"
                }, r.createElement(o.a, null, r.createElement(a.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(i.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || a.X.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    K01h: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseToHsv = function(e) {
            e = (0, r.default)(e);
            var t = (0, i.default)(e),
                n = 4 === e.length ? e[3] : 1;
            return t.push(n), t
        }, t.toRgbString = l, t.equals = function(e, t) {
            return l(e) === l(t)
        }, t.isDark = function(e) {
            return (0, s.default)((0, o.default)(e)) <= 128
        };
        var r = c(n("s/Z0")),
            i = c(n("zwRn")),
            o = c(n("vEIR")),
            a = c(n("Qe41")),
            s = c(n("vzFj"));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e) {
            var t = (0, o.default)(e);
            return 4 === e.length && t.push(e[3]), (0, a.default)(t)
        }
    },
    K4jf: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            i = n("2KeS"),
            o = n("+xm8"),
            a = n("f2i/"),
            s = n("Aj/L"),
            c = n("TToO"),
            l = n("GiK3"),
            u = n("CIox"),
            d = n("6sO2"),
            p = n("yWCw"),
            h = n("CSlQ"),
            m = n("eXld"),
            g = n("2aoH"),
            f = n("QRuM"),
            v = n("j7/Y"),
            b = n("w9tK"),
            y = n("vH/s"),
            S = n("GH+X"),
            k = n("AQc/"),
            _ = n("Jo6h"),
            E = n("LIeg"),
            C = n("i61F"),
            w = n("HM6l"),
            O = n("9u8h"),
            x = n("5LoI"),
            N = n("MAZT"),
            j = n("5Y57"),
            U = n("kqTE"),
            T = n("zCIC"),
            D = n("HW6M"),
            P = n("5kgt"),
            I = n("puy8"),
            F = n("Odds"),
            A = (n("Pd+R"), function(e) {
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
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Remove", "UserSettingsAutohostListItem"),
                        t = !this.props.isSorting && this.state.hovered,
                        n = {
                            "autohost-list-item": !0,
                            "autohost-list-item--hovered": t
                        },
                        r = null;
                    t && (r = l.createElement(F._8, {
                        className: "autohost-list-item--remove",
                        padding: {
                            right: 1
                        },
                        display: F.R.Flex,
                        attachRight: !0
                    }, l.createElement(F._52, {
                        label: e,
                        direction: F._54.Left
                    }, l.createElement(F.w, {
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: F._25.Trash,
                        onClick: this.onRemoveClick,
                        overlay: !0
                    }))));
                    var i = this.props.user.avatar || Object(I.c)(this.props.user.id, 64);
                    return l.createElement(F._2, c.__assign({
                        className: D(n),
                        zIndex: F._62.Above,
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(P.a)(this.props)), l.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "autohost-list-item__avatar"
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement("img", {
                        alt: this.props.user.name,
                        src: i,
                        draggable: !1
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), r)))
                }, t
            }(l.Component)),
            M = Object(C.SortableElement)(function(e) {
                return l.createElement(A, c.__assign({}, e))
            }),
            R = (n("Y4as"), function(e) {
                return l.createElement(T.b, {
                    className: "autohost-list-edit",
                    suppressScrollX: !0
                }, l.createElement(F._8, null, e.autohostChannels && e.autohostChannels.map(function(t, n) {
                    return l.createElement(M, {
                        user: t,
                        key: t.id,
                        index: n,
                        onRemoveClick: e.onHostRemoved,
                        isSorting: e.isSorting
                    })
                })))
            }),
            L = Object(C.SortableContainer)(function(e) {
                return l.createElement(R, c.__assign({}, e))
            }),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onAddClick = function() {
                        t.props.onAddClick(t.props.user)
                    }, t.onAddedClick = function() {
                        t.props.onAddedClick(t.props.user)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    e = this.props.user.added ? l.createElement(F.v, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: F._25.Check,
                        statusAlertIcon: F._25.Trash,
                        statusAlertText: Object(d.d)("Remove", "UserSettingsAutohostUserResultCard")
                    }, Object(d.d)("Added", "UserSettingsAutohostUserResultCard")) : l.createElement(F.v, {
                        type: F.B.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(d.d)("Add", "UserSettingsAutohostUserResultCard"));
                    var t = this.props.user.avatar || Object(I.c)(this.props.user.id, 64);
                    return l.createElement(F._8, c.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(P.a)(this.props)), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F.E, {
                        alt: this.props.user.name,
                        src: t,
                        size: F.F.Size4,
                        aspect: F.l.Aspect1x1
                    }), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(l.Component),
            z = (n("1Sl2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userSearch = null, t.setUserSearchRef = function(e) {
                        t.userSearch = e
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                }, t.prototype.render = function() {
                    var e = this,
                        t = null;
                    return this.props.isWaiting ? t = l.createElement(F._10, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return l.createElement(U.a, {
                            key: t.id
                        }, l.createElement(B, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), l.createElement(F._8, {
                        className: "autohost-list",
                        alignContent: F.b.Center
                    }, l.createElement(F._8, {
                        position: F._15.Relative,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(j.a, {
                        onChange: this.props.onUserInputChange,
                        onFocusInput: this.props.onFocusInput,
                        ref: this.setUserSearchRef,
                        placeholder: Object(d.d)("Search channels to host", "UserSettingsAutohostList"),
                        balloonProps: {
                            show: this.props.isUserSearchOpen,
                            direction: F.r.Bottom,
                            size: F.s.Large
                        },
                        onClose: this.props.onSearchClose,
                        isErrored: this.props.isSearchErrored
                    }, l.createElement(F._8, {
                        className: "autohost-list__user-search"
                    }, l.createElement(T.b, {
                        contentClassName: "autohost-list__user-search-content",
                        suppressScrollX: !0
                    }, l.createElement(F._8, {
                        fullWidth: !0
                    }, t, l.createElement(T.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), l.createElement(L, {
                        onHostRemoved: this.props.onHostRemoved,
                        autohostChannels: this.props.autohostChannels,
                        onSortEnd: this.props.onSortEnd,
                        lockToContainerEdges: !0,
                        lockAxis: "y",
                        helperClass: "autohost-list-item--selected",
                        onSortStart: this.props.onSortStart,
                        isSorting: this.props.isSorting,
                        selectedIndex: this.props.selectedIndex,
                        distance: 20
                    }))
                }, t
            }(l.Component)),
            V = 100,
            q = "/kraken/streams/recommended",
            H = "kraken/autohost/list",
            G = function(e) {
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
                        currentPage: 0
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
                        }, V)
                    }, n.loadMore = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r, i, o = this;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, t = null, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(x.a.Users, this.state.userTerm, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), d.j.error(n, "Algolia page search failed"), this.setState({
                                            isUserSearchOpen: !0
                                        }), this.props.onError(""), [2];
                                    case 4:
                                        return t && t.users ? (r = t.users.hits.filter(function(e) {
                                            return !o.props.user || e.objectID !== o.props.user.id
                                        }).map(function(e) {
                                            return {
                                                id: e.objectID,
                                                avatar: e.profile_image,
                                                login: e.login,
                                                name: e.name,
                                                added: !!o.state.autohostChannels.find(function(t) {
                                                    return t.id === e.objectID
                                                })
                                            }
                                        }), i = t.exhaustedHits, this.setState(function(t) {
                                            return {
                                                userResults: t.userResults.concat(r),
                                                isUserSearchOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: i
                                            }
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, n.addChannel = function(e) {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.putOrThrow(H, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), r = Object(d.d)("Unable to add user to auto host list", "UserSettingsAutohostList"), d.j.error(n, r, {
                                            target: e
                                        }), this.props.onError(r), [2];
                                    case 4:
                                        return this.setState(function(t) {
                                            var n = t.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                r = t.userResults;
                                            t.userResults && n >= 0 && (r = E(t.userResults, function(e) {
                                                return e[n]
                                            }, function(e) {
                                                return e.added = !0, e
                                            }));
                                            var i = t.recommendedChannels ? t.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                o = t.recommendedChannels;
                                            return t.recommendedChannels && i >= 0 && (o = E(t.recommendedChannels, function(e) {
                                                return e[i]
                                            }, function(e) {
                                                return e.added = !0, e
                                            })), {
                                                userResults: r,
                                                recommendedChannels: o,
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
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r = this;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.recommendedChannels) return this.setState(function(e) {
                                            return {
                                                userResults: e.recommendedChannels || [],
                                                isUserSearchOpen: !0
                                            }
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.getOrThrow(q)];
                                    case 2:
                                        return e = i.sent(), [3, 4];
                                    case 3:
                                        return t = i.sent(), d.j.error(t, "Unable to retrieve recomended channels"), [2];
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
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, O.a.getOrThrow(H)];
                                    case 1:
                                        return e = i.sent(), [3, 3];
                                    case 2:
                                        return t = i.sent(), n = Object(d.d)("Unable to fetch auto host list", "UserSettingsAutohostList"), d.j.error(t, n), this.props.onError(n), [2];
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
                        return c.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        if (t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, O.a.deleteOrThrow(H)];
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
                                        t.splice(r, 1), i = t.map(function(e) {
                                            return e.id
                                        }), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, O.a.putOrThrow(H, {
                                            body: {
                                                targets: i.join(",")
                                            }
                                        })];
                                    case 7:
                                        return a.sent(), [3, 9];
                                    case 8:
                                        return o = a.sent(), this.reportChannelError(e, o), [2];
                                    case 9:
                                        return this.setState(function(n) {
                                            var r = n.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                i = n.userResults;
                                            n.userResults && r >= 0 && (i = E(n.userResults, function(e) {
                                                return e[r]
                                            }, function(e) {
                                                return e.added = !1, e
                                            }));
                                            var o = n.recommendedChannels ? n.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                a = n.recommendedChannels;
                                            return n.recommendedChannels && o >= 0 && (a = E(n.recommendedChannels, function(e) {
                                                return e[o]
                                            }, function(e) {
                                                return e.added = !1, e
                                            })), {
                                                userResults: i,
                                                recommendedChannels: a,
                                                autohostChannels: t
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, n.onChannelOrderChange = function(e) {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, i;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.newIndex === e.oldIndex) return this.setState({
                                            isSorting: !1
                                        }), [2];
                                        t = Object(C.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                            autohostChannels: t,
                                            isSorting: !1
                                        }), n = t.map(function(e) {
                                            return e.id
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, O.a.putOrThrow(H, {
                                            body: {
                                                targets: n.join(",")
                                            }
                                        })];
                                    case 2:
                                        return o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), i = Object(d.d)("Unable to re order auto host list", "UserSettingsAutohostList"), d.j.error(r, i), this.props.onError(i), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onChannelOrderChangeStart = function() {
                        n.setState({
                            isSorting: !0
                        })
                    }, n.searchClient = new N.a({
                        appId: d.a.algoliaApplicationID,
                        apiKey: d.a.algoliaAPIKey,
                        apolloClient: d.o.apollo.client,
                        logger: d.j,
                        config: d.a
                    }), n
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(z, {
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
                        isSorting: this.state.isSorting
                    })
                }, t.prototype.doUserSearch = function(e) {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, i, o = this;
                        return c.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(w.a)(), this.setState({
                                        queryID: t
                                    }), n = null, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(x.a.Users, e, t)];
                                case 2:
                                    return n = a.sent(), [3, 4];
                                case 3:
                                    return r = a.sent(), d.j.error(r, "Algolia autohost user search failed"), this.setState({
                                        isWaiting: !1,
                                        isUserSearchOpen: !0
                                    }), this.props.onError(""), [2];
                                case 4:
                                    return n && n.users ? (i = n.users.hits.filter(function(e) {
                                        return !o.props.user || e.objectID !== o.props.user.id
                                    }).map(function(e) {
                                        return {
                                            id: e.objectID,
                                            avatar: e.profile_image,
                                            name: e.name,
                                            login: e.login,
                                            added: !!o.state.autohostChannels.find(function(t) {
                                                return t.id === e.objectID
                                            })
                                        }
                                    }), this.setState({
                                        userResults: i,
                                        isUserSearchOpen: !0,
                                        isWaiting: !1,
                                        exhaustedHits: n.exhaustedHits,
                                        queryID: ""
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.prototype.reportChannelError = function(e, t) {
                    var n = Object(d.d)("Unable to remove channel from auto host list", "UserSettingsAutohostList");
                    d.j.error(t, n, {
                        target: e
                    }), this.props.onError(n)
                }, t
            }(l.Component);
        var W, Q = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(G),
            Y = n("7vx8"),
            K = n("gLfK");
        ! function(e) {
            e.Random = "random", e.Ordered = "ordered"
        }(W || (W = {}));
        var X = {
            vodcastHosting: !1,
            enabled: !1,
            strategy: W.Random,
            teamHost: !1
        };

        function J(e) {
            var t = e.settings;
            return {
                vodcastHosting: !t.deprioritize_vodcast,
                enabled: t.enabled,
                strategy: t.strategy,
                teamHost: t.team_host
            }
        }
        var $, Z = n("831n");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
        }($ || ($ = {}));
        var ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autohostSettings: X,
                        requestState: $.Loading
                    }, t.handleToggleEnabled = function(e) {
                        t.saveSettings({
                            enabled: e.currentTarget.checked
                        })
                    }, t.handleToggleTeamHost = function(e) {
                        t.saveSettings({
                            teamHost: e.currentTarget.checked
                        })
                    }, t.handleToggleVodcastHosting = function(e) {
                        t.saveSettings({
                            vodcastHosting: e.currentTarget.checked
                        })
                    }, t.handleSetRandomAutohostStrategy = function() {
                        t.saveSettings({
                            strategy: W.Random
                        })
                    }, t.handleSetOrderedAutohostStrategy = function() {
                        t.saveSettings({
                            strategy: W.Ordered
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, function() {
                                        return c.__awaiter(this, void 0, void 0, function() {
                                            var e;
                                            return c.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, O.a.get("/kraken/autohost/settings")];
                                                    case 1:
                                                        return (e = t.sent()).error || e.requestError ? [2, {
                                                            isError: !0,
                                                            autohostSettings: void 0
                                                        }] : [2, {
                                                            isError: !1,
                                                            autohostSettings: J(e.body)
                                                        }]
                                                }
                                            })
                                        })
                                    }()];
                                case 1:
                                    return (e = t.sent()).isError ? this.setState({
                                        requestState: $.Error
                                    }) : this.setState({
                                        autohostSettings: e.autohostSettings,
                                        requestState: $.Success
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(l.Fragment, null, this.state.requestState === $.Error && l.createElement(F._8, {
                        margin: {
                            bottom: 3
                        }
                    }, l.createElement(F.Q, {
                        color: F.K.Error
                    }, Object(d.d)("Something went wrong. Give it another try later.", "UserSettingsAutohostSettings"))), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Auto host channels", "UserSettingsAutohostSettings")
                    }, l.createElement(F._51, {
                        name: "enabled",
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.enabled,
                        onChange: this.handleToggleEnabled
                    }), l.createElement(K.a, {
                        text: Object(d.d)("Automatically host channels from your host list when you're offline", "UserSettingsAutohostSettings")
                    })), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Host team channels", "UserSettingsAutohostSettings")
                    }, l.createElement(F._51, {
                        name: "teamHost",
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.teamHost,
                        onChange: this.handleToggleTeamHost
                    }), l.createElement(K.a, {
                        text: Object(d.d)("Include team channels in your host list", "UserSettingsAutohostSettings")
                    })), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Host pre-recorded videos", "UserSettingsAutohostSettings")
                    }, l.createElement(F._51, {
                        name: "vodcastHosting",
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.vodcastHosting,
                        onChange: this.handleToggleVodcastHosting
                    }), l.createElement(K.a, {
                        text: Object(d.d)("Include channels streaming pre-recorded video, like Premieres or Reruns", "UserSettingsAutohostSettings")
                    })), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Hosting priority", "UserSettingsAutohostSettings")
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F._21, {
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.strategy === W.Ordered,
                        onChange: this.handleSetOrderedAutohostStrategy,
                        label: Object(d.d)("Host channels by the order they appear in the list", "UserSettingsAutohostSettings"),
                        name: "hostPriority",
                        value: W.Ordered
                    })), l.createElement(F._21, {
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.strategy === W.Random,
                        onChange: this.handleSetRandomAutohostStrategy,
                        label: Object(d.d)("Host channels randomly from the list", "UserSettingsAutohostSettings"),
                        name: "hostPriority",
                        value: W.Random
                    })))
                }, t.prototype.saveSettings = function(e) {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.setState({
                                        requestState: $.Loading
                                    }), [4, function(e) {
                                        return c.__awaiter(this, void 0, void 0, function() {
                                            var t;
                                            return c.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, O.a.put("/kraken/autohost/settings", {
                                                            body: (r = e, {
                                                                deprioritize_vodcast: !r.vodcastHosting,
                                                                enabled: r.enabled,
                                                                strategy: r.strategy,
                                                                team_host: r.teamHost
                                                            })
                                                        })];
                                                    case 1:
                                                        return (t = n.sent()).error || t.requestError ? [2, {
                                                            isError: !0,
                                                            autohostSettings: void 0
                                                        }] : [2, {
                                                            isError: !1,
                                                            autohostSettings: J(t.body)
                                                        }]
                                                }
                                                var r
                                            })
                                        })
                                    }(c.__assign({}, this.state.autohostSettings, e))];
                                case 1:
                                    return (t = n.sent()).isError ? this.setState({
                                        requestState: $.Error
                                    }) : this.setState({
                                        autohostSettings: t.autohostSettings,
                                        requestState: $.Success
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            te = Object(Y.a)(Z)(ee),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleAutohostError = function(e) {
                        t.setState({
                            autohostError: e
                        })
                    }, t.handleAutohostInput = function() {
                        t.setState({
                            autohostError: void 0
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F._8, null, l.createElement(k.a, {
                        title: Object(d.d)("Autohost Settings", "AutohostSection")
                    }), l.createElement(S.a, null, l.createElement(te, null), l.createElement(_.a, {
                        error: !!this.state.autohostError,
                        errorMessage: this.state.autohostError,
                        label: Object(d.d)("Host List", "AutohostSection")
                    }, l.createElement(Q, {
                        onError: this.handleAutohostError,
                        onUserInput: this.handleAutohostInput,
                        isSearchErrored: !!this.state.autohostError
                    }))))
                }, t
            }(l.Component),
            re = Object(h.d)("AutohostSection", {
                autoReportInteractive: !0
            })(ne),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDashboardLink = function(e) {
                        return l.createElement(F.O, {
                            key: "link",
                            to: "/" + t.props.user.login + "/dashboard/settings/automod"
                        }, e)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_.a, {
                        label: Object(d.d)("AutoMod", "AutomodSettingsLink")
                    }, this.props.user && Object(d.d)("AutoMod and blocked and permitted terms settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                        "x:link": this.renderDashboardLink
                    }, "AutomodSettingsLink"))
                }, t
            }(l.Component);
        var oe, ae = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(ie),
            se = n("N221"),
            ce = n("nqey");
        n("LLwJ");
        ! function(e) {
            e.BannedUserName = "banned-chatters-component__user-name", e.BannedByMessage = "banned-chatters-component__banned-by-message"
        }(oe || (oe = {}));
        var le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.data.currentUser.bannedUsers.length > 0;
                    return l.createElement(_.a, {
                        label: Object(d.d)("Banned Chatters", "BannedChatters")
                    }, e ? this.renderBannedChatters() : this.renderEmptyMessage())
                }, t.prototype.renderBannedChatters = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.bannedUsers;
                    if (!e) return null;
                    var t = e.filter(function(e) {
                        return e && e.bannedUser && e.bannedUser.id
                    });
                    return l.createElement(se.b, {
                        className: "banned-chatters__list",
                        autoHide: !1
                    }, l.createElement("table", null, l.createElement("tbody", null, t.map(function(e) {
                        var t = Object(d.d)("Banned by {modUserDisplayName} on {date}", {
                            modUserDisplayName: e.modUser && e.modUser.displayName || Object(d.d)("an unknown user", "BannedChatters"),
                            date: Object(d.c)(new Date(e.bannedAt))
                        }, "BannedChatters");
                        return l.createElement("tr", {
                            key: e.bannedUser.id
                        }, l.createElement("td", null, l.createElement(F._2, {
                            padding: {
                                right: 4,
                                bottom: .5
                            }
                        }, l.createElement(F.Q, {
                            ellipsis: !0,
                            bold: !0,
                            "data-test-selector": oe.BannedUserName
                        }, e.bannedUser && e.bannedUser.login))), l.createElement("td", null, l.createElement(F.Q, {
                            "data-test-selector": oe.BannedByMessage
                        }, t)))
                    }))))
                }, t.prototype.renderEmptyMessage = function() {
                    return l.createElement(F.Q, {
                        bold: !0
                    }, Object(d.d)("There are no users banned from your chat.", "BannedChatters"))
                }, t
            }(l.Component),
            ue = Object(i.d)(Object(Y.a)(ce), Object(h.d)("BannedChatters"))(le),
            de = n("3zLD"),
            pe = n("oIkB"),
            he = n("bX1P");

        function me() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.logger = d.o.logger.withCategory("with-chat-settings-update"), e.updateChatSettings = function(t) {
                            var n = e.props.channelID;
                            return 0 === n.length ? Promise.reject("No channelID - unable to update chat settings.") : (e.logger.debug("Updating chat settings", {
                                data: t,
                                channelID: n
                            }), e.props.updateChatSettings(Object(pe.a)(c.__assign({}, t, {
                                channelID: n
                            }))))
                        }, e
                    }
                    return c.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            updateChatSettings: this.updateChatSettings
                        };
                        return l.createElement(e, c.__assign({}, this.props, t))
                    }, n.displayName = "WithChatSettingsUpdate(" + (e.displayName || e.name || "Component") + ")", n
                }(l.Component);
                return Object(i.d)(Object(r.b)(function(e) {
                    return {
                        channelID: e.session.user && e.session.user.id || ""
                    }
                }), Object(Y.a)(he, {
                    name: "updateChatSettings"
                }))(t)
            }
        }
        var ge, fe = n("deXC"),
            ve = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(d.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(d.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            be = n("ar1V"),
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-block-hyperlinks"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            hideLinks: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        blockLinks: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(be, {}, t), this.logger.debug("Updated chat setting", {
                                            hideLinks: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.chatSettings && n.chatSettings.blockLinks || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(ve, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(l.Component),
            Se = Object(de.compose)(Object(h.d)("BlockHyperlinksToggle"), Object(Y.a)(be, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(ye),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(d.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(d.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(d.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(d.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, n.map(function(n) {
                        var r = "chat-delay:" + n.label;
                        return l.createElement(F._8, {
                            key: r,
                            margin: {
                                right: 2
                            },
                            display: F.R.Flex,
                            flexDirection: F.T.Row
                        }, l.createElement(F._21, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), l.createElement(K.a, {
                        text: Object(d.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(l.Component),
            _e = n("D2cp"),
            Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        chatDelayMs: 0
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-delay"), t.onChange = function(e) {
                        var n = t.state.chatDelayMs;
                        t.setState({
                            chatDelayMs: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(Math.floor(e), n)
                        })
                    }, t.updateChatSettings = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            chatDelayInMs: e
                                        })];
                                    case 1:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        chatDelayMs: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(_e, {}, t), this.logger.debug("Updated chat setting", {
                                            chatDelayInMs: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return r = i.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            chatDelayMs: n
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getChatDelayFromProps(e);
                        this.setState({
                            chatDelayMs: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(ke, {
                        chatDelayMs: this.state.chatDelayMs,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t.prototype.getChatDelayFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.chatDelayMs || 0
                }, t
            }(l.Component),
            Ce = Object(de.compose)(Object(h.d)("ChatDelayRadioButtons"), Object(Y.a)(_e, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(Ee),
            we = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = l.createElement(F._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(F.v, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? F.A.Loading : F.A.Default
                    }, Object(d.d)("Save Changes", "ChatRulesTextArea")))), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, l.createElement(F._46, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        placeholder: this.renderPlaceholderString(),
                        rows: 5
                    }), l.createElement(K.a, {
                        text: Object(d.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t.prototype.renderPlaceholderString = function() {
                    return "- " + [Object(d.d)("Be excellent to each other.", "ChatRulesTextArea"), Object(d.d)("Have fun!", "ChatRulesTextArea")].join("\n- ")
                }, t
            }(l.Component),
            Oe = n("WaOj"),
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        initialRules: "",
                        rules: ""
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-rules"), t.onChange = function(e) {
                        t.setState({
                            rules: e.currentTarget.value
                        })
                    }, t.onClickSave = function() {
                        t.setState({
                            saving: !0
                        }, t.updateChatSettings)
                    }, t.updateChatSettings = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), e = this.state.rules.split("\n"), [4, this.props.updateChatSettings({
                                            rules: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        rules: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Oe, {}, t), this.logger.debug("Updated chat setting", {
                                            rules: e
                                        }), this.setState(function(e) {
                                            return {
                                                saving: !1,
                                                initialRules: e.rules,
                                                errorSaving: !1
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getRulesFromProps(e);
                        this.setState({
                            rules: t,
                            initialRules: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(we, {
                        rules: this.state.rules,
                        dirty: this.state.initialRules !== this.state.rules,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange,
                        onClickSave: this.onClickSave
                    })
                }, t.prototype.getRulesFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.rules.join("\n") || ""
                }, t
            }(l.Component),
            Ne = Object(de.compose)(Object(h.d)("ChatRulesTextArea"), Object(Y.a)(Oe, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(xe),
            je = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-channel-page-email-verification",
                    label: Object(d.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(d.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Ue = n("woYr"),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-require-verified-email"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            requireVerifiedAccount: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        requireVerifiedAccount: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Ue, {}, t), this.logger.debug("Updated chat setting", {
                                            requireVerifiedAccount: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.chatSettings && n.chatSettings.requireVerifiedAccount || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(je, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(l.Component),
            De = Object(de.compose)(Object(h.d)("EmailVerificationToggle"), Object(Y.a)(Ue, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(Te),
            Pe = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-channel-page-mature-content",
                    label: Object(d.d)("Mature Content", "MatureContentToggle"),
                    description: Object(d.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return l.createElement("a", {
                                key: "mature-content-toggle-tos",
                                href: "https://www.twitch.tv/p/terms-of-service/"
                            }, e)
                        }
                    }, "MatureContentToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Ie = n("UD8e"),
            Fe = n("oYVU"),
            Ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("mature-content"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateBroadcastSettings(e)
                        })
                    }, t.updateBroadcastSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating broadcast settings", {
                                                isMature: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update broadcast settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(pe.a)({
                                            userID: t,
                                            isMature: e
                                        }))];
                                    case 2:
                                        return i.sent(), n = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.broadcastSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    broadcastSettings: c.__assign({}, r, {
                                                        isMature: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Fe, {}, n), this.logger.debug("Updated broadcast settings", {
                                            isMature: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return r = i.sent(), this.logger.warn("Failed to update broadcast settings", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.broadcastSettings && n.broadcastSettings.isMature || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.broadcastSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Pe, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            Me = Object(i.d)(Object(h.d)("MatureContentToggle"), Object(Y.a)(Fe, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(Y.a)(Ie, {
                name: "updateBroadcastSettings"
            }))(Ae),
            Re = n("6T7P"),
            Le = n.n(Re);
        n("jtEV");
        ! function(e) {
            e.AcceptLink = "team-invitations-item__accept-link", e.DeclineLink = "team-invitations-item__decline-link"
        }(ge || (ge = {}));
        var Be, ze = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeclineClicked = function() {
                        t.props.declineInvitation(t.props.index)
                    }, t.onAcceptClick = function() {
                        t.props.acceptInvitation(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Accept", "TeamInvitationsItem"),
                        t = Object(d.d)("Decline", "TeamInvitationsItem");
                    return l.createElement(F._8, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(P.a)(this.props), {
                        className: "team-invitations-item"
                    }), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "team-invitations-item__avatar"
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement(h.b, {
                        src: this.props.invitation.logo || Le.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.invitation.displayName
                        }, "TeamInvitationsItem")
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.invitation.name))), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.v, {
                        ariaLabel: e,
                        onClick: this.onAcceptClick,
                        type: F.B.Success,
                        "data-test-selector": ge.AcceptLink
                    }, e)), l.createElement(F._8, null, l.createElement(F.v, {
                        ariaLabel: t,
                        onClick: this.onDeclineClicked,
                        type: F.B.Alert,
                        "data-test-selector": ge.DeclineLink
                    }, t))))
                }, t
            }(l.Component),
            Ve = Object(h.d)("TeamInvitationsItem")(ze),
            qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.invitations.length < 1 && !this.props.formErrorMessage ? null : l.createElement(_.a, {
                        label: Object(d.d)("Invitations", "TeamInvitations"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.invitations.map(function(t, n) {
                        return l.createElement(Ve, {
                            key: t.name,
                            invitation: t,
                            index: n,
                            acceptInvitation: e.props.acceptInvitation,
                            declineInvitation: e.props.declineInvitation
                        })
                    }))
                }, t
            }(l.Component),
            He = Object(h.d)("TeamInvitations")(qe),
            Ge = (n("yHYq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(F._8, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(P.a)(this.props), {
                        className: "team-manager-item"
                    }), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "team-manager-item__avatar"
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement(h.b, {
                        src: this.props.team.logo || Le.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.team.displayName
                        }, "TeamManagerItem")
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.team.name))), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.O, {
                        to: "/teams/" + this.props.team.name + "/dashboard"
                    }, Object(d.d)("Edit", "TeamManagerItem"))), l.createElement(F._8, null, l.createElement(F.O, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name
                    }, Object(d.d)("View", "TeamManagerItem")))))
                }, t
            }(l.Component)),
            We = Object(h.d)("TeamManagerItem")(Ge),
            Qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.teams.length < 1 && !this.props.formErrorMessage ? null : l.createElement(_.a, {
                        label: Object(d.d)("Manager", "TeamManager"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.teams.map(function(e) {
                        return l.createElement(We, {
                            key: e.name,
                            team: e
                        })
                    }))
                }, t
            }(l.Component),
            Ye = Object(h.d)("TeamManager")(Qe),
            Ke = n("V5M+"),
            Xe = n("+8VM");
        ! function(e) {
            e.Message = "confirmation-modal__message", e.ConfirmButton = "confirmation-modal__confirm-button"
        }(Be || (Be = {}));
        var Je = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleCancelClick = function() {
                    t.props.closeModal()
                }, t.renderConfirmButton = function() {
                    return l.cloneElement(t.props.confirmButton, {
                        onClick: t.handleConfirmClick,
                        "data-test-selector": Be.ConfirmButton
                    })
                }, t.handleConfirmClick = function() {
                    t.props.closeModal(), t.props.onConfirmClick()
                }, t
            }
            return c.__extends(t, e), t.prototype.render = function() {
                return l.createElement(F._35, {
                    background: F.n.Base,
                    padding: {
                        x: 3,
                        top: 3,
                        bottom: 2
                    },
                    display: F.R.Flex,
                    flexDirection: F.T.Column
                }, l.createElement(F._8, {
                    "data-test-selector": Be.Message
                }, this.props.message), l.createElement(F._8, {
                    display: F.R.Flex,
                    flexDirection: F.T.Row,
                    justifyContent: F._7.Center,
                    padding: {
                        top: 2
                    }
                }, l.createElement(F._8, {
                    padding: {
                        right: .5
                    }
                }, l.createElement(F.v, {
                    type: F.B.Text,
                    onClick: this.handleCancelClick
                }, "Cancel")), l.createElement(F._8, {
                    padding: {
                        left: .5
                    }
                }, this.renderConfirmButton())), l.createElement(Xe.a, null))
            }, t
        }(l.Component);
        var $e = Object(r.b)(null, function(e) {
                return Object(i.b)({
                    closeModal: Ke.c
                }, e)
            })(Je),
            Ze = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.showModal({
                            message: t.props.message,
                            confirmButton: t.props.confirmButton,
                            onConfirmClick: t.props.onConfirmClick
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F.w, c.__assign({}, this.props, {
                        onClick: this.handleClick
                    }))
                }, t
            }(l.Component);
        var et = Object(r.b)(null, function(e) {
                return {
                    showModal: function(t) {
                        return e(Object(Ke.d)($e, t))
                    }
                }
            })(Ze),
            tt = (n("zpQV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickRemove = function() {
                        t.props.onClickRemove(t.props.index)
                    }, t.onChangeRevenue = function() {
                        t.props.onChangeRevenue(t.props.index)
                    }, t.onChangeStats = function() {
                        t.props.onChangeStats(t.props.index)
                    }, t.onChangePrimary = function() {
                        t.props.onChangePrimary(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Remove", "TeamMembershipsItem"),
                        t = Object(d.d)("Do you want to remove yourself from this team?", "TeamMembershipsItem"),
                        n = null;
                    return this.props.showPrimaryInput && (n = l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F._21, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                        name: "team-memberships-main-radio",
                        onChange: this.onChangePrimary,
                        label: Object(d.d)("Main", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.primary
                    }))), l.createElement(F._8, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(P.a)(this.props), {
                        className: "team-memberships-item"
                    }), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "team-memberships-item__avatar",
                        flexShrink: 0
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement(h.b, {
                        src: this.props.membership.team.logo || Le.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.membership.team.displayName
                        }, "TeamMembershipsItem")
                    }))), l.createElement(F._8, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1,
                        position: F._15.Relative,
                        ellipsis: !0
                    }, l.createElement(F.O, {
                        to: "/team/" + this.props.membership.team.name
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.membership.team.displayName))), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.J, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                        onChange: this.onChangeStats,
                        label: Object(d.d)("Stats", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.statsRevealed
                    })), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.J, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                        onChange: this.onChangeRevenue,
                        label: Object(d.d)("Revenue", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.revenueRevealed
                    })), n, l.createElement(F._52, {
                        label: e
                    }, l.createElement(et, {
                        ariaLabel: e,
                        icon: F._25.Trash,
                        onConfirmClick: this.onClickRemove,
                        disabled: this.props.updating,
                        message: l.createElement(F.Q, {
                            fontSize: F.V.Size4
                        }, t),
                        confirmButton: l.createElement(F.v, {
                            type: F.B.Alert
                        }, Object(d.d)("Leave Team", "TeamMembershipsItem"))
                    }))))
                }, t
            }(l.Component)),
            nt = Object(h.d)("TeamMembershipsItem")(tt),
            rt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.memberships.length < 1 && !this.props.formErrorMessage ? null : l.createElement(_.a, {
                        label: Object(d.d)("Member", "TeamMemberships"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.memberships.map(function(t, n) {
                        return l.createElement(nt, {
                            index: n,
                            key: t.team.name,
                            onClickRemove: e.props.onClickRemove,
                            onChangeStats: e.props.onChangeStats,
                            onChangeRevenue: e.props.onChangeRevenue,
                            onChangePrimary: e.props.onChangePrimary,
                            showPrimaryInput: e.props.memberships.length > 1,
                            membership: t,
                            updating: e.props.updating
                        })
                    }))
                }, t
            }(l.Component),
            it = Object(h.d)("TeamMemberships")(rt),
            ot = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(S.a, null, l.createElement(Ye, {
                        teams: this.props.managedTeams,
                        formErrorMessage: this.props.managedError
                    }), l.createElement(He, {
                        invitations: this.props.invitations,
                        acceptInvitation: this.props.acceptInvitation,
                        declineInvitation: this.props.declineInvitation,
                        formErrorMessage: this.props.invitationsError
                    }), l.createElement(it, {
                        memberships: this.props.memberships,
                        formErrorMessage: this.props.membershipsError,
                        onClickRemove: this.props.onClickRemove,
                        onChangeStats: this.props.onChangeStats,
                        onChangeRevenue: this.props.onChangeRevenue,
                        onChangePrimary: this.props.onChangePrimary,
                        updating: this.props.updatingToggles
                    }))
                }, t
            }(l.Component),
            at = Object(h.d)("TeamSettings")(ot),
            st = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        membershipsError: "",
                        memberships: [],
                        updatingToggles: !1,
                        invitationsError: "",
                        invitations: [],
                        updatingInvitations: !1,
                        managedError: "",
                        managedTeams: []
                    }, t.logger = d.o.logger.withCategory("team-settings"), t.deleteMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o, a, s;
                            return c.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), i = this.state.memberships[e], o = "/v5/channels/" + this.props.user.id + "/teams/" + i.team.name + "/membership", c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, O.a.deleteOrThrow(o)];
                                    case 2:
                                        return r = c.sent(), [3, 4];
                                    case 3:
                                        return a = c.sent(), t = a, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Team Memberships error"), n = r.error), t ? (s = Object(d.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, s, n), this.setState({
                                            membershipsError: s,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = t.memberships.slice();
                                            return n.splice(e, 1), {
                                                memberships: n,
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangePrimary = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o, a = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.state.memberships[e].primary) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            primary: !0
                                        }))];
                                    case 2:
                                        return n = s.sent(), [3, 4];
                                    case 3:
                                        return i = s.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (o = Object(d.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, o, r), this.setState({
                                            membershipsError: o,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = a.state.memberships.findIndex(function(e) {
                                                    return e.primary
                                                }),
                                                r = E(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.primary = !0, e
                                                });
                                            return n >= 0 && (r[n].primary = !1), {
                                                memberships: r,
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeRevenue = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            updatingToggles: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            revenueRevealed: !this.state.memberships[e].revenueRevealed
                                        }))];
                                    case 2:
                                        return n = a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (o = Object(d.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, o, r), this.setState({
                                            membershipsError: o,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: E(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.revenueRevealed = !e.revenueRevealed, e
                                                }),
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeStats = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            updatingToggles: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            statsRevealed: !this.state.memberships[e].statsRevealed
                                        }))];
                                    case 2:
                                        return n = a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (o = Object(d.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, o, r), this.setState({
                                            membershipsError: o,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: E(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.statsRevealed = !e.statsRevealed, e
                                                }),
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.putChannelsMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.user ? (t = "/v5/channels/" + this.props.user.id + "/teams/" + e.team.name + "/membership", [4, O.a.put(t, {
                                            body: {
                                                primary: e.primary,
                                                revenue_revealed: e.revenueRevealed,
                                                stats_revealed: e.statsRevealed
                                            }
                                        })]) : [2];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, t.fetchTeamsMembership = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        r = "/v5/channels/" + this.props.user.id + "/memberships", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, O.a.get(r)];
                                    case 2:
                                        return t = a.sent(), this.setState({
                                            memberships: this.deserializeMemberships(t),
                                            updatingToggles: !1
                                        }), [3, 4];
                                    case 3:
                                        return i = a.sent(), e = i, [3, 4];
                                    case 4:
                                        return t && t.error && (e = new Error("Team Memberships error"), n = t.error), e ? (o = Object(d.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data", n), this.setState({
                                            membershipsError: o
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.deserializeMemberships = function(e) {
                        return e.body ? e.body.memberships.map(function(e) {
                            return {
                                team: {
                                    name: e.team.name,
                                    displayName: e.team.display_name,
                                    logo: e.team.logo_url
                                },
                                primary: e.primary,
                                revenueRevealed: e.revenue_revealed,
                                statsRevealed: e.stats_revealed
                            }
                        }) : []
                    }, t.fetchInvitations = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        e = "/v5/channels/" + this.props.user.id + "/invitations", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.getOrThrow(e)];
                                    case 2:
                                        return t = i.sent(), this.setState({
                                            invitations: this.deserializeInvitations(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), r = Object(d.d)("Failed to load Team data.  Please refresh the page and try again", "TeamInvitations"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                            invitationsError: r
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.declineInvitation = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.respondToInvitation(e, !1)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.acceptInvitation = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.respondToInvitation(e, !0)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.respondToInvitation = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, o, a, s, l;
                            return c.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.invitations.length) return [2];
                                        this.setState({
                                            updatingInvitations: !0
                                        }), o = this.state.invitations[e], a = "/v5/channels/" + this.props.user.id + "/teams/" + o.name + "/invitation", u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, O.a.put(a, {
                                            body: {
                                                accepted: n
                                            }
                                        })];
                                    case 2:
                                        return i = u.sent(), [3, 4];
                                    case 3:
                                        return s = u.sent(), t = s, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Invitations error"), r = i.error), t ? (l = Object(d.d)("Unable to respond to invitation", "TeamInvitations"), this.logger.error(t, l, r), this.setState({
                                            invitationsError: l,
                                            updatingInvitations: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var r = t.invitations.slice();
                                            r.splice(e, 1);
                                            var i = t.memberships.slice();
                                            return n && i.push({
                                                team: c.__assign({}, o),
                                                revenueRevealed: !1,
                                                statsRevealed: !1,
                                                primary: !1
                                            }), {
                                                memberships: i,
                                                invitations: r,
                                                updatingInvitations: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.deserializeInvitations = function(e) {
                        return e.body ? e.body.invitations.map(function(e) {
                            return {
                                name: e.team.name,
                                displayName: e.team.display_name,
                                logo: e.team.logo_url
                            }
                        }) : []
                    }, t.fetchManagedTeams = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        e = "/v5/users/" + this.props.user.id + "/teams", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.getOrThrow(e)];
                                    case 2:
                                        return t = i.sent(), this.setState({
                                            managedTeams: this.deserializeTeams(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), r = Object(d.d)("Failed to load Team data.  Please refresh the page and try again", "TeamManager"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                            managedError: r
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.deserializeTeams = function(e) {
                        return e.body ? e.body.teams.map(function(e) {
                            return {
                                name: e.name,
                                displayName: e.display_name,
                                logo: e.logo_url
                            }
                        }) : []
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.fetchTeamsMembership(), this.fetchInvitations(), this.fetchManagedTeams()
                }, t.prototype.render = function() {
                    return this.hasTeamContentToShow() ? l.createElement(l.Fragment, null, l.createElement(k.a, {
                        title: Object(d.d)("My Teams", "SettingsChannelPage"),
                        description: Object(d.d)("Manage your teams here", "SettingsChannelPage")
                    }), l.createElement(at, {
                        memberships: this.state.memberships,
                        membershipsError: this.state.membershipsError,
                        onClickRemove: this.deleteMembership,
                        onChangeStats: this.onChangeStats,
                        onChangeRevenue: this.onChangeRevenue,
                        onChangePrimary: this.onChangePrimary,
                        updatingToggles: this.state.updatingToggles,
                        managedTeams: this.state.managedTeams,
                        managedError: this.state.managedError,
                        invitations: this.state.invitations,
                        acceptInvitation: this.acceptInvitation,
                        declineInvitation: this.declineInvitation,
                        invitationsError: this.state.invitationsError
                    })) : null
                }, t.prototype.hasTeamContentToShow = function() {
                    return this.state.invitations.length > 0 || this.state.managedTeams.length > 0 || this.state.memberships.length > 0
                }, t
            }(l.Component);
        var ct = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(st),
            lt = n("ebTC"),
            ut = n("4Q9N"),
            dt = n("J4ib"),
            pt = n("OjIq"),
            ht = n("vm+z"),
            mt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        deletionError: !1,
                        working: !1
                    }, t.onClickDelete = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!(this.props.data && this.props.data.user && this.props.data.user.id)) return [2];
                                        this.setState({
                                            working: !0
                                        }), e = !1, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, O.a.putOrThrow("/kraken/users/" + this.props.data.user.id + "/default_images?client_id=" + d.a.authSettings.clientID + "&api_version=" + d.a.defaultAPIVersion, {
                                            body: {
                                                default_channel_offline_image: "empty_channel_offline_image"
                                            }
                                        })];
                                    case 2:
                                        return t.sent(), Object(pe.e)(ht, {
                                            login: this.props.user && this.props.user.login
                                        }, function(e) {
                                            return e.user && (e.user.offlineImageURL = null), e
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), e = !0, [3, 4];
                                    case 4:
                                        return this.setState({
                                            deletionError: e,
                                            working: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = l.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: 90,
                            width: 160,
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(dt.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = l.createElement(F._8, {
                            margin: {
                                x: 2
                            }
                        }, l.createElement(F.w, {
                            ariaLabel: n,
                            disabled: this.state.working,
                            icon: F._25.Trash,
                            onClick: this.onClickDelete
                        }))
                    } else e = l.createElement(F._24, {
                        asset: F._25.Camera,
                        type: F._26.Alt2,
                        height: 90,
                        width: 160
                    });
                    return l.createElement(F._8, null, l.createElement(k.a, {
                        title: Object(dt.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(dt.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), l.createElement(S.a, null, l.createElement(pt.a, null, l.createElement(F._8, {
                        display: F.R.Flex
                    }, e, l.createElement(F._8, {
                        padding: {
                            left: 2,
                            top: 1
                        }
                    }, l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F.v, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal,
                        type: F.B.Hollow
                    }, l.createElement(F._8, {
                        padding: {
                            x: 1
                        }
                    }, Object(dt.d)("Update", "UploadVideoPlayerBanner"))), t), l.createElement(K.a, {
                        text: Object(dt.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }), this.state.deletionError && l.createElement(F.Q, {
                        color: F.K.Error
                    }, Object(dt.d)("Sorry, something went wrong. Please try again later.", "UploadVideoPlayerBanner")))))))
                }, t = c.__decorate([Object(Y.a)(ht, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(l.Component);
        var gt, ft = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            }, function(e) {
                return Object(i.b)({
                    showUploaderModal: function(e) {
                        return Object(Ke.d)(lt.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: ut.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(mt),
            vt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderContentSettingsSection = function() {
                        return l.createElement(F._8, null, l.createElement(k.a, {
                            title: Object(d.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(d.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), l.createElement(S.a, null, l.createElement(Me, null)))
                    }, t.renderChatSettingsSection = function() {
                        return l.createElement(F._8, null, l.createElement(k.a, {
                            title: Object(d.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(d.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), l.createElement(S.a, null, l.createElement(ae, null), l.createElement(Se, null), l.createElement(De, null), l.createElement(Ne, null), l.createElement(Ce, null), l.createElement(ue, null)))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_channel_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return l.createElement(l.Fragment, null, l.createElement(ft, null), l.createElement(re, null), this.renderContentSettingsSection(), l.createElement(ct, null), this.renderChatSettingsSection())
                }, t
            }(l.Component),
            bt = Object(i.d)(Object(h.d)("SettingsChannelPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsChannel
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(vt);
        n("EQRc");
        ! function(e) {
            e[e.Blizzard = 0] = "Blizzard", e[e.Facebook = 1] = "Facebook", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Roku = 3] = "Roku", e[e.PSN = 4] = "PSN", e[e.Twitter = 5] = "Twitter", e[e.Steam = 6] = "Steam", e[e.Xbox = 7] = "Xbox", e[e.Youtube = 8] = "Youtube", e[e.Amazon = 9] = "Amazon"
        }(gt || (gt = {}));
        var yt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        "connection-image": !0,
                        "connection-image--blizzard": this.props.type === gt.Blizzard,
                        "connection-image--facebook": this.props.type === gt.Facebook,
                        "connection-image--league-of-legends": this.props.type === gt.LeagueOfLegends,
                        "connection-image--roku": this.props.type === gt.Roku,
                        "connection-image--psn": this.props.type === gt.PSN,
                        "connection-image--steam": this.props.type === gt.Steam,
                        "connection-image--twitter": this.props.type === gt.Twitter,
                        "connection-image--xbox": this.props.type === gt.Xbox,
                        "connection-image--youtube": this.props.type === gt.Youtube,
                        "connection-image--amazon": this.props.type === gt.Amazon
                    };
                    return l.createElement("div", {
                        className: D(e)
                    })
                }, t
            }(l.Component),
            St = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.showModal({
                            message: t.props.message,
                            confirmButton: t.props.confirmButton,
                            onConfirmClick: t.props.onConfirmClick
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F.v, c.__assign({}, this.props, {
                        onClick: this.handleClick
                    }))
                }, t
            }(l.Component);
        var kt, _t = Object(r.b)(null, function(e) {
                return {
                    showModal: function(t) {
                        return e(Object(Ke.d)($e, t))
                    }
                }
            })(St),
            Et = (n("8+dp"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.onClick()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(pt.a, null, l.createElement(F._8, {
                        className: "connection-component",
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, this.props.image && l.createElement(F._8, {
                        className: "connection-component__image",
                        "data-test-selector": "connection-image-test-selector",
                        padding: {
                            right: 1,
                            top: .5
                        },
                        flexShrink: 0
                    }, this.props.image), l.createElement(F._8, {
                        className: "connection-component__right",
                        padding: {
                            x: 1
                        },
                        display: F.R.Flex,
                        flexGrow: 1,
                        flexDirection: F.T.Column,
                        fullWidth: !0
                    }, l.createElement(F._8, {
                        className: "connection-component__header",
                        display: F.R.Flex,
                        flexDirection: F.T.Row,
                        alignItems: F.c.Center
                    }, l.createElement(F._8, {
                        className: "connection-component__header-text",
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        "data-test-selector": "connection-title-test-selector",
                        bold: !0
                    }, this.renderTitle()), this.props.subtitle && l.createElement(F._2, {
                        padding: {
                            top: 1
                        }
                    }, l.createElement(F.Q, {
                        "data-test-selector": "connection-subtitle-test-selector"
                    }, this.props.subtitle))), this.renderButton()), this.renderError(), this.props.body && l.createElement(F._8, {
                        className: "connection-component__body",
                        "data-test-selector": "connection-body-test-selector",
                        padding: {
                            top: 2
                        }
                    }, this.props.body), this.props.footer && l.createElement(F._35, {
                        className: "connection-component__footer",
                        "data-test-selector": "connection-footer-test-selector",
                        color: F.K.Alt2,
                        padding: {
                            top: 2
                        }
                    }, this.props.footer))))
                }, t.prototype.renderError = function() {
                    if (this.props.error) {
                        var e = Object(d.d)("Failed to connect. Please try again.", "ThirdPartyConnection"),
                            t = Object(d.d)("Failed to disconnect. Please try again.", "ThirdPartyConnection"),
                            n = this.props.connected ? t : e;
                        return l.createElement(F._8, {
                            padding: {
                                top: .5
                            },
                            alignSelf: F.d.End,
                            "data-test-selector": "connection-error-test-selector"
                        }, l.createElement(F.Q, {
                            color: F.K.Error
                        }, n))
                    }
                }, t.prototype.renderTitle = function() {
                    return this.props.titleLink ? l.createElement(F.O, {
                        to: this.props.titleLink
                    }, this.props.title) : this.props.title
                }, t.prototype.renderButton = function() {
                    var e = Object(d.d)("Disconnect", "ThirdPartyConnection"),
                        t = Object(d.d)("Connect", "ThirdPartyConnection"),
                        n = this.props.working ? F.A.Loading : F.A.Default,
                        r = Object(d.d)("Are you sure you want to disconnect {platform}?", {
                            platform: l.createElement(l.Fragment, null, this.props.title)
                        }, "ThirdPartyConnection"),
                        i = l.createElement(F._2, {
                            padding: {
                                x: 2
                            }
                        }, l.createElement(F.Q, {
                            fontSize: F.V.Size4
                        }, r)),
                        o = l.createElement(F.v, {
                            type: F.B.Alert
                        }, Object(d.d)("Yes, Disconnect", "ThirdPartyConnection"));
                    return this.props.connected ? l.createElement(_t, {
                        type: F.B.Hollow,
                        onConfirmClick: this.handleClick,
                        confirmButton: o,
                        message: i
                    }, e) : l.createElement(F.v, {
                        type: F.B.Hollow,
                        state: n,
                        onClick: this.handleClick
                    }, t)
                }, t
            }(l.Component)),
            Ct = n("jb/e"),
            wt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("AmazonConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected && t.disconnect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.connected) return null;
                    var e = Object(d.d)("Amazon", "AmazonConnectionComponent"),
                        t = Object(d.d)("Connect your Amazon account", "AmazonConnectionComponent"),
                        n = Object(d.d)("When you choose to connect your Amazon account, the profile information connected to your Amazon account, including your name, may be used by Twitch. Twitch will not publicly display your Amazon account information.", "AmazonConnectionComponent"),
                        r = this.props.data.loading;
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Amazon
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || r
                    })
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Amazon - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), e = Object(pe.a)({
                                        userID: this.userID
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), [4, this.props.unlinkAmazonConnection(e)];
                                case 2:
                                    return t = r.sent(), t.data.unlinkAmazonConnection && !!t.data.unlinkAmazonConnection.isSuccess ? (this.updateConnectionInCache(!1), [3, 5]) : (this.logger.warn("Failed to disconnect from Amazon"), this.setState({
                                        error: !0,
                                        working: !1
                                    }), [2]);
                                case 3:
                                    return n = r.sent(), this.logger.warn("Failed to disconnect from Amazon", {
                                        error: n
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.updateConnectionInCache = function(e) {
                    Object(pe.e)(Ct, {}, function(t) {
                        return t.currentUser && t.currentUser.accountConnections.hasConnectedAmazon && (t.currentUser.accountConnections.hasConnectedAmazon = e), t
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.hasConnectedAmazon)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            Ot = n("Xj08"),
            xt = Object(de.compose)(Object(Y.a)(Ct), Object(Y.a)(Ot, {
                name: "unlinkAmazonConnection"
            }))(wt),
            Nt = n("OAwv"),
            jt = n("jF7o");
        n("ocV2");
        ! function(e) {
            e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
        }(kt || (kt = {}));
        var Ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1,
                        region: kt.NorthAmerica
                    }, t.logger = d.j.withCategory("BlizzardConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t.handleRegionSelect = function(e) {
                        switch (e.currentTarget.value) {
                            case kt.NorthAmerica:
                                return void t.setState({
                                    region: kt.NorthAmerica
                                });
                            case kt.Europe:
                                return void t.setState({
                                    region: kt.Europe
                                });
                            case kt.Korea:
                                return void t.setState({
                                    region: kt.Korea
                                });
                            case kt.Taiwan:
                                return void t.setState({
                                    region: kt.Taiwan
                                });
                            case kt.China:
                                return void t.setState({
                                    region: kt.China
                                });
                            case kt.SouthEastAsia:
                                return void t.setState({
                                    region: kt.SouthEastAsia
                                });
                            default:
                                return
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Blizzard Battle.net", "BlizzardConnection"),
                        t = Object(d.d)("By linking your accounts, you agree that Blizzard may provide Twitch with your Battle Tag and certain other account and game information such as your Battle.net ID and skill ranking, and Twitch may provide such things as your Twitch viewing activity to Blizzard. Such information shall be transferred to the companies' locations in the U.S. If you change your mind you must de-link your accounts through both Battle.net and Twitch for both sides to stop sharing data. Once you disconnect your accounts, each party will stop using your personally identifiable information provided by the other party.", "BlizzardConnection"),
                        n = this.props.data.loading;
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Blizzard
                        }),
                        title: e,
                        subtitle: this.getSubtitle(),
                        body: this.renderBody(),
                        footer: t,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || n
                    })
                }, t.prototype.renderBody = function() {
                    if (!this.connected) return l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        className: "blizzard-connection__region-select"
                    }, l.createElement(F._30, {
                        value: this.state.region,
                        onChange: this.handleRegionSelect
                    }, l.createElement("option", {
                        value: kt.NorthAmerica
                    }, this.getRegionText(kt.NorthAmerica)), l.createElement("option", {
                        value: kt.Europe
                    }, this.getRegionText(kt.Europe)), l.createElement("option", {
                        value: kt.Korea
                    }, this.getRegionText(kt.Korea)), l.createElement("option", {
                        value: kt.Taiwan
                    }, this.getRegionText(kt.Taiwan)), l.createElement("option", {
                        value: kt.China
                    }, this.getRegionText(kt.China)), l.createElement("option", {
                        value: kt.SouthEastAsia
                    }, this.getRegionText(kt.SouthEastAsia)))))
                }, t.prototype.getSubtitle = function() {
                    if (this.connected) {
                        var e = this.getRegionText(this.props.data.currentUser.blizzardAccount.region),
                            t = this.props.data.currentUser.blizzardAccount.battleTag;
                        return t && t.length > 0 && (e = t + " - " + e), e
                    }
                    return Object(d.d)("Connect your Blizzard games and Twitch activity", "BlizzardConnection")
                }, t.prototype.getRegionText = function(e) {
                    switch (e) {
                        case kt.NorthAmerica:
                            return Object(d.d)("North America (US)", "BlizzardConnection");
                        case kt.Europe:
                            return Object(d.d)("Europe (EU)", "BlizzardConnection");
                        case kt.Korea:
                            return Object(d.d)("Korea (KR)", "BlizzardConnection");
                        case kt.Taiwan:
                            return Object(d.d)("Taiwan (TW)", "BlizzardConnection");
                        case kt.China:
                            return Object(d.d)("China (CN)", "BlizzardConnection");
                        case kt.SouthEastAsia:
                            return Object(d.d)("South East Asia (SEA)", "BlizzardConnection");
                        default:
                            return
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Blizzard - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/blizzard/" + this.userID, [4, O.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.props.data.refetch(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Blizzard", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.connect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r = this;
                        return c.__generator(this, function(i) {
                            return this.userID ? (this.setState({
                                working: !0
                            }), e = Nt.stringify({
                                region: this.state.region
                            }), t = d.a.apiBaseURL + "/v5/blizzard/" + this.userID + "/auth?" + e, this.logger.info(t), (n = window.open(t, "blizzardPopout", "width=480,height=640")) ? (Object(jt.a)(n, function(e) {
                                r.logger.debug("Blizzard connection window closed", {
                                    success: e
                                }), r.setState({
                                    error: !e,
                                    working: !1
                                }), r.props.data.refetch()
                            }), [2]) : (this.setState({
                                working: !1,
                                error: !0
                            }), [2])) : (this.logger.debug("Unable to start Blizzard connection - current user's ID is unknown."), [2])
                        })
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.accountConnections.blizzard && this.props.data.currentUser.blizzardAccount)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            Tt = n("pkUp"),
            Dt = Object(Y.a)(Tt)(Ut),
            Pt = (n("XCQF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickDisconnect = function() {
                        t.props.onClickDisconnect(t.props.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(Et, {
                        image: l.createElement(h.b, {
                            className: "extension-connection__icon",
                            src: this.iconOrFallback
                        }),
                        title: this.getTitle(),
                        titleLink: this.getLink(),
                        subtitle: this.props.author.length > 0 ? Object(d.d)("by {author}", {
                            author: this.props.author
                        }, "ExtensionConnection") : void 0,
                        footer: this.summaryOrFallbackMessage,
                        onClick: this.onClickDisconnect,
                        connected: !0,
                        error: this.props.disconnectError,
                        working: this.props.working
                    })
                }, t.prototype.getTitle = function() {
                    return 0 === this.props.name.length ? this.props.id : this.props.name
                }, t.prototype.getLink = function() {
                    if (0 !== this.props.name.length) return "/ext/" + this.props.id
                }, Object.defineProperty(t.prototype, "iconOrFallback", {
                    get: function() {
                        return this.props.iconURL.length > 0 ? this.props.iconURL : "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "summaryOrFallbackMessage", {
                    get: function() {
                        return this.props.summary.length > 0 ? this.props.summary : Object(d.d)("This extension no longer exists", "ExtensionConnection")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component)),
            It = Object(h.d)("ExtensionConnection", {
                autoReportInteractive: !0
            })(Pt),
            Ft = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        fetchError: !1,
                        linkedExtensionsByID: {}
                    }, t.logger = d.j.withCategory("extension-connection-list"), t.onClickDisconnect = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.logger.debug("Disconnecting", {
                                            id: e
                                        }), this.setExtensionState(e, {
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, O.a.putOrThrow("/v5/extensions/" + e + "/auth/link_user", {
                                            body: {
                                                show_user: !1
                                            }
                                        })];
                                    case 2:
                                        return t.sent(), this.setState(function(t) {
                                            var n = c.__assign({}, t.linkedExtensionsByID);
                                            return delete n[e], {
                                                linkedExtensionsByID: n
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.logger.warn("Failed to disconnect extension due to error", {
                                            sessionUser: this.props.sessionUser,
                                            extensionID: e
                                        }), this.setExtensionState(e, {
                                            disconnectError: !0,
                                            working: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchExtensionConnections()
                }, t.prototype.render = function() {
                    if (this.state.fetchError) return this.renderEmptyState(!0);
                    for (var e = [], t = 0, n = Object.keys(this.state.linkedExtensionsByID); t < n.length; t++) {
                        var r = n[t],
                            i = this.state.linkedExtensionsByID[r];
                        e.push(l.createElement(It, c.__assign({
                            key: i.id,
                            onClickDisconnect: this.onClickDisconnect
                        }, i)))
                    }
                    return 0 === e.length ? this.renderEmptyState(!1) : l.createElement(l.Fragment, null, e)
                }, t.prototype.renderEmptyState = function(e) {
                    var t = e ? Object(d.d)("Sorry, something went wrong fetching your extension connections. Please try again later.", "ExtensionConnectionList") : Object(d.d)("You have not shared your Twitch username with any extensions.", "ExtensionConnectionList");
                    return l.createElement(pt.a, null, l.createElement(F.Q, {
                        color: e ? F.K.Error : void 0
                    }, t))
                }, t.prototype.fetchExtensionConnections = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, i, o, a = this;
                        return c.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = {}, t = !1, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, O.a.get("/v5/extensions/linked")];
                                case 2:
                                    if ((n = s.sent()) && n.body && n.body.extensions.length > 0)
                                        for (r = 0, i = n.body.extensions; r < i.length; r++) o = i[r], e[o.id] = {
                                            author: o.author_name,
                                            disconnectError: !1,
                                            iconURL: o.icon_url,
                                            id: o.id,
                                            name: o.name,
                                            summary: o.summary,
                                            working: !1
                                        };
                                    else {
                                        if (n && n.body && 0 === n.body.extensions.length) return this.props.latencyTracking.reportInteractive(), [2];
                                        this.logger.warn("Failed to fetch extension connections for user due to unexpected response", {
                                            sessionUser: this.props.sessionUser,
                                            response: n
                                        }), t = !0
                                    }
                                    return [3, 4];
                                case 3:
                                    return s.sent(), this.logger.warn("Failed to fetch extension connections for user due to network error", {
                                        sessionUser: this.props.sessionUser
                                    }), t = !0, [3, 4];
                                case 4:
                                    return this.setState({
                                        fetchError: t,
                                        linkedExtensionsByID: e
                                    }, function() {
                                        return a.props.latencyTracking.reportInteractive()
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.setExtensionState = function(e, t) {
                    this.setState(function(n) {
                        return {
                            linkedExtensionsByID: c.__assign({}, n.linkedExtensionsByID, (r = {}, r[e] = c.__assign({}, n.linkedExtensionsByID[e], t), r))
                        };
                        var r
                    })
                }, t
            }(l.Component),
            At = Object(h.d)("ExtensionsConnectionList")(Ft);
        var Mt, Rt = Object(r.b)(function(e) {
                return {
                    sessionUser: Object(s.c)(e)
                }
            })(At),
            Lt = n("h08i"),
            Bt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !t.facebookConnection
                    }, t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.facebookConnection && e.data.currentUser && this.setState({
                        working: !1
                    })
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Facebook", "FacebookConnection"),
                        t = Object(d.d)("One-click log in to Twitch with your Facebook account", "FacebookConnection"),
                        n = Object(d.d)("By connecting your account with Facebook, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "FacebookConnection");
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Facebook
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        connected: this.connected,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!this.facebookConnection
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "facebookConnection", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.accountConnections && this.props.data.currentUser.accountConnections.facebook
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.connect = function() {
                    var e = this;
                    if (!this.connected) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/facebook/" + this.props.data.currentUser.id + "/auth",
                            n = window.open(t, "Twitch", "width=1024,height=637");
                        n ? Object(jt.a)(n, function(t) {
                            t && e.props.data.refetch(), e.setState({
                                error: !t,
                                working: !1
                            })
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (!this.connected) return [2];
                                    this.setState({
                                        working: !0
                                    }), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, 4, 5]), [4, O.a.deleteOrThrow("/v5/facebook/" + this.props.data.currentUser.id)];
                                case 2:
                                    return e.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return e.sent(), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(Lt, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.facebook = null), e
                    })
                }, t
            }(l.Component),
            zt = Object(Y.a)(Lt)(Bt);
        n("WKFf");
        ! function(e) {
            e.NorthAmerica = "na", e.Brazil = "br", e.EuropeWest = "euw", e.EuropeNordicAndEast = "eune", e.Japan = "jp", e.Korea = "kr", e.LatinAmericaNorth = "lan", e.LatinAmericaSouth = "las", e.Oceanic = "oce", e.Turkey = "tr", e.Russia = "ru", e.PublicBetaEnvironment = "pbe"
        }(Mt || (Mt = {}));
        var Vt = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    connected: !1,
                    region: Mt.NorthAmerica,
                    summonerName: "",
                    error: !1,
                    working: !0
                }, t.logger = d.j.withCategory("LeagueOfLegendsConnection"), t.getData = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to get League of Legends connection info, but the user is not logged in."), [2];
                                    e = Nt.stringify({
                                        user_id: this.props.userID
                                    }), t = "/api/lol/summonername?" + e, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), [4, O.a.get(t)];
                                case 2:
                                    return (n = r.sent()).error || n.requestError ? this.setState({
                                        connected: !1
                                    }) : n.body && this.setState({
                                        connected: !0
                                    }), [3, 5];
                                case 3:
                                    return r.sent(), this.setState({
                                        connected: !1
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.disconnect = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to disconnect from League of Legends but user is not logged in."), [2];
                                    this.setState({
                                        error: !1,
                                        working: !0
                                    }), e = Nt.stringify({
                                        user_id: this.props.userID,
                                        client_id: d.a.authSettings.clientID
                                    }), t = "/api/lol/delete?" + e, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), [4, O.a.get(t)];
                                case 2:
                                    return (n = i.sent()).error || n.requestError ? (this.logger.warn("Failed to disconnect League of Legends account", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !1
                                    }), [3, 5];
                                case 3:
                                    return r = i.sent(), this.logger.warn("Failed to disconnect League of Legends account", r), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.connect = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to connect to League of Legends but user is not logged in."), [2];
                                    this.setState({
                                        error: !1,
                                        working: !0
                                    }), e = Nt.stringify({
                                        user_id: this.props.userID,
                                        client_id: d.a.authSettings.clientID,
                                        summoner: this.state.summonerName,
                                        region: this.state.region
                                    }), t = "/api/lol/verify?" + e, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), [4, O.a.get(t)];
                                case 2:
                                    return n = i.sent(), n.error || n.requestError || !n.body || 0 === n.body.summoner_id || "" === n.body.summoner_name || "" === n.body.twitch_id ? (this.logger.warn("Failed to connect League of Legends account.", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !0
                                    }), [3, 5];
                                case 3:
                                    return r = i.sent(), this.logger.warn("Failed to connect League of Legends account.", r), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.handleRegionSelect = function(e) {
                    t.setState({
                        region: e.currentTarget.value
                    })
                }, t.handleSummonerNameChange = function(e) {
                    t.setState({
                        summonerName: e.currentTarget.value
                    })
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                this.getData()
            }, t.prototype.render = function() {
                var e = Object(d.d)("League of Legends", "LeagueOfLegendsConnection"),
                    t = Object(d.d)("Show rank and live in-game information.", "LeagueOfLegendsConnection"),
                    n = Object(d.d)("By connecting your Riot [or, League of Legends] account, you agree to share with Twitch, and allow Twitch to make public, metadata regarding your user profile, gameplay history, and statistics associated with League of Legends. If you no longer want to share this information, please disconnect your accounts.", "LeagueOfLegendsConnection");
                return l.createElement(Et, {
                    image: l.createElement(yt, {
                        type: gt.LeagueOfLegends
                    }),
                    title: e,
                    subtitle: t,
                    body: this.renderBody(),
                    connected: this.state.connected,
                    onClick: this.state.connected ? this.disconnect : this.connect,
                    footer: n,
                    error: this.state.error,
                    working: this.state.working
                })
            }, t.prototype.renderBody = function() {
                var e = [{
                    label: Object(d.d)("North America", "LeagueOfLegendsConnection"),
                    value: Mt.NorthAmerica
                }, {
                    label: Object(d.d)("Brazil", "LeagueOfLegendsConnection"),
                    value: Mt.Brazil
                }, {
                    label: Object(d.d)("Europe West", "LeagueOfLegendsConnection"),
                    value: Mt.EuropeWest
                }, {
                    label: Object(d.d)("Europe Nordic & East", "LeagueOfLegendsConnection"),
                    value: Mt.EuropeNordicAndEast
                }, {
                    label: Object(d.d)("Japan", "LeagueOfLegendsConnection"),
                    value: Mt.Japan
                }, {
                    label: Object(d.d)("Korea", "LeagueOfLegendsConnection"),
                    value: Mt.Korea
                }, {
                    label: Object(d.d)("Latin America North", "LeagueOfLegendsConnection"),
                    value: Mt.LatinAmericaNorth
                }, {
                    label: Object(d.d)("Latin America South", "LeagueOfLegendsConnection"),
                    value: Mt.LatinAmericaSouth
                }, {
                    label: Object(d.d)("Oceanic", "LeagueOfLegendsConnection"),
                    value: Mt.Oceanic
                }, {
                    label: Object(d.d)("Turkey", "LeagueOfLegendsConnection"),
                    value: Mt.Turkey
                }, {
                    label: Object(d.d)("Russia", "LeagueOfLegendsConnection"),
                    value: Mt.Russia
                }, {
                    label: Object(d.d)("Public Beta Environment", "LeagueOfLegendsConnection"),
                    value: Mt.PublicBetaEnvironment
                }];
                return l.createElement(F._8, {
                    className: "league-of-legends-connection__body",
                    "data-test-selector": "league-connection-body"
                }, l.createElement(F._8, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement(F._8, null, Object(d.d)("1. Log into your League of Legends account. Go to the verification section of your settings, and copy the following into the field: {code}", {
                    code: l.createElement(F.Q, {
                        type: F._49.Span,
                        bold: !0
                    }, "ttv-" + this.props.userID)
                }, "LeagueOfLegendsConnection")), l.createElement(F._8, null, Object(d.d)("2. Enter your summoner name below, select your region, and press the connect button to link your accounts! Note, you may need to wait up to 30 seconds for your changes to take effect.", "LeagueOfLegendsConnection"))), l.createElement(F._8, {
                    display: F.R.Flex
                }, l.createElement(F._8, {
                    padding: {
                        right: 1
                    },
                    flexGrow: 1
                }, l.createElement(F._4, {
                    type: F._5.Text,
                    placeholder: Object(d.d)("Enter Summoner Name", "LeagueOfLegendsConnection"),
                    value: this.state.summonerName,
                    onChange: this.handleSummonerNameChange
                })), l.createElement(F._8, {
                    flexGrow: 1
                }, l.createElement(F._30, {
                    value: this.state.region,
                    onChange: this.handleRegionSelect
                }, e.map(function(e) {
                    return l.createElement("option", {
                        key: e.value,
                        value: e.value
                    }, e.label)
                })))))
            }, t
        }(l.Component);
        var qt, Ht = Object(r.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    userID: t && t.id
                }
            })(Vt),
            Gt = n("rYDZ"),
            Wt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.onClickDisconnect = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, Object(Gt.a)("https://id.twitch.tv/oauth2/authorization/" + this.props.clientID, {
                                            method: "DELETE"
                                        })];
                                    case 2:
                                        if (!t.sent().ok) throw new Error("Non-OK response from id.twitch.tv");
                                        return this.props.onDisconnectSuccess(this.props.clientID), [3, 4];
                                    case 3:
                                        return e = t.sent(), d.j.withCategory("other-connection").warn("OWL client auth disconnect failed.", {
                                            error: e
                                        }), this.setState({
                                            error: !0,
                                            working: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(Et, {
                        connected: !0,
                        error: this.state.error,
                        onClick: this.onClickDisconnect,
                        title: this.props.name,
                        subtitle: this.renderSubtitle(),
                        working: this.state.working
                    })
                }, t.prototype.renderSubtitle = function() {
                    if (this.props.createdAt) return Object(d.d)("Connected {duration}", {
                        duration: Object(d.g)(new Date(this.props.createdAt))
                    }, "OtherConnection")
                }, t
            }(l.Component),
            Qt = n("WYac"),
            Yt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.data.currentUser && this.props.data.currentUser.clientAuthorizations ? 0 === this.props.data.currentUser.clientAuthorizations.length ? this.renderEmptyState(!1) : l.createElement(l.Fragment, null, this.props.data.currentUser.clientAuthorizations.map(function(t) {
                        return l.createElement(Wt, {
                            key: t.clientID,
                            clientID: t.clientID,
                            createdAt: t.createdAt,
                            name: t.clientName,
                            onDisconnectSuccess: e.onDisconnectSuccess
                        })
                    })) : this.props.data.loading ? l.createElement(F._14, null) : this.renderEmptyState(!0)
                }, t.prototype.renderEmptyState = function(e) {
                    var t = e ? Object(d.d)("Sorry, we couldn't fetch your authorized apps right now. Try again later.", "OtherConnectionsList") : Object(d.d)("You have not authorized any apps.", "OtherConnectionsList");
                    return l.createElement(pt.a, null, l.createElement(F.Q, {
                        color: e ? F.K.Error : void 0
                    }, t))
                }, t.prototype.onDisconnectSuccess = function(e) {
                    Object(pe.e)(Qt, {}, function(t) {
                        if (!t.currentUser || !t.currentUser.clientAuthorizations) return t;
                        var n = t.currentUser.clientAuthorizations.slice();
                        return n.splice(n.findIndex(function(t) {
                            return t.clientID === e
                        }), 1), {
                            currentUser: c.__assign({}, t.currentUser, {
                                clientAuthorizations: n
                            })
                        }
                    })
                }, t
            }(l.Component),
            Kt = Object(i.d)(Object(h.d)("OtherConnectionsList"), Object(Y.a)(Qt))(Yt),
            Xt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("PSNConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, 4, 5]), [4, Promise.all([O.a.post("/api/platform/psn/disconnect"), O.a.post("/api/platform/psn_dev/disconnect"), O.a.post("/api/platform/psn_cert/disconnect")])];
                                    case 2:
                                        return e = n.sent(), e.every(function(e) {
                                            return !(!e.error && !e.requestError)
                                        }) ? (this.logger.warn("Failed to disconnect from PSN"), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to disconnect from PSN", t), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("PlayStation", "PSNConnectionPresentation"),
                        t = Object(d.d)("Log in on your PlayStation", "PSNConnectionPresentation");
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.PSN
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            Jt = n("Op8X"),
            $t = Object(Y.a)(Jt)(Xt),
            Zt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("RokuConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, 4, 5]), e = "/api/roku/disconnect", [4, O.a.post(e)];
                                    case 2:
                                        return t = o.sent(), n = t.error, r = t.requestError, n || r ? (this.logger.warn("Failed to disconnect from Roku", {
                                            error: n,
                                            requestError: r
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return i = o.sent(), this.logger.warn("Failed to disconnect from Roku", i), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Roku", "RokuConnectionPresentation"),
                        t = Object(d.d)("Log in on your Roku", "RokuConnectionPresentation");
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Roku
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            en = n("iLlo"),
            tn = Object(Y.a)(en)(Zt),
            nn = n("jZb3"),
            rn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("SteamConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Steam", "SteamConnectionComponent"),
                        t = Object(d.d)("Share your game meta data when you go live", "SteamConnectionComponent"),
                        n = Object(d.d)("By connecting your Steam account, you acknowledge and agree that your Steam ID will be publicly visible in the Twitch API and that Steam will automatically receive information about the Steam content you view while your accounts are connected. If you do not want this information shared, please disconnect your accounts.", "SteamConnectionComponent"),
                        r = this.props.data.loading;
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Steam
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || r
                    })
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from steam - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/steam/" + this.userID, [4, O.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Steam", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.connect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r = this;
                        return c.__generator(this, function(i) {
                            return this.userID ? (this.setState({
                                working: !0
                            }), e = Nt.stringify({
                                client_id: d.a.legacyClientID
                            }), t = d.a.apiBaseURL + "/v5/steam/" + this.userID + "/auth?" + e, (n = window.open(t, "steamPopout", "width=1024,height=780")) ? (Object(jt.a)(n, function(e) {
                                r.logger.debug("Steam connection window closed", {
                                    success: e
                                }), r.setState({
                                    error: !e,
                                    working: !1
                                }), e && r.props.data.refetch()
                            }), [2]) : (this.setState({
                                working: !1,
                                error: !0
                            }), [2])) : (this.logger.debug("Unable to start Steam connection - current user's ID is unknown."), [2])
                        })
                    })
                }, t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(nn, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.steam = null), e
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.steam)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            on = Object(Y.a)(nn)(rn),
            an = n("st1H"),
            sn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("TwitterConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Twitter", "TwitterConnection"),
                        t = Object(d.d)("Tweet your Channel Feed posts to your followers.", "TwitterConnection"),
                        n = Object(d.d)("By connecting your account with Twitter, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "TwitterConnection"),
                        r = this.props.data.loading;
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Twitter
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        working: this.state.working || r,
                        onClick: this.handleClick
                    })
                }, t.prototype.connect = function() {
                    var e = this;
                    if (this.userID) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/twitter/" + this.userID + "/auth",
                            n = window.open(t, "twitterPopout", "width=760,height=760");
                        n ? Object(jt.a)(n, function(t) {
                            e.logger.debug("Twitter connection window closed", {
                                success: t
                            }), e.setState({
                                error: !t,
                                working: !1
                            }), t && e.props.data.refetch()
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    } else this.logger.debug("Unable to start Twitter connection - current user's ID is unknown.")
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Twitter - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/twitter/" + this.userID, [4, O.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Twitter", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(an, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.twitter = null), e
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.twitter)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            cn = Object(Y.a)(an)(sn),
            ln = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1
                    }, t.logger = d.j.withCategory("Xbox360Connection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            error: !1
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), e = Nt.stringify({
                                            app: "xb360"
                                        }), t = "/api/xbox/disconnect?" + e, [4, O.a.post(t)];
                                    case 2:
                                        return n = a.sent(), r = n.error, i = n.requestError, r || i ? (this.logger.warn("Failed to disconnect from Xbox 360", {
                                            error: r,
                                            requestError: i
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 4];
                                    case 3:
                                        return o = a.sent(), this.logger.warn("Failed to disconnect from Xbox 360", o), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Xbox 360", "Xbox360ConnectionPresentation"),
                        t = Object(d.d)("Log in on your Xbox 360", "Xbox360ConnectionPresentation");
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Xbox
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            un = n("upQt"),
            dn = Object(Y.a)(un)(ln),
            pn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("XboxOneConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, 4, 5]), e = Nt.stringify({
                                            app: "xb1"
                                        }), t = "/api/xbox/disconnect?" + e, [4, O.a.post(t)];
                                    case 2:
                                        return n = a.sent(), r = n.error, i = n.requestError, r || i ? (this.logger.warn("Failed to disconnect from Xbox One", {
                                            error: r,
                                            requestError: i
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return o = a.sent(), this.logger.warn("Failed to disconnect from Xbox One", o), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Xbox One", "XboxOneConnectionPresentation"),
                        t = Object(d.d)("Log in and Broadcast directly from your console", "XboxOneConnectionPresentation");
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Xbox
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            hn = n("UAbV"),
            mn = Object(Y.a)(hn)(pn),
            gn = n("bHrU"),
            fn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("YoutubeConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Youtube", "YoutubeConnectionComponent"),
                        t = Object(d.d)("Export archives", "YoutubeConnectionComponent");
                    return l.createElement(Et, {
                        image: l.createElement(yt, {
                            type: gt.Youtube
                        }),
                        title: e,
                        subtitle: t,
                        connected: this.connected,
                        error: this.state.error,
                        working: this.state.working || this.props.data.loading,
                        onClick: this.handleClick
                    })
                }, Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.youtube)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.connect = function() {
                    var e = this;
                    if (this.userID) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/youtube/" + this.userID + "/auth",
                            n = window.open(t, "YoutubePopout", "width=768,height=640");
                        n ? Object(jt.a)(n, function(t) {
                            e.logger.debug("Youtube connection window closed", {
                                success: t
                            }), e.setState({
                                error: !t,
                                working: !1
                            }), t && e.props.data.refetch()
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.userID) return [2];
                                    this.setState({
                                        working: !0
                                    }), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, 4, 5]), [4, O.a.deleteOrThrow("/v5/youtube/" + this.userID)];
                                case 2:
                                    return t.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return e = t.sent(), this.logger.warn("Failed to disconnect from youtube", {
                                        error: e
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(gn, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.youtube = null), e
                    })
                }, t
            }(l.Component),
            vn = Object(Y.a)(gn)(fn),
            bn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_connections_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Recommended Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("Manage your connected accounts and services", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(xt, null), l.createElement(Dt, null), l.createElement(on, null), l.createElement(vn, null), l.createElement(zt, null), l.createElement(cn, null), l.createElement(Ht, null), l.createElement(mn, null), l.createElement(dn, null), l.createElement($t, null), l.createElement(tn, null)), l.createElement(k.a, {
                        title: Object(d.d)("Extensions Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("You have shared your Twitch username with these extensions", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Rt, null)), l.createElement(k.a, {
                        title: Object(d.d)("Other Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("You have authorized these apps to use your Twitch account", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Kt, null)), l.createElement(k.a, {
                        title: Object(d.d)("Developer Applications", "SettingsConnectionsPage"),
                        description: Object(d.d)("Developer Application management has moved to {devPortalURL}", {
                            devPortalURL: l.createElement(F.O, {
                                to: "https://dev.twitch.tv"
                            }, "https://dev.twitch.tv")
                        }, "SettingsConnectionsPage")
                    }))
                }, t
            }(l.Component),
            yn = Object(i.d)(Object(h.d)("SettingsConnectionsPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsConnections
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(bn),
            Sn = n("LBNC"),
            kn = n("UbVv"),
            _n = n("F8kA"),
            En = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F._35, {
                        className: "advanced-notification-settings-toggle",
                        display: F.R.Flex,
                        justifyContent: F._7.Between,
                        background: F.n.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        margin: {
                            left: 5
                        },
                        display: F.R.Flex,
                        flexGrow: 1,
                        alignItems: F.c.Center,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexGrow: 1,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(F._8, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._6, {
                        linkTo: "/" + this.props.login
                    }, l.createElement(F.m, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        flexDirection: F.T.Column
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5
                    }, l.createElement(_n.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), l.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Alt2
                    }, this.props.description))), l.createElement(F._8, {
                        display: F.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._51, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), l.createElement(F._8, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Link
                    }, Object(d.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(l.Component)),
            Cn = n("AQCV"),
            wn = (n("t4xU"), n("EaRL")),
            On = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleChannelNotification = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r, i;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = c.__assign({}, Object(pe.a)({
                                            disableNotifications: n,
                                            targetID: e
                                        }), {
                                            optimisticResponse: {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: n,
                                                        __typename: "Follow"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.setAdvancedNotificationSetting(t)]) : [2];
                                    case 1:
                                        return r = o.sent(), i = function(t) {
                                            if (!t.currentUser) return t;
                                            for (var n = 0, i = t.currentUser.follows.edges; n < i.length; n++) {
                                                var o = i[n];
                                                o.node.id === e && (o.notificationSettings.isEnabled = !r.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(pe.e)(wn, {
                                            limit: 50
                                        }, i), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return l.createElement(F._35, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(F._10, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return l.createElement(p.a, {
                        message: Object(d.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return l.createElement(F._35, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(d.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = l.createElement(F._35, {
                            background: F.n.Alt2,
                            borderBottom: !0
                        }, l.createElement(F._6, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, l.createElement(F._8, {
                            display: F.R.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, l.createElement(F._8, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, l.createElement(F.Q, {
                            fontSize: F.V.Size5,
                            color: F.K.Alt2,
                            bold: !0
                        }, Object(d.d)("Advanced", "AdvancedNotificationSettings"))), l.createElement(F._8, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, l.createElement(F.Q, {
                            "data-test-selector": "description-selector",
                            fontSize: F.V.Size5,
                            color: F.K.Alt2
                        }, e)), l.createElement(F._8, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: F.R.Flex,
                            justifyContent: F._7.Center
                        }, l.createElement(F._24, {
                            asset: F._25.AngleRight,
                            type: F._26.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? l.createElement(F._35, null, t) : l.createElement(F._35, null, t, l.createElement(F._35, {
                        borderBottom: !0,
                        padding: 2
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, Object(d.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4,
                        color: F.K.Alt
                    }, e)), l.createElement(F._35, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), l.createElement(T.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var r = n[t];
                            r.node && r.node.id && r.node.followers && e.push(l.createElement(En, {
                                userId: r.node.id,
                                text: r.node.displayName,
                                login: r.node.login,
                                description: Object(d.d)("{followerCount,number} followers", {
                                    followerCount: r.node.followers.totalCount
                                }, "AdvancedNotificationSettings"),
                                thumbnail: r.node.profileImageURL,
                                isEnabled: r.notificationSettings.isEnabled,
                                onChange: this.toggleChannelNotification,
                                saved: this.getDisplaySaved(r.node.id),
                                key: r.node.id
                            }))
                        }
                        return e
                    }
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(l.Component),
            xn = Object(i.d)(Object(Y.a)(wn, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return c.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: wn,
                                variables: c.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: c.__assign({}, n.currentUser, {
                                            follows: c.__assign({}, n.currentUser.follows, {
                                                edges: Object(pe.c)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(Y.a)(Cn, {
                name: "setAdvancedNotificationSetting"
            }), Object(h.d)("AdvancedNotificationSettings"))(On),
            Nn = n("OOv5"),
            jn = n("JBcW"),
            Un = (n("mVHD"), d.o.logger.withCategory("browser-push-notifications-settings")),
            Tn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, Nn.a.hasPushSubscription()];
                                    case 1:
                                        if (!t.sent()) return [3, 6];
                                        t.label = 2;
                                    case 2:
                                        return t.trys.push([2, 4, , 5]), [4, Nn.a.userUnsubscribe(jn.a.Settings)];
                                    case 3:
                                        return t.sent(), [3, 5];
                                    case 4:
                                        return e = t.sent(), Un.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return [4, Nn.a.userSubscribe(jn.a.Settings)];
                                    case 7:
                                        if (t.sent(), Object(kn.a)()) return this.setState({
                                            hide: !0
                                        }), [2];
                                        t.label = 8;
                                    case 8:
                                        return [4, this.updateSubscriptionState()];
                                    case 9:
                                        return t.sent(), this.setState({
                                            deciding: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, Nn.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), Un.error(e, "unexpected error initializing push manager"), this.setState({
                                        hide: !0
                                    }), [2];
                                case 4:
                                    return this.setState({
                                        loading: !1,
                                        deciding: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.loading && !this.state.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.state.hide || this.state.loading) return null;
                    var e = this.state.hasSubscription ? Object(d.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(d.d)("Turn On", "BrowserPushNotificationsSettings");
                    return l.createElement(F._35, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings",
                        "data-a-target": "browser-push-notifications-settings"
                    }, l.createElement(F._35, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: F.R.Flex,
                        margin: {
                            x: 5
                        }
                    }, l.createElement(F._8, {
                        className: "browser-push-notification-settings__body",
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap,
                        flexGrow: 1
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4,
                        color: F.K.Alt
                    }, Object(d.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), l.createElement(F._8, {
                        padding: {
                            top: .5
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, Object(d.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), l.createElement(F._8, {
                        flexShrink: 0
                    }, l.createElement(F.v, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Nn.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            Dn = Object(de.compose)(Object(h.d)("BrowserPushNotificationsSettings"))(Tn);
        n("iOZM");
        (qt || (qt = {})).Toggle = "platform-notification-settings-toggle__toggle";
        var Pn, In = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F._35, {
                        className: "platform-notification-settings-toggle",
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap,
                        alignItems: F.c.Start,
                        background: F.n.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings-toggle__body",
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(F._8, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4
                    }, this.props.text)), l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, this.props.description)), l.createElement(F._8, {
                        display: F.R.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._51, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": qt.Toggle
                    })), l.createElement(F._8, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Link
                    }, Object(d.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(l.Component),
            Fn = n("g+dK"),
            An = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(Pn || (Pn = {}));
        var Mn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(d.d)("Live", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(d.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(d.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(d.d)("Events", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(d.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(d.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(d.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(d.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(d.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, o, a = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", r = c.__assign({}, Object(pe.a)({
                                            category: e,
                                            platform: this.props.platformName,
                                            settingState: t
                                        }), {
                                            optimisticResponse: {
                                                setNotificationSetting: {
                                                    settingState: t,
                                                    __typename: "SetNotificationSettingPayload"
                                                }
                                            }
                                        }), [4, this.props.setNotificationSetting(r)]) : [2];
                                    case 1:
                                        return i = s.sent(), o = function(t) {
                                            return t.currentUser ? (t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === a.props.platformName && (e.isEnabled = "on" === i.data.setNotificationSetting.settingState, e.settingState = i.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t) : t
                                        }, Object(pe.e)(An, {}, o), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return l.createElement(F._8, {
                        padding: 1
                    }, l.createElement(F._10, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return l.createElement(p.a, {
                        message: Object(d.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return l.createElement(F._35, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = l.createElement(F._35, {
                        background: F.n.Alt2,
                        borderBottom: !0
                    }, l.createElement(F._6, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, l.createElement(F.Q, {
                        "data-test-selector": "display-name",
                        fontSize: F.V.Size5,
                        color: F.K.Alt2,
                        bold: !0
                    }, this.props.displayName)), l.createElement(F._8, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, this.getSettingTurnedOnMessage())), l.createElement(F._8, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: F.R.Flex,
                        justifyContent: F._7.Center
                    }, l.createElement(F._24, {
                        asset: F._25.AngleRight,
                        type: F._26.Alt2
                    })))));
                    return this.state.collapsed ? l.createElement(F._35, null, e) : l.createElement(F._35, null, e, l.createElement(F._35, {
                        padding: 2,
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        "data-test-selector": "description",
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, this.props.description)), l.createElement(F._35, {
                        display: F.R.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings__all",
                        display: F.R.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: F._7.Center,
                        flexGrow: 1,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4,
                        color: F.K.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), l.createElement(F._8, {
                        display: F.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._51, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), l.createElement(F._8, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Link
                    }, Object(d.d)("Saved", "PlatformNotificationSettings")))))), l.createElement(F._8, {
                        className: "platform-notification-settings__toggle-container",
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        margin: {
                            left: 5
                        },
                        padding: {
                            left: 5
                        }
                    }, this.renderToggles()), this.props.extraSettings))
                }, t.prototype.getSettingByCategory = function(e) {
                    var t = null;
                    if (!this.props.data || !this.props.data.currentUser) return null;
                    for (var n = 0, r = this.props.data.currentUser.notificationSettings; n < r.length; n++) {
                        var i = r[n];
                        i.category === e && (t = i.platforms)
                    }
                    if (!t) return null;
                    for (var o = 0, a = t; o < a.length; o++) {
                        var s = a[o];
                        if (s.platformName === this.props.platformName) return s
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, r = this.VisibleSettings; n < r.length; n++) {
                        var i = r[n],
                            o = this.getSettingByCategory(i.category);
                        o && (e++, o.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(d.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(d.d)("All notifications turned on", "PlatformNotificationSettings") : Object(d.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var r = n[t],
                            i = this.getSettingByCategory(r.category);
                        i && e.push(l.createElement(In, {
                            category: r.category,
                            text: r.name,
                            description: r.description,
                            isEnabled: i.isEnabled,
                            onChange: this.toggleSettingCategory,
                            disabled: !this.getGlobalStateForPlatform(),
                            key: r.category,
                            saved: this.getDisplaySaved(r.category)
                        }))
                    }
                    return e
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(l.Component),
            Rn = Object(i.d)(Object(h.d)("PlatformNotificationSettings"), Object(Y.a)(An, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(Y.a)(Fn, {
                name: "setNotificationSetting"
            }))(Mn),
            Ln = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? Nt.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return l.createElement(F._35, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, l.createElement(F._35, {
                        background: F.n.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size3,
                        color: F.K.Alt
                    }, Object(d.d)("Notifications", "SettingsNotificationsPage"))), l.createElement(F._8, null, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, Object(d.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), l.createElement(Rn, {
                        startCollapsed: t,
                        platformName: Pn.onsite,
                        displayName: Object(d.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(d.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), l.createElement(Rn, {
                        startCollapsed: !0,
                        platformName: Pn.email,
                        displayName: Object(d.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(d.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), l.createElement(Rn, {
                        platformName: Pn.push,
                        startCollapsed: !0,
                        displayName: Object(d.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(d.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), l.createElement(xn, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(Sn.a)() && !Object(kn.a)() ? l.createElement(Dn, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t
            }(l.Component)),
            Bn = Object(i.d)(Object(h.d)("SettingsNotificationsPage", {
                destination: b.a.NotificationSettingsPage
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Ln),
            zn = n("S1vB"),
            Vn = n("o6O8"),
            qn = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-prime-page-post-subscriptions",
                    label: Object(d.d)("Post Subscriptions", "PostSubscriptionsToggle"),
                    description: Object(d.d)("Share in chat when you use your free subscription benefit", "PostSubscriptionsToggle"),
                    extraDescription: Object(d.d)("Let your favorite streamer know your free subscription supports them. Turning this off will hide your subscription announcement in chat.", "PostSubscriptionsToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Hn = n("jfv9"),
            Gn = n("TubT"),
            Wn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("post-subscriptions-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating prime settings", {
                                                shouldEnableSubCreditChatNotification: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update prime settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updatePostSubscriptions(Object(pe.a)({
                                            shouldEnableSubCreditChatNotification: e,
                                            userID: t
                                        }))];
                                    case 2:
                                        return i.sent(), n = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.primeSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    primeSettings: c.__assign({}, r, {
                                                        isSubCreditChatNotificationEnabled: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Gn, {}, n), this.logger.debug("Updated prime settings", {
                                            shouldEnableSubCreditChatNotification: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return r = i.sent(), this.logger.warn("Failed to update prime settings", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.primeSettings && n.primeSettings.isSubCreditChatNotificationEnabled || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.primeSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(qn, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            Qn = Object(i.d)(Object(h.d)("PostSubscriptionsToggle"), Object(Y.a)(Gn, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(Y.a)(Hn, {
                name: "updatePostSubscriptions"
            }))(Wn),
            Yn = n("UILf"),
            Kn = n("NXs7"),
            Xn = n("XdSf"),
            Jn = n("SZoP"),
            $n = n("VAT8"),
            Zn = n("cAbv"),
            er = (n("OB6b"), n("vgA0")),
            tr = n("s/Z0"),
            nr = [255, 255, 255],
            rr = [32, 28, 43],
            ir = 3,
            or = /^#[A-Fa-f0-9]{3,6}$/;

        function ar(e) {
            var t = [e[0], e[1], e[2]].map(function(e) {
                return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
            });
            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
        }

        function sr(e, t) {
            return (ar(e) + .05) / (ar(t) + .05)
        }
        var cr, lr, ur = "#b22222";
        ! function(e) {
            e.ConfirmButton = "confirm-button", e.ContrastWarning = "contrast-warning", e.InvalidWarning = "invalid-warning", e.SaveError = "save-error"
        }(cr || (cr = {})),
        function(e) {
            e.Empty = "empty", e.Dirty = "dirty", e.SaveError = "save-error", e.InvalidInput = "invalid-input", e.Success = "success", e.Loading = "loading"
        }(lr || (lr = {}));
        var dr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || ur,
                        inputColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || ur,
                        status: lr.Empty,
                        isHighContrast: !0
                    }, t.onChangeInput = function(e) {
                        var n = e.currentTarget.value.trim();
                        0 !== n.indexOf("#") && (n = "#" + n), t.validateColor(n), t.setState({
                            inputColor: n
                        })
                    }, t.onBlurInput = function() {
                        t.state.status !== lr.InvalidInput && t.onChangeColor(t.state.inputColor)
                    }, t.onChangeColor = function(e) {
                        var n, r = (4 === (n = tr(e)).length && (n = [n[0], n[1], n[2]]), er(n));
                        t.validateColor(r), t.setState({
                            selectedColor: r,
                            inputColor: r
                        })
                    }, t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!this.state.selectedColor) return [2];
                                        this.setState({
                                            status: lr.Loading
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.updateChatColorMutation(this.state.selectedColor)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            status: lr.Success
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            status: lr.SaveError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.data.currentUser && e.data.currentUser && e.data.currentUser.chatColor && this.setState({
                        selectedColor: e.data.currentUser.chatColor,
                        inputColor: e.data.currentUser.chatColor
                    })
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || this.props.data.networkStatus < 3) return null;
                    var e = Object(d.d)("Hex Color Code", "ChatColorPicker");
                    return l.createElement(F._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(k.a, {
                        title: Object(d.d)("Chat Color", "ChatColorPicker"),
                        description: Object(d.d)("Pick a color, any color! It may take several minutes for your color to update in the chat room.", "ChatColorPicker")
                    }), l.createElement(F._8, {
                        display: F.R.Flex,
                        margin: {
                            bottom: 1
                        },
                        className: "react-simple-colorpicker"
                    }, l.createElement(Yn, {
                        color: this.state.selectedColor,
                        onChange: this.onChangeColor
                    }), this.renderPreview(Object(d.d)("Light Mode", "ChatColorPicker"), this.props.data.currentUser, Kn.a.Light), this.renderPreview(Object(d.d)("Dark Mode", "ChatColorPicker"), this.props.data.currentUser, Kn.a.Dark)), l.createElement(F.W, {
                        id: "chat-color-picker__color-code-input",
                        label: e
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        },
                        className: "color-picker-input",
                        display: F.R.Flex,
                        alignItems: F.c.Center
                    }, l.createElement(F._4, {
                        id: "chat-color-picker__color-code-input",
                        "data-a-target": "color-picker-input",
                        type: F._5.Text,
                        value: this.state.inputColor,
                        onChange: this.onChangeInput,
                        onBlur: this.onBlurInput,
                        maxLength: 7
                    }), l.createElement(F._8, {
                        padding: {
                            left: 1
                        }
                    }, this.renderSaveButton())), this.renderStatus()))
                }, t.prototype.renderStatus = function() {
                    return this.state.status === lr.SaveError ? l.createElement(F.Q, {
                        color: F.K.Error,
                        "data-test-selector": cr.SaveError
                    }, Object(d.d)("Oops, something went wrong. Please try again.", "ChatColorPicker")) : this.state.status === lr.InvalidInput ? l.createElement(F.Q, {
                        color: F.K.Error,
                        "data-test-selector": cr.InvalidWarning
                    }, Object(d.d)("Please enter a valid hexadecimal color code.", "ChatColorPicker")) : this.state.isHighContrast ? void 0 : this.renderContrastWarning()
                }, t.prototype.renderContrastWarning = function() {
                    var e = 1,
                        t = Object(d.d)("<x:strong>Heads up!</x:strong> Some colors may be <x:strong>hard to read</x:strong> in light or dark themes. Check it here before chatting.", {
                            "x:strong": function(t) {
                                return l.createElement(F.Q, {
                                    key: "bold-text-" + e++,
                                    type: F._49.Span,
                                    bold: !0
                                }, t)
                            }
                        }, "ChatColorPicker"),
                        n = l.createElement(F._8, {
                            display: F.R.Inline,
                            verticalAlign: F._59.TextTop,
                            margin: {
                                right: .5
                            }
                        }, l.createElement(F._24, {
                            asset: F._25.Warning
                        }));
                    return l.createElement(F._8, {
                        "data-test-selector": cr.ContrastWarning
                    }, n, l.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Alt2
                    }, t))
                }, t.prototype.renderSaveButton = function() {
                    var e = this.state.status !== lr.Dirty && this.state.status !== lr.SaveError && this.state.status !== lr.Success,
                        t = F.A.Default;
                    this.state.status === lr.Loading ? t = F.A.Loading : this.state.status === lr.Success && (t = F.A.Success);
                    var n = F.B.Default;
                    return this.state.status === lr.Success && (n = F.B.Success), l.createElement(F.v, {
                        "data-test-selector": cr.ConfirmButton,
                        "data-a-target": "color-confirm-button",
                        disabled: e,
                        onClick: this.onClickSave,
                        state: t,
                        type: n
                    }, Object(d.d)("Confirm Color", "ChatColorPicker"))
                }, t.prototype.renderPreview = function(e, t, n) {
                    return l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        justifyContent: F._7.Center,
                        margin: {
                            left: 2
                        }
                    }, l.createElement(F.Q, {
                        color: F.K.Alt2
                    }, e), l.createElement("div", {
                        style: {
                            width: "165px",
                            height: "60px",
                            backgroundColor: this.state.selectedColor
                        }
                    }), l.createElement(F._8, {
                        className: Object($n.a)(n)
                    }, l.createElement(F._35, {
                        background: F.n.Base,
                        padding: {
                            y: 2
                        },
                        justifyContent: F._7.Center,
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement("span", {
                        style: {
                            color: this.state.selectedColor
                        }
                    }, l.createElement(F.Q, {
                        bold: !0
                    }, Object(Jn.a)(t.login, t.displayName)))), l.createElement(F.Q, {
                        color: F.K.Base
                    }, Object(d.d)("Hi there!", "ChatColorPicker")))))
                }, t.prototype.validateColor = function(e) {
                    var t, n, r;
                    e && (r = e, or.test(r.trim())) ? this.setState({
                        status: lr.Dirty,
                        isHighContrast: (t = e, n = tr(t), sr(nr, n) >= ir && sr(n, rr) >= ir)
                    }) : this.setState({
                        status: lr.InvalidInput
                    })
                }, t
            }(l.Component),
            pr = Object(de.compose)(Object(Y.a)(Zn), Object(Xn.a)())(dr),
            hr = function(e) {
                if (!e.emote.id) return null;
                var t = "https://static-cdn.jtvnw.net/emoticons/v1/" + e.emote.id;
                return l.createElement(F.N, {
                    alt: e.emote.text || "",
                    src: t + "/1.0",
                    srcSet: {
                        "1x": t + "/1.0",
                        "1.5x": t + "/1.5",
                        "2x": t + "/2.0",
                        "3x": t + "/3.0",
                        "4x": t + "/4.0"
                    }
                })
            },
            mr = (n("0cQv"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectEmoteSet = function() {
                        !t.props.selected && t.props.selectEmoteSet && t.props.emoteSet && t.props.emoteSet.id && t.props.selectEmoteSet(t.props.emoteSet.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.emoteSet.id || !this.props.emoteSet.emotes) return null;
                    var e = this.props.emoteSet.emotes.slice(0, 3).map(function(e) {
                            return l.createElement(hr, {
                                key: e.id,
                                emote: e
                            })
                        }),
                        t = D({
                            "emote-set-button": !0,
                            "emote-set-button-unselected": !this.props.selected
                        });
                    return l.createElement(F._35, {
                        className: t,
                        "data-a-target": this.props.selected ? "emote-set-button" : "emote-set-button-unselected",
                        display: F.R.InlineFlex
                    }, l.createElement(F.v, {
                        onClick: this.selectEmoteSet,
                        "data-a-target": "emote-set-button-" + this.props.emoteSet.id,
                        type: F.B.Text
                    }, l.createElement(F._8, {
                        padding: {
                            top: .5
                        }
                    }, e)))
                }, t
            }(l.Component)),
            gr = (n("5xsI"), function(e) {
                if (!e.emoteSet.emotes) return null;
                var t = e.emoteSet.emotes.filter(function(e) {
                    return e.id && e.text
                }).map(function(t) {
                    return l.createElement(F._8, {
                        key: t.id,
                        "data-a-target": "emote-" + e.emoteSet.id,
                        display: F.R.InlineFlex,
                        flexDirection: F.T.Column,
                        alignItems: F.c.Center,
                        padding: 1
                    }, l.createElement(F._8, {
                        display: F.R.InlineFlex,
                        flexGrow: 1,
                        alignItems: F.c.Center
                    }, l.createElement(hr, {
                        emote: t
                    })), l.createElement(F.Q, null, t.text))
                });
                return l.createElement(F._8, {
                    className: "emote-set-preview",
                    "data-a-target": "emote-set-preview",
                    padding: {
                        top: 1
                    },
                    textAlign: F._45.Center,
                    display: F.R.Flex,
                    alignItems: F.c.Stretch,
                    justifyContent: F._7.Center,
                    flexWrap: F.U.Wrap
                }, t)
            }),
            fr = n("pNd4"),
            vr = n("cpRO");
        var br, yr, Sr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1
                    }, t.selectEmoteSet = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.props.selectEmoteSet) return [2];
                                        this.setState({
                                            error: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.selectEmoteSet(e)];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.currentEmoteSet || !this.primeEmoticons || !this.primeEmoticons.emoticonSets) return l.createElement(F._14, {
                        width: 300,
                        height: 200
                    });
                    var t = this.primeEmoticons.emoticonSets.map(function(t) {
                        return l.createElement(mr, {
                            key: t.id,
                            selected: e.currentEmoteSet.id === t.id,
                            emoteSet: t,
                            selectEmoteSet: e.selectEmoteSet
                        })
                    });
                    return l.createElement(F._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(k.a, {
                        title: Object(d.d)("Emoticons", "PrimeEmotesSetPicker"),
                        description: Object(d.d)("Choose which set of emoticons you want to use while chatting. You can always change your mind later.", "PrimeEmotesSetPicker")
                    }), l.createElement(F._8, null, t, this.renderErrorMessage(), l.createElement(gr, {
                        emoteSet: this.currentEmoteSet
                    })))
                }, Object.defineProperty(t.prototype, "primeEmoticons", {
                    get: function() {
                        if (this.props.data.currentUser && this.props.data.currentUser.primeSettings && this.props.data.currentUser.primeSettings.primeEmoticons && this.props.data.currentUser.primeSettings.primeEmoticons.emoticonSets) return this.props.data.currentUser.primeSettings.primeEmoticons
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "currentEmoteSet", {
                    get: function() {
                        if (this.primeEmoticons) {
                            var e = this.primeEmoticons,
                                t = e.emoticonSets,
                                n = e.currentSetName;
                            return t.find(function(e) {
                                return e.id === n
                            })
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.renderErrorMessage = function() {
                    return this.state.error ? l.createElement(F._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(F.Q, {
                        color: F.K.Error
                    }, Object(d.d)("Sorry, something went wrong selecting emotes. Please try again later.", "PrimeEmotesSetPicker"))) : null
                }, t
            }(l.Component),
            kr = Object(de.compose)(Object(Y.a)(fr), function(e) {
                var t = this;
                return Object(Y.a)(vr, {
                    props: function(n) {
                        return {
                            selectEmoteSet: function(r) {
                                return c.__awaiter(t, void 0, void 0, function() {
                                    var t, i, o;
                                    return c.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (t = e(n.ownProps), i = t.currentUserID, o = t.primeSettings, !(i && o && o.primeEmoticons && o.primeEmoticons.emoticonSets && n.mutate)) throw new Error("selectEmoteSetMutation is not ready");
                                                a.label = 1;
                                            case 1:
                                                return a.trys.push([1, 3, , 4]), [4, n.mutate(c.__assign({}, Object(pe.a)({
                                                    primeEmoticonsSetName: r,
                                                    userID: i
                                                }), {
                                                    optimisticResponse: {
                                                        updatePrimeSettings: {
                                                            __typename: "UpdatePrimeSettingsPayload",
                                                            primeSettings: {
                                                                __typename: "PrimeSettings",
                                                                id: o.id,
                                                                primeEmoticons: {
                                                                    __typename: "PrimeEmoticons",
                                                                    currentSetName: r
                                                                }
                                                            }
                                                        }
                                                    }
                                                }))];
                                            case 2:
                                                if (a.sent().data.updatePrimeSettings.primeSettings.primeEmoticons.currentSetName !== r) throw new Error("Could not update prime settings.");
                                                return [3, 4];
                                            case 3:
                                                throw a.sent();
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }(function(e) {
                return {
                    primeSettings: e.data.currentUser && e.data.currentUser.primeSettings,
                    currentUserID: e.data.currentUser && e.data.currentUser.id
                }
            }))(Sr),
            _r = n("cumT"),
            Er = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldOpenURL = !0, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_premium_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? l.createElement(l.Fragment, null, l.createElement(pr, null), l.createElement(kr, null), l.createElement(k.a, {
                        title: Object(d.d)("Subscriptions Settings", "SettingsPrimePage"),
                        description: Object(d.d)("Choose how your subscription activity will display in chat", "SettingsPrimePage")
                    }), l.createElement(S.a, null, l.createElement(Qn, null))) : Object(zn.a)(this.props.data.requestInfo.countryCode) ? (this.shouldOpenURL && (this.shouldOpenURL = !1, window.open("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t")), l.createElement(Vn.a, null)) : l.createElement(u.b, {
                        to: "/settings/turbo"
                    }) : null
                }, t
            }(l.Component),
            Cr = Object(i.d)(Object(h.d)("SettingsPrimePage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsPrime
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }), Object(Y.a)(_r))(Er),
            wr = n("+0KR"),
            Or = n("WrTc"),
            xr = function() {
                return l.createElement(p.a, {
                    message: Object(d.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            Nr = function() {
                return l.createElement(_.a, {
                    label: Object(d.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: F.X.Horizontal
                }, Object(d.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return l.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            jr = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(br || (br = {})),
        function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(yr || (yr = {}));
        var Ur, Tr = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = d.j.withCategory("email-setting"), n.onClickVerify = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            working: !0
                                        }), e = yr.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, O.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = yr.VerificationEmailSent), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Request to send verification email failed for user:", {
                                            login: this.props.login
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            status: e,
                                            working: !1
                                        }, function() {
                                            return t.feedbackTimerHandle = setTimeout(function() {
                                                return t.setState({
                                                    status: yr.CanSendVerificationEmail
                                                })
                                            }, jr)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? yr.Verified : yr.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === yr.Error,
                        t = this.props.disabled || this.state.working;
                    return l.createElement(F._8, {
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(_.a, {
                        id: "profile-account-info-setting__email-input",
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(d.d)("Email", "EmailSetting")
                    }, l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        flexGrow: 1
                    }, l.createElement(F._4, {
                        id: "profile-account-info-setting__email-input",
                        type: F._5.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email,
                        "data-a-target": "profile-email-input"
                    })), this.renderVerifyButton(t)), l.createElement(K.a, {
                        text: this.renderVerificationMessage(),
                        textDataTarget: "profile-email-description"
                    })))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case yr.CanSendVerificationEmail:
                            return l.createElement(F.v, {
                                type: F.B.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify,
                                "data-a-target": "profile-email-verify-button"
                            }, Object(d.d)("Verify", "EmailSetting"));
                        case yr.VerificationEmailSent:
                            return l.createElement(F.v, {
                                type: F.B.Success,
                                disabled: !0,
                                "data-a-target": "profile-email-sent-button"
                            }, Object(d.d)("Email Sent", "EmailSetting"));
                        case yr.Error:
                            return l.createElement(F.v, {
                                type: F.B.Alert,
                                disabled: !0,
                                "data-a-target": "profile-email-error-button"
                            }, Object(d.d)("Error", "EmailSetting"));
                        case yr.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case yr.CanSendVerificationEmail:
                            return Object(d.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case yr.VerificationEmailSent:
                            return Object(d.d)("Verification email sent!", "EmailSetting");
                        case yr.Verified:
                            return Object(d.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === yr.Error) return Object(d.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case br.InvalidAddress:
                            return Object(d.d)("Please provide a valid email address", "EmailSetting");
                        case br.InvalidDomain:
                            return Object(d.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(l.Component),
            Dr = n("FuaS"),
            Pr = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(Ur || (Ur = {}));
        var Ir = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Ur.Loading
                    }, t.logger = d.j.withCategory("username-setting"), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.emailVerified && this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return l.createElement(F._8, {
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(_.a, {
                        label: Object(d.d)("Username", "UsernameSetting"),
                        error: this.state.status === Ur.Error,
                        errorMessage: this.state.status === Ur.Error ? this.renderErrorMessage() : void 0
                    }, l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        flexGrow: 1
                    }, l.createElement(F._4, {
                        type: F._5.Text,
                        disabled: !0,
                        value: this.props.login,
                        "data-a-target": "profile-username-input"
                    })), this.state.status === Ur.Eligible && l.createElement(F.w, {
                        ariaLabel: Object(d.d)("Edit Username", "UsernameSetting"),
                        icon: F._25.Edit,
                        linkTo: "https://www.twitch.tv/logins/new",
                        "data-a-target": "profile-edit-username-button"
                    })), l.createElement(K.a, {
                        textDataTarget: "profile-username-description",
                        text: this.renderChangeEligibilityMessage()
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!1 === this.props.emailVerified) return Object(d.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case Ur.Loading:
                            return Object(d.d)("Loading username change eligibility...", "UsernameSetting");
                        case Ur.Eligible:
                            return Object(d.d)("You may update your username", "UsernameSetting");
                        case Ur.NotEligible:
                            return this.state.eligibilityTimeISO && Object(d.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(Pr.b)(n)
                                }(this.state.eligibilityTimeISO) || ""
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderErrorMessage = function() {
                    return Object(d.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                }, t.prototype.fetchChangeEligibility = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get("/kraken/user/rename_status?scope=user_read")];
                                case 1:
                                    return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                        status: Ur.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: Ur.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: Ur.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: Ur.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            Fr = ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"],
            Ar = "profile-account-info-setting__bio-input",
            Mr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(Tr, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), l.createElement(Ir, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), l.createElement(_.a, {
                        id: "profile-account-info-setting__displayname-input",
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(d.d)("Display Name", "ProfileAccountInfo")
                    }, l.createElement(F._4, {
                        id: "profile-account-info-setting__displayname-input",
                        "data-a-target": "profile-displayname-input",
                        type: F._5.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), l.createElement(K.a, {
                        textDataTarget: "profile-displayname-description",
                        text: this.renderDisplayNameDescription()
                    })), l.createElement(_.a, {
                        id: Ar,
                        error: !!this.props.bioError,
                        errorMessage: this.props.bioError ? this.renderBioError() : void 0,
                        label: Object(d.d)("Bio", "ProfileAccountInfo")
                    }, l.createElement(F._46, {
                        id: Ar,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio,
                        "data-a-target": "profile-bio-input"
                    }), l.createElement(K.a, {
                        textDataTarget: "profile-bio-description",
                        text: Object(d.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(d.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(d.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderBioError = function() {
                    return Object(d.d)("Your description is too long", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(d.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = Object(Dr.a)();
                    return !!e && Fr.includes(e)
                }, t
            }(l.Component),
            Rr = n("E9Qg"),
            Lr = n.n(Rr),
            Br = n("tL94"),
            zr = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(lt.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: ut.a.ProfileBanner,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t.shouldReportInteractive = function() {
                        var e = t.props.data;
                        if (e && !e.loading) {
                            var n = e.currentUser;
                            n && n.bannerImageURL ? t.props.latencyTracking.reportInteractive(1) : t.props.latencyTracking.reportInteractive()
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e && e.currentUser;
                    if (!e.loading && !t) return l.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Error
                    }, Object(d.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(d.d)("Profile Banner", "ProfileBannerSetting"),
                        r = null;
                    return r = e.loading ? l.createElement(F._14, {
                        "data-test-selector": "profile-banner__placeholder",
                        "data-a-target": "profile-banner-image",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? l.createElement(h.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image",
                        "data-a-target": "profile-banner-image"
                    }) : l.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + Lr.a + ")"
                        },
                        "data-a-target": "profile-banner-image"
                    }), l.createElement(F._8, {
                        className: "profile-banner-setting"
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, l.createElement(F._8, {
                        margin: {
                            right: 2
                        }
                    }, r), l.createElement(F._8, {
                        margin: {
                            y: "auto"
                        }
                    }, l.createElement(F.v, {
                        ariaLabel: Object(d.d)("Update Profile Banner", "ProfileBannerSetting"),
                        type: F.B.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-banner-upload-button",
                        "data-test-selector": "profile-banner-upload-button"
                    }, l.createElement(F._8, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Update", "ProfileBannerSetting"))), l.createElement(K.a, {
                        text: Object(d.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(l.Component)),
            Vr = Object(de.compose)(Object(h.d)("ProfileBannerSetting"), Object(Y.a)(Br))(zr);
        var qr = Object(r.b)(null, function(e) {
                return Object(i.b)({
                    showModal: Ke.d
                }, e)
            })(Vr),
            Hr = n("x9n8"),
            Gr = n("goep"),
            Wr = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(Hr.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = l.createElement(F._14, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = l.createElement(h.b, {
                        src: e.profileImageURL,
                        alt: Object(d.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image",
                        "data-a-target": "profile-image"
                    })), l.createElement(F._8, {
                        className: "profile-image-setting"
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, l.createElement(F._8, {
                        margin: {
                            right: 2
                        }
                    }, t), l.createElement(F._8, {
                        margin: {
                            y: "auto"
                        }
                    }, l.createElement(F.v, {
                        ariaLabel: Object(d.d)("Update Profile Picture", "ProfileImageSetting"),
                        type: F.B.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-image-upload-button",
                        "data-test-selector": "profile-image-upload-button"
                    }, l.createElement(F._8, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Update", "ProfileImageSetting"))), l.createElement(K.a, {
                        text: Object(d.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(l.Component)),
            Qr = Object(de.compose)(Object(h.d)("ProfileImageSetting"), Object(Y.a)(Gr))(Wr);
        var Yr, Kr = Object(r.b)(null, function(e) {
                return Object(i.b)({
                    showModal: Ke.d
                }, e)
            })(Qr),
            Xr = n("OA9H");
        ! function(e) {
            e.Bio = "Error (403): Description specified is too long", e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(Yr || (Yr = {}));
        var Jr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        bioError: !1,
                        displayNameError: !1,
                        saveStatus: wr.b.Working
                    }, t.logger = d.j.withCategory("settings-profile-page"), t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o, a = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.props.data.currentUser) return [2];
                                        this.setState({
                                            saveStatus: wr.b.Working
                                        }), e = wr.b.Error, t = !1, n = !1, r = void 0, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, O.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                            body: this.buildRequestBody()
                                        })];
                                    case 2:
                                        if (200 === (i = s.sent()).status) e = wr.b.Success;
                                        else if (403 === i.status) switch (i.error && i.error.message) {
                                            case Yr.EmailNotValid:
                                                r = br.InvalidAddress;
                                                break;
                                            case Yr.EmailDomainNotAllowed:
                                                r = br.InvalidDomain;
                                                break;
                                            case Yr.DisplayName:
                                                t = !0;
                                                break;
                                            case Yr.Bio:
                                                n = !0;
                                                break;
                                            default:
                                                this.logErrorToSentinel(i)
                                        } else this.logErrorToSentinel(i);
                                        return [3, 4];
                                    case 3:
                                        return o = s.sent(), this.logger.warn("Network error submitting profile for user", {
                                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                                            error: o
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e,
                                            bioError: n,
                                            displayNameError: t,
                                            emailError: r
                                        }, function() {
                                            e === wr.b.Success && a.props.data.refetch && a.props.data.refetch()
                                        }), [2]
                                }
                            })
                        })
                    }, t.onBioChange = function(e) {
                        return t.setState({
                            bio: e.currentTarget.value,
                            bioError: !1
                        }, t.checkForDirtyState)
                    }, t.onEmailChange = function(e) {
                        return t.setState({
                            email: e.currentTarget.value,
                            emailError: void 0
                        }, t.checkForDirtyState)
                    }, t.onDisplayNameChange = function(e) {
                        return t.setState({
                            displayName: e.currentTarget.value,
                            displayNameError: !1
                        }, t.checkForDirtyState)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser) return this.props.data.loading ? l.createElement(F._10, {
                        fillContent: !0
                    }) : l.createElement(xr, null);
                    var e = l.createElement(Or.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Profile Picture", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(pt.a, null, l.createElement(Kr, null))), l.createElement(k.a, {
                        title: Object(d.d)("Profile Banner", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(pt.a, null, l.createElement(qr, null))), l.createElement(k.a, {
                        title: Object(d.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(d.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), l.createElement(S.a, {
                        footer: e
                    }, l.createElement(Mr, {
                        bio: this.state.bio || "",
                        bioError: this.state.bioError,
                        controlsDisabled: this.state.saveStatus === wr.b.Working,
                        displayName: this.state.displayName || "",
                        displayNameError: this.state.displayNameError,
                        email: this.state.email || "",
                        emailDirty: this.state.email !== this.props.data.currentUser.email,
                        emailError: this.state.emailError,
                        emailVerified: this.props.data.currentUser.isEmailVerified,
                        id: this.props.data.currentUser.id,
                        login: this.props.data.currentUser.login || "",
                        onBioChange: this.onBioChange,
                        onDisplayNameChange: this.onDisplayNameChange,
                        onEmailChange: this.onEmailChange
                    })), l.createElement(k.a, {
                        title: Object(d.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(d.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(Nr, null)))
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: wr.b.NoChanges
                    })
                }, t.prototype.logErrorToSentinel = function(e) {
                    this.logger.error(e.requestError || new Error("Unrecognized User Service response error"), "Unrecognized erorr response submitting profile for user", {
                        user: this.props.data.currentUser && this.props.data.currentUser.login,
                        status: e.status,
                        error: e.error,
                        requestError: e.requestError
                    })
                }, t.prototype.buildRequestBody = function() {
                    return {
                        displayname: this.state.displayName,
                        email: this.state.email,
                        description: this.state.bio,
                        on_site: 1
                    }
                }, t.prototype.checkForDirtyState = function() {
                    if (!this.props.data.currentUser) return !1;
                    var e = this.state.bio !== this.props.data.currentUser.description || this.state.email !== this.props.data.currentUser.email || this.state.displayName !== this.props.data.currentUser.displayName;
                    this.setState({
                        saveStatus: e ? wr.b.DirtyChanges : wr.b.NoChanges
                    })
                }, t
            }(l.Component),
            $r = Object(de.compose)(Object(Y.a)(Xr), Object(h.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsProfile
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Jr),
            Zr = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-security-page-block-subs",
                    label: Object(d.d)("Block Receiving Gifts on Channels You don't Follow", "BlockGiftedSubsToggle"),
                    description: Object(d.d)("Block incoming gift subscriptions to channels you don't follow", "BlockGiftedSubsToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            ei = n("sVk6"),
            ti = n("CePw"),
            ni = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("block-gifted-subs-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating subscription settings", {
                                                giftsInFollowedChannelsOnly: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings."), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(pe.a)({
                                            giftsInFollowedChannelsOnly: e
                                        }))];
                                    case 2:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.subscriptionSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    subscriptionSettings: c.__assign({}, r, {
                                                        giftsToFollowedChannelsOnly: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(ti, {}, t), this.logger.debug("Updated subscription settings", {
                                            giftsInFollowedChannelsOnly: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.logger.warn("Failed to update subscription settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.subscriptionSettings && n.subscriptionSettings.giftsToFollowedChannelsOnly || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.subscriptionSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Zr, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            ri = Object(i.d)(Object(h.d)("BlockGiftedSubs"), Object(Y.a)(ti, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(Y.a)(ei, {
                name: "updateUserSubscriptionSettings"
            }))(ni),
            ii = "/v5/whispers/settings",
            oi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, O.a.post(ii, {
                                            body: {
                                                restrict_whispers: e
                                            }
                                        })];
                                    case 2:
                                        return t = n.sent(), this.setState(function(n) {
                                            return {
                                                enabled: 200 === t.status ? e : n.enabled,
                                                error: 200 !== t.status,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            updating: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get(ii)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.restrict_whispers || !1,
                                        error: 200 !== e.status,
                                        loading: !1
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        enabled: !1,
                                        error: !0,
                                        loading: !1
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(fe.a, {
                        id: "settings-security-page-block-whispers",
                        label: Object(d.d)("Block Whispers from Strangers", "SettingsSecurityPage"),
                        description: Object(d.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        showPlaceholder: this.state.loading,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(l.Component);

        function ai() {
            return l.createElement(_.a, {
                label: Object(d.d)("Password", "ChangePasswordLink"),
                orientation: F.X.Horizontal
            }, l.createElement(F.Q, null, Object(d.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return l.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        var si = function(e) {
                return e.loading || e.errorLoading || !e.checked && !e.saving ? null : l.createElement(fe.a, {
                    id: "settings-security-hide-directory",
                    label: Object(d.d)("Hide channel from directory", "HideDirectoryToggle"),
                    description: Object(d.d)("Live video, past broadcasts, and highlights are listed publicly in the directory by default. Turning this off is irreversible.", "HideDirectoryToggle"),
                    error: e.errorSaving,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: e.saving
                })
            },
            ci = n("UIkr"),
            li = n("j7X+"),
            ui = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("hide-directory-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating user settings", {
                                                IsDirectoryHidden: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update user settings."), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateUserDirectoryHidden(Object(pe.a)({
                                            IsDirectoryHidden: e
                                        }))];
                                    case 2:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.settings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    settings: c.__assign({}, r, {
                                                        isDirectoryHidden: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(li, {}, t), this.logger.debug("Updated user settings", {
                                            IsDirectoryHidden: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.logger.warn("Failed to update user settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.settings && n.settings.isDirectoryHidden || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.settings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(si, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            di = Object(i.d)(Object(h.d)("HideDirectoryToggle"), Object(Y.a)(li, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(Y.a)(ci, {
                name: "updateUserDirectoryHidden"
            }))(ui),
            pi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        show: !1,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0,
                                            error: !1
                                        }), t = {
                                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, O.a.put(this.hideLiveVideoEndpoint, {
                                            body: Nt.stringify({
                                                "channel[private_video]": e
                                            }, {
                                                arrayFormat: "bracket"
                                            }),
                                            headers: t
                                        })];
                                    case 2:
                                        return n = r.sent(), this.setState(function(t) {
                                            return {
                                                enabled: 200 === n.status ? e : t.enabled,
                                                error: 200 !== n.status,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            updating: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get(this.hideLiveVideoEndpoint)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.private_video || !1,
                                        error: 200 !== e.status,
                                        show: !!e.body && e.body.privacy_options_enabled,
                                        loading: !1
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        enabled: !1,
                                        error: !0,
                                        loading: !1
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.show ? l.createElement(fe.a, {
                        id: "settings-security-page-hide-live-video",
                        label: Object(d.d)("Hide Live Video", "HideLiveVideoSetting"),
                        description: Object(d.d)("Only allow your editors to view your live video", "HideLiveVideoSetting"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    }) : null
                }, Object.defineProperty(t.prototype, "hideLiveVideoEndpoint", {
                    get: function() {
                        return "/v5/channels/" + this.props.sessionUserID
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component);
        var hi = Object(r.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(pi),
            mi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        show: !1,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, O.a.put(this.hidePastBroadcastsEndpoint + "?hide_archives=" + e)];
                                    case 2:
                                        return t = n.sent(), this.setState(function(n) {
                                            return {
                                                enabled: 200 === t.status ? e : n.enabled,
                                                error: 200 !== t.status,
                                                show: 200 === t.status ? !!t.body && (t.body.hide_archives || t.body.hide_archives_enabled) : n.show,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            updating: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get(this.hidePastBroadcastsEndpoint)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.hide_archives || !1,
                                        error: 200 !== e.status,
                                        show: !!e.body && (e.body.hide_archives || e.body.hide_archives_enabled),
                                        loading: !1
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        enabled: !1,
                                        error: !0,
                                        loading: !1
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.show ? l.createElement(fe.a, {
                        id: "settings-security-page-hide-past-broadcasts",
                        label: Object(d.d)("Hide Past Broadcasts", "HidePastBroadcastsSetting"),
                        description: Object(d.d)("Only allow your editors to view your past broadcasts", "HidePastBroadcastsSetting"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    }) : null
                }, Object.defineProperty(t.prototype, "hidePastBroadcastsEndpoint", {
                    get: function() {
                        return "/v5/channels/" + this.props.sessionUserID + "/user_video_privacy_properties"
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component);
        var gi, fi = Object(r.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(mi),
            vi = function(e) {
                var t = e.saving || e.errorLoading,
                    n = Object(d.d)("Hide Subscription Gift Purchase Count", "HideGiftedSubCountSettingsPresentation"),
                    r = Object(d.d)("Do not show the total number of Gift Subscriptions you have given in the channel when you purchase a Gift Subscription", "HideGiftedSubCountSettingPresentation");
                return l.createElement(fe.a, {
                    id: "settings-security-page-hide-subscription-gift-count",
                    label: n,
                    description: r,
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    disabled: t,
                    onChange: e.onChange,
                    showPlaceholder: e.loading
                })
            },
            bi = n("XhdA"),
            yi = n("KBYt"),
            Si = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        errorSaving: !1,
                        loading: !1,
                        saving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("hide-subscription-gift-count"), t.onToggleChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating subscription settings", {
                                                isGiftCountHidden: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings"), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(pe.a)({
                                            isGiftCountHidden: e
                                        }))];
                                    case 2:
                                        return r.sent(), t = function(t) {
                                            return t && t.currentUser && t.currentUser.subscriptionSettings && (t.currentUser.subscriptionSettings.isGiftCountHidden = e), t
                                        }, Object(pe.e)(yi, {}, t), this.logger.debug("Updated subscription settings", {
                                            isGiftCountHidden: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.logger.warn("Failed to update subscription settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data.currentUser;
                    if (this.props.data.loading && !e.data.loading) {
                        var n = t && t.subscriptionSettings && t.subscriptionSettings.isGiftCountHidden || !1;
                        this.setState({
                            checked: n
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.subscriptionSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(vi, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onToggleChange
                    })
                }, t
            }(l.Component),
            ki = Object(i.d)(Object(h.d)("HideSubscriptionGiftCountSetting"), Object(Y.a)(yi, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(Y.a)(bi, {
                name: "updateUserSubscriptionSettings"
            }))(Si),
            _i = n("NoSW"),
            Ei = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_.a, {
                        label: Object(d.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: F.X.Horizontal,
                        error: this.props.status === gi.Error,
                        errorMessage: Object(d.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case gi.Loading:
                            return this.renderLoading();
                        case gi.Error:
                            return this.renderError();
                        case gi.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case gi.CanEnable:
                            return this.renderEnableButton();
                        case gi.Enabled:
                            return this.renderDisableButton();
                        case gi.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return l.createElement(F._14, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return l.createElement(F._8, null, l.createElement(F.Q, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(d.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return l.createElement(F._8, null, l.createElement(F.v, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(d.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), l.createElement(K.a, {
                        textDataTarget: "tfa-pitch-message",
                        text: Object(d.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return l.createElement(F._8, null, l.createElement(F.v, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(d.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return l.createElement(F._8, null, l.createElement(F.Q, {
                        "data-a-target": "tfa-required-message"
                    }, Object(d.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return l.createElement(K.a, {
                        textDataTarget: "tfa-successful-message",
                        text: Object(d.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(l.Component),
            Ci = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(gi || (gi = {}));
        var wi, Oi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(Ei, {
                        status: this.twoFactorStatus
                    })
                }, Object.defineProperty(t.prototype, "twoFactorStatus", {
                    get: function() {
                        var e = this.props.data,
                            t = e.currentUser;
                        return e.loading ? gi.Loading : !t || e.error ? gi.Error : this.twoFactorEnabled ? this.userRoleRequiresTwoFactor ? gi.EnabledAndRequired : gi.Enabled : t.isEmailVerified ? gi.CanEnable : gi.UnverifiedEmail
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "twoFactorEnabled", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        return !!(e && e.settings && e.settings.hasTwoFactorEnabled)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "userRoleRequiresTwoFactor", {
                    get: function() {
                        var e = this.props.data.currentUser && this.props.data.currentUser.roles;
                        return !(!e || !(e.isGlobalMod || e.isSiteAdmin || e.isStaff))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            xi = Object(de.compose)(Object(_i.a)("TwoFactorAuthenticationSetting"), Object(Y.a)(Ci))(Oi),
            Ni = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Security", "SettingsSecurityPage"),
                        description: Object(d.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), l.createElement(ai, null), l.createElement(xi, null), l.createElement(k.a, {
                        title: Object(d.d)("Privacy", "SettingsSecurityPage")
                    }), l.createElement(oi, null), l.createElement(ri, null), l.createElement(ki, null), l.createElement(di, null), l.createElement(fi, null), l.createElement(hi, null))
                }, t
            }(l.Component),
            ji = Object(de.compose)(Object(h.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsSecurity
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Ni),
            Ui = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(wi || (wi = {}));
        var Ti = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? null : l.createElement(F._8, {
                        className: "settings-tabs",
                        padding: {
                            x: Mi,
                            top: Mi
                        }
                    }, l.createElement(F._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        type: F._49.H2
                    }, Object(d.d)("Settings", "SettingsTabs"))), l.createElement(F._8, null, l.createElement(F._37, null, l.createElement(F._36, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === wi.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(d.d)("Profile", "SettingsTabs")), this.renderPremiumTab(), l.createElement(F._36, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === wi.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(d.d)("Channel and Videos", "SettingsTabs")), l.createElement(F._36, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === wi.Security,
                        "data-a-target": "security-tab"
                    }, Object(d.d)("Security and Privacy", "SettingsTabs")), l.createElement(F._36, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === wi.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(d.d)("Notifications", "SettingsTab")), l.createElement(F._36, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === wi.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(d.d)("Connections", "SettingsTabs")))))
                }, t.prototype.renderPremiumTab = function() {
                    if (this.props.data.currentUser && this.props.data.requestInfo) {
                        var e = this.props.data.currentUser,
                            t = e.hasPrime;
                        return !e.hasTurbo && Object(zn.a)(this.props.data.requestInfo.countryCode) || t ? l.createElement(F._36, {
                            linkTo: "/settings/prime",
                            active: this.props.tabName === wi.Prime,
                            "data-test-selector": "test-settings-prime-tab",
                            "data-a-target": "prime-tab"
                        }, Object(d.d)("Twitch Prime", "SettingsTabs")) : l.createElement(F._36, {
                            linkTo: "/settings/turbo",
                            active: this.props.tabName === wi.Turbo,
                            "data-test-selector": "test-settings-turbo-tab",
                            "data-a-target": "turbo-tab"
                        }, Object(d.d)("Twitch Turbo", "SettingsTabs"))
                    }
                }, t
            }(l.Component),
            Di = Object(de.compose)(Object(h.d)("SettingsTabs"), Object(Y.a)(Ui))(Ti),
            Pi = function() {
                return l.createElement(F._8, {
                    fullWidth: !0,
                    display: F.R.Flex,
                    flexDirection: F.T.Column,
                    alignItems: F.c.Center
                }, l.createElement(F.Q, {
                    fontSize: F.V.Size2
                }, Object(d.d)("You've gone Turbo!", "CancelTurboLink")), l.createElement(F.Q, null, Object(d.d)("We hope you're enjoying your new chat shwag and watching ad-free.", "CancelTurboLink")), l.createElement(F.O, {
                    to: "/unsubscribe/turbo"
                }, Object(d.d)("Cancel Turbo", "CancelTurboLink")))
            },
            Ii = n("hRPz"),
            Fi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_premium_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return this.props.data.currentUser ? this.props.data.currentUser.hasPrime ? l.createElement(u.b, {
                        to: "/settings/prime"
                    }) : this.props.data.currentUser.hasTurbo ? l.createElement(l.Fragment, null, l.createElement(S.a, null, l.createElement(pt.a, null, l.createElement(Pi, null))), l.createElement(pr, null), l.createElement(kr, null)) : Object(zn.a)(this.props.data.requestInfo.countryCode) ? l.createElement(u.b, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : this.props.data.loading ? l.createElement(F._10, {
                        fillContent: !0
                    }) : l.createElement(xr, null)
                }, t
            }(l.Component),
            Ai = Object(i.d)(Object(h.d)("SettingsTurboPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsTurbo
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }), Object(Y.a)(Ii))(Fi),
            Mi = 3,
            Ri = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return l.createElement(u.b, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? l.createElement(F._8, {
                        padding: {
                            x: Mi
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(m.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), l.createElement(g.a, null, l.createElement(Di, {
                        tabName: this.props.match.params.tab
                    })), l.createElement(F._8, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(u.e, null, l.createElement(u.c, {
                        path: "/settings/profile",
                        component: $r
                    }), l.createElement(u.c, {
                        path: "/settings/prime",
                        component: Cr
                    }), l.createElement(u.c, {
                        path: "/settings/turbo",
                        component: Ai
                    }), l.createElement(u.c, {
                        path: "/settings/channel",
                        component: bt
                    }), l.createElement(u.c, {
                        path: "/settings/security",
                        component: ji
                    }), l.createElement(u.c, {
                        path: "/settings/notifications",
                        component: Bn
                    }), l.createElement(u.c, {
                        path: "/settings/connections",
                        component: yn
                    }), l.createElement(u.c, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = c.__decorate([Object(h.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            Li = Object(u.f)(Ri);
        var Bi = Object(r.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(a.f)(o.a.SettingsPage)
                }
            }, e)
        })(Li);
        n.d(t, "SettingsRoot", function() {
            return Bi
        })
    },
    KBYt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "HideSubscriptionGiftCountQuery"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isGiftCountHidden"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 102
            }
        };
        n.loc.source = {
            body: "query HideSubscriptionGiftCountQuery {\ncurrentUser {\nid\nsubscriptionSettings {\nisGiftCountHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    KYFq: function(e, t, n) {
        var r = n("kl/u"),
            i = n("SCwa"),
            o = NaN,
            a = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            u = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e) return e;
            if (i(e)) return o;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var n = c.test(e);
            return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e
        }
    },
    L3k4: function(e, t, n) {
        var r = n("aIUG"),
            i = n("F6hB");
        e.exports = function(e, t) {
            for (var n = 0, o = (t = r(t, e)).length; null != e && n < o;) e = e[i(t[n++])];
            return n && n == o ? e : void 0
        }
    },
    L4AJ: function(e, t, n) {
        var r = n("F3kA"),
            i = n("MVM9"),
            o = n("iAlu");
        e.exports = function(e, t) {
            return o(i(e, t, r), e + "")
        }
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    LLwJ: function(e, t) {},
    "M+Mb": function(e, t, n) {
        var r = n("gKqb"),
            i = n("qu3O"),
            o = n("Ao0V"),
            a = n("k6Ms"),
            s = n("bL9o"),
            c = n("mG6l"),
            l = n("mPnA"),
            u = n("YOyG"),
            d = 1,
            p = "[object Arguments]",
            h = "[object Array]",
            m = "[object Object]",
            g = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, f, v, b) {
            var y = c(e),
                S = c(t),
                k = y ? h : s(e),
                _ = S ? h : s(t),
                E = (k = k == p ? m : k) == m,
                C = (_ = _ == p ? m : _) == m,
                w = k == _;
            if (w && l(e)) {
                if (!l(t)) return !1;
                y = !0, E = !1
            }
            if (w && !E) return b || (b = new r), y || u(e) ? i(e, t, n, f, v, b) : o(e, t, k, n, f, v, b);
            if (!(n & d)) {
                var O = E && g.call(e, "__wrapped__"),
                    x = C && g.call(t, "__wrapped__");
                if (O || x) {
                    var N = O ? e.value() : e,
                        j = x ? t.value() : t;
                    return b || (b = new r), v(N, j, n, f, b)
                }
            }
            return !!w && (b || (b = new r), a(e, t, n, f, v, b))
        }
    },
    M0TM: function(e, t, n) {
        var r = n("Bh6c"),
            i = n("9nrn"),
            o = n("ymQA"),
            a = 200;
        e.exports = function(e, t) {
            var n = this.__data__;
            if (n instanceof r) {
                var s = n.__data__;
                if (!i || s.length < a - 1) return s.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new o(s)
            }
            return n.set(e, t), this.size = n.size, this
        }
    },
    MA13: function(e, t, n) {
        var r = n("MygC")["__core-js_shared__"];
        e.exports = r
    },
    MKJo: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
    },
    MVM9: function(e, t, n) {
        var r = n("Ii8z"),
            i = Math.max;
        e.exports = function(e, t, n) {
            return t = i(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var o = arguments, a = -1, s = i(o.length - t, 0), c = Array(s); ++a < s;) c[a] = o[t + a];
                    a = -1;
                    for (var l = Array(t + 1); ++a < t;) l[a] = o[a];
                    return l[t] = n(c), r(e, this, l)
                }
        }
    },
    McHv: function(e, t) {
        e.exports = function(e) {
            4 !== e.length && 5 !== e.length || (e = function(e) {
                for (var t = "#", n = 1; n < e.length; n++) {
                    var r = e.charAt(n);
                    t += r + r
                }
                return t
            }(e));
            var t = [parseInt(e.substring(1, 3), 16), parseInt(e.substring(3, 5), 16), parseInt(e.substring(5, 7), 16)];
            if (9 === e.length) {
                var n = parseFloat((parseInt(e.substring(7, 9), 16) / 255).toFixed(2));
                t.push(n)
            }
            return t
        }
    },
    MygC: function(e, t, n) {
        var r = n("1tEs"),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        e.exports = o
    },
    NDrF: function(e, t, n) {
        var r = n("CZUI"),
            i = n("6Exb");
        e.exports = function(e, t) {
            var n = i(e, t);
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
    OA9H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsProfilePage"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "email"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "query SettingsProfilePage {\ncurrentUser {\nid\ndescription\ndisplayName\nemail\nisEmailVerified\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    OB6b: function(e, t) {},
    OOv5: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            o = n("6sO2"),
            a = n("oIkB"),
            s = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(r || (r = {}));
        var c = o.o.logger.withCategory("host-service-worker-messenger"),
            l = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(s.c)(o.o.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: r.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: r.ClearSession
                    })
                }, e.sendMessage = function(e) {
                    var t = this;
                    if (navigator.serviceWorker.controller) this.postMessage(e);
                    else {
                        c.debug("cannot postMessage immediately. waiting for a service worker to take control");
                        var n = function() {
                            c.debug("controller changed", {
                                controllerExists: !!navigator.serviceWorker.controller
                            }), navigator.serviceWorker.removeEventListener("controllerchange", n), t.postMessage(e)
                        };
                        navigator.serviceWorker.addEventListener("controllerchange", n)
                    }
                }, e.postMessage = function(e) {
                    navigator.serviceWorker.controller ? (c.debug("postMessage", e), navigator.serviceWorker.controller.postMessage(JSON.stringify(e))) : c.error(new Error("navigator.serviceWorker.controller is null"), "postMessage called with no controlling service worker")
                }, e
            }(),
            u = function() {
                function e() {}
                return e.exists = function() {
                    return null !== o.o.storage.getOptional("browserPushNotificationsEnabled")
                }, e.isEnabled = function() {
                    return o.o.storage.get("browserPushNotificationsEnabled", !1)
                }, e.setEnabled = function() {
                    o.o.storage.set("browserPushNotificationsEnabled", !0)
                }, e.setDisabled = function() {
                    o.o.storage.set("browserPushNotificationsEnabled", !1)
                }, e
            }();
        var d = n("UbVv"),
            p = n("OtmA"),
            h = null;

        function m() {
            if (h) return h;
            var e = p.register({
                scope: "/"
            });
            return h = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var g = n("JBcW"),
            f = n("TbkX");
        n.d(t, "a", function() {
            return b
        });
        var v = o.o.logger.withCategory("browser-push-notifications-manager"),
            b = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(d.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, m()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(o.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), l.syncSession(), t ? u.exists() && !u.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return s.d ? !Object(d.b)() || u.exists() && !u.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    n.sent(), n.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    u.setEnabled(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.subscribe()];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), Object(d.a)() || v.warn(t, "user subscribe failed", {
                                        context: e
                                    }), [3, 4];
                                case 4:
                                    return Object(g.c)({
                                        allowed: Object(d.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return u.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(g.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, c, l;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (Object(d.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(o.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = o.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, m()];
                                case 1:
                                    return t = u.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = u.sent()) ? [3, 4] : (r = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                                        return r
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: r
                                    })]);
                                case 3:
                                    n = u.sent(), u.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return l = Object(a.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, o.o.apollo.client.mutate(i.__assign({
                                        mutation: f
                                    }, l))];
                                case 5:
                                    return u.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return (e = t.sent()) ? [4, e.unsubscribe()] : [2];
                                case 2:
                                    if (!t.sent()) throw new Error("push subscription unsubscribe unexpectedly failed");
                                    return [2]
                            }
                        })
                    })
                }, e.getPushSubscription = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, m()];
                                case 1:
                                    return [4, t.sent().pushManager.getSubscription()];
                                case 2:
                                    return (e = t.sent()) ? [2, e] : [2, null]
                            }
                        })
                    })
                }, e
            }()
    },
    OScx: function(e, t, n) {
        var r = n("YNJY"),
            i = n("H3TN"),
            o = n("mG6l"),
            a = n("mPnA"),
            s = n("cjOD"),
            c = n("YOyG"),
            l = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var n = o(e),
                u = !n && i(e),
                d = !n && !u && a(e),
                p = !n && !u && !d && c(e),
                h = n || u || d || p,
                m = h ? r(e.length, String) : [],
                g = m.length;
            for (var f in e) !t && !l.call(e, f) || h && ("length" == f || d && ("offset" == f || "parent" == f) || p && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || s(f, g)) || m.push(f);
            return m
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
            i = n("Odds"),
            o = function(e) {
                var t = null;
                return e.title && (t = r.createElement(i._8, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(i.Q, {
                    fontSize: i.V.Size6,
                    color: e.error ? i.K.Error : i.K.Base,
                    bold: !0
                }, e.title))), r.createElement(i._35, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && r.createElement(i.Q, {
                    color: i.K.Error,
                    fontSize: i.V.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    Op8X: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_PSNConnection"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "psn",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 98
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_PSNConnection {\ncurrentUser {\nid\nssoLinks(app: "psn") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            i = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
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
            var t, n, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                            i = n.shouldCancelStart;
                        if (2 === e.button || i(e)) return !1;
                        t._touched = !0, t._pos = {
                            x: e.pageX,
                            y: e.pageY
                        };
                        var o = (0, p.closest)(e.target, function(e) {
                            return null != e.sortableInfo
                        });
                        if (o && o.sortableInfo && t.nodeIsChild(o) && !t.state.sorting) {
                            var a = t.props.useDragHandle,
                                s = o.sortableInfo,
                                c = s.index,
                                l = s.collection;
                            if (a && !(0, p.closest)(e.target, function(e) {
                                    return null != e.sortableHandle
                                })) return;
                            t.manager.active = {
                                index: c,
                                collection: l
                            }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), r || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                return t.handlePress(e)
                            }, t.props.pressDelay))
                        }
                    }, t.nodeIsChild = function(e) {
                        return e.sortableInfo.manager === t.manager
                    }, t.handleMove = function(e) {
                        var n = t.props,
                            r = n.distance,
                            i = n.pressThreshold;
                        if (!t.state.sorting && t._touched) {
                            t._delta = {
                                x: t._pos.x - e.pageX,
                                y: t._pos.y - e.pageY
                            };
                            var o = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                            r || i && !(i && o >= i) ? r && o >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
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
                                i = r.axis,
                                o = r.getHelperDimensions,
                                a = r.helperClass,
                                s = r.hideSortableGhost,
                                c = r.onSortStart,
                                l = r.useWindowAsScrollContainer,
                                u = n.node,
                                d = n.collection,
                                h = u.sortableInfo.index,
                                g = (0, p.getElementMargin)(u),
                                f = t.container.getBoundingClientRect(),
                                v = o({
                                    index: h,
                                    node: u,
                                    collection: d
                                });
                            t.node = u, t.margin = g, t.width = v.width, t.height = v.height, t.marginOffset = {
                                x: t.margin.left + t.margin.right,
                                y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = u.getBoundingClientRect(), t.containerBoundingRect = f, t.index = h, t.newIndex = h, t.axis = {
                                x: i.indexOf("x") >= 0,
                                y: i.indexOf("y") >= 0
                            }, t.offsetEdge = t.getEdgeOffset(u), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                top: t.scrollContainer.scrollTop,
                                left: t.scrollContainer.scrollLeft
                            }, t.initialWindowScroll = {
                                top: window.pageYOffset,
                                left: window.pageXOffset
                            };
                            var b, y = u.querySelectorAll("input, textarea, select"),
                                S = u.cloneNode(!0),
                                k = [].concat(m(S.querySelectorAll("input, textarea, select")));
                            if (k.forEach(function(e, t) {
                                    "file" !== e.type && y[t] && (e.value = y[t].value)
                                }), t.helper = t.document.body.appendChild(S), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = u, u.style.visibility = "hidden", u.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (l ? 0 : f.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (l ? t.contentWindow.innerWidth : f.left + f.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (l ? 0 : f.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (l ? t.contentWindow.innerHeight : f.top + f.height) - t.boundingClientRect.top - t.height / 2), a)(b = t.helper.classList).add.apply(b, m(a.split(" ")));
                            t.listenerNode = e.touches ? u : t.contentWindow, p.events.move.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                            }), t.setState({
                                sorting: !0,
                                sortingIndex: h
                            }), c && c({
                                node: u,
                                index: h,
                                collection: d
                            }, e)
                        }
                    }, t.handleSortMove = function(e) {
                        var n = t.props.onSortMove;
                        e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                    }, t.handleSortEnd = function(e) {
                        var n = t.props,
                            r = n.hideSortableGhost,
                            i = n.onSortEnd,
                            o = t.manager.active.collection;
                        t.listenerNode && (p.events.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                        }), p.events.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                        })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                        for (var a = t.manager.refs[o], s = 0, c = a.length; s < c; s++) {
                            var l = a[s],
                                u = l.node;
                            l.edgeOffset = null, u.style[p.vendorPrefix + "Transform"] = "", u.style[p.vendorPrefix + "TransitionDuration"] = ""
                        }
                        clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                            sorting: !1,
                            sortingIndex: null
                        }), "function" == typeof i && i({
                            oldIndex: t.index,
                            newIndex: t.newIndex,
                            collection: o
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
                            i = {
                                x: 10,
                                y: 10
                            };
                        e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, r.y = i.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, r.x = i.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, r.y = i.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, r.x = i.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
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
                    }, (0, u.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
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
                            i = this.props.contentWindow || window;
                        this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, l.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = r ? this.document.body : this.container, this.contentWindow = "function" == typeof i ? i() : i;
                        var o = function(t) {
                            e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                return e.container.addEventListener(n, e.events[t], !1)
                            })
                        };
                        for (var a in this.events) o(a)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this,
                            t = function(t) {
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
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
                        Array.isArray(e) || (e = [e, e]), (0, u.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                        var t = e,
                            n = i(t, 2),
                            r = n[0],
                            o = n[1];
                        return [this.getLockPixelOffset(r), this.getLockPixelOffset(o)]
                    }
                }, {
                    key: "getLockPixelOffset",
                    value: function(e) {
                        var t = e,
                            n = e,
                            r = "px";
                        if ("string" == typeof e) {
                            var i = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                            (0, u.default)(null !== i, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), r = i[1]
                        }
                        return (0, u.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === r && (t = t * this.width / 100, n = n * this.height / 100), {
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
                            o = this.getOffset(e),
                            a = {
                                x: o.x - this.initialOffset.x,
                                y: o.y - this.initialOffset.y
                            };
                        if (a.y -= window.pageYOffset - this.initialWindowScroll.top, a.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = a, r) {
                            var s = this.getLockPixelOffsets(),
                                c = i(s, 2),
                                l = c[0],
                                u = c[1],
                                d = {
                                    x: this.width / 2 - l.x,
                                    y: this.height / 2 - l.y
                                },
                                h = {
                                    x: this.width / 2 - u.x,
                                    y: this.height / 2 - u.y
                                };
                            a.x = (0, p.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - h.x, a.x), a.y = (0, p.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - h.y, a.y)
                        }
                        "x" === n ? a.y = 0 : "y" === n && (a.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + a.x + "px," + a.y + "px, 0)"
                    }
                }, {
                    key: "animateNodes",
                    value: function() {
                        var e = this.props,
                            t = e.transitionDuration,
                            n = e.hideSortableGhost,
                            r = this.manager.getOrderedRefs(),
                            i = {
                                left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                top: this.scrollContainer.scrollTop - this.initialScroll.top
                            },
                            o = {
                                left: this.offsetEdge.left + this.translate.x + i.left,
                                top: this.offsetEdge.top + this.translate.y + i.top
                            },
                            a = {
                                top: window.pageYOffset - this.initialWindowScroll.top,
                                left: window.pageXOffset - this.initialWindowScroll.left
                            };
                        this.newIndex = null;
                        for (var s = 0, c = r.length; s < c; s++) {
                            var l = r[s].node,
                                u = l.sortableInfo.index,
                                d = l.offsetWidth,
                                h = l.offsetHeight,
                                m = {
                                    width: this.width > d ? d / 2 : this.width / 2,
                                    height: this.height > h ? h / 2 : this.height / 2
                                },
                                g = {
                                    x: 0,
                                    y: 0
                                },
                                f = r[s].edgeOffset;
                            f || (r[s].edgeOffset = f = this.getEdgeOffset(l));
                            var v = s < r.length - 1 && r[s + 1],
                                b = s > 0 && r[s - 1];
                            v && !v.edgeOffset && (v.edgeOffset = this.getEdgeOffset(v.node)), u !== this.index ? (t && (l.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? u < this.index && (o.left + a.left - m.width <= f.left && o.top + a.top <= f.top + m.height || o.top + a.top + m.height <= f.top) ? (g.x = this.width + this.marginOffset.x, f.left + g.x > this.containerBoundingRect.width - m.width && (g.x = v.edgeOffset.left - f.left, g.y = v.edgeOffset.top - f.top), null === this.newIndex && (this.newIndex = u)) : u > this.index && (o.left + a.left + m.width >= f.left && o.top + a.top + m.height >= f.top || o.top + a.top + m.height >= f.top + h) && (g.x = -(this.width + this.marginOffset.x), f.left + g.x < this.containerBoundingRect.left + m.width && (g.x = b.edgeOffset.left - f.left, g.y = b.edgeOffset.top - f.top), this.newIndex = u) : u > this.index && o.left + a.left + m.width >= f.left ? (g.x = -(this.width + this.marginOffset.x), this.newIndex = u) : u < this.index && o.left + a.left <= f.left + m.width && (g.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = u)) : this.axis.y && (u > this.index && o.top + a.top + m.height >= f.top ? (g.y = -(this.height + this.marginOffset.y), this.newIndex = u) : u < this.index && o.top + a.top <= f.top + m.height && (g.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = u))), l.style[p.vendorPrefix + "Transform"] = "translate3d(" + g.x + "px," + g.y + "px,0)") : n && (this.sortableGhost = l, l.style.visibility = "hidden", l.style.opacity = 0)
                        }
                        null == this.newIndex && (this.newIndex = this.index)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, u.default)(h.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = h.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, r({
                            ref: t
                        }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                    }
                }]), n
            }(a.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
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
                axis: c.default.oneOf(["x", "y", "xy"]),
                distance: c.default.number,
                lockAxis: c.default.string,
                helperClass: c.default.string,
                transitionDuration: c.default.number,
                contentWindow: c.default.any,
                onSortStart: c.default.func,
                onSortMove: c.default.func,
                onSortEnd: c.default.func,
                shouldCancelStart: c.default.func,
                pressDelay: c.default.number,
                useDragHandle: c.default.bool,
                useWindowAsScrollContainer: c.default.bool,
                hideSortableGhost: c.default.bool,
                lockToContainerEdges: c.default.bool,
                lockOffset: c.default.oneOfType([c.default.number, c.default.string, c.default.arrayOf(c.default.oneOfType([c.default.number, c.default.string]))]),
                getContainer: c.default.func,
                getHelperDimensions: c.default.func
            }, t.childContextTypes = {
                manager: c.default.object.isRequired
            }, n
        };
        var a = n("GiK3"),
            s = h(a),
            c = h(n("qUKr")),
            l = n("O27J"),
            u = h(n("crWv")),
            d = h(n("xKuy")),
            p = n("Vgej");

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function m(e) {
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
    "Pd+R": function(e, t) {},
    Q6se: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TwoFactorAuthenticationSetting_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isGlobalMod"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasTwoFactorEnabled"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 162
            }
        };
        n.loc.source = {
            body: "query TwoFactorAuthenticationSetting_CurrentUser {\ncurrentUser {\nid\nisEmailVerified\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\nsettings {\nhasTwoFactorEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    QG23: function(e, t, n) {
        var r = n("w1Jz"),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return r ? void 0 !== t[e] : i.call(t, e)
        }
    },
    QQy1: function(e, t, n) {
        var r = n("mG6l"),
            i = n("SCwa"),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        e.exports = function(e, t) {
            if (r(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t)
        }
    },
    QRuM: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            o = n("GiK3"),
            a = n("6sO2");
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(r || (r = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.b.get(this.props.name, r.Off);
                    return e === r.On || e === r.StaffOnly && this.props.isStaff ? this.props.children : null
                }, t
            }(o.Component),
            c = s;
        n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        })
    },
    Qe41: function(e, t) {
        e.exports = function(e) {
            var t = "rgb";
            return 4 === e.length && (t += "a"), e[0] = Math.round(e[0]), e[1] = Math.round(e[1]), e[2] = Math.round(e[2]), t + "(" + e.join(",") + ")"
        }
    },
    QxUn: function(e, t, n) {
        var r = n("w1Jz"),
            i = "__lodash_hash_undefined__";
        e.exports = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
        }
    },
    RC0U: function(e, t) {},
    ROCN: function(e, t, n) {
        var r = n("idL5"),
            i = 500;
        e.exports = function(e) {
            var t = r(e, function(e) {
                    return n.size === i && n.clear(), e
                }),
                n = t.cache;
            return t
        }
    },
    RPon: function(e, t, n) {
        var r = n("a4Db"),
            i = n("II0X");

        function o(e, t) {
            switch (e = parseFloat(e), t) {
                case 0:
                    return i(e, 0, 360);
                case 1:
                case 2:
                    return i(e, 0, 100);
                case 3:
                    return i(e, 0, 1)
            }
        }
        e.exports = function(e) {
            return r(e).map(o)
        }
    },
    Ro3v: function(e, t, n) {
        var r = n("0e1M"),
            i = n("Czj7");
        e.exports = function(e, t) {
            var n = -1,
                o = i(e) ? Array(e.length) : [];
            return r(e, function(e, r, i) {
                o[++n] = t(e, r, i)
            }), o
        }
    },
    SCwa: function(e, t, n) {
        var r = n("43dD"),
            i = n("VGcK"),
            o = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || i(e) && r(e) == o
        }
    },
    SVcC: function(e, t, n) {
        var r = n("KYFq"),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        e.exports = function(e) {
            return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    ScRf: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_UpdateChatColor"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdateChatColorInput"
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
                            value: "updateChatColor"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatColor"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 117
            }
        };
        n.loc.source = {
            body: "mutation Chat_UpdateChatColor($input: UpdateChatColorInput!){\nupdateChatColor(input: $input) {\nuser {\nchatColor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    SjFU: function(e, t, n) {
        var r = n("+cPc"),
            i = n("Fbrx"),
            o = n("F3kA"),
            a = n("mG6l"),
            s = n("JYjH");
        e.exports = function(e) {
            return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? i(e[0], e[1]) : r(e) : s(e)
        }
    },
    TbkX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BrowserPushNotifications_AddBrowserPushSubscription"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "AddBrowserPushSubscriptionInput"
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
                            value: "addBrowserPushSubscription"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "browserPushSubscriptionID"
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
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation BrowserPushNotifications_AddBrowserPushSubscription($input: AddBrowserPushSubscriptionInput!) {\naddBrowserPushSubscription(input: $input) {\nbrowserPushSubscriptionID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    TubT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PostSubscriptionsToggle"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "primeSettings"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSubCreditChatNotificationEnabled"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 108
            }
        };
        n.loc.source = {
            body: "query PostSubscriptionsToggle {\ncurrentUser {\nid\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U2kw: function(e, t, n) {
        var r = n("43dD"),
            i = n("kl/u"),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            s = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = function(e) {
            if (!i(e)) return !1;
            var t = r(e);
            return t == a || t == s || t == o || t == c
        }
    },
    UAbV: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_XboxOneConnection"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "xb1",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 102
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_XboxOneConnection {\ncurrentUser {\nid\nssoLinks(app: "xb1") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UD8e: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateBroadcastSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdateBroadcastSettingsInput"
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
                            value: "updateBroadcastSettings"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "broadcastSettings"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isMature"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 152
            }
        };
        n.loc.source = {
            body: "mutation UpdateBroadcastSettings($input: UpdateBroadcastSettingsInput!) {\nupdateBroadcastSettings(input: $input) {\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UILf: function(e, t, n) {
        "use strict";
        var r, i = n("GWfv"),
            o = (r = i) && r.__esModule ? r : {
                default: r
            };
        e.exports = o.default
    },
    UIkr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserDirectoryHiddenSetting"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdateUserDirectoryHiddenInput"
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
                            value: "updateUserDirectoryHidden"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "settings"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isDirectoryHidden"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 174
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserDirectoryHiddenSetting($input: UpdateUserDirectoryHiddenInput!) {\nupdateUserDirectoryHidden(input: $input) {\nuser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "UT8+": function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
    },
    UbVv: function(e, t, n) {
        "use strict";
        t.c = function() {
            return window.Notification && "default" === window.Notification.permission
        }, t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    "V/Pj": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        a(n("GiK3"));
        var r = a(n("O27J")),
            i = a(n("KSGD")),
            o = a(n("MKJo"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {}
        var c = {
            propTypes: {
                onChange: i.default.func.isRequired,
                max: i.default.number
            },
            getDefaultProps: function() {
                return {
                    onChange: s,
                    max: 1
                }
            },
            getInitialState: function() {
                return {
                    active: !1
                }
            },
            componentDidMount: function() {
                this.document = r.default.findDOMNode(this).ownerDocument, this.rect = this.getBoundingRect()
            },
            startUpdates: function(e) {
                var t = this.document;
                t.addEventListener("mousemove", this.handleUpdate), t.addEventListener("touchmove", this.handleUpdate), t.addEventListener("mouseup", this.stopUpdates), t.addEventListener("touchend", this.stopUpdates), e.preventDefault();
                var n = this.getPosition(e),
                    r = n.x,
                    i = n.y;
                this.rect = this.getBoundingRect(), this.setState({
                    active: !0
                }), this.updatePosition(this.rect, r, i)
            },
            handleUpdate: function(e) {
                e.preventDefault();
                var t = this.getPosition(e),
                    n = t.x,
                    r = t.y;
                this.updatePosition(this.rect, n, r)
            },
            stopUpdates: function() {
                var e = this.document;
                e.removeEventListener("mousemove", this.handleUpdate), e.removeEventListener("touchmove", this.handleUpdate), e.removeEventListener("mouseup", this.stopUpdates), e.removeEventListener("touchend", this.stopUpdates), this.setState({
                    active: !1
                })
            },
            getPosition: function(e) {
                return e.touches && (e = e.touches[0]), {
                    x: e.clientX,
                    y: e.clientY
                }
            },
            getPercentageValue: function(e) {
                return e / this.props.max * 100 + "%"
            },
            getScaledValue: function(e) {
                return (0, o.default)(e, 0, 1) * this.props.max
            },
            getBoundingRect: function() {
                return r.default.findDOMNode(this).getBoundingClientRect()
            }
        };
        t.default = c
    },
    VEC5: function(e, t) {
        e.exports = function(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
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
                for (var i = n - r.length; 1 + i--;) r.push(void 0);
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
    WAou: function(e, t, n) {
        "use strict";
        var r = {};
        e.exports = r
    },
    WFpE: function(e, t, n) {
        var r = n("SCwa");
        e.exports = function(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    i = null === e,
                    o = e == e,
                    a = r(e),
                    s = void 0 !== t,
                    c = null === t,
                    l = t == t,
                    u = r(t);
                if (!c && !u && !a && e > t || a && s && l && !c && !u || i && s && l || !n && l || !o) return 1;
                if (!i && !a && !u && e < t || u && n && o && !i && !a || c && n && o || !s && o || !l) return -1
            }
            return 0
        }
    },
    WKFf: function(e, t) {},
    WYac: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_OtherConnectionsList"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "clientAuthorizations"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "clientID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "clientName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "createdAt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 125
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_OtherConnectionsList {\ncurrentUser {\nid\nclientAuthorizations {\nclientID\nclientName\ncreatedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WaOj: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_ChatRulesTextArea"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_ChatRulesTextArea {\ncurrentUser {\nid\nchatSettings {\nrules\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WlEI: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    WrTc: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            a = n("+0KR"),
            s = n("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.onClickCancel && (e = i.createElement(s._8, {
                        padding: {
                            left: 1
                        },
                        display: s.R.Inline
                    }, i.createElement(s.v, {
                        disabled: !(this.props.status === a.b.DirtyChanges || this.props.status === a.b.Error),
                        size: s.z.Large,
                        type: s.B.Text,
                        "data-test-selector": "cancel-button-selector",
                        onClick: this.props.onClickCancel
                    }, Object(o.d)("Cancel", "SaveSettingsFooter")))), i.createElement(s._8, null, i.createElement(a.a, {
                        status: this.props.status,
                        size: s.z.Large,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button",
                        "data-test-selector": "save-button-selector"
                    }, this.props.status === a.b.Error ? Object(o.d)("Failed to save settings. Try again.", "SaveButton") : Object(o.d)("Save Changes", "SaveSettingsFooter")), e)
                }, t
            }(i.Component);
        n.d(t, !1, function() {
            return "save-button-selector"
        }), n.d(t, !1, function() {
            return "cancel-button-selector"
        }), n.d(t, "a", function() {
            return c
        })
    },
    XCQF: function(e, t) {},
    XdSf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(i.a)(o, {
                props: function(t) {
                    return {
                        updateChatColorMutation: function(n) {
                            return r.__awaiter(e, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        color: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return [2, e.sent().data];
                                        case 2:
                                            throw new Error("Update chat color mutation is not ready")
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var r = n("TToO"),
            i = n("7vx8"),
            o = n("ScRf");
        n.n(o)
    },
    XhdA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserSubscriptionSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdateUserSubscriptionSettingsInput"
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
                            value: "updateUserSubscriptionSettings"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isGiftCountHidden"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 182
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserSubscriptionSettings($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\nisGiftCountHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Xj08: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnlinkAmazonConnectionStatusMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UnlinkAmazonConnectionInput"
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
                            value: "unlinkAmazonConnection"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "isSuccess"
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
                end: 139
            }
        };
        n.loc.source = {
            body: "mutation UnlinkAmazonConnectionStatusMutation($input: UnlinkAmazonConnectionInput!) {\nunlinkAmazonConnection(input: $input) {\nisSuccess\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Y4as: function(e, t) {},
    YNJY: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
    },
    YOyG: function(e, t, n) {
        var r = n("y5ks"),
            i = n("usEs"),
            o = n("skb1"),
            a = o && o.isTypedArray,
            s = a ? i(a) : r;
        e.exports = s
    },
    Zfct: function(e, t, n) {
        var r = n("oDbm"),
            i = n("Bh6c"),
            o = n("9nrn");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new r,
                map: new(o || i),
                string: new r
            }
        }
    },
    Zh2I: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            a = n("Hs3O"),
            s = n("CSlQ"),
            c = n("Tr7p"),
            l = n("Odds"),
            u = (n("cTXP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTryPrimeClick = function() {
                        Object(c.k)({
                            buttonPosition: t.props.tracking.position
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.getLink = function() {
                    if (this.props.externalURI) return this.props.externalURI;
                    var e = this.props.externalReftag || a.c;
                    return Object(a.d)(e, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return i.createElement(l._8, {
                        className: "prime-upsell-button__subsite",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(l.v, {
                        fullWidth: !0,
                        size: l.z.Large,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onTryPrimeClick
                    }, Object(o.d)("Try Twitch Prime", "TryPrimeButton")))
                }, t
            }(i.Component)),
            d = Object(s.d)("TryPrimeButton", {
                autoReportInteractive: !0
            })(u);
        n.d(t, "a", function() {
            return d
        })
    },
    "a/6q": function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            return r(this, e).has(e)
        }
    },
    a4Db: function(e, t) {
        var n = /-?\d+(\.\d+)?%?/g;
        e.exports = function(e) {
            return e.match(n)
        }
    },
    aIUG: function(e, t, n) {
        var r = n("mG6l"),
            i = n("QQy1"),
            o = n("D4QM"),
            a = n("kdNP");
        e.exports = function(e, t) {
            return r(e) ? e : i(e, t) ? [e] : o(a(e))
        }
    },
    am5H: function(e, t, n) {
        var r = n("kl/u");
        e.exports = function(e) {
            return e == e && !r(e)
        }
    },
    ar1V: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_BlockHyperlinksToggle"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockLinks"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_BlockHyperlinksToggle {\ncurrentUser {\nid\nchatSettings {\nblockLinks\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bHrU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_YoutubeConnection"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "youtube"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "channelURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 113
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_YoutubeConnection {\ncurrentUser {\nid\naccountConnections {\nyoutube {\nchannelURL\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bL9o: function(e, t, n) {
        var r = n("t3nn"),
            i = n("9nrn"),
            o = n("uS5W"),
            a = n("57tO"),
            s = n("FvmC"),
            c = n("43dD"),
            l = n("NuOc"),
            u = l(r),
            d = l(i),
            p = l(o),
            h = l(a),
            m = l(s),
            g = c;
        (r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || i && "[object Map]" != g(new i) || o && "[object Promise]" != g(o.resolve()) || a && "[object Set]" != g(new a) || s && "[object WeakMap]" != g(new s)) && (g = function(e) {
            var t = c(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? l(n) : "";
            if (r) switch (r) {
                case u:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case h:
                    return "[object Set]";
                case m:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = g
    },
    bX1P: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateChatSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdateChatSettingsInput"
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
                            value: "updateChatSettings"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "autoModLevel"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockLinks"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDelayMs"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isOptedOutOfGlobalBannedWordsList"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requireVerifiedAccount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 219
            }
        };
        n.loc.source = {
            body: "mutation UpdateChatSettings($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nautoModLevel\nblockLinks\nchatDelayMs\nisOptedOutOfGlobalBannedWordsList\nrequireVerifiedAccount\nrules\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cAbv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatColorPicker_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatColor"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
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
                end: 84
            }
        };
        n.loc.source = {
            body: "query ChatColorPicker_CurrentUser {\ncurrentUser {\nid\nlogin\nchatColor\ndisplayName\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cTXP: function(e, t) {},
    cXqt: function(e, t, n) {
        var r = n("ymQA"),
            i = n("o3xN"),
            o = n("2urJ");

        function a(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new r; ++t < n;) this.add(e[t])
        }
        a.prototype.add = a.prototype.push = i, a.prototype.has = o, e.exports = a
    },
    cjOD: function(e, t) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            return !!(t = null == t ? n : t) && ("number" == typeof e || r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    cpRO: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_PrimeEmotesSetPicker_UpdatePrimeSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdatePrimeSettingsInput"
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
                            value: "updatePrimeSettings"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "primeSettings"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primeEmoticons"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "currentSetName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 200
            }
        };
        n.loc.source = {
            body: "mutation SettingsPrimePage_PrimeEmotesSetPicker_UpdatePrimeSettings($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nprimeEmoticons {\ncurrentSetName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cumT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query SettingsPrimePage_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    deXC: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("gLfK"),
            a = n("Jo6h"),
            s = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? i.createElement(s._14, null) : i.createElement(s._8, null, i.createElement(s._51, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            name: t.props.name,
                            id: t.props.id
                        }), i.createElement(o.a, {
                            text: t.props.description,
                            extraText: t.props.extraDescription
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(a.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: s.X.Horizontal
                    }, this.renderBody())
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    eGfi: function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e, t) {
            var n = this.__data__,
                i = r(n, e);
            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
        }
    },
    eWqu: function(e, t, n) {
        var r = n("CTFd"),
            i = n("HMFB");
        e.exports = function(e, t) {
            return e && r(e, t, i)
        }
    },
    eXGG: function(e, t, n) {
        "use strict";
        var r = function(e) {};
        e.exports = function(e, t, n, i, o, a, s, c) {
            if (r(t), !e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, i, o, a, s, c],
                        d = 0;
                    (l = new Error(t.replace(/%s/g, function() {
                        return u[d++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    },
    enQx: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    eppJ: function(e, t) {},
    fVPD: function(e, t) {
        e.exports = function(e) {
            var t, n, r, i, o, a = e[0] / 360,
                s = e[1] / 100,
                c = e[2] / 100;
            if (0 == s) return [o = 255 * c, o, o];
            t = 2 * c - (n = c < .5 ? c * (1 + s) : c + s - c * s), i = [0, 0, 0];
            for (var l = 0; l < 3; l++)(r = a + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[l] = 255 * o;
            return i
        }
    },
    fXkM: function(e, t) {
        e.exports = function(e, t) {
            return null != e && t in Object(e)
        }
    },
    "g+dK": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetNotificationSetting"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SetNotificationSettingInput"
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
                            value: "setNotificationSetting"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "settingState"
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
                end: 155
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetNotificationSetting($input: SetNotificationSettingInput!) {\nsetNotificationSetting(input: $input) {\nsettingState\n}\n}",
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
            i = n("mG6l");
        e.exports = function(e, t, n) {
            var o = t(e);
            return i(e) ? o : r(o, n(e))
        }
    },
    gKqb: function(e, t, n) {
        var r = n("Bh6c"),
            i = n("2EIm"),
            o = n("UT8+"),
            a = n("9GW9"),
            s = n("PWbw"),
            c = n("M0TM");

        function l(e) {
            var t = this.__data__ = new r(e);
            this.size = t.size
        }
        l.prototype.clear = i, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = s, l.prototype.set = c, e.exports = l
    },
    gLfK: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds"),
            o = function(e) {
                return r.createElement(i._8, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(i.Q, {
                    color: i.K.Alt,
                    "data-a-target": e.textDataTarget
                }, e.text), e.extraText && r.createElement(i._8, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(i.Q, {
                    color: i.K.Alt2
                }, e.extraText)))
            };
        n.d(t, "a", function() {
            return o
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
    goep: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ProfileImageSetting"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "profileImageURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "300"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 94
            }
        };
        n.loc.source = {
            body: "query ProfileImageSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    h08i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_FacebookConnection"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "facebook"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "fullName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 113
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_FacebookConnection {\ncurrentUser {\nid\naccountConnections {\nfacebook {\nfullName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hPJb: function(e, t) {},
    hRPz: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsTurboPage"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 92
            }
        };
        n.loc.source = {
            body: "query SettingsTurboPage {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    i1sU: function(e, t) {},
    i4TT: function(e, t, n) {
        var r = n("VEC5"),
            i = n("SjFU"),
            o = n("gfva"),
            a = Math.max;
        e.exports = function(e, t, n) {
            var s = null == e ? 0 : e.length;
            if (!s) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(s + c, 0)), r(e, i(t, 3), c)
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
        var i = s(n("P/Wu")),
            o = s(n("yauq")),
            a = s(n("tslQ"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.SortableContainer = i.default, t.SortableElement = o.default, t.SortableHandle = a.default, t.sortableContainer = i.default, t.sortableElement = o.default, t.sortableHandle = a.default
    },
    iAlu: function(e, t, n) {
        var r = n("ndFl"),
            i = n("0zkw")(r);
        e.exports = i
    },
    iLYB: function(e, t, n) {
        var r = n("uIws"),
            i = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
        }
    },
    iLlo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_RokuConnection"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "roku",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_RokuConnection {\ncurrentUser {\nid\nssoLinks(app: "roku") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    iOZM: function(e, t) {},
    idL5: function(e, t, n) {
        var r = n("ymQA"),
            i = "Expected a function";

        function o(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(i);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o, a
            };
            return n.cache = new(o.Cache || r), n
        }
        o.Cache = r, e.exports = o
    },
    "j7X+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Security_HideDirectoryToggle"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isDirectoryHidden"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 97
            }
        };
        n.loc.source = {
            body: "query Settings_Security_HideDirectoryToggle {\ncurrentUser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jZb3: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Steam"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "steam"
                                        },
                                        arguments: [],
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Steam {\ncurrentUser {\nid\naccountConnections {\nsteam {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jZyZ: function(e, t) {
        e.exports = function(e, t) {
            return e.has(t)
        }
    },
    "jb/e": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Amazon"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasConnectedAmazon"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 98
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Amazon {\ncurrentUser {\nid\naccountConnections {\nhasConnectedAmazon\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jfv9: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdatePrimeSettings_PostSubscription"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdatePrimeSettingsInput"
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
                            value: "updatePrimeSettings"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "primeSettings"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSubCreditChatNotificationEnabled"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 179
            }
        };
        n.loc.source = {
            body: "mutation UpdatePrimeSettings_PostSubscription($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jtEV: function(e, t) {},
    k6Ms: function(e, t, n) {
        var r = n("1nXM"),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, a, s, c) {
            var l = n & i,
                u = r(e),
                d = u.length;
            if (d != r(t).length && !l) return !1;
            for (var p = d; p--;) {
                var h = u[p];
                if (!(l ? h in t : o.call(t, h))) return !1
            }
            var m = c.get(e);
            if (m && c.get(t)) return m == t;
            var g = !0;
            c.set(e, t), c.set(t, e);
            for (var f = l; ++p < d;) {
                var v = e[h = u[p]],
                    b = t[h];
                if (a) var y = l ? a(b, v, h, t, e, c) : a(v, b, h, e, t, c);
                if (!(void 0 === y ? v === b || s(v, b, n, a, c) : y)) {
                    g = !1;
                    break
                }
                f || (f = "constructor" == h)
            }
            if (g && !f) {
                var S = e.constructor,
                    k = t.constructor;
                S != k && "constructor" in e && "constructor" in t && !("function" == typeof S && S instanceof S && "function" == typeof k && k instanceof k) && (g = !1)
            }
            return c.delete(e), c.delete(t), g
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
            i = function() {
                try {
                    var e = r(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = i
    },
    "kl/u": function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
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
            i = n("H3TN"),
            o = n("mG6l"),
            a = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return o(e) || i(e) || !!(a && e && e[a])
        }
    },
    mG6l: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    mPnA: function(e, t, n) {
        (function(e) {
            var r = n("MygC"),
                i = n("WlEI"),
                o = "object" == typeof t && t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === o ? r.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || i;
            e.exports = c
        }).call(t, n("3IRH")(e))
    },
    mVHD: function(e, t) {},
    n8KP: function(e, t, n) {
        var r = n("am5H"),
            i = n("HMFB");
        e.exports = function(e) {
            for (var t = i(e), n = t.length; n--;) {
                var o = t[n],
                    a = e[o];
                t[n] = [o, a, r(a)]
            }
            return t
        }
    },
    nVrf: function(e, t) {},
    ndFl: function(e, t, n) {
        var r = n("NSoo"),
            i = n("kjxi"),
            o = n("F3kA"),
            a = i ? function(e, t) {
                return i(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(t),
                    writable: !0
                })
            } : o;
        e.exports = a
    },
    nq6q: function(e, t) {},
    nqey: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelChat_BannedChatters"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bannedUsers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannedAt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannedUser"
                                        },
                                        arguments: [],
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "modUser"
                                        },
                                        arguments: [],
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 140
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelChat_BannedChatters {\ncurrentUser {\nid\nbannedUsers {\nbannedAt\nbannedUser {\nid\nlogin\n}\nmodUser {\nid\ndisplayName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    o3xN: function(e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function(e) {
            return this.__data__.set(e, n), this
        }
    },
    o6O8: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            a = n("CSlQ"),
            s = n("Tr7p"),
            c = n("Zh2I"),
            l = n("Odds"),
            u = (n("nVrf"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(l._35, {
                        "data-test-target": "prime-banner-upsell",
                        className: "prime-banner-upsell",
                        padding: {
                            x: 5,
                            y: 2
                        },
                        borderBottom: !0
                    }, i.createElement(l.Y, null, i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    }), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(l._35, {
                        className: "prime-upsell__logo-container",
                        display: l.R.Flex,
                        padding: 2,
                        justifyContent: l._7.Center,
                        alignItems: l.c.Center,
                        textAlign: l._45.Center
                    }, i.createElement(l._24, {
                        type: l._26.Inherit,
                        asset: l._25.LogoTwitchPrime,
                        width: 330,
                        height: 150
                    }))), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(l._35, {
                        display: l.R.Flex,
                        justifyContent: l._7.Center,
                        alignItems: l.c.Center,
                        textAlign: l._45.Center,
                        padding: 2
                    }, i.createElement(l._8, {
                        alignSelf: l.d.Center,
                        className: "prime-upsell__msg-container"
                    }, i.createElement(l.Q, {
                        type: l._49.P,
                        fontSize: l.V.Size4,
                        bold: !0
                    }, Object(o.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")), i.createElement(c.a, {
                        externalReftag: this.props.externalReftag,
                        tracking: {
                            position: s.a.CenterBanner
                        }
                    }), i.createElement(l.Q, {
                        type: l._49.P,
                        fontSize: l.V.Size5
                    }, Object(o.d)("Powered by Amazon Prime", "PrimeUpsell")), i.createElement(l.N, {
                        src: "https://m.media-amazon.com/images/G/01/sm/twitchtv/assets/images/amazon_logo_SPOT_W_mono_2x.png",
                        alt: "Amazon Prime Logo"
                    })))), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    })))
                }, t
            }(i.Component)),
            d = Object(a.d)("TwitchPrimeBanner", {
                autoReportInteractive: !0
            })(u);
        n.d(t, !1, function() {
            return "prime-banner-upsell"
        }), n.d(t, "a", function() {
            return d
        })
    },
    oDbm: function(e, t, n) {
        var r = n("pgw8"),
            i = n("BaEo"),
            o = n("8xms"),
            a = n("QG23"),
            s = n("QxUn");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = s, e.exports = c
    },
    oR9V: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return c
        });
        var r, i = n("TToO"),
            o = n("GiK3"),
            a = (n.n(o), n("6sO2")),
            s = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(r || (r = {}));
        var c = function(e) {
            var t = e.status,
                n = e.children,
                c = i.__rest(e, ["status", "children"]),
                l = s.A.Default,
                u = s.B.Default,
                d = !1;
            return t === r.Working ? l = s.A.Loading : t === r.Success ? l = s.A.Success : t === r.Error ? u = s.B.Alert : t === r.NoChanges && (d = !0), n || (n = t === r.Error ? Object(a.d)("Error", "Save Button") : Object(a.d)("Save", "Save Button")), o.createElement(s.v, i.__assign({
                disabled: d,
                state: l,
                type: u
            }, c), n)
        }
    },
    oYVU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_MatureContent"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "broadcastSettings"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isMature"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 98
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_MatureContent {\ncurrentUser {\nid\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ocV2: function(e, t) {},
    "p+QF": function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    pLne: function(e, t, n) {
        var r = n("//bJ"),
            i = n("v6CG"),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            s = a ? function(e) {
                return null == e ? [] : (e = Object(e), r(a(e), function(t) {
                    return o.call(e, t)
                }))
            } : i;
        e.exports = s
    },
    pNd4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_PrimeEmotesSetPicker"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "primeSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "CurrentUserPrimeSettings"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "CurrentUserPrimeSettings"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PrimeSettings"
                    }
                },
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "primeEmoticons"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "currentSetName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "emoticonSets"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "PrimeEmoticonsSmiliesSet"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PrimeEmoticonsSmiliesSet"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SmiliesSet"
                    }
                },
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "emotes"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "EmoteSetEmote"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "EmoteSetEmote"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Emote"
                    }
                },
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "text"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 377
            }
        };
        n.loc.source = {
            body: "query SettingsPrimePage_PrimeEmotesSetPicker {\ncurrentUser {\nid\nprimeSettings {\n...CurrentUserPrimeSettings\n}\n}\n}\nfragment CurrentUserPrimeSettings on PrimeSettings {\nid\nprimeEmoticons {\ncurrentSetName\nemoticonSets {\n...PrimeEmoticonsSmiliesSet\n}\n}\n}\nfragment PrimeEmoticonsSmiliesSet on SmiliesSet {\nid\nemotes {\n...EmoteSetEmote\n}\n}\nfragment EmoteSetEmote on Emote {\nid\ntext\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    pkUp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Blizzard"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blizzard"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "battleTag"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "blizzardAccount"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "region"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "battleTag"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 144
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Blizzard {\ncurrentUser {\nid\naccountConnections {\nblizzard {\nbattleTag\n}\n}\nblizzardAccount {\nid\nregion\nbattleTag\n}\n}\n}",
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
    qu3O: function(e, t, n) {
        var r = n("cXqt"),
            i = n("BALR"),
            o = n("jZyZ"),
            a = 1,
            s = 2;
        e.exports = function(e, t, n, c, l, u) {
            var d = n & a,
                p = e.length,
                h = t.length;
            if (p != h && !(d && h > p)) return !1;
            var m = u.get(e);
            if (m && u.get(t)) return m == t;
            var g = -1,
                f = !0,
                v = n & s ? new r : void 0;
            for (u.set(e, t), u.set(t, e); ++g < p;) {
                var b = e[g],
                    y = t[g];
                if (c) var S = d ? c(y, b, g, t, e, u) : c(b, y, g, e, t, u);
                if (void 0 !== S) {
                    if (S) continue;
                    f = !1;
                    break
                }
                if (v) {
                    if (!i(t, function(e, t) {
                            if (!o(v, t) && (b === e || l(b, e, n, c, u))) return v.push(t)
                        })) {
                        f = !1;
                        break
                    }
                } else if (b !== y && !l(b, y, n, c, u)) {
                    f = !1;
                    break
                }
            }
            return u.delete(e), u.delete(t), f
        }
    },
    r0iv: function(e, t, n) {
        var r = n("p+QF"),
            i = n("Fy4Y"),
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!r(e)) return i(e);
            var t = [];
            for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    r6UO: function(e, t, n) {
        var r = n("a4Db"),
            i = n("II0X");

        function o(e, t) {
            return t < 3 ? -1 != e.indexOf("%") ? Math.round(255 * i(parseInt(e, 10), 0, 100) / 100) : i(parseInt(e, 10), 0, 255) : i(parseFloat(e), 0, 1)
        }
        e.exports = function(e) {
            return r(e).map(o)
        }
    },
    rUMz: function(e, t, n) {
        "use strict";
        var r = function(e) {};
        e.exports = function(e, t, n, i, o, a, s, c) {
            if (r(t), !e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, i, o, a, s, c],
                        d = 0;
                    (l = new Error(t.replace(/%s/g, function() {
                        return u[d++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    },
    rYDZ: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = Object(o.c)(i.o.store.getState());
            if (!n) return fetch(e, t);
            var s, c = t ? t.headers : {};
            if (Array.isArray(c)) {
                var l = (s = c.slice()).findIndex(function(e) {
                    return "Authorization" === e[0]
                });
                l >= 0 && s.splice(l, 1), s.push(["Authorization", a(n)])
            } else c instanceof Headers ? (s = new Headers(c)).set("Authorization", a(n)) : s = r.__assign({}, c, {
                Authorization: a(n)
            });
            return fetch(e, r.__assign({}, t, {
                headers: s
            }))
        };
        var r = n("TToO"),
            i = n("6sO2"),
            o = n("Aj/L");

        function a(e) {
            return "OAuth " + e.authToken
        }
    },
    "s/Z0": function(e, t, n) {
        var r = n("RPon"),
            i = n("McHv"),
            o = n("r6UO"),
            a = n("fVPD");
        var s = {
            "#": i,
            hsl: function(e) {
                var t = r(e),
                    n = a(t);
                return 4 === t.length && n.push(t[3]), n
            },
            rgb: o
        };

        function c(e) {
            for (var t in s)
                if (0 === e.indexOf(t)) return s[t](e)
        }
        c.rgb = o, c.hsl = r, c.hex = i, e.exports = c
    },
    sBY2: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    sVk6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserSubscriptionSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UpdateUserSubscriptionSettingsInput"
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
                            value: "updateUserSubscriptionSettings"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftsToFollowedChannelsOnly"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 192
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserSubscriptionSettings($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sa46: function(e, t, n) {
        var r = n("JGv7"),
            i = n("HMFi"),
            o = n("mG6l"),
            a = n("SCwa"),
            s = 1 / 0,
            c = r ? r.prototype : void 0,
            l = c ? c.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (o(t)) return i(t, e) + "";
            if (a(t)) return l ? l.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -s ? "-0" : n
        }
    },
    skb1: function(e, t, n) {
        (function(e) {
            var r = n("1tEs"),
                i = "object" == typeof t && t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                a = o && o.exports === i && r.process,
                s = function() {
                    try {
                        return a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        }).call(t, n("3IRH")(e))
    },
    st1H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Twitter"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "twitter"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "username"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 101
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Twitter {\ncurrentUser {\nid\naccountConnections {\ntwitter {\nusername\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    t3nn: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "DataView");
        e.exports = r
    },
    t4xU: function(e, t) {},
    tL94: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ProfileBannerSetting"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bannerImageURL"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ProfileBannerSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nbannerImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tZ8z: function(e, t, n) {
        "use strict";
        var r = n("sgb3");
        e.exports = {
            shouldComponentUpdate: function(e, t) {
                return !r(this.props, e) || !r(this.state, t)
            }
        }
    },
    tobj: function(e, t, n) {
        var r = n("43dD"),
            i = n("VGcK"),
            o = "[object Arguments]";
        e.exports = function(e) {
            return i(e) && r(e) == o
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
            i = function() {
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
            var t, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                }(n, t), i(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = (0, s.findDOMNode)(this);
                        e.sortableHandle = !0
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, c.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = u.withRef ? "wrappedInstance" : null;
                        return a.default.createElement(e, r({
                            ref: t
                        }, this.props))
                    }
                }]), n
            }(o.Component), t.displayName = (0, l.provideDisplayName)("sortableHandle", e), n
        };
        var o = n("GiK3"),
            a = u(o),
            s = n("O27J"),
            c = u(n("crWv")),
            l = n("Vgej");

        function u(e) {
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
    upQt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Xbox360Connection"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "xb360",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 104
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_Xbox360Connection {\ncurrentUser {\nid\nssoLinks(app: "xb360") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
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
    vEIR: function(e, t) {
        e.exports = function(e) {
            var t = e[0] / 60,
                n = e[1] / 100,
                r = e[2] / 100,
                i = Math.floor(t) % 6,
                o = t - Math.floor(t),
                a = 255 * r * (1 - n),
                s = 255 * r * (1 - n * o),
                c = 255 * r * (1 - n * (1 - o));
            switch (r *= 255, i) {
                case 0:
                    return [r, c, a];
                case 1:
                    return [s, r, a];
                case 2:
                    return [a, r, c];
                case 3:
                    return [a, s, r];
                case 4:
                    return [c, a, r];
                case 5:
                    return [r, a, s]
            }
        }
    },
    vgA0: function(e, t, n) {
        var r = n("II0X");

        function i(e) {
            var t = Math.round(r(e, 0, 255)).toString(16);
            return 1 == t.length ? "0" + t : t
        }
        e.exports = function(e) {
            var t = 4 === e.length ? i(255 * e[3]) : "";
            return "#" + i(e[0]) + i(e[1]) + i(e[2]) + t
        }
    },
    "vm+z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UploadVideoPlayerBanner_User"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "offlineImageURL"
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
                end: 98
            }
        };
        n.loc.source = {
            body: "query UploadVideoPlayerBanner_User($login: String!) {\nuser(login: $login) {\nid\nofflineImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vwDu: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            var t = r(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    vzFj: function(e, t) {
        e.exports = function(e) {
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
        }
    },
    w1Jz: function(e, t, n) {
        var r = n("NDrF")(Object, "create");
        e.exports = r
    },
    wSgH: function(e, t, n) {
        var r = n("Czj7");
        e.exports = function(e, t) {
            return function(n, i) {
                if (null == n) return n;
                if (!r(n)) return e(n, i);
                for (var o = n.length, a = t ? o : -1, s = Object(n);
                    (t ? a-- : ++a < o) && !1 !== i(s[a], a, s););
                return n
            }
        }
    },
    wVoL: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e, t) {
            var n = r(this, e),
                i = n.size;
            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
        }
    },
    woYr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_EmailVerificationToggle"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requireVerifiedAccount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 114
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_EmailVerificationToggle {\ncurrentUser {\nid\nchatSettings {\nrequireVerifiedAccount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wqO5: function(e, t, n) {
        "use strict";
        var r = n("BEQ0"),
            i = n("WAou"),
            o = n("rUMz"),
            a = "mixins";
        e.exports = function(e, t, n) {
            var s = [],
                c = {
                    mixins: "DEFINE_MANY",
                    statics: "DEFINE_MANY",
                    propTypes: "DEFINE_MANY",
                    contextTypes: "DEFINE_MANY",
                    childContextTypes: "DEFINE_MANY",
                    getDefaultProps: "DEFINE_MANY_MERGED",
                    getInitialState: "DEFINE_MANY_MERGED",
                    getChildContext: "DEFINE_MANY_MERGED",
                    render: "DEFINE_ONCE",
                    componentWillMount: "DEFINE_MANY",
                    componentDidMount: "DEFINE_MANY",
                    componentWillReceiveProps: "DEFINE_MANY",
                    shouldComponentUpdate: "DEFINE_ONCE",
                    componentWillUpdate: "DEFINE_MANY",
                    componentDidUpdate: "DEFINE_MANY",
                    componentWillUnmount: "DEFINE_MANY",
                    UNSAFE_componentWillMount: "DEFINE_MANY",
                    UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                    UNSAFE_componentWillUpdate: "DEFINE_MANY",
                    updateComponent: "OVERRIDE_BASE"
                },
                l = {
                    getDerivedStateFromProps: "DEFINE_MANY_MERGED"
                },
                u = {
                    displayName: function(e, t) {
                        e.displayName = t
                    },
                    mixins: function(e, t) {
                        if (t)
                            for (var n = 0; n < t.length; n++) p(e, t[n])
                    },
                    childContextTypes: function(e, t) {
                        e.childContextTypes = r({}, e.childContextTypes, t)
                    },
                    contextTypes: function(e, t) {
                        e.contextTypes = r({}, e.contextTypes, t)
                    },
                    getDefaultProps: function(e, t) {
                        e.getDefaultProps ? e.getDefaultProps = m(e.getDefaultProps, t) : e.getDefaultProps = t
                    },
                    propTypes: function(e, t) {
                        e.propTypes = r({}, e.propTypes, t)
                    },
                    statics: function(e, t) {
                        ! function(e, t) {
                            if (t)
                                for (var n in t) {
                                    var r = t[n];
                                    if (t.hasOwnProperty(n)) {
                                        var i = n in u;
                                        o(!i, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                                        var a = n in e;
                                        if (a) {
                                            var s = l.hasOwnProperty(n) ? l[n] : null;
                                            return o("DEFINE_MANY_MERGED" === s, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = m(e[n], r))
                                        }
                                        e[n] = r
                                    }
                                }
                        }(e, t)
                    },
                    autobind: function() {}
                };

            function d(e, t) {
                var n = c.hasOwnProperty(t) ? c[t] : null;
                y.hasOwnProperty(t) && o("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && o("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
            }

            function p(e, n) {
                if (n) {
                    o("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), o(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var r = e.prototype,
                        i = r.__reactAutoBindPairs;
                    for (var s in n.hasOwnProperty(a) && u.mixins(e, n.mixins), n)
                        if (n.hasOwnProperty(s) && s !== a) {
                            var l = n[s],
                                p = r.hasOwnProperty(s);
                            if (d(p, s), u.hasOwnProperty(s)) u[s](e, l);
                            else {
                                var h = c.hasOwnProperty(s);
                                if ("function" != typeof l || h || p || !1 === n.autobind)
                                    if (p) {
                                        var f = c[s];
                                        o(h && ("DEFINE_MANY_MERGED" === f || "DEFINE_MANY" === f), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", f, s), "DEFINE_MANY_MERGED" === f ? r[s] = m(r[s], l) : "DEFINE_MANY" === f && (r[s] = g(r[s], l))
                                    } else r[s] = l;
                                else i.push(s, l), r[s] = l
                            }
                        }
                }
            }

            function h(e, t) {
                for (var n in o(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(n) && (o(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
                return e
            }

            function m(e, t) {
                return function() {
                    var n = e.apply(this, arguments),
                        r = t.apply(this, arguments);
                    if (null == n) return r;
                    if (null == r) return n;
                    var i = {};
                    return h(i, n), h(i, r), i
                }
            }

            function g(e, t) {
                return function() {
                    e.apply(this, arguments), t.apply(this, arguments)
                }
            }

            function f(e, t) {
                var n = t.bind(e);
                return n
            }
            var v = {
                    componentDidMount: function() {
                        this.__isMounted = !0
                    }
                },
                b = {
                    componentWillUnmount: function() {
                        this.__isMounted = !1
                    }
                },
                y = {
                    replaceState: function(e, t) {
                        this.updater.enqueueReplaceState(this, e, t)
                    },
                    isMounted: function() {
                        return !!this.__isMounted
                    }
                },
                S = function() {};
            return r(S.prototype, e.prototype, y),
                function(e) {
                    var t = function(e, r, a) {
                        this.__reactAutoBindPairs.length && function(e) {
                            for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                                var r = t[n],
                                    i = t[n + 1];
                                e[r] = f(e, i)
                            }
                        }(this), this.props = e, this.context = r, this.refs = i, this.updater = a || n, this.state = null;
                        var s = this.getInitialState ? this.getInitialState() : null;
                        o("object" == typeof s && !Array.isArray(s), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = s
                    };
                    for (var r in t.prototype = new S, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(p.bind(null, t)), p(t, v), p(t, e), p(t, b), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), o(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), c) t.prototype[r] || (t.prototype[r] = null);
                    return t
                }
        }
    },
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
            i = a(n("9c95")),
            o = a(n("J0u9"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function() {
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
                    return (0, i.default)(this.refs[this.active.collection], function(t) {
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
                    return (0, o.default)(this.refs[e], function(e) {
                        return e.node.sortableInfo.index
                    })
                }
            }]), e
        }();
        t.default = s
    },
    xkKI: function(e, t, n) {
        "use strict";
        var r = n("+bIS"),
            i = n("eXGG"),
            o = n("0pjK");
        e.exports = function() {
            function e(e, t, n, r, a, s) {
                s !== o && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
            i = n("2iRz"),
            o = n("VGcK"),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
            return o(e) && i(e.length) && !!a[r(e)]
        }
    },
    yHYq: function(e, t) {},
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
            i = function() {
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
                }(n, t), i(n, [{
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
                        var n = this.node = (0, c.findDOMNode)(this);
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
                        return (0, l.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = d.withRef ? "wrappedInstance" : null;
                        return a.default.createElement(e, r({
                            ref: t
                        }, (0, u.omit)(this.props, "collection", "disabled", "index")))
                    }
                }]), n
            }(o.Component), t.displayName = (0, u.provideDisplayName)("sortableElement", e), t.contextTypes = {
                manager: s.default.object.isRequired
            }, t.propTypes = {
                index: s.default.number.isRequired,
                collection: s.default.oneOfType([s.default.number, s.default.string]),
                disabled: s.default.bool
            }, t.defaultProps = {
                collection: 0
            }, n
        };
        var o = n("GiK3"),
            a = d(o),
            s = d(n("qUKr")),
            c = n("O27J"),
            l = d(n("crWv")),
            u = n("Vgej");

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    ymQA: function(e, t, n) {
        var r = n("Zfct"),
            i = n("vwDu"),
            o = n("Bxt2"),
            a = n("a/6q"),
            s = n("wVoL");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = s, e.exports = c
    },
    z15t: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = l(n("GiK3")),
            i = l(n("DT0+")),
            o = l(n("KSGD")),
            a = l(n("tZ8z")),
            s = l(n("HW6M")),
            c = l(n("V/Pj"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, i.default)({
            mixins: [c.default, a.default],
            propTypes: {
                x: o.default.number.isRequired,
                y: o.default.number.isRequired,
                backgroundColor: o.default.string,
                className: o.default.string
            },
            getDefaultProps: function() {
                return {
                    x: 0,
                    y: 0,
                    backgroundColor: "transparent",
                    className: ""
                }
            },
            updatePosition: function(e, t, n) {
                var r = (t - e.left) / e.width,
                    i = (e.bottom - n) / e.height;
                this.props.onChange(this.getScaledValue(r), this.getScaledValue(i))
            },
            render: function() {
                var e = (0, s.default)("map", this.props.className, {
                        active: this.state.active
                    }),
                    t = this.props.backgroundColor;
                return r.default.createElement("div", {
                    className: e,
                    onMouseDown: this.startUpdates,
                    onTouchStart: this.startUpdates
                }, r.default.createElement("div", {
                    className: "background",
                    style: {
                        backgroundColor: t
                    }
                }), r.default.createElement("div", {
                    className: "pointer",
                    style: {
                        left: this.getPercentageValue(this.props.x),
                        bottom: this.getPercentageValue(this.props.y)
                    }
                }))
            }
        });
        t.default = u
    },
    zN4B: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, r) {
                n[++t] = [r, e]
            }), n
        }
    },
    zpQV: function(e, t) {},
    zwRn: function(e, t) {
        e.exports = function(e) {
            var t, n, r = e[0],
                i = e[1],
                o = e[2],
                a = Math.min(r, i, o),
                s = Math.max(r, i, o),
                c = s - a;
            return n = 0 == s ? 0 : c / s * 1e3 / 10, s == a ? t = 0 : r == s ? t = (i - o) / c : i == s ? t = 2 + (o - r) / c : o == s && (t = 4 + (r - i) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
        }
    }
});
//# sourceMappingURL=pages.settings-1365409c9746e98c913b2bf49832328b.js.map