webpackJsonp([74], {
    "3Lxy": function(e, t) {},
    sxl2: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("RH2O"),
            o = n("Aj/L"),
            r = n("TToO"),
            c = n("GiK3"),
            s = n("CIox"),
            i = n("F8kA"),
            d = n("6sO2"),
            p = n("bZTi"),
            l = n("CSlQ"),
            h = n("Odds"),
            v = (n("3Lxy"), p.a.wrap(function() {
                return n.e(118).then(n.bind(null, "4ci7"))
            }, "DevOverviewPage")),
            m = p.a.wrap(function() {
                return n.e(97).then(n.bind(null, "c6GF"))
            }, "DevAppsPage"),
            b = p.a.wrap(function() {
                return n.e(117).then(n.bind(null, "lEOh"))
            }, "DevAppCreatePage"),
            u = p.a.wrap(function() {
                return n.e(116).then(n.bind(null, "Az3k"))
            }, "DevAppEditPage"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isActive = function(e, n) {
                        void 0 === n && (n = !1);
                        var a = t.props.match.params.tenant;
                        return !!a && (n ? a === e : a.indexOf(e) > -1)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? c.createElement(h._8, {
                        margin: {
                            x: 1,
                            bottom: 2
                        },
                        className: "dev-dashboard"
                    }, c.createElement(h._8, {
                        margin: {
                            y: 0,
                            x: "auto"
                        },
                        className: "dev-dashboard__container"
                    }, c.createElement("header", {
                        className: "dev-dashboard__header"
                    }, c.createElement(h._35, {
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 1
                        },
                        borderBottom: !0
                    }, c.createElement(h.Q, {
                        type: h._49.H2
                    }, Object(d.d)("Dashboard", "DevDashboard"))), c.createElement(h._8, {
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(h._37, null, c.createElement(h._36, {
                        linkTo: "https://dev.twitch.tv/dashboard",
                        active: this.isActive("", !0)
                    }, Object(d.d)("Overview", "DevDashboard")), c.createElement(h._36, {
                        linkTo: "https://dev.twitch.tv/dashboard/extensions",
                        active: this.isActive("extensions")
                    }, Object(d.d)("Extensions", "DevDashboard")), c.createElement(h._36, {
                        linkTo: "/console/apps",
                        active: this.isActive("apps")
                    }, Object(d.d)("Apps", "DevDashboard")), c.createElement(h._36, {
                        linkTo: "https://dev.twitch.tv/dashboard/games",
                        active: this.isActive("games")
                    }, Object(d.d)("Games", "DevDashboard")), c.createElement(h._36, {
                        linkTo: "https://dev.twitch.tv/dashboard/drops",
                        active: this.isActive("drops")
                    }, Object(d.d)("Drops", "DevDashboard"))))), c.createElement(h._8, {
                        display: h.R.Block
                    }, c.createElement(i.e, null, c.createElement(i.d, {
                        exact: !0,
                        path: "/console",
                        component: v
                    }), c.createElement(i.d, {
                        exact: !0,
                        path: "/console/apps",
                        component: m
                    }), c.createElement(i.d, {
                        exact: !0,
                        path: "/console/apps/create",
                        component: b
                    }), c.createElement(i.d, {
                        exact: !0,
                        path: "/console/apps/:id",
                        component: u
                    }))))) : c.createElement(i.c, {
                        to: "/login"
                    })
                }, t = r.__decorate([Object(l.d)("DevDashboard")], t)
            }(c.Component),
            E = Object(s.f)(D);
        var _ = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(o.d)(e)
            }
        })(E);
        n.d(t, "DevDashboardRoot", function() {
            return _
        })
    }
});
//# sourceMappingURL=sites.dev.pages.dashboard-22a89b89c2ed442f3a17a159c18d7f0d.js.map