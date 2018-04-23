webpackJsonp([88], {
    "0blB": function(e, t) {},
    "68hr": function(e, t, r) {
        "use strict";
        var n = r("GiK3"),
            i = r("6sO2"),
            a = r("yWCw"),
            c = r("Odds"),
            o = function() {
                return n.createElement(a.a, {
                    message: Object(i.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, n.createElement(c._8, {
                    margin: {
                        top: 2
                    }
                }, n.createElement(c.v, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(i.d)("Browse channels", "PageNotFound"))))
            };
        r.d(t, "a", function() {
            return o
        })
    },
    F35x: function(e, t) {},
    HnrI: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("RH2O"),
            i = r("2KeS"),
            a = r("+xm8"),
            c = r("f2i/"),
            o = r("TToO"),
            l = r("GiK3"),
            m = r("3zLD"),
            s = r("6sO2"),
            u = r("68hr"),
            d = r("7vx8"),
            p = r("CSlQ"),
            h = r("c6bv"),
            f = r("TCPX"),
            _ = r("Odds"),
            g = r("kQ9X"),
            w = (r("F35x"), "twitch-prime-signup-call-to-action"),
            y = "twitch-prime-claim-call-to-action",
            b = "twitch-prime-login-call-to-action",
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCTAs = function() {
                        var e = t.getCurrentUser();
                        return l.createElement(_._8, {
                            display: _.R.Flex,
                            flexDirection: _.T.Column,
                            justifyContent: _._7.Center,
                            breakpointMedium: {
                                flexDirection: _.T.Row
                            },
                            margin: {
                                x: "auto",
                                y: 3
                            }
                        }, !e && t.renderLoginCTA(), !t.hasPrime() && t.renderSignupCTA(), t.hasPrime() && t.renderClaimCTA())
                    }, t.renderLoginCTA = function() {
                        var e = Object(s.d)("1. Click here to log-in", "TwitchPrimeFortnite"),
                            r = Object(s.d)('2. Click "claim" to link your account', "TwitchPrimeFortnite"),
                            n = l.createElement(_._8, null, e, l.createElement("br", null), r);
                        return l.createElement(f.a, {
                            className: "twitch-prime-call-to-action--login",
                            title: Object(s.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                            body: n,
                            onClick: t.onLoginClick,
                            dataTestSelector: b,
                            href: "#"
                        })
                    }, t.renderSignupCTA = function() {
                        var e = s.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                        return l.createElement(f.a, {
                            className: "twitch-prime-call-to-action--signup",
                            title: Object(s.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                            body: Object(s.d)("Start your free trial of amazon prime here", "TwitchPrimeFortnite"),
                            href: e,
                            dataTestSelector: w
                        })
                    }, t.renderClaimCTA = function() {
                        return l.createElement(f.a, {
                            className: "twitch-prime-call-to-action--claim",
                            title: Object(s.d)("Click here to claim", "TwitchPrimeFortnite"),
                            body: Object(s.d)("Link your Epic account to your Twitch Prime account", "TwitchPrimeFortnite"),
                            href: "/prime/fortnite/link",
                            dataTestSelector: y
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
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = s.b.get("twitch_prime_fortnite", !1);
                    return this.props.data.error || !e ? l.createElement(u.a, null) : this.props.data.loading ? l.createElement(_._8, null) : l.createElement(_._8, {
                        className: "twitch-prime-fortnite"
                    }, l.createElement(h.a, null, l.createElement(_._8, {
                        margin: 2,
                        fullWidth: !0,
                        textAlign: _._42.Center
                    }, l.createElement(_._8, {
                        className: "twitch-prime-fortnite__header__text"
                    }, l.createElement(_.Q, {
                        type: _._46.H1,
                        color: _.K.Overlay,
                        transform: _._45.Uppercase
                    }, Object(s.d)("Twitch Prime Pack #2", "TwitchPrimeFortnite")))), l.createElement(_._8, {
                        fullWidth: !0,
                        margin: 3,
                        display: _.R.Flex,
                        alignItems: _.c.Center,
                        justifyContent: _._7.Center,
                        flexWrap: _.U.Wrap,
                        textAlign: _._42.Center
                    }, l.createElement(_._8, {
                        className: "twitch-prime-fortnite__description"
                    }, l.createElement(_.Q, {
                        type: _._46.H2,
                        transform: _._45.Uppercase,
                        color: _.K.Overlay,
                        bold: !0
                    }, Object(s.d)("Get exclusive Fortnite loot by linking your Epic games account or start your Twitch Prime free trial below to get started.", "TwitchPrimeFortnite"))))), this.renderCTAs())
                }, t
            }(l.Component),
            T = Object(m.compose)(Object(p.d)("TwitchPrimeFortnite", {}), Object(d.a)(g))(C);
        var v = Object(n.b)(null, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(c.f)(a.a.TopNavLoginButton)
                }
            }, e)
        })(T);
        r.d(t, "TwitchPrimeFortnite", function() {
            return v
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
                    textAlign: i._42.Center,
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
                }, n.createElement(i._8, null, n.createElement(i.Q, {
                    type: i._46.H2,
                    transform: i._45.Uppercase,
                    bold: !0
                }, e.title)), e.body && n.createElement(i._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, n.createElement(i.Q, {
                    type: i._46.P,
                    transform: i._45.Uppercase
                }, e.body))))))
            }),
            c = a;
        r.d(t, !1, function() {
            return a
        }), r.d(t, "a", function() {
            return c
        })
    },
    c6bv: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("HW6M"),
            a = r("GiK3"),
            c = r("CSlQ"),
            o = r("Odds"),
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
                    return a.createElement(o._8, {
                        className: "twitch-prime-fortnite__header__container",
                        padding: 1
                    }, a.createElement(o._8, {
                        className: e
                    }, a.createElement(o._8, {
                        className: "twitch-prime-fortnite__header",
                        display: o.R.Flex,
                        alignItems: o.c.Center,
                        justifyContent: o._7.Start,
                        flexWrap: o.U.Wrap,
                        textAlign: o._42.Left,
                        "data-test-selector": "twitch-prime-fortnite-header",
                        margin: {
                            y: 0,
                            x: "auto"
                        }
                    }, a.createElement(o._8, {
                        margin: 2,
                        fullWidth: !0,
                        textAlign: o._42.Center
                    }, a.createElement(o._8, {
                        className: t
                    }, a.createElement("img", {
                        src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                    }))), this.props.children)))
                }, t
            }(a.Component)),
            m = Object(c.d)("TwitchPrimeBrandedHeader")(l);
        r.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), r.d(t, !1, function() {
            return l
        }), r.d(t, "a", function() {
            return m
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
//# sourceMappingURL=pages.prime.components.twitch-prime-fortnite-c86f6f8fd439fc7855af15ccfbe393fc.js.map