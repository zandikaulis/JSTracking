(window.webpackJsonp = window.webpackJsonp || []).push([
    [190], {
        "+Mtq": function(e, t, n) {},
        "0WFu": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("3Bft");

            function r(e) {
                return [i.a.Prime, i.a.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
            }
        },
        "0tEQ": function(e, t, n) {},
        "15ff": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("/MKj"),
                s = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                c = n("ZDlU"),
                l = n("8/mp"),
                u = n("yR8l"),
                d = n("V+GM"),
                p = n("NvVO"),
                m = n("2xye"),
                b = n("GnwI"),
                h = n("Ue10"),
                f = (n("OQsH"), n("5Bhl")),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading || !this.props.data.user ? o.createElement("div", {
                            className: "subs-broadcaster-banner"
                        }, o.createElement(h.Xa, {
                            className: "subs-broadcaster-banner__broadcaster-info",
                            textAlign: h.Rb.Center,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            alignItems: h.f.Center,
                            flexWrap: h.Ba.NoWrap,
                            padding: {
                                x: 1,
                                y: 3
                            },
                            fullWidth: !0,
                            breakpointMedium: {
                                padding: 4
                            },
                            breakpointLarge: {
                                padding: 5
                            }
                        }, o.createElement(h.Xa, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 1
                            },
                            fullWidth: !0
                        }, o.createElement(h.ib, {
                            height: 40
                        })), o.createElement(h.Xa, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            }
                        }, o.createElement(h.ib, {
                            height: 80,
                            width: 80
                        })), o.createElement(h.Xa, {
                            className: "subs-broadcaster-banner__description",
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            },
                            fullWidth: !0
                        }, o.createElement(h.ib, {
                            lineCount: 1
                        })))) : o.createElement("div", {
                            style: {
                                backgroundImage: "url(" + this.props.data.user.bannerImageURL
                            },
                            className: "subs-broadcaster-banner"
                        }, o.createElement(h.Xa, {
                            className: "subs-broadcaster-banner__broadcaster-info",
                            textAlign: h.Rb.Center,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            alignItems: h.f.Center,
                            flexWrap: h.Ba.NoWrap,
                            padding: {
                                x: 1,
                                y: 3
                            },
                            fullWidth: !0,
                            breakpointMedium: {
                                padding: 4
                            },
                            breakpointLarge: {
                                padding: 5
                            }
                        }, o.createElement(h.Pa, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 1
                            }
                        }, o.createElement(h.W, {
                            type: h.Vb.H2,
                            bold: !0,
                            color: h.O.Overlay
                        }, this.props.data.user.displayName)), o.createElement(h.Pa, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            }
                        }, o.createElement(h.q, {
                            alt: this.props.data.user.displayName || "",
                            size: 96,
                            src: this.props.data.user.profileImageURL
                        })), o.createElement(h.Xa, {
                            className: "subs-broadcaster-banner__description",
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            }
                        }, o.createElement(h.W, {
                            color: h.O.Overlay
                        }, this.props.data.user.description)), this.verifiedPartner()))
                    }, t.prototype.verifiedPartner = function() {
                        return this.props.data.user && this.props.data.user.roles && this.props.data.user.roles.isPartner ? o.createElement(h.Xa, {
                            display: h.X.Flex
                        }, o.createElement(h.sb, {
                            asset: h.tb.Verified,
                            type: h.ub.Brand
                        }), o.createElement(h.Pa, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(h.W, {
                            color: h.O.Overlay
                        }, Object(a.d)("Verified Twitch Partner", "SubsBroadcasterBanner")))) : null
                    }, t = s.__decorate([Object(b.b)("SubsBroadcasterBanner"), Object(u.a)(f, {
                        options: function(e) {
                            return {
                                variables: {
                                    currentChannelLogin: e.channelName
                                }
                            }
                        }
                    })], t)
                }(o.Component),
                v = n("7SjK"),
                k = n("OpME"),
                y = n("DnOo"),
                S = n("W8Fi"),
                E = n("3GEC"),
                C = (n("VYov"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.productName = Object(a.d)("All-Access Pass", "SubsPlanEsports"), t.onSubClick = function(e) {
                            Object(E.b)({
                                action: e.action,
                                canSubscribe: !t.props.subTier || "3000" !== t.props.subTier,
                                channelID: t.props.channelId,
                                channelLogin: t.props.channelLogin,
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: !1,
                                isMenuOpen: !1,
                                isSubscribed: !!t.props.subTier,
                                isSubscribedCurrentTier: t.props.subTier ? t.props.subTier : null,
                                sub_location: "landing_page",
                                showResub: !1,
                                modal: !1,
                                showPrimeContent: !1
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? o.createElement(h.ib, null) : o.createElement(h.Xa, {
                            className: "subs-plan-esports",
                            alignItems: h.f.Center,
                            flexDirection: h.Aa.Column,
                            margin: {
                                x: 5
                            }
                        }, o.createElement(h.Pa, {
                            margin: 1,
                            textAlign: h.Rb.Center
                        }, o.createElement(h.W, {
                            type: h.Vb.H3,
                            color: h.O.Link,
                            bold: !0
                        }, this.productName)), o.createElement(h.Pa, {
                            margin: 1,
                            textAlign: h.Rb.Center
                        }, o.createElement(h.W, null, Object(a.d)("Your VIP pass to the best of the Overwatch League", "SubsPlanEsports"))), this.baseEmotes(), o.createElement(h.Xa, {
                            margin: 1,
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center
                        }, this.makePlanWrappers()))
                    }, t.prototype.makePlanWrappers = function() {
                        var e = this;
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return [o.createElement(h.ib, {
                            key: "subs-broadcaster__emote-placeholder"
                        })];
                        var t = Object(a.d)("Overwatch League All-Access Pass Benefits", "SubsPlanEsports"),
                            n = Object(a.d)("Exclusive Command Center Stream", "SubPlanEsports"),
                            i = Object(a.d)("Match Analysis Videos by Players", "SubPlanEsports"),
                            r = Object(a.d)("Participate in Post-Match Q&A", "SubPlanEsports"),
                            s = Object(a.d)("Passholder-Only Chat Access", "SubPlanEsports"),
                            c = Object(a.d)("Ad-Free Viewing on Overwatch League", "SubPlanEsports"),
                            l = Object(a.d)("Overwatch In-Game Content", "SubPlanEsports"),
                            u = Object(a.d)("Get All-Access Pass for $19.99 with Twitch Prime", "SubsPlanEsports"),
                            d = Object(a.d)("Offer available for a limited time. Terms and conditions apply", "SubsPlanEsports");
                        return "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? [o.createElement(h.Eb, {
                            "data-test-selector": "mobile-sub-container",
                            key: "subs-broadcaster-plan-0",
                            className: "subs-plan-esports__plan",
                            margin: 1,
                            elevation: 2,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            padding: 2,
                            textAlign: h.Rb.Center
                        }, o.createElement(h.Pa, {
                            margin: 1
                        }, o.createElement(h.W, {
                            type: h.Vb.H3,
                            color: h.O.Link
                        }, this.productName)), o.createElement(h.Xa, {
                            margin: {
                                x: 1,
                                bottom: 1
                            }
                        }, o.createElement(h.Xa, {
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center
                        }, o.createElement(h.Xa, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(h.sb, {
                            asset: h.tb.Crown,
                            type: h.ub.Prime
                        })), o.createElement(h.W, {
                            type: h.Vb.H5
                        }, u)), o.createElement(h.U, {
                            to: "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
                            targetBlank: !0,
                            hoverUnderlineNone: !1
                        }, d)), o.createElement(h.Xa, {
                            margin: 1,
                            display: h.X.Flex,
                            flexWrap: h.Ba.Wrap,
                            flexGrow: 1,
                            alignItems: h.f.Center,
                            justifyContent: h.Wa.Center
                        }, o.createElement(h.W, {
                            bold: !0
                        }, t), o.createElement(h.Xa, {
                            padding: {
                                top: 1
                            }
                        }, o.createElement(h.W, null, n), o.createElement(h.W, null, i), o.createElement(h.W, null, r), o.createElement(h.W, null, s), o.createElement(h.W, null, c), o.createElement(h.W, null, l))))] : this.props.subscriptionProducts.map(function(p, m) {
                            var b = p.price;
                            return Object(S.g)([p]) && (b = Object(S.c)(p)), o.createElement(h.Eb, {
                                key: "subs-broadcaster-plan-" + m,
                                className: "subs-plan-esports__plan",
                                margin: 1,
                                elevation: 2,
                                display: h.X.Flex,
                                flexDirection: h.Aa.Column,
                                padding: 2,
                                textAlign: h.Rb.Center,
                                "data-test-selector": "sub-tier-container"
                            }, o.createElement(h.Pa, {
                                margin: 1
                            }, o.createElement(h.W, {
                                type: h.Vb.H3,
                                color: h.O.Link
                            }, Object(a.d)("{price} All-Access Pass", {
                                price: p.price
                            }, "SubsPlanEsports"))), o.createElement(h.Xa, {
                                margin: {
                                    x: 1,
                                    bottom: 1
                                }
                            }, o.createElement(h.Xa, {
                                display: h.X.Flex,
                                justifyContent: h.Wa.Center
                            }, o.createElement(h.Xa, {
                                margin: {
                                    right: .5
                                }
                            }, o.createElement(h.sb, {
                                asset: h.tb.Crown,
                                type: h.ub.Prime
                            })), o.createElement(h.W, {
                                type: h.Vb.H5
                            }, u)), o.createElement(h.U, {
                                to: "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
                                targetBlank: !0,
                                hoverUnderlineNone: !1
                            }, d)), o.createElement(h.Xa, {
                                margin: 1,
                                display: h.X.Flex,
                                flexWrap: h.Ba.Wrap,
                                flexGrow: 1,
                                alignItems: h.f.Center,
                                justifyContent: h.Wa.Center
                            }, o.createElement(h.W, {
                                bold: !0
                            }, t), o.createElement(h.Xa, {
                                padding: {
                                    top: 1
                                }
                            }, o.createElement(h.W, null, n), o.createElement(h.W, null, i), o.createElement(h.W, null, r), o.createElement(h.W, null, s), o.createElement(h.W, null, c), o.createElement(h.W, null, l))), o.createElement(h.Xa, {
                                margin: 1
                            }, o.createElement(y.a, {
                                isSubbedToTier: e.isSubbedToTier(m),
                                tierPrice: b,
                                handleSubAction: e.onSubClick,
                                productName: p.name,
                                url: p.url + "/ticket",
                                isEsportChannel: !0
                            })))
                        })
                    }, t.prototype.isSubbedToTier = function(e) {
                        var t = 1e3 * (e + 1);
                        if (this.props.subTier) {
                            var n = Number(this.props.subTier);
                            if (isNaN(n) && (n = 1e3), t <= n) return !0
                        }
                        return !1
                    }, t.prototype.baseEmotes = function() {
                        var e = Object(k.b)(this.props.subscriptionProducts[0].emotes);
                        return o.createElement(h.Xa, {
                            margin: 1,
                            className: "subs-plan-esports__base-emotes"
                        }, o.createElement(v.a, {
                            emotes: e
                        }))
                    }, t = s.__decorate([Object(b.b)("SubsPlanEsports")], t)
                }(o.Component)),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.Xa, null, o.createElement(g, {
                            channelName: this.props.channelDisplayName
                        }), o.createElement(h.Xa, {
                            display: h.X.Flex,
                            padding: {
                                top: 2
                            },
                            justifyContent: h.Wa.Center
                        }, o.createElement(C, {
                            subbedPlatform: this.props.subbedPlatform,
                            subscriptionProducts: this.props.subscriptionProducts,
                            subTier: this.props.subTier,
                            channelId: this.props.channelId,
                            channelLogin: this.props.channelLogin
                        })))
                    }, t
                }(o.Component),
                T = n("4iu0"),
                P = n("L+W6"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.subscriptionProduct.emotes.length < 1 ? null : o.createElement(h.Xa, {
                            key: this.props.subscriptionProduct.id,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            alignItems: h.f.Center,
                            margin: 1
                        }, this.buildEmotes(this.props.subscriptionProduct.emotes), this.props.hidePrice ? null : o.createElement(h.W, null, Object(a.d)("{price} emote", {
                            price: this.props.subscriptionProduct.price
                        }, "SubsBonusEmote")))
                    }, t.prototype.buildEmotes = function(e) {
                        return Object(k.b)(e).map(function(e) {
                            return o.createElement("figure", {
                                className: "emote-picker__emote-figure",
                                key: e.id
                            }, o.createElement("img", {
                                srcSet: e.srcSet,
                                alt: e.displayName
                            }))
                        })
                    }, t
                }(o.Component);
            n("0tEQ");
            ! function(e) {
                e[e.Tier1 = 0] = "Tier1", e[e.Tier2 = 1] = "Tier2", e[e.Tier3 = 2] = "Tier3"
            }(i || (i = {}));
            var O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: i.Tier1,
                            emoteSetId: void 0
                        }, t.messages = {
                            subscribe: Object(a.d)("Subscribe Now", "SubsBroadcasterPlanTabs"),
                            mobileSubbed: Object(a.d)("Subscribed", "SubsBroadcasterPlanTabs"),
                            perkChat: Object(a.d)("Chat During Subscriber-Only Mode", "SubsBroadcasterPlanTabs"),
                            includedEmotes: Object(a.d)("Included Emotes", "SubsBroadcasterPlanTabs")
                        }, t.toggleActiveTab = function(e) {
                            if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                                case "subscribe-tab-" + i.Tier1:
                                    t.setState({
                                        activeTab: i.Tier1
                                    });
                                    break;
                                case "subscribe-tab-" + i.Tier2:
                                    t.setState({
                                        activeTab: i.Tier2
                                    });
                                    break;
                                case "subscribe-tab-" + i.Tier3:
                                    t.setState({
                                        activeTab: i.Tier3
                                    })
                            }
                        }, t.onSubClick = function(e) {
                            Object(E.b)({
                                action: e.action,
                                canSubscribe: !t.props.subTier || "3000" !== t.props.subTier,
                                channelID: t.props.channelId,
                                channelLogin: t.props.channelLogin,
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: !1,
                                isMenuOpen: !1,
                                isSubscribed: !!t.props.subTier,
                                isSubscribedCurrentTier: t.props.subTier ? t.props.subTier : null,
                                sub_location: "landing_page",
                                showResub: !1,
                                modal: !1,
                                showPrimeContent: !1
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.mobileSubbed : this.messages.subscribe;
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? o.createElement(h.Xa, {
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center,
                            alignItems: h.f.Center,
                            fullHeight: !0
                        }, o.createElement(h.Za, null)) : o.createElement(h.Xa, {
                            className: "subs-broadcaster-tabbed-tiers",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            alignItems: h.f.Center
                        }, o.createElement(h.Pa, {
                            margin: 1
                        }, o.createElement(h.W, {
                            type: h.Vb.H3,
                            color: h.O.Link,
                            bold: !0
                        }, e)), "IOS" !== this.props.subbedPlatform && "ANDROID" !== this.props.subbedPlatform ? this.makeTabs() : null, this.makeTabContents())
                    }, t.prototype.makeTabs = function() {
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? o.createElement(h.ib, null) : 1 === this.props.subscriptionProducts.length ? o.createElement(h.Gb, null, o.createElement(h.Fb, {
                            active: !0,
                            "data-a-target": "subscribe-tab-" + i.Tier1
                        }, this.props.subscriptionProducts[0].price)) : o.createElement(h.Xa, null, o.createElement(h.Gb, null, o.createElement(h.Fb, {
                            active: this.state.activeTab === i.Tier1,
                            onClick: this.toggleActiveTab,
                            "data-a-target": "subscribe-tab-" + i.Tier1
                        }, this.props.subscriptionProducts[0].price), o.createElement(h.Fb, {
                            active: this.state.activeTab === i.Tier2,
                            onClick: this.toggleActiveTab,
                            "data-a-target": "subscribe-tab-" + i.Tier2
                        }, this.props.subscriptionProducts[1].price), o.createElement(h.Fb, {
                            active: this.state.activeTab === i.Tier3,
                            onClick: this.toggleActiveTab,
                            "data-a-target": "subscribe-tab-" + i.Tier3
                        }, this.props.subscriptionProducts[2].price)))
                    }, t.prototype.makeTabContents = function() {
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? o.createElement(h.ib, null) : o.createElement(h.Xa, {
                            className: "subs-broadcaster-tabbed-tiers__tab",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            alignItems: h.f.Center,
                            textAlign: h.Rb.Center
                        }, o.createElement(h.Pa, {
                            margin: 1
                        }, o.createElement(h.W, {
                            type: h.Vb.H4,
                            bold: !0
                        }, Object(a.d)("Channel Subscription for {displayName}", {
                            displayName: this.props.channelDisplayName
                        }, "SubsBroadcasterPlanTabs"))), o.createElement(h.W, {
                            type: h.Vb.P
                        }, Object(a.d)("{numEmotes, plural, one {Includes Ad-Free Viewing, Subscriber Badges and 1 Emote.} other {Includes Ad-Free Viewing, Subscriber Badges and {numEmotes, number} Emotes.}}", {
                            numEmotes: this.props.subscriptionProducts[0].emotes.length
                        }, "SubsBroadcasterPlanTabs")), o.createElement(h.W, {
                            type: h.Vb.P
                        }, this.messages.perkChat), this.getSubButton(), o.createElement(h.Pa, {
                            margin: {
                                top: 2
                            }
                        }, o.createElement(h.W, {
                            type: h.Vb.H4,
                            bold: !0
                        }, this.messages.includedEmotes)), this.getBonusEmotes(), this.baseEmotes())
                    }, t.prototype.getSubButton = function() {
                        var e;
                        switch (this.state.activeTab) {
                            case i.Tier2:
                                e = this.props.subscriptionProducts[1];
                                break;
                            case i.Tier3:
                                e = this.props.subscriptionProducts[2];
                                break;
                            case i.Tier1:
                            default:
                                e = this.props.subscriptionProducts[0]
                        }
                        var t = e.price;
                        Object(S.g)([e]) && (t = Object(S.c)(e));
                        var n = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? o.createElement(h.W, {
                            type: h.Vb.H5
                        }, Object(a.d)("Tier 1 Subscription", "SubsBroadcasterPlanTabs")) : o.createElement(P.a, {
                            subscriptionProduct: e
                        });
                        return o.createElement(h.Xa, {
                            margin: {
                                top: 1
                            }
                        }, o.createElement(h.Xa, {
                            margin: {
                                top: 1
                            }
                        }, n), o.createElement(h.Xa, {
                            margin: {
                                top: 1
                            }
                        }, o.createElement(y.a, {
                            isSubbedToTier: this.isSubbedToTier(),
                            tierPrice: t,
                            handleSubAction: this.onSubClick,
                            isMobileCheckout: !0,
                            productName: e.name,
                            url: e.url + "/ticket"
                        })))
                    }, t.prototype.isSubbedToTier = function() {
                        var e = 0;
                        switch (this.state.activeTab) {
                            case i.Tier1:
                                e = 1e3;
                                break;
                            case i.Tier2:
                                e = 2e3;
                                break;
                            case i.Tier3:
                                e = 3e3;
                                break;
                            default:
                                e = 1e3
                        }
                        if (this.props.subTier) {
                            var t = Number(this.props.subTier);
                            if (isNaN(t) && (t = 1e3), e <= t) return !0
                        }
                        return !1
                    }, t.prototype.getBonusEmotes = function() {
                        var e = [];
                        if (this.state.activeTab === i.Tier2 || this.state.activeTab === i.Tier3) {
                            var t = this.props.subscriptionProducts[1];
                            e.push(o.createElement(N, {
                                key: "bonus-emote-" + i.Tier2,
                                subscriptionProduct: t
                            }))
                        }
                        if (this.state.activeTab === i.Tier3) {
                            t = this.props.subscriptionProducts[2];
                            e.push(o.createElement(N, {
                                key: "bonus-emote-" + i.Tier3,
                                subscriptionProduct: t
                            }))
                        }
                        return o.createElement(h.Xa, {
                            display: h.X.InlineFlex,
                            "data-test-selector": "bonus-emote-container"
                        }, e)
                    }, t.prototype.baseEmotes = function() {
                        var e = Object(k.b)(this.props.subscriptionProducts[0].emotes);
                        return o.createElement(h.Xa, {
                            className: "subs-broadcaster-tabbed-tiers__emotes"
                        }, o.createElement(v.a, {
                            emotes: e
                        }))
                    }, t
                }(o.Component),
                w = Object(b.b)("SubPlanTabs")(O),
                x = n("a5fV"),
                I = n("0WFu"),
                D = (n("DQVP"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubClick = function(e) {
                            Object(E.b)({
                                action: e.action,
                                canSubscribe: !t.props.subTier || "3000" !== t.props.subTier,
                                channelID: t.props.channelId,
                                channelLogin: t.props.channelLogin,
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: !1,
                                isMenuOpen: !1,
                                isSubscribed: !!t.props.subTier,
                                isSubscribedCurrentTier: t.props.subTier ? t.props.subTier : null,
                                sub_location: "landing_page",
                                showResub: !1,
                                modal: !1,
                                showPrimeContent: !1
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return o.createElement(h.ib, null);
                        this.setMessages();
                        var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.subscribed : this.messages.subscribeNow;
                        return o.createElement(h.Xa, {
                            className: "subs-plan-tiers",
                            alignItems: h.f.Center,
                            flexDirection: h.Aa.Column,
                            margin: {
                                x: 5
                            }
                        }, o.createElement(h.Pa, {
                            margin: 1,
                            textAlign: h.Rb.Center
                        }, o.createElement(h.W, {
                            type: h.Vb.H3,
                            color: h.O.Link,
                            bold: !0
                        }, e)), o.createElement(h.Pa, {
                            margin: 1,
                            textAlign: h.Rb.Center
                        }, o.createElement(h.W, null, this.messages.subscriptionPerks)), this.baseEmotes(), o.createElement(h.Xa, {
                            margin: 1,
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center
                        }, this.makePlanWrappers()))
                    }, t.prototype.makePlanWrappers = function() {
                        var e = this;
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return [o.createElement(h.ib, {
                            key: "subs-broadcaster__emote-placeholder"
                        })];
                        if ("IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform) {
                            var t = this.props.subscriptionProducts.find(function(e) {
                                return "1000" === e.tier
                            });
                            return [o.createElement(h.Eb, {
                                "data-test-selector": "mobile-sub-container",
                                key: "subs-broadcaster-plan-0",
                                className: "subs-plan-tiers__plan",
                                margin: 1,
                                elevation: 2,
                                display: h.X.Flex,
                                flexDirection: h.Aa.Column,
                                padding: 2,
                                textAlign: h.Rb.Center
                            }, o.createElement(h.Pa, {
                                margin: 1
                            }, o.createElement(h.W, {
                                type: h.Vb.H3,
                                color: h.O.Link
                            }, Object(a.d)("Tier 1 Subscription", "SubsPlanTiers"))), o.createElement(h.Xa, {
                                margin: 1,
                                display: h.X.Flex,
                                flexWrap: h.Ba.Wrap,
                                flexGrow: 1,
                                alignItems: h.f.Center,
                                justifyContent: h.Wa.Center
                            }, o.createElement(h.W, null, this.messages.includes), this.bonusEmotesMessage(0)), this.bonusEmotes(0), t && o.createElement(h.Xa, {
                                margin: 1
                            }, o.createElement(y.a, {
                                isSubbedToTier: this.isSubbedToTier(0),
                                tierPrice: "6.99",
                                handleSubAction: this.onSubClick,
                                productName: t.name,
                                url: "/ticket"
                            })))]
                        }
                        return this.props.subscriptionProducts.map(function(t, n) {
                            var i = t.price;
                            Object(S.g)([t]) && (i = Object(S.c)(t)), t.priceInfo && (i = Object(x.a)(Object(x.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                            var r = null;
                            t.tier && (r = Object(I.a)(t.tier));
                            var s = r ? Object(a.d)("Tier {tier} Subscription", {
                                tier: r
                            }, "SubsPlanTiers") : Object(a.d)("Subscription", "SubsPlanTiers");
                            return o.createElement(h.Eb, {
                                key: "subs-broadcaster-plan-" + n,
                                className: "subs-plan-tiers__plan",
                                margin: 1,
                                elevation: 2,
                                display: h.X.Flex,
                                flexDirection: h.Aa.Column,
                                padding: 2,
                                textAlign: h.Rb.Center,
                                "data-test-selector": "sub-tier-container"
                            }, o.createElement(h.Pa, {
                                margin: 1
                            }, o.createElement(h.W, {
                                type: h.Vb.H3,
                                color: h.O.Link
                            }, s)), o.createElement(h.Xa, {
                                margin: 1,
                                display: h.X.Flex,
                                flexWrap: h.Ba.Wrap,
                                flexGrow: 1,
                                alignItems: h.f.Center,
                                justifyContent: h.Wa.Center
                            }, o.createElement(h.W, null, e.messages.includes), e.bonusEmotesMessage(n)), e.bonusEmotes(n), o.createElement(P.a, {
                                subscriptionProduct: t
                            }), o.createElement(h.Xa, {
                                margin: 1
                            }, o.createElement(y.a, {
                                isSubbedToTier: e.isSubbedToTier(n),
                                tierPrice: i,
                                handleSubAction: e.onSubClick,
                                isMobileCheckout: !0,
                                productName: t.name,
                                url: t.url + "/ticket"
                            })))
                        })
                    }, t.prototype.isSubbedToTier = function(e) {
                        var t = 1e3 * (e + 1);
                        if (this.props.subTier) {
                            var n = Number(this.props.subTier);
                            if (isNaN(n) && (n = 1e3), t <= n) return !0
                        }
                        return !1
                    }, t.prototype.baseEmotes = function() {
                        var e = Object(k.b)(this.props.subscriptionProducts[0].emotes);
                        return o.createElement(h.Xa, {
                            margin: 1,
                            className: "subs-plan-tiers__base-emotes"
                        }, o.createElement(v.a, {
                            emotes: e
                        }))
                    }, t.prototype.bonusEmotesMessage = function(e) {
                        var t = 0;
                        switch (e) {
                            case 2:
                                t = this.props.subscriptionProducts[2].emotes.length + this.props.subscriptionProducts[1].emotes.length;
                                break;
                            case 1:
                                t = this.props.subscriptionProducts[1].emotes.length;
                                break;
                            default:
                                t = 0
                        }
                        return t > 0 ? o.createElement(h.W, {
                            bold: !0
                        }, Object(a.d)("{bonusEmoteCount, plural, one {plus 1 bonus emote!} other {plus {bonusEmoteCount, number} bonus emotes!}}", {
                            bonusEmoteCount: t
                        }, "SubsPlanTiers")) : null
                    }, t.prototype.bonusEmotes = function(e) {
                        var t, n = [];
                        switch (e) {
                            case 2:
                                n.push(this.props.subscriptionProducts[1]), n.push(this.props.subscriptionProducts[2]);
                                break;
                            case 1:
                                n.push(this.props.subscriptionProducts[1])
                        }
                        return t = n.map(function(e, t) {
                            return o.createElement(N, {
                                key: "subs-broadcaster__bonus-emote-" + t,
                                subscriptionProduct: e,
                                hidePrice: !0
                            })
                        }), o.createElement(h.Xa, {
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center,
                            "data-test-selector": "bonus-emote-container"
                        }, t)
                    }, t.prototype.setMessages = function() {
                        this.messages = {
                            subscribeNow: Object(a.d)("Subscribe Now", "SubsPlanTiers"),
                            subscriptionPerks: Object(a.d)("{emoteCount, plural, one {All subscriptions include Subscriber Badges and # Emote.} other {All subscriptions include Subscriber Badges and # Emotes.}}", {
                                emoteCount: this.props.subscriptionProducts[0].emotes.length
                            }, "SubsPlanTiers"),
                            subscribed: Object(a.d)("Subscribed", "SubsPlanTiers"),
                            includes: Object(a.d)("Includes everything listed above.", "SubsPlanTiers")
                        }
                    }, t
                }(o.Component)),
                W = Object(b.b)("SubsPlanTiers")(D),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.Xa, null, o.createElement(g, {
                            channelName: this.props.channelDisplayName
                        }), o.createElement(T.a, {
                            subscriptionProducts: this.props.subscriptionProducts
                        }), o.createElement(h.Xa, {
                            padding: {
                                top: 2
                            },
                            breakpointMedium: {
                                display: h.X.Hide
                            }
                        }, o.createElement(w, {
                            subbedPlatform: this.props.subbedPlatform,
                            channelDisplayName: this.props.channelDisplayName,
                            channelId: this.props.channelId,
                            channelLogin: this.props.channelLogin,
                            subscriptionProducts: this.props.subscriptionProducts,
                            subTier: this.props.subTier
                        })), o.createElement(h.Xa, {
                            padding: {
                                top: 2
                            },
                            display: h.X.Hide,
                            justifyContent: h.Wa.Center,
                            breakpointMedium: {
                                display: h.X.Flex
                            }
                        }, o.createElement(W, {
                            subbedPlatform: this.props.subbedPlatform,
                            subscriptionProducts: this.props.subscriptionProducts,
                            subTier: this.props.subTier,
                            channelId: this.props.channelId,
                            channelLogin: this.props.channelLogin
                        })))
                    }, t
                }(o.Component),
                j = n("lEKk"),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        a.p.setPageTitle("Subscriptions"), this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user;
                        if (e.loading) return o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.Flex,
                            fullHeight: !0,
                            justifyContent: h.Wa.Center
                        }, o.createElement(h.Za, null));
                        if (e.error) return o.createElement(c.a, {
                            message: "Something went wrong"
                        });
                        if (!t || !t.id || !t.subscriptionProducts || t.subscriptionProducts.length < 1) return window.location.replace("https://twitch.tv/" + this.props.match.params.channelName), o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center
                        }, o.createElement(h.Za, null));
                        var n = t.campaignProperties,
                            i = t.self,
                            r = n && n.domains && n.domains.length > 0 || !1,
                            s = null,
                            a = null;
                        i && i.subscriptionBenefit && (s = i.subscriptionBenefit.platform, a = i.subscriptionBenefit.tier);
                        var u = o.createElement(B, {
                            subbedPlatform: s,
                            channelDisplayName: t.displayName || "",
                            channelId: t.id,
                            channelLogin: t.login || "",
                            subscriptionProducts: t.subscriptionProducts,
                            subTier: a
                        });
                        return r && (u = o.createElement(_, {
                            subbedPlatform: s,
                            channelDisplayName: t.displayName || "",
                            channelId: t.id,
                            channelLogin: t.login || "",
                            subscriptionProducts: t.subscriptionProducts,
                            subTier: a
                        })), o.createElement(l.b, null, u)
                    }, t = s.__decorate([Object(u.a)(j, {
                        options: function(e) {
                            return {
                                variables: {
                                    currentChannelLogin: e.match.params.channelName
                                }
                            }
                        }
                    }), Object(b.b)("SubsBroadcasterPage", {
                        destination: p.a.SubsBroadcasterPage
                    }), Object(d.a)({
                        location: m.PageviewLocation.SubsBroadcasterPage
                    })], t)
                }(o.Component),
                R = Object(r.connect)()(F);
            n.d(t, "SubsBroadcasterPage", function() {
                return R
            })
        },
        "3Bft": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = {
                Prime: "prime",
                Tier1: "1000",
                Tier2: "2000",
                Tier3: "3000",
                Custom: "Custom"
            }
        },
        "3DuC": function(e, t, n) {},
        "3GEC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                s = n("2xye");

            function o(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        return t = {
                            channel: e.channel,
                            channel_id: e.channelId,
                            clickthrough_location: e.clickthroughLocation
                        }, r.o.track(s.SpadeEventType.SubsLandingStreamerClick, t), [2]
                    })
                })
            }

            function a(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        if (t = null, e.isSubscribedCurrentTier) switch (e.isSubscribedCurrentTier) {
                            case "1000":
                                t = "$4.99";
                                break;
                            case "2000":
                                t = "$9.99";
                                break;
                            case "3000":
                                t = "$24.99"
                        }
                        return n = {
                            action: e.action,
                            can_subscribe: e.canSubscribe,
                            channel: e.channelLogin,
                            channel_id: e.channelID,
                            checkout_button_tier: e.checkoutButtonTier,
                            has_sub_credit: e.hasSubCredit,
                            host_channel: e.hostChannelLogin,
                            host_channel_id: e.hostChannelID,
                            is_menu_open: e.isMenuOpen,
                            is_subscribed: e.isSubscribed,
                            is_subscribed_current_tier: t,
                            sub_location: e.sub_location,
                            modal: e.modal,
                            modal_level: "",
                            show_prime_content: e.showPrimeContent,
                            show_resub: e.showResub,
                            vod_id: "",
                            vod_type: "",
                            viewport_height: window.innerHeight,
                            viewport_width: window.innerWidth
                        }, r.o.track(s.SpadeEventType.Subscription, n), [2]
                    })
                })
            }
        },
        "4VQm": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                s = n("TSYQ"),
                o = n("17x9"),
                a = n("q1tI"),
                c = n("GxwZ"),
                l = n("N0BP"),
                u = (n("+Mtq"), 100);
            ! function(e) {
                e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
            }(i || (i = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.root = null, n.scrollContent = null, n.xScrollContent = null, n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                        return {
                            registerReceiver: n.registerReceiver,
                            requestVisibilityCheck: n.requestVisibilityCheck,
                            getScrollContent: n.getScrollContent,
                            scrollToTop: n.scrollToTop,
                            yScrollTo: n.yScrollTo
                        }
                    }, n.scrollToBottom = function() {
                        n.scrollContent && n.yScrollTo(n.scrollContent.scrollHeight)
                    }, n.scrollToTop = function() {
                        n.yScrollTo(0)
                    }, n.notifyReceivers = function(e) {
                        requestAnimationFrame(function() {
                            if (n.scrollContent) {
                                var t = n.scrollContent.getBoundingClientRect();
                                e && (e.offset = n.scrollContent.scrollTop), n.receivers.forEach(function(n) {
                                    n.checkVisible(t, e)
                                })
                            }
                        })
                    }, n.onResize = function() {
                        if (!n.resizeTimeout && n.scrollContent) {
                            var e = {
                                type: i.Resize,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                                n.resizeTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onScroll = function() {
                        if (!n.scrollTimeout && n.scrollContent) {
                            var e = {
                                type: i.Scroll,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                                n.scrollTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onWheel = function(e) {
                        if (!n.wheelTimeout && n.scrollContent) {
                            var t = {
                                type: i.Wheel,
                                offset: n.scrollContent.scrollTop,
                                wheelEvent: e
                            };
                            n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                                n.wheelTimeout = 0, n.notifyReceivers(t)
                            }, u)
                        }
                    }, n.registerReceiver = function(e) {
                        return n.scrollContext && n.scrollContext.registerReceiver && n.scrollContext.registerReceiver(e), n.receivers.push(e), n.requestVisibilityCheck(e),
                            function() {
                                var t = n.receivers.indexOf(e);
                                n.receivers.splice(t, 1)
                            }
                    }, n.requestVisibilityCheck = function(e) {
                        requestAnimationFrame(function() {
                            var t = n.scrollContent;
                            if (t) {
                                var i = t.getBoundingClientRect();
                                e.checkVisible(i)
                            }
                        })
                    }, n.setRef = function(e) {
                        return n.root = e
                    }, n.yScrollTo = function(e) {
                        n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                    }, n.getScrollContent = function() {
                        return n.scrollContent
                    }, n.createSimpleBarOptions = function() {
                        return {
                            autoHide: void 0 === n.props.autoHide || n.props.autoHide
                        }
                    }, t.scrollRef && t.scrollRef(n), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scrollContext = this.context, this.root) {
                        if (this.simplebarRef = new c(this.root, this.createSimpleBarOptions()), this.scrollContent = this.simplebarRef.getScrollElement(), this.xScrollContent = this.simplebarRef.getContentElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                            var e = this.scrollContent.querySelector(".simplebar-content");
                            e && e.classList.add(this.props.contentClassName)
                        }
                        this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.xScrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this.root && (delete this.simplebarRef, window.removeEventListener("resize", this.onResize), this.scrollContent && this.scrollContent.removeEventListener("scroll", this.onScroll), this.xScrollContent && this.xScrollContent.removeEventListener("scroll", this.onScroll))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, r.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                        n = {
                            "scrollable-area": !0,
                            "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                            "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                        };
                    return a.createElement("div", r.__assign({
                        className: s(t.className, n),
                        "data-test-selector": "scrollable-area-wrapper",
                        ref: this.setRef
                    }, Object(l.a)(this.props), {
                        style: this.props.style
                    }), a.Children.only(this.props.children))
                }, t.contextTypes = {
                    registerReceiver: o.func
                }, t.childContextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func,
                    getScrollContent: o.func,
                    scrollToTop: o.func,
                    yScrollTo: o.func
                }, t
            }(a.Component);
            n.d(t, !1, function() {
                return "scrollable-area-wrapper"
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return d
            })
        },
        "4iu0": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                s = n("/7QA"),
                o = n("W8Fi"),
                a = n("Ue10"),
                c = (n("3DuC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.hasDiscount(this.props.subscriptionProducts)) {
                            var e = this.getMessage();
                            return r.createElement(a.Eb, {
                                textAlign: a.Rb.Center,
                                className: "sub-discount-banner",
                                padding: 1,
                                color: a.O.Overlay,
                                "data-test-selector": "sub-discount-banner"
                            }, r.createElement(a.W, {
                                bold: !0
                            }, e))
                        }
                        return null
                    }, t.prototype.getMessage = function() {
                        var e = Object(o.d)(this.props.subscriptionProducts[0], this.props.isGift);
                        return this.props.isGift ? Object(s.d)("Gift a sub and get {percent} off!", {
                            percent: Object(s.f)(e / 100, "percent")
                        }, "SubDiscountBanner") : Object(s.d)("Get {percent} off the first month of any paid subscription!", {
                            percent: Object(s.f)(e / 100, "percent")
                        }, "SubDiscountBanner")
                    }, t.prototype.hasDiscount = function(e) {
                        return this.props.isGift ? Object(o.e)(e) : Object(o.g)(e)
                    }, t
                }(r.Component));
            n.d(t, !1, function() {
                return "sub-discount-banner"
            }), n.d(t, "a", function() {
                return c
            })
        },
        "5Bhl": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SubsBroadcaster_RENAME1"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "currentChannelLogin"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "currentChannelLogin"
                                    }
                                }
                            }],
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bannerImageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "profileImageURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "300"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 190
                }
            };
            n.loc.source = {
                body: "query SubsBroadcaster_RENAME1($currentChannelLogin: String!) {\nuser(login: $currentChannelLogin) {\nid\ndisplayName\ndescription\nroles{\nisPartner\n}\nbannerImageURL\nprofileImageURL(width:300)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7SjK": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                s = n("TSYQ"),
                o = n("/7QA"),
                a = n("GnwI"),
                c = n("Ue10"),
                l = (n("GOKC"), r.createElement(c.Eb, {
                    alignItems: c.f.Center,
                    background: c.r.Overlay,
                    borderRadius: c.x.Small,
                    className: "emote-button__lock",
                    color: c.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: c.X.InlineFlex,
                    justifyContent: c.Wa.Center,
                    position: c.jb.Absolute,
                    zIndex: c.ic.Above
                }, r.createElement(c.sb, {
                    asset: c.tb.Lock,
                    height: 10,
                    width: 10
                }))),
                u = function(e) {
                    var t = s("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        n = e.emote,
                        i = n.displayName,
                        u = n.srcSet;
                    if (!u) return null;
                    var d = r.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: u,
                        alt: i
                    });
                    if (e.isCriticalImage) {
                        for (var p = u.split(" ")[0], m = {}, b = 0, h = u.split(","); b < h.length; b++) {
                            var f = h[b].trim().split(" "),
                                g = f[1],
                                v = f[0];
                            m[g] = v
                        }
                        d = r.createElement(a.a, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: i || ""
                        })
                    }
                    return r.createElement("div", {
                        className: "emote-button"
                    }, r.createElement(c.Yb, {
                        label: i || Object(o.d)("Emote", "EmoteButton"),
                        direction: c.ac.Bottom
                    }, r.createElement(c.Pa, {
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Wa.Center
                    }, r.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": i,
                        name: i,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": i
                    }, r.createElement("figure", null, e.locked ? l : null, d)))))
                },
                d = (n("VrOd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickEmote = function(e) {
                            t.props.onClickEmote && t.props.onClickEmote(e, t.props.context)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, n) {
                                return r.createElement(c.Xa, {
                                    key: "emote-button-padder-" + t.id + "--" + t.setID,
                                    padding: {
                                        left: e.props.spaced ? .5 : 0
                                    }
                                }, r.createElement(u, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                }))
                            });
                        return r.createElement(c.Xa, {
                            display: c.X.Flex,
                            flexWrap: c.Ba.Wrap,
                            justifyContent: c.Wa.Center
                        }, t)
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return d
            })
        },
        "8/mp": function(e, t, n) {
            "use strict";
            var i = n("4VQm"),
                r = n("HAa/"),
                s = n("/MKj"),
                o = n("mrSG"),
                a = n("17x9"),
                c = n("q1tI"),
                l = n("/7QA"),
                u = n("Ue10"),
                d = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getStyles = function() {
                            if (n.props.disableStickiness) return {
                                position: "relative"
                            };
                            var e = n.state,
                                t = e.anchoredBottom,
                                i = e.anchoredTop,
                                r = e.top,
                                s = e.width,
                                o = t || i,
                                a = "absolute";
                            return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (a = "inherit", o = !1) : o && (a = "fixed"), {
                                position: a,
                                top: i ? "inherit" : r,
                                width: o ? s : "inherit"
                            }
                        }, n.lockBottom = function(e) {
                            n.element && n.setState({
                                anchoredBottom: !0,
                                top: window.innerHeight - e,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.lockTop = function() {
                            n.element && n.setState({
                                anchoredTop: !0,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.resizeStickyColumn = function() {
                            n.unlock(n.state.lastOffset || 0), n.checkBounding(!0, 0)
                        }, n.setRef = function(e) {
                            return n.element = e
                        }, n.state = {
                            anchoredBottom: !1,
                            anchoredTop: !1,
                            lastOffset: void 0,
                            offsetTop: void 0,
                            top: void 0,
                            width: void 0
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.element) {
                            var e = this.element.getBoundingClientRect();
                            this.setState({
                                offsetTop: e.top
                            })
                        }
                        var t = this.context.registerReceiver;
                        t ? this.unregister = t(this) : l.k.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return c.createElement(u.Xa, {
                            position: u.jb.Relative,
                            fullWidth: !0
                        }, c.createElement("div", {
                            className: "sticky-container",
                            ref: this.setRef,
                            style: this.getStyles()
                        }, this.props.children))
                    }, t.prototype.checkVisible = function(e, t) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, n, r, s, a;
                            return o.__generator(this, function(o) {
                                return !t || t.type !== i.a.Resize && t.type !== i.a.Wheel && t.type !== i.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === i.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === i.a.Wheel && e ? (r = t.wheelEvent, s = void 0, s = 0 === r.deltaMode ? r.deltaY || r.wheelDelta : 16 * r.deltaY, a = s + t.offset, this.context.yScrollTo(a), this.checkBounding(s > 0, t.offset)) : t.type !== i.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                            })
                        })
                    }, t.prototype.checkBounding = function(e, t) {
                        e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                            lastOffset: t
                        })
                    }, t.prototype.shouldLock = function(e) {
                        if (this.element) {
                            var t = this.element.getBoundingClientRect(),
                                n = this.state.offsetTop || 0;
                            if (t.height < window.innerHeight - n) this.lockTop();
                            else {
                                var i = t.top < n,
                                    r = t.top >= window.innerHeight,
                                    s = t.bottom < n,
                                    o = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                                    a = !r && !i,
                                    c = !o && !s;
                                !a && !c || a && c || (!e && a && this.lockTop(), e && c && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), i && s && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), r && o && this.lockTop()
                            }
                        }
                    }, t.prototype.unlock = function(e) {
                        if (this.element) {
                            var t, n = this.state,
                                i = n.offsetTop,
                                r = n.width,
                                s = this.element.getBoundingClientRect(),
                                o = window.innerHeight - (i || 0),
                                a = r;
                            t = "inherit", s.height <= o ? a = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - s.height + o - (this.props.bottomPixelThreshold || 0)), this.setState({
                                top: t,
                                width: a,
                                anchoredBottom: !1,
                                anchoredTop: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: a.func,
                        yScrollTo: a.func
                    }, t
                }(c.Component);
            var p = Object(s.connect)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(d);
            n.d(t, "b", function() {
                return i.b
            }), n.d(t, "a", function() {
                return r.a
            }), n.d(t, "c", function() {
                return p
            })
        },
        DQVP: function(e, t, n) {},
        DnOo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                s = n("oJmH"),
                o = n("/7QA"),
                a = n("UUve"),
                c = n("GnwI"),
                l = n("br9A"),
                u = n("Ue10"),
                d = "subscribe-button__subscribe-tier-button",
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.openCheckout(), t.props.handleSubAction({
                                action: l.a.ClickCheckout,
                                checkoutButtonTier: t.props.tierPrice
                            })
                        }, t.openCheckout = function() {
                            t.props.isMobileCheckout || o.n.set(a.b, t.props.productName)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(o.d)("Subscribed", "SubTierButton");
                            return r.createElement(u.z, {
                                ariaLabel: e,
                                "data-test-selector": d,
                                disabled: !0,
                                icon: u.tb.Star
                            }, e)
                        }
                        var t;
                        return t = this.props.isEsportChannel ? Object(o.d)("Get the All-Access Pass", "SubTierButton") : this.props.customSubscribeNowMessage ? this.props.customSubscribeNowMessage : Object(o.d)("Subscribe Now", "SubTierButton"), r.createElement(u.z, i.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": d,
                            linkTo: this.props.isMobileCheckout ? this.props.url : void 0,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(u.jc)(this.props), {
                            fullWidth: this.props.fullWidth
                        }), t)
                    }, t
                }(r.Component),
                m = Object(s.compose)(Object(c.b)("SubTierButton", {
                    autoReportInteractive: !0
                }))(p);
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return m
            })
        },
        GOKC: function(e, t, n) {},
        "HAa/": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                s = n("TSYQ"),
                o = n("17x9"),
                a = n("q1tI"),
                c = n("/7QA");
            n("miXC");
            ! function(e) {
                e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPendingLoadMoreRequest: !1,
                        loadedMore: !0
                    }, t.isTriggerVisible = function(e, t) {
                        var n = t.top,
                            i = t.top + t.height;
                        return !(e.bottom < n || e.top > i)
                    }, t.getOrientation = function() {
                        return void 0 === t.props.orientation ? i.Up : t.props.orientation
                    }, t.setWrapRef = function(e) {
                        return t.wrapElement = e
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOrientation(),
                        t = s({
                            "scrollable-trigger__trigger-area": !0,
                            "scrollable-trigger__trigger-area--up": e === i.Up,
                            "scrollable-trigger__trigger-area--down": e === i.Down
                        }),
                        n = {
                            height: this.props.pixelThreshold || 100
                        };
                    return a.createElement("div", {
                        className: "scrollable-trigger__wrapper",
                        ref: this.setWrapRef
                    }, a.createElement("div", {
                        className: t,
                        ref: this.setRef,
                        style: n
                    }))
                }, t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : c.k.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.enabled && e.enabled && this.context.requestVisibilityCheck && this.context.requestVisibilityCheck(this)
                }, t.prototype.checkVisible = function(e, t, n) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, s, o, a = this;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (void 0 === n && (n = this.props.requestCap || 5), !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                    if (t = this.element.getBoundingClientRect(), i = this.props.contentLength, s = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                    this.setState({
                                        hasPendingLoadMoreRequest: !0
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                case 2:
                                    return r.sent(), this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), requestAnimationFrame(function() {
                                        var t;
                                        a.element && (t = void 0 !== a.props.contentLength && void 0 !== i ? a.props.contentLength > i : a.wrapElement.offsetTop > s, a.setState({
                                            loadedMore: t
                                        }), n && (t || a.props.forceLoadMoreContent) && a.checkVisible(e, void 0, n - 1))
                                    }), [3, 4];
                                case 3:
                                    throw o = r.sent(), this.element && this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), o;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func
                }, t
            }(a.Component);
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return l
            })
        },
        "L+W6": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                s = n("a5fV"),
                o = n("W8Fi"),
                a = n("Ue10"),
                c = (n("W5/R"), function(e) {
                    var t = e.subscriptionProduct;
                    if (void 0 === t) return i.createElement("div", null);
                    var n = Object(o.e)([e.subscriptionProduct]),
                        c = Object(o.g)([e.subscriptionProduct]),
                        l = Object(o.f)([e.subscriptionProduct]),
                        u = t.price;
                    t.priceInfo && (u = Object(s.a)(Object(s.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                    var d = e.isOneTime ? Object(r.d)("{price} / One-time purchase", {
                        price: u
                    }, "SubDiscountPriceLabel") : Object(r.d)("{price} / Month", {
                        price: u
                    }, "SubDiscountPriceLabel");
                    if (o.e || o.g || o.f) {
                        var p = void 0;
                        if (e.isGift && n ? p = Object(r.d)("{price} (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && l ? p = Object(r.d)("{price} / First Month", {
                                price: Object(o.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : c && (p = Object(r.d)("{price} for the first month (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return i.createElement(a.Xa, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, i.createElement(a.W, {
                            className: "sub-discount-price-label__original-price",
                            color: a.O.Alt2,
                            decoration: a.Tb.Strikethrough
                        }, d), i.createElement(a.W, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return i.createElement(a.Xa, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, i.createElement(a.W, null, d))
                });
            n.d(t, !1, function() {
                return "sub-discount-price-label__discounted"
            }), n.d(t, !1, function() {
                return "sub-discount-price-label__non-discounted"
            }), n.d(t, "a", function() {
                return c
            })
        },
        N0BP: function(e, t, n) {
            "use strict";

            function i(e) {
                for (var t = {}, n = 0, i = Object.keys(e).filter(function(e) {
                        return e.startsWith("data-")
                    }); n < i.length; n++) {
                    var r = i[n];
                    t[r] = e[r]
                }
                return t
            }
            n.d(t, "a", function() {
                return i
            })
        },
        OQsH: function(e, t, n) {},
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "f", function() {
                return b
            }), n.d(t, "d", function() {
                return h
            });
            var i = n("mrSG"),
                r = n("lZdE"),
                s = n("cpJf"),
                o = {
                    "^B-?\\)$": "B)",
                    "^:-?[z|Z|\\|]$": ":|",
                    "^:-?\\)$": ":)",
                    "^:-?\\($": ":(",
                    "^:-?(p|P)$": ":P",
                    "^;-?(p|P)$": ";P",
                    "^:-?[\\\\/]$": ":/",
                    "^;-?\\)$": ";)",
                    "^R-?\\)$": "R)",
                    "^:>$": ":>",
                    "^:&gt;$": ":>",
                    "^[oO](_|\\.)[oO]$": "O_o",
                    "^:-?D$": ":D",
                    "^:-?(o|O)$": ":O",
                    "^>\\($": ">(",
                    "^:-?(?:7|L)$": ":7",
                    "^:-?(S|s)$": ":S",
                    "^#-?[\\\\/]$": "#/",
                    "^<\\]$": "<]",
                    "^<3$": "<3",
                    "^&lt;3$": "<3",
                    "^&lt;\\]$": "<]",
                    "^&gt;\\($": ">("
                },
                a = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function l(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = o[e.token] || e.token,
                            r = a.reduce(function(t, n) {
                                var i = t;
                                return i && (i = i.concat(", ")), i.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(i.__assign({
                            displayName: n,
                            srcSet: r
                        }, e))
                    }, r = 0, s = e; r < s.length; r++) {
                    n(s[r])
                }
                return t
            }

            function u(e, t) {
                var n = l(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return i.__assign({}, e, {
                            setID: t
                        })
                    })
                }(n, t)), n
            }

            function d(e) {
                return e.filter(function(e) {
                    return !!e && !!e.id && !!e.token
                }).sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            }

            function p(e) {
                for (var t = [], n = 0, i = e; n < i.length; n++) {
                    var r = i[n];
                    if (r && r.id && r.emotes) {
                        for (var s = {
                                id: r.id,
                                emotes: []
                            }, o = 0, a = r.emotes; o < a.length; o++) {
                            var c = a[o];
                            c && c.id && c.token && s.emotes.push(c)
                        }
                        t.push(s)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var s = r[i];
                    if (s && s.id && s.emotes) {
                        var o = {
                            id: s.id,
                            emotes: u(d(s.emotes), s.id)
                        };
                        s.owner && (o.owner = s.owner), c.has(parseInt(s.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var b = function(e, t, n) {
                    var i = n || s.d,
                        o = [],
                        a = [],
                        c = [],
                        l = new RegExp("^" + Object(r.a)(t), "i");
                    return e.forEach(function(e) {
                        i[e.token] ? c.push(e) : e.token.match(l) ? o.push(e) : a.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), a.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return i[t.token].count - i[e.token].count
                    }), c.concat(o).concat(a)
                },
                h = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        RuiO: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Core_Services_Spade_SubEvent_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "withVideo"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
                                }
                            }],
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
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "canPrimeSubscribe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "purchasedWithPrime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "video"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "videoID"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "include"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "withVideo"
                                        }
                                    }
                                }]
                            }],
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
                                        value: "broadcastType"
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
                    end: 266
                }
            };
            n.loc.source = {
                body: "query Core_Services_Spade_SubEvent_User($channelID: ID! $withVideo: Boolean! $videoID: ID) {\nuser(id: $channelID) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\ntier\npurchasedWithPrime\n}\n}\n}\nvideo(id: $videoID) @include(if: $withVideo) {\nid\nbroadcastType\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        UUve: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "e", function() {
                return u
            });
            var i = n("/7QA"),
                r = n("y5D0"),
                s = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                a = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                c = [s, o, a];

            function l() {
                c.forEach(function(e) {
                    return i.n.remove(e)
                })
            }

            function u(e) {
                return function() {
                    return Object(r.e)(e, {
                        onClose: l
                    })
                }
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                s = n("q1tI"),
                o = n("wIs1"),
                a = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var s = r.referenceTracking,
                                        o = s.content,
                                        c = s.medium,
                                        l = s.content_index,
                                        u = s.email_id;
                                    a.p.tracking.trackPageview(i.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, a.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : a.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return s.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    s = r.stringify(t);
                                s.length > 0 && (i = "?" + s), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, o
                    }(s.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        VYov: function(e, t, n) {},
        VrOd: function(e, t, n) {},
        "W5/R": function(e, t, n) {},
        W8Fi: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function r(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function s(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function o(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.newPrice : e.price
            }

            function a(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? parseInt(n.discountValue, 10) : 0
            }

            function c(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function l(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }

            function u(e, t) {
                return !!e && !!t && s(e) && !t.paidUpgrade && !!t.gift && t.gift.isGift
            }
            n.d(t, "g", function() {
                return i
            }), n.d(t, "e", function() {
                return r
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "h", function() {
                return u
            })
        },
        a5fV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            });
            var i = n("/7QA");

            function r(e, t) {
                return e / Math.pow(10, t)
            }

            function s(e, t) {
                return Object(i.f)(e, {
                    style: "currency",
                    currency: t
                })
            }
        },
        br9A: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                s = n("2xye"),
                o = n("I6K6"),
                a = n("RuiO"),
                c = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
                    ChangeTier: "change_tier",
                    ClickCheckout: "click_checkout_button",
                    ClickMoreSubOptions: "more_options_click",
                    ClickGiftSubOptions: "gift_options_click",
                    ClickPrimeFAQ: "click_prime_faq",
                    ClickSignupForPrime: "click_signup_for_prime",
                    ClickBack: "back_top_level",
                    CloseSubMenu: "close_subscribe_menu",
                    GiftASub: "gift_a_sub",
                    OpenSubMenu: "open_subscribe_menu",
                    SubWithPrime: "samus_spend_credit"
                };

            function l(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, c, l, u, d, p, m, b, h, f, g, v;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.o.getVideoPlayerTrackingData().vodID, n = !!t, c = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (c.withVideo = !0, c.videoID = t), l = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, r.p.apollo.client.query({
                                    query: a,
                                    variables: c
                                })];
                            case 2:
                                return l = i.sent(), [3, 4];
                            case 3:
                                return u = i.sent(), r.k.error(u, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return d = l && l.data && l.data.user || null, l && !d && r.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, l && n && ((m = l && l.data && l.data.video) ? p = Object(o.a)(m.broadcastType) : r.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: t
                                })), b = d && d.self, h = b ? !!b.subscriptionBenefit : null, f = b && b.subscriptionBenefit && b.subscriptionBenefit.purchasedWithPrime || !1, g = b ? b.canPrimeSubscribe : null, v = {
                                    action: e.action,
                                    can_subscribe: g,
                                    channel: e.channelLogin,
                                    channel_id: e.channelID,
                                    checkout_button_tier: e.checkoutButtonTier,
                                    has_sub_credit: e.hasSubCredit,
                                    host_channel: e.hostChannelLogin,
                                    host_channel_id: e.hostChannelID,
                                    is_menu_open: e.isMenuOpen,
                                    is_subscribed: h,
                                    is_subscribed_current_tier: b && b.subscriptionBenefit && b.subscriptionBenefit.tier,
                                    mystery_gift_count: e.mysteryGiftCount || null,
                                    sub_location: e.sub_location,
                                    sub_recipient: e.giftRecipient,
                                    modal: e.modal,
                                    modal_level: e.modalLevel || "",
                                    show_prime_content: e.showPrimeContent,
                                    show_resub: d ? g && f : null,
                                    vod_id: t,
                                    vod_type: p,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, r.o.track(s.SpadeEventType.Subscription, v), [2]
                        }
                    })
                })
            }
        },
        cpJf: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "d", function() {
                    return s
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(i || (i = {}));
            var r, s = {
                    TriHard: {
                        count: 196568036
                    },
                    Kappa: {
                        count: 192158118
                    },
                    "4Head": {
                        count: 155758710
                    },
                    PogChamp: {
                        count: 151485090
                    },
                    cmonBruh: {
                        count: 146352878
                    },
                    BibleThump: {
                        count: 56472964
                    },
                    WutFace: {
                        count: 45069031
                    },
                    Kreygasm: {
                        count: 41387580
                    },
                    DansGame: {
                        count: 38097659
                    },
                    hi5F: {
                        count: 34986404
                    },
                    SMOrc: {
                        count: 34734484
                    },
                    KappaPride: {
                        count: 34262839
                    },
                    VoHiYo: {
                        count: 27886434
                    },
                    SwiftRage: {
                        count: 24561900
                    },
                    ResidentSleeper: {
                        count: 24438298
                    },
                    EleGiggle: {
                        count: 19891526
                    },
                    FailFish: {
                        count: 19118343
                    },
                    NotLikeThis: {
                        count: 18802905
                    },
                    Keepo: {
                        count: 18351415
                    },
                    BabyRage: {
                        count: 18220906
                    },
                    MingLee: {
                        count: 18026207
                    },
                    pbfSSH: {
                        count: 16911241
                    },
                    forsenE: {
                        count: 14960299
                    },
                    HeyGuys: {
                        count: 14851569
                    },
                    ANELE: {
                        count: 14648986
                    },
                    PJSalt: {
                        count: 14438861
                    }
                },
                o = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
            ! function(e) {
                e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
            }(r || (r = {}))
        },
        lEKk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SubsBroadcaster"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "currentChannelLogin"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "currentChannelLogin"
                                    }
                                }
                            }],
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "campaignProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "domains"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionProducts"
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
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tier"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "displayName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "priceInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "currency"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "exponent"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "total"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "description"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "price"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isTaxInclusive"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
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
                                                        value: "tax"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emotes"
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
                                                        value: "token"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emoteSetID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "self"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "promotion"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "newPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "oldPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountValue"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "platform"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 430
                }
            };
            n.loc.source = {
                body: "query SubsBroadcaster($currentChannelLogin: String!) {\nuser(login: $currentChannelLogin) {\nid\ndisplayName\nlogin\ncampaignProperties {\ndomains\n}\nsubscriptionProducts{\nid\nurl\nprice\ntier\nname\ndisplayName\npriceInfo {\ncurrency\nexponent\ntotal\ndescription\nprice\nisTaxInclusive\nid\ntax\n}\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\nself{\nsubscriptionBenefit {\nid\ntier\nplatform\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        lZdE: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return i
            })
        },
        miXC: function(e, t, n) {}
    }
]);