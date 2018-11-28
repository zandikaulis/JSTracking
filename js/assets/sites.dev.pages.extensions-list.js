(window.webpackJsonp = window.webpackJsonp || []).push([
    [220], {
        "2uCZ": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("fvjX"),
                o = n("/7QA"),
                c = n("V+GM"),
                s = n("NvVO"),
                l = n("2xye"),
                p = n("GnwI"),
                d = n("Ue10"),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Ya, null, a.createElement(d.sb, {
                            centered: !0
                        }, a.createElement(d.Ya, null, a.createElement(d.Qa, {
                            margin: {
                                bottom: 2
                            },
                            display: d.X.Flex,
                            justifyContent: d.Xa.Between
                        }, a.createElement("header", null, a.createElement(d.Ya, {
                            display: d.X.Flex
                        }, a.createElement(d.W, {
                            type: d.Wb.P
                        }, Object(o.d)("Twitch Extensions allow broadcasters to embed interactive, custom, third-party content on their channel page.", "ExtensionsListPage"))))), a.createElement(d.Ib, null, a.createElement(d.Lb, null, a.createElement(d.Mb, {
                            label: Object(o.d)("Name", "ExtensionList")
                        }), a.createElement(d.Mb, {
                            label: Object(o.d)("Type", "ExtensionList")
                        }), a.createElement(d.Mb, {
                            label: Object(o.d)("Version", "ExtensionList")
                        })), a.createElement(d.Jb, null)))))
                    }, t
                }(a.Component),
                u = Object(r.compose)(Object(p.b)("ExtensionsListPage", {
                    autoReportInteractive: !0,
                    destination: s.a.DevSiteExtensionsList
                }), Object(c.a)({
                    location: l.PageviewLocation.DevSiteExtensionsList
                }))(m);
            n.d(t, "DevExtensionsListPage", function() {
                return u
            })
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("cr+I"),
                r = n("q1tI"),
                o = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var a = n.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, a.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var r = a.referenceTracking,
                                        o = r.content,
                                        s = r.medium,
                                        l = r.content_index,
                                        p = r.email_id;
                                    c.p.tracking.trackPageview(i.__assign({
                                        content: o,
                                        medium: s,
                                        content_index: l,
                                        email_id: p,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return r.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    r = a.stringify(t);
                                r.length > 0 && (i = "?" + r), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, o
                    }(r.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        }
    }
]);