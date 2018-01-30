webpackJsonp([77], {
    UVy3: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("TToO"),
            i = t("U7vG"),
            l = t("2KeS"),
            r = t("6sO2"),
            s = t("7vx8"),
            o = t("j7/Y"),
            c = t("w9tK"),
            p = t("vH/s"),
            m = t("CSlQ"),
            d = t("a+9f"),
            u = t("FeZP"),
            h = t("Odds"),
            f = function(e) {
                var n = e.channel,
                    t = e.topClips;
                if (t.isLoading) return i.createElement(h.V, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(h._3, {
                    height: 448
                }));
                if (!t.isLoading && !t.clips.length) return i.createElement("span", null);
                var a = Object(r.d)("View Details", "ChannelAnalyticsTopClipsPanelCTA");
                return i.createElement(h.V, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, i.createElement(h.V, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, i.createElement(h._23, {
                    type: h._28.H4,
                    bold: !0
                }, Object(r.d)("What were my top clips?", "ChannelAnalyticsTopClipsTitle"))), i.createElement(h._19, {
                    elevation: 1,
                    background: h.m.Base
                }, i.createElement(h.V, {
                    padding: {
                        top: .5
                    }
                }, i.createElement(g, {
                    clipsAttrs: t
                }), n ? i.createElement(u.a, {
                    message: a,
                    url: "/" + n + "/manager/clips/channel"
                }) : i.createElement("p", null, a))))
            },
            g = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var n = [], t = 0; t < 5; t++) n.push(i.createElement(h._19, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: t
                    }, i.createElement(h._3, {
                        height: 50
                    })));
                return i.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, n) {
                    return i.createElement(d.a, a.__assign({}, e, {
                        key: n
                    }))
                }))
            },
            v = t("K/WB"),
            k = t("PGY2"),
            y = t("pDcl"),
            C = t("7qqA"),
            b = t("DNvj"),
            E = function(e) {
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
                    return this.props.channel ? i.createElement(C.a, {
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
                                    }), [4, Object(b.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
            N = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.componentDidMount = function() {
                    r.n.setPageTitle(Object(r.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, n.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = v.a.fromChannelData(this.props.data.channel),
                        n = new k.b("2018-01-01T00:00:00Z", "2018-01-26T01:00:00Z");
                    return i.createElement(h._19, {
                        margin: {
                            bottom: 1
                        },
                        display: h.H.Flex,
                        flexDirection: h.J.Column,
                        flexWrap: h.K.NoWrap,
                        alignItems: h.c.Stretch,
                        breakpointMedium: {
                            flexDirection: h.J.Row
                        }
                    }, i.createElement(h.V, {
                        display: h.H.Flex,
                        flexGrow: 1,
                        flexWrap: h.K.NoWrap,
                        flexDirection: h.J.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, i.createElement(E, {
                        timeRange: n,
                        channel: e
                    }, function(n) {
                        return i.createElement("div", null, i.createElement(f, {
                            channel: e.name,
                            topClips: n.topClips
                        }), i.createElement("span", null, "insert more cards here"))
                    })))
                }, n
            }(i.Component),
            _ = Object(l.d)(Object(s.a)(y, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            }), Object(m.d)("ChannelAnalyticsPage", {
                destination: c.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(o.a)({
                location: p.PageviewLocation.DashboardChannelAnalytics
            }))(N);
        t.d(n, "ChannelAnalyticsPageComponent", function() {
            return N
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
                    }
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-445d7b05ada5c4a7738df77f9cfbc359.js.map