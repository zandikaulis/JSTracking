webpackJsonp([110], {
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
            s = r("GiK3"),
            l = r("3zLD"),
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
                if (e) return s.createElement(y._8, {
                    display: y.R.Flex,
                    margin: {
                        y: 1
                    }
                }, s.createElement(y.Q, {
                    type: y._49.H3,
                    bold: !0,
                    transform: y._48.Uppercase,
                    color: y.K.Link
                }, e))
            }),
            k = function() {
                return s.createElement(y._8, {
                    className: "twitch-prime-fortnite-offers",
                    padding: {
                        x: 2
                    }
                }, s.createElement(y._8, {
                    className: "twitch-prime-fortnite-offers__announce",
                    margin: {
                        bottom: 4
                    }
                }, s.createElement(y._8, {
                    className: "twitch-prime-fortnite-offers__announce__main",
                    textAlign: y._45.Center,
                    padding: {
                        y: .5
                    },
                    position: y._15.Relative
                }, s.createElement(y.Q, {
                    type: y._49.H3,
                    bold: !0,
                    transform: y._48.Uppercase,
                    color: y.K.Link
                }, Object(m.d)("Exclusive!", "TwitchPrimeFortniteOffers")))), T(Object(m.d)("Battle Royale Trailblazer Outfit", "TwitchPrimeFortniteOffers")), T(Object(m.d)("Battle Royale True North Back Bling", "TwitchPrimeFortniteOffers")), T(Object(m.d)("Battle Royale Tenderizer Pickaxe", "TwitchPrimeFortniteOffers")), T(Object(m.d)("Battle Royale Freestylin’ Emote", "TwitchPrimeFortniteOffers")))
            },
            v = r("kQ9X"),
            C = (r("F35x"), "twitch-prime-signup-call-to-action"),
            P = "twitch-prime-claim-call-to-action",
            b = "twitch-prime-login-call-to-action",
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDescription = function() {
                        return s.createElement(y._8, null, s.createElement(y._8, {
                            fullWidth: !0,
                            textAlign: y._45.Center,
                            margin: {
                                y: 2
                            }
                        }, s.createElement(y._8, {
                            className: "twitch-prime-fortnite__header__text"
                        }, s.createElement(y.Q, {
                            type: y._49.H1,
                            color: y.K.Overlay,
                            transform: y._48.Uppercase
                        }, Object(m.d)("Twitch Prime Pack #2", "TwitchPrimeFortnite")))), s.createElement(y._8, {
                            fullWidth: !0,
                            display: y.R.Flex,
                            alignItems: y.c.Center,
                            justifyContent: y._7.Center,
                            flexWrap: y.U.Wrap,
                            textAlign: y._45.Center
                        }, s.createElement(y._8, {
                            className: "twitch-prime-fortnite__description",
                            margin: {
                                bottom: 3
                            }
                        }, s.createElement(y.Q, {
                            type: y._49.H3,
                            transform: y._48.Uppercase,
                            color: y.K.Overlay,
                            bold: !0
                        }, Object(m.d)("Get exclusive Fortnite loot included with Twitch Prime", "TwitchPrimeFortnite")))))
                    }, t.renderCTAs = function() {
                        var e = t.getCurrentUser();
                        return s.createElement(y._8, {
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
                        return s.createElement(w.a, {
                            className: "twitch-prime-call-to-action--login",
                            title: Object(m.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                            body: Object(m.d)("Click here to login and get started", "TwitchPrimeFortnite"),
                            onClick: t.onLoginClick,
                            dataTestSelector: b,
                            href: "#"
                        })
                    }, t.renderSignupCTA = function() {
                        var e = m.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                        return s.createElement(w.a, {
                            className: "twitch-prime-call-to-action--signup",
                            title: Object(m.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                            body: Object(m.d)("Click here to start your free trial or link your Amazon Prime account", "TwitchPrimeFortnite"),
                            href: e,
                            dataTestSelector: C
                        })
                    }, t.renderClaimCTA = function() {
                        return s.createElement(w.a, {
                            className: "twitch-prime-call-to-action--claim",
                            title: Object(m.d)("Click here for your loot", "TwitchPrimeFortnite"),
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
                    return this.props.data.error || !e ? s.createElement(p.a, null) : this.props.data.loading ? s.createElement(y._8, null) : s.createElement(y._8, {
                        className: "twitch-prime-fortnite"
                    }, s.createElement(g.a, {
                        renderOfferImage: !0
                    }, this.renderDescription()), s.createElement(k, null), this.renderCTAs())
                }, t
            }(s.Component),
            x = Object(l.compose)(Object(_.d)("TwitchPrimeFortnitePage", {
                destination: f.a.TwitchPrimeFortnitePage
            }), Object(d.a)(v), Object(u.a)({
                location: h.PageviewLocation.TwitchPrimeFortnitePage
            }))(O);
        var E = Object(n.b)(null, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(o.f)(a.a.TopNavLoginButton)
                }
            }, e)
        })(x);
        r.d(t, "TwitchPrimeFortnitePage", function() {
            return E
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
                        x: 3
                    },
                    textAlign: i._45.Center,
                    alignItems: i.c.Center,
                    display: i.R.Flex,
                    flexDirection: i.T.Column,
                    justifyContent: i._7.Around,
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
                    type: i._49.H2,
                    transform: i._48.Uppercase,
                    bold: !0
                }, e.title)), e.body && n.createElement(i._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, n.createElement(i.Q, {
                    type: i._49.P,
                    transform: i._48.Uppercase
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
            s = (r("zaS7"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferImage = function() {
                        return a.createElement(c._8, {
                            textAlign: c._45.Center,
                            className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                        }, a.createElement(c.N, {
                            alt: "Offer items",
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                        }))
                    }, t
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
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, a.createElement(c._8, {
                        className: e
                    }, a.createElement(c._8, {
                        className: "twitch-prime-fortnite__header",
                        display: c.R.Flex,
                        alignItems: c.c.End,
                        justifyContent: c._7.Center,
                        flexWrap: c.U.Wrap,
                        textAlign: c._45.Left,
                        "data-test-selector": "twitch-prime-fortnite-header",
                        margin: {
                            y: 0,
                            x: "auto"
                        }
                    }, a.createElement(c._8, {
                        textAlign: c._45.Center,
                        alignSelf: c.d.Start,
                        className: "twitch-prime-fortnite__header__section"
                    }, a.createElement(c._8, {
                        className: t,
                        margin: {
                            y: 2
                        }
                    }, a.createElement("img", {
                        src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                    })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                }, t
            }(a.Component)),
            l = Object(o.d)("TwitchPrimeBrandedHeader")(s);
        r.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), r.d(t, !1, function() {
            return s
        }), r.d(t, "a", function() {
            return l
        })
    },
    "j7/Y": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("OAwv"),
            a = r("GiK3"),
            o = r("F8kA"),
            c = r("6sO2");

        function s(e) {
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
                                    s = a.medium,
                                    l = a.content_index;
                                c.o.tracking.trackPageview(n.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: l,
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
            return s
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
//# sourceMappingURL=pages.prime.components.twitch-prime-fortnite-c0b4f5b3232783fe0d5079eb948b7b1b.js.map