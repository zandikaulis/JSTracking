webpackJsonp([109], {
    JVP6: function(e, t) {},
    cTXP: function(e, t) {},
    iiIr: function(e, t) {},
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
            l = r("zCIC"),
            c = r("7vx8"),
            s = r("CSlQ"),
            m = r("Odds"),
            p = (r("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(m._8, {
                        className: "prime-footer",
                        position: m._15.Relative
                    }, i.createElement(m._32, {
                        position: m._15.Absolute,
                        justifyContent: m._7.Center,
                        alignItems: m.c.Center,
                        className: "twitter-container"
                    }, i.createElement(m._22, {
                        asset: m._23.Twitter,
                        width: 71,
                        height: 71,
                        type: m._24.Prime
                    })), i.createElement(m._32, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, i.createElement(m.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, i.createElement(m.Q, {
                        bold: !0,
                        fontSize: m.V.Size5
                    }, Object(o.d)("Follow us @TwitchPrime", "PrimeSubsite")))), i.createElement(m._32, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: {
                            top: 2
                        },
                        className: "prime-footer-links"
                    }, i.createElement(m._32, {
                        padding: 2
                    }, i.createElement(m.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(o.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(m._32, {
                        padding: 2
                    }, i.createElement(m.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(o.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(m._32, {
                        padding: 2
                    }, i.createElement(m.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(o.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t = n.__decorate([Object(s.d)("PrimeFooter", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            u = r("Lpko"),
            f = r("LXDe"),
            d = r("Tr7p"),
            h = r("4VmI"),
            g = r("R0Kh"),
            _ = r("Hs3O"),
            b = (r("cTXP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTryPrimeClick = function() {
                        Object(d.j)({
                            buttonPosition: t.props.tracking.position
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.getLink = function() {
                    if (this.props.externalURI) return this.props.externalURI;
                    var e = this.props.externalReftag || _.c;
                    return Object(_.d)(e, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return i.createElement(m._8, {
                        className: "prime-upsell-button__subsite",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(m.v, {
                        fullWidth: !0,
                        size: m.z.Large,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onTryPrimeClick
                    }, Object(o.d)("Try Twitch Prime", "TryPrimeButton")))
                }, t = n.__decorate([Object(s.d)("TryPrimeButton", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            P = (r("nVrf"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(m._32, {
                        "data-test-target": "prime-banner-upsell",
                        className: "prime-banner-upsell",
                        padding: {
                            x: 5,
                            y: 2
                        },
                        borderBottom: !0
                    }, i.createElement(m.Y, null, i.createElement(m.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    }), i.createElement(m.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(m._32, {
                        className: "prime-upsell__logo-container",
                        display: m.R.Flex,
                        padding: 2,
                        justifyContent: m._7.Center,
                        alignItems: m.c.Center,
                        textAlign: m._42.Center
                    }, i.createElement(m._22, {
                        asset: m._23.LogoTwitchPrime,
                        width: 330,
                        height: 150
                    }))), i.createElement(m.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(m._32, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center,
                        alignItems: m.c.Center,
                        textAlign: m._42.Center,
                        padding: 2
                    }, i.createElement(m._8, {
                        alignSelf: m.d.Center,
                        className: "prime-upsell__msg-container"
                    }, i.createElement(m.Q, {
                        type: m._46.P,
                        fontSize: m.V.Size4,
                        bold: !0
                    }, Object(o.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")), i.createElement(b, {
                        externalReftag: this.props.externalReftag,
                        tracking: {
                            position: d.a.CenterBanner
                        }
                    }), i.createElement(m.Q, {
                        type: m._46.P,
                        fontSize: m.V.Size5
                    }, Object(o.d)("Powered by Amazon Prime", "PrimeUpsell")), i.createElement(m.N, {
                        src: "https://m.media-amazon.com/images/G/01/sm/twitchtv/assets/images/amazon_logo_SPOT_W_mono_2x.png",
                        alt: "Amazon Prime Logo"
                    })))), i.createElement(m.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    })))
                }, t = n.__decorate([Object(s.d)("TwitchPrimeBanner", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            E = (r("iiIr"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferList = function(e) {
                        return i.createElement(m._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, i.createElement(u.a, {
                            ignoreFirstPageLoad: !0,
                            externalReftag: t.getReftagFromSearch(),
                            listDirection: g.c.Horizontal,
                            offerFilterType: e,
                            hideUpsell: !0
                        }))
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle(Object(o.d)("Free games and in-game loot every month with Twitch Prime membership", "PrimeSubsite")), Object(d.i)({
                        reftag: this.getReftagFromSearch()
                    })
                }, t.prototype.render = function() {
                    return i.createElement(m._2, {
                        fullWidth: !0
                    }, i.createElement(l.b, {
                        suppressScrollX: !0
                    }, i.createElement(m._8, {
                        fullWidth: !0
                    }, this.renderBanner(), i.createElement(m._32, {
                        background: m.n.Base,
                        className: "prime-offers"
                    }, i.createElement(m._8, {
                        padding: {
                            x: 1,
                            top: 1
                        },
                        className: "prime-offers__title"
                    }, i.createElement(m.Q, {
                        type: m._46.H3,
                        color: m.K.Base,
                        bold: !0
                    }, Object(o.d)("Free Games with Prime", "PrimePageOffers"))), this.renderOfferList(f.a.Game), i.createElement(m._8, {
                        padding: {
                            x: 1,
                            top: 1
                        },
                        className: "prime-offers__title"
                    }, i.createElement(m.Q, {
                        type: m._46.H3,
                        color: m.K.Base,
                        bold: !0
                    }, Object(o.d)("Free In-Game Loot with Prime", "PrimePageOffers"))), this.renderOfferList(f.a.InGameLoot)), i.createElement(m._32, {
                        justifyContent: m._7.Center,
                        alignItems: m.c.Center,
                        textAlign: m._42.Center,
                        padding: 2
                    }, this.renderFooterUpsellButton()), i.createElement(p, null))))
                }, t.prototype.renderBanner = function() {
                    var e = this.props.userData;
                    if (!Object(g.i)(e) && !Object(g.j)(e)) return i.createElement(P, {
                        externalReftag: this.getReftagFromSearch()
                    })
                }, t.prototype.renderFooterUpsellButton = function() {
                    var e = this.props.userData;
                    if (!Object(g.i)(e) && !Object(g.j)(e)) return i.createElement(b, {
                        externalReftag: this.getReftagFromSearch(),
                        tracking: {
                            position: d.a.CenterFooter
                        }
                    })
                }, t.prototype.getReftagFromSearch = function() {
                    var e = this.props.location,
                        t = e && e.search && this.props.location.search.match("ref_=([^&]*)");
                    if (t) return t[1]
                }, t
            }(i.Component)),
            y = Object(a.compose)(Object(c.a)(h, {
                name: "userData"
            }), Object(s.d)("TwitchPrimeOffers", {
                autoReportInteractive: !0
            }))(E);
        r.d(t, "TwitchPrimeOffers", function() {
            return y
        })
    }
});
//# sourceMappingURL=pages.prime.components.twitch-prime-offers-1e6acef4987beb95095bb75a8dc0f90f.js.map