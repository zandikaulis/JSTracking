(window.webpackJsonp = window.webpackJsonp || []).push([
    [104], {
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("cr+I"),
                a = n("q1tI"),
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
                                    "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, o.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = o.referenceTracking,
                                        r = a.content,
                                        s = a.medium,
                                        p = a.content_index,
                                        d = a.email_id;
                                    c.o.tracking.trackPageview(i.__assign({
                                        content: r,
                                        medium: s,
                                        content_index: p,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                        }
                        return i.__extends(r, n), r.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, r.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, r.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, r.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? o.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = o.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, r
                    }(a.Component);
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
            var i = n("/MKj"),
                o = n("kRBY"),
                a = n("q1tI"),
                r = n("mLw1"),
                c = n("fvjX"),
                s = n("/7QA"),
                p = n("V+GM"),
                d = n("NvVO"),
                m = n("2xye"),
                u = n("GnwI"),
                l = n("Ue10"),
                g = Object(c.compose)(Object(u.c)("DevCompanyAccessPending", {
                    autoReportInteractive: !0,
                    destination: d.a.DevSiteApplicationSubmitted
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteCompanyApplicationSubmitted
                }))(function(e) {
                    return e.isLoggedIn ? a.createElement(l.Va, {
                        className: "dev-company-access-pending",
                        fullWidth: !0,
                        margin: {
                            top: 3
                        }
                    }, a.createElement(l.lb, {
                        centered: !0
                    }, a.createElement(l.Va, {
                        textAlign: l.Jb.Center,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(l.V, {
                        type: l.Nb.H2
                    }, Object(s.d)("Your request is in progress!", "DevCompanyRequestPending"))), a.createElement(l.Va, {
                        textAlign: l.Jb.Center,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(l.V, null, Object(s.d)("Please expect your access in 2-3 business days while we confirm your authorization to manage the game titles of the company you specified. We will send you a confirmation email using the address you provided. Be sure to check your spam filter if you haven't received a response in that timeframe.", "DevCompanyRequestPending"))), a.createElement(l.Va, {
                        textAlign: l.Jb.Center
                    }, a.createElement(l.T, {
                        to: "/console"
                    }, Object(s.d)("Click here to return to your dashboard!", "DevCompanyRequestPending"))))) : a.createElement(r.a, {
                        to: "/login"
                    })
                });
            var h = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e)
                }
            })(g);
            n.d(t, "DevCompanyAccessPendingPage", function() {
                return h
            })
        }
    }
]);