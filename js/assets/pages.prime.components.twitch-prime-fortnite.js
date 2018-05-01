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
            l = r("GiK3"),
            s = r("3zLD"),
            m = r("6sO2"),
            p = r("68hr"),
            d = r("7vx8"),
            u = r("j7/Y"),
            f = r("w9tK"),
            h = r("vH/s"),
            _ = r("CSlQ"),
            g = r("P3dd"),
            w = r("c6bv"),
            y = r("TCPX"),
            T = r("Odds"),
            P = (r("8+KY"), function(e) {
                if (e) return l.createElement(T._8, {
                    display: T.R.Flex,
                    margin: {
                        y: 1
                    }
                }, l.createElement(T.Q, {
                    type: T._49.H3,
                    bold: !0,
                    transform: T._48.Uppercase,
                    color: T.K.Link
                }, e))
            }),
            k = function() {
                return l.createElement(T._8, {
                    className: "twitch-prime-fortnite-offers",
                    padding: {
                        x: 2
                    }
                }, l.createElement(T._8, {
                    className: "twitch-prime-fortnite-offers__announce",
                    margin: {
                        bottom: 4
                    }
                }, l.createElement(T._8, {
                    className: "twitch-prime-fortnite-offers__announce__main",
                    textAlign: T._45.Center,
                    padding: {
                        y: .5
                    },
                    position: T._15.Relative
                }, l.createElement(T.Q, {
                    type: T._49.H3,
                    bold: !0,
                    transform: T._48.Uppercase,
                    color: T.K.Link
                }, Object(m.d)("Exclusive!", "TwitchPrimeFortniteOffers")))), P(Object(m.d)("Battle Royale Trailblazer Outfit", "TwitchPrimeFortniteOffers")), P(Object(m.d)("Battle Royale True North Back Bling", "TwitchPrimeFortniteOffers")), P(Object(m.d)("Battle Royale Tenderizer Pickaxe", "TwitchPrimeFortniteOffers")), P(Object(m.d)("Battle Royale Freestylin’ Emote", "TwitchPrimeFortniteOffers")))
            },
            b = r("kQ9X"),
            E = (r("F35x"), "twitch-prime-signup-call-to-action"),
            C = "twitch-prime-claim-call-to-action",
            O = "twitch-prime-login-call-to-action",
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDescription = function() {
                        return l.createElement(T._8, null, l.createElement(T._8, {
                            fullWidth: !0,
                            textAlign: T._45.Center,
                            margin: {
                                y: 2
                            }
                        }, l.createElement(T._8, {
                            className: "twitch-prime-fortnite__header__text"
                        }, l.createElement(T.Q, {
                            type: T._49.H1,
                            color: T.K.Overlay,
                            transform: T._48.Uppercase
                        }, Object(m.d)("Twitch Prime Pack #2", "TwitchPrimeFortnite")))), l.createElement(T._8, {
                            fullWidth: !0,
                            display: T.R.Flex,
                            alignItems: T.c.Center,
                            justifyContent: T._7.Center,
                            flexWrap: T.U.Wrap,
                            textAlign: T._45.Center
                        }, l.createElement(T._8, {
                            className: "twitch-prime-fortnite__description",
                            margin: {
                                bottom: 3
                            }
                        }, l.createElement(T.Q, {
                            type: T._49.H3,
                            transform: T._48.Uppercase,
                            color: T.K.Overlay,
                            bold: !0
                        }, Object(m.d)("Get exclusive Fortnite loot included with Twitch Prime", "TwitchPrimeFortnite")))))
                    }, t.renderCTAs = function() {
                        var e = t.getCurrentUser();
                        return l.createElement(T._8, {
                            display: T.R.Flex,
                            flexDirection: T.T.Column,
                            justifyContent: T._7.Center,
                            breakpointMedium: {
                                flexDirection: T.T.Row
                            },
                            margin: {
                                x: "auto",
                                y: 3
                            }
                        }, !e && t.renderLoginCTA(), !t.hasPrime() && t.renderSignupCTA(), t.hasPrime() && t.renderClaimCTA())
                    }, t.renderLoginCTA = function() {
                        return l.createElement(y.a, {
                            className: "twitch-prime-call-to-action--login",
                            title: Object(m.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                            body: Object(m.d)("Click here to login and get started", "TwitchPrimeFortnite"),
                            onClick: t.onLoginClick,
                            dataTestSelector: O,
                            href: "#"
                        })
                    }, t.renderSignupCTA = function() {
                        var e = m.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                        return l.createElement(y.a, {
                            className: "twitch-prime-call-to-action--signup",
                            title: Object(m.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                            body: Object(m.d)("Click here to start your free trial or link your Amazon Prime account", "TwitchPrimeFortnite"),
                            href: e,
                            dataTestSelector: E
                        })
                    }, t.renderClaimCTA = function() {
                        return l.createElement(y.a, {
                            className: "twitch-prime-call-to-action--claim",
                            title: Object(m.d)("Click here for your loot", "TwitchPrimeFortnite"),
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = m.b.get("twitch_prime_fortnite", !1);
                    return this.props.data.error || !e ? l.createElement(p.a, null) : this.props.data.loading ? l.createElement(T._8, null) : l.createElement(T._8, {
                        className: "twitch-prime-fortnite__container"
                    }, l.createElement(T._8, {
                        className: "twitch-prime-fortnite"
                    }, l.createElement(w.a, {
                        renderOfferImage: !0
                    }, this.renderDescription()), l.createElement(k, null), this.renderCTAs()), l.createElement(g.a, {
                        partnerSocialLink: "https://twitter.com/FortniteGame",
                        partnerSocialText: "@FortniteGame"
                    }))
                }, t
            }(l.Component),
            x = Object(s.compose)(Object(_.d)("TwitchPrimeFortnitePage", {
                destination: f.a.TwitchPrimeFortnitePage
            }), Object(d.a)(b), Object(u.a)({
                location: h.PageviewLocation.TwitchPrimeFortnitePage
            }))(v);
        var F = Object(n.b)(null, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(o.f)(a.a.TopNavLoginButton)
                }
            }, e)
        })(x);
        r.d(t, "TwitchPrimeFortnitePage", function() {
            return F
        })
    },
    JVP6: function(e, t) {},
    P3dd: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("6sO2"),
            o = r("CSlQ"),
            c = r("Odds"),
            l = (r("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(c._8, {
                        className: "prime-footer",
                        position: c._15.Relative
                    }, i.createElement(c._35, {
                        position: c._15.Absolute,
                        justifyContent: c._7.Center,
                        alignItems: c.c.Center,
                        className: "twitter-container"
                    }, i.createElement(c._24, {
                        asset: c._25.Twitter,
                        width: 71,
                        height: 71,
                        type: c._26.Prime
                    })), i.createElement(c._35, {
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, i.createElement(c._8, {
                        className: "prime-footer__twitter-links",
                        display: c.R.Flex,
                        justifyContent: c._7.Between
                    }, i.createElement(c.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, i.createElement(c.Q, {
                        bold: !0,
                        fontSize: c.V.Size5
                    }, Object(a.d)("Follow us @TwitchPrime", "PrimeSubsite"))), this.props.partnerSocialLink && this.props.partnerSocialText && i.createElement(c.O, {
                        to: this.props.partnerSocialLink,
                        targetBlank: !0
                    }, i.createElement(c.Q, {
                        bold: !0,
                        fontSize: c.V.Size5
                    }, this.props.partnerSocialText)))), i.createElement(c._35, {
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: {
                            top: 2
                        },
                        className: "prime-footer-links"
                    }, i.createElement(c._35, {
                        padding: 2
                    }, i.createElement(c.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(a.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(c._35, {
                        padding: 2
                    }, i.createElement(c.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(a.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(c._35, {
                        padding: 2
                    }, i.createElement(c.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(a.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t = n.__decorate([Object(o.d)("PrimeFooter", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component));
        r.d(t, "a", function() {
            return l
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
            l = (r("zaS7"), function(e) {
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
//# sourceMappingURL=pages.prime.components.twitch-prime-fortnite-95c38b741c5551f5650ff0b9837cd341.js.map