webpackJsonp([79], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = l.__assign({}, e, t);
            if (Object(y.differenceInDays)(a.end, a.start) >= 0) return a;
            var r = Object(y.differenceInDays)(e.end, e.start);
            if (Object(y.isEqual)(e.end, a.end)) {
                var i = Object(y.startOfDay)(n),
                    s = Object(y.addDays)(a.start, r);
                return s > i && (s = i), l.__assign({}, a, {
                    end: s
                })
            }
            return Object(y.isEqual)(e.start, a.start) ? l.__assign({}, a, {
                start: Object(y.subDays)(a.end, r)
            }) : e
        }

        function r(e) {
            var t = {};
            return e.hasOwnProperty("end") && (t.end = s(e.end)), e.hasOwnProperty("start") && (t.start = s(e.start)), e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = function(e) {
                return "number" == typeof e && String(e) || ""
            }(e.topStatsIndex)), t
        }

        function i(e) {
            if (e) {
                var t = Object(y.parse)(e);
                if (Object(y.isValid)(t)) return t
            }
        }

        function s(e) {
            return e ? Object(y.format)(e, "YYYY-MM-DD") : ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n("TToO"),
            o = n("U7vG"),
            c = n("2KeS"),
            p = n("6sO2"),
            m = n("zCIC"),
            u = n("7vx8"),
            d = n("j7/Y"),
            h = n("w9tK"),
            f = n("vH/s"),
            g = n("CSlQ"),
            y = n("wuJz"),
            v = n("3zLD"),
            _ = n("6UW8"),
            b = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new _({
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
                return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = !1;
                    this.props.date !== e.date && (this._picker.setDate(e.date, !0), t = !0), this.props.startRange !== e.startRange && (this._picker.setStartRange(e.startRange), t = !0), this.props.endRange !== e.endRange && (this._picker.setEndRange(e.endRange), t = !0), e.minDate && this.props.minDate !== e.minDate && (this._picker.setMinDate(e.minDate), t = !0), e.maxDate && this.props.maxDate !== e.maxDate && (this._picker.setMaxDate(e.maxDate), t = !0), t && this._picker.draw(!1)
                }, t.prototype.render = function() {
                    return o.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(o.Component)),
            E = Object(y.parse)("2011-01-01"),
            C = 28,
            D = n("Odds"),
            x = {
                "data-test-selector": "commit-button"
            },
            w = {
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
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return o.createElement("div", null, o.createElement(D._1, {
                        display: D.M.Flex,
                        flexWrap: D.P.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(D._1, {
                        padding: {
                            right: 2
                        }
                    }, o.createElement(b, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: E,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), o.createElement(b, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), o.createElement(D._1, {
                        display: D.M.Flex,
                        justifyContent: D._0.Center
                    }, o.createElement(D._1, {
                        margin: {
                            right: 2
                        }
                    }, o.createElement(D.u, l.__assign({}, x, {
                        onClick: this.handleUpdateClick
                    }), Object(p.d)("Update", "ChannelAnalyticsDateRangePicker"))), o.createElement(D.u, l.__assign({}, w, {
                        type: D.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(p.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(o.Component),
            k = n("ylrR"),
            S = n("9uzc"),
            A = {
                "data-test-selector": "time-range"
            },
            P = {
                "data-test-selector": "total-days"
            },
            j = {
                "data-test-selector": "date-picker-toggle"
            },
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return o.createElement(D._1, {
                        position: D._8.Relative
                    }, o.createElement(k.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return o.createElement(D._1, {
                                padding: {
                                    bottom: 2
                                }
                            }, o.createElement(S.a, {
                                previousPath: "",
                                nextPath: ""
                            }, o.createElement(D.u, l.__assign({}, j, {
                                type: D.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), o.createElement(D._27, l.__assign({}, A, {
                                fontSize: 4
                            }), e.formatDateRange(t)), o.createElement(D._27, l.__assign({}, P, {
                                fontSize: 6,
                                color: D.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return o.createElement(D.p, {
                            noTail: !0,
                            show: !0,
                            direction: D.q.BottomCenter
                        }, o.createElement(D._1, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, o.createElement(O, {
                            interval: t,
                            onCommit: Object(v.compose)(a, e.props.updateInterval),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(y.differenceInDays)(e.end, e.start) + 1 ? Object(p.c)(e.start, "medium") : Object(p.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(y.differenceInDays)(e.end, e.start) + 1;
                    return Object(p.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(o.Component),
            N = n("a+9f"),
            I = n("FeZP"),
            T = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return o.createElement(D._1, {
                    margin: {
                        bottom: 2
                    }
                }, o.createElement(D._7, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return o.createElement("span", null);
                var a = Object(p.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return o.createElement(D._1, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, o.createElement(D._1, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, o.createElement(D._27, {
                    type: D._32.H4,
                    bold: !0
                }, Object(p.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel"))), o.createElement(D._23, {
                    elevation: 1,
                    background: D.m.Base
                }, o.createElement(D._1, {
                    padding: {
                        top: .5
                    }
                }, o.createElement(V, {
                    clipsAttrs: n
                }), t ? o.createElement(I.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : o.createElement("p", null, a))))
            },
            V = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(o.createElement(D._23, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, o.createElement(D._7, {
                        height: 50
                    })));
                return o.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return o.createElement(N.a, l.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            M = n("HW6M"),
            W = n("F8kA"),
            F = (n("h0zb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = M("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return o.createElement(D.V, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: D._28.Center
                    }, o.createElement(W.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, o.createElement(D._27, {
                        type: D._32.H3
                    }, this.props.title), o.createElement(D._27, {
                        type: D._32.H6
                    }, this.props.subtitle)))
                }, t
            }(o.Component)),
            B = {
                "data-test-selector": "current-chart"
            },
            L = [function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return o.createElement("p", null, "Average Viewers Chart")
                }, t
            }(o.Component), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return o.createElement("p", null, "Total Views Chart")
                }, t
            }(o.Component)],
            z = L.length - 1,
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return o.createElement(D._23, {
                        background: D.m.Base,
                        elevation: 1
                    }, o.createElement(D._25, null, o.createElement(F, {
                        title: "8,201",
                        subtitle: Object(p.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), o.createElement(F, {
                        title: "1",
                        subtitle: Object(p.d)("Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    })), o.createElement(D._1, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = L[this.cappedIndex];
                    return o.createElement(e, l.__assign({}, B))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(z, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component),
            H = function(e) {
                var t = e.stream;
                return o.createElement(D.L, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, o.createElement(D._23, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, o.createElement(D._1, {
                    display: D.M.Flex,
                    alignItems: D.c.Center
                }, o.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), o.createElement(D._1, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, o.createElement(D._27, {
                    ellipsis: !0,
                    type: D._32.H5
                }, t.startChannelStatus), o.createElement(D._27, {
                    color: D.I.Alt2,
                    type: D._32.Span,
                    ellipsis: !0
                }, Object(p.c)(t.timeRange.start, {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))), o.createElement(D._1, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, o.createElement(D._27, {
                    type: D._32.Span
                }, Object(p.d)("{views, number} avg.", {
                    views: function(e) {
                        return e < 10 ? Math.floor(10 * e) / 10 : Math.floor(e)
                    }(t.avgViewerCount)
                }, "ChannelAnalyticsStreamCard"))))))
            },
            Q = function(e) {
                var t = e.streamSummaryQuery;
                if (t.isLoading) return o.createElement(D._1, {
                    margin: {
                        bottom: 2
                    }
                }, o.createElement(D._7, {
                    height: 448
                }));
                if (t.streamSummaries.length < 3) return o.createElement("span", null);
                var n, a = Object(p.d)("View Details", "ChannelAnalyticsTopStreamsByAverageViewersPanel");
                return n = t.channel ? o.createElement(I.a, {
                    message: a,
                    url: "/" + t.channel.name + "/dashboard/stream-summary"
                }) : o.createElement("p", null, a), o.createElement(D._1, {
                    margin: {
                        top: 0,
                        x: .5,
                        bottom: 2
                    }
                }, o.createElement(D._1, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, o.createElement(D._27, {
                    type: D._32.H4,
                    bold: !0
                }, Object(p.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), o.createElement(D._23, {
                    elevation: 1,
                    background: D.m.Base
                }, o.createElement(D._1, null, o.createElement(D._1, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    display: D.M.Flex
                }, o.createElement(D._1, {
                    flexGrow: 1
                }, o.createElement(D._27, {
                    type: D._32.H4,
                    bold: !0
                }, Object(p.d)("Top {limit}", {
                    limit: 5
                }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), o.createElement(D._1, null, o.createElement(G, null))), o.createElement(U, {
                    streamSummaryQuery: t
                }), n)))
            },
            U = function(e) {
                return o.createElement("span", null, e.streamSummaryQuery.streamSummaries.slice(0, 5).map(function(e, t) {
                    return o.createElement(H, {
                        stream: e,
                        key: t
                    })
                }))
            },
            G = function() {
                return o.createElement(D._20, {
                    defaultValue: "viewers"
                }, o.createElement("option", {
                    value: "viewers"
                }, Object(p.d)("Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), o.createElement("option", {
                    value: "new_followers"
                }, Object(p.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), o.createElement("option", {
                    value: "new_subscriptions"
                }, Object(p.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
            },
            Y = n("OAwv"),
            J = function() {
                function e(e, t, n) {
                    void 0 === n && (n = new Date);
                    var a = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = a.buildPathWithParams(e);
                        a.history.replace(t)
                    }, this.buildPathWithParams = function(e) {
                        var t = function(e) {
                                var t = {};
                                for (var n in e) {
                                    var a = e[n];
                                    "" !== a && (t[n] = a)
                                }
                                return t
                            }(l.__assign({}, a.rawParams, r(e))),
                            n = Y.stringify(t);
                        return a.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = Y.parse(e.search);
                    var s = i(this.rawParams.start) || Object(y.startOfDay)(Object(y.subDays)(n, C - 1)),
                        o = Object(y.endOfDay)(i(this.rawParams.end) || n),
                        c = function(e) {
                            var t = Number(e);
                            return t ? (t = Math.floor(t), t = Math.max(0, t)) : 0
                        }(this.rawParams.topStatsIndex);
                    this.params = {
                        start: s,
                        end: o,
                        topStatsIndex: c
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }(),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new J(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = E,
                        n = Object(y.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(o.Component),
            Z = n("AJEV"),
            $ = n("pDcl"),
            X = n("7qqA"),
            ee = n("DNvj"),
            te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        }
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    Object(Z.f)(this.props.timeRange, e.timeRange) || this.fetchTopClips()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? o.createElement(X.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(t) {
                        return o.createElement("span", null, e.props.children(l.__assign({}, e.state, {
                            streamSummaryQuery: t
                        })))
                    }) : o.createElement("span", null)
                }, t.prototype.fetchTopClips = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(ee.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
            }(o.Component),
            ne = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    p.n.setPageTitle(Object(p.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = Z.c.fromChannelData(this.props.data.channel);
                    return o.createElement(m.b, null, o.createElement(K, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return o.createElement(D._1, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, o.createElement(R, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), o.createElement(D._23, {
                            margin: {
                                bottom: 1
                            },
                            display: D.M.Flex,
                            flexDirection: D.O.Column,
                            flexWrap: D.P.NoWrap,
                            alignItems: D.c.Stretch,
                            breakpointMedium: {
                                flexDirection: D.O.Row
                            }
                        }, o.createElement(D._1, {
                            display: D.M.Flex,
                            flexGrow: 1,
                            flexWrap: D.P.NoWrap,
                            flexDirection: D.O.Column
                        }, o.createElement(te, {
                            timeRange: t.params,
                            channel: e
                        }, function(n) {
                            return o.createElement("div", null, o.createElement(q, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams
                            }), o.createElement(T, {
                                channel: e.name,
                                topClips: n.topClips
                            }), o.createElement(Q, {
                                streamSummaryQuery: n.streamSummaryQuery
                            }))
                        }))))
                    }))
                }, t
            }(o.Component)),
            ae = Object(c.d)(Object(u.a)($, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(g.d)("ChannelAnalyticsPage", {
                destination: h.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(d.a)({
                location: f.PageviewLocation.DashboardChannelAnalytics
            }))(ne);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return ne
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return ae
        })
    },
    h0zb: function(e, t) {},
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-c1670d28ad59c8e784989e3334c4dea6.js.map