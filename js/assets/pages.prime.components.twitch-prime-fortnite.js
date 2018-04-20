webpackJsonp([89], {
    "0blB": function(e, t) {},
    "68hr": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("6sO2"),
            a = n("yWCw"),
            c = n("Odds"),
            o = function() {
                return r.createElement(a.a, {
                    message: Object(i.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, r.createElement(c._7, {
                    margin: {
                        top: 2
                    }
                }, r.createElement(c.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(i.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    CbAp: function(e, t) {
        var n = {
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
        n.loc.source = {
            body: "query TwitchPrime_Page_Fortnite {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    F35x: function(e, t) {},
    HnrI: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("+xm8"),
            c = n("f2i/"),
            o = n("TToO"),
            l = n("GiK3"),
            s = n("3zLD"),
            u = n("6sO2"),
            m = n("68hr"),
            d = n("7vx8"),
            p = n("CSlQ"),
            f = n("TCPX"),
            h = n("Odds"),
            g = n("CbAp"),
            b = (n("F35x"), "twitch-prime-signup-call-to-action"),
            C = "twitch-prime-claim-call-to-action",
            _ = "twitch-prime-login-call-to-action",
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCTAs = function() {
                        var e = t.getCurrentUser();
                        return l.createElement(h._7, {
                            display: h.Q.Flex,
                            flexDirection: h.S.Column,
                            justifyContent: h._6.Center,
                            breakpointMedium: {
                                flexDirection: h.S.Row
                            }
                        }, !e && t.renderLoginCTA(), !t.hasPrime() && t.renderSignupCTA(), t.hasPrime() && t.renderClaimCTA())
                    }, t.renderLoginCTA = function() {
                        return l.createElement(f.a, {
                            className: "twitch-prime-call-to-action--login",
                            title: Object(u.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                            onClick: t.onLoginClick,
                            dataTestSelector: _,
                            href: "#"
                        })
                    }, t.renderSignupCTA = function() {
                        var e = u.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                        return l.createElement(f.a, {
                            className: "twitch-prime-call-to-action--signup",
                            title: Object(u.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                            href: e,
                            dataTestSelector: b
                        })
                    }, t.renderClaimCTA = function() {
                        return l.createElement(f.a, {
                            className: "twitch-prime-call-to-action--claim",
                            title: Object(u.d)("Click here to claim", "TwitchPrimeFortnite"),
                            href: "/prime/fortnite/link",
                            dataTestSelector: C
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
                    var e = u.b.get("twitch_prime_fortnite", !1);
                    return this.props.data.error || !e ? l.createElement(m.a, null) : this.props.data.loading ? l.createElement(h._7, null) : l.createElement(h._7, {
                        className: "twitch-prime-fortnite"
                    }, this.renderCTAs())
                }, t
            }(l.Component),
            T = Object(s.compose)(Object(p.d)("TwitchPrimeFortnite", {}), Object(d.a)(g))(v);
        var w = Object(r.b)(null, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(c.f)(a.a.TopNavLoginButton)
                }
            }, e)
        })(T);
        n.d(t, "TwitchPrimeFortnite", function() {
            return w
        })
    },
    TCPX: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds"),
            a = (n("0blB"), function(e) {
                return r.createElement(i._1, {
                    margin: {
                        x: 2
                    },
                    "data-test-selector": e.dataTestSelector,
                    "data-a-selector": e.dataASelector
                }, r.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, r.createElement(i._7, {
                    className: "twitch-prime-call-to-action " + e.className,
                    padding: {
                        y: 4,
                        x: 3
                    },
                    textAlign: i._40.Center,
                    alignItems: i.c.Center,
                    display: i.Q.Flex,
                    flexDirection: i.S.Column,
                    margin: {
                        x: "auto",
                        y: 3
                    }
                }, r.createElement(i._7, null, r.createElement(i.P, {
                    type: i._44.H3,
                    transform: i._43.Uppercase,
                    bold: !0
                }, e.title)), e.body && r.createElement(i._7, {
                    margin: {
                        y: 1
                    }
                }, r.createElement(i.P, {
                    type: i._44.P,
                    transform: i._43.Uppercase,
                    bold: !0
                }, e.body)))))
            }),
            c = a;
        n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return c
        })
    }
});
//# sourceMappingURL=pages.prime.components.twitch-prime-fortnite-adce7e8892ac0d92bc85dda00a756b8f.js.map