webpackJsonp([87], {
    "0blB": function(e, t) {},
    "68hr": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("6sO2"),
            a = n("yWCw"),
            c = n("Odds"),
            o = function() {
                return i.createElement(a.a, {
                    message: Object(r.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(c._8, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(c.v, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(r.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    PqVi: function(e, t) {
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
    TCPX: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("Odds"),
            a = (n("0blB"), function(e) {
                return i.createElement(r._8, {
                    display: r.R.Flex,
                    justifyContent: r._7.Center
                }, i.createElement(r._8, {
                    className: "twitch-prime-call-to-action " + e.className,
                    padding: {
                        y: 4,
                        x: 3
                    },
                    textAlign: r._42.Center,
                    alignItems: r.c.Center,
                    display: r.R.Flex,
                    flexDirection: r.T.Column,
                    margin: 2
                }, i.createElement(r._2, {
                    "data-test-selector": e.dataTestSelector,
                    "data-a-selector": e.dataASelector
                }, i.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, i.createElement(r._8, null, i.createElement(r.Q, {
                    type: r._46.H2,
                    transform: r._45.Uppercase,
                    bold: !0
                }, e.title)), e.body && i.createElement(r._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, i.createElement(r.Q, {
                    type: r._46.P,
                    transform: r._45.Uppercase
                }, e.body))))))
            }),
            c = a;
        n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return c
        })
    },
    VQpm: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            c = n("CIox"),
            o = n("6sO2"),
            l = n("68hr"),
            s = n("7vx8"),
            m = n("CSlQ"),
            d = n("c6bv"),
            u = n("TCPX"),
            p = n("Odds"),
            _ = n("PqVi"),
            h = (n("gjwU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: void 0
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!o.b.get("twitch_prime_fortnite", !1)) return r.createElement(l.a, null);
                    var e = this.props.data;
                    if (e.loading) return null;
                    var t = e && e.currentUser;
                    return e.error || !t ? r.createElement(c.b, {
                        to: "/prime/fortnite"
                    }) : r.createElement(p._8, {
                        display: p.R.Flex,
                        flexDirection: p.T.Column,
                        justifyContent: p._7.Center,
                        className: "twitch-prime-fortnite twitch-prime-link"
                    }, r.createElement(p._8, {
                        className: "twitch-prime-link__header",
                        fullWidth: !0
                    }, r.createElement(d.a, {
                        alwaysCentered: !0
                    })), r.createElement(p._8, {
                        className: "twitch-prime-link__body",
                        textAlign: p._42.Center,
                        margin: {
                            y: 2
                        }
                    }, r.createElement(p.Q, {
                        type: p._46.H1,
                        transform: p._45.Uppercase,
                        color: p.K.Link
                    }, Object(o.d)("Link your account", "TwitchPrimeLink"))), this.renderLinkCallToAction(), r.createElement(p._8, {
                        className: "twitch-prime-link__after",
                        textAlign: p._42.Center,
                        margin: {
                            y: 2
                        }
                    }, r.createElement(p.Q, {
                        type: p._46.H1,
                        transform: p._45.Uppercase,
                        color: p.K.Link
                    }, Object(o.d)("Playing On PS4 or XBOX?", "TwitchPrimeLink")), r.createElement(p.Q, {
                        type: p._46.H3,
                        color: p.K.Link
                    }, Object(o.d)("Be sure to click “Yes, find my account” on the next page, and then sign in using the console account you have been playing Fortnite on.", "TwitchPrimeLink"))))
                }, t.prototype.renderLinkCallToAction = function() {
                    var e = o.b.get("twitch_prime_fortnite_link_url", "https://www.epicgames.com");
                    return r.createElement(u.a, {
                        href: e,
                        className: "twitch-prime-call-to-action--link",
                        title: Object(o.d)("Click here to claim", "TwitchPrimeLink"),
                        body: Object(o.d)("Link your Epic account to your Twitch Prime account", "TwitchPrimeLink"),
                        dataTestSelector: "twitch-prime__call-to-action"
                    })
                }, t
            }(r.Component)),
            f = Object(a.compose)(Object(m.d)("TwitchPrimeLink", {
                autoReportInteractive: !0
            }), Object(s.a)(_))(h);
        n.d(t, "CALL_TO_ACTION_SELECTOR", function() {
            return "twitch-prime__call-to-action"
        }), n.d(t, "TwitchPrimeLink", function() {
            return f
        })
    },
    c6bv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("GiK3"),
            c = n("CSlQ"),
            o = n("Odds"),
            l = (n("zaS7"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r({
                            "twitch-prime-fortnite-header": !0,
                            "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                        }),
                        t = r({
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
            s = Object(c.d)("TwitchPrimeBrandedHeader")(l);
        n.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return s
        })
    },
    gjwU: function(e, t) {},
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-link-887577469512cf90639ecb1b0c9b3149.js.map