webpackJsonp([84], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = l.__assign({}, e, t);
            if (Object(v.differenceInDays)(a.end, a.start) >= 0) return a;
            var r = Object(v.differenceInDays)(e.end, e.start);
            if (Object(v.isEqual)(e.end, a.end)) {
                var i = Object(v.startOfDay)(n),
                    s = Object(v.addDays)(a.start, r);
                return s > i && (s = i), l.__assign({}, a, {
                    end: s
                })
            }
            return Object(v.isEqual)(e.start, a.start) ? l.__assign({}, a, {
                start: Object(v.subDays)(a.end, r)
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
                var t = Object(v.parse)(e);
                if (Object(v.isValid)(t)) return t
            }
        }

        function s(e) {
            return e ? Object(v.format)(e, "YYYY-MM-DD") : ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, l = n("TToO"),
            c = n("U7vG"),
            p = n("2KeS"),
            m = n("6sO2"),
            u = n("zCIC"),
            d = n("7vx8"),
            h = n("j7/Y"),
            f = n("w9tK"),
            g = n("vH/s"),
            y = n("CSlQ"),
            v = n("wuJz"),
            _ = n("3zLD"),
            b = n("6UW8"),
            C = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new b({
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
                    return c.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(c.Component)),
            E = Object(v.parse)("2011-01-01"),
            w = 28,
            S = n("Odds"),
            x = {
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
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return c.createElement("div", null, c.createElement(S._2, {
                        display: S.N.Flex,
                        flexWrap: S.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(S._2, {
                        padding: {
                            right: 2
                        }
                    }, c.createElement(C, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: E,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), c.createElement(C, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), c.createElement(S._2, {
                        display: S.N.Flex,
                        justifyContent: S._1.Center
                    }, c.createElement(S._2, {
                        margin: {
                            right: 2
                        }
                    }, c.createElement(S.u, l.__assign({}, x, {
                        onClick: this.handleUpdateClick
                    }), Object(m.d)("Update", "ChannelAnalyticsDateRangePicker"))), c.createElement(S.u, l.__assign({}, D, {
                        type: S.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(m.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(c.Component),
            A = n("ylrR"),
            O = n("9uzc"),
            N = {
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
                    return c.createElement(S._2, {
                        position: S._9.Relative
                    }, c.createElement(A.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return c.createElement(S._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, c.createElement(O.a, {
                                previousPath: "",
                                nextPath: ""
                            }, c.createElement(S.u, l.__assign({}, j, {
                                type: S.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), c.createElement(S._35, l.__assign({}, N, {
                                fontSize: 4
                            }), e.formatDateRange(t)), c.createElement(S._35, l.__assign({}, P, {
                                fontSize: 6,
                                color: S.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return c.createElement(S.p, {
                            noTail: !0,
                            show: !0,
                            direction: S.q.BottomCenter
                        }, c.createElement(S._2, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, c.createElement(k, {
                            interval: t,
                            onCommit: Object(_.compose)(a, e.props.updateInterval),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(v.differenceInDays)(e.end, e.start) + 1 ? Object(m.c)(e.start, "medium") : Object(m.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(v.differenceInDays)(e.end, e.start) + 1;
                    return Object(m.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(c.Component),
            T = n("a+9f"),
            V = n("FeZP"),
            F = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return c.createElement(S._2, {
                    margin: {
                        bottom: 2
                    }
                }, c.createElement(S._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return c.createElement("span", null);
                var a = Object(m.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return c.createElement(S._2, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, c.createElement(S._2, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, c.createElement(S._35, {
                    type: S._40.H4,
                    bold: !0
                }, Object(m.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel"))), c.createElement(S._25, {
                    elevation: 1,
                    background: S.m.Base
                }, c.createElement(S._2, {
                    padding: {
                        top: .5
                    }
                }, c.createElement(I, {
                    clipsAttrs: n
                }), t ? c.createElement(V.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : c.createElement("p", null, a))))
            },
            I = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(c.createElement(S._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, c.createElement(S._8, {
                        height: 50
                    })));
                return c.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return c.createElement(T.a, l.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            W = n("WaEV"),
            L = 400,
            B = 190,
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new W(this.viewerGraph, {
                        type: "bar",
                        data: {
                            labels: this.props.timeLabels,
                            datasets: [{
                                label: Object(m.d)("viewers", "ChannelAnalyticsViewerGraph"),
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
                    return c.createElement(S.W, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, c.createElement("canvas", {
                        ref: function(t) {
                            return e.viewerGraph = t
                        }
                    }))
                }, t.prototype.setCanvasResolution = function() {
                    var e = L,
                        t = B,
                        n = M(this.viewerGraph.getContext("2d"));
                    this.viewerGraph.width = e * n, this.viewerGraph.height = t * n, this.viewerGraph.style.width = e + "px", this.viewerGraph.style.height = t + "px", this.viewerGraph.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t
            }(c.Component),
            M = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            Q = {
                "data-test-selector": "no-data"
            },
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (this.props.streamSummaryQuery.isLoading) return c.createElement(S._2, {
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(S._8, {
                        height: 300
                    }));
                    var e = this.props.streamSummaryQuery.streamSummaries;
                    return 0 === e.length ? c.createElement(S._2, l.__assign({
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        textAlign: S._36.Center
                    }, Q), c.createElement(S._35, {
                        type: S._40.H3
                    }, Object(m.d)("Nothing to show yet", "ChannelAnalyticsViewerGraph")), c.createElement(S._35, {
                        color: S.I.Alt2,
                        fontSize: 5
                    }, Object(m.d)("Not enough data for us to display", "ChannelAnalyticsViewerGraph"))) : c.createElement("div", {
                        className: "average-viewers-chart"
                    }, c.createElement(G, {
                        timeLabels: e.map(function(e) {
                            return Object(m.c)(new Date(e.id), {
                                month: "numeric",
                                day: "numeric"
                            })
                        }),
                        viewerCounts: e.map(function(e) {
                            return e.avgViewerCount
                        })
                    }))
                }, t
            }(c.Component),
            H = n("HW6M"),
            q = n("F8kA"),
            U = (n("h0zb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = H("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return c.createElement(S.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: S._36.Center
                    }, c.createElement(q.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, c.createElement(S._35, {
                        type: S._40.H3
                    }, this.props.title), c.createElement(S._35, {
                        type: S._40.H6
                    }, this.props.subtitle)))
                }, t
            }(c.Component)),
            Y = {
                "data-test-selector": "current-chart"
            },
            J = [z, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement("p", null, "Total Views Chart")
                }, t
            }(c.Component)],
            K = J.length - 1,
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return c.createElement(S._25, {
                        background: S.m.Base,
                        elevation: 1
                    }, c.createElement(S._27, null, c.createElement(U, {
                        title: "8,201",
                        subtitle: Object(m.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), c.createElement(U, {
                        title: "1",
                        subtitle: Object(m.d)("Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    })), c.createElement(S._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = J[this.cappedIndex];
                    return c.createElement(e, l.__assign({}, Y, {
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(K, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(c.Component),
            $ = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return c.createElement(S.L, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, c.createElement(S._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, c.createElement(S._2, {
                    display: S.N.Flex,
                    alignItems: S.c.Center
                }, c.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), c.createElement(S._2, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, c.createElement(S._35, {
                    ellipsis: !0,
                    type: S._40.H5
                }, t.startChannelStatus), c.createElement(S._35, {
                    color: S.I.Alt2,
                    type: S._40.Span,
                    ellipsis: !0
                }, Object(m.c)(t.timeRange.start, {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))), c.createElement(S._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, c.createElement(S._35, {
                    type: S._40.Span
                }, Object(m.d)("{statNum, number}", {
                    statNum: function(e) {
                        return e < 10 ? Math.floor(10 * e) / 10 : Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard"))))))
            },
            X = n("PGY2"),
            ee = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(o || (o = {}));
        var te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return c.createElement(S._21, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, c.createElement("option", {
                            value: o.AvgViewers
                        }, Object(m.d)("Avg Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), c.createElement("option", {
                            value: o.NewFollowers
                        }, Object(m.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), c.createElement("option", {
                            value: o.NewSubscriptions
                        }, Object(m.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
                    }, n.streamsList = function() {
                        return c.createElement("span", null, n.sortedStreamSummaries().slice(0, ee).map(function(e, t) {
                            return c.createElement($, {
                                stream: e,
                                statNum: n.statNumForStreamSummary(e),
                                key: t
                            })
                        }))
                    }, n.handleSortTypeChange = function(e) {
                        n.setState({
                            sortType: e.target.value
                        })
                    }, n.statNumForStreamSummary = function(e) {
                        switch (n.state.sortType) {
                            case o.NewFollowers:
                            case o.NewSubscriptions:
                                return e.followersChange;
                            case o.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSummaryQuery.streamSummaries.slice();
                        switch (n.state.sortType) {
                            case o.NewFollowers:
                                return Object(X.e)(e, [function(e) {
                                    return e.followersChange
                                }], [X.a.Descending]);
                            case o.NewSubscriptions:
                                return Object(X.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [X.a.Descending]);
                            case o.AvgViewers:
                            default:
                                return Object(X.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [X.a.Descending])
                        }
                    }, n.state = {
                        sortType: o.AvgViewers
                    }, n
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSummaryQuery.isLoading ? c.createElement(S._2, {
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(S._8, {
                        height: 448
                    })) : this.props.streamSummaryQuery.streamSummaries.length < 3 ? c.createElement("span", null) : c.createElement(S._2, {
                        margin: {
                            top: 0,
                            x: .5,
                            bottom: 2
                        }
                    }, c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            top: 2
                        }
                    }, c.createElement(S._35, {
                        type: S._40.H4,
                        bold: !0
                    }, Object(m.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), c.createElement(S._25, {
                        elevation: 1,
                        background: S.m.Base
                    }, c.createElement(S._2, null, c.createElement(S._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        display: S.N.Flex
                    }, c.createElement(S._2, {
                        flexGrow: 1
                    }, c.createElement(S._35, {
                        type: S._40.H4,
                        bold: !0
                    }, Object(m.d)("Top {limit}", {
                        limit: ee
                    }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), c.createElement(S._2, null, this.sortDropdown())), this.streamsList())))
                }, t
            }(c.Component),
            ne = n("OAwv"),
            ae = function() {
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
                            n = ne.stringify(t);
                        return a.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = ne.parse(e.search);
                    var s = i(this.rawParams.start) || Object(v.startOfDay)(Object(v.subDays)(n, w - 1)),
                        o = Object(v.endOfDay)(i(this.rawParams.end) || n),
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
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new ae(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = E,
                        n = Object(v.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(c.Component),
            ie = n("AJEV"),
            se = n("pDcl"),
            oe = n("7qqA"),
            le = n("DNvj"),
            ce = function(e) {
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
                    Object(ie.f)(this.props.timeRange, e.timeRange) || this.fetchTopClips()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? c.createElement(oe.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(t) {
                        return c.createElement("span", null, e.props.children(l.__assign({}, e.state, {
                            streamSummaryQuery: t
                        })))
                    }) : c.createElement("span", null)
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
                                    }), [4, Object(le.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
            }(c.Component),
            pe = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    m.n.setPageTitle(Object(m.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = ie.c.fromChannelData(this.props.data.channel);
                    return c.createElement(u.b, null, c.createElement(re, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return c.createElement(S._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, c.createElement(R, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), c.createElement(S._25, {
                            margin: {
                                bottom: 1
                            },
                            display: S.N.Flex,
                            flexDirection: S.P.Column,
                            flexWrap: S.Q.NoWrap,
                            alignItems: S.c.Stretch,
                            breakpointMedium: {
                                flexDirection: S.P.Row
                            }
                        }, c.createElement(S._2, {
                            display: S.N.Flex,
                            flexGrow: 1,
                            flexWrap: S.Q.NoWrap,
                            flexDirection: S.P.Column
                        }, c.createElement(ce, {
                            timeRange: t.params,
                            channel: e
                        }, function(n) {
                            return c.createElement("div", null, c.createElement(Z, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                streamSummaryQuery: n.streamSummaryQuery
                            }), c.createElement(F, {
                                channel: e.name,
                                topClips: n.topClips
                            }), c.createElement(te, {
                                streamSummaryQuery: n.streamSummaryQuery
                            }))
                        }))))
                    }))
                }, t
            }(c.Component)),
            me = Object(p.d)(Object(d.a)(se, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(y.d)("ChannelAnalyticsPage", {
                destination: f.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(h.a)({
                location: g.PageviewLocation.DashboardChannelAnalytics
            }))(pe);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return pe
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return me
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-f9976b3c82c1e2bdb2dbd305c3e0e586.js.map