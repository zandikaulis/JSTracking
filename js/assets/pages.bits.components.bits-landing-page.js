webpackJsonp([66], {
    1995: function(e, t) {},
    1996: function(e, t) {},
    1997: function(e, t) {},
    1998: function(e, t) {},
    1999: function(e, t) {},
    2e3: function(e, t) {},
    2001: function(e, t) {
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
                end: 69
            }
        };
        n.loc.source = {
            body: "query BitsLandingPage {\n  currentUser {\n    id\n    bitsBalance\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2002: function(e, t) {},
    2086: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }

        function i(e) {
            return Object(o.bindActionCreators)({
                login: function() {
                    return Object(l.f)(s.a.BitsLandingPage)
                }
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(6),
            o = n(9),
            s = n(48),
            l = n(32),
            c = n(17),
            d = n(0),
            u = n(1),
            m = n(2),
            p = n(28),
            h = n(7),
            f = n(810),
            g = n(12),
            b = n(375),
            y = n(5),
            v = n(814),
            k = n(3),
            _ = (n(1995), function(e) {
                return u.createElement(k.P, {
                    className: "bits-landing-page-text-section",
                    margin: {
                        top: 2
                    }
                }, u.createElement(k._21, {
                    type: k._26.P,
                    color: k.F.Base
                }, e.text))
            }),
            B = (n(1996), function(e) {
                var t = e.additionInfo.map(function(e, t) {
                    return u.createElement(_, {
                        key: "additionInfo:" + t,
                        text: e
                    })
                });
                return u.createElement(k.U, {
                    textAlign: k._22.Center,
                    className: "bits-landing-page-cheermote-description"
                }, u.createElement(k.P, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(k._21, {
                    type: k._26.H3,
                    fontSize: k.L.Size4,
                    color: k.F.Link,
                    bold: !0
                }, e.title)), t, u.createElement(k.U, {
                    className: "bits-landing-page-cheermote-description__cheermotes",
                    display: k.H.Flex,
                    alignContent: k.b.Center,
                    textAlign: k._22.Center,
                    padding: {
                        y: 2
                    },
                    margin: "auto"
                }, e.cheermoteImaages))
            }),
            C = (n(1997), function(e) {
                var t = null;
                return e.additionalInfo && (t = u.createElement(_, {
                    text: e.additionalInfo
                })), u.createElement(k.U, {
                    className: "bits-landing-page-section-header"
                }, u.createElement(k.P, {
                    className: "bits-landing-page-section-header--title",
                    margin: {
                        top: 3
                    },
                    textAlign: k._22.Center,
                    breakpointSmall: {
                        textAlign: k._22.Left
                    }
                }, u.createElement(k._21, {
                    type: k._26.H3,
                    color: k.F.Link,
                    bold: !0
                }, e.title)), t)
            }),
            A = {
                title: Object(m.d)("Cheer with Bits to celebrate and show support!", "BitsLandingPage"),
                info: Object(m.d)("Bits are a virtual good you can buy and use to Cheer. A Cheer is a chat message that uses Bits, and includes animated emotes to amplify your voice in chat and celebrate the moment. Cheering is another way to support Partners and Affiliates, similar to subscribing.", "BitsLandingPage"),
                tutorialTitle: Object(m.d)("How to Cheer", "BitsLandingPage"),
                tutorialInfo: Object(m.d)('To Cheer, type "cheer" in chat followed by the number of Bits you want to use. More Bits shows more support and activates cooler animated emotes. You earn Bit badges the more you Cheer.', "BitsLandingPage"),
                valuePropositionTitle: Object(m.d)("Express yourself with Cheermotes", "BitsLandingPage"),
                valuePropositionInfo: Object(m.d)("When you Cheer, you choose whether your message will include the animated Bit gem emotes, or Cheermotes, which are animated versions of popular global emotes, or custom emotes in Partner channels.", "BitsLandingPage"),
                globalCheermotesTitle: Object(m.d)("Twitch Cheermotes", "BitsLandingPage"),
                globalCheermotesInfo: Object(m.d)("Here are some examples. There are many more to choose from!", "BitsLandingPage"),
                partnerCheermotesTitle: Object(m.d)("Custom Partner Cheermotes", "BitsLandingPage"),
                partnerCheermotesInfo: Object(m.d)("Thousands of Twitch Partners have their own Cheermotes in their channel.", "BitsLandingPage"),
                partnerCheermotesInfo2: Object(m.d)("Here are some examples:", "BitsLandingPage"),
                faqs: Object(m.d)("FAQs", "BitsLandingPage"),
                paymentMethodsQuestion: Object(m.d)("What payment methods can I use to buy Bits?", "BitsLandingPage"),
                paymentMethodsAnswer: Object(m.d)("Bits are purchased via Amazon Payments.", "BitsLandingPage"),
                howToCheerQuestion: Object(m.d)("How do I Cheer?", "BitsLandingPage"),
                howToCheerAnswer: Object(m.d)('Once you have purchased Bits, and you are in the chat entry window on a channel page, type "cheer" and the number of Bits you want to use. Or click the Bit gem icon at the bottom right of chat, and choose the Bit gem emote or other Cheermote from the menu displayed.', "BitsLandingPage"),
                cheeringSupportStreamersQuestion: Object(m.d)("How exactly does Cheering support streamers?", "BitsLandingPage"),
                cheeringSupportStreamersAnswer: Object(m.d)("Cheering makes Twitch chat more engaging for everyone. It shows streamers who their most enthusiastic fans are, and makes it easy to thank them with overlays and shoutouts. In addition, Twitch provides participating streamers a share of the revenue Twitch receives from Bits used to Cheer for them. The standard share for Partners and Affiliates is 1 cent per Bit used to Cheer for them. In some special cases, like esports tournaments or charity events, there may be different revenue sharing arrangements.", "BitsLandingPage"),
                bitsGemQuestion: Object(m.d)("What are Bit gem emotes?", "BitsLandingPage"),
                bitsGemAnswer: Object(m.d)("Bit gem emotes are animated gems that make your Cheer message stand out in chat. The more Bits you use, the more animated the gem.", "BitsLandingPage"),
                whatAreCheermotesQuestion: Object(m.d)("What are Cheermotes?", "BitsLandingPage"),
                whatAreCheermotesAnswer: Object(m.d)("Cheermotes are animated versions of popular global emotes, or custom animated emotes in Partner channels, that use Bits. The more Bits used, the cooler the animation. You can see all the Cheermotes available in any channel by clicking the Bit icon at the bottom of chat.", "BitsLandingPage"),
                buyBits: Object(m.d)("Buy Bits", "BitsLandingPage"),
                paypalHeader: Object(m.d)("Now you can pay with PayPal!", "BitsLandingPage"),
                additionalHelpQuestion: Object(m.d)("Have questions that weren't answered here?", "BitsLandingPage"),
                additionalHelpAnswer: Object(m.d)("Visit our <x:link>Help Center article on Cheering.</x:link>", {
                    "x:link": function(e) {
                        return u.createElement("span", {
                            key: "helplink"
                        }, u.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2449458"
                        }, e))
                    }
                }, "BitsLandingPage")
            },
            E = function(e) {
                var t = ["Cheer", "Kappa", "Kreygasm", "VoHiYo"].map(function(t) {
                        return u.createElement(v.a, {
                            key: t,
                            bitsConfig: e.bitsConfig,
                            prefix: t,
                            amount: 100,
                            display: v.c.ImageOnly
                        })
                    }),
                    n = ["https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/1.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/2.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/5.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/4.gif"].map(function(e, t) {
                        return u.createElement(k.P, {
                            key: "partnerCheermote:" + t,
                            className: "cheermote-for-amount"
                        }, u.createElement("img", {
                            className: "cheermote-for-amount__cheer-image",
                            src: e
                        }))
                    });
                return u.createElement("div", {
                    id: "how-to-cheer"
                }, u.createElement(k.U, {
                    className: "bits-landing-page-cheermote-intro"
                }, u.createElement(C, {
                    title: A.tutorialTitle,
                    additionalInfo: A.tutorialInfo
                }), u.createElement(C, {
                    title: A.valuePropositionTitle,
                    additionalInfo: A.valuePropositionInfo
                }), u.createElement(B, {
                    title: A.globalCheermotesTitle,
                    additionInfo: [A.globalCheermotesInfo],
                    cheermoteImaages: t
                }), u.createElement(B, {
                    title: A.partnerCheermotesTitle,
                    additionInfo: [A.partnerCheermotesInfo, A.partnerCheermotesInfo2],
                    cheermoteImaages: n
                })))
            },
            w = function(e) {
                return u.createElement(k.U, {
                    className: "bits-landing-page-faq-section"
                }, u.createElement(k.P, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(k._21, {
                    type: k._26.H3,
                    fontSize: k.L.Size4,
                    color: k.F.Link,
                    bold: !0
                }, e.question)), u.createElement(_, {
                    text: e.answer
                }), e.additionalContent)
            },
            x = [{
                question: A.paymentMethodsQuestion,
                answer: A.paymentMethodsAnswer
            }, {
                question: A.howToCheerQuestion,
                answer: A.howToCheerAnswer
            }, {
                question: A.cheeringSupportStreamersQuestion,
                answer: A.cheeringSupportStreamersAnswer
            }, {
                question: A.bitsGemQuestion,
                answer: A.bitsGemAnswer
            }, {
                question: A.whatAreCheermotesQuestion,
                answer: A.whatAreCheermotesAnswer
            }, {
                question: A.additionalHelpQuestion,
                answer: A.additionalHelpAnswer
            }],
            S = (n(1998), function(e) {
                var t = [1, 100, 1e3, 5e3, 1e4].map(function(t) {
                        return u.createElement(k.U, {
                            display: k.H.Block,
                            key: "cheer:" + t,
                            padding: {
                                x: 1
                            }
                        }, u.createElement(v.a, {
                            bitsConfig: e.bitsConfig,
                            prefix: "Cheer",
                            amount: t,
                            display: v.c.ImageOnly,
                            animated: !0,
                            size: v.b.Normal
                        }), u.createElement(k.U, {
                            padding: {
                                top: 1
                            },
                            margin: {
                                right: .5
                            }
                        }, u.createElement(v.a, {
                            bitsConfig: e.bitsConfig,
                            prefix: "Cheer",
                            amount: t,
                            display: v.c.TextOnly,
                            animated: !1,
                            size: v.b.Normal
                        })))
                    }),
                    n = u.createElement(k.U, {
                        className: "bits-landing-page-faq__bits-gem-examples",
                        justifyContent: k.T.Center,
                        display: k.H.Flex,
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        margin: "auto"
                    }, t),
                    a = x.map(function(e, t) {
                        var a = void 0;
                        return e.question === A.bitsGemQuestion && (a = n), u.createElement(w, {
                            key: "faqsection:" + t,
                            question: e.question,
                            answer: e.answer,
                            additionalContent: a
                        })
                    });
                return u.createElement(k.U, {
                    className: "bits-landing-page-faq"
                }, u.createElement(C, {
                    title: A.faqs
                }), u.createElement(k.U, {
                    className: "bits-landing-page-faq__content"
                }, a))
            }),
            O = (n(1999), function(e) {
                var t = u.createElement(k.U, {
                        margin: {
                            left: .5
                        },
                        display: k.H.Inline,
                        breakpointSmall: {
                            display: k.H.Hide
                        }
                    }, u.createElement("a", {
                        href: "#how-to-cheer"
                    }, Object(m.d)("Learn More", "BitsLandingPage"))),
                    n = null;
                if (e.additionalInfo) {
                    var a = u.createElement(k.U, {
                        display: k.H.Inline
                    }, e.additionalInfo, t);
                    n = u.createElement(_, {
                        text: a
                    })
                }
                return u.createElement(k.U, {
                    className: "bits-landing-page-title"
                }, u.createElement(k.P, {
                    className: "bits-landing-page-title--text",
                    margin: {
                        top: 3
                    },
                    textAlign: k._22.Center,
                    breakpointSmall: {
                        textAlign: k._22.Left
                    }
                }, u.createElement(k._21, {
                    type: k._26.H1,
                    color: k.F.Link,
                    bold: !0
                }, e.text)), n)
            }),
            I = function() {
                return u.createElement(k.U, {
                    className: "bits-landing-page-intro"
                }, u.createElement(O, {
                    text: A.title,
                    additionalInfo: A.info
                }))
            },
            N = n(838),
            T = n(805),
            L = function(e) {
                if (!e.isLoggedIn) return u.createElement(k.U, {
                    display: k.H.Inline,
                    alignItems: k.c.Center
                }, u.createElement(k._21, {
                    color: k.F.Base,
                    type: k._26.Span
                }, Object(m.d)("<x:link>Log in</x:link> to see your Bits Balance", {
                    "x:link": function(t) {
                        return u.createElement(k.u, {
                            type: k.z.Text,
                            onClick: e.login
                        }, t)
                    }
                }, "BitsLandingPage")));
                var t = "0";
                return void 0 !== e.bitsBalance && e.bitsBalance > 1 && (t = u.createElement(v.a, {
                    bitsConfig: e.bitsConfig,
                    prefix: "Cheer",
                    amount: e.bitsBalance,
                    size: v.b.ExtraSmall,
                    display: v.c.Inline,
                    animated: !1
                })), u.createElement(k.U, {
                    alignSelf: k.d.End,
                    className: "bits-landing-page-balance-header"
                }, u.createElement(k.P, {
                    alignItems: k.c.Center
                }, u.createElement(k._21, {
                    type: k._26.H5,
                    color: k.F.Base
                }, Object(m.d)("You have {amount} Bits", {
                    amount: t
                }, "BitsLandingPage"))))
            },
            j = (n(2e3), function(e) {
                return u.createElement(k.U, {
                    className: "bits-landing-page-right-pane",
                    padding: {
                        top: 2
                    },
                    breakpointSmall: {
                        padding: {
                            top: 3
                        }
                    }
                }, u.createElement(k.U, {
                    textAlign: k._22.Center,
                    className: "bits-landing-page-right-pane__buy-bits-title-container",
                    breakpointSmall: {
                        textAlign: k._22.Left,
                        display: k.H.Flex,
                        flexDirection: k.J.Row
                    },
                    alignItems: k.c.Center
                }, u.createElement(k.P, {
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
                }, u.createElement(k._21, {
                    type: k._26.H3,
                    color: k.F.Link,
                    bold: !0
                }, A.buyBits)), u.createElement(L, {
                    bitsBalance: e.bitsBalance,
                    bitsConfig: e.bitsConfig,
                    isLoggedIn: e.isLoggedIn,
                    login: e.login
                })), u.createElement(k.U, {
                    className: "bits-landing-page-right-pane__paypal-promo-banner-container",
                    margin: {
                        y: 1
                    },
                    padding: {
                        y: 1,
                        x: 2
                    }
                }, u.createElement(k.U, {
                    display: k.H.Flex,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    alignItems: k.c.Center
                }, u.createElement(k._21, null, A.paypalHeader)), u.createElement(k.U, {
                    alignItems: k.c.Center,
                    display: k.H.Flex
                }, u.createElement("img", {
                    src: "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/pp_m_white.png",
                    className: "bits-landing-page-right-pane__paypal-promo-banner-container--logo"
                }))), u.createElement(N.a, {
                    bitsConfig: e.bitsConfig,
                    closeAllBits: P,
                    onClose: P,
                    trackBitsCardInteraction: P,
                    location: T.b.BitsLandingPage,
                    hideWateb: !0,
                    fullsize: !0
                }))
            }),
            P = function() {},
            U = n(2001),
            F = (n(2002), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(b.a)(), t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), m.n.setPageTitle("Purchase Bits")
                }, t.prototype.render = function() {
                    return u.createElement(k._17, {
                        background: k.m.Base,
                        className: "bits-landing-page",
                        fullWidth: !0,
                        alignContent: k.b.Center
                    }, u.createElement(p.b, {
                        className: "bits-landing-page__scroll-area"
                    }, u.createElement(k.U, {
                        className: "bits-landing-page__scroll-container",
                        padding: {
                            bottom: 5
                        }
                    }, u.createElement(k.U, {
                        className: "bits-landing-page__gems-banner"
                    }), u.createElement(k.U, {
                        className: "bits-landing-page__content",
                        textAlign: k._22.Left,
                        padding: {
                            x: 2
                        },
                        breakpointSmall: {
                            margin: {
                                x: "auto"
                            }
                        }
                    }, u.createElement(k.U, {
                        breakpointSmall: {
                            display: k.H.InlineBlock
                        }
                    }, u.createElement(k.U, {
                        className: "bits-landing-page__content--left-pane",
                        breakpointSmall: {
                            display: k.H.InlineBlock
                        }
                    }, u.createElement(I, null)), u.createElement(k.U, {
                        className: "bits-landing-page__content--right-pane"
                    }, u.createElement(j, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        bitsConfig: this.bitsConfig,
                        isLoggedIn: this.props.isLoggedIn,
                        login: this.props.login
                    })), u.createElement(k.U, {
                        className: "bits-landing-page__content--left-pane",
                        breakpointSmall: {
                            display: k.H.InlineBlock
                        }
                    }, u.createElement(E, {
                        bitsConfig: this.bitsConfig
                    }), u.createElement(S, {
                        bitsConfig: this.bitsConfig
                    })))))))
                }, t = d.__decorate([Object(y.c)("Bits"), Object(f.a)({
                    location: g.PageviewLocation.BitsLandingPage
                }), Object(h.a)(U, {
                    name: "data",
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                })], t)
            }(u.Component)),
            D = F,
            H = Object(r.a)(a, i)(D);
        n.d(t, "BitsLandingPage", function() {
            return H
        })
    },
    21: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.id)
            }))
        }

        function i(e) {
            return {
                variables: {
                    input: e
                }
            }
        }

        function r(e, t, n, a) {
            void 0 === t && (t = {});
            try {
                var i = l.n.apollo.client.readQuery({
                    query: e,
                    variables: t
                });
                if (a && a(i)) return;
                var r = s(i, function(e) {
                    return e
                }, function(e) {
                    return n(e)
                });
                l.n.apollo.client.writeQuery({
                    query: e,
                    variables: t,
                    data: r
                })
            } catch (e) {
                l.i.warn("Failed writing updated query to Apollo", e)
            }
        }

        function o(e) {
            try {
                var t = e.id,
                    n = e.fragment,
                    a = e.mutator,
                    i = l.n.apollo.client.readFragment({
                        id: t,
                        fragment: n
                    }),
                    r = s(i, function(e) {
                        return e
                    }, function(e) {
                        return a(e)
                    });
                l.n.apollo.client.writeFragment({
                    fragment: n,
                    id: t,
                    data: r
                })
            } catch (e) {
                l.i.warn("Failed writing updated query to Apollo", e)
            }
        }
        t.b = a, t.a = i, t.d = r, t.c = o;
        var s = n(138),
            l = (n.n(s), n(2))
    },
    260: function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "i", function() {
            return s
        }), n.d(t, "k", function() {
            return l
        }), n.d(t, "j", function() {
            return c
        }), n.d(t, "l", function() {
            return d
        }), n.d(t, "e", function() {
            return u
        }), n.d(t, "f", function() {
            return m
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "c", function() {
            return h
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "h", function() {
            return g
        }), n.d(t, "g", function() {
            return b
        });
        var a, i = n(271),
            r = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net/cheer",
            s = 8e5,
            l = 1e4,
            c = 500,
            d = 1e3,
            u = "cheer",
            m = i.a.Purple,
            p = "FIRST_PARTY",
            h = "THIRD_PARTY",
            f = (a = {}, a[i.a.Gray] = "#979797", a[i.a.Purple] = "#9c3ee8", a[i.a.Green] = "#1db2a5", a[i.a.Blue] = "#0099fe", a[i.a.Red] = "#f43021", a),
            g = "hgc-2017",
            b = "https://d3aqoihi2n8ty8.cloudfront.net/hgc2017"
    },
    261: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Text = 0] = "Text", e[e.Mention = 1] = "Mention", e[e.Link = 2] = "Link", e[e.Emote = 3] = "Emote", e[e.ClipLink = 4] = "ClipLink", e[e.VideoLink = 5] = "VideoLink"
        }(a || (a = {}))
    },
    271: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red"
        }(a || (a = {}))
    },
    372: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = [],
                a = t.indexedActions,
                l = new RegExp("^(" + Object.keys(a).join("|") + ")(\\d+)$", "i"),
                c = e.split(/\s+/);
            return c.forEach(function(e, t) {
                var d = l.exec(e);
                if (d) {
                    var u = d[1].toLowerCase(),
                        m = +d[2],
                        p = a[u];
                    if (p || u !== r.e || (p = Object(o.b)()), p) {
                        var h = p.orderedTiers.find(function(e) {
                            return e.bits <= m
                        });
                        !h && m && (h = p.orderedTiers[0]), h && n.push({
                            type: s.a.Emote,
                            content: {
                                images: i(h),
                                alt: p.prefix,
                                cheerAmount: m,
                                cheerColor: h.color
                            }
                        })
                    }
                } else {
                    var f = n.length && n[n.length - 1],
                        g = "";
                    if (t < c.length - 1 && (g = " "), f && f.type === s.a.Text) f.content += e + g;
                    else {
                        var b = "";
                        t && (b = " "), n.push({
                            type: s.a.Text,
                            content: b + e + g
                        })
                    }
                }
            }), n
        }

        function i(e, t, n) {
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
            return l
        }), t.c = a, t.b = i;
        var r = n(260),
            o = n(375),
            s = n(261),
            l = {
                indexedActions: {},
                orderedActions: []
            }
    },
    373: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                darkModeEnabled: Object(l.a)(e) === s.a.Dark
            }
        }
        var i = n(0),
            r = n(1),
            o = n(6),
            s = n(38),
            l = n(52),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = (e.defaultRes, e.sources),
                        n = (e.darkModeEnabled, i.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                        a = this.props.darkModeEnabled ? t.dark : t.light,
                        o = Object.keys(a);
                    delete n.dispatch;
                    var s = i.__assign({}, n, {
                        src: a[this.props.defaultRes || o[0]],
                        srcSet: o.map(function(e) {
                            return a[e] + " " + e
                        }).join(",")
                    });
                    return r.createElement("img", i.__assign({}, s, {
                        onLoad: this.props.onLoad
                    }))
                }, t
            }(r.Component),
            d = Object(o.a)(a)(c);
        n.d(t, "a", function() {
            return d
        })
    },
    375: function(e, t, n) {
        "use strict";

        function a() {
            if (!h) {
                var e = [],
                    t = {};
                Object.keys(u).forEach(function(n) {
                    var a = o(n, u[n]);
                    e.push(a), t[n.toLowerCase()] = a
                }), h = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return h
        }

        function i() {
            return f || (f = r("Cheer")), f
        }

        function r(e) {
            return h ? h.indexedActions[e] : o(e, u[e])
        }

        function o(e, t) {
            var n = [c.a.Red, c.a.Blue, c.a.Green, c.a.Purple, c.a.Gray],
                a = new Map,
                i = n.map(function(t) {
                    var n = s(e, t);
                    return a.set(t, n), n
                });
            return {
                prefix: e,
                type: t,
                tiers: i,
                orderedTiers: i,
                indexedTiers: a
            }
        }

        function s(e, t) {
            for (var n = [], a = {}, i = 0, r = m; i < r.length; i++)
                for (var o = r[i], s = 0, c = p; s < c.length; s++) {
                    var u = c[s];
                    a[o] || (a[o] = {
                        animated: new Map,
                        static: new Map
                    });
                    var h = l(e, o, !0, t, u);
                    n.push(h), a[o].animated.set(u, h.url);
                    var f = l(e, o, !1, t, u);
                    n.push(f), a[o].static.set(u, f.url)
                }
            return {
                id: e + ";" + t,
                bits: t,
                color: d.d[t],
                images: n,
                indexedImages: a
            }
        }

        function l(e, t, n, a, i) {
            var r = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: i,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + a + "/" + i + "." + r
            }
        }
        t.a = a, t.b = i;
        var c = n(271),
            d = n(260),
            u = {
                Cheer: d.b,
                Kreygasm: d.b,
                Kappa: d.b,
                Muxy: d.c,
                Streamlabs: d.c,
                SwiftRage: d.b,
                VoHiYo: d.b
            },
            m = ["LIGHT", "DARK"],
            p = [1, 1.5, 2, 3, 4],
            h = null,
            f = null
    },
    383: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(a || (a = {}))
    },
    805: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || u.ChatTooltip
            };
            c.m.track(d.SpadeEventType.BitsCardInteraction, t)
        }

        function i(e) {
            return e && p[e] ? p[e] : (c.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), m.Buy100)
        }

        function r(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            c.m.track(d.SpadeEventType.BitsAdsAvailability, t)
        }

        function o(e) {
            var t = {
                distinct_id: c.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            c.m.track(d.SpadeEventType.BitsAdsImpression, t)
        }

        function s(e) {
            var t = c.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: c.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            c.m.track(d.SpadeEventType.BitsAdsRequest, n)
        }
        t.h = a, n.d(t, "b", function() {
            return u
        }), n.d(t, "a", function() {
            return m
        }), t.d = i, t.e = r, t.f = o, n.d(t, "c", function() {
            return l
        }), t.g = s;
        var l, c = n(2),
            d = n(12),
            u = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            m = {
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
            p = {
                100: m.Buy100,
                500: m.Buy500,
                1e3: m.Buy1000,
                1500: m.Buy1500,
                5e3: m.Buy5000,
                1e4: m.Buy10000,
                25e3: m.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(l || (l = {}))
    },
    810: function(e, t, n) {
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
        var i = n(0),
            r = n(20),
            o = n(1),
            s = n(10),
            l = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    811: function(e, t, n) {
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
    812: function(e, t, n) {
        "use strict";

        function a(e) {
            return e.type !== u.a && (r(e) && null !== e.promotion && e.promotion.type === u.d)
        }

        function i(e) {
            return e.type !== u.a && (r(e) && null !== e.promotion && e.promotion.type === u.e)
        }

        function r(e) {
            return e.type === u.b && null !== e.promotion && !!e.promotion
        }

        function o(e) {
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
        }

        function s(e) {
            var t = e.messageBits,
                n = t.total,
                a = t.largestCheermote,
                i = t.smallestCheermote;
            if (n) {
                var r = {
                    cheerAboveMaxBitsPerEmote: a > m.k,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: i < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > m.j,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(r).some(function(e) {
                        return r[e]
                    })) return c.__assign({
                    canSpend: !1
                }, r)
            }
            return {
                canSpend: !0
            }
        }

        function l(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(p.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    a = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !a || Object(d.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(p.a.CloseCard, {
                    location: e.location
                })) : (a.focus(), a)
            }
        }
        t.c = a, t.e = i, t.d = r, t.a = o, t.f = s, t.b = l;
        var c = n(0),
            d = n(828),
            u = n(811),
            m = n(260),
            p = n(805)
    },
    814: function(e, t, n) {
        "use strict";
        var a, i = n(4),
            r = n(1),
            o = n(372),
            s = n(375),
            l = n(373),
            c = n(3);
        n(859);
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.ExtraSmall = 3] = "ExtraSmall"
        }(a || (a = {}));
        var d;
        ! function(e) {
            e[e.ImageAndText = 0] = "ImageAndText", e[e.ImageOnly = 1] = "ImageOnly", e[e.TextOnly = 2] = "TextOnly", e[e.InlineTextOnly = 3] = "InlineTextOnly", e[e.Inline = 4] = "Inline"
        }(d || (d = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(s.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = null,
                m = i("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__cheer-amount--small": e.size === a.Small || e.size === a.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === a.Medium
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline
                });
            e.amount && e.display !== d.ImageOnly && (u = r.createElement(c.P, {
                padding: e.size === a.Small ? 0 : void 0,
                textAlign: e.size === a.Small ? c._22.Center : void 0
            }, r.createElement("strong", {
                className: m,
                style: {
                    color: n.color
                }
            }, e.amount)));
            var p = i("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__cheer-image--inline": e.display === d.Inline
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === a.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === a.ExtraSmall
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline && e.size !== a.Small
                }),
                h = r.createElement(l.a, {
                    className: p,
                    sources: Object(o.b)(n, 4, e.animated)
                });
            return e.display !== d.TextOnly && e.display !== d.InlineTextOnly || (h = null), e.display === d.InlineTextOnly || e.display === d.Inline ? r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: c.H.Inline
            }, h, u) : r.createElement(c.U, {
                className: "cheermote-for-amount"
            }, h, u)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return d
        })
    },
    822: function(e, t, n) {
        "use strict";

        function a(e, t) {
            if (!e) return void i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
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
        }
        t.a = a;
        var i = n(2)
    },
    828: function(e, t, n) {
        "use strict";

        function a(e) {
            return e || (e = navigator.userAgent), !!i.exec(e)
        }
        t.a = a;
        var i = /\scurse\/\d/
    },
    834: function(e, t) {
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
                end: 197
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\n  id\n  type\n  bits\n  ... on BitsBundleOffer {\n    price\n    discount\n    isPromo\n    url\n    includesVAT\n    promotion {\n      id\n      type \n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    838: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(h.bindActionCreators)({
                closeModal: c.c
            }, e)
        }

        function i(e) {
            return m.__awaiter(this, void 0, void 0, function() {
                var t, n, a, i, r;
                return m.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = f.b.get("bits_truex_partner_hash", ""), !(n = f.b.get("bits_truex_api_url", "")) || !t) return f.i.warn("Truex API info missing from dynamic settings"), [2, v.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return a = o.sent(), a.ok ? [4, a.json()] : [3, 4];
                        case 3:
                            if ((i = o.sent()) && Array.isArray(i) && i.length) return [2, v.Available];
                            o.label = 4;
                        case 4:
                            return [2, v.Unavailable];
                        case 5:
                            return r = o.sent(), f.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, v.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function r(e) {
            return {
                adModalOpen: Object(d.b)(e, E),
                isLoggedIn: Object(u.d)(e)
            }
        }

        function o(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(c.d)(E, t))
                }
            }
        }
        var s, l = n(6),
            c = n(36),
            d = n(90),
            u = n(17),
            m = n(0),
            p = n(1),
            h = n(9),
            f = n(2),
            g = n(104),
            b = n(7),
            y = n(21);
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(s || (s = {}));
        var v, k = n(383),
            _ = n(805),
            B = n(3),
            C = n(855),
            A = (n(856), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, i, i, r, o;
                            return m.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (n = t.type) {
                                            case k.a.Ready:
                                                return [3, 1];
                                            case k.a.RequestAd:
                                                return [3, 2];
                                            case k.a.Dimensions:
                                                return [3, 3];
                                            case k.a.OnStart:
                                                return [3, 4];
                                            case k.a.OnCredit:
                                                return [3, 5];
                                            case k.a.OnClose:
                                            case k.a.OnFinish:
                                            case k.a.LimitReached:
                                            case k.a.Adblock:
                                            case k.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return a = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(a, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(_.g)({
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
                                            Object(_.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: i.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return l.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(y.a)({
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
                                        return r = l.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return o = l.sent(), f.i.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(s.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(s.LimitReached) : t.type === k.a.Adblock ? this.props.onError(s.Adblock) : t.type === k.a.OnError ? this.props.onError(s.Unknown) : this.hasAwarded || this.props.onError(s.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return p.createElement(B._17, {
                        background: B.m.Base
                    }, p.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, p.createElement(g.a, null), p.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = m.__decorate([Object(b.a)(C, {
                    name: "redeemTrueXAd"
                })], t)
            }(p.Component)),
            E = Object(l.a)(null, a)(A),
            w = n(4),
            x = n(822),
            S = n(28);
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(v || (v = {}));
        var O, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(f.d)("Try again later", "Bits--WatchAdOffer")), p.createElement(B._17, {
                    className: "bits-buy-card__offer-row",
                    display: B.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: B.T.Between,
                    flexWrap: B.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, p.createElement(B.U, {
                    padding: {
                        right: 4
                    }
                }, p.createElement("strong", null, Object(f.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), p.createElement(B.U, {
                    flexShrink: 0,
                    display: B.H.Flex,
                    flexDirection: B.J.Column,
                    alignItems: B.c.End
                }, p.createElement(B.u, {
                    type: B.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(f.d)("Watch Ad", "Bits--WatchAdOffer")), t && p.createElement(B.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: B.d.Stretch,
                    textAlign: B._22.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            N = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(_.e)({
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
                    return N.test(navigator.userAgent) ? null : p.createElement(I, m.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(p.Component),
            L = n(811),
            j = n(260),
            P = n(372),
            U = n(812),
            F = n(375),
            D = n(373),
            H = (n(857), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            a = Object(U.b)({
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
                return m.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === L.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return p.createElement(T, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(U.c)(this.props.offer) ? t = p.createElement(B.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, p.createElement(B._21, {
                        type: B._26.Strong,
                        fontSize: B.L.Size6
                    }, Object(f.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(U.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === L.c && (t = p.createElement(B.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, p.createElement(B._21, {
                        type: B._26.Strong,
                        fontSize: B.L.Size6
                    }, Object(f.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = p.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(f.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var a = null;
                    (Object(U.c)(this.props.offer) || Object(U.e)(this.props.offer)) && (a = p.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(f.d)("one per account", "Bits--BuyCard")));
                    var i = this.props.isLastRow ? B._17 : B.U;
                    return p.createElement(i, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: B.H.Flex,
                        justifyContent: B.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: B.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, p.createElement(B.U, {
                        display: B.H.Flex,
                        justifyContent: B.T.Between,
                        alignItems: B.c.Center
                    }, p.createElement(B.U, {
                        flexGrow: 1
                    }, p.createElement(B._21, {
                        type: B._26.H5,
                        color: B.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), p.createElement(B.U, {
                        flexShrink: 0,
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        alignItems: B.c.End
                    }, p.createElement(B.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || a) && p.createElement(B.U, {
                        alignSelf: B.d.Stretch,
                        textAlign: B._22.Right,
                        margin: {
                            top: .5
                        }
                    }, n, a))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[j.e];
                    t || (t = Object(F.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return p.createElement(B.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return p.createElement(D.a, {
                            key: e.bits,
                            sources: Object(P.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(p.Component)),
            W = (n(858), function(e) {
                var t = [],
                    n = [],
                    a = null;
                return e.offers.forEach(function(i, r) {
                    var o = p.createElement(H, {
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
                        s = Object(U.d)(i),
                        l = Object(U.c)(i),
                        c = i.type === L.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? a = o : c || s || n.push(o)
                }), e.fullsize ? p.createElement(B.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: B.K.NoWrap,
                    display: B.H.Flex,
                    flexDirection: B.J.Column
                }, a, t, n) : p.createElement(S.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, p.createElement(B.U, {
                    flexGrow: 1,
                    flexWrap: B.K.NoWrap,
                    display: B.H.Flex,
                    flexDirection: B.J.Column
                }, a, t, n))
            }),
            q = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = p.createElement(B._21, {
                    italic: !0,
                    type: B._26.P,
                    color: B.F.Alt
                }, Object(f.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = p.createElement(B._21, {
                    color: B.F.Alt
                }, Object(f.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var a = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (a = p.createElement(B._21, {
                    color: B.F.Alt
                }, Object(f.d)("You have {totalBits} Bits", {
                    totalBits: p.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), p.createElement(B._17, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, p.createElement(B.U, {
                    margin: {
                        bottom: 1
                    }
                }, p.createElement(B._21, {
                    type: B._26.H4,
                    color: B.F.Alt
                }, Object(f.d)("Purchase Bits", "Bits--BuyCard")), t), a, n)
            },
            R = n(814),
            M = function(e) {
                return p.createElement(B.U, {
                    display: B.H.Flex,
                    flexGrow: 1,
                    flexDirection: B.J.Column,
                    alignItems: B.c.Center,
                    fullWidth: !0,
                    flexWrap: B.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, p.createElement(R.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig
                }), p.createElement(B.U, {
                    display: B.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: B.J.Column,
                    alignItems: B.c.Center,
                    flexWrap: B.K.NoWrap
                }, p.createElement(B._21, {
                    type: B._26.H4,
                    bold: !0
                }, Object(f.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), p.createElement(B.P, {
                    padding: {
                        top: 1
                    }
                }, p.createElement(B._21, {
                    color: B.F.Alt2
                }, Object(f.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), p.createElement("br", null), Object(f.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), p.createElement(B.U, {
                    display: B.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: B.d.Stretch,
                    justifyContent: B.T.Between
                }, p.createElement(B.u, {
                    onClick: e.onStartCheering
                }, Object(f.d)("Start Cheering", "Bits--WatchAdAward")), p.createElement(B.u, {
                    type: B.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(f.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), e !== v.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return p.createElement(M, m.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(p.Component),
            V = (n(860), function(e) {
                var t = Object(f.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(f.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    a = "adserrorgeneric";
                switch (e.type) {
                    case s.Adblock:
                        a = "adserroradblock", n = Object(f.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case s.LimitReached:
                        a = "adserrorlimit", t = Object(f.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(f.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case s.ExitEarly:
                        n = Object(f.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var i = p.createElement(B.U, {
                    className: "watch-ad-error__footer",
                    display: B.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: B.d.Stretch,
                    justifyContent: B.T.Center
                }, p.createElement(B.u, {
                    onClick: e.onTryAgain
                }, Object(f.d)("Try Again", "Bits--WatchAdError")));
                return e.type === s.LimitReached && (i = p.createElement(B.U, {
                    className: "watch-ad-error__footer",
                    display: B.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: B.d.Stretch,
                    justifyContent: B.T.Between
                }, p.createElement(B.u, {
                    onClick: e.onClose
                }, Object(f.d)("Got It", "Bits--WatchAdError")), p.createElement(B.u, {
                    onClick: e.onTryAgain,
                    type: B.z.Hollow
                }, Object(f.d)("Buy Bits", "Bits--WatchAdError")))), p.createElement(B.U, {
                    padding: {
                        x: 1
                    },
                    display: B.H.Flex,
                    flexGrow: 1,
                    flexDirection: B.J.Column,
                    alignItems: B.c.Center,
                    fullWidth: !0,
                    flexWrap: B.K.NoWrap
                }, p.createElement(B.U, {
                    padding: {
                        y: 2
                    }
                }, p.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: j.a + "/light/static/1/" + a + ".png"
                })), p.createElement(B.U, {
                    padding: {
                        bottom: 1
                    }
                }, p.createElement(B._21, {
                    type: B._26.H4,
                    bold: !0
                }, t)), p.createElement(B._21, {
                    color: B.F.Alt2
                }, n), i)
            }),
            z = n(861);
        n(862);
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(O || (O = {}));
        var Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: O.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(x.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: O.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: _.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: O.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === O.Error && (t.setState({
                            wateb: O.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return m.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: B.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = w({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === _.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === _.b.ChatTooltip && (n = p.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, p.createElement(B._8, {
                            asset: B._9.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return p.createElement(B._17, m.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        alignItems: B.c.Center,
                        justifyContent: B.T.Center,
                        textAlign: B._22.Center
                    }, e), p.createElement(B.X, {
                        delay: 0
                    }), p.createElement(B.U, {
                        padding: {
                            top: 2
                        }
                    }, p.createElement(B._21, {
                        italic: !0
                    }, Object(f.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return p.createElement(B.U, m.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        alignItems: B.c.Center,
                        justifyContent: B.T.Center,
                        padding: 2,
                        textAlign: B._22.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, p.createElement(B._21, {
                        italic: !0
                    }, Object(f.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var a = this.renderWatebCard();
                    if (a) return p.createElement(B._17, m.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        alignItems: B.c.Center,
                        justifyContent: B.T.Center,
                        textAlign: B._22.Center,
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
                        s = p.createElement(W, {
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
                    return this.props.location === _.b.ChatTooltip && (l = p.createElement(q, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), p.createElement(B._17, m.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case O.Awarded:
                            return p.createElement(G, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case O.Error:
                            return p.createElement(V, {
                                type: this.state.watebError || s.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = m.__decorate([Object(b.a)(z, {
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
            }(p.Component),
            J = Q,
            K = Object(l.a)(r, o)(J);
        n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return K
        })
    },
    855: function(e, t) {
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
                end: 114
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\n  redeemTrueXAd(input:$input) {\n    grantedBits\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    856: function(e, t) {},
    857: function(e, t) {},
    858: function(e, t) {},
    859: function(e, t) {},
    860: function(e, t) {},
    861: function(e, t, n) {
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
                end: 528
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\n\nquery Bits_BuyCard_Offers($withChannel: Boolean!, $isLoggedIn: Boolean!, $channelLogin: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $channelLogin) @include(if: $withChannel) {\n    id\n    displayName\n    cheer {\n      id\n      settings {\n        cheerMinimumBits\n      }\n    }\n  }\n}\n',
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
        }(n(834).definitions)), e.exports = a
    },
    862: function(e, t) {}
});
//# sourceMappingURL=pages.bits.components.bits-landing-page-3e74d4b779dad89dbfdda38fe0a2e02c.js.map