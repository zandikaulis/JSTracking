webpackJsonp([46], {
    "+/J2": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMilliseconds(a), n
        }
    },
    "+72U": function(e, t) {},
    "+OOL": function(e, t) {},
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        });
        var r = "subscribe_to_channel",
            a = "turbo",
            i = "visit_url",
            o = "broadcaster"
    },
    "+sSA": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(999), t
        }
    },
    "/Nos": function(e, t, n) {
        "use strict";
        var r, a = n("TToO"),
            i = n("wuJz"),
            o = n("GiK3"),
            s = n("6sO2"),
            c = n("Odds"),
            u = n("RH2O"),
            l = n("2nfn"),
            d = n.n(l),
            p = n("ywmo"),
            m = n.n(p),
            f = n("yBkN"),
            g = n.n(f),
            h = n("Ob63"),
            b = n.n(h),
            v = n("N01O"),
            y = n.n(v),
            k = n("8WTh"),
            _ = n.n(k),
            w = n("nO5C"),
            E = n.n(w),
            x = n("yZWV"),
            S = n.n(x),
            N = n("EAav"),
            O = n.n(N),
            C = n("tWfJ"),
            D = n.n(C),
            T = n("WE8T"),
            P = n.n(T),
            A = n("6hIG"),
            F = n.n(A),
            M = n("siAa"),
            I = n.n(M),
            j = n("pNNA"),
            R = n.n(j),
            L = n("lL4Y"),
            U = n.n(L),
            z = n("KVSr"),
            B = n.n(z),
            Y = n("9pOZ"),
            H = n.n(Y),
            W = n("NXs7"),
            Q = n("0nzt");
        ! function(e) {
            e.AmericanExpress = "american_express", e.Discover = "discover", e.MasterCard = "mastercard", e.Visa = "visa"
        }(r || (r = {}));
        var G = n("zskx"),
            V = (n("VSLj"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.imageSource,
                        t = e.src,
                        n = e.alt,
                        r = e.srcSet;
                    return o.createElement(c._8, {
                        className: "payment-method-image"
                    }, o.createElement(c.N, {
                        src: t,
                        alt: n,
                        srcSet: r
                    }))
                }, Object.defineProperty(t.prototype, "imageSource", {
                    get: function() {
                        var e = Object(s.d)("credit card", "PaymentMethodImage");
                        if ("xsolla_v3" === this.props.paymentProvider) return {
                            src: H.a,
                            srcSet: {
                                "1x": B.a,
                                "2x": H.a
                            },
                            alt: Object(s.d)("Xsolla icon", "PaymentMethodImage")
                        };
                        switch (this.props.paymentInstrumentType) {
                            case G.a.CreditCard:
                                switch (this.props.cardType) {
                                    case r.AmericanExpress:
                                        return {
                                            src: y.a,
                                            alt: Object(s.d)("American Express", "PaymentMethodImage")
                                        };
                                    case r.Discover:
                                        return {
                                            src: _.a,
                                            alt: Object(s.d)("Discover", "PaymentMethodImage")
                                        };
                                    case r.MasterCard:
                                        return {
                                            src: this.props.darkModeEnabled && !this.ignoreDarkMode ? S.a : E.a,
                                            alt: Object(s.d)("Mastercard", "PaymentMethodImage")
                                        };
                                    case r.Visa:
                                        return {
                                            src: O.a,
                                            alt: Object(s.d)("Visa", "PaymentMethodImage")
                                        };
                                    default:
                                        return {
                                            src: D.a,
                                            srcSet: {
                                                "1x": D.a,
                                                "2x": P.a
                                            },
                                            alt: e
                                        }
                                }
                            case G.a.AmazonPay:
                                return {
                                    src: this.props.darkModeEnabled && !this.ignoreDarkMode ? g.a : d.a,
                                    srcSet: this.props.darkModeEnabled && !this.ignoreDarkMode ? {
                                        "1x": g.a,
                                        "2x": b.a
                                    } : {
                                        "1x": d.a,
                                        "2x": m.a
                                    },
                                    alt: Object(s.d)("Amazon Pay", "PaymentMethodImage")
                                };
                            case G.a.Paypal:
                                return {
                                    src: this.props.darkModeEnabled && !this.ignoreDarkMode ? R.a : F.a,
                                    srcSet: this.props.darkModeEnabled && !this.ignoreDarkMode ? {
                                        "1x": R.a,
                                        "2x": U.a
                                    } : {
                                        "1x": F.a,
                                        "2x": I.a
                                    },
                                    alt: Object(s.d)("Paypal", "PaymentMethodImage")
                                };
                            default:
                                return {
                                    src: D.a,
                                    srcSet: {
                                        "1x": D.a,
                                        "2x": P.a
                                    },
                                    alt: e
                                }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "ignoreDarkMode", {
                    get: function() {
                        return !!window.location.href.match(/.*\/checkout\/[\w\d-]+(\/|\/\?.*|\?.*)?$/)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component));
        var Z = Object(u.b)(function(e) {
            return {
                darkModeEnabled: Object(Q.a)(e) === W.a.Dark
            }
        })(V);
        n("+72U");
        n.d(t, "a", function() {
            return K
        });
        var K = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return o.createElement(c._35, {
                    className: this.isExpired ? "payment-method-display--expired" : "",
                    display: c.R.Flex,
                    justifyContent: this.props.justifyContent || c._7.Between,
                    flexWrap: c.U.Wrap,
                    fullWidth: !0
                }, o.createElement(c._8, {
                    alignItems: c.c.Center,
                    display: c.R.Flex,
                    margin: {
                        right: 1
                    }
                }, o.createElement(Z, {
                    paymentInstrumentType: this.paymentMethod.paymentType,
                    cardType: this.paymentMethod.cardType,
                    paymentProvider: this.paymentMethod.provider
                }), this.renderLastFour()), o.createElement(c._8, {
                    display: c.R.Flex,
                    justifyContent: c._7.Center,
                    flexDirection: c.T.Column
                }, this.renderBillingEmail(), this.renderExpirationDate()))
            }, t.prototype.renderLastFour = function() {
                return this.paymentMethod.lastFour ? o.createElement(c._8, {
                    display: c.R.Flex,
                    margin: {
                        x: 2
                    }
                }, o.createElement(c.Q, {
                    bold: !0
                }, Object(s.d)("Ending in {lastFour}", {
                    lastFour: this.paymentMethod.lastFour
                }, "PaymentMethodDisplay"))) : null
            }, t.prototype.renderExpirationDate = function() {
                var e = this.zeroIndexedMonth,
                    t = this.paymentMethod.expirationYear;
                if (void 0 === e || !t) return null;
                var n = new Date(t, e),
                    r = "";
                return r = this.isExpired ? Object(s.d)("Expired {expirationDate}", {
                    expirationDate: Object(s.c)(n, {
                        month: "2-digit",
                        year: "numeric"
                    })
                }, "PaymentMethodDisplay") : Object(s.d)("Expires {expirationDate}", {
                    expirationDate: Object(s.c)(n, {
                        month: "2-digit",
                        year: "numeric"
                    })
                }, "PaymentMethodDisplay"), o.createElement(c._8, {
                    alignItems: c.c.Center,
                    display: c.R.Flex,
                    justifyContent: c._7.End
                }, o.createElement(c.Q, {
                    ellipsis: !0,
                    color: c.K.Alt2,
                    bold: this.isExpired
                }, r))
            }, t.prototype.renderBillingEmail = function() {
                return this.paymentMethod.billingEmail ? o.createElement(c._8, {
                    alignItems: c.c.Center,
                    display: c.R.Flex,
                    justifyContent: c._7.End
                }, o.createElement(c.Q, {
                    ellipsis: !0,
                    color: c.K.Alt2
                }, this.paymentMethod.billingEmail)) : null
            }, Object.defineProperty(t.prototype, "paymentMethod", {
                get: function() {
                    return this.props.paymentMethod
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isExpired", {
                get: function() {
                    var e = this.zeroIndexedMonth,
                        t = this.props.paymentMethod.expirationYear;
                    if (void 0 === e || !t) return !1;
                    var n = Object(i.startOfMonth)(new Date),
                        r = new Date(t, e, 1);
                    return !!Object(i.isBefore)(r, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "zeroIndexedMonth", {
                get: function() {
                    if (this.props.paymentMethod.expirationMonth) return this.props.paymentMethod.expirationMonth - 1
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(o.PureComponent)
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
                o = r(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                c = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((s - c) / i)
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
    "1O5t": function(e, t) {},
    "1gtq": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime()
        }
    },
    "1hla": function(e, t) {},
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
                o = r(t).getTime(),
                s = r(n).getTime(),
                c = r(a).getTime();
            if (i > o || s > c) throw new Error("The start of the range cannot be after the end of the range");
            return i < c && s < o
        }
    },
    "2nfn": function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_1x-4f76ba5fbbaca5a76d41bfb6f8a4e485.png"
    },
    "3EIC": function(e, t, n) {
        var r = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                o = n.getMonth() + i,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var c = a(s);
            return n.setMonth(o, Math.min(c, n.getDate())), n
        }
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var r = n("RbGx"),
            a = n("urTJ"),
            i = n("+V/3"),
            o = (n("AwFw"), n("TToO")),
            s = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === i.b && (e = o.__assign({}, e, {
                            channelName: n
                        }));
                        var r = t.get(e.setID);
                        r || (r = new Map, t.set(e.setID, r)), r.set(e.version, e)
                    })
                }, e
            }();
        new s([], [], "");
        n.d(t, "b", function() {
            return r.a
        }), n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
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
    "40wk": function(e, t) {},
    "46tX": function(e, t, n) {
        "use strict";
        t.d = m, t.c = function(e) {
            return r.test(e)
        }, t.a = f, t.b = function(e) {
            return i.test(e)
        };
        var r = /firefox/i,
            a = /Android/i,
            i = /chrome/i,
            o = /webOS/i,
            s = /iPhone/i,
            c = /iPad/i,
            u = /iPod/i,
            l = /BlackBerry/i,
            d = /Windows Phone/i,
            p = /Mobile/i;

        function m(e) {
            return f(e) || o.test(e) || s.test(e) || c.test(e) || u.test(e) || l.test(e) || d.test(e) || p.test(e)
        }

        function f(e) {
            return a.test(e)
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
                o = r(n).getTime();
            if (i > o) throw new Error("The start of the range cannot be after the end of the range");
            return a >= i && a <= o
        }
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
    "6hIG": function(e, t, n) {
        e.exports = n.p + "assets/paypal_1x-a2a2f7d96b4384f9f1d7639977bfdc73.png"
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
            var o = r(e).getTime(),
                s = r(t).getTime(),
                c = r(n).getTime(),
                u = r(i).getTime();
            if (o > s || c > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < u && c < s)) return 0;
            var l = (u > s ? s : u) - (c < o ? o : c);
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
    "8WTh": function(e, t, n) {
        e.exports = n.p + "assets/discover-6b3f08642cb1d9047f4a545bd96618e4.svg"
    },
    "8m9s": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            a = n("Aj/L"),
            i = n("TToO"),
            o = n("GiK3"),
            s = n("3zLD"),
            c = n("6sO2"),
            u = n("7vx8"),
            l = n("TeXj"),
            d = n("3T7g"),
            p = n("969Z"),
            m = n("CSlQ"),
            f = n("Odds"),
            g = (n("VH0v"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    if (t) return o.createElement(f._35, {
                        className: "ticket-description"
                    }, o.createElement(f.C, {
                        border: !0,
                        elevation: 1
                    }, o.createElement("div", {
                        className: "ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, o.createElement(f._8, {
                        className: "ticket-description__broadcaster-info",
                        textAlign: f._45.Center,
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        flexWrap: f.U.NoWrap,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        breakpointLarge: {
                            padding: 5
                        }
                    }, o.createElement(f._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, o.createElement(f.m, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    })), o.createElement(f._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.H4,
                        bold: !0,
                        color: f.K.Overlay
                    }, t.displayName)), o.createElement(f._8, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.H5,
                        color: f.K.Overlay
                    }, e.displayName)))), o.createElement(f.D, null, o.createElement(f._35, {
                        borderBottom: !0,
                        textAlign: f._45.Center,
                        background: f.n.Alt,
                        padding: 2
                    }, this.props.renderPrice()), o.createElement(f._35, {
                        className: "ticket-description__description",
                        padding: {
                            x: 1,
                            bottom: 2
                        },
                        textAlign: f._45.Left,
                        background: f.n.Alt
                    }, o.createElement(f._3, {
                        padding: {
                            y: 1
                        }
                    }, o.createElement(f.Q, {
                        className: "ticket-description__description__line-item",
                        bold: !0
                    }, R["Subscription benefits"]())), o.createElement(f.Q, {
                        className: "ticket-description__description__line-item"
                    }, R["Directly support the broadcaster"]()), e.hasAdFree && o.createElement(f.Q, {
                        className: "ticket-description__description__line-item"
                    }, R["Ad-free (with limited exceptions)"]()), o.createElement(f.Q, {
                        className: "ticket-description__description__line-item"
                    }, R["Chat during subscriber-only mode"]()), e.hasFastChat && o.createElement(f.Q, {
                        className: "ticket-description__description__line-item"
                    }, R["Not affected by chat slow mode"]()), e.hasSubonlyVideoArchive && o.createElement(f.Q, {
                        className: "ticket-description__description__line-item"
                    }, R["Access to VODs"]()), this.props.renderSubBadges(), this.props.renderSubEmotes()))))
                }, t = i.__decorate([Object(m.d)("TicketDescription")], t)
            }(o.Component)),
            h = n("yWCw"),
            b = function(e) {
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
                    return this.props.collapsable ? o.createElement(o.Fragment, null, o.createElement(f._8, {
                        display: f.R.Hide,
                        breakpointLarge: {
                            display: f.R.Block
                        }
                    }, o.createElement(f.D, null, this.props.children)), o.createElement(f._8, {
                        display: f.R.Block,
                        breakpointLarge: {
                            display: f.R.Hide
                        }
                    }, this.state.collapsed && o.createElement(f._6, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, o.createElement(f._8, {
                        fullWidth: !0,
                        textAlign: f._45.Center,
                        alignItems: f.c.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Link
                    }, this.props.showButtonLabel))), !this.state.collapsed && o.createElement(f.D, null, this.props.children, o.createElement(f._6, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, o.createElement(f._8, {
                        fullWidth: !0,
                        textAlign: f._45.Center,
                        alignItems: f.c.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Link
                    }, this.props.showButtonLabel)))))) : o.createElement(f.D, null, this.props.children)
                }, t
            }(o.Component),
            v = (n("eVow"), function(e) {
                return o.createElement(f._8, {
                    className: "ticket-wrapper__container",
                    margin: {
                        bottom: 2
                    },
                    breakpointLarge: {
                        margin: 0
                    }
                }, o.createElement(f.C, {
                    elevation: 1
                }, e.children))
            }),
            y = (n("+OOL"), function() {
                return o.createElement(v, null, o.createElement(f._8, {
                    className: "error-description__header",
                    padding: 2
                }, o.createElement(f._35, {
                    fullHeight: !0,
                    background: f.n.Alt2
                }, o.createElement(h.a, null))), o.createElement(b, {
                    collapsable: !0
                }, o.createElement(f._35, {
                    className: "error-description__body",
                    padding: 2,
                    borderTop: !0
                }, o.createElement(f._35, {
                    fullHeight: !0,
                    background: f.n.Alt2
                }, o.createElement(h.a, null)))))
            }),
            k = (n("kgE+"), function(e) {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    if (t) return o.createElement(f._35, {
                        className: "mobile-ticket-description",
                        fullWidth: !0,
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(f.C, {
                        border: !0,
                        elevation: 1
                    }, o.createElement("div", {
                        className: "mobile-ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, o.createElement(f._35, {
                        margin: {
                            top: 2
                        },
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center
                    }, o.createElement(f.m, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    }))), o.createElement(f._35, {
                        className: "mobile-ticket-description__broadcaster-info",
                        textAlign: f._45.Center,
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        flexWrap: f.U.NoWrap,
                        margin: {
                            top: 2
                        }
                    }, o.createElement(f._35, {
                        background: f.n.Alt,
                        fullWidth: !0
                    }, o.createElement(f._8, {
                        margin: 1
                    }, o.createElement(f.Q, {
                        type: f._49.H4,
                        bold: !0
                    }, t.displayName)), o.createElement(f._8, {
                        margin: 1
                    }, o.createElement(f.Q, {
                        type: f._49.H5
                    }, e.displayName)), o.createElement(f._8, {
                        margin: 1
                    }, this.props.renderPrice())), this.state.collapsed && o.createElement(f._6, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, o.createElement(f._35, {
                        fullWidth: !0,
                        textAlign: f._45.Center,
                        alignItems: f.c.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Link
                    }, Object(c.d)("Show Subcription Benefits", "MobileTicketDescription"))))), o.createElement(f.D, null, !this.state.collapsed && o.createElement(o.Fragment, null, o.createElement(f._35, {
                        className: "mobile-ticket-description__description",
                        padding: {
                            x: 1,
                            bottom: 1
                        },
                        textAlign: f._45.Left,
                        background: f.n.Alt,
                        borderTop: !0
                    }, o.createElement(f._3, {
                        padding: {
                            y: 1
                        }
                    }, o.createElement(f.Q, {
                        className: "mobile-ticket-description__description__line-item",
                        bold: !0
                    }, R["Subscription benefits"]())), o.createElement(f.Q, {
                        className: "mobile-ticket-description__description__line-item"
                    }, R["Directly support the broadcaster"]()), e.hasAdFree && o.createElement(f.Q, {
                        className: "mobile-ticket-description__description__line-item"
                    }, R["Ad-free (with limited exceptions)"]()), o.createElement(f.Q, {
                        className: "mobile-ticket-description__description__line-item"
                    }, R["Chat during subscriber-only mode"]()), e.hasFastChat && o.createElement(f.Q, {
                        className: "mobile-ticket-description__description__line-item"
                    }, R["Not affected by chat slow mode"]()), e.hasSubonlyVideoArchive && o.createElement(f.Q, {
                        className: "mobile-ticket-description__description__line-item"
                    }, R["Access to VODs"]()), this.props.renderSubBadges(), this.props.renderSubEmotes()), o.createElement(f._6, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, o.createElement(f._35, {
                        fullWidth: !0,
                        textAlign: f._45.Center,
                        alignItems: f.c.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Link
                    }, Object(c.d)("Hide Subcription Benefits", "MobileTicketDescription"))))))))
                }, t = i.__decorate([Object(m.d)("TicketDescription")], t)
            }(o.Component)),
            _ = (n("JbfA"), function() {
                return o.createElement(v, null, o.createElement(f._8, {
                    className: "placeholder-description__header",
                    padding: 2
                }, o.createElement(f._35, {
                    fullHeight: !0,
                    background: f.n.Alt2
                })), o.createElement(b, {
                    collapsable: !0
                }, o.createElement(f._35, {
                    padding: 2,
                    borderTop: !0
                }, o.createElement(f._14, {
                    lineCount: 30
                }))))
            }),
            w = (n("40wk"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.turboBenefitsList = [{
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_ad-free.png",
                        benefitHeader: L["Ad-Free*"](),
                        benefitDescription: L["No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_custom-emotes.png",
                        benefitHeader: L["Custom Emoticon Set"](),
                        benefitDescription: L["Express your emotions with an exclusive set of faces."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_badge.png",
                        benefitHeader: L.Badge(),
                        benefitDescription: L["Show everyone how Turbo you are with a shiny new chat badge."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_chat-color.png",
                        benefitHeader: L["Extended Chat Colors"](),
                        benefitDescription: L["Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_storage.png",
                        benefitHeader: L["Increased Video Storage"](),
                        benefitDescription: L["Save your past broadcasts on Twitch for 60 days."]()
                    }], t.renderTurboBenefit = function(e) {
                        return o.createElement(f.L, {
                            cols: 12,
                            key: e.benefitHeader
                        }, o.createElement(f._35, {
                            margin: {
                                top: 2
                            }
                        }, o.createElement(f.Y, null, o.createElement(f.L, {
                            cols: 4
                        }, o.createElement(f.N, {
                            src: e.imgSrc,
                            alt: e.benefitHeader
                        })), o.createElement(f.L, {
                            cols: 8
                        }, o.createElement(f.Q, {
                            type: f._49.H4,
                            bold: !0
                        }, e.benefitHeader), o.createElement(f.Q, {
                            type: f._49.P
                        }, e.benefitDescription)))))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = L.Features();
                    return o.createElement(f._35, {
                        className: "turbo-mobile-ticket-description",
                        background: f.n.Alt2,
                        border: !0,
                        padding: 2,
                        elevation: 1,
                        fullWidth: !0
                    }, o.createElement(f.Y, null, o.createElement(f.L, {
                        cols: 12
                    }, o.createElement(f.Q, {
                        type: f._49.H2,
                        bold: !0
                    }, e)), o.createElement(f.L, {
                        cols: 12
                    }, o.createElement(f.Q, {
                        type: f._49.H4
                    }, L["This list doesn’t even include how much of a baller you’ll become after upgrading."]())), this.turboBenefitsList.map(this.renderTurboBenefit), o.createElement(f.L, {
                        cols: 12
                    }, o.createElement(f._35, {
                        borderBottom: !0,
                        textAlign: f._45.Center,
                        background: f.n.Alt,
                        margin: {
                            top: 2
                        },
                        padding: 2
                    }, this.props.renderPrice()))))
                }, t = i.__decorate([Object(m.d)("TicketDescription", {
                    autoReportInteractive: !0
                })], t)
            }(o.PureComponent)),
            E = (n("Mn81"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.turboBenefitsList = [{
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_ad-free.png",
                        benefitHeader: L["Ad-Free*"](),
                        benefitDescription: L["No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_custom-emotes.png",
                        benefitHeader: L["Custom Emoticon Set"](),
                        benefitDescription: L["Express your emotions with an exclusive set of faces."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_badge.png",
                        benefitHeader: L.Badge(),
                        benefitDescription: L["Show everyone how Turbo you are with a shiny new chat badge."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_chat-color.png",
                        benefitHeader: L["Extended Chat Colors"](),
                        benefitDescription: L["Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_storage.png",
                        benefitHeader: L["Increased Video Storage"](),
                        benefitDescription: L["Save your past broadcasts on Twitch for 60 days."]()
                    }], t.renderTurboBenefit = function(e) {
                        return o.createElement(f.L, {
                            cols: 12,
                            key: e.benefitHeader
                        }, o.createElement(f._35, {
                            margin: {
                                top: 2
                            }
                        }, o.createElement(f.Y, null, o.createElement(f.L, {
                            cols: 4
                        }, o.createElement(f.N, {
                            src: e.imgSrc,
                            alt: e.benefitHeader
                        })), o.createElement(f.L, {
                            cols: 8
                        }, o.createElement(f.Q, {
                            type: f._49.H4,
                            bold: !0
                        }, e.benefitHeader), o.createElement(f.Q, {
                            type: f._49.P
                        }, e.benefitDescription)))))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = L.Features();
                    return o.createElement(f._35, {
                        className: "turbo-ticket-description",
                        background: f.n.Alt2,
                        border: !0,
                        padding: 2,
                        elevation: 1
                    }, o.createElement(f.Y, null, o.createElement(f.L, {
                        cols: 12
                    }, o.createElement(f.Q, {
                        type: f._49.H2,
                        bold: !0
                    }, e)), o.createElement(f.L, {
                        cols: 12
                    }, o.createElement(f.Q, {
                        type: f._49.H4
                    }, L["This list doesn’t even include how much of a baller you’ll become after upgrading."]())), this.turboBenefitsList.map(this.renderTurboBenefit), o.createElement(f.L, {
                        cols: 12
                    }, o.createElement(f._35, {
                        borderBottom: !0,
                        textAlign: f._45.Center,
                        background: f.n.Alt,
                        margin: {
                            top: 2
                        },
                        padding: 2
                    }, this.props.renderPrice()))))
                }, t = i.__decorate([Object(m.d)("TicketDescription", {
                    autoReportInteractive: !0
                })], t)
            }(o.PureComponent)),
            x = n("7LIQ"),
            S = n("Tzcg"),
            N = n("3iBR"),
            O = n("D0Fd"),
            C = n("TTpp"),
            D = n("FDYX"),
            T = n("PGoF"),
            P = (n("iLMR"), "skin-selector"),
            A = "igc-selector",
            F = "badge-selector",
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderHeroSkins = function() {
                        if (t.props.owner && !t.props.data.loading && !t.props.data.error) {
                            var e = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.heroSkins.map(function(e) {
                                return o.createElement(f._2, {
                                    margin: {
                                        x: .5
                                    },
                                    key: "skin-" + e.id,
                                    display: f.R.Flex,
                                    flexDirection: f.T.Row,
                                    alignItems: f.c.Center,
                                    "data-test-selector": P
                                }, o.createElement("li", null, o.createElement(O.a, {
                                    imageURL: e.imageURL,
                                    size: O.b.Small
                                })))
                            }) : null;
                            return o.createElement(f._2, {
                                display: f.R.Flex,
                                flexDirection: f.T.Row,
                                flexWrap: f.U.Wrap,
                                justifyContent: f._7.Center,
                                alignItems: f.c.Center
                            }, o.createElement("ul", null, e))
                        }
                    }, t.renderInGameContent = function() {
                        if (t.props.owner && !t.props.data.loading && !t.props.data.error) {
                            var e = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.inGameContent.map(function(e) {
                                return o.createElement(f.m, {
                                    key: "igc-" + e.id,
                                    src: e.imageURL,
                                    alt: e.name,
                                    size: 64,
                                    "data-test-selector": A
                                })
                            }) : null;
                            return o.createElement(f._8, {
                                display: f.R.Flex,
                                flexDirection: f.T.Row,
                                flexWrap: f.U.Wrap,
                                justifyContent: f._7.Center,
                                alignItems: f.c.Center
                            }, e)
                        }
                    }, t.renderSubBadges = function() {
                        if (t.props.owner && !t.props.data.loading && !t.props.data.error) {
                            var e = t.props.owner.broadcastBadges.map(function(e) {
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
                                return o.createElement(f._2, {
                                    margin: {
                                        x: 1
                                    },
                                    key: "access-badge-" + e.name
                                }, o.createElement("li", null, o.createElement(f.m, {
                                    src: e.imageURL,
                                    alt: e.name,
                                    size: 36,
                                    "data-test-selector": F
                                })))
                            });
                            return o.createElement(f._8, null, o.createElement(f.Q, {
                                className: "ticket-description__description__line-item"
                            }, Object(c.d)("{numBadges, number} All-Access Pass Twitch Badges:", {
                                numBadges: 2
                            }, "EsportsTicketDescription")), o.createElement(f._2, {
                                display: f.R.Flex,
                                flexWrap: f.U.Wrap
                            }, o.createElement("ul", null, r)))
                        }
                    }, t.renderSubEmotes = function() {
                        if (t.props.owner) {
                            var e = t.props.owner.subscriptionProducts.map(function(e) {
                                return e.emotes
                            }).reduce(function(e, t) {
                                return e.concat(t)
                            }, []);
                            if (0 !== e.length) return o.createElement(f._8, null, o.createElement(f.Q, {
                                className: "ticket-description__description__line-item"
                            }, Object(c.d)("{numEmotes, number} All-Access Pass Twitch Emotes:", {
                                numEmotes: e.length
                            }, "EsportsTicketDescription")), o.createElement(x.a, {
                                emoteSet: {
                                    id: "",
                                    emotes: Object(S.b)(e)
                                },
                                onClickEmote: void 0,
                                locked: !1
                            }))
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.owner) {
                        var e = this.props.product.price;
                        return this.props.owner && Object(D.d)(this.props.owner.subscriptionProducts) && (e = Object(D.a)(this.props.owner.subscriptionProducts[0])), o.createElement(f._35, {
                            className: "ticket-description"
                        }, o.createElement(f.C, {
                            border: !0,
                            elevation: 1
                        }, o.createElement(f._8, {
                            className: "ticket-description__banner-image",
                            padding: 3
                        }, o.createElement("img", {
                            src: N.c + "/owl-2017/all-access-logo.svg",
                            alt: Object(c.d)("Overwatch League All-Access Pass on Twitch", "EsportsTicketDescription"),
                            height: "80px"
                        })), o.createElement(f.D, null, o.createElement(f._35, {
                            borderBottom: !0,
                            textAlign: f._45.Center,
                            background: f.n.Alt,
                            padding: 2
                        }, o.createElement(f.Q, {
                            type: f._49.H4,
                            "data-test-selector": "esport-ticket-description-price"
                        }, Object(c.d)("{price} {interval}", {
                            price: o.createElement(f.Q, {
                                type: f._49.Span,
                                bold: !0
                            }, e),
                            interval: "One-Time Purchase"
                        }, "EsportsTicketDescription"))), o.createElement(f._35, {
                            className: "ticket-description__description",
                            padding: {
                                x: 1,
                                y: 2
                            },
                            textAlign: f._45.Left,
                            background: f.n.Alt
                        }, Object(D.d)(this.props.owner.subscriptionProducts) && o.createElement(f._8, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            bold: !0,
                            "data-test-selector": "prime-language"
                        }, Object(c.d)("Twitch Prime", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "prime-language"
                        }, Object(c.d)("You're saving $10 off of the {price} price", {
                            price: this.props.product.price
                        }, "EsportsTicketDescription")), o.createElement(f.Q, {
                            fontSize: f.V.Size7,
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "prime-language"
                        }, o.createElement(f.O, {
                            to: C.b
                        }, Object(c.d)("Offer available for a limited time. Terms and conditions apply", "EsportsTicketDescription")))), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            bold: !0,
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Overwatch League All-Access Pass Benefits", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Exclusive Command Center Stream", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Match Analysis Videos by Players", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Participate in Post-Match Q&A", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Passholder-Only Chat Access", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Ad-Free Viewing on Overwatch League", "EsportsTicketDescription")), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(c.d)("Overwatch In-Game Content:", "EsportsTicketDescription")), this.renderHeroSkins(), this.renderInGameContent(), this.renderSubBadges(), this.renderSubEmotes(), o.createElement(f.Q, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "disclaimer"
                        }, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep forever!", "EsportsTicketDescription"))))))
                    }
                }, t
            }(o.PureComponent),
            I = Object(s.compose)(Object(u.a)(T, {
                options: function(e) {
                    return {
                        variables: {
                            channelID: e.owner.id
                        }
                    }
                }
            }))(M),
            j = n("O6CN"),
            R = {
                "Subscription benefits": function() {
                    return Object(c.d)("Subscription benefits", "TicketDescription")
                },
                "Directly support the broadcaster": function() {
                    return Object(c.d)("Directly support the broadcaster", "TicketDescription")
                },
                "Ad-free (with limited exceptions)": function() {
                    return Object(c.d)("Ad-free (with limited exceptions)", "TicketDescription")
                },
                "Chat during subscriber-only mode": function() {
                    return Object(c.d)("Chat during subscriber-only mode", "TicketDescription")
                },
                "Not affected by chat slow mode": function() {
                    return Object(c.d)("Not affected by chat slow mode", "TicketDescription")
                },
                "Access to VODs": function() {
                    return Object(c.d)("Access to VODs", "TicketDescription")
                },
                "Subscriber Badges:": function() {
                    return Object(c.d)("Subscriber Badges:", "TicketDescription")
                },
                "Subscriber Emotes:": function() {
                    return Object(c.d)("Subscriber Emotes:", "TicketDescription")
                }
            },
            L = {
                "Ad-Free*": function() {
                    return Object(c.d)("Ad-Free*", "TicketDescription")
                },
                "Custom Emoticon Set": function() {
                    return Object(c.d)("Custom Emoticon Set", "TicketDescription")
                },
                Badge: function() {
                    return Object(c.d)("Badge", "TicketDescription")
                },
                "Extended Chat Colors": function() {
                    return Object(c.d)("Extended Chat Colors", "TicketDescription")
                },
                "Increased Video Storage": function() {
                    return Object(c.d)("Increased Video Storage", "TicketDescription")
                },
                "No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers.": function() {
                    return Object(c.d)("No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers.", "TicketDescription")
                },
                "Express your emotions with an exclusive set of faces.": function() {
                    return Object(c.d)("Express your emotions with an exclusive set of faces.", "TicketDescription")
                },
                "Show everyone how Turbo you are with a shiny new chat badge.": function() {
                    return Object(c.d)("Show everyone how Turbo you are with a shiny new chat badge.", "TicketDescription")
                },
                "Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up.": function() {
                    return Object(c.d)("Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up.", "TicketDescription")
                },
                "Save your past broadcasts on Twitch for 60 days.": function() {
                    return Object(c.d)("Save your past broadcasts on Twitch for 60 days.", "TicketDescription")
                },
                Features: function() {
                    return Object(c.d)("Features", "TicketDescription")
                },
                "This list doesn’t even include how much of a baller you’ll become after upgrading.": function() {
                    return Object(c.d)("This list doesn’t even include how much of a baller you’ll become after upgrading.", "TicketDescription")
                }
            },
            U = {
                "One Time": function() {
                    return Object(c.d)("One Time", "TicketDescription")
                },
                Year: function() {
                    return Object(c.d)("Year", "TicketDescription")
                },
                Month: function() {
                    return Object(c.d)("Month", "TicketDescription")
                }
            },
            z = function(e, t) {
                return Object(c.d)("{price} / {interval}", {
                    price: o.createElement(f.Q, {
                        type: f._49.Span,
                        bold: !0
                    }, e),
                    interval: t
                }, "TicketDescription")
            },
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderPrice = function() {
                        var e;
                        switch (t.props.data.product.interval.unit) {
                            case p.b.OneTime:
                                e = U["One Time"]();
                                break;
                            case p.b.Year:
                                e = U.Year();
                                break;
                            case p.b.Month:
                            default:
                                e = U.Month()
                        }
                        return o.createElement(f.Q, {
                            type: f._49.H4
                        }, z(t.props.data.product.price, e))
                    }, t.renderSubBadges = function() {
                        var e = t.props.data.product;
                        if (!e || !e.owner) return null;
                        var n = e.owner.broadcastBadges.filter(function(e) {
                            return "subscriber" === e.setID
                        }).sort(function(e, t) {
                            return parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                        });
                        if (!n.length) return null;
                        var r = n.map(function(e) {
                            return o.createElement(f._8, {
                                key: e.setID + "/" + e.version,
                                margin: .5
                            }, o.createElement(d.a, {
                                badge: e
                            }))
                        });
                        return o.createElement(o.Fragment, null, o.createElement(f.Q, {
                            className: "ticket-description__description__line-item"
                        }, R["Subscriber Badges:"]()), o.createElement(f._8, {
                            display: f.R.Flex,
                            flexWrap: f.U.Wrap,
                            justifyContent: f._7.Center
                        }, r))
                    }, t.renderSubEmotes = function() {
                        if (!t.props.data.product || !t.props.data.product.owner) return null;
                        var e = t.props.data.product.owner.subscriptionProducts.filter(function(e) {
                            return (e.tier || "") <= (e.tier || "")
                        }).map(function(e) {
                            return e.emotes
                        }).reduce(function(e, t) {
                            return e.concat(t)
                        }, []);
                        return 0 === e.length ? null : o.createElement(o.Fragment, null, o.createElement(f.Q, {
                            className: "ticket-description__description__line-item"
                        }, e.length, " ", R["Subscriber Emotes:"]()), o.createElement(x.a, {
                            emoteSet: {
                                id: "",
                                emotes: Object(S.b)(e)
                            },
                            onClickEmote: void 0,
                            locked: !1
                        }))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.product,
                        t = e && !e.owner && "turbo" === e.type;
                    return e && e.owner && Object(l.a)(e.owner.id, this.props.sessionUser) ? o.createElement(I, {
                        owner: e.owner,
                        product: e
                    }) : this.props.mobile && t ? o.createElement(w, {
                        renderPrice: this.renderPrice
                    }) : t ? o.createElement(E, {
                        renderPrice: this.renderPrice
                    }) : e && e.owner && this.props.mobile ? o.createElement(k, {
                        owner: e.owner,
                        product: e,
                        renderPrice: this.renderPrice,
                        renderSubBadges: this.renderSubBadges,
                        renderSubEmotes: this.renderSubEmotes
                    }) : e && e.owner ? o.createElement(g, {
                        owner: e.owner,
                        product: e,
                        renderPrice: this.renderPrice,
                        renderSubBadges: this.renderSubBadges,
                        renderSubEmotes: this.renderSubEmotes
                    }) : this.props.data.loading ? o.createElement(_, null) : o.createElement(y, null)
                }, t
            }(o.Component),
            Y = Object(s.compose)(Object(m.d)("TicketDescription"), Object(u.a)(j, {
                options: function(e) {
                    return {
                        variables: {
                            productName: e.productName
                        }
                    }
                }
            }))(B);
        var H = Object(r.b)(function(e) {
            return {
                sessionUser: Object(a.c)(e)
            }
        })(Y);
        n.d(t, "a", function() {
            return H
        }), n.d(t, "b", function() {
            return R
        }), n.d(t, "c", function() {
            return L
        }), n.d(t, !1, function() {
            return U
        }), n.d(t, !1, function() {
            return z
        }), n.d(t, !1, function() {
            return Y
        })
    },
    "969Z": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("6sO2"),
            o = n("7vx8"),
            s = n("TeXj"),
            c = n("9u8h"),
            u = n("RH2O"),
            l = n("Aj/L"),
            d = n("Odds"),
            p = function(e) {
                var t = e.isGift ? Object(i.d)("Gift All-Access Pass", "EsportsTicketPurchaseInfo") : Object(i.d)("Get Your All-Access Pass", "EsportsTicketPurchaseInfo"),
                    n = e.isGift ? "gift-pass-purchase-title-selector" : "pass-purchase-title-selector",
                    r = e.isGift ? Object(i.d)("Buying a Pass gift is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                        "x:link": function(e) {
                            return a.createElement("span", {
                                key: "helplink"
                            }, a.createElement(d.O, {
                                targetBlank: !0,
                                to: "https://help.twitch.tv/"
                            }, e))
                        }
                    }, "EsportsTicketPurchaseInfo") : Object(i.d)("Buying a Pass is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                        "x:link": function(e) {
                            return a.createElement("span", {
                                key: "helplink"
                            }, a.createElement(d.O, {
                                targetBlank: !0,
                                to: "https://help.twitch.tv/"
                            }, e))
                        }
                    }, "EsportsTicketPurchaseInfo"),
                    o = e.isGift ? "gift-pass-purchase-message-selector" : "pass-purchase-message-selector";
                return a.createElement(d._8, null, a.createElement(d.Q, {
                    type: d._49.H2,
                    bold: !0,
                    "data-test-selector": n
                }, t), a.createElement(d.Q, {
                    "data-test-selector": o
                }, r))
            },
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.channel && Object(s.a)(this.props.channel, this.props.sessionUser) ? a.createElement(p, {
                        isGift: this.props.isGift
                    }) : a.createElement(d.Q, {
                        type: d._49.H2,
                        bold: !0,
                        "data-test-selector": "sub-info-selector"
                    }, this.props.isGift ? Object(i.d)("Gift A Subscription", "PurchaseSubInfo") : Object(i.d)("Start Your Subscription", "PersonalSubPurchaseInfo"))
                }, t
            }(a.Component);
        var f, g, h, b, v = Object(u.b)(function(e) {
                return {
                    sessionUser: Object(l.c)(e)
                }
            })(m),
            y = (n("jJiV"), function() {
                return a.createElement(d._35, {
                    className: "checkout-error-brick",
                    background: d.n.Base,
                    borderTop: !0,
                    borderRight: !0,
                    borderBottom: !0,
                    borderRadius: d.t.Small,
                    display: d.R.Flex,
                    flexDirection: d.T.Column,
                    justifyContent: d._7.Center,
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, a.createElement(d.Q, {
                    bold: !0
                }, Object(i.d)("Payment not processed", "PaymentsErrorBrick")), a.createElement(d._8, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(d.Q, null, Object(i.d)("Something went wrong, and your payment could not be processed at this time. Please try again later.", "PaymentsErrorBrick"))))
            }),
            k = n("8m9s"),
            _ = n("3zLD"),
            w = n("yWCw"),
            E = n("Ejve"),
            x = n("ryON"),
            S = n.n(x),
            N = n("hmTn"),
            O = n.n(N),
            C = n("W59S"),
            D = n.n(C),
            T = n("MQyO"),
            P = n.n(T),
            A = n("ekbR"),
            F = n.n(A),
            M = n("p2Aq"),
            I = n.n(M),
            j = n("SgWI"),
            R = n.n(j),
            L = n("YkGD"),
            U = n.n(L),
            z = n("vH/s");
        ! function(e) {
            e.Failed = "failed", e.Pending = "pending", e.Success = "success"
        }(f || (f = {})),
        function(e) {
            e.Gifting = "gifting", e.Personal = "personal"
        }(g || (g = {})),
        function(e) {
            e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlyPayWithAmazon = "recurly_pay_with_amazon", e.ZuoraCreditCard = "zuora_credit_card", e.Xsolla = "xsolla"
        }(h || (h = {})),
        function(e) {
            e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error"
        }(b || (b = {}));
        var B = n("CSlQ"),
            Y = (n("1O5t"), function() {
                function e(e) {}
                e.prototype.bind = function(e) {}
            }(), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amazonScriptLoaded: null,
                        walletLoaded: null,
                        billingAgreementId: null,
                        awaitingResponse: !1
                    }, t.handleSubmit = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            awaitingResponse: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_flow: h.RecurlyPayWithAmazon,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: this.state.billingAgreementId,
                                                gateway: "amazon"
                                            }
                                        })];
                                    case 2:
                                        return e.sent(), this.forceUpdate(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    window.onAmazonLoginReady = function() {
                        window.amazon.Login.setClientId(e.props.clientID)
                    }, window.onAmazonPaymentsReady = function() {
                        e.props.latencyTracking.reportInteractive(), e.setState({
                            amazonScriptLoaded: !0
                        }), window.OffAmazonPayments.Button("recurly-amazon-pay__button", e.props.sellerID, {
                            type: "PwA",
                            color: "DarkGray",
                            useAmazonAddressBook: !1,
                            agreementType: "BillingAgreement",
                            authorization: function() {
                                window.amazon.Login.authorize({
                                    scope: "profile payments:widget payments:autopay_consent",
                                    popup: !0
                                }, function(e) {
                                    if (e.error) return "err"
                                })
                            },
                            onSignIn: function(t) {
                                e.setState({
                                    walletLoaded: !0,
                                    billingAgreementId: t.getAmazonBillingAgreementId()
                                }), e.initWidget()
                            }
                        })
                    };
                    var t = document.querySelector("#pwa-script");
                    t && document.body.removeChild(t);
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.id = "pwa-script", n.src = "https://static-na.payments-amazon.com/OffAmazonPayments/us" + (this.props.isProduction ? "" : "/sandbox") + "/js/Widgets.js?sellerId=" + this.props.sellerID, n.async = !0, document.body.appendChild(n)
                }, t.prototype.initWidget = function() {
                    var e = {
                        agreementType: "BillingAgreement",
                        amazonBillingAgreementId: this.state.billingAgreementId,
                        sellerId: this.props.sellerID,
                        design: {
                            designMode: "responsive"
                        },
                        onPaymentSelect: function() {
                            return !0
                        },
                        onError: function() {
                            return !1
                        }
                    };
                    new window.OffAmazonPayments.Widgets.Wallet(e).bind("recurly-amazon-pay__wallet")
                }, t.prototype.render = function() {
                    return this.state.amazonScriptLoaded ? a.createElement(d._35, {
                        background: d.n.Base,
                        border: !0,
                        className: "recurly-amazon-pay"
                    }, a.createElement(d._8, {
                        display: this.state.walletLoaded ? d.R.Hide : d.R.Flex,
                        justifyContent: d._7.Center,
                        margin: 5
                    }, a.createElement("div", {
                        id: "recurly-amazon-pay__button"
                    })), a.createElement(d._8, {
                        display: this.state.walletLoaded ? d.R.Flex : d.R.Hide,
                        flexDirection: d.T.Column,
                        alignItems: d.c.Center,
                        margin: {
                            top: 2
                        }
                    }, a.createElement("div", {
                        id: "recurly-amazon-pay__wallet",
                        className: "recurly-amazon-pay__wallet"
                    }), a.createElement(d._8, {
                        padding: {
                            top: 1
                        },
                        display: d.R.Flex,
                        justifyContent: d._7.Center
                    }, a.createElement(d.v, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? d.A.Loading : d.A.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))) : a.createElement(d._10, null)
                }, t = r.__decorate([Object(B.d)("RecurlyAmazonPay")], t)
            }(a.Component)),
            H = n("NXs7"),
            W = n("0nzt"),
            Q = n("l7ua"),
            G = (n("Ni7G"), {
                light: "#000",
                dark: "#fff"
            }),
            V = {
                light: "#a49fad",
                dark: "#898395"
            },
            Z = function() {
                return {
                    cvv: !1,
                    first_name: !1,
                    last_name: !1,
                    month: !1,
                    number: !1,
                    year: !1
                }
            },
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstName: "",
                        lastName: "",
                        recurlyReady: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        errorState: Z()
                    }, t.handleSubmit = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return r.__generator(this, function(t) {
                                return this.setState(function(e) {
                                    return {
                                        awaitingResponse: !0,
                                        errorState: r.__assign({}, e.errorState)
                                    }
                                }), window.recurly.token(this.form, function(t, n) {
                                    return r.__awaiter(e, void 0, void 0, function() {
                                        return r.__generator(this, function(e) {
                                            return t ? (this.handleValidationError(t), this.setState({
                                                awaitingResponse: !1
                                            })) : this.handleValidationSuccess(n), [2]
                                        })
                                    })
                                }), [2]
                            })
                        })
                    }, t.handleValidationSuccess = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_flow: h.RecurlyCreditCard,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: e.id,
                                                gateway: "cc"
                                            }
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState(function(e) {
                                            return {
                                                awaitingResponse: !1,
                                                errorState: r.__assign({}, e.errorState)
                                            }
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function(e) {
                        if (e.code === Q.a.Validation || e.code === Q.a.InvalidParameter) {
                            var n = Z();
                            e.fields && e.fields.forEach(function(e) {
                                n[e] = !0
                            }), t.setState({
                                errorMessage: Object(i.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"),
                                errorState: n
                            })
                        } else e.code && t.setState({
                            errorMessage: Object(i.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"),
                            errorState: Z()
                        })
                    }, t.handleFirstName = function(e) {
                        t.setState({
                            firstName: e.currentTarget.value
                        })
                    }, t.handleLastName = function(e) {
                        t.setState({
                            lastName: e.currentTarget.value
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.recurlyPollId = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.recurlyPollId), clearInterval(this.hostedFieldPollId)
                }, t.prototype.componentDidUpdate = function(e) {
                    window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs()
                }, t.prototype.render = function() {
                    var e = this;
                    return a.createElement(d._8, {
                        className: "recurly-credit-card",
                        fullWidth: !0
                    }, a.createElement(d._8, {
                        display: this.state.recurlyReady ? d.R.Hide : d.R.Block
                    }, a.createElement(d._10, {
                        fillContent: !0
                    })), a.createElement(d._8, {
                        display: this.state.recurlyReady ? d.R.Block : d.R.Hide
                    }, a.createElement("form", {
                        className: "recurly-form",
                        ref: function(t) {
                            return e.form = t
                        }
                    }, a.createElement(d._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        id: "recurly-name",
                        label: Object(i.d)("Name", "RecurlyCreditCard")
                    }, a.createElement("div", {
                        id: "recurly-name"
                    }, a.createElement(d.Y, {
                        gutterSize: d.Z.Medium
                    }, a.createElement(d.L, {
                        cols: 6
                    }, a.createElement(d._4, {
                        id: "recurly-first-name",
                        type: d._5.Text,
                        placeholder: Object(i.d)("First Name", "RecurlyCreditCard"),
                        value: this.state.firstName,
                        onChange: this.handleFirstName,
                        error: this.state.errorState.first_name
                    }), a.createElement("input", {
                        type: "hidden",
                        "data-recurly": "first_name",
                        value: this.state.firstName
                    })), a.createElement(d.L, {
                        cols: 6
                    }, a.createElement(d._4, {
                        id: "recurly-last-name",
                        type: d._5.Text,
                        placeholder: Object(i.d)("Last Name", "RecurlyCreditCard"),
                        value: this.state.lastName,
                        onChange: this.handleLastName,
                        error: this.state.errorState.last_name
                    }), a.createElement("input", {
                        type: "hidden",
                        "data-recurly": "last_name",
                        value: this.state.lastName
                    })))))), a.createElement(d._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        id: "recurly-credit-card",
                        label: Object(i.d)("Credit Card", "RecurlyCreditCard")
                    }, a.createElement("div", {
                        id: "recurly-credit-card"
                    }, a.createElement(d.Y, {
                        gutterSize: d.Z.Medium
                    }, a.createElement(d.L, {
                        cols: 8
                    }, a.createElement("div", {
                        id: "recurly-number",
                        "data-recurly": "number",
                        className: this.state.errorState.number ? "recurly-error" : ""
                    })), a.createElement(d.L, {
                        cols: 4
                    }, a.createElement("div", {
                        id: "recurly-cvv",
                        "data-recurly": "cvv",
                        className: this.state.errorState.cvv ? "recurly-error" : ""
                    })))))), a.createElement(d._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        id: "recurly-credit-card",
                        label: Object(i.d)("Expiration Date", "RecurlyCreditCard")
                    }, a.createElement("div", {
                        id: "recurly-credit-card"
                    }, a.createElement(d.Y, {
                        gutterSize: d.Z.Medium
                    }, a.createElement(d.L, {
                        cols: 6
                    }, a.createElement("div", {
                        id: "recurly-month",
                        "data-recurly": "month",
                        className: this.state.errorState.month ? "recurly-error" : ""
                    })), a.createElement(d.L, {
                        cols: 6
                    }, a.createElement("div", {
                        id: "recurly-year",
                        "data-recurly": "year",
                        className: this.state.errorState.year ? "recurly-error" : ""
                    })))))), a.createElement("input", {
                        type: "hidden",
                        name: "recurly-token",
                        "data-recurly": "token"
                    }), a.createElement(d._8, {
                        margin: {
                            top: 2
                        },
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        breakpointLarge: {
                            justifyContent: d._7.Start
                        }
                    }, a.createElement(d.v, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? d.A.Loading : d.A.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))))
                }, t.prototype.pollForHostedField = function() {
                    var e = this;
                    this.hostedFieldPollId = setInterval(function() {
                        document.querySelector(".recurly-hosted-field > iframe") && (e.setState({
                            recurlyReady: !0
                        }), clearInterval(e.hostedFieldPollId))
                    }, 500)
                }, t.prototype.setupConfigs = function() {
                    window.recurly.configure({
                        publicKey: this.props.publicKey,
                        fraud: {
                            kount: {
                                dataCollector: !0
                            }
                        },
                        required: ["cvv"],
                        fields: {
                            all: {
                                style: {
                                    height: "auto",
                                    fontSize: "12px",
                                    fontColor: G.light,
                                    placeholder: {
                                        color: V.light
                                    }
                                }
                            },
                            number: {
                                selector: "#recurly-number",
                                style: {
                                    placeholder: {
                                        content: Object(i.d)("Card Number", "RecurlyCreditCard")
                                    }
                                }
                            },
                            month: {
                                selector: "#recurly-month",
                                inputType: "select",
                                style: {
                                    placeholder: {
                                        content: Object(i.d)("Select Month", "RecurlyCreditCard")
                                    }
                                }
                            },
                            year: {
                                selector: "#recurly-year",
                                inputType: "select",
                                style: {
                                    placeholder: {
                                        content: Object(i.d)("Select Year", "RecurlyCreditCard")
                                    }
                                }
                            },
                            cvv: {
                                selector: "#recurly-cvv",
                                style: {
                                    placeholder: {
                                        content: Object(i.d)("CVV", "RecurlyCreditCard")
                                    }
                                }
                            }
                        }
                    })
                }, t = r.__decorate([Object(B.d)("RecurlyCreditCard")], t)
            }(a.Component);
        var q, X = Object(u.b)(function(e) {
                return {
                    darkModeEnabled: Object(W.a)(e) === H.a.Dark
                }
            })(K),
            J = (n("gDGR"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        paypalConfigured: !1,
                        awaitingResponse: !1,
                        hasError: !1
                    }, t.handleValidationSuccess = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_flow: h.RecurlyPaypal,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: e.id,
                                                gateway: "paypal"
                                            }
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function() {
                        t.setState({
                            hasError: !0
                        })
                    }, t.handleClick = function() {
                        t.setState({
                            awaitingResponse: !0,
                            hasError: !1
                        }), t.paypalInstance.start()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.pollForRecurly = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                            paypalConfigured: !0
                        }))
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.pollForRecurly)
                }, t.prototype.render = function() {
                    return this.state.paypalConfigured ? a.createElement(d._35, {
                        className: "recurly-paypal",
                        background: d.n.Base,
                        border: !0,
                        display: d.R.Flex,
                        justifyContent: d._7.Center
                    }, a.createElement(d._8, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(d.v, {
                        "data-a-target": "recurly-paypal__button",
                        onClick: this.handleClick,
                        state: this.state.awaitingResponse ? d.A.Loading : d.A.Default,
                        disabled: this.state.awaitingResponse
                    }, "Checkout With PayPal"))) : a.createElement(d._8, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(d._10, null))
                }, t.prototype.setupConfigs = function() {
                    var e = this;
                    window.recurly.configure(this.props.publicKey);
                    var t = window.recurly.PayPal({
                        braintree: {
                            clientAuthorization: this.props.braintreeClientAuthorization
                        }
                    });
                    t.on("token", function(t) {
                        e.handleValidationSuccess(t)
                    }), t.on("error", function() {
                        e.handleValidationError(), e.setState({
                            awaitingResponse: !1
                        })
                    }), t.on("cancel", function() {
                        e.setState({
                            awaitingResponse: !1
                        })
                    }), this.paypalInstance = t
                }, t = r.__decorate([Object(B.d)("RecurlyPaypal")], t)
            }(a.Component)),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        xsollaLoaded: !1
                    }, t.handleXsollaEvent = function(e) {
                        if ((!e.origin || e.origin.includes("xsolla")) && e.data) try {
                            var n = JSON.parse(e.data);
                            if (n.command && "status" === n.command)
                                if (n.data && n.data.paymentInfo) switch (n.data.paymentInfo.status) {
                                    case "done":
                                        t.props.trackPaymentFormInteraction({
                                            paymentFlow: h.Xsolla,
                                            action: b.CompletePurchaseClick,
                                            actionDetail: f.Pending
                                        }), t.props.trackPaymentFormInteraction({
                                            paymentFlow: h.Xsolla,
                                            action: b.CompletePurchaseClick,
                                            actionDetail: f.Success
                                        });
                                        break;
                                    case "troubled":
                                        t.props.trackPaymentFormInteraction({
                                            paymentFlow: h.Xsolla,
                                            action: b.CompletePurchaseClick,
                                            actionDetail: f.Pending
                                        }), t.props.trackPaymentFormInteraction({
                                            paymentFlow: h.Xsolla,
                                            action: b.CompletePurchaseClick,
                                            actionDetail: f.Failed
                                        })
                                }
                        } catch (e) {}
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.iframe,
                        t = this;
                    e && (e.addEventListener("load", function() {
                        t.props.latencyTracking.reportInteractive(), t.setState({
                            xsollaLoaded: !0
                        })
                    }), window.addEventListener("message", t.handleXsollaEvent))
                }, t.prototype.render = function() {
                    var e = this;
                    return a.createElement(d._8, {
                        fullWidth: !0
                    }, !this.state.xsollaLoaded && a.createElement(d._10, {
                        fillContent: !0
                    }), a.createElement(d._8, {
                        fullWidth: !0,
                        display: this.state.xsollaLoaded ? d.R.Inline : d.R.Hide
                    }, a.createElement("iframe", {
                        ref: function(t) {
                            return e.iframe = t
                        },
                        id: "xsolla",
                        src: this.props.iframeURL,
                        width: "100%",
                        height: "650px"
                    })))
                }, t = r.__decorate([Object(B.d)("XsollaMoreMethods")], t)
            }(a.Component),
            ee = n("HM6l"),
            te = n("Miv9");
        n("1hla");
        ! function(e) {
            e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
        }(q || (q = {}));
        var ne = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    zuoraConfigured: !1,
                    awaitingResponse: !1,
                    errorMessage: "",
                    nullValueErrors: [],
                    sessionId: Object(ee.b)()
                }, t.handleSubmit = function() {
                    t.setState({
                        awaitingResponse: !0,
                        errorMessage: "",
                        nullValueErrors: []
                    }), window.Z.submit()
                }, t.renderErrorMessage = function() {
                    if (t.state.nullValueErrors.length) {
                        var e = t.state.nullValueErrors.map(function(e, t) {
                            return a.createElement(d._8, {
                                key: t,
                                margin: {
                                    left: 2
                                }
                            }, a.createElement(d.Q, {
                                color: d.K.Error
                            }, "• ", e))
                        });
                        return a.createElement("div", null, a.createElement(d._8, {
                            margin: {
                                top: 1,
                                left: 1,
                                bottom: .5
                            }
                        }, a.createElement(d.Q, {
                            color: d.K.Error
                        }, Object(i.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                    }
                    if (t.state.errorMessage) return a.createElement(d._8, {
                        margin: {
                            top: 1,
                            left: 1
                        }
                    }, a.createElement(d.Q, {
                        color: d.K.Error
                    }, t.state.errorMessage))
                }, t.successCallback = function(e) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!e.success) return [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                        payment_flow: h.ZuoraCreditCard,
                                        payment_provider: "zuora",
                                        payment_info: {
                                            token: e.refId,
                                            gateway: "cc"
                                        }
                                    })];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return t.sent(), this.setState({
                                        awaitingResponse: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.errorCallback = function(e, n, r) {
                    if (t.setState({
                            awaitingResponse: !1
                        }), "unknown" === n) return t.parseGatewayErrorMessage(r);
                    window.Z.sendErrorMessageToHpm(e, r)
                }, t.parseGatewayErrorMessage = function(e) {
                    return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                        errorMessage: Object(i.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                    }) : t.setState({
                        errorMessage: Object(i.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                    })
                }, t.parseNullValueErrorMessage = function(e) {
                    var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                        r = {
                            creditCardHolderName: Object(i.d)("Name on Card", "ZuoraCreditCard"),
                            creditCardAddress1: Object(i.d)("Billing Address", "ZuoraCreditCard"),
                            creditCardCity: Object(i.d)("City", "ZuoraCreditCard"),
                            creditCardPostalCode: Object(i.d)("Zip Code", "ZuoraCreditCard")
                        },
                        a = n.map(function(e) {
                            var t = r[e];
                            return t || ""
                        }).filter(function(e) {
                            return "" !== e
                        });
                    t.setState({
                        nullValueErrors: a
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this;
                if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                else {
                    var t = document.createElement("script");
                    t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                        e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                    }
                }
            }, t.prototype.render = function() {
                return a.createElement("div", null, !this.state.zuoraConfigured && a.createElement(d._8, {
                    padding: {
                        y: 5
                    }
                }, a.createElement(d._10, {
                    fillContent: !0
                })), a.createElement(d._8, {
                    display: this.state.zuoraConfigured ? d.R.Block : d.R.Hide,
                    "data-test-selector": q.ZUORA_PARENT_LAYOUT
                }, this.renderErrorMessage(), a.createElement("div", {
                    id: "zuora_payment",
                    className: this.state.awaitingResponse ? "zuora-disabled" : ""
                }), a.createElement(d._8, {
                    margin: {
                        top: 2
                    },
                    display: d.R.Flex,
                    justifyContent: d._7.Center,
                    breakpointLarge: {
                        justifyContent: d._7.Start
                    }
                }, a.createElement(d.v, {
                    onClick: this.handleSubmit,
                    state: this.state.awaitingResponse ? d.A.Loading : d.A.Default,
                    disabled: this.state.awaitingResponse,
                    "data-test-selector": q.UPDATE_PAYMENT_BUTTON
                }, this.props.submitButtonCopy)), a.createElement(te.a, {
                    isProduction: this.props.isProductionConfig,
                    sessionId: this.state.sessionId
                })))
            }, t.prototype.initZuoraIFrame = function() {
                var e = this,
                    t = {
                        id: this.props.hostedPageID,
                        url: this.props.hostedPageURL,
                        style: "inline",
                        submitEnabled: "true",
                        field_accountId: this.props.externalAccountID,
                        tenantId: this.props.tenantID,
                        token: this.props.token,
                        key: this.props.publicKey,
                        signature: this.props.signature,
                        locale: this.formattedLocale
                    };
                window.Z.renderWithErrorHandler(t, {
                    creditCardCountry: "USA"
                }, this.successCallback, this.errorCallback);
                var n = document.getElementById("z_hppm_iframe");
                n && n.addEventListener("load", function() {
                    e.setState({
                        zuoraConfigured: !0
                    })
                })
            }, Object.defineProperty(t.prototype, "formattedLocale", {
                get: function() {
                    var e = this.props.languageCode || "en";
                    if (e.includes("-")) {
                        var t = e.split("-");
                        e = t[0] + "_" + t[1].toUpperCase()
                    }
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), t = r.__decorate([Object(B.d)("ZuoraCreditCard")], t)
        }(a.Component);
        var re = Object(u.b)(function(e) {
                return {
                    languageCode: e.session.languageCode
                }
            })(ne),
            ae = {
                CreditCard: function() {
                    return Object(i.d)("Credit Card", "TicketDescription")
                },
                Paypal: function() {
                    return Object(i.d)("Paypal", "TicketDescription")
                },
                AmazonPay: function() {
                    return Object(i.d)("Amazon Pay", "TicketDescription")
                },
                MoreMethods: function() {
                    return Object(i.d)("More Methods", "TicketDescription")
                }
            },
            ie = function(e) {
                function t() {
                    var t, n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        selectedProvider: h.ZuoraCreditCard,
                        subsCheckoutVariantAssignment: "zuora",
                        enabledProviders: (t = {}, t[h.ZuoraCreditCard] = !1, t[h.RecurlyCreditCard] = !1, t[h.RecurlyPaypal] = !1, t[h.RecurlyPayWithAmazon] = !1, t[h.Xsolla] = !1, t)
                    }, n.submitButtonCopy = Object(i.d)("Complete Purchase", "PaymentMethods"), n.paymentProviders = [{
                        name: h.ZuoraCreditCard,
                        button: {
                            label: ae.CreditCard(),
                            src: D.a,
                            alt: ae.CreditCard(),
                            srcSet: {
                                "1x": D.a,
                                "2x": P.a
                            }
                        },
                        component: a.createElement(re, r.__assign({
                            submitButtonCopy: n.submitButtonCopy,
                            onSuccess: n.props.onSuccess,
                            isProductionConfig: n.props.configs.recurly.payWithAmazonConfigs.isProduction
                        }, n.props.configs.zuora))
                    }, {
                        name: h.RecurlyCreditCard,
                        button: {
                            label: ae.CreditCard(),
                            src: D.a,
                            alt: ae.CreditCard(),
                            srcSet: {
                                "1x": D.a,
                                "2x": P.a
                            }
                        },
                        component: a.createElement(X, {
                            publicKey: n.props.configs.recurly.publicKey,
                            submitButtonCopy: n.submitButtonCopy,
                            onSuccess: n.props.onSuccess
                        })
                    }, {
                        name: h.RecurlyPaypal,
                        button: {
                            label: ae.Paypal(),
                            src: R.a,
                            alt: ae.Paypal(),
                            srcSet: {
                                "1x": R.a,
                                "2x": U.a
                            }
                        },
                        component: a.createElement(J, {
                            publicKey: n.props.configs.recurly.publicKey,
                            braintreeClientAuthorization: n.props.configs.recurly.braintreeClientAuthorization,
                            submitButtonCopy: n.submitButtonCopy,
                            onSuccess: n.props.onSuccess
                        })
                    }, {
                        name: h.RecurlyPayWithAmazon,
                        button: {
                            label: ae.AmazonPay(),
                            src: S.a,
                            alt: ae.AmazonPay(),
                            srcSet: {
                                "1x": S.a,
                                "2x": O.a
                            }
                        },
                        component: a.createElement(Y, r.__assign({
                            submitButtonCopy: n.submitButtonCopy,
                            onSuccess: n.props.onSuccess
                        }, n.props.configs.recurly.payWithAmazonConfigs))
                    }, {
                        name: h.Xsolla,
                        button: {
                            label: ae.MoreMethods(),
                            src: F.a,
                            alt: ae.MoreMethods(),
                            srcSet: {
                                "1x": F.a,
                                "2x": I.a
                            }
                        },
                        component: a.createElement($, r.__assign({
                            trackPaymentFormInteraction: n.props.trackPaymentFormInteraction
                        }, n.props.configs.xsolla))
                    }], n.renderSelector = function(e) {
                        if (n.state.enabledProviders[e.name]) return a.createElement(d.L, {
                            key: e.name,
                            cols: {
                                default: 6,
                                sm: 3
                            }
                        }, a.createElement(d._8, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(d._0, {
                            label: e.button.label,
                            type: d._1.Radio,
                            src: e.button.src,
                            alt: e.button.alt,
                            srcSet: e.button.srcSet,
                            value: e.name,
                            onChange: n.setProviderFactory(e.name),
                            checked: n.state.selectedProvider === e.name
                        })))
                    }, n.renderProvider = function(e) {
                        return n.state.enabledProviders[e.name] ? a.createElement(d._8, {
                            key: e.name,
                            display: n.state.selectedProvider === e.name ? d.R.Inline : d.R.Hide
                        }, e.component) : a.createElement(a.Fragment, {
                            key: e.name
                        })
                    }, n.setProviderFactory = function(e) {
                        return function() {
                            n.props.trackPaymentFormInteraction({
                                paymentFlow: e,
                                action: b.RadioButtonClick,
                                actionDetail: e
                            }), n.setState({
                                selectedProvider: e
                            })
                        }
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = i.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_VARIANT") || this.state.subsCheckoutVariantAssignment;
                    "yes" === i.o.experiments.getAssignment("TWILIGHT_PAY__SAVED_PAYMENT_METHODS") && (e = "recurly"), "owlallaccess2018" === this.props.productName && (e = "zuora");
                    var t = ((n = {})[h.ZuoraCreditCard] = "zuora" === e, n[h.RecurlyCreditCard] = "recurly" === e, n[h.RecurlyPaypal] = !("owlallaccess2018" === this.props.productName), n[h.RecurlyPayWithAmazon] = !("owlallaccess2018" === this.props.productName), n[h.Xsolla] = !0, n);
                    if (this.setState({
                            selectedProvider: "recurly" === e ? h.RecurlyCreditCard : h.ZuoraCreditCard,
                            subsCheckoutVariantAssignment: e,
                            enabledProviders: t
                        }), !document.querySelector("#recurly-script")) {
                        var n, r = document.createElement("script");
                        r.src = "https://js.recurly.com/v4/recurly.js", r.async = !0, r.id = "recurly-script", document.body.appendChild(r)
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if ("US" !== this.props.countryCode) {
                        this.state.selectedProvider !== h.Xsolla && this.setState({
                            selectedProvider: h.Xsolla
                        });
                        var e = this.paymentProviders.find(function(e) {
                            return e.name === h.Xsolla
                        });
                        return e && this.renderProvider(e)
                    }
                    return a.createElement(d._8, null, a.createElement(d.Y, {
                        gutterSize: d.Z.Small
                    }, this.paymentProviders.map(this.renderSelector)), a.createElement(d._8, null, this.paymentProviders.map(this.renderProvider)))
                }, t = r.__decorate([Object(B.d)("NewPaymentMethods")], t)
            }(a.Component),
            oe = n("wuJz"),
            se = n("V7A9"),
            ce = n("zskx"),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        awaitingResponse: !1
                    }, t.isPaymentMethodExpired = function(e) {
                        var n = t.zeroIndexedMonth(e),
                            r = e.expirationYear;
                        if (void 0 === n || !r) return !1;
                        var a = Object(oe.startOfMonth)(new Date),
                            i = new Date(r, n, 1);
                        return !!Object(oe.isBefore)(i, a)
                    }, t.zeroIndexedMonth = function(e) {
                        if (e.expirationMonth) return e.expirationMonth - 1
                    }, t.handleSubmit = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        switch (this.setState({
                                            awaitingResponse: !0
                                        }), this.props.savedPaymentMethods[0].paymentType) {
                                            case ce.a.AmazonPay:
                                                e = h.RecurlyPayWithAmazon, t = "amazon";
                                                break;
                                            case ce.a.Paypal:
                                                e = h.RecurlyPaypal, t = "paypal";
                                                break;
                                            default:
                                                e = h.RecurlyCreditCard, t = "cc"
                                        }
                                        return [4, this.props.handleCompletePurchase({
                                            payment_flow: e,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: "",
                                                gateway: t
                                            },
                                            savedPayment: !0
                                        })];
                                    case 1:
                                        return n.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.savedPaymentMethods[0],
                        t = this.isPaymentMethodExpired(e);
                    return a.createElement(a.Fragment, null, a.createElement(d._35, {
                        border: !0,
                        borderRadius: d.t.Small,
                        padding: 2
                    }, a.createElement(se.a, {
                        paymentMethod: e
                    })), a.createElement(d._8, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(d.v, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? d.A.Loading : d.A.Default,
                        disabled: this.state.awaitingResponse || t
                    }, Object(i.d)("Complete Purchase", "SavedMethods"))))
                }, t
            }(a.Component),
            le = n("zk5E"),
            de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        useSavedPaymentMethod: !0
                    }, t.toggleChangePaymentMethods = function() {
                        t.setState(function(e) {
                            return {
                                useSavedPaymentMethod: !e.useSavedPaymentMethod
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.currentUser ? this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature ? a.createElement(a.Fragment, null, this.renderWalletHeader(), a.createElement(ue, {
                        handleCompletePurchase: this.props.handleCompletePurchase,
                        savedPaymentMethods: this.savedPaymentMethods
                    })) : a.createElement(a.Fragment, null, this.renderWalletHeader(), a.createElement(ie, {
                        onSuccess: this.props.handleCompletePurchase,
                        productName: this.props.productName,
                        trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                        configs: this.props.configs,
                        countryCode: this.props.countryCode
                    })) : this.props.data.loading ? a.createElement(d._10, {
                        fillContent: !0
                    }) : this.props.data.error ? a.createElement(w.a, {
                        message: Object(i.d)("Sorry, something went wrong.", "Wallet")
                    }) : null
                }, t.prototype.renderWalletHeader = function() {
                    return a.createElement(d._8, {
                        display: d.R.Flex,
                        justifyContent: d._7.Between,
                        margin: {
                            y: 2
                        }
                    }, this.renderWalletTitle(), a.createElement(d._8, {
                        padding: {
                            left: 1
                        },
                        display: d.R.Flex,
                        alignItems: d.c.End
                    }, this.renderPaymentMethodToggle()))
                }, t.prototype.renderWalletTitle = function() {
                    return this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature ? a.createElement(d.Q, {
                        type: d._49.H4,
                        bold: !0
                    }, Object(i.d)("Saved Payment Method", "Wallet")) : a.createElement(d.Q, {
                        type: d._49.H4,
                        bold: !0
                    }, Object(i.d)("Choose Your Payment Method", "Wallet"))
                }, t.prototype.renderPaymentMethodToggle = function() {
                    if (this.showSavedPaymentsFeature) return this.state.useSavedPaymentMethod ? a.createElement(d.O, {
                        onClick: this.toggleChangePaymentMethods
                    }, Object(i.d)("Change Payment Method", "Wallet")) : a.createElement(d._8, {
                        display: d.R.Flex
                    }, a.createElement(d._24, {
                        asset: d._25.AngleLeft,
                        width: 10,
                        height: 10,
                        type: d._26.Brand
                    }), a.createElement(d._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(d.O, {
                        onClick: this.toggleChangePaymentMethods
                    }, Object(i.d)("Use Existing Payment Method", "Wallet"))))
                }, Object.defineProperty(t.prototype, "showForExperiment", {
                    get: function() {
                        return "yes" === i.o.experiments.getAssignment("TWILIGHT_PAY__SAVED_PAYMENT_METHODS") || i.a.buildType !== E.a.Production
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "showSavedPaymentsFeature", {
                    get: function() {
                        return "owlallaccess2018" !== this.props.productName && (!!this.savedPaymentMethods.length && this.showForExperiment)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "savedPaymentMethods", {
                    get: function() {
                        return (this.props.data.currentUser.paymentMethods || []).filter(function(e) {
                            return "recurly" === e.provider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            pe = Object(_.compose)(Object(o.a)(le, {
                options: function() {
                    return {
                        fetchPolicy: "network-only"
                    }
                }
            }))(de),
            me = n("Heyg"),
            fe = function(e) {
                var t;
                return t = e.canGift ? a.createElement(d.Q, {
                    "data-test-selector": "gift-pass-purchase-info-selector"
                }, Object(i.d)("You are buying a {price} Overwatch League All-Access Pass for {recipientName}.", {
                    price: e.price,
                    recipientName: a.createElement(d.Q, {
                        type: d._49.Span,
                        bold: !0
                    }, e.recipientDisplayName || "")
                }, "EsportsGiftSubPurchaseInfo")) : a.createElement(d.Q, {
                    color: d.K.Error,
                    "data-test-selector": "pass-purchase-info-selector"
                }, Object(i.d)("Sorry, an All-Access Pass to this channel is not available for {recipientName}", {
                    recipientName: a.createElement(d.Q, {
                        bold: !0
                    }, e.recipientDisplayName || "")
                }, "EsportsGiftSubPurchaseInfo")), a.createElement(d._35, {
                    background: d.n.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, t)
            },
            ge = function(e) {
                return e.isEsportChannel ? a.createElement(fe, {
                    canGift: e.canGift,
                    recipientDisplayName: e.recipientDisplayName,
                    price: e.price
                }) : (t = e.canGift ? a.createElement(d.Q, {
                    "data-test-selector": "gift-sub-purchase-info-selector"
                }, Object(i.d)("You are buying a single month {price} Gift Subscription for {recipientName}.", {
                    price: e.price,
                    recipientName: a.createElement(d.Q, {
                        type: d._49.Span,
                        bold: !0
                    }, e.recipientDisplayName || "")
                }, "PurchaseSubInfo")) : a.createElement(d.Q, {
                    color: d.K.Error,
                    "data-test-selector": "purchase-info-selector"
                }, Object(i.d)("Sorry, a Gift Subscription to this channel is not available for {recipientName}", {
                    recipientName: a.createElement(d.Q, {
                        bold: !0
                    }, e.recipientDisplayName || "")
                }, "PurchaseSubInfo")), a.createElement(d._35, {
                    background: d.n.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, t));
                var t
            },
            he = n("CIox"),
            be = function(e) {
                return a.createElement(d.Q, null, Object(i.d)("You have purchased a {price} Overwatch League All-Access Pass for <x:strong>{recipientDisplayName}</x:strong>", {
                    price: Object(i.e)(e.invoicePrice / 100, {
                        style: "currency",
                        currency: e.invoiceCurrency
                    }),
                    recipientDisplayName: e.recipientDisplayName || "",
                    "x:strong": function(e) {
                        return a.createElement(d.Q, {
                            key: "recipient-display-name",
                            type: d._49.Span,
                            bold: !0
                        }, e)
                    }
                }, "GiftSubReceipt"))
            },
            ve = (n("pOYM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._8, {
                        className: "gift-sub-receipt__container",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, a.createElement(d._8, null, a.createElement(d.Q, {
                        type: d._49.H2,
                        bold: !0
                    }, Object(i.d)("Purchase Successful", "GiftSubReceipt"))), a.createElement(d._8, {
                        padding: {
                            y: 3
                        }
                    }, this.getGiftSubReceiptInfo()), a.createElement(d._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(d._8, {
                        className: "gift-sub-receipt__label",
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, {
                        bold: !0
                    }, Object(i.d)("Gift Status", "GiftSubReceipt"))), a.createElement(d._8, {
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, null, Object(i.d)("Active", "GiftSubReceipt")))), a.createElement(d._35, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(d._8, {
                        className: "gift-sub-receipt__label",
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, {
                        bold: !0
                    }, Object(i.d)("Your Invoice Total", "GiftSubReceipt"))), a.createElement(d._8, {
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, null, Object(i.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), a.createElement(d._8, {
                        margin: {
                            y: 3
                        }
                    }, a.createElement(d.v, {
                        onClick: this.goBackToChannel
                    }, Object(i.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "GiftSubReceipt"))))
                }, t.prototype.getGiftSubReceiptInfo = function() {
                    return this.props.isEsportChannel ? a.createElement(be, {
                        recipientDisplayName: this.props.recipientDisplayName,
                        invoicePrice: this.props.invoicePrice,
                        invoiceCurrency: this.props.invoiceCurrency
                    }) : a.createElement(d.Q, {
                        "data-test-selector": "gift-sub-receipt-info-selector"
                    }, Object(i.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                        price: Object(i.e)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        }),
                        recipientDisplayName: this.props.recipientDisplayName || "",
                        "x:strong": function(e) {
                            return a.createElement(d.Q, {
                                key: "recipient-display-name",
                                type: d._49.Span,
                                bold: !0
                            }, e)
                        }
                    }, "GiftSubReceipt"))
                }, t
            }(a.PureComponent)),
            ye = Object(he.f)(ve),
            ke = n("j6Ui"),
            _e = function(e) {
                return a.createElement(d._35, {
                    background: d.n.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, a.createElement(d._8, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(d.Q, null, Object(i.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                    newPrice: Object(i.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradePrimeWarning"))), a.createElement(d._8, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(d.Q, null, Object(i.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30-days after you last used your free subscription.", "UpgradePrimeWarning"))), a.createElement(d.Q, null, Object(i.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
            },
            we = function(e) {
                return a.createElement(d._35, {
                    background: d.n.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, a.createElement(d._8, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(d.Q, null, Object(i.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                    originalPrice: Object(i.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    }),
                    newPrice: Object(i.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradeTierWarning"))), a.createElement(d._8, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(d.Q, null, Object(i.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                    originalPrice: Object(i.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    })
                }, "UpgradeTierWarning"))), a.createElement(d.Q, null, Object(i.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
            },
            Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOneMonthFree = function() {
                        var e = new Date;
                        null !== t.props.endsAt && (e = Object(ke.c)(t.props.endsAt));
                        var n = new Date(e);
                        return n.setMonth(e.getMonth() + 1), a.createElement(d._35, {
                            background: d.n.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(d.Q, null, Object(i.d)("Your next month is on us. You will be charged when your free month ends on <x:strong>{date}</x:strong>.", {
                            date: Object(i.c)(n, "short"),
                            "x:strong": function(e) {
                                return a.createElement(d.Q, {
                                    type: d._49.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PersonalSubPurchaseInfo")))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._8, null, this.props.isOneMonthFreeEligible && this.renderOneMonthFree(), this.tierUpgrade && a.createElement(we, {
                        originalPrice: this.originalPrice,
                        originalCurrency: "USD",
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.primeUpgrade && a.createElement(_e, {
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.props.hasGift && this.props.endsAt && a.createElement(d._35, {
                        background: d.n.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, a.createElement(d.Q, null, Object(i.d)("You will be charged when your Gift Subscription ends on <x:strong>{date}</x:strong>.", {
                        date: Object(i.c)(Object(ke.c)(this.props.endsAt), "short"),
                        "x:strong": function(e) {
                            return a.createElement(d.Q, {
                                type: d._49.Span,
                                bold: !0
                            }, e)
                        }
                    }, "PersonalSubPurchaseInfo"))))
                }, Object.defineProperty(t.prototype, "tierUpgrade", {
                    get: function() {
                        return !(!this.props.purchase || this.props.purchase.details && (!this.props.purchase.details || "inactive" !== this.props.purchase.details.state) || !this.props.purchase.compatiblePurchases) && !!this.props.purchase.compatiblePurchases.find(function(e) {
                            return "prime" !== e.paymentProvider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "primeUpgrade", {
                    get: function() {
                        return !(!this.props.purchase || this.props.purchase.details && (!this.props.purchase.details || "inactive" !== this.props.purchase.details.state) || !this.props.purchase.compatiblePurchases) && !!this.props.purchase.compatiblePurchases.find(function(e) {
                            return "prime" === e.paymentProvider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "originalPrice", {
                    get: function() {
                        return this.props.purchase.compatiblePurchases ? this.props.purchase.compatiblePurchases[0].price : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "newPrice", {
                    get: function() {
                        return this.props.price && this.props.price.includes("$") ? 100 * +this.props.price.replace("$", "") : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            xe = (n("McJK"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), "turbo" === t.props.productOwnerLogin ? t.props.history.push("/settings/turbo") : t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.giftSubEndsAt ? Object(i.d)("Your paid subscription will begin on <x:strong>{endsAt}</x:strong> after your Gift Subscription ends", {
                        "x:strong": function(e) {
                            return a.createElement(d.Q, {
                                type: d._49.Span,
                                bold: !0
                            }, e)
                        },
                        endsAt: Object(i.c)(new Date(this.props.giftSubEndsAt), "long")
                    }, "PersonalSubReceipt") : Object(i.d)("Active", "PersonalSubReceipt"), a.createElement(d._8, {
                        className: "personal-sub-receipt",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, a.createElement(d._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 3
                        }
                    }, a.createElement(d.Q, {
                        type: d._49.H2,
                        bold: !0
                    }, Object(i.d)("Your Subscription", "PersonalSubReceipt"))), a.createElement(d._35, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(d._8, {
                        className: "personal-sub-receipt__label",
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, {
                        bold: !0
                    }, Object(i.d)("Subscription for", "PersonalSubReceipt"))), a.createElement(d._8, {
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, null, this.props.purchaserDisplayName))), a.createElement(d._35, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(d._8, {
                        className: "personal-sub-receipt__label",
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, {
                        bold: !0
                    }, Object(i.d)("Status", "PersonalSubReceipt"))), a.createElement(d._8, {
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, null, e))), a.createElement(d._35, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(d._8, {
                        className: "personal-sub-receipt__label",
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, {
                        bold: !0
                    }, Object(i.d)("Invoice Total", "PersonalSubReceipt"))), a.createElement(d._8, {
                        display: d.R.InlineBlock
                    }, a.createElement(d.Q, null, Object(i.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), a.createElement(d._8, {
                        margin: {
                            y: 3
                        }
                    }, a.createElement(d.v, {
                        onClick: this.goBackToChannel
                    }, Object(i.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "PersonalSubReceipt"))))
                }, t
            }(a.Component)),
            Se = Object(he.f)(xe);
        n("gKy9");
        n.d(t, "b", function() {
            return Ne
        }), n.d(t, "a", function() {
            return Oe
        });
        var Ne;
        ! function(e) {
            e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
        }(Ne || (Ne = {}));
        var Oe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    giftSubPurchased: !1,
                    showErrors: !1
                }, t.trackPaymentFormInteraction = function(e) {
                    var n, r, a = {
                        channelLogin: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.login,
                        channelId: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.id,
                        paymentType: t.props.isGift ? g.Gifting : g.Personal,
                        productId: t.props.data.subscriptionProduct.id,
                        ticketPrice: t.props.data.subscriptionProduct.price,
                        paymentFlow: e.paymentFlow,
                        action: e.action,
                        actionDetail: e.actionDetail || "",
                        savedPayment: e.savedPayment || !1
                    };
                    r = {
                        channel: (n = a).channelLogin,
                        channel_id: n.channelId,
                        payment_type: n.paymentType,
                        payment_flow: n.paymentFlow,
                        action: n.action,
                        action_detail: n.actionDetail,
                        product_id: n.productId,
                        ticket_price: n.ticketPrice.replace(/[\$\.]/g, ""),
                        saved_payment: n.savedPayment
                    }, i.n.track(z.SpadeEventType.PaymentFormInteraction, r)
                }, t.completePurchase = function(e) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t, n, a;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        payment_provider: e.payment_provider,
                                        payment_info: r.__assign({}, e.payment_info),
                                        is_gift: this.props.isGift,
                                        recipient_id: this.props.recipientID
                                    }, this.setState({
                                        showErrors: !1
                                    }), n = "/kraken/checkout/users/" + this.props.data.currentUser.id + "/products/" + this.props.productName + "/purchase/complete", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 6, , 7]), [4, c.a.post(n, {
                                        body: t
                                    }, {
                                        version: 5
                                    })];
                                case 2:
                                    return (a = i.sent()).error ? (this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: b.CompletePurchaseClick,
                                        actionDetail: f.Failed,
                                        savedPayment: e.savedPayment
                                    }), this.setState({
                                        showErrors: !0
                                    }), [2]) : (this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: b.CompletePurchaseClick,
                                        actionDetail: f.Success,
                                        savedPayment: e.savedPayment
                                    }), this.props.isGift ? (this.setState({
                                        giftSubPurchased: !0,
                                        giftPurchaseInfo: a.body
                                    }), [3, 5]) : [3, 3]);
                                case 3:
                                    return [4, this.props.data.refetch()];
                                case 4:
                                    i.sent(), i.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return i.sent(), this.setState({
                                        showErrors: !0
                                    }), this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: b.CompletePurchaseClick,
                                        actionDetail: f.Failed,
                                        savedPayment: e.savedPayment
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.renderPurchaseInfo = function() {
                    if (!t.purchased) {
                        if (t.props.isGift && t.props.data.subscriptionProduct.owner) {
                            var e = t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.id;
                            return a.createElement(ge, {
                                canGift: t.props.data.subscriptionProduct.self.checkoutConfigs.canGift,
                                recipientDisplayName: t.props.recipientDisplayName,
                                price: t.props.data.subscriptionProduct.price,
                                isEsportChannel: Object(s.a)(e, t.props.sessionUser)
                            })
                        }
                        var n = t.props.data.subscriptionProduct.self.benefit;
                        return a.createElement(Ee, {
                            price: t.props.data.subscriptionProduct.price,
                            hasGift: n && n.gift.isGift,
                            purchase: t.props.data.subscriptionProduct.self.purchase,
                            isOneMonthFreeEligible: t.props.data.subscriptionProduct.self.checkoutConfigs.isOneMonthFreeEligible,
                            endsAt: n && n.endsAt
                        })
                    }
                }, t.renderReceipt = function() {
                    var e = t.props.data.subscriptionProduct.self.benefit,
                        n = t.props.data.subscriptionProduct.self.purchase.details;
                    if (t.props.data.subscriptionProduct.owner && t.state.giftSubPurchased && t.state.giftPurchaseInfo) {
                        var r = t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.id,
                            i = Object(s.a)(r, t.props.sessionUser);
                        return a.createElement(ye, {
                            recipientDisplayName: t.props.recipientDisplayName,
                            productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                            productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                            invoicePrice: t.state.giftPurchaseInfo.invoice_total.price,
                            invoiceCurrency: "USD",
                            isEsportChannel: i
                        })
                    }
                    if (n && t.purchased) {
                        if (t.props.data.subscriptionProduct.owner) return a.createElement(Se, {
                            purchaserDisplayName: t.props.data.currentUser.displayName,
                            productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                            productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                            giftSubEndsAt: e && (e.gift.isGift || null) && e.endsAt,
                            invoicePrice: n.price,
                            invoiceCurrency: "USD"
                        });
                        if ("turbo" === t.props.productName) return a.createElement(Se, {
                            purchaserDisplayName: t.props.data.currentUser.displayName,
                            productOwnerDisplayName: "turbo",
                            productOwnerLogin: "turbo",
                            giftSubEndsAt: e && (e.gift.isGift || null) && e.endsAt,
                            invoicePrice: n.price,
                            invoiceCurrency: "USD"
                        })
                    }
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                if (this.props.data.loading || this.props.data.error) return a.createElement(d._8, null);
                var e = this.props.data.subscriptionProduct,
                    t = Object(i.d)("Buying a Channel Subscription is fast, easy and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                        "x:link": function(e) {
                            return a.createElement("span", {
                                key: "helplink"
                            }, a.createElement(d.O, {
                                targetBlank: !0,
                                to: "https://help.twitch.tv/"
                            }, e))
                        }
                    }, "SubsCheckoutPage"),
                    n = Object(i.d)('You may cancel at any time by selecting "Do Not Renew" on your <x:link>subscriptions page</x:link>.', {
                        "x:link": function(e) {
                            return a.createElement("span", {
                                key: "sublink"
                            }, a.createElement(d.O, {
                                targetBlank: !0,
                                to: "/subscriptions"
                            }, e))
                        }
                    }, "SubsCheckoutPage"),
                    r = Object(i.d)('By clicking "Complete Purchase", you hereby agree to Twitch\'s <x:tos>Terms of Sale</x:tos> and <x:privacy>Privacy Policy</x:privacy>. Your payment method will be saved for future purchases, and, if applicable, recurring subscription payments.', {
                        "x:tos": function(e) {
                            return a.createElement("span", {
                                key: "tos"
                            }, a.createElement(d.O, {
                                targetBlank: !0,
                                to: "/p/legal/terms-of-sale/"
                            }, e))
                        },
                        "x:privacy": function(e) {
                            return a.createElement("span", {
                                key: "privacy"
                            }, a.createElement(d.O, {
                                targetBlank: !0,
                                to: "/p/legal/privacy-policy/"
                            }, e))
                        }
                    }, "SubsCheckoutPage");
                return a.createElement(d._8, {
                    className: "checkout-payments",
                    fullWidth: !0,
                    padding: 3,
                    overflow: d._11.Auto
                }, a.createElement(d._8, {
                    display: d.R.Flex,
                    justifyContent: d._7.Center,
                    flexWrap: d.U.Wrap
                }, a.createElement(d._8, {
                    display: d.R.Hide,
                    alignItems: d.c.Start,
                    margin: {
                        bottom: 4
                    },
                    breakpointLarge: {
                        display: d.R.Flex
                    }
                }, a.createElement(k.a, {
                    productName: this.props.productName
                })), a.createElement(d._8, {
                    className: "checkout-payments__content",
                    breakpointLarge: {
                        margin: {
                            left: 4
                        }
                    }
                }, !this.purchased && a.createElement(d._8, {
                    margin: {
                        bottom: 1
                    },
                    textAlign: d._45.Center,
                    breakpointLarge: {
                        margin: {
                            bottom: 2
                        },
                        textAlign: d._45.Left
                    }
                }, a.createElement(v, {
                    channel: this.props.data.subscriptionProduct.owner && this.props.data.subscriptionProduct.owner.id,
                    isGift: this.props.isGift
                })), a.createElement(d._8, {
                    display: d.R.Flex,
                    breakpointLarge: {
                        display: d.R.Hide
                    }
                }, a.createElement(k.a, {
                    productName: this.props.productName,
                    mobile: !0
                })), this.purchased && this.renderReceipt(), !this.purchased && a.createElement(a.Fragment, null, "689376" !== e.id && a.createElement(d._8, {
                    margin: {
                        top: 2
                    }
                }, a.createElement(d.Q, null, t), a.createElement(d.Q, null, n)), this.renderPurchaseInfo(), this.showPaymenOptions && a.createElement(a.Fragment, null, this.state.showErrors && a.createElement(d._8, {
                    margin: {
                        y: 2
                    }
                }, a.createElement(y, null)), a.createElement(pe, {
                    handleCompletePurchase: this.completePurchase,
                    productName: this.props.productName,
                    trackPaymentFormInteraction: this.trackPaymentFormInteraction,
                    configs: this.props.data.subscriptionProduct.self.checkoutConfigs.paymentProviderConfigs,
                    countryCode: this.props.data.requestInfo.countryCode
                })), a.createElement(d._8, {
                    margin: {
                        y: 2
                    }
                }, a.createElement(d.Q, null, r))))))
            }, Object.defineProperty(t.prototype, "personalSubPurchased", {
                get: function() {
                    return !!this.props.data.subscriptionProduct.self.purchase.details
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "purchased", {
                get: function() {
                    return !this.props.isGift && this.personalSubPurchased || this.state.giftSubPurchased
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "showPaymenOptions", {
                get: function() {
                    return !this.purchased && (!this.props.isGift || this.props.data.subscriptionProduct.self.checkoutConfigs.canGift)
                },
                enumerable: !0,
                configurable: !0
            }), t = r.__decorate([Object(B.d)("CheckoutPayments"), Object(o.a)(me, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            productName: e.productName,
                            isGift: e.isGift,
                            recipientID: e.recipientID,
                            includePromotion: "turbo" !== e.productName
                        }
                    }
                }
            })], t)
        }(a.Component)
    },
    "9Jn5": function(e, t, n) {
        var r = n("zZbG");
        e.exports = function(e, t) {
            return r(e) - r(t)
        }
    },
    "9pOZ": function(e, t, n) {
        e.exports = n.p + "assets/xsolla_2x-b8ef30f34626976fddc4b8b96e9541a7.png"
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
            return o
        });
        var r = n("TToO"),
            a = n("6sO2"),
            i = n("Aj/L"),
            o = function() {
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
                        var a, i, o, s;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = r.__assign({}, t, {
                                        body: i
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, i;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((a = o.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return i = r.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(i)];
                                case 2:
                                    throw o.sent();
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
                    var o = Object(i.c)(n);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
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
    D0Fd: function(e, t, n) {
        "use strict";
        var r, a = n("TToO"),
            i = n("HW6M"),
            o = n("GiK3"),
            s = n("HM6l"),
            c = n("46tX"),
            u = n("Odds");
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
                var e, t, n = "esports-hexagon__mask--unavailable-" + Object(s.a)(),
                    a = "esports-hexagon__mask--cheer-more-" + Object(s.a)(),
                    l = "esports-hexagon__pattern--" + Object(s.a)();
                this.props.isUnavailable ? (e = "url(#" + n, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + a, t = "esports-hexagon__mask--cheer-more");
                var d = /Edge/.test(window.navigator.userAgent) ? 5 : Object(c.b)(window.navigator.userAgent) ? -25 : 0,
                    p = /Edge/.test(window.navigator.userAgent) ? -5 : Object(c.b)(window.navigator.userAgent) ? 8 : 5,
                    m = /Edge/.test(window.navigator.userAgent) ? 155 : 131,
                    f = /Edge/.test(window.navigator.userAgent) ? 90 : Object(c.b)(window.navigator.userAgent) ? 150 : 100,
                    g = Object(c.b)(window.navigator.userAgent) ? 150 : 131,
                    h = Object(c.b)(window.navigator.userAgent) ? 0 : 10,
                    b = i("esports-hexagon__svg", {
                        "esports-hexagon__svg--large": this.props.size === r.Large
                    }, {
                        "esports-hexagon__svg--small": this.props.size === r.Small
                    }, {
                        "esports-hexagon__svg--medium": this.props.size === r.Medium
                    }, {
                        "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === r.Small
                    }),
                    v = i("esports-hexagon__svg--background", {
                        "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                    }),
                    y = i("esports-hexagon__svg--fill", {
                        "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                    });
                return o.createElement(u._8, {
                    className: "esports-hexagon",
                    display: u.R.Flex,
                    flexDirection: u.T.Column
                }, o.createElement("svg", {
                    className: b,
                    viewBox: "5 0 90 131"
                }, o.createElement("defs", null, o.createElement("pattern", {
                    id: l,
                    patternUnits: "userSpaceOnUse",
                    width: "100",
                    height: g
                }, o.createElement("image", {
                    className: "esports-hexagon__image",
                    xlinkHref: this.props.imageURL,
                    x: d,
                    y: p,
                    width: f,
                    height: m
                })), o.createElement("filter", {
                    id: n
                }, o.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.04 0 0 0 0 0 0.04 0 0 0 0 0 0.04 0 0 0 0 0 1 0"
                })), o.createElement("filter", {
                    id: a
                }, o.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                }))), o.createElement("polygon", {
                    className: v,
                    points: "50,2 8.042394,26.558603 8,75 50,98 92,75 92,25",
                    stroke: "none",
                    strokeWidth: "1px",
                    transform: "translate(0, 31)"
                }), o.createElement("path", {
                    transform: "translate(0, 31)",
                    className: y,
                    d: "M49.9,99.1c-2.1,0-4.2-0.5-5.8-1.4L11.6,79c-3.3-2-5.9-6.4-5.9-10.2V31.3c0-3.8,2.6-8.3,5.9-10.2L44.2,2.4C45.8,1.5,47.8,1,50,1c2.2,0,4.3,0.5,5.8,1.4l32.5,18.7c3.3,1.9,5.9,6.5,5.7,10.3l0,37.4c0,3.8-2.6,8.3-5.9,10.2L55.8,97.7C54.1,98.6,52,99.1,49.9,99.1z M50,4c-1.7,0-3.2,0.4-4.4,1L13.1,23.7c-2.4,1.3-4.3,4.8-4.3,7.6v37.5c0,2.7,2,6.2,4.4,7.6l32.4,18.7c2.3,1.3,6.4,1.3,8.7,0l32.4-18.7c2.4-1.3,4.3-4.8,4.3-7.6V31.3c0.2-2.7-1.8-6.2-4.1-7.6l0,0L54.4,5C53.3,4.4,51.6,4,50,4z"
                }), !this.props.comingSoon && o.createElement("polygon", {
                    className: "esports-hexagon__svg--filtered-image",
                    "data-test-selector": t,
                    filter: e,
                    points: 0 + h + ",0 " + (100 - h) + ",0 " + (100 - h) + ",131 " + (0 + h) + ",131",
                    stroke: "none",
                    strokeWidth: "1px",
                    fill: "url(#" + l + ")"
                }), this.props.comingSoon && o.createElement("text", {
                    className: "esports-hexagon__svg--question-mark",
                    x: "38",
                    y: "97",
                    fontSize: "44",
                    fontWeight: "600"
                }, "?"), !this.props.comingSoon && (this.props.isUnavailable || this.props.needsToCheerMore) && o.createElement("path", {
                    className: "esports-hexagon__svg--lock",
                    transform: "translate(40, 70)",
                    fill: "white",
                    d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                    fillRule: "evenodd"
                })))
            }, t
        }(o.Component);
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
            o = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = a(t).getTime() - i(t).getTime();
            return Math.round(n / o) + 1
        }
    },
    EAav: function(e, t, n) {
        e.exports = n.p + "assets/visa-2c78c63c20971f1d68c60bc0f5826a48.svg"
    },
    "Eoz/": function(e, t, n) {
        var r = n("ymQ7"),
            a = n("D6ie"),
            i = n("zZbG"),
            o = n("xA5w"),
            s = n("dH3X"),
            c = n("uyaC");
        var u = {
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
                return d(u.h(e), 2)
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
                i = c.format.formatters,
                l = c.format.formattingTokensRegExp;
            a && a.format && a.format.formatters && (i = a.format.formatters, a.format.formattingTokensRegExp && (l = a.format.formattingTokensRegExp));
            var d = o(e);
            return s(d) ? function(e, t, n) {
                var r, a, i, o = e.match(n),
                    s = o.length;
                for (r = 0; r < s; r++) a = t[o[r]] || u[o[r]], o[r] = a || ((i = o[r]).match(/\[[\s\S]/) ? i.replace(/^\[|]$/g, "") : i.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < s; n++) o[n] instanceof Function ? t += o[n](e, u) : t += o[n];
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
                o = r(t),
                s = i(n, o),
                c = Math.abs(a(n, o));
            return n.setMonth(n.getMonth() - s * c), s * (c - (i(n, o) === -s))
        }
    },
    GUP0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n("RH2O"),
            i = n("2KeS"),
            o = n("7vx8"),
            s = n("j7/Y"),
            c = n("+xm8"),
            u = n("f2i/"),
            l = n("w9tK"),
            d = n("vH/s"),
            p = n("Aj/L"),
            m = n("CSlQ"),
            f = n("TToO"),
            g = n("OAwv"),
            h = n("GiK3"),
            b = n("6sO2"),
            v = n("yWCw"),
            y = n("8m9s"),
            k = n("wuJz"),
            _ = n("3zLD"),
            w = n("9u8h"),
            E = n("Odds"),
            x = function(e) {
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
                    return h.createElement(E._8, {
                        margin: {
                            y: 1
                        },
                        padding: {
                            x: 1
                        }
                    }, h.createElement(E.W, {
                        label: ""
                    }, this.props.reasons.map(function(t, n) {
                        return h.createElement(E._8, {
                            key: "reason-" + n,
                            margin: {
                                y: 2
                            }
                        }, h.createElement(E._21, {
                            name: e.radioName,
                            onChange: e.handleReasonChange,
                            disabled: e.props.disabled,
                            value: t.value,
                            label: t.translation()
                        }))
                    }), h.createElement(E._8, {
                        margin: {
                            y: 2
                        }
                    }, h.createElement(E._21, {
                        name: this.radioName,
                        label: Object(b.d)("Other", "ReasonInput"),
                        onChange: this.handleOtherReasonRadioChange,
                        disabled: this.props.disabled
                    })), this.state.otherTextAreaEnabled && h.createElement(E._8, {
                        margin: {
                            y: 2
                        }
                    }, h.createElement(E._46, {
                        onChange: this.handleOtherReasonTextAreaChange,
                        placeholder: Object(b.d)("Additional reasons or thoughts", "ReasonInput")
                    }))))
                }, t
            }(h.Component),
            S = Object(_.compose)(Object(m.d)("ReasonInput", {
                autoReportInteractive: !0
            }))(x),
            N = function(e) {
                var t = h.createElement(h.Fragment, null, h.createElement(E.Q, {
                        type: E._49.H2,
                        bold: !0
                    }, Object(b.d)("Subscription Canceled", "UnsubscribeConfirmation")), h.createElement(E._8, {
                        margin: {
                            top: 2
                        }
                    }, h.createElement(E.Q, null, Object(b.d)("Your subscription has been immediately canceled. You will be receiving an email detailing your refund.", "UnsubscribeConfirmation")))),
                    n = h.createElement(h.Fragment, null, h.createElement(E.Q, {
                        type: E._49.H2,
                        bold: !0
                    }, Object(b.d)("Subscription No Longer Renewing", "UnsubscribeConfirmation")), h.createElement(E._8, {
                        margin: {
                            top: 2
                        }
                    }, h.createElement(E.Q, null, e.endsAt && Object(b.d)("Your subscription will no longer renew. You will have access to your benefits until {date}.", {
                        date: h.createElement(E.Q, {
                            key: "benefit-end-date",
                            type: E._49.Span,
                            bold: !0
                        }, Object(b.c)(new Date(e.endsAt), "medium"))
                    }, "UnsubscribeConfirmation"))), h.createElement(E._8, {
                        margin: {
                            top: 2
                        }
                    }, h.createElement(E.Q, null, e.endsAt && Object(b.d)("If you change your mind and would like to resubscribe, you can do so as of {date}.", {
                        date: h.createElement(E.Q, {
                            key: "resubscribe-date",
                            type: E._49.Span,
                            bold: !0
                        }, Object(b.c)(Object(k.addDays)(new Date(e.endsAt), 1), "medium"))
                    }, "UnsubscribeConfirmation"))));
                return h.createElement(h.Fragment, null, e.unsubscribeType === r.Cancel ? t : n, h.createElement(E._8, {
                    margin: {
                        top: 2
                    }
                }, h.createElement(E.Q, null, Object(b.d)("We hope you enjoyed the service and will consider resubscribing some day.", "UnsubscribeConfirmation"))), h.createElement(E._8, {
                    margin: {
                        top: 2
                    }
                }, h.createElement(E.Q, null, Object(b.d)("- Your friends at Twitch", "UnsubscribeConfirmation"))), h.createElement(E._8, {
                    margin: {
                        top: 2
                    }
                }, h.createElement(E.v, {
                    linkTo: "https://www.twitch.tv/subscriptions"
                }, Object(b.d)("Return to Subscriptions", "UnsubscribeForm"))))
            },
            O = [{
                value: "I only wanted to subscribe for one month",
                translation: function() {
                    return Object(b.d)("I only wanted to subscribe for one month", "unsubscribe-reasons")
                }
            }, {
                value: "Financial reasons",
                translation: function() {
                    return Object(b.d)("Financial reasons", "unsubscribe-reasons")
                }
            }],
            C = [{
                value: "I prefer to manually renew my subscriptions",
                translation: function() {
                    return Object(b.d)("I prefer to manually renew my subscriptions", "unsubscribe-reasons")
                }
            }, {
                value: "I need to change my payment method",
                translation: function() {
                    return Object(b.d)("I need to change my payment method", "unsubscribe-reasons")
                }
            }, {
                value: "I had a bad interaction with the broadcaster",
                translation: function() {
                    return Object(b.d)("I had a bad interaction with the broadcaster", "unsubscribe-reasons")
                }
            }, {
                value: "The broadcaster's schedule changed or they're not streaming as much anymore",
                translation: function() {
                    return Object(b.d)("The broadcaster's schedule changed or they're not streaming as much anymore", "unsubscribe-reasons")
                }
            }, {
                value: "My schedule changed and I can't keep up with the stream anymore",
                translation: function() {
                    return Object(b.d)("My schedule changed and I can't keep up with the stream anymore", "unsubscribe-reasons")
                }
            }].concat(O),
            D = [{
                value: "I accidentally subscribed to the wrong channel",
                translation: function() {
                    return Object(b.d)("I accidentally subscribed to the wrong channel", "unsubscribe-reasons")
                }
            }, {
                value: "I just wanted to get a shoutout",
                translation: function() {
                    return Object(b.d)("I just wanted to get a shoutout", "unsubscribe-reasons")
                }
            }, {
                value: "The channel benefits are not what I expected",
                translation: function() {
                    return Object(b.d)("The channel benefits are not what I expected", "unsubscribe-reasons")
                }
            }].concat(O);
        ! function(e) {
            e[e.Cancel = 0] = "Cancel", e[e.DoNotRenew = 1] = "DoNotRenew"
        }(r || (r = {}));
        var T, P, A = function(e) {
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
                            var e, t, n, a, i, o, s;
                            return f.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.setState({
                                            unsubscribing: !0
                                        }), e = this.props, t = e.currentUserID, n = e.productName, a = this.props.unsubscribeType === r.Cancel ? "cancel" : "do_not_renew", i = "/kraken/checkout/users/" + t + "/products/" + n + "/purchase/" + a, o = this.state.reason, s = {
                                            body: {
                                                reason: o
                                            }
                                        }, c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, w.a.post(i, s, {
                                            version: 5
                                        })];
                                    case 2:
                                        return c.sent(), this.setState({
                                            showUnsubConfirmation: !0
                                        }), [3, 4];
                                    case 3:
                                        return c.sent(), this.setState({
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
                    return this.state.showUnsubConfirmation ? h.createElement(N, {
                        unsubscribeType: this.props.unsubscribeType,
                        endsAt: this.props.endsAt
                    }) : h.createElement(h.Fragment, null, h.createElement(E.Q, {
                        type: E._49.H2,
                        bold: !0
                    }, this.unsubscribeActionText), h.createElement(E._8, {
                        margin: {
                            y: 1
                        }
                    }, h.createElement(E.Q, {
                        color: E.K.Alt2
                    }, Object(b.d)("Having issues with your subscription? Visit our <x:link1>Help Center</x:link1> or <x:link2>Contact Us</x:link2>.", {
                        "x:link1": function(e) {
                            return h.createElement(E.O, {
                                key: "help-center-link",
                                to: "https://help.twitch.tv/",
                                targetBlank: !0
                            }, e)
                        },
                        "x:link2": function(e) {
                            return h.createElement(E.O, {
                                key: "contact-us-link",
                                to: "https://help.twitch.tv/customer/portal/emails/new",
                                targetBlank: !0
                            }, e)
                        }
                    }, "UnsubscribeForm"))), h.createElement(E._8, {
                        margin: {
                            y: 1
                        }
                    }, h.createElement(E.Q, null, this.warningText)), h.createElement(E._8, {
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, h.createElement(E.Q, {
                        type: E._49.H4,
                        bold: !0
                    }, Object(b.d)("Please select your reason for canceling", "UnsubscribeForm"))), h.createElement(S, {
                        reasons: this.props.unsubscribeType === r.Cancel ? D : C,
                        updateReason: this.updateReason,
                        disabled: this.state.unsubscribing
                    }), h.createElement(E._35, {
                        padding: {
                            top: 2
                        },
                        borderTop: !0,
                        fullWidth: !0
                    }, h.createElement(E._8, {
                        display: E.R.InlineFlex
                    }, h.createElement(E.v, {
                        type: E.B.Alert,
                        state: this.state.unsubscribing ? E.A.Loading : E.A.Default,
                        disabled: this.state.unsubscribing,
                        onClick: this.handleUnsubscribeClick
                    }, this.unsubscribeActionText), h.createElement(E._8, {
                        margin: {
                            left: 1
                        }
                    }, h.createElement(E.v, {
                        linkTo: "https://www.twitch.tv/subscriptions",
                        disabled: this.state.unsubscribing
                    }, Object(b.d)("Stay Subscribed", "UnsubscribeForm")))), this.props.unsubscribeType === r.DoNotRenew && h.createElement(E._8, {
                        margin: {
                            top: 1
                        }
                    }, h.createElement(E.Q, {
                        color: E.K.Alt2
                    }, this.canPurchaseAgainText))))
                }, Object.defineProperty(t.prototype, "unsubscribeActionText", {
                    get: function() {
                        return this.props.unsubscribeType === r.Cancel ? Object(b.d)("Cancel Subscription", "UnsubscribeForm") : this.props.unsubscribeType === r.DoNotRenew ? Object(b.d)("Don't Renew Subscription", "UnsubscribeForm") : void 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "warningText", {
                    get: function() {
                        if (this.props.unsubscribeType === r.Cancel) return Object(b.d)("You may cancel your subscription within 24 hours of purchase and receive a refund. The broadcaster will not receive any revenue from your subscription if you do so.", "UnsubscribeForm");
                        if (this.props.unsubscribeType === r.DoNotRenew) {
                            var e = this.props.endsAt;
                            return e ? Object(b.d)("If your renewal is stopped, your subscription will end on {endsAtDate}, at which time you will no longer have access to subscriber benefits and emotes.", {
                                endsAtDate: h.createElement(E.Q, {
                                    key: "ends-at-date",
                                    bold: !0,
                                    type: E._49.Span
                                }, Object(b.c)(new Date(e), "medium"))
                            }, "UnsubscribeForm") : null
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canPurchaseAgainText", {
                    get: function() {
                        var e = this.props.endsAt;
                        if (!e) return null;
                        var t = Object(k.addDays)(new Date(e), 1);
                        return Object(b.d)("If canceled, you can purchase the subscription again as of {canPurchaseAgainDate}.", {
                            canPurchaseAgainDate: Object(b.c)(t, "medium")
                        }, "UnsubscribeForm")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(h.Component),
            F = Object(_.compose)(Object(m.d)("UnsubscrbeForm", {
                autoReportInteractive: !0
            }))(A);
        ! function(e) {
            e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
        }(T || (T = {})),
        function(e) {
            e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
        }(P || (P = {}));
        n("702D");
        var M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = b.o.logger.withCategory("unsubscribe-page"), t.unsubscribeType = "true" === g.parse(t.props.location.search).cancel ? r.Cancel : r.DoNotRenew, t.redirectToLegacyCheckout = function() {
                        var e = t.props.match.params.productName;
                        window.location.replace("https://www.twitch.tv/products/" + e)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.currentUser) return this.props.promptLogin(), h.createElement(E._8, {
                        fullHeight: !0
                    }, h.createElement(v.a, {
                        message: Object(b.d)("You must be logged in to view this page", "UnsubscribePage")
                    }));
                    var e = this.props.data,
                        t = e.subscriptionProduct,
                        n = e.loading,
                        r = e.error,
                        a = !n && !r;
                    if (a && !t) return h.createElement(E._8, {
                        fullHeight: !0
                    }, h.createElement(v.a, null));
                    if (a && !this.hasSubscriptionBenefit) return this.redirectToLegacyCheckout(), h.createElement(E._8, {
                        fullHeight: !0
                    }, h.createElement(E._10, {
                        fillContent: !0
                    }));
                    if (a && !this.canUnsubscribe || r) return h.createElement(E._8, {
                        fullHeight: !0
                    }, h.createElement(v.a, null));
                    var i = t && t.self && t.self.benefit && t.self.benefit.endsAt;
                    return h.createElement(E._8, {
                        display: E.R.Flex,
                        justifyContent: E._7.Center,
                        flexWrap: E.U.Wrap,
                        padding: 3
                    }, h.createElement(E._8, {
                        className: "unsubscribe-page__ticket-description-container",
                        margin: {
                            bottom: 2
                        },
                        display: E.R.InlineBlock
                    }, h.createElement(y.a, {
                        productName: this.props.match.params.productName
                    })), h.createElement(E._8, {
                        display: E.R.InlineBlock
                    }, h.createElement(E._35, {
                        className: "unsubscribe-page__unsubscribe-form-container",
                        background: E.n.Base,
                        padding: 2,
                        border: !0,
                        elevation: 1,
                        margin: {
                            x: 4
                        }
                    }, n ? h.createElement(E._14, {
                        lineCount: 20
                    }) : h.createElement(F, {
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
                            case T.CHANSUB:
                            case T.TEAMSUB:
                                return !!(e && e.self && e.self.benefit);
                            case T.TURBO:
                                return !!(e && e.self && e.self.purchase && e.self.purchase.details && e.self.purchase.details.productType.toUpperCase() === T.TURBO && e.self.purchase.details.state.toUpperCase() === P.ACTIVE);
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
                            case T.CHANSUB:
                            case T.TEAMSUB:
                                return this.unsubscribeType === r.DoNotRenew ? !!(e && e.self && e.self.benefit && e.self.benefit.renewsAt) : this.unsubscribeType === r.Cancel && !!(e && e.self && e.self.benefit && e.self.benefit.isRefundable);
                            case T.TURBO:
                                return this.hasSubscriptionBenefit;
                            default:
                                return !1
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(h.Component),
            I = n("8S49");
        var j = Object(i.d)(Object(m.d)("UnsubscribePage", {
            destination: l.a.UnsubscribePage
        }), Object(s.a)({
            location: d.PageviewLocation.UnsubscribePage
        }), Object(o.a)(I, {
            options: function(e) {
                return {
                    variables: {
                        productName: e.match.params.productName
                    }
                }
            }
        }), Object(a.b)(function(e) {
            return {
                currentUser: Object(p.c)(e)
            }
        }, function(e) {
            return Object(i.b)({
                promptLogin: function() {
                    return Object(u.f)(c.a.DashboardPage)
                }
            }, e)
        }))(M);
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
    Heyg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CheckoutPayments"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "includePromotion"
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
                            value: "isGift"
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
                            value: "recipientID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                                    value: "price"
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
                                            value: "checkoutConfigs"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "isGift"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isGift"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "recipientID"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "recipientID"
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
                                                    value: "canGift"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isOneMonthFreeEligible"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "paymentProviderConfigs"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "xsolla"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "iframeURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "recurly"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "payWithAmazonConfigs"
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
                                                                            value: "isProduction"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "sellerID"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "publicKey"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "braintreeClientAuthorization"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "zuora"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "externalAccountID"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tenantID"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "publicKey"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "signature"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hostedPageID"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hostedPageURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "externalAccountID"
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
                                                            value: "paymentProvider"
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
                                                            value: "currency"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cancelledAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
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
                                                            value: "productTier"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "compatiblePurchases"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "paymentProvider"
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
                                                            value: "currency"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cancelledAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
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
                                                            value: "productTier"
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
                                                    value: "tier"
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
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "gift"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
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
                                            value: "promotion"
                                        },
                                        arguments: [],
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "include"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "if"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "includePromotion"
                                                    }
                                                }
                                            }]
                                        }],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "discountValue"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
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
                end: 977
            }
        };
        n.loc.source = {
            body: "query CheckoutPayments($productName: String! $includePromotion: Boolean! $isGift: Boolean! $recipientID: ID) {\ncurrentUser {\nid\ndisplayName\n}\nsubscriptionProduct(productName: $productName) {\nid\nprice\nowner {\nid\ndisplayName\nlogin\n}\nself {\ncheckoutConfigs (isGift: $isGift recipientID: $recipientID) {\ncanGift\nisOneMonthFreeEligible\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\n}\nbenefit {\nid\ntier\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion @include(if: $includePromotion) {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    I7cV: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                o = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a
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
    JbfA: function(e, t) {},
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
    KVSr: function(e, t, n) {
        e.exports = n.p + "assets/xsolla_1x-920aa1ba72411e5fe0aa594e391b899d.png"
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
                o = void 0 !== n ? n : 1,
                s = i.getTime();
            if (a.getTime() > s) throw new Error("The first date cannot be after the second date");
            var c = [],
                u = a;
            for (u.setHours(0, 0, 0, 0); u.getTime() <= s;) c.push(r(u)), u.setDate(u.getDate() + o);
            return c
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
    MQyO: function(e, t, n) {
        e.exports = n.p + "assets/credit_cards_2x-051201f07d7c83cdf8077df9a45c5034.png"
    },
    Mbb9: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDay()
        }
    },
    McJK: function(e, t) {},
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
    Miv9: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "kaptchaIframeSrc", {
                    get: function() {
                        return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoHtm?m=300532&s=" + this.props.sessionId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "kaptchaImgSrc", {
                    get: function() {
                        return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoGif?m=300532&s=" + this.props.sessionId
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return a.createElement("iframe", {
                        width: "1",
                        height: "1",
                        scrolling: "no",
                        src: this.kaptchaIframeSrc
                    }, a.createElement("img", {
                        width: "137",
                        height: "33",
                        src: this.kaptchaImgSrc
                    }))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return i
        })
    },
    Mn81: function(e, t) {},
    Moxe: function(e, t, n) {
        var r = n("M5Oo");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    N01O: function(e, t, n) {
        e.exports = n.p + "assets/amex-0065c7c320259dda266f8d9267bb387a.svg"
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
    Ni7G: function(e, t) {},
    O6CN: function(e, t, n) {
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
                                    value: "tier"
                                },
                                arguments: [],
                                directives: []
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
                                    value: "displayName"
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
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
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
                                    value: "price"
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
                                            value: "description"
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
                                                    value: "isPartner"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
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
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "emoteSetID"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "oldPrice"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "discountValue"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "discountType"
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
                end: 555
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery TicketDescription($productName: String!) {\nproduct: subscriptionProduct(productName: $productName) {\nid\ntier\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\ndisplayName\ninterval {\nduration\nunit\n}\nprice\ntype\nowner {\nid\ndisplayName\ndescription\nroles {\nisPartner\n}\nbannerImageURL\nbroadcastBadges {\n...badge\n}\nprofileImageURL(width:300)\nsubscriptionProducts {\nid\ntier\ndisplayName\nurl\nprice\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\n}\n}\n}',
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
    Ob63: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_dark_2x-c98151cef856bab0e62c23c333d686a8.png"
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
            var o = r(e, n),
                s = r(t, n),
                c = o.getTime() - o.getTimezoneOffset() * a,
                u = s.getTime() - s.getTimezoneOffset() * a;
            return Math.round((c - u) / i)
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
                    o = [];
                t = n, Array.isArray(t) ? o = n.map(function(e) {
                    var t = i.getBadge(e.setID, e.version);
                    return null === t ? null : r.createElement(a.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (o = Object.keys(n).map(function(e) {
                    var t = n[e],
                        o = i.getBadge(e, t);
                    return null === o ? null : r.createElement(a.a, {
                        key: o.setID + "/" + o.version,
                        badge: o
                    })
                }));
                var s = o.filter(function(e) {
                    return null !== e
                });
                return r.createElement("span", null, s)
            }
    },
    SHOI: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Jvcu");
        e.exports = function(e, t, n) {
            var i = n && Number(n.weekStartsOn) || 0,
                o = r(e),
                s = Number(t),
                c = o.getDay();
            return a(o, ((s % 7 + 7) % 7 < i ? 7 : 0) + s - c)
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
    SgWI: function(e, t, n) {
        e.exports = n.p + "assets/paypal_1x-2a610ceedc14dc7f967360aeb1f053ff.png"
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
                    o = Math.abs(i - t.getTime());
                (void 0 === n || o < a) && (n = t, a = o)
            }), n
        }
    },
    "Uu+E": function(e, t, n) {
        var r = n("xA5w"),
            a = n("iRXW"),
            i = n("nizW");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t),
                s = i(n, a(n)),
                c = new Date(0);
            return c.setFullYear(o, 0, 4), c.setHours(0, 0, 0, 0), (n = a(c)).setDate(n.getDate() + s), n
        }
    },
    V7A9: function(e, t, n) {
        "use strict";
        var r = n("/Nos");
        n.d(t, "a", function() {
            return r.a
        })
    },
    VH0v: function(e, t) {},
    VSLj: function(e, t) {},
    VaeB: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(0), t
        }
    },
    W59S: function(e, t, n) {
        e.exports = n.p + "assets/credit_cards_1x-0c57bd2e9d4cd4bb8474fb968acc4bd2.png"
    },
    WE8T: function(e, t, n) {
        e.exports = n.p + "assets/generic_credit_card_2x-9e855c7d5c5359ac92089b01e55c4eee.png"
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
                o = Number(t),
                s = i(n);
            return a(n, o - s)
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
    YkGD: function(e, t, n) {
        e.exports = n.p + "assets/paypal_2x-36ebff55eec001d935d0605e6f97b955.png"
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
                o = n.getFullYear(),
                s = n.getDate(),
                c = new Date(0);
            c.setFullYear(o, i, 15), c.setHours(0, 0, 0, 0);
            var u = a(c);
            return n.setMonth(i, Math.min(s, u)), n
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
    ekbR: function(e, t, n) {
        e.exports = n.p + "assets/more_methods_1x-98862ad01d0cfaef3e09da4e3908bf4b.png"
    },
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
                o = r(t),
                s = i(n, o),
                c = Math.abs(a(n, o));
            return n.setDate(n.getDate() - s * c), s * (c - (i(n, o) === -s))
        }
    },
    gDGR: function(e, t) {},
    gDPd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() < a.getTime()
        }
    },
    gKy9: function(e, t) {},
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
    hmTn: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_2x-914335e3401a72109a8a082c5ecc4aad.png"
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
    j6Ui: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = function(e, t) {
            return Object(r.format)(e, t)
        }, t.c = function(e) {
            return Object(r.parse)(e)
        }, t.d = function(e, t) {
            var n = e.split(":");
            if (2 !== n.length) throw new Error("invalid time string: " + e);
            var r = parseInt(n[0], 10),
                a = parseInt(n[1].substring(0, 2), 10),
                i = n[1].substring(n[1].length - 2);
            12 === r && "am" === i && (r = 0);
            "pm" === i && r < 12 && (r += 12);
            if (isNaN(r) || r < 0 || r > 23 || isNaN(a) || a < 0 || a > 59) throw new Error("invalid time string: " + e);
            var o = t || new Date;
            return o.setHours(r, a), o
        };
        var r = n("wuJz"),
            a = (n.n(r), {
                RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                timeString: "h:mma"
            })
    },
    jJiV: function(e, t) {},
    jQas: function(e, t, n) {
        var r = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                o = ["AM", "PM"],
                s = ["am", "pm"],
                c = ["a.m.", "p.m."],
                u = {
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
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? c[1] : c[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                u[e + "o"] = function(t, n) {
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
                formatters: u,
                formattingTokensRegExp: r(u)
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
    "kgE+": function(e, t) {},
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
    l7ua: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
            }(r || (r = {}))
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
    lL4Y: function(e, t, n) {
        e.exports = n.p + "assets/paypal_dark_2x-74742ec8600998675dc53d32ac9db7f8.png"
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
            o = n("GI7G"),
            s = n("uyaC"),
            c = 1440,
            u = 2520,
            l = 43200,
            d = 86400;
        e.exports = function(e, t, n) {
            var p = n || {},
                m = r(e, t),
                f = p.locale,
                g = s.distanceInWords.localize;
            f && f.distanceInWords && f.distanceInWords.localize && (g = f.distanceInWords.localize);
            var h, b, v = {
                addSuffix: Boolean(p.addSuffix),
                comparison: m
            };
            m > 0 ? (h = a(e), b = a(t)) : (h = a(t), b = a(e));
            var y, k = i(b, h),
                _ = b.getTimezoneOffset() - h.getTimezoneOffset(),
                w = Math.round(k / 60) - _;
            if (w < 2) return p.includeSeconds ? k < 5 ? g("lessThanXSeconds", 5, v) : k < 10 ? g("lessThanXSeconds", 10, v) : k < 20 ? g("lessThanXSeconds", 20, v) : k < 40 ? g("halfAMinute", null, v) : g(k < 60 ? "lessThanXMinutes" : "xMinutes", 1, v) : 0 === w ? g("lessThanXMinutes", 1, v) : g("xMinutes", w, v);
            if (w < 45) return g("xMinutes", w, v);
            if (w < 90) return g("aboutXHours", 1, v);
            if (w < c) return g("aboutXHours", Math.round(w / 60), v);
            if (w < u) return g("xDays", 1, v);
            if (w < l) return g("xDays", Math.round(w / c), v);
            if (w < d) return g("aboutXMonths", y = Math.round(w / l), v);
            if ((y = o(b, h)) < 12) return g("xMonths", Math.round(w / l), v);
            var E = y % 12,
                x = Math.floor(y / 12);
            return E < 3 ? g("aboutXYears", x, v) : E < 9 ? g("overXYears", x, v) : g("almostXYears", x + 1, v)
        }
    },
    mbxv: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("+V/3"),
            o = n("Odds"),
            s = (n("2IkU"), n("6sO2")),
            c = n("vH/s"),
            u = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.o.tracking.track(c.SpadeEventType.ChatBadgeClick, Object.assign({
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
                    u({
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
                    c = a.createElement("img", {
                        alt: t,
                        "aria-label": Object(s.d)("{badgeTitle} badge", {
                            badgeTitle: t
                        }, "Badge"),
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + r + " 2x, " + i + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (c = a.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, c)), this.state.isHovering ? a.createElement(o._52, {
                    align: o._53.Left,
                    "data-a-target": "chat-badge",
                    display: o.R.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, c) : c
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case i.d:
                        return e.clickURL;
                    case i.b:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case i.c:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(a.Component)
    },
    nO5C: function(e, t, n) {
        e.exports = n.p + "assets/mastercard-3dd23247b5d145e32f71e3ed584e727a.svg"
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
                o = r(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                c = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((s - c) / i)
        }
    },
    nk30: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                o = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + o), a
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
    p2Aq: function(e, t, n) {
        e.exports = n.p + "assets/more_methods_2x-3b1c8bbdaabcd0fb7c8a25d33ef1bc97.png"
    },
    pNNA: function(e, t, n) {
        e.exports = n.p + "assets/paypal_dark_1x-29d0a02f9cc67088594b91afb1b109da.png"
    },
    pOYM: function(e, t) {},
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
            o = n("MKc+");
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                c = i(n, s),
                u = Math.abs(a(n, s));
            return n = o(n, c * u), c * (u - (i(n, s) === -c))
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
                o = r(t),
                s = i(n, o),
                c = Math.abs(a(n, o));
            return n.setFullYear(n.getFullYear() - s * c), s * (c - (i(n, o) === -s))
        }
    },
    ryON: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_1x-94c97f413ee6005ab1a198c77cbfdd6c.png"
    },
    sdTe: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    siAa: function(e, t, n) {
        e.exports = n.p + "assets/paypal_2x-bddabc156344e695fa56cf9767f3c155.png"
    },
    t6pj: function(e, t, n) {
        var r = n("YRFD"),
            a = n("xA5w"),
            i = n("25hp"),
            o = n("uyaC"),
            s = 1440,
            c = 43200,
            u = 525600;
        e.exports = function(e, t, n) {
            var l = n || {},
                d = r(e, t),
                p = l.locale,
                m = o.distanceInWords.localize;
            p && p.distanceInWords && p.distanceInWords.localize && (m = p.distanceInWords.localize);
            var f, g, h, b = {
                addSuffix: Boolean(l.addSuffix),
                comparison: d
            };
            d > 0 ? (f = a(e), g = a(t)) : (f = a(t), g = a(e));
            var v = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                y = i(g, f),
                k = g.getTimezoneOffset() - f.getTimezoneOffset(),
                _ = v(y / 60) - k;
            if ("s" === (h = l.unit ? String(l.unit) : _ < 1 ? "s" : _ < 60 ? "m" : _ < s ? "h" : _ < c ? "d" : _ < u ? "M" : "Y")) return m("xSeconds", y, b);
            if ("m" === h) return m("xMinutes", _, b);
            if ("h" === h) return m("xHours", v(_ / 60), b);
            if ("d" === h) return m("xDays", v(_ / s), b);
            if ("M" === h) return m("xMonths", v(_ / c), b);
            if ("Y" === h) return m("xYears", v(_ / u), b);
            throw new Error("Unknown unit: " + h)
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
    tWfJ: function(e, t, n) {
        e.exports = n.p + "assets/generic_credit_card_1x-a6b9cd93075728ab4114b816e5d46b2d.png"
    },
    "u/4p": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                o = (i < n ? 7 : 0) + i - n;
            return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
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
                o = a(n) - i;
            return n.setDate(n.getDate() - 7 * o), n
        }
    },
    wiYS: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e).getTime();
            return t.forEach(function(e, t) {
                var o = r(e),
                    s = Math.abs(i - o.getTime());
                (void 0 === n || s < a) && (n = t, a = s)
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
            o = 2,
            s = /[T ]/,
            c = /:/,
            u = /^(\d{2})$/,
            l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            d = /^(\d{4})/,
            p = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            m = /^-(\d{2})$/,
            f = /^-?(\d{3})$/,
            g = /^-?(\d{2})-?(\d{2})$/,
            h = /^-?W(\d{2})$/,
            b = /^-?W(\d{2})-?(\d{1})$/,
            v = /^(\d{2}([.,]\d*)?)$/,
            y = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            k = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            _ = /([Z+-].*)$/,
            w = /^(Z)$/,
            E = /^([+-])(\d{2})$/,
            x = /^([+-])(\d{2}):?(\d{2})$/;

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
            n = null == n ? o : Number(n);
            var N = function(e) {
                    var t, n = {},
                        r = e.split(s);
                    if (c.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
                        var a = _.exec(t);
                        a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
                    }
                    return n
                }(e),
                O = function(e, t) {
                    var n, r = l[t],
                        a = p[t];
                    if (n = d.exec(e) || a.exec(e)) {
                        var i = n[1];
                        return {
                            year: parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    if (n = u.exec(e) || r.exec(e)) {
                        var o = n[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(N.date, n),
                C = O.year,
                D = function(e, t) {
                    if (null === t) return null;
                    var n, r, a, i;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = m.exec(e)) return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, a), r;
                    if (n = f.exec(e)) {
                        r = new Date(0);
                        var o = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, o), r
                    }
                    if (n = g.exec(e)) {
                        r = new Date(0), a = parseInt(n[1], 10) - 1;
                        var s = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, a, s), r
                    }
                    if (n = h.exec(e)) return i = parseInt(n[1], 10) - 1, S(t, i);
                    if (n = b.exec(e)) {
                        i = parseInt(n[1], 10) - 1;
                        var c = parseInt(n[2], 10) - 1;
                        return S(t, i, c)
                    }
                    return null
                }(O.restDateString, C);
            if (D) {
                var T, P = D.getTime(),
                    A = 0;
                return N.time && (A = function(e) {
                    var t, n, r;
                    if (t = v.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * a;
                    if (t = y.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), n % 24 * a + r * i;
                    if (t = k.exec(e)) {
                        n = parseInt(t[1], 10), r = parseInt(t[2], 10);
                        var o = parseFloat(t[3].replace(",", "."));
                        return n % 24 * a + r * i + 1e3 * o
                    }
                    return null
                }(N.time)), N.timezone ? (F = N.timezone, T = (M = w.exec(F)) ? 0 : (M = E.exec(F)) ? (I = 60 * parseInt(M[2], 10), "+" === M[1] ? -I : I) : (M = x.exec(F)) ? (I = 60 * parseInt(M[2], 10) + parseInt(M[3], 10), "+" === M[1] ? -I : I) : 0) : (T = new Date(P + A).getTimezoneOffset(), T = new Date(P + A + T * i).getTimezoneOffset()), new Date(P + A + T * i)
            }
            var F, M, I;
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
    yBkN: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_dark_1x-27fb4921a874a8f4d84beb69b54bdb21.png"
    },
    yZWV: function(e, t, n) {
        e.exports = n.p + "assets/mastercard_dark-0b521e1b7c99187e10967eaea8c426ca.svg"
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
    ywmo: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_2x-2eccd73373faaefa6764d0580ffa8243.png"
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
            var o = a(i),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var c = a(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
        }
    },
    zk5E: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SavedInstruments_UserPaymentMethods"
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
                                    value: "paymentMethods"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "provider"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "paymentType"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "billingEmail"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cardType"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "lastFour"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "expirationMonth"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "expirationYear"
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
                end: 166
            }
        };
        n.loc.source = {
            body: "query SavedInstruments_UserPaymentMethods {\ncurrentUser {\nid\npaymentMethods {\nprovider\npaymentType\nbillingEmail\ncardType\nlastFour\nexpirationMonth\nexpirationYear\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    zskx: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.AmazonPay = "amazon", e.CreditCard = "credit_card", e.Paypal = "paypal"
            }(r || (r = {}))
    }
});
//# sourceMappingURL=pages.unsubscribe-e8cde0b08ad149a87a1a35781372610d.js.map