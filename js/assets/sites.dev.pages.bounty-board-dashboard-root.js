(window.webpackJsonp = window.webpackJsonp || []).push([
    [102], {
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
                d = Object(a.compose)(Object(r.c)("DevBountyDashboardFeatureGate", {
                    autoReportInteractive: !0
                }), Object(o.a)(i))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return d
            })
        },
        PzZ8: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                o = n("kRBY"),
                r = n("mrSG"),
                i = n("q1tI"),
                c = n("oJmH"),
                d = n("2INN"),
                s = n("jKe7"),
                l = n("/7QA"),
                u = n("ZS2+"),
                b = n("5g1g"),
                m = n("GnwI"),
                p = n("Ints"),
                v = n("Ue10"),
                f = (n("QSSE"), u.a.wrap(function() {
                    return n.e(106).then(n.bind(null, "Pi1p"))
                }, "DevLoginPage")),
                y = u.a.wrap(function() {
                    return n.e(213).then(n.bind(null, "epaB"))
                }, "DevBountyBoardCampaignManagerPage"),
                g = u.a.wrap(function() {
                    return n.e(212).then(n.bind(null, "aztO"))
                }, "DevBountyBoardAnalyticsPage"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isActive = function(e, n) {
                            void 0 === n && (n = !1);
                            var a = t.props.match.params.bountyPage || "";
                            return n ? a === e : a.indexOf(e) > -1
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? i.createElement(b.a, {
                            name: "bounty_board_brand_portal_enabled"
                        }, i.createElement(p.a, null, i.createElement(v.Va, {
                            className: "dev-dashboard"
                        }, i.createElement(v.xb, {
                            padding: {
                                top: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0,
                            background: v.r.Base
                        }, i.createElement("header", null, i.createElement(v.Va, {
                            className: "dev-dashboard__container",
                            margin: {
                                x: "auto"
                            }
                        }, i.createElement(v.Va, {
                            padding: {
                                y: 1
                            }
                        }, i.createElement(v.z, {
                            "data-test-selector": "dev-bounty-board-dashboard-dashboard-button-selector",
                            icon: v.nb.GlyphArrLeft,
                            type: v.F.Text,
                            linkTo: "/console"
                        }, Object(l.d)("Dashboard", "DevBountyBoardDashboardRoot"))), i.createElement(v.V, {
                            type: v.Nb.H3
                        }, Object(l.d)("Bounty Board Dashboard", "DevBountyBoardDashboardRoot")), i.createElement(v.xb, {
                            borderTop: !0,
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: v.W.Flex
                        }, i.createElement(v.yb, {
                            "data-test-selector": "dev-bounty-board-dashboard-campaign-tab-selector",
                            linkTo: "/console/bounty-board",
                            active: this.isActive("", !0)
                        }, Object(l.d)("Campaign Manager", "DevBountyBoardDashboardRoot")), i.createElement(v.yb, {
                            "data-test-selector": "dev-bounty-board-dashboard-analytics-tab-selector",
                            linkTo: "/console/bounty-board/analytics",
                            active: this.isActive("analytics", !0)
                        }, Object(l.d)("Analytics", "DevBountyBoardDashboardRoot")))))), i.createElement(v.Va, {
                            "data-test-selector": "dev-bounty-board-dashboard-route-container-selector",
                            className: "dev-dashboard__container",
                            margin: {
                                x: "auto"
                            },
                            display: v.W.Block
                        }, i.createElement(s.a, null, i.createElement(d.a, {
                            exact: !0,
                            path: "/console/bounty-board",
                            component: y
                        }), i.createElement(d.a, {
                            exact: !0,
                            path: "/console/bounty-board/analytics",
                            component: g
                        })))))) : i.createElement(f, null)
                    }, t
                }(i.Component),
                D = Object(c.compose)(Object(m.c)("DevBountyBoardDashboardRootPresentation", {
                    autoReportInteractive: !0
                }))(h);
            var B = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e),
                    user: Object(o.e)(e)
                }
            })(D);
            n.d(t, "DevBountyBoardDashboardRoot", function() {
                return B
            })
        },
        QSSE: function(e, t, n) {},
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
                return s
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
            var d = Math.pow(2, 32);

            function s(e) {
                var t = r.b.get(e, [0, o.Disabled]),
                    n = t[0],
                    a = t[1],
                    c = r.o.session.deviceID,
                    s = r.o.store.getState();
                return !(a !== o.Enabled || !Object(i.g)(s)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, a = 0, o = e.length; a < o; a++) n ^= e.charCodeAt(a), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(c + "-" + e) / d < n
            }
        }
    }
]);