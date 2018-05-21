webpackJsonp([49], {
    "+/J2": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMilliseconds(a), n
        }
    },
    "+6x9": function(e, t, n) {
        "use strict";
        var r, a, i = n("TToO"),
            s = n("HW6M"),
            o = n("GiK3"),
            u = n("HM6l"),
            c = n("Odds");
        n("JhPt");
        ! function(e) {
            e.Default = "default", e.Medium = "medium", e.Large = "large"
        }(r || (r = {})),
        function(e) {
            e.Default = "default", e.Brand = "brand"
        }(a || (a = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = "esports-square__mask--locked-" + Object(u.a)(),
                    t = "esports-square__mask--locked-" + Object(u.a)(),
                    n = void 0,
                    i = void 0;
                this.props.locked ? (n = "esports-square__mask--locked", i = "url(#" + e + ")") : void 0 === this.props.hasInsiderPass || this.props.hasInsiderPass || (n = "esports-square__mask--locked", i = "url(#" + t + ")");
                var l = s({
                        "esports-square--border": !this.props.noBorder
                    }, {
                        "esports-square--border__brand": this.props.borderType === a.Brand
                    }, {
                        "esports-square--border__none": this.props.noBorder
                    }, {
                        "esports-square--large": this.props.size === r.Large
                    }, {
                        "esports-square--medium": this.props.size === r.Medium
                    }, {
                        "esports-square--default": this.props.size === r.Default
                    }, {
                        "esports-square": !0
                    }),
                    d = s({
                        "esports-square__image--large": this.props.size === r.Large
                    }, {
                        "esports-square__image--medium": this.props.size === r.Medium
                    }, {
                        "esports-square__image--default": this.props.size === r.Default
                    }, {
                        "esports-square__image": !0
                    }),
                    m = s({
                        "esports-square__svg--large": this.props.size === r.Large
                    }, {
                        "esports-square__svg--medium": this.props.size === r.Medium
                    }, {
                        "esports-square__svg": !0
                    });
                return o.createElement(c._35, {
                    "data-test-selector": n,
                    className: l,
                    textAlign: c._45.Center,
                    position: c._15.Relative,
                    borderRadius: c.t.Large,
                    overflow: c._11.Hidden,
                    background: c.n.Base,
                    display: c.R.InlineBlock
                }, o.createElement("img", {
                    className: d,
                    src: this.props.imageURL,
                    alt: "",
                    style: {
                        filter: i
                    }
                }), o.createElement("svg", {
                    className: m,
                    width: "60px",
                    height: "60px",
                    viewBox: "0 0 60 60"
                }, o.createElement("defs", null, o.createElement("filter", {
                    id: e
                }, o.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.3 0 0 0 0 0 0.3 0 0 0 0 0 0.3 0 0 0 0 0 0.3 0"
                })), o.createElement("filter", {
                    id: t
                }, o.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                }))), o.createElement("g", {
                    id: "Reward-hex-med",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(-30.000000, -7.000000)"
                }, o.createElement("g", {
                    id: "Rectangle-14"
                }, void 0 !== this.props.hasInsiderPass && !this.props.hasInsiderPass && o.createElement("path", {
                    className: "esports-hexagon__svg--lock",
                    transform: "translate(50, 28)",
                    fill: "#fff",
                    d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                    fillRule: "evenodd"
                })))))
            }, t
        }(o.PureComponent);
        n.d(t, !1, function() {
            return "esports-square__mask--locked"
        }), n.d(t, !1, function() {
            return "esports-square__mask--locked"
        }), n.d(t, !1, function() {
            return "esports-square__pattern"
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return l
        })
    },
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return i
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return o
        });
        var r = "subscribe_to_channel",
            a = "turbo",
            i = "visit_url",
            s = "none",
            o = "broadcaster"
    },
    "+sSA": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(999), t
        }
    },
    "/dIK": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setDate(a), n
        }
    },
    "024F": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMilliseconds()
        }
    },
    "0LAu": function(e, t, n) {
        var r = n("MIQa");
        e.exports = function() {
            return r(new Date)
        }
    },
    "0UyA": function(e, t, n) {
        var r = n("4Z4o");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r - 1), a.setHours(23, 59, 59, 999), a
        }
    },
    "0aH9": function(e, t, n) {
        var r = n("3znZ"),
            a = 6e4,
            i = 6048e5;
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                o = n.getTime() - n.getTimezoneOffset() * a,
                u = s.getTime() - s.getTimezoneOffset() * a;
            return Math.round((o - u) / i)
        }
    },
    "0oN5": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), r(e).getTime() === r(t).getTime()
        }
    },
    "11Bn": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return r(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
        }
    },
    "1gtq": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime()
        }
    },
    "1juF": function(e, t) {},
    "1rLR": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 3 * n)
        }
    },
    "1udo": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function() {
            return r(new Date)
        }
    },
    "25hp": function(e, t, n) {
        var r = n("G7No");
        e.exports = function(e, t) {
            var n = r(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "2IkU": function(e, t) {},
    "2lB6": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n, a) {
            var i = r(e).getTime(),
                s = r(t).getTime(),
                o = r(n).getTime(),
                u = r(a).getTime();
            if (i > s || o > u) throw new Error("The start of the range cannot be after the end of the range");
            return i < u && o < s
        }
    },
    "3EIC": function(e, t, n) {
        var r = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                s = n.getMonth() + i,
                o = new Date(0);
            o.setFullYear(n.getFullYear(), s, 1), o.setHours(0, 0, 0, 0);
            var u = a(o);
            return n.setMonth(s, Math.min(u, n.getDate())), n
        }
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var r = n("RbGx"),
            a = n("urTJ"),
            i = n("+V/3"),
            s = (n("AwFw"), n("TToO")),
            o = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === i.c && (e = s.__assign({}, e, {
                            channelName: n
                        }));
                        var r = t.get(e.setID);
                        r || (r = new Map, t.set(e.setID, r)), r.set(e.version, e)
                    })
                }, e
            }();
        new o([], [], "");
        n.d(t, "b", function() {
            return r.a
        }), n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return o
        })
    },
    "3g9B": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDate()
        }
    },
    "3nPg": function(e, t, n) {
        var r = n("G7No"),
            a = 6e4;
        e.exports = function(e, t) {
            var n = r(e, t) / a;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3znZ": function(e, t, n) {
        var r = n("u/4p");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "46tX": function(e, t, n) {
        "use strict";
        t.c = m, t.a = p, t.b = function(e) {
            return a.test(e)
        };
        var r = /Android/i,
            a = /chrome/i,
            i = /webOS/i,
            s = /iPhone/i,
            o = /iPad/i,
            u = /iPod/i,
            c = /BlackBerry/i,
            l = /Windows Phone/i,
            d = /Mobile/i;

        function m(e) {
            return p(e) || i.test(e) || s.test(e) || o.test(e) || u.test(e) || c.test(e) || l.test(e) || d.test(e)
        }

        function p(e) {
            return r.test(e)
        }
    },
    "4LxA": function(e, t, n) {
        var r = n("iRXW");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t || 6 === t
        }
    },
    "4Z4o": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 12 * n)
        }
    },
    "4zIR": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n) {
            var a = r(e).getTime(),
                i = r(t).getTime(),
                s = r(n).getTime();
            if (i > s) throw new Error("The start of the range cannot be after the end of the range");
            return a >= i && a <= s
        }
    },
    "5Kxe": function(e, t, n) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TicketDescription"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "productName"
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
                            value: "product"
                        },
                        name: {
                            kind: "Name",
                            value: "subscriptionProduct"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "productName"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "productName"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "price"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "interval"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unit"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasAdFree"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasFastChat"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasSubonlyVideoArchive"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tier"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "owner"
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
                                            value: "bannerImageURL"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "broadcastBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionProducts"
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
                                                    value: "tier"
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
                                                            value: "token"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "giftPromotion"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "newPrice"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "promotion"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
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
                end: 469
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery TicketDescription($productName: String!) {\nproduct: subscriptionProduct(productName: $productName) {\nid\ndisplayName\nprice\ninterval {\nunit\n}\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\ntier\nowner {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width: 300)\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\ntier\nemotes {\nid\ntoken\n}\n}\n}\ngiftPromotion {\nnewPrice\n}\nself {\npromotion {\nnewPrice\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = r
    },
    "5qwL": function(e, t, n) {
        var r = n("VaeB");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "6CZb": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, n) {
        var r = n("gAt4");
        e.exports = function(e, t) {
            var n = r(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "6Zhv": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                a = Number(t);
            return new Date(n + a)
        }
    },
    "6axH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 6 === r(e).getDay()
        }
    },
    "6udH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 1 === r(e).getDate()
        }
    },
    "702D": function(e, t) {},
    "7EGB": function(e, t, n) {
        var r = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 7 * n)
        }
    },
    "7Swd": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "7Xwz": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7yyf": function(e, t, n) {
        var r = n("rBmI");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    "8Gpr": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getHours()
        }
    },
    "8KV+": function(e, t, n) {
        var r = n("u/4p");
        e.exports = function(e, t, n) {
            var a = r(e, n),
                i = r(t, n);
            return a.getTime() === i.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var r = n("xA5w"),
            a = 864e5;
        e.exports = function(e, t, n, i) {
            var s = r(e).getTime(),
                o = r(t).getTime(),
                u = r(n).getTime(),
                c = r(i).getTime();
            if (s > o || u > c) throw new Error("The start of the range cannot be after the end of the range");
            if (!(s < c && u < o)) return 0;
            var l = (c > o ? o : c) - (u < s ? s : u);
            return Math.ceil(l / a)
        }
    },
    "8S49": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UnsubscribePage"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "productName"
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
                            value: "subscriptionProduct"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "productName"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "productName"
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
                                    value: "type"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "benefit"
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
                                                    value: "renewsAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isRefundable"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "purchase"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "details"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
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
                end: 203
            }
        };
        n.loc.source = {
            body: "query UnsubscribePage($productName: String!) {\nsubscriptionProduct(productName: $productName) {\nid\ntype\nself {\nbenefit {\nid\nrenewsAt\nendsAt\nisRefundable\n}\npurchase {\ndetails {\nproductType\nstate\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8m9s": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            a = n("Aj/L"),
            i = n("TToO"),
            s = n("GiK3"),
            o = n("3zLD"),
            u = n("6sO2"),
            c = n("7vx8"),
            l = n("TeXj"),
            d = n("+V/3"),
            m = n("3T7g"),
            p = n("7LIQ"),
            f = n("Tzcg"),
            g = n("Odds"),
            v = function(e) {
                return s.createElement(g._8, {
                    padding: 2
                }, s.createElement(g._2, {
                    margin: {
                        bottom: 2
                    }
                }, s.createElement(g.Q, {
                    bold: !0
                }, Object(u.d)("Subscription benefits", "ChannelSubscriptionBenefits"))), s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("Directly support the broadcaster", "ChannelSubscriptionBenefits"))), e.hasAdFree && s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("Ad-free (with limited exceptions)", "ChannelSubscriptionBenefits"))), s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("Chat during subscriber-only mode", "ChannelSubscriptionBenefits"))), e.hasFastChat && s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("Not affected by chat slow mode", "ChannelSubscriptionBenefits"))), e.hasSubonlyVideoArchive && s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("Access to VODs", "ChannelSubscriptionBenefits"))), e.badges.length && s.createElement(s.Fragment, null, s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("Subscriber Badges:", "ChannelSubscriptionBenefits"))), s.createElement(g._8, {
                    margin: {
                        bottom: 1
                    },
                    display: g.R.Flex,
                    flexWrap: g.U.Wrap,
                    justifyContent: g._7.Center
                }, e.badges.map(function(e) {
                    return s.createElement(g._8, {
                        key: e.setID + "/" + e.version,
                        margin: .5
                    }, s.createElement(m.a, {
                        badge: e
                    }))
                }))), e.emotes.length && s.createElement(s.Fragment, null, s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, null, Object(u.d)("{numEmotes, plural, one {# Subscriber Emote:} other {# Subscriber Emotes:}}", {
                    numEmotes: e.emotes.length
                }, "ChannelSubscriptionBenefits"))), s.createElement(p.a, {
                    emoteSet: {
                        id: "",
                        emotes: Object(f.b)(e.emotes)
                    },
                    locked: !1
                })))
            };
        var h = function(e) {
                return s.createElement(g.Q, {
                    type: g._49.H4
                }, Object(u.d)("{price} / {interval}", {
                    price: s.createElement(g.Q, {
                        type: g._49.Span,
                        bold: !0
                    }, e.price),
                    interval: function(e) {
                        switch (e) {
                            case "WEEK":
                                return Object(u.d)("Week", "TicketPrice");
                            case "MONTH":
                                return Object(u.d)("Month", "TicketPrice");
                            case "YEAR":
                                return Object(u.d)("Year", "TicketPrice");
                            case "ONE_TIME":
                                return Object(u.d)("One-Time Purchase", "TicketPrice");
                            default:
                                return ""
                        }
                    }(e.interval)
                }, "TicketDescription"))
            },
            b = (n("R8MC"), {
                display: g.R.Hide,
                breakpointLarge: {
                    display: g.R.Block
                }
            }),
            k = {
                display: g.R.Block,
                breakpointLarge: {
                    display: g.R.Hide
                }
            },
            w = function(e) {
                return s.createElement(s.Fragment, null, s.createElement("div", {
                    className: "channel-subscription-header__banner-image",
                    style: {
                        backgroundImage: "url(" + e.bannerImageURL
                    }
                }, s.createElement(g._35, i.__assign({}, k, {
                    background: g.n.Overlay,
                    position: g._15.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                })), s.createElement(g._8, {
                    className: "channel-subscription-header__banner-background",
                    textAlign: g._45.Center,
                    breakpointLarge: {
                        padding: 5
                    }
                }, s.createElement(g._8, {
                    padding: {
                        top: 2
                    },
                    display: g.R.Flex,
                    justifyContent: g._7.Center,
                    breakpointLarge: {
                        padding: 0
                    }
                }, s.createElement(g.m, {
                    alt: e.ownerDisplayName || "",
                    size: 96,
                    src: e.profileImageURL
                })), s.createElement(g._8, i.__assign({}, b), s.createElement(g._2, {
                    margin: 2
                }, s.createElement(g.Q, {
                    type: g._49.H4,
                    bold: !0,
                    color: g.K.Overlay
                }, e.ownerDisplayName)), s.createElement(g.Q, {
                    type: g._49.H5,
                    color: g.K.Overlay
                }, e.productDisplayName)))), s.createElement(g._35, i.__assign({}, b, {
                    borderBottom: !0,
                    textAlign: g._45.Center,
                    padding: 2
                }), s.createElement(h, {
                    price: e.productPrice,
                    interval: e.productPriceInterval
                })), s.createElement(g._8, i.__assign({}, k, {
                    textAlign: g._45.Center,
                    padding: {
                        bottom: 1
                    }
                }), s.createElement(g._2, {
                    margin: {
                        top: 3
                    }
                }, s.createElement(g.Q, {
                    type: g._49.H4,
                    bold: !0
                }, e.ownerDisplayName)), s.createElement(g._2, {
                    margin: 1
                }, s.createElement(g.Q, {
                    type: g._49.H5
                }, e.productDisplayName)), s.createElement(h, {
                    price: e.productPrice,
                    interval: e.productPriceInterval
                })))
            },
            x = n("yWCw"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: !0
                    }, t.toggleCollapsed = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.collapsable ? s.createElement(s.Fragment, null, s.createElement(g._8, {
                        display: this.state.collapsed ? g.R.Hide : g.R.Block,
                        breakpointLarge: {
                            display: g.R.Block
                        }
                    }, s.createElement(g.D, null, this.props.children)), s.createElement(g._8, {
                        display: g.R.Block,
                        breakpointLarge: {
                            display: g.R.Hide
                        }
                    }, s.createElement(g._6, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, s.createElement(g._8, {
                        fullWidth: !0,
                        textAlign: g._45.Center,
                        alignItems: g.c.Center,
                        padding: {
                            y: 1
                        }
                    }, s.createElement(g.Q, {
                        type: g._49.Span,
                        color: g.K.Link
                    }, this.state.collapsed ? this.props.showButtonLabel : this.props.hideButtonLabel))))) : s.createElement(g.D, null, this.props.children)
                }, t
            }(s.Component),
            E = (n("eVow"), function(e) {
                return s.createElement(g._8, {
                    className: "ticket-wrapper__container",
                    margin: {
                        bottom: 2
                    },
                    breakpointLarge: {
                        margin: 0
                    }
                }, s.createElement(g.C, {
                    elevation: 1
                }, e.children))
            }),
            _ = (n("ib22"), function() {
                return s.createElement(E, null, s.createElement(g._8, {
                    className: "error-ticket-description__header",
                    padding: 2
                }, s.createElement(g._35, {
                    fullHeight: !0,
                    background: g.n.Alt2
                }, s.createElement(x.a, null))), s.createElement(y, {
                    collapsable: !0
                }, s.createElement(g._35, {
                    className: "error-ticket-description__body",
                    padding: 2,
                    borderTop: !0
                }, s.createElement(g._35, {
                    fullHeight: !0,
                    background: g.n.Alt2
                }, s.createElement(x.a, null)))))
            }),
            S = (n("1juF"), function() {
                return s.createElement(E, null, s.createElement(g._8, {
                    className: "placeholder-ticket-description__header",
                    padding: 2
                }, s.createElement(g._35, {
                    fullHeight: !0,
                    background: g.n.Alt2
                })), s.createElement(y, {
                    collapsable: !0
                }, s.createElement(g._35, {
                    padding: 2,
                    borderTop: !0
                }, s.createElement(g._14, {
                    lineCount: 30
                }))))
            }),
            T = [{
                imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_ad-free.png",
                header: function() {
                    return Object(u.d)("Ad-Free*", "TurboTicketDescription")
                },
                description: function() {
                    return Object(u.d)("No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers.", "TurboTicketDescription")
                }
            }, {
                imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_custom-emotes.png",
                header: function() {
                    return Object(u.d)("Custom Emoticon Set", "TurboTicketDescription")
                },
                description: function() {
                    return Object(u.d)("Express your emotions with an exclusive set of faces.", "TurboTicketDescription")
                }
            }, {
                imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_badge.png",
                header: function() {
                    return Object(u.d)("Badge", "TurboTicketDescription")
                },
                description: function() {
                    return Object(u.d)("Show everyone how Turbo you are with a shiny new chat badge.", "TurboTicketDescription")
                }
            }, {
                imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_chat-color.png",
                header: function() {
                    return Object(u.d)("Extended Chat Colors", "TurboTicketDescription")
                },
                description: function() {
                    return Object(u.d)("Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up.", "TurboTicketDescription")
                }
            }, {
                imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_storage.png",
                header: function() {
                    return Object(u.d)("Increased Video Storage", "TurboTicketDescription")
                },
                description: function() {
                    return Object(u.d)("Save your past broadcasts on Twitch for 60 days.", "TurboTicketDescription")
                }
            }],
            D = function(e) {
                return s.createElement(E, null, s.createElement(g._35, {
                    background: g.n.Alt2
                }, s.createElement(g._8, {
                    padding: 2
                }, s.createElement(g._2, {
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(g.Q, {
                    type: g._49.H2,
                    bold: !0
                }, Object(u.d)("Features", "TurboTicketDescription"))), s.createElement(g.Q, {
                    type: g._49.H4
                }, Object(u.d)("This list doesn’t even include how much of a baller you’ll become after upgrading.", "TurboTicketDescription"))), s.createElement(y, {
                    collapsable: !0,
                    showButtonLabel: Object(u.d)("Show Turbo Benefits", "TurboTicketDescription"),
                    hideButtonLabel: Object(u.d)("Hide Turbo Benefits", "TurboTicketDescription")
                }, s.createElement(g._8, {
                    padding: {
                        x: 2
                    }
                }, T.map(function(e, t) {
                    return s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        },
                        key: "turbo-benefit-" + t
                    }, s.createElement(g.Y, null, s.createElement(g.L, {
                        cols: 4
                    }, s.createElement(g._8, {
                        textAlign: g._45.Center
                    }, s.createElement(g.N, {
                        src: e.imgSrc,
                        alt: e.header()
                    }))), s.createElement(g.L, {
                        cols: 8
                    }, s.createElement(g.Q, {
                        type: g._49.H4,
                        bold: !0
                    }, e.header()), s.createElement(g.Q, {
                        type: g._49.P
                    }, e.description()))))
                }))), s.createElement(g._8, {
                    padding: 2
                }, s.createElement(g._35, {
                    border: !0,
                    textAlign: g._45.Center,
                    background: g.n.Alt,
                    padding: 2
                }, s.createElement(h, {
                    price: e.productPrice,
                    interval: e.productPriceInterval
                })))))
            },
            O = n("3iBR"),
            N = n("D0Fd"),
            A = n("+6x9"),
            F = n("CWW0"),
            M = n("PGoF"),
            C = (n("iLMR"), "skin-selector"),
            I = "igc-selector",
            R = "badge-selector",
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderHeroSkins = function() {
                        if (!t.props.data.loading && !t.props.data.error) {
                            var e = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.heroSkins.map(function(e) {
                                return e.id === F.b ? s.createElement(g._2, {
                                    margin: {
                                        top: 1,
                                        bottom: 1
                                    },
                                    key: "skin-" + e.id,
                                    display: g.R.Flex,
                                    flexDirection: g.T.Row,
                                    alignItems: g.c.Center,
                                    "data-test-selector": C
                                }, s.createElement("li", null, s.createElement(A.a, {
                                    imageURL: e.imageURL
                                }))) : s.createElement(g._2, {
                                    margin: {
                                        x: .5
                                    },
                                    key: "skin-" + e.id,
                                    display: g.R.Flex,
                                    flexDirection: g.T.Row,
                                    alignItems: g.c.Center,
                                    "data-test-selector": C
                                }, s.createElement("li", null, s.createElement(N.a, {
                                    imageURL: e.imageURL,
                                    size: N.b.Small
                                })))
                            }) : null;
                            return s.createElement(g._2, {
                                display: g.R.Flex,
                                flexDirection: g.T.Row,
                                flexWrap: g.U.Wrap,
                                justifyContent: g._7.Center,
                                alignItems: g.c.Center
                            }, s.createElement("ul", null, e))
                        }
                    }, t.renderInGameContent = function() {
                        if (!t.props.data.loading && !t.props.data.error) {
                            var e = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.inGameContent.map(function(e) {
                                return s.createElement(g.m, {
                                    key: "igc-" + e.id,
                                    src: e.imageURL,
                                    alt: e.name,
                                    size: 64,
                                    "data-test-selector": I
                                })
                            }) : null;
                            return s.createElement(g._8, {
                                margin: {
                                    bottom: 1
                                },
                                display: g.R.Flex,
                                flexDirection: g.T.Row,
                                flexWrap: g.U.Wrap,
                                justifyContent: g._7.Center,
                                alignItems: g.c.Center
                            }, e)
                        }
                    }, t.renderSubBadges = function() {
                        if (!t.props.data.loading && !t.props.data.error) {
                            var e = t.props.badges.map(function(e) {
                                    return {
                                        name: e.title,
                                        imageURL: e.image4x
                                    }
                                }),
                                n = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.badges.map(function(e) {
                                    return {
                                        name: e.name,
                                        imageURL: e.imageURL
                                    }
                                }) : null;
                            n && (e = e.concat(n));
                            var r = e.map(function(e) {
                                return s.createElement(g._2, {
                                    margin: {
                                        x: 1
                                    },
                                    key: "access-badge-" + e.name
                                }, s.createElement("li", null, s.createElement(g.m, {
                                    src: e.imageURL,
                                    alt: e.name,
                                    size: 36,
                                    "data-test-selector": R
                                })))
                            });
                            return s.createElement(s.Fragment, null, s.createElement(g._2, {
                                margin: {
                                    bottom: 1
                                }
                            }, s.createElement(g.Q, null, Object(u.d)("{numBadges, number} All-Access Pass Twitch Badges:", {
                                numBadges: 2
                            }, "EsportsTicketDescription"))), s.createElement(g._2, {
                                margin: {
                                    bottom: 1
                                },
                                display: g.R.Flex,
                                flexWrap: g.U.Wrap
                            }, s.createElement("ul", null, r)))
                        }
                    }, t.renderSubEmotes = function() {
                        if (0 !== t.props.emotes.length) return s.createElement(s.Fragment, null, s.createElement(g._2, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(g.Q, null, Object(u.d)("{numEmotes, number} All-Access Pass Twitch Emotes:", {
                            numEmotes: t.props.emotes.length
                        }, "EsportsTicketDescription"))), s.createElement(g._8, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(p.a, {
                            emoteSet: {
                                id: "",
                                emotes: Object(f.b)(t.props.emotes)
                            },
                            locked: !1
                        })))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.productPrice;
                    return this.props.productDiscountPrice && (e = this.props.productDiscountPrice), s.createElement(E, null, s.createElement(g._35, {
                        background: g.n.Base
                    }, s.createElement(g._8, {
                        className: "ticket-description__banner-image",
                        padding: 3
                    }, s.createElement("img", {
                        src: O.c + "/owl-2017/all-access-logo.svg",
                        alt: Object(u.d)("Overwatch League All-Access Pass on Twitch", "EsportsTicketDescription"),
                        height: "80px"
                    })), s.createElement(g._35, {
                        borderBottom: !0,
                        textAlign: g._45.Center,
                        padding: 2
                    }, s.createElement(h, {
                        price: e,
                        interval: this.props.productPriceInterval
                    })), s.createElement(y, {
                        collapsable: !0,
                        showButtonLabel: Object(u.d)("Show All-Access Pass Benefits", "EsportsTicketDescription"),
                        hideButtonLabel: Object(u.d)("Hide All-Access Pass Benefits", "EsportsTicketDescription")
                    }, s.createElement(g._8, {
                        padding: 2
                    }, s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        bold: !0,
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Overwatch League All-Access Pass Benefits", "EsportsTicketDescription"))), s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Exclusive Command Center Stream", "EsportsTicketDescription"))), s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Match Analysis Videos by Players", "EsportsTicketDescription"))), s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Participate in Post-Match Q&A", "EsportsTicketDescription"))), s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Passholder-Only Chat Access", "EsportsTicketDescription"))), s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Ad-Free Viewing on Overwatch League", "EsportsTicketDescription"))), s.createElement(g._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.Q, {
                        "data-test-selector": "ticket-feature"
                    }, Object(u.d)("Overwatch In-Game Content:", "EsportsTicketDescription"))), this.renderHeroSkins(), this.renderInGameContent(), this.renderSubBadges(), this.renderSubEmotes(), s.createElement(g.Q, {
                        "data-test-selector": "disclaimer"
                    }, Object(u.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep forever!", "EsportsTicketDescription"))))))
                }, t
            }(s.PureComponent),
            U = Object(o.compose)(Object(c.a)(M, {
                options: function(e) {
                    return {
                        variables: {
                            channelID: e.ownerID
                        }
                    }
                }
            }))(j),
            L = n("CSlQ"),
            P = n("5Kxe"),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isTurboProduct = "turbo" === t.props.productName, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.product,
                        n = e.loading,
                        r = e.error;
                    return n ? s.createElement(S, null) : !t || r ? s.createElement(_, null) : this.isTurboProduct ? s.createElement(D, {
                        productPrice: t.price,
                        productPriceInterval: t.interval && t.interval.unit
                    }) : this.isEsportsProduct ? s.createElement(U, {
                        ownerID: t.owner && t.owner.id,
                        badges: this.badges,
                        emotes: this.emotes,
                        productPrice: t.price,
                        productDiscountPrice: this.productDiscountPrice,
                        productPriceInterval: t.interval && t.interval.unit
                    }) : s.createElement(E, null, s.createElement(g._35, {
                        background: g.n.Base
                    }, s.createElement(w, {
                        bannerImageURL: t.owner && t.owner.bannerImageURL,
                        profileImageURL: t.owner && t.owner.profileImageURL,
                        ownerDisplayName: t.owner && t.owner.displayName,
                        productDisplayName: t.displayName,
                        productPrice: t.price,
                        productPriceInterval: t.interval && t.interval.unit
                    }), s.createElement(y, {
                        collapsable: !0,
                        showButtonLabel: Object(u.d)("Show Subscription Benefits", "TicketDescription"),
                        hideButtonLabel: Object(u.d)("Hide Subscription Benefits", "TicketDescription")
                    }, s.createElement(v, {
                        hasAdFree: t.hasAdFree,
                        hasFastChat: t.hasFastChat,
                        hasSubonlyVideoArchive: t.hasSubonlyVideoArchive,
                        badges: this.badges,
                        emotes: this.emotes
                    }))))
                }, Object.defineProperty(t.prototype, "isEsportsProduct", {
                    get: function() {
                        var e = this.props.data.product;
                        return !!(e && e.owner && e.owner.id && Object(l.a)(e.owner.id, this.props.sessionUser))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "productDiscountPrice", {
                    get: function() {
                        return this.props.isGift ? this.props.data.product && this.props.data.product.giftPromotion && this.props.data.product.giftPromotion.newPrice : this.props.data.product && this.props.data.product.self && this.props.data.product.self.promotion && this.props.data.product.self.promotion.newPrice
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "badges", {
                    get: function() {
                        var e = [];
                        if (this.props.data.product && this.props.data.product.owner && this.props.data.product.owner.broadcastBadges) {
                            var t = this.props.data.product.owner.broadcastBadges;
                            (t && t.filter(function(e) {
                                return e && "subscriber" === e.setID
                            }).sort(function(e, t) {
                                return e && t && parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                            })).forEach(function(t) {
                                if (t) {
                                    var n = {
                                        id: t.id,
                                        setID: t.setID,
                                        version: t.version,
                                        title: t.title,
                                        image1x: t.image1x,
                                        image2x: t.image2x,
                                        image4x: t.image4x,
                                        clickAction: d.b,
                                        clickURL: t.clickURL || ""
                                    };
                                    e.push(n)
                                }
                            })
                        }
                        return e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "emotes", {
                    get: function() {
                        var e = [],
                            t = this.props.data.product;
                        return t && t.owner && t.owner.subscriptionProducts && t.owner.subscriptionProducts.forEach(function(n) {
                            n && n.emotes && n.tier <= t.tier && n.emotes.forEach(function(t) {
                                t && t.id && t.token && e.push({
                                    id: t.id,
                                    token: t.token
                                })
                            })
                        }), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            H = Object(o.compose)(Object(L.d)("TicketDescription"), Object(c.a)(P, {
                options: function(e) {
                    return {
                        variables: {
                            productName: e.productName
                        }
                    }
                }
            }))(z);
        var Y = Object(r.b)(function(e) {
            return {
                sessionUser: Object(a.c)(e)
            }
        })(H);
        n.d(t, "a", function() {
            return Y
        })
    },
    "9Jn5": function(e, t, n) {
        var r = n("zZbG");
        e.exports = function(e, t) {
            return r(e) - r(t)
        }
    },
    "9r5b": function(e, t, n) {
        var r = n("nfOx");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            a = n("6sO2"),
            i = n("Aj/L"),
            s = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, i, s, o;
                        return r.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), s = r.__assign({}, t, {
                                        body: i
                                    }), [4, this._fetch(e, s)];
                                case 1:
                                    return o = u.sent(), [4, this.constructLegacyAPIResponse(o)];
                                case 2:
                                    return [2, u.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, i;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((a = s.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return i = r.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(i)];
                                case 2:
                                    throw s.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = r.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = a), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var s = Object(i.c)(n);
                    return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    A2zO: function(e, t, n) {
        var r = n("Be26");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    AZvW: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    Akl5: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    AwFw: function(e, t) {},
    Bb5e: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() - a.getFullYear()
        }
    },
    Be26: function(e, t, n) {
        var r = n("8KV+");
        e.exports = function(e, t) {
            return r(e, t, {
                weekStartsOn: 1
            })
        }
    },
    CVNg: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMonth(0), n.setDate(a), n
        }
    },
    CWW0: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("6sO2"),
            s = n("7vx8"),
            o = n("3iBR"),
            u = n("D0Fd"),
            c = n("+6x9"),
            l = n("Odds"),
            d = (n("vbMw"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l._8, {
                        className: "insider-pass-full-skin-reward",
                        padding: {
                            x: 1
                        },
                        display: l.R.Flex,
                        flexDirection: l.T.Column
                    }, a.createElement("img", {
                        className: "insider-pass-full-skin-reward__image",
                        src: this.props.imageURL
                    }), a.createElement(l._8, {
                        textAlign: l._45.Center
                    }, a.createElement(l.Q, {
                        fontSize: l.V.Size4,
                        bold: !0
                    }, this.props.name)), a.createElement(l._8, {
                        textAlign: l._45.Center
                    }, a.createElement(l.Q, {
                        color: l.K.Alt2
                    }, this.props.subText)))
                }, t
            }(a.PureComponent)),
            m = n("E1ro"),
            p = n("n7Mz"),
            f = n("MTHJ"),
            g = (n("cyj3"), "rewards-purchase-owl2018-playerspack"),
            v = {
                McCree: o.c + "/owl-2017/global-rewards/full-skin/mccree.png",
                Moira: o.c + "/owl-2017/global-rewards/full-skin/moira.png",
                "Soldier: 76": o.c + "/owl-2017/global-rewards/full-skin/soldier-76.png"
            },
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data || this.props.data.loading) return a.createElement(l._10, null);
                    if (this.props.data && this.props.data.error) return null;
                    var t = [];
                    t = this.props.insiderPurchaseState === m.a.PrePurchase ? this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                        return e.id !== g
                    }).map(function(e) {
                        return a.createElement("li", {
                            key: e.name
                        }, a.createElement(d, {
                            name: e.name,
                            subText: "OWL Skin",
                            imageURL: v[e.name]
                        }))
                    }) : this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                        return e.id !== g
                    }).map(function(e) {
                        return a.createElement(l._2, {
                            padding: {
                                x: 3
                            },
                            key: e.name
                        }, a.createElement("li", null, a.createElement(l._8, {
                            className: "insider-pass-rewards__item",
                            margin: "auto"
                        }, a.createElement(u.a, {
                            imageURL: e.imageURL,
                            size: u.b.Large
                        }), a.createElement(l._8, {
                            display: l.R.Flex,
                            flexDirection: l.T.Column,
                            alignItems: l.c.Center,
                            padding: {
                                top: 1
                            }
                        }, a.createElement(l.Q, {
                            fontSize: l.V.Size4,
                            noWrap: !0,
                            bold: !0
                        }, e.name), a.createElement(l.Q, {
                            noWrap: !0,
                            color: l.K.Alt2
                        }, e.description)))))
                    });
                    var n = this.props.data.user.tournament.rewards.insider.inGameContent.map(function(t) {
                            return a.createElement(l._2, {
                                "data-test-selector": "in-game-content-selector",
                                padding: {
                                    x: 3
                                },
                                key: t.name
                            }, a.createElement("li", null, a.createElement(l._8, {
                                className: "insider-pass-rewards__item",
                                textAlign: l._45.Center
                            }, a.createElement(c.a, {
                                imageURL: t.imageURL,
                                size: c.c.Large,
                                borderType: e.props.insiderPurchaseState === m.a.PostPurchase ? c.b.Brand : c.b.Default,
                                noBorder: e.props.insiderPurchaseState === m.a.PrePurchase
                            }), a.createElement(l._8, {
                                display: l.R.Flex,
                                flexDirection: l.T.Column,
                                alignItems: l.c.Center,
                                padding: {
                                    top: 1
                                }
                            }, a.createElement(l.Q, {
                                fontSize: l.V.Size4,
                                noWrap: !0,
                                bold: !0
                            }, t.name)))))
                        }),
                        r = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                            return e.id === g
                        }),
                        s = this.props.insiderPurchaseState === m.a.PostPurchase && this.props.blizzardRewardsAvailable,
                        f = this.props.data.user.tournament.rewards.insider,
                        h = f.heroSkins.concat(f.inGameContent).some(function(e) {
                            return e.canBeFulfilled
                        });
                    return a.createElement(l._8, {
                        className: "insider-pass-rewards",
                        display: l.R.Flex,
                        flexDirection: l.T.Column,
                        padding: {
                            y: 3
                        },
                        textAlign: l._45.Center
                    }, a.createElement(l.Q, {
                        fontSize: l.V.Size3,
                        bold: !0
                    }, Object(i.d)("Overwatch Content with the All-Access Pass", "EsportsInsiderRewards")), s && !h && a.createElement(l.Q, {
                        fontSize: l.V.Size4
                    }, Object(i.d)("All in-game rewards have been claimed to your Blizzard account", "EsportsInsiderRewards")), s && h && a.createElement(l._8, {
                        display: l.R.Flex,
                        flexDirection: l.T.Row,
                        flexWrap: l.U.Wrap,
                        justifyContent: l._7.Center,
                        padding: {
                            y: 1
                        }
                    }, a.createElement(p.a, {
                        tournamentID: this.props.data.user.tournament.id,
                        enabled: !0,
                        inGame: !0
                    })), !s && a.createElement(l.Q, {
                        fontSize: l.V.Size4
                    }, Object(i.d)("A Blizzard account link is required to redeem in-game rewards", "EsportsInsiderRewards")), r && a.createElement(l._8, {
                        display: l.R.Flex,
                        justifyContent: l._7.Center
                    }, a.createElement(l._35, {
                        className: "insider-pass-rewards__players-pack",
                        textAlign: l._45.Center,
                        fullWidth: !0
                    }, a.createElement(l.N, {
                        className: "insider-pass-rewards__players-pack__image",
                        src: o.c + "/owl-2017/insider-test/owl-igc-playerspack.png",
                        alt: "The Players Pack Skins"
                    }), a.createElement(l._8, {
                        display: l.R.Flex,
                        flexDirection: l.T.Column,
                        alignItems: l.c.Center,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(l.Q, {
                        fontSize: l.V.Size4,
                        noWrap: !0,
                        bold: !0
                    }, Object(i.d)("The Players Pack", "EsportsInsiderRewards")), a.createElement(l.Q, {
                        fontSize: l.V.Size5,
                        bold: !0
                    }, Object(i.d)("D.Va, Ana, Zarya, Genji, Sombra, Lucio, Widowmaker, Orisa, Winston, Reinhardt, Zenyatta, Junkrat", "EsportsInsiderRewards")), a.createElement(l.Q, {
                        noWrap: !0,
                        color: l.K.Alt2
                    }, Object(i.d)("OWL Skins", "EsportsInsiderRewards"))))), a.createElement(l._2, {
                        display: l.R.Flex,
                        flexDirection: l.T.Row,
                        flexWrap: l.U.Wrap,
                        justifyContent: l._7.Center,
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement("ul", null, t)), a.createElement(l._2, {
                        display: l.R.Flex,
                        flexDirection: l.T.Row,
                        flexWrap: l.U.Wrap,
                        justifyContent: l._7.Center,
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement("ul", null, n)))
                }, t = r.__decorate([Object(s.a)(f, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                })], t)
            }(a.PureComponent);
        n.d(t, !1, function() {
            return "in-game-content-selector"
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "a", function() {
            return h
        })
    },
    D0Fd: function(e, t, n) {
        "use strict";
        var r, a = n("TToO"),
            i = n("HW6M"),
            s = n("GiK3"),
            o = n("HM6l"),
            u = n("46tX"),
            c = n("Odds");
        n("w0LG");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
        }(r || (r = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                return this.props.isUnavailable !== e.isUnavailable || this.props.needsToCheerMore !== e.needsToCheerMore || this.props.comingSoon !== e.comingSoon || this.props.size !== e.size
            }, t.prototype.render = function() {
                var e, t, n = "esports-hexagon__mask--unavailable-" + Object(o.a)(),
                    a = "esports-hexagon__mask--cheer-more-" + Object(o.a)(),
                    l = "esports-hexagon__pattern--" + Object(o.a)();
                this.props.isUnavailable ? (e = "url(#" + n, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + a, t = "esports-hexagon__mask--cheer-more");
                var d = /Edge/.test(window.navigator.userAgent) ? 5 : Object(u.b)(window.navigator.userAgent) ? -25 : 0,
                    m = /Edge/.test(window.navigator.userAgent) ? -5 : Object(u.b)(window.navigator.userAgent) ? 8 : 5,
                    p = /Edge/.test(window.navigator.userAgent) ? 155 : 131,
                    f = /Edge/.test(window.navigator.userAgent) ? 90 : Object(u.b)(window.navigator.userAgent) ? 150 : 100,
                    g = Object(u.b)(window.navigator.userAgent) ? 150 : 131,
                    v = Object(u.b)(window.navigator.userAgent) ? 0 : 10,
                    h = i("esports-hexagon__svg", {
                        "esports-hexagon__svg--large": this.props.size === r.Large
                    }, {
                        "esports-hexagon__svg--small": this.props.size === r.Small
                    }, {
                        "esports-hexagon__svg--medium": this.props.size === r.Medium
                    }, {
                        "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === r.Small
                    }),
                    b = i("esports-hexagon__svg--background", {
                        "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                    }),
                    k = i("esports-hexagon__svg--fill", {
                        "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                    });
                return s.createElement(c._8, {
                    className: "esports-hexagon",
                    display: c.R.Flex,
                    flexDirection: c.T.Column
                }, s.createElement("svg", {
                    className: h,
                    viewBox: "5 0 90 131"
                }, s.createElement("defs", null, s.createElement("pattern", {
                    id: l,
                    patternUnits: "userSpaceOnUse",
                    width: "100",
                    height: g
                }, s.createElement("image", {
                    className: "esports-hexagon__image",
                    xlinkHref: this.props.imageURL,
                    x: d,
                    y: m,
                    width: f,
                    height: p
                })), s.createElement("filter", {
                    id: n
                }, s.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.04 0 0 0 0 0 0.04 0 0 0 0 0 0.04 0 0 0 0 0 1 0"
                })), s.createElement("filter", {
                    id: a
                }, s.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                }))), s.createElement("polygon", {
                    className: b,
                    points: "50,2 8.042394,26.558603 8,75 50,98 92,75 92,25",
                    stroke: "none",
                    strokeWidth: "1px",
                    transform: "translate(0, 31)"
                }), s.createElement("path", {
                    transform: "translate(0, 31)",
                    className: k,
                    d: "M49.9,99.1c-2.1,0-4.2-0.5-5.8-1.4L11.6,79c-3.3-2-5.9-6.4-5.9-10.2V31.3c0-3.8,2.6-8.3,5.9-10.2L44.2,2.4C45.8,1.5,47.8,1,50,1c2.2,0,4.3,0.5,5.8,1.4l32.5,18.7c3.3,1.9,5.9,6.5,5.7,10.3l0,37.4c0,3.8-2.6,8.3-5.9,10.2L55.8,97.7C54.1,98.6,52,99.1,49.9,99.1z M50,4c-1.7,0-3.2,0.4-4.4,1L13.1,23.7c-2.4,1.3-4.3,4.8-4.3,7.6v37.5c0,2.7,2,6.2,4.4,7.6l32.4,18.7c2.3,1.3,6.4,1.3,8.7,0l32.4-18.7c2.4-1.3,4.3-4.8,4.3-7.6V31.3c0.2-2.7-1.8-6.2-4.1-7.6l0,0L54.4,5C53.3,4.4,51.6,4,50,4z"
                }), !this.props.comingSoon && s.createElement("polygon", {
                    className: "esports-hexagon__svg--filtered-image",
                    "data-test-selector": t,
                    filter: e,
                    points: 0 + v + ",0 " + (100 - v) + ",0 " + (100 - v) + ",131 " + (0 + v) + ",131",
                    stroke: "none",
                    strokeWidth: "1px",
                    fill: "url(#" + l + ")"
                }), this.props.comingSoon && s.createElement("text", {
                    className: "esports-hexagon__svg--question-mark",
                    x: "38",
                    y: "97",
                    fontSize: "44",
                    fontWeight: "600"
                }, "?"), !this.props.comingSoon && (this.props.isUnavailable || this.props.needsToCheerMore) && s.createElement("path", {
                    className: "esports-hexagon__svg--lock",
                    transform: "translate(40, 70)",
                    fill: "white",
                    d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                    fillRule: "evenodd"
                })))
            }, t
        }(s.Component);
        n.d(t, !1, function() {
            return "esports-hexagon__mask--unavailable"
        }), n.d(t, !1, function() {
            return "esports-hexagon__mask--cheer-more"
        }), n.d(t, !1, function() {
            return "esports-hexagon__pattern"
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return l
        })
    },
    D6ie: function(e, t, n) {
        var r = n("xA5w"),
            a = n("3znZ"),
            i = n("iRXW"),
            s = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = a(t).getTime() - i(t).getTime();
            return Math.round(n / s) + 1
        }
    },
    Dbus: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClaimAllRewards"
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
                                value: "ClaimAllRewardsInput"
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
                            value: "claimAllRewards"
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
                                    value: "domain"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "rewards"
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isEntitled"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "canBeFulfilled"
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
                end: 164
            }
        };
        n.loc.source = {
            body: "mutation ClaimAllRewards($input: ClaimAllRewardsInput!) {\nclaimAllRewards(input: $input) {\ndomain\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    E1ro: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.PostPurchase = "post-purchase", e.PrePurchase = "pre-purchase"
            }(r || (r = {}))
    },
    "Eoz/": function(e, t, n) {
        var r = n("ymQ7"),
            a = n("D6ie"),
            i = n("zZbG"),
            s = n("xA5w"),
            o = n("dH3X"),
            u = n("uyaC");
        var c = {
            M: function(e) {
                return e.getMonth() + 1
            },
            MM: function(e) {
                return d(e.getMonth() + 1, 2)
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3)
            },
            D: function(e) {
                return e.getDate()
            },
            DD: function(e) {
                return d(e.getDate(), 2)
            },
            DDD: function(e) {
                return r(e)
            },
            DDDD: function(e) {
                return d(r(e), 3)
            },
            d: function(e) {
                return e.getDay()
            },
            E: function(e) {
                return e.getDay() || 7
            },
            W: function(e) {
                return a(e)
            },
            WW: function(e) {
                return d(a(e), 2)
            },
            YY: function(e) {
                return d(e.getFullYear(), 4).substr(2)
            },
            YYYY: function(e) {
                return d(e.getFullYear(), 4)
            },
            GG: function(e) {
                return String(i(e)).substr(2)
            },
            GGGG: function(e) {
                return i(e)
            },
            H: function(e) {
                return e.getHours()
            },
            HH: function(e) {
                return d(e.getHours(), 2)
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t
            },
            hh: function(e) {
                return d(c.h(e), 2)
            },
            m: function(e) {
                return e.getMinutes()
            },
            mm: function(e) {
                return d(e.getMinutes(), 2)
            },
            s: function(e) {
                return e.getSeconds()
            },
            ss: function(e) {
                return d(e.getSeconds(), 2)
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100)
            },
            SS: function(e) {
                return d(Math.floor(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return d(e.getMilliseconds(), 3)
            },
            Z: function(e) {
                return l(e.getTimezoneOffset(), ":")
            },
            ZZ: function(e) {
                return l(e.getTimezoneOffset())
            },
            X: function(e) {
                return Math.floor(e.getTime() / 1e3)
            },
            x: function(e) {
                return e.getTime()
            }
        };

        function l(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                r = Math.abs(e),
                a = r % 60;
            return n + d(Math.floor(r / 60), 2) + t + d(a, 2)
        }

        function d(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        e.exports = function(e, t, n) {
            var r = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                a = (n || {}).locale,
                i = u.format.formatters,
                l = u.format.formattingTokensRegExp;
            a && a.format && a.format.formatters && (i = a.format.formatters, a.format.formattingTokensRegExp && (l = a.format.formattingTokensRegExp));
            var d = s(e);
            return o(d) ? function(e, t, n) {
                var r, a, i, s = e.match(n),
                    o = s.length;
                for (r = 0; r < o; r++) a = t[s[r]] || c[s[r]], s[r] = a || ((i = s[r]).match(/\[[\s\S]/) ? i.replace(/^\[|]$/g, "") : i.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < o; n++) s[n] instanceof Function ? t += s[n](e, c) : t += s[n];
                    return t
                }
            }(r, i, l)(d) : "Invalid Date"
        }
    },
    Epw6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    G7No: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() - a.getTime()
        }
    },
    GI7G: function(e, t, n) {
        var r = n("xA5w"),
            a = n("orNa"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                o = i(n, s),
                u = Math.abs(a(n, s));
            return n.setMonth(n.getMonth() - o * u), o * (u - (i(n, s) === -o))
        }
    },
    GUP0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n("RH2O"),
            i = n("2KeS"),
            s = n("7vx8"),
            o = n("j7/Y"),
            u = n("+xm8"),
            c = n("f2i/"),
            l = n("w9tK"),
            d = n("vH/s"),
            m = n("Aj/L"),
            p = n("CSlQ"),
            f = n("TToO"),
            g = n("OAwv"),
            v = n("GiK3"),
            h = n("6sO2"),
            b = n("yWCw"),
            k = n("8m9s"),
            w = n("wuJz"),
            x = n("3zLD"),
            y = n("9u8h"),
            E = n("Odds"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        otherTextAreaEnabled: !1,
                        otherReason: ""
                    }, t.radioName = "reason-input", t.handleReasonChange = function(e) {
                        t.props.updateReason(e.currentTarget.value), t.setState({
                            otherTextAreaEnabled: !1
                        })
                    }, t.handleOtherReasonRadioChange = function() {
                        t.props.updateReason(""), t.setState({
                            otherReason: "",
                            otherTextAreaEnabled: !0
                        })
                    }, t.handleOtherReasonTextAreaChange = function(e) {
                        var n = e.currentTarget.value;
                        t.setState({
                            otherReason: n
                        }), t.props.updateReason(n)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return v.createElement(E._8, {
                        margin: {
                            y: 1
                        },
                        padding: {
                            x: 1
                        }
                    }, v.createElement(E.W, {
                        label: ""
                    }, this.props.reasons.map(function(t, n) {
                        return v.createElement(E._8, {
                            key: "reason-" + n,
                            margin: {
                                y: 2
                            }
                        }, v.createElement(E._21, {
                            name: e.radioName,
                            onChange: e.handleReasonChange,
                            disabled: e.props.disabled,
                            value: t.value,
                            label: t.translation()
                        }))
                    }), v.createElement(E._8, {
                        margin: {
                            y: 2
                        }
                    }, v.createElement(E._21, {
                        name: this.radioName,
                        label: Object(h.d)("Other", "ReasonInput"),
                        onChange: this.handleOtherReasonRadioChange,
                        disabled: this.props.disabled
                    })), this.state.otherTextAreaEnabled && v.createElement(E._8, {
                        margin: {
                            y: 2
                        }
                    }, v.createElement(E._46, {
                        onChange: this.handleOtherReasonTextAreaChange,
                        placeholder: Object(h.d)("Additional reasons or thoughts", "ReasonInput")
                    }))))
                }, t
            }(v.Component),
            S = Object(x.compose)(Object(p.d)("ReasonInput", {
                autoReportInteractive: !0
            }))(_),
            T = function(e) {
                var t = v.createElement(v.Fragment, null, v.createElement(E.Q, {
                        type: E._49.H2,
                        bold: !0
                    }, Object(h.d)("Subscription Canceled", "UnsubscribeConfirmation")), v.createElement(E._8, {
                        margin: {
                            top: 2
                        }
                    }, v.createElement(E.Q, null, Object(h.d)("Your subscription has been immediately canceled. You will be receiving an email detailing your refund.", "UnsubscribeConfirmation")))),
                    n = v.createElement(v.Fragment, null, v.createElement(E.Q, {
                        type: E._49.H2,
                        bold: !0
                    }, Object(h.d)("Subscription No Longer Renewing", "UnsubscribeConfirmation")), v.createElement(E._8, {
                        margin: {
                            top: 2
                        }
                    }, v.createElement(E.Q, null, e.endsAt && Object(h.d)("Your subscription will no longer renew. You will have access to your benefits until {date}.", {
                        date: v.createElement(E.Q, {
                            key: "benefit-end-date",
                            type: E._49.Span,
                            bold: !0
                        }, Object(h.c)(new Date(e.endsAt), "medium"))
                    }, "UnsubscribeConfirmation"))), v.createElement(E._8, {
                        margin: {
                            top: 2
                        }
                    }, v.createElement(E.Q, null, e.endsAt && Object(h.d)("If you change your mind and would like to resubscribe, you can do so as of {date}.", {
                        date: v.createElement(E.Q, {
                            key: "resubscribe-date",
                            type: E._49.Span,
                            bold: !0
                        }, Object(h.c)(Object(w.addDays)(new Date(e.endsAt), 1), "medium"))
                    }, "UnsubscribeConfirmation"))));
                return v.createElement(v.Fragment, null, e.unsubscribeType === r.Cancel ? t : n, v.createElement(E._8, {
                    margin: {
                        top: 2
                    }
                }, v.createElement(E.Q, null, Object(h.d)("We hope you enjoyed the service and will consider resubscribing some day.", "UnsubscribeConfirmation"))), v.createElement(E._8, {
                    margin: {
                        top: 2
                    }
                }, v.createElement(E.Q, null, Object(h.d)("- Your friends at Twitch", "UnsubscribeConfirmation"))), v.createElement(E._8, {
                    margin: {
                        top: 2
                    }
                }, v.createElement(E.v, {
                    linkTo: "/subscriptions"
                }, Object(h.d)("Return to Subscriptions", "UnsubscribeForm"))))
            },
            D = [{
                value: "I only wanted to subscribe for one month",
                translation: function() {
                    return Object(h.d)("I only wanted to subscribe for one month", "unsubscribe-reasons")
                }
            }, {
                value: "Financial reasons",
                translation: function() {
                    return Object(h.d)("Financial reasons", "unsubscribe-reasons")
                }
            }],
            O = [{
                value: "I prefer to manually renew my subscriptions",
                translation: function() {
                    return Object(h.d)("I prefer to manually renew my subscriptions", "unsubscribe-reasons")
                }
            }, {
                value: "I need to change my payment method",
                translation: function() {
                    return Object(h.d)("I need to change my payment method", "unsubscribe-reasons")
                }
            }, {
                value: "I had a bad interaction with the broadcaster",
                translation: function() {
                    return Object(h.d)("I had a bad interaction with the broadcaster", "unsubscribe-reasons")
                }
            }, {
                value: "The broadcaster's schedule changed or they're not streaming as much anymore",
                translation: function() {
                    return Object(h.d)("The broadcaster's schedule changed or they're not streaming as much anymore", "unsubscribe-reasons")
                }
            }, {
                value: "My schedule changed and I can't keep up with the stream anymore",
                translation: function() {
                    return Object(h.d)("My schedule changed and I can't keep up with the stream anymore", "unsubscribe-reasons")
                }
            }].concat(D),
            N = [{
                value: "I accidentally subscribed to the wrong channel",
                translation: function() {
                    return Object(h.d)("I accidentally subscribed to the wrong channel", "unsubscribe-reasons")
                }
            }, {
                value: "I just wanted to get a shoutout",
                translation: function() {
                    return Object(h.d)("I just wanted to get a shoutout", "unsubscribe-reasons")
                }
            }, {
                value: "The channel benefits are not what I expected",
                translation: function() {
                    return Object(h.d)("The channel benefits are not what I expected", "unsubscribe-reasons")
                }
            }].concat(D);
        ! function(e) {
            e[e.Cancel = 0] = "Cancel", e[e.DoNotRenew = 1] = "DoNotRenew"
        }(r || (r = {}));
        var A, F, M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        reason: "",
                        unsubscribing: !1,
                        showUnsubConfirmation: !1
                    }, t.updateReason = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t.handleUnsubscribeClick = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, s, o;
                            return f.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        this.setState({
                                            unsubscribing: !0
                                        }), e = this.props, t = e.currentUserID, n = e.productName, a = this.props.unsubscribeType === r.Cancel ? "cancel" : "do_not_renew", i = "/kraken/checkout/users/" + t + "/products/" + n + "/purchase/" + a, s = this.state.reason, o = {
                                            body: {
                                                reason: s
                                            }
                                        }, u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, y.a.post(i, o, {
                                            version: 5
                                        })];
                                    case 2:
                                        return u.sent(), this.setState({
                                            showUnsubConfirmation: !0
                                        }), [3, 4];
                                    case 3:
                                        return u.sent(), this.setState({
                                            unsubscribing: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return this.state.showUnsubConfirmation ? v.createElement(T, {
                        unsubscribeType: this.props.unsubscribeType,
                        endsAt: this.props.endsAt
                    }) : v.createElement(v.Fragment, null, v.createElement(E.Q, {
                        type: E._49.H2,
                        bold: !0
                    }, this.unsubscribeActionText), v.createElement(E._8, {
                        margin: {
                            y: 1
                        }
                    }, v.createElement(E.Q, {
                        color: E.K.Alt2
                    }, Object(h.d)("Having issues with your subscription? Visit our <x:link1>Help Center</x:link1> or <x:link2>Contact Us</x:link2>.", {
                        "x:link1": function(e) {
                            return v.createElement(E.O, {
                                key: "help-center-link",
                                to: "https://help.twitch.tv/",
                                targetBlank: !0
                            }, e)
                        },
                        "x:link2": function(e) {
                            return v.createElement(E.O, {
                                key: "contact-us-link",
                                to: "https://help.twitch.tv/customer/portal/emails/new",
                                targetBlank: !0
                            }, e)
                        }
                    }, "UnsubscribeForm"))), v.createElement(E._8, {
                        margin: {
                            y: 1
                        }
                    }, v.createElement(E.Q, null, this.warningText)), v.createElement(E._8, {
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, v.createElement(E.Q, {
                        type: E._49.H4,
                        bold: !0
                    }, Object(h.d)("Please select your reason for canceling", "UnsubscribeForm"))), v.createElement(S, {
                        reasons: this.props.unsubscribeType === r.Cancel ? N : O,
                        updateReason: this.updateReason,
                        disabled: this.state.unsubscribing
                    }), v.createElement(E._35, {
                        padding: {
                            top: 2
                        },
                        borderTop: !0,
                        fullWidth: !0
                    }, v.createElement(E._8, {
                        display: E.R.InlineFlex
                    }, v.createElement(E.v, {
                        type: E.B.Alert,
                        state: this.state.unsubscribing ? E.A.Loading : E.A.Default,
                        disabled: this.state.unsubscribing,
                        onClick: this.handleUnsubscribeClick
                    }, this.unsubscribeActionText), v.createElement(E._8, {
                        margin: {
                            left: 1
                        }
                    }, v.createElement(E.v, {
                        linkTo: "/subscriptions",
                        disabled: this.state.unsubscribing
                    }, Object(h.d)("Stay Subscribed", "UnsubscribeForm")))), this.props.unsubscribeType === r.DoNotRenew && v.createElement(E._8, {
                        margin: {
                            top: 1
                        }
                    }, v.createElement(E.Q, {
                        color: E.K.Alt2
                    }, this.canPurchaseAgainText))))
                }, Object.defineProperty(t.prototype, "unsubscribeActionText", {
                    get: function() {
                        return this.props.unsubscribeType === r.Cancel ? Object(h.d)("Cancel Subscription", "UnsubscribeForm") : this.props.unsubscribeType === r.DoNotRenew ? Object(h.d)("Don't Renew Subscription", "UnsubscribeForm") : void 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "warningText", {
                    get: function() {
                        if (this.props.unsubscribeType === r.Cancel) return Object(h.d)("You may cancel your subscription within 24 hours of purchase and receive a refund. The broadcaster will not receive any revenue from your subscription if you do so.", "UnsubscribeForm");
                        if (this.props.unsubscribeType === r.DoNotRenew) {
                            var e = this.props.endsAt;
                            return e ? Object(h.d)("If your renewal is stopped, your subscription will end on {endsAtDate}, at which time you will no longer have access to subscriber benefits and emotes.", {
                                endsAtDate: v.createElement(E.Q, {
                                    key: "ends-at-date",
                                    bold: !0,
                                    type: E._49.Span
                                }, Object(h.c)(new Date(e), "medium"))
                            }, "UnsubscribeForm") : null
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canPurchaseAgainText", {
                    get: function() {
                        var e = this.props.endsAt;
                        if (!e) return null;
                        var t = Object(w.addDays)(new Date(e), 1);
                        return Object(h.d)("If canceled, you can purchase the subscription again as of {canPurchaseAgainDate}.", {
                            canPurchaseAgainDate: Object(h.c)(t, "medium")
                        }, "UnsubscribeForm")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(v.Component),
            C = Object(x.compose)(Object(p.d)("UnsubscrbeForm", {
                autoReportInteractive: !0
            }))(M);
        ! function(e) {
            e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
        }(A || (A = {})),
        function(e) {
            e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
        }(F || (F = {}));
        n("702D");
        var I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = h.o.logger.withCategory("unsubscribe-page"), t.unsubscribeType = "true" === g.parse(t.props.location.search).cancel ? r.Cancel : r.DoNotRenew, t.redirectToLegacyCheckout = function() {
                        var e = t.props.match.params.productName;
                        h.o.history.push("/products/" + e)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.currentUser) return this.props.promptLogin(), v.createElement(E._8, {
                        fullHeight: !0
                    }, v.createElement(b.a, {
                        message: Object(h.d)("You must be logged in to view this page", "UnsubscribePage")
                    }));
                    var e = this.props.data,
                        t = e.subscriptionProduct,
                        n = e.loading,
                        r = e.error,
                        a = !n && !r;
                    if (a && !t) return v.createElement(E._8, {
                        fullHeight: !0
                    }, v.createElement(b.a, null));
                    if (a && !this.hasSubscriptionBenefit) return this.redirectToLegacyCheckout(), v.createElement(E._8, {
                        fullHeight: !0
                    }, v.createElement(E._10, {
                        fillContent: !0
                    }));
                    if (a && !this.canUnsubscribe || r) return v.createElement(E._8, {
                        fullHeight: !0
                    }, v.createElement(b.a, null));
                    var i = t && t.self && t.self.benefit && t.self.benefit.endsAt;
                    return v.createElement(E._8, {
                        display: E.R.Flex,
                        justifyContent: E._7.Center,
                        flexWrap: E.U.Wrap,
                        padding: 3
                    }, v.createElement(E._8, {
                        className: "unsubscribe-page__ticket-description-container",
                        margin: {
                            bottom: 2
                        },
                        display: E.R.InlineBlock
                    }, v.createElement(k.a, {
                        productName: this.props.match.params.productName
                    })), v.createElement(E._8, {
                        display: E.R.InlineBlock
                    }, v.createElement(E._35, {
                        className: "unsubscribe-page__unsubscribe-form-container",
                        background: E.n.Base,
                        padding: 2,
                        border: !0,
                        elevation: 1,
                        margin: {
                            x: 4
                        }
                    }, n ? v.createElement(E._14, {
                        lineCount: 20
                    }) : v.createElement(C, {
                        currentUserID: this.props.currentUser.id,
                        productName: this.props.match.params.productName,
                        unsubscribeType: this.unsubscribeType,
                        endsAt: i
                    }))))
                }, Object.defineProperty(t.prototype, "hasSubscriptionBenefit", {
                    get: function() {
                        var e = this.props.data.subscriptionProduct;
                        if (!e) return !1;
                        switch (e.type.toUpperCase()) {
                            case A.CHANSUB:
                            case A.TEAMSUB:
                                return !!(e && e.self && e.self.benefit);
                            case A.TURBO:
                                return !!(e && e.self && e.self.purchase && e.self.purchase.details && e.self.purchase.details.productType.toUpperCase() === A.TURBO && e.self.purchase.details.state.toUpperCase() === F.ACTIVE);
                            default:
                                return this.logger.error(new Error("Cannot determine if user has subscription benefit."), "Unexpected subscription product type:", e.type), !1
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canUnsubscribe", {
                    get: function() {
                        var e = this.props.data.subscriptionProduct;
                        if (!e) return !1;
                        switch (e.type.toUpperCase()) {
                            case A.CHANSUB:
                            case A.TEAMSUB:
                                return this.unsubscribeType === r.DoNotRenew ? !!(e && e.self && e.self.benefit && e.self.benefit.renewsAt) : this.unsubscribeType === r.Cancel && !!(e && e.self && e.self.benefit && e.self.benefit.isRefundable);
                            case A.TURBO:
                                return this.hasSubscriptionBenefit;
                            default:
                                return !1
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(v.Component),
            R = n("8S49");
        var j = Object(i.d)(Object(p.d)("UnsubscribePage", {
            destination: l.a.UnsubscribePage
        }), Object(o.a)({
            location: d.PageviewLocation.UnsubscribePage
        }), Object(s.a)(R, {
            options: function(e) {
                return {
                    variables: {
                        productName: e.match.params.productName
                    }
                }
            }
        }), Object(a.b)(function(e) {
            return {
                currentUser: Object(m.c)(e)
            }
        }, function(e) {
            return Object(i.b)({
                promptLogin: function() {
                    return Object(c.f)(u.a.DashboardPage)
                }
            }, e)
        }))(I);
        n.d(t, "UnsubscribePage", function() {
            return j
        })
    },
    GvNH: function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            return r(e).getTime() === r(new Date).getTime()
        }
    },
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r + 1), a.setHours(23, 59, 59, 999), a
        }
    },
    I7cV: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                s = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a
        }
    },
    JNsx: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMinutes()
        }
    },
    JURy: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
    },
    Javx: function(e, t, n) {
        var r = n("b7g8");
        e.exports = function(e) {
            return r(e) ? 366 : 365
        }
    },
    JhPt: function(e, t) {},
    Jtuq: function(e, t, n) {
        var r = n("lQzg"),
            a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                i = a(t);
            return 4 * (n.getFullYear() - i.getFullYear()) + (r(n) - r(i))
        }
    },
    Jvcu: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setDate(n.getDate() + a), n
        }
    },
    K7ZZ: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = a(n);
            return i.setMilliseconds(i.getMilliseconds() - 1), i
        }
    },
    LLTj: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LU20: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(59, 999), t
        }
    },
    M5Oo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n) {
            var a = r(e),
                i = r(t),
                s = void 0 !== n ? n : 1,
                o = i.getTime();
            if (a.getTime() > o) throw new Error("The first date cannot be after the second date");
            var u = [],
                c = a;
            for (c.setHours(0, 0, 0, 0); c.getTime() <= o;) u.push(r(c)), c.setDate(c.getDate() + s);
            return u
        }
    },
    MIQa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, n) {
        var r = n("oNnY");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    MTHJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "InsiderPassTabRewards"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelID"
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
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
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
                                    value: "tournament"
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
                                            value: "rewards"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "insider"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "heroSkins"
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
                                                                    value: "imageURL"
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
                                                                    value: "canBeFulfilled"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isEntitled"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isPrimeOnly"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "quantity"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "inGameContent"
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
                                                                    value: "imageURL"
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
                                                                    value: "canBeFulfilled"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isEntitled"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isPrimeOnly"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "quantity"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 312
            }
        };
        n.loc.source = {
            body: "query InsiderPassTabRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\ninsider {\nheroSkins {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\nquantity\n}\ninGameContent {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\nquantity\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Mbb9: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDay()
        }
    },
    Mdww: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear(),
                a = t.getMonth(),
                i = new Date(0);
            return i.setFullYear(n, a + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var r = n("M5Oo");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                a = r(t).getTime();
            return n < a ? -1 : n > a ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var r = n("6Zhv"),
            a = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * a)
        }
    },
    PGoF: function(e, t, n) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EsportsTicketDescription_GetBadges"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelID"
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
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
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
                                    value: "tournament"
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
                                            value: "rewards"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "insider"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "heroSkins"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reward"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "inGameContent"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reward"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "badges"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reward"
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
                end: 272
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/esports-campaign-tabs/models/reward.gql"\nquery EsportsTicketDescription_GetBadges($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\ninsider {\nheroSkins {\n...reward\n}\ninGameContent {\n...reward\n}\nbadges {\n...reward\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(n("lKyS").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = r
    },
    Ptqd: function(e, t) {
        e.exports = function() {
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: function(t, n, r) {
                    var a;
                    return r = r || {}, a = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), r.addSuffix ? r.comparison > 0 ? "in " + a : a + " ago" : a
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var r = n("u/4p"),
            a = 6e4,
            i = 6048e5;
        e.exports = function(e, t, n) {
            var s = r(e, n),
                o = r(t, n),
                u = s.getTime() - s.getTimezoneOffset() * a,
                c = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((u - c) / i)
        }
    },
    "QU+n": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "badge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Badge"
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
                            value: "setID"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "version"
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
                        alias: {
                            kind: "Name",
                            value: "image1x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "NORMAL"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image2x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "DOUBLE"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image4x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "QUADRUPLE"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clickAction"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clickURL"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 170
            }
        };
        n.loc.source = {
            body: "fragment badge on Badge {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Qbo9: function(e, t, n) {
        var r = n("Moxe");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    Qxz6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() === a.getFullYear()
        }
    },
    R8MC: function(e, t) {},
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n("GiK3"),
            a = (n.n(r), n("mbxv")),
            i = function(e) {
                var t, n = e.badgesToRender,
                    i = e.badgeSets,
                    s = [];
                t = n, Array.isArray(t) ? s = n.map(function(e) {
                    var t = i.getBadge(e.setID, e.version);
                    return null === t ? null : r.createElement(a.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (s = Object.keys(n).map(function(e) {
                    var t = n[e],
                        s = i.getBadge(e, t);
                    return null === s ? null : r.createElement(a.a, {
                        key: s.setID + "/" + s.version,
                        badge: s
                    })
                }));
                var o = s.filter(function(e) {
                    return null !== e
                });
                return r.createElement("span", null, o)
            }
    },
    SHOI: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Jvcu");
        e.exports = function(e, t, n) {
            var i = n && Number(n.weekStartsOn) || 0,
                s = r(e),
                o = Number(t),
                u = s.getDay();
            return a(s, ((o % 7 + 7) % 7 < i ? 7 : 0) + o - u)
        }
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r);
            var a = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + a.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, n) {
        var r = n("I7cV");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "T/Ln": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    ToRI: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setSeconds(a), n
        }
    },
    Tv4R: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e).getTime();
            return t.forEach(function(e) {
                var t = r(e),
                    s = Math.abs(i - t.getTime());
                (void 0 === n || s < a) && (n = t, a = s)
            }), n
        }
    },
    "Uu+E": function(e, t, n) {
        var r = n("xA5w"),
            a = n("iRXW"),
            i = n("nizW");
        e.exports = function(e, t) {
            var n = r(e),
                s = Number(t),
                o = i(n, a(n)),
                u = new Date(0);
            return u.setFullYear(s, 0, 4), u.setHours(0, 0, 0, 0), (n = a(u)).setDate(n.getDate() + o), n
        }
    },
    VaeB: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(0), t
        }
    },
    WNGz: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(0, 0, 0, 0), t
        }
    },
    XFzU: function(e, t, n) {
        var r = n("GI7G");
        e.exports = function(e, t) {
            var n = r(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    YPf8: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 5 === r(e).getDay()
        }
    },
    YPjl: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Jvcu"),
            i = n("AZvW");
        e.exports = function(e, t) {
            var n = r(e),
                s = Number(t),
                o = i(n);
            return a(n, s - o)
        }
    },
    YRFD: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                a = r(t).getTime();
            return n > a ? -1 : n < a ? 1 : 0
        }
    },
    ZUMa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 0 === r(e).getDay()
        }
    },
    a7Cs: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setFullYear(a), n
        }
    },
    aHtT: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return r(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    b7g8: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    balU: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                s = n.getFullYear(),
                o = n.getDate(),
                u = new Date(0);
            u.setFullYear(s, i, 15), u.setHours(0, 0, 0, 0);
            var c = a(u);
            return n.setMonth(i, Math.min(o, c)), n
        }
    },
    bbdo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(59, 59, 999), t
        }
    },
    "cA+x": function(e, t, n) {
        var r = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    cONr: function(e, t, n) {
        var r = n("f+sD");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    cw9o: function(e, t, n) {
        var r = n("7EGB");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    cwv1: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime()
        }
    },
    cyj3: function(e, t) {},
    dH3X: function(e, t, n) {
        var r = n("607n");
        e.exports = function(e) {
            if (r(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    danj: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMinutes(a), n
        }
    },
    "e/EH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 3 === r(e).getDay()
        }
    },
    eCZG: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime() < (new Date).getTime()
        }
    },
    eKpK: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getSeconds()
        }
    },
    eVow: function(e, t) {},
    "f+sD": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    fK0I: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() > a.getTime()
        }
    },
    fUo1: function(e, t, n) {
        var r = n("iRXW"),
            a = n("7EGB"),
            i = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = r(a(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / i)
        }
    },
    fo7E: function(e, t, n) {
        var r = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    gAt4: function(e, t, n) {
        var r = n("xA5w"),
            a = n("nizW"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                o = i(n, s),
                u = Math.abs(a(n, s));
            return n.setDate(n.getDate() - o * u), o * (u - (i(n, s) === -o))
        }
    },
    gDPd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() < a.getTime()
        }
    },
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r + 1), a.setHours(0, 0, 0, 0), a
        }
    },
    hUHO: function(e, t, n) {
        var r = n("4LxA");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    hico: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = a(n);
            return i.setDate(i.getDate() - 1), i
        }
    },
    hj5Y: function(e, t, n) {
        var r = n("5qwL");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    iLMR: function(e, t) {},
    iRXW: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), a(n)
        }
    },
    ib22: function(e, t) {},
    jQas: function(e, t, n) {
        var r = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                s = ["AM", "PM"],
                o = ["am", "pm"],
                u = ["a.m.", "p.m."],
                c = {
                    MMM: function(t) {
                        return e[t.getMonth()]
                    },
                    MMMM: function(e) {
                        return t[e.getMonth()]
                    },
                    dd: function(e) {
                        return n[e.getDay()]
                    },
                    ddd: function(e) {
                        return a[e.getDay()]
                    },
                    dddd: function(e) {
                        return i[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? u[1] : u[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                c[e + "o"] = function(t, n) {
                    return function(e) {
                        var t = e % 100;
                        if (t > 20 || t < 10) switch (t % 10) {
                            case 1:
                                return e + "st";
                            case 2:
                                return e + "nd";
                            case 3:
                                return e + "rd"
                        }
                        return e + "th"
                    }(n[e](t))
                }
            }), {
                formatters: c,
                formattingTokensRegExp: r(c)
            }
        }
    },
    jy2q: function(e, t, n) {
        var r = n("xA5w"),
            a = n("balU");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return a(n, n.getMonth() + 3 * i)
        }
    },
    kDuD: function(e, t, n) {
        var r = n("xA5w"),
            a = n("MIQa"),
            i = n("xKy+");
        e.exports = function(e) {
            var t = r(e);
            return a(t).getTime() === i(t).getTime()
        }
    },
    kIFi: function(e, t, n) {
        var r = n("NSOL");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    kRs6: function(e, t, n) {
        var r = n("Qxz6");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    kjlQ: function(e, t, n) {
        var r = n("G7No"),
            a = 36e5;
        e.exports = function(e, t) {
            var n = r(e, t) / a;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    kkVd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 1 === r(e).getDay()
        }
    },
    l85J: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMonth()
        }
    },
    lKyS: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "reward"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "TournamentReward"
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
                            value: "name"
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
                            value: "imageURL"
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
                            value: "canBeFulfilled"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isPrimeOnly"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "quantity"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 120
            }
        };
        n.loc.source = {
            body: "fragment reward on TournamentReward {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\nquantity\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lQzg: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r - 1), a.setHours(0, 0, 0, 0), a
        }
    },
    mXYp: function(e, t, n) {
        var r = n("YRFD"),
            a = n("xA5w"),
            i = n("25hp"),
            s = n("GI7G"),
            o = n("uyaC"),
            u = 1440,
            c = 2520,
            l = 43200,
            d = 86400;
        e.exports = function(e, t, n) {
            var m = n || {},
                p = r(e, t),
                f = m.locale,
                g = o.distanceInWords.localize;
            f && f.distanceInWords && f.distanceInWords.localize && (g = f.distanceInWords.localize);
            var v, h, b = {
                addSuffix: Boolean(m.addSuffix),
                comparison: p
            };
            p > 0 ? (v = a(e), h = a(t)) : (v = a(t), h = a(e));
            var k, w = i(h, v),
                x = h.getTimezoneOffset() - v.getTimezoneOffset(),
                y = Math.round(w / 60) - x;
            if (y < 2) return m.includeSeconds ? w < 5 ? g("lessThanXSeconds", 5, b) : w < 10 ? g("lessThanXSeconds", 10, b) : w < 20 ? g("lessThanXSeconds", 20, b) : w < 40 ? g("halfAMinute", null, b) : g(w < 60 ? "lessThanXMinutes" : "xMinutes", 1, b) : 0 === y ? g("lessThanXMinutes", 1, b) : g("xMinutes", y, b);
            if (y < 45) return g("xMinutes", y, b);
            if (y < 90) return g("aboutXHours", 1, b);
            if (y < u) return g("aboutXHours", Math.round(y / 60), b);
            if (y < c) return g("xDays", 1, b);
            if (y < l) return g("xDays", Math.round(y / u), b);
            if (y < d) return g("aboutXMonths", k = Math.round(y / l), b);
            if ((k = s(h, v)) < 12) return g("xMonths", Math.round(y / l), b);
            var E = k % 12,
                _ = Math.floor(k / 12);
            return E < 3 ? g("aboutXYears", _, b) : E < 9 ? g("overXYears", _, b) : g("almostXYears", _ + 1, b)
        }
    },
    mbxv: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("+V/3"),
            s = n("Odds"),
            o = (n("2IkU"), n("6sO2")),
            u = n("vH/s"),
            c = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), o.o.tracking.track(u.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return l
        });
        var l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isHovering: !1
                }, t.onMouseOver = function() {
                    t.setState({
                        isHovering: !0
                    })
                }, t.onMouseOut = function() {
                    t.setState({
                        isHovering: !1
                    })
                }, t.onBadgeClickHandler = function() {
                    c({
                        badge_type: t.props.badge.title,
                        badge_url_target: t.targetURL
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    r = e.image2x,
                    i = e.image4x,
                    u = a.createElement("img", {
                        alt: t,
                        "aria-label": Object(o.d)("{badgeTitle} badge", {
                            badgeTitle: t
                        }, "Badge"),
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + r + " 2x, " + i + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (u = a.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, u)), this.state.isHovering ? a.createElement(s._52, {
                    align: s._53.Left,
                    "data-a-target": "chat-badge",
                    display: s.R.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, u) : u
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case i.e:
                        return e.clickURL;
                    case i.c:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case i.d:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(a.Component)
    },
    n7Mz: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            a = n("Aj/L"),
            i = n("TToO"),
            s = n("GiK3"),
            o = n("3zLD"),
            u = n("6sO2"),
            c = n("7vx8"),
            l = n("Odds"),
            d = n("Dbus"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1
                    }, t.claimAllRewards = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!this.props.claimAllRewards || !this.props.user) return [2];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.claimAllRewards({
                                            variables: {
                                                input: {
                                                    domain: this.props.tournamentID,
                                                    userID: this.props.user.id
                                                }
                                            }
                                        })];
                                    case 2:
                                        return e.sent(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.inGame ? Object(u.d)("Redeem All In-Game Rewards", "EsportsRewardsTab") : Object(u.d)("Redeem All", "EsportsRewardsTab");
                    return s.createElement(l._8, {
                        className: "esports-claim-all-rewards-button",
                        display: l.R.InlineFlex,
                        margin: {
                            right: 1
                        },
                        verticalAlign: l._59.Bottom
                    }, s.createElement(l.v, {
                        "data-test-selector": "esports-claim-all-button",
                        onClick: this.claimAllRewards,
                        disabled: !this.props.enabled
                    }, this.state.error && s.createElement(l._24, {
                        "data-test-selector": "esports-claim-all-button-error",
                        asset: l._25.DeadGlitch
                    }), !this.state.error && e))
                }, t
            }(s.Component),
            p = Object(o.compose)(Object(c.a)(d, {
                name: "claimAllRewards"
            }))(m);
        var f = Object(r.b)(function(e) {
            return {
                user: Object(a.c)(e)
            }
        })(p);
        n.d(t, "a", function() {
            return f
        })
    },
    nZeo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getFullYear()
        }
    },
    nfOx: function(e, t, n) {
        var r = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 1e3 * n)
        }
    },
    nizW: function(e, t, n) {
        var r = n("WNGz"),
            a = 6e4,
            i = 864e5;
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                o = n.getTime() - n.getTimezoneOffset() * a,
                u = s.getTime() - s.getTimezoneOffset() * a;
            return Math.round((o - u) / i)
        }
    },
    nk30: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                s = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + s), a
        }
    },
    oNnY: function(e, t, n) {
        var r = n("zZbG"),
            a = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, r(e) + n)
        }
    },
    oke8: function(e, t, n) {
        var r = n("1rLR");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    orNa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return 12 * (n.getFullYear() - a.getFullYear()) + (n.getMonth() - a.getMonth())
        }
    },
    pe7V: function(e, t, n) {
        var r = n("8KV+");
        e.exports = function(e, t) {
            return r(new Date, e, t)
        }
    },
    qNYo: function(e, t, n) {
        var r = n("xA5w"),
            a = n("9Jn5"),
            i = n("NKE6"),
            s = n("MKc+");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t),
                u = i(n, o),
                c = Math.abs(a(n, o));
            return n = s(n, u * c), u * (c - (i(n, o) === -u))
        }
    },
    qPxx: function(e, t, n) {
        var r = n("LLTj");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    rBmI: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3;
            return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rO5X: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Bb5e"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                o = i(n, s),
                u = Math.abs(a(n, s));
            return n.setFullYear(n.getFullYear() - o * u), o * (u - (i(n, s) === -o))
        }
    },
    sdTe: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    t6pj: function(e, t, n) {
        var r = n("YRFD"),
            a = n("xA5w"),
            i = n("25hp"),
            s = n("uyaC"),
            o = 1440,
            u = 43200,
            c = 525600;
        e.exports = function(e, t, n) {
            var l = n || {},
                d = r(e, t),
                m = l.locale,
                p = s.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (p = m.distanceInWords.localize);
            var f, g, v, h = {
                addSuffix: Boolean(l.addSuffix),
                comparison: d
            };
            d > 0 ? (f = a(e), g = a(t)) : (f = a(t), g = a(e));
            var b = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                k = i(g, f),
                w = g.getTimezoneOffset() - f.getTimezoneOffset(),
                x = b(k / 60) - w;
            if ("s" === (v = l.unit ? String(l.unit) : x < 1 ? "s" : x < 60 ? "m" : x < o ? "h" : x < u ? "d" : x < c ? "M" : "Y")) return p("xSeconds", k, h);
            if ("m" === v) return p("xMinutes", x, h);
            if ("h" === v) return p("xHours", b(x / 60), h);
            if ("d" === v) return p("xDays", b(x / o), h);
            if ("M" === v) return p("xMonths", b(x / u), h);
            if ("Y" === v) return p("xYears", b(x / c), h);
            throw new Error("Unknown unit: " + v)
        }
    },
    t8zS: function(e, t, n) {
        var r = n("nk30");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "u/4p": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                s = (i < n ? 7 : 0) + i - n;
            return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a
        }
    },
    urTJ: function(e, t, n) {
        "use strict";
        var r = n("mbxv");
        n.d(t, "a", function() {
            return r.a
        })
    },
    uwZN: function(e, t, n) {
        var r = n("7yyf");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    uyaC: function(e, t, n) {
        var r = n("Ptqd"),
            a = n("jQas");
        e.exports = {
            distanceInWords: r(),
            format: a()
        }
    },
    vBvW: function(e, t, n) {
        var r = n("mXYp");
        e.exports = function(e, t) {
            return r(Date.now(), e, t)
        }
    },
    vbMw: function(e, t) {},
    ve2D: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 2 === r(e).getDay()
        }
    },
    w0LG: function(e, t) {},
    w4by: function(e, t, n) {
        var r = n("6Zhv"),
            a = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * a)
        }
    },
    wAFH: function(e, t, n) {
        var r = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    wPo5: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setHours(a), n
        }
    },
    wajf: function(e, t, n) {
        var r = n("xA5w"),
            a = n("D6ie");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                s = a(n) - i;
            return n.setDate(n.getDate() - 7 * s), n
        }
    },
    wiYS: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e).getTime();
            return t.forEach(function(e, t) {
                var s = r(e),
                    o = Math.abs(i - s.getTime());
                (void 0 === n || o < a) && (n = t, a = o)
            }), n
        }
    },
    wuJz: function(e, t, n) {
        e.exports = {
            addDays: n("Jvcu"),
            addHours: n("w4by"),
            addISOYears: n("oNnY"),
            addMilliseconds: n("6Zhv"),
            addMinutes: n("NSOL"),
            addMonths: n("3EIC"),
            addQuarters: n("1rLR"),
            addSeconds: n("nfOx"),
            addWeeks: n("7EGB"),
            addYears: n("4Z4o"),
            areRangesOverlapping: n("2lB6"),
            closestIndexTo: n("wiYS"),
            closestTo: n("Tv4R"),
            compareAsc: n("NKE6"),
            compareDesc: n("YRFD"),
            differenceInCalendarDays: n("nizW"),
            differenceInCalendarISOWeeks: n("0aH9"),
            differenceInCalendarISOYears: n("9Jn5"),
            differenceInCalendarMonths: n("orNa"),
            differenceInCalendarQuarters: n("Jtuq"),
            differenceInCalendarWeeks: n("Q2rx"),
            differenceInCalendarYears: n("Bb5e"),
            differenceInDays: n("gAt4"),
            differenceInHours: n("kjlQ"),
            differenceInISOYears: n("qNYo"),
            differenceInMilliseconds: n("G7No"),
            differenceInMinutes: n("3nPg"),
            differenceInMonths: n("GI7G"),
            differenceInQuarters: n("XFzU"),
            differenceInSeconds: n("25hp"),
            differenceInWeeks: n("6SO/"),
            differenceInYears: n("rO5X"),
            distanceInWords: n("mXYp"),
            distanceInWordsStrict: n("t6pj"),
            distanceInWordsToNow: n("vBvW"),
            eachDay: n("M9Ev"),
            endOfDay: n("MIQa"),
            endOfHour: n("bbdo"),
            endOfISOWeek: n("SZZR"),
            endOfISOYear: n("K7ZZ"),
            endOfMinute: n("LU20"),
            endOfMonth: n("xKy+"),
            endOfQuarter: n("zQFw"),
            endOfSecond: n("+sSA"),
            endOfToday: n("0LAu"),
            endOfTomorrow: n("HXCM"),
            endOfWeek: n("I7cV"),
            endOfYear: n("Epw6"),
            endOfYesterday: n("0YGC"),
            format: n("Eoz/"),
            getDate: n("3g9B"),
            getDay: n("Mbb9"),
            getDayOfYear: n("ymQ7"),
            getDaysInMonth: n("Mdww"),
            getDaysInYear: n("Javx"),
            getHours: n("8Gpr"),
            getISODay: n("AZvW"),
            getISOWeek: n("D6ie"),
            getISOWeeksInYear: n("fUo1"),
            getISOYear: n("zZbG"),
            getMilliseconds: n("024F"),
            getMinutes: n("JNsx"),
            getMonth: n("l85J"),
            getOverlappingDaysInRanges: n("8QR2"),
            getQuarter: n("lQzg"),
            getSeconds: n("eKpK"),
            getTime: n("cwv1"),
            getYear: n("nZeo"),
            isAfter: n("fK0I"),
            isBefore: n("gDPd"),
            isDate: n("607n"),
            isEqual: n("sdTe"),
            isFirstDayOfMonth: n("6udH"),
            isFriday: n("YPf8"),
            isFuture: n("6CZb"),
            isLastDayOfMonth: n("kDuD"),
            isLeapYear: n("b7g8"),
            isMonday: n("kkVd"),
            isPast: n("eCZG"),
            isSameDay: n("f4ga"),
            isSameHour: n("qPxx"),
            isSameISOWeek: n("Be26"),
            isSameISOYear: n("4LxA"),
            isSameMinute: n("Moxe"),
            isSameMonth: n("f+sD"),
            isSameQuarter: n("7yyf"),
            isSameSecond: n("5qwL"),
            isSameWeek: n("8KV+"),
            isSameYear: n("Qxz6"),
            isSaturday: n("6axH"),
            isSunday: n("ZUMa"),
            isThisHour: n("z3wv"),
            isThisISOWeek: n("A2zO"),
            isThisISOYear: n("hUHO"),
            isThisMinute: n("Qbo9"),
            isThisMonth: n("cONr"),
            isThisQuarter: n("uwZN"),
            isThisSecond: n("hj5Y"),
            isThisWeek: n("pe7V"),
            isThisYear: n("kRs6"),
            isThursday: n("yu3m"),
            isToday: n("GvNH"),
            isTomorrow: n("0oN5"),
            isTuesday: n("ve2D"),
            isValid: n("dH3X"),
            isWednesday: n("e/EH"),
            isWeekend: n("4OFc"),
            isWithinRange: n("4zIR"),
            isYesterday: n("1gtq"),
            lastDayOfISOWeek: n("t8zS"),
            lastDayOfISOYear: n("hico"),
            lastDayOfMonth: n("Akl5"),
            lastDayOfQuarter: n("T/Ln"),
            lastDayOfWeek: n("nk30"),
            lastDayOfYear: n("xLg3"),
            max: n("11Bn"),
            min: n("aHtT"),
            parse: n("xA5w"),
            setDate: n("/dIK"),
            setDay: n("SHOI"),
            setDayOfYear: n("CVNg"),
            setHours: n("wPo5"),
            setISODay: n("YPjl"),
            setISOWeek: n("wajf"),
            setISOYear: n("Uu+E"),
            setMilliseconds: n("+/J2"),
            setMinutes: n("danj"),
            setMonth: n("balU"),
            setQuarter: n("jy2q"),
            setSeconds: n("ToRI"),
            setYear: n("a7Cs"),
            startOfDay: n("WNGz"),
            startOfHour: n("LLTj"),
            startOfISOWeek: n("3znZ"),
            startOfISOYear: n("iRXW"),
            startOfMinute: n("M5Oo"),
            startOfMonth: n("7Xwz"),
            startOfQuarter: n("rBmI"),
            startOfSecond: n("VaeB"),
            startOfToday: n("1udo"),
            startOfTomorrow: n("gUEJ"),
            startOfWeek: n("u/4p"),
            startOfYear: n("JURy"),
            startOfYesterday: n("mSFb"),
            subDays: n("cA+x"),
            subHours: n("fo7E"),
            subISOYears: n("MKc+"),
            subMilliseconds: n("wAFH"),
            subMinutes: n("kIFi"),
            subMonths: n("7Swd"),
            subQuarters: n("oke8"),
            subSeconds: n("9r5b"),
            subWeeks: n("cw9o"),
            subYears: n("0UyA")
        }
    },
    xA5w: function(e, t, n) {
        var r = n("607n"),
            a = 36e5,
            i = 6e4,
            s = 2,
            o = /[T ]/,
            u = /:/,
            c = /^(\d{2})$/,
            l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            d = /^(\d{4})/,
            m = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            p = /^-(\d{2})$/,
            f = /^-?(\d{3})$/,
            g = /^-?(\d{2})-?(\d{2})$/,
            v = /^-?W(\d{2})$/,
            h = /^-?W(\d{2})-?(\d{1})$/,
            b = /^(\d{2}([.,]\d*)?)$/,
            k = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            w = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            x = /([Z+-].*)$/,
            y = /^(Z)$/,
            E = /^([+-])(\d{2})$/,
            _ = /^([+-])(\d{2}):?(\d{2})$/;

        function S(e, t, n) {
            t = t || 0, n = n || 0;
            var r = new Date(0);
            r.setUTCFullYear(e, 0, 4);
            var a = 7 * t + n + 1 - (r.getUTCDay() || 7);
            return r.setUTCDate(r.getUTCDate() + a), r
        }
        e.exports = function(e, t) {
            if (r(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? s : Number(n);
            var T = function(e) {
                    var t, n = {},
                        r = e.split(o);
                    if (u.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
                        var a = x.exec(t);
                        a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
                    }
                    return n
                }(e),
                D = function(e, t) {
                    var n, r = l[t],
                        a = m[t];
                    if (n = d.exec(e) || a.exec(e)) {
                        var i = n[1];
                        return {
                            year: parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    if (n = c.exec(e) || r.exec(e)) {
                        var s = n[1];
                        return {
                            year: 100 * parseInt(s, 10),
                            restDateString: e.slice(s.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(T.date, n),
                O = D.year,
                N = function(e, t) {
                    if (null === t) return null;
                    var n, r, a, i;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = p.exec(e)) return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, a), r;
                    if (n = f.exec(e)) {
                        r = new Date(0);
                        var s = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, s), r
                    }
                    if (n = g.exec(e)) {
                        r = new Date(0), a = parseInt(n[1], 10) - 1;
                        var o = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, a, o), r
                    }
                    if (n = v.exec(e)) return i = parseInt(n[1], 10) - 1, S(t, i);
                    if (n = h.exec(e)) {
                        i = parseInt(n[1], 10) - 1;
                        var u = parseInt(n[2], 10) - 1;
                        return S(t, i, u)
                    }
                    return null
                }(D.restDateString, O);
            if (N) {
                var A, F = N.getTime(),
                    M = 0;
                return T.time && (M = function(e) {
                    var t, n, r;
                    if (t = b.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * a;
                    if (t = k.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), n % 24 * a + r * i;
                    if (t = w.exec(e)) {
                        n = parseInt(t[1], 10), r = parseInt(t[2], 10);
                        var s = parseFloat(t[3].replace(",", "."));
                        return n % 24 * a + r * i + 1e3 * s
                    }
                    return null
                }(T.time)), T.timezone ? (C = T.timezone, A = (I = y.exec(C)) ? 0 : (I = E.exec(C)) ? (R = 60 * parseInt(I[2], 10), "+" === I[1] ? -R : R) : (I = _.exec(C)) ? (R = 60 * parseInt(I[2], 10) + parseInt(I[3], 10), "+" === I[1] ? -R : R) : 0) : (A = new Date(F + M).getTimezoneOffset(), A = new Date(F + M + A * i).getTimezoneOffset()), new Date(F + M + A * i)
            }
            var C, I, R;
            return new Date(e)
        }
    },
    "xKy+": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    ymQ7: function(e, t, n) {
        var r = n("xA5w"),
            a = n("JURy"),
            i = n("nizW");
        e.exports = function(e) {
            var t = r(e);
            return i(t, a(t)) + 1
        }
    },
    yu3m: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 4 === r(e).getDay()
        }
    },
    z3wv: function(e, t, n) {
        var r = n("qPxx");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    zQFw: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var r = n("xA5w"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear(),
                i = new Date(0);
            i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
            var s = a(i),
                o = new Date(0);
            o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
            var u = a(o);
            return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1
        }
    }
});
//# sourceMappingURL=pages.unsubscribe-aab0d6233a34b1c1c83de5dbf6a33cef.js.map