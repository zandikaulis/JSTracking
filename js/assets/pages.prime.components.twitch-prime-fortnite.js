webpackJsonp([107], {
    "0blB": function(e, t) {},
    "8+KY": function(e, t) {},
    F35x: function(e, t) {},
    HnrI: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("RH2O"),
            i = r("2KeS"),
            a = r("+xm8"),
            o = r("f2i/"),
            c = r("TToO"),
            l = r("GiK3"),
            s = r("3zLD"),
            m = r("6sO2"),
            p = r("68hr"),
            d = r("7vx8"),
            u = r("j7/Y"),
            f = r("w9tK"),
            h = r("vH/s"),
            _ = r("CSlQ"),
            g = r("c6bv"),
            w = r("TCPX"),
            y = r("Odds"),
            T = (r("8+KY"), function(e) {
                if (e) return l.createElement(y._8, {
                    display: y.R.Flex,
                    margin: {
                        y: .5
                    }
                }, l.createElement(y.Q, {
                    type: y._47.H3,
                    bold: !0,
                    transform: y._46.Uppercase,
                    color: y.K.Link
                }, e))
            }),
            b = function() {
                return l.createElement(y._8, {
                    className: "twitch-prime-fortnite-offers",
                    padding: {
                        x: 2
                    }
                }, l.createElement(y._8, {
                    className: "twitch-prime-fortnite-offers__announce",
                    margin: {
                        bottom: 4
                    }
                }, l.createElement(y._8, {
                    className: "twitch-prime-fortnite-offers__announce__main",
                    textAlign: y._43.Center,
                    padding: {
                        y: .5
                    },
                    position: y._15.Relative
                }, l.createElement(y.Q, {
                    type: y._47.H3,
                    bold: !0,
                    transform: y._46.Uppercase,
                    color: y.K.Overlay
                }, Object(m.d)("You get!", "TwitchPrimeFortniteOffers")))), T(Object(m.d)("New - exclusive battle royale instigator pickaxe", "TwitchPrimeFortniteOffers")), T(Object(m.d)("Exclusive battle royale havoc outfit & back bling", "TwitchPrimeFortniteOffers")), T(Object(m.d)("Exclusive battle royale sub commander outfit & slipstream glider", "TwitchPrimeFortniteOffers")), T(Object(m.d)("Exclusive save the world heroes: havoc and sub commando", "TwitchPrimeFortniteOffers")))
            },
            v = r("kQ9X"),
            k = (r("F35x"), "twitch-prime-signup-call-to-action"),
            P = "twitch-prime-claim-call-to-action",
            C = "twitch-prime-login-call-to-action",
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCTAs = function() {
                        var e = t.getCurrentUser();
                        return l.createElement(y._8, {
                            display: y.R.Flex,
                            flexDirection: y.T.Column,
                            justifyContent: y._7.Center,
                            breakpointMedium: {
                                flexDirection: y.T.Row
                            },
                            margin: {
                                x: "auto",
                                y: 3
                            }
                        }, !e && t.renderLoginCTA(), !t.hasPrime() && t.renderSignupCTA(), t.hasPrime() && t.renderClaimCTA())
                    }, t.renderLoginCTA = function() {
                        var e = Object(m.d)("1. Click here to log-in", "TwitchPrimeFortnite"),
                            r = Object(m.d)('2. Click "claim" to link your account', "TwitchPrimeFortnite"),
                            n = l.createElement(y._8, null, e, l.createElement("br", null), r);
                        return l.createElement(w.a, {
                            className: "twitch-prime-call-to-action--login",
                            title: Object(m.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                            body: n,
                            onClick: t.onLoginClick,
                            dataTestSelector: C,
                            href: "#"
                        })
                    }, t.renderSignupCTA = function() {
                        var e = m.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                        return l.createElement(w.a, {
                            className: "twitch-prime-call-to-action--signup",
                            title: Object(m.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                            body: Object(m.d)("Start your free trial of amazon prime here", "TwitchPrimeFortnite"),
                            href: e,
                            dataTestSelector: k
                        })
                    }, t.renderClaimCTA = function() {
                        return l.createElement(w.a, {
                            className: "twitch-prime-call-to-action--claim",
                            title: Object(m.d)("Click here to claim", "TwitchPrimeFortnite"),
                            body: Object(m.d)("Link your Epic account to your Twitch Prime account", "TwitchPrimeFortnite"),
                            href: "/prime/fortnite/link",
                            dataTestSelector: P
                        })
                    }, t.getCurrentUser = function() {
                        var e = t.props.data;
                        return e && e.currentUser ? e.currentUser : null
                    }, t.hasPrime = function() {
                        var e = t.getCurrentUser();
                        return e && e.hasPrime
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = m.b.get("twitch_prime_fortnite", !1);
                    return this.props.data.error || !e ? l.createElement(p.a, null) : this.props.data.loading ? l.createElement(y._8, null) : l.createElement(y._8, {
                        className: "twitch-prime-fortnite"
                    }, l.createElement(g.a, null, l.createElement(y._8, {
                        margin: 2,
                        fullWidth: !0,
                        textAlign: y._43.Center
                    }, l.createElement(y._8, {
                        className: "twitch-prime-fortnite__header__text"
                    }, l.createElement(y.Q, {
                        type: y._47.H1,
                        color: y.K.Overlay,
                        transform: y._46.Uppercase
                    }, Object(m.d)("Twitch Prime Pack #2", "TwitchPrimeFortnite")))), l.createElement(y._8, {
                        fullWidth: !0,
                        margin: 3,
                        display: y.R.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._7.Center,
                        flexWrap: y.U.Wrap,
                        textAlign: y._43.Center
                    }, l.createElement(y._8, {
                        className: "twitch-prime-fortnite__description"
                    }, l.createElement(y.Q, {
                        type: y._47.H2,
                        transform: y._46.Uppercase,
                        color: y.K.Overlay,
                        bold: !0
                    }, Object(m.d)("Get exclusive Fortnite loot by linking your Epic games account or start your Twitch Prime free trial below to get started.", "TwitchPrimeFortnite"))))), l.createElement(b, null), this.renderCTAs())
                }, t
            }(l.Component),
            x = Object(s.compose)(Object(_.d)("TwitchPrimeFortnitePage", {
                destination: f.a.TwitchPrimeFortnitePage
            }), Object(d.a)(v), Object(u.a)({
                location: h.PageviewLocation.TwitchPrimeFortnitePage
            }))(E);
        var O = Object(n.b)(null, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(o.f)(a.a.TopNavLoginButton)
                }
            }, e)
        })(x);
        r.d(t, "TwitchPrimeFortnitePage", function() {
            return O
        })
    },
    TCPX: function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            i = r("Odds"),
            a = (r("0blB"), function(e) {
                return n.createElement(i._8, {
                    display: i.R.Flex,
                    justifyContent: i._7.Center
                }, n.createElement(i._8, {
                    className: "twitch-prime-call-to-action " + e.className,
                    padding: {
                        y: 4,
                        x: 3
                    },
                    textAlign: i._43.Center,
                    alignItems: i.c.Center,
                    display: i.R.Flex,
                    flexDirection: i.T.Column,
                    margin: 2
                }, n.createElement(i._2, {
                    "data-test-selector": e.dataTestSelector,
                    "data-a-selector": e.dataASelector
                }, n.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, n.createElement(i._8, {
                    className: "fortnite-bold"
                }, n.createElement(i.Q, {
                    type: i._47.H2,
                    transform: i._46.Uppercase,
                    bold: !0
                }, e.title)), e.body && n.createElement(i._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, n.createElement(i.Q, {
                    type: i._47.P,
                    transform: i._46.Uppercase
                }, e.body))))))
            }),
            o = a;
        r.d(t, !1, function() {
            return a
        }), r.d(t, "a", function() {
            return o
        })
    },
    c6bv: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("HW6M"),
            a = r("GiK3"),
            o = r("CSlQ"),
            c = r("Odds"),
            l = (r("zaS7"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = i({
                            "twitch-prime-fortnite-header": !0,
                            "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                        }),
                        t = i({
                            "twitch-prime-fortnite__header__logo": !0,
                            "twitch-prime-fortnite__header__logo--centered": this.props.alwaysCentered
                        });
                    return a.createElement(c._8, {
                        className: "twitch-prime-fortnite__header__container",
                        padding: 1
                    }, a.createElement(c._8, {
                        className: e
                    }, a.createElement(c._8, {
                        className: "twitch-prime-fortnite__header",
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        justifyContent: c._7.Start,
                        flexWrap: c.U.Wrap,
                        textAlign: c._43.Left,
                        "data-test-selector": "twitch-prime-fortnite-header",
                        margin: {
                            y: 0,
                            x: "auto"
                        }
                    }, a.createElement(c._8, {
                        margin: 2,
                        fullWidth: !0,
                        textAlign: c._43.Center
                    }, a.createElement(c._8, {
                        className: t
                    }, a.createElement("img", {
                        src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                    }))), this.props.children)))
                }, t
            }(a.Component)),
            s = Object(o.d)("TwitchPrimeBrandedHeader")(l);
        r.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), r.d(t, !1, function() {
            return l
        }), r.d(t, "a", function() {
            return s
        })
    },
    "j7/Y": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("OAwv"),
            a = r("GiK3"),
            o = r("F8kA"),
            c = r("6sO2");

        function l(e) {
            return function(t) {
                var r = function(r) {
                    function o(t) {
                        var i = r.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = n.__assign({}, e.properties));
                                var r = n.__assign({}, i.props);
                                r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    l = a.medium,
                                    s = a.content_index;
                                c.o.tracking.trackPageview(n.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: s,
                                    location: e.location
                                }, t))
                            }
                        }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return n.__extends(o, r), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                            "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, n.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            r = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, r.medium || r.content) {
                            var n = "",
                                a = i.stringify(t);
                            a.length > 0 && (n = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: n
                            })
                        }
                        return r
                    }, o
                }(a.Component);
                return Object(o.f)(r)
            }
        }
        r.d(t, "a", function() {
            return l
        })
    },
    kQ9X: function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TwitchPrime_Page_Fortnite"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 63
            }
        };
        r.loc.source = {
            body: "query TwitchPrime_Page_Fortnite {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-fortnite-0aab8368477056d91e7b44f95b469212.js.map