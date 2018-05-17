webpackJsonp([76], {
    EtaR: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("GiK3"),
            r = n("2KeS"),
            i = n("6sO2"),
            o = n("j7/Y"),
            l = n("w9tK"),
            m = n("vH/s"),
            s = n("CSlQ"),
            d = n("TP6L"),
            c = n("TToO"),
            p = n("yWCw"),
            u = n("68hr"),
            g = n("N221"),
            y = n("7vx8"),
            f = n("Odds"),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(f._8, {
                        className: "member-list"
                    }, "Member List")
                }, t
            }(a.Component),
            k = Object(r.d)(Object(s.d)("MemberList"))(v),
            b = n("lfvs"),
            N = Object(r.d)(Object(s.d)("TeamsDescription", {
                autoReportInteractive: !0
            }))(function(e) {
                return e.description ? a.createElement(f._8, null, a.createElement(f.Q, {
                    bold: !0,
                    fontSize: f.V.Size4
                }, e.displayName), a.createElement(f._8, null, a.createElement(f._58, null, a.createElement(b, {
                    source: e.description
                })))) : null
            }),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(f._8, {
                        className: "teams-player"
                    }, "Teams Player")
                }, t
            }(a.Component),
            h = Object(r.d)(Object(s.d)("TeamsPlayer"))(_),
            E = n("N/Ws"),
            T = (n("HkGo"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return a.createElement(p.a, {
                            message: Object(i.d)("An error occurred on this page", "TeamsPageBody")
                        });
                        if (!this.props.data.team || !this.props.data.team.id) return a.createElement(u.a, null)
                    }
                    return a.createElement(f._35, {
                        flexGrow: 1
                    }, a.createElement(g.b, null, a.createElement(f._8, {
                        display: f.R.Flex,
                        justifyContent: f._7.Center,
                        padding: {
                            top: 3,
                            left: 3,
                            right: 3
                        }
                    }, a.createElement(f._35, {
                        className: "teams-page-body__inner-container",
                        background: f.n.Base,
                        display: f.R.Flex,
                        padding: 2
                    }, a.createElement(f._8, {
                        className: "teams-page-body__column--left",
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        margin: {
                            right: 2
                        }
                    }, this.renderLogo(), a.createElement(k, null)), a.createElement(f._8, {
                        className: "teams-page-body__column--right"
                    }, this.renderBanner(), a.createElement(h, null), this.renderTeamDescription())))))
                }, t.prototype.renderBanner = function() {
                    var e = this.props.data.team && this.props.data.team.bannerURL;
                    return e ? a.createElement(f._35, {
                        textAlign: f._45.Center
                    }, a.createElement("img", {
                        className: "teams-page-body__banner-image",
                        src: e,
                        alt: ""
                    })) : null
                }, t.prototype.renderLogo = function() {
                    var e = this.props.data.team && this.props.data.team.logoURL;
                    return e ? a.createElement(f._8, {
                        flexGrow: 0,
                        flexShrink: 1
                    }, a.createElement("img", {
                        src: e
                    })) : null
                }, t.prototype.renderTeamDescription = function() {
                    var e = this.props.data.team && this.props.data.team.displayName || "",
                        t = this.props.data.team && this.props.data.team.description || "";
                    return a.createElement(N, {
                        displayName: e,
                        description: t
                    })
                }, t
            }(a.Component)),
            L = Object(r.d)(Object(s.d)("TeamsPageBody"), Object(y.a)(E, {
                options: function(e) {
                    return {
                        variables: {
                            teamName: e.teamName
                        }
                    }
                }
            }))(T),
            O = function(e) {
                return a.createElement(f._8, {
                    display: f.R.Flex,
                    flexDirection: f.T.Column,
                    flexWrap: f.U.NoWrap,
                    fullHeight: !0
                }, a.createElement(d.a, null), a.createElement(f._8, {
                    flexGrow: 1,
                    display: f.R.Flex
                }, e.children))
            },
            x = Object(r.d)(Object(s.d)("TeamsLandingPage", {
                destination: l.a.TeamsLandingPage,
                autoReportInteractive: !0
            }), Object(o.a)({
                location: m.PageviewLocation.TeamsLandingPage
            }))(function(e) {
                return i.b.get("teams_landing_launch", !1) ? a.createElement(O, null, a.createElement(L, {
                    teamName: e.match.params.teamName
                })) : a.createElement(d.a, null)
            });
        n.d(t, "TeamsLandingPage", function() {
            return x
        })
    },
    HkGo: function(e, t) {},
    "N/Ws": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TeamsLandingBody"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "teamName"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "team"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "teamName"
                                }
                            }
                        }],
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
                                    value: "backgroundImageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bannerURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "logoURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 147
            }
        };
        n.loc.source = {
            body: "query TeamsLandingBody($teamName: String!) {\nteam(name: $teamName) {\nid\nbackgroundImageURL\nbannerURL\ndescription\ndisplayName\nlogoURL\n__typename\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.teams-landing-183971d7790db225e0377d8888b9a757.js.map