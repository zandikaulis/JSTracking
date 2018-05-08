webpackJsonp([112], {
    "0blB": function(e, t) {},
    "7XNA": function(e, t) {
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
    JVP6: function(e, t) {},
    Kloa: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            o = n("O27J"),
            a = n("6sO2"),
            c = n("Odds"),
            l = (n("j9al"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.hash,
                        t = e && o.findDOMNode(this.refs[e]);
                    t && t.scrollIntoView()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        id: "faq",
                        ref: "faq"
                    }, r.createElement(c._35, {
                        className: "twitch-prime-faq",
                        padding: {
                            x: 1,
                            y: 5
                        }
                    }, r.createElement(c._23, {
                        centered: !0
                    }, r.createElement(c.Y, {
                        justifyContent: c._7.Center
                    }, r.createElement(c.L, {
                        cols: {
                            default: 12,
                            sm: 10,
                            md: 8,
                            lg: 7,
                            xl: 6
                        }
                    }, r.createElement(c._8, {
                        margin: {
                            bottom: 2
                        },
                        textAlign: c._45.Center,
                        fullWidth: !0
                    }, r.createElement(c.Q, {
                        type: c._49.H2,
                        bold: !0
                    }, Object(a.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(a.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(a.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(a.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(a.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(a.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(a.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(a.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                        "x:link": function(e) {
                            return r.createElement(c.O, {
                                key: e,
                                to: "http://www.twitchprime.com"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(a.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(a.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                        "x:link": function(e) {
                            return r.createElement(c.O, {
                                key: e,
                                to: "https://www.epicgames.com/account/connected"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(a.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(a.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(a.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(a.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(a.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(a.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(a.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                        "x:link": function(e) {
                            return r.createElement(c.O, {
                                key: e,
                                to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), r.createElement(c._8, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(c.v, {
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                        fullWidth: !0
                    }, Object(a.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                }, t.prototype.renderQuestion = function(e, t) {
                    return r.createElement("div", {
                        id: t,
                        ref: t
                    }, r.createElement(c._8, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(c.Q, {
                        type: c._49.H4,
                        bold: !0
                    }, e)))
                }, t.prototype.renderAnswer = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return 1 === e.length ? r.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.Q, null, e[0])) : r.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c._58, null, r.createElement("ul", null, e.map(function(e) {
                        return r.createElement("li", {
                            key: e
                        }, r.createElement(c.Q, null, e))
                    }))))
                }, t.prototype.renderAnswerWithLink = function(e) {
                    return r.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.Q, null, e))
                }, t
            }(r.Component));
        n.d(t, "a", function() {
            return l
        })
    },
    P3dd: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            a = n("CSlQ"),
            c = n("Odds"),
            l = (n("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                    return r.createElement(c._8, {
                        className: "prime-footer",
                        position: c._15.Relative
                    }, r.createElement(c._35, {
                        position: c._15.Absolute,
                        justifyContent: c._7.Center,
                        alignItems: c.c.Center,
                        className: "twitter-container"
                    }, r.createElement(c._24, {
                        asset: c._25.Twitter,
                        width: 71,
                        height: 71,
                        type: c._26.Prime
                    })), r.createElement(c._35, {
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, r.createElement(c._8, {
                        className: "prime-footer__twitter-links",
                        display: c.R.Flex,
                        justifyContent: e ? c._7.Between : c._7.Center
                    }, r.createElement(c.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, r.createElement(c.Q, {
                        bold: !0,
                        fontSize: c.V.Size5
                    }, Object(o.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && r.createElement(c.O, {
                        to: this.props.partnerSocialLink,
                        targetBlank: !0
                    }, r.createElement(c.Q, {
                        bold: !0,
                        fontSize: c.V.Size5
                    }, this.props.partnerSocialText)))), r.createElement(c._35, {
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
                    }, r.createElement(c._35, {
                        padding: 2
                    }, r.createElement(c.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(o.d)("Terms", "PrimeSubsiteFooter"))), r.createElement(c._35, {
                        padding: 2
                    }, r.createElement(c.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(o.d)("Privacy Policy", "PrimeSubsiteFooter"))), r.createElement(c._35, {
                        padding: 2
                    }, r.createElement(c.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(o.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t
            }(r.Component)),
            s = Object(a.d)("PrimeFooter", {
                autoReportInteractive: !0
            })(l);
        n.d(t, "a", function() {
            return s
        })
    },
    TCPX: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("CSlQ"),
            o = n("Odds"),
            a = (n("0blB"), function(e) {
                return i.createElement(o._8, {
                    display: o.R.Flex,
                    justifyContent: o._7.Center
                }, i.createElement(o._8, {
                    className: "twitch-prime-call-to-action " + e.className,
                    textAlign: o._45.Center,
                    alignItems: o.c.Center,
                    display: o.R.Flex,
                    flexDirection: o.T.Column,
                    justifyContent: o._7.Around,
                    margin: 2
                }, i.createElement(o._2, {
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
                }, i.createElement("a", {
                    href: e.href,
                    onClick: e.onClick,
                    className: "twitch-prime-call-to-action__link"
                }, i.createElement(o._8, {
                    className: "fortnite-bold"
                }, i.createElement(o.Q, {
                    type: o._49.H2,
                    transform: o._48.Uppercase,
                    bold: !0
                }, e.title)), e.body && i.createElement(o._8, {
                    margin: {
                        y: 1
                    },
                    className: "twitch-prime-call-to-action__body"
                }, i.createElement(o.Q, {
                    type: o._49.P,
                    transform: o._48.Uppercase
                }, e.body))))))
            }),
            c = Object(r.d)("TwitchPrimeCallToAction", {
                autoReportInteractive: !0
            })(a);
        n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return c
        })
    },
    Uen5: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("GiK3"),
            o = n("3zLD"),
            a = n("CIox"),
            c = n("6sO2"),
            l = n("68hr"),
            s = n("7vx8"),
            m = n("j7/Y"),
            d = n("oIkB"),
            p = n("w9tK"),
            h = n("vH/s"),
            u = n("CSlQ"),
            f = n("Kloa"),
            w = n("P3dd"),
            y = n("/3Cb"),
            g = n("Kckk"),
            _ = n("c6bv"),
            b = n("TCPX"),
            P = n("dlQw"),
            k = n("Odds"),
            C = n("7XNA"),
            v = (n("r3tw"), "twitch-prime__call-to-action"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: void 0,
                        claiming: !1
                    }, t.renderLinkExperience = function() {
                        return r.createElement(k._8, null, r.createElement(k._8, {
                            className: "twitch-prime-linking__body",
                            textAlign: k._45.Center,
                            margin: {
                                y: 2
                            }
                        }, r.createElement(k.Q, {
                            type: k._49.H1,
                            transform: k._48.Uppercase,
                            color: k.K.Link
                        }, Object(c.d)("Link your account", "TwitchPrimeLinking"))), !t.state.claiming && t.renderLinkCallToAction(), t.state.claiming && t.renderSpinner())
                    }, t.renderErrorExperience = function() {
                        return r.createElement(k._8, null, r.createElement(k._8, {
                            className: "twitch-prime-linking__error__body",
                            textAlign: k._45.Center,
                            margin: {
                                y: 2
                            }
                        }, r.createElement(k.Q, {
                            type: k._49.H1,
                            transform: k._48.Uppercase,
                            color: k.K.Link
                        }, Object(c.d)("Oops, something happened", "TwitchPrimeLinking")), r.createElement(k._8, {
                            className: "twitch-prime-linking__after",
                            textAlign: k._45.Center,
                            margin: {
                                y: 2
                            }
                        }, r.createElement(k.Q, {
                            type: k._49.H3,
                            color: k.K.Link
                        }, Object(g.f)(t.state.error))), t.renderRefreshCallToAction()))
                    }, t.renderRefreshCallToAction = function() {
                        return r.createElement(b.a, {
                            className: "twitch-prime-call-to-action--refresh",
                            title: Object(c.d)("Click here to refresh", "TwitchPrimeLinking"),
                            body: Object(c.d)("Refresh to try claiming and linking your account again", "TwitchPrimeLinking"),
                            onClick: t.claimOffer,
                            dataTestSelector: v,
                            href: "/prime/fortnite/link"
                        })
                    }, t.renderLinkCallToAction = function() {
                        return r.createElement(b.a, {
                            className: "twitch-prime-call-to-action--link",
                            title: Object(c.d)("Claim loot", "TwitchPrimeLinking"),
                            body: Object(c.d)("Link your Epic account to your Twitch Prime account here", "TwitchPrimeLinking"),
                            onClick: t.claimOffer,
                            dataTestSelector: v,
                            href: "#"
                        })
                    }, t.renderSpinner = function() {
                        return r.createElement(k._8, {
                            className: "twitch-prime-linking__spinner",
                            display: k.R.Flex,
                            alignItems: k.c.Center,
                            justifyContent: k._7.Center
                        }, r.createElement(k._10, null))
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = c.b.get(P.b, P.a),
                                r = Object(d.a)({
                                    offerID: i
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = (e.data || {}).claimPrimeOffer || {},
                                    i = n.self || {},
                                    r = n.error || {};
                                if (i.hasEntitlement) {
                                    var o = c.b.get("twitch_prime_fortnite_link_url", "https://www.epicgames.com");
                                    window.location.replace(o)
                                }
                                if (r.code) {
                                    var a = g.b[r.code];
                                    t.setState({
                                        claiming: !1,
                                        error: a || g.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    error: g.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!c.b.get("twitch_prime_fortnite", !1)) return r.createElement(l.a, null);
                    var e = this.props.data;
                    if (e.loading) return null;
                    var t = e && e.currentUser;
                    return e.error || !t ? r.createElement(a.b, {
                        to: "/prime/fortnite"
                    }) : r.createElement(k._8, {
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        justifyContent: k._7.Center
                    }, r.createElement(k._8, {
                        className: "twitch-prime-fortnite twitch-prime-linking"
                    }, r.createElement(k._8, {
                        className: "twitch-prime-linking__header",
                        fullWidth: !0
                    }, r.createElement(_.a, {
                        alwaysCentered: !0
                    })), !this.state.error && this.renderLinkExperience(), this.state.error && this.renderErrorExperience()), r.createElement(f.a, {
                        hash: this.props.location.hash.replace("#", "")
                    }), r.createElement(w.a, {
                        partnerSocialLink: "https://twitter.com/FortniteGame",
                        partnerSocialText: "@FortniteGame"
                    }))
                }, t
            }(r.Component),
            T = Object(o.compose)(Object(u.d)("TwitchPrimeLinkingPage", {
                destination: p.a.TwitchPrimeLinkingPage
            }), Object(s.a)(C), Object(s.a)(y, {
                name: "claimPrimeOffer"
            }), Object(m.a)({
                location: h.PageviewLocation.TwitchPrimeLinkingPage
            }))(O);
        n.d(t, "CALL_TO_ACTION_SELECTOR", function() {
            return v
        }), n.d(t, "TwitchPrimeLinkingPage", function() {
            return T
        })
    },
    c6bv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            o = n("GiK3"),
            a = n("CSlQ"),
            c = n("Odds"),
            l = (n("zaS7"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferImage = function() {
                        return o.createElement(c._8, {
                            textAlign: c._45.Center,
                            className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                        }, o.createElement(c.N, {
                            alt: "Offer items",
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                        }))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r({
                            "twitch-prime-fortnite-header": !0,
                            "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                        }),
                        t = r({
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
                        }
                    }, o.createElement(c._8, {
                        textAlign: c._45.Center,
                        alignSelf: c.d.Start,
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
            s = Object(a.d)("TwitchPrimeBrandedHeader", {
                autoReportInteractive: !0
            })(l);
        n.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return s
        })
    },
    dlQw: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        });
        n("6sO2");
        var i = "twitch_prime_fortnite_offer_id",
            r = "c0b1816d-300b-d234-828e-59e76119bffe"
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            o = n("GiK3"),
            a = n("F8kA"),
            c = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var o = r.referenceTracking,
                                    a = o.content,
                                    l = o.medium,
                                    s = o.content_index;
                                c.o.tracking.trackPageview(i.__assign({
                                    content: a,
                                    medium: l,
                                    content_index: s,
                                    location: e.location
                                }, t))
                            }
                        }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
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
                            var i = "",
                                o = r.stringify(t);
                            o.length > 0 && (i = "?" + o), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
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
    r3tw: function(e, t) {},
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-linking-24f1da3c851278e8909e3ae8c1659259.js.map