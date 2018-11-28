(window.webpackJsonp = window.webpackJsonp || []).push([
    [230], {
        EDlC: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("fvjX"),
                a = n("/7QA"),
                s = n("V+GM"),
                c = n("NvVO"),
                p = n("2xye"),
                u = n("GnwI"),
                d = n("Ue10"),
                l = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {}, e
                    }
                    return i.__extends(e, t), e.prototype.render = function() {
                        return o.createElement(d.Fb, {
                            padding: {
                                x: 2,
                                y: 1
                            },
                            color: d.O.Alt2,
                            fontSize: d.Ca.Size7,
                            background: d.r.Base,
                            border: !0
                        }, Object(a.e)("This section displays the current status of your version in the Extension lifecycle. From here, you can change the status as well as manage specific details of this version. <x:link>Learn More</x:link>.", {
                            "x:link": function(t) {
                                return o.createElement(d.U, null, t)
                            }
                        }, "DevExtensionVersionStatus"))
                    }, e
                }(o.Component),
                m = Object(r.compose)(Object(u.b)("DevExtensionVersionStatus", {
                    autoReportInteractive: !0,
                    destination: c.a.DevSiteExtensionsVersionStatus
                }), Object(s.a)({
                    location: p.PageviewLocation.DevSiteExtensionsVersionStatus
                }))(l);
            n.d(e, "DevExtensionVersionStatusPresentation", function() {
                return l
            }), n.d(e, "DevExtensionVersionStatus", function() {
                return m
            })
        },
        "V+GM": function(t, e, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("cr+I"),
                r = n("q1tI"),
                a = n("wIs1"),
                s = n("/7QA");

            function c(t) {
                return function(e) {
                    var n = function(n) {
                        function a(e) {
                            var o = n.call(this, e) || this;
                            return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                                if (!(o.tracked || t.skip && t.skip(o.props))) {
                                    o.tracked = !0;
                                    var e = {};
                                    "function" == typeof t.properties ? e = t.properties(o.props) : t.properties && (e = i.__assign({}, t.properties));
                                    var n = i.__assign({}, o.props);
                                    n.location && n.location.state && (e.medium = n.location.state.medium, e.content = n.location.state.content, e.content_index = n.location.state.content_index, e.email_id = n.location.state.email_id);
                                    var r = o.referenceTracking,
                                        a = r.content,
                                        c = r.medium,
                                        p = r.content_index,
                                        u = r.email_id;
                                    s.p.tracking.trackPageview(i.__assign({
                                        content: a,
                                        medium: c,
                                        content_index: p,
                                        email_id: u,
                                        location: t.location
                                    }, e))
                                }
                            }, s.k.debug("pageViewTracking", t), e.rootLatencyTracker ? e.rootLatencyTracker.setLocation(t.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", t), o
                        }
                        return i.__extends(a, n), a.prototype.componentDidMount = function() {
                            var t = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(e, n) {
                                "REPLACE" !== n && (t.tracked = !1, t.referenceTracking = {})
                            })
                        }, a.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, a.prototype.render = function() {
                            return r.createElement(e, i.__assign({}, this.props))
                        }, a.prototype.stripTTParams = function(t) {
                            var e = "" !== t.search ? o.parse(t.search) : {},
                                n = {
                                    content: e.tt_content,
                                    content_index: e.tt_content_index,
                                    medium: e.tt_medium,
                                    email_id: e.tt_email_id
                                };
                            if (delete e.tt_content, delete e.tt_content_index, delete e.tt_medium, delete e.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    r = o.stringify(e);
                                r.length > 0 && (i = "?" + r), this.props.history.replace({
                                    pathname: t.pathname,
                                    hash: t.hash,
                                    search: i
                                })
                            }
                            return n
                        }, a
                    }(r.Component);
                    return Object(a.a)(n)
                }
            }
            n.d(e, "a", function() {
                return c
            })
        }
    }
]);