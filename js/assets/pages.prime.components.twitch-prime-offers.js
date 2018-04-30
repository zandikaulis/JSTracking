webpackJsonp([113], {
    JVP6: function(e, t) {},
    cTXP: function(e, t) {},
    iiIr: function(e, t) {},
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
            c = r("zCIC"),
            s = r("7vx8"),
            l = r("j7/Y"),
            p = r("w9tK"),
            m = r("vH/s"),
            u = r("CSlQ"),
            d = r("Odds"),
            f = (r("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(d._8, {
                        className: "prime-footer",
                        position: d._15.Relative
                    }, i.createElement(d._35, {
                        position: d._15.Absolute,
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center,
                        className: "twitter-container"
                    }, i.createElement(d._24, {
                        asset: d._25.Twitter,
                        width: 71,
                        height: 71,
                        type: d._26.Prime
                    })), i.createElement(d._35, {
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, i.createElement(d.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, i.createElement(d.Q, {
                        bold: !0,
                        fontSize: d.V.Size5
                    }, Object(o.d)("Follow us @TwitchPrime", "PrimeSubsite")))), i.createElement(d._35, {
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: {
                            top: 2
                        },
                        className: "prime-footer-links"
                    }, i.createElement(d._35, {
                        padding: 2
                    }, i.createElement(d.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(o.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(d._35, {
                        padding: 2
                    }, i.createElement(d.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(o.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(d._35, {
                        padding: 2
                    }, i.createElement(d.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(o.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t = n.__decorate([Object(u.d)("PrimeFooter", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            h = r("Lpko"),
            g = r("LXDe"),
            _ = r("Tr7p"),
            P = r("4VmI"),
            y = r("Kckk"),
            b = r("Hs3O"),
            w = (r("cTXP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTryPrimeClick = function() {
                        Object(_.j)({
                            buttonPosition: t.props.tracking.position
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.getLink = function() {
                    if (this.props.externalURI) return this.props.externalURI;
                    var e = this.props.externalReftag || b.c;
                    return Object(b.d)(e, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return i.createElement(d._8, {
                        className: "prime-upsell-button__subsite",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(d.v, {
                        fullWidth: !0,
                        size: d.z.Large,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onTryPrimeClick
                    }, Object(o.d)("Try Twitch Prime", "TryPrimeButton")))
                }, t = n.__decorate([Object(u.d)("TryPrimeButton", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            O = (r("nVrf"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(d._35, {
                        "data-test-target": "prime-banner-upsell",
                        className: "prime-banner-upsell",
                        padding: {
                            x: 5,
                            y: 2
                        },
                        borderBottom: !0
                    }, i.createElement(d.Y, null, i.createElement(d.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    }), i.createElement(d.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(d._35, {
                        className: "prime-upsell__logo-container",
                        display: d.R.Flex,
                        padding: 2,
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center,
                        textAlign: d._45.Center
                    }, i.createElement(d._24, {
                        asset: d._25.LogoTwitchPrime,
                        width: 330,
                        height: 150
                    }))), i.createElement(d.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(d._35, {
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center,
                        textAlign: d._45.Center,
                        padding: 2
                    }, i.createElement(d._8, {
                        alignSelf: d.d.Center,
                        className: "prime-upsell__msg-container"
                    }, i.createElement(d.Q, {
                        type: d._49.P,
                        fontSize: d.V.Size4,
                        bold: !0
                    }, Object(o.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")), i.createElement(w, {
                        externalReftag: this.props.externalReftag,
                        tracking: {
                            position: _.a.CenterBanner
                        }
                    }), i.createElement(d.Q, {
                        type: d._49.P,
                        fontSize: d.V.Size5
                    }, Object(o.d)("Powered by Amazon Prime", "PrimeUpsell")), i.createElement(d.N, {
                        src: "https://m.media-amazon.com/images/G/01/sm/twitchtv/assets/images/amazon_logo_SPOT_W_mono_2x.png",
                        alt: "Amazon Prime Logo"
                    })))), i.createElement(d.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    })))
                }, t = n.__decorate([Object(u.d)("TwitchPrimeBanner", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            E = (r("iiIr"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferList = function(e) {
                        return i.createElement(d._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, i.createElement(h.a, {
                            ignoreFirstPageLoad: !0,
                            externalReftag: t.getReftagFromSearch(),
                            listDirection: y.c.Horizontal,
                            offerFilterType: e,
                            hideUpsell: !0
                        }))
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle(Object(o.d)("Free games and in-game loot every month with Twitch Prime membership", "PrimeSubsite")), Object(_.i)({
                        reftag: this.getReftagFromSearch()
                    }), this.props.userData.loading && !this.props.userData.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.userData.loading && !this.props.userData.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return i.createElement(d._2, {
                        fullWidth: !0
                    }, i.createElement(c.b, {
                        suppressScrollX: !0
                    }, i.createElement(d._8, {
                        fullWidth: !0
                    }, this.renderBanner(), i.createElement(d._35, {
                        background: d.n.Base,
                        className: "prime-offers"
                    }, i.createElement(d._8, {
                        padding: {
                            x: 1,
                            top: 1
                        },
                        className: "prime-offers__title"
                    }, i.createElement(d.Q, {
                        type: d._49.H3,
                        color: d.K.Base,
                        bold: !0
                    }, Object(o.d)("Free Games with Prime", "PrimePageOffers"))), this.renderOfferList(g.a.Game), i.createElement(d._8, {
                        padding: {
                            x: 1,
                            top: 1
                        },
                        className: "prime-offers__title"
                    }, i.createElement(d.Q, {
                        type: d._49.H3,
                        color: d.K.Base,
                        bold: !0
                    }, Object(o.d)("Free In-Game Loot with Prime", "PrimePageOffers"))), this.renderOfferList(g.a.InGameLoot)), i.createElement(d._35, {
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center,
                        textAlign: d._45.Center,
                        padding: 2
                    }, this.renderFooterUpsellButton()), i.createElement(f, null))))
                }, t.prototype.renderBanner = function() {
                    var e = this.props.userData;
                    if (!Object(y.j)(e) && !Object(y.k)(e)) return i.createElement(O, {
                        externalReftag: this.getReftagFromSearch()
                    })
                }, t.prototype.renderFooterUpsellButton = function() {
                    var e = this.props.userData;
                    if (!Object(y.j)(e) && !Object(y.k)(e)) return i.createElement(w, {
                        externalReftag: this.getReftagFromSearch(),
                        tracking: {
                            position: _.a.CenterFooter
                        }
                    })
                }, t.prototype.getReftagFromSearch = function() {
                    var e = this.props.location,
                        t = e && e.search && this.props.location.search.match("ref_=([^&]*)");
                    if (t) return t[1]
                }, t
            }(i.Component)),
            T = Object(a.compose)(Object(s.a)(P, {
                name: "userData"
            }), Object(u.d)("TwitchPrimeOffersPage", {
                destination: p.a.TwitchPrimeOffersPage
            }), Object(l.a)({
                location: m.PageviewLocation.TwitchPrimeOffersPage
            }))(E);
        r.d(t, "TwitchPrimeOffersPage", function() {
            return T
        })
    }
});
//# sourceMappingURL=pages.prime.components.twitch-prime-offers-01095fa0626d5dd50babc0c7473c1c75.js.map