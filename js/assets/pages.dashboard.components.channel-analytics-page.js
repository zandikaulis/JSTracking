webpackJsonp([80], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = o.__assign({}, e, t);
            if (Object(g.differenceInDays)(a.end, a.start) >= 0) return a;
            var r = Object(g.differenceInDays)(e.end, e.start);
            if (Object(g.isEqual)(e.end, a.end)) {
                var i = Object(g.startOfDay)(n),
                    s = Object(g.addDays)(a.start, r);
                return s > i && (s = i), o.__assign({}, a, {
                    end: s
                })
            }
            return Object(g.isEqual)(e.start, a.start) ? o.__assign({}, a, {
                start: Object(g.subDays)(a.end, r)
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
                var t = Object(g.parse)(e);
                if (Object(g.isValid)(t)) return t
            }
        }

        function s(e) {
            return e ? Object(g.format)(e, "YYYY-MM-DD") : ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n("TToO"),
            l = n("U7vG"),
            c = n("2KeS"),
            p = n("6sO2"),
            m = n("zCIC"),
            u = n("7vx8"),
            d = n("j7/Y"),
            h = n("w9tK"),
            f = n("vH/s"),
            y = n("CSlQ"),
            g = n("wuJz"),
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
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = !1;
                    this.props.date !== e.date && (this._picker.setDate(e.date, !0), t = !0), this.props.startRange !== e.startRange && (this._picker.setStartRange(e.startRange), t = !0), this.props.endRange !== e.endRange && (this._picker.setEndRange(e.endRange), t = !0), e.minDate && this.props.minDate !== e.minDate && (this._picker.setMinDate(e.minDate), t = !0), e.maxDate && this.props.maxDate !== e.maxDate && (this._picker.setMaxDate(e.maxDate), t = !0), t && this._picker.draw(!1)
                }, t.prototype.render = function() {
                    return l.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(l.Component)),
            E = Object(g.parse)("2011-01-01"),
            C = 28,
            w = n("Odds"),
            x = {
                "data-test-selector": "commit-button"
            },
            k = {
                "data-test-selector": "cancel-button"
            },
            D = function(e) {
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
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return l.createElement("div", null, l.createElement(w._1, {
                        display: w.M.Flex,
                        flexWrap: w.P.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(w._1, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(b, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: E,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), l.createElement(b, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), l.createElement(w._1, {
                        display: w.M.Flex,
                        justifyContent: w._0.Center
                    }, l.createElement(w._1, {
                        margin: {
                            right: 2
                        }
                    }, l.createElement(w.u, o.__assign({}, x, {
                        onClick: this.handleUpdateClick
                    }), Object(p.d)("Update", "ChannelAnalyticsDateRangePicker"))), l.createElement(w.u, o.__assign({}, k, {
                        type: w.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(p.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(l.Component),
            S = n("ylrR"),
            O = n("9uzc"),
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
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return l.createElement(w._1, {
                        position: w._8.Relative
                    }, l.createElement(S.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return l.createElement(w._1, {
                                padding: {
                                    bottom: 2
                                }
                            }, l.createElement(O.a, {
                                previousPath: "",
                                nextPath: ""
                            }, l.createElement(w.u, o.__assign({}, j, {
                                type: w.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), l.createElement(w._34, o.__assign({}, A, {
                                fontSize: 4
                            }), e.formatDateRange(t)), l.createElement(w._34, o.__assign({}, P, {
                                fontSize: 6,
                                color: w.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return l.createElement(w.p, {
                            noTail: !0,
                            show: !0,
                            direction: w.q.BottomCenter
                        }, l.createElement(w._1, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, l.createElement(D, {
                            interval: t,
                            onCommit: Object(v.compose)(a, e.props.updateInterval),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(g.differenceInDays)(e.end, e.start) + 1 ? Object(p.c)(e.start, "medium") : Object(p.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(g.differenceInDays)(e.end, e.start) + 1;
                    return Object(p.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(l.Component),
            N = n("a+9f"),
            T = n("FeZP"),
            V = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return l.createElement(w._1, {
                    margin: {
                        bottom: 2
                    }
                }, l.createElement(w._7, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return l.createElement("span", null);
                var a = Object(p.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return l.createElement(w._1, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, l.createElement(w._1, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, l.createElement(w._34, {
                    type: w._39.H4,
                    bold: !0
                }, Object(p.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel"))), l.createElement(w._24, {
                    elevation: 1,
                    background: w.m.Base
                }, l.createElement(w._1, {
                    padding: {
                        top: .5
                    }
                }, l.createElement(I, {
                    clipsAttrs: n
                }), t ? l.createElement(T.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : l.createElement("p", null, a))))
            },
            I = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(l.createElement(w._24, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, l.createElement(w._7, {
                        height: 50
                    })));
                return l.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return l.createElement(N.a, o.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            F = n("WaEV"),
            W = 400,
            M = 190,
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new F(this.viewerGraph, {
                        type: "bar",
                        data: {
                            labels: this.props.timeLabels,
                            datasets: [{
                                label: Object(p.d)("viewers", "ChannelAnalyticsViewerGraph"),
                                data: this.props.viewerCounts,
                                backgroundColor: "#6441A4",
                                hoverBackgroundColor: "#B19CDA"
                            }]
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        maxRotation: 0,
                                        minRotation: 0,
                                        maxTicksLimit: 4,
                                        fontColor: "rgba(255, 255, 255, 0)",
                                        fontSize: 10,
                                        padding: 5
                                    },
                                    gridLines: {
                                        color: "rgba(255, 255, 255, 0)",
                                        lineWidth: 1,
                                        drawBorder: !1,
                                        display: !1
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        maxTicksLimit: 6,
                                        fontColor: "#898395",
                                        fontSize: 10,
                                        padding: 5,
                                        callback: function(e) {
                                            if (Math.floor(e) === e) return e
                                        }
                                    },
                                    gridLines: {
                                        color: "#EFEEF1",
                                        zeroLineColor: "#EFEEF1",
                                        tickMarkLength: 5
                                    }
                                }]
                            },
                            legend: {
                                display: !0,
                                position: "bottom",
                                labels: {
                                    boxWidth: 12
                                }
                            },
                            tooltips: {
                                backgroundColor: "rgba(0,0,0,0.95)",
                                titleFontColor: "#FAF9FA",
                                bodyFontColor: "#CBC8D0",
                                cornerRadius: 3,
                                displayColors: !1
                            },
                            responsive: !0
                        }
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement(w.V, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, l.createElement("canvas", {
                        ref: function(t) {
                            return e.viewerGraph = t
                        }
                    }))
                }, t.prototype.setCanvasResolution = function() {
                    var e = W,
                        t = M,
                        n = L(this.viewerGraph.getContext("2d"));
                    this.viewerGraph.width = e * n, this.viewerGraph.height = t * n, this.viewerGraph.style.width = e + "px", this.viewerGraph.style.height = t + "px", this.viewerGraph.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t
            }(l.Component),
            L = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            G = {
                "data-test-selector": "no-data"
            },
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    if (this.props.streamSummaryQuery.isLoading) return l.createElement(w._1, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(w._7, {
                        height: 300
                    }));
                    var e = this.props.streamSummaryQuery.streamSummaries;
                    return 0 === e.length ? l.createElement(w._1, o.__assign({
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        textAlign: w._35.Center
                    }, G), l.createElement(w._34, {
                        type: w._39.H3
                    }, Object(p.d)("Nothing to show yet", "ChannelAnalyticsViewerGraph")), l.createElement(w._34, {
                        color: w.I.Alt2,
                        fontSize: 5
                    }, Object(p.d)("Not enough data for us to display", "ChannelAnalyticsViewerGraph"))) : l.createElement("div", {
                        className: "average-viewers-chart"
                    }, l.createElement(B, {
                        timeLabels: e.map(function(e) {
                            return Object(p.c)(new Date(e.id), {
                                month: "numeric",
                                day: "numeric"
                            })
                        }),
                        viewerCounts: e.map(function(e) {
                            return e.avgViewerCount
                        })
                    }))
                }, t
            }(l.Component),
            Q = n("HW6M"),
            H = n("F8kA"),
            q = (n("h0zb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Q("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return l.createElement(w.V, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: w._35.Center
                    }, l.createElement(H.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, l.createElement(w._34, {
                        type: w._39.H3
                    }, this.props.title), l.createElement(w._34, {
                        type: w._39.H6
                    }, this.props.subtitle)))
                }, t
            }(l.Component)),
            U = {
                "data-test-selector": "current-chart"
            },
            Y = [z, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("p", null, "Total Views Chart")
                }, t
            }(l.Component)],
            J = Y.length - 1,
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return l.createElement(w._24, {
                        background: w.m.Base,
                        elevation: 1
                    }, l.createElement(w._26, null, l.createElement(q, {
                        title: "8,201",
                        subtitle: Object(p.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), l.createElement(q, {
                        title: "1",
                        subtitle: Object(p.d)("Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    })), l.createElement(w._1, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = Y[this.cappedIndex];
                    return l.createElement(e, o.__assign({}, U, {
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(J, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            Z = function(e) {
                var t = e.stream;
                return l.createElement(w.L, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, l.createElement(w._24, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, l.createElement(w._1, {
                    display: w.M.Flex,
                    alignItems: w.c.Center
                }, l.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), l.createElement(w._1, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, l.createElement(w._34, {
                    ellipsis: !0,
                    type: w._39.H5
                }, t.startChannelStatus), l.createElement(w._34, {
                    color: w.I.Alt2,
                    type: w._39.Span,
                    ellipsis: !0
                }, Object(p.c)(t.timeRange.start, {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))), l.createElement(w._1, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, l.createElement(w._34, {
                    type: w._39.Span
                }, Object(p.d)("{views, number} avg.", {
                    views: function(e) {
                        return e < 10 ? Math.floor(10 * e) / 10 : Math.floor(e)
                    }(t.avgViewerCount)
                }, "ChannelAnalyticsStreamCard"))))))
            },
            $ = function(e) {
                var t = e.streamSummaryQuery;
                if (t.isLoading) return l.createElement(w._1, {
                    margin: {
                        bottom: 2
                    }
                }, l.createElement(w._7, {
                    height: 448
                }));
                if (t.streamSummaries.length < 3) return l.createElement("span", null);
                var n, a = Object(p.d)("View Details", "ChannelAnalyticsTopStreamsByAverageViewersPanel");
                return n = t.channel ? l.createElement(T.a, {
                    message: a,
                    url: "/" + t.channel.name + "/dashboard/stream-summary"
                }) : l.createElement("p", null, a), l.createElement(w._1, {
                    margin: {
                        top: 0,
                        x: .5,
                        bottom: 2
                    }
                }, l.createElement(w._1, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, l.createElement(w._34, {
                    type: w._39.H4,
                    bold: !0
                }, Object(p.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), l.createElement(w._24, {
                    elevation: 1,
                    background: w.m.Base
                }, l.createElement(w._1, null, l.createElement(w._1, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    display: w.M.Flex
                }, l.createElement(w._1, {
                    flexGrow: 1
                }, l.createElement(w._34, {
                    type: w._39.H4,
                    bold: !0
                }, Object(p.d)("Top {limit}", {
                    limit: 5
                }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), l.createElement(w._1, null, l.createElement(ee, null))), l.createElement(X, {
                    streamSummaryQuery: t
                }), n)))
            },
            X = function(e) {
                return l.createElement("span", null, e.streamSummaryQuery.streamSummaries.slice(0, 5).map(function(e, t) {
                    return l.createElement(Z, {
                        stream: e,
                        key: t
                    })
                }))
            },
            ee = function() {
                return l.createElement(w._20, {
                    defaultValue: "viewers"
                }, l.createElement("option", {
                    value: "viewers"
                }, Object(p.d)("Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), l.createElement("option", {
                    value: "new_followers"
                }, Object(p.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), l.createElement("option", {
                    value: "new_subscriptions"
                }, Object(p.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
            },
            te = n("OAwv"),
            ne = function() {
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
                            }(o.__assign({}, a.rawParams, r(e))),
                            n = te.stringify(t);
                        return a.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = te.parse(e.search);
                    var s = i(this.rawParams.start) || Object(g.startOfDay)(Object(g.subDays)(n, C - 1)),
                        l = Object(g.endOfDay)(i(this.rawParams.end) || n),
                        c = function(e) {
                            var t = Number(e);
                            return t ? (t = Math.floor(t), t = Math.max(0, t)) : 0
                        }(this.rawParams.topStatsIndex);
                    this.params = {
                        start: s,
                        end: l,
                        topStatsIndex: c
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }(),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new ne(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = E,
                        n = Object(g.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(l.Component),
            re = n("AJEV"),
            ie = n("pDcl"),
            se = n("7qqA"),
            oe = n("DNvj"),
            le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        }
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    Object(re.f)(this.props.timeRange, e.timeRange) || this.fetchTopClips()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? l.createElement(se.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(t) {
                        return l.createElement("span", null, e.props.children(o.__assign({}, e.state, {
                            streamSummaryQuery: t
                        })))
                    }) : l.createElement("span", null)
                }, t.prototype.fetchTopClips = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(oe.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
            ce = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    p.n.setPageTitle(Object(p.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = re.c.fromChannelData(this.props.data.channel);
                    return l.createElement(m.b, null, l.createElement(ae, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return l.createElement(w._1, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, l.createElement(R, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), l.createElement(w._24, {
                            margin: {
                                bottom: 1
                            },
                            display: w.M.Flex,
                            flexDirection: w.O.Column,
                            flexWrap: w.P.NoWrap,
                            alignItems: w.c.Stretch,
                            breakpointMedium: {
                                flexDirection: w.O.Row
                            }
                        }, l.createElement(w._1, {
                            display: w.M.Flex,
                            flexGrow: 1,
                            flexWrap: w.P.NoWrap,
                            flexDirection: w.O.Column
                        }, l.createElement(le, {
                            timeRange: t.params,
                            channel: e
                        }, function(n) {
                            return l.createElement("div", null, l.createElement(K, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                streamSummaryQuery: n.streamSummaryQuery
                            }), l.createElement(V, {
                                channel: e.name,
                                topClips: n.topClips
                            }), l.createElement($, {
                                streamSummaryQuery: n.streamSummaryQuery
                            }))
                        }))))
                    }))
                }, t
            }(l.Component)),
            pe = Object(c.d)(Object(u.a)(ie, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(y.d)("ChannelAnalyticsPage", {
                destination: h.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(d.a)({
                location: f.PageviewLocation.DashboardChannelAnalytics
            }))(ce);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return ce
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return pe
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-a7a1b25022f41eac72d43993efcfc47a.js.map