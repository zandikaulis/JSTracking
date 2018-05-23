webpackJsonp([111], {
    "0blB": function(e, t) {},
    "8+KY": function(e, t) {},
    F35x: function(e, t) {},
    HnrI: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            i = n("2KeS"),
            o = n("+xm8"),
            a = n("f2i/"),
            c = n("TToO"),
            l = n("GiK3"),
            m = n("3zLD"),
            s = n("6sO2"),
            d = n("68hr"),
            p = n("7vx8"),
            u = n("j7/Y"),
            h = n("w9tK"),
            f = n("vH/s"),
            w = n("CSlQ"),
            y = n("Kloa"),
            g = n("P3dd"),
            _ = n("c6bv"),
            b = n("TCPX"),
            P = n("Odds"),
            T = (n("8+KY"), function(e) {
                if (e) return l.createElement(P._8, {
                    display: P.R.Flex,
                    margin: {
                        y: 1
                    }
                }, l.createElement(P.Q, {
                    type: P._49.H3,
                    bold: !0,
                    transform: P._48.Uppercase,
                    color: P.K.Link
                }, e))
            }),
            C = Object(w.d)("TwitchPrimeFortniteOffers", {
                autoReportInteractive: !0
            })(function() {
                return l.createElement(P._8, {
                    className: "twitch-prime-fortnite-offers",
                    padding: {
                        x: 2
                    }
                }, l.createElement(P._8, {
                    className: "twitch-prime-fortnite-offers__announce",
                    margin: {
                        bottom: 4
                    }
                }, l.createElement(P._8, {
                    className: "twitch-prime-fortnite-offers__announce__main",
                    textAlign: P._45.Center,
                    padding: {
                        y: .5
                    },
                    position: P._15.Relative
                }, l.createElement(P.Q, {
                    type: P._49.H3,
                    bold: !0,
                    transform: P._48.Uppercase,
                    color: P.K.Link
                }, Object(s.d)("Exclusive!", "TwitchPrimeFortniteOffers")))), T(Object(s.d)("Battle Royale Trailblazer Outfit", "TwitchPrimeFortniteOffers")), T(Object(s.d)("Battle Royale True North Back Bling", "TwitchPrimeFortniteOffers")), T(Object(s.d)("Battle Royale Tenderizer Pickaxe", "TwitchPrimeFortniteOffers")), T(Object(s.d)("Battle Royale Freestylin’ Emote", "TwitchPrimeFortniteOffers")))
            }),
            v = n("kQ9X"),
            O = (n("F35x"), "twitch-prime-signup-call-to-action"),
            k = "twitch-prime-claim-call-to-action",
            E = "twitch-prime-login-call-to-action",
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDescription = function() {
                        return l.createElement(P._8, null, l.createElement(P._8, {
                            fullWidth: !0,
                            textAlign: P._45.Center,
                            breakpointMedium: {
                                textAlign: P._45.Left
                            },
                            margin: {
                                y: 2
                            }
                        }, l.createElement(P._8, {
                            className: "twitch-prime-fortnite__header__text"
                        }, l.createElement(P.Q, {
                            type: P._49.H1,
                            color: P.K.Overlay,
                            transform: P._48.Uppercase
                        }, Object(s.d)("Twitch Prime Pack #2", "TwitchPrimeFortnite")))), l.createElement(P._8, {
                            fullWidth: !0,
                            display: P.R.Flex,
                            alignItems: P.c.Center,
                            justifyContent: P._7.Center,
                            flexWrap: P.U.Wrap,
                            textAlign: P._45.Center,
                            breakpointMedium: {
                                textAlign: P._45.Left,
                                justifyContent: P._7.Start
                            }
                        }, l.createElement(P._8, {
                            className: "twitch-prime-fortnite__description",
                            margin: {
                                bottom: 3
                            }
                        }, l.createElement(P.Q, {
                            type: P._49.H3,
                            transform: P._48.Uppercase,
                            color: P.K.Overlay,
                            bold: !0
                        }, Object(s.d)("Get exclusive Fortnite loot included with Twitch Prime", "TwitchPrimeFortnite")))))
                    }, t.renderCTAs = function() {
                        var e = t.getCurrentUser();
                        return l.createElement(P._8, {
                            display: P.R.Flex,
                            flexDirection: P.T.Column,
                            justifyContent: P._7.Center,
                            breakpointMedium: {
                                flexDirection: P.T.Row
                            },
                            margin: {
                                x: "auto",
                                y: 3
                            }
                        }, !e && t.renderLoginCTA(), !t.hasPrime() && t.renderSignupCTA(), t.hasPrime() && t.renderClaimCTA())
                    }, t.renderLoginCTA = function() {
                        return l.createElement(b.a, {
                            className: "twitch-prime-call-to-action--login",
                            title: Object(s.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                            body: Object(s.d)("Click here to login and get started", "TwitchPrimeFortnite"),
                            onClick: t.onLoginClick,
                            dataTestSelector: E,
                            href: "#"
                        })
                    }, t.renderSignupCTA = function() {
                        var e = s.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                        return l.createElement(b.a, {
                            className: "twitch-prime-call-to-action--signup",
                            title: Object(s.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                            body: Object(s.d)("Click here to start your free trial or link your Amazon Prime account", "TwitchPrimeFortnite"),
                            href: e,
                            dataTestSelector: O
                        })
                    }, t.renderClaimCTA = function() {
                        return l.createElement(b.a, {
                            className: "twitch-prime-call-to-action--claim",
                            title: Object(s.d)("Click here for your loot", "TwitchPrimeFortnite"),
                            href: "/prime/fortnite/link",
                            dataTestSelector: k
                        })
                    }, t.getCurrentUser = function() {
                        var e = t.props.data;
                        return e && e.currentUser ? e.currentUser : null
                    }, t.hasPrime = function() {
                        var e = t.getCurrentUser();
                        return e && e.hasPrime
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = s.b.get("twitch_prime_fortnite", !1);
                    return this.props.data.error || !e ? l.createElement(d.a, null) : this.props.data.loading ? l.createElement(P._8, null) : l.createElement(P._8, {
                        className: "twitch-prime-fortnite__container"
                    }, l.createElement(P._8, {
                        className: "twitch-prime-fortnite"
                    }, l.createElement(_.a, {
                        renderOfferImage: !0
                    }, this.renderDescription()), l.createElement(C, null), this.renderCTAs()), l.createElement(y.a, {
                        hash: this.props.location.hash.replace("#", "")
                    }), l.createElement(g.a, {
                        partnerSocialLink: "https://twitter.com/FortniteGame",
                        partnerSocialText: "@FortniteGame"
                    }))
                }, t
            }(l.Component),
            F = Object(m.compose)(Object(w.d)("TwitchPrimeFortnitePage", {
                destination: h.a.TwitchPrimeFortnitePage
            }), Object(p.a)(v), Object(u.a)({
                location: f.PageviewLocation.TwitchPrimeFortnitePage
            }))(A);
        var j = Object(r.b)(null, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(a.f)(o.a.TopNavLoginButton)
                }
            }, e)
        })(F);
        n.d(t, "TwitchPrimeFortnitePage", function() {
            return j
        })
    },
    JVP6: function(e, t) {},
    Kloa: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("O27J"),
            a = n("6sO2"),
            c = n("Odds"),
            l = (n("j9al"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.hash,
                        t = e && o.findDOMNode(this.refs[e]);
                    t && t.scrollIntoView()
                }, t.prototype.render = function() {
                    return i.createElement("div", {
                        id: "faq",
                        ref: "faq"
                    }, i.createElement(c._35, {
                        className: "twitch-prime-faq",
                        padding: {
                            x: 1,
                            y: 5
                        }
                    }, i.createElement(c._23, {
                        centered: !0
                    }, i.createElement(c.Y, {
                        justifyContent: c._7.Center
                    }, i.createElement(c.L, {
                        cols: {
                            default: 12,
                            sm: 10,
                            md: 8,
                            lg: 7,
                            xl: 6
                        }
                    }, i.createElement(c._8, {
                        margin: {
                            bottom: 2
                        },
                        textAlign: c._45.Center,
                        fullWidth: !0
                    }, i.createElement(c.Q, {
                        type: c._49.H2,
                        bold: !0
                    }, Object(a.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(a.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(a.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(a.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(a.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(a.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(a.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(a.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                        "x:link": function(e) {
                            return i.createElement(c.O, {
                                key: e,
                                to: "http://www.twitchprime.com"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(a.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(a.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                        "x:link": function(e) {
                            return i.createElement(c.O, {
                                key: e,
                                to: "https://www.epicgames.com/account/connected"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(a.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(a.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(a.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(a.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(a.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(a.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(a.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                        "x:link": function(e) {
                            return i.createElement(c.O, {
                                key: e,
                                to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), i.createElement(c._8, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(c.v, {
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                        fullWidth: !0
                    }, Object(a.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                }, t.prototype.renderQuestion = function(e, t) {
                    return i.createElement("div", {
                        id: t,
                        ref: t
                    }, i.createElement(c._8, {
                        margin: {
                            top: 2
                        }
                    }, i.createElement(c.Q, {
                        type: c._49.H4,
                        bold: !0
                    }, e)))
                }, t.prototype.renderAnswer = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return 1 === e.length ? i.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(c.Q, null, e[0])) : i.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(c._58, null, i.createElement("ul", null, e.map(function(e) {
                        return i.createElement("li", {
                            key: e
                        }, i.createElement(c.Q, null, e))
                    }))))
                }, t.prototype.renderAnswerWithLink = function(e) {
                    return i.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(c.Q, null, e))
                }, t
            }(i.Component));
        n.d(t, "a", function() {
            return l
        })
    },
    P3dd: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            a = n("CSlQ"),
            c = n("Odds"),
            l = (n("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                    return i.createElement(c._8, {
                        className: "prime-footer",
                        position: c._15.Relative
                    }, i.createElement(c._35, {
                        position: c._15.Absolute,
                        justifyContent: c._7.Center,
                        alignItems: c.c.Center,
                        className: "twitter-container"
                    }, i.createElement(c._24, {
                        asset: c._25.Twitter,
                        width: 71,
                        height: 71,
                        type: c._26.Prime
                    })), i.createElement(c._35, {
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, i.createElement(c._8, {
                        className: "prime-footer__twitter-links",
                        display: c.R.Flex,
                        justifyContent: e ? c._7.Between : c._7.Center
                    }, i.createElement(c.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, i.createElement(c.Q, {
                        bold: !0,
                        fontSize: c.V.Size5
                    }, Object(o.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && i.createElement(c.O, {
                        to: this.props.partnerSocialLink,
                        targetBlank: !0
                    }, i.createElement(c.Q, {
                        bold: !0,
                        fontSize: c.V.Size5
                    }, this.props.partnerSocialText)))), i.createElement(c._35, {
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: {
                            top: 2
                        },
                        className: "prime-footer-links"
                    }, i.createElement(c._35, {
                        padding: 2
                    }, i.createElement(c.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(o.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(c._35, {
                        padding: 2
                    }, i.createElement(c.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(o.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(c._35, {
                        padding: 2
                    }, i.createElement(c.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(o.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t
            }(i.Component)),
            m = Object(a.d)("PrimeFooter", {
                autoReportInteractive: !0
            })(l);
        n.d(t, "a", function() {
            return m
        })
    },
    TCPX: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("CSlQ"),
            o = n("Odds"),
            a = (n("0blB"), function(e) {
                return r.createElement(o._8, {
                    display: o.R.Flex,
                    justifyContent: o._7.Center
                }, r.createElement(o._8, {
                    className: "twitch-prime-call-to-action " + e.className,
                    textAlign: o._45.Center,
                    alignItems: o.c.Center,
                    display: o.R.Flex,
                    flexDirection: o.T.Column,
                    justifyContent: o._7.Around,
                    margin: 2
                }, r.createElement(o._2, {
                    "data-test-selector": e.dataTestSelector,
                    "data-a-selector": e.dataASelector,
                    padding: {
                        x: 2
                    },
                    alignItems: o.c.Center,
                    display: o.R.Flex,
                    flexDirection: o.T.Column,
                    justifyContent: o._7.Center,
                    fullWidth: !0,
                    fullHeight: !0
                }, r.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, r.createElement(o._8, {
                    className: "fortnite-bold"
                }, r.createElement(o.Q, {
                    type: o._49.H2,
                    transform: o._48.Uppercase,
                    bold: !0
                }, e.title)), e.body && r.createElement(o._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, r.createElement(o.Q, {
                    type: o._49.P,
                    transform: o._48.Uppercase
                }, e.body))))))
            }),
            c = Object(i.d)("TwitchPrimeCallToAction", {
                autoReportInteractive: !0
            })(a);
        n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return c
        })
    },
    c6bv: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("HW6M"),
            o = n("GiK3"),
            a = n("CSlQ"),
            c = n("Odds"),
            l = (n("zaS7"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferImage = function() {
                        return o.createElement(c._8, {
                            textAlign: c._45.Center,
                            breakpointMedium: {
                                textAlign: c._45.Right
                            },
                            className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                        }, o.createElement(c.N, {
                            alt: "Offer items",
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                        }))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i({
                            "twitch-prime-fortnite-header": !0,
                            "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                        }),
                        t = i({
                            "twitch-prime-fortnite__header__logo": !0,
                            "twitch-prime-fortnite__header__logo--centered": this.props.alwaysCentered
                        });
                    return o.createElement(c._8, {
                        className: "twitch-prime-fortnite__header__container",
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, o.createElement(c._8, {
                        className: e
                    }, o.createElement(c._8, {
                        className: "twitch-prime-fortnite__header",
                        display: c.R.Flex,
                        alignItems: c.c.End,
                        justifyContent: c._7.Center,
                        flexWrap: c.U.Wrap,
                        textAlign: c._45.Left,
                        "data-test-selector": "twitch-prime-fortnite-header",
                        margin: {
                            y: 0,
                            x: "auto"
                        },
                        padding: {
                            x: 1
                        }
                    }, o.createElement(c._8, {
                        textAlign: c._45.Center,
                        breakpointMedium: {
                            textAlign: c._45.Left
                        },
                        breakpointLarge: {
                            margin: {
                                bottom: 5
                            },
                            padding: {
                                left: 5
                            }
                        },
                        alignSelf: c.d.Center,
                        className: "twitch-prime-fortnite__header__section"
                    }, o.createElement(c._8, {
                        className: t,
                        margin: {
                            y: 2
                        }
                    }, o.createElement("img", {
                        src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                    })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                }, t
            }(o.Component)),
            m = Object(a.d)("TwitchPrimeBrandedHeader", {
                autoReportInteractive: !0
            })(l);
        n.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return m
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("OAwv"),
            o = n("GiK3"),
            a = n("F8kA"),
            c = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var o = i.referenceTracking,
                                    a = o.content,
                                    l = o.medium,
                                    m = o.content_index;
                                c.o.tracking.trackPageview(r.__assign({
                                    content: a,
                                    medium: l,
                                    content_index: m,
                                    location: e.location
                                }, t))
                            }
                        }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                o = i.stringify(t);
                            o.length > 0 && (r = "?" + o), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(a.f)(n)
            }
        }
        n.d(t, "a", function() {
            return l
        })
    },
    j9al: function(e, t) {},
    kQ9X: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TwitchPrime_Page_Fortnite"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query TwitchPrime_Page_Fortnite {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-fortnite-d6321ae55761983879fa3cf377449fde.js.map