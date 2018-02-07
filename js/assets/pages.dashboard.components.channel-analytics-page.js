webpackJsonp([78], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = s.__assign({}, e, t);
            if (Object(f.differenceInDays)(a.end, a.start) >= 0) return a;
            var r = Object(f.differenceInDays)(e.end, e.start);
            if (Object(f.isEqual)(e.end, a.end)) {
                var i = Object(f.startOfDay)(n),
                    l = Object(f.addDays)(a.start, r);
                return l > i && (l = i), s.__assign({}, a, {
                    end: l
                })
            }
            return Object(f.isEqual)(e.start, a.start) ? s.__assign({}, a, {
                start: Object(f.subDays)(a.end, r)
            }) : e
        }

        function r(e) {
            if (e) {
                var t = Object(f.parse)(e);
                if (Object(f.isValid)(t)) return t
            }
        }

        function i(e) {
            if (e) return Object(f.format)(e, "YYYY-MM-DD")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("TToO"),
            l = n("U7vG"),
            o = n("2KeS"),
            c = n("6sO2"),
            m = n("zCIC"),
            p = n("7vx8"),
            d = n("j7/Y"),
            u = n("w9tK"),
            h = n("vH/s"),
            g = n("CSlQ"),
            f = n("wuJz"),
            y = n("3zLD"),
            v = n("6UW8"),
            E = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new v({
                            onSelect: t.props.onChange,
                            theme: "inline",
                            minDate: t.props.minDate,
                            maxDate: t.props.maxDate,
                            defaultDate: t.props.date,
                            startRange: t.props.startRange,
                            endRange: t.props.endRange,
                            setDefaultDate: !0
                        }), e.appendChild(t._picker.el))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = !1;
                    this.props.date !== e.date && (this._picker.setDate(e.date, !0), t = !0), this.props.startRange !== e.startRange && (this._picker.setStartRange(e.startRange), t = !0), this.props.endRange !== e.endRange && (this._picker.setEndRange(e.endRange), t = !0), e.minDate && this.props.minDate !== e.minDate && (this._picker.setMinDate(e.minDate), t = !0), e.maxDate && this.props.maxDate !== e.maxDate && (this._picker.setMaxDate(e.maxDate), t = !0), t && this._picker.draw(!1)
                }, t.prototype.render = function() {
                    return l.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(l.Component)),
            _ = Object(f.parse)("2011-01-01"),
            b = 28,
            C = n("Odds"),
            D = {
                "data-test-selector": "commit-button"
            },
            k = {
                "data-test-selector": "cancel-button"
            },
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = a(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = a(n.state.interval, {
                            end: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleUpdateClick = function() {
                        n.props.onCommit(n.state.interval)
                    }, n.state = {
                        interval: n.props.interval
                    }, n
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return l.createElement("div", null, l.createElement(C.Z, {
                        display: C.L.Flex,
                        flexWrap: C.O.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C.Z, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(E, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: _,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), l.createElement(E, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), l.createElement(C.Z, {
                        display: C.L.Flex,
                        justifyContent: C.Y.Center
                    }, l.createElement(C.Z, {
                        margin: {
                            right: 2
                        }
                    }, l.createElement(C.u, s.__assign({}, D, {
                        onClick: this.handleUpdateClick
                    }), Object(c.d)("Update", "ChannelAnalyticsDateRangePicker"))), l.createElement(C.u, s.__assign({}, k, {
                        type: C.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(c.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(l.Component),
            w = n("ylrR"),
            S = n("9uzc"),
            x = {
                "data-test-selector": "time-range"
            },
            j = {
                "data-test-selector": "total-days"
            },
            R = {
                "data-test-selector": "date-picker-toggle"
            },
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore;
                    return l.createElement(C.Z, {
                        position: C._6.Relative
                    }, l.createElement(w.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return l.createElement(S.a, {
                                previousPath: "",
                                nextPath: ""
                            }, l.createElement(C.u, s.__assign({}, R, {
                                type: C.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), l.createElement(C._25, s.__assign({}, x, {
                                fontSize: 4
                            }), e.formatDateRange(t)), l.createElement(C._25, s.__assign({}, j, {
                                fontSize: 6,
                                color: C.I.Alt2
                            }), e.formatDaysInRange(t))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return l.createElement(C.p, {
                            noTail: !0,
                            show: !0,
                            direction: C.q.BottomCenter
                        }, l.createElement(C.Z, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, l.createElement(O, {
                            interval: t,
                            onCommit: Object(y.compose)(a, e.props.urlStore.update),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(f.differenceInDays)(e.end, e.start) + 1 ? Object(c.c)(e.start, "medium") : Object(c.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(f.differenceInDays)(e.end, e.start) + 1;
                    return Object(c.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(l.Component),
            N = n("a+9f"),
            P = n("FeZP"),
            Z = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return l.createElement(C.Z, {
                    margin: {
                        bottom: 2
                    }
                }, l.createElement(C._5, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return l.createElement("span", null);
                var a = Object(c.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return l.createElement(C.Z, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, l.createElement(C.Z, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, l.createElement(C._25, {
                    type: C._30.H4,
                    bold: !0
                }, Object(c.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel"))), l.createElement(C._21, {
                    elevation: 1,
                    background: C.m.Base
                }, l.createElement(C.Z, {
                    padding: {
                        top: .5
                    }
                }, l.createElement(T, {
                    clipsAttrs: n
                }), t ? l.createElement(P.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : l.createElement("p", null, a))))
            },
            T = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(l.createElement(C._21, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, l.createElement(C._5, {
                        height: 50
                    })));
                return l.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return l.createElement(N.a, s.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            V = function(e) {
                var t = e.stream;
                return l.createElement(C.K, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, l.createElement(C._21, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, l.createElement(C.Z, {
                    display: C.L.Flex,
                    alignItems: C.c.Center
                }, l.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), l.createElement(C.Z, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, l.createElement(C._25, {
                    ellipsis: !0,
                    type: C._30.H5
                }, t.startChannelStatus), l.createElement(C._25, {
                    color: C.I.Alt2,
                    type: C._30.Span,
                    ellipsis: !0
                }, Object(c.c)(t.timeRange.start, {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))), l.createElement(C.Z, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, l.createElement(C._25, {
                    type: C._30.Span
                }, Object(c.d)("{views, number} avg.", {
                    views: t.avgViewerCount
                }, "ChannelAnalyticsStreamCard"))))))
            },
            L = function(e) {
                var t = e.streamSummaryQuery;
                if (t.isLoading) return l.createElement(C.Z, {
                    margin: {
                        bottom: 2
                    }
                }, l.createElement(C._5, {
                    height: 448
                }));
                if (t.streamSummaries.length < 3) return l.createElement("span", null);
                var n, a = Object(c.d)("View Details", "ChannelAnalyticsTopStreamsByAverageViewersPanel");
                return n = t.channel ? l.createElement(P.a, {
                    message: a,
                    url: "/" + t.channel.name + "/dashboard/stream-summary"
                }) : l.createElement("p", null, a), l.createElement(C.Z, {
                    margin: {
                        top: 0,
                        x: .5,
                        bottom: 2
                    }
                }, l.createElement(C.Z, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, l.createElement(C._25, {
                    type: C._30.H4,
                    bold: !0
                }, Object(c.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), l.createElement(C._21, {
                    elevation: 1,
                    background: C.m.Base
                }, l.createElement(C.Z, null, l.createElement(C.Z, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    display: C.L.Flex
                }, l.createElement(C.Z, {
                    flexGrow: 1
                }, l.createElement(C._25, {
                    type: C._30.H4,
                    bold: !0
                }, Object(c.d)("Top {limit}", {
                    limit: 5
                }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), l.createElement(C.Z, null, l.createElement(B, null))), l.createElement(F, {
                    streamSummaryQuery: t
                }), n)))
            },
            F = function(e) {
                return l.createElement("span", null, e.streamSummaryQuery.streamSummaries.slice(0, 5).map(function(e, t) {
                    return l.createElement(V, {
                        stream: e,
                        key: t
                    })
                }))
            },
            B = function() {
                return l.createElement(C._18, {
                    defaultValue: "viewers"
                }, l.createElement("option", {
                    value: "viewers"
                }, Object(c.d)("Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), l.createElement("option", {
                    value: "new_followers"
                }, Object(c.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), l.createElement("option", {
                    value: "new_subscriptions"
                }, Object(c.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
            },
            I = n("OAwv"),
            W = function() {
                function e(e, t) {
                    var n = this;
                    this.location = e, this.history = t, this.update = function(e) {
                        var t = s.__assign({
                            start: n.start,
                            end: n.end
                        }, e);
                        n.history.push(n.location.pathname + "?" + function(e) {
                            return I.stringify({
                                start: i(e.start),
                                end: i(e.end)
                            })
                        }(t))
                    }, this.location = e, this.history = t;
                    var a = I.parse(e.search);
                    this.start = r(a.start) || Object(f.subDays)(new Date, b - 1), this.end = r(a.end) || new Date
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }(),
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = new W(this.props.location, this.props.history);
                    return this.isValidDateRange(e) ? this.props.children(e) : (e.update({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = _,
                        n = this.props.now || new Date;
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(l.Component),
            q = n("AJEV"),
            M = n("pDcl"),
            Q = n("7qqA"),
            U = n("DNvj"),
            Y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        }
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    Object(q.f)(this.props.timeRange, e.timeRange) || this.fetchTopClips()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? l.createElement(Q.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(t) {
                        return l.createElement("span", null, e.props.children(s.__assign({}, e.state, {
                            streamSummaryQuery: t
                        })))
                    }) : l.createElement("span", null)
                }, t.prototype.fetchTopClips = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return s.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(U.a)(this.props.channel.name, this.props.timeRange)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError ? [2] : (this.setState({
                                        topClips: {
                                            clips: e.topClips,
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(l.Component),
            G = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = q.c.fromChannelData(this.props.data.channel);
                    return l.createElement(m.b, null, l.createElement(C.Z, {
                        padding: 4,
                        className: "channel-analytics-page__width"
                    }, l.createElement(z, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return l.createElement("div", null, l.createElement(A, {
                            urlStore: t
                        }), l.createElement(C._21, {
                            margin: {
                                bottom: 1
                            },
                            display: C.L.Flex,
                            flexDirection: C.N.Column,
                            flexWrap: C.O.NoWrap,
                            alignItems: C.c.Stretch,
                            breakpointMedium: {
                                flexDirection: C.N.Row
                            }
                        }, l.createElement(C.Z, {
                            display: C.L.Flex,
                            flexGrow: 1,
                            flexWrap: C.O.NoWrap,
                            flexDirection: C.N.Column
                        }, l.createElement(Y, {
                            timeRange: t,
                            channel: e
                        }, function(t) {
                            return l.createElement("div", null, l.createElement(Z, {
                                channel: e.name,
                                topClips: t.topClips
                            }), l.createElement(L, {
                                streamSummaryQuery: t.streamSummaryQuery
                            }))
                        }))))
                    })))
                }, t
            }(l.Component)),
            H = Object(o.d)(Object(p.a)(M, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(g.d)("ChannelAnalyticsPage", {
                destination: u.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(d.a)({
                location: h.PageviewLocation.DashboardChannelAnalytics
            }))(G);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return G
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return H
        })
    },
    pDcl: function(e, t) {
        var n = {
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
        n.loc.source = {
            body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-54d5d5e6ffafc6f855095a35053981ab.js.map