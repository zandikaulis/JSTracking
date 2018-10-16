(window.webpackJsonp = window.webpackJsonp || []).push([
    [106], {
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var i = n("L9xt");
            n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return i.PageviewContent
            }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return i.PageviewLocation
            }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return i.PageviewMedium
            }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return i.SpadeEventType
            })
        },
        Pi1p: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                o = n("fvjX"),
                a = n("V+GM"),
                r = n("NvVO"),
                c = n("kRBY"),
                s = n("GnwI"),
                l = n("3lt/"),
                p = n("mrSG"),
                d = n("q1tI"),
                u = n("mf+E"),
                g = n("/7QA"),
                m = n("kYGc"),
                f = n("ctvI"),
                h = n("Ue10"),
                v = (n("YCie"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.login = function(e) {
                            e.preventDefault();
                            var t = Object(f.a)({
                                initialTab: m.a.Login,
                                forceVerify: g.a.authSettings.forceVerify
                            });
                            window.location.assign(t)
                        }, t
                    }
                    return p.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? d.createElement(u.a, {
                            to: "/"
                        }) : d.createElement(h.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.X.Flex,
                            flexDirection: h.Z.Column,
                            position: h.eb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            breakpointSmall: {
                                flexDirection: h.Z.Row
                            },
                            className: "dev-login-page"
                        }, d.createElement(h.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            display: h.X.Flex,
                            background: h.r.Accent,
                            justifyContent: h.Va.Center,
                            alignItems: h.f.Center,
                            className: "dev-login-page__logo-panel"
                        }, d.createElement(h.U, {
                            to: "/"
                        }, d.createElement(h.xb, {
                            color: h.O.Overlay
                        }, d.createElement(h.nb, {
                            asset: h.ob.LogoTwitchDevelopers,
                            type: h.pb.Inherit,
                            width: 220,
                            height: 142
                        })))), d.createElement(h.Wa, {
                            display: h.X.Flex,
                            flexGrow: 1,
                            flexShrink: 1,
                            className: "dev-login-page__login-panel",
                            justifyContent: h.Va.Center,
                            alignItems: h.f.Center
                        }, d.createElement(h.Wa, {
                            padding: {
                                x: 4
                            }
                        }, d.createElement(h.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(h.W, {
                            type: h.Nb.P,
                            fontSize: h.Ba.Size3
                        }, Object(g.d)("Welcome to the Twitch Developer Console, where code enhances live streaming experiences", "DevLogin"))), d.createElement(h.z, {
                            onClick: this.login,
                            size: h.D.Large,
                            icon: h.ob.LogoGlitch,
                            "data-a-target": "glass-login-button"
                        }, Object(g.d)("Login with Twitch", "DevLogin")))))
                    }, t
                }(d.Component));
            var _ = Object(o.compose)(Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }), Object(s.b)("DevLoginPage", {
                autoReportInteractive: !0,
                destination: r.a.DevSiteLogin
            }), Object(a.a)({
                location: l.PageviewLocation.DevSiteLogin
            }))(v);
            n.d(t, "DevLoginPage", function() {
                return _
            })
        },
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
                                        l = a.content_index,
                                        p = a.email_id;
                                    c.p.tracking.trackPageview(i.__assign({
                                        content: r,
                                        medium: s,
                                        content_index: l,
                                        email_id: p,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
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
        YCie: function(e, t, n) {}
    }
]);