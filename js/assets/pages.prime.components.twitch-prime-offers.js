webpackJsonp([89], {
    "B+G8": function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PrimeRoot_Current_User"
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
                end: 60
            }
        };
        r.loc.source = {
            body: "query PrimeRoot_Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
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
            s = r("zCIC"),
            l = r("7vx8"),
            c = r("CSlQ"),
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
                }, t = n.__decorate([Object(c.d)("PrimeFooter", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            u = r("Lpko"),
            d = r("LXDe"),
            f = r("Tr7p"),
            h = r("R0Kh"),
            g = r("Hs3O"),
            _ = (r("cTXP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTryPrimeClick = function() {
                        Object(f.j)({
                            buttonPosition: t.props.tracking.position
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.getLink = function() {
                    if (this.props.externalURI) return this.props.externalURI;
                    var e = this.props.externalReftag || g.c;
                    return Object(g.d)(e, window.location.pathname.substring(1))
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
                }, t = n.__decorate([Object(c.d)("TryPrimeButton", {
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
                    }, Object(o.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")), i.createElement(_, {
                        externalReftag: this.props.externalReftag,
                        tracking: {
                            position: f.a.CenterBanner
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
                }, t = n.__decorate([Object(c.d)("TwitchPrimeBanner", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component)),
            b = r("B+G8"),
            y = (r("iiIr"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferList = function(e) {
                        return i.createElement(m._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, i.createElement(u.a, {
                            ignoreFirstPageLoad: !0,
                            externalReftag: t.getReftagFromSearch(),
                            listDirection: h.c.Horizontal,
                            offerFilterType: e,
                            hideUpsell: !0
                        }))
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle(Object(o.d)("Free games and in-game loot every month with Twitch Prime membership", "PrimeSubsite")), Object(f.i)({
                        reftag: this.getReftagFromSearch()
                    })
                }, t.prototype.render = function() {
                    return i.createElement(m._2, {
                        fullWidth: !0
                    }, i.createElement(s.b, {
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
                    }, Object(o.d)("Free Games with Prime", "PrimePageOffers"))), this.renderOfferList(d.a.Game), i.createElement(m._8, {
                        padding: {
                            x: 1,
                            top: 1
                        },
                        className: "prime-offers__title"
                    }, i.createElement(m.Q, {
                        type: m._46.H3,
                        color: m.K.Base,
                        bold: !0
                    }, Object(o.d)("Free In-Game Loot with Prime", "PrimePageOffers"))), this.renderOfferList(d.a.InGameLoot)), i.createElement(m._32, {
                        justifyContent: m._7.Center,
                        alignItems: m.c.Center,
                        textAlign: m._42.Center,
                        padding: 2
                    }, this.renderFooterUpsellButton()), i.createElement(p, null))))
                }, t.prototype.renderBanner = function() {
                    var e = this.props.userData;
                    if (!e || !this.currentUserHasPrime(e)) return i.createElement(P, {
                        externalReftag: this.getReftagFromSearch()
                    })
                }, t.prototype.renderFooterUpsellButton = function() {
                    var e = this.props.userData;
                    if (!e || !this.currentUserHasPrime(e)) return i.createElement(_, {
                        externalReftag: this.getReftagFromSearch(),
                        tracking: {
                            position: f.a.CenterFooter
                        }
                    })
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t.prototype.getReftagFromSearch = function() {
                    var e = this.props.location,
                        t = e && e.search && this.props.location.search.match("ref_=([^&]*)");
                    if (t) return t[1]
                }, t
            }(i.Component)),
            E = Object(a.compose)(Object(l.a)(b, {
                name: "userData"
            }), Object(c.d)("TwitchPrimeOffers", {
                autoReportInteractive: !0
            }))(y);
        r.d(t, "TwitchPrimeOffers", function() {
            return E
        })
    }
});
//# sourceMappingURL=pages.prime.components.twitch-prime-offers-f7d91aca2001a0d0fa83f2fabf0b733b.js.map