(window.webpackJsonp = window.webpackJsonp || []).push([
    [217], {
        DrWK: function(e, t, n) {
            "use strict";
            n.r(t);
            var o, i = n("mrSG"),
                a = n("cr+I"),
                r = n("q1tI"),
                s = n("/MKj"),
                c = n("mLw1"),
                l = n("fvjX"),
                d = n("/7QA"),
                p = n("l83E"),
                u = n.n(p),
                m = n("V+GM"),
                b = n("NvVO"),
                h = n("2xye"),
                E = n("kRBY"),
                f = n("GnwI"),
                g = n("coZW"),
                v = n("Ue10");
            ! function(e) {
                e[e.ContinueButton = 0] = "ContinueButton", e[e.BackButton = 1] = "BackButton"
            }(o || (o = {}));
            var x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.user) return r.createElement(c.a, {
                        to: "/login"
                    });
                    var e = "https://dev.twitch.tv/dashboard/extensions",
                        t = a.parse(this.props.location.search),
                        n = t.extensionId,
                        i = t.projectId;
                    return n && i && (e = "https://dev.twitch.tv/projects/" + n + "/files/" + i + "/edit"), r.createElement(v.sb, {
                        centered: !0
                    }, r.createElement(v.Ja, null, r.createElement(v.P, {
                        cols: {
                            default: 5,
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: 6,
                            xl: 4
                        }
                    }, r.createElement(v.Ya, {
                        display: v.X.Flex,
                        flexDirection: v.Aa.Column
                    }, r.createElement(v.Fb, {
                        margin: {
                            bottom: 1
                        },
                        display: v.X.Flex,
                        flexDirection: v.Aa.Row,
                        alignItems: v.f.Center
                    }, r.createElement(v.Fb, {
                        padding: {
                            right: 1
                        }
                    }, r.createElement(v.tb, {
                        asset: v.ub.LogoGlitch,
                        width: 50,
                        height: 50
                    })), r.createElement(v.W, {
                        type: v.Wb.H3
                    }, Object(d.d)("Earn revenue as an extension developer!", "DevExtensionsEnableMonetization"))), r.createElement(v.Fb, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(v.W, {
                        fontSize: v.Ca.Size4
                    }, Object(d.d)('Hello! Thanks for your interest in extension monetization. To earn revenue for your account or business, you will need to complete a one-time onboarding. If this is a non-monetized extension, return to the previous extensions details screen and indicate "no".', "DevExtensionsEnableMonetization"))), r.createElement(v.Fb, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(v.W, {
                        fontSize: v.Ca.Size4
                    }, Object(d.d)("In most cases, the interview process takes five minutes. Once completed, you will be eligible to receive revenue for any extensions you create.", "DevExtensionsEnableMonetization"))), r.createElement(v.Fb, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(v.z, {
                        linkTo: "https://twitch.tv/" + this.props.user.login + "/dashboard/settings/revenue",
                        onClick: Object(g.c)(g.a.ExtensionsEnableMonetizationContinue),
                        "data-test-selector": o.ContinueButton
                    }, Object(d.d)("Continue to Onboarding", "DevExtensionsEnableMonetization"))), r.createElement(v.Fb, {
                        margin: {
                            bottom: 3
                        }
                    }, r.createElement(v.U, {
                        to: e,
                        onClick: Object(g.c)(g.a.ExtensionsEnableMonetizationBack),
                        "data-test-selector": o.BackButton
                    }, Object(d.d)("Or, return to Extension details page", "DevExtensionsEnableMonetization"))))), r.createElement(v.P, {
                        cols: {
                            default: 4,
                            xs: 8,
                            sm: 8,
                            md: 5,
                            lg: 4,
                            xl: 4
                        }
                    }, r.createElement(v.Fb, {
                        background: v.r.Alt2
                    }, r.createElement(v.Ya, {
                        padding: {
                            top: 1,
                            left: 2,
                            right: 2
                        }
                    }, r.createElement(v.W, {
                        fontSize: v.Ca.Size5
                    }, Object(d.d)("Hey, listen! During Step 3 of the onboarding process, you will need to supply tax information of the individual or business that will accept any revenue earned on extensions created with this account. <x:link>Learn More</x:link>.", {
                        "x:link": function(e) {
                            return r.createElement(v.U, {
                                to: "https://dev.twitch.tv/docs/extensions/bits/",
                                onClick: Object(g.c)(g.a.ExtensionsEnableMonetizationLearnMore)
                            }, e)
                        }
                    }, "DevExtensionsEnableMonetization"))), r.createElement(v.Ya, {
                        display: v.X.Block,
                        textAlign: v.Sb.Center,
                        padding: {
                            left: 2,
                            right: 2,
                            bottom: 1,
                            top: 1
                        }
                    }, r.createElement(v.S, {
                        src: u.a,
                        alt: Object(d.d)("Tax Information Interview", "DevExtensionsEnableMonetization")
                    }))))))
                }, t
            }(r.Component);
            var k = Object(l.compose)(Object(s.connect)(function(e) {
                return {
                    isLoggedIn: Object(E.f)(e),
                    user: Object(E.e)(e)
                }
            }, null), Object(f.b)("DevExtensionsEnableMonetization", {
                autoReportInteractive: !0,
                destination: b.a.DevSiteExtensionsEnableMonetization
            }), Object(m.a)({
                location: h.PageviewLocation.DevSiteExtensionsEnableMonetization
            }))(x);
            n.d(t, "DevExtensionsEnableMonetizationPage", function() {
                return k
            })
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var o = n("mrSG"),
                i = n("cr+I"),
                a = n("q1tI"),
                r = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function r(t) {
                            var i = n.call(this, t) || this;
                            return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                                if (!(i.tracked || e.skip && e.skip(i.props))) {
                                    i.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = o.__assign({}, e.properties));
                                    var n = o.__assign({}, i.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = i.referenceTracking,
                                        r = a.content,
                                        c = a.medium,
                                        l = a.content_index,
                                        d = a.email_id;
                                    s.p.tracking.trackPageview(o.__assign({
                                        content: r,
                                        medium: c,
                                        content_index: l,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                        }
                        return o.__extends(r, n), r.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, r.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, r.prototype.render = function() {
                            return a.createElement(t, o.__assign({}, this.props))
                        }, r.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? i.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var o = "",
                                    a = i.stringify(t);
                                a.length > 0 && (o = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: o
                                })
                            }
                            return n
                        }, r
                    }(a.Component);
                    return Object(r.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        l83E: function(e, t, n) {
            e.exports = n.p + "assets/enable-monetization-c017c07fefc4142f71df.png"
        }
    }
]);