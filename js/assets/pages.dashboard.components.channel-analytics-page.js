webpackJsonp([83], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = c.__assign({}, e, t);
            if (Object(_.differenceInDays)(a.end, a.start) >= 0) return a;
            var r = Object(_.differenceInDays)(e.end, e.start);
            if (Object(_.isEqual)(e.end, a.end)) {
                var i = Object(_.startOfDay)(n),
                    s = Object(_.addDays)(a.start, r);
                return s > i && (s = i), c.__assign({}, a, {
                    end: s
                })
            }
            return Object(_.isEqual)(e.start, a.start) ? c.__assign({}, a, {
                start: Object(_.subDays)(a.end, r)
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
                var t = Object(_.parse)(e);
                if (Object(_.isValid)(t)) return t
            }
        }

        function s(e) {
            return e ? Object(_.format)(e, "YYYY-MM-DD") : ""
        }

        function o(e, t) {
            return c.__awaiter(this, void 0, void 0, function() {
                var n, a, r, i;
                return c.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return e.role === I.d.None ? [2, {
                                isError: !1,
                                streams: new he(de)
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = me.stringify(c.__assign({}, function(e, t) {
                                return {
                                    start_date: e.toJSON(),
                                    end_date: t.toJSON()
                                }
                            }(t.start, t.end), {
                                fraction: "day"
                            })), r = [n, a].join("?"), [4, Object(le.d)({
                                path: r
                            })]);
                        case 1:
                            return (i = s.sent()).isError() ? [2, {
                                isError: !0,
                                streams: new he(de)
                            }] : [2, {
                                isError: !1,
                                streams: new he(i.body)
                            }]
                    }
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l, c = n("TToO"),
            u = n("U7vG"),
            m = n("2KeS"),
            p = n("6sO2"),
            d = n("zCIC"),
            h = n("7vx8"),
            f = n("j7/Y"),
            v = n("w9tK"),
            y = n("vH/s"),
            g = n("CSlQ"),
            _ = n("wuJz"),
            b = n("3zLD"),
            E = n("6UW8"),
            w = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new E({
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
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = !1;
                    this.props.date !== e.date && (this._picker.setDate(e.date, !0), t = !0), this.props.startRange !== e.startRange && (this._picker.setStartRange(e.startRange), t = !0), this.props.endRange !== e.endRange && (this._picker.setEndRange(e.endRange), t = !0), e.minDate && this.props.minDate !== e.minDate && (this._picker.setMinDate(e.minDate), t = !0), e.maxDate && this.props.maxDate !== e.maxDate && (this._picker.setMaxDate(e.maxDate), t = !0), t && this._picker.draw(!1)
                }, t.prototype.render = function() {
                    return u.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(u.Component)),
            C = Object(_.parse)("2011-01-01"),
            k = 28,
            A = n("Odds"),
            S = {
                "data-test-selector": "commit-button"
            },
            x = {
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
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return u.createElement("div", null, u.createElement(A._2, {
                        display: A.N.Flex,
                        flexWrap: A.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(A._2, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(w, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: C,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), u.createElement(w, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), u.createElement(A._2, {
                        display: A.N.Flex,
                        justifyContent: A._1.Center
                    }, u.createElement(A._2, {
                        margin: {
                            right: 2
                        }
                    }, u.createElement(A.u, c.__assign({}, S, {
                        onClick: this.handleUpdateClick
                    }), Object(p.d)("Update", "ChannelAnalyticsDateRangePicker"))), u.createElement(A.u, c.__assign({}, x, {
                        type: A.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(p.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(u.Component),
            O = n("ylrR"),
            R = n("9uzc"),
            j = {
                "data-test-selector": "time-range"
            },
            N = {
                "data-test-selector": "total-days"
            },
            P = {
                "data-test-selector": "date-picker-toggle"
            },
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return u.createElement(A._2, {
                        position: A._9.Relative
                    }, u.createElement(O.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return u.createElement(A._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, u.createElement(R.a, {
                                previousPath: "",
                                nextPath: ""
                            }, u.createElement(A.u, c.__assign({}, P, {
                                type: A.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), u.createElement(A._35, c.__assign({}, j, {
                                fontSize: 4
                            }), e.formatDateRange(t)), u.createElement(A._35, c.__assign({}, N, {
                                fontSize: 6,
                                color: A.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return u.createElement(A.p, {
                            noTail: !0,
                            show: !0,
                            direction: A.q.BottomCenter
                        }, u.createElement(A._2, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, u.createElement(D, {
                            interval: t,
                            onCommit: Object(b.compose)(a, e.props.updateInterval),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(_.differenceInDays)(e.end, e.start) + 1 ? Object(p.c)(e.start, "medium") : Object(p.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(_.differenceInDays)(e.end, e.start) + 1;
                    return Object(p.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(u.Component),
            B = function(e) {
                return u.createElement(A._2, {
                    margin: {
                        bottom: 1
                    }
                }, u.createElement(A._35, {
                    type: A._40.H5,
                    bold: !0
                }, e.children))
            },
            F = n("FeZP"),
            I = n("AJEV"),
            V = function(e) {
                return u.createElement(A._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, u.createElement(A._2, {
                    display: A.N.Flex,
                    justifyContent: A._1.Between
                }, u.createElement(A._2, {
                    display: A.N.Flex,
                    alignItems: A.c.Center
                }, u.createElement("div", {
                    className: "revenue-breakdown-panel__key " + e.className
                }), u.createElement(A._2, {
                    margin: {
                        left: 1
                    }
                }, u.createElement(A._35, {
                    type: A._40.H5
                }, e.title))), u.createElement(A._2, {
                    textAlign: A._36.Right
                }, u.createElement(A._35, {
                    type: A._40.H5,
                    bold: !0
                }, e.revenue), u.createElement(A._35, {
                    type: A._40.H6,
                    color: A.I.Alt2
                }, Object(p.d)("{lastRevenue} last period", {
                    lastRevenue: e.lastRevenue
                }, "ChannelAnalyticsRevenueBreakdownPanel")))))
            },
            L = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            W = function(e) {
                if (e.revenue.isLoading) return u.createElement(A._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(A._8, {
                    height: 448
                }));
                if (e.channel.role === I.d.None) return u.createElement("div", null);
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams;
                return u.createElement(A._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(B, null, Object(p.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), u.createElement(A._25, {
                    elevation: 1,
                    background: A.m.Base
                }, u.createElement(M, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), u.createElement("div", null, u.createElement(A._2, {
                    textAlign: A._36.Right,
                    padding: {
                        x: 2
                    }
                }, u.createElement(A._35, {
                    type: A._40.H6,
                    bold: !0,
                    color: A.I.Alt2
                }, Object(p.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), u.createElement(V, {
                    title: Object(p.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.twitchSubscriptions.totalAmount),
                    lastRevenue: Q(a.twitchSubscriptions.totalAmount),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }), u.createElement(V, {
                    title: Object(p.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.primeSubscriptions.totalAmount),
                    lastRevenue: Q(a.primeSubscriptions.totalAmount),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), u.createElement(V, {
                    title: Object(p.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.ads.totalAmount),
                    lastRevenue: Q(a.ads.totalAmount),
                    className: "revenue-breakdown-panel__key--ads"
                }), u.createElement(V, {
                    title: Object(p.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.bits.totalAmount),
                    lastRevenue: Q(a.bits.totalAmount),
                    className: "revenue-breakdown-panel__key--bits"
                }), u.createElement(V, {
                    title: Object(p.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.gameCommerce.totalAmount),
                    lastRevenue: Q(a.gameCommerce.totalAmount),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), u.createElement(V, {
                    title: Object(p.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.extensions.totalAmount),
                    lastRevenue: Q(a.extensions.totalAmount),
                    className: "revenue-breakdown-panel__key--extensions"
                }), u.createElement(F.a, {
                    message: Object(p.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                    url: ""
                }))))
            },
            M = function(e) {
                var t = G(e.totalAmount),
                    n = t.dollarAmount,
                    a = t.centAmount;
                return u.createElement(A._2, c.__assign({
                    textAlign: A._36.Center,
                    padding: {
                        y: 2
                    }
                }, L), u.createElement(A._2, {
                    display: A.N.Flex,
                    justifyContent: A._1.Center
                }, u.createElement(A._25, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: A.d.Start,
                    color: A.I.Alt2
                }, "$"), u.createElement(A._35, {
                    type: A._40.H2,
                    bold: !0
                }, n), u.createElement(A._2, {
                    alignSelf: A.d.End
                }, u.createElement(A._35, {
                    type: A._40.Span,
                    bold: !0
                }, "." + a))), u.createElement(A._35, {
                    type: A._40.H6
                }, Object(p.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            G = function(e) {
                var t = Object(p.e)(e / 100, {
                    minimumIntegerDigits: 1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                return {
                    dollarAmount: t.split(".")[0],
                    centAmount: t.split(".")[1]
                }
            },
            Q = function(e) {
                return Object(p.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            z = n("a+9f"),
            H = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return u.createElement(A._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(A._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return u.createElement("span", null);
                var a = Object(p.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return u.createElement(A._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(B, null, Object(p.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), u.createElement(A._25, {
                    elevation: 1,
                    background: A.m.Base
                }, u.createElement(U, {
                    clipsAttrs: n
                }), t ? u.createElement(F.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : u.createElement("p", null, a)))
            },
            U = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(u.createElement(A._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, u.createElement(A._8, {
                        height: 50
                    })));
                return u.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return u.createElement(z.a, c.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            q = n("WaEV"),
            Y = 400,
            J = 190,
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new q(this.viewerGraph, {
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
                    return u.createElement(A.W, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, u.createElement("canvas", {
                        ref: function(t) {
                            return e.viewerGraph = t
                        }
                    }))
                }, t.prototype.setCanvasResolution = function() {
                    var e = Y,
                        t = J,
                        n = K(this.viewerGraph.getContext("2d"));
                    this.viewerGraph.width = e * n, this.viewerGraph.height = t * n, this.viewerGraph.style.width = e + "px", this.viewerGraph.style.height = t + "px", this.viewerGraph.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t
            }(u.Component),
            K = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            Z = {
                "data-test-selector": "no-data"
            },
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.streamSummaryQuery.isLoading) return u.createElement(A._2, {
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(A._8, {
                        height: 300
                    }));
                    var e = this.props.streamSummaryQuery.streamSummaries;
                    return 0 === e.length ? u.createElement(A._2, c.__assign({
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        textAlign: A._36.Center
                    }, Z), u.createElement(A._35, {
                        type: A._40.H3
                    }, Object(p.d)("Nothing to show yet", "ChannelAnalyticsViewerGraph")), u.createElement(A._35, {
                        color: A.I.Alt2,
                        fontSize: 5
                    }, Object(p.d)("Not enough data for us to display", "ChannelAnalyticsViewerGraph"))) : u.createElement("div", {
                        className: "average-viewers-chart"
                    }, u.createElement($, {
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
            }(u.Component),
            ee = n("HW6M"),
            te = n("F8kA"),
            ne = (n("h0zb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = ee("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return u.createElement(A.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: A._36.Center
                    }, u.createElement(te.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, u.createElement(A._35, {
                        type: A._40.H3
                    }, this.props.title), u.createElement(A._35, {
                        type: A._40.H6
                    }, this.props.subtitle)))
                }, t
            }(u.Component)),
            ae = {
                "data-test-selector": "current-chart"
            },
            re = [X, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement("p", null, "Total Views Chart")
                }, t
            }(u.Component)],
            ie = re.length - 1,
            se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return u.createElement(A._25, {
                        background: A.m.Base,
                        elevation: 1
                    }, u.createElement(A._27, null, u.createElement(ne, {
                        title: "8,201",
                        subtitle: Object(p.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), u.createElement(ne, {
                        title: "1",
                        subtitle: Object(p.d)("Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    })), u.createElement(A._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = re[this.cappedIndex];
                    return u.createElement(e, c.__assign({}, ae, {
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(ie, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(u.Component),
            oe = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return u.createElement(A.L, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, u.createElement(A._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, u.createElement(A._2, {
                    display: A.N.Flex,
                    alignItems: A.c.Center
                }, u.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), u.createElement(A._2, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, u.createElement(A._35, {
                    ellipsis: !0,
                    type: A._40.H5
                }, t.startChannelStatus), u.createElement(A._35, {
                    color: A.I.Alt2,
                    type: A._40.Span,
                    ellipsis: !0
                }, Object(p.c)(t.timeRange.start, {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))), u.createElement(A._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, u.createElement(A._35, {
                    type: A._40.Span
                }, Object(p.d)("{statNum, number}", {
                    statNum: function(e) {
                        return e < 10 ? Math.floor(10 * e) / 10 : Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard"))))))
            },
            le = n("PGY2"),
            ce = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(l || (l = {}));
        var ue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return u.createElement(A._21, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, u.createElement("option", {
                            value: l.AvgViewers
                        }, Object(p.d)("Avg Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), u.createElement("option", {
                            value: l.NewFollowers
                        }, Object(p.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), u.createElement("option", {
                            value: l.NewSubscriptions
                        }, Object(p.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
                    }, n.streamsList = function() {
                        return u.createElement("span", null, n.sortedStreamSummaries().slice(0, ce).map(function(e, t) {
                            return u.createElement(oe, {
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
                            case l.NewFollowers:
                            case l.NewSubscriptions:
                                return e.followersChange;
                            case l.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSummaryQuery.streamSummaries.slice();
                        switch (n.state.sortType) {
                            case l.NewFollowers:
                                return Object(le.e)(e, [function(e) {
                                    return e.followersChange
                                }], [le.a.Descending]);
                            case l.NewSubscriptions:
                                return Object(le.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [le.a.Descending]);
                            case l.AvgViewers:
                            default:
                                return Object(le.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [le.a.Descending])
                        }
                    }, n.state = {
                        sortType: l.AvgViewers
                    }, n
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSummaryQuery.isLoading ? u.createElement(A._2, {
                        margin: {
                            top: 3
                        }
                    }, u.createElement(A._8, {
                        height: 448
                    })) : this.props.streamSummaryQuery.streamSummaries.length < 3 ? u.createElement("span", null) : u.createElement(A._2, {
                        margin: {
                            top: 3
                        }
                    }, u.createElement(B, null, Object(p.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), u.createElement(A._25, {
                        elevation: 1,
                        background: A.m.Base
                    }, u.createElement(A._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        display: A.N.Flex
                    }, u.createElement(A._2, {
                        flexGrow: 1
                    }, u.createElement(A._35, {
                        type: A._40.H5,
                        bold: !0
                    }, Object(p.d)("Top {limit}", {
                        limit: ce
                    }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), u.createElement("div", null, this.sortDropdown())), this.streamsList(), this.viewDetails()))
                }, t.prototype.viewDetails = function() {
                    var e = Object(p.d)("View Details", "ChannelAnalyticsTopStreamsByAverageViewersPanel");
                    return this.props.streamSummaryQuery.channel ? u.createElement(F.a, {
                        message: e,
                        url: "/" + this.props.streamSummaryQuery.channel.name + "/dashboard/stream-summary"
                    }) : u.createElement("p", null, e)
                }, t
            }(u.Component),
            me = n("OAwv"),
            pe = function() {
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
                            }(c.__assign({}, a.rawParams, r(e))),
                            n = me.stringify(t);
                        return a.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = me.parse(e.search);
                    var s = i(this.rawParams.start) || Object(_.startOfDay)(Object(_.subDays)(n, k - 1)),
                        o = Object(_.endOfDay)(i(this.rawParams.end) || n),
                        l = function(e) {
                            var t = Number(e);
                            return t ? (t = Math.floor(t), t = Math.max(0, t)) : 0
                        }(this.rawParams.topStatsIndex);
                    this.params = {
                        start: s,
                        end: o,
                        topStatsIndex: l
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }(),
            de = {
                ads: [],
                bits: [],
                extensions: [],
                game_commerce: [],
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            he = function() {
                function e(e) {
                    var t = function(e, t) {
                        return e + t.amount
                    };
                    this.ads = {
                        stream: e.ads,
                        totalAmount: Math.floor(e.ads.reduce(t, 0))
                    }, this.bits = {
                        stream: e.bits,
                        totalAmount: Math.floor(e.bits.reduce(t, 0))
                    }, this.extensions = {
                        stream: e.extensions,
                        totalAmount: Math.floor(e.extensions.reduce(t, 0))
                    }, this.gameCommerce = {
                        stream: e.game_commerce,
                        totalAmount: Math.floor(e.game_commerce.reduce(t, 0))
                    }, this.primeSubscriptions = {
                        stream: e.prime_subscriptions,
                        totalAmount: Math.floor(e.prime_subscriptions.reduce(t, 0))
                    };
                    var n = e.twitch_subscriptions.map(function(e) {
                        return {
                            defaultPrice: e.default_price,
                            productID: e.product_id,
                            revenue: e.revenue,
                            totalTierAmount: Math.floor(e.revenue.reduce(t, 0))
                        }
                    });
                    this.twitchSubscriptions = {
                        stream: n,
                        totalAmount: Math.floor(n.reduce(function(e, t) {
                            return e + t.totalTierAmount
                        }, 0))
                    }
                }
                return e.prototype.getTotalAmountAllStreams = function() {
                    return this.ads.totalAmount + this.bits.totalAmount + this.extensions.totalAmount + this.gameCommerce.totalAmount + this.primeSubscriptions.totalAmount + this.twitchSubscriptions.totalAmount
                }, e
            }(),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new pe(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = C,
                        n = Object(_.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(u.Component),
            ve = n("pDcl"),
            ye = n("7qqA"),
            ge = n("DNvj"),
            _e = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: new he(de),
                            lookbackStreams: new he(de),
                            isLoading: !0
                        }
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(I.f)(this.props.timeRange, e.timeRange) || (this.fetchTopClips(), this.fetchRevenues())
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? u.createElement(ye.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(t) {
                        return u.createElement("div", null, e.props.children(c.__assign({}, e.state, {
                            streamSummaryQuery: t
                        })))
                    }) : u.createElement("span", null)
                }, t.prototype.fetchTopClips = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(ge.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
                }, t.prototype.fetchRevenues = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e = this;
                        return c.__generator(this, function(t) {
                            return this.props.channel ? (this.setState({
                                revenue: {
                                    streams: new he(de),
                                    lookbackStreams: new he(de),
                                    isLoading: !0
                                }
                            }), o(this.props.channel, this.props.timeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: c.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), o(this.props.channel, this.props.lookbackTimeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: c.__assign({}, e.revenue, {
                                            lookbackStreams: t.streams
                                        })
                                    }
                                })
                            }), [2]) : [2]
                        })
                    })
                }, t
            }(u.Component),
            be = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    p.n.setPageTitle(Object(p.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = I.c.fromChannelData(this.props.data.channel);
                    return u.createElement(d.b, null, u.createElement(fe, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return u.createElement(A._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, u.createElement(T, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), u.createElement(A._25, {
                            margin: {
                                bottom: 1
                            },
                            display: A.N.Flex,
                            flexDirection: A.P.Column,
                            flexWrap: A.Q.NoWrap,
                            alignItems: A.c.Stretch,
                            breakpointMedium: {
                                flexDirection: A.P.Row
                            }
                        }, u.createElement(A._2, {
                            display: A.N.Flex,
                            flexGrow: 1,
                            flexWrap: A.Q.NoWrap,
                            flexDirection: A.P.Column
                        }, u.createElement(_e, {
                            timeRange: t.params,
                            lookbackTimeRange: function(e) {
                                var t = Object(_.differenceInDays)(e.end, e.start) + 1;
                                return {
                                    start: Object(_.subDays)(e.start, t),
                                    end: Object(_.subDays)(e.end, t)
                                }
                            }(t.params),
                            channel: e
                        }, function(n) {
                            return [u.createElement(se, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                streamSummaryQuery: n.streamSummaryQuery,
                                key: "top-stats"
                            }), u.createElement(W, {
                                channel: e,
                                revenue: n.revenue,
                                key: "revenue-breakdown"
                            }), u.createElement(H, {
                                channel: e.name,
                                topClips: n.topClips,
                                key: "top-clips"
                            }), u.createElement(ue, {
                                streamSummaryQuery: n.streamSummaryQuery,
                                key: "top-streams"
                            })]
                        }))))
                    }))
                }, t
            }(u.Component)),
            Ee = Object(m.d)(Object(h.a)(ve, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(g.d)("ChannelAnalyticsPage", {
                destination: v.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(f.a)({
                location: y.PageviewLocation.DashboardChannelAnalytics
            }))(be);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return be
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return Ee
        })
    },
    Wc9c: function(e, t) {},
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-1469f4f5cc7801ca6346646eb8808f9d.js.map