webpackJsonp([109], {
    "0blB": function(e, t) {},
    "7XNA": function(e, t) {
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
        var r = n("GiK3"),
            i = n("Odds"),
            a = (n("0blB"), function(e) {
                return r.createElement(i._8, {
                    display: i.R.Flex,
                    justifyContent: i._7.Center
                }, r.createElement(i._8, {
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
                }, r.createElement(i._2, {
                    "data-test-selector": e.dataTestSelector,
                    "data-a-selector": e.dataASelector
                }, r.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, r.createElement(i._8, {
                    className: "fortnite-bold"
                }, r.createElement(i.Q, {
                    type: i._47.H2,
                    transform: i._46.Uppercase,
                    bold: !0
                }, e.title)), e.body && r.createElement(i._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, r.createElement(i.Q, {
                    type: i._47.P,
                    transform: i._46.Uppercase
                }, e.body))))))
            }),
            c = a;
        n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return c
        })
    },
    Uen5: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("3zLD"),
            c = n("CIox"),
            o = n("6sO2"),
            s = n("68hr"),
            l = n("7vx8"),
            m = n("j7/Y"),
            d = n("oIkB"),
            p = n("w9tK"),
            u = n("vH/s"),
            f = n("CSlQ"),
            _ = n("/3Cb"),
            h = n("Kckk"),
            g = n("c6bv"),
            k = n("TCPX"),
            w = n("Odds"),
            y = n("7XNA"),
            T = (n("r3tw"), "twitch-prime__call-to-action"),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: void 0,
                        claiming: !1
                    }, t.renderLinkExperience = function() {
                        return i.createElement(w._8, null, i.createElement(w._8, {
                            className: "twitch-prime-linking__body",
                            textAlign: w._43.Center,
                            margin: {
                                y: 2
                            }
                        }, i.createElement(w.Q, {
                            type: w._47.H1,
                            transform: w._46.Uppercase,
                            color: w.K.Link
                        }, Object(o.d)("Link your account", "TwitchPrimeLinking"))), !t.state.claiming && t.renderLinkCallToAction(), t.state.claiming && t.renderSpinner())
                    }, t.renderErrorExperience = function() {
                        return i.createElement(w._8, null, i.createElement(w._8, {
                            className: "twitch-prime-linking__error__body",
                            textAlign: w._43.Center,
                            margin: {
                                y: 2
                            }
                        }, i.createElement(w.Q, {
                            type: w._47.H1,
                            transform: w._46.Uppercase,
                            color: w.K.Link
                        }, Object(o.d)("Oops, something happened", "TwitchPrimeLinking")), i.createElement(w._8, {
                            className: "twitch-prime-linking__after",
                            textAlign: w._43.Center,
                            margin: {
                                y: 2
                            }
                        }, i.createElement(w.Q, {
                            type: w._47.H3,
                            color: w.K.Link
                        }, Object(h.f)(t.state.error))), t.renderRefreshCallToAction()))
                    }, t.renderRefreshCallToAction = function() {
                        return i.createElement(k.a, {
                            className: "twitch-prime-call-to-action--refresh",
                            title: Object(o.d)("Click here to refresh", "TwitchPrimeLinking"),
                            body: Object(o.d)("Refresh to try claiming and linking your account again", "TwitchPrimeLinking"),
                            onClick: t.claimOffer,
                            dataTestSelector: T,
                            href: "/prime/fortnite/link"
                        })
                    }, t.renderLinkCallToAction = function() {
                        return i.createElement(k.a, {
                            className: "twitch-prime-call-to-action--link",
                            title: Object(o.d)("Click here to claim", "TwitchPrimeLinking"),
                            body: Object(o.d)("Link your Epic account to your Twitch Prime account", "TwitchPrimeLinking"),
                            onClick: t.claimOffer,
                            dataTestSelector: T,
                            href: "#"
                        })
                    }, t.renderSpinner = function() {
                        return i.createElement(w._8, {
                            className: "twitch-prime-linking__spinner",
                            display: w.R.Flex,
                            alignItems: w.c.Center,
                            justifyContent: w._7.Center
                        }, i.createElement(w._10, null))
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var r = o.b.get("twitch_prime_fortnite_offer_id", "d2b1726e-ebd9-05a2-95ee-9d37fcfd0a8a"),
                                i = Object(d.a)({
                                    offerID: r
                                });
                            t.props.claimPrimeOffer(i).then(function(e) {
                                var n = (e.data || {}).claimPrimeOffer || {},
                                    r = n.self || {},
                                    i = n.error || {};
                                if (r.hasEntitlement) {
                                    var a = o.b.get("twitch_prime_fortnite_link_url", "https://www.epicgames.com");
                                    window.location.replace(a)
                                }
                                if (i.code) {
                                    var c = h.b[i.code];
                                    t.setState({
                                        claiming: !1,
                                        error: c || h.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    error: h.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!o.b.get("twitch_prime_fortnite", !1)) return i.createElement(s.a, null);
                    var e = this.props.data;
                    if (e.loading) return null;
                    var t = e && e.currentUser;
                    return !e.error && t && t.hasPrime ? i.createElement(w._8, {
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        justifyContent: w._7.Center,
                        className: "twitch-prime-fortnite twitch-prime-linking"
                    }, i.createElement(w._8, {
                        className: "twitch-prime-linking__header",
                        fullWidth: !0
                    }, i.createElement(g.a, {
                        alwaysCentered: !0
                    })), !this.state.error && this.renderLinkExperience(), this.state.error && this.renderErrorExperience()) : i.createElement(c.b, {
                        to: "/prime/fortnite"
                    })
                }, t
            }(i.Component),
            E = Object(a.compose)(Object(f.d)("TwitchPrimeLinkingPage", {
                destination: p.a.TwitchPrimeLinkingPage
            }), Object(l.a)(y), Object(l.a)(_, {
                name: "claimPrimeOffer"
            }), Object(m.a)({
                location: u.PageviewLocation.TwitchPrimeLinkingPage
            }))(v);
        n.d(t, "CALL_TO_ACTION_SELECTOR", function() {
            return T
        }), n.d(t, "TwitchPrimeLinkingPage", function() {
            return E
        })
    },
    c6bv: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("HW6M"),
            a = n("GiK3"),
            c = n("CSlQ"),
            o = n("Odds"),
            s = (n("zaS7"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
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
                        textAlign: o._43.Left,
                        "data-test-selector": "twitch-prime-fortnite-header",
                        margin: {
                            y: 0,
                            x: "auto"
                        }
                    }, a.createElement(o._8, {
                        margin: 2,
                        fullWidth: !0,
                        textAlign: o._43.Center
                    }, a.createElement(o._8, {
                        className: t
                    }, a.createElement("img", {
                        src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                    }))), this.props.children)))
                }, t
            }(a.Component)),
            l = Object(c.d)("TwitchPrimeBrandedHeader")(s);
        n.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return l
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("OAwv"),
            a = n("GiK3"),
            c = n("F8kA"),
            o = n("6sO2");

        function s(e) {
            return function(t) {
                var n = function(n) {
                    function c(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    c = a.content,
                                    s = a.medium,
                                    l = a.content_index;
                                o.o.tracking.trackPageview(r.__assign({
                                    content: c,
                                    medium: s,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, o.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(c, n), c.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, c.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, c.prototype.render = function() {
                        return a.createElement(t, r.__assign({}, this.props))
                    }, c.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                a = i.stringify(t);
                            a.length > 0 && (r = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, c
                }(a.Component);
                return Object(c.f)(n)
            }
        }
        n.d(t, "a", function() {
            return s
        })
    },
    r3tw: function(e, t) {},
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-linking-10b2ec2f979717421cf6ec364fe9c132.js.map