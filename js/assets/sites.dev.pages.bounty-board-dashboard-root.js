(window.webpackJsonp = window.webpackJsonp || []).push([
    [102], {
        "5g1g": function(e, n, t) {
            "use strict";
            var a = t("mrSG"),
                r = t("q1tI"),
                o = t("wUQP"),
                i = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return this.props.incremental && Object(o.c)(this.props.name) || Object(o.b)(this.props.name) ? this.props.children : null
                    }, n
                }(r.Component),
                d = i;
            t.d(n, "b", function() {
                return i
            }), t.d(n, "a", function() {
                return d
            })
        },
        Ints: function(e, n, t) {
            "use strict";
            var a = t("oJmH"),
                r = t("yR8l"),
                o = t("GnwI"),
                i = t("cUgj"),
                d = function(e) {
                    var n = e.data.currentUser && e.data.currentUser.company;
                    return n && n.brandPortalSettings && n.brandPortalSettings.isEnabled ? e.children : null
                },
                c = Object(a.compose)(Object(o.b)("DevBountyDashboardFeatureGate", {
                    autoReportInteractive: !0
                }), Object(r.a)(i))(d);
            t.d(n, !1, function() {
                return d
            }), t.d(n, "a", function() {
                return c
            })
        },
        PzZ8: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t("/MKj"),
                r = t("kRBY"),
                o = t("mrSG"),
                i = t("q1tI"),
                d = t("oJmH"),
                c = t("2INN"),
                s = t("jKe7"),
                u = t("/7QA"),
                l = t("ZS2+"),
                b = t("5g1g"),
                m = t("GnwI"),
                p = t("Ints"),
                v = t("Ue10"),
                f = (t("QSSE"), l.a.wrap(function() {
                    return t.e(106).then(t.bind(null, "Pi1p"))
                }, "DevLoginPage")),
                g = l.a.wrap(function() {
                    return t.e(209).then(t.bind(null, "epaB"))
                }, "DevBountyBoardCampaignManagerPage"),
                h = l.a.wrap(function() {
                    return t.e(208).then(t.bind(null, "aztO"))
                }, "DevBountyBoardAnalyticsPage"),
                y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.isActive = function(e, t) {
                            void 0 === t && (t = !1);
                            var a = n.props.match.params.bountyPage || "";
                            return t ? a === e : a.indexOf(e) > -1
                        }, n
                    }
                    return o.__extends(n, e), n.prototype.render = function() {
                        return this.props.isLoggedIn ? i.createElement(b.a, {
                            name: "bounty_board_brand_portal_enabled"
                        }, i.createElement(p.a, null, i.createElement(v.Xa, {
                            className: "dev-dashboard"
                        }, i.createElement(v.Bb, {
                            padding: {
                                top: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0,
                            background: v.r.Base
                        }, i.createElement("header", null, i.createElement(v.Xa, {
                            className: "dev-dashboard__container",
                            margin: {
                                x: "auto"
                            }
                        }, i.createElement(v.Xa, {
                            padding: {
                                y: 1
                            }
                        }, i.createElement(v.z, {
                            "data-test-selector": "dev-bounty-board-dashboard-dashboard-button-selector",
                            icon: v.rb.GlyphArrLeft,
                            type: v.F.Text,
                            linkTo: "/console"
                        }, Object(u.d)("Dashboard", "DevBountyBoardDashboardRoot"))), i.createElement(v.W, {
                            type: v.Rb.H3
                        }, Object(u.d)("Bounty Board Dashboard", "DevBountyBoardDashboardRoot")), i.createElement(v.Bb, {
                            borderTop: !0,
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: v.X.Flex
                        }, i.createElement(v.Cb, {
                            "data-test-selector": "dev-bounty-board-dashboard-campaign-tab-selector",
                            linkTo: "/console/bounty-board",
                            active: this.isActive("", !0)
                        }, Object(u.d)("Campaign Manager", "DevBountyBoardDashboardRoot")))))), i.createElement(v.Xa, {
                            "data-test-selector": "dev-bounty-board-dashboard-route-container-selector",
                            className: "dev-dashboard__container",
                            margin: {
                                x: "auto"
                            },
                            display: v.X.Block
                        }, i.createElement(s.a, null, i.createElement(c.a, {
                            exact: !0,
                            path: "/console/bounty-board",
                            component: g
                        }), i.createElement(c.a, {
                            exact: !0,
                            path: "/console/bounty-board/analytics",
                            component: h
                        })))))) : i.createElement(f, null)
                    }, n
                }(i.Component),
                B = Object(d.compose)(Object(m.b)("DevBountyBoardDashboardRootPresentation", {
                    autoReportInteractive: !0
                }))(y);
            var S = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e),
                    user: Object(r.e)(e)
                }
            })(B);
            t.d(n, "DevBountyBoardDashboardRoot", function() {
                return S
            })
        },
        QSSE: function(e, n, t) {},
        cUgj: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "query DevBountyBoardDashboard_UserCompanySettings {\ncurrentUser {\nid\ncompany {\nid\nbrandPortalSettings {\nisEnabled\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        wUQP: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            }), t.d(n, "b", function() {
                return d
            }), t.d(n, "c", function() {
                return s
            });
            var a, r, o = t("/7QA"),
                i = t("kRBY");

            function d(e) {
                var n = o.p.store.getState(),
                    t = o.b.get(e, a.Off);
                return !!(t === a.On || t === a.StaffOnly && Object(i.g)(n))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(a || (a = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(r || (r = {}));
            var c = Math.pow(2, 32);

            function s(e) {
                var n = o.b.get(e, [0, r.Disabled]),
                    t = n[0],
                    a = n[1],
                    d = o.p.session.deviceID,
                    s = o.p.store.getState();
                return !(a !== r.Enabled || !Object(i.g)(s)) || function(e, n) {
                    for (var t = void 0 === n ? 2166136261 : n, a = 0, r = e.length; a < r; a++) t ^= e.charCodeAt(a), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                    return t >>> 0
                }(d + "-" + e) / c < t
            }
        }
    }
]);