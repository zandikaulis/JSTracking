webpackJsonp([88], {
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
                }, i.createElement(c._7, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(c.u, {
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
                return i.createElement(r._1, {
                    margin: {
                        x: 2
                    },
                    "data-test-selector": e.dataTestSelector,
                    "data-a-selector": e.dataASelector
                }, i.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, i.createElement(r._7, {
                    className: "twitch-prime-call-to-action " + e.className,
                    padding: {
                        y: 4,
                        x: 3
                    },
                    textAlign: r._40.Center,
                    alignItems: r.c.Center,
                    display: r.Q.Flex,
                    flexDirection: r.S.Column,
                    margin: {
                        x: "auto",
                        y: 3
                    }
                }, i.createElement(r._7, null, i.createElement(r.P, {
                    type: r._44.H3,
                    transform: r._43.Uppercase,
                    bold: !0
                }, e.title)), e.body && i.createElement(r._7, {
                    margin: {
                        y: 1
                    }
                }, i.createElement(r.P, {
                    type: r._44.P,
                    transform: r._43.Uppercase,
                    bold: !0
                }, e.body)))))
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
            u = n("CSlQ"),
            m = n("TCPX"),
            d = n("Odds"),
            p = n("PqVi"),
            f = (n("gjwU"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!o.b.get("twitch_prime_fortnite", !1)) return r.createElement(l.a, null);
                    var e = this.props.data;
                    if (e.loading) return null;
                    var t = e && e.currentUser;
                    return e.error || !t ? r.createElement(c.b, {
                        to: "/fortnite"
                    }) : r.createElement(d._7, {
                        display: d.Q.Flex,
                        flexDirection: d.S.Column,
                        justifyContent: d._6.Center,
                        breakpointMedium: {
                            flexDirection: d.S.Row
                        },
                        className: "twitch-prime-link"
                    }, this.renderLinkCallToAction())
                }, t.prototype.renderLinkCallToAction = function() {
                    var e = o.b.get("twitch_prime_fortnite_link_url", "https://www.epicgames.com");
                    return r.createElement(m.a, {
                        href: e,
                        className: "twitch-prime-call-to-action--link",
                        title: Object(o.d)("Click here to claim", "TwitchPrimeLink"),
                        body: Object(o.d)("Link your Epic account to your Twitch Prime account", "TwitchPrimeLink"),
                        dataTestSelector: "twitch-prime__call-to-action"
                    })
                }, t
            }(r.Component)),
            _ = Object(a.compose)(Object(u.d)("TwitchPrimeLink", {
                autoReportInteractive: !0
            }), Object(s.a)(p))(f);
        n.d(t, "CALL_TO_ACTION_SELECTOR", function() {
            return "twitch-prime__call-to-action"
        }), n.d(t, "TwitchPrimeLink", function() {
            return _
        })
    },
    gjwU: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-link-12bfae31873345bf49b0d50ee08c350b.js.map