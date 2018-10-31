(window.webpackJsonp = window.webpackJsonp || []).push([
    [168], {
        "2MIk": function(e, t, n) {},
        C1jT: function(e, t, n) {},
        E8KT: function(e, t, n) {},
        "Hb/J": function(e, t, n) {},
        IyqF: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("oJmH"),
                a = n("mLw1"),
                c = n("/7QA"),
                l = n("LA8z"),
                m = n("yR8l"),
                s = n("V+GM"),
                d = n("geRD"),
                p = n("NvVO"),
                u = n("2xye"),
                h = n("GnwI"),
                f = n("igVx"),
                w = n("jmDq"),
                g = n("SStD"),
                b = n("O4UZ"),
                y = n("uzin"),
                P = n("osOq"),
                k = n("nNY8"),
                C = n("Ue10"),
                v = n("MXiy"),
                E = (n("C1jT"), "twitch-prime__call-to-action"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: void 0,
                            claiming: !1
                        }, t.renderLinkExperience = function() {
                            return r.createElement(C.Xa, null, r.createElement(C.Xa, {
                                className: "twitch-prime-fortnite-linking__body",
                                textAlign: C.Ob.Center,
                                margin: {
                                    y: 2
                                }
                            }, r.createElement(C.W, {
                                type: C.Sb.H1,
                                transform: C.Rb.Uppercase,
                                color: C.O.Link
                            }, Object(c.d)("Link your account", "TwitchPrimeFortniteLinking"))), !t.state.claiming && t.renderLinkCallToAction(), t.state.claiming && t.renderSpinner())
                        }, t.renderErrorExperience = function() {
                            return r.createElement(C.Xa, null, r.createElement(C.Xa, {
                                className: "twitch-prime-fortnite-linking__error__body",
                                textAlign: C.Ob.Center,
                                margin: {
                                    y: 2
                                }
                            }, r.createElement(C.W, {
                                type: C.Sb.H1,
                                transform: C.Rb.Uppercase,
                                color: C.O.Link
                            }, Object(c.d)("Oops, something happened", "TwitchPrimeFortniteLinking")), r.createElement(C.Xa, {
                                className: "twitch-prime-fortnite-linking__after",
                                textAlign: C.Ob.Center,
                                margin: {
                                    y: 2
                                }
                            }, r.createElement(C.W, {
                                type: C.Sb.H3,
                                color: C.O.Link
                            }, Object(b.g)(t.state.error))), t.renderRefreshCallToAction()))
                        }, t.renderRefreshCallToAction = function() {
                            return r.createElement(P.a, {
                                className: "twitch-prime-call-to-action--refresh",
                                title: Object(c.d)("Click here to refresh", "TwitchPrimeFortniteLinking"),
                                body: Object(c.d)("Refresh to try claiming and linking your account again", "TwitchPrimeFortniteLinking"),
                                onClick: t.claimOffer,
                                dataTestSelector: E,
                                href: "/prime/fortnite/link"
                            })
                        }, t.renderLinkCallToAction = function() {
                            return r.createElement(P.a, {
                                className: "twitch-prime-call-to-action--link",
                                title: Object(c.d)("Claim loot", "TwitchPrimeFortniteLinking"),
                                body: Object(c.d)("Link your Epic account to your Twitch Prime account here", "TwitchPrimeFortniteLinking"),
                                onClick: t.claimOffer,
                                dataTestSelector: E,
                                href: "#"
                            })
                        }, t.renderSpinner = function() {
                            return r.createElement(C.Xa, {
                                className: "twitch-prime-fortnite-linking__spinner",
                                display: C.X.Flex,
                                alignItems: C.f.Center,
                                justifyContent: C.Wa.Center
                            }, r.createElement(C.Za, null))
                        }, t.claimOffer = function(e) {
                            var n = t.getCurrentUser();
                            e.nativeEvent.stopImmediatePropagation(), t.setState({
                                claiming: !0
                            });
                            var i = t.props.data;
                            if (!i.loading && !i.error && n && n.id) {
                                var r = c.b.get(k.b, k.a),
                                    o = Object(d.a)({
                                        offerID: r
                                    });
                                t.props.claimPrimeOffer(o).then(function(e) {
                                    var n = (e.data || {}).claimPrimeOffer || {},
                                        i = n.self || {},
                                        r = n.error || {};
                                    if (i.hasEntitlement) {
                                        var o = c.b.get("twitch_prime_fortnite_link_url", "https://www.epicgames.com");
                                        window.location.replace(o)
                                    }
                                    if (r.code) {
                                        var a = b.b[r.code];
                                        t.setState({
                                            claiming: !1,
                                            error: a || b.b.UNKNOWN_ERROR
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        claiming: !1,
                                        error: b.b.UNKNOWN_ERROR
                                    })
                                })
                            }
                        }, t.getCurrentUser = function() {
                            var e = t.props.data;
                            return e && e.currentUser ? e.currentUser : null
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
                        return e.error || !t ? r.createElement(a.a, {
                            to: "/prime/fortnite"
                        }) : r.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            justifyContent: C.Wa.Center
                        }, r.createElement(C.Xa, {
                            className: "twitch-prime-fortnite twitch-prime-fortnite-linking"
                        }, r.createElement(C.Xa, {
                            className: "twitch-prime-fortnite-linking__header",
                            fullWidth: !0
                        }, r.createElement(y.a, {
                            alwaysCentered: !0
                        })), !this.state.error && this.renderLinkExperience(), this.state.error && this.renderErrorExperience()), r.createElement(f.a, {
                            hash: this.props.location.hash.replace("#", "")
                        }), r.createElement(w.a, {
                            partnerSocialLink: "https://twitter.com/FortniteGame",
                            partnerSocialText: "@FortniteGame"
                        }))
                    }, t
                }(r.Component),
                _ = Object(o.compose)(Object(h.b)("TwitchPrimeFortniteLinkingPage", {
                    destination: p.a.TwitchPrimeFortniteLinkingPage
                }), Object(m.a)(v), Object(m.a)(g, {
                    name: "claimPrimeOffer"
                }), Object(s.a)({
                    location: u.PageviewLocation.TwitchPrimeFortniteLinkingPage
                }))(O);
            n.d(t, "CALL_TO_ACTION_SELECTOR", function() {
                return E
            }), n.d(t, "TwitchPrimeFortniteLinkingPage", function() {
                return _
            })
        },
        MXiy: function(e, t) {
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
        QkMI: function(e, t, n) {},
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
                        this.scrollToFaqQuestionId()
                    }, t.prototype.componentDidMount = function() {
                        this.scrollToFaqQuestionId()
                    }, t.prototype.render = function() {
                        return r.createElement("div", {
                            id: "faq",
                            ref: "faq"
                        }, r.createElement(c.Cb, {
                            className: "twitch-prime-faq",
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, r.createElement(c.pb, {
                            centered: !0
                        }, r.createElement(c.Ja, {
                            justifyContent: c.Wa.Center
                        }, r.createElement(c.P, {
                            cols: {
                                default: 12,
                                sm: 10,
                                md: 8,
                                lg: 7,
                                xl: 6
                            }
                        }, r.createElement(c.Xa, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: c.Ob.Center,
                            fullWidth: !0
                        }, r.createElement(c.W, {
                            type: c.Sb.H2,
                            bold: !0
                        }, Object(a.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(a.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(a.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(a.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswers(Object(a.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(a.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(a.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(a.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(a.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(a.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(a.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(a.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
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
                        }, "PrimeFAQComponent")), r.createElement(c.Xa, {
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
                        }, r.createElement(c.Xa, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(c.W, {
                            type: c.Sb.H4,
                            bold: !0
                        }, e)))
                    }, t.prototype.renderAnswer = function(e) {
                        return r.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.W, null, e))
                    }, t.prototype.renderAnswers = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return r.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.bc, null, r.createElement("ul", null, e.map(function(e) {
                            return r.createElement("li", {
                                key: e
                            }, r.createElement(c.W, null, e))
                        }))))
                    }, t.prototype.renderAnswerWithLink = function(e) {
                        return r.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.W, null, e))
                    }, t.prototype.scrollToFaqQuestionId = function() {
                        var e = this.props.hash,
                            t = e && o.findDOMNode(this.refs[e]);
                        t && t.scrollIntoView()
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
                        return r.createElement(c.Xa, {
                            className: "prime-footer",
                            position: c.hb.Relative
                        }, r.createElement(c.Cb, {
                            position: c.hb.Absolute,
                            justifyContent: c.Wa.Center,
                            alignItems: c.f.Center,
                            className: "twitter-container"
                        }, r.createElement(c.qb, {
                            asset: c.rb.Twitter,
                            width: 40,
                            height: 40,
                            type: c.sb.Prime
                        })), r.createElement(c.Cb, {
                            display: c.X.Flex,
                            justifyContent: c.Wa.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "social-twitch-prime",
                            padding: 4
                        }, r.createElement(c.Xa, {
                            className: "prime-footer__twitter-links",
                            display: c.X.Flex,
                            justifyContent: e ? c.Wa.Between : c.Wa.Center
                        }, r.createElement(c.U, {
                            to: "https://twitter.com/TwitchPrime",
                            targetBlank: !0
                        }, r.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ca.Size5,
                            "data-a-target": "prime-footer-twitter-link"
                        }, Object(o.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && r.createElement(c.U, {
                            to: this.props.partnerSocialLink,
                            targetBlank: !0
                        }, r.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ca.Size5
                        }, this.props.partnerSocialText)))), r.createElement(c.Cb, {
                            display: c.X.Flex,
                            justifyContent: c.Wa.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: {
                                top: 2
                            },
                            className: "prime-footer-links"
                        }, r.createElement(c.Cb, {
                            padding: 2
                        }, r.createElement(c.U, {
                            to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-terms-link"
                        }, Object(o.d)("Terms", "PrimeSubsiteFooter"))), r.createElement(c.Cb, {
                            padding: 2
                        }, r.createElement(c.U, {
                            to: "https://www.amazon.com/twitchprivacy",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-privacy-link"
                        }, Object(o.d)("Privacy Policy", "PrimeSubsiteFooter"))), r.createElement(c.Cb, {
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
        nNY8: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            });
            n("/7QA");
            var i = "twitch_prime_fortnite_offer_id",
                r = "c0b1816d-300b-d234-828e-59e76119bffe"
        },
        osOq: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("GnwI"),
                o = n("Ue10"),
                a = (n("Hb/J"), function(e) {
                    return i.createElement(o.Xa, {
                        display: o.X.Flex,
                        justifyContent: o.Wa.Center
                    }, i.createElement(o.Xa, {
                        className: "twitch-prime-call-to-action " + e.className,
                        textAlign: o.Ob.Center,
                        alignItems: o.f.Center,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        justifyContent: o.Wa.Around,
                        margin: 2
                    }, i.createElement(o.Pa, {
                        "data-test-selector": e.dataTestSelector,
                        "data-a-selector": e.dataASelector,
                        padding: {
                            x: 2
                        },
                        alignItems: o.f.Center,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        justifyContent: o.Wa.Center,
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement("a", {
                        href: e.href,
                        onClick: e.onClick,
                        className: "twitch-prime-call-to-action__link"
                    }, i.createElement(o.Xa, {
                        className: "fortnite-bold"
                    }, i.createElement(o.W, {
                        type: o.Sb.H2,
                        transform: o.Rb.Uppercase,
                        bold: !0
                    }, e.title)), e.body && i.createElement(o.Xa, {
                        margin: {
                            y: 1
                        },
                        className: "twitch-prime-call-to-action__body"
                    }, i.createElement(o.W, {
                        type: o.Sb.P,
                        transform: o.Rb.Uppercase
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
                            return o.createElement(l.Xa, {
                                textAlign: l.Ob.Center,
                                breakpointMedium: {
                                    textAlign: l.Ob.Right
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
                        return o.createElement(l.Xa, {
                            className: "twitch-prime-fortnite__header__container",
                            padding: {
                                x: 1,
                                top: 1
                            }
                        }, o.createElement(l.Xa, {
                            className: e
                        }, o.createElement(l.Xa, {
                            className: "twitch-prime-fortnite__header",
                            display: l.X.Flex,
                            alignItems: l.f.End,
                            justifyContent: l.Wa.Center,
                            flexWrap: l.Ba.Wrap,
                            textAlign: l.Ob.Left,
                            "data-test-selector": "twitch-prime-fortnite-header",
                            margin: {
                                y: 0,
                                x: "auto"
                            },
                            padding: {
                                x: 1
                            }
                        }, o.createElement(l.Xa, {
                            textAlign: l.Ob.Center,
                            breakpointMedium: {
                                textAlign: l.Ob.Left
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
                        }, o.createElement(l.Xa, {
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