(window.webpackJsonp = window.webpackJsonp || []).push([
    [103], {
        "V+GM": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                o = n("cr+I"),
                i = n("q1tI"),
                r = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function r(t) {
                            var o = n.call(this, t) || this;
                            return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                                if (!(o.tracked || e.skip && e.skip(o.props))) {
                                    o.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var n = a.__assign({}, o.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var i = o.referenceTracking,
                                        r = i.content,
                                        s = i.medium,
                                        p = i.content_index,
                                        m = i.email_id;
                                    c.p.tracking.trackPageview(a.__assign({
                                        content: r,
                                        medium: s,
                                        content_index: p,
                                        email_id: m,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                        }
                        return a.__extends(r, n), r.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, r.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, r.prototype.render = function() {
                            return i.createElement(t, a.__assign({}, this.props))
                        }, r.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? o.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var a = "",
                                    i = o.stringify(t);
                                i.length > 0 && (a = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                            return n
                        }, r
                    }(i.Component);
                    return Object(r.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        p3ma: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                o = n("kRBY"),
                i = n("dEJ+"),
                r = n("q1tI"),
                c = n("mLw1"),
                s = n("fvjX"),
                p = n("/7QA"),
                m = n("V+GM"),
                d = n("NvVO"),
                l = n("2xye"),
                u = n("GnwI"),
                g = n("Ue10");

            function y(e) {
                return r.createElement(g.sb, {
                    centered: !0
                }, r.createElement(g.Ya, {
                    textAlign: g.Sb.Center,
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(g.W, null, e)))
            }
            var _ = Object(s.compose)(Object(u.b)("DevCompanyAccessPending", {
                autoReportInteractive: !0,
                destination: d.a.DevSiteApplicationSubmitted
            }), Object(m.a)({
                location: l.PageviewLocation.DevSiteCompanyApplicationSubmitted
            }))(function(e) {
                return e.isLoggedIn ? r.createElement(g.Ya, {
                    className: "dev-company-access-pending",
                    fullWidth: !0,
                    margin: {
                        top: 3
                    }
                }, function(e) {
                    switch (e.companyLoadState) {
                        case i.a.NOT_LOADED:
                            return r.createElement(g.ab, null);
                        case i.a.LOADED_BUT_PENDING_REVIEW:
                            return function(e) {
                                return r.createElement(g.sb, {
                                    centered: !0
                                }, r.createElement(g.Ya, {
                                    textAlign: g.Sb.Center,
                                    margin: {
                                        bottom: 2
                                    }
                                }, r.createElement(g.W, {
                                    type: g.Wb.H2
                                }, Object(p.d)("Your request is in progress!", "DevCompanyRequestPending"))), r.createElement(g.Ya, {
                                    textAlign: g.Sb.Center,
                                    margin: {
                                        bottom: 2
                                    }
                                }, r.createElement(g.W, {
                                    bold: !0,
                                    type: g.Wb.Span
                                }, Object(p.d)("Company Name", "DevCompanyRequestPending") + ": "), r.createElement(g.W, {
                                    type: g.Wb.Span
                                }, e.company_name), r.createElement("br", null), r.createElement(g.W, {
                                    bold: !0,
                                    type: g.Wb.Span
                                }, Object(p.d)("Email", "DevCompanyRequestPending") + ": "), r.createElement(g.W, {
                                    type: g.Wb.Span
                                }, e.contact_email)), r.createElement(g.Ya, {
                                    textAlign: g.Sb.Center,
                                    margin: {
                                        bottom: 2
                                    }
                                }, r.createElement(g.W, null, Object(p.d)("Please expect your access in 2-3 business days while we confirm your authorization to manage the game titles of the company you specified. We will send you a confirmation email using the address you provided. Be sure to check your spam filter if you haven't received a response in that timeframe.", "DevCompanyRequestPending"))), r.createElement(g.Ya, {
                                    textAlign: g.Sb.Center
                                }, r.createElement(g.U, {
                                    to: "/console"
                                }, Object(p.d)("Return to dashboard", "DevCompanyRequestPending"))))
                            }(e.companyPendingApplication);
                        case i.a.LOADED_WITH_INTERNAL_ERROR:
                            return y("Internal Error: " + e.companyLoadErrorMsg);
                        case i.a.LOADED_BUT_NOT_FOUND:
                            return y("No pending application. Register a company first.");
                        case i.a.LOADED:
                            return y("Company application approved.");
                        default:
                            return y("Unexpected company load state: " + e.companyLoadState)
                    }
                }(e)) : r.createElement(c.a, {
                    to: "/login"
                })
            });
            var b = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e),
                    companyLoadState: Object(i.e)(e),
                    company: Object(i.c)(e),
                    companyPendingApplication: Object(i.f)(e),
                    companyLoadErrorMsg: Object(i.d)(e)
                }
            })(_);
            n.d(t, "DevCompanyAccessPendingPage", function() {
                return b
            })
        }
    }
]);