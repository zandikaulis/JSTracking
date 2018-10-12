(window.webpackJsonp = window.webpackJsonp || []).push([
    [177], {
        "0WFu": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("3Bft");

            function r(e) {
                return [i.b.Prime, i.b.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
            }
        },
        "0tEQ": function(e, t, n) {},
        "15ff": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("/MKj"),
                a = n("mrSG"),
                s = n("q1tI"),
                o = n("/7QA"),
                c = n("ZDlU"),
                u = n("8/mp"),
                l = n("yR8l"),
                d = n("V+GM"),
                p = n("NvVO"),
                m = n("2xye"),
                b = n("OpME"),
                h = n("GnwI"),
                f = n("Ue10"),
                g = (n("OQsH"), n("5Bhl")),
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading || !this.props.data.user ? s.createElement("div", {
                            className: "subs-broadcaster-banner"
                        }, s.createElement(f.Va, {
                            className: "subs-broadcaster-banner__broadcaster-info",
                            textAlign: f.Jb.Center,
                            display: f.W.Flex,
                            flexDirection: f.Y.Column,
                            alignItems: f.f.Center,
                            flexWrap: f.Z.NoWrap,
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
                        }, s.createElement(f.Va, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 1
                            },
                            fullWidth: !0
                        }, s.createElement(f.cb, {
                            height: 40
                        })), s.createElement(f.Va, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            }
                        }, s.createElement(f.cb, {
                            height: 80,
                            width: 80
                        })), s.createElement(f.Va, {
                            className: "subs-broadcaster-banner__description",
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            },
                            fullWidth: !0
                        }, s.createElement(f.cb, {
                            lineCount: 1
                        })))) : s.createElement("div", {
                            style: {
                                backgroundImage: "url(" + this.props.data.user.bannerImageURL
                            },
                            className: "subs-broadcaster-banner"
                        }, s.createElement(f.Va, {
                            className: "subs-broadcaster-banner__broadcaster-info",
                            textAlign: f.Jb.Center,
                            display: f.W.Flex,
                            flexDirection: f.Y.Column,
                            alignItems: f.f.Center,
                            flexWrap: f.Z.NoWrap,
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
                        }, s.createElement(f.Na, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 1
                            }
                        }, s.createElement(f.V, {
                            type: f.Nb.H2,
                            bold: !0,
                            color: f.O.Overlay
                        }, this.props.data.user.displayName)), s.createElement(f.Na, {
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            }
                        }, s.createElement(f.q, {
                            alt: this.props.data.user.displayName,
                            size: 96,
                            src: this.props.data.user.profileImageURL
                        })), s.createElement(f.Va, {
                            className: "subs-broadcaster-banner__description",
                            margin: 1,
                            breakpointLarge: {
                                margin: 2
                            }
                        }, s.createElement(f.V, {
                            color: f.O.Overlay
                        }, this.props.data.user.description)), this.verifiedPartner()))
                    }, t.prototype.verifiedPartner = function() {
                        return this.props.data.user && this.props.data.user.roles.isPartner ? s.createElement(f.Va, {
                            display: f.W.Flex
                        }, s.createElement(f.mb, {
                            asset: f.nb.Verified,
                            type: f.ob.Brand
                        }), s.createElement(f.Na, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(f.V, {
                            color: f.O.Overlay
                        }, Object(o.d)("Verified Twitch Partner", "SubsBroadcasterBanner")))) : null
                    }, t = a.__decorate([Object(h.c)("SubsBroadcasterBanner"), Object(l.a)(g, {
                        options: function(e) {
                            return {
                                variables: {
                                    currentChannelLogin: e.channelName
                                }
                            }
                        }
                    })], t)
                }(s.Component),
                v = n("7SjK"),
                E = n("DnOo"),
                y = n("W8Fi"),
                _ = n("3GEC"),
                S = (n("VYov"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.productName = Object(o.d)("All-Access Pass", "SubsPlanEsports"), t.onSubClick = function(e) {
                            Object(_.b)({
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(f.cb, null) : s.createElement(f.Va, {
                            className: "subs-plan-esports",
                            alignItems: f.f.Center,
                            flexDirection: f.Y.Column,
                            margin: {
                                x: 5
                            }
                        }, s.createElement(f.Na, {
                            margin: 1,
                            textAlign: f.Jb.Center
                        }, s.createElement(f.V, {
                            type: f.Nb.H3,
                            color: f.O.Link,
                            bold: !0
                        }, this.productName)), s.createElement(f.Na, {
                            margin: 1,
                            textAlign: f.Jb.Center
                        }, s.createElement(f.V, null, Object(o.d)("Your VIP pass to the best of the Overwatch League", "SubsPlanEsports"))), this.baseEmotes(), s.createElement(f.Va, {
                            margin: 1,
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center
                        }, this.makePlanWrappers()))
                    }, t.prototype.makePlanWrappers = function() {
                        var e = this;
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return [s.createElement(f.cb, {
                            key: "subs-broadcaster__emote-placeholder"
                        })];
                        var t = Object(o.d)("Overwatch League All-Access Pass Benefits", "SubsPlanEsports"),
                            n = Object(o.d)("Exclusive Command Center Stream", "SubPlanEsports"),
                            i = Object(o.d)("Match Analysis Videos by Players", "SubPlanEsports"),
                            r = Object(o.d)("Participate in Post-Match Q&A", "SubPlanEsports"),
                            a = Object(o.d)("Passholder-Only Chat Access", "SubPlanEsports"),
                            c = Object(o.d)("Ad-Free Viewing on Overwatch League", "SubPlanEsports"),
                            u = Object(o.d)("Overwatch In-Game Content", "SubPlanEsports"),
                            l = Object(o.d)("Get All-Access Pass for $19.99 with Twitch Prime", "SubsPlanEsports"),
                            d = Object(o.d)("Offer available for a limited time. Terms and conditions apply", "SubsPlanEsports");
                        return "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? [s.createElement(f.xb, {
                            "data-test-selector": "mobile-sub-container",
                            key: "subs-broadcaster-plan-0",
                            className: "subs-plan-esports__plan",
                            margin: 1,
                            elevation: 2,
                            display: f.W.Flex,
                            flexDirection: f.Y.Column,
                            padding: 2,
                            textAlign: f.Jb.Center
                        }, s.createElement(f.Na, {
                            margin: 1
                        }, s.createElement(f.V, {
                            type: f.Nb.H3,
                            color: f.O.Link
                        }, this.productName)), s.createElement(f.Va, {
                            margin: {
                                x: 1,
                                bottom: 1
                            }
                        }, s.createElement(f.Va, {
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center
                        }, s.createElement(f.Va, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(f.mb, {
                            asset: f.nb.Crown,
                            type: f.ob.Prime
                        })), s.createElement(f.V, {
                            type: f.Nb.H5
                        }, l)), s.createElement(f.T, {
                            to: "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
                            targetBlank: !0,
                            hoverUnderlineNone: !1
                        }, d)), s.createElement(f.Va, {
                            margin: 1,
                            display: f.W.Flex,
                            flexWrap: f.Z.Wrap,
                            flexGrow: 1,
                            alignItems: f.f.Center,
                            justifyContent: f.Ua.Center
                        }, s.createElement(f.V, {
                            bold: !0
                        }, t), s.createElement(f.Va, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(f.V, null, n), s.createElement(f.V, null, i), s.createElement(f.V, null, r), s.createElement(f.V, null, a), s.createElement(f.V, null, c), s.createElement(f.V, null, u))))] : this.props.subscriptionProducts.map(function(p, m) {
                            var b = p.price;
                            return Object(y.g)([p]) && (b = Object(y.c)(p)), s.createElement(f.xb, {
                                key: "subs-broadcaster-plan-" + m,
                                className: "subs-plan-esports__plan",
                                margin: 1,
                                elevation: 2,
                                display: f.W.Flex,
                                flexDirection: f.Y.Column,
                                padding: 2,
                                textAlign: f.Jb.Center,
                                "data-test-selector": "sub-tier-container"
                            }, s.createElement(f.Na, {
                                margin: 1
                            }, s.createElement(f.V, {
                                type: f.Nb.H3,
                                color: f.O.Link
                            }, Object(o.d)("{price} All-Access Pass", {
                                price: p.price
                            }, "SubsPlanEsports"))), s.createElement(f.Va, {
                                margin: {
                                    x: 1,
                                    bottom: 1
                                }
                            }, s.createElement(f.Va, {
                                display: f.W.Flex,
                                justifyContent: f.Ua.Center
                            }, s.createElement(f.Va, {
                                margin: {
                                    right: .5
                                }
                            }, s.createElement(f.mb, {
                                asset: f.nb.Crown,
                                type: f.ob.Prime
                            })), s.createElement(f.V, {
                                type: f.Nb.H5
                            }, l)), s.createElement(f.T, {
                                to: "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
                                targetBlank: !0,
                                hoverUnderlineNone: !1
                            }, d)), s.createElement(f.Va, {
                                margin: 1,
                                display: f.W.Flex,
                                flexWrap: f.Z.Wrap,
                                flexGrow: 1,
                                alignItems: f.f.Center,
                                justifyContent: f.Ua.Center
                            }, s.createElement(f.V, {
                                bold: !0
                            }, t), s.createElement(f.Va, {
                                padding: {
                                    top: 1
                                }
                            }, s.createElement(f.V, null, n), s.createElement(f.V, null, i), s.createElement(f.V, null, r), s.createElement(f.V, null, a), s.createElement(f.V, null, c), s.createElement(f.V, null, u))), s.createElement(f.Va, {
                                margin: 1
                            }, s.createElement(E.a, {
                                isSubbedToTier: e.isSubbedToTier(m),
                                tierPrice: b,
                                handleSubAction: e.onSubClick,
                                productName: p.name,
                                url: p.url + "/ticket",
                                targetBlank: !1,
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
                        var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                        return s.createElement(f.Va, {
                            margin: 1,
                            className: "subs-plan-esports__base-emotes"
                        }, s.createElement(v.a, {
                            emotes: e,
                            locked: !1
                        }))
                    }, t = a.__decorate([Object(h.c)("SubsPlanEsports")], t)
                }(s.Component)),
                P = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(f.Va, null, s.createElement(k, {
                            channelName: this.props.channelDisplayName
                        }), s.createElement(f.Va, {
                            display: f.W.Flex,
                            padding: {
                                top: 2
                            },
                            justifyContent: f.Ua.Center
                        }, s.createElement(S, {
                            subbedPlatform: this.props.subbedPlatform,
                            subscriptionProducts: this.props.subscriptionProducts,
                            subTier: this.props.subTier,
                            channelId: this.props.channelId,
                            channelLogin: this.props.channelLogin
                        })))
                    }, t
                }(s.Component),
                N = n("4iu0"),
                T = n("L+W6"),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.subscriptionProduct.emotes.length < 1 ? null : s.createElement(f.Va, {
                            key: this.props.subscriptionProduct.id,
                            display: f.W.Flex,
                            flexDirection: f.Y.Column,
                            alignItems: f.f.Center,
                            margin: 1
                        }, this.buildEmotes(this.props.subscriptionProduct.emotes), this.props.hidePrice ? null : s.createElement(f.V, null, Object(o.d)("{price} emote", {
                            price: this.props.subscriptionProduct.price
                        }, "SubsBonusEmote")))
                    }, t.prototype.buildEmotes = function(e) {
                        return Object(b.b)(e).map(function(e) {
                            return s.createElement("figure", {
                                className: "emote-picker__emote-figure",
                                key: e.id
                            }, s.createElement("img", {
                                srcSet: e.srcSet,
                                alt: e.displayName
                            }))
                        })
                    }, t
                }(s.Component);
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
                            subscribe: Object(o.d)("Subscribe Now", "SubsBroadcasterPlanTabs"),
                            mobileSubbed: Object(o.d)("Subscribed", "SubsBroadcasterPlanTabs"),
                            perkChat: Object(o.d)("Chat During Subscriber-Only Mode", "SubsBroadcasterPlanTabs"),
                            includedEmotes: Object(o.d)("Included Emotes", "SubsBroadcasterPlanTabs")
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
                            Object(_.b)({
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.mobileSubbed : this.messages.subscribe;
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(f.Va, {
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center,
                            alignItems: f.f.Center,
                            fullHeight: !0
                        }, s.createElement(f.Xa, null)) : s.createElement(f.Va, {
                            className: "subs-broadcaster-tabbed-tiers",
                            display: f.W.Flex,
                            flexDirection: f.Y.Column,
                            alignItems: f.f.Center
                        }, s.createElement(f.Na, {
                            margin: 1
                        }, s.createElement(f.V, {
                            type: f.Nb.H3,
                            color: f.O.Link,
                            bold: !0
                        }, e)), "IOS" !== this.props.subbedPlatform && "ANDROID" !== this.props.subbedPlatform ? this.makeTabs() : null, this.makeTabContents())
                    }, t.prototype.makeTabs = function() {
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(f.cb, null) : 1 === this.props.subscriptionProducts.length ? s.createElement(f.zb, null, s.createElement(f.yb, {
                            active: !0,
                            "data-a-target": "subscribe-tab-" + i.Tier1
                        }, this.props.subscriptionProducts[0].price)) : s.createElement(f.zb, null, s.createElement(f.yb, {
                            active: this.state.activeTab === i.Tier1,
                            onClick: this.toggleActiveTab,
                            "data-a-target": "subscribe-tab-" + i.Tier1
                        }, this.props.subscriptionProducts[0].price), s.createElement(f.yb, {
                            active: this.state.activeTab === i.Tier2,
                            onClick: this.toggleActiveTab,
                            "data-a-target": "subscribe-tab-" + i.Tier2
                        }, this.props.subscriptionProducts[1].price), s.createElement(f.yb, {
                            active: this.state.activeTab === i.Tier3,
                            onClick: this.toggleActiveTab,
                            "data-a-target": "subscribe-tab-" + i.Tier3
                        }, this.props.subscriptionProducts[2].price))
                    }, t.prototype.makeTabContents = function() {
                        return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(f.cb, null) : s.createElement(f.Va, {
                            className: "subs-broadcaster-tabbed-tiers__tab",
                            display: f.W.Flex,
                            flexDirection: f.Y.Column,
                            alignItems: f.f.Center,
                            textAlign: f.Jb.Center
                        }, s.createElement(f.Na, {
                            margin: 1
                        }, s.createElement(f.V, {
                            type: f.Nb.H4,
                            bold: !0
                        }, Object(o.d)("Channel Subscription for {displayName}", {
                            displayName: this.props.channelDisplayName
                        }, "SubsBroadcasterPlanTabs"))), s.createElement(f.V, {
                            type: f.Nb.P
                        }, Object(o.d)("{numEmotes, plural, one {Includes Ad-Free Viewing, Subscriber Badges and 1 Emote.} other {Includes Ad-Free Viewing, Subscriber Badges and {numEmotes, number} Emotes.}}", {
                            numEmotes: this.props.subscriptionProducts[0].emotes.length
                        }, "SubsBroadcasterPlanTabs")), s.createElement(f.V, {
                            type: f.Nb.P
                        }, this.messages.perkChat), this.getSubButton(), s.createElement(f.Na, {
                            margin: {
                                top: 2
                            }
                        }, s.createElement(f.V, {
                            type: f.Nb.H4,
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
                        Object(y.g)([e]) && (t = Object(y.c)(e));
                        var n = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? s.createElement(f.V, {
                            type: f.Nb.H5
                        }, Object(o.d)("Tier 1 Subscription", "SubsBroadcasterPlanTabs")) : s.createElement(T.a, {
                            subscriptionProduct: e
                        });
                        return s.createElement(f.Va, {
                            margin: {
                                top: 1
                            }
                        }, s.createElement(f.Va, {
                            margin: {
                                top: 1
                            }
                        }, n), s.createElement(f.Va, {
                            margin: {
                                top: 1
                            }
                        }, s.createElement(E.a, {
                            isSubbedToTier: this.isSubbedToTier(),
                            tierPrice: t,
                            handleSubAction: this.onSubClick,
                            productName: e.name,
                            url: e.url + "/ticket",
                            targetBlank: !1
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
                            e.push(s.createElement(C, {
                                key: "bonus-emote-" + i.Tier2,
                                subscriptionProduct: t
                            }))
                        }
                        if (this.state.activeTab === i.Tier3) {
                            t = this.props.subscriptionProducts[2];
                            e.push(s.createElement(C, {
                                key: "bonus-emote-" + i.Tier3,
                                subscriptionProduct: t
                            }))
                        }
                        return s.createElement(f.Va, {
                            display: f.W.InlineFlex,
                            "data-test-selector": "bonus-emote-container"
                        }, e)
                    }, t.prototype.baseEmotes = function() {
                        var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                        return s.createElement(f.Va, {
                            className: "subs-broadcaster-tabbed-tiers__emotes"
                        }, s.createElement(v.a, {
                            emotes: e,
                            locked: !1
                        }))
                    }, t = a.__decorate([Object(h.c)("SubPlanTabs")], t)
                }(s.Component),
                V = n("a5fV"),
                I = n("0WFu"),
                x = (n("DQVP"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubClick = function(e) {
                            Object(_.b)({
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return s.createElement(f.cb, null);
                        this.setMessages();
                        var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.subscribed : this.messages.subscribeNow;
                        return s.createElement(f.Va, {
                            className: "subs-plan-tiers",
                            alignItems: f.f.Center,
                            flexDirection: f.Y.Column,
                            margin: {
                                x: 5
                            }
                        }, s.createElement(f.Na, {
                            margin: 1,
                            textAlign: f.Jb.Center
                        }, s.createElement(f.V, {
                            type: f.Nb.H3,
                            color: f.O.Link,
                            bold: !0
                        }, e)), s.createElement(f.Na, {
                            margin: 1,
                            textAlign: f.Jb.Center
                        }, s.createElement(f.V, null, this.messages.subscriptionPerks)), this.baseEmotes(), s.createElement(f.Va, {
                            margin: 1,
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center
                        }, this.makePlanWrappers()))
                    }, t.prototype.makePlanWrappers = function() {
                        var e = this;
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return [s.createElement(f.cb, {
                            key: "subs-broadcaster__emote-placeholder"
                        })];
                        if ("IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform) {
                            var t = this.props.subscriptionProducts.find(function(e) {
                                return "1000" === e.tier
                            });
                            return [s.createElement(f.xb, {
                                "data-test-selector": "mobile-sub-container",
                                key: "subs-broadcaster-plan-0",
                                className: "subs-plan-tiers__plan",
                                margin: 1,
                                elevation: 2,
                                display: f.W.Flex,
                                flexDirection: f.Y.Column,
                                padding: 2,
                                textAlign: f.Jb.Center
                            }, s.createElement(f.Na, {
                                margin: 1
                            }, s.createElement(f.V, {
                                type: f.Nb.H3,
                                color: f.O.Link
                            }, Object(o.d)("Tier 1 Subscription", "SubsPlanTiers"))), s.createElement(f.Va, {
                                margin: 1,
                                display: f.W.Flex,
                                flexWrap: f.Z.Wrap,
                                flexGrow: 1,
                                alignItems: f.f.Center,
                                justifyContent: f.Ua.Center
                            }, s.createElement(f.V, null, this.messages.includes), this.bonusEmotesMessage(0)), this.bonusEmotes(0), t && s.createElement(f.Va, {
                                margin: 1
                            }, s.createElement(E.a, {
                                isSubbedToTier: this.isSubbedToTier(0),
                                tierPrice: "6.99",
                                handleSubAction: this.onSubClick,
                                productName: t.name,
                                url: "/ticket",
                                targetBlank: !1
                            })))]
                        }
                        return this.props.subscriptionProducts.map(function(t, n) {
                            var i = t.price;
                            Object(y.g)([t]) && (i = Object(y.c)(t)), t.priceInfo && (i = Object(V.a)(Object(V.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                            var r = i;
                            return t.tier && null === (r = String(Object(I.a)(t.tier))) && (r = "1"), s.createElement(f.xb, {
                                key: "subs-broadcaster-plan-" + n,
                                className: "subs-plan-tiers__plan",
                                margin: 1,
                                elevation: 2,
                                display: f.W.Flex,
                                flexDirection: f.Y.Column,
                                padding: 2,
                                textAlign: f.Jb.Center,
                                "data-test-selector": "sub-tier-container"
                            }, s.createElement(f.Na, {
                                margin: 1
                            }, s.createElement(f.V, {
                                type: f.Nb.H3,
                                color: f.O.Link
                            }, Object(o.d)("Tier {tier} Subscription", {
                                tier: r
                            }, "SubsPlanTiers"))), s.createElement(f.Va, {
                                margin: 1,
                                display: f.W.Flex,
                                flexWrap: f.Z.Wrap,
                                flexGrow: 1,
                                alignItems: f.f.Center,
                                justifyContent: f.Ua.Center
                            }, s.createElement(f.V, null, e.messages.includes), e.bonusEmotesMessage(n)), e.bonusEmotes(n), s.createElement(T.a, {
                                subscriptionProduct: t
                            }), s.createElement(f.Va, {
                                margin: 1
                            }, s.createElement(E.a, {
                                isSubbedToTier: e.isSubbedToTier(n),
                                tierPrice: i,
                                handleSubAction: e.onSubClick,
                                productName: t.name,
                                url: t.url + "/ticket",
                                targetBlank: !1
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
                        var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                        return s.createElement(f.Va, {
                            margin: 1,
                            className: "subs-plan-tiers__base-emotes"
                        }, s.createElement(v.a, {
                            emotes: e,
                            locked: !1
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
                        return t > 0 ? s.createElement(f.V, {
                            bold: !0
                        }, Object(o.d)("{bonusEmoteCount, plural, one {plus 1 bonus emote!} other {plus {bonusEmoteCount, number} bonus emotes!}}", {
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
                            return s.createElement(C, {
                                key: "subs-broadcaster__bonus-emote-" + t,
                                subscriptionProduct: e,
                                hidePrice: !0
                            })
                        }), s.createElement(f.Va, {
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center,
                            "data-test-selector": "bonus-emote-container"
                        }, t)
                    }, t.prototype.setMessages = function() {
                        this.messages = {
                            subscribeNow: Object(o.d)("Subscribe Now", "SubsPlanTiers"),
                            subscriptionPerks: Object(o.d)("{emoteCount, plural, one {All subscriptions include Subscriber Badges and # Emote.} other {All subscriptions include Subscriber Badges and # Emotes.}}", {
                                emoteCount: this.props.subscriptionProducts[0].emotes.length
                            }, "SubsPlanTiers"),
                            subscribed: Object(o.d)("Subscribed", "SubsPlanTiers"),
                            includes: Object(o.d)("Includes everything listed above.", "SubsPlanTiers")
                        }
                    }, t = a.__decorate([Object(h.c)("SubsPlanTiers")], t)
                }(s.Component)),
                j = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(f.Va, null, s.createElement(k, {
                            channelName: this.props.channelDisplayName
                        }), s.createElement(N.a, {
                            subscriptionProducts: this.props.subscriptionProducts
                        }), s.createElement(f.Va, {
                            padding: {
                                top: 2
                            },
                            breakpointMedium: {
                                display: f.W.Hide
                            }
                        }, s.createElement(O, {
                            subbedPlatform: this.props.subbedPlatform,
                            channelDisplayName: this.props.channelDisplayName,
                            channelId: this.props.channelId,
                            channelLogin: this.props.channelLogin,
                            subscriptionProducts: this.props.subscriptionProducts,
                            subTier: this.props.subTier
                        })), s.createElement(f.Va, {
                            padding: {
                                top: 2
                            },
                            display: f.W.Hide,
                            justifyContent: f.Ua.Center,
                            breakpointMedium: {
                                display: f.W.Flex
                            }
                        }, s.createElement(x, {
                            subbedPlatform: this.props.subbedPlatform,
                            subscriptionProducts: this.props.subscriptionProducts,
                            subTier: this.props.subTier,
                            channelId: this.props.channelId,
                            channelLogin: this.props.channelLogin
                        })))
                    }, t
                }(s.Component),
                w = n("lEKk"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            processedEmotes: [],
                            emoteSetId: "",
                            subscriptionProducts: [],
                            isSubscribed: !1,
                            subTier: null,
                            subPlatform: null
                        }, t.updateState = function(e) {
                            if (!e.data.loading) {
                                if (e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0) {
                                    var n = Object(b.b)(e.data.user.subscriptionProducts[0].emotes);
                                    t.setState({
                                        processedEmotes: n,
                                        emoteSetId: e.data.user.subscriptionProducts[0].emoteSetID,
                                        subscriptionProducts: e.data.user.subscriptionProducts
                                    })
                                }
                                e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && t.setState({
                                    isSubscribed: !0,
                                    subTier: e.data.user.self.subscriptionBenefit.tier,
                                    subPlatform: e.data.user.self.subscriptionBenefit.platform
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.updateState(this.props)
                    }, t.prototype.componentDidMount = function() {
                        o.o.setPageTitle("Subscriptions"), this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.updateState(e)
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return s.createElement(f.Va, {
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center,
                            alignItems: f.f.Center,
                            fullHeight: !0
                        }, s.createElement(f.Xa, null));
                        if (this.props.data.error) return s.createElement(c.a, {
                            message: "Something went wrong"
                        });
                        if (!this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts || this.props.data.user.subscriptionProducts.length < 1) return window.location.replace("https://twitch.tv/" + this.props.match.params.channelName), s.createElement(f.Va, {
                            display: f.W.Flex,
                            justifyContent: f.Ua.Center,
                            alignItems: f.f.Center
                        }, s.createElement(f.Xa, null));
                        var e = this.props.data.user && this.props.data.user.campaignProperties && this.props.data.user.campaignProperties.domains && this.props.data.user.campaignProperties.domains.length > 0 || !1,
                            t = s.createElement(j, {
                                subbedPlatform: this.state.subPlatform,
                                channelDisplayName: this.props.data.user.displayName,
                                channelId: this.props.data.user.id,
                                channelLogin: this.props.data.user.login,
                                subscriptionProducts: this.state.subscriptionProducts,
                                subTier: this.state.subTier
                            });
                        return e && (t = s.createElement(P, {
                            subbedPlatform: this.state.subPlatform,
                            channelDisplayName: this.props.data.user.displayName,
                            channelId: this.props.data.user.id,
                            channelLogin: this.props.data.user.login,
                            subscriptionProducts: this.state.subscriptionProducts,
                            subTier: this.state.subTier
                        })), s.createElement(u.b, null, t)
                    }, t = a.__decorate([Object(l.a)(w, {
                        options: function(e) {
                            return {
                                variables: {
                                    currentChannelLogin: e.match.params.channelName
                                }
                            }
                        }
                    }), Object(h.c)("SubsBroadcasterPage", {
                        destination: p.a.SubsBroadcasterPage
                    }), Object(d.a)({
                        location: m.PageviewLocation.SubsBroadcasterPage
                    })], t)
                }(s.Component),
                F = Object(r.connect)()(D);
            n.d(t, "SubsBroadcasterPage", function() {
                return F
            })
        },
        "3Bft": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
                }(i || (i = {})),
                function(e) {
                    e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
                }(r || (r = {}));
            var a = {
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
                return s
            }), n.d(t, "b", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("2xye");

            function s(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        return t = {
                            login: e.login,
                            user_id: Number(e.userId),
                            channel: e.channel,
                            channel_id: e.channelId,
                            clickthrough_location: e.clickthroughLocation
                        }, r.n.track(a.SpadeEventType.SubsLandingStreamerClick, t), [2]
                    })
                })
            }

            function o(e) {
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
                        }, r.n.track(a.SpadeEventType.Subscription, n), [2]
                    })
                })
            }
        },
        "4iu0": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                s = n("W8Fi"),
                o = n("Ue10"),
                c = (n("3DuC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.hasDiscount(this.props.subscriptionProducts)) {
                            var e = this.getMessage();
                            return r.createElement(o.xb, {
                                textAlign: o.Jb.Center,
                                className: "sub-discount-banner",
                                padding: 1,
                                color: o.O.Overlay,
                                "data-test-selector": "sub-discount-banner"
                            }, r.createElement(o.V, {
                                bold: !0
                            }, e))
                        }
                        return null
                    }, t.prototype.getMessage = function() {
                        var e = Object(s.d)(this.props.subscriptionProducts[0], this.props.isGift);
                        return this.props.isGift ? Object(a.d)("Gift a sub and get {percent} off!", {
                            percent: Object(a.e)(e / 100, "percent")
                        }, "SubDiscountBanner") : Object(a.d)("Get {percent} off the first month of any paid subscription!", {
                            percent: Object(a.e)(e / 100, "percent")
                        }, "SubDiscountBanner")
                    }, t.prototype.hasDiscount = function(e) {
                        return this.props.isGift ? Object(s.e)(e) : Object(s.g)(e)
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
                r = n("TSYQ"),
                a = n("q1tI"),
                s = n("/7QA"),
                o = n("GnwI"),
                c = n("Ue10"),
                u = (n("VrOd"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = r("emote-picker__emote-link", {
                                "emote-picker__emote-link--locked": this.props.locked
                            }),
                            n = a.createElement(c.xb, {
                                alignItems: c.f.Center,
                                background: c.r.Overlay,
                                borderRadius: c.x.Small,
                                className: "emote-picker__emote-lock",
                                color: c.O.Overlay,
                                display: c.W.InlineFlex,
                                justifyContent: c.Ua.Center,
                                position: c.db.Absolute,
                                zIndex: c.ac.Above
                            }, a.createElement(c.mb, {
                                asset: c.nb.Lock,
                                height: 10,
                                width: 10
                            })),
                            i = this.props.emotes.map(function(i, r) {
                                if (!i.srcSet) return null;
                                var u = a.createElement("img", {
                                    className: "emote-picker__emote-image",
                                    srcSet: i.srcSet,
                                    alt: i.displayName
                                });
                                if (0 === r) {
                                    for (var l = i.srcSet.split(" ")[0], d = {}, p = 0, m = i.srcSet.split(","); p < m.length; p++) {
                                        var b = m[p].trim().split(" "),
                                            h = b[1],
                                            f = b[0];
                                        d[h] = f
                                    }
                                    u = a.createElement(o.b, {
                                        className: "emote-picker__emote-image",
                                        src: l,
                                        srcSet: d,
                                        alt: i.displayName || ""
                                    })
                                }
                                return a.createElement("div", {
                                    key: i.id,
                                    className: "emote-picker__emote"
                                }, a.createElement(c.Qb, {
                                    label: i.displayName || Object(s.d)("Emote", "EmoteGrid"),
                                    direction: c.Sb.Bottom
                                }, a.createElement(c.Na, {
                                    display: c.W.Flex,
                                    alignItems: c.f.Center,
                                    justifyContent: c.Ua.Center
                                }, a.createElement("button", {
                                    className: t,
                                    "aria-label": i.displayName,
                                    name: i.displayName,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote.bind(e, i),
                                    "data-a-target": i.displayName
                                }, a.createElement("figure", {
                                    className: "emote-picker__emote-figure"
                                }, e.props.locked ? n : null, u)))))
                            });
                        return a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.Wrap,
                            justifyContent: c.Ua.Center
                        }, i)
                    }, t.prototype.handleClickEmote = function(e, t) {
                        this.props.onClickEmote && this.props.onClickEmote(t.currentTarget.name, e.id, e.setID)
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return u
            })
        },
        DQVP: function(e, t, n) {},
        DnOo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                s = n("/7QA"),
                o = n("UUve"),
                c = n("D7An"),
                u = n("GnwI"),
                l = n("br9A"),
                d = n("Ue10"),
                p = "subscribe-button__subscribe-tier-button",
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                hasPopupExperiment: !1
                            }, n.handleClick = function() {
                                n.openCheckout(), n.props.handleSubAction({
                                    action: l.a.ClickCheckout,
                                    checkoutButtonTier: n.props.tierPrice
                                })
                            }, n.openCheckout = function() {
                                n.state.hasPopupExperiment && s.m.set(o.b, n.props.productName)
                            }, !1 === n.props.targetBlank) return n;
                        var i = s.o.experiments.getAssignment(c.b.InstreamCheckout);
                        return n.state = {
                            hasPopupExperiment: "yes" === i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(s.d)("Subscribed", "SubTierButton");
                            return r.createElement(d.z, {
                                ariaLabel: e,
                                "data-test-selector": p,
                                disabled: !0,
                                icon: d.nb.Star
                            }, e)
                        }
                        var t = this.props.isEsportChannel ? Object(s.d)("Get the All-Access Pass", "SubTierButton") : Object(s.d)("Subscribe Now", "SubTierButton");
                        return r.createElement(d.z, i.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": p,
                            linkTo: this.state.hasPopupExperiment ? void 0 : this.props.url,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(d.bc)(this.props), {
                            targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                        }), t)
                    }, t
                }(r.Component),
                b = Object(a.compose)(Object(u.c)("SubTierButton", {
                    autoReportInteractive: !0
                }))(m);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return b
            })
        },
        "L+W6": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("a5fV"),
                s = n("W8Fi"),
                o = n("Ue10"),
                c = (n("W5/R"), function(e) {
                    var t = e.subscriptionProduct;
                    if (void 0 === t) return i.createElement("div", null);
                    var n = Object(s.e)([e.subscriptionProduct]),
                        c = Object(s.g)([e.subscriptionProduct]),
                        u = Object(s.f)([e.subscriptionProduct]),
                        l = t.price;
                    t.priceInfo && (l = Object(a.a)(Object(a.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                    var d = e.isOneTime ? Object(r.d)("{price} / One-time purchase", {
                        price: l
                    }, "SubDiscountPriceLabel") : Object(r.d)("{price} / Month", {
                        price: l
                    }, "SubDiscountPriceLabel");
                    if (s.e || s.g || s.f) {
                        var p = void 0;
                        if (e.isGift && n ? p = Object(r.d)("{price} (Save {percent})", {
                                price: Object(s.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.e)(Object(s.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && u ? p = Object(r.d)("{price} / First Month", {
                                price: Object(s.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : c && (p = Object(r.d)("{price} for the first month (Save {percent})", {
                                price: Object(s.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.e)(Object(s.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return i.createElement(o.Va, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, i.createElement(o.V, {
                            className: "sub-discount-price-label__original-price",
                            color: o.O.Alt2,
                            decoration: o.Lb.Strikethrough
                        }, d), i.createElement(o.V, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return i.createElement(o.Va, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, i.createElement(o.V, null, d))
                });
            n.d(t, !1, function() {
                return "sub-discount-price-label__discounted"
            }), n.d(t, !1, function() {
                return "sub-discount-price-label__non-discounted"
            }), n.d(t, "a", function() {
                return c
            })
        },
        OQsH: function(e, t, n) {},
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return u
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "e", function() {
                return f
            });
            var i = n("mrSG"),
                r = n("lZdE"),
                a = n("cpJf"),
                s = {
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
                o = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function u(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = b(e.token),
                            r = s[n] || n,
                            a = o.reduce(function(t, n) {
                                var i = t;
                                return i && (i = i.concat(", ")), i.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(i.__assign({
                            displayName: r,
                            srcSet: a
                        }, e))
                    }, r = 0, a = e; r < a.length; r++) {
                    n(a[r])
                }
                return t
            }
            var l = function(e) {
                var t = b(e);
                return s[t] || t
            };

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
                        for (var a = {
                                id: r.id,
                                emotes: []
                            }, s = 0, o = r.emotes; s < o.length; s++) {
                            var c = o[s];
                            c && c.id && c.token && a.emotes.push(c)
                        }
                        t.push(a)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
                    if (a && a.id && a.emotes) {
                        var s = {
                            id: a.id,
                            emotes: u(d(a.emotes))
                        };
                        c.has(parseInt(a.id, 10)) ? t.push(s) : n.push(s)
                    }
                }
                return n.concat(t)
            }
            var b = function(e) {
                    return function(e) {
                        return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                    }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
                },
                h = function(e, t, n) {
                    var i = n || a.d,
                        s = [],
                        o = [],
                        c = [],
                        u = new RegExp("^" + Object(r.a)(t), "i");
                    return e.forEach(function(e) {
                        i[e.token] ? c.push(e) : e.token.match(u) ? s.push(e) : o.push(e)
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return i[t.token].count - i[e.token].count
                    }), c.concat(s).concat(o)
                },
                f = function(e) {
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
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "e", function() {
                return l
            });
            var i = n("/7QA"),
                r = n("y5D0"),
                a = "SUB_CHECKOUT__PRODUCT",
                s = "SUB_CHECKOUT__RECIPIENT",
                o = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                c = [a, s, o];

            function u() {
                c.forEach(function(e) {
                    return i.m.remove(e)
                })
            }

            function l(e) {
                return function() {
                    return Object(r.e)(e, {
                        onClose: u
                    })
                }
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("q1tI"),
                s = n("wIs1"),
                o = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function s(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = r.referenceTracking,
                                        s = a.content,
                                        c = a.medium,
                                        u = a.content_index,
                                        l = a.email_id;
                                    o.o.tracking.trackPageview(i.__assign({
                                        content: s,
                                        medium: c,
                                        content_index: u,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, o.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return i.__extends(s, n), s.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, s.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, s.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, s.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = r.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, s
                    }(a.Component);
                    return Object(s.a)(n)
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

            function a(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function s(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.newPrice : e.price
            }

            function o(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.discountValue : 0
            }

            function c(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function u(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }

            function l(e, t) {
                return !!e && !!t && a(e) && !t.paidUpgrade && !!t.gift && t.gift.isGift
            }
            n.d(t, "g", function() {
                return i
            }), n.d(t, "e", function() {
                return r
            }), n.d(t, "f", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "h", function() {
                return l
            })
        },
        a5fV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA");

            function r(e, t) {
                return e / Math.pow(10, t)
            }

            function a(e, t) {
                return Object(i.e)(e, {
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
                return u
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("2xye"),
                s = n("I6K6"),
                o = n("RuiO"),
                c = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
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

            function u(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, c, u, l, d, p, m, b, h, f, g, k;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.n.getVideoPlayerTrackingData().vodID, n = !!t, c = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (c.withVideo = !0, c.videoID = t), u = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, r.o.apollo.client.query({
                                    query: o,
                                    variables: c
                                })];
                            case 2:
                                return u = i.sent(), [3, 4];
                            case 3:
                                return l = i.sent(), r.j.error(l, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return d = u && u.data && u.data.user || null, u && !d && r.j.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, u && n && ((m = u && u.data && u.data.video) ? p = Object(s.a)(m.broadcastType) : r.j.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: t
                                })), b = d && d.self, h = b ? !!b.subscriptionBenefit : null, f = b && b.subscriptionBenefit && b.subscriptionBenefit.purchasedWithPrime || !1, g = b ? b.canPrimeSubscribe : null, k = {
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
                                }, r.n.track(a.SpadeEventType.Subscription, k), [2]
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
                    return a
                }), n.d(t, "c", function() {
                    return s
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(i || (i = {}));
            var r, a = {
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
                s = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
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
                    end: 382
                }
            };
            n.loc.source = {
                body: "query SubsBroadcaster($currentChannelLogin: String!) {\nuser(login: $currentChannelLogin) {\nid\ndisplayName\nlogin\nsubscriptionProducts{\nid\nurl\nprice\ntier\npriceInfo {\ncurrency\nexponent\ntotal\ndescription\nprice\nisTaxInclusive\nid\ntax\n}\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\nself{\nsubscriptionBenefit {\nid\ntier\nplatform\n}\n}\n}\n}",
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
        }
    }
]);