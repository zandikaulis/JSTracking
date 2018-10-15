(window.webpackJsonp = window.webpackJsonp || []).push([
    [101], {
        "+lD8": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("Ue10"),
                i = (n("j/Uj"), function() {
                    return a.createElement(r.Wa, {
                        className: "top-stats-chart-loading",
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: r.Va.Center,
                        fullWidth: !0
                    }, a.createElement(r.Ya, {
                        fillContent: !0
                    }))
                });
            n.d(t, "a", function() {
                return i
            })
        },
        "/BQy": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_CampaignSummary"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "campaignID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                        value: "company"
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
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "campaignID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "campaignID"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "devBountySummary"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
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
                    end: 281
                }
            };
            a.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/campaign-summary.gql"\nquery DevBountyBoardDashboard_CampaignSummary($campaignID: ID!) {\ncurrentUser {\nid\ncompany {\nid\nbountyCampaigns(campaignID: $campaignID) {\nedges {\ncursor\nnode {\n...devBountySummary\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("tnWT").definitions)), e.exports = a
        },
        "/LlH": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoard_CompanyName"
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
                                        value: "company"
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
                                                value: "name"
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
                    end: 75
                }
            };
            n.loc.source = {
                body: "query DevBountyBoard_CompanyName {\ncurrentUser {\nid\ncompany {\nid\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "0LAi": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("MXoD"),
                o = n("2xye"),
                s = n("Ue10"),
                l = function(e) {
                    var t = e.tags;
                    return void 0 !== e.tagNumberLimit && e.tagNumberLimit > 0 && (t = t.slice(0, e.tagNumberLimit)), r.createElement(s.Wa, {
                        display: s.X.InlineBlock,
                        fullWidth: !0
                    }, t.map(function(t) {
                        var n = a.__assign({}, e.linkTo) || {};
                        e.linkPath && (n.pathname = e.linkPath), n.pathname && (n.pathname = n.pathname.replace(":tagID", t.id));
                        return r.createElement(s.yb, {
                            key: t.id,
                            fontSize: s.Ba.Size7,
                            display: s.X.InlineBlock,
                            margin: {
                                right: .5,
                                bottom: .5
                            }
                        }, r.createElement(s.Hb, {
                            label: t.localizedName,
                            type: e.style,
                            linkTo: Object(i.a)({
                                content: o.PageviewContent.Tag
                            }, n),
                            onClick: function() {
                                e.callback && e.callback(t)
                            },
                            "data-a-target": t.localizedName
                        }))
                    }))
                };
            n.d(t, "a", function() {
                return l
            })
        },
        "0SKf": function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "h", function() {
                return l
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "c", function() {
                return c
            });
            var a, r = 500,
                i = 5e3,
                o = 15e4,
                s = 5,
                l = 4;
            ! function(e) {
                e.BountiesCompleted = "completedBountyCount", e.Viewers = "totalViewerCount", e.Viewers2m = "twoMinuteViewerCount", e.MinutesWatched = "minutesWatched"
            }(a || (a = {}));
            var c, u = {
                series: [],
                total: 0,
                interval: {
                    start: new Date,
                    end: new Date
                }
            };
            ! function(e) {
                e.BountiesExpanded = "expandedBountyCount", e.BountiesAccepted = "claimedBountyCount", e.BountiesCompleted = "completedBountyCount", e.BountiesTotal = "viewedBountyCount"
            }(c || (c = {}))
        },
        "25n4": function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return p
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "e", function() {
                return E
            });
            var a, r, i = n("mrSG"),
                o = n("17x9"),
                s = n("q1tI"),
                l = n("rEFn");
            ! function(e) {
                e.UI = "ui", e.Result = "result"
            }(r || (r = {}));
            var c = ((a = {})[l.b.Game] = "game", a[l.b.Live] = "channelID", a[l.b.Channel] = "channelID", a[l.b.VOD] = "vodID", a[l.b.Tag] = "tagID", a),
                u = {
                    searchSessionID: "",
                    queryID: "",
                    term: "",
                    videoOptions: void 0
                };

            function d(e) {
                return function(t, n) {
                    var a = t.itemRow,
                        r = t.itemIndex,
                        o = t.linkTo,
                        s = n ? n() : u,
                        d = s.searchSessionID,
                        m = s.queryID,
                        p = s.term,
                        f = s.videoOptions;
                    return i.__assign({}, o && {
                        linkTo: function(e, t, n) {
                            var a = {};
                            return a = "string" == typeof e ? {
                                pathname: e
                            } : e, i.__assign({}, a, {
                                state: i.__assign({}, a.state, {
                                    search_session_id: t,
                                    search_query_id: n
                                })
                            })
                        }(o, d, m)
                    }, {
                        trackImpression: function(t) {
                            var n;
                            return Object(l.h)(d, m, p, ((n = {
                                itemRow: a,
                                itemIndex: r,
                                contentType: e,
                                subSection: e
                            })[c[e]] = t, n.vodFilter = f && f.type, n.lengthFilter = f && f.length, n))
                        },
                        trackClick: function(t) {
                            var n;
                            return Object(l.g)(d, m, p, ((n = {
                                itemRow: a,
                                itemIndex: r,
                                contentType: e,
                                subSection: e
                            })[c[e]] = t, n.vodFilter = f && f.type, n.lengthFilter = f && f.length, n))
                        }
                    })
                }
            }

            function m(e, t) {
                var n = e.itemRow,
                    a = e.itemIndex;
                t || (t = function() {
                    return u
                });
                var r = t(),
                    i = r.searchSessionID,
                    o = r.queryID,
                    s = r.term,
                    c = r.videoOptions;
                return {
                    trackImpression: function(e, t) {
                        return Object(l.k)(i, o, s, {
                            videoOptions: c,
                            itemRow: n,
                            itemIndex: a,
                            buttonType: e,
                            searchIndex: t
                        })
                    },
                    trackClick: function(e, t) {
                        return Object(l.j)(i, o, s, {
                            videoOptions: c,
                            itemRow: n,
                            itemIndex: a,
                            buttonType: e,
                            searchIndex: t
                        })
                    }
                }
            }
            var p = function() {
                    return b(m)
                },
                f = function() {
                    return y(l.b.Live)
                },
                h = function() {
                    return y(l.b.Game)
                },
                g = function() {
                    return y(l.b.Channel)
                },
                E = function() {
                    return y(l.b.VOD)
                },
                y = function(e) {
                    return b(d(e))
                };

            function b(e) {
                return function(t) {
                    return function(n) {
                        function a() {
                            return null !== n && n.apply(this, arguments) || this
                        }
                        return i.__extends(a, n), a.prototype.render = function() {
                            return s.createElement(t, i.__assign({}, this.props, e(this.props, this.context.getSearchTrackingProps)))
                        }, a.contextTypes = {
                            getSearchTrackingProps: o.func
                        }, a
                    }(s.Component)
                }
            }
        },
        "2oH+": function(e, t, n) {
            (function(e, n) {
                var a = 200,
                    r = "__lodash_hash_undefined__",
                    i = 800,
                    o = 16,
                    s = 9007199254740991,
                    l = "[object Arguments]",
                    c = "[object AsyncFunction]",
                    u = "[object Function]",
                    d = "[object GeneratorFunction]",
                    m = "[object Null]",
                    p = "[object Object]",
                    f = "[object Proxy]",
                    h = "[object Undefined]",
                    g = /^\[object .+?Constructor\]$/,
                    E = /^(?:0|[1-9]\d*)$/,
                    y = {};
                y["[object Float32Array]"] = y["[object Float64Array]"] = y["[object Int8Array]"] = y["[object Int16Array]"] = y["[object Int32Array]"] = y["[object Uint8Array]"] = y["[object Uint8ClampedArray]"] = y["[object Uint16Array]"] = y["[object Uint32Array]"] = !0, y[l] = y["[object Array]"] = y["[object ArrayBuffer]"] = y["[object Boolean]"] = y["[object DataView]"] = y["[object Date]"] = y["[object Error]"] = y[u] = y["[object Map]"] = y["[object Number]"] = y[p] = y["[object RegExp]"] = y["[object Set]"] = y["[object String]"] = y["[object WeakMap]"] = !1;
                var b = "object" == typeof e && e && e.Object === Object && e,
                    v = "object" == typeof self && self && self.Object === Object && self,
                    O = b || v || Function("return this")(),
                    T = "object" == typeof t && t && !t.nodeType && t,
                    N = T && "object" == typeof n && n && !n.nodeType && n,
                    _ = N && N.exports === T,
                    S = _ && b.process,
                    I = function() {
                        try {
                            return S && S.binding && S.binding("util")
                        } catch (e) {}
                    }(),
                    A = I && I.isTypedArray;

                function D(e, t) {
                    return "__proto__" == t ? void 0 : e[t]
                }
                var C = Array.prototype,
                    R = Function.prototype,
                    k = Object.prototype,
                    B = O["__core-js_shared__"],
                    w = R.toString,
                    P = k.hasOwnProperty,
                    L = function() {
                        var e = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }(),
                    M = k.toString,
                    F = w.call(Object),
                    U = RegExp("^" + w.call(P).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    x = _ ? O.Buffer : void 0,
                    j = O.Symbol,
                    W = O.Uint8Array,
                    G = x ? x.allocUnsafe : void 0,
                    V = function(e, t) {
                        return function(n) {
                            return e(t(n))
                        }
                    }(Object.getPrototypeOf, Object),
                    H = Object.create,
                    Y = k.propertyIsEnumerable,
                    z = C.splice,
                    X = j ? j.toStringTag : void 0,
                    K = function() {
                        try {
                            var e = ye(Object, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {}
                    }(),
                    q = x ? x.isBuffer : void 0,
                    Q = Math.max,
                    Z = Date.now,
                    J = ye(O, "Map"),
                    $ = ye(Object, "create"),
                    ee = function() {
                        function e() {}
                        return function(t) {
                            if (!Ce(t)) return {};
                            if (H) return H(t);
                            e.prototype = t;
                            var n = new e;
                            return e.prototype = void 0, n
                        }
                    }();

                function te(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var a = e[t];
                        this.set(a[0], a[1])
                    }
                }

                function ne(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var a = e[t];
                        this.set(a[0], a[1])
                    }
                }

                function ae(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var a = e[t];
                        this.set(a[0], a[1])
                    }
                }

                function re(e) {
                    var t = this.__data__ = new ne(e);
                    this.size = t.size
                }

                function ie(e, t) {
                    var n = _e(e),
                        a = !n && Ne(e),
                        r = !n && !a && Ie(e),
                        i = !n && !a && !r && ke(e),
                        o = n || a || r || i,
                        s = o ? function(e, t) {
                            for (var n = -1, a = Array(e); ++n < e;) a[n] = t(n);
                            return a
                        }(e.length, String) : [],
                        l = s.length;
                    for (var c in e) !t && !P.call(e, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || be(c, l)) || s.push(c);
                    return s
                }

                function oe(e, t, n) {
                    (void 0 === n || Te(e[t], n)) && (void 0 !== n || t in e) || ce(e, t, n)
                }

                function se(e, t, n) {
                    var a = e[t];
                    P.call(e, t) && Te(a, n) && (void 0 !== n || t in e) || ce(e, t, n)
                }

                function le(e, t) {
                    for (var n = e.length; n--;)
                        if (Te(e[n][0], t)) return n;
                    return -1
                }

                function ce(e, t, n) {
                    "__proto__" == t && K ? K(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : e[t] = n
                }
                te.prototype.clear = function() {
                    this.__data__ = $ ? $(null) : {}, this.size = 0
                }, te.prototype.delete = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }, te.prototype.get = function(e) {
                    var t = this.__data__;
                    if ($) {
                        var n = t[e];
                        return n === r ? void 0 : n
                    }
                    return P.call(t, e) ? t[e] : void 0
                }, te.prototype.has = function(e) {
                    var t = this.__data__;
                    return $ ? void 0 !== t[e] : P.call(t, e)
                }, te.prototype.set = function(e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = $ && void 0 === t ? r : t, this
                }, ne.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, ne.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = le(t, e);
                    return !(n < 0 || (n == t.length - 1 ? t.pop() : z.call(t, n, 1), --this.size, 0))
                }, ne.prototype.get = function(e) {
                    var t = this.__data__,
                        n = le(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }, ne.prototype.has = function(e) {
                    return le(this.__data__, e) > -1
                }, ne.prototype.set = function(e, t) {
                    var n = this.__data__,
                        a = le(n, e);
                    return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this
                }, ae.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new te,
                        map: new(J || ne),
                        string: new te
                    }
                }, ae.prototype.delete = function(e) {
                    var t = Ee(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }, ae.prototype.get = function(e) {
                    return Ee(this, e).get(e)
                }, ae.prototype.has = function(e) {
                    return Ee(this, e).has(e)
                }, ae.prototype.set = function(e, t) {
                    var n = Ee(this, e),
                        a = n.size;
                    return n.set(e, t), this.size += n.size == a ? 0 : 1, this
                }, re.prototype.clear = function() {
                    this.__data__ = new ne, this.size = 0
                }, re.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = t.delete(e);
                    return this.size = t.size, n
                }, re.prototype.get = function(e) {
                    return this.__data__.get(e)
                }, re.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, re.prototype.set = function(e, t) {
                    var n = this.__data__;
                    if (n instanceof ne) {
                        var r = n.__data__;
                        if (!J || r.length < a - 1) return r.push([e, t]), this.size = ++n.size, this;
                        n = this.__data__ = new ae(r)
                    }
                    return n.set(e, t), this.size = n.size, this
                };
                var ue = function(e) {
                    return function(t, n, a) {
                        for (var r = -1, i = Object(t), o = a(t), s = o.length; s--;) {
                            var l = o[e ? s : ++r];
                            if (!1 === n(i[l], l, i)) break
                        }
                        return t
                    }
                }();

                function de(e) {
                    return null == e ? void 0 === e ? h : m : X && X in Object(e) ? function(e) {
                        var t = P.call(e, X),
                            n = e[X];
                        try {
                            e[X] = void 0;
                            var a = !0
                        } catch (e) {}
                        var r = M.call(e);
                        a && (t ? e[X] = n : delete e[X]);
                        return r
                    }(e) : function(e) {
                        return M.call(e)
                    }(e)
                }

                function me(e) {
                    return Re(e) && de(e) == l
                }

                function pe(e) {
                    return !(!Ce(e) || function(e) {
                        return !!L && L in e
                    }(e)) && (Ae(e) ? U : g).test(function(e) {
                        if (null != e) {
                            try {
                                return w.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }(e))
                }

                function fe(e) {
                    if (!Ce(e)) return function(e) {
                        var t = [];
                        if (null != e)
                            for (var n in Object(e)) t.push(n);
                        return t
                    }(e);
                    var t = ve(e),
                        n = [];
                    for (var a in e)("constructor" != a || !t && P.call(e, a)) && n.push(a);
                    return n
                }

                function he(e, t, n, a, r) {
                    e !== t && ue(t, function(i, o) {
                        if (Ce(i)) r || (r = new re),
                            function(e, t, n, a, r, i, o) {
                                var s = D(e, n),
                                    l = D(t, n),
                                    c = o.get(l);
                                if (c) return void oe(e, n, c);
                                var u = i ? i(s, l, n + "", e, t, o) : void 0,
                                    d = void 0 === u;
                                if (d) {
                                    var m = _e(l),
                                        f = !m && Ie(l),
                                        h = !m && !f && ke(l);
                                    u = l, m || f || h ? _e(s) ? u = s : ! function(e) {
                                        return Re(e) && Se(e)
                                    }(s) ? f ? (d = !1, u = function(e, t) {
                                        if (t) return e.slice();
                                        var n = e.length,
                                            a = G ? G(n) : new e.constructor(n);
                                        return e.copy(a), a
                                    }(l, !0)) : h ? (d = !1, u = function(e, t) {
                                        var n = t ? function(e) {
                                            var t = new e.constructor(e.byteLength);
                                            return new W(t).set(new W(e)), t
                                        }(e.buffer) : e.buffer;
                                        return new e.constructor(n, e.byteOffset, e.length)
                                    }(l, !0)) : u = [] : u = function(e, t) {
                                        var n = -1,
                                            a = e.length;
                                        t || (t = Array(a));
                                        for (; ++n < a;) t[n] = e[n];
                                        return t
                                    }(s) : function(e) {
                                        if (!Re(e) || de(e) != p) return !1;
                                        var t = V(e);
                                        if (null === t) return !0;
                                        var n = P.call(t, "constructor") && t.constructor;
                                        return "function" == typeof n && n instanceof n && w.call(n) == F
                                    }(l) || Ne(l) ? (u = s, Ne(s) ? u = function(e) {
                                        return function(e, t, n, a) {
                                            var r = !n;
                                            n || (n = {});
                                            var i = -1,
                                                o = t.length;
                                            for (; ++i < o;) {
                                                var s = t[i],
                                                    l = a ? a(n[s], e[s], s, n, e) : void 0;
                                                void 0 === l && (l = e[s]), r ? ce(n, s, l) : se(n, s, l)
                                            }
                                            return n
                                        }(e, Be(e))
                                    }(s) : (!Ce(s) || a && Ae(s)) && (u = function(e) {
                                        return "function" != typeof e.constructor || ve(e) ? {} : ee(V(e))
                                    }(l))) : d = !1
                                }
                                d && (o.set(l, u), r(u, l, a, i, o), o.delete(l));
                                oe(e, n, u)
                            }(e, t, o, n, he, a, r);
                        else {
                            var s = a ? a(D(e, o), i, o + "", e, t, r) : void 0;
                            void 0 === s && (s = i), oe(e, o, s)
                        }
                    }, Be)
                }

                function ge(e, t) {
                    return Oe(function(e, t, n) {
                        return t = Q(void 0 === t ? e.length - 1 : t, 0),
                            function() {
                                for (var a = arguments, r = -1, i = Q(a.length - t, 0), o = Array(i); ++r < i;) o[r] = a[t + r];
                                r = -1;
                                for (var s = Array(t + 1); ++r < t;) s[r] = a[r];
                                return s[t] = n(o),
                                    function(e, t, n) {
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
                                    }(e, this, s)
                            }
                    }(e, t, Pe), e + "")
                }

                function Ee(e, t) {
                    var n = e.__data__;
                    return function(e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                }

                function ye(e, t) {
                    var n = function(e, t) {
                        return null == e ? void 0 : e[t]
                    }(e, t);
                    return pe(n) ? n : void 0
                }

                function be(e, t) {
                    var n = typeof e;
                    return !!(t = null == t ? s : t) && ("number" == n || "symbol" != n && E.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function ve(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || k)
                }
                var Oe = function(e) {
                    var t = 0,
                        n = 0;
                    return function() {
                        var a = Z(),
                            r = o - (a - n);
                        if (n = a, r > 0) {
                            if (++t >= i) return arguments[0]
                        } else t = 0;
                        return e.apply(void 0, arguments)
                    }
                }(K ? function(e, t) {
                    return K(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: function(e) {
                            return function() {
                                return e
                            }
                        }(t),
                        writable: !0
                    })
                } : Pe);

                function Te(e, t) {
                    return e === t || e != e && t != t
                }
                var Ne = me(function() {
                        return arguments
                    }()) ? me : function(e) {
                        return Re(e) && P.call(e, "callee") && !Y.call(e, "callee")
                    },
                    _e = Array.isArray;

                function Se(e) {
                    return null != e && De(e.length) && !Ae(e)
                }
                var Ie = q || function() {
                    return !1
                };

                function Ae(e) {
                    if (!Ce(e)) return !1;
                    var t = de(e);
                    return t == u || t == d || t == c || t == f
                }

                function De(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s
                }

                function Ce(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function Re(e) {
                    return null != e && "object" == typeof e
                }
                var ke = A ? function(e) {
                    return function(t) {
                        return e(t)
                    }
                }(A) : function(e) {
                    return Re(e) && De(e.length) && !!y[de(e)]
                };

                function Be(e) {
                    return Se(e) ? ie(e, !0) : fe(e)
                }
                var we = function(e) {
                    return ge(function(t, n) {
                        var a = -1,
                            r = n.length,
                            i = r > 1 ? n[r - 1] : void 0,
                            o = r > 2 ? n[2] : void 0;
                        for (i = e.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && function(e, t, n) {
                                if (!Ce(n)) return !1;
                                var a = typeof t;
                                return !!("number" == a ? Se(n) && be(t, n.length) : "string" == a && t in n) && Te(n[t], e)
                            }(n[0], n[1], o) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t); ++a < r;) {
                            var s = n[a];
                            s && e(t, s, a, i)
                        }
                        return t
                    })
                }(function(e, t, n) {
                    he(e, t, n)
                });

                function Pe(e) {
                    return e
                }
                n.exports = we
            }).call(this, n("yLpj"), n("YuTi")(e))
        },
        "3W+h": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Communities = "/directory/communities", e.CreativeCommunities = "/directory/creative", e.Games = "/directory", e.DirectoryCategory = "/directory/:category?", e.DirectoryTag = "/directory/tags/:tagID", e.Popular = "/directory/all", e.PopularEncodedLanguage = "/directory/all/:encodedLanguage", e.PopularPlaystation = "/directory/all/ps4", e.PopularTag = "/directory/all/tags/:tagID", e.PopularXbox = "/directory/all/xbox", e.TagCreative = "/directory/tags/e36d0169-268a-4c62-a4f4-ddf61a0b3ae4"
                }(a || (a = {}))
        },
        "4CVa": function(e, t, n) {},
        "4brS": function(e, t, n) {},
        "5g1g": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("wUQP"),
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.incremental && Object(i.c)(this.props.name) || Object(i.b)(this.props.name) ? this.props.children : null
                    }, t
                }(r.Component),
                s = o;
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            })
        },
        "5hPa": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Search_SearchGameResultCard_Game"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
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
                                        value: "boxArtURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "40"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "55"
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
                    end: 115
                }
            };
            n.loc.source = {
                body: "query Search_SearchGameResultCard_Game($name: String!) {\ngame(name: $name) {\nid\nboxArtURL(width: 40 height: 55)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7Vxt": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "cancelBounty"
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
                                    value: "CancelBountyInput"
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
                                value: "cancelBounty"
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
                                        value: "bounty"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "bounty"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
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
                    end: 173
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/bounties/models/bounty.gql"\nmutation cancelBounty($input: CancelBountyInput!) {\ncancelBounty(input: $input){\nbounty{\n...bounty\n}\nerror{\ncode\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("D493").definitions)), e.exports = a
        },
        "8Ad5": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.Comma = 188] = "Comma", e[e.Period = 190] = "Period"
                }(a || (a = {}))
        },
        "9kXc": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("/7QA"),
                r = n("yLwq"),
                i = n("kduP"),
                o = n("2xye"),
                s = n("sLmD");

            function l(e) {
                var t, n, s, l, d = e.append,
                    m = void 0 !== d && d,
                    p = e.searchResults,
                    f = e.currentGameResults,
                    h = e.currentUserResults,
                    g = e.currentVideoResults,
                    E = e.currentLiveResults;
                if (p.games && (t = {
                        totalHits: p.games.totalHits,
                        results: m && f ? f.results : []
                    }, m && p.exhaustedHits && f && !p.games.totalHits && (t.totalHits = f.totalHits), t.results = t.results.concat(p.games.hits.map(function(e, t) {
                        var n, r = a.p.intl.getLanguageCode();
                        n = r && void 0 !== e.localizations && r in e.localizations ? e.localizations[r] : e.name;
                        var s = u(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(i.c)(e.name),
                                state: {
                                    content: o.PageviewContent.Game,
                                    content_index: t,
                                    medium: o.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: s
                        }
                    }))), p.videos) {
                    var y = m && g ? g.results : [],
                        b = p.videos.totalHits;
                    m && p.exhaustedHits && g && !p.videos.totalHits && (b = g.totalHits), s = function(e, t, n) {
                        return {
                            results: e.concat(t.hits.map(c)),
                            totalHits: t.totalHits || n
                        }
                    }(y, p.videos, b)
                }
                return p.users && (n = {
                    totalHits: m && h ? h.totalHits : p.users.totalHits,
                    results: m && h ? h.results : []
                }, m && p.exhaustedHits && h && !p.users.totalHits && (n.totalHits = h.totalHits), n.results = n.results.concat(p.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: o.PageviewContent.User,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        followers: e.followers
                    }
                }))), p.channels && ((l = {
                    totalHits: m && E ? E.totalHits : p.channels.totalHits,
                    results: m && E ? E.results : []
                }).results = l.results.concat(p.channels.hits.map(function(e, t) {
                    var n = u(e.graffiti);
                    return {
                        viewerCount: e.channel_count,
                        login: e.login,
                        name: e.name,
                        thumbnailAltText: e.status,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: o.PageviewContent.Live,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        status: e.status,
                        tags: n
                    }
                }))), {
                    currentGameResults: t,
                    currentUserResults: n,
                    currentLiveResults: l,
                    currentVideoResults: s,
                    exhaustedHits: p.exhaustedHits
                }
            }

            function c(e, t) {
                return {
                    title: e.title,
                    thumbnail: e.thumbnail,
                    thumbnailAltText: e.title,
                    linkTo: {
                        pathname: "/videos/" + e.objectID,
                        state: {
                            content: o.PageviewContent.Video,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    login: e.broadcaster_login,
                    name: e.broadcaster_name,
                    createdAt: e.created_at,
                    length: e.length,
                    id: e.objectID
                }
            }

            function u(e) {
                if (e) return e.map(function(e) {
                    var t, n = Object(s.a)();
                    return t = n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name, {
                        id: e.id,
                        isLanguageTag: e.name.includes("auto___lang"),
                        localizedName: t,
                        tagName: e.name
                    }
                })
            }
        },
        "B/yC": function(e, t, n) {},
        BSTw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Algolia_RequestInfo"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                    end: 57
                }
            };
            n.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        CF52: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_CampaignDetail"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "campaignID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                        value: "company"
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
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "campaignID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "campaignID"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "devBountyDetail"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
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
                    end: 278
                }
            };
            a.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/campaign-detail.gql"\nquery DevBountyBoardDashboard_CampaignDetail($campaignID: ID!) {\ncurrentUser {\nid\ncompany {\nid\nbountyCampaigns(campaignID: $campaignID) {\nedges {\ncursor\nnode {\n...devBountyDetail\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("HCgO").definitions)), e.exports = a
        },
        CVMv: function(e, t, n) {},
        D493: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "bounty"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bounty"
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
                                value: "campaign"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "bountyCampaign"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "status"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "platform"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "lastModifiedAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "payoutCents"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "maximumPayoutCents"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "maximumPayoutCCU"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "minimumPayoutCCU"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "restriction"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "bountyRestriction"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 351
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/bounties/models/bounty-campaign.gql"\n#import "twilight/features/bounties/models/bounty-restriction.gql"\nfragment bounty on Bounty {\nid\ncampaign {\n...bountyCampaign\n}\nstatus\nplatform\nlastModifiedAt\nstartAt\nstartTime\nendAt\npayoutCents\nmaximumPayoutCents\nmaximumPayoutCCU\nminimumPayoutCCU\nrestriction {\n...bountyRestriction\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function i(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            a.definitions = a.definitions.concat(i(n("Tu4X").definitions)), a.definitions = a.definitions.concat(i(n("MBS8").definitions)), e.exports = a
        },
        DMoW: function(e, t, n) {
            "use strict";
            var a, r, i, o, s, l, c, u, d, m, p, f, h, g, E, y, b, v, O, T, N, _, S, I, A, D, C, R, k, B, w, P, L, M, F, U, x, j, W, G, V, H, Y, z, X, K, q, Q, Z, J, $, ee, te, ne, ae, re, ie, oe, se, le, ce, ue, de, me, pe, fe, he, ge, Ee, ye, be, ve, Oe, Te, Ne, _e, Se, Ie, Ae, De, Ce, Re, ke, Be, we, Pe, Le, Me, Fe, Ue, xe, je, We, Ge, Ve, He, Ye, ze, Xe, Ke, qe, Qe, Ze, Je, $e, et, tt, nt, at, rt, it, ot, st, lt;
            n.d(t, "c", function() {
                    return r
                }), n.d(t, "F", function() {
                    return s
                }), n.d(t, "y", function() {
                    return l
                }), n.d(t, "g", function() {
                    return h
                }), n.d(t, "e", function() {
                    return b
                }), n.d(t, "f", function() {
                    return v
                }), n.d(t, "j", function() {
                    return N
                }), n.d(t, "O", function() {
                    return _
                }), n.d(t, "H", function() {
                    return S
                }), n.d(t, "o", function() {
                    return I
                }), n.d(t, "G", function() {
                    return C
                }), n.d(t, "b", function() {
                    return L
                }), n.d(t, "q", function() {
                    return M
                }), n.d(t, "p", function() {
                    return U
                }), n.d(t, "J", function() {
                    return x
                }), n.d(t, "L", function() {
                    return j
                }), n.d(t, "A", function() {
                    return W
                }), n.d(t, "M", function() {
                    return G
                }), n.d(t, "r", function() {
                    return Y
                }), n.d(t, "n", function() {
                    return z
                }), n.d(t, "K", function() {
                    return X
                }), n.d(t, "a", function() {
                    return K
                }), n.d(t, "u", function() {
                    return q
                }), n.d(t, "w", function() {
                    return Q
                }), n.d(t, "C", function() {
                    return J
                }), n.d(t, "D", function() {
                    return $
                }), n.d(t, "B", function() {
                    return te
                }), n.d(t, "E", function() {
                    return ne
                }), n.d(t, "N", function() {
                    return fe
                }), n.d(t, "l", function() {
                    return Ne
                }), n.d(t, "k", function() {
                    return _e
                }), n.d(t, "P", function() {
                    return De
                }), n.d(t, "m", function() {
                    return Pe
                }), n.d(t, "z", function() {
                    return Le
                }), n.d(t, "t", function() {
                    return xe
                }), n.d(t, "i", function() {
                    return We
                }), n.d(t, "h", function() {
                    return Ge
                }), n.d(t, "v", function() {
                    return Ve
                }), n.d(t, "I", function() {
                    return Ye
                }), n.d(t, "x", function() {
                    return Je
                }), n.d(t, "d", function() {
                    return ot
                }), n.d(t, "s", function() {
                    return st
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(a || (a = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(r || (r = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(i || (i = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(s || (s = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(l || (l = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(c || (c = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(u || (u = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(d || (d = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(m || (m = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(p || (p = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(f || (f = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(h || (h = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(g || (g = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(E || (E = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(y || (y = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(b || (b = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(v || (v = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(O || (O = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(T || (T = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(N || (N = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(_ || (_ = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(S || (S = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(I || (I = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(A || (A = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(D || (D = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(C || (C = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(R || (R = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(k || (k = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(B || (B = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(w || (w = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(P || (P = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(L || (L = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(M || (M = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(F || (F = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(U || (U = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(x || (x = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(j || (j = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(W || (W = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(G || (G = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(V || (V = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(H || (H = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(Y || (Y = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(z || (z = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(X || (X = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(K || (K = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(q || (q = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(Q || (Q = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(Z || (Z = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }(J || (J = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }($ || ($ = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ee || (ee = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(te || (te = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ne || (ne = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ae || (ae = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(re || (re = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ie || (ie = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(oe || (oe = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(se || (se = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(le || (le = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(ce || (ce = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ue || (ue = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(de || (de = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(me || (me = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(pe || (pe = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(fe || (fe = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(he || (he = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ge || (ge = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(Ee || (Ee = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(ye || (ye = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(be || (be = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(ve || (ve = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Oe || (Oe = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Te || (Te = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Ne || (Ne = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(_e || (_e = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Se || (Se = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Ie || (Ie = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(Ae || (Ae = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(De || (De = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(Ce || (Ce = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(Re || (Re = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(ke || (ke = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(Be || (Be = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(we || (we = {})),
                function(e) {
                    e.CREATIVE = "CREATIVE", e.GAME = "GAME", e.OTHER = "OTHER"
                }(Pe || (Pe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(Le || (Le = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Me || (Me = {})),
                function(e) {
                    e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.REQUESTING_USER_NOT_PERMITTED = "REQUESTING_USER_NOT_PERMITTED", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG"
                }(Fe || (Fe = {})),
                function(e) {
                    e.ACCOUNT_TOO_YOUNG = "ACCOUNT_TOO_YOUNG", e.COMMUNITY_NAME_EXISTS = "COMMUNITY_NAME_EXISTS", e.COMMUNITY_NAME_INVALID = "COMMUNITY_NAME_INVALID", e.COMMUNITY_NAME_RESERVED = "COMMUNITY_NAME_RESERVED", e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.INVALID_LANGUAGE = "INVALID_LANGUAGE", e.OWN_TO_MANY_COMMUNITIES = "OWN_TO_MANY_COMMUNITIES", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG", e.TWO_FACTOR_NOT_ENABLED = "TWO_FACTOR_NOT_ENABLED", e.UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL"
                }(Ue || (Ue = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(xe || (xe = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(je || (je = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(We || (We = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ge || (Ge = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(Ve || (Ve = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(He || (He = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ye || (Ye = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(ze || (ze = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.TARGET_USER_MOD = "TARGET_USER_MOD", e.TARGET_USER_OWNER = "TARGET_USER_OWNER", e.TARGET_USER_SELF = "TARGET_USER_SELF", e.TARGET_USER_STAFF = "TARGET_USER_STAFF"
                }(Xe || (Xe = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.TARGET_USER_MOD = "TARGET_USER_MOD", e.TARGET_USER_OWNER = "TARGET_USER_OWNER", e.TARGET_USER_SELF = "TARGET_USER_SELF", e.TARGET_USER_STAFF = "TARGET_USER_STAFF"
                }(Ke || (Ke = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(qe || (qe = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(Qe || (Qe = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(Ze || (Ze = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(Je || (Je = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }($e || ($e = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(et || (et = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(tt || (tt = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(nt || (nt = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(at || (at = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(rt || (rt = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(it || (it = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(ot || (ot = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(st || (st = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(lt || (lt = {}))
        },
        DNwE: function(e, t, n) {},
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return r
            })
        },
        "H+Kr": function(e, t, n) {},
        "H/lO": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(a || (a = {}))
        },
        HCgO: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devBountyDetail"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyCampaign"
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
                                value: "startTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "availablePlatforms"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "details"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "devCompanyGame"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "brandDetails"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blacklistedBroadcasters"
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
                                                value: "login"
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcasterMultiplier"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "includesAllBroadcasters"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "includesVarietyBroadcasters"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "targetedGames"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "totalBudgetCents"
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
                    end: 423
                }
            };
            a.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/company-game.gql"\nfragment devBountyDetail on BountyCampaign {\nid\nstartTime\nendTime\navailablePlatforms\ndetails\ngame {\n...devCompanyGame\n}\nbrandDetails {\nblacklistedBroadcasters {\nid\ndisplayName\nlogin\nprofileImageURL(width: 70)\n}\nbroadcasterMultiplier\nincludesAllBroadcasters\nincludesVarietyBroadcasters\ntargetedGames {\nid\ndisplayName\n}\ntotalBudgetCents\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("MFJw").definitions)), e.exports = a
        },
        HEnu: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("NAv5"),
                i = n("FOa4"),
                o = n("q1tI"),
                s = n("Ue10"),
                l = (n("WHSC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setInputRef = function(e) {
                            return t.textInput = e
                        }, t.setContainerRef = function(e) {
                            return t.containerElement = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this._picker = new i({
                            field: this.textInput,
                            onSelect: this.props.onChange,
                            theme: "inline",
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            defaultDate: this.props.defaultDate,
                            setDefaultDate: !0,
                            container: this.containerElement,
                            format: "MMMM D, YYYY",
                            toString: function(e, t) {
                                return Object(r.format)(e, t)
                            }
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        (this.dateDidChange(e.minDate, this.props.minDate) || this.dateDidChange(e.maxDate, this.props.maxDate)) && this.setDateRangeIfPresent(this.props.minDate, this.props.maxDate), this.dateDidChange(e.defaultDate, this.props.defaultDate) && this.setDate(this.props.defaultDate)
                    }, t.prototype.render = function() {
                        var e = this.props.inputProps;
                        return o.createElement(s.Wa, {
                            className: "date-picker",
                            "data-a-target": "date-picker"
                        }, o.createElement(s.Qa, a.__assign({
                            type: s.Sa.Text,
                            refDelegate: this.setInputRef
                        }, e)), o.createElement("div", {
                            className: "date-picker__container",
                            ref: this.setContainerRef
                        }))
                    }, t.prototype.setDate = function(e) {
                        e || (this.textInput.value = ""), this._picker.setDate(e || new Date, !0)
                    }, t.prototype.setDateRangeIfPresent = function(e, t) {
                        e && this._picker.setMinDate(e), t && this._picker.setMaxDate(t)
                    }, t.prototype.dateDidChange = function(e, t) {
                        return (e ? e.getTime() : null) !== (t ? t.getTime() : null)
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        Ints: function(e, t, n) {
            "use strict";
            var a = n("oJmH"),
                r = n("yR8l"),
                i = n("GnwI"),
                o = n("cUgj"),
                s = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.company;
                    return t && t.brandPortalSettings && t.brandPortalSettings.isEnabled ? e.children : null
                },
                l = Object(a.compose)(Object(i.b)("DevBountyDashboardFeatureGate", {
                    autoReportInteractive: !0
                }), Object(r.a)(o))(s);
            n.d(t, !1, function() {
                return s
            }), n.d(t, "a", function() {
                return l
            })
        },
        JVUd: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("17x9"),
                i = n("q1tI"),
                o = n("/7QA");

            function s(e) {
                var t = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: 0,
                        width: 0
                    },
                    n = function() {
                        if (window.innerWidth) return window.innerWidth;
                        if (document.documentElement.clientWidth) return document.documentElement.clientWidth;
                        return screen.width
                    }(),
                    a = function() {
                        if (window.innerHeight) return window.innerHeight;
                        if (document.documentElement.clientHeight) return document.documentElement.clientHeight;
                        return screen.height
                    }();
                return e.bottom <= 0 || e.top > a || e.right < 0 || e.left > n ? t : (t.top = Math.max(0, e.top), t.left = Math.max(0, e.left), t.right = Math.min(e.right, n), t.bottom = Math.min(e.bottom, a), t.width = t.right - t.left, t.height = t.bottom - t.top, t)
            }

            function l(e, t) {
                return function(n) {
                    return function(l) {
                        function c() {
                            var e = null !== l && l.apply(this, arguments) || this;
                            return e.state = {
                                hadImpression: !1,
                                didScroll: !1
                            }, e.logger = o.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return a.__extends(c, l), c.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                        }, c.prototype.componentWillUnmount = function() {
                            this.unregister && this.unregister()
                        }, c.prototype.render = function() {
                            var e = {
                                impressionListener: {
                                    hadImpression: this.state.hadImpression,
                                    didScroll: this.state.didScroll,
                                    registerImpressionCallback: this.registerImpressionCallback
                                }
                            };
                            return i.createElement("div", {
                                ref: this.setRef
                            }, i.createElement(n, a.__assign({}, this.props, e)))
                        }, c.prototype.checkVisible = function(e) {
                            return a.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                        hadImpression: t,
                                        didScroll: n
                                    }), this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, c.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                a = this.element.getBoundingClientRect();
                            if (a.left < n.right && a.right > n.left && a.top < n.bottom && a.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var r = t.percentage,
                                    i = t.pixels,
                                    o = a.bottom - a.top,
                                    l = n.bottom - n.top,
                                    c = Math.min(n.bottom - a.top, o, l);
                                if (i) {
                                    if (o >= i) return c >= i;
                                    r = 100
                                }
                                return !r || 100 * (c / o) >= r
                            }
                            return !1
                        }, c.prototype.isScrolled = function() {
                            if (!this.scrollContext) return !1;
                            var e = this.scrollContext.getScrollContent();
                            return !(!e || 0 === e.scrollTop)
                        }, c.contextTypes = {
                            registerReceiver: r.func,
                            getScrollContent: r.func
                        }, c
                    }(i.Component)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        KeYu: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "claimBounty"
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
                                    value: "ClaimBountyInput"
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
                                value: "claimBounty"
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
                                        value: "claimedBounty"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "bounty"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
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
                    end: 177
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/bounties/models/bounty.gql"\nmutation claimBounty($input: ClaimBountyInput!) {\nclaimBounty(input: $input){\nclaimedBounty{\n...bounty\n}\nerror{\ncode\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("D493").definitions)), e.exports = a
        },
        LFRE: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("/7QA"),
                s = n("f00E"),
                l = n("kRBY"),
                c = n("H/lO"),
                u = n("NZDK"),
                d = n("fvjX"),
                m = n("N3I0"),
                p = n("GIun"),
                f = n("8/mp"),
                h = n("GnwI"),
                g = n("N0BP"),
                E = n("yLwq"),
                y = n("Ue10"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSelect = function(e) {
                            e.preventDefault(), t.props.onSelect(t.props.user)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.user.avatar || Object(E.c)(this.props.user.id, 64);
                        return r.createElement(y.Wa, a.__assign({
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(g.a)(this.props)), r.createElement(y.Ta, {
                            onClick: this.onSelect
                        }, r.createElement(y.G, {
                            row: !0
                        }, r.createElement(y.I, {
                            alt: this.props.user.name,
                            src: e,
                            size: y.J.Size4,
                            aspect: y.p.Aspect1x1
                        }), r.createElement(y.Wa, {
                            flexGrow: 1,
                            display: y.X.Flex,
                            position: y.eb.Relative
                        }, r.createElement(y.Oa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, r.createElement(y.W, {
                            type: y.Ob.Span,
                            ellipsis: !0
                        }, this.props.user.name))))))
                    }, t
                }(r.Component),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.userSearch = null, t.renderSearchContent = function() {
                            var e = null;
                            return t.props.waiting ? e = r.createElement(y.Ya, {
                                fillContent: !0
                            }) : t.props.userResults && (e = t.props.userResults.map(function(e) {
                                return r.createElement(p.a, {
                                    key: e.id
                                }, r.createElement(b, {
                                    user: e,
                                    onSelect: t.onSelect
                                }))
                            })), e
                        }, t.onSelect = function(e) {
                            t.userSearch && t.userSearch.setValue(e.login), t.props.onUserSelect(e)
                        }, t.setUserSearchRef = function(e) {
                            t.userSearch = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.userSearch && e.open !== this.props.open && this.userSearch.toggle(e.open)
                    }, t.prototype.render = function() {
                        var e = this.renderSearchContent();
                        return r.createElement(y.Wa, null, r.createElement(m.a, {
                            onChange: this.props.onInputChange,
                            onFocusInput: this.props.onFocusInput,
                            ref: this.setUserSearchRef,
                            placeholder: Object(o.d)("Search Users", "DevUserSearch"),
                            balloonProps: {
                                show: this.props.open,
                                direction: y.v.Bottom,
                                size: y.w.Large
                            },
                            onClose: this.props.onSearchClose
                        }, r.createElement(y.Wa, {
                            className: "user-search__user-search"
                        }, r.createElement(f.b, {
                            contentClassName: "user-search__user-search-content",
                            suppressScrollX: !0
                        }, r.createElement(y.Wa, {
                            fullWidth: !0
                        }, e)))))
                    }, t
                }(r.Component),
                O = Object(d.compose)(Object(h.b)("DevUserSearchDropdown", {
                    autoReportInteractive: !0
                }))(v),
                T = 100,
                N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            searchTerm: "",
                            userResult: [],
                            searchOpen: !1,
                            waiting: !1,
                            selected: !1
                        }, n.onInputChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.onReset && n.props.onReset(), e ? (n.setState({
                                userResult: [],
                                searchTerm: e,
                                waiting: !0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doUserSearch(e)
                            }, T)) : n.setState({
                                userResult: [],
                                waiting: !1,
                                searchTerm: ""
                            })
                        }, n.doUserSearch = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.inputTimer = 0, t = Object(s.a)(), n = null, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(c.a.Users, e, t)];
                                        case 2:
                                            return n = a.sent(), [3, 4];
                                        case 3:
                                            return r = a.sent(), o.p.logger.error(r, "Algolia User Search failed"), this.setState({
                                                waiting: !1,
                                                searchOpen: !1
                                            }), [2];
                                        case 4:
                                            return n && n.users ? (i = this.deserializeUserResults(n), this.props.limit && (i = i.splice(0, this.props.limit)), this.setState({
                                                userResult: i,
                                                searchOpen: !0,
                                                waiting: !1
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, n.deserializeUserResults = function(e) {
                            return e.users ? e.users.hits.filter(function(e) {
                                return !(n.props.user && !n.props.includeCurrentUser) || e.objectID !== n.props.user.id
                            }).map(function(e) {
                                return {
                                    id: e.objectID,
                                    avatar: e.profile_image,
                                    name: e.name,
                                    login: e.login
                                }
                            }) : []
                        }, n.onFocusInput = function() {
                            n.setState(function(e) {
                                return e.searchTerm && !e.searchOpen ? {
                                    searchOpen: !0
                                } : {
                                    searchOpen: e.searchOpen
                                }
                            })
                        }, n.onSearchClose = function() {
                            n.setState({
                                searchOpen: !1
                            })
                        }, n.onUserSelect = function(e) {
                            n.props.onUserSelect(e), n.setState({
                                userResult: [],
                                searchTerm: e.login,
                                searchOpen: !1,
                                waiting: !1,
                                selected: !0
                            })
                        }, n.searchClient = new u.a({
                            appId: o.p.config.algoliaApplicationID,
                            apiKey: o.p.config.algoliaAPIKey,
                            apolloClient: o.p.apollo.client,
                            logger: o.p.logger,
                            config: o.p.config,
                            stats: o.p.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(O, {
                            userResults: this.state.userResult,
                            open: this.state.searchOpen,
                            waiting: this.state.waiting,
                            onInputChange: this.onInputChange,
                            onSearchClose: this.onSearchClose,
                            onFocusInput: this.onFocusInput,
                            onUserSelect: this.onUserSelect
                        })
                    }, t
                }(r.Component);
            var _ = Object(i.connect)(function(e) {
                return {
                    user: Object(l.e)(e)
                }
            })(N);
            n.d(t, !1, function() {
                return T
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, "a", function() {
                return _
            })
        },
        "LjK+": function(e, t, n) {},
        MBS8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "bountyRestriction"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyRestriction"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "days"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endTime"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 74
                }
            };
            n.loc.source = {
                body: "fragment bountyRestriction on BountyRestriction {\ndays\nstartTime\nendTime\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MFJw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devCompanyGame"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Game"
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
                                value: "boxArtURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "85"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "113"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "coverURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "566"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "85"
                                }
                            }],
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
                }],
                loc: {
                    start: 0,
                    end: 115
                }
            };
            n.loc.source = {
                body: "fragment devCompanyGame on Game {\nid\nboxArtURL(width: 85 height: 113)\ncoverURL(width: 566 height: 85)\ndisplayName\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MXoD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("mrSG"),
                r = n("cr+I"),
                i = function(e, t) {
                    if (!(e.content || e.content_index || e.medium) || !t) return t;
                    if ("string" == typeof t && (/^\w+:\/\//.test(t) || t.startsWith("//"))) {
                        var n = new URL(t),
                            i = "" !== n.search ? r.parse(n.search) : {};
                        return e.content && (i.tt_content = e.content), e.content_index && (i.tt_content_index = e.content_index), e.medium && (i.tt_medium = e.medium), n.search = r.stringify(i), n.toString()
                    }
                    var o = "string" == typeof t ? {
                        pathname: t
                    } : t;
                    return a.__assign({}, o, {
                        state: a.__assign({}, o.state, {
                            content: e.content || o.state && o.state.content,
                            content_index: e.content_index || o.state && o.state.content_index,
                            medium: e.medium || o.state && o.state.medium
                        })
                    })
                }
        },
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return r.createElement(s.Wa, {
                        display: s.X.Flex,
                        flexDirection: s.Z.Column,
                        justifyContent: s.Va.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.bc.Above
                    }, r.createElement(s.yb, {
                        color: s.O.Alt2,
                        textAlign: s.Kb.Center,
                        flexShrink: 1
                    }, r.createElement(s.nb, {
                        asset: s.ob.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(s.Oa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Kb.Center
                    }, r.createElement(s.W, {
                        type: s.Ob.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s.W, {
                        type: s.Ob.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                c = n("8Ad5"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === c.a.Down && (n(), t.focusNext(1))
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? r.createElement(l, null) : r.Children.only(this.props.children),
                            n = r.createElement(s.qb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(s.yb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.eb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(s.yb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.eb.Absolute,
                            zIndex: s.bc.Above,
                            elevation: 3
                        }, r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, n, e && r.createElement(s.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            a = document.activeElement,
                            r = Array.prototype.indexOf.call(n, a);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var i = n.item(t);
                            i.focus(), i.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: i
                            }), this.props.onFocusChange && this.props.onFocusChange(i)
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return u
            })
        },
        N74f: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            });
            var a, r, i = n("Ue10");
            ! function(e) {
                e.Android = "Android", e.HTCVive = "HTC Vive", e.iOS = "iOS", e.MacOS = "Mac OS", e.NintendoSwitch = "Nintendo Switch", e.OculusRift = "Oculus Rift", e.PC = "PC", e.PlayStation4 = "PlayStation 4", e.PlayStationVR = "PlayStation VR", e.XboxOne = "Xbox One"
            }(r || (r = {}));
            var o = ((a = {})[r.Android] = i.ob.Android, a[r.HTCVive] = i.ob.HTCVibe, a[r.iOS] = i.ob.IOS, a[r.MacOS] = i.ob.MacOs, a[r.NintendoSwitch] = i.ob.NintendoSwitch, a[r.OculusRift] = i.ob.OculusVR, a[r.PC] = i.ob.Windows, a[r.PlayStation4] = i.ob.PlayStation, a[r.PlayStationVR] = i.ob.PlayStation, a[r.XboxOne] = i.ob.XboxOne, a)
        },
        NGrv: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardCampaignLivereachWidget"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameNames"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "ListType",
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
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetAllBroadcasters"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetVarietyBroadcasters"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "company"
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
                                                value: "estimatedBroadcasterViewerReach"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "gameNames"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gameNames"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "targetAllBroadcasters"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "targetAllBroadcasters"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "targetVarietyBroadcasters"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "targetVarietyBroadcasters"
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
                                                        value: "broadcasterPool"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "min"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "max"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "minutesWatched"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "min"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "max"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "viewerPool"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "min"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "max"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 411
                }
            };
            n.loc.source = {
                body: "query DevBountyBoardCampaignLivereachWidget($gameNames: [String!]! $targetAllBroadcasters: Boolean! $targetVarietyBroadcasters:Boolean!) {\ncurrentUser {\nid\ncompany {\nid\nestimatedBroadcasterViewerReach(gameNames: $gameNames targetAllBroadcasters: $targetAllBroadcasters targetVarietyBroadcasters: $targetVarietyBroadcasters) {\nbroadcasterPool {\nmin\nmax\n}\nminutesWatched {\nmin\nmax\n}\nviewerPool {\nmin\nmax\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n("mrSG"),
                r = n("hnrd"),
                i = n("/7QA"),
                o = n("D7An"),
                s = n("H/lO"),
                l = n("vR4/"),
                c = n("BSTw"),
                u = n("Z9JJ"),
                d = {
                    games: {
                        indexName: s.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: s.a.Videos,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["created_at>" + f(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
                        },
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    users: {
                        indexName: s.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: s.a.Channels,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["channel_count>10", "updated_on>" + f(p())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + f(p())]
                        },
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: s.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: s.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                m = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === i.p.experiments.getAssignment(o.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var n, r, i, o;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(r))];
                                    case 1:
                                        return (i = a.sent()) ? (o = i.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: o[4].nbHits,
                                                hits: o[0].hits
                                            },
                                            videos: {
                                                totalHits: o[5].nbHits,
                                                hits: o[1].hits
                                            },
                                            users: {
                                                totalHits: o[6].nbHits,
                                                hits: o[2].hits
                                            },
                                            channels: {
                                                totalHits: o[7].nbHits,
                                                hits: o[3].hits
                                            }
                                        }]) : [2, function(e) {
                                            return {
                                                id: e,
                                                games: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                videos: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                users: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                channels: {
                                                    totalHits: 0,
                                                    hits: []
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.page,
                            l = void 0 === o ? 0 : o,
                            c = i.hitsPerPage,
                            u = void 0 === c ? 50 : c,
                            m = i.facetFilters,
                            p = void 0 === m ? "" : m,
                            f = i.numericFilters,
                            h = i.restrictSearchableAttributes,
                            g = void 0 === h ? [] : h;
                        return a.__awaiter(this, void 0, void 0, function() {
                            var r, i, o, c, m, h, E, y, b = this;
                            return a.__generator(this, function(v) {
                                switch (v.label) {
                                    case 0:
                                        switch (r = {
                                            id: n,
                                            currentPage: l
                                        }, i = function(e) {
                                            return a.__awaiter(b, void 0, void 0, function() {
                                                var n, i;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return n = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: l,
                                                                    hitsPerPage: u,
                                                                    numericFilters: f || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: p,
                                                                    restrictSearchableAttributes: g
                                                                }
                                                            }, [4, this.query([n])];
                                                        case 1:
                                                            return (i = a.sent()) ? (r.exhaustedHits = !i.results[0].nbHits || i.results[0].hits.length < u, [2, {
                                                                totalHits: i.results[0].nbHits,
                                                                hits: i.results[0].hits
                                                            }]) : (r.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case s.a.Games:
                                                return [3, 1];
                                            case s.a.Users:
                                                return [3, 3];
                                            case s.a.Channels:
                                                return [3, 5];
                                            case s.a.Videos:
                                                return [3, 7];
                                            case s.a.StreamTags:
                                                return [3, 9];
                                            case s.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return o = r, [4, i(d.games)];
                                    case 2:
                                        return o.games = v.sent(), [3, 14];
                                    case 3:
                                        return c = r, [4, i(d.users)];
                                    case 4:
                                        return c.users = v.sent(), [3, 14];
                                    case 5:
                                        return m = r, [4, i(d.channels)];
                                    case 6:
                                        return m.channels = v.sent(), [3, 14];
                                    case 7:
                                        return h = r, [4, i(d.videos)];
                                    case 8:
                                        return h.videos = v.sent(), [3, 14];
                                    case 9:
                                        return E = r, [4, i(d.streamTags)];
                                    case 10:
                                        return E.streamTags = v.sent(), [3, 14];
                                    case 11:
                                        return y = r, [4, i(d.tags)];
                                    case 12:
                                        return y.tags = v.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var r, i, o, c;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        switch (r = s.a.Videos, i = [], n.length) {
                                            case l.a.Short:
                                                i.push("length<=900");
                                                break;
                                            case l.a.Long:
                                                i.push("length>900")
                                        }
                                        switch (o = {
                                            indexName: r,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: i,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, n.type) {
                                            case l.b.PastBroadcasts:
                                                o.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case l.b.Uploads:
                                                o.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case l.b.Highlights:
                                                o.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([o])];
                                    case 1:
                                        return (c = a.sent()) ? [2, {
                                            id: t,
                                            totalHits: c.results[0].nbHits,
                                            hits: c.results[0].hits
                                        }] : [2, {
                                            id: t,
                                            totalHits: 0,
                                            hits: []
                                        }]
                                }
                            })
                        })
                    }, e.prototype.getCountryCode = function() {
                        var e = this;
                        this.apolloClient.query({
                            query: c
                        }).then(function(t) {
                            e.countryCode = t.data.requestInfo.countryCode
                        }).catch(function(t) {
                            e.logger.error(t, "Failed to get country code")
                        })
                    }, e.prototype.getSearchResults = function(e) {
                        var t = this,
                            n = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: u,
                            variables: n,
                            fetchPolicy: "network-only"
                        }).then(function(e) {
                            if (e.data.search) return {
                                results: JSON.parse(e.data.search.result)
                            }
                        }).catch(function(e) {
                            return t.logger.error(e, "Failed to get search results"), e
                        })
                    }, e.prototype.getTopResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                page: 0,
                                hitsPerPage: e.hitsPerPage,
                                numericFilters: e.topNumericFilters
                            }
                        }
                    }, e.prototype.getTotalResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                hitsPerPage: 0,
                                numericFilters: e.singleTypeNumericFilters
                            }
                        }
                    }, e.prototype.query = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        n = Date.now(), i = !1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (o = e[0].query, [4, this.getSearchResults(o)]) : [3, 3];
                                    case 2:
                                        return t = a.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = a.sent(), a.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return a.sent(), i = !0, t = null, [3, 7];
                                    case 7:
                                        return r = Date.now(), this.countryCode && (i ? this.stats.recordSearchError(this.countryCode, r - n) : this.stats.recordSearchSuccess(this.countryCode, r - n)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function p() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function f(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        OGSR: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("Ue10"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCanvasReady = function(e) {
                            e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(i.Oa, {
                            fullWidth: !0
                        }, r.createElement("canvas", {
                            ref: this.handleCanvasReady
                        }))
                    }, t.prototype.setCanvasResolution = function(e) {
                        var t = e.width,
                            n = e.height,
                            a = this.getPixelRatio(e.getContext("2d"));
                        e.width = t * a, e.height = n * a, e.style.width = t + "px", e.style.height = n + "px", e.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                    }, t.prototype.getPixelRatio = function(e) {
                        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        OnAS: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            });
            var a, r = n("/7QA"),
                i = n("f00E"),
                o = n("2xye");

            function s(e) {
                var t = {
                    user_id: e.channelID,
                    bounty_page_action_desc: e.action
                };
                r.p.tracking.track(o.SpadeEventType.BountyBoardActions, t)
            }

            function l(e) {
                var t = {
                    bounty_id: e.bounty.id,
                    campaign_id: e.bounty.campaign.id,
                    user_id: e.channelID,
                    bounty_action_desc: e.action,
                    bounty_status: e.bounty.status,
                    bounty_cancel_reason: e.cancelReason,
                    bounty_selected_platform: e.selectedPlatform
                };
                r.p.tracking.track(o.SpadeEventType.BountyBoardActions, t)
            }

            function c(e) {
                var t = {
                    bounty_id: e.bounty.id,
                    campaign_id: e.bounty.campaign.id,
                    user_id: e.channelID,
                    impression_id: Object(i.b)(),
                    impression_group_id: e.impressionGroupID,
                    bounty_payout: e.bounty.payoutCents,
                    bounty_status: e.bounty.status,
                    bounty_expiration_date: e.bounty.endAt
                };
                r.p.tracking.track(o.SpadeEventType.BountyBoardImpressions, t)
            }! function(e) {
                e.ViewDetails = "view_details", e.ViewLegal = "view_legal", e.DeclineLegal = "decline_legal", e.AcceptLegal = "accept_legal", e.Terms = "terms", e.CancelBounty = "cancel_bounty", e.ViewTermsOfUse = "view_terms_of_use", e.DismissFTUE = "dismiss_first_time_user_experience"
            }(a || (a = {}))
        },
        PJwv: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("aCAx"),
                c = n("Ue10"),
                u = n("/7QA"),
                d = n("cZKs");
            ! function(e) {
                e.TitleText = "dev-cancel-campaign-modal-title-text", e.ContentText = "dev-create-campaign-content-text", e.CloseButton = "dev-create-campaign-modal-close-button"
            }(a || (a = {}));
            var m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClose = function() {
                            t.props.onClose()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c.Wa, {
                            className: "dev-bounty-board-cancel-campaign-modal"
                        }, i.createElement(c.yb, {
                            borderBottom: !0,
                            padding: 2,
                            textAlign: c.Kb.Center
                        }, i.createElement(c.W, {
                            type: c.Ob.H4,
                            bold: !0,
                            "data-test-selector": a.TitleText
                        }, Object(u.d)("Cancel Campaign", "DevBountyCancelCampaignModal")), i.createElement(d.a, null)), i.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexDirection: c.Z.Column,
                            padding: 2
                        }, i.createElement(c.W, {
                            type: c.Ob.P,
                            "data-test-selector": a.ContentText
                        }, Object(u.d)("You must contact <x:link>bountyboard@twitch.tv</x:link> in order to cancel your campaign. Once contacted, cancellations typically take 24-48 hours to process.", {
                            "x:link": function(e) {
                                return i.createElement("a", {
                                    href: "mailto:bountyboard@twitch.tv"
                                }, e)
                            }
                        }, "DevBountyBoardCampaignPage")), i.createElement("br", null), i.createElement(c.W, {
                            type: c.Ob.P,
                            "data-test-selector": a.ContentText
                        }, Object(u.d)("By cancelling a campaign early you will only have your unclaimed budget refunded. Broadcasters who have already claimed bounties will have their remaining time to complete the bounty.", "DevBountyCancelCampaignModal"))), i.createElement(c.yb, {
                            alignItems: c.f.Center,
                            background: c.r.Alt2,
                            borderTop: !0,
                            display: c.X.Flex,
                            flexDirection: c.Z.Row,
                            flexWrap: c.Aa.Wrap,
                            justifyContent: c.Va.End,
                            padding: 1
                        }, i.createElement(c.z, {
                            onClick: this.onClose,
                            "data-test-selector": a.CloseButton
                        }, Object(u.d)("Close", "DevBountyCancelCampaignModal"))))
                    }, t
                }(i.PureComponent),
                p = (n("4brS"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c.yb, {
                            background: c.r.Base,
                            className: "dev-bounty-board-cancel-campaign-modal__container"
                        }, i.createElement(m, {
                            onClose: this.props.closeModal
                        }))
                    }, t
                }(i.Component));
            var f = Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(p);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return f
            })
        },
        R4hK: function(e, t, n) {},
        RnhZ: function(e, t, n) {
            var a = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function r(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = "RnhZ"
        },
        "Rw/r": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("9kXc"),
                o = n("Ue10"),
                s = n("eNO8"),
                l = n("/7QA"),
                c = n("H/lO"),
                u = n("NZDK"),
                d = 10,
                m = function() {
                    return function() {
                        var e = this;
                        this.searchCode = function(t, n) {
                            return a.__awaiter(e, void 0, Promise, function() {
                                var e;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(c.a.Games, t, t, {
                                                hitsPerPage: d,
                                                page: n
                                            })];
                                        case 1:
                                            return [2, a.sent()];
                                        case 2:
                                            throw e = a.sent(), l.k.error(e, "Algolia type results search failed"), e;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.searchClient = new u.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        })
                    }
                }(),
                p = [],
                f = {
                    objectID: "",
                    name: ""
                },
                h = function(e) {
                    return {
                        objectID: "",
                        name: e
                    }
                },
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            n.setState({
                                isSearchPending: !0,
                                searchTerm: e,
                                nextAlgoliaPage: 0
                            }, n.triggerLoadMore)
                        }, n.triggerLoadMore = function() {
                            return n.searchClient.searchCode(n.state.searchTerm, n.state.nextAlgoliaPage).then(function(e) {
                                n.resolveLoadMore(e)
                            })
                        }, n.resolveLoadMore = function(e) {
                            if (!e || e.id === n.state.searchTerm) {
                                var t = void 0;
                                if (e) {
                                    var a = void 0;
                                    n.state.gameResults && (a = {
                                        totalHits: n.state.gameResults.length,
                                        results: n.state.gameResults
                                    });
                                    var r = Object(i.b)({
                                        searchResults: e,
                                        append: n.state.nextAlgoliaPage > 0,
                                        currentGameResults: a
                                    }).currentGameResults;
                                    t = r ? r.results : p
                                }
                                n.setState({
                                    gameResults: t,
                                    isSearchPending: !1,
                                    nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                                })
                            }
                        }, n.selectGame = function(e) {
                            if (n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title) {
                                var t = n.state.gameResults[e];
                                if (t.title) {
                                    var a = {
                                        objectID: t.id,
                                        name: t.title
                                    };
                                    n.setselectedGametate(a)
                                } else n.selectEmptyGame()
                            } else n.selectEmptyGame()
                        }, n.selectGameByName = function(e) {
                            n.setselectedGametate(h(e))
                        }, n.selectEmptyGame = function() {
                            n.setselectedGametate(f)
                        }, n.setselectedGametate = function(e) {
                            n.setState({
                                selectedGame: e,
                                searchTerm: e.name,
                                redrawKey: Math.random()
                            }, n.fireChangeGame)
                        }, n.fireChangeGame = function() {
                            n.props.onChange(n.state.selectedGame)
                        }, n.searchClient = new m, n.state = n.getInitialState(t), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.startNewSearch(this.props.currentGameTitle)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.currentGameTitle !== this.props.currentGameTitle && this.setState(this.getInitialState(e))
                    }, t.prototype.render = function() {
                        return this.props.disabled ? r.createElement("div", {
                            className: "game-selector__search-container"
                        }, r.createElement(o.Qa, {
                            value: this.props.currentGameTitle,
                            type: o.Sa.Text,
                            icon: o.ob.NavGames,
                            disabled: !0
                        })) : r.createElement(s.a, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame.name,
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.triggerLoadMore,
                            compact: this.props.compact
                        })
                    }, t.prototype.getInitialState = function(e) {
                        return {
                            searchTerm: e.currentGameTitle,
                            gameResults: p,
                            isSearchPending: !1,
                            nextAlgoliaPage: 0,
                            selectedGame: h(e.currentGameTitle),
                            redrawKey: Math.random()
                        }
                    }, t
                }(r.Component);
            n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "a", function() {
                return g
            })
        },
        TDse: function(e, t, n) {
            "use strict";
            var a;

            function r(e) {
                return e === a.Week || e === a.Month ? e : a.Day
            }
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Day = "day", e.Week = "week", e.Month = "month"
                }(a || (a = {}))
        },
        Tu4X: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "bountyCampaign"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyCampaign"
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
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "sponsor"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "details"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "streamLengthMinutes"
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
                                value: "boxArtURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "coverURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
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
                                        value: "boxArtURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "85"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "113"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "coverURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "566"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "85"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "availablePlatforms"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endAt"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 247
                }
            };
            n.loc.source = {
                body: "fragment bountyCampaign on BountyCampaign {\nid\ntitle\ntype\nsponsor\ndetails\nstreamLengthMinutes\ndisplayName\nboxArtURL\ncoverURL\ngame {\nid\ndisplayName\nboxArtURL(width:85 height: 113)\ncoverURL(width: 566 height: 85)\n}\navailablePlatforms\nstartAt\nendAt\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        UfoR: function(e, t, n) {
            "use strict";

            function a(e) {
                return ["StringValue", "BooleanValue", "EnumValue"].indexOf(e.kind) > -1
            }

            function r(e) {
                return ["IntValue", "FloatValue"].indexOf(e.kind) > -1
            }

            function i(e, t, n, a) {
                if (function(e) {
                        return "IntValue" === e.kind
                    }(n) || function(e) {
                        return "FloatValue" === e.kind
                    }(n)) e[t.value] = Number(n.value);
                else if (function(e) {
                        return "BooleanValue" === e.kind
                    }(n) || function(e) {
                        return "StringValue" === e.kind
                    }(n)) e[t.value] = n.value;
                else if (function(e) {
                        return "ObjectValue" === e.kind
                    }(n)) {
                    var r = {};
                    n.fields.map(function(e) {
                        return i(r, e.name, e.value, a)
                    }), e[t.value] = r
                } else if (function(e) {
                        return "Variable" === e.kind
                    }(n)) {
                    var o = (a || {})[n.name.value];
                    e[t.value] = o
                } else if (function(e) {
                        return "ListValue" === e.kind
                    }(n)) e[t.value] = n.values.map(function(e) {
                    var n = {};
                    return i(n, t, e, a), n[t.value]
                });
                else {
                    if (! function(e) {
                            return "EnumValue" === e.kind
                        }(n)) throw new Error('The inline argument "' + t.value + '" of kind "' + n.kind + '" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.');
                    e[t.value] = n.value
                }
            }

            function o(e, t) {
                var n = null;
                e.directives && (n = {}, e.directives.forEach(function(e) {
                    n[e.name.value] = {}, e.arguments && e.arguments.forEach(function(a) {
                        var r = a.name,
                            o = a.value;
                        return i(n[e.name.value], r, o, t)
                    })
                }));
                var a = null;
                return e.arguments && e.arguments.length && (a = {}, e.arguments.forEach(function(e) {
                    var n = e.name,
                        r = e.value;
                    return i(a, n, r, t)
                })), l(e.name.value, a, n)
            }
            var s = ["connection", "include", "skip", "client", "rest", "export"];

            function l(e, t, n) {
                if (n && n.connection && n.connection.key) {
                    if (n.connection.filter && n.connection.filter.length > 0) {
                        var a = n.connection.filter ? n.connection.filter : [];
                        a.sort();
                        var r = t,
                            i = {};
                        return a.forEach(function(e) {
                            i[e] = r[e]
                        }), n.connection.key + "(" + JSON.stringify(i) + ")"
                    }
                    return n.connection.key
                }
                var o = e;
                if (t) {
                    var l = JSON.stringify(t);
                    o += "(" + l + ")"
                }
                return n && Object.keys(n).forEach(function(e) {
                    -1 === s.indexOf(e) && (n[e] && Object.keys(n[e]).length ? o += "@" + e + "(" + JSON.stringify(n[e]) + ")" : o += "@" + e)
                }), o
            }

            function c(e, t) {
                if (e.arguments && e.arguments.length) {
                    var n = {};
                    return e.arguments.forEach(function(e) {
                        var a = e.name,
                            r = e.value;
                        return i(n, a, r, t)
                    }), n
                }
                return null
            }

            function u(e) {
                return e.alias ? e.alias.value : e.name.value
            }

            function d(e) {
                return "Field" === e.kind
            }

            function m(e) {
                return "InlineFragment" === e.kind
            }

            function p(e) {
                return e && "id" === e.type
            }

            function f(e, t) {
                return void 0 === t && (t = !1), {
                    type: "id",
                    id: e,
                    generated: t
                }
            }

            function h(e) {
                return null != e && "object" == typeof e && "json" === e.type
            }

            function g(e) {
                throw new Error("Variable nodes are not supported by valueFromNode")
            }

            function E(e, t) {
                switch (void 0 === t && (t = g), e.kind) {
                    case "Variable":
                        return t(e);
                    case "NullValue":
                        return null;
                    case "IntValue":
                        return parseInt(e.value);
                    case "FloatValue":
                        return parseFloat(e.value);
                    case "ListValue":
                        return e.values.map(function(e) {
                            return E(e, t)
                        });
                    case "ObjectValue":
                        for (var n = {}, a = 0, r = e.fields; a < r.length; a++) {
                            var i = r[a];
                            n[i.name.value] = E(i.value, t)
                        }
                        return n;
                    default:
                        return e.value
                }
            }

            function y(e, t) {
                if (e.directives && e.directives.length) {
                    var n = {};
                    return e.directives.forEach(function(e) {
                        n[e.name.value] = c(e, t)
                    }), n
                }
                return null
            }

            function b(e, t) {
                if (void 0 === t && (t = {}), !e.directives) return !0;
                var n = !0;
                return e.directives.forEach(function(e) {
                    if ("skip" === e.name.value || "include" === e.name.value) {
                        var a = e.arguments || [],
                            r = e.name.value;
                        if (1 !== a.length) throw new Error("Incorrect number of arguments for the @" + r + " directive.");
                        var i = a[0];
                        if (!i.name || "if" !== i.name.value) throw new Error("Invalid argument for the @" + r + " directive.");
                        var o = a[0].value,
                            s = !1;
                        if (o && "BooleanValue" === o.kind) s = o.value;
                        else {
                            if ("Variable" !== o.kind) throw new Error("Argument for the @" + r + " directive must be a variable or a boolean value.");
                            if (void 0 === (s = t[o.name.value])) throw new Error("Invalid variable referenced in @" + r + " directive.")
                        }
                        "skip" === r && (s = !s), s || (n = !1)
                    }
                }), n
            }

            function v(e) {
                return e.selectionSet && e.selectionSet.selections.length > 0 ? [e].concat(e.selectionSet.selections.map(function(e) {
                    return [e].concat(v(e))
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, [])) : [e]
            }
            var O = new Map;

            function T(e) {
                var t = O.get(e);
                if (t) return t;
                var n = e.definitions.filter(function(e) {
                    return e.selectionSet && e.selectionSet.selections
                }).map(function(e) {
                    return v(e)
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, []).filter(function(e) {
                    return e.directives && e.directives.length > 0
                }).map(function(e) {
                    return e.directives
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, []).map(function(e) {
                    return e.name.value
                });
                return O.set(e, n), n
            }

            function N(e, t) {
                return T(t).some(function(t) {
                    return e.indexOf(t) > -1
                })
            }
            var _ = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            };

            function S(e, t) {
                var n = t,
                    a = [];
                if (e.definitions.forEach(function(e) {
                        if ("OperationDefinition" === e.kind) throw new Error("Found a " + e.operation + " operation" + (e.name ? " named '" + e.name.value + "'" : "") + ". No operations are allowed when using a fragment as a query. Only fragments are allowed.");
                        "FragmentDefinition" === e.kind && a.push(e)
                    }), void 0 === n) {
                    if (1 !== a.length) throw new Error("Found " + a.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
                    n = a[0].name.value
                }
                return _({}, e, {
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: n
                                }
                            }]
                        }
                    }].concat(e.definitions)
                })
            }

            function I(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.forEach(function(t) {
                    void 0 !== t && null !== t && Object.keys(t).forEach(function(n) {
                        e[n] = t[n]
                    })
                }), e
            }

            function A(e) {
                D(e);
                var t = e.definitions.filter(function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                })[0];
                if (!t) throw new Error("Must contain a mutation definition.");
                return t
            }

            function D(e) {
                if ("Document" !== e.kind) throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
                var t = e.definitions.filter(function(e) {
                    return "FragmentDefinition" !== e.kind
                }).map(function(e) {
                    if ("OperationDefinition" !== e.kind) throw new Error('Schema type definitions not allowed in queries. Found: "' + e.kind + '"');
                    return e
                });
                if (t.length > 1) throw new Error("Ambiguous GraphQL document: contains " + t.length + " operations")
            }

            function C(e) {
                return D(e), e.definitions.filter(function(e) {
                    return "OperationDefinition" === e.kind
                })[0]
            }

            function R(e) {
                var t = C(e);
                if (!t) throw new Error("GraphQL document is missing an operation");
                return t
            }

            function k(e) {
                return e.definitions.filter(function(e) {
                    return "OperationDefinition" === e.kind && e.name
                }).map(function(e) {
                    return e.name.value
                })[0] || null
            }

            function B(e) {
                return e.definitions.filter(function(e) {
                    return "FragmentDefinition" === e.kind
                })
            }

            function w(e) {
                var t = C(e);
                if (!t || "query" !== t.operation) throw new Error("Must contain a query definition.");
                return t
            }

            function P(e) {
                if ("Document" !== e.kind) throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
                if (e.definitions.length > 1) throw new Error("Fragment must have exactly one definition.");
                var t = e.definitions[0];
                if ("FragmentDefinition" !== t.kind) throw new Error("Must be a fragment definition.");
                return t
            }

            function L(e) {
                var t;
                D(e);
                for (var n = 0, a = e.definitions; n < a.length; n++) {
                    var r = a[n];
                    if ("OperationDefinition" === r.kind) {
                        var i = r.operation;
                        if ("query" === i || "mutation" === i || "subscription" === i) return r
                    }
                    "FragmentDefinition" !== r.kind || t || (t = r)
                }
                if (t) return t;
                throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.")
            }

            function M(e) {
                void 0 === e && (e = []);
                var t = {};
                return e.forEach(function(e) {
                    t[e.name.value] = e
                }), t
            }

            function F(e) {
                if (e && e.variableDefinitions && e.variableDefinitions.length) {
                    var t = e.variableDefinitions.filter(function(e) {
                        return e.defaultValue
                    }).map(function(e) {
                        var t = e.variable,
                            n = e.defaultValue,
                            a = {};
                        return i(a, t.name, n), a
                    });
                    return I.apply(void 0, [{}].concat(t))
                }
                return {}
            }

            function U(e) {
                var t = new Set;
                if (e.variableDefinitions)
                    for (var n = 0, a = e.variableDefinitions; n < a.length; n++) {
                        var r = a[n];
                        t.add(r.variable.name.value)
                    }
                return t
            }

            function x(e) {
                if (Array.isArray(e)) return e.map(function(e) {
                    return x(e)
                });
                if (null !== e && "object" == typeof e) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = x(e[n]));
                    return t
                }
                return e
            }
            var j = {
                kind: "Field",
                name: {
                    kind: "Name",
                    value: "__typename"
                }
            };

            function W(e, t) {
                var n = x(t);
                n.definitions.forEach(function(t) {
                    ! function e(t, n) {
                        if (!n.selections) return n;
                        var a = t.some(function(e) {
                            return e.remove
                        });
                        return n.selections = n.selections.map(function(e) {
                            return "Field" === e.kind && e && e.directives ? (e.directives = e.directives.filter(function(e) {
                                var r = !t.some(function(t) {
                                    return !(!t.name || t.name !== e.name.value) || !(!t.test || !t.test(e))
                                });
                                return n || r || !a || (n = !0), r
                            }), n ? null : e) : e;
                            var n
                        }).filter(function(e) {
                            return !!e
                        }), n.selections.forEach(function(n) {
                            "Field" !== n.kind && "InlineFragment" !== n.kind || !n.selectionSet || e(t, n.selectionSet)
                        }), n
                    }(e, t.selectionSet)
                });
                var a = R(n),
                    r = M(B(n)),
                    i = function(e) {
                        return e.selectionSet.selections.filter(function(e) {
                            return !(e && "FragmentSpread" === e.kind && !i(r[e.name.value]))
                        }).length > 0
                    };
                return i(a) ? n : null
            }
            var G = new Map;

            function V(e) {
                D(e);
                var t = G.get(e);
                if (t) return t;
                var n = x(e);
                return n.definitions.forEach(function(e) {
                    var t = "OperationDefinition" === e.kind;
                    ! function e(t, n) {
                        void 0 === n && (n = !1), t.selections && (n || t.selections.some(function(e) {
                            return "Field" === e.kind && "__typename" === e.name.value
                        }) || t.selections.push(j), t.selections.forEach(function(t) {
                            "Field" === t.kind ? 0 !== t.name.value.lastIndexOf("__", 0) && t.selectionSet && e(t.selectionSet) : "InlineFragment" === t.kind && t.selectionSet && e(t.selectionSet)
                        }))
                    }(e.selectionSet, t)
                }), G.set(e, n), n
            }
            var H = {
                    test: function(e) {
                        var t = "connection" === e.name.value;
                        return t && (e.arguments && e.arguments.some(function(e) {
                            return "key" === e.name.value
                        }) || console.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), t
                    }
                },
                Y = new Map;

            function z(e) {
                D(e);
                var t = Y.get(e);
                if (t) return t;
                var n = W([H], e);
                return Y.set(e, n), n
            }
            var X = n("XvA5");

            function K(e) {
                try {
                    return e()
                } catch (e) {
                    console.error && console.error(e)
                }
            }

            function q(e) {
                return e.errors && e.errors.length
            }

            function Q(e, t) {
                if (e === t) return !0;
                if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                if (null != e && "object" == typeof e && null != t && "object" == typeof t) {
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            if (!Object.prototype.hasOwnProperty.call(t, n)) return !1;
                            if (!Q(e[n], t[n])) return !1
                        }
                    for (var n in t)
                        if (!Object.prototype.hasOwnProperty.call(e, n)) return !1;
                    return !0
                }
                return !1
            }

            function Z(e) {
                return Object(X.a)() || Object(X.c)() ? function e(t) {
                    return Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function(n) {
                        !t.hasOwnProperty(n) || null === t[n] || "object" != typeof t[n] && "function" != typeof t[n] || Object.isFrozen(t[n]) || e(t[n])
                    }), t
                }(e) : e
            }
            var J = Object.create({});

            function $(e, t) {
                if (void 0 === t && (t = "warn"), !Object(X.b)() && !J[e]) switch (Object(X.c)() || (J[e] = !0), t) {
                    case "error":
                        console.error(e);
                        break;
                    default:
                        console.warn(e)
                }
            }
            n.d(t, !1, function() {
                return y
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return T
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return A
            }), n.d(t, !1, function() {
                return D
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return R
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, !1, function() {
                return B
            }), n.d(t, !1, function() {
                return w
            }), n.d(t, !1, function() {
                return P
            }), n.d(t, !1, function() {
                return L
            }), n.d(t, !1, function() {
                return M
            }), n.d(t, !1, function() {
                return F
            }), n.d(t, !1, function() {
                return U
            }), n.d(t, !1, function() {
                return W
            }), n.d(t, "a", function() {
                return V
            }), n.d(t, !1, function() {
                return z
            }), n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return o
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, !1, function() {
                return c
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, !1, function() {
                return E
            }), n.d(t, !1, function() {
                return I
            }), n.d(t, !1, function() {
                return x
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return X.b
            }), n.d(t, !1, function() {
                return X.a
            }), n.d(t, !1, function() {
                return X.c
            }), n.d(t, !1, function() {
                return K
            }), n.d(t, !1, function() {
                return q
            }), n.d(t, !1, function() {
                return Q
            }), n.d(t, !1, function() {
                return Z
            }), n.d(t, !1, function() {
                return $
            })
        },
        WHSC: function(e, t, n) {},
        WSnR: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("/7QA"),
                r = n("DMoW"),
                i = n("0SKf"),
                o = function(e) {
                    var t = e.node;
                    if (!t) return "";
                    var n = t.displayName,
                        a = "",
                        i = t.game,
                        o = t.type;
                    if (!n && i && (n = i.displayName), !n) return "";
                    switch (o !== r.e.GAME_TRAILER && o !== r.e.MISC_TRAILER || (a = "[Trailer]"), o) {
                        case r.e.GAME_TRAILER:
                        case r.e.MISC_TRAILER:
                            a = "[Trailer]";
                            break;
                        case r.e.PAY_TO_STREAM:
                            a = (t.availablePlatforms || []).map(function(e) {
                                return "[" + e + "]"
                            }).join(" ");
                            break;
                        default:
                            a = ""
                    }
                    return a ? n + " " + a : n
                },
                s = function(e) {
                    switch (e) {
                        case i.d.BountiesCompleted:
                            return Object(a.d)("Bounties Completed", "DevBountyBoardCampaignPage");
                        case i.d.Viewers:
                            return Object(a.d)("Viewers", "DevBountyBoardCampaignPage");
                        case i.d.Viewers2m:
                            return Object(a.d)("Viewers >2 min", "DevBountyBoardCampaignPage");
                        case i.d.MinutesWatched:
                            return Object(a.d)("Minutes Watched", "DevBountyBoardCampaignPage");
                        default:
                            return ""
                    }
                }
        },
        XvA5: function(e, t, n) {
            "use strict";
            (function(e) {
                function a(t) {
                    return (void 0 !== e ? "production" : "development") === t
                }

                function r() {
                    return !0 === a("production")
                }

                function i() {
                    return !0 === a("development")
                }

                function o() {
                    return !0 === a("test")
                }
                n.d(t, "b", function() {
                    return r
                }), n.d(t, "a", function() {
                    return i
                }), n.d(t, "c", function() {
                    return o
                })
            }).call(this, n("8oxB"))
        },
        YbCS: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_CampaignFunnel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "campaignID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                        value: "company"
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
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "campaignID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "campaignID"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "devBountyFunnel"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
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
                    end: 278
                }
            };
            a.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/campaign-funnel.gql"\nquery DevBountyBoardDashboard_CampaignFunnel($campaignID: ID!) {\ncurrentUser {\nid\ncompany {\nid\nbountyCampaigns(campaignID: $campaignID) {\nedges {\ncursor\nnode {\n...devBountyFunnel\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("ooYd").definitions)), e.exports = a
        },
        Z9JJ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NavSearch"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platform"
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
                                value: "search"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
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
                                        value: "result"
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
                    end: 112
                }
            };
            n.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Z9g5: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("aCAx"),
                l = n("Ue10"),
                c = n("/7QA"),
                u = n("yR8l"),
                d = n("geRD"),
                m = n("DMoW"),
                p = n("7Vxt"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            reason: "",
                            errorCode: null
                        }, t.reasons = [{
                            key: "i-didnt-like",
                            text: Object(c.d)("I didn't like the game.", "CancelBountyModal")
                        }, {
                            key: "comm-didnt-like",
                            text: Object(c.d)("My community didn't like the game.", "CancelBountyModal")
                        }, {
                            key: "i-comm-didnt-like",
                            text: Object(c.d)("Both my community and I didn't like the game.", "CancelBountyModal")
                        }, {
                            key: "no-time",
                            text: Object(c.d)("I don't have time to complete the bounty.", "CancelBountyModal")
                        }, {
                            key: "cant-start",
                            text: Object(c.d)("I can't figure out how to start the bounty.", "CancelBountyModal")
                        }, {
                            key: "accident",
                            text: Object(c.d)("I accidentally activated the wrong bounty.", "CancelBountyModal")
                        }, {
                            key: "another-offer",
                            text: Object(c.d)("I found another bounty I want to activate.", "CancelBountyModal")
                        }, {
                            key: "just-testing",
                            text: Object(c.d)("I was just testing to see how things worked.", "CancelBountyModal")
                        }, {
                            key: "other",
                            text: Object(c.d)("Other", "CancelBountyModal")
                        }], t.handleSelectChange = function(e) {
                            t.setState({
                                reason: e.target.value
                            })
                        }, t.onClose = function() {
                            t.state.errorCode && t.props.refreshData(), t.props.onClose()
                        }, t.onCancel = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            e = null, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, 4, 5]), t = {
                                                bountyID: this.props.bounty.id,
                                                reason: this.state.reason,
                                                userID: this.props.channelID
                                            }, [4, this.props.cancelBounty(Object(d.a)(t))];
                                        case 2:
                                            return (n = a.sent()).data.cancelBounty && n.data.cancelBounty.error ? e = n.data.cancelBounty.error.code : n.data.cancelBounty && n.data.cancelBounty.bounty && this.props.handleBountyStatusChanged(n.data.cancelBounty.bounty), [3, 5];
                                        case 3:
                                            return a.sent(), e = m.h.UNKNOWN_ERROR, [3, 5];
                                        case 4:
                                            return e ? this.setState({
                                                errorCode: e
                                            }) : this.props.onClose(), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.getMessageFromErrorCode = function(e) {
                            return e === m.h.BOUNTY_NOT_LIVE ? Object(c.d)("This bounty is no longer live. It may have already been completed or cancelled.", "CancelBountyModal") : Object(c.d)("Something went wrong and the bounty could not be cancelled.", "CancelBountyModal")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.reasons.map(function(t) {
                                var n = t.key,
                                    a = t.text;
                                return r.createElement("option", {
                                    value: n,
                                    key: n,
                                    selected: e.state.reason === n
                                }, a)
                            }),
                            n = Object(c.d)("Cancel Bounty", "CancelBountyModal"),
                            a = null;
                        return this.state.errorCode && (a = r.createElement(l.Wa, {
                            "data-test-selector": "accept-bounty-modal-error-message",
                            padding: {
                                top: 2
                            },
                            fullWidth: !0,
                            flexShrink: 0
                        }, r.createElement(l.W, {
                            color: l.O.Error
                        }, this.getMessageFromErrorCode(this.state.errorCode)))), r.createElement(l.Wa, {
                            padding: 3
                        }, r.createElement(l.Wa, null, r.createElement(l.W, {
                            type: l.Ob.H4
                        }, n), r.createElement(l.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(l.W, null, Object(c.d)("Are you sure you want to cancel this bounty? If there are still bounties available you can pick it up again later.", "CancelBountyModal"))), r.createElement(l.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(l.W, null, Object(c.d)("Let us know why the bounty didn't work out:", "CancelBountyModal"))), r.createElement(l.tb, {
                            "data-test-selector": "cancel-bounty-modal-reason-select",
                            onChange: this.handleSelectChange,
                            value: this.state.reason
                        }, r.createElement("option", {
                            disabled: !0,
                            selected: !0,
                            value: ""
                        }, Object(c.d)("Select Reason", "CancelBountyModal")), t)), a, r.createElement(l.Wa, {
                            display: l.X.Flex,
                            flexDirection: l.Z.Row,
                            alignItems: l.f.Center,
                            justifyContent: l.Va.Center,
                            padding: {
                                top: 2
                            }
                        }, r.createElement(l.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(l.z, {
                            "data-test-selector": "cancel-bounty-modal-cancel-button",
                            onClick: this.onClose,
                            type: l.F.Hollow
                        }, Object(c.d)("Nevermind", "CancelBountyModal"))), r.createElement(l.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(l.z, {
                            "data-test-selector": "cancel-bounty-modal-confirm-button",
                            disabled: "" === this.state.reason || !!this.state.errorCode,
                            onClick: this.onCancel,
                            type: l.F.Alert
                        }, n))))
                    }, t
                }(r.PureComponent),
                h = Object(u.a)(p, {
                    name: "cancelBounty"
                })(f),
                g = (n("CVMv"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(l.yb, {
                            className: "cancel-bounty-modal__container",
                            background: l.r.Base
                        }, r.createElement(h, {
                            "data-test-selector": "cancel-bounty-modal-selector",
                            onClose: this.props.closeModal,
                            bounty: this.props.bounty,
                            channelID: this.props.channelID,
                            handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                            refreshData: this.props.refreshData
                        }))
                    }, t
                }(r.Component));
            var E = Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: s.c
                }, e)
            })(g);
            n.d(t, !1, function() {
                return "cancel-bounty-modal-selector"
            }), n.d(t, !1, function() {
                return g
            }), n.d(t, "a", function() {
                return E
            })
        },
        aSNP: function(e, t, n) {},
        cUgj: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_UserCompanySettings"
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
                                        value: "company"
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
                                                value: "brandPortalSettings"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            n.loc.source = {
                body: "query DevBountyBoardDashboard_UserCompanySettings {\ncurrentUser {\nid\ncompany {\nid\nbrandPortalSettings {\nisEnabled\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        dfkd: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("NAv5"),
                r = n("/7QA"),
                i = n("TDse"),
                o = function() {
                    function e(e, t) {
                        var n = this;
                        switch (this.formatDateFromLabel = function(e) {
                            return n.formatDate(new Date(Number(e)))
                        }, this.formatShortDateFromLabel = function(e) {
                            return n.formatShortDate(new Date(Number(e)))
                        }, this.aggregationInterval = e, this.interval = t, this.aggregationInterval) {
                            case i.a.Day:
                                this.addInterval = a.addDays, this.startOf = a.startOfDay, this.formatDate = function(e) {
                                    return Object(r.c)(e, {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric"
                                    })
                                }, this.formatShortDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        day: "numeric"
                                    })
                                };
                                break;
                            case i.a.Week:
                                this.addInterval = a.addWeeks, this.startOf = a.startOfWeek, this.formatDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        day: "numeric"
                                    }) + " – " + Object(r.c)(Object(a.endOfWeek)(e), {
                                        month: "short",
                                        day: "numeric"
                                    })
                                }, this.formatShortDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        day: "numeric"
                                    })
                                };
                                break;
                            case i.a.Month:
                                this.addInterval = a.addMonths, this.startOf = a.startOfMonth, this.formatDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        year: "numeric"
                                    })
                                }, this.formatShortDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        year: "numeric"
                                    })
                                };
                                break;
                            default:
                                throw new Error("Expected an AggregationInterval but received " + this.aggregationInterval)
                        }
                        this.dates = this.datesInRange(t), this.datesAsNumbers = this.dates.map(function(e) {
                            return e.getTime()
                        }), this.datesAsLabels = this.datesAsNumbers.map(function(e) {
                            return e.toString()
                        }), this.formattedDates = this.dates.map(function(e) {
                            return n.formatShortDate(e)
                        })
                    }
                    return e.prototype.sum = function(e, t) {
                        var n = this,
                            a = new Map;
                        return e.forEach(function(e) {
                            var r = t(e),
                                i = r.value,
                                o = r.date,
                                s = n.startOf(o).getTime(),
                                l = a.get(s) || 0;
                            a.set(s, l + i)
                        }), this.datesAsNumbers.map(function(e) {
                            return a.get(e) || 0
                        })
                    }, e.prototype.average = function(e, t) {
                        var n = this,
                            a = new Map;
                        return e.forEach(function(e) {
                            var r = t(e),
                                i = r.value,
                                o = r.date,
                                s = n.startOf(o).getTime(),
                                l = a.get(s);
                            l || (l = {
                                total: 0,
                                count: 0
                            }, a.set(s, l)), l.count += 1, l.total += i
                        }), this.datesAsNumbers.map(function(e) {
                            var t = a.get(e) || {
                                total: 0,
                                count: 1
                            };
                            return t.total / t.count
                        })
                    }, e.prototype.weightedAverage = function(e, t) {
                        var n = this,
                            a = new Map;
                        return e.forEach(function(e) {
                            var r = t(e),
                                i = r.weight,
                                o = r.value,
                                s = r.date,
                                l = n.startOf(s).getTime(),
                                c = a.get(l);
                            c || (c = {
                                totalWeight: 0,
                                weightedValue: 0
                            }, a.set(l, c)), c.totalWeight += i, c.weightedValue += i * o
                        }), this.datesAsNumbers.map(function(e) {
                            var t = a.get(e) || {
                                totalWeight: 0,
                                weightedValue: 0
                            };
                            return t.weightedValue / t.totalWeight
                        })
                    }, e.prototype.max = function(e, t) {
                        var n = this,
                            a = new Map;
                        return e.forEach(function(e) {
                            var r = t(e),
                                i = r.value,
                                o = r.date,
                                s = n.startOf(o).getTime(),
                                l = a.get(s) || 0;
                            a.set(s, Math.max(l, i))
                        }), this.datesAsNumbers.map(function(e) {
                            return a.get(e) || 0
                        })
                    }, e.prototype.ratio = function(e, t) {
                        var n = this,
                            a = new Map;
                        return e.forEach(function(e) {
                            var r = t(e),
                                i = r.numerator,
                                o = r.denominator,
                                s = r.date,
                                l = n.startOf(s).getTime(),
                                c = a.get(l);
                            c || (c = {
                                numerator: 0,
                                denominator: 0
                            }, a.set(l, c)), c.numerator += i, c.denominator += o
                        }), this.datesAsNumbers.map(function(e) {
                            var t = a.get(e) || {
                                numerator: 0,
                                denominator: 1
                            };
                            return Math.round(t.numerator / t.denominator)
                        })
                    }, Object.defineProperty(e.prototype, "isByDay", {
                        get: function() {
                            return this.aggregationInterval === i.a.Day
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isByWeek", {
                        get: function() {
                            return this.aggregationInterval === i.a.Week
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isByMonth", {
                        get: function() {
                            return this.aggregationInterval === i.a.Month
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(e) {
                        return e.aggregationInterval === this.aggregationInterval
                    }, e.prototype.datesInRange = function(e) {
                        for (var t = [], n = this.startOf(e.start); n <= e.end;) t.push(n), n = this.addInterval(n, 1);
                        return t
                    }, e
                }()
        },
        eNO8: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("TSYQ"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("u5aL"),
                c = n("8/mp"),
                u = n("8Ad5"),
                d = n("Ue10"),
                m = function(e) {
                    return o.createElement(d.Wa, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: d.X.Flex,
                        flexDirection: d.Z.Column,
                        justifyContent: d.Va.Center,
                        alignItems: d.f.Center,
                        position: d.eb.Absolute
                    }, o.createElement(d.Wa, {
                        textAlign: d.Kb.Center,
                        flexShrink: 1
                    }, o.createElement(d.nb, {
                        asset: e.icon,
                        width: 46,
                        height: 48,
                        type: d.pb.Alt2
                    })), o.createElement(d.Wa, {
                        margin: {
                            top: 1
                        },
                        textAlign: d.Kb.Center
                    }, o.createElement(d.W, {
                        type: d.Ob.H4,
                        color: d.O.Alt2
                    }, e.titleText)), o.createElement(d.Wa, {
                        textAlign: d.Kb.Center
                    }, o.createElement(d.W, {
                        type: d.Ob.P,
                        color: d.O.Alt2
                    }, e.subText)))
                },
                p = n("N0BP"),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(d.Ta, r.__assign({
                            onClick: this.props.onClick,
                            linkTo: this.props.linkTo,
                            hover: this.props.hover,
                            tabIndex: -1,
                            key: this.props.id
                        }, Object(p.a)(this.props)), o.createElement(d.Wa, {
                            className: "search-game-result-card",
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, o.createElement(d.G, {
                            row: !0
                        }, o.createElement(d.H, {
                            overflow: d.Za.Hidden
                        }, o.createElement(d.Oa, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(d.W, {
                            type: d.Ob.H5,
                            ellipsis: !0
                        }, this.props.title))))))
                    }, t
                }(o.Component),
                h = n("fk61");
            n("tK6h");
            n.d(t, "a", function() {
                    return E
                }),
                function(e) {
                    e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
                }(a || (a = {}));
            var g = {};
            g[u.a.Esc] = a.Dismiss, g[u.a.Enter] = a.Confirm, g[u.a.Tab] = a.Confirm, g[u.a.Up] = a.Up, g[u.a.Down] = a.Down;
            var E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onFocus = function() {
                        n.props.searchTerm && n.setState({
                            isOpen: !0
                        })
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.handleInteraction(a.Dismiss)
                    }, n.onKeyDown = function(e) {
                        var t = g[e.keyCode];
                        t && n.handleInteraction(t)
                    }, n.handleInteraction = function(e) {
                        switch (e) {
                            case a.Dismiss:
                                "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Confirm:
                                n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Up:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                });
                                break;
                            case a.Down:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.min(n.props.gameResults.length - 1, n.state.highlightedGameIndex + 1)
                                })
                        }
                    }, n.onChange = function(e) {
                        var t = e.target.value;
                        n.setState({
                            isOpen: !!t,
                            highlightedGameIndex: 0
                        }, function() {
                            n.props.startNewSearch(t)
                        })
                    }, n.onClickGame = function(e) {
                        var t = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                        n.props.selectGame(t), n.setState({
                            isOpen: !1
                        })
                    }, n.state = n.state = {
                        isOpen: !1,
                        highlightedGameIndex: 0
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, o.createElement(l.a, {
                        onClickOut: this.onClickOut
                    }, o.createElement(d.Qa, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: d.Sa.Text,
                        icon: d.ob.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm,
                        placeholder: Object(s.d)("Type to search and add games", "VideoManagerEdit")
                    }), o.createElement(d.u, {
                        direction: d.v.Bottom,
                        noTail: !0,
                        size: this.props.compact ? d.w.Medium : d.w.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = i("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? o.createElement(d.Ya, {
                        fillContent: !0
                    }) : o.createElement(m, {
                        icon: d.ob.SearchNoResults,
                        titleText: Object(s.d)("No results found", "GameSelector"),
                        subText: Object(s.d)("They're probably in another castle", "GameSelector")
                    }) : o.createElement(m, {
                        icon: d.ob.DeadGlitch,
                        titleText: Object(s.d)("Search is not available at this time", "GameSelector"),
                        subText: Object(s.d)("Please try again later", "GameSelector")
                    })), o.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, o.createElement(d.yb, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: d.r.Base,
                        position: d.eb.Absolute,
                        overflow: d.Za.Hidden,
                        display: d.X.Block
                    }, o.createElement(c.b, {
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, o.createElement(d.Wa, {
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, o.createElement(c.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, a, r) {
                        var i = r[t] === r[a];
                        return n.props.compact ? o.createElement(f, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: i,
                            "data-game-highlighted": i,
                            "data-game-index": a
                        }) : o.createElement(h.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: i,
                            "data-game-highlighted": i,
                            "data-game-index": a
                        })
                    })
                }, t
            }(o.Component)
        },
        fVj5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return s
            });
            var a = n("/7QA"),
                r = n("D7An");

            function i() {
                return "experiment" === a.p.experiments.getAssignment(r.b.Tags)
            }
            var o = null;

            function s() {
                return null === o && (o = i()), o
            }
        },
        fk61: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
                l = n("N0BP"),
                c = n("3W+h"),
                u = n("JVUd"),
                d = n("25n4"),
                m = n("0LAi"),
                p = n("fVj5"),
                f = n("Ue10"),
                h = n("5hPa"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isExperiment = Object(p.b)(), t.onClick = function(e) {
                            t.props.trackClick(t.props.id), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.impressionListener.registerImpressionCallback(function() {
                            e.props.trackImpression(e.props.id)
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(f.Ta, a.__assign({
                            onClick: this.onClick,
                            linkTo: this.props.linkTo,
                            hover: this.props.hover,
                            tabIndex: -1
                        }, Object(l.a)(this.props)), r.createElement(f.Wa, {
                            className: "search-game-result-card",
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(f.G, {
                            row: !0
                        }, r.createElement(f.I, {
                            alt: this.props.imageAlt,
                            src: this.props.data.game && this.props.data.game.boxArtURL ? this.props.data.game.boxArtURL : o.a.defaultBoxArtURL,
                            size: f.J.Size4,
                            aspect: f.p.BoxArt,
                            borderRadius: f.x.Small
                        }), r.createElement(f.H, {
                            overflow: f.Za.Hidden
                        }, r.createElement(f.Wa, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(f.W, {
                            type: f.Ob.H5,
                            ellipsis: !0
                        }, this.props.title), this.isExperiment && this.props.tags && r.createElement(f.Wa, {
                            padding: {
                                top: .5
                            }
                        }, r.createElement(m.a, {
                            tags: this.props.tags,
                            linkPath: c.a.DirectoryTag,
                            tagNumberLimit: 3
                        })))))))
                    }, t
                }(r.Component),
                E = Object(i.compose)(Object(s.a)(h, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(u.a)("SearchGameResultCard", {
                    percentage: 75
                }), Object(d.b)())(g);
            n.d(t, "a", function() {
                return E
            })
        },
        fvts: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devBountyStats"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyCampaign"
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
                                value: "startTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "brandDetails"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "campaignReporting"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "performanceMetrics"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "completedBountyCount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "endTime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "minutesWatched"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "startTime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "twoMinuteViewerCount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "totalViewerCount"
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
                    end: 212
                }
            };
            n.loc.source = {
                body: "fragment devBountyStats on BountyCampaign {\nid\nstartTime\nbrandDetails {\ncampaignReporting {\nperformanceMetrics {\ncompletedBountyCount\nendTime\nminutesWatched\nstartTime\ntwoMinuteViewerCount\ntotalViewerCount\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hLBu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            n("NAv5");
            var a = n("/7QA");

            function r(e) {
                var t = function(e) {
                        return {
                            hours: Math.floor(e / 60),
                            minutes: e % 60
                        }
                    }(e),
                    n = Object(a.d)("{time, plural, one {1 hour} other {{time} hours}}", {
                        time: t.hours
                    }, "BountyUtilitiesTimeSpan"),
                    r = Object(a.d)("{time, plural, one {1 minute} other {{time} minutes}}", {
                        time: t.minutes
                    }, "BountyUtilitiesTimeSpan");
                return t.hours && !t.minutes ? n : t.minutes && !t.hours ? r : Object(a.d)("{hours} and {minutes}", {
                    hours: n,
                    minutes: r
                }, "BountyUtilitiesTimeSpan")
            }
        },
        "j/Uj": function(e, t, n) {},
        jCK8: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("/MKj"),
                i = n("fvjX"),
                o = n("aCAx"),
                s = n("kRSO"),
                l = n("Z9g5"),
                c = n("q1tI"),
                u = n("6x+I"),
                d = n("/7QA"),
                m = n("DMoW"),
                p = n("N74f"),
                f = n("GnwI"),
                h = n("pQow"),
                g = n("hLBu"),
                E = n("OnAS"),
                y = n("Ue10"),
                b = (n("aSNP"), {
                    "data-test-selector": "bounty-expanded-section"
                }),
                v = {
                    "data-test-selector": "bounty-activate-btn"
                },
                O = {
                    "data-test-selector": "bounty-platform-select"
                },
                T = {
                    "data-test-selector": "bounty-sub-header"
                },
                N = {
                    "data-test-selector": "bounty-description"
                },
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onChangePlatform = function(e) {
                            var t = e.currentTarget.value;
                            n.setState({
                                selectedPlatform: t
                            })
                        }, n.getPlatformIconInfo = function(e) {
                            var t = null,
                                n = "";
                            return Object.keys(p.a).includes(e) && (t = p.a[e]), "PlayStation VR" === e && (n = "VR"), {
                                asset: t,
                                suffix: n
                            }
                        }, n.renderPlatformIcons = function(e) {
                            return c.createElement(y.Wa, {
                                margin: {
                                    right: .5
                                },
                                display: y.X.InlineFlex
                            }, e.map(function(e) {
                                var t = n.getPlatformIconInfo(e);
                                return c.createElement(c.Fragment, {
                                    key: e
                                }, t.asset && c.createElement(y.nb, {
                                    asset: t.asset,
                                    type: y.pb.Alt2
                                }), t.suffix && c.createElement(y.Wa, {
                                    display: y.X.Flex,
                                    alignItems: y.f.Center
                                }, c.createElement(y.W, {
                                    color: y.O.Alt2
                                }, t.suffix)))
                            }))
                        }, n.renderPlatformSelector = function(e) {
                            return c.createElement(y.Wa, {
                                margin: {
                                    right: 1
                                }
                            }, c.createElement(y.tb, a.__assign({}, O, {
                                onChange: n.onChangePlatform,
                                value: n.state.selectedPlatform || void 0
                            }), c.createElement("option", {
                                value: "",
                                key: "platform-not-selected"
                            }, Object(d.d)("Select Platform", "BountyItem")), e.map(function(e) {
                                return c.createElement("option", {
                                    key: e,
                                    value: e
                                }, e)
                            })))
                        }, n.renderExpanded = function(e) {
                            var t, r = e.campaign.game && e.campaign.game.boxArtURL || "",
                                i = e.campaign.game && e.campaign.game.displayName || "",
                                o = e.campaign.availablePlatforms,
                                s = null !== o && o.length > 1,
                                l = !!e.maximumPayoutCents && s && !n.state.selectedPlatform,
                                p = c.createElement(y.Wa, {
                                    fullWidth: !0,
                                    margin: {
                                        bottom: 1
                                    }
                                }, c.createElement(y.W, null, Object(d.d)("<x:bold>Game key included with bounty activation.</x:bold> Keys are emailed within 72 hours of bounty activation.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    }
                                }, "BountyItem"))),
                                f = e.campaign.details ? c.createElement(y.Wa, {
                                    fullWidth: !0,
                                    margin: {
                                        bottom: 1
                                    }
                                }, c.createElement(u, {
                                    source: e.campaign.details,
                                    renderers: {
                                        Link: n.renderNewWindowLink
                                    }
                                })) : null;
                            switch (e.status) {
                                case m.f.AVAILABLE:
                                    t = c.createElement(c.Fragment, null, s && n.renderPlatformSelector(o || []), c.createElement(y.z, a.__assign({}, v, {
                                        disabled: l || !e.id,
                                        onClick: n.showAcceptBountyModal
                                    }), Object(d.d)("Activate Bounty", "BountyItem")));
                                    break;
                                case m.f.LIVE:
                                    t = c.createElement(c.Fragment, null, c.createElement(y.Wa, {
                                        margin: {
                                            right: 2
                                        }
                                    }, c.createElement(y.z, {
                                        type: y.F.Text,
                                        onClick: n.showTermsModal
                                    }, Object(d.d)("Terms", "BountyItem"))), c.createElement(y.z, {
                                        onClick: n.showCancelBountyModal,
                                        type: y.F.Hollow
                                    }, Object(d.d)("Cancel Bounty", "BountyItem")));
                                    break;
                                case m.f.COMPLETED:
                                case m.f.CANCELLED:
                                    p = null, f = null
                            }
                            return c.createElement(y.i, {
                                type: y.n.SlideInTop,
                                duration: y.k.Short,
                                enabled: !0,
                                timing: y.m.EaseOut
                            }, c.createElement(y.yb, a.__assign({
                                className: "bounty-item__expanded",
                                elevation: 1
                            }, b, {
                                padding: 2,
                                display: y.X.Flex,
                                flexDirection: y.Z.Column,
                                fullWidth: !0
                            }), c.createElement(y.Wa, {
                                display: y.X.Flex,
                                flexDirection: y.Z.Row,
                                flexWrap: y.Aa.NoWrap,
                                fullWidth: !0
                            }, c.createElement(y.Wa, {
                                className: "bounty-item__boxart",
                                margin: {
                                    right: 2,
                                    bottom: 2
                                }
                            }, c.createElement(y.o, {
                                ratio: y.p.BoxArt
                            }, c.createElement("img", {
                                src: r
                            }))), c.createElement(y.Wa, null, c.createElement(y.W, {
                                type: y.Ob.H4
                            }, i), c.createElement(y.W, {
                                color: y.O.Alt2
                            }, e.campaign.sponsor), c.createElement(y.Wa, {
                                padding: {
                                    top: 2
                                }
                            }, p), c.createElement(y.Wa, null, n.renderDescriptionText(e)))), c.createElement(y.Wa, {
                                padding: {
                                    top: 2
                                }
                            }, f), c.createElement(y.Wa, {
                                fullWidth: !0,
                                display: y.X.Flex,
                                flexDirection: y.Z.Row,
                                justifyContent: y.Va.Between,
                                alignItems: y.f.Center
                            }, c.createElement(y.Wa, null, c.createElement(y.W, {
                                type: y.Ob.H4
                            }, n.renderPayoutText(e))), c.createElement(y.Wa, {
                                display: y.X.Flex,
                                flexDirection: y.Z.Row,
                                alignItems: y.f.Center
                            }, t))))
                        }, n.trackViewDetails = function() {
                            n.props.bounty.id === n.props.selectedItem || n.props.bounty.campaign.id === n.props.selectedItem || n.trackAction(E.a.ViewDetails)
                        }, n.showTermsModal = function() {
                            n.trackAction(E.a.Terms), n.props.showAcceptBountyModal({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                channelName: n.props.channelName,
                                handleBountyStatusChanged: n.props.handleBountyStatusChanged,
                                platform: n.props.bounty.platform,
                                refreshData: n.props.refreshData
                            })
                        }, n.showAcceptBountyModal = function() {
                            n.trackAction(E.a.ViewLegal), n.props.showAcceptBountyModal({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                channelName: n.props.channelName,
                                handleBountyStatusChanged: n.props.handleBountyStatusChanged,
                                platform: n.state.selectedPlatform || null,
                                refreshData: n.props.refreshData
                            })
                        }, n.showCancelBountyModal = function() {
                            n.props.showCancelBountyModal({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                handleBountyStatusChanged: n.props.handleBountyStatusChanged,
                                refreshData: n.props.refreshData
                            })
                        }, n.renderNewWindowLink = function(e) {
                            return c.createElement("a", {
                                href: e.href,
                                target: "_blank"
                            }, e.children)
                        }, n.trackImpression = function() {
                            n.props.impressionGroupID && Object(E.c)({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                impressionGroupID: n.props.impressionGroupID
                            })
                        }, n.trackAction = function(e, t) {
                            Object(E.b)({
                                action: e,
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                cancelReason: t,
                                selectedPlatform: n.state.selectedPlatform || void 0
                            })
                        };
                        var r = t.bounty.campaign.availablePlatforms;
                        return t.bounty.status === m.f.AVAILABLE && r && 1 === r.length ? n.state = {
                            selectedPlatform: r[0]
                        } : n.state = {
                            selectedPlatform: void 0
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        var e = this.props.bounty,
                            t = this.props.channelName,
                            n = this.props.linkDisabled,
                            r = e.id === this.props.selectedItem || e.campaign.id === this.props.selectedItem && e.status === m.f.AVAILABLE,
                            i = e.status === m.f.COMPLETED ? e.payoutCents || 0 : e.maximumPayoutCents,
                            o = e.status === m.f.CANCELLED ? c.createElement(y.W, {
                                type: y.Ob.H2
                            }, Object(d.d)("N/A", "BountyItem")) : c.createElement(y.Wa, {
                                display: y.X.Flex
                            }, c.createElement(y.W, {
                                fontSize: y.Ba.Size7
                            }, "$"), c.createElement(y.W, {
                                type: y.Ob.H2
                            }, Number.isNaN(i / 100) ? "XX" : i / 100)),
                            s = e.status === m.f.AVAILABLE ? e.campaign.availablePlatforms : e.platform ? [e.platform] : null,
                            l = {
                                backgroundImage: "url(" + (e.campaign.game && e.campaign.game.coverURL || "") + ")"
                            },
                            u = Object(h.c)(t);
                        return r || (u = e.status === m.f.AVAILABLE ? Object(h.b)(t, e.campaign) : Object(h.a)(t, e)), n && (u = "#"), c.createElement(y.Wa, {
                            className: "bounty-item",
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(y.yb, {
                            elevation: 2
                        }, c.createElement(y.U, {
                            hoverUnderlineNone: !0,
                            to: u,
                            onClick: this.trackViewDetails,
                            className: "bounty-item__link"
                        }, c.createElement(y.Wa, {
                            display: y.X.Flex,
                            position: y.eb.Relative
                        }, c.createElement(y.Wa, {
                            position: y.eb.Absolute,
                            fullWidth: !0,
                            fullHeight: !0
                        }, c.createElement("div", {
                            className: "bounty-item__backdrop",
                            style: l
                        })), c.createElement(y.Wa, {
                            className: "bounty-item__indicator",
                            position: y.eb.Relative,
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            justifyContent: y.Va.Center,
                            padding: {
                                left: 2
                            }
                        }, r ? c.createElement(y.nb, {
                            asset: y.ob.AngleUp,
                            type: y.pb.Alt2
                        }) : c.createElement(y.nb, {
                            asset: y.ob.AngleDown,
                            type: y.pb.Alt2
                        })), c.createElement(y.Wa, {
                            flexGrow: 1,
                            className: "bounty-item__description",
                            display: y.X.Flex,
                            padding: {
                                y: 2,
                                left: 1,
                                right: 2
                            },
                            justifyContent: y.Va.Around,
                            flexDirection: y.Z.Column,
                            position: y.eb.Relative
                        }, c.createElement(y.W, {
                            type: y.Ob.H4,
                            color: y.O.Base,
                            ellipsis: !0,
                            title: e.campaign.title
                        }, e.campaign.title), c.createElement(y.Wa, a.__assign({}, T, {
                            display: y.X.Flex,
                            alignItems: y.f.Center
                        }), s && this.renderPlatformIcons(s), c.createElement(y.W, {
                            color: y.O.Alt2
                        }, this.renderTimeString(e)))), c.createElement(y.yb, {
                            className: "bounty-item__amount",
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            justifyContent: y.Va.Center,
                            flexGrow: 0,
                            flexShrink: 0,
                            position: y.eb.Relative,
                            background: y.r.Base
                        }, o)))), r && this.renderExpanded(e))
                    }, t.prototype.renderDescriptionText = function(e) {
                        var t = this,
                            n = e.payoutCents || 0,
                            r = e.maximumPayoutCents || 0,
                            i = e.maximumPayoutCCU || "XXXX";
                        switch (e.status) {
                            case m.f.COMPLETED:
                                return 0 === e.payoutCents ? Object(d.d)("Unfortunately your average concurrent viewers did not reach the minimum requirement of <x:bold>{ccuMin} concurrent viewers</x:bold> and you will not receive a payout for this bounty. Make sure to do bounties during your peak hours to increase your chances of a good payout.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    ccuMin: e.minimumPayoutCCU || 0
                                }, "BountyItem") : n === r ? Object(d.d)("Based on your concurrent viewers, you got the max payout of <x:bold>${maxPayout}</x:bold>.  Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    maxPayout: r / 100
                                }, "BountyItem") : i ? Object(d.d)("You hit <x:bold>{percentPayout}%</x:bold> of your target payout goal, for a total of <x:bold>${payout}</x:bold>. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    percentPayout: Math.floor(n / r * 100),
                                    payout: n / 100
                                }, "BountyItem") : Object(d.d)("Based on your concurrent viewers, you got a payout of <x:bold>${payout}</x:bold> out of a potential ${maxPayout}. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    payout: n / 100,
                                    maxPayout: r / 100
                                }, "BountyItem");
                            case m.f.CANCELLED:
                                return e.lastModifiedAt ? Object(d.d)("This bounty was cancelled on {dateCancelled}.", {
                                    dateCancelled: c.createElement(y.W, {
                                        type: y.Ob.Strong
                                    }, Object(d.c)(new Date(e.lastModifiedAt)))
                                }, "BountyItem") : Object(d.d)("This bounty was cancelled.", "BountyItem");
                            default:
                                return c.createElement(c.Fragment, null, c.createElement(y.W, a.__assign({}, N, {
                                    type: y.Ob.P,
                                    key: "bounty_description_" + e.id
                                }), Object(d.d)("At any point during a stream session, stream {game} for {streamLength} straight with an average of {ccuMax} <x:bold>concurrent viewers</x:bold>. If you don’t hit an average of at least {ccuMin} <x:bold>concurrents</x:bold>, you will not receive a payout. If you achieve the minimum but do not reach the goal, you will get a <x:bold>proportional percentage</x:bold> of the payout.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    ccuMax: c.createElement(y.W, {
                                        type: y.Ob.Strong
                                    }, i),
                                    ccuMin: c.createElement(y.W, {
                                        type: y.Ob.Strong
                                    }, null === e.minimumPayoutCCU ? "XXX" : e.minimumPayoutCCU),
                                    game: c.createElement(y.W, {
                                        type: y.Ob.Strong
                                    }, e.campaign.game && e.campaign.game.displayName),
                                    streamLength: Object(g.a)(e.campaign.streamLengthMinutes)
                                }, "BountyItem")), c.createElement("ul", {
                                    className: "bounty-item__description-list",
                                    key: "bounty_rule_list_" + e.id
                                }, c.createElement("li", {
                                    key: "bounty_rule_2_" + e.id
                                }, Object(d.d)("No needless bad-mouthing of the content, and be sure to engage with the content and your community!", "BountyItem")), c.createElement("li", {
                                    key: "bounty_rule_3_" + e.id
                                }, Object(d.d)("Use the <x:bold>Bounties widget</x:bold> on your <x:link>Live Dashboard</x:link> to add <x:bold>#sponsored</x:bold> to your stream title.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    "x:link": function(e) {
                                        return c.createElement(y.U, {
                                            to: "/" + t.props.channelName + "/dashboard/live"
                                        }, e)
                                    }
                                }, "BountyItem")), c.createElement("li", {
                                    key: "bounty_rule_4_" + e.id
                                }, Object(d.d)('Turn on the "<x:bold>Store Past Broadcasts</x:bold>" option in your <x:link>Channel Settings</x:link>.', {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    },
                                    "x:link": function(n) {
                                        return c.createElement(y.U, {
                                            key: "bount_item_settings_link_" + e.id,
                                            to: "/" + t.props.channelName + "/dashboard/settings"
                                        }, n)
                                    }
                                }, "BountyItem")), c.createElement("li", {
                                    key: "bounty_rule_5_" + e.id
                                }, Object(d.d)("Bounties are held in your queue for a <x:bold>maximum of 5 days</x:bold>. They will expire sooner if the broader bounty campaign is ending.", {
                                    "x:bold": function(e) {
                                        return c.createElement(y.W, {
                                            type: y.Ob.Strong
                                        }, e)
                                    }
                                }, "BountyItem"))))
                        }
                    }, t.prototype.renderPayoutText = function(e) {
                        if (e.status === m.f.COMPLETED) return Object(d.d)("Your Payout: ${amount}", {
                            amount: (e.payoutCents || 0) / 100
                        }, "BountyItem");
                        var t = Number.isNaN(e.maximumPayoutCents / 100) ? "XX" : e.maximumPayoutCents / 100;
                        return Object(d.d)("Max Payout: ${amount}", {
                            amount: t
                        }, "BountyItem")
                    }, t.prototype.renderTimeString = function(e) {
                        switch (e.status) {
                            case m.f.LIVE:
                                return e.endAt ? Object(d.d)("Expires {relativeDate}", {
                                    relativeDate: Object(d.i)(new Date(e.endAt))
                                }, "BountyItem") : "";
                            case m.f.COMPLETED:
                                return e.lastModifiedAt ? Object(d.d)("Completed on {relativeOrAbsoluteDate}", {
                                    relativeOrAbsoluteDate: Object(d.c)(new Date(e.lastModifiedAt))
                                }, "BountyItem") : "";
                            case m.f.CANCELLED:
                                return e.lastModifiedAt ? Object(d.d)("Cancelled on {relativeOrAbsoluteDate}", {
                                    relativeOrAbsoluteDate: Object(d.c)(new Date(e.lastModifiedAt))
                                }, "BountyItem") : "";
                            default:
                            case m.f.AVAILABLE:
                                return e.endAt ? Object(d.d)("Available until {relativeOrAbsoluteDate}", {
                                    relativeOrAbsoluteDate: Object(d.c)(new Date(e.campaign.endAt)) + " " + Object(d.j)(new Date(e.campaign.endAt))
                                }, "BountyItem") : "Available until {DATE}"
                        }
                    }, t
                }(c.Component),
                S = Object(i.compose)(Object(f.b)("BountyItem", {
                    autoReportInteractive: !0
                }))(_);
            var I = Object(r.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showAcceptBountyModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(o.d)(s.a, t)
                    },
                    showCancelBountyModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(o.d)(l.a, t)
                    }
                }, e)
            })(S);
            n.d(t, "a", function() {
                return I
            })
        },
        kRSO: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("aCAx"),
                l = n("Ue10"),
                c = n("/7QA"),
                u = n("yR8l"),
                d = n("geRD"),
                m = n("DMoW"),
                p = n("hLBu"),
                f = n("KeYu"),
                h = function(e) {
                    function t() {
                        var t, n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            errorCode: null
                        }, n.bountyErrorCodeToMessage = ((t = {})[m.i.BOUNTY_LIMIT_REACHED] = Object(c.d)("You have already reached your limit of active bounties. Please complete or cancel an active bounty before activating a new one.", "AcceptBountyModal"), t[m.i.BOUNTY_ALREADY_CLAIMED] = Object(c.d)("Oops, it looks like this bounty is no longer available.", "AcceptBountyModal"), t.default = Object(c.d)("Something went wrong and the bounty could not be activated.", "AcceptBountyModal"), t), n.onClose = function() {
                            n.state.errorCode && n.props.refreshData(), n.props.onClose()
                        }, n.onAccept = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            e = null, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, 4, 5]), t = {
                                                bountyID: this.props.bounty.id,
                                                bountyCampaignID: this.props.bounty.campaign.id,
                                                userID: this.props.channelID,
                                                platform: this.props.platform
                                            }, [4, this.props.claimBounty(Object(d.a)(t))];
                                        case 2:
                                            return (n = a.sent()).data.claimBounty && n.data.claimBounty.error ? e = n.data.claimBounty.error.code : n.data.claimBounty && n.data.claimBounty.claimedBounty && this.props.handleBountyStatusChanged(n.data.claimBounty.claimedBounty), [3, 5];
                                        case 3:
                                            return a.sent(), e = m.i.UNKNOWN_ERROR, [3, 5];
                                        case 4:
                                            return e ? this.setState({
                                                errorCode: e
                                            }) : this.props.onClose(), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.getMessageFromErrorCode = function(e) {
                            return n.bountyErrorCodeToMessage[e || "default"] || n.bountyErrorCodeToMessage.default
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.platform ? " [" + this.props.platform + "]" : "",
                            t = this.props.bounty,
                            n = t.campaign && t.campaign.boxArtURL || t.campaign && t.campaign.game && t.campaign.game.boxArtURL || "",
                            a = null;
                        return this.state.errorCode && (a = r.createElement(l.Wa, {
                            "data-test-selector": "accept-bounty-modal-error-message",
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                right: .5
                            },
                            textAlign: l.Kb.Right,
                            fullWidth: !0,
                            flexShrink: 0
                        }, r.createElement(l.W, {
                            color: l.O.Error
                        }, this.getMessageFromErrorCode(this.state.errorCode)))), r.createElement(l.Wa, {
                            padding: 3
                        }, r.createElement(l.Wa, {
                            display: l.X.Flex,
                            flexDirection: l.Z.Row,
                            flexWrap: l.Aa.NoWrap,
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(l.Wa, {
                            className: "accept-bounty-modal__boxart"
                        }, r.createElement(l.o, {
                            ratio: l.p.BoxArt
                        }, r.createElement("img", {
                            src: n
                        }))), r.createElement(l.Wa, {
                            margin: {
                                left: 2
                            }
                        }, r.createElement(l.Wa, null, r.createElement(l.W, {
                            bold: !0,
                            type: l.Ob.Span
                        }, Object(c.d)("Bounty:", "AcceptBountyModal")), " ", r.createElement(l.W, {
                            "data-test-selector": "accept-bounty-modal-title",
                            type: l.Ob.Span
                        }, Object(c.d)("{bountyTitle}{platform} with an average of {ccuMax} concurrent viewers and #sponsored in your stream title.", {
                            bountyTitle: this.props.bounty.campaign.title,
                            ccuMax: this.props.bounty.maximumPayoutCCU || 0,
                            platform: e
                        }, "AcceptBountyModal"))), r.createElement(l.Wa, null, r.createElement(l.W, {
                            bold: !0,
                            type: l.Ob.Span
                        }, Object(c.d)("Bounty Partner:", "AcceptBountyModal")), " ", r.createElement(l.W, {
                            type: l.Ob.Span
                        }, this.props.bounty.campaign.sponsor)), r.createElement(l.Wa, null, r.createElement(l.W, {
                            bold: !0,
                            type: l.Ob.Span
                        }, Object(c.d)("Influencer:", "AcceptBountyModal")), " ", r.createElement(l.W, {
                            type: l.Ob.Span
                        }, this.props.channelName, " (", Object(c.d)("Twitch ID: {id}", {
                            id: this.props.channelID
                        }, "AcceptBountyModal"), ")")), r.createElement(l.Wa, null, r.createElement(l.W, {
                            bold: !0,
                            type: l.Ob.Span
                        }, Object(c.d)("Bounty Period:", "AcceptBountyModal")), " ", r.createElement(l.W, {
                            type: l.Ob.Span
                        }, Object(p.a)(this.props.bounty.campaign.streamLengthMinutes))), r.createElement(l.Wa, null, r.createElement(l.W, {
                            bold: !0,
                            type: l.Ob.Span
                        }, Object(c.d)("Compensation:", "AcceptBountyModal")), " ", r.createElement(l.W, {
                            type: l.Ob.Span
                        }, "$", this.props.bounty.maximumPayoutCents / 100, " USD")))), r.createElement(l.yb, {
                            className: "accept-bounty-modal__agreement-text",
                            border: !0,
                            padding: 1
                        }, r.createElement(l.Wa, {
                            textAlign: l.Kb.Center
                        }, r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Influencer Bounty Order")), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "This Bounty Order is governed by the (i) Influencer Terms and Conditions attached hereto as Exhibit A and (ii) Bounty Board Service Terms of Use (the “Terms of Use”), both of which are fully incorporated into this Bounty Order. All capitalized terms not defined in this Bounty Order have the respective meanings set forth in the Terms of Use."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "By accepting this Bounty Order, you, as the Influencer, accept and agree to be bound by and comply with the terms as set forth herein. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCEPT THE BOUNTY ORDER. If you are accepting the Bounty Order on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to the terms of this Bounty Order."), r.createElement("br", null), r.createElement(l.Wa, null, r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Bounty Requirements:")), r.createElement("br", null), r.createElement("ul", {
                            className: "accept-bounty-modal__bounty-requirements"
                        }, r.createElement("li", null, "Influencer is a party to a Content License Agreement (“Agreement”) with Twitch."), r.createElement("li", null, "Influencer agrees to provide the services as set forth in the Bounty. As compensation for the services, Twitch will pay Influencer in accordance with the terms set forth in the Bounty. Payments by Twitch to Influencer are based on certain concurrent user (“CCU”) requirements being met. If Influencer does not meet the CCU requirements as set forth in the Bounty, Influencer will receive a pro rata portion of the Compensation. In addition, if Influencer does not meet the Minimum Bar as defined above, then no portion of the Compensation will be payable to Influencer."), r.createElement("li", null, 'Title of the broadcast related to the Bounty will state any relationship with the Bounty Partner as instructed by Twitch: i.e. "Ad Content of X", "Paid Advertisement of X" or "#sponsored".'), r.createElement("li", null, "Influencer to save a VOD of the broadcast as a highlight to their Twitch channel."), r.createElement("li", null, "If applicable, Influencer to post on social media accounts/tweet at the start of the broadcast to raise awareness for the Bounty. These posts/tweets and any subsequent posts in connection with the Bounty must contain “#sponsored”."), r.createElement("li", null, "Influencer shall not commit any act or make any statement that disparages Twitch, Bounty Partner, or their respective products/services, or brings Twitch or the Bounty Partner disrepute, contempt, scandal, or ridicule for the Bounty Period and six (6) months thereafter.  Twitch may immediately take down, or request the take down of, any Influencer content that violates this section and Influencer shall cooperate with Twitch to execute such takedowns."), r.createElement("li", null, "If Influencer fails to comply with any of the above Bounty requirements, Twitch may at its discretion immediately terminate this Bounty Order and disqualify the influencer from participating in future Bounties.")), r.createElement("br", null), r.createElement(l.Wa, {
                            textAlign: l.Kb.Center
                        }, r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Exhibit A")), r.createElement(l.Wa, {
                            textAlign: l.Kb.Center
                        }, r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Influencer Terms and Conditions")), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "This Exhibit A is made a part of the Bounty Order to which it is attached, and the Agreement to which the Influencer is a party."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "1.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Licenses and Release.")), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "1.1.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "Influencer Trademark and Copyright License."), " Influencer hereby grants Twitch and the Bounty Partner of each particular accepted Bounty Order a royalty-free, non-exclusive, non-transferable, non-sublicensable, revocable, worldwide license to use and display any trademark, service mark, trade dress, trade name, or logo (“Marks”) and reproduce, distribute, publicly display or perform, or make derivative works of any copyrighted materials (“Materials”) belonging to Influencer and specified for use by Influencer for use in connection with the particular accepted Bounty Order. Without limiting the foregoing, all use by Twitch or the Bounty Partner of the Influencer’s Marks shall be in accordance with Influencer’s usage guidelines that have been delivered or made available to Twitch prior to the date of such use. Influencer may provide in writing an updated version of its usage guidelines and Twitch shall make commercially reasonable efforts to alter, modify or change any Influencer’s Marks being used by Twitch or Bounty Partner in accordance with such request as soon as reasonably practical.  Any such use of Influencer’s Marks will inure solely to Influencer’s benefit.  Nothing contained herein or in the Agreement gives Twitch or Bounty Partner any right, title or interest in the Influencer’s Marks or goodwill therein and thereto, or in any Materials, except as expressly provided in this Section.  For avoidance of doubt, nothing in this Section shall be construed to limit any rights with respect to Influencer’s Marks or Materials that Twitch or Bounty Partner would have as a member of the general public."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "1.2.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "Influencer Release."), " Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may use Influencer’s name, voice, signature, likeness, identity, persona or any biographical material concerning Influencer in promotion, advertising, sale, publicizing and exploitation, including ancillary products (e.g., merchandise) in connection with the Bounty and Bounty Partner’s products and services, throughout the world in all media, and in perpetuity.  Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may record Influencer’s voice, conversation and sounds, including any performance of any musical composition(s), during and in connection with Influencer’s participation in the Bounty, and that Twitch or Bounty Partner shall have the right, throughout the world, an unlimited number of times in perpetuity, royalty-free, to use and to license others to use, in any manner, all or any portion thereof or of a reproduction thereof in connection with the Bounty.  Influencer waives any right of inspection or approval with respect to any materials created or used by Twitch or Bounty Partner of an accepted Bounty Order and expressly waives any moral rights in connection with its participation in any Bounty."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "1.3.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "License from Bounty Partner."), " Bounty Partner of an accepted Bounty Order may provide licenses to its content, trademarks and other property for Influencer’s use in connection with the Bounty, either directly or through Twitch.  Influencer shall comply with all requirements, guidelines and restrictions with respect to such licenses."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "2.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Compliance with Laws."), " Influencer will comply with all applicable laws, rules, regulations and guidelines, including but not limited to the FTC’s Guidelines Concerning the Use of Testimonials and Endorsements in Advertising and all other advertising, marketing, and sweepstakes, contests and promotions laws."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "Without limiting the foregoing, Influencer will include in all Influencer Channels for a Bounty all title headers, overlays and other audio or visual disclosures that Twitch requires of Influencer.  Influencer will comply with Twitch’s instructions regarding the format, placement and duration of such disclosures."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "Influencer agrees and acknowledges that Twitch may edit or take down the Influencer Channel at any time in order to ensure compliance with applicable laws, rules, regulations and guidelines."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "3.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Influencer Representations and Warranties."), " Influencer represents and warrants that: (i) it has the requisite power and authority to enter into the Bounty Order and to perform fully its obligations hereunder; (ii) it is not and will not be under any contractual or other legal obligation which will in any way interfere with its full, prompt and complete performance under any  Bounty Order; (iii) it conducts and will conduct its affairs in compliance with all applicable international, federal, state, and local laws, rules and regulations, including but not limited to the representations and warranties; (iv) it is not a member of a union, guild or other labor organization and is not a party to any collective bargaining or similar agreement, and understands that Twitch is not a member of any union, guild or other labor organization, and the Bountys are not subject to any collective bargaining agreement; and (v) all other representations and warranties made by Influencer in the Agreement will continue to apply."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "4.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Bounty Partner Confidential Information."), " Twitch or Bounty Partner may disclose to Influencer certain Confidential Information of Bounty Partner or its associated companies, suppliers, or customers.  Influencer agrees to treat such information as Confidential Information under the Agreement."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "5.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Influencer Indemnification Obligations."), " Influencer hereby agrees to defend, indemnify and hold harmless Twitch and/or the Bounty Partner of any accepted Bounty Order, and their directors, officers, employees and affiliated entities, against any and all claims, actions, losses, judgments, settlements, damages, costs, and expenses, including reasonable attorneys’ fees (collectively, “Losses”) arising out of or based on any claim by a third party related to, involving or concerning a breach by Influencer of its representations, warranties or obligations under an accepted Bounty Order."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "6.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Term and Termination.")), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "6.1.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "Termination for Convenience or Breach."), " Twitch may terminate any particular Bounty Order at any time in its sole discretion or at the request of a Bounty Partner for convenience, or for breach of any requirements set forth in the Bounty Orders by the Influencer.  In the event that Twitch terminates any Bounty Order for breach, Twitch nor its Bounty Partner(s) are obliged to make any payments to the Influencer in connection with the breached Bounty Orders."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "6.2.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "Obligations Upon Termination."), " Influencer must return, delete, destroy or take down any materials or content in accordance with instructions from Twitch or the applicable Bounty Partner upon termination or expiration of any particular Bounty Orders."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "7.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Payment."), " Payment terms shall be net sixty (60) days following the end of the Bounty Period and shall be payable in accordance with the Terms of Use."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "8.\t", r.createElement(l.W, {
                            type: l.Ob.Strong
                        }, "Miscellaneous.")), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "8.1.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "Third Party Beneficiaries."), " The Bounty Partner of any accepted Bounty Order shall be a third party beneficiary with respect to that accepted Bounty Order."), r.createElement("br", null), r.createElement(l.W, {
                            type: l.Ob.P
                        }, "8.2.\t", r.createElement(l.W, {
                            type: l.Ob.Strong,
                            decoration: l.Mb.Underline
                        }, "Other Terms."), " These Influencer Terms and Conditions and all Bounty Orders are governed by and subject to the Agreement.  Capitalized terms used but not defined in these Influencer Terms and Conditions will have the meanings defined in the Agreement.  Except as amended by these Influencer Terms and Conditions, all other terms and conditions of the Agreement remain in full force and effect.")), r.createElement(l.yb, {
                            borderTop: !0,
                            display: l.X.Flex,
                            flexDirection: l.Z.Row,
                            alignItems: l.f.Center,
                            justifyContent: l.Va.End,
                            padding: {
                                top: 2
                            },
                            flexWrap: l.Aa.Wrap
                        }, a, this.props.bounty.status === m.f.AVAILABLE ? r.createElement(r.Fragment, null, r.createElement(l.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(l.z, {
                            "data-test-selector": "accept-bounty-modal-cancel-button",
                            type: l.F.Hollow,
                            onClick: this.onClose
                        }, Object(c.d)("Cancel", "AcceptBountyModal"))), r.createElement(l.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(l.z, {
                            "data-test-selector": "accept-bounty-modal-accept-button",
                            onClick: this.onAccept,
                            disabled: !!this.state.errorCode
                        }, Object(c.d)("Accept & Activate", "AcceptBountyModal")))) : r.createElement(l.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(l.z, {
                            "data-test-selector": "accept-bounty-modal-cancel-button",
                            type: l.F.Hollow,
                            onClick: this.onClose
                        }, Object(c.d)("Close", "AcceptBountyModal")))))
                    }, t
                }(r.PureComponent),
                g = Object(u.a)(f, {
                    name: "claimBounty"
                })(h),
                E = (n("B/yC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(l.yb, {
                            className: "accept-bounty-modal__container",
                            background: l.r.Base
                        }, r.createElement(g, {
                            "data-test-selector": "accept-bounty-modal-selector",
                            onClose: this.props.closeModal,
                            bounty: this.props.bounty,
                            channelID: this.props.channelID,
                            channelName: this.props.channelName,
                            handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                            platform: this.props.platform,
                            refreshData: this.props.refreshData
                        }))
                    }, t
                }(r.Component));
            var y = Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: s.c
                }, e)
            })(E);
            n.d(t, !1, function() {
                return "accept-bounty-modal-selector"
            }), n.d(t, !1, function() {
                return E
            }), n.d(t, "a", function() {
                return y
            })
        },
        kduP: function(e, t, n) {
            "use strict";

            function a(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function r(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function i(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function o(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            })
        },
        mxVY: function(e, t, n) {},
        ooYd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devBountyFunnel"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyCampaign"
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
                                value: "startTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "brandDetails"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "campaignReporting"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimedBountyCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expandedBountyCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "completedBountyCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "viewedBountyCount"
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "fragment devBountyFunnel on BountyCampaign {\nid\nstartTime\nbrandDetails {\ncampaignReporting {\nclaimedBountyCount\nexpandedBountyCount\ncompletedBountyCount\nviewedBountyCount\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pQow: function(e, t, n) {
            "use strict";

            function a(e) {
                return "/" + e + "/dashboard/bounties/"
            }

            function r(e, t) {
                return "/" + e + "/dashboard/bounties/" + t.id
            }

            function i(e, t) {
                return "/" + e + "/dashboard/bounties/" + t.id
            }
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            })
        },
        qnLe: function(e, t, n) {},
        rEFn: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "f", function() {
                return O
            }), n.d(t, "d", function() {
                return T
            }), n.d(t, "c", function() {
                return N
            }), n.d(t, "i", function() {
                return _
            }), n.d(t, "e", function() {
                return S
            }), n.d(t, "h", function() {
                return I
            }), n.d(t, "g", function() {
                return A
            }), n.d(t, "k", function() {
                return D
            }), n.d(t, "j", function() {
                return C
            }), n.d(t, "l", function() {
                return R
            });
            var a, r, i, o, s = n("mrSG"),
                l = n("/7QA"),
                c = n("2xye"),
                u = n("H/lO"),
                d = "search_tracking_enabled";
            ! function(e) {
                e.More = "more", e.Back = "back"
            }(r || (r = {})),
            function(e) {
                e.Game = "game", e.Live = "live", e.Channel = "channel", e.VOD = "vod", e.StreamTag = "stream-tag", e.Tag = "tag"
            }(i || (i = {})),
            function(e) {
                e.Popular = "popular", e.Newest = "newest"
            }(o || (o = {}));
            var m, p = ((a = {})[u.a.Videos] = i.VOD, a[u.a.Users] = i.Live, a[u.a.Channels] = i.Channel, a[u.a.Games] = i.Game, a[u.a.StreamTags] = i.StreamTag, a[u.a.Tags] = i.Tag, a),
                f = {
                    0: "all",
                    1: "past_broadcast",
                    2: "upload",
                    3: "highlight"
                },
                h = {
                    0: "any",
                    1: "short",
                    2: "long"
                };

            function g(e) {
                return {
                    sub_section: e.searchIndex && p[e.searchIndex],
                    button_type: e.buttonType
                }
            }

            function E(e) {
                var t = e.vodFilter ? e.vodFilter : 0,
                    n = e.lengthFilter ? e.lengthFilter : 0;
                return {
                    sub_section: e.subSection,
                    content_type: e.contentType,
                    item_row: e.itemRow,
                    item_index: e.itemIndex,
                    channel_id: e.channelID,
                    vod_id: e.vodID,
                    game: e.game,
                    tag_id: e.tagID,
                    vod_filter: f[t],
                    length_filter: h[n]
                }
            }

            function y(e) {
                var t = Date.now();
                return {
                    distinct_id: l.p.session.deviceID,
                    search_session_id: e,
                    time: t
                }
            }

            function b(e, t, n) {
                return s.__assign({}, y(e), {
                    search_query_id: t,
                    query: n
                })
            }

            function v() {
                return l.p.dynamicSettings.get(d, !1)
            }

            function O(e, t, n) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchReset, b(e, t, n))
            }

            function T(e, t) {
                v() && l.p.tracking.track(c.SpadeEventType.FocusSearch, s.__assign({}, y(e), {
                    location: t && t.medium
                }))
            }

            function N(e, t) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchBegin, s.__assign({}, y(e), {
                    location: t && t.medium
                }))
            }

            function _(e, t, n, a) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchQuerySubmit, s.__assign({}, b(e, t, n), {
                    filter: a
                }))
            }

            function S(e, t, n, a, r) {
                void 0 === r && (r = {}), v() && l.p.tracking.track(c.SpadeEventType.SearchQueryResult, s.__assign({}, b(e, t, n), function(e) {
                    return {
                        live_results: e.liveResults || 0,
                        channel_results: e.channelResults || 0,
                        vod_results: e.vodResults || 0,
                        tag_results: e.tagResults || 0,
                        games_results: e.gameResults || 0
                    }
                }(r), {
                    status: a ? m.Fail : m.Success
                }))
            }

            function I(e, t, n, a) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchResultImpression, s.__assign({}, b(e, t, n), E(a)))
            }

            function A(e, t, n, a) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchResultClick, s.__assign({}, b(e, t, n), E(a)))
            }

            function D(e, t, n, a) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchUIImpression, s.__assign({}, b(e, t, n), g(a)))
            }

            function C(e, t, n, a) {
                v() && l.p.tracking.track(c.SpadeEventType.SearchUIClick, s.__assign({}, b(e, t, n), g(a)))
            }

            function R(e) {
                switch (e) {
                    case u.a.Channels:
                        return "channels";
                    case u.a.Games:
                        return "games";
                    case u.a.Users:
                        return "users";
                    case u.a.Videos:
                        return "videos";
                    default:
                        return ""
                }
            }! function(e) {
                e.Fail = "fail", e.Success = "success"
            }(m || (m = {}))
        },
        rZ0H: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoard_createBountyCampaign"
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
                                    value: "CreateBountyCampaignInput"
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
                                value: "createBountyCampaign"
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
                                        value: "campaign"
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
                                                value: "availablePlatforms"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "endAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "startAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
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
                    end: 178
                }
            };
            n.loc.source = {
                body: "mutation DevBountyBoard_createBountyCampaign($input: CreateBountyCampaignInput!) {\ncreateBountyCampaign(input: $input) {\ncampaign{\nid\navailablePlatforms\nendAt\nstartAt\ntitle\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sBDM: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("Ue10");
            n("qnLe");

            function i(e) {
                return a.createElement(r.yb, {
                    className: "insight-panel-btn",
                    background: e.background || r.r.Alt,
                    display: r.X.Flex,
                    flexGrow: 1,
                    flexWrap: r.Aa.NoWrap,
                    borderTop: e.borderTop
                }, a.createElement(r.z, {
                    disabled: e.disabled,
                    type: r.F.Text,
                    linkTo: e.linkTo,
                    onClick: e.onClick,
                    targetBlank: e.targetBlank,
                    fullWidth: !0
                }, a.createElement(r.W, {
                    color: e.color
                }, e.message)))
            }
            n.d(t, "a", function() {
                return i
            })
        },
        sLmD: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var a = n("/7QA"),
                r = "en-us",
                i = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: r,
                    "en-gb": r,
                    es: "es-es",
                    "es-mx": "es-mx",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    hu: "hu-hu",
                    it: "it-it",
                    ja: "ja-jp",
                    ko: "ko-kr",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    "pt-br": "pt-br",
                    pt: "pt-pt",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sv: "sv-se",
                    th: "th-th",
                    tr: "tr-tr",
                    vi: "vi-vn",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-tw"
                },
                o = function(e) {
                    var t, n = s();
                    return t = function(e) {
                        return void 0 !== e.tag_id
                    }(e) ? {
                        id: e.tag_id,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    } : {
                        id: e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: e.description_localizations && e.description_localizations[n] || "",
                        localizedName: ""
                    }, e.localizations && e.localizations[n] ? t.localizedName = e.localizations[n] : e.localizations && e.localizations[r] ? t.localizedName = e.localizations[r] : t.localizedName = t.tagName, t
                };

            function s() {
                return i[a.p.intl.getLanguageCode() || ""] || r
            }
        },
        tK6h: function(e, t, n) {},
        tnWT: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devBountySummary"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyCampaign"
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
                                value: "startTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endTime"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
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
                                        value: "boxArtURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "130"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "175"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "brandDetails"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "totalBudgetCents"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "campaignReporting"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimedBudgetCents"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "spentBudgetCents"
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
                    end: 212
                }
            };
            n.loc.source = {
                body: "fragment devBountySummary on BountyCampaign {\nid\nstartTime\nendTime\ntitle\ngame {\nid\nboxArtURL(width: 130 height: 175)\n}\nbrandDetails {\ntotalBudgetCents\ncampaignReporting {\nclaimedBudgetCents\nspentBudgetCents\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "vR4/": function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", function() {
                    return a
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(a || (a = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(r || (r = {}))
        },
        wUQP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            });
            var a, r, i = n("/7QA"),
                o = n("kRBY");

            function s(e) {
                var t = i.p.store.getState(),
                    n = i.b.get(e, a.Off);
                return !!(n === a.On || n === a.StaffOnly && Object(o.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(a || (a = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(r || (r = {}));
            var l = Math.pow(2, 32);

            function c(e) {
                var t = i.b.get(e, [0, r.Disabled]),
                    n = t[0],
                    a = t[1],
                    s = i.p.session.deviceID,
                    c = i.p.store.getState();
                return !(a !== r.Enabled || !Object(o.g)(c)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, a = 0, r = e.length; a < r; a++) n ^= e.charCodeAt(a), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(s + "-" + e) / l < n
            }
        },
        "y/nc": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_CampaignStats"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "campaignID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                        value: "company"
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
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "campaignID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "campaignID"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "devBountyStats"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
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
                    end: 275
                }
            };
            a.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/campaign-stats.gql"\nquery DevBountyBoardDashboard_CampaignStats($campaignID: ID!) {\ncurrentUser {\nid\ncompany {\nid\nbountyCampaigns(campaignID: $campaignID) {\nedges {\ncursor\nnode {\n...devBountyStats\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("fvts").definitions)), e.exports = a
        },
        yCJj: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("mrSG"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("aCAx"),
                l = n("kRBY"),
                c = n("PJwv"),
                u = n("q1tI"),
                d = n("Ue10"),
                m = n("/7QA");
            ! function(e) {
                e.AcceptButton = "dev-create-campaign-modal-accept-button", e.BudgetText = "dev-create-campaign-budget-text", e.CancelButton = "dev-create-campaign-modal-cancel-button", e.PeriodText = "dev-create-campaign-period-text", e.SponsorText = "dev-create-campaign-sponsor-text", e.TitleText = "dev-create-campaign-title-text", e.LegalText = "dev-create-campaign-legal-text"
            }(a || (a = {}));
            var p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClose = function() {
                            t.props.onClose()
                        }, t.onAccept = function() {
                            t.props.onAccept(), t.onClose()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.campaign,
                            n = e.budget;
                        return u.createElement(d.Wa, {
                            padding: 3
                        }, u.createElement(d.Wa, {
                            display: d.X.Flex,
                            flexDirection: d.Z.Row,
                            flexWrap: d.Aa.NoWrap,
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, u.createElement(d.Wa, {
                            className: "create-campaign-modal__boxart"
                        }, u.createElement(d.o, {
                            ratio: d.p.BoxArt
                        }, u.createElement("img", {
                            src: t.boxArtURL || ""
                        }))), u.createElement(d.Wa, {
                            margin: {
                                left: 2
                            }
                        }, u.createElement(d.Wa, null, u.createElement(d.W, {
                            bold: !0,
                            type: d.Ob.Span
                        }, Object(m.d)("Campaign:", "DevBountyCreateCampaignModal")), " ", u.createElement(d.W, {
                            "data-test-selector": a.TitleText,
                            type: d.Ob.Span
                        }, t.title)), u.createElement(d.Wa, null, u.createElement(d.W, {
                            bold: !0,
                            type: d.Ob.Span
                        }, Object(m.d)("Brand:", "DevBountyCreateCampaignModal")), " ", u.createElement(d.W, {
                            "data-test-selector": a.SponsorText,
                            type: d.Ob.Span
                        }, t.sponsor)), u.createElement(d.Wa, null, u.createElement(d.W, {
                            bold: !0,
                            type: d.Ob.Span
                        }, Object(m.d)("Campaign Period:", "DevBountyCreateCampaignModal")), " ", u.createElement(d.W, {
                            "data-test-selector": a.PeriodText,
                            type: d.Ob.Span
                        }, Object(m.c)(new Date(t.startAt)), " - ", Object(m.c)(new Date(t.endAt)), " ")), u.createElement(d.Wa, null, u.createElement(d.W, {
                            bold: !0,
                            type: d.Ob.Span
                        }, Object(m.d)("Budget:", "DevBountyCreateCampaignModal")), " ", u.createElement(d.W, {
                            "data-test-selector": a.BudgetText,
                            type: d.Ob.Span
                        }, "$", Object(m.f)(n), " USD")))), u.createElement(d.yb, {
                            "data-test-selector": a.LegalText,
                            className: "accept-bounty-modal__agreement-text",
                            border: !0,
                            padding: 1
                        }, u.createElement(d.Wa, {
                            textAlign: d.Kb.Center
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "Bounty Board Service Terms of Use"), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Last Updated: September 27, 2018")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Welcome to the Bounty Board operated by Twitch Interactive, Inc. (with its affiliates, “Twitch”, “us”, “we”, “our”).  The Bounty Board consists of this website and any related services available at ", u.createElement(d.U, {
                            to: "https://www.twitch.tv",
                            targetBlank: !0
                        }, "http://www.twitch.tv"), ' and/or related sites or applications (collectively, the “Service”). The following terms of use (the "Terms") govern your access to and use of the Service and form an agreement between Twitch and you.'), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, 'An “Influencer” is defined as a user of the Service offering to create promotional online media content for Advertisers (as defined below). The term "you" refers to the person or entity (i) visiting the Service, browsing or otherwise using the Service (including Influencers), or (ii) communicating with individuals or businesses registered on the Service (each, an “Advertiser”) for the purpose of creating promotional online media content for their products or services (each, a “Bounty”).'), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "By accessing or using the Service, you accept and agree to be bound by and comply with these Terms. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCESS OR USE THE SERVICE. If you are accessing or using the Service on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to these Terms."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Your use of the Service is further subject to Twitch’s (i) ", u.createElement(d.W, {
                            type: d.Ob.Span,
                            decoration: d.Mb.Underline
                        }, "Terms of Service (“TOS”)"), ", (ii) ", u.createElement(d.W, {
                            type: d.Ob.Span,
                            decoration: d.Mb.Underline
                        }, "Community Guidelines"), ", (iii) ", u.createElement(d.W, {
                            type: d.Ob.Span,
                            decoration: d.Mb.Underline
                        }, "Privacy Policy"), ", (iv) Bounty Orders, entered into with an Influencer, and (v) Insertion Orders, entered into with an Advertiser, which are incorporated fully herein. Where there is a conflict between the foregoing terms and these Terms, these Terms shall govern."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "The Service is provided solely (the “Permitted Use”) to: (i) as an Influencer, assist you in gathering information about the various types of Bounty opportunities and Advertisers available on the Service, including profiles, price ranges, and Bounty descriptions (each, an “Advertiser Profile”); (ii) as an Advertiser, assist you in gathering information about the various types of Bounties and Influencers available on the Service, including profiles, price quotes, and videos of Influencers (each, an “Influencer Profile”); (iii) enable you to post information regarding yourself and to respond to any Bounty opportunities; (iv) facilitate communication between Advertisers and Influencers with the objective of entering into a Bounty Order; (v) accept payments from Advertisers for Insertion Orders (as defined below); and (vi) transmit payments to Influencers under Bounty Orders."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "1. Modifications to these Terms and Service")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch reserves the right to change these Terms at any time at our discretion. We will give you notice of the changes by posting an updated version of these Terms online, updating the “Last Modified” date above, or by emailing you at an email address you have provided. Changes to these Terms will be effective as of the date we post them or otherwise notify you of them, unless we specify a different effective date when we make a particular change. Your continued use of the Service after changes to these Terms take effect will constitute your acceptance of the changes. If you do not agree to a change, you must stop using the Service."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, 'Twitch reserves the right to change any information, material or content (including, but not limited to, price, features, availability of Advertiser or Influencer, Influencer Profiles and Advertiser Profiles, types of Bounties, and reviews of Bounties and Advertisers) contained on or provided through the Service (the "Content") at any time, and from time to time, without notice.'), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "2. License Grants")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "The Service is owned and operated by Twitch. Unless otherwise indicated, all content, information, and other materials on the Service are “Materials” as such term is defined in the TOS. Unless otherwise expressly stated in writing by Twitch, by agreeing to these Terms you are granted a license (i.e. a personal and limited right) to access and use the Service and Materials as set forth in Section 7 of the TOS."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Unless otherwise agreed to in a written agreement between you and Twitch that was signed by an authorized representative of Twitch, you grant to Twitch an unrestricted, worldwide, perpetual, irrevocable, fully sub-licensable, nonexclusive, and royalty-free right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display (in any form, format, media or media channels now known or later developed or discovered) any data, information, records and files that (1) you provide, transmit or stream through the Service, or (2) we collect from your local computer system or from third-parties with your permission (collectively, “Bounty Board User Content”) and (in each case) including all results from processing such data, including compilations and derivative works thereof.  All Bounty Board User Content is “User Content” as such term is defined in the TOS."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "3. Term and Termination")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch reserves the right, without notice and in our sole discretion, to terminate your license to use the Service and to block or prevent your future access to and use of the Service. Your only remedy with respect to any dissatisfaction with (i) the Service, (ii) any term of these Terms, (iii) any policy or practice of Twitch in operating the Service, or (iv) any content or information transmitted through the Service, is to terminate your account and to discontinue use of any and all parts of the Service."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Any Insertion Order (as defined below) or Bounty Order shall be subject to the cancellation and payment provisions as specified in such Insertion Order or Bounty Order."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "4. Insertion Orders and Bounty Orders")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "The Service permits Advertisers to enter into Bounties pursuant to which Influencers who have registered for our Service will provide online promotional content for Advertiser’s products or services. In order to have Influencers provide such content, Advertiser must enter into an agreement with Twitch that provides for payment to Twitch in order for Twitch to engage Influencers on behalf of Advertiser for the Bounty (each, an “Insertion Order”). The Insertion Order will contain (a) a description of the services Influencers will provide for the Bounty, (b) payment to Twitch, and (c) any other terms and conditions agreed upon between Twitch and the Advertiser through this Service or otherwise."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "In order to participate in a particular Bounty, Influencer must enter into an agreement with Twitch (each, a “Bounty Order”) that contains: (a) a description of the services Influencers will provide for the Bounty, (b) payment from Twitch, and (c) any other terms and conditions as agreed upon between Influencer and the Twitch through this Service or otherwise. Influencer further understands and agrees that any content submitted through the Service shall remain publicly accessible as specified in the Bounty Order."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch does not make any representations or warranties of any kind with respect to an Advertiser or a Bounty Order."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "5. Payments")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Advertiser will pay Twitch for each Bounty the amount set forth in the Insertion Order, under the terms set forth in the Insertion Order."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch will pay each Influencer the amount set forth in the Bounty Order, under the terms set forth in the Bounty Order. Twitch, in its sole discretion, may withhold payments to Influencer for breach of applicable law, or the Bounty Order."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "6. No Unlawful or Prohibited Use")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "BY USING THE SERVICE, YOU AGREE NOT TO violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while on the Service."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "You agree that you will comply with these Terms, Twitch’s ", u.createElement(d.U, {
                            to: "https://www.twitch.tv/p/legal/terms-of-service/",
                            targetBlank: !0
                        }, "Terms of Service"), ", Twitch’s ", u.createElement(d.U, {
                            to: "https://www.twitch.tv/p/legal/privacy-policy/",
                            targetBlank: !0
                        }, "Privacy Policy"), " and Twitch’s ", u.createElement(d.U, {
                            to: "https://www.twitch.tv/p/legal/community-guidelines/",
                            targetBlank: !0
                        }, "Community Guidelines"), "."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch takes no responsibility and assumes no liability for any Bounty Board User Content or for any loss or damage resulting therefrom, nor is Twitch liable for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter when using the Service. Your use of the Service is at your own risk. In addition, these rules do not create any private right of action on the part of any third party or any reasonable expectation that the Service will not contain any content that is prohibited by such rules."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch is not liable for any statements or representations included in Bounty Board User Content. Twitch does not endorse any Bounty Board User Content, opinion, recommendation, or advice expressed therein, and Twitch expressly disclaims any and all liability in connection with Bounty Board User Content. Although Twitch has no obligation to screen, edit, or monitor any of the Bounty Board User Content, Twitch reserves the right, and has absolute discretion, to remove, screen or edit any Bounty Board User Content posted or stored on the Service at any time and for any reason without notice, and you are solely responsible for creating backup copies of and replacing any Bounty Board User Content you post or store on the Service at your sole cost and expense. Any use of the Service in violation of the foregoing violates these Terms and may result in, among other things, termination or suspension of your rights to use the Service."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, "7. Clear and Prominent Disclosure in Bounties of Material Connections Between Influencer and Advertiser")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "You are required to follow the Federal Trade Commission’s Endorsement Guides (“FTC Guidelines”). You each understand and agree that you are required to clearly and conspicuously disclose any material connection between Influencer and the Advertiser."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Twitch may include disclosures within the Bounty in order to help you comply with FTC Guidelines. You will not obscure or remove any disclosures that are included by Twitch. However, as an Influencer or an Advertiser, it is your responsibility to independently understand and abide by all applicable laws, rules or regulations."), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "Material connections include, but are not necessarily limited to, the Advertiser providing Influencer with something of value, such as free use of products or services. "), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "In general, disclosures should be:"), u.createElement("ul", {
                            className: "accept-bounty-modal__bounty-requirements"
                        }, u.createElement("li", null, "in clear and unambiguous language;"), u.createElement("li", null, "as close as possible to the native ads to which they relate;"), u.createElement("li", null, "in the same medium as the ad, for instance, in the video or in the Twitter post;"), u.createElement("li", null, "in a font and color that’s easy to read;"), u.createElement("li", null, "in a shade that stands out against the background;"), u.createElement("li", null, "for video ads, on the screen long enough to be noticed, read, and understood; and"), u.createElement("li", null, "for audio disclosures, read at a cadence that’s easy for consumers to follow and in words consumers will understand")), u.createElement("br", null), u.createElement(d.W, {
                            type: d.Ob.P
                        }, "You represent and warrant that you will abide by the above. If Twitch learns of Bounties you create or initiate that do not, in our sole discretion, abide by the FTC Guidelines, we may require you to add appropriate disclosures, and we may require you to suspend the Bounty until such disclosures are added. Repeated failure to include appropriate disclosures in your Bounties, or your failure to add disclosures upon request by Twitch, may result in termination of your account."), u.createElement("br", null)), u.createElement(d.yb, {
                            borderTop: !0,
                            display: d.X.Flex,
                            flexDirection: d.Z.Row,
                            alignItems: d.f.Center,
                            justifyContent: d.Va.End,
                            padding: {
                                top: 2
                            },
                            flexWrap: d.Aa.Wrap
                        }, u.createElement(d.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, u.createElement(d.z, {
                            "data-test-selector": a.CancelButton,
                            type: d.F.Hollow,
                            onClick: this.onClose
                        }, Object(m.d)("Cancel", "DevBountyCreateCampaignModal"))), u.createElement(d.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, u.createElement(d.z, {
                            "data-test-selector": a.AcceptButton,
                            onClick: this.onAccept
                        }, Object(m.d)("Accept & Create", "DevBountyCreateCampaignModal")))))
                    }, t
                }(u.PureComponent),
                f = (n("DNwE"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(d.yb, {
                            background: d.r.Base,
                            className: "create-campaign-modal__container"
                        }, u.createElement(p, {
                            onClose: this.props.closeModal,
                            campaign: this.props.campaign,
                            onAccept: this.props.onAccept,
                            budget: this.props.budget
                        }))
                    }, t
                }(u.Component));
            var h, g, E, y = Object(i.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        closeModal: s.c
                    }, e)
                })(f),
                b = n("UfoR"),
                v = n("2oH+"),
                O = n("oJmH"),
                T = n("9C/b"),
                N = n("ZS2+"),
                _ = n("ZDlU"),
                S = n("5g1g"),
                I = n("yR8l"),
                A = n("geRD"),
                D = n("DMoW"),
                C = n("D493"),
                R = n("GnwI"),
                k = n("jCK8"),
                B = n("/LlH"),
                w = n("rZ0H"),
                P = n("NAv5"),
                L = n("0SKf");
            ! function(e) {
                e.Language = "language", e.Country = "country", e.HasUserBlacklist = "hasUserBlacklist", e.UserBlacklist = "userBlacklist", e.StreamingExperience = "streamingExperience", e.AllBroadcasters = "allBroadcasters", e.Budget = "budget", e.VarietyBroadcasters = "varietyBroadcasters", e.AdjustRate = "adjustRate", e.RateMultiplier = "rateMultiplier", e.EndDate = "endDate", e.StartDate = "startDate", e.Platforms = "platforms", e.Message = "message", e.Game = "game"
            }(E || (E = {}));
            var M, F = [E.Budget, E.StartDate, E.EndDate, E.Game, E.Platforms],
                U = ((h = {})[E.Language] = !0, h[E.Country] = !0, h[E.HasUserBlacklist] = !0, h[E.UserBlacklist] = !0, h[E.StreamingExperience] = !0, h[E.AllBroadcasters] = !0, h[E.Budget] = !0, h[E.VarietyBroadcasters] = !0, h[E.AdjustRate] = !0, h[E.RateMultiplier] = !0, h[E.EndDate] = !0, h[E.StartDate] = !0, h[E.Platforms] = !0, h[E.Message] = !0, h[E.Game] = !0, h),
                x = ((g = {})[E.Language] = "English", g[E.Country] = "USA", g[E.HasUserBlacklist] = !1, g[E.UserBlacklist] = [], g[E.StreamingExperience] = [], g[E.AllBroadcasters] = !0, g[E.Budget] = 5e3, g[E.VarietyBroadcasters] = !1, g[E.AdjustRate] = !1, g[E.RateMultiplier] = 1, g[E.EndDate] = void 0, g[E.StartDate] = void 0, g[E.Platforms] = [], g[E.Message] = "", g[E.Game] = void 0, g);

            function j(e, t) {
                return {
                    action: M.Create,
                    errors: {},
                    data: {},
                    params: e,
                    disabled: t
                }
            }

            function W(e) {
                var t = function(e) {
                    return F.reduce(function(t, n) {
                        if (G(e.params[n]) && G(e.data[n])) {
                            var a = t[n] || [];
                            a.push(Object(m.d)("Cannot be blank", "DevBountyBoardCampaignPage")), t[n] = a
                        }
                        return t
                    }, {})
                }(e);
                return Object.values(E).reduce(function(e) {
                    return function(t, n) {
                        var a = t[n] || [];
                        switch (n) {
                            case E.Budget:
                                a = a.concat(function(e) {
                                    var t = [];
                                    if (void 0 === e) return t;
                                    e > L.a ? t.push(Object(m.d)("If you would like to launch a bounty larger than $150,000, please contact bountyboard@twitch.tv", "DevBountyBoardCampaignPage")) : e < L.b && t.push(Object(m.d)("Minimum allowed budget is $5,000", "DevBountyBoardCampaignPage"));
                                    return t
                                }(e.params[n]));
                                break;
                            case E.StartDate:
                                a = a.concat(function(e, t) {
                                    var n = [];
                                    if (void 0 === e || void 0 === t) return n;
                                    e < Object(P.addDays)(Object(P.startOfDay)(new Date), L.h) && n.push(Object(m.d)("Choose a date at least {days} days in the future", {
                                        days: L.h
                                    }, "DevBountyBoardCampaignPage"));
                                    return n
                                }(e.params[n], e.params[E.EndDate]));
                                break;
                            case E.EndDate:
                                a = a.concat(function(e, t) {
                                    var n = [];
                                    if (void 0 === t || void 0 === e) return n;
                                    e < Object(P.addDays)(t, L.f) && n.push(Object(m.d)("Choose a date at least {days} after the start date", {
                                        days: L.f
                                    }, "DevBountyBoardCampaignPage"));
                                    return n
                                }(e.params[n], e.params[E.StartDate]))
                        }
                        return a.length > 0 && (t[n] = a), t
                    }
                }(e), t)
            }

            function G(e) {
                return void 0 === e || Number.isNaN(e) || 0 === e || Array.isArray(e) && 0 === e.length || "" === e
            }! function(e) {
                e[e.Update = 0] = "Update", e[e.Create = 1] = "Create", e[e.Delete = 2] = "Delete"
            }(M || (M = {}));
            var V, H = n("Ints"),
                Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n, a = parseInt(e.currentTarget.value, 10);
                            t.props.onChange(((n = {})[E.Budget] = a, n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e, t = this.props.value;
                        this.props.onChange(((e = {})[E.Budget] = t, e))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.errors,
                            n = e.value;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("Budget", "DevBountyBoardCampaignBudgetField") + " ($)",
                            error: t && 0 !== t.length,
                            errorMessage: t && t[0]
                        }, u.createElement(d.Qa, {
                            disabled: this.props.disabled,
                            type: d.Sa.Number,
                            value: (n || 0).toString(),
                            onChange: this.onChange,
                            min: 5e3
                        }))
                    }, t
                }(u.Component),
                z = n("eJ65"),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTooltip = function() {
                            return t.props.tooltip ? u.createElement(d.Wa, {
                                margin: {
                                    left: 1
                                }
                            }, u.createElement(z.a, null, u.createElement(d.A, {
                                icon: d.ob.NotificationInfo,
                                type: d.C.Secondary,
                                blurAfterClick: !0
                            }), u.createElement(d.u, {
                                size: d.w.Small,
                                direction: d.v.RightCenter
                            }, u.createElement(d.Wa, {
                                padding: 1
                            }, u.createElement(d.W, null, t.props.tooltip))))) : null
                        }, t.onChange = function() {
                            var e, n = !!t.props.value;
                            t.props.onChange && t.props.onChange(((e = {})[t.props.name] = !n, e))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.label,
                            n = e.value,
                            a = e.disabled;
                        return u.createElement(d.Wa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, u.createElement(d.N, {
                            disabled: a,
                            checked: !!n,
                            label: t,
                            onChange: this.onChange
                        }), this.renderTooltip())
                    }, t
                }(u.Component),
                K = n("eNO8"),
                q = n("zmGj"),
                Q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            if (!n.props.data.loading) {
                                n.gameMap || n.createMap();
                                var t = [],
                                    a = e.toLowerCase();
                                n.companyGames.forEach(function(e) {
                                    if (-1 !== e.displayName.toLowerCase().indexOf(a)) {
                                        var r = n.gameMap.get(e.id);
                                        r && t.push(r)
                                    }
                                }), n.setState({
                                    searchTerm: e,
                                    gameResults: t,
                                    isSearchPending: !1
                                })
                            }
                        }, n.noopPromise = function() {
                            return new Promise(function(e) {
                                e()
                            })
                        }, n.selectEmptyGame = function() {
                            n.props.onChange(null)
                        }, n.selectGame = function(e) {
                            if (!(e >= n.state.gameResults.length)) {
                                var t = n.state.gameResults[e].id,
                                    a = n.companyGames.find(function(e) {
                                        return e.id === t
                                    });
                                setTimeout(function() {
                                    n.props.onChange(a || null)
                                })
                            }
                        }, n.selectGameByName = function(e) {
                            var t = n.companyGames.find(function(t) {
                                return t.displayName === e
                            });
                            n.props.onChange(t || null)
                        }, n.state = n.getInitialState(t), n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.disabled ? u.createElement("div", {
                            className: "game-selector__search-container"
                        }, u.createElement(d.Qa, {
                            value: this.props.currentGame ? this.props.currentGame.displayName : "",
                            type: d.Sa.Text,
                            icon: d.ob.NavGames,
                            disabled: !0
                        })) : u.createElement(K.a, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame ? this.state.selectedGame.displayName : "",
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.noopPromise,
                            compact: this.props.compact
                        })
                    }, t.prototype.getInitialState = function(e) {
                        return {
                            searchTerm: e.currentGame ? e.currentGame.displayName : "",
                            gameResults: [],
                            isSearchPending: !e.data || e.data && e.data.loading,
                            selectedGame: e.currentGame,
                            redrawKey: Math.random()
                        }
                    }, Object.defineProperty(t.prototype, "companyGames", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.company && this.props.data.currentUser.company.games ? this.props.data.currentUser.company.games : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.createMap = function() {
                        var e = this;
                        this.gameMap = new Map, this.companyGames.forEach(function(t) {
                            var n = {
                                title: t.displayName,
                                popularity: 0,
                                id: t.id,
                                linkTo: "",
                                thumbnailAltText: ""
                            };
                            e.gameMap.set(t.id, n)
                        })
                    }, t
                }(u.Component),
                Z = Object(o.compose)(Object(I.a)(q))(Q),
                J = n("5hPa"),
                $ = Object(O.compose)(Object(I.a)(J, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.name
                            }
                        }
                    }
                }))(function(e) {
                    var t = !e.data.loading && e.data.game && e.data.game.boxArtURL;
                    return u.createElement(d.Wa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, u.createElement(d.G, {
                        row: !0
                    }, u.createElement(d.I, {
                        alt: e.name,
                        src: t || m.a.defaultBoxArtURL,
                        size: d.J.Size4,
                        aspect: d.p.BoxArt,
                        borderRadius: d.x.Small
                    }), u.createElement(d.H, {
                        overflow: d.Za.Hidden
                    }, u.createElement(d.Oa, {
                        padding: {
                            x: 1
                        }
                    }, u.createElement(d.W, {
                        type: d.Ob.H5,
                        ellipsis: !0
                    }, e.name)))))
                });
            (V || (V = {})).RemoveGameIcon = "dev-campaign-rbac-game-select-remove-game-icon";
            var ee, te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onGameSelected = function(e) {
                            var n;
                            t.props.onChange && t.props.onChange(((n = {})[E.Game] = e, n))
                        }, t.onRemoveGame = function() {
                            var e;
                            t.props.onChange && t.props.onChange(((e = {})[E.Game] = void 0, e))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.label,
                            n = e.disabled,
                            a = e.errors,
                            r = this.props.value;
                        return u.createElement(d.Da, {
                            label: t,
                            error: a && 0 !== a.length,
                            errorMessage: a && a[0]
                        }, r ? u.createElement(d.yb, {
                            border: !0,
                            key: r.id,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            display: d.X.Flex,
                            justifyContent: d.Va.Center
                        }, u.createElement(d.Wa, {
                            flexGrow: 1
                        }, u.createElement($, {
                            name: r.displayName ? r.displayName : ""
                        })), u.createElement(d.A, {
                            disabled: n,
                            "data-test-selector": V.RemoveGameIcon,
                            icon: d.ob.Hide,
                            onClick: this.onRemoveGame,
                            type: d.C.Secondary
                        })) : u.createElement(Z, {
                            currentGame: r,
                            disabled: n,
                            onChange: this.onGameSelected
                        }))
                    }, t
                }(u.Component),
                ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.disabled;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("Country", "DevBountyBoardCampaignCountryField")
                        }, u.createElement(d.Qa, {
                            disabled: n,
                            type: d.Sa.Text,
                            value: t
                        }))
                    }, t
                }(u.Component),
                ae = n("HEnu"),
                re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onClick = function() {
                            t.props.startDate || t.setState({
                                minDate: Object(P.addDays)(new Date, L.h + L.f)
                            })
                        }, t.onChange = function(e) {
                            var n;
                            t.props.onChange(((n = {})[E.EndDate] = e, n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.startDate,
                            n = this.props,
                            a = n.startDate,
                            r = n.value;
                        t !== a && r && this.minDate && this.minDate.getTime() > r.getTime() && this.onChange(this.minDate)
                    }, Object.defineProperty(t.prototype, "minDate", {
                        get: function() {
                            var e = this.props.startDate;
                            return e ? Object(P.addDays)(Object(P.startOfDay)(e), L.f) : this.state.minDate
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.disabled,
                            a = e.errors;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("End Date", "DevBountyBoardCampaignEndDateField"),
                            error: a && 0 !== a.length,
                            errorMessage: a && a[0]
                        }, u.createElement(ae.a, {
                            onChange: this.onChange,
                            defaultDate: t,
                            minDate: this.minDate,
                            inputProps: {
                                readOnly: !0,
                                placeholder: Object(m.d)("Enter end date", "DevBountyBoardCampaignEndDateField"),
                                disabled: n,
                                icon: d.ob.Events,
                                onClick: this.onClick,
                                iconRight: !0
                            }
                        }))
                    }, t
                }(u.Component),
                ie = n("u5aL"),
                oe = n("sBDM"),
                se = n("YbCS"),
                le = (n("4CVa"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(u.Fragment, null, u.createElement(d.yb, {
                            attachTop: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            background: d.r.Base,
                            className: "dev-bounty-board-analytics-overlay__background",
                            position: d.eb.Absolute,
                            zIndex: d.bc.Above
                        }), u.createElement(d.Wa, {
                            alignItems: d.f.Center,
                            attachTop: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            className: "dev-bounty-board-analytics-overlay__message",
                            display: d.X.Flex,
                            justifyContent: d.Va.Center,
                            position: d.eb.Absolute,
                            padding: {
                                x: 4
                            },
                            textAlign: d.Kb.Center,
                            zIndex: d.bc.Above
                        }, u.createElement(d.W, {
                            type: d.Ob.P,
                            fontSize: d.Ba.Size5
                        }, Object(m.d)("Analytics will be available once the campaign starts <x:bold>on {date} at {time}</x:bold>", {
                            "x:bold": function(e) {
                                return u.createElement(d.W, {
                                    type: d.Ob.Span,
                                    bold: !0
                                }, e)
                            },
                            date: Object(m.c)(this.props.date),
                            time: Object(m.j)(this.props.date)
                        }, "DevBountyBoardCampaignPage"))))
                    }, t
                }(u.Component));
            ! function(e) {
                e.HeaderSelector = "dev-bounty-funnel-header", e.SubheaderSelector = "dev-bounty-funnel-subheader", e.RowSelector = "dev-bounty-funnel-row", e.RowTitleSelector = "dev-bounty-funnel-row-title", e.RowPercentageSelector = "dev-bounty-funnel-row-percentage", e.RowBarSelector = "dev-bounty-funnel-row-bar", e.RowTooltipSelector = "dev-bounty-funnel-row-tooltip", e.InfoSelector = "dev-bounty-funnel-info"
            }(ee || (ee = {}));
            var ce, ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showInfo: !1
                        }, t.getFunnel = function(e) {
                            var n = t.getBrandDetails();
                            return n && n.brandDetails && n.brandDetails.campaignReporting && n.brandDetails.campaignReporting[e] && n.brandDetails.campaignReporting[e] || 0
                        }, t.renderHelp = function() {
                            return u.createElement(u.Fragment, null, u.createElement(ie.a, {
                                onClickOut: t.onClickDismissHelp
                            }), u.createElement(d.u, {
                                "data-test-selector": ee.InfoSelector,
                                show: !0,
                                size: d.w.Small,
                                direction: d.v.TopCenter
                            }, u.createElement(d.Wa, {
                                padding: 1
                            }, u.createElement(d.W, null, Object(m.d)("Contact us at <x:link>bountyboard@twitch.tv</x:link> for a list of these unique broadcasters.", {
                                "x:link": function(e) {
                                    return u.createElement("a", {
                                        href: "mailto:bountyboard@twitch.tv"
                                    }, e)
                                }
                            }, "DevBountyBoardCampaignPage")))))
                        }, t.onClickShowHelp = function() {
                            t.setState({
                                showInfo: !0
                            })
                        }, t.onClickDismissHelp = function() {
                            t.setState({
                                showInfo: !1
                            })
                        }, t.renderRow = function(e) {
                            var n = t.props.data,
                                a = t.getFunnel(L.c.BountiesTotal),
                                r = t.getFunnel(e),
                                i = 0 === a ? 0 : Math.floor(100 * r / a),
                                o = n && n.loading;
                            return e === L.c.BountiesTotal ? null : u.createElement(d.yb, {
                                key: t.getTitle(e),
                                padding: {
                                    y: 1,
                                    right: 2,
                                    left: 2
                                },
                                fontSize: d.Ba.Size5,
                                borderBottom: !0,
                                "data-test-selector": ee.RowSelector
                            }, u.createElement(d.Ia, null, u.createElement(d.P, {
                                cols: 5
                            }, u.createElement(d.Wa, {
                                padding: {
                                    right: 1
                                }
                            }, u.createElement(d.W, {
                                fontSize: d.Ba.Size5,
                                ellipsis: !0,
                                "data-test-selector": ee.RowTitleSelector
                            }, t.getTitle(e)))), u.createElement(d.P, {
                                cols: {
                                    default: 2,
                                    xs: 3,
                                    sm: 2
                                }
                            }, u.createElement(d.Wa, {
                                padding: {
                                    right: 1
                                },
                                textAlign: d.Kb.Right
                            }, u.createElement(d.W, {
                                color: d.O.Alt2,
                                ellipsis: !0,
                                "data-test-selector": ee.RowPercentageSelector
                            }, o ? "-" : i + "%"))), u.createElement(d.P, {
                                cols: {
                                    default: 5,
                                    xs: 4,
                                    sm: 5
                                }
                            }, u.createElement(d.Wa, {
                                padding: {
                                    top: .5
                                }
                            }, u.createElement(d.Rb, {
                                label: o ? "-" : Object(m.f)(r) + " " + t.getTitle(e, 1 !== r),
                                direction: d.Tb.Top,
                                align: d.Sb.Center,
                                display: d.X.Block,
                                "data-test-selector": ee.RowTooltipSelector
                            }, u.createElement(d.yb, {
                                background: d.r.Alt2
                            }, u.createElement(d.hb, {
                                value: i,
                                borderRadius: d.x.None,
                                "data-test-selector": ee.RowBarSelector
                            })))))))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.showInfo,
                            t = this.props.data && this.props.data.loading,
                            n = this.getFunnel(L.c.BountiesTotal),
                            a = this.getBrandDetails(),
                            r = a && new Date(a.startTime) > new Date;
                        return u.createElement(d.yb, {
                            position: d.eb.Relative,
                            background: d.r.Base,
                            elevation: 1,
                            margin: {
                                bottom: 3
                            }
                        }, r && a && a.startTime && u.createElement(le, {
                            date: new Date(a.startTime)
                        }), u.createElement(d.Wa, {
                            display: d.X.Flex,
                            flexDirection: d.Z.Column
                        }, u.createElement(d.Wa, {
                            display: d.X.Flex,
                            flexDirection: d.Z.Column,
                            padding: 2
                        }, u.createElement(d.W, {
                            type: d.Ob.H4,
                            bold: !0,
                            "data-test-selector": ee.HeaderSelector
                        }, Object(m.d)("Bounty Funnel", "DevBountyBoardCampaignPage")), u.createElement(d.W, {
                            type: d.Ob.P,
                            fontSize: d.Ba.Size5,
                            color: d.O.Alt2,
                            "data-test-selector": ee.SubheaderSelector
                        }, Object(m.d)("{total, plural, one {{total} broadcaster} other {{total} broadcasters}}", {
                            total: t ? "-" : Object(m.f)(n)
                        }, "DevBountyBoardCampaignPage"))), u.createElement(d.Wa, null, Object.values(L.c).map(this.renderRow))), u.createElement(d.Wa, {
                            position: d.eb.Relative
                        }, e && this.renderHelp(), u.createElement(oe.a, {
                            onClick: this.onClickShowHelp,
                            message: Object(m.d)("Completed - Unique Broadcasters ({total})", {
                                total: t ? "-" : this.getFunnel(L.c.BountiesCompleted)
                            }, "DevBountyBoardCampaignPage")
                        })))
                    }, t.prototype.getBrandDetails = function() {
                        var e = this.props.data;
                        return e && e.currentUser && e.currentUser.company && e.currentUser.company.bountyCampaigns && e.currentUser.company.bountyCampaigns.edges && e.currentUser.company.bountyCampaigns.edges.length > 0 && e.currentUser.company.bountyCampaigns.edges[0].node || null
                    }, t.prototype.getTitle = function(e, t) {
                        void 0 === t && (t = !0);
                        var n = Object(m.d)("{bounties, plural, one {Bounty} other {Bounties}}", {
                            bounties: t ? 2 : 1
                        }, "DevBountyBoardCampaignPage");
                        switch (e) {
                            case L.c.BountiesExpanded:
                                return n + " " + Object(m.d)("Expanded", "DevBountyBoardCampaignPage");
                            case L.c.BountiesAccepted:
                                return n + " " + Object(m.d)("Accepted", "DevBountyBoardCampaignPage");
                            case L.c.BountiesCompleted:
                                return n + " " + Object(m.d)("Completed", "DevBountyBoardCampaignPage");
                            default:
                                return ""
                        }
                    }, t
                }(u.Component),
                de = Object(O.compose)(Object(I.a)(se, {
                    options: function(e) {
                        return {
                            variables: {
                                campaignID: e.campaignId
                            }
                        }
                    }
                }))(ue),
                me = n("Rw/r");
            (ce || (ce = {})).RemoveGameIcon = "dev-campaign-game-multiselect-remove-game-icon";
            var pe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGames = function() {
                            var e = t.props,
                                n = e.disabled,
                                a = e.value || [];
                            return a.length ? u.createElement(d.yb, {
                                borderLeft: !0,
                                borderTop: !0,
                                borderRight: !0,
                                borderBottom: n
                            }, a.map(t.renderGame)) : null
                        }, t.renderGame = function(e) {
                            return u.createElement(d.yb, {
                                key: e.objectID,
                                padding: {
                                    y: .5,
                                    x: 1
                                },
                                display: d.X.Flex,
                                justifyContent: d.Va.Center
                            }, u.createElement(d.Wa, {
                                flexGrow: 1
                            }, u.createElement($, {
                                name: e.name ? e.name : ""
                            })), u.createElement(d.A, {
                                disabled: t.props.disabled,
                                "data-test-selector": ce.RemoveGameIcon,
                                icon: d.ob.Hide,
                                onClick: t.onRemoveGame.bind(t, e),
                                type: d.C.Secondary
                            }))
                        }, t.onGameSelected = function(e) {
                            if (e.name && e.objectID) {
                                var n = t.props.value || [];
                                if (!!!n.find(function(t) {
                                        return t.objectID === e.objectID
                                    })) {
                                    var a = n.concat([e]);
                                    t.updateValue(a)
                                }
                            }
                        }, t.onRemoveGame = function(e) {
                            var n = (t.props.value || []).filter(function(t) {
                                return t.objectID !== e.objectID
                            });
                            t.updateValue(n)
                        }, t.updateValue = function(e) {
                            var n;
                            t.props.onChange && t.props.onChange(((n = {})[E.StreamingExperience] = e, n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.disabled,
                            n = e.label;
                        return u.createElement(d.Da, {
                            label: n
                        }, this.renderGames(), !t && u.createElement(me.a, {
                            currentGameTitle: "",
                            onChange: this.onGameSelected
                        }))
                    }, t
                }(u.Component),
                fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.disabled;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("Language", "DevBountyBoardCampaignLanguageField")
                        }, u.createElement(d.Qa, {
                            disabled: n,
                            type: d.Sa.Text,
                            value: t
                        }))
                    }, t
                }(u.Component),
                he = n("NGrv"),
                ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.company || !this.props.data.currentUser.company.estimatedBroadcasterViewerReach) return u.createElement(d.Wa, null);
                        var e = this.props.data.currentUser.company.estimatedBroadcasterViewerReach,
                            t = e.broadcasterPool,
                            n = e.minutesWatched,
                            a = e.viewerPool;
                        return u.createElement(d.yb, {
                            background: d.r.Base,
                            elevation: 1,
                            padding: 2,
                            className: "livereach-widget"
                        }, u.createElement(d.yb, {
                            fontSize: d.Ba.Size1
                        }, Object(m.f)(t.min), "-", Object(m.f)(t.max)), u.createElement(d.yb, {
                            fontSize: d.Ba.Size5
                        }, Object(m.d)("Broadcasters", "DevBountyBoardCampaignLivereachWidget")), u.createElement(d.yb, {
                            padding: {
                                top: 2
                            }
                        }, u.createElement(d.Ia, {
                            gutterSize: d.Ja.Medium
                        }, u.createElement(d.P, {
                            cols: 6
                        }, u.createElement(d.yb, {
                            fontSize: d.Ba.Size6
                        }, Object(m.d)("who have a total of", "DevBountyBoardCampaignLivereachWidget")), u.createElement(d.yb, {
                            fontSize: d.Ba.Size3
                        }, Object(m.f)(a.min), "-", Object(m.f)(a.max)), u.createElement(d.yb, {
                            fontSize: d.Ba.Size5
                        }, Object(m.d)("Viewers", "DevBountyBoardCampaignLivereachWidget"))), u.createElement(d.P, {
                            cols: 6
                        }, u.createElement(d.yb, {
                            fontSize: d.Ba.Size6
                        }, Object(m.d)("and a typical total of", "DevBountyBoardCampaignLivereachWidget")), u.createElement(d.yb, {
                            fontSize: d.Ba.Size3
                        }, Object(m.f)(n.min), "-", Object(m.f)(n.max)), u.createElement(d.yb, {
                            fontSize: d.Ba.Size5
                        }, Object(m.d)("Minutes watched per hour", "DevBountyBoardCampaignLivereachWidget")))), u.createElement(d.yb, {
                            fontSize: d.Ba.Size7,
                            padding: {
                                top: 2
                            }
                        }, Object(m.d)("Estimates are based on the typical number of the available broadcasters within your targeting selections. Actual campaign results may vary", "DevBountyBoardCampaignLivereachWidget"))))
                    }, t
                }(u.Component),
                Ee = Object(o.compose)(Object(R.b)("DevBountyBoardCampaignLivereachWidget"), Object(I.a)(he, {
                    options: function(e) {
                        return {
                            variables: {
                                gameNames: e.gameNames,
                                targetAllBroadcasters: e.targetAllBroadcasters,
                                targetVarietyBroadcasters: e.targetVarietyBroadcasters
                            }
                        }
                    }
                }))(ge),
                ye = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n, a = e.currentTarget.value;
                            a = t.normalizeString(a).slice(0, L.g).join(""), t.props.onChange(((n = {})[E.Message] = a, n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.disabled;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("Message to Broadcaster", "DevBountyBoardCampaignPlatformField"),
                            labelOptional: this.getRemainingMessage()
                        }, u.createElement(d.Lb, {
                            disabled: n,
                            noResize: !0,
                            onChange: this.onChange,
                            placeholder: Object(m.d)("Anything else you need the broadcaster to know? We'll display your message as part of the bounty.", "DevBountyBoardCampaignMessageField"),
                            rows: 3,
                            value: t
                        }))
                    }, t.prototype.normalizeString = function(e) {
                        return Array.from(e.normalize ? e.normalize("NFC") : e)
                    }, Object.defineProperty(t.prototype, "remainingCharacters", {
                        get: function() {
                            var e = this.props.value;
                            return L.g - this.normalizeString(e).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getRemainingMessage = function() {
                        return Object(m.d)("{remaining} characters remain", {
                            remaining: this.remainingCharacters
                        }, "DevBountyBoardCampaignMessageField")
                    }, t
                }(u.Component),
                be = n("N74f"),
                ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            open: !1
                        }, t.renderFilterBalloon = function(e) {
                            var n = e.map(function(e) {
                                return u.createElement(d.Ta, {
                                    key: e,
                                    onClick: t.onClickOption(e),
                                    type: d.Ua.Alpha
                                }, u.createElement(d.Wa, {
                                    padding: {
                                        x: 1,
                                        y: .5
                                    }
                                }, e))
                            });
                            return u.createElement(d.Wa, {
                                position: d.eb.Relative
                            }, u.createElement(ie.a, {
                                onClickOut: t.onClickDismissSelect
                            }, u.createElement(d.u, {
                                show: !0,
                                noTail: !0,
                                offsetY: "0"
                            }, u.createElement(d.Wa, null, n))))
                        }, t.renderTag = function(e) {
                            var n = t.props.disabled;
                            return u.createElement(d.Wa, {
                                key: e,
                                display: d.X.InlineBlock,
                                margin: {
                                    right: .5,
                                    bottom: .5
                                }
                            }, u.createElement(d.Hb, {
                                action: d.Ib.Remove,
                                blurAfterClick: !0,
                                disabled: n,
                                label: e,
                                onClick: t.onClickRemoveTag(e)
                            }))
                        }, t.onClickAddButton = function() {
                            t.setState({
                                open: !0
                            })
                        }, t.onClickDismissSelect = function(e) {
                            e.stopImmediatePropagation(), t.setState({
                                open: !1
                            })
                        }, t.onClickOption = function(e) {
                            return function() {
                                var n, a = t.props.value.slice(0);
                                a.push(e), a.length === Object.values(be.b).length && t.setState({
                                    open: !1
                                }), t.props.onChange(((n = {})[E.Platforms] = a, n))
                            }
                        }, t.onClickRemoveTag = function(e) {
                            return function() {
                                var n, a = t.props.value.filter(function(t) {
                                    return t !== e
                                });
                                t.props.onChange(((n = {})[E.Platforms] = a, n))
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e;
                        this.props.onChange(((e = {})[E.Platforms] = this.props.value, e))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.disabled,
                            n = e.errors,
                            a = e.value,
                            r = Object.values(be.b).filter(function(e) {
                                return -1 === a.indexOf(e)
                            }),
                            i = this.state.open;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("Platform(s)", "DevBountyBoardCampaignPlatformField"),
                            error: n && 0 !== n.length,
                            errorMessage: n && n[0]
                        }, u.createElement(d.Wa, {
                            margin: {
                                bottom: .5
                            }
                        }, a.map(this.renderTag)), r.length > 0 && !t && u.createElement(u.Fragment, null, u.createElement(d.z, {
                            disabled: t,
                            dropdown: !0,
                            onClick: this.onClickAddButton,
                            type: d.F.Hollow
                        }, Object(m.d)("Add Platform(s)", "DevBountyBoardCampaignPlatformField")), i && this.renderFilterBalloon(r)))
                    }, t
                }(u.Component),
                Oe = n("CF52"),
                Te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !0
                        }, t
                    }
                    return r.__extends(t, e), t.getDerivedStateFromProps = function(e, t) {
                        var n, a = r.__assign({}, t);
                        if (t.isLoading && !e.data.loading && e.data && e.data.currentUser && e.data.currentUser.company && e.data.currentUser.company.bountyCampaigns && e.data.currentUser.company.bountyCampaigns.edges && e.data.currentUser.company.bountyCampaigns.edges.length > 0 && e.data.currentUser.company.bountyCampaigns.edges[0].node) {
                            var i = e.data.currentUser.company.bountyCampaigns.edges[0].node;
                            if (i) {
                                var o = i.brandDetails && i.brandDetails.broadcasterMultiplier || 1,
                                    s = [],
                                    l = [];
                                i.brandDetails && i.brandDetails.targetedGames && (s = i.brandDetails.targetedGames.map(function(e) {
                                    return {
                                        objectID: e.id,
                                        name: e.displayName,
                                        popularity: 0
                                    }
                                })), i.brandDetails && i.brandDetails.blacklistedBroadcasters && (l = i.brandDetails.blacklistedBroadcasters.map(function(e) {
                                    return {
                                        id: e.id,
                                        login: e.login,
                                        name: e.displayName,
                                        avatar: e.profileImageURL
                                    }
                                })), a.changeset = j(((n = {})[E.Language] = x[E.Language], n[E.Country] = x[E.Country], n[E.HasUserBlacklist] = l.length > 0, n[E.UserBlacklist] = l, n[E.StreamingExperience] = s, n[E.AllBroadcasters] = !!i.brandDetails && !!i.brandDetails.includesAllBroadcasters, n[E.Budget] = (i.brandDetails && i.brandDetails.totalBudgetCents || 0) / 100, n[E.VarietyBroadcasters] = !!i.brandDetails && !!i.brandDetails.includesVarietyBroadcasters, n[E.AdjustRate] = 1 !== o, n[E.RateMultiplier] = o, n[E.EndDate] = new Date(i.endTime), n[E.StartDate] = new Date(i.startTime), n[E.Platforms] = i.availablePlatforms || [], n[E.Message] = i.details, n[E.Game] = i.game || void 0, n), U)
                            }
                            a.isLoading = !1
                        }
                        return a.isLoading && (a.changeset = j(x, U)), a
                    }, t.prototype.render = function() {
                        return this.props.children(this.isError(), this.state.changeset)
                    }, t.prototype.isError = function() {
                        return !!this.props.data && !!this.props.data.error
                    }, t
                }(u.Component),
                Ne = Object(O.compose)(Object(I.a)(Oe, {
                    options: function(e) {
                        return {
                            variables: {
                                campaignID: e.campaignId
                            }
                        }
                    }
                }))(Te),
                _e = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            value: 1
                        }, n.onChange = function(e) {
                            var t, a = e.currentTarget.value;
                            if ("" === a || parseFloat(a) >= 1 && parseFloat(a) <= 5) {
                                var r = parseFloat(a);
                                n.setState({
                                    value: r
                                }), n.props.onChange(((t = {})[E.RateMultiplier] = r, t))
                            }
                        }, n.state = {
                            value: t.value || 1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e;
                        this.props.onChange(((e = {})[E.RateMultiplier] = this.state.value, e))
                    }, t.prototype.render = function() {
                        var e = this.props;
                        return u.createElement(d.yb, {
                            borderLeft: !0,
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: .5
                            }
                        }, u.createElement(d.Ia, null, u.createElement(d.P, {
                            cols: {
                                default: 12,
                                md: 6
                            }
                        }, u.createElement(d.Wa, {
                            fullHeight: !0,
                            position: d.eb.Relative,
                            margin: {
                                left: .5,
                                right: .5
                            },
                            padding: {
                                right: 1
                            }
                        }, u.createElement(d.W, {
                            type: d.Ob.Strong
                        }, e.label), u.createElement(d.Qa, {
                            disabled: e.disabled,
                            type: d.Sa.Number,
                            min: 1,
                            max: 5,
                            step: .01,
                            value: String(this.state.value),
                            onChange: this.onChange,
                            placeholder: Object(m.d)("1.00", "DevBountyBoardCampaignPage")
                        }), u.createElement(d.W, {
                            type: d.Ob.P,
                            color: d.O.Alt2,
                            fontSize: d.Ba.Size6
                        }, Object(m.d)("Indicate a multiplier between 1.0 and 5.0.", "DevBountyBoardCampaignPage")))), u.createElement(d.P, {
                            cols: {
                                default: 12,
                                md: 6
                            }
                        }, u.createElement(d.Wa, {
                            display: d.X.Inline,
                            margin: {
                                top: .5
                            }
                        }, u.createElement(d.W, null, Object(m.d)("Get chosen first. Stand out next to other bounties by offering a higher rate than your competitors", "DevBountyBoardCampaignPage"))))))
                    }, t
                }(u.Component),
                Se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onClick = function() {
                            t.setState({
                                minDate: Object(P.addDays)(Object(P.startOfDay)(new Date), L.h)
                            })
                        }, t.onChange = function(e) {
                            var n;
                            t.props.onChange(((n = {})[E.StartDate] = e, n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.disabled,
                            a = e.errors;
                        return u.createElement(d.Da, {
                            label: Object(m.d)("Start Date", "DevBountyBoardCampaignStartDateField"),
                            error: a && 0 !== a.length,
                            errorMessage: a && a[0]
                        }, u.createElement(ae.a, {
                            onChange: this.onChange,
                            defaultDate: t,
                            minDate: this.state.minDate,
                            inputProps: {
                                readOnly: !0,
                                placeholder: Object(m.d)("Enter start date", "DevBountyBoardCampaignStartDateField"),
                                disabled: n,
                                icon: d.ob.Events,
                                onClick: this.onClick,
                                iconRight: !0
                            }
                        }))
                    }, t
                }(u.Component),
                Ie = n("dfkd"),
                Ae = n("TDse"),
                De = n("WSnR"),
                Ce = n("z0Ka"),
                Re = n("+lD8"),
                ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.formatTooltipLabel = function(e) {
                            var n = t.props.statId,
                                a = e.value;
                            switch (n) {
                                case L.d.BountiesCompleted:
                                    return Object(m.d)("{total, plural, one {# Bounty Completed} other {# Bounties Completed}}", {
                                        total: a
                                    }, "DevBountyBoardCampaignPage");
                                case L.d.Viewers:
                                case L.d.Viewers2m:
                                    return Object(m.d)("{total, plural, one {# Viewer} other {# Viewers}}", {
                                        total: a
                                    }, "DevBountyBoardCampaignPage");
                                case L.d.MinutesWatched:
                                    return Object(m.d)("{total, plural, one {# Minute} other {# Minutes}}", {
                                        total: a
                                    }, "DevBountyBoardCampaignPage");
                                default:
                                    return String(a)
                            }
                        }, t.formatTooltipTitle = function(e) {
                            var n = t.props.aggregation;
                            if (n.isByDay) {
                                var a = new Date(Number(e.label));
                                return Object(m.c)(a, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                })
                            }
                            return n.formatDateFromLabel(e.label)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.timeseries,
                            n = e.label;
                        return e.isLoading ? u.createElement(Re.a, null) : u.createElement(Ce.a, {
                            labels: this.props.aggregation.datesAsLabels,
                            datasets: [{
                                label: n,
                                data: this.props.aggregation.sum(t.series, this.getAggregationData)
                            }],
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatTooltipTitle: this.formatTooltipTitle,
                            formatXAxis: this.props.aggregation.formatShortDateFromLabel
                        })
                    }, t.prototype.getAggregationData = function(e) {
                        return e
                    }, t
                }(u.Component),
                Be = n("y/nc");

            function we(e, t) {
                if (e.brandDetails && e.brandDetails.campaignReporting && e.brandDetails.campaignReporting.performanceMetrics) {
                    var n = e.brandDetails.campaignReporting.performanceMetrics || [];
                    if (new Date < new Date(e.startTime)) return function() {
                        var e = new Date,
                            t = 0,
                            n = Array.from({
                                length: 7
                            }, function(n, a) {
                                var r = Math.floor(100 * Math.random());
                                return t += r, {
                                    value: r,
                                    date: Object(P.addDays)(e, a)
                                }
                            }),
                            a = {
                                start: e,
                                end: Object(P.addDays)(e, 6)
                            };
                        return {
                            series: n,
                            total: t,
                            interval: a
                        }
                    }();
                    var a = 0,
                        r = n.map(function(e) {
                            var n = e[t] || 0;
                            return a += n, {
                                value: n,
                                date: new Date(e.startTime)
                            }
                        });
                    if (0 === r.length) return L.e;
                    var i = {
                        start: r[0].date,
                        end: r[r.length - 1].date
                    };
                    return {
                        series: r,
                        total: a,
                        interval: i
                    }
                }
                return L.e
            }
            var Pe, Le = function(e) {
                    function t() {
                        var t, n = null !== e && e.apply(this, arguments) || this;
                        return n.state = ((t = {})[L.d.BountiesCompleted] = L.e, t[L.d.MinutesWatched] = L.e, t[L.d.Viewers] = L.e, t[L.d.Viewers2m] = L.e, t.isLoading = !0, t), n
                    }
                    return r.__extends(t, e), t.getDerivedStateFromProps = function(e, n) {
                        var a = r.__assign({}, n),
                            i = t.getBrandDetails(e.data);
                        return !0 === n.isLoading && !1 === e.data.loading && i && (a.startTime = new Date(i.startTime), Object.values(L.d).forEach(function(e) {
                            a[e] = we(i, e)
                        })), a.isLoading = e.data.loading, a
                    }, t.getBrandDetails = function(e) {
                        return e && e.currentUser && e.currentUser.company && e.currentUser.company.bountyCampaigns && e.currentUser.company.bountyCampaigns.edges && e.currentUser.company.bountyCampaigns.edges.length > 0 && e.currentUser.company.bountyCampaigns.edges[0].node || null
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t
                }(u.Component),
                Me = Object(O.compose)(Object(I.a)(Be, {
                    options: function(e) {
                        return {
                            variables: {
                                campaignID: e.campaignId
                            }
                        }
                    }
                }))(Le);
            n("H+Kr");
            ! function(e) {
                e.Title = "dev-campaign-page-stats-tab-title", e.Label = "dev-campaign-page-stats-tab-label"
            }(Pe || (Pe = {}));
            var Fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.isActive,
                            a = e.isLoading,
                            r = e.label,
                            i = e.onClick;
                        return u.createElement(d.Wa, {
                            className: "top-stats-tab top-stats-tab" + (n ? "--active" : ""),
                            display: d.X.Flex,
                            flexGrow: 1
                        }, u.createElement(d.Oa, {
                            flexDirection: d.Z.Row,
                            flexGrow: 1,
                            justifyContent: d.Va.Center,
                            display: d.X.Flex,
                            textAlign: d.Kb.Center
                        }, u.createElement(d.U, {
                            onClick: i,
                            className: "top-stats-tab__link",
                            hoverUnderlineNone: !0
                        }, u.createElement(d.Wa, {
                            display: d.X.Flex,
                            flexGrow: 1,
                            flexDirection: d.Z.Column,
                            padding: {
                                x: 3,
                                y: 1
                            },
                            ellipsis: !0
                        }, u.createElement(d.W, {
                            className: "top-stats-tab__title",
                            "data-test-selector": Pe.Title,
                            type: d.Ob.H3,
                            key: "dev-campaign-page-stats-tab-value"
                        }, a ? "-" : t), u.createElement(d.W, {
                            type: d.Ob.H6,
                            color: d.O.Alt2,
                            "data-test-selector": Pe.Label,
                            title: r,
                            key: "dev-campaign-page-stats-tab-label",
                            ellipsis: !0
                        }, r)))))
                    }, t
                }(u.Component),
                Ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            statId: L.d.BountiesCompleted,
                            aggregationInterval: Ae.a.Day
                        }, t.renderContent = function(e) {
                            var n = t.state,
                                a = n.aggregationInterval,
                                r = n.statId,
                                i = new Ie.a(a, e[r].interval),
                                o = e.startTime && e.startTime > new Date;
                            return u.createElement(d.yb, {
                                background: d.r.Base,
                                position: d.eb.Relative,
                                elevation: 1,
                                margin: {
                                    bottom: 1
                                }
                            }, o && e.startTime && u.createElement(le, {
                                date: e.startTime
                            }), u.createElement(d.Wa, {
                                display: d.X.Flex,
                                flexWrap: d.Aa.Wrap
                            }, Object.values(L.d).map(t.renderTab(e))), u.createElement(d.yb, {
                                padding: 2,
                                borderBottom: !0
                            }, u.createElement(d.Wa, {
                                display: d.X.Flex,
                                flexDirection: d.Z.RowReverse,
                                padding: {
                                    bottom: 1
                                }
                            }, u.createElement("div", null, u.createElement(d.tb, {
                                onChange: t.handleAggregationChange,
                                value: a
                            }, u.createElement("option", {
                                value: Ae.a.Day
                            }, Object(m.d)("Day", "DevBountyBoardCampaignPage")), u.createElement("option", {
                                value: Ae.a.Week
                            }, Object(m.d)("Week", "DevBountyBoardCampaignPage"))))), u.createElement(ke, {
                                timeseries: e[r],
                                aggregation: i,
                                statId: r,
                                isLoading: e.isLoading,
                                label: Object(De.b)(r)
                            })))
                        }, t.handleAggregationChange = function(e) {
                            t.setState({
                                aggregationInterval: e.currentTarget.value
                            })
                        }, t.onChangeStatId = function(e) {
                            return function() {
                                t.setState({
                                    statId: e
                                })
                            }
                        }, t.renderTab = function(e) {
                            return function(n) {
                                var a = t.state.statId;
                                return u.createElement(Fe, {
                                    key: n,
                                    isActive: n === a,
                                    isLoading: e.isLoading,
                                    label: Object(De.b)(n),
                                    onClick: t.onChangeStatId(n)
                                }, Object(m.f)(e[n].total, {
                                    maximumFractionDigits: 0
                                }))
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.campaignId;
                        return u.createElement(Me, {
                            campaignId: e
                        }, this.renderContent)
                    }, t
                }(u.Component),
                xe = Object(O.compose)(Object(R.b)("DevBountyBoardStats", {
                    autoReportInteractive: !0
                }))(Ue),
                je = n("/BQy"),
                We = (n("mxVY"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderRow = function(e, t, n) {
                            void 0 === n && (n = !1);
                            var a = u.createElement(d.W, {
                                type: d.Ob.P,
                                fontSize: d.Ba.Size5,
                                bold: !0,
                                ellipsis: !0
                            }, " ", t || "-", " ");
                            return u.createElement(u.Fragment, null, u.createElement(d.P, {
                                cols: 5
                            }, u.createElement(d.W, {
                                type: d.Ob.P,
                                fontSize: d.Ba.Size5,
                                ellipsis: !0
                            }, e)), u.createElement(d.P, {
                                cols: 7
                            }, n ? u.createElement(d.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, a) : a))
                        }, t.getCampaign = function() {
                            var e = t.props.data;
                            return e && e.currentUser && e.currentUser.company && e.currentUser.company.bountyCampaigns && e.currentUser.company.bountyCampaigns.edges && e.currentUser.company.bountyCampaigns.edges.length > 0 && e.currentUser.company.bountyCampaigns.edges[0].node ? e.currentUser.company.bountyCampaigns.edges[0].node : null
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.getCampaign(),
                            t = e && e.game && e.game.boxArtURL,
                            n = e && Object(m.c)(new Date(e.startTime)) + " " + Object(m.j)(new Date(e.startTime)),
                            a = e && Object(m.c)(new Date(e.endTime)) + " " + Object(m.j)(new Date(e.endTime)),
                            r = e && e.brandDetails && "$" + Object(m.f)((e.brandDetails.totalBudgetCents || 0) / 100),
                            i = e && e.brandDetails && e.brandDetails.campaignReporting,
                            o = i && "$" + Object(m.f)((i.claimedBudgetCents || 0) / 100),
                            s = i && "$" + Object(m.f)((i.spentBudgetCents || 0) / 100);
                        return u.createElement(d.yb, {
                            background: d.r.Base,
                            className: "dev-bounty-board-campaign-summary",
                            elevation: 1,
                            padding: 2,
                            margin: {
                                bottom: 3
                            }
                        }, u.createElement(d.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, e ? u.createElement(d.W, {
                            type: d.Ob.H3,
                            ellipsis: !0
                        }, e ? e.title : "-") : u.createElement(d.db, {
                            height: 28,
                            width: 350
                        })), u.createElement(d.Wa, {
                            display: d.X.Flex
                        }, u.createElement(d.yb, {
                            className: "dev-bounty-board-campaign-summary-cover",
                            display: d.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                right: 3
                            },
                            background: d.r.Alt2
                        }, u.createElement(d.o, {
                            ratio: d.p.BoxArt
                        }, t && u.createElement("img", {
                            src: t
                        }))), u.createElement(d.Wa, null, u.createElement(d.Ia, null, this.renderRow(Object(m.d)("Campaign Start", "DevBountyBoardCampaignSummary"), n), this.renderRow(Object(m.d)("Campaign End", "DevBountyBoardCampaignSummary"), a, !0), this.renderRow(Object(m.d)("Total Budget", "DevBountyBoardCampaignSummary"), r), this.renderRow(Object(m.d)("Claimed Budget", "DevBountyBoardCampaignSummary"), o), this.renderRow(Object(m.d)("Consumed Budget", "DevBountyBoardCampaignSummary"), s, !0)), u.createElement(d.z, {
                            type: d.F.Alert,
                            onClick: this.props.showCancelCampaignModal
                        }, Object(m.d)("Cancel Campaign", "DevBountyBoardCampaignSummary")))))
                    }, t
                }(u.Component)),
                Ge = Object(O.compose)(Object(I.a)(je, {
                    options: function(e) {
                        return {
                            variables: {
                                campaignID: e.campaignId
                            }
                        }
                    }
                }))(We);
            var Ve, He = Object(O.compose)(Object(i.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showCancelCampaignModal: function() {
                            return Object(s.d)(c.a, {})
                        }
                    }, e)
                }))(Ge),
                Ye = n("LFRE");
            ! function(e) {
                e.User = "dev-campaign-user-multiselect-user", e.RemoveUserIcon = "dev-campaign-user-multiselect-remove-user-icon"
            }(Ve || (Ve = {}));
            var ze, Xe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderUsers = function() {
                            var e = t.props.value;
                            return e.length ? u.createElement(d.yb, {
                                borderLeft: !0,
                                borderTop: !0,
                                borderRight: !0,
                                borderBottom: t.props.disabled
                            }, e.map(t.renderUser)) : null
                        }, t.renderUser = function(e) {
                            var n = t.props.disabled;
                            return u.createElement(d.yb, {
                                "data-test-selector": Ve.User,
                                key: e.id,
                                padding: {
                                    y: .5,
                                    x: 1
                                },
                                display: d.X.Flex,
                                justifyContent: d.Va.Center
                            }, u.createElement(d.q, {
                                alt: e.name,
                                src: e.avatar,
                                size: 36
                            }), u.createElement(d.Wa, {
                                flexGrow: 1,
                                margin: {
                                    x: 1
                                },
                                display: d.X.Flex,
                                justifyContent: d.Va.Center,
                                flexDirection: d.Z.Column
                            }, u.createElement(d.W, null, e.name)), u.createElement(d.A, {
                                disabled: n,
                                "data-test-selector": Ve.RemoveUserIcon,
                                icon: d.ob.Hide,
                                onClick: t.onRemoveUser.bind(t, e),
                                type: d.C.Secondary
                            }))
                        }, t.onUserSelect = function(e) {
                            var n = t.props.value.slice(0);
                            n.push(e), t.updateValue(n)
                        }, t.onRemoveUser = function(e) {
                            var n = t.props.value.filter(function(t) {
                                return t.id !== e.id
                            });
                            t.updateValue(n)
                        }, t.updateValue = function(e) {
                            var n;
                            t.props.onChange && t.props.onChange(((n = {})[t.props.name] = e, n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.disabled;
                        return u.createElement(d.Wa, {
                            margin: {
                                top: 1
                            }
                        }, this.renderUsers(), !e && u.createElement(Ye.a, {
                            limit: 10,
                            onUserSelect: this.onUserSelect
                        }))
                    }, t
                }(u.Component),
                Ke = (n("LjK+"), N.a.wrap(function() {
                    return n.e(106).then(n.bind(null, "Pi1p"))
                }, "DevLoginPage"));
            ! function(e) {
                e.Header = "dev-campaign-page-header-selector", e.CreateButton = "dev-campaign-page-create-button-selector", e.CancelCampaignButton = "dev-campaign-page-cancel-campaign-button-selector", e.CancelButton = "dev-campaign-page-cancel-button-selector", e.TargetAllBroadcastersInput = "dev-campaign-target-all-broadcasters-input-selector", e.VarietyStreamersInput = "dev-campaign-variety-streamers-input-selector", e.HasUserBlacklistInput = "dev-campaign-has-user-blacklist-input-selector", e.AdjustRateInput = "dev-campaign-adjust-rate-input-selector", e.ServerErrorMessage = "dev-campaign-server-error-message"
            }(ze || (ze = {}));
            var qe = function(e) {
                    function t(t) {
                        var n, a = e.call(this, t) || this;
                        a.renderChangeset = function(e, t) {
                            if (e) return u.createElement(_.a, {
                                message: Object(m.d)("An error has ocurred", "DevBountyBoardCampaignPagePresentation")
                            });
                            var n = t.params,
                                r = n.adjustRate,
                                i = n.budget,
                                o = n.country,
                                s = n.endDate,
                                l = n.game,
                                c = n.hasUserBlacklist,
                                p = n.language,
                                f = n.message,
                                h = n.userBlacklist,
                                g = n.allBroadcasters,
                                y = n.rateMultiplier,
                                b = n.platforms,
                                v = n.startDate,
                                O = n.streamingExperience,
                                T = n.varietyBroadcasters,
                                N = t.disabled,
                                S = t.errors,
                                I = a.props.match.params.campaignId,
                                A = (O || []).map(function(e) {
                                    return e.name
                                });
                            return u.createElement(d.Wa, {
                                className: "dev-dashboard__bounty-campaign",
                                display: d.X.Flex,
                                alignItems: d.f.Stretch,
                                flexDirection: d.Z.Column,
                                fullHeight: !0,
                                margin: {
                                    x: "auto"
                                },
                                padding: {
                                    top: 3,
                                    bottom: 2
                                }
                            }, u.createElement(d.Wa, {
                                flexGrow: 0,
                                "data-test-selector": ze.Header,
                                padding: {
                                    bottom: 3
                                }
                            }, u.createElement("header", null, u.createElement(d.W, {
                                type: d.Ob.H1
                            }, I ? Object(m.d)("Campaign Details", "DevBountyBoardCampaignPagePresentation") : Object(m.d)("New Bounty Campaign", "DevBountyBoardCampaignPagePresentation")))), u.createElement(d.Wa, {
                                flexGrow: 1,
                                position: d.eb.Relative
                            }, u.createElement(d.Wa, {
                                fullWidth: !0
                            }, u.createElement(d.Ia, {
                                fullHeight: !0,
                                gutterSize: d.Ja.Large
                            }, I && u.createElement(u.Fragment, null, u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    sm: 8,
                                    md: 6
                                }
                            }, u.createElement(He, {
                                campaignId: I
                            })), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(de, {
                                campaignId: I
                            })), u.createElement(d.P, {
                                cols: 12
                            }, u.createElement(xe, {
                                campaignId: I
                            }))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 7
                                }
                            }, I && u.createElement(d.Wa, {
                                padding: {
                                    y: 2
                                }
                            }, u.createElement(d.W, {
                                type: d.Ob.P,
                                fontSize: d.Ba.Size5
                            }, Object(m.d)("Once created, campaign details are read only.", "DevBountyBoardCampaignPagePresentation"))), u.createElement(d.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, u.createElement(d.Wa, {
                                padding: {
                                    y: 1
                                }
                            }, u.createElement(d.W, {
                                bold: !0,
                                type: d.Ob.H4
                            }, Object(m.d)("Campaign", "DevBountyBoardCampaignPagePresentation"))), u.createElement(d.yb, {
                                background: d.r.Base,
                                elevation: 1,
                                padding: 2
                            }, u.createElement(d.Ia, {
                                gutterSize: d.Ja.Medium
                            }, u.createElement(d.P, {
                                cols: 12
                            }, u.createElement(te, {
                                label: Object(m.d)("Game", "DevBountyBoardCampaignPagePresentation"),
                                value: l,
                                onChange: a.onFieldChanged,
                                errors: S.game,
                                disabled: N.game
                            })), u.createElement(d.P, {
                                cols: 12
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(ve, {
                                value: b || [],
                                onChange: a.onFieldChanged,
                                errors: S.platforms,
                                disabled: N.platforms
                            }))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(Se, {
                                endDate: s,
                                value: v,
                                errors: S.startDate,
                                disabled: N.startDate,
                                onChange: a.onFieldChanged
                            }))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(re, {
                                startDate: v,
                                value: s,
                                onChange: a.onFieldChanged,
                                errors: S.endDate,
                                disabled: N.endDate
                            }))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(Y, {
                                value: i,
                                onChange: a.onFieldChanged,
                                errors: S.budget,
                                disabled: N.budget
                            }))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(d.Wa, {
                                display: d.X.InlineBlock,
                                position: d.eb.Relative,
                                fullWidth: !0,
                                fullHeight: !0
                            }, u.createElement(d.Wa, {
                                padding: {
                                    top: 5
                                },
                                attachLeft: !0
                            }, u.createElement(X, {
                                name: E.AdjustRate,
                                label: Object(m.d)("Adjust Rate", "DevBountyBoardCampaignPagePresentation"),
                                value: r,
                                onChange: a.onFieldChanged,
                                errors: S.adjustRate,
                                disabled: N.adjustRate,
                                "data-test-selector": ze.AdjustRateInput
                            })))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 12
                                }
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, r && u.createElement(_e, {
                                label: Object(m.d)("Rate", "DevBountyBoardCampaignPagePresentation"),
                                value: y,
                                onChange: a.onFieldChanged,
                                errors: S.rateMultiplier,
                                disabled: N.rateMultiplier
                            }))), u.createElement(d.P, {
                                cols: 12
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(ye, {
                                value: f,
                                onChange: a.onFieldChanged,
                                errors: S.message,
                                disabled: N.message
                            }), u.createElement(d.Wa, {
                                margin: {
                                    top: .5
                                }
                            }, u.createElement(d.W, {
                                type: d.Ob.P,
                                color: d.O.Alt2,
                                fontSize: d.Ba.Size6
                            }, Object(m.d)("Accepts <x:link>Markdown</x:link>.", {
                                "x:link": function(e) {
                                    return u.createElement(d.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics"
                                    }, e)
                                }
                            }, "DevBountyBoardCampaignPagePresentation"))))))))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 5
                                }
                            }, u.createElement(d.Wa, {
                                attachTop: !0,
                                attachLeft: !0,
                                display: d.X.InlineBlock
                            }, u.createElement(d.W, {
                                bold: !0,
                                type: d.Ob.H4
                            }, Object(m.d)("Bounty Preview", "DevBountyBoardCampaignPagePresentation")), u.createElement(k.a, {
                                bounty: a.getBounty(t),
                                channelID: "1",
                                channelName: "PartnerName",
                                selectedItem: null,
                                handleBountyStatusChanged: a.noop,
                                refreshData: a.noop,
                                linkDisabled: !0
                            })), u.createElement(d.W, {
                                type: d.Ob.P,
                                color: d.O.Alt2,
                                fontSize: d.Ba.Size6
                            }, Object(m.d)("Game images are pulled from the <x:link>Giant Bomb Game Directory</x:link>.", {
                                "x:link": function(e) {
                                    return u.createElement(d.U, {
                                        to: "https://www.giantbomb.com/games/"
                                    }, e)
                                }
                            }, "DevBountyBoardCampaignPagePresentation"))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 7
                                }
                            }, u.createElement(d.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, u.createElement(d.Wa, {
                                padding: {
                                    bottom: 1
                                }
                            }, u.createElement(d.W, {
                                bold: !0,
                                type: d.Ob.H4
                            }, Object(m.d)("Target Broadcaster", "DevBountyBoardCampaignPagePresentation"))), u.createElement(d.yb, {
                                background: d.r.Base,
                                elevation: 1,
                                padding: 2
                            }, u.createElement(d.Ia, {
                                gutterSize: d.Ja.Medium
                            }, u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(fe, {
                                value: p || "",
                                onChange: a.onFieldChanged,
                                errors: S.language,
                                disabled: N.language
                            })), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 6
                                }
                            }, u.createElement(ne, {
                                value: o || "",
                                onChange: a.onFieldChanged,
                                errors: S.country,
                                disabled: N.country
                            })), u.createElement(d.P, {
                                cols: 12
                            }, u.createElement(d.Wa, {
                                margin: {
                                    top: .5
                                }
                            }, u.createElement(d.W, {
                                type: d.Ob.P,
                                color: d.O.Alt2,
                                fontSize: d.Ba.Size6
                            }, Object(m.d)("Only English speaking NA broadcasters can be targeted at this time.", "DevBountyBoardCampaignPagePresentation"))), u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(X, {
                                name: E.AllBroadcasters,
                                label: Object(m.d)("Target all broadcasters", "DevBountyBoardCampaignPagePresentation"),
                                value: g,
                                onChange: a.onFieldChanged,
                                errors: S.allBroadcasters,
                                disabled: N.allBroadcasters,
                                "data-test-selector": ze.TargetAllBroadcastersInput
                            })), !g && u.createElement(d.Wa, null, u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(pe, {
                                label: Object(m.d)("Streaming Experience", "DevBountyBoardCampaignPagePresentation"),
                                value: O,
                                onChange: a.onFieldChanged,
                                errors: S.streamingExperience,
                                disabled: N.streamingExperience
                            }), u.createElement(d.Wa, {
                                margin: {
                                    top: .5
                                }
                            }, u.createElement(d.W, {
                                type: d.Ob.P,
                                color: d.O.Alt2,
                                fontSize: d.Ba.Size6
                            }, Object(m.d)("Campaign will target broadcasters who have streamed at least one of the selected experiences.", "DevBountyBoardCampaignPagePresentation")))), u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                }
                            }, u.createElement(X, {
                                name: E.VarietyBroadcasters,
                                label: Object(m.d)("Include variety broadcasters", "DevBountyBoardCampaignPagePresentation"),
                                value: T,
                                onChange: a.onFieldChanged,
                                errors: S.varietyBroadcasters,
                                disabled: N.varietyBroadcasters,
                                tooltip: Object(m.d)("Variety streamers have communities that are more engaged with the streamer than any one game. These broadcasters, and their communities, love exploring new content.", "DevBountyBoardCampaignPagePresentation"),
                                "data-test-selector": ze.VarietyStreamersInput
                            }))), u.createElement(d.Wa, {
                                margin: {
                                    top: 2
                                },
                                position: d.eb.Relative
                            }, u.createElement(X, {
                                name: E.HasUserBlacklist,
                                label: Object(m.d)("Exclude specific broadcasters", "DevBountyBoardCampaignPagePresentation"),
                                value: c,
                                onChange: a.onFieldChanged,
                                errors: S.hasUserBlacklist,
                                disabled: N.hasUserBlacklist,
                                "data-test-selector": ze.HasUserBlacklistInput
                            }), c && u.createElement(Xe, {
                                value: h || [],
                                name: E.UserBlacklist,
                                errors: S.userBlacklist,
                                disabled: N.userBlacklist,
                                onChange: a.onFieldChanged
                            }))))))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 5
                                }
                            }, u.createElement(d.Wa, {
                                fullHeight: !0,
                                position: d.eb.Relative,
                                padding: {
                                    bottom: 4,
                                    top: 4
                                }
                            }, u.createElement(d.Wa, {
                                fullHeight: !0,
                                position: d.eb.Relative
                            }, u.createElement(d.Wa, null, u.createElement(d.W, {
                                bold: !0,
                                type: d.Ob.H4
                            }, Object(m.d)("Available Broadcaster Pool", "DevBountyBoardCampaignPagePresentation"))), u.createElement(Ee, {
                                gameNames: A,
                                targetAllBroadcasters: g,
                                targetVarietyBroadcasters: T
                            })))), u.createElement(d.P, {
                                cols: {
                                    default: 12,
                                    md: 5
                                },
                                offset: {
                                    default: 0,
                                    md: 7
                                }
                            }, u.createElement(d.Wa, {
                                fullHeight: !0,
                                position: d.eb.Relative,
                                padding: {
                                    top: 2
                                }
                            }, a.renderActions()))))))
                        }, a.renderActions = function() {
                            var e = !!a.props.match.params.campaignId;
                            return u.createElement(d.Wa, {
                                attachBottom: !0,
                                attachLeft: !0,
                                display: d.X.InlineBlock,
                                position: d.eb.Absolute,
                                padding: {
                                    bottom: 2
                                }
                            }, e ? u.createElement(d.z, {
                                "data-test-selector": ze.CancelCampaignButton,
                                onClick: a.props.showCancelCampaignModal,
                                type: d.F.Alert
                            }, Object(m.d)("Cancel Campaign", "DevBountyBoardCampaignPage")) : u.createElement(u.Fragment, null, u.createElement(d.Wa, {
                                display: d.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, a.state.showServerError && u.createElement(d.Wa, {
                                margin: {
                                    bottom: 1
                                }
                            }, u.createElement(d.W, {
                                color: d.O.Error,
                                "data-test-selector": ze.ServerErrorMessage
                            }, Object(m.d)("A server error has ocurred please try again later.", "DevBountyBoardCampaignPage"))), u.createElement(d.z, {
                                "data-test-selector": ze.CreateButton,
                                onClick: a.onClickCreate,
                                disabled: a.state.isSubmitting
                            }, Object(m.d)("Create Campaign", "DevBountyBoardCampaignPage"))), u.createElement(d.z, {
                                "data-test-selector": ze.CancelButton,
                                linkTo: "/console/bounty-board",
                                type: d.F.Hollow
                            }, Object(m.d)("Cancel", "DevBountyBoardCampaignPage"))))
                        }, a.getBounty = function(e) {
                            var t = e.params,
                                n = t.endDate,
                                r = t.message,
                                i = t.platforms,
                                o = t.startDate,
                                s = e.params.game || {
                                    displayName: "{GAME}",
                                    boxArtURL: null,
                                    coverURL: null
                                };
                            return v({}, Object(b.a)(C), {
                                id: null,
                                campaign: {
                                    id: null,
                                    title: "Stream " + (s ? s.displayName : "{GAME}") + " for 1 hour",
                                    type: D.e.PAY_TO_STREAM,
                                    sponsor: a.getCompanyName(),
                                    details: r,
                                    streamLengthMinutes: 60,
                                    availablePlatforms: i || [],
                                    game: s,
                                    boxArtURL: s ? s.boxArtURL : null,
                                    coverURL: s ? s.coverURL : null,
                                    startAt: o ? o.toJSON() : null,
                                    endAt: n ? n.toJSON() : null
                                },
                                status: D.f.AVAILABLE,
                                endAt: n ? n.toJSON() : null
                            })
                        }, a.noop = function() {}, a.onFieldChanged = function(e) {
                            a.setState(function(t) {
                                return t.changeset.params = r.__assign({}, t.changeset.params, e), t
                            })
                        }, a.onClickCreate = function() {
                            a.setState({
                                showServerError: !1
                            });
                            var e = W(a.state.changeset);
                            0 === Object.keys(e).length ? (a.setState({
                                changeset: r.__assign({}, a.state.changeset, {
                                    errors: {}
                                })
                            }), a.props.showCreateCampaignModal({
                                campaign: a.getBounty(a.state.changeset).campaign,
                                onAccept: a.createBountyCampaign.bind(a),
                                budget: a.state.changeset.params[E.Budget]
                            })) : a.setState({
                                changeset: r.__assign({}, a.state.changeset, {
                                    errors: e
                                })
                            })
                        }, a.createBountyCampaign = function() {
                            return r.__awaiter(a, void 0, void 0, function() {
                                var e, t, n, a, i, o, s, l, c, u, d, p, f, h, g, y, b, v, O, T;
                                return r.__generator(this, function(N) {
                                    switch (N.label) {
                                        case 0:
                                            t = this.state.changeset.params, n = t.adjustRate, a = t.allBroadcasters, i = t.budget, o = t.endDate, s = t.game, l = t.hasUserBlacklist, c = t.message, u = t.platforms, d = t.rateMultiplier, p = t.startDate, f = t.streamingExperience, h = t.userBlacklist, g = t.varietyBroadcasters, y = "Stream " + (s ? s.displayName : "{GAME}") + " for 1 hour", b = (f || []).map(function(e) {
                                                return e.name
                                            }), v = [], l && (v = (h || []).map(function(e) {
                                                return e.id
                                            })), O = {
                                                availablePlatforms: u || [],
                                                blacklistedBroadcasters: v,
                                                broadcasterMessage: c || "",
                                                broadcasterMultiplier: n && d || 1,
                                                budgetCents: i ? 100 * i : 0,
                                                contentID: s ? s.id : "",
                                                endAt: o ? o.toJSON() : "",
                                                startAt: p ? p.toJSON() : "",
                                                targetAllBroadcasters: a,
                                                targetVarietyBroadcasters: g,
                                                targetedGames: a ? [] : b,
                                                title: y
                                            }, N.label = 1;
                                        case 1:
                                            return N.trys.push([1, 3, 4, 5]), this.setState({
                                                isSubmitting: !0
                                            }), [4, this.props.createBountyCampaign(Object(A.a)(O))];
                                        case 2:
                                            return (T = N.sent()).data && T.data.createBountyCampaign && T.data.createBountyCampaign.campaign && T.data.createBountyCampaign.campaign.id && (this.setState({
                                                changeset: r.__assign({}, this.state.changeset, {
                                                    disabled: (e = {}, e[E.Language] = !0, e[E.Country] = !0, e[E.UserBlacklist] = !0, e[E.StreamingExperience] = !0, e[E.AllBroadcasters] = !0, e[E.Budget] = !0, e[E.VarietyBroadcasters] = !0, e[E.AdjustRate] = !0, e[E.RateMultiplier] = !0, e[E.EndDate] = !0, e[E.StartDate] = !0, e[E.Platforms] = !0, e[E.Message] = !0, e[E.Game] = !0, e)
                                                })
                                            }), m.p.history.push("/console/bounty-board/campaign/" + T.data.createBountyCampaign.campaign.id)), [3, 5];
                                        case 3:
                                            return N.sent(), this.setState({
                                                showServerError: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubmitting: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        };
                        var i = !!a.props.match.params.campaignId,
                            o = j(x, ((n = {})[E.Language] = !0, n[E.Country] = !0, n[E.HasUserBlacklist] = i, n[E.UserBlacklist] = i, n[E.StreamingExperience] = i, n[E.AllBroadcasters] = i, n[E.Budget] = i, n[E.VarietyBroadcasters] = i, n[E.AdjustRate] = i, n[E.RateMultiplier] = i, n[E.EndDate] = i, n[E.StartDate] = i, n[E.Platforms] = i, n[E.Message] = i, n[E.Game] = i, n));
                        return a.state = {
                            changeset: o,
                            showServerError: !1,
                            isSubmitting: !1
                        }, a
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return u.createElement(Ke, null);
                        var e, t = this.props.match.params.campaignId;
                        return e = t ? u.createElement(Ne, {
                            campaignId: t
                        }, this.renderChangeset) : this.renderChangeset(!1, this.state.changeset), u.createElement(S.a, {
                            name: "bounty_board_brand_portal_enabled"
                        }, u.createElement(H.a, null, e))
                    }, t.prototype.getCompanyName = function() {
                        return this.props.data && this.props.data.currentUser && this.props.data.currentUser.company && this.props.data.currentUser.company.name || "-"
                    }, t
                }(u.Component),
                Qe = Object(O.compose)(Object(I.a)(B), Object(I.a)(w, {
                    name: "createBountyCampaign"
                }), Object(R.b)("DevBountyBoardCampaignPagePresentation", {
                    autoReportInteractive: !0
                }), T.a)(qe);
            var Ze = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e),
                    user: Object(l.e)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    showCreateCampaignModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(s.d)(y, t)
                    },
                    showCancelCampaignModal: function() {
                        return Object(s.d)(c.a, {})
                    }
                }, e)
            })(Qe);
            n.d(t, "DevBountyBoardCampaignPage", function() {
                return Ze
            })
        },
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            });
            var a = [{
                id: "profile_image_001",
                urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
            }, {
                id: "profile_image_002",
                urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
            }, {
                id: "profile_image_003",
                urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
            }, {
                id: "profile_image_004",
                urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
            }, {
                id: "profile_image_005",
                urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
            }, {
                id: "profile_image_006",
                urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
            }, {
                id: "profile_image_007",
                urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
            }];

            function r(e, t) {
                var n = 70;
                return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
            }

            function i(e, t) {
                var n = parseInt(e, 10) % a.length;
                return r(a[n], t)
            }
        },
        z0Ka: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("WyAD"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("OGSR"),
                l = n("Ue10"),
                c = (n("R4hK"), l.R.HintedGrey8),
                u = [l.R.Purple8, l.R.PrimeBlue, l.R.Purple6, l.R.Purple11, "#3dc6ae", l.R.Orange, "#69d420", l.R.Yellow],
                d = "rgba(0, 0, 0, 0)",
                m = l.R.HintedGrey11,
                p = l.R.HintedGrey15,
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCanvasReady = function(e) {
                            var n = {
                                type: "bar",
                                data: {
                                    labels: t.props.labels,
                                    datasets: t.datasetsWithColor()
                                },
                                options: {
                                    scales: {
                                        xAxes: [{
                                            stacked: !0,
                                            ticks: {
                                                maxRotation: 0,
                                                minRotation: 0,
                                                maxTicksLimit: 4,
                                                fontColor: c,
                                                fontSize: 10,
                                                padding: 5,
                                                callback: t.formatXAxes
                                            },
                                            gridLines: {
                                                color: p,
                                                lineWidth: 1,
                                                drawBorder: !1,
                                                display: !1
                                            }
                                        }],
                                        yAxes: [{
                                            stacked: !0,
                                            ticks: a.__assign({
                                                min: 0,
                                                maxTicksLimit: 6,
                                                fontColor: c,
                                                fontSize: 10,
                                                padding: 5
                                            }, t.formatYAxisConfig),
                                            gridLines: {
                                                borderDash: [5, 5],
                                                color: "rgba(150,150,150,0.2)",
                                                zeroLineColor: "rgba(150,150,150,0.2)",
                                                tickMarkLength: 5
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: !0,
                                        position: "bottom",
                                        labels: {
                                            boxWidth: 12,
                                            fontColor: c,
                                            padding: 15
                                        }
                                    },
                                    tooltips: {
                                        backgroundColor: "rgba(0,0,0,0.95)",
                                        intersect: !1,
                                        mode: "index",
                                        titleFontColor: p,
                                        bodyFontColor: m,
                                        titleFontSize: 15,
                                        xPadding: 15,
                                        yPadding: 12,
                                        cornerRadius: 3,
                                        displayColors: !0,
                                        multiKeyBackground: d,
                                        footerFontStyle: "normal",
                                        callbacks: {
                                            title: t.formatTooltipTitle,
                                            label: t.formatTooltipLabel,
                                            afterLabel: t.formatTooltipAfterLabel,
                                            labelColor: t.getLabelColor
                                        }
                                    },
                                    onClick: t.handleDatasetClick,
                                    responsive: !0,
                                    maintainAspectRatio: !1
                                }
                            };
                            t.myChart = new r(e, n)
                        }, t.formatXAxes = function(e) {
                            if (t.props.formatXAxis) return t.props.formatXAxis(e);
                            var n = Number(e);
                            return isNaN(n) ? e : Object(o.c)(new Date(Number(e)), {
                                month: "short",
                                day: "numeric"
                            })
                        }, t.handleDatasetClick = function(e, n) {
                            if (t.props.onDatasetClick) return t.props.onDatasetClick(e, n)
                        }, t.formatTooltipTitle = function(e) {
                            var n = e[0].index,
                                a = {
                                    label: t.props.labels[n],
                                    value: e.reduce(function(e, t) {
                                        return e + Number(t.yLabel)
                                    }, 0),
                                    index: n
                                };
                            if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(a)
                        }, t.formatTooltipLabel = function(e, n) {
                            var a = e.index,
                                r = n.datasets[e.datasetIndex].label;
                            if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                                label: r,
                                value: Number(e.yLabel),
                                index: a
                            });
                            var i = Number(e.yLabel);
                            return isNaN(i) ? e.yLabel : Object(o.f)(Number(e.yLabel))
                        }, t.formatTooltipAfterLabel = function(e, n) {
                            if (t.props.formatTooltipAfterLabel) {
                                var a = e.index,
                                    r = Number(n.labels[a]),
                                    i = n.datasets[e.datasetIndex].label;
                                return t.props.formatTooltipAfterLabel({
                                    label: i,
                                    time: r,
                                    value: Number(e.yLabel),
                                    index: a
                                })
                            }
                        }, t.getLabelColor = function(e, t) {
                            return {
                                borderColor: d,
                                backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(l.Wa, {
                            className: "top-stats-chart",
                            position: l.eb.Relative
                        }, i.createElement(s.a, {
                            onCanvasReady: this.handleCanvasReady
                        }))
                    }, t.prototype.componentDidUpdate = function() {
                        this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update())
                    }, t.prototype.datasetsWithColor = function() {
                        return this.props.datasets.map(function(e, t) {
                            return {
                                label: e.label,
                                data: e.data,
                                backgroundColor: e.color || u[t % u.length],
                                borderWidth: 0
                            }
                        })
                    }, Object.defineProperty(t.prototype, "formatYAxisConfig", {
                        get: function() {
                            var e = this.props.formatYAxis;
                            return e ? {
                                callback: function(t) {
                                    return e(t)
                                }
                            } : {}
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component);
            n.d(t, "a", function() {
                return f
            })
        },
        zmGj: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoard_CompanyGameList"
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
                                        value: "company"
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
                                                value: "games"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "devCompanyGame"
                                                    },
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
                    end: 187
                }
            };
            a.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/company-game.gql"\nquery DevBountyBoard_CompanyGameList {\ncurrentUser {\nid\ncompany {\nid\ngames {\n...devCompanyGame\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("MFJw").definitions)), e.exports = a
        }
    }
]);