webpackJsonp([63], {
    "/LBW": function(e, t, n) {
        "use strict";
        t.h = function(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || o.ChatTooltip
            };
            i.m.track(r.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            return e && l[e] ? l[e] : (i.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            i.m.track(r.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: i.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            i.m.track(r.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return a
        }), t.g = function(e) {
            var t = i.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: i.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            i.m.track(r.SpadeEventType.BitsAdsRequest, n)
        };
        var a, i = n("6sO2"),
            r = n("vH/s"),
            o = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            s = {
                BuyMain: "buy_main",
                Buy100: "buy_100",
                Buy500: "buy_500",
                Buy1000: "buy_1000",
                Buy1500: "buy_1500",
                Buy5000: "buy_5000",
                Buy10000: "buy_10000",
                Buy25000: "buy_25000",
                CloseCard: "menu_close",
                OpenCard: "menu_open",
                PreviewEmote: "emote_preview",
                WatchAd: "watch_ad",
                WatchAnotherAd: "watch_another_ad"
            },
            l = {
                100: s.Buy100,
                500: s.Buy500,
                1e3: s.Buy1000,
                1500: s.Buy1500,
                5e3: s.Buy5000,
                1e4: s.Buy10000,
                25e3: s.Buy25000
            };
        (a || (a = {})).ShowAdButton = "show_ad_button"
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "l", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "h", function() {
            return l
        }), n.d(t, "j", function() {
            return c
        }), n.d(t, "i", function() {
            return d
        }), n.d(t, "k", function() {
            return u
        }), n.d(t, "f", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), n.d(t, "c", function() {
            return h
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "e", function() {
            return g
        });
        var a, i = n("I89S"),
            r = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net/cheer",
            s = "https://d3aqoihi2n8ty8.cloudfront.net/actions",
            l = 8e5,
            c = 1e4,
            d = 500,
            u = 1e3,
            m = "cheer",
            p = i.a.Purple,
            h = "FIRST_PARTY",
            f = "THIRD_PARTY",
            g = (a = {}, a[i.a.Gray] = "#979797", a[i.a.Purple] = "#9c3ee8", a[i.a.Green] = "#1db2a5", a[i.a.Blue] = "#0099fe", a[i.a.Red] = "#f43021", a[i.a.Yellow] = "#f3a71a", a)
    },
    "4JjK": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(a || (a = {}))
    },
    "5Rtq": function(e, t) {},
    "6Rwu": function(e, t) {},
    "9zY5": function(e, t) {},
    AHKM: function(e, t) {},
    CFVp: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = [r.a.Red, r.a.Blue, r.a.Green, r.a.Purple, r.a.Gray],
                a = new Map,
                s = n.map(function(t) {
                    var n = function(e, t) {
                        for (var n = [], a = {}, r = 0, s = l; r < s.length; r++)
                            for (var d = s[r], u = 0, m = c; u < m.length; u++) {
                                var p = m[u];
                                a[d] || (a[d] = {
                                    animated: new Map,
                                    static: new Map
                                });
                                var h = i(e, d, !0, t, p);
                                n.push(h), a[d].animated.set(p, h.url);
                                var f = i(e, d, !1, t, p);
                                n.push(f), a[d].static.set(p, f.url)
                            }
                        return {
                            id: e + ";" + t,
                            bits: t,
                            color: o.e[t],
                            images: n,
                            indexedImages: a
                        }
                    }(e, t);
                    return a.set(t, n), n
                });
            return {
                prefix: e,
                type: t,
                tiers: s,
                orderedTiers: s,
                indexedTiers: a
            }
        }

        function i(e, t, n, a, i) {
            var r = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: i,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + a + "/" + i + "." + r
            }
        }
        t.a = function() {
            if (!d) {
                var e = [],
                    t = {};
                Object.keys(s).forEach(function(n) {
                    var i = a(n, s[n]);
                    e.push(i), t[n.toLowerCase()] = i
                }), d = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return d
        }, t.b = function() {
            return u || (u = function(e) {
                return d ? d.indexedActions[e] : a(e, s[e])
            }("Cheer")), u
        };
        var r = n("I89S"),
            o = n("3iBR"),
            s = {
                Cheer: o.c,
                Kreygasm: o.c,
                Kappa: o.c,
                Muxy: o.d,
                Streamlabs: o.d,
                SwiftRage: o.c,
                VoHiYo: o.c
            },
            l = ["LIGHT", "DARK"],
            c = [1, 1.5, 2, 3, 4],
            d = null,
            u = null
    },
    ClSS: function(e, t) {},
    HQb3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("RH2O"),
            i = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            c = n("U7vG"),
            d = n("6sO2"),
            u = n("zCIC"),
            m = n("7vx8"),
            p = n("j7/Y"),
            h = n("vH/s"),
            f = n("CFVp"),
            g = n("CSlQ"),
            b = n("nrdj"),
            y = n("Odds"),
            v = (n("AHKM"), function(e) {
                return c.createElement(y.P, {
                    className: "bits-landing-page-text-section",
                    margin: {
                        top: 2
                    }
                }, c.createElement(y._22, {
                    type: y._27.P,
                    color: y.F.Base
                }, e.text))
            }),
            k = (n("9zY5"), function(e) {
                var t = e.additionInfo.map(function(e, t) {
                    return c.createElement(v, {
                        key: "additionInfo:" + t,
                        text: e
                    })
                });
                return c.createElement(y.U, {
                    textAlign: y._23.Center,
                    className: "bits-landing-page-cheermote-description"
                }, c.createElement(y.P, {
                    margin: {
                        top: 3
                    }
                }, c.createElement(y._22, {
                    type: y._27.H3,
                    fontSize: y.L.Size4,
                    color: y.F.Link,
                    bold: !0
                }, e.title)), t, c.createElement(y.U, {
                    className: "bits-landing-page-cheermote-description__cheermotes",
                    display: y.H.Flex,
                    alignContent: y.b.Center,
                    textAlign: y._23.Center,
                    padding: {
                        y: 2
                    },
                    margin: "auto"
                }, e.cheermoteImaages))
            }),
            _ = (n("Kk2y"), function(e) {
                var t = null;
                return e.additionalInfo && (t = c.createElement(v, {
                    text: e.additionalInfo
                })), c.createElement(y.U, {
                    className: "bits-landing-page-section-header"
                }, c.createElement(y.P, {
                    className: "bits-landing-page-section-header--title",
                    margin: {
                        top: 3
                    },
                    textAlign: y._23.Center,
                    breakpointSmall: {
                        textAlign: y._23.Left
                    }
                }, c.createElement(y._22, {
                    type: y._27.H3,
                    color: y.F.Link,
                    bold: !0
                }, e.title)), t)
            }),
            B = {
                title: Object(d.d)("Cheer with Bits to celebrate and show support!", "BitsLandingPage"),
                info: Object(d.d)("Bits are a virtual good you can buy and use to Cheer. A Cheer is a chat message that uses Bits, and includes animated emotes to amplify your voice in chat and celebrate the moment. Cheering is another way to support Partners and Affiliates, similar to subscribing.", "BitsLandingPage"),
                tutorialTitle: Object(d.d)("How to Cheer", "BitsLandingPage"),
                tutorialInfo: Object(d.d)('To Cheer, type "cheer" in chat followed by the number of Bits you want to use. More Bits shows more support and activates cooler animated emotes. You earn Bit badges the more you Cheer.', "BitsLandingPage"),
                valuePropositionTitle: Object(d.d)("Express yourself with Cheermotes", "BitsLandingPage"),
                valuePropositionInfo: Object(d.d)("When you Cheer, you choose whether your message will include the animated Bit gem emotes, or Cheermotes, which are animated versions of popular global emotes, or custom emotes in Partner channels.", "BitsLandingPage"),
                globalCheermotesTitle: Object(d.d)("Twitch Cheermotes", "BitsLandingPage"),
                globalCheermotesInfo: Object(d.d)("Here are some examples. There are many more to choose from!", "BitsLandingPage"),
                partnerCheermotesTitle: Object(d.d)("Custom Partner Cheermotes", "BitsLandingPage"),
                partnerCheermotesInfo: Object(d.d)("Thousands of Twitch Partners have their own Cheermotes in their channel.", "BitsLandingPage"),
                partnerCheermotesInfo2: Object(d.d)("Here are some examples:", "BitsLandingPage"),
                faqs: Object(d.d)("FAQs", "BitsLandingPage"),
                paymentMethodsQuestion: Object(d.d)("What payment methods can I use to buy Bits?", "BitsLandingPage"),
                paymentMethodsAnswer: Object(d.d)("Bits are purchased via Amazon Payments.", "BitsLandingPage"),
                howToCheerQuestion: Object(d.d)("How do I Cheer?", "BitsLandingPage"),
                howToCheerAnswer: Object(d.d)('Once you have purchased Bits, and you are in the chat entry window on a channel page, type "cheer" and the number of Bits you want to use. Or click the Bit gem icon at the bottom right of chat, and choose the Bit gem emote or other Cheermote from the menu displayed.', "BitsLandingPage"),
                cheeringSupportStreamersQuestion: Object(d.d)("How exactly does Cheering support streamers?", "BitsLandingPage"),
                cheeringSupportStreamersAnswer: Object(d.d)("Cheering makes Twitch chat more engaging for everyone. It shows streamers who their most enthusiastic fans are, and makes it easy to thank them with overlays and shoutouts. In addition, Twitch provides participating streamers a share of the revenue Twitch receives from Bits used to Cheer for them. The standard share for Partners and Affiliates is 1 cent per Bit used to Cheer for them. In some special cases, like esports tournaments or charity events, there may be different revenue sharing arrangements.", "BitsLandingPage"),
                bitsGemQuestion: Object(d.d)("What are Bit gem emotes?", "BitsLandingPage"),
                bitsGemAnswer: Object(d.d)("Bit gem emotes are animated gems that make your Cheer message stand out in chat. The more Bits you use, the more animated the gem.", "BitsLandingPage"),
                whatAreCheermotesQuestion: Object(d.d)("What are Cheermotes?", "BitsLandingPage"),
                whatAreCheermotesAnswer: Object(d.d)("Cheermotes are animated versions of popular global emotes, or custom animated emotes in Partner channels, that use Bits. The more Bits used, the cooler the animation. You can see all the Cheermotes available in any channel by clicking the Bit icon at the bottom of chat.", "BitsLandingPage"),
                buyBits: Object(d.d)("Buy Bits", "BitsLandingPage"),
                paypalHeader: Object(d.d)("Now you can pay with PayPal!", "BitsLandingPage"),
                additionalHelpQuestion: Object(d.d)("Have questions that weren't answered here?", "BitsLandingPage"),
                additionalHelpAnswer: Object(d.d)("Visit our <x:link>Help Center article on Cheering.</x:link>", {
                    "x:link": function(e) {
                        return c.createElement("span", {
                            key: "helplink"
                        }, c.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2449458"
                        }, e))
                    }
                }, "BitsLandingPage")
            },
            C = function(e) {
                var t = ["Cheer", "Kappa", "Kreygasm", "VoHiYo"].map(function(t) {
                        return c.createElement(b.a, {
                            key: t,
                            bitsConfig: e.bitsConfig,
                            prefix: t,
                            amount: 100,
                            showAmount: !1,
                            showImage: !0
                        })
                    }),
                    n = ["https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/1.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/2.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/5.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/4.gif"].map(function(e, t) {
                        return c.createElement(y.P, {
                            key: "partnerCheermote:" + t,
                            className: "cheermote-for-amount"
                        }, c.createElement("img", {
                            className: "cheermote-for-amount__cheer-image",
                            src: e
                        }))
                    });
                return c.createElement("div", {
                    id: "how-to-cheer"
                }, c.createElement(y.U, {
                    className: "bits-landing-page-cheermote-intro"
                }, c.createElement(_, {
                    title: B.tutorialTitle,
                    additionalInfo: B.tutorialInfo
                }), c.createElement(_, {
                    title: B.valuePropositionTitle,
                    additionalInfo: B.valuePropositionInfo
                }), c.createElement(k, {
                    title: B.globalCheermotesTitle,
                    additionInfo: [B.globalCheermotesInfo],
                    cheermoteImaages: t
                }), c.createElement(k, {
                    title: B.partnerCheermotesTitle,
                    additionInfo: [B.partnerCheermotesInfo, B.partnerCheermotesInfo2],
                    cheermoteImaages: n
                })))
            },
            A = function(e) {
                return c.createElement(y.U, {
                    className: "bits-landing-page-faq-section"
                }, c.createElement(y.P, {
                    margin: {
                        top: 3
                    }
                }, c.createElement(y._22, {
                    type: y._27.H3,
                    fontSize: y.L.Size4,
                    color: y.F.Link,
                    bold: !0
                }, e.question)), c.createElement(v, {
                    text: e.answer
                }), e.additionalContent)
            },
            w = [{
                question: B.paymentMethodsQuestion,
                answer: B.paymentMethodsAnswer
            }, {
                question: B.howToCheerQuestion,
                answer: B.howToCheerAnswer
            }, {
                question: B.cheeringSupportStreamersQuestion,
                answer: B.cheeringSupportStreamersAnswer
            }, {
                question: B.bitsGemQuestion,
                answer: B.bitsGemAnswer
            }, {
                question: B.whatAreCheermotesQuestion,
                answer: B.whatAreCheermotesAnswer
            }, {
                question: B.additionalHelpQuestion,
                answer: B.additionalHelpAnswer
            }],
            E = (n("XdS0"), function(e) {
                var t = [1, 100, 1e3, 5e3, 1e4].map(function(t) {
                        return c.createElement(y.U, {
                            display: y.H.Block,
                            key: "cheer:" + t,
                            padding: {
                                x: 1
                            }
                        }, c.createElement(b.a, {
                            bitsConfig: e.bitsConfig,
                            prefix: "Cheer",
                            amount: t,
                            showImage: !0,
                            showAmount: !1,
                            animated: !0,
                            size: b.b.Large
                        }), c.createElement(y.U, {
                            padding: {
                                top: 1
                            },
                            margin: {
                                right: .5
                            }
                        }, c.createElement(b.a, {
                            bitsConfig: e.bitsConfig,
                            prefix: "Cheer",
                            amount: t,
                            showImage: !1,
                            showAmount: !0,
                            animated: !1,
                            size: b.b.Large
                        })))
                    }),
                    n = c.createElement(y.U, {
                        className: "bits-landing-page-faq__bits-gem-examples",
                        justifyContent: y.T.Center,
                        display: y.H.Flex,
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        margin: "auto"
                    }, t),
                    a = w.map(function(e, t) {
                        var a = void 0;
                        return e.question === B.bitsGemQuestion && (a = n), c.createElement(A, {
                            key: "faqsection:" + t,
                            question: e.question,
                            answer: e.answer,
                            additionalContent: a
                        })
                    });
                return c.createElement(y.U, {
                    className: "bits-landing-page-faq"
                }, c.createElement(_, {
                    title: B.faqs
                }), c.createElement(y.U, {
                    className: "bits-landing-page-faq__content"
                }, a))
            }),
            x = (n("ClSS"), function(e) {
                var t = c.createElement(y.U, {
                        margin: {
                            left: .5
                        },
                        display: y.H.Inline,
                        breakpointSmall: {
                            display: y.H.Hide
                        }
                    }, c.createElement("a", {
                        href: "#how-to-cheer"
                    }, Object(d.d)("Learn More", "BitsLandingPage"))),
                    n = null;
                if (e.additionalInfo) {
                    var a = c.createElement(y.U, {
                        display: y.H.Inline
                    }, e.additionalInfo, t);
                    n = c.createElement(v, {
                        text: a
                    })
                }
                return c.createElement(y.U, {
                    className: "bits-landing-page-title"
                }, c.createElement(y.P, {
                    className: "bits-landing-page-title--text",
                    margin: {
                        top: 3
                    },
                    textAlign: y._23.Center,
                    breakpointSmall: {
                        textAlign: y._23.Left
                    }
                }, c.createElement(y._22, {
                    type: y._27.H1,
                    color: y.F.Link,
                    bold: !0
                }, e.text)), n)
            }),
            S = function() {
                return c.createElement(y.U, {
                    className: "bits-landing-page-intro"
                }, c.createElement(x, {
                    text: B.title,
                    additionalInfo: B.info
                }))
            },
            O = n("WVx7"),
            I = n("/LBW"),
            N = function(e) {
                if (!e.isLoggedIn) return c.createElement(y.U, {
                    display: y.H.Inline,
                    alignItems: y.c.Center
                }, c.createElement(y._22, {
                    color: y.F.Base,
                    type: y._27.Span
                }, Object(d.d)("<x:link>Log in</x:link> to see your Bits Balance", {
                    "x:link": function(t) {
                        return c.createElement(y.u, {
                            type: y.z.Text,
                            onClick: e.login
                        }, t)
                    }
                }, "BitsLandingPage")));
                var t = "0";
                return void 0 !== e.bitsBalance && e.bitsBalance > 1 && (t = c.createElement(b.a, {
                    bitsConfig: e.bitsConfig,
                    prefix: "Cheer",
                    amount: e.bitsBalance,
                    size: b.b.ExtraSmall,
                    display: y.H.Inline,
                    showAmount: !0,
                    showImage: !0,
                    animated: !1
                })), c.createElement(y.U, {
                    alignSelf: y.d.End,
                    className: "bits-landing-page-balance-header"
                }, c.createElement(y.P, {
                    alignItems: y.c.Center
                }, c.createElement(y._22, {
                    type: y._27.H5,
                    color: y.F.Base
                }, Object(d.d)("You have {amount} Bits", {
                    amount: t
                }, "BitsLandingPage"))))
            },
            L = (n("bPV6"), function(e) {
                return c.createElement(y.U, {
                    className: "bits-landing-page-right-pane",
                    padding: {
                        top: 2
                    },
                    breakpointSmall: {
                        padding: {
                            top: 3
                        }
                    }
                }, c.createElement(y.U, {
                    textAlign: y._23.Center,
                    className: "bits-landing-page-right-pane__buy-bits-title-container",
                    breakpointSmall: {
                        textAlign: y._23.Left,
                        display: y.H.Flex,
                        flexDirection: y.J.Row
                    },
                    alignItems: y.c.Center
                }, c.createElement(y.P, {
                    className: "bits-landing-page-right-pane__buy-bits-title",
                    flexGrow: 1,
                    padding: {
                        bottom: 1
                    },
                    breakpointSmall: {
                        padding: {
                            bottom: 0
                        }
                    }
                }, c.createElement(y._22, {
                    type: y._27.H3,
                    color: y.F.Link,
                    bold: !0
                }, B.buyBits)), c.createElement(N, {
                    bitsBalance: e.bitsBalance,
                    bitsConfig: e.bitsConfig,
                    isLoggedIn: e.isLoggedIn,
                    login: e.login
                })), c.createElement(y.U, {
                    className: "bits-landing-page-right-pane__paypal-promo-banner-container",
                    margin: {
                        y: 1
                    },
                    padding: {
                        y: 1,
                        x: 2
                    }
                }, c.createElement(y.U, {
                    display: y.H.Flex,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    alignItems: y.c.Center
                }, c.createElement(y._22, null, B.paypalHeader)), c.createElement(y.U, {
                    alignItems: y.c.Center,
                    display: y.H.Flex
                }, c.createElement("img", {
                    src: "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/pp_m_white.png",
                    className: "bits-landing-page-right-pane__paypal-promo-banner-container--logo"
                }))), c.createElement(O.a, {
                    bitsConfig: e.bitsConfig,
                    closeAllBits: T,
                    onClose: T,
                    trackBitsCardInteraction: T,
                    location: I.b.BitsLandingPage,
                    hideWateb: !0,
                    fullsize: !0
                }))
            }),
            T = function() {},
            j = n("W/WQ"),
            P = (n("5Rtq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(f.a)(), t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), d.n.setPageTitle("Purchase Bits")
                }, t.prototype.render = function() {
                    return c.createElement(y._18, {
                        background: y.m.Base,
                        className: "bits-landing-page",
                        fullWidth: !0,
                        alignContent: y.b.Center
                    }, c.createElement(u.b, {
                        className: "bits-landing-page__scroll-area"
                    }, c.createElement(y.U, {
                        className: "bits-landing-page__scroll-container",
                        padding: {
                            bottom: 5
                        }
                    }, c.createElement(y.U, {
                        className: "bits-landing-page__gems-banner"
                    }), c.createElement(y.U, {
                        className: "bits-landing-page__content",
                        textAlign: y._23.Left,
                        padding: {
                            x: 2
                        },
                        breakpointSmall: {
                            margin: {
                                x: "auto"
                            }
                        }
                    }, c.createElement(y.U, {
                        breakpointSmall: {
                            display: y.H.InlineBlock
                        }
                    }, c.createElement(y.U, {
                        className: "bits-landing-page__content--left-pane",
                        breakpointSmall: {
                            display: y.H.InlineBlock
                        }
                    }, c.createElement(S, null)), c.createElement(y.U, {
                        className: "bits-landing-page__content--right-pane"
                    }, c.createElement(L, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        bitsConfig: this.bitsConfig,
                        isLoggedIn: this.props.isLoggedIn,
                        login: this.props.login
                    })), c.createElement(y.U, {
                        className: "bits-landing-page__content--left-pane",
                        breakpointSmall: {
                            display: y.H.InlineBlock
                        }
                    }, c.createElement(C, {
                        bitsConfig: this.bitsConfig
                    }), c.createElement(E, {
                        bitsConfig: this.bitsConfig
                    })))))))
                }, t = l.__decorate([Object(g.c)("Bits"), Object(p.a)({
                    location: h.PageviewLocation.BitsLandingPage
                }), Object(m.a)(j, {
                    name: "data",
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                })], t)
            }(c.Component)),
            U = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    login: function() {
                        return Object(o.f)(r.a.BitsLandingPage)
                    }
                }, e)
            })(P);
        n.d(t, "BitsLandingPage", function() {
            return U
        })
    },
    I89S: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
        }(a || (a = {}))
    },
    Kk2y: function(e, t) {},
    OLKT: function(e, t) {},
    OcEY: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bitsOffersFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BitsOffer"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "type"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "InlineFragment",
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BitsBundleOffer"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "price"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "discount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "url"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 145
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\npromotion {\nid\ntype\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        };
        var a = /\scurse\/\d/
    },
    PPK2: function(e, t) {},
    "W/WQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BitsLandingPage"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 56
            }
        };
        n.loc.source = {
            body: "query BitsLandingPage {\ncurrentUser {\nid\nbitsBalance\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WVx7: function(e, t, n) {
        "use strict";

        function a(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, a, i, r;
                return u.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = h.b.get("bits_truex_partner_hash", ""), !(n = h.b.get("bits_truex_api_url", "")) || !t) return h.i.warn("Truex API info missing from dynamic settings"), [2, y.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (a = o.sent()).ok ? [4, a.json()] : [3, 4];
                        case 3:
                            if ((i = o.sent()) && Array.isArray(i) && i.length) return [2, y.Available];
                            o.label = 4;
                        case 4:
                            return [2, y.Unavailable];
                        case 5:
                            return r = o.sent(), h.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, y.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function i(e) {
            return {
                adModalOpen: Object(c.b)(e, A),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function r(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(l.d)(A, t))
                }
            }
        }
        var o, s = n("RH2O"),
            l = n("V5M+"),
            c = n("Iw4B"),
            d = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            h = n("6sO2"),
            f = n("+8VM"),
            g = n("7vx8"),
            b = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(o || (o = {}));
        var y, v = n("4JjK"),
            k = n("/LBW"),
            _ = n("Odds"),
            B = n("zzpv"),
            C = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, i, r;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
                                            case v.a.Ready:
                                                return [3, 1];
                                            case v.a.RequestAd:
                                                return [3, 2];
                                            case v.a.Dimensions:
                                                return [3, 3];
                                            case v.a.OnStart:
                                                return [3, 4];
                                            case v.a.OnCredit:
                                                return [3, 5];
                                            case v.a.OnClose:
                                            case v.a.OnFinish:
                                            case v.a.LimitReached:
                                            case v.a.Adblock:
                                            case v.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return n = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(n, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(k.g)({
                                                campaignID: a.campaign_id.toString(),
                                                requestID: t.requestID,
                                                requestMethod: this.props.requestRef
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 3:
                                        return t.height && t.width && this.setState({
                                            customDimensions: {
                                                height: t.height,
                                                width: t.width
                                            }
                                        }), [3, 10];
                                    case 4:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(k.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(b.a)({
                                            args: t.engagement.signature_argument_string,
                                            signature: t.engagement.signature,
                                            trueXAd: {
                                                creativeID: t.engagement.ad.creative_id,
                                                campaignID: t.engagement.ad.campaign_id,
                                                name: t.engagement.ad.name,
                                                currencyAmount: t.engagement.ad.currency_amount
                                            },
                                            targetID: this.props.channelID
                                        }))];
                                    case 6:
                                        return i = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(i.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return r = s.sent(), h.i.warn("Error while redeeming bits for truex ad", r), this.props.onError && this.props.onError(o.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === v.a.LimitReached ? this.props.onError(o.LimitReached) : t.type === v.a.Adblock ? this.props.onError(o.Adblock) : t.type === v.a.OnError ? this.props.onError(o.Unknown) : this.hasAwarded || this.props.onError(o.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(_._18, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(f.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(g.a)(B, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            A = Object(s.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(C),
            w = n("HW6M"),
            E = n("jF7o"),
            x = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(y || (y = {}));
        var S, O = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(h.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._18, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.T.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(h.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.U, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(h.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._23.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            I = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(k.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === y.Available
                                    }), e !== y.Available && e !== y.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return I.test(navigator.userAgent) ? null : m.createElement(O, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            L = n("jxGs"),
            T = n("3iBR"),
            j = n("iydZ"),
            P = n("ZJYd"),
            U = n("CFVp"),
            F = n("qe65"),
            H = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            a = Object(P.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        a && (t.props.onBuyPopupClose(a), t.props.onClose())
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === L.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(N, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(P.c)(this.props.offer) ? t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._22, {
                        type: _._27.Strong,
                        fontSize: _.L.Size6
                    }, Object(h.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(P.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === L.c && (t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._22, {
                        type: _._27.Strong,
                        fontSize: _.L.Size6
                    }, Object(h.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var a = null;
                    (Object(P.c)(this.props.offer) || Object(P.e)(this.props.offer)) && (a = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("one per account", "Bits--BuyCard")));
                    var i = this.props.isLastRow ? _._18 : _.U;
                    return m.createElement(i, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.H.Flex,
                        justifyContent: _.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.U, {
                        display: _.H.Flex,
                        justifyContent: _.T.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.U, {
                        flexGrow: 1
                    }, m.createElement(_._22, {
                        type: _._27.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.U, {
                        flexShrink: 0,
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || a) && m.createElement(_.U, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._23.Right,
                        margin: {
                            top: .5
                        }
                    }, n, a))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[T.f];
                    t || (t = Object(U.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(F.a, {
                            key: e.bits,
                            sources: Object(j.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            D = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    a = null;
                return e.offers.forEach(function(i, r) {
                    var o = m.createElement(H, {
                            key: i.id,
                            offer: i,
                            isLastRow: r + 1 < e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction
                        }),
                        s = Object(P.d)(i),
                        l = Object(P.c)(i),
                        c = i.type === L.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? a = o : c || s || n.push(o)
                }), e.fullsize ? m.createElement(_.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, a, t, n) : m.createElement(x.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.U, {
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, a, t, n))
            }),
            W = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._22, {
                    italic: !0,
                    type: _._27.P,
                    color: _.F.Alt
                }, Object(h.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(_._22, {
                    color: _.F.Alt
                }, Object(h.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var a = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (a = m.createElement(_._22, {
                    color: _.F.Alt
                }, Object(h.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._18, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.U, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._22, {
                    type: _._27.H4,
                    color: _.F.Alt
                }, Object(h.d)("Purchase Bits", "Bits--BuyCard")), t), a, n)
            },
            R = n("nrdj"),
            q = function(e) {
                return m.createElement(_.U, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(R.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._22, {
                    type: _._27.H4,
                    bold: !0
                }, Object(h.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._22, {
                    color: _.F.Alt2
                }, Object(h.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(h.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(h.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(h.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        return u.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== y.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(q, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            G = (n("q8Cw"), function(e) {
                var t = Object(h.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(h.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    a = "adserrorgeneric";
                switch (e.type) {
                    case o.Adblock:
                        a = "adserroradblock", n = Object(h.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case o.LimitReached:
                        a = "adserrorlimit", t = Object(h.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(h.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case o.ExitEarly:
                        n = Object(h.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var i = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(h.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (i = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(h.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(h.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.U, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: T.b + "/light/static/1/" + a + ".png"
                })), m.createElement(_.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._22, {
                    type: _._27.H4,
                    bold: !0
                }, t)), m.createElement(_._22, {
                    color: _.F.Alt2
                }, n), i)
            }),
            V = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(S || (S = {}));
        var z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: S.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(E.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: S.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: k.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: S.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === S.Error && (t.setState({
                            wateb: S.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return u.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: _.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = w({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === k.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === k.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._9, {
                            asset: _._10.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._18, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._23.Center
                    }, e), m.createElement(_.Y, {
                        delay: 0
                    }), m.createElement(_.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._22, {
                        italic: !0
                    }, Object(h.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.U, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        padding: 2,
                        textAlign: _._23.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(_._22, {
                        italic: !0
                    }, Object(h.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var a = this.renderWatebCard();
                    if (a) return m.createElement(_._18, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._23.Center,
                        padding: 1
                    }, e), n, a);
                    var i = [];
                    this.props.data.currentUser ? i = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (i = this.props.data.bitsOffers);
                    var r = i.filter(function(e) {
                            return e.type === L.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = m.createElement(D, {
                            offers: i,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: o,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        l = null;
                    return this.props.location === k.b.ChatTooltip && (l = m.createElement(W, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(_._18, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case S.Awarded:
                            return m.createElement(M, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case S.Error:
                            return m.createElement(G, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(g.a)(V, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(m.Component),
            K = Object(s.a)(i, r)(z);
        n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return K
        })
    },
    XdS0: function(e, t) {},
    ZJYd: function(e, t, n) {
        "use strict";

        function a(e) {
            return e.type === o.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== o.a && a(e) && null !== e.promotion && e.promotion.type === o.d
        }, t.e = function(e) {
            return e.type !== o.a && a(e) && null !== e.promotion && e.promotion.type === o.e
        }, t.d = a, t.a = function(e) {
            var t = 0,
                n = 0,
                a = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, a += e.cheerAmount)
            }), {
                total: a,
                smallestCheermote: n,
                largestCheermote: t
            }
        }, t.f = function(e) {
            var t = e.messageBits,
                n = t.total,
                a = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var o = {
                    cheerAboveMaxBitsPerEmote: a > s.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > s.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(o).some(function(e) {
                        return o[e]
                    })) return i.__assign({
                    canSpend: !1
                }, o)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(l.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    a = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !a || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(l.a.CloseCard, {
                    location: e.location
                })) : (a.focus(), a)
            }
        };
        var i = n("TToO"),
            r = n("Ouuk"),
            o = n("jxGs"),
            s = n("3iBR"),
            l = n("/LBW")
    },
    aqNN: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Bits_BuyCard_Offers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelLogin"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "channelLogin"
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "settings"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cheerMinimumBits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 440
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        a.definitions = a.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !i[t] && (i[t] = !0, !0)
            })
        }(n("OcEY").definitions)), e.exports = a
    },
    bPV6: function(e, t) {},
    iydZ: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = !0);
            var a = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[a].get(t), i),
                light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[a].get(t), r)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[a].get(1),
                    "1.5x": e.indexedImages.DARK[a].get(1.5),
                    "2x": e.indexedImages.DARK[a].get(2),
                    "3x": e.indexedImages.DARK[a].get(3),
                    "4x": e.indexedImages.DARK[a].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[a].get(1),
                    "1.5x": e.indexedImages.LIGHT[a].get(1.5),
                    "2x": e.indexedImages.LIGHT[a].get(2),
                    "3x": e.indexedImages.LIGHT[a].get(3),
                    "4x": e.indexedImages.LIGHT[a].get(4)
                }
            };
            var i, r
        }
        n.d(t, "a", function() {
            return s
        }), t.c = function(e, t) {
            var n = [],
                s = t.indexedActions,
                l = new RegExp("^(" + Object.keys(s).join("|") + ")(\\d+)$", "i"),
                c = e.split(/\s+/);
            return c.forEach(function(e, t) {
                var d = l.exec(e);
                if (d) {
                    var u = d[1].toLowerCase(),
                        m = +d[2],
                        p = s[u];
                    if (p || u !== i.f || (p = Object(r.b)()), p) {
                        var h = p.orderedTiers.find(function(e) {
                            return e.bits <= m
                        });
                        !h && m && (h = p.orderedTiers[0]), h && n.push({
                            type: o.a.Emote,
                            content: {
                                images: a(h),
                                alt: p.prefix,
                                cheerAmount: m,
                                cheerColor: h.color
                            }
                        })
                    }
                } else {
                    var f = n.length && n[n.length - 1],
                        g = "";
                    if (t < c.length - 1 && (g = " "), f && f.type === o.a.Text) f.content += e + g;
                    else {
                        var b = "";
                        t && (b = " "), n.push({
                            type: o.a.Text,
                            content: b + e + g
                        })
                    }
                }
            }), n
        }, t.b = a;
        var i = n("3iBR"),
            r = n("CFVp"),
            o = n("mwvJ"),
            s = {
                indexedActions: {},
                orderedActions: []
            }
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var i = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var a = !1,
                    i = !1;
                try {
                    a = e.closed, i = !!e.success
                } catch (e) {}
                if (a || i) {
                    t(i);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var a = n("6sO2")
    },
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        });
        var a = "AD",
            i = "BUNDLE",
            r = "first_time_purchase",
            o = "single_purchase",
            s = "black_friday_2017"
    },
    mwvJ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Text = 0] = "Text", e[e.Mention = 1] = "Mention", e[e.Link = 2] = "Link", e[e.Emote = 3] = "Emote", e[e.ClipLink = 4] = "ClipLink", e[e.VideoLink = 5] = "VideoLink"
        }(a || (a = {}))
    },
    nrdj: function(e, t, n) {
        "use strict";
        var a, i = n("HW6M"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("iydZ"),
            l = n("CFVp"),
            c = n("qe65"),
            d = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(a || (a = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(l.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = e.display === d.H.Inline || e.display === d.H.InlineFlex || e.display === d.H.InlineBlock,
                m = null,
                p = i("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === a.Medium
                }, {
                    "cheermote-for-amount__cheer-amount--small": e.size === a.Small || e.size === a.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--extremely-small": e.size === a.ExtremelySmall
                });
            if (e.amount && e.showAmount) {
                var h = e.formattedNumber ? Object(o.e)(e.amount) : e.amount;
                m = r.createElement(d.P, {
                    padding: e.size === a.Small ? 0 : void 0,
                    textAlign: e.size === a.Small ? d._23.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, h))
            }
            var f = i("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer--inline": u
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === a.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === a.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-image--extremely-small": e.size === a.ExtremelySmall
                }),
                g = r.createElement(c.a, {
                    className: f,
                    sources: Object(s.b)(n, e.size || a.Large, e.animated)
                });
            return e.showImage || (g = null), r.createElement(d.U, {
                className: "cheermote-for-amount",
                display: e.display
            }, g, m)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return a
        })
    },
    oIkB: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.id)
            }))
        }, t.a = function(e) {
            return {
                variables: {
                    input: e
                }
            }
        }, t.d = function(e, t, n, r) {
            void 0 === t && (t = {});
            try {
                var o = i.n.apollo.client.readQuery({
                    query: e,
                    variables: t
                });
                if (r && r(o)) return;
                var s = a(o, function(e) {
                    return e
                }, function(e) {
                    return n(e)
                });
                i.n.apollo.client.writeQuery({
                    query: e,
                    variables: t,
                    data: s
                })
            } catch (e) {
                i.i.warn("Failed writing updated query to Apollo", e)
            }
        }, t.c = function(e) {
            try {
                var t = e.id,
                    n = e.fragment,
                    r = e.mutator,
                    o = i.n.apollo.client.readFragment({
                        id: t,
                        fragment: n
                    }),
                    s = a(o, function(e) {
                        return e
                    }, function(e) {
                        return r(e)
                    });
                i.n.apollo.client.writeFragment({
                    fragment: n,
                    id: t,
                    data: s
                })
            } catch (e) {
                i.i.warn("Failed writing updated query to Apollo", e)
            }
        };
        var a = n("LIeg"),
            i = (n.n(a), n("6sO2"))
    },
    q8Cw: function(e, t) {},
    qe65: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("U7vG"),
            r = n("RH2O"),
            o = n("NXs7"),
            s = n("0nzt"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = (e.defaultRes, e.sources),
                        n = (e.darkModeEnabled, a.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                        r = this.props.darkModeEnabled ? t.dark : t.light,
                        o = Object.keys(r);
                    delete n.dispatch;
                    var s = a.__assign({}, n, {
                        src: r[this.props.defaultRes || o[0]],
                        srcSet: o.map(function(e) {
                            return r[e] + " " + e
                        }).join(",")
                    });
                    return i.createElement("img", a.__assign({}, s, {
                        onLoad: this.props.onLoad
                    }))
                }, t
            }(i.Component),
            c = Object(r.a)(function(e) {
                return {
                    darkModeEnabled: Object(s.a)(e) === o.a.Dark
                }
            })(l);
        n.d(t, "a", function() {
            return c
        })
    },
    sgUC: function(e, t) {},
    x583: function(e, t) {},
    zzpv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "WatchAdModal_Redeeem"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "RedeemTrueXAdInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "redeemTrueXAd"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 105
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\nredeemTrueXAd(input:$input) {\ngrantedBits\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.bits.components.bits-landing-page-cab4a29597e53447ec8215d4d3e5202b.js.map