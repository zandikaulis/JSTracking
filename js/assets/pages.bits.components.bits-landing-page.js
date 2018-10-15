(window.webpackJsonp = window.webpackJsonp || []).push([
    [166], {
        "4Wd7": function(e, t, n) {
            "use strict";
            var a, r = n("TSYQ"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("XmgI"),
                c = n("4h+t"),
                l = n("x1M1"),
                d = n("Ue10");
            n("RRSb");
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
                var u = e.display === d.X.Inline || e.display === d.X.InlineFlex || e.display === d.X.InlineBlock,
                    m = null,
                    p = r("cheermote-for-amount__cheer-amount", {
                        "cheermote-for-amount__display--table-cell": !u
                    }, {
                        "cheermote-for-amount__cheer-amount--medium": e.size === a.Medium
                    }, {
                        "cheermote-for-amount__cheer-amount--small": e.size === a.Small || e.size === a.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-amount--extremely-small": e.size === a.ExtremelySmall
                    });
                if (void 0 !== e.amount && e.showAmount) {
                    var h = e.formattedNumber ? Object(o.f)(e.amount) : e.amount;
                    m = i.createElement(d.Oa, {
                        padding: e.size === a.Small ? 0 : void 0,
                        textAlign: e.size === a.Small ? d.Kb.Center : void 0
                    }, i.createElement("strong", {
                        className: p,
                        style: {
                            color: n.color
                        }
                    }, h))
                }
                var f = r("cheermote-for-amount__cheer-image", {
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
                    g = i.createElement(l.a, {
                        className: f,
                        sources: Object(s.c)(n, e.size || a.Large, e.animated)
                    });
                return e.showImage || (g = null), i.createElement(d.Oa, {
                    className: "cheermote-for-amount",
                    alignItems: e.alignItems,
                    display: e.display
                }, i.createElement("span", null, g, m))
            };
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return u
            })
        },
        "4h+t": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            });
            var a = n("uYEN"),
                r = n("5zXJ"),
                i = {
                    Cheer: r.g,
                    Kreygasm: r.g,
                    Kappa: r.g,
                    Muxy: r.h,
                    Streamlabs: r.h,
                    SwiftRage: r.g,
                    VoHiYo: r.g
                },
                o = ["LIGHT", "DARK"],
                s = [1, 1.5, 2, 3, 4],
                c = null;

            function l() {
                if (!c) {
                    var e = [],
                        t = {};
                    Object.keys(i).forEach(function(n) {
                        var a = m(n, i[n]);
                        e.push(a), t[n.toLowerCase()] = a
                    }), c = {
                        orderedActions: e,
                        indexedActions: t
                    }
                }
                return c
            }
            var d = null;

            function u() {
                return d || (d = function(e) {
                    if (c) return c.indexedActions[e.toLowerCase()];
                    return m(e, i[e])
                }("Cheer")), d
            }

            function m(e, t) {
                var n = [a.a.Red, a.a.Blue, a.a.Green, a.a.Purple, a.a.Gray],
                    r = new Map,
                    i = [];
                if ("Cheer" === e) {
                    var o = p(e, a.a.Yellow);
                    r.set(a.a.Yellow, o), i.push(o)
                }
                return i.push.apply(i, n.map(function(t) {
                    var n = p(e, t);
                    return r.set(t, n), n
                })), {
                    prefix: e,
                    type: t,
                    tiers: i,
                    orderedTiers: i,
                    indexedTiers: r
                }
            }

            function p(e, t) {
                for (var n = [], a = {}, i = 0, c = o; i < c.length; i++)
                    for (var l = c[i], d = 0, u = s; d < u.length; d++) {
                        var m = u[d];
                        a[l] || (a[l] = {
                            animated: new Map,
                            static: new Map
                        });
                        var p = h(e, l, !0, t, m);
                        n.push(p), a[l].animated.set(m, p.url);
                        var f = h(e, l, !1, t, m);
                        n.push(f), a[l].static.set(m, f.url)
                    }
                return {
                    id: e + ";" + t,
                    canCheer: t <= r.p,
                    canShowInBitsCard: !0,
                    bits: t,
                    color: r.k[t],
                    images: n,
                    indexedImages: a
                }
            }

            function h(e, t, n, a, r) {
                var i = n ? "gif" : "png";
                return {
                    theme: t,
                    isAnimated: n,
                    dpiScale: r,
                    url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + a + "/" + r + "." + i
                }
            }
        },
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "t", function() {
                return l
            }), n.d(t, "n", function() {
                return d
            }), n.d(t, "p", function() {
                return u
            }), n.d(t, "q", function() {
                return m
            }), n.d(t, "o", function() {
                return p
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "l", function() {
                return f
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "j", function() {
                return b
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, "h", function() {
                return B
            }), n.d(t, "f", function() {
                return A
            }), n.d(t, "k", function() {
                return C
            }), n.d(t, "u", function() {
                return E
            }), n.d(t, "s", function() {
                return _
            }), n.d(t, "d", function() {
                return w
            });
            var a, r = n("uYEN"),
                i = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                o = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = o + "/cheer",
                c = o + "/actions",
                l = "bonus",
                d = 8e5,
                u = 1e5,
                m = 25e4,
                p = 500,
                h = 1e3,
                f = "cheer",
                g = r.a.Purple,
                b = "UNKNOWN",
                y = "FIRST_PARTY",
                v = "CUSTOM",
                k = "SPONSORED",
                B = "THIRD_PARTY",
                A = "DISPLAY_ONLY",
                C = ((a = {})[r.a.Gray] = "#979797", a[r.a.Purple] = "#9c3ee8", a[r.a.Green] = "#1db2a5", a[r.a.Blue] = "#0099fe", a[r.a.Red] = "#f43021", a[r.a.Yellow] = "#f3a71a", a),
                E = "bits_sponsored_cheermotes",
                _ = "bits_sponsored_cheermotes_announcement",
                w = "bits_charity_event"
        },
        "7APm": function(e, t, n) {},
        EzP7: function(e, t, n) {},
        FD0w: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                r = n("fvjX"),
                i = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                c = n("mrSG"),
                l = n("q1tI"),
                d = n("/7QA"),
                u = n("8/mp"),
                m = n("yR8l"),
                p = n("V+GM"),
                h = n("2xye"),
                f = n("4h+t"),
                g = n("GnwI"),
                b = n("4Wd7"),
                y = n("Ue10"),
                v = (n("hG/x"), function(e) {
                    return l.createElement(y.Oa, {
                        className: "bits-landing-page-text-section",
                        margin: {
                            top: 2
                        }
                    }, l.createElement(y.W, {
                        type: y.Ob.P,
                        color: y.O.Base
                    }, e.text))
                }),
                k = (n("pN/j"), function(e) {
                    var t = e.additionInfo.map(function(e, t) {
                        return l.createElement(v, {
                            key: "additionInfo:" + t,
                            text: e
                        })
                    });
                    return l.createElement(y.Wa, {
                        textAlign: y.Kb.Center,
                        className: "bits-landing-page-cheermote-description"
                    }, l.createElement(y.Oa, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(y.W, {
                        type: y.Ob.H3,
                        fontSize: y.Ba.Size4,
                        color: y.O.Link,
                        bold: !0
                    }, e.title)), t, l.createElement(y.Wa, {
                        className: "bits-landing-page-cheermote-description__cheermotes",
                        display: y.X.Flex,
                        alignContent: y.e.Center,
                        textAlign: y.Kb.Center,
                        padding: {
                            y: 2
                        },
                        margin: "auto"
                    }, e.cheermoteImaages))
                }),
                B = (n("Hin6"), function(e) {
                    var t = null;
                    return e.additionalInfo && (t = l.createElement(v, {
                        text: e.additionalInfo
                    })), l.createElement(y.Wa, {
                        className: "bits-landing-page-section-header"
                    }, l.createElement(y.Oa, {
                        className: "bits-landing-page-section-header--title",
                        margin: {
                            top: 3
                        },
                        textAlign: y.Kb.Center,
                        breakpointSmall: {
                            textAlign: y.Kb.Left
                        }
                    }, l.createElement(y.W, {
                        type: y.Ob.H3,
                        color: y.O.Link,
                        bold: !0
                    }, e.title)), t)
                }),
                A = function(e) {
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
                            return l.createElement(y.Oa, {
                                key: "partnerCheermote:" + t,
                                className: "cheermote-for-amount"
                            }, l.createElement("img", {
                                className: "cheermote-for-amount__cheer-image",
                                src: e
                            }))
                        });
                    return l.createElement("div", {
                        id: "how-to-cheer"
                    }, l.createElement(y.Wa, {
                        className: "bits-landing-page-cheermote-intro"
                    }, l.createElement(B, {
                        title: Object(d.d)("How to Cheer", "BitsLandingPage"),
                        additionalInfo: Object(d.d)('To Cheer, type "cheer" in chat followed by the number of Bits you want to use. More Bits shows more support and activates cooler animated emotes. You earn Bit badges the more you Cheer. You can also earn Top Cheerers badges on channels where it is enabled.', "BitsLandingPage")
                    }), l.createElement(B, {
                        title: Object(d.d)("Express yourself with Cheermotes", "BitsLandingPage"),
                        additionalInfo: Object(d.d)("When you Cheer, you choose whether your message will include the animated Bit gem emotes, or Cheermotes, which are animated versions of popular global emotes, or custom emotes in Partner channels.", "BitsLandingPage")
                    }), l.createElement(k, {
                        title: Object(d.d)("Twitch Cheermotes", "BitsLandingPage"),
                        additionInfo: [Object(d.d)("Here are some examples. There are many more to choose from!", "BitsLandingPage")],
                        cheermoteImaages: t
                    }), l.createElement(k, {
                        title: Object(d.d)("Custom Partner Cheermotes", "BitsLandingPage"),
                        additionInfo: [Object(d.d)("Thousands of Twitch Partners have their own Cheermotes in their channel.", "BitsLandingPage"), Object(d.d)("Here are some examples:", "BitsLandingPage")],
                        cheermoteImaages: n
                    })))
                },
                C = function(e) {
                    return l.createElement(y.Wa, {
                        className: "bits-landing-page-faq-section"
                    }, l.createElement(y.Oa, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(y.W, {
                        type: y.Ob.H3,
                        fontSize: y.Ba.Size4,
                        color: y.O.Link,
                        bold: !0
                    }, e.question)), l.createElement(v, {
                        text: e.answer
                    }), e.additionalContent)
                },
                E = (n("sRTl"), function(e) {
                    var t = [1, 100, 1e3, 5e3, 1e4].map(function(t) {
                            return l.createElement(y.Wa, {
                                display: y.X.Block,
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
                            }), l.createElement(y.Wa, {
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
                        n = l.createElement(y.Wa, {
                            className: "bits-landing-page-faq__bits-gem-examples",
                            justifyContent: y.Va.Center,
                            display: y.X.Flex,
                            padding: {
                                top: 3,
                                bottom: 2
                            },
                            margin: "auto"
                        }, t),
                        a = [{
                            question: Object(d.d)("What payment methods can I use to buy Bits?", "BitsLandingPage"),
                            answer: Object(d.d)("Bits are purchased via Amazon Payments and PayPal.", "BitsLandingPage")
                        }, {
                            question: Object(d.d)("How do I Cheer?", "BitsLandingPage"),
                            answer: Object(d.d)('Once you have purchased Bits, and you are in the chat entry window on a channel page, type "cheer" and the number of Bits you want to use. Or click the Bit gem icon at the bottom right of chat, and choose the Bit gem emote or other Cheermote from the menu displayed.', "BitsLandingPage")
                        }, {
                            question: Object(d.d)("How exactly does Cheering support streamers?", "BitsLandingPage"),
                            answer: Object(d.d)("Cheering makes Twitch chat more engaging for everyone. It shows streamers who their most enthusiastic fans are, and makes it easy to thank them with overlays and shoutouts. In addition, Twitch provides participating streamers a share of the revenue Twitch receives from Bits used to Cheer for them. The standard share for Partners and Affiliates is 1 cent per Bit used to Cheer for them. In some special cases, like esports tournaments or charity events, there may be different revenue sharing arrangements.", "BitsLandingPage")
                        }, {
                            question: Object(d.d)("What are Bit gem emotes?", "BitsLandingPage"),
                            answer: Object(d.d)("Bit gem emotes are animated gems that make your Cheer message stand out in chat. The more Bits you use, the more animated the gem.", "BitsLandingPage"),
                            additionalContent: n
                        }, {
                            question: Object(d.d)("What are Cheermotes?", "BitsLandingPage"),
                            answer: Object(d.d)("Cheermotes are animated versions of popular global emotes, or custom animated emotes in Partner channels, that use Bits. The more Bits used, the cooler the animation. You can see all the Cheermotes available in any channel by clicking the Bit icon at the bottom of chat.", "BitsLandingPage")
                        }, {
                            question: Object(d.d)("Have questions that weren't answered here?", "BitsLandingPage"),
                            answer: Object(d.d)("Visit our <x:link>Help Center article on Cheering.</x:link>", {
                                "x:link": function(e) {
                                    return l.createElement("span", {
                                        key: "helplink"
                                    }, l.createElement("a", {
                                        href: "https://help.twitch.tv/customer/portal/articles/2449458"
                                    }, e))
                                }
                            }, "BitsLandingPage")
                        }].map(function(e, t) {
                            return l.createElement(C, {
                                key: "faqsection:" + t,
                                question: e.question,
                                answer: e.answer,
                                additionalContent: e.additionalContent
                            })
                        });
                    return l.createElement(y.Wa, {
                        className: "bits-landing-page-faq"
                    }, l.createElement(B, {
                        title: Object(d.d)("FAQs", "BitsLandingPage")
                    }), l.createElement(y.Wa, {
                        className: "bits-landing-page-faq__content"
                    }, a))
                }),
                _ = n("4rCz"),
                w = (n("hcvC"), function(e) {
                    var t = l.createElement(y.Wa, {
                            margin: {
                                left: .5
                            },
                            display: y.X.Inline,
                            breakpointSmall: {
                                display: y.X.Hide
                            }
                        }, l.createElement("a", {
                            href: "#how-to-cheer"
                        }, Object(d.d)("Learn More", "BitsLandingPage"))),
                        n = null;
                    if (e.additionalInfo) {
                        var a = l.createElement(y.Wa, {
                            display: y.X.Inline
                        }, e.additionalInfo, t);
                        n = l.createElement(v, {
                            text: a
                        })
                    }
                    return l.createElement(y.Wa, {
                        className: "bits-landing-page-title"
                    }, l.createElement(y.Oa, {
                        className: "bits-landing-page-title--text",
                        margin: {
                            top: 3
                        },
                        textAlign: y.Kb.Center,
                        breakpointSmall: {
                            textAlign: y.Kb.Left
                        }
                    }, l.createElement(y.W, {
                        type: y.Ob.H1,
                        color: y.O.Link,
                        bold: !0
                    }, e.text)), n)
                }),
                O = function() {
                    return l.createElement(y.Wa, {
                        className: "bits-landing-page-intro"
                    }, l.createElement(w, {
                        text: Object(_.d)("Cheer with Bits to celebrate and show support!", "BitsLandingPage"),
                        additionalInfo: Object(_.d)("Bits are a virtual good you can buy and use to Cheer. A Cheer is a chat message that uses Bits, and includes animated emotes to amplify your voice in chat and celebrate the moment. Cheering is another way to support Partners and Affiliates, similar to subscribing.", "BitsLandingPage")
                    }))
                },
                x = n("opIq"),
                W = n("RiD7"),
                S = function(e) {
                    if (!e.isLoggedIn) return l.createElement(y.Wa, {
                        display: y.X.Inline,
                        alignItems: y.f.Center
                    }, l.createElement(y.W, {
                        color: y.O.Base,
                        type: y.Ob.Span
                    }, Object(d.d)("<x:link>Log in</x:link> to see your Bits Balance", {
                        "x:link": function(t) {
                            return l.createElement(y.z, {
                                type: y.F.Text,
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
                        display: y.X.Inline,
                        showAmount: !0,
                        showImage: !0,
                        animated: !1
                    })), l.createElement(y.Wa, {
                        alignSelf: y.g.End,
                        className: "bits-landing-page-balance-header"
                    }, l.createElement(y.Oa, {
                        alignItems: y.f.Center
                    }, l.createElement(y.W, {
                        type: y.Ob.H5,
                        color: y.O.Base
                    }, Object(d.d)("You have {amount} Bits", {
                        amount: t
                    }, "BitsLandingPage"))))
                },
                I = (n("XKsl"), function(e) {
                    return l.createElement(y.Wa, {
                        className: "bits-landing-page-right-pane",
                        padding: {
                            top: 2
                        },
                        breakpointSmall: {
                            padding: {
                                top: 3
                            }
                        }
                    }, l.createElement(y.Wa, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: y.Kb.Center,
                        className: "bits-landing-page-right-pane__buy-bits-title-container",
                        breakpointSmall: {
                            textAlign: y.Kb.Left,
                            display: y.X.Flex,
                            flexDirection: y.Z.Row
                        },
                        alignItems: y.f.Center
                    }, l.createElement(y.Oa, {
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
                    }, l.createElement(y.W, {
                        type: y.Ob.H3,
                        color: y.O.Link,
                        bold: !0
                    }, Object(d.d)("Buy Bits", "BitsLandingPage"))), l.createElement(S, {
                        bitsBalance: e.bitsBalance,
                        bitsConfig: e.bitsConfig,
                        isLoggedIn: e.isLoggedIn,
                        login: e.login
                    })), l.createElement(x.a, {
                        bitsConfig: e.bitsConfig,
                        closeAllBits: N,
                        onClose: N,
                        trackBitsCardInteraction: N,
                        location: W.b.BitsLandingPage,
                        hideWateb: !0,
                        fullsize: !0
                    }))
                }),
                N = function() {},
                T = n("U+cV"),
                L = (n("EzP7"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.bitsConfig = Object(f.a)(), t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), d.p.setPageTitle("Purchase Bits")
                    }, t.prototype.render = function() {
                        return l.createElement(y.yb, {
                            background: y.r.Base,
                            className: "bits-landing-page",
                            fullWidth: !0,
                            alignContent: y.e.Center
                        }, l.createElement(u.b, {
                            className: "bits-landing-page__scroll-area"
                        }, l.createElement(y.Wa, {
                            className: "bits-landing-page__scroll-container",
                            padding: {
                                bottom: 5
                            }
                        }, l.createElement(y.Wa, {
                            className: "bits-landing-page__gems-banner"
                        }), l.createElement(y.Wa, {
                            className: "bits-landing-page__content",
                            textAlign: y.Kb.Left,
                            padding: {
                                x: 2
                            },
                            breakpointSmall: {
                                margin: {
                                    x: "auto"
                                }
                            }
                        }, l.createElement(y.Wa, {
                            breakpointSmall: {
                                display: y.X.InlineBlock
                            }
                        }, l.createElement(y.Wa, {
                            className: "bits-landing-page__content--left-pane",
                            breakpointSmall: {
                                display: y.X.InlineBlock
                            }
                        }, l.createElement(O, null)), l.createElement(y.Wa, {
                            className: "bits-landing-page__content--right-pane"
                        }, l.createElement(I, {
                            bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                            bitsConfig: this.bitsConfig,
                            isLoggedIn: this.props.isLoggedIn,
                            login: this.props.login
                        })), l.createElement(y.Wa, {
                            className: "bits-landing-page__content--left-pane",
                            breakpointSmall: {
                                display: y.X.InlineBlock
                            }
                        }, l.createElement(A, {
                            bitsConfig: this.bitsConfig
                        }), l.createElement(E, {
                            bitsConfig: this.bitsConfig
                        })))))))
                    }, t = c.__decorate([Object(g.b)("Bits"), Object(p.a)({
                        location: h.PageviewLocation.BitsLandingPage
                    }), Object(m.a)(T, {
                        name: "data",
                        skip: function(e) {
                            return !e.isLoggedIn
                        }
                    })], t)
                }(l.Component));
            var j = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(i.a.BitsLandingPage)
                    }
                }, e)
            })(L);
            n.d(t, "BitsLandingPage", function() {
                return j
            })
        },
        Hin6: function(e, t, n) {},
        NvZ5: function(e, t, n) {},
        RRSb: function(e, t, n) {},
        RcPG: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(a || (a = {}))
        },
        RiD7: function(e, t, n) {
            "use strict";
            n.d(t, "h", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "g", function() {
                return p
            }), n.d(t, "i", function() {
                return h
            });
            var a = n("/7QA"),
                r = n("2xye");

            function i(e) {
                var t = {
                    action_name: e.actionName,
                    action_type: "click",
                    displayed_balance: e.displayedBalance,
                    emote_level: e.emoteLevel,
                    emote_type: e.emoteType,
                    bits_location: e.location || s.ChatTooltip
                };
                a.o.track(r.SpadeEventType.BitsCardInteraction, t)
            }
            var o, s = {
                    ChatTooltip: "card",
                    GetBitsButton: "get_bits_button",
                    GetBitsButtonTopNav: "topnav",
                    BitsLandingPage: "bits_landing_page"
                },
                c = {
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
                l = {
                    100: c.Buy100,
                    500: c.Buy500,
                    1000: c.Buy1000,
                    1500: c.Buy1500,
                    5000: c.Buy5000,
                    10000: c.Buy10000,
                    25000: c.Buy25000
                };

            function d(e) {
                return e && l[e] ? l[e] : (a.k.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), c.Buy100)
            }

            function u(e) {
                var t = {
                    channel: e.channel,
                    channel_id: e.channelID,
                    available: e.available,
                    host: "twitch.tv"
                };
                a.o.track(r.SpadeEventType.BitsAdsAvailability, t)
            }

            function m(e) {
                var t = {
                    distinct_id: a.p.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    campaign_id: e.campaignID,
                    adblock: e.adblock
                };
                a.o.track(r.SpadeEventType.BitsAdsImpression, t)
            }

            function p(e) {
                var t = a.o.getLastPageview(),
                    n = {
                        location: t && t.location || "",
                        ad_returned: null,
                        campaign_id: e.campaignID,
                        distinct_id: a.p.session.deviceID,
                        host: "twitch.tv",
                        request_id: e.requestID,
                        request_method: e.requestMethod
                    };
                a.o.track(r.SpadeEventType.BitsAdsRequest, n)
            }

            function h(e) {
                var t = {
                    leaderboard_size: e.leaderboardSize,
                    leaderboard_mode: e.leaderboardMode,
                    user_present_in_leaderboard: e.userPresentInLeaderboard,
                    user_id: e.userID,
                    channel_id: e.channelID
                };
                a.o.track(r.SpadeEventType.LeaderboardExpandClick, t)
            }! function(e) {
                e.ShowAdButton = "show_ad_button"
            }(o || (o = {}))
        },
        SDEh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = /\scurse\/\d/;

            function r(e) {
                return e || (e = navigator.userAgent), !!a.exec(e)
            }
        },
        "U+cV": function(e, t) {
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
        "V+GM": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
                i = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var n = a.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var i = r.referenceTracking,
                                        o = i.content,
                                        c = i.medium,
                                        l = i.content_index,
                                        d = i.email_id;
                                    s.p.tracking.trackPageview(a.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: l,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return a.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return i.createElement(t, a.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var a = "",
                                    i = r.stringify(t);
                                i.length > 0 && (a = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                            return n
                        }, o
                    }(i.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        VR5Q: function(e, t) {
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
        },
        XKsl: function(e, t, n) {},
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            });
            var a = n("5zXJ"),
                r = n("RcPG"),
                i = {
                    indexedActions: {},
                    orderedActions: []
                },
                o = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t) {
                var n = [],
                    a = e.split(/\s+/);
                return a.forEach(function(e, i) {
                    var o = c(e, t);
                    if (o) n.push(o);
                    else {
                        var s = n.length && n[n.length - 1],
                            l = "";
                        if (i < a.length - 1 && (l = " "), s && s.type === r.a.Text) s.content += e + l;
                        else {
                            var d = "";
                            i && (d = " "), n.push({
                                type: r.a.Text,
                                content: d + e + l
                            })
                        }
                    }
                }), n
            }

            function c(e, t) {
                var n = e.match(o);
                if (!n) return null;
                var a = n[1].toLowerCase(),
                    i = Number(n[2]),
                    s = t.indexedActions[a];
                if (s) {
                    var c = s.orderedTiers.find(function(e) {
                        return e.bits <= i
                    });
                    if (!c && i && (c = s.orderedTiers[0]), c) return {
                        type: r.a.Emote,
                        content: {
                            images: d(c),
                            alt: s.prefix,
                            cheerAmount: i,
                            cheerColor: c.color
                        }
                    }
                }
                return null
            }

            function l(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    r = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (r.has(e.alt)) {
                            (a = r.get(e.alt)) && (a.total += e.cheerAmount || 0, a.lastAppearance = t)
                        } else {
                            var a = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            r.set(e.alt, a)
                        }
                });
                var i = 1;
                return r.forEach(function(n) {
                    var r = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (r = e.matchedPercent)
                    });
                    var o = Math.trunc(n.total * r);
                    if (o > 0) {
                        var s = c(a.t + o, t);
                        s && e.splice(n.lastAppearance + i++, 0, s.content)
                    }
                }), e
            }

            function d(e, t, n) {
                var a, r;
                void 0 === n && (n = !0);
                var i = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (a = {}, a[t + "x"] = e.indexedImages.DARK[i].get(t), a),
                    light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[i].get(t), r)
                } : {
                    themed: !0,
                    dark: {
                        "1x": e.indexedImages.DARK[i].get(1),
                        "1.5x": e.indexedImages.DARK[i].get(1.5),
                        "2x": e.indexedImages.DARK[i].get(2),
                        "3x": e.indexedImages.DARK[i].get(3),
                        "4x": e.indexedImages.DARK[i].get(4)
                    },
                    light: {
                        "1x": e.indexedImages.LIGHT[i].get(1),
                        "1.5x": e.indexedImages.LIGHT[i].get(1.5),
                        "2x": e.indexedImages.LIGHT[i].get(2),
                        "3x": e.indexedImages.LIGHT[i].get(3),
                        "4x": e.indexedImages.LIGHT[i].get(4)
                    }
                }
            }
        },
        byRF: function(e, t, n) {},
        ebRM: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "b", function() {
                return p
            });
            var a = n("mrSG"),
                r = n("SDEh"),
                i = n("lhih"),
                o = n("5zXJ"),
                s = n("RiD7");

            function c(e) {
                return e.type !== i.a && (d(e) && null !== e.promotion && e.promotion.type === i.e)
            }

            function l(e) {
                return e.type !== i.a && (d(e) && null !== e.promotion && (e.promotion.type === i.g || e.promotion.type === i.f))
            }

            function d(e) {
                return e.type === i.b && null !== e.promotion && !!e.promotion
            }

            function u(e) {
                var t = 0,
                    n = 0,
                    a = 0,
                    r = 0;
                return e.forEach(function(e) {
                    e.cheerAmount && (e.alt !== o.t ? (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, a += e.cheerAmount) : r += e.cheerAmount)
                }), {
                    total: a,
                    bonus: r,
                    smallestCheermote: n,
                    largestCheermote: t
                }
            }

            function m(e) {
                var t = e.messageBits,
                    n = t.total,
                    r = t.largestCheermote,
                    i = t.smallestCheermote;
                if (n) {
                    var s = {
                        cheerAboveMaxBitsPerEmote: r > o.p,
                        totalAboveBalance: n > e.balance,
                        totalBelowCheerMinimum: n < e.cheerMinimumBits,
                        totalBelowEmoteMinimum: i < e.emoteMinimumBits,
                        inputLongerThanMaxBitsMessage: e.inputValue.length > o.o,
                        inputStartsWithCommand: e.inputValue.startsWith("/")
                    };
                    if (Object.keys(s).some(function(e) {
                            return s[e]
                        })) return a.__assign({
                        canSpend: !1
                    }, s)
                }
                return {
                    canSpend: !0
                }
            }

            function p(e) {
                var t = e.purchaseUrl;
                if (t) {
                    e.trackBitsCardInteraction(Object(s.d)(e.bitsAmount), {
                        location: e.location
                    });
                    var n = t.replace("{channelID}", e.channelID),
                        a = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                    return !a || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(s.a.CloseCard, {
                        location: e.location
                    })) : (a.focus(), a)
                }
            }
        },
        "hG/x": function(e, t, n) {},
        hWzS: function(e, t) {
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
                                        value: "currencyCode"
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
                    end: 158
                }
            };
            n.loc.source = {
                body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\ncurrencyCode\npromotion {\nid\ntype\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hcvC: function(e, t, n) {},
        jv9u: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("/7QA"),
                i = n("Ue10"),
                o = function() {
                    return a.createElement(i.Wa, {
                        padding: 1,
                        display: i.X.Flex,
                        alignItems: i.f.Center,
                        justifyContent: i.Va.Center,
                        flexDirection: i.Z.Column,
                        fullWidth: !0
                    }, a.createElement(i.Ya, {
                        delay: 0
                    }), a.createElement(i.Wa, {
                        padding: {
                            top: 2
                        }
                    }, a.createElement(i.W, {
                        italic: !0
                    }, Object(r.d)("Fetching Bits", "BitsCard"))))
                };
            n.d(t, "a", function() {
                return o
            })
        },
        lhih: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "e", function() {
                return i
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
                r = "BUNDLE",
                i = "first_time_purchase",
                o = "single_purchase",
                s = "prime_single_purchase",
                c = "black_friday_2017",
                l = "twitch_prime_2018"
        },
        mHh5: function(e, t, n) {},
        mZsS: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
                }(a || (a = {}))
        },
        opIq: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("aCAx"),
                o = n("YV3K"),
                s = n("kRBY"),
                c = n("mrSG"),
                l = n("q1tI"),
                d = n("fvjX"),
                u = n("/7QA"),
                m = n("cZKs"),
                p = n("yR8l"),
                h = n("geRD");
            ! function(e) {
                e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
            }(a || (a = {}));
            var f = n("mZsS"),
                g = n("RiD7"),
                b = n("Ue10"),
                y = n("VR5Q"),
                v = (n("yGGv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, i, o;
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
                                            }, e.source && e.source.postMessage(n, "*"), [2];
                                        case 2:
                                            try {
                                                if (!(r = JSON.parse(t.activityJSON))) return [2];
                                                Object(g.g)({
                                                    campaignID: r.campaign_id.toString(),
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
                                                if (!(r = JSON.parse(t.activityJSON))) return [2];
                                                Object(g.f)({
                                                    requestID: t.requestID,
                                                    adblock: !1,
                                                    campaignID: r.campaign_id.toString()
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
                                            return i = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(i.data.redeemTrueXAd.grantedBits), [3, 8];
                                        case 7:
                                            return o = s.sent(), u.k.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(a.Unknown), [3, 8];
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
                        return l.createElement(b.yb, {
                            background: b.r.Base
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
            var k, B = Object(r.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        closeModal: i.c
                    }, e)
                })(v),
                A = n("TSYQ"),
                C = n("oJmH"),
                E = n("edgk"),
                _ = n("jv9u"),
                w = n("8/mp");

            function O(e) {
                return c.__awaiter(this, void 0, void 0, function() {
                    var t, n, a, r, i;
                    return c.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (t = u.b.get("bits_truex_partner_hash", ""), !(n = u.b.get("bits_truex_api_url", "")) || !t) return u.k.warn("Truex API info missing from dynamic settings"), [2, k.Error];
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                            case 2:
                                return (a = o.sent()).ok ? [4, a.json()] : [3, 4];
                            case 3:
                                if ((r = o.sent()) && Array.isArray(r) && r.length) return [2, k.Available];
                                o.label = 4;
                            case 4:
                                return [2, k.Unavailable];
                            case 5:
                                return i = o.sent(), u.k.warn("Failed checking ad availability from TrueX, probably due to AdBlock", i), [2, k.AdBlocked];
                            case 6:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
            }(k || (k = {}));
            var x, W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onWatchAdClick = function() {
                            t.props.trackBitsCardInteraction(g.a.WatchAd), t.props.onWatchAdClick()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return this.props.disableWatchAd && (e = Object(u.d)("Try again later", "Bits--WatchAdOffer")), l.createElement(b.yb, {
                            className: "bits-buy-card__offer-row",
                            display: b.X.Flex,
                            flexShrink: 0,
                            borderBottom: !0,
                            justifyContent: b.Va.Between,
                            flexWrap: b.Aa.NoWrap,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, l.createElement(b.Wa, {
                            padding: {
                                right: 4
                            }
                        }, l.createElement("strong", null, Object(u.d)("Get {minBitsCount} or more Bits by watching short ads", {
                            minBitsCount: this.props.minPayout
                        }, "Bits--WatchAdOffer"))), l.createElement(b.Wa, {
                            flexShrink: 0,
                            display: b.X.Flex,
                            flexDirection: b.Z.Column,
                            alignItems: b.f.End
                        }, l.createElement(b.z, {
                            type: b.F.Hollow,
                            "data-a-target": "bits-watch-ad",
                            onClick: this.onWatchAdClick,
                            disabled: this.props.disableWatchAd
                        }, Object(u.d)("Watch Ad", "Bits--WatchAdOffer")), e && l.createElement(b.Wa, {
                            className: "bits-buy-card__sub-text",
                            alignSelf: b.g.Stretch,
                            textAlign: b.Kb.Center,
                            margin: {
                                top: .5
                            }
                        }, e)))
                    }, t
                }(l.Component),
                S = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
                I = function(e) {
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
                                        return [4, O(this.props.truexUserID)];
                                    case 1:
                                        return e = t.sent(), Object(g.e)({
                                            channel: this.props.channelLogin,
                                            channelID: this.props.channelID,
                                            available: e === k.Available
                                        }), e !== k.Available && e !== k.AdBlocked && this.setState({
                                            enableWatchAd: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return S.test(navigator.userAgent) ? null : l.createElement(W, c.__assign({}, this.props, {
                            disableWatchAd: !this.state.enableWatchAd
                        }))
                    }, t
                }(l.Component),
                N = n("lhih"),
                T = n("5zXJ"),
                L = n("XmgI"),
                j = n("ebRM"),
                D = n("4h+t"),
                P = n("x1M1"),
                R = (n("byRF"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleBuyClick = function(e) {
                            var n = t.props.channelID || "",
                                a = Object(j.b)({
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
                        if (this.props.offer.type === N.a) {
                            if (!this.props.channelLogin) return null;
                            var e = this.props.currentUserSHA || "";
                            return l.createElement(I, {
                                key: "wateb",
                                minPayout: this.props.offer.bits,
                                onWatchAdClick: this.props.handleWatchAdClick,
                                truexUserID: e,
                                channelID: this.props.channelID || "",
                                channelLogin: this.props.channelLogin,
                                trackBitsCardInteraction: this.props.trackBitsCardInteraction
                            })
                        }
                        var t = null;
                        Object(j.c)(this.props.offer) ? t = l.createElement(b.Wa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "first-time-promo-form"
                        }, l.createElement(b.W, {
                            type: b.Ob.Strong,
                            fontSize: b.Ba.Size6
                        }, Object(u.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(j.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === N.c ? t = l.createElement(b.Wa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "black-friday-promo-form"
                        }, l.createElement(b.W, {
                            type: b.Ob.Strong,
                            fontSize: b.Ba.Size6
                        }, Object(u.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))) : Object(j.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === N.d && (t = l.createElement(b.Wa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "prime-promo-promo-form"
                        }, l.createElement(b.W, {
                            type: b.Ob.Strong,
                            fontSize: b.Ba.Size6
                        }, Object(u.d)("Twitch Prime Bits Discount", "Bits--BuyCard"))));
                        var n = null;
                        this.props.offer.discount && (n = l.createElement("div", {
                            className: "bits-buy-card-offer-row__sub-text",
                            "data-test-selector": "discount-subtext-form"
                        }, Object(u.d)("{percentOff,number,percent} discount", {
                            percentOff: this.props.offer.discount
                        }, "Bits--BuyCard")));
                        var a = null;
                        (Object(j.c)(this.props.offer) || Object(j.e)(this.props.offer)) && (a = l.createElement("div", {
                            className: "bits-buy-card-offer-row__sub-text",
                            "data-test-selector": "one-per-account-form"
                        }, Object(u.d)("one per account", "Bits--BuyCard")));
                        var r = {
                                className: "bits-buy-card-offer-row",
                                flexShrink: 0,
                                display: b.X.Flex,
                                justifyContent: b.Va.Center,
                                flexDirection: b.Z.Column,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            },
                            i = l.createElement(l.Fragment, null, t, l.createElement(b.Wa, {
                                display: b.X.Flex,
                                justifyContent: b.Va.Between,
                                alignItems: b.f.Center
                            }, l.createElement(b.Wa, {
                                flexGrow: 1
                            }, l.createElement(b.W, {
                                type: b.Ob.H5,
                                color: b.O.Base,
                                bold: !0
                            }, Object(u.d)("{bits} Bits", {
                                bits: this.props.offer.bits
                            }, "Bits--BuyCard")), this.getAvailableTiers(this.props.offer.bits)), l.createElement(b.Wa, {
                                flexShrink: 0,
                                display: b.X.Flex,
                                flexDirection: b.Z.Column,
                                alignItems: b.f.End
                            }, l.createElement(b.z, {
                                onClick: this.handleBuyClick,
                                "data-purchase-url": this.props.offer.url,
                                "data-bits-amount": this.props.offer.bits,
                                "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                            }, this.props.offer.price), (n || a) && l.createElement(b.Wa, {
                                alignSelf: b.g.Stretch,
                                textAlign: b.Kb.Right,
                                margin: {
                                    top: .5
                                }
                            }, n, a))));
                        return l.createElement(l.Fragment, null, this.props.isLastRow ? l.createElement(b.Wa, c.__assign({}, r), i) : l.createElement(b.yb, c.__assign({}, r, {
                            borderBottom: !0
                        }), i))
                    }, t.prototype.getAvailableTiers = function(e) {
                        var t = this.props.bitsConfig && this.props.bitsConfig.indexedActions[T.l];
                        t || (t = Object(D.b)());
                        var n = t.orderedTiers.filter(function(t) {
                            return t.bits <= e
                        }).reverse();
                        return l.createElement(b.Wa, {
                            padding: {
                                top: .5
                            },
                            className: "bits-buy-card-offer-row__tier-bits-images"
                        }, n.map(function(e) {
                            return l.createElement(P.a, {
                                key: e.bits,
                                sources: Object(L.c)(e, 2, !1)
                            })
                        }))
                    }, t
                }(l.Component)),
                F = (n("mHh5"), function(e) {
                    var t = [],
                        n = [],
                        a = null;
                    return e.offers.forEach(function(r, i) {
                        var o = l.createElement(R, {
                                key: r.id,
                                offer: r,
                                isLastRow: i >= e.offers.length,
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
                            s = Object(j.d)(r),
                            c = Object(j.c)(r),
                            d = r.type === N.a;
                        c && !e.hidePromos ? t.push(o) : s && !c ? t.push(o) : d && !e.hideWateb ? a = o : d || s || n.push(o)
                    }), e.fullsize ? l.createElement(b.Wa, {
                        className: "bits-buy-card-offers__full-size",
                        flexGrow: 1,
                        flexWrap: b.Aa.NoWrap,
                        display: b.X.Flex,
                        flexDirection: b.Z.Column,
                        fullWidth: !0
                    }, a, t, n) : l.createElement(w.b, {
                        className: "bits-buy-card-offers__scroll-view"
                    }, l.createElement(b.Wa, {
                        flexGrow: 1,
                        flexWrap: b.Aa.NoWrap,
                        display: b.X.Flex,
                        flexDirection: b.Z.Column
                    }, a, t, n))
                }),
                M = function(e) {
                    var t = l.createElement(b.W, {
                        type: b.Ob.P,
                        color: b.O.Alt
                    }, Object(u.d)("Prices are shown in <x:bold>{currencyCode}</x:bold>", {
                        "x:bold": function(e) {
                            return l.createElement(b.W, {
                                type: b.Ob.Span,
                                bold: !0
                            }, e)
                        },
                        currencyCode: e.currencyCode
                    }, "Bits--BuyCard"));
                    e.pricesIncludeVAT && (t = l.createElement(b.W, {
                        "data-test-selector": "prices-include-vat-selector",
                        type: b.Ob.P,
                        color: b.O.Alt
                    }, Object(u.d)("Prices are shown in <x:bold>{currencyCode}</x:bold> and <x:bold>include VAT</x:bold>", {
                        "x:bold": function(e) {
                            return l.createElement(b.W, {
                                type: b.Ob.Span,
                                bold: !0
                            }, e)
                        },
                        currencyCode: e.currencyCode
                    }, "Bits--BuyCard")));
                    var n = null;
                    e.minBitsToCheer && e.minBitsToCheer > 1 && (n = l.createElement(b.W, {
                        "data-test-selector": "min-bits-to-cheer-selector",
                        color: b.O.Alt
                    }, Object(u.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                        displayName: e.displayName,
                        minBits: e.minBitsToCheer
                    }, "Bits--BuyCard")));
                    var a = null;
                    return void 0 !== e.bitsBalance && null !== e.bitsBalance && (a = l.createElement(b.W, {
                        "data-test-selector": "bits-balance-header-selector",
                        color: b.O.Alt
                    }, Object(u.d)("You have {totalBits} Bits", {
                        totalBits: l.createElement("strong", {
                            "data-a-target": "buy-card-bits-count"
                        }, e.bitsBalance)
                    }, "Bits--BuyCard"))), l.createElement(b.yb, {
                        className: "bits-buy-card-header",
                        padding: 1,
                        borderBottom: !0,
                        flexShrink: 0,
                        fullWidth: !0
                    }, l.createElement(b.Wa, null, e.location === g.b.ChatTooltip && l.createElement(b.W, {
                        type: b.Ob.H4,
                        color: b.O.Alt
                    }, Object(u.d)("Purchase Bits", "Bits--BuyCard")), t), e.location === g.b.ChatTooltip && l.createElement(b.Wa, {
                        margin: {
                            top: 1
                        }
                    }, a, n))
                },
                q = n("4Wd7"),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onWatchAnother = function() {
                            t.props.trackBitsCardInteraction(g.a.WatchAnotherAd), t.props.onWatchAnother && t.props.onWatchAnother()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(b.Wa, {
                            display: b.X.Flex,
                            flexGrow: 1,
                            flexDirection: b.Z.Column,
                            alignItems: b.f.Center,
                            fullWidth: !0,
                            flexWrap: b.Aa.NoWrap,
                            padding: {
                                y: 1
                            }
                        }, l.createElement(q.a, {
                            prefix: "cheer",
                            amount: this.props.amount,
                            bitsConfig: this.props.bitsConfig,
                            showAmount: !0,
                            showImage: !0
                        }), l.createElement(b.Wa, {
                            display: b.X.Flex,
                            padding: {
                                top: 1
                            },
                            flexGrow: 1,
                            flexDirection: b.Z.Column,
                            alignItems: b.f.Center,
                            flexWrap: b.Aa.NoWrap
                        }, l.createElement(b.W, {
                            type: b.Ob.H4,
                            bold: !0
                        }, Object(u.d)("You got {bitsAmount,number} Bits!", {
                            bitsAmount: this.props.amount
                        }, "Bits--WatchAdAward")), l.createElement(b.Oa, {
                            padding: {
                                top: 1
                            }
                        }, l.createElement(b.W, {
                            color: b.O.Alt2
                        }, Object(u.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                            bitsAmount: this.props.amount
                        }, "Bits--WatchAdAward"), l.createElement("br", null), Object(u.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), l.createElement(b.Wa, {
                            display: b.X.Flex,
                            padding: {
                                x: 1,
                                top: 3
                            },
                            alignSelf: b.g.Stretch,
                            justifyContent: b.Va.Between
                        }, l.createElement(b.z, {
                            onClick: this.props.onStartCheering
                        }, Object(u.d)("Start Cheering", "Bits--WatchAdAward")), l.createElement(b.z, {
                            type: b.F.Hollow,
                            "data-a-target": "bits-watch-another-ad",
                            onClick: this.onWatchAnother,
                            disabled: !this.props.hasAdAvailable
                        }, Object(u.d)("Watch Another", "Bits--WatchAdAward"))))
                    }, t
                }(l.Component),
                U = function(e) {
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
                                        return [4, O(this.props.truexUserID)];
                                    case 1:
                                        return e.sent() !== k.Available && this.setState({
                                            hasAdAvailable: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return l.createElement(z, c.__assign({}, this.props, {
                            hasAdAvailable: this.state.hasAdAvailable
                        }))
                    }, t
                }(l.Component),
                X = (n("7APm"), function(e) {
                    var t = Object(u.d)("Something's wrong!", "Bits--WatchAdError"),
                        n = Object(u.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                        r = "adserrorgeneric";
                    switch (e.type) {
                        case a.Adblock:
                            r = "adserroradblock", n = Object(u.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                            break;
                        case a.LimitReached:
                            r = "adserrorlimit", t = Object(u.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(u.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                            break;
                        case a.ExitEarly:
                            n = Object(u.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                    }
                    var i = l.createElement(b.Wa, {
                        className: "watch-ad-error__footer",
                        display: b.X.Flex,
                        padding: {
                            top: 2
                        },
                        alignSelf: b.g.Stretch,
                        justifyContent: b.Va.Center
                    }, l.createElement(b.z, {
                        onClick: e.onTryAgain
                    }, Object(u.d)("Try Again", "Bits--WatchAdError")));
                    return e.type === a.LimitReached && (i = l.createElement(b.Wa, {
                        className: "watch-ad-error__footer",
                        display: b.X.Flex,
                        padding: {
                            top: 2
                        },
                        alignSelf: b.g.Stretch,
                        justifyContent: b.Va.Between
                    }, l.createElement(b.z, {
                        onClick: e.onClose
                    }, Object(u.d)("Got It", "Bits--WatchAdError")), l.createElement(b.z, {
                        onClick: e.onTryAgain,
                        type: b.F.Hollow
                    }, Object(u.d)("Buy Bits", "Bits--WatchAdError")))), l.createElement(b.Wa, {
                        padding: {
                            x: 1
                        },
                        display: b.X.Flex,
                        flexGrow: 1,
                        flexDirection: b.Z.Column,
                        alignItems: b.f.Center,
                        fullWidth: !0,
                        flexWrap: b.Aa.NoWrap
                    }, l.createElement(b.Wa, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement("img", {
                        className: "watch-ad-error__error-image",
                        src: T.b + "/light/static/1/" + r + ".png"
                    })), l.createElement(b.Wa, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(b.W, {
                        type: b.Ob.H4,
                        bold: !0
                    }, t)), l.createElement(b.W, {
                        color: b.O.Alt2
                    }, n), i)
                }),
                H = n("GnwI"),
                G = n("zmay"),
                V = (n("NvZ5"), "storage.wateb.agreedToWatebTerms.v1"),
                K = "bits-show-wateb-terms",
                Y = "bits-agree-wateb-terms";
            ! function(e) {
                e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
            }(x || (x = {}));
            var Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            wateb: x.Inactive,
                            watebError: null,
                            bitsAwarded: 0,
                            showWatebTerms: !1,
                            agreedToWatebTerms: u.m.get(V, !1)
                        }, t.onBuyPopupClose = function(e) {
                            Object(E.a)(e, function() {
                                t.props.data && t.props.data.refetch()
                            })
                        }, t.onAdBitsAwarded = function(e) {
                            t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                                wateb: x.Awarded,
                                bitsAwarded: e
                            })
                        }, t.renderWatebTerms = function(e) {
                            return l.createElement(b.Wa, {
                                className: e,
                                textAlign: b.Kb.Left,
                                fullWidth: !0,
                                padding: {
                                    x: 2,
                                    bottom: 2,
                                    top: 5
                                },
                                "data-a-target": K
                            }, l.createElement(b.Wa, {
                                position: b.eb.Absolute,
                                padding: {
                                    top: .5,
                                    left: .5
                                },
                                attachLeft: !0,
                                attachTop: !0
                            }, l.createElement("div", {
                                key: "Bits--back-edit",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: t.onCloseWatebTerms
                            }, l.createElement(b.W, {
                                color: b.O.Link,
                                type: b.Ob.Span
                            }, l.createElement(b.nb, {
                                asset: b.ob.ChatSettingsBack,
                                height: 10,
                                width: 10
                            }), Object(u.d)("Back", "Bits--Watch-Ad-Terms")))), l.createElement(b.Wa, {
                                padding: {
                                    bottom: 2
                                }
                            }, l.createElement(b.W, {
                                type: b.Ob.Span
                            }, Object(u.d)("Before continuing to watch ads to earn Bits, we remind you that the <x:link>Bits Acceptable Use Policy</x:link> applies to your participation with this feature and any Bits you may obtain. As a reminder, you may not:", {
                                "x:link": function(e) {
                                    return l.createElement("a", {
                                        href: "https://www.twitch.tv/p/legal/bits-acceptable-use/",
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, e)
                                }
                            }, "Bits--Watch-Ad-Terms")), l.createElement(b.Wa, {
                                margin: {
                                    y: 1
                                }
                            }, l.createElement("li", null, Object(u.d)("Obtain Bits to Cheer on your own channel via this feature", "Bits--Watch-Ad-Terms")), l.createElement("li", null, Object(u.d)("Collect Bits via this feature through the use of multiple accounts, robots, or other automated means", "Bits--Watch-Ad-Terms")))), l.createElement(b.Wa, {
                                display: b.X.Flex,
                                justifyContent: b.Va.Center
                            }, l.createElement(b.z, {
                                size: b.D.Small,
                                onClick: t.onAgreeToWatebTerms,
                                "data-a-target": Y
                            }, Object(u.d)("Continue", "Bits--Watch-Ad-Terms"))))
                        }, t.onAgreeToWatebTerms = function() {
                            u.m.set(V, !0), t.setState({
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
                        var e = this.props.location === g.b.ChatTooltip,
                            t = A({
                                "bits-buy-card": !0,
                                "bits-buy-card__chat-tooltip": e
                            });
                        if (!this.props.data || this.props.data.loading) return l.createElement(_.a, null);
                        if (this.props.data.error) return l.createElement(b.Wa, {
                            className: A(t, "bits-buy-card--shorter"),
                            textAlign: b.Kb.Center,
                            "data-a-target": "bits-buy-card-error",
                            alignItems: b.f.Center,
                            justifyContent: b.Va.Center,
                            display: b.X.Flex,
                            padding: 1,
                            fullWidth: !0
                        }, l.createElement(b.W, {
                            italic: !0
                        }, Object(u.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                        if (this.state.showWatebTerms) return this.renderWatebTerms(t);
                        var n = this.renderWatebCard();
                        if (n) return l.createElement(b.Wa, {
                            textAlign: b.Kb.Center,
                            className: A(t, "bits-buy-card--shorter"),
                            fullWidth: !0
                        }, n);
                        var a = [];
                        this.props.data.currentUser && this.props.data.currentUser.bitsOffers ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                        var r = a.filter(function(e) {
                                return e.type === N.b
                            }).some(function(e) {
                                return e.includesVAT
                            }),
                            i = "",
                            o = a.filter(function(e) {
                                return e.type === N.b
                            }).pop();
                        o && o.type === N.b && (i = o.currencyCode);
                        var s = this.props.data.user ? this.props.data.user.id : "",
                            c = l.createElement(F, {
                                offers: a,
                                fullsize: this.props.fullsize,
                                hidePromos: this.props.hidePromos,
                                hideWateb: this.props.hideWateb,
                                bitsConfig: this.props.bitsConfig,
                                channelID: s,
                                channelLogin: this.props.channelLogin,
                                closeAllBits: this.props.closeAllBits,
                                currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                                handleWatchAdClick: this.handleWatchAdClick,
                                location: this.props.location,
                                onBuyPopupClose: this.onBuyPopupClose,
                                onClose: this.props.onClose,
                                trackBitsCardInteraction: this.props.trackBitsCardInteraction
                            }),
                            d = l.createElement(M, {
                                bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                                displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                                minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                                pricesIncludeVAT: r,
                                currencyCode: i,
                                location: this.props.location
                            });
                        return l.createElement(b.Wa, {
                            className: t,
                            "data-a-target": "bits-buy-card",
                            fullWidth: !0
                        }, d, c)
                    }, t.prototype.renderWatebCard = function() {
                        if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                            case x.Awarded:
                                return l.createElement(U, {
                                    bitsConfig: this.props.bitsConfig,
                                    amount: this.state.bitsAwarded,
                                    onStartCheering: this.props.onClose,
                                    onWatchAnother: this.handleWatchAdClick,
                                    truexUserID: this.props.data.currentUser.idSHA1,
                                    trackBitsCardInteraction: this.props.trackBitsCardInteraction
                                });
                            case x.Error:
                                return l.createElement(X, {
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
                    }, t = c.__decorate([Object(p.a)(G, {
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
                Q = Object(C.compose)(Object(H.b)("BitsBuyCard", {
                    autoReportInteractive: !0
                }))(Z);

            function J(e) {
                return {
                    adModalOpen: Object(o.b)(e, B),
                    isLoggedIn: Object(s.f)(e)
                }
            }

            function $(e) {
                return {
                    showWatchAdModal: function(t) {
                        return e(Object(i.d)(B, t))
                    }
                }
            }
            var ee = Object(r.connect)(J, $)(Q);
            n.d(t, !1, function() {
                return J
            }), n.d(t, !1, function() {
                return $
            }), n.d(t, "a", function() {
                return ee
            })
        },
        "pN/j": function(e, t, n) {},
        sRTl: function(e, t, n) {},
        uYEN: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(a || (a = {}))
        },
        x1M1: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("/0dD"),
                s = n("XDQu"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.defaultRes, e.sources),
                            n = (e.darkModeEnabled, a.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                            i = this.props.darkModeEnabled ? t.dark : t.light,
                            o = Object.keys(i);
                        delete n.dispatch;
                        var s = a.__assign({}, n, {
                            src: i[this.props.defaultRes || o[0]],
                            srcSet: o.map(function(e) {
                                return i[e] + " " + e
                            }).join(",")
                        });
                        return r.createElement("img", a.__assign({}, s, {
                            onLoad: this.props.onLoad
                        }))
                    }, t
                }(r.Component);
            var l = Object(i.connect)(function(e) {
                return {
                    darkModeEnabled: Object(s.a)(e) === o.a.Dark
                }
            })(c);
            n.d(t, "a", function() {
                return l
            })
        },
        yGGv: function(e, t, n) {},
        zmay: function(e, t, n) {
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
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("hWzS").definitions)), e.exports = a
        }
    }
]);