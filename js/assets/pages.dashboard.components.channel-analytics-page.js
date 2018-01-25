webpackJsonp([74], {
    UVy3: function(e, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = a("TToO"),
            l = a("U7vG"),
            t = a("BhyV"),
            o = a("6sO2"),
            s = a("j7/Y"),
            r = a("w9tK"),
            c = a("vH/s"),
            d = a("CSlQ"),
            u = a("pDcl"),
            m = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    o.n.setPageTitle(Object(o.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, n.prototype.render = function() {
                    return this.props.data.channel ? l.createElement("h1", null, "Welcome to Channel Analytics for ", this.props.data.channel.login) : null
                }, n
            }(l.Component),
            h = Object(d.c)("ChannelAnalyticsPage", {
                destination: r.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            })(Object(s.a)({
                location: c.PageviewLocation.DashboardChannelAnalytics
            })(m)),
            k = Object(t.graphql)(u, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            })(h);
        a.d(n, "ChannelAnalyticsPageComponent", function() {
            return m
        }), a.d(n, "ChannelAnalyticsPage", function() {
            return k
        })
    },
    pDcl: function(e, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardChannelAnalytics_Channel"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelName"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "channel"
                        },
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 146
            }
        };
        a.loc.source = {
            body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = a
    }
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-e82d71725ce6f2d9a6de2464526cddc1.js.map