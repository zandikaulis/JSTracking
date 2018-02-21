webpackJsonp([81], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = c.__assign({}, e, t);
            if (Object(v.differenceInDays)(a.end, a.start) >= 0) return a;
            var r = Object(v.differenceInDays)(e.end, e.start);
            if (Object(v.isEqual)(e.end, a.end)) {
                var i = Object(v.startOfDay)(n),
                    s = Object(v.addDays)(a.start, r);
                return s > i && (s = i), c.__assign({}, a, {
                    end: s
                })
            }
            return Object(v.isEqual)(e.start, a.start) ? c.__assign({}, a, {
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

        function o(e, t) {
            return c.__awaiter(this, void 0, void 0, function() {
                var n, a, r, i;
                return c.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return e.role === W.d.None ? [2, {
                                isError: !1,
                                streams: be.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = fe.stringify(c.__assign({}, function(e, t) {
                                return {
                                    start_date: e.toJSON(),
                                    end_date: t.toJSON()
                                }
                            }(t.start, t.end), {
                                fraction: "day"
                            })), r = [n, a].join("?"), [4, Object(pe.d)({
                                path: r
                            })]);
                        case 1:
                            return (i = s.sent()).isError() ? [2, {
                                isError: !0,
                                streams: be.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: be.fromPayload(i.body)
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
            y = n("w9tK"),
            b = n("vH/s"),
            g = n("CSlQ"),
            v = n("wuJz"),
            _ = n("3zLD"),
            C = n("6UW8"),
            E = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new C({
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
            S = Object(v.parse)("2011-01-01"),
            w = 28,
            k = n("Odds"),
            x = {
                "data-test-selector": "commit-button"
            },
            R = {
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
                    return u.createElement("div", null, u.createElement(k._2, {
                        display: k.N.Flex,
                        flexWrap: k.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(k._2, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(E, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: S,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), u.createElement(E, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), u.createElement(k._2, {
                        display: k.N.Flex,
                        justifyContent: k._1.Center
                    }, u.createElement(k._2, {
                        margin: {
                            right: 2
                        }
                    }, u.createElement(k.u, c.__assign({}, x, {
                        onClick: this.handleUpdateClick
                    }), Object(p.d)("Update", "ChannelAnalyticsDateRangePicker"))), u.createElement(k.u, c.__assign({}, R, {
                        type: k.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(p.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(u.Component),
            A = n("ylrR"),
            T = n("9uzc"),
            O = {
                "data-test-selector": "time-range"
            },
            j = {
                "data-test-selector": "total-days"
            },
            P = {
                "data-test-selector": "date-picker-toggle"
            },
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return u.createElement(k._2, {
                        position: k._9.Relative
                    }, u.createElement(A.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return u.createElement(k._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, u.createElement(T.a, {
                                previousPath: "",
                                nextPath: ""
                            }, u.createElement(k.u, c.__assign({}, P, {
                                type: k.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), u.createElement(k._35, c.__assign({}, O, {
                                fontSize: 4
                            }), e.formatDateRange(t)), u.createElement(k._35, c.__assign({}, j, {
                                fontSize: 6,
                                color: k.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return u.createElement(k.p, {
                            noTail: !0,
                            show: !0,
                            direction: k.q.BottomCenter
                        }, u.createElement(k._2, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, u.createElement(D, {
                            interval: t,
                            onCommit: Object(_.compose)(a, e.props.updateInterval),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(v.differenceInDays)(e.end, e.start) + 1 ? Object(p.c)(e.start, "medium") : Object(p.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(v.differenceInDays)(e.end, e.start) + 1;
                    return Object(p.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(u.Component),
            L = function(e) {
                return u.createElement(k._2, {
                    margin: {
                        bottom: 1
                    }
                }, u.createElement(k._35, {
                    type: k._40.H5,
                    bold: !0
                }, e.children))
            },
            F = function(e) {
                var t = Object(p.e)(e, {
                    minimumIntegerDigits: 1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).split(".");
                return {
                    sign: "$",
                    dollars: t[0],
                    cents: t[1]
                }
            },
            I = n("FeZP"),
            W = n("AJEV"),
            B = function(e) {
                return u.createElement(k._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, u.createElement(k._2, {
                    display: k.N.Flex,
                    justifyContent: k._1.Between
                }, u.createElement(k._2, {
                    display: k.N.Flex,
                    alignItems: k.c.Center
                }, u.createElement("div", {
                    className: "revenue-breakdown-panel__key " + e.className
                }), u.createElement(k._2, {
                    margin: {
                        left: 1
                    }
                }, u.createElement(k._35, {
                    type: k._40.H5
                }, e.title))), u.createElement(k._2, {
                    textAlign: k._36.Right
                }, u.createElement(k._35, {
                    type: k._40.H5,
                    bold: !0
                }, e.revenue), u.createElement(k._35, {
                    type: k._40.H6,
                    color: k.I.Alt2
                }, Object(p.d)("{lastRevenue} last period", {
                    lastRevenue: e.lastRevenue
                }, "ChannelAnalyticsRevenueBreakdownPanel")))))
            },
            V = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            z = function(e) {
                if (e.revenue.isLoading) return u.createElement(k._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(k._8, {
                    height: 448
                }));
                if (e.channel.role === W.d.None) return u.createElement("div", null);
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams;
                return u.createElement(k._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(L, null, Object(p.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), u.createElement(k._25, {
                    elevation: 1,
                    background: k.m.Base
                }, u.createElement(M, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), u.createElement("div", null, u.createElement(k._2, {
                    textAlign: k._36.Right,
                    padding: {
                        x: 2
                    }
                }, u.createElement(k._35, {
                    type: k._40.H6,
                    bold: !0,
                    color: k.I.Alt2
                }, Object(p.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), u.createElement(B, {
                    title: Object(p.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: H(n.twitchSubscriptions.total),
                    lastRevenue: H(a.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }), u.createElement(B, {
                    title: Object(p.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: H(n.primeSubscriptions.total),
                    lastRevenue: H(a.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), u.createElement(B, {
                    title: Object(p.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: H(n.ads.total),
                    lastRevenue: H(a.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), u.createElement(B, {
                    title: Object(p.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: H(n.bits.total),
                    lastRevenue: H(a.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), u.createElement(B, {
                    title: Object(p.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: H(n.gameCommerce.total),
                    lastRevenue: H(a.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), u.createElement(B, {
                    title: Object(p.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: H(n.extensions.total),
                    lastRevenue: H(a.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }), u.createElement(I.a, {
                    message: Object(p.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                    url: ""
                }))))
            },
            M = function(e) {
                var t = F(e.totalAmount),
                    n = t.sign,
                    a = t.dollars,
                    r = t.cents;
                return u.createElement(k._2, c.__assign({
                    textAlign: k._36.Center,
                    padding: {
                        y: 2
                    }
                }, V), u.createElement(k._2, {
                    display: k.N.Flex,
                    justifyContent: k._1.Center
                }, u.createElement(k._25, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: k.d.Start,
                    color: k.I.Alt2
                }, n), u.createElement(k._35, {
                    type: k._40.H2,
                    bold: !0
                }, a), u.createElement(k._2, {
                    alignSelf: k.d.End
                }, u.createElement(k._35, {
                    type: k._40.Span,
                    bold: !0
                }, "." + r))), u.createElement(k._35, {
                    type: k._40.H6
                }, Object(p.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            H = function(e) {
                return Object(p.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            },
            Q = n("a+9f"),
            G = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return u.createElement(k._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(k._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return u.createElement("span", null);
                var a = Object(p.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return u.createElement(k._2, {
                    margin: {
                        top: 3
                    }
                }, u.createElement(L, null, Object(p.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), u.createElement(k._25, {
                    elevation: 1,
                    background: k.m.Base
                }, u.createElement(U, {
                    clipsAttrs: n
                }), t ? u.createElement(I.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : u.createElement("p", null, a)))
            },
            U = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(u.createElement(k._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, u.createElement(k._8, {
                        height: 50
                    })));
                return u.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return u.createElement(Q.a, c.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            q = n("WaEV"),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(k.W, {
                        fullWidth: !0
                    }, u.createElement("canvas", {
                        ref: this.handleCanvasReady
                    }))
                }, t.prototype.setCanvasResolution = function(e) {
                    var t = e.width,
                        n = e.height,
                        a = this.getPixelRatio(e.getContext("2d"));
                    e.width = t * a, e.height = n * a, e.style.width = t + "px", e.style.height = n + "px", e.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                }, t.prototype.getPixelRatio = function(e) {
                    return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                }, t
            }(u.Component),
            J = "#898395",
            K = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            $ = "rgba(0, 0, 0, 0)",
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        t.myChart = new q(e, {
                            type: "bar",
                            data: {
                                labels: t.props.labels,
                                datasets: t.datasetsWithColor()
                            },
                            options: {
                                scales: {
                                    xAxes: [{
                                        stacked: !0,
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
                                        stacked: !0,
                                        ticks: {
                                            min: 0,
                                            maxTicksLimit: 6,
                                            fontColor: J,
                                            fontSize: 10,
                                            padding: 5
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
                                    displayColors: !0,
                                    mode: "index",
                                    multiKeyBackground: $,
                                    callbacks: {
                                        title: t.formatTooltipTitle,
                                        label: t.formatTooltipLabel,
                                        labelColor: t.getLabelColor
                                    }
                                },
                                responsive: !0
                            }
                        })
                    }, t.formatTooltipTitle = function(e) {
                        var n = {
                            label: e[0].xLabel,
                            value: e.reduce(function(e, t) {
                                return e + Number(t.yLabel)
                            }, 0)
                        };
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(n)
                    }, t.formatTooltipLabel = function(e, n) {
                        var a = n.datasets[e.datasetIndex].label;
                        return t.props.formatTooltipLabel ? t.props.formatTooltipLabel({
                            label: a,
                            value: Number(e.yLabel)
                        }) : a + " " + e.yLabel
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: $,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(Y, {
                        onCanvasReady: this.handleCanvasReady
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update(0))
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: K[t]
                        }
                    })
                }, t
            }(u.Component),
            X = {
                "data-test-selector": "no-data"
            },
            ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSummaryQuery.isLoading) return u.createElement(k._2, {
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(k._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSummaryQuery.streamSummaries;
                    return 0 === e.length ? u.createElement(k._2, c.__assign({
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        textAlign: k._36.Center
                    }, X), u.createElement(k._35, {
                        type: k._40.H3
                    }, Object(p.d)("Nothing to show yet", "ChannelAnalyticsViewerGraph")), u.createElement(k._35, {
                        color: k.I.Alt2,
                        fontSize: 5
                    }, Object(p.d)("Not enough data for us to display", "ChannelAnalyticsViewerGraph"))) : u.createElement("div", {
                        className: "average-viewers-chart"
                    }, u.createElement(Z, {
                        labels: e.map(function(e) {
                            return Object(p.c)(new Date(e.id), {
                                month: "numeric",
                                day: "numeric"
                            })
                        }),
                        datasets: [{
                            label: Object(p.d)("viewers", "ChannelAnalyticsViewerGraph"),
                            data: e.map(function(e) {
                                return e.avgViewerCount
                            })
                        }]
                    }))
                }, t
            }(u.Component),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toDataList = function(e, t) {
                        var n = new Map;
                        return e.forEach(function(e) {
                            var t = e.amount,
                                a = e.date,
                                r = Object(v.startOfDay)(a).getTime(),
                                i = n.get(r) || 0;
                            n.set(r, i + t)
                        }), t.map(function(e) {
                            return n.get(e.getTime()) || 0
                        })
                    }, t.formatTooltipLabel = function(e) {
                        return Object(p.e)(e.value, {
                            style: "currency",
                            currency: "USD"
                        }) + " " + e.label
                    }, t.formatTooltipTitle = function(e) {
                        return Object(p.e)(e.value, {
                            style: "currency",
                            currency: "USD"
                        }) + " " + e.label
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                            for (var t = [], n = e.start; n <= e.end;) t.push(n), n = Object(v.addDays)(n, 1);
                            return t
                        }(this.props.interval),
                        t = this.props.analyticsResponse.revenue.streams;
                    return u.createElement(Z, {
                        labels: e.map(function(e) {
                            return Object(p.c)(e, "medium")
                        }),
                        datasets: [{
                            label: Object(p.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.twitchSubscriptions.timeseries, e)
                        }, {
                            label: Object(p.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.twitchSubscriptions.timeseries, e)
                        }, {
                            label: Object(p.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.ads.timeseries, e)
                        }, {
                            label: Object(p.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.bits.timeseries, e)
                        }, {
                            label: Object(p.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.gameCommerce.timeseries, e)
                        }, {
                            label: Object(p.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.extensions.timeseries, e)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle
                    })
                }, t
            }(u.Component),
            ne = n("HW6M"),
            ae = n("F8kA"),
            re = (n("h0zb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = ne("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return u.createElement(k.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: k._36.Center
                    }, u.createElement(ae.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, u.createElement(k._35, {
                        type: k._40.H3
                    }, this.props.title), u.createElement(k._35, {
                        type: k._40.H6
                    }, this.props.subtitle)))
                }, t
            }(u.Component)),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.streamSummaries.length) {
                        var t = function(e, t) {
                            return e.reduce(function(e, n) {
                                return e + t(n)
                            }, 0) / e.length
                        }(this.props.streamSummaries, function(e) {
                            return e.avgViewerCount
                        });
                        e = Object(p.e)(t, {
                            maximumFractionDigits: 0
                        })
                    } else e = "–";
                    return u.createElement(re, {
                        title: e,
                        subtitle: Object(p.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, t
            }(u.Component),
            se = (n("gFt/"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.analyticsResponse.revenue.isLoading) e = "–";
                    else {
                        var t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams(),
                            n = F(t),
                            a = n.sign,
                            r = n.dollars,
                            i = n.cents;
                        e = u.createElement("span", null, u.createElement(k._35, {
                            className: "top-stats-tab-revenue__super",
                            fontSize: k.R.Size6,
                            type: k._40.Span
                        }, a + " "), u.createElement(k._35, {
                            type: k._40.Span
                        }, r), u.createElement(k._35, {
                            className: "top-stats-tab-revenue__bottom",
                            fontSize: k.R.Size4,
                            type: k._40.Span
                        }, ".", i))
                    }
                    return u.createElement(re, {
                        title: e,
                        subtitle: Object(p.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, t
            }(u.Component)),
            oe = {
                "data-test-selector": "current-chart"
            },
            le = [ee, te],
            ce = le.length - 1,
            ue = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return u.createElement(k._25, {
                        background: k.m.Base,
                        elevation: 1
                    }, u.createElement(k._27, null, u.createElement(ie, {
                        streamSummaries: this.props.analyticsResponse.streamSummaryQuery.streamSummaries,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), u.createElement(se, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    })), u.createElement(k._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = le[this.cappedIndex];
                    return u.createElement(e, c.__assign({}, oe, {
                        analyticsResponse: this.props.analyticsResponse,
                        interval: this.props.paramStore
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(ce, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(u.Component),
            me = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return u.createElement(k.L, {
                    to: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    hoverUnderlineNone: !0
                }, u.createElement(k._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, u.createElement(k._2, {
                    display: k.N.Flex,
                    alignItems: k.c.Center
                }, u.createElement("img", {
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus
                }), u.createElement(k._2, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    }
                }, u.createElement(k._35, {
                    ellipsis: !0,
                    type: k._40.H5
                }, Object(p.d)("{start} - {end, time, short}", {
                    start: Object(p.c)(t.timeRange.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.timeRange.end
                }, "ChannelAnalyticsStreamCard")), u.createElement(k._35, {
                    color: k.I.Alt2,
                    type: k._40.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), u.createElement(k._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, u.createElement(k._35, {
                    color: k.I.Alt2,
                    type: k._40.Span
                }, Object(p.d)("{statNum, number}", {
                    statNum: function(e) {
                        return e < 10 ? Math.floor(10 * e) / 10 : Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard"))))))
            },
            pe = n("PGY2"),
            de = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(l || (l = {}));
        var he = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return u.createElement(k._21, {
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
                        return u.createElement("span", null, n.sortedStreamSummaries().slice(0, de).map(function(e, t) {
                            return u.createElement(me, {
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
                                return Object(pe.e)(e, [function(e) {
                                    return e.followersChange
                                }], [pe.a.Descending]);
                            case l.NewSubscriptions:
                                return Object(pe.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [pe.a.Descending]);
                            case l.AvgViewers:
                            default:
                                return Object(pe.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [pe.a.Descending])
                        }
                    }, n.state = {
                        sortType: l.AvgViewers
                    }, n
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSummaryQuery.isLoading ? u.createElement(k._2, {
                        margin: {
                            top: 3
                        }
                    }, u.createElement(k._8, {
                        height: 448
                    })) : this.props.streamSummaryQuery.streamSummaries.length < 3 ? u.createElement("span", null) : u.createElement(k._2, {
                        margin: {
                            top: 3
                        }
                    }, u.createElement(L, null, Object(p.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), u.createElement(k._25, {
                        elevation: 1,
                        background: k.m.Base
                    }, u.createElement(k._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        display: k.N.Flex
                    }, u.createElement(k._2, {
                        flexGrow: 1
                    }, u.createElement(k._35, {
                        type: k._40.H5,
                        bold: !0
                    }, Object(p.d)("Top {limit}", {
                        limit: de
                    }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), u.createElement("div", null, this.sortDropdown())), this.streamsList()))
                }, t
            }(u.Component),
            fe = n("OAwv"),
            ye = function() {
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
                            n = fe.stringify(t);
                        return a.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = fe.parse(e.search);
                    var s = i(this.rawParams.start) || Object(v.startOfDay)(Object(v.subDays)(n, w - 1)),
                        o = Object(v.endOfDay)(i(this.rawParams.end) || n),
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
            be = function() {
                function e(e) {
                    this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = e.twitchSubscriptionProducts;
                    var t = e.twitchSubscriptionProducts.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(t)
                }
                return e.fromPayload = function(t) {
                    var n = this;
                    return new e({
                        ads: this.normalizeTimeseries(t.ads),
                        bits: this.normalizeTimeseries(t.bits),
                        extensions: this.normalizeTimeseries(t.extensions),
                        gameCommerce: this.normalizeTimeseries(t.game_commerce),
                        primeSubscriptions: this.normalizeTimeseries(t.prime_subscriptions),
                        twitchSubscriptionProducts: t.twitch_subscriptions.map(function(e) {
                            return {
                                defaultPrice: e.default_price,
                                productID: e.product_id,
                                timeseries: n.normalizeTimeseries(e.revenue)
                            }
                        })
                    })
                }, e.buildEmpty = function() {
                    return new e({
                        ads: [],
                        bits: [],
                        extensions: [],
                        gameCommerce: [],
                        primeSubscriptions: [],
                        twitchSubscriptionProducts: []
                    })
                }, e.normalizeTimeseries = function(e) {
                    return e.map(function(e) {
                        return {
                            amount: e.amount / 100,
                            date: new Date(e.timestamp)
                        }
                    })
                }, e.prototype.getTotalAmountAllStreams = function() {
                    return this.ads.total + this.bits.total + this.extensions.total + this.gameCommerce.total + this.primeSubscriptions.total + this.twitchSubscriptions.total
                }, e.prototype.getTimeseriesWithTotal = function(e) {
                    return {
                        timeseries: e,
                        total: Math.floor(100 * e.reduce(function(e, t) {
                            return e + t.amount
                        }, 0)) / 100
                    }
                }, e
            }(),
            ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new ye(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = S,
                        n = Object(v.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(u.Component),
            ve = n("pDcl"),
            _e = n("7qqA"),
            Ce = n("DNvj"),
            Ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: be.buildEmpty(),
                            lookbackStreams: be.buildEmpty(),
                            isLoading: !0
                        }
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(W.f)(this.props.timeRange, e.timeRange) || (this.fetchTopClips(), this.fetchRevenues())
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? u.createElement(_e.a, {
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
                                    }), [4, Object(Ce.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
                                    streams: be.buildEmpty(),
                                    lookbackStreams: be.buildEmpty(),
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
            Se = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    p.n.setPageTitle(Object(p.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = W.c.fromChannelData(this.props.data.channel);
                    return u.createElement(d.b, null, u.createElement(ge, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return u.createElement(k._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, u.createElement(N, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), u.createElement(k._25, {
                            margin: {
                                bottom: 1
                            },
                            display: k.N.Flex,
                            flexDirection: k.P.Column,
                            flexWrap: k.Q.NoWrap,
                            alignItems: k.c.Stretch,
                            breakpointMedium: {
                                flexDirection: k.P.Row
                            }
                        }, u.createElement(k._2, {
                            display: k.N.Flex,
                            flexGrow: 1,
                            flexWrap: k.Q.NoWrap,
                            flexDirection: k.P.Column
                        }, u.createElement(Ee, {
                            timeRange: t.params,
                            lookbackTimeRange: function(e) {
                                var t = Object(v.differenceInDays)(e.end, e.start) + 1;
                                return {
                                    start: Object(v.subDays)(e.start, t),
                                    end: Object(v.subDays)(e.end, t)
                                }
                            }(t.params),
                            channel: e
                        }, function(n) {
                            return [u.createElement(ue, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                analyticsResponse: n,
                                key: "top-stats"
                            }), u.createElement(z, {
                                channel: e,
                                revenue: n.revenue,
                                key: "revenue-breakdown"
                            }), u.createElement(G, {
                                channel: e.name,
                                topClips: n.topClips,
                                key: "top-clips"
                            }), u.createElement(he, {
                                streamSummaryQuery: n.streamSummaryQuery,
                                key: "top-streams"
                            })]
                        }))))
                    }))
                }, t
            }(u.Component)),
            we = Object(m.d)(Object(h.a)(ve, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(g.d)("ChannelAnalyticsPage", {
                destination: y.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(f.a)({
                location: b.PageviewLocation.DashboardChannelAnalytics
            }))(Se);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return Se
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return we
        })
    },
    Wc9c: function(e, t) {},
    "gFt/": function(e, t) {},
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-6a994dc96c78c55e6bc0a3f8fc390ff1.js.map