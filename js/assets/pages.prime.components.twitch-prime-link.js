webpackJsonp([94], {
    "0blB": function(e, t) {},
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
            m = n("7vx8"),
            s = n("oIkB"),
            d = n("CSlQ"),
            u = n("/3Cb"),
            p = n("R0Kh"),
            f = n("c6bv"),
            _ = n("TCPX"),
            h = n("Odds"),
            g = n("PqVi"),
            w = (n("gjwU"), "twitch-prime__call-to-action"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: void 0,
                        claiming: !1
                    }, t.renderLinkCallToAction = function() {
                        return r.createElement(_.a, {
                            className: "twitch-prime-call-to-action--link",
                            title: Object(o.d)("Click here to claim", "TwitchPrimeLink"),
                            body: Object(o.d)("Link your Epic account to your Twitch Prime account", "TwitchPrimeLink"),
                            onClick: t.claimOffer,
                            dataTestSelector: w,
                            href: "#"
                        })
                    }, t.renderSpinner = function() {
                        return r.createElement(h._8, {
                            className: "twitch-prime-link__spinner",
                            display: h.R.Flex,
                            alignItems: h.c.Center
                        }, r.createElement(h._10, null))
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = o.b.get("twitch_prime_fortnite_offer_id", "d2b1726e-ebd9-05a2-95ee-9d37fcfd0a8a"),
                                r = Object(s.a)({
                                    offerID: i
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = (e.data || {}).claimPrimeOffer || {},
                                    i = n.self || {},
                                    r = n.error || {};
                                if (i.hasEntitlement) {
                                    var a = o.b.get("twitch_prime_fortnite_link_url", "https://www.epicgames.com");
                                    window.location.replace(a)
                                }
                                if (r.code) {
                                    var c = p.b[r.code];
                                    t.setState({
                                        claiming: !1,
                                        error: c || p.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    error: p.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!o.b.get("twitch_prime_fortnite", !1)) return r.createElement(l.a, null);
                    var e = this.props.data;
                    if (e.loading) return null;
                    var t = e && e.currentUser;
                    return !e.error && t && t.hasPrime ? r.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Column,
                        justifyContent: h._7.Center,
                        className: "twitch-prime-fortnite twitch-prime-link"
                    }, r.createElement(h._8, {
                        className: "twitch-prime-link__header",
                        fullWidth: !0
                    }, r.createElement(f.a, {
                        alwaysCentered: !0
                    })), r.createElement(h._8, {
                        className: "twitch-prime-link__body",
                        textAlign: h._42.Center,
                        margin: {
                            y: 2
                        }
                    }, r.createElement(h.Q, {
                        type: h._46.H1,
                        transform: h._45.Uppercase,
                        color: h.K.Link
                    }, Object(o.d)("Link your account", "TwitchPrimeLink"))), !this.state.claiming && this.renderLinkCallToAction(), this.state.claiming && this.renderSpinner(), r.createElement(h._8, {
                        className: "twitch-prime-link__after",
                        textAlign: h._42.Center,
                        margin: {
                            y: 2
                        }
                    }, r.createElement(h.Q, {
                        type: h._46.H1,
                        transform: h._45.Uppercase,
                        color: h.K.Link
                    }, Object(o.d)("Playing On PS4 or XBOX?", "TwitchPrimeLink")), r.createElement(h.Q, {
                        type: h._46.H3,
                        color: h.K.Link
                    }, Object(o.d)("Be sure to click “Yes, find my account” on the next page, and then sign in using the console account you have been playing Fortnite on.", "TwitchPrimeLink")))) : r.createElement(c.b, {
                        to: "/prime/fortnite"
                    })
                }, t
            }(r.Component),
            k = Object(a.compose)(Object(d.d)("TwitchPrimeLink", {
                autoReportInteractive: !0
            }), Object(m.a)(g), Object(m.a)(u, {
                name: "claimPrimeOffer"
            }))(y);
        n.d(t, "CALL_TO_ACTION_SELECTOR", function() {
            return w
        }), n.d(t, "TwitchPrimeLink", function() {
            return k
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
            m = Object(c.d)("TwitchPrimeBrandedHeader")(l);
        n.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return m
        })
    },
    gjwU: function(e, t) {},
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-link-983e26eea86797c5ccbe8369b7a8dc9d.js.map