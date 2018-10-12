(window.webpackJsonp = window.webpackJsonp || []).push([
    [107], {
        "5g1g": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                o = n("q1tI"),
                r = n("wUQP"),
                i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.incremental && Object(r.c)(this.props.name) || Object(r.b)(this.props.name) ? this.props.children : null
                    }, t
                }(o.Component),
                c = i;
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return c
            })
        },
        Gjsz: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                o = n("kRBY"),
                r = n("mrSG"),
                i = n("q1tI"),
                c = n("9C/b"),
                s = n("2INN"),
                l = n("mf+E"),
                d = n("jKe7"),
                u = n("/7QA"),
                p = n("ZS2+"),
                b = n("5g1g"),
                m = n("GnwI"),
                v = n("coZW"),
                h = n("Ints"),
                f = n("Ue10"),
                D = p.a.wrap(function() {
                    return n.e(212).then(n.bind(null, "RkBb"))
                }, "DevOverviewPage"),
                g = p.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(211)]).then(n.bind(null, "dE6c"))
                }, "DevAppsPage"),
                E = p.a.wrap(function() {
                    return n.e(210).then(n.bind(null, "OfRZ"))
                }, "DevAppCreatePage"),
                k = p.a.wrap(function() {
                    return n.e(209).then(n.bind(null, "AhYx"))
                }, "DevAppEditPage"),
                O = p.a.wrap(function() {
                    return n.e(208).then(n.bind(null, "635G"))
                }, "DevGamesPage"),
                y = p.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(0), n.e(207)]).then(n.bind(null, "QH5d"))
                }, "DevDropsDashboardRoot"),
                j = p.a.wrap(function() {
                    return n.e(206).then(n.bind(null, "DrWK"))
                }, "DevExtensionsEnableMonetizationPage"),
                w = function(e) {
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
                        return this.props.isLoggedIn ? i.createElement(f.Va, {
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            className: "dev-dashboard"
                        }, i.createElement(f.lb, {
                            centered: !0
                        }, i.createElement("header", {
                            className: "dev-dashboard__header"
                        }, i.createElement(f.xb, {
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                y: 1
                            },
                            borderBottom: !0
                        }, i.createElement(f.V, {
                            type: f.Nb.H2
                        }, Object(u.d)("Dashboard", "DevDashboard"))), i.createElement(f.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(f.zb, null, i.createElement(f.yb, {
                            linkTo: "https://dev.twitch.tv/dashboard",
                            active: this.isActive("", !0)
                        }, Object(u.d)("Overview", "DevDashboard")), i.createElement(f.yb, {
                            onClick: Object(v.c)(v.a.ViewExtensions),
                            linkTo: "https://dev.twitch.tv/dashboard/extensions",
                            active: this.isActive("extensions")
                        }, Object(u.d)("Extensions", "DevDashboard")), i.createElement(f.yb, {
                            onClick: Object(v.c)(v.a.ViewApps),
                            linkTo: "/console/apps",
                            active: this.isActive("apps")
                        }, Object(u.d)("Apps", "DevDashboard")), i.createElement(f.yb, {
                            onClick: Object(v.c)(v.a.ViewGames),
                            linkTo: "/console/games",
                            active: this.isActive("games")
                        }, Object(u.d)("Games", "DevDashboard")), i.createElement(f.yb, {
                            onClick: Object(v.c)(v.a.ViewDrops),
                            linkTo: "/console/drops",
                            active: this.isActive("drops")
                        }, Object(u.d)("Drops", "DevDashboard")), i.createElement(b.a, {
                            name: "bounty_board_brand_portal_enabled"
                        }, i.createElement(h.a, null, i.createElement(f.yb, {
                            linkTo: "/console/bounty-board",
                            active: this.isActive("bounty-board")
                        }, Object(u.d)("Bounty Board", "DevDashboard"))))))), i.createElement(f.Va, {
                            display: f.W.Block
                        }, i.createElement(d.a, null, i.createElement(s.a, {
                            exact: !0,
                            path: "/console",
                            component: D
                        }), i.createElement(s.a, {
                            exact: !0,
                            path: "/console/apps",
                            component: g
                        }), i.createElement(s.a, {
                            exact: !0,
                            path: "/console/apps/create",
                            component: E
                        }), i.createElement(s.a, {
                            exact: !0,
                            path: "/console/apps/:id",
                            component: k
                        }), i.createElement(s.a, {
                            exact: !0,
                            path: "/console/games",
                            component: O
                        }), i.createElement(s.a, {
                            exact: !0,
                            path: "/console/extensions/enable-monetization",
                            component: j
                        }), i.createElement(s.a, {
                            path: "/console/drops",
                            component: y
                        }))))) : i.createElement(l.a, {
                            to: "/login"
                        })
                    }, t = r.__decorate([Object(m.c)("DevDashboard")], t)
                }(i.Component),
                S = Object(c.a)(w);
            var x = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e),
                    user: Object(o.e)(e)
                }
            })(S);
            n.d(t, "DevDashboardRoot", function() {
                return x
            })
        },
        Ints: function(e, t, n) {
            "use strict";
            var a = n("oJmH"),
                o = n("yR8l"),
                r = n("GnwI"),
                i = n("cUgj"),
                c = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.company;
                    return t && t.brandPortalSettings && t.brandPortalSettings.isEnabled ? e.children : null
                },
                s = Object(a.compose)(Object(r.c)("DevBountyDashboardFeatureGate", {
                    autoReportInteractive: !0
                }), Object(o.a)(i))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return s
            })
        },
        cUgj: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_UserCompanySettings"
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
                                        value: "company"
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
                                                value: "brandPortalSettings"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isEnabled"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            n.loc.source = {
                body: "query DevBountyBoardDashboard_UserCompanySettings {\ncurrentUser {\nid\ncompany {\nid\nbrandPortalSettings {\nisEnabled\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wUQP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            });
            var a, o, r = n("/7QA"),
                i = n("kRBY");

            function c(e) {
                var t = r.o.store.getState(),
                    n = r.b.get(e, a.Off);
                return !!(n === a.On || n === a.StaffOnly && Object(i.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(a || (a = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(o || (o = {}));
            var s = Math.pow(2, 32);

            function l(e) {
                var t = r.b.get(e, [0, o.Disabled]),
                    n = t[0],
                    a = t[1],
                    c = r.o.session.deviceID,
                    l = r.o.store.getState();
                return !(a !== o.Enabled || !Object(i.g)(l)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, a = 0, o = e.length; a < o; a++) n ^= e.charCodeAt(a), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(c + "-" + e) / s < n
            }
        }
    }
]);