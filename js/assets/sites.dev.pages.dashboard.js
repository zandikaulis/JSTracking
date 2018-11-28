(window.webpackJsonp = window.webpackJsonp || []).push([
    [108], {
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
            var a, o = n("/MKj"),
                r = n("kRBY"),
                i = n("mrSG"),
                c = n("q1tI"),
                s = n("9C/b"),
                l = n("2INN"),
                d = n("jKe7"),
                u = n("mf+E"),
                p = n("fvjX"),
                b = n("/7QA"),
                m = n("ZS2+"),
                v = n("5g1g"),
                h = n("GnwI"),
                f = n("MxwF"),
                D = n("coZW"),
                g = n("Ints"),
                E = n("Ue10"),
                k = m.a.wrap(function() {
                    return n.e(227).then(n.bind(null, "RkBb"))
                }, "DevOverviewPage"),
                O = m.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(226)]).then(n.bind(null, "dE6c"))
                }, "DevAppsPage"),
                w = m.a.wrap(function() {
                    return n.e(225).then(n.bind(null, "OfRZ"))
                }, "DevAppCreatePage"),
                j = m.a.wrap(function() {
                    return n.e(224).then(n.bind(null, "AhYx"))
                }, "DevAppEditPage"),
                x = m.a.wrap(function() {
                    return n.e(223).then(n.bind(null, "635G"))
                }, "DevGamesPage"),
                y = m.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(0), n.e(222)]).then(n.bind(null, "QH5d"))
                }, "DevDropsDashboardRoot"),
                S = m.a.wrap(function() {
                    return n.e(221).then(n.bind(null, "DrWK"))
                }, "DevExtensionsEnableMonetizationPage"),
                G = m.a.wrap(function() {
                    return n.e(220).then(n.bind(null, "2uCZ"))
                }, "DevExtensionsListPage");
            ! function(e) {
                e.ExtensionsTab = "extensions-tab"
            }(a || (a = {}));
            var A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isActive = function(e, n) {
                            void 0 === n && (n = !1);
                            var a = t.props.match.params.tenant;
                            return !!a && (n ? a === e : a.indexOf(e) > -1)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return c.createElement(u.a, {
                            to: "/login"
                        });
                        var e = Object(f.a)();
                        if (!e && "extensions" === this.props.match.params.tenant) return window.location.replace("https://dev.twitch.tv/dashboard/extensions"), null;
                        var t = e ? "/console/extensions" : "https://dev.twitch.tv/dashboard/extensions";
                        return c.createElement(E.Ya, {
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            className: "dev-dashboard"
                        }, c.createElement(E.sb, {
                            centered: !0
                        }, c.createElement("header", {
                            className: "dev-dashboard__header"
                        }, c.createElement(E.Fb, {
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                y: 1
                            },
                            borderBottom: !0
                        }, c.createElement(E.W, {
                            type: E.Wb.H2
                        }, Object(b.d)("Dashboard", "DevDashboard"))), c.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(E.Hb, null, c.createElement(E.Gb, {
                            linkTo: "https://dev.twitch.tv/dashboard",
                            active: this.isActive("", !0)
                        }, Object(b.d)("Overview", "DevDashboard")), c.createElement(E.Gb, {
                            "data-test-selector": a.ExtensionsTab,
                            onClick: Object(D.c)(D.a.ViewExtensions),
                            linkTo: t,
                            active: this.isActive("extensions")
                        }, Object(b.d)("Extensions", "DevDashboard")), c.createElement(E.Gb, {
                            onClick: Object(D.c)(D.a.ViewApps),
                            linkTo: "/console/apps",
                            active: this.isActive("apps")
                        }, Object(b.d)("Apps", "DevDashboard")), c.createElement(E.Gb, {
                            onClick: Object(D.c)(D.a.ViewGames),
                            linkTo: "/console/games",
                            active: this.isActive("games")
                        }, Object(b.d)("Games", "DevDashboard")), c.createElement(E.Gb, {
                            onClick: Object(D.c)(D.a.ViewDrops),
                            linkTo: "/console/drops",
                            active: this.isActive("drops")
                        }, Object(b.d)("Drops", "DevDashboard")), c.createElement(v.a, {
                            name: "bounty_board_brand_portal_enabled"
                        }, c.createElement(g.a, null, c.createElement(E.Gb, {
                            linkTo: "/console/bounty-board",
                            active: this.isActive("bounty-board")
                        }, Object(b.d)("Bounty Board", "DevDashboard"))))))), c.createElement(E.Ya, {
                            display: E.X.Block
                        }, c.createElement(d.a, null, c.createElement(l.a, {
                            exact: !0,
                            path: "/console",
                            component: k
                        }), c.createElement(l.a, {
                            exact: !0,
                            path: "/console/apps",
                            component: O
                        }), c.createElement(l.a, {
                            exact: !0,
                            path: "/console/apps/create",
                            component: w
                        }), c.createElement(l.a, {
                            exact: !0,
                            path: "/console/apps/:id",
                            component: j
                        }), c.createElement(l.a, {
                            exact: !0,
                            path: "/console/games",
                            component: x
                        }), e && c.createElement(l.a, {
                            exact: !0,
                            path: "/console/extensions",
                            component: G
                        }), c.createElement(l.a, {
                            exact: !0,
                            path: "/console/extensions/enable-monetization",
                            component: S
                        }), c.createElement(l.a, {
                            path: "/console/drops",
                            component: y
                        })))))
                    }, t
                }(c.Component),
                P = Object(p.compose)(Object(h.b)("DevDashboard"), s.a)(A);
            var B = Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e),
                    user: Object(r.e)(e)
                }
            })(P);
            n.d(t, "DevDashboardRoot", function() {
                return B
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
                s = Object(a.compose)(Object(r.b)("DevBountyDashboardFeatureGate", {
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
                var t = r.p.store.getState(),
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
                    c = r.p.session.deviceID,
                    l = r.p.store.getState();
                return !(a !== o.Enabled || !Object(i.g)(l)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, a = 0, o = e.length; a < o; a++) n ^= e.charCodeAt(a), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(c + "-" + e) / s < n
            }
        }
    }
]);