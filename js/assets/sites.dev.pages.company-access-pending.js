(window.webpackJsonp = window.webpackJsonp || []).push([
    [105], {
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("cr+I"),
                o = n("q1tI"),
                r = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function r(t) {
                            var a = n.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, a.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var o = a.referenceTracking,
                                        r = o.content,
                                        s = o.medium,
                                        p = o.content_index,
                                        d = o.email_id;
                                    c.p.tracking.trackPageview(i.__assign({
                                        content: r,
                                        medium: s,
                                        content_index: p,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return i.__extends(r, n), r.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, r.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, r.prototype.render = function() {
                            return o.createElement(t, i.__assign({}, this.props))
                        }, r.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    o = a.stringify(t);
                                o.length > 0 && (i = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, r
                    }(o.Component);
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
                a = n("kRBY"),
                o = n("q1tI"),
                r = n("mLw1"),
                c = n("fvjX"),
                s = n("/7QA"),
                p = n("V+GM"),
                d = n("NvVO"),
                m = n("2xye"),
                u = n("GnwI"),
                l = n("Ue10"),
                g = Object(c.compose)(Object(u.b)("DevCompanyAccessPending", {
                    autoReportInteractive: !0,
                    destination: d.a.DevSiteApplicationSubmitted
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteCompanyApplicationSubmitted
                }))(function(e) {
                    return e.isLoggedIn ? o.createElement(l.Xa, {
                        className: "dev-company-access-pending",
                        fullWidth: !0,
                        margin: {
                            top: 3
                        }
                    }, o.createElement(l.rb, {
                        centered: !0
                    }, o.createElement(l.Xa, {
                        textAlign: l.Rb.Center,
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(l.W, {
                        type: l.Vb.H2
                    }, Object(s.d)("Your request is in progress!", "DevCompanyRequestPending"))), o.createElement(l.Xa, {
                        textAlign: l.Rb.Center,
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(l.W, null, Object(s.d)("Please expect your access in 2-3 business days while we confirm your authorization to manage the game titles of the company you specified. We will send you a confirmation email using the address you provided. Be sure to check your spam filter if you haven't received a response in that timeframe.", "DevCompanyRequestPending"))), o.createElement(l.Xa, {
                        textAlign: l.Rb.Center
                    }, o.createElement(l.U, {
                        to: "/console"
                    }, Object(s.d)("Click here to return to your dashboard!", "DevCompanyRequestPending"))))) : o.createElement(r.a, {
                        to: "/login"
                    })
                });
            var h = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(a.f)(e)
                }
            })(g);
            n.d(t, "DevCompanyAccessPendingPage", function() {
                return h
            })
        }
    }
]);