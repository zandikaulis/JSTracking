webpackJsonp([117], {
    JVP6: function(e, t) {},
    P3dd: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("6sO2"),
            o = r("CSlQ"),
            s = r("Odds"),
            c = (r("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                    return i.createElement(s._8, {
                        className: "prime-footer",
                        position: s._15.Relative
                    }, i.createElement(s._35, {
                        position: s._15.Absolute,
                        justifyContent: s._7.Center,
                        alignItems: s.c.Center,
                        className: "twitter-container"
                    }, i.createElement(s._24, {
                        asset: s._25.Twitter,
                        width: 71,
                        height: 71,
                        type: s._26.Prime
                    })), i.createElement(s._35, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, i.createElement(s._8, {
                        className: "prime-footer__twitter-links",
                        display: s.R.Flex,
                        justifyContent: e ? s._7.Between : s._7.Center
                    }, i.createElement(s.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, i.createElement(s.Q, {
                        bold: !0,
                        fontSize: s.V.Size5
                    }, Object(a.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && i.createElement(s.O, {
                        to: this.props.partnerSocialLink,
                        targetBlank: !0
                    }, i.createElement(s.Q, {
                        bold: !0,
                        fontSize: s.V.Size5
                    }, this.props.partnerSocialText)))), i.createElement(s._35, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: {
                            top: 2
                        },
                        className: "prime-footer-links"
                    }, i.createElement(s._35, {
                        padding: 2
                    }, i.createElement(s.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(a.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(s._35, {
                        padding: 2
                    }, i.createElement(s.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(a.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(s._35, {
                        padding: 2
                    }, i.createElement(s.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(a.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t
            }(i.Component)),
            l = Object(o.d)("PrimeFooter", {
                autoReportInteractive: !0
            })(c);
        r.d(t, "a", function() {
            return l
        })
    },
    Zh2I: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("6sO2"),
            o = r("Hs3O"),
            s = r("CSlQ"),
            c = r("Tr7p"),
            l = r("Odds"),
            p = (r("cTXP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTryPrimeClick = function() {
                        Object(c.j)({
                            buttonPosition: t.props.tracking.position
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.getLink = function() {
                    if (this.props.externalURI) return this.props.externalURI;
                    var e = this.props.externalReftag || o.c;
                    return Object(o.d)(e, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return i.createElement(l._8, {
                        className: "prime-upsell-button__subsite",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(l.v, {
                        fullWidth: !0,
                        size: l.z.Large,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onTryPrimeClick
                    }, Object(a.d)("Try Twitch Prime", "TryPrimeButton")))
                }, t
            }(i.Component)),
            m = Object(s.d)("TryPrimeButton", {
                autoReportInteractive: !0
            })(p);
        r.d(t, "a", function() {
            return m
        })
    },
    cTXP: function(e, t) {},
    iiIr: function(e, t) {},
    "j7/Y": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("OAwv"),
            a = r("GiK3"),
            o = r("F8kA"),
            s = r("6sO2");

        function c(e) {
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
                                    c = a.medium,
                                    l = a.content_index;
                                s.o.tracking.trackPageview(n.__assign({
                                    content: o,
                                    medium: c,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
            return c
        })
    },
    nVrf: function(e, t) {},
    o0He: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("3zLD"),
            o = r("6sO2"),
            s = r("zCIC"),
            c = r("7vx8"),
            l = r("j7/Y"),
            p = r("w9tK"),
            m = r("vH/s"),
            u = r("CSlQ"),
            d = r("P3dd"),
            f = r("Lpko"),
            h = r("LXDe"),
            g = r("Tr7p"),
            _ = r("4VmI"),
            P = r("Kckk"),
            O = r("Zh2I"),
            y = r("o6O8"),
            T = r("Odds"),
            b = (r("iiIr"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferList = function(e, r) {
                        return i.createElement(T._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, i.createElement(f.a, {
                            ignoreFirstPageLoad: !0,
                            externalReftag: t.getReftagFromSearch(),
                            listDirection: P.c.Horizontal,
                            offerFilterType: e,
                            sectionTitle: r,
                            hideUpsell: !0
                        }))
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle(Object(o.d)("Free games and in-game loot every month with Twitch Prime membership", "PrimeSubsite")), Object(g.i)({
                        reftag: this.getReftagFromSearch()
                    }), this.props.userData.loading && !this.props.userData.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.userData.loading && !this.props.userData.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return i.createElement(T._2, {
                        fullWidth: !0
                    }, i.createElement(s.b, {
                        suppressScrollX: !0
                    }, i.createElement(T._8, {
                        fullWidth: !0
                    }, this.renderBanner(), i.createElement(T._35, {
                        background: T.n.Base,
                        className: "prime-offers"
                    }, this.renderOfferList(h.a.Game, Object(o.d)("Free Games with Prime", "PrimePageOffers")), this.renderOfferList(h.a.InGameLoot, Object(o.d)("Free In-Game Loot with Prime", "PrimePageOffers"))), i.createElement(T._35, {
                        justifyContent: T._7.Center,
                        alignItems: T.c.Center,
                        textAlign: T._45.Center,
                        padding: 2
                    }, this.renderFooterUpsellButton()), i.createElement(d.a, null))))
                }, t.prototype.renderBanner = function() {
                    var e = this.props.userData;
                    if (!Object(P.j)(e) && !Object(P.k)(e)) return i.createElement(y.a, {
                        externalReftag: this.getReftagFromSearch()
                    })
                }, t.prototype.renderFooterUpsellButton = function() {
                    var e = this.props.userData;
                    if (!Object(P.j)(e) && !Object(P.k)(e)) return i.createElement(O.a, {
                        externalReftag: this.getReftagFromSearch(),
                        tracking: {
                            position: g.a.CenterFooter
                        }
                    })
                }, t.prototype.getReftagFromSearch = function() {
                    var e = this.props.location,
                        t = e && e.search && this.props.location.search.match("ref_=([^&]*)");
                    if (t) return t[1]
                }, t
            }(i.Component)),
            w = Object(a.compose)(Object(c.a)(_, {
                name: "userData"
            }), Object(u.d)("TwitchPrimeOffersPage", {
                destination: p.a.TwitchPrimeOffersPage
            }), Object(l.a)({
                location: m.PageviewLocation.TwitchPrimeOffersPage
            }))(b);
        r.d(t, "TwitchPrimeOffersPage", function() {
            return w
        })
    },
    o6O8: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("6sO2"),
            o = r("CSlQ"),
            s = r("Tr7p"),
            c = r("Zh2I"),
            l = r("Odds"),
            p = (r("nVrf"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(l._35, {
                        "data-test-target": "prime-banner-upsell",
                        className: "prime-banner-upsell",
                        padding: {
                            x: 5,
                            y: 2
                        },
                        borderBottom: !0
                    }, i.createElement(l.Y, null, i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    }), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(l._35, {
                        className: "prime-upsell__logo-container",
                        display: l.R.Flex,
                        padding: 2,
                        justifyContent: l._7.Center,
                        alignItems: l.c.Center,
                        textAlign: l._45.Center
                    }, i.createElement(l._24, {
                        type: l._26.Inherit,
                        asset: l._25.LogoTwitchPrime,
                        width: 330,
                        height: 150
                    }))), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(l._35, {
                        display: l.R.Flex,
                        justifyContent: l._7.Center,
                        alignItems: l.c.Center,
                        textAlign: l._45.Center,
                        padding: 2
                    }, i.createElement(l._8, {
                        alignSelf: l.d.Center,
                        className: "prime-upsell__msg-container"
                    }, i.createElement(l.Q, {
                        type: l._49.P,
                        fontSize: l.V.Size4,
                        bold: !0
                    }, Object(a.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")), i.createElement(c.a, {
                        externalReftag: this.props.externalReftag,
                        tracking: {
                            position: s.a.CenterBanner
                        }
                    }), i.createElement(l.Q, {
                        type: l._49.P,
                        fontSize: l.V.Size5
                    }, Object(a.d)("Powered by Amazon Prime", "PrimeUpsell")), i.createElement(l.N, {
                        src: "https://m.media-amazon.com/images/G/01/sm/twitchtv/assets/images/amazon_logo_SPOT_W_mono_2x.png",
                        alt: "Amazon Prime Logo"
                    })))), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    })))
                }, t
            }(i.Component)),
            m = Object(o.d)("TwitchPrimeBanner", {
                autoReportInteractive: !0
            })(p);
        r.d(t, !1, function() {
            return "prime-banner-upsell"
        }), r.d(t, "a", function() {
            return m
        })
    }
});
//# sourceMappingURL=pages.prime.components.twitch-prime-offers-92440848122062646627dc1516286ee0.js.map