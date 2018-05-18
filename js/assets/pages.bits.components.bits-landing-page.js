webpackJsonp([108], {
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
            a.n.track(i.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            if (e && c[e]) return c[e];
            return a.j.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            a.n.track(i.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: a.o.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            a.n.track(i.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return r
        }), t.g = function(e) {
            var t = a.n.getLastPageview(),
                n = {
                    location: t && t.location || "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: a.o.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            a.n.track(i.SpadeEventType.BitsAdsRequest, n)
        }, t.i = function(e) {
            var t = {
                leaderboard_size: e.leaderboardSize,
                leaderboard_mode: e.leaderboardMode,
                user_present_in_leaderboard: e.userPresentInLeaderboard,
                user_id: e.userID,
                channel_id: e.channelID
            };
            a.n.track(i.SpadeEventType.LeaderboardExpandClick, t)
        };
        var a = n("6sO2"),
            i = n("vH/s");
        var r, o = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                GetBitsButtonTopNav: "topnav",
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
                WatchAnotherAd: "watch_another_ad",
                CheeringInRoom: "cheering_in_room"
            },
            c = {
                100: s.Buy100,
                500: s.Buy500,
                1000: s.Buy1000,
                1500: s.Buy1500,
                5000: s.Buy5000,
                10000: s.Buy10000,
                25000: s.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(r || (r = {}))
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "i", function() {
            return l
        }), n.d(t, "k", function() {
            return d
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), n.d(t, "h", function() {
            return h
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return b
        });
        var a, i = n("I89S"),
            r = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            c = o + "/actions",
            l = 8e5,
            d = 1e4,
            u = 500,
            m = 1e3,
            p = "cheer",
            h = i.a.Purple,
            f = "FIRST_PARTY",
            g = "THIRD_PARTY",
            b = ((a = {})[i.a.Gray] = "#979797", a[i.a.Purple] = "#9c3ee8", a[i.a.Green] = "#1db2a5", a[i.a.Blue] = "#0099fe", a[i.a.Red] = "#f43021", a[i.a.Yellow] = "#f3a71a", a)
    },
    "4JjK": function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
            }(a || (a = {}))
    },
    "5Rtq": function(e, t) {},
    "6Rwu": function(e, t) {},
    "9zY5": function(e, t) {},
    AHKM: function(e, t) {},
    CFVp: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (!c) {
                var e = [],
                    t = {};
                Object.keys(r).forEach(function(n) {
                    var a = d(n, r[n]);
                    e.push(a), t[n.toLowerCase()] = a
                }), c = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return c
        }, t.b = function() {
            l || (l = function(e) {
                if (c) return c.indexedActions[e.toLowerCase()];
                return d(e, r[e])
            }("Cheer"));
            return l
        };
        var a = n("I89S"),
            i = n("3iBR"),
            r = {
                Cheer: i.d,
                Kreygasm: i.d,
                Kappa: i.d,
                Muxy: i.e,
                Streamlabs: i.e,
                SwiftRage: i.d,
                VoHiYo: i.d
            },
            o = ["LIGHT", "DARK"],
            s = [1, 1.5, 2, 3, 4],
            c = null;
        var l = null;

        function d(e, t) {
            var n = [a.a.Red, a.a.Blue, a.a.Green, a.a.Purple, a.a.Gray],
                i = new Map,
                r = [];
            if ("Cheer" === e) {
                var o = u(e, a.a.Yellow);
                i.set(a.a.Yellow, o), r.push(o)
            }
            return r.push.apply(r, n.map(function(t) {
                var n = u(e, t);
                return i.set(t, n), n
            })), {
                prefix: e,
                type: t,
                tiers: r,
                orderedTiers: r,
                indexedTiers: i
            }
        }

        function u(e, t) {
            for (var n = [], a = {}, r = 0, c = o; r < c.length; r++)
                for (var l = c[r], d = 0, u = s; d < u.length; d++) {
                    var p = u[d];
                    a[l] || (a[l] = {
                        animated: new Map,
                        static: new Map
                    });
                    var h = m(e, l, !0, t, p);
                    n.push(h), a[l].animated.set(p, h.url);
                    var f = m(e, l, !1, t, p);
                    n.push(f), a[l].static.set(p, f.url)
                }
            return {
                id: e + ";" + t,
                canCheer: t <= i.k,
                bits: t,
                color: i.f[t],
                images: n,
                indexedImages: a
            }
        }

        function m(e, t, n, a, i) {
            var r = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: i,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + a + "/" + i + "." + r
            }
        }
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
            c = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            u = n("zCIC"),
            m = n("7vx8"),
            p = n("j7/Y"),
            h = n("vH/s"),
            f = n("CFVp"),
            g = n("CSlQ"),
            b = n("nrdj"),
            y = n("Odds"),
            _ = (n("AHKM"), function(e) {
                return l.createElement(y._2, {
                    className: "bits-landing-page-text-section",
                    margin: {
                        top: 2
                    }
                }, l.createElement(y.Q, {
                    type: y._49.P,
                    color: y.K.Base
                }, e.text))
            }),
            v = (n("9zY5"), function(e) {
                var t = e.additionInfo.map(function(e, t) {
                    return l.createElement(_, {
                        key: "additionInfo:" + t,
                        text: e
                    })
                });
                return l.createElement(y._8, {
                    textAlign: y._45.Center,
                    className: "bits-landing-page-cheermote-description"
                }, l.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, l.createElement(y.Q, {
                    type: y._49.H3,
                    fontSize: y.V.Size4,
                    color: y.K.Link,
                    bold: !0
                }, e.title)), t, l.createElement(y._8, {
                    className: "bits-landing-page-cheermote-description__cheermotes",
                    display: y.R.Flex,
                    alignContent: y.b.Center,
                    textAlign: y._45.Center,
                    padding: {
                        y: 2
                    },
                    margin: "auto"
                }, e.cheermoteImaages))
            }),
            k = (n("Kk2y"), function(e) {
                var t = null;
                return e.additionalInfo && (t = l.createElement(_, {
                    text: e.additionalInfo
                })), l.createElement(y._8, {
                    className: "bits-landing-page-section-header"
                }, l.createElement(y._2, {
                    className: "bits-landing-page-section-header--title",
                    margin: {
                        top: 3
                    },
                    textAlign: y._45.Center,
                    breakpointSmall: {
                        textAlign: y._45.Left
                    }
                }, l.createElement(y.Q, {
                    type: y._49.H3,
                    color: y.K.Link,
                    bold: !0
                }, e.title)), t)
            }),
            B = {
                title: Object(d.d)("Cheer with Bits to celebrate and show support!", "BitsLandingPage"),
                info: Object(d.d)("Bits are a virtual good you can buy and use to Cheer. A Cheer is a chat message that uses Bits, and includes animated emotes to amplify your voice in chat and celebrate the moment. Cheering is another way to support Partners and Affiliates, similar to subscribing.", "BitsLandingPage"),
                tutorialTitle: Object(d.d)("How to Cheer", "BitsLandingPage"),
                tutorialInfo: Object(d.d)('To Cheer, type "cheer" in chat followed by the number of Bits you want to use. More Bits shows more support and activates cooler animated emotes. You earn Bit badges the more you Cheer. You can also earn Top Cheerers badges on channels where it is enabled.', "BitsLandingPage"),
                valuePropositionTitle: Object(d.d)("Express yourself with Cheermotes", "BitsLandingPage"),
                valuePropositionInfo: Object(d.d)("When you Cheer, you choose whether your message will include the animated Bit gem emotes, or Cheermotes, which are animated versions of popular global emotes, or custom emotes in Partner channels.", "BitsLandingPage"),
                globalCheermotesTitle: Object(d.d)("Twitch Cheermotes", "BitsLandingPage"),
                globalCheermotesInfo: Object(d.d)("Here are some examples. There are many more to choose from!", "BitsLandingPage"),
                partnerCheermotesTitle: Object(d.d)("Custom Partner Cheermotes", "BitsLandingPage"),
                partnerCheermotesInfo: Object(d.d)("Thousands of Twitch Partners have their own Cheermotes in their channel.", "BitsLandingPage"),
                partnerCheermotesInfo2: Object(d.d)("Here are some examples:", "BitsLandingPage"),
                faqs: Object(d.d)("FAQs", "BitsLandingPage"),
                paymentMethodsQuestion: Object(d.d)("What payment methods can I use to buy Bits?", "BitsLandingPage"),
                paymentMethodsAnswer: Object(d.d)("Bits are purchased via Amazon Payments and PayPal.", "BitsLandingPage"),
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
                bitsPrimeOfferQuestion: Object(d.d)("What is the Bits Prime Member Discount?", "BitsLandingPage"),
                bitsPrimeOfferAnswer: Object(d.d)("This offer is available to Twitch Prime members only. Offer limited to one per customer and account. Offer is non-transferable and may not be resold. Twitch reserves the right to modify or cancel the offer at any time. Offer good while supplies last. If you violate any of these terms, the offer will be invalid.  Currency conversion fees or rates may apply.", "BitsLandingPage"),
                additionalHelpQuestion: Object(d.d)("Have questions that weren't answered here?", "BitsLandingPage"),
                additionalHelpAnswer: Object(d.d)("Visit our <x:link>Help Center article on Cheering.</x:link>", {
                    "x:link": function(e) {
                        return l.createElement("span", {
                            key: "helplink"
                        }, l.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2449458"
                        }, e))
                    }
                }, "BitsLandingPage")
            },
            C = function(e) {
                var t = ["Cheer", "Kappa", "Kreygasm", "VoHiYo"].map(function(t) {
                        return l.createElement(b.a, {
                            key: t,
                            bitsConfig: e.bitsConfig,
                            prefix: t,
                            amount: 100,
                            showAmount: !1,
                            showImage: !0
                        })
                    }),
                    n = ["https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/1.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/2.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/5.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/4.gif"].map(function(e, t) {
                        return l.createElement(y._2, {
                            key: "partnerCheermote:" + t,
                            className: "cheermote-for-amount"
                        }, l.createElement("img", {
                            className: "cheermote-for-amount__cheer-image",
                            src: e
                        }))
                    });
                return l.createElement("div", {
                    id: "how-to-cheer"
                }, l.createElement(y._8, {
                    className: "bits-landing-page-cheermote-intro"
                }, l.createElement(k, {
                    title: B.tutorialTitle,
                    additionalInfo: B.tutorialInfo
                }), l.createElement(k, {
                    title: B.valuePropositionTitle,
                    additionalInfo: B.valuePropositionInfo
                }), l.createElement(v, {
                    title: B.globalCheermotesTitle,
                    additionInfo: [B.globalCheermotesInfo],
                    cheermoteImaages: t
                }), l.createElement(v, {
                    title: B.partnerCheermotesTitle,
                    additionInfo: [B.partnerCheermotesInfo, B.partnerCheermotesInfo2],
                    cheermoteImaages: n
                })))
            },
            w = function(e) {
                return l.createElement(y._8, {
                    className: "bits-landing-page-faq-section"
                }, l.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, l.createElement(y.Q, {
                    type: y._49.H3,
                    fontSize: y.V.Size4,
                    color: y.K.Link,
                    bold: !0
                }, e.question)), l.createElement(_, {
                    text: e.answer
                }), e.additionalContent)
            },
            A = [{
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
                        return l.createElement(y._8, {
                            display: y.R.Block,
                            key: "cheer:" + t,
                            padding: {
                                x: 1
                            }
                        }, l.createElement(b.a, {
                            bitsConfig: e.bitsConfig,
                            prefix: "Cheer",
                            amount: t,
                            showImage: !0,
                            showAmount: !1,
                            animated: !0,
                            size: b.b.Large
                        }), l.createElement(y._8, {
                            padding: {
                                top: 1
                            },
                            margin: {
                                right: .5
                            }
                        }, l.createElement(b.a, {
                            bitsConfig: e.bitsConfig,
                            prefix: "Cheer",
                            amount: t,
                            showImage: !1,
                            showAmount: !0,
                            animated: !1,
                            size: b.b.Large
                        })))
                    }),
                    n = l.createElement(y._8, {
                        className: "bits-landing-page-faq__bits-gem-examples",
                        justifyContent: y._7.Center,
                        display: y.R.Flex,
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        margin: "auto"
                    }, t),
                    a = A.map(function(e, t) {
                        var a = void 0;
                        return e.question === B.bitsGemQuestion && (a = n), l.createElement(w, {
                            key: "faqsection:" + t,
                            question: e.question,
                            answer: e.answer,
                            additionalContent: a
                        })
                    });
                return l.createElement(y._8, {
                    className: "bits-landing-page-faq"
                }, l.createElement(k, {
                    title: B.faqs
                }), l.createElement(y._8, {
                    className: "bits-landing-page-faq__content"
                }, a))
            }),
            x = (n("ClSS"), function(e) {
                var t = l.createElement(y._8, {
                        margin: {
                            left: .5
                        },
                        display: y.R.Inline,
                        breakpointSmall: {
                            display: y.R.Hide
                        }
                    }, l.createElement("a", {
                        href: "#how-to-cheer"
                    }, Object(d.d)("Learn More", "BitsLandingPage"))),
                    n = null;
                if (e.additionalInfo) {
                    var a = l.createElement(y._8, {
                        display: y.R.Inline
                    }, e.additionalInfo, t);
                    n = l.createElement(_, {
                        text: a
                    })
                }
                return l.createElement(y._8, {
                    className: "bits-landing-page-title"
                }, l.createElement(y._2, {
                    className: "bits-landing-page-title--text",
                    margin: {
                        top: 3
                    },
                    textAlign: y._45.Center,
                    breakpointSmall: {
                        textAlign: y._45.Left
                    }
                }, l.createElement(y.Q, {
                    type: y._49.H1,
                    color: y.K.Link,
                    bold: !0
                }, e.text)), n)
            }),
            O = function() {
                return l.createElement(y._8, {
                    className: "bits-landing-page-intro"
                }, l.createElement(x, {
                    text: B.title,
                    additionalInfo: B.info
                }))
            },
            S = n("WVx7"),
            T = n("/LBW"),
            I = function(e) {
                if (!e.isLoggedIn) return l.createElement(y._8, {
                    display: y.R.Inline,
                    alignItems: y.c.Center
                }, l.createElement(y.Q, {
                    color: y.K.Base,
                    type: y._49.Span
                }, Object(d.d)("<x:link>Log in</x:link> to see your Bits Balance", {
                    "x:link": function(t) {
                        return l.createElement(y.v, {
                            type: y.B.Text,
                            onClick: e.login
                        }, t)
                    }
                }, "BitsLandingPage")));
                var t = "0";
                return void 0 !== e.bitsBalance && e.bitsBalance > 1 && (t = l.createElement(b.a, {
                    bitsConfig: e.bitsConfig,
                    prefix: "Cheer",
                    amount: e.bitsBalance,
                    size: b.b.ExtraSmall,
                    display: y.R.Inline,
                    showAmount: !0,
                    showImage: !0,
                    animated: !1
                })), l.createElement(y._8, {
                    alignSelf: y.d.End,
                    className: "bits-landing-page-balance-header"
                }, l.createElement(y._2, {
                    alignItems: y.c.Center
                }, l.createElement(y.Q, {
                    type: y._49.H5,
                    color: y.K.Base
                }, Object(d.d)("You have {amount} Bits", {
                    amount: t
                }, "BitsLandingPage"))))
            },
            N = (n("bPV6"), function(e) {
                return l.createElement(y._8, {
                    className: "bits-landing-page-right-pane",
                    padding: {
                        top: 2
                    },
                    breakpointSmall: {
                        padding: {
                            top: 3
                        }
                    }
                }, l.createElement(y._8, {
                    padding: {
                        bottom: 2
                    },
                    textAlign: y._45.Center,
                    className: "bits-landing-page-right-pane__buy-bits-title-container",
                    breakpointSmall: {
                        textAlign: y._45.Left,
                        display: y.R.Flex,
                        flexDirection: y.T.Row
                    },
                    alignItems: y.c.Center
                }, l.createElement(y._2, {
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
                }, l.createElement(y.Q, {
                    type: y._49.H3,
                    color: y.K.Link,
                    bold: !0
                }, B.buyBits)), l.createElement(I, {
                    bitsBalance: e.bitsBalance,
                    bitsConfig: e.bitsConfig,
                    isLoggedIn: e.isLoggedIn,
                    login: e.login
                })), l.createElement(S.a, {
                    bitsConfig: e.bitsConfig,
                    closeAllBits: j,
                    onClose: j,
                    trackBitsCardInteraction: j,
                    location: T.b.BitsLandingPage,
                    hideWateb: !0,
                    fullsize: !0
                }))
            }),
            j = function() {},
            L = n("W/WQ"),
            W = (n("5Rtq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(f.a)(), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), d.o.setPageTitle("Purchase Bits")
                }, t.prototype.render = function() {
                    return l.createElement(y._35, {
                        background: y.n.Base,
                        className: "bits-landing-page",
                        fullWidth: !0,
                        alignContent: y.b.Center
                    }, l.createElement(u.b, {
                        className: "bits-landing-page__scroll-area"
                    }, l.createElement(y._8, {
                        className: "bits-landing-page__scroll-container",
                        padding: {
                            bottom: 5
                        }
                    }, l.createElement(y._8, {
                        className: "bits-landing-page__gems-banner"
                    }), l.createElement(y._8, {
                        className: "bits-landing-page__content",
                        textAlign: y._45.Left,
                        padding: {
                            x: 2
                        },
                        breakpointSmall: {
                            margin: {
                                x: "auto"
                            }
                        }
                    }, l.createElement(y._8, {
                        breakpointSmall: {
                            display: y.R.InlineBlock
                        }
                    }, l.createElement(y._8, {
                        className: "bits-landing-page__content--left-pane",
                        breakpointSmall: {
                            display: y.R.InlineBlock
                        }
                    }, l.createElement(O, null)), l.createElement(y._8, {
                        className: "bits-landing-page__content--right-pane"
                    }, l.createElement(N, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        bitsConfig: this.bitsConfig,
                        isLoggedIn: this.props.isLoggedIn,
                        login: this.props.login
                    })), l.createElement(y._8, {
                        className: "bits-landing-page__content--left-pane",
                        breakpointSmall: {
                            display: y.R.InlineBlock
                        }
                    }, l.createElement(C, {
                        bitsConfig: this.bitsConfig
                    }), l.createElement(E, {
                        bitsConfig: this.bitsConfig
                    })))))))
                }, t = c.__decorate([Object(g.d)("Bits"), Object(p.a)({
                    location: h.PageviewLocation.BitsLandingPage
                }), Object(m.a)(L, {
                    name: "data",
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                })], t)
            }(l.Component));
        var P = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(o.f)(r.a.BitsLandingPage)
                }
            }, e)
        })(W);
        n.d(t, "BitsLandingPage", function() {
            return P
        })
    },
    I89S: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(a || (a = {}))
    },
    Kk2y: function(e, t) {},
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
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: []
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
                                    value: "discount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
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
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
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
            e || (e = navigator.userAgent);
            return !!a.exec(e)
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
                                    value: "bitsBalance"
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
        var a, i = n("RH2O"),
            r = n("V5M+"),
            o = n("Iw4B"),
            s = n("Aj/L"),
            c = n("TToO"),
            l = n("GiK3"),
            d = n("2KeS"),
            u = n("6sO2"),
            m = n("+8VM"),
            p = n("7vx8"),
            h = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(a || (a = {}));
        var f = n("4JjK"),
            g = n("/LBW"),
            b = n("Odds"),
            y = n("zzpv"),
            _ = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, o;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
                                            case f.a.Ready:
                                                return [3, 1];
                                            case f.a.RequestAd:
                                                return [3, 2];
                                            case f.a.Dimensions:
                                                return [3, 3];
                                            case f.a.OnStart:
                                                return [3, 4];
                                            case f.a.OnCredit:
                                                return [3, 5];
                                            case f.a.OnClose:
                                            case f.a.OnFinish:
                                            case f.a.LimitReached:
                                            case f.a.Adblock:
                                            case f.a.OnError:
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
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(g.g)({
                                                campaignID: i.campaign_id.toString(),
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
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(g.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: i.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(h.a)({
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
                                        return r = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return o = s.sent(), u.j.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(a.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === f.a.LimitReached ? this.props.onError(a.LimitReached) : t.type === f.a.Adblock ? this.props.onError(a.Adblock) : t.type === f.a.OnError ? this.props.onError(a.Unknown) : this.hasAwarded || this.props.onError(a.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return l.createElement(b._35, {
                        background: b.n.Base
                    }, l.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, l.createElement(m.a, null), l.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = c.__decorate([Object(p.a)(y, {
                    name: "redeemTrueXAd"
                })], t)
            }(l.Component));
        var v, k = Object(i.b)(null, function(e) {
                return Object(d.b)({
                    closeModal: r.c
                }, e)
            })(_),
            B = n("HW6M"),
            C = n("3zLD"),
            w = n("jF7o"),
            A = n("zCIC");

        function E(e) {
            return c.__awaiter(this, void 0, void 0, function() {
                var t, n, a, i, r;
                return c.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = u.b.get("bits_truex_partner_hash", ""), !(n = u.b.get("bits_truex_api_url", "")) || !t) return u.j.warn("Truex API info missing from dynamic settings"), [2, v.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (a = o.sent()).ok ? [4, a.json()] : [3, 4];
                        case 3:
                            if ((i = o.sent()) && Array.isArray(i) && i.length) return [2, v.Available];
                            o.label = 4;
                        case 4:
                            return [2, v.Unavailable];
                        case 5:
                            return r = o.sent(), u.j.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, v.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(v || (v = {}));
        var x, O = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(u.d)("Try again later", "Bits--WatchAdOffer")), l.createElement(b._35, {
                    className: "bits-buy-card__offer-row",
                    display: b.R.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: b._7.Between,
                    flexWrap: b.U.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, l.createElement(b._8, {
                    padding: {
                        right: 4
                    }
                }, l.createElement("strong", null, Object(u.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), l.createElement(b._8, {
                    flexShrink: 0,
                    display: b.R.Flex,
                    flexDirection: b.T.Column,
                    alignItems: b.c.End
                }, l.createElement(b.v, {
                    type: b.B.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(u.d)("Watch Ad", "Bits--WatchAdOffer")), t && l.createElement(b._8, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: b.d.Stretch,
                    textAlign: b._45.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            S = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, E(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(g.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === v.Available
                                    }), e !== v.Available && e !== v.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return S.test(navigator.userAgent) ? null : l.createElement(O, c.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(l.Component),
            I = n("jxGs"),
            N = n("3iBR"),
            j = n("iydZ"),
            L = n("ZJYd"),
            W = n("CFVp"),
            P = n("qe65"),
            R = (n("aysN"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            a = Object(L.b)({
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
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === I.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return l.createElement(T, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(L.c)(this.props.offer) ? t = l.createElement(b._8, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                        "data-test-selector": "first-time-promo-form"
                    }, l.createElement(b.Q, {
                        type: b._49.Strong,
                        fontSize: b.V.Size6
                    }, Object(u.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(L.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === I.c ? t = l.createElement(b._8, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                        "data-test-selector": "black-friday-promo-form"
                    }, l.createElement(b.Q, {
                        type: b._49.Strong,
                        fontSize: b.V.Size6
                    }, Object(u.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))) : Object(L.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === I.d && (t = l.createElement(b._8, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                        "data-test-selector": "prime-promo-promo-form"
                    }, l.createElement(b.Q, {
                        type: b._49.Strong,
                        fontSize: b.V.Size6
                    }, Object(u.d)("Twitch Prime Bits Discount", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = l.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text",
                        "data-test-selector": "discount-subtext-form"
                    }, Object(u.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var a = null;
                    (Object(L.c)(this.props.offer) || Object(L.e)(this.props.offer)) && (a = l.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text",
                        "data-test-selector": "one-per-account-form"
                    }, Object(u.d)("one per account", "Bits--BuyCard")));
                    var i = this.props.isLastRow ? b._35 : b._8;
                    return l.createElement(i, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: b.R.Flex,
                        justifyContent: b._7.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: b.T.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, l.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.Between,
                        alignItems: b.c.Center
                    }, l.createElement(b._8, {
                        flexGrow: 1
                    }, l.createElement(b.Q, {
                        type: b._49.H5,
                        color: b.K.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), l.createElement(b._8, {
                        flexShrink: 0,
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        alignItems: b.c.End
                    }, l.createElement(b.v, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || a) && l.createElement(b._8, {
                        alignSelf: b.d.Stretch,
                        textAlign: b._45.Right,
                        margin: {
                            top: .5
                        }
                    }, n, a))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig && this.props.bitsConfig.indexedActions[N.g];
                    t || (t = Object(W.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return l.createElement(b._8, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return l.createElement(P.a, {
                            key: e.bits,
                            sources: Object(j.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(l.Component)),
            D = (n("pzcm"), function(e) {
                var t = [],
                    n = [],
                    a = null;
                return e.offers.forEach(function(i, r) {
                    var o = l.createElement(R, {
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
                        s = Object(L.d)(i),
                        c = Object(L.c)(i),
                        d = i.type === I.a;
                    c && !e.hidePromos ? t.push(o) : s && !c ? t.push(o) : d && !e.hideWateb ? a = o : d || s || n.push(o)
                }), e.fullsize ? l.createElement(b._8, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: b.U.NoWrap,
                    display: b.R.Flex,
                    flexDirection: b.T.Column
                }, a, t, n) : l.createElement(A.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, l.createElement(b._8, {
                    flexGrow: 1,
                    flexWrap: b.U.NoWrap,
                    display: b.R.Flex,
                    flexDirection: b.T.Column
                }, a, t, n))
            }),
            F = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = l.createElement(b.Q, {
                    "data-test-selector": "prices-include-vat-selector",
                    italic: !0,
                    type: b._49.P,
                    color: b.K.Alt
                }, Object(u.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = l.createElement(b.Q, {
                    "data-test-selector": "min-bits-to-cheer-selector",
                    color: b.K.Alt
                }, Object(u.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var a = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (a = l.createElement(b.Q, {
                    "data-test-selector": "bits-balance-header-selector",
                    color: b.K.Alt
                }, Object(u.d)("You have {totalBits} Bits", {
                    totalBits: l.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), l.createElement(b._35, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, l.createElement(b._8, {
                    margin: {
                        bottom: 1
                    }
                }, l.createElement(b.Q, {
                    type: b._49.H4,
                    color: b.K.Alt
                }, Object(u.d)("Purchase Bits", "Bits--BuyCard")), t), a, n)
            },
            M = n("nrdj"),
            q = function(e) {
                return l.createElement(b._8, {
                    display: b.R.Flex,
                    flexGrow: 1,
                    flexDirection: b.T.Column,
                    alignItems: b.c.Center,
                    fullWidth: !0,
                    flexWrap: b.U.NoWrap,
                    padding: {
                        y: 1
                    }
                }, l.createElement(M.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), l.createElement(b._8, {
                    display: b.R.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: b.T.Column,
                    alignItems: b.c.Center,
                    flexWrap: b.U.NoWrap
                }, l.createElement(b.Q, {
                    type: b._49.H4,
                    bold: !0
                }, Object(u.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), l.createElement(b._2, {
                    padding: {
                        top: 1
                    }
                }, l.createElement(b.Q, {
                    color: b.K.Alt2
                }, Object(u.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), l.createElement("br", null), Object(u.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), l.createElement(b._8, {
                    display: b.R.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: b.d.Stretch,
                    justifyContent: b._7.Between
                }, l.createElement(b.v, {
                    onClick: e.onStartCheering
                }, Object(u.d)("Start Cheering", "Bits--WatchAdAward")), l.createElement(b.v, {
                    type: b.B.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(u.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, E(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== v.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(q, c.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(l.Component),
            U = (n("q8Cw"), function(e) {
                var t = Object(u.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(u.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case a.Adblock:
                        i = "adserroradblock", n = Object(u.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case a.LimitReached:
                        i = "adserrorlimit", t = Object(u.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(u.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case a.ExitEarly:
                        n = Object(u.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var r = l.createElement(b._8, {
                    className: "watch-ad-error__footer",
                    display: b.R.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: b.d.Stretch,
                    justifyContent: b._7.Center
                }, l.createElement(b.v, {
                    onClick: e.onTryAgain
                }, Object(u.d)("Try Again", "Bits--WatchAdError")));
                return e.type === a.LimitReached && (r = l.createElement(b._8, {
                    className: "watch-ad-error__footer",
                    display: b.R.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: b.d.Stretch,
                    justifyContent: b._7.Between
                }, l.createElement(b.v, {
                    onClick: e.onClose
                }, Object(u.d)("Got It", "Bits--WatchAdError")), l.createElement(b.v, {
                    onClick: e.onTryAgain,
                    type: b.B.Hollow
                }, Object(u.d)("Buy Bits", "Bits--WatchAdError")))), l.createElement(b._8, {
                    padding: {
                        x: 1
                    },
                    display: b.R.Flex,
                    flexGrow: 1,
                    flexDirection: b.T.Column,
                    alignItems: b.c.Center,
                    fullWidth: !0,
                    flexWrap: b.U.NoWrap
                }, l.createElement(b._8, {
                    padding: {
                        y: 2
                    }
                }, l.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: N.b + "/light/static/1/" + i + ".png"
                })), l.createElement(b._8, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement(b.Q, {
                    type: b._49.H4,
                    bold: !0
                }, t)), l.createElement(b.Q, {
                    color: b.K.Alt2
                }, n), r)
            }),
            Q = n("CSlQ"),
            z = n("aqNN"),
            G = (n("6Rwu"), "storage.wateb.agreedToWatebTerms.v1"),
            V = "bits-show-wateb-terms",
            K = "bits-agree-wateb-terms";
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(x || (x = {}));
        var Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: x.Inactive,
                        watebError: null,
                        bitsAwarded: 0,
                        showWatebTerms: !1,
                        agreedToWatebTerms: u.l.get(G, !1)
                    }, t.onBuyPopupClose = function(e) {
                        Object(w.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: x.Awarded,
                            bitsAwarded: e
                        })
                    }, t.renderWatebTerms = function(e, n) {
                        return l.createElement(b._35, c.__assign({
                            className: B(e),
                            display: b.R.Flex,
                            flexDirection: b.T.Column,
                            justifyContent: b._7.Center,
                            padding: {
                                bottom: 2,
                                x: 2
                            },
                            textAlign: b._45.Left,
                            "data-a-target": V
                        }, n), l.createElement(b._35, {
                            margin: {
                                top: 2,
                                bottom: 2,
                                left: 0
                            },
                            alignItems: b.c.Baseline
                        }, l.createElement("div", {
                            key: "Bits--back-edit",
                            style: {
                                cursor: "pointer"
                            },
                            onClick: t.onCloseWatebTerms
                        }, l.createElement(b.Q, {
                            color: b.K.Link,
                            type: b._49.Span
                        }, l.createElement(b._24, {
                            asset: b._25.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(u.d)("Back", "Bits--Watch-Ad-Terms")))), l.createElement(b._8, {
                            padding: {
                                bottom: 2
                            }
                        }, l.createElement(b.Q, {
                            type: b._49.Span
                        }, Object(u.d)("Before continuing to watch ads to earn Bits, we remind you that the <x:link>Bits Acceptable Use Policy</x:link> applies to your participation with this feature and any Bits you may obtain. As a reminder, you may not:", {
                            "x:link": function(e) {
                                return l.createElement("span", {
                                    key: "helplink"
                                }, l.createElement("a", {
                                    href: "https://www.twitch.tv/p/legal/bits-acceptable-use/",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, e))
                            }
                        }, "Bits--Watch-Ad-Terms")), l.createElement(b._8, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement("li", null, Object(u.d)("Obtain Bits to Cheer on your own channel via this feature", "Bits--Watch-Ad-Terms")), l.createElement("li", null, Object(u.d)("Collect Bits via this feature through the use of multiple accounts, robots, or other automated means", "Bits--Watch-Ad-Terms")))), l.createElement(b._8, {
                            display: b.R.Flex,
                            justifyContent: b._7.Center
                        }, l.createElement(b.v, {
                            size: b.z.Small,
                            onClick: t.onAgreeToWatebTerms,
                            "data-a-target": K
                        }, Object(u.d)("Continue", "Bits--Watch-Ad-Terms"))))
                    }, t.onAgreeToWatebTerms = function() {
                        u.l.set(G, !0), t.setState({
                            agreedToWatebTerms: !0,
                            showWatebTerms: !1
                        }), t.showWatchAdModal()
                    }, t.onCloseWatebTerms = function() {
                        t.setState({
                            showWatebTerms: !1
                        })
                    }, t.handleWatchAdClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                return this.state.agreedToWatebTerms ? (this.showWatchAdModal(), [2]) : (this.setState({
                                    showWatebTerms: !0
                                }), [2])
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: x.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === x.Error && (t.setState({
                            wateb: x.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return c.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: b.n.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = B({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === g.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === g.b.ChatTooltip && (n = l.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, l.createElement(b._24, {
                            asset: b._25.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return l.createElement(b._35, c.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        alignItems: b.c.Center,
                        justifyContent: b._7.Center,
                        textAlign: b._45.Center
                    }, e), l.createElement(b._10, {
                        delay: 0
                    }), l.createElement(b._8, {
                        padding: {
                            top: 2
                        }
                    }, l.createElement(b.Q, {
                        italic: !0
                    }, Object(u.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return l.createElement(b._8, c.__assign({
                        className: B(t, "bits-buy-card--shorter"),
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        alignItems: b.c.Center,
                        justifyContent: b._7.Center,
                        padding: 2,
                        textAlign: b._45.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, l.createElement(b.Q, {
                        italic: !0
                    }, Object(u.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    if (this.state.showWatebTerms) return this.renderWatebTerms(t, e);
                    var a = this.renderWatebCard();
                    if (a) return l.createElement(b._35, c.__assign({
                        className: B(t, "bits-buy-card--shorter"),
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        alignItems: b.c.Center,
                        justifyContent: b._7.Center,
                        textAlign: b._45.Center,
                        padding: 1
                    }, e), n, a);
                    var i = [];
                    this.props.data.currentUser ? i = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (i = this.props.data.bitsOffers);
                    var r = i.filter(function(e) {
                            return e.type === I.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = l.createElement(D, {
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
                        d = null;
                    return this.props.location === g.b.ChatTooltip && (d = l.createElement(F, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), l.createElement(b._35, c.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, d, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case x.Awarded:
                            return l.createElement(H, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case x.Error:
                            return l.createElement(U, {
                                type: this.state.watebError || a.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t.prototype.showWatchAdModal = function() {
                    this.props.data && this.props.data.currentUser && this.props.data.user && this.props.showWatchAdModal({
                        tuid: this.props.data.currentUser.idSHA1,
                        onBitsAwarded: this.onAdBitsAwarded,
                        onError: this.receiveAdErrorState,
                        requestRef: g.c.ShowAdButton,
                        channelID: this.props.data.user.id
                    })
                }, t = c.__decorate([Object(p.a)(z, {
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
            }(l.Component),
            X = Object(C.compose)(Object(Q.d)("BitsBuyCard", {
                autoReportInteractive: !0
            }))(Y);

        function J(e) {
            return {
                adModalOpen: Object(o.b)(e, k),
                isLoggedIn: Object(s.d)(e)
            }
        }

        function $(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(r.d)(k, t))
                }
            }
        }
        var Z = Object(i.b)(J, $)(X);
        n.d(t, !1, function() {
            return J
        }), n.d(t, !1, function() {
            return $
        }), n.d(t, "a", function() {
            return Z
        })
    },
    XdS0: function(e, t) {},
    ZJYd: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            if (e.type === r.a) return !1;
            return c(e) && null !== e.promotion && e.promotion.type === r.e
        }, t.e = function(e) {
            if (e.type === r.a) return !1;
            return c(e) && null !== e.promotion && (e.promotion.type === r.g || e.promotion.type === r.f)
        }, t.d = c, t.a = function(e) {
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
                i = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var s = {
                        cheerAboveMaxBitsPerEmote: i > o.k,
                        totalAboveBalance: n > e.balance,
                        totalBelowCheerMinimum: n < e.cheerMinimumBits,
                        totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                        inputLongerThanMaxBitsMessage: e.inputValue.length > o.j,
                        inputStartsWithCommand: e.inputValue.startsWith("/")
                    },
                    c = Object.keys(s).some(function(e) {
                        return s[e]
                    });
                if (c) return a.__assign({
                    canSpend: !1
                }, s)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (!t) return;
            e.trackBitsCardInteraction(Object(s.d)(e.bitsAmount), {
                location: e.location
            });
            var n = t.replace("{channelID}", e.channelID),
                a = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
            if (!a || Object(i.a)()) return e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(s.a.CloseCard, {
                location: e.location
            });
            return a.focus(), a
        };
        var a = n("TToO"),
            i = n("Ouuk"),
            r = n("jxGs"),
            o = n("3iBR"),
            s = n("/LBW");

        function c(e) {
            return e.type === r.b && null !== e.promotion && !!e.promotion
        }
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
                    }
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
                    }
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                    value: "cheer"
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
                                            value: "settings"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cheerMinimumBits"
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
        a.definitions = a.definitions.concat(n("OcEY").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = a
    },
    aysN: function(e, t) {},
    bPV6: function(e, t) {},
    iydZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function(e, t) {
            var n = [],
                o = t.indexedActions,
                c = new RegExp("^(" + Object.keys(o).join("|") + ")(\\d+)$", "i"),
                l = e.split(/\s+/);
            return l.forEach(function(e, t) {
                var d = c.exec(e);
                if (d) {
                    var u = d[1].toLowerCase(),
                        m = +d[2],
                        p = o[u];
                    if (p || u !== a.g || (p = Object(i.b)()), p) {
                        var h = p.orderedTiers.find(function(e) {
                            return e.bits <= m
                        });
                        !h && m && (h = p.orderedTiers[0]), h && n.push({
                            type: r.a.Emote,
                            content: {
                                images: s(h),
                                alt: p.prefix,
                                cheerAmount: m,
                                cheerColor: h.color
                            }
                        })
                    }
                } else {
                    var f = n.length && n[n.length - 1],
                        g = "";
                    if (t < l.length - 1 && (g = " "), f && f.type === r.a.Text) f.content += e + g;
                    else {
                        var b = "";
                        t && (b = " "), n.push({
                            type: r.a.Text,
                            content: b + e + g
                        })
                    }
                }
            }), n
        }, t.b = s;
        var a = n("3iBR"),
            i = n("CFVp"),
            r = n("mwvJ"),
            o = {
                indexedActions: {},
                orderedActions: []
            };

        function s(e, t, n) {
            void 0 === n && (n = !0);
            var a, i, r = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (a = {}, a[t + "x"] = e.indexedImages.DARK[r].get(t), a),
                light: (i = {}, i[t + "x"] = e.indexedImages.LIGHT[r].get(t), i)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[r].get(1),
                    "1.5x": e.indexedImages.DARK[r].get(1.5),
                    "2x": e.indexedImages.DARK[r].get(2),
                    "3x": e.indexedImages.DARK[r].get(3),
                    "4x": e.indexedImages.DARK[r].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[r].get(1),
                    "1.5x": e.indexedImages.LIGHT[r].get(1.5),
                    "2x": e.indexedImages.LIGHT[r].get(2),
                    "3x": e.indexedImages.LIGHT[r].get(3),
                    "4x": e.indexedImages.LIGHT[r].get(4)
                }
            }
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("OAwv"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    c = r.medium,
                                    l = r.content_index;
                                s.o.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: c,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return r.createElement(t, a.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                r = i.stringify(t);
                            r.length > 0 && (a = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, o
                }(r.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!e) return void a.j.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
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
            }, 500)
        };
        var a = n("6sO2")
    },
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "g", function() {
            return o
        }), n.d(t, "f", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "d", function() {
            return l
        });
        var a = "AD",
            i = "BUNDLE",
            r = "first_time_purchase",
            o = "single_purchase",
            s = "prime_single_purchase",
            c = "black_friday_2017",
            l = "twitch_prime_2018"
    },
    mwvJ: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e[e.Text = 0] = "Text", e[e.CurrentUserHighlight = 1] = "CurrentUserHighlight", e[e.Mention = 2] = "Mention", e[e.Link = 3] = "Link", e[e.Emote = 4] = "Emote", e[e.ClipLink = 5] = "ClipLink", e[e.VideoLink = 6] = "VideoLink"
            }(a || (a = {}))
    },
    nrdj: function(e, t, n) {
        "use strict";
        var a, i = n("HW6M"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("iydZ"),
            c = n("CFVp"),
            l = n("qe65"),
            d = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(a || (a = {}));
        var u = function(e) {
            var t = e.bitsConfig && e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(c.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = e.display === d.R.Inline || e.display === d.R.InlineFlex || e.display === d.R.InlineBlock,
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
            if (void 0 !== e.amount && e.showAmount) {
                var h = e.formattedNumber ? Object(o.e)(e.amount) : e.amount;
                m = r.createElement(d._2, {
                    padding: e.size === a.Small ? 0 : void 0,
                    textAlign: e.size === a.Small ? d._45.Center : void 0
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
                g = r.createElement(l.a, {
                    className: f,
                    sources: Object(s.b)(n, e.size || a.Large, e.animated)
                });
            return e.showImage || (g = null), r.createElement(d._2, {
                className: "cheermote-for-amount",
                alignItems: e.alignItems,
                display: e.display
            }, r.createElement("span", null, g, m))
        };
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return u
        })
    },
    pzcm: function(e, t) {},
    q8Cw: function(e, t) {},
    qe65: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("GiK3"),
            r = n("RH2O"),
            o = n("NXs7"),
            s = n("0nzt"),
            c = function(e) {
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
            }(i.Component);
        var l = Object(r.b)(function(e) {
            return {
                darkModeEnabled: Object(s.a)(e) === o.a.Dark
            }
        })(c);
        n.d(t, "a", function() {
            return l
        })
    },
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
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
//# sourceMappingURL=pages.bits.components.bits-landing-page-d4cfa23a8b23e5713175f2db1e032f77.js.map