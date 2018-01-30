webpackJsonp([75], {
    UVy3: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("TToO"),
            i = t("U7vG"),
            l = t("BhyV"),
            r = t("6sO2"),
            s = t("j7/Y"),
            o = t("w9tK"),
            c = t("vH/s"),
            p = t("CSlQ"),
            u = t("a+9f"),
            m = t("FeZP"),
            d = t("Odds"),
            h = function(e) {
                var n = e.channel,
                    t = e.topClips;
                if (t.isLoading) return i.createElement(d.V, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(d._3, {
                    height: 448
                }));
                if (!t.isLoading && !t.clips.length) return i.createElement("span", null);
                var a = Object(r.d)("View Details", "ChannelAnalyticsTopClipsPanelCTA");
                return i.createElement(d.V, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, i.createElement(d.V, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, i.createElement(d._23, {
                    type: d._28.H4,
                    bold: !0
                }, Object(r.d)("What were my top clips?", "ChannelAnalyticsTopClipsTitle"))), i.createElement(d._19, {
                    elevation: 1,
                    background: d.m.Base
                }, i.createElement(d.V, {
                    padding: {
                        top: .5
                    }
                }, i.createElement(f, {
                    clipsAttrs: t
                }), n ? i.createElement(m.a, {
                    message: a,
                    url: "/" + n + "/manager/clips/channel"
                }) : i.createElement("p", null, a))))
            },
            f = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var n = [], t = 0; t < 5; t++) n.push(i.createElement(d._19, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: t
                    }, i.createElement(d._3, {
                        height: 50
                    })));
                return i.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, n) {
                    return i.createElement(u.a, a.__assign({}, e, {
                        key: n
                    }))
                }))
            },
            g = t("K/WB"),
            v = t("PGY2"),
            k = t("pDcl"),
            y = t("7qqA"),
            C = t("DNvj"),
            b = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        }
                    }, t
                }
                return a.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.fetchTopClips()
                }, n.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? i.createElement(y.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(n) {
                        return i.createElement("span", null, e.props.children(a.__assign({}, e.state, {
                            streamSummaries: n.streamSummaries
                        })))
                    }) : i.createElement("span", null)
                }, n.prototype.fetchTopClips = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(C.a)(this.props.channel.name, this.props.timeRange)]) : [2];
                                case 1:
                                    return (e = n.sent()).isError ? [2] : (this.setState({
                                        topClips: {
                                            clips: e.topClips,
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, n
            }(i.Component),
            E = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.componentDidMount = function() {
                    r.n.setPageTitle(Object(r.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, n.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = g.a.fromChannelData(this.props.data.channel),
                        n = new v.b("2018-01-01T00:00:00Z", "2018-01-26T01:00:00Z");
                    return i.createElement(d._19, {
                        margin: {
                            bottom: 1
                        },
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        flexWrap: d.K.NoWrap,
                        alignItems: d.c.Stretch,
                        breakpointMedium: {
                            flexDirection: d.J.Row
                        }
                    }, i.createElement(d.V, {
                        display: d.H.Flex,
                        flexGrow: 1,
                        flexWrap: d.K.NoWrap,
                        flexDirection: d.J.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, i.createElement(b, {
                        timeRange: n,
                        channel: e
                    }, function(n) {
                        return i.createElement("div", null, i.createElement(h, {
                            channel: e.name,
                            topClips: n.topClips
                        }), i.createElement("span", null, "insert more cards here"))
                    })))
                }, n
            }(i.Component),
            N = Object(p.d)("ChannelAnalyticsPage", {
                destination: o.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            })(Object(s.a)({
                location: c.PageviewLocation.DashboardChannelAnalytics
            })(E)),
            _ = Object(l.graphql)(k, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            })(N);
        t.d(n, "ChannelAnalyticsPageComponent", function() {
            return E
        }), t.d(n, "ChannelAnalyticsPage", function() {
            return _
        })
    },
    pDcl: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    }
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-6fd642a2d0b251da747d1ceee0d14050.js.map