webpackJsonp([77], {
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
            u = n("j7/Y"),
            d = n("w9tK"),
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
            b = 28,
            _ = n("Odds"),
            C = {
                "data-test-selector": "commit-button"
            },
            D = {
                "data-test-selector": "cancel-button"
            },
            k = function(e) {
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
                    return l.createElement("div", null, l.createElement(_.W, {
                        display: _.I.Flex,
                        flexWrap: _.L.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(_.W, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(E, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: Object(f.subDays)(e, 90),
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), l.createElement(E, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), l.createElement(_.W, {
                        display: _.I.Flex,
                        justifyContent: _.V.Center
                    }, l.createElement(_.W, {
                        margin: {
                            right: 2
                        }
                    }, l.createElement(_.u, s.__assign({}, C, {
                        onClick: this.handleUpdateClick
                    }), Object(c.d)("Update", "ChannelAnalyticsDateRangePicker"))), l.createElement(_.u, s.__assign({}, D, {
                        type: _.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(c.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(l.Component),
            O = n("ylrR"),
            w = n("9uzc"),
            S = {
                "data-test-selector": "time-range"
            },
            j = {
                "data-test-selector": "total-days"
            },
            x = {
                "data-test-selector": "date-picker-toggle"
            },
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore;
                    return l.createElement(_.W, {
                        position: _._5.Relative
                    }, l.createElement(O.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return l.createElement(w.a, {
                                previousPath: "",
                                nextPath: ""
                            }, l.createElement(_.u, s.__assign({}, x, {
                                type: _.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), l.createElement(_._24, s.__assign({}, S, {
                                fontSize: 4
                            }), e.formatDateRange(t)), l.createElement(_._24, s.__assign({}, j, {
                                fontSize: 6,
                                color: _.F.Alt2
                            }), e.formatDaysInRange(t))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return l.createElement(_.p, {
                            noTail: !0,
                            show: !0,
                            direction: _.q.BottomCenter
                        }, l.createElement(_.W, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, l.createElement(k, {
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
            A = n("a+9f"),
            W = n("FeZP"),
            N = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return l.createElement(_.W, {
                    margin: {
                        bottom: 2
                    }
                }, l.createElement(_._4, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return l.createElement("span", null);
                var a = Object(c.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return l.createElement(_.W, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, l.createElement(_.W, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, l.createElement(_._24, {
                    type: _._29.H4,
                    bold: !0
                }, Object(c.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel"))), l.createElement(_._20, {
                    elevation: 1,
                    background: _.m.Base
                }, l.createElement(_.W, {
                    padding: {
                        top: .5
                    }
                }, l.createElement(P, {
                    clipsAttrs: n
                }), t ? l.createElement(W.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : l.createElement("p", null, a))))
            },
            P = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(l.createElement(_._20, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, l.createElement(_._4, {
                        height: 50
                    })));
                return l.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return l.createElement(A.a, s.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            T = function(e) {
                var t = e.stream;
                return l.createElement(_.H, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, l.createElement(_._20, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, l.createElement(_.W, {
                    display: _.I.Flex,
                    alignItems: _.c.Center
                }, l.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), l.createElement(_.W, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, l.createElement(_._24, {
                    ellipsis: !0,
                    type: _._29.H5
                }, t.startChannelStatus), l.createElement(_._24, {
                    color: _.F.Alt2,
                    type: _._29.Span,
                    ellipsis: !0
                }, Object(c.c)(t.timeRange.start, {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))), l.createElement(_.W, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, l.createElement(_._24, {
                    type: _._29.Span
                }, Object(c.d)("{views, number} avg.", {
                    views: t.avgViewerCount
                }, "ChannelAnalyticsStreamCard"))))))
            },
            V = function(e) {
                var t = e.streamSummaryQuery;
                if (t.isLoading) return l.createElement(_.W, {
                    margin: {
                        bottom: 2
                    }
                }, l.createElement(_._4, {
                    height: 448
                }));
                if (t.streamSummaries.length < 3) return l.createElement("span", null);
                var n, a = Object(c.d)("View Details", "ChannelAnalyticsTopStreamsByAverageViewersPanel");
                return n = t.channel ? l.createElement(W.a, {
                    message: a,
                    url: "/" + t.channel.name + "/dashboard/stream-summary"
                }) : l.createElement("p", null, a), l.createElement(_.W, {
                    margin: {
                        top: 0,
                        x: .5,
                        bottom: 2
                    }
                }, l.createElement(_.W, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, l.createElement(_._24, {
                    type: _._29.H4,
                    bold: !0
                }, Object(c.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), l.createElement(_._20, {
                    elevation: 1,
                    background: _.m.Base
                }, l.createElement(_.W, null, l.createElement(_.W, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    display: _.I.Flex
                }, l.createElement(_.W, {
                    flexGrow: 1
                }, l.createElement(_._24, {
                    type: _._29.H4,
                    bold: !0
                }, Object(c.d)("Top {limit}", {
                    limit: 5
                }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), l.createElement(_.W, null, l.createElement(F, null))), l.createElement(L, {
                    streamSummaryQuery: t
                }), n)))
            },
            L = function(e) {
                return l.createElement("span", null, e.streamSummaryQuery.streamSummaries.slice(0, 5).map(function(e, t) {
                    return l.createElement(T, {
                        stream: e,
                        key: t
                    })
                }))
            },
            F = function() {
                return l.createElement(_._17, {
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
            B = function() {
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
                    var e = new B(this.props.location, this.props.history);
                    return this.isValidDateRange(e) ? this.props.children(e) : (e.update({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = this.dateLimits,
                        n = t.min,
                        a = t.max;
                    return e.start <= e.end && e.start >= n && e.end <= a
                }, Object.defineProperty(t.prototype, "dateLimits", {
                    get: function() {
                        var e = this.props.now || new Date;
                        return {
                            min: Object(f.startOfDay)(Object(f.subDays)(e, 89)),
                            max: e
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            q = n("AJEV"),
            M = n("pDcl"),
            Q = n("7qqA"),
            U = n("DNvj"),
            H = function(e) {
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
                    return l.createElement(m.b, null, l.createElement(_.W, {
                        padding: 4,
                        className: "channel-analytics-page__width"
                    }, l.createElement(z, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return l.createElement("div", null, l.createElement(R, {
                            urlStore: t
                        }), l.createElement(_._20, {
                            margin: {
                                bottom: 1
                            },
                            display: _.I.Flex,
                            flexDirection: _.K.Column,
                            flexWrap: _.L.NoWrap,
                            alignItems: _.c.Stretch,
                            breakpointMedium: {
                                flexDirection: _.K.Row
                            }
                        }, l.createElement(_.W, {
                            display: _.I.Flex,
                            flexGrow: 1,
                            flexWrap: _.L.NoWrap,
                            flexDirection: _.K.Column
                        }, l.createElement(H, {
                            timeRange: t,
                            channel: e
                        }, function(t) {
                            return l.createElement("div", null, l.createElement(N, {
                                channel: e.name,
                                topClips: t.topClips
                            }), l.createElement(V, {
                                streamSummaryQuery: t.streamSummaryQuery
                            }))
                        }))))
                    })))
                }, t
            }(l.Component)),
            K = Object(o.d)(Object(p.a)(M, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(g.d)("ChannelAnalyticsPage", {
                destination: d.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: h.PageviewLocation.DashboardChannelAnalytics
            }))(G);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return G
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return K
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-c19e8bfb0ade3c3d5c740745bab42df8.js.map