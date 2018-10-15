(window.webpackJsonp = window.webpackJsonp || []).push([
    [167], {
        "2MIk": function(e, t, n) {},
        CinY: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                r = n("fvjX"),
                o = n("1/iK"),
                a = n("y5D0"),
                c = n("mrSG"),
                l = n("q1tI"),
                m = n("oJmH"),
                s = n("mLw1"),
                d = n("/7QA"),
                p = n("yR8l"),
                u = n("V+GM"),
                h = n("NvVO"),
                f = n("2xye"),
                w = n("GnwI"),
                b = n("igVx"),
                y = n("jmDq"),
                g = n("uzin"),
                P = n("osOq"),
                k = n("Ue10"),
                C = (n("UWXE"), function(e) {
                    if (e) return l.createElement(k.Wa, {
                        display: k.X.Flex,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(k.W, {
                        type: k.Ob.H3,
                        bold: !0,
                        transform: k.Nb.Uppercase,
                        color: k.O.Link
                    }, e))
                }),
                v = Object(w.b)("TwitchPrimeFortniteOffers", {
                    autoReportInteractive: !0
                })(function() {
                    return l.createElement(k.Wa, {
                        className: "twitch-prime-fortnite-offers",
                        padding: {
                            x: 2
                        }
                    }, l.createElement(k.Wa, {
                        className: "twitch-prime-fortnite-offers__announce",
                        margin: {
                            bottom: 4
                        }
                    }, l.createElement(k.Wa, {
                        className: "twitch-prime-fortnite-offers__announce__main",
                        textAlign: k.Kb.Center,
                        padding: {
                            y: .5
                        },
                        position: k.eb.Relative
                    }, l.createElement(k.W, {
                        type: k.Ob.H3,
                        bold: !0,
                        transform: k.Nb.Uppercase,
                        color: k.O.Link
                    }, Object(d.d)("Exclusive!", "TwitchPrimeFortniteOffers")))), C(Object(d.d)("Battle Royale Trailblazer Outfit", "TwitchPrimeFortniteOffers")), C(Object(d.d)("Battle Royale True North Back Bling", "TwitchPrimeFortniteOffers")), C(Object(d.d)("Battle Royale Tenderizer Pickaxe", "TwitchPrimeFortniteOffers")), C(Object(d.d)("Battle Royale Freestylin’ Emote", "TwitchPrimeFortniteOffers")))
                }),
                T = n("Ibv5"),
                E = (n("nk94"), "twitch-prime-signup-call-to-action"),
                O = "twitch-prime-claim-call-to-action",
                A = "twitch-prime-login-call-to-action",
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderDescription = function() {
                            return l.createElement(k.Wa, null, l.createElement(k.Wa, {
                                fullWidth: !0,
                                textAlign: k.Kb.Center,
                                breakpointMedium: {
                                    textAlign: k.Kb.Left
                                },
                                margin: {
                                    y: 2
                                }
                            }, l.createElement(k.Wa, {
                                className: "twitch-prime-fortnite__header__text"
                            }, l.createElement(k.W, {
                                type: k.Ob.H1,
                                color: k.O.Overlay,
                                transform: k.Nb.Uppercase
                            }, Object(d.d)("Twitch Prime Pack #2", "TwitchPrimeFortnite")))), l.createElement(k.Wa, {
                                fullWidth: !0,
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Va.Center,
                                flexWrap: k.Aa.Wrap,
                                textAlign: k.Kb.Center,
                                breakpointMedium: {
                                    textAlign: k.Kb.Left,
                                    justifyContent: k.Va.Start
                                }
                            }, l.createElement(k.Wa, {
                                className: "twitch-prime-fortnite__description",
                                margin: {
                                    bottom: 3
                                }
                            }, l.createElement(k.W, {
                                type: k.Ob.H3,
                                transform: k.Nb.Uppercase,
                                color: k.O.Overlay,
                                bold: !0
                            }, Object(d.d)("Get exclusive Fortnite loot included with Twitch Prime", "TwitchPrimeFortnite")))))
                        }, t.renderCTAs = function() {
                            var e = t.getCurrentUser();
                            return l.createElement(k.Wa, {
                                display: k.X.Flex,
                                flexDirection: k.Z.Column,
                                justifyContent: k.Va.Center,
                                breakpointMedium: {
                                    flexDirection: k.Z.Row
                                },
                                margin: {
                                    x: "auto",
                                    y: 3
                                }
                            }, !e && t.renderLoginCTA(), !t.hasPrime() && t.renderSignupCTA(), t.hasPrime() && t.renderClaimCTA())
                        }, t.renderLoginCTA = function() {
                            return l.createElement(P.a, {
                                className: "twitch-prime-call-to-action--login",
                                title: Object(d.d)("Have Twitch Prime?", "TwitchPrimeFortnite"),
                                body: Object(d.d)("Click here to login and get started", "TwitchPrimeFortnite"),
                                onClick: t.onLoginClick,
                                dataTestSelector: A,
                                href: "#"
                            })
                        }, t.renderSignupCTA = function() {
                            var e = d.b.get("twitch_prime_fortnite_signup_url", "https://twitch.amazon.com/prime/country");
                            return l.createElement(P.a, {
                                className: "twitch-prime-call-to-action--signup",
                                title: Object(d.d)("Not a Twitch Prime member?", "TwitchPrimeFortnite"),
                                body: Object(d.d)("Click here to start your free trial or link your Amazon Prime account", "TwitchPrimeFortnite"),
                                href: e,
                                dataTestSelector: E
                            })
                        }, t.renderClaimCTA = function() {
                            return l.createElement(P.a, {
                                className: "twitch-prime-call-to-action--claim",
                                title: Object(d.d)("Click here for your loot", "TwitchPrimeFortnite"),
                                href: "/prime/fortnite/link",
                                dataTestSelector: O
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
                        var e = d.b.get("twitch_prime_fortnite", !1);
                        return this.props.data.error || !e ? l.createElement(s.a, {
                            to: "/prime?ref_=sm_fortnite_redirect"
                        }) : this.props.data.loading ? l.createElement(k.Wa, null) : l.createElement(k.Wa, {
                            className: "twitch-prime-fortnite__container"
                        }, l.createElement(k.Wa, {
                            className: "twitch-prime-fortnite"
                        }, l.createElement(g.a, {
                            renderOfferImage: !0
                        }, this.renderDescription()), l.createElement(v, null), this.renderCTAs()), l.createElement(b.a, {
                            hash: this.props.location.hash.replace("#", "")
                        }), l.createElement(y.a, {
                            partnerSocialLink: "https://twitter.com/FortniteGame",
                            partnerSocialText: "@FortniteGame"
                        }))
                    }, t
                }(l.Component),
                F = Object(m.compose)(Object(w.b)("TwitchPrimeFortnitePage", {
                    destination: h.a.TwitchPrimeFortnitePage
                }), Object(p.a)(T), Object(u.a)({
                    location: f.PageviewLocation.TwitchPrimeFortnitePage
                }))(_);
            var j = Object(i.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(a.e)(o.a.TopNavLoginButton)
                    }
                }, e)
            })(F);
            n.d(t, "TwitchPrimeFortnitePage", function() {
                return j
            })
        },
        E8KT: function(e, t, n) {},
        "Hb/J": function(e, t, n) {},
        Ibv5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TwitchPrime_Page_Fortnite_RENAME1"
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
                    end: 71
                }
            };
            n.loc.source = {
                body: "query TwitchPrime_Page_Fortnite_RENAME1 {\ncurrentUser {\nid\nhasPrime\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QkMI: function(e, t, n) {},
        UWXE: function(e, t, n) {},
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                o = n("q1tI"),
                a = n("wIs1"),
                c = n("/7QA");

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
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var o = r.referenceTracking,
                                        a = o.content,
                                        l = o.medium,
                                        m = o.content_index,
                                        s = o.email_id;
                                    c.p.tracking.trackPageview(i.__assign({
                                        content: a,
                                        medium: l,
                                        content_index: m,
                                        email_id: s,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
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
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
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
                    return Object(a.a)(n)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        igVx: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("i8i4"),
                a = n("/7QA"),
                c = n("Ue10"),
                l = (n("2MIk"), function(e) {
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
                        }, r.createElement(c.yb, {
                            className: "twitch-prime-faq",
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, r.createElement(c.mb, {
                            centered: !0
                        }, r.createElement(c.Ia, {
                            justifyContent: c.Va.Center
                        }, r.createElement(c.P, {
                            cols: {
                                default: 12,
                                sm: 10,
                                md: 8,
                                lg: 7,
                                xl: 6
                            }
                        }, r.createElement(c.Wa, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: c.Kb.Center,
                            fullWidth: !0
                        }, r.createElement(c.W, {
                            type: c.Ob.H2,
                            bold: !0
                        }, Object(a.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(a.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(a.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(a.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(a.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(a.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(a.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(a.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                            "x:link": function(e) {
                                return r.createElement(c.U, {
                                    to: "http://www.twitchprime.com"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(a.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(a.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                            "x:link": function(e) {
                                return r.createElement(c.U, {
                                    to: "https://www.epicgames.com/account/connected"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(a.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(a.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(a.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(a.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(a.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(a.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(a.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                            "x:link": function(e) {
                                return r.createElement(c.U, {
                                    to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), r.createElement(c.Wa, {
                            margin: {
                                y: 2
                            }
                        }, r.createElement(c.z, {
                            linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                            fullWidth: !0
                        }, Object(a.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                    }, t.prototype.renderQuestion = function(e, t) {
                        return r.createElement("div", {
                            id: t,
                            ref: t
                        }, r.createElement(c.Wa, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(c.W, {
                            type: c.Ob.H4,
                            bold: !0
                        }, e)))
                    }, t.prototype.renderAnswer = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return 1 === e.length ? r.createElement(c.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.W, null, e[0])) : r.createElement(c.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.Xb, null, r.createElement("ul", null, e.map(function(e) {
                            return r.createElement("li", {
                                key: e
                            }, r.createElement(c.W, null, e))
                        }))))
                    }, t.prototype.renderAnswerWithLink = function(e) {
                        return r.createElement(c.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.W, null, e))
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        jmDq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("GnwI"),
                c = n("Ue10"),
                l = (n("QkMI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                        return r.createElement(c.Wa, {
                            className: "prime-footer",
                            position: c.eb.Relative
                        }, r.createElement(c.yb, {
                            position: c.eb.Absolute,
                            justifyContent: c.Va.Center,
                            alignItems: c.f.Center,
                            className: "twitter-container"
                        }, r.createElement(c.nb, {
                            asset: c.ob.Twitter,
                            width: 40,
                            height: 40,
                            type: c.pb.Prime
                        })), r.createElement(c.yb, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "social-twitch-prime",
                            padding: 4
                        }, r.createElement(c.Wa, {
                            className: "prime-footer__twitter-links",
                            display: c.X.Flex,
                            justifyContent: e ? c.Va.Between : c.Va.Center
                        }, r.createElement(c.U, {
                            to: "https://twitter.com/TwitchPrime",
                            targetBlank: !0
                        }, r.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ba.Size5,
                            "data-a-target": "prime-footer-twitter-link"
                        }, Object(o.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && r.createElement(c.U, {
                            to: this.props.partnerSocialLink,
                            targetBlank: !0
                        }, r.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ba.Size5
                        }, this.props.partnerSocialText)))), r.createElement(c.yb, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: {
                                top: 2
                            },
                            className: "prime-footer-links"
                        }, r.createElement(c.yb, {
                            padding: 2
                        }, r.createElement(c.U, {
                            to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-terms-link"
                        }, Object(o.d)("Terms", "PrimeSubsiteFooter"))), r.createElement(c.yb, {
                            padding: 2
                        }, r.createElement(c.U, {
                            to: "https://www.amazon.com/twitchprivacy",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-privacy-link"
                        }, Object(o.d)("Privacy Policy", "PrimeSubsiteFooter"))), r.createElement(c.yb, {
                            padding: 2
                        }, r.createElement(c.U, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-guide-link"
                        }, Object(o.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                    }, t
                }(r.Component)),
                m = Object(a.b)("PrimeFooter", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, "a", function() {
                return m
            })
        },
        nk94: function(e, t, n) {},
        osOq: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("GnwI"),
                o = n("Ue10"),
                a = (n("Hb/J"), function(e) {
                    return i.createElement(o.Wa, {
                        display: o.X.Flex,
                        justifyContent: o.Va.Center
                    }, i.createElement(o.Wa, {
                        className: "twitch-prime-call-to-action " + e.className,
                        textAlign: o.Kb.Center,
                        alignItems: o.f.Center,
                        display: o.X.Flex,
                        flexDirection: o.Z.Column,
                        justifyContent: o.Va.Around,
                        margin: 2
                    }, i.createElement(o.Oa, {
                        "data-test-selector": e.dataTestSelector,
                        "data-a-selector": e.dataASelector,
                        padding: {
                            x: 2
                        },
                        alignItems: o.f.Center,
                        display: o.X.Flex,
                        flexDirection: o.Z.Column,
                        justifyContent: o.Va.Center,
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement("a", {
                        href: e.href,
                        onClick: e.onClick,
                        className: "twitch-prime-call-to-action__link"
                    }, i.createElement(o.Wa, {
                        className: "fortnite-bold"
                    }, i.createElement(o.W, {
                        type: o.Ob.H2,
                        transform: o.Nb.Uppercase,
                        bold: !0
                    }, e.title)), e.body && i.createElement(o.Wa, {
                        margin: {
                            y: 1
                        },
                        className: "twitch-prime-call-to-action__body"
                    }, i.createElement(o.W, {
                        type: o.Ob.P,
                        transform: o.Nb.Uppercase
                    }, e.body))))))
                }),
                c = Object(r.b)("TwitchPrimeCallToAction", {
                    autoReportInteractive: !0
                })(a);
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return c
            })
        },
        uzin: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                o = n("q1tI"),
                a = n("/7QA"),
                c = n("GnwI"),
                l = n("Ue10"),
                m = (n("E8KT"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOfferImage = function() {
                            return o.createElement(l.Wa, {
                                textAlign: l.Kb.Center,
                                breakpointMedium: {
                                    textAlign: l.Kb.Right
                                },
                                className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                            }, o.createElement(l.S, {
                                alt: Object(a.d)("Offer items", "TwitchPrimeBrandedHeader"),
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
                        return o.createElement(l.Wa, {
                            className: "twitch-prime-fortnite__header__container",
                            padding: {
                                x: 1,
                                top: 1
                            }
                        }, o.createElement(l.Wa, {
                            className: e
                        }, o.createElement(l.Wa, {
                            className: "twitch-prime-fortnite__header",
                            display: l.X.Flex,
                            alignItems: l.f.End,
                            justifyContent: l.Va.Center,
                            flexWrap: l.Aa.Wrap,
                            textAlign: l.Kb.Left,
                            "data-test-selector": "twitch-prime-fortnite-header",
                            margin: {
                                y: 0,
                                x: "auto"
                            },
                            padding: {
                                x: 1
                            }
                        }, o.createElement(l.Wa, {
                            textAlign: l.Kb.Center,
                            breakpointMedium: {
                                textAlign: l.Kb.Left
                            },
                            breakpointLarge: {
                                margin: {
                                    bottom: 5
                                },
                                padding: {
                                    left: 5
                                }
                            },
                            alignSelf: l.g.Center,
                            className: "twitch-prime-fortnite__header__section"
                        }, o.createElement(l.Wa, {
                            className: t,
                            margin: {
                                y: 2
                            }
                        }, o.createElement("img", {
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                        })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                    }, t
                }(o.Component)),
                s = Object(c.b)("TwitchPrimeBrandedHeader", {
                    autoReportInteractive: !0
                })(m);
            n.d(t, !1, function() {
                return "twitch-prime-fortnite-header"
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return s
            })
        }
    }
]);