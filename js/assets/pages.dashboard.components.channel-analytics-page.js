webpackJsonp([80], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("GiK3"),
            s = n("2KeS"),
            i = n("6sO2"),
            o = n("zCIC"),
            l = n("7vx8"),
            c = n("j7/Y"),
            u = n("w9tK"),
            p = n("vH/s"),
            m = n("CSlQ"),
            d = n("wuJz"),
            h = n("3zLD"),
            f = n("6UW8"),
            b = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new f({
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
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = !1;
                    this.props.date !== e.date && (this._picker.setDate(e.date, !0), t = !0), this.props.startRange !== e.startRange && (this._picker.setStartRange(e.startRange), t = !0), this.props.endRange !== e.endRange && (this._picker.setEndRange(e.endRange), t = !0), e.minDate && this.props.minDate !== e.minDate && (this._picker.setMinDate(e.minDate), t = !0), e.maxDate && this.props.maxDate !== e.maxDate && (this._picker.setMaxDate(e.maxDate), t = !0), t && this._picker.draw(!1)
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(r.Component)),
            g = Object(d.parse)("2011-01-01"),
            y = 28,
            v = [{
                defaultPrice: 499,
                productID: "",
                timeseries: []
            }, {
                defaultPrice: 999,
                productID: "",
                timeseries: []
            }, {
                defaultPrice: 2499,
                productID: "",
                timeseries: []
            }];

        function _(e, t, n) {
            void 0 === n && (n = new Date);
            var r = a.__assign({}, e, t);
            if (Object(d.differenceInDays)(r.end, r.start) >= 0) return r;
            var s = Object(d.differenceInDays)(e.end, e.start);
            if (Object(d.isEqual)(e.end, r.end)) {
                var i = Object(d.startOfDay)(n),
                    o = Object(d.addDays)(r.start, s);
                return o > i && (o = i), a.__assign({}, r, {
                    end: o
                })
            }
            return Object(d.isEqual)(e.start, r.start) ? a.__assign({}, r, {
                start: Object(d.subDays)(r.end, s)
            }) : e
        }
        var C = n("Odds"),
            E = {
                "data-test-selector": "commit-button"
            },
            S = {
                "data-test-selector": "cancel-button"
            },
            w = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = _(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = _(n.state.interval, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return r.createElement("div", null, r.createElement(C._2, {
                        display: C.N.Flex,
                        flexWrap: C.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement(b, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: g,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), r.createElement(b, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), r.createElement(C._2, {
                        display: C.N.Flex,
                        justifyContent: C._1.Center
                    }, r.createElement(C._2, {
                        margin: {
                            right: 2
                        }
                    }, r.createElement(C.u, a.__assign({}, E, {
                        onClick: this.handleUpdateClick
                    }), Object(i.d)("Update", "ChannelAnalyticsDateRangePicker"))), r.createElement(C.u, a.__assign({}, S, {
                        type: C.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(i.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(r.Component),
            k = n("ylrR"),
            T = n("9uzc"),
            R = {
                "data-test-selector": "time-range"
            },
            A = {
                "data-test-selector": "total-days"
            },
            x = {
                "data-test-selector": "date-picker-toggle"
            },
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return r.createElement(C._2, {
                        position: C._9.Relative
                    }, r.createElement(k.a, {
                        control: function(n) {
                            var s = n.toggle;
                            return r.createElement(C._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, r.createElement(T.a, {
                                previousPath: "",
                                nextPath: ""
                            }, r.createElement(C.u, a.__assign({}, x, {
                                type: C.z.Text,
                                onClick: s,
                                fullWidth: !0
                            }), r.createElement(C._35, a.__assign({}, R, {
                                fontSize: 4
                            }), e.formatDateRange(t)), r.createElement(C._35, a.__assign({}, A, {
                                fontSize: 6,
                                color: C.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return r.createElement(C.p, {
                            noTail: !0,
                            show: !0,
                            direction: C.q.BottomCenter
                        }, r.createElement(C._2, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, r.createElement(w, {
                            interval: t,
                            onCommit: Object(h.compose)(a, e.props.updateInterval),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(d.differenceInDays)(e.end, e.start) + 1 ? Object(i.c)(e.start, "medium") : Object(i.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(d.differenceInDays)(e.end, e.start) + 1;
                    return Object(i.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(r.Component),
            O = function(e) {
                return r.createElement(C._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(C._35, {
                    type: C._40.H5,
                    bold: !0
                }, e.children))
            },
            j = function(e) {
                var t = Object(i.e)(e, {
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
            P = n("FeZP"),
            N = n("AJEV"),
            L = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleHover = function() {
                        n.setState(function(e) {
                            return {
                                isHovered: !e.isHovered
                            }
                        })
                    }, n.state = {
                        isHovered: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, r.createElement(C._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: C._9.Relative
                    }, r.createElement(C._2, {
                        display: C.N.Flex,
                        justifyContent: C._1.Between
                    }, r.createElement(C._2, {
                        display: C.N.Flex,
                        alignItems: C.c.Center
                    }, r.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), r.createElement(C._2, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(C._35, {
                        type: C._40.H5
                    }, this.props.title))), r.createElement(C._2, {
                        textAlign: C._36.Right
                    }, r.createElement(C._35, {
                        type: C._40.H5,
                        bold: !0
                    }, this.props.revenue), r.createElement(C._35, {
                        type: C._40.H6,
                        color: C.I.Alt2
                    }, Object(i.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? r.createElement(C.p, {
                        show: !0,
                        direction: C.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(r.Component),
            I = function(e) {
                return r.createElement(C._2, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, r.createElement("table", null, r.createElement("thead", null, r.createElement("tr", null, r.createElement("td", null, r.createElement(C._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(C._35, {
                    bold: !0
                }, Object(i.d)("Subscription", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(C._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(C._35, {
                    bold: !0
                }, Object(i.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(C._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(C._35, {
                    bold: !0
                }, Object(i.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), r.createElement("tbody", null, e.subCounts.types.twitchSubscriptionProducts.map(function(t, n) {
                    return r.createElement(F, {
                        key: n,
                        tier: Object(i.e)(t.defaultPrice / 100, {
                            style: "currency",
                            currency: "USD"
                        }),
                        subscribers: Object(i.e)(t.total),
                        revenue: function(e, t) {
                            var n = t.twitchSubscriptionProducts.filter(function(t) {
                                return e === t.productID
                            })[0];
                            if (!n) return Object(i.e)(0, {
                                style: "currency",
                                currency: "USD"
                            });
                            return Object(i.e)(n.total, {
                                style: "currency",
                                currency: "USD"
                            })
                        }(t.productID, e.revenue.streams)
                    })
                }))))
            };
        var F = function(e) {
                return r.createElement("tr", null, r.createElement("td", null, r.createElement(C._35, null, e.tier)), r.createElement("td", null, r.createElement(C._35, null, e.subscribers)), r.createElement("td", null, r.createElement(C._35, null, e.revenue)))
            },
            W = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            B = function(e) {
                if (e.revenue.isLoading) return r.createElement(C._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(C._8, {
                    height: 448
                }));
                if (e.channel.role === N.d.None) return r.createElement("div", null);
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams;
                return r.createElement(C._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(O, null, Object(i.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), r.createElement(C._25, {
                    elevation: 1,
                    background: C.m.Base
                }, r.createElement(M, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), r.createElement("div", null, r.createElement(C._2, {
                    textAlign: C._36.Right,
                    padding: {
                        x: 2
                    }
                }, r.createElement(C._35, {
                    type: C._40.H6,
                    bold: !0,
                    color: C.I.Alt2
                }, Object(i.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), r.createElement(L, {
                    title: Object(i.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.twitchSubscriptions.total),
                    lastRevenue: V(a.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : r.createElement(I, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), r.createElement(L, {
                    title: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.primeSubscriptions.total),
                    lastRevenue: V(a.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), r.createElement(L, {
                    title: Object(i.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.ads.total),
                    lastRevenue: V(a.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), r.createElement(L, {
                    title: Object(i.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.bits.total),
                    lastRevenue: V(a.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), r.createElement(L, {
                    title: Object(i.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.gameCommerce.total),
                    lastRevenue: V(a.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), r.createElement(L, {
                    title: Object(i.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.extensions.total),
                    lastRevenue: V(a.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }), r.createElement(P.a, {
                    message: Object(i.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                    url: ""
                }))))
            },
            M = function(e) {
                var t = j(e.totalAmount),
                    n = t.sign,
                    s = t.dollars,
                    o = t.cents;
                return r.createElement(C._2, a.__assign({
                    textAlign: C._36.Center,
                    padding: {
                        y: 2
                    }
                }, W), r.createElement(C._2, {
                    display: C.N.Flex,
                    justifyContent: C._1.Center
                }, r.createElement(C._25, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: C.d.Start,
                    color: C.I.Alt2
                }, n), r.createElement(C._35, {
                    type: C._40.H2,
                    bold: !0
                }, s), r.createElement(C._2, {
                    alignSelf: C.d.End
                }, r.createElement(C._35, {
                    type: C._40.Span,
                    bold: !0
                }, "." + o))), r.createElement(C._35, {
                    type: C._40.H6
                }, Object(i.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            V = function(e) {
                return Object(i.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            },
            z = n("a+9f"),
            H = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return r.createElement(C._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(C._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return r.createElement("span", null);
                var a = Object(i.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return r.createElement(C._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(O, null, Object(i.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), r.createElement(C._25, {
                    elevation: 1,
                    background: C.m.Base
                }, r.createElement(U, {
                    clipsAttrs: n
                }), t ? r.createElement(P.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : r.createElement("p", null, a)))
            },
            U = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(r.createElement(C._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, r.createElement(C._8, {
                        height: 50
                    })));
                return r.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return r.createElement(z.a, a.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            q = {
                "data-test-selector": "no-data"
            },
            G = function() {
                return r.createElement(C._2, a.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    textAlign: C._36.Center
                }, q), r.createElement(C._35, {
                    type: C._40.H3
                }, Object(i.d)("Nothing to show yet", "ChannelAnalyticsChartNoData")), r.createElement(C._35, {
                    color: C.I.Alt2,
                    fontSize: 5
                }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsChartNoData")))
            },
            Y = n("WaEV"),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(C.W, {
                        fullWidth: !0
                    }, r.createElement("canvas", {
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
            }(r.Component),
            Q = "#898395",
            K = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            X = "rgba(0, 0, 0, 0)",
            $ = "#ffffff",
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        var n = {
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
                                            fontColor: Q,
                                            fontSize: 10,
                                            padding: 5,
                                            callback: t.formatXAxes
                                        },
                                        gridLines: {
                                            color: $,
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
                                            fontColor: Q,
                                            fontSize: 10,
                                            padding: 5
                                        },
                                        gridLines: {
                                            borderDash: [5, 5],
                                            color: "rgba(150,150,150,0.2)",
                                            zeroLineColor: "rgba(150,150,150,0.2)",
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
                                    intersect: !1,
                                    mode: "index",
                                    titleFontColor: "#BEACDE",
                                    bodyFontColor: $,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: X,
                                    callbacks: {
                                        title: t.formatTooltipTitle,
                                        label: t.formatTooltipLabel,
                                        labelColor: t.getLabelColor
                                    }
                                },
                                onClick: t.handleDatasetClick,
                                responsive: !0
                            }
                        };
                        t.myChart = new Y(e, n)
                    }, t.formatXAxes = function(e) {
                        var t = Number(e);
                        return isNaN(t) ? e : Object(i.c)(new Date(Number(e)), {
                            month: "short",
                            day: "numeric"
                        })
                    }, t.handleDatasetClick = function(e, n) {
                        if (t.props.onDatasetClick) return t.props.onDatasetClick(e, n)
                    }, t.formatTooltipTitle = function(e) {
                        var n = e[0].index,
                            a = {
                                label: t.props.labels[n],
                                value: e.reduce(function(e, t) {
                                    return e + Number(t.yLabel)
                                }, 0),
                                index: n
                            };
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(a)
                    }, t.formatTooltipLabel = function(e, n) {
                        var a = e.index,
                            r = n.datasets[e.datasetIndex].label;
                        if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                            label: r,
                            value: Number(e.yLabel),
                            index: a
                        });
                        var s = Number(e.yLabel);
                        return isNaN(s) ? e.yLabel : Object(i.e)(Number(e.yLabel))
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: X,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        className: "top-stats-chart"
                    }, r.createElement(J, {
                        onCanvasReady: this.handleCanvasReady
                    }))
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
            }(r.Component),
            ee = n("PGY2"),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatasetClick = function(e, n) {
                        if (t.props.onDatasetClick) return t.props.onDatasetClick(e, n);
                        if (t.props.channelName && n && n.length > 0) {
                            var a = t.props.labels[n[0]._index];
                            window.open("/" + t.props.channelName + "/dashboard/stream-summary/" + a)
                        }
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(e);
                        var n = e.label;
                        if (t.props.durations) {
                            var a = t.props.durations[e.index],
                                r = Object(i.c)(new Date(Number(n)), {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                s = Object(ee.e)(a);
                            return Object(i.d)("{date} – {shortDuration}", {
                                date: r,
                                shortDuration: s
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(Z, {
                        labels: this.props.labels,
                        datasets: this.props.datasets,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        onDatasetClick: this.handleDatasetClick
                    })
                }, t
            }(r.Component),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = Object(i.d)("{total, plural, one {Avg. Viewer} other {Avg. Viewers}}", {
                            total: e.value
                        }, "ChannelAnalyticsAvgViewers");
                        return Object(i.d)("{total, number} {metric}", {
                            total: e.value,
                            metric: t
                        }, "ChannelAnalyticsAvgViewers")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(C._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(G, null) : r.createElement(te, {
                        channelName: e[0].channel.name,
                        labels: e.map(function(e) {
                            return e.id.toString()
                        }),
                        durations: e.map(function(e) {
                            return e.timeRange.duration
                        }),
                        datasets: [{
                            label: Object(i.d)("Avg. Viewers", "ChannelAnalyticsViewerGraph"),
                            data: e.map(function(e) {
                                return function(e) {
                                    if (e < 10) return Math.floor(10 * e) / 10;
                                    return Math.floor(e)
                                }(e.avgViewerCount)
                            })
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(r.Component);
        var ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = Object(i.d)("{total, plural, one {Message} other {Messages}}", {
                            total: e.value
                        }, "ChannelAnalyticsChatMesssages");
                        return Object(i.d)("{total, number} {metric}", {
                            total: e.value,
                            metric: t
                        }, "ChannelAnalyticsChatMesssages")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(C._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(G, null) : r.createElement(te, {
                        channelName: e[0].channel.name,
                        labels: e.map(function(e) {
                            return e.id.toString()
                        }),
                        durations: e.map(function(e) {
                            return e.timeRange.duration
                        }),
                        datasets: [{
                            label: Object(i.d)("Chat Messages", "ChannelAnalyticsChatMesssages"),
                            data: e.map(function(e) {
                                return e.messagesTotal
                            })
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(r.Component),
            re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = Object(i.d)("{total, plural, one {Chatter} other {Chatters}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsChatters");
                        return Object(i.d)("{total, number} {metric}", {
                            total: e.value,
                            metric: t
                        }, "ChannelAnalyticsTopStatsChatters")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(C._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    if (0 === e.length) return r.createElement(G, null);
                    var t = [],
                        n = [];
                    return e.forEach(function(e) {
                        t.push(e.id.toString()), n.push(e.uniqueChatters)
                    }), r.createElement(te, {
                        channelName: e[0].channel.name,
                        labels: t,
                        datasets: [{
                            label: Object(i.d)("Chatters", "ChannelAnalyticsTopStatsChatters"),
                            data: n
                        }],
                        durations: e.map(function(e) {
                            return e.timeRange.duration
                        }),
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(r.Component),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = Object(i.d)("{total, plural, one {New Follower} other {New Followers}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsNewFollowers");
                        return Object(i.d)("{total, number} {metric}", {
                            total: e.value,
                            metric: t
                        }, "ChannelAnalyticsTopStatsNewFollowers")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(C._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(G, null) : r.createElement(te, {
                        channelName: e[0].channel.name,
                        labels: e.map(function(e) {
                            return e.id.toString()
                        }),
                        durations: e.map(function(e) {
                            return e.timeRange.duration
                        }),
                        datasets: [{
                            label: Object(i.d)("New Followers", "ChannelAnalyticsTopStatsNewFollowers"),
                            data: e.map(function(e) {
                                return e.followersChange
                            })
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(r.Component);
        var ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toDataList = function(e, t) {
                        var n = new Map;
                        return e.forEach(function(e) {
                            var t = e.amount,
                                a = e.date,
                                r = Object(d.startOfDay)(a).getTime(),
                                s = n.get(r) || 0;
                            n.set(r, s + t)
                        }), t.map(function(e) {
                            return n.get(e.getTime()) || 0
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Object(i.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(i.d)("{currency} {label}", {
                            currency: t,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsRevenueTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var t = Object(i.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(i.d)("{currency} {label}", {
                            currency: t,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsRevenueTitle")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                            for (var t = [], n = e.start; n <= e.end;) t.push(n), n = Object(d.addDays)(n, 1);
                            return t
                        }(this.props.interval),
                        t = this.props.analyticsResponse.revenue.streams;
                    return r.createElement(Z, {
                        labels: e.map(function(e) {
                            return Object(i.c)(e, {
                                month: "short",
                                day: "numeric"
                            })
                        }),
                        datasets: [{
                            label: Object(i.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.twitchSubscriptions.timeseries, e)
                        }, {
                            label: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.primeSubscriptions.timeseries, e)
                        }, {
                            label: Object(i.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.ads.timeseries, e)
                        }, {
                            label: Object(i.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.bits.timeseries, e)
                        }, {
                            label: Object(i.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.gameCommerce.timeseries, e)
                        }, {
                            label: Object(i.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.extensions.timeseries, e)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle
                    })
                }, t
            }(r.Component),
            oe = n("HW6M"),
            le = n("F8kA"),
            ce = (n("h0zb"), {
                "data-test-selector": "up-trend-indicator"
            }),
            ue = {
                "data-test-selector": "down-trend-indicator"
            },
            pe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = oe("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return r.createElement(C.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: C._36.Center
                    }, r.createElement(le.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, r.createElement(C._35, {
                        type: C._40.H3
                    }, this.props.title, this.renderTrendIndicator()), r.createElement(C._35, {
                        type: C._40.H6
                    }, this.props.subtitle)))
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? r.createElement(C._2, {
                        display: C.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(C._15, a.__assign({
                        asset: C._16.GlyphArrUp,
                        type: C._17.Success
                    }, ce))) : this.props.trend < 0 ? r.createElement(C._2, {
                        display: C.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(C._15, a.__assign({
                        asset: C._16.GlyphArrDown,
                        type: C._17.Warn
                    }, ue))) : null : null
                }, t
            }(r.Component);

        function me(e, t) {
            return e.reduce(function(e, n) {
                return e + t(n)
            }, 0) / (e.length || 1)
        }
        var de = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers,
                        n = this.previousAverageViewers;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), r.createElement(pe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "averageViewers", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.sessions || [];
                        return e.length ? me(e, function(e) {
                            return e.avgViewerCount
                        }) : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousAverageViewers", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.lookbackSessions || [];
                        return e.length ? me(e, function(e) {
                            return e.avgViewerCount
                        }) : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.chatMessages,
                        n = this.previousChatMessages;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), r.createElement(pe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "chatMessages", {
                    get: function() {
                        return me(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousChatMessages", {
                    get: function() {
                        return me(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.uniqueChatters,
                        n = this.previousUniqueChatters;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), r.createElement(pe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "uniqueChatters", {
                    get: function() {
                        return me(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousUniqueChatters", {
                    get: function() {
                        return me(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.followersChange,
                        n = this.previousFollowersChange;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(i.d)("{sign}{followersDiff, number}", {
                            followersDiff: Math.abs(e),
                            sign: t
                        }, "ChannelAnalyticsTopStats")
                    }(t), r.createElement(pe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("New Followers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "followersChange", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.followersChange
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousFollowersChange", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.followersChange
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component);
        n("gFt/");
        var ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return r.createElement(pe, {
                        title: this.renderTitle(t),
                        subtitle: Object(i.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: Math.sign(t - e)
                    })
                }, t.prototype.renderTitle = function(e) {
                    if (this.props.analyticsResponse.revenue.isLoading) return "–";
                    var t = j(e),
                        n = t.sign,
                        a = t.dollars,
                        s = t.cents;
                    return r.createElement("span", null, r.createElement(C._35, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: C.R.Size6,
                        type: C._40.Span
                    }, n + " "), r.createElement(C._35, {
                        type: C._40.Span
                    }, a), r.createElement(C._35, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: C.R.Size4,
                        type: C._40.Span
                    }, "." + s))
                }, t
            }(r.Component),
            ye = {
                "data-test-selector": "current-chart"
            },
            ve = [ne, ae, ie, re, se],
            _e = ve.length - 1,
            Ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return r.createElement(C._25, {
                        background: C.m.Base,
                        elevation: 1
                    }, r.createElement(C._27, null, r.createElement(de, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), r.createElement(he, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    }), r.createElement(ge, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 2
                        }),
                        isActive: 2 === e
                    }), r.createElement(fe, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 3
                        }),
                        isActive: 3 === e
                    }), r.createElement(be, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 4
                        }),
                        isActive: 4 === e
                    })), r.createElement(C._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = ve[this.cappedIndex];
                    return r.createElement(e, a.__assign({}, ye, {
                        analyticsResponse: this.props.analyticsResponse,
                        interval: this.props.paramStore
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(_e, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Ee = {
                "data-test-selector": "card-image"
            },
            Se = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return r.createElement(C._0, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, r.createElement(C._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, r.createElement(C.A, {
                    row: !0
                }, r.createElement(C.C, a.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: C.D.Size8,
                    aspect: C.k.Aspect16x9
                }, Ee)), r.createElement(C._2, {
                    flexGrow: 1
                }, r.createElement(C.B, {
                    overflow: C._5.Hidden
                }, r.createElement(C._2, {
                    display: C.N.Flex,
                    alignItems: C.c.Center,
                    justifyContent: C._1.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, r.createElement(C._2, {
                    flexGrow: 1
                }, r.createElement(C._35, {
                    color: C.I.Base,
                    type: C._40.H5,
                    ellipsis: !0
                }, Object(i.d)("{start} - {end, time, short}", {
                    start: Object(i.c)(t.timeRange.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.timeRange.end
                }, "ChannelAnalyticsStreamCard")), r.createElement(C._35, {
                    color: C.I.Alt2,
                    type: C._40.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), r.createElement(C._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, r.createElement(C._35, {
                    color: C.I.Alt2,
                    type: C._40.Span
                }, Object(i.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))))
            };
        var we, ke = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(we || (we = {}));
        var Te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return r.createElement(C._21, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, r.createElement("option", {
                            value: we.AvgViewers
                        }, Object(i.d)("Avg Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement("option", {
                            value: we.NewFollowers
                        }, Object(i.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement("option", {
                            value: we.NewSubscriptions
                        }, Object(i.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
                    }, n.streamsList = function() {
                        return r.createElement("span", null, n.sortedStreamSummaries().slice(0, ke).map(function(e, t) {
                            return r.createElement(Se, {
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
                            case we.NewFollowers:
                            case we.NewSubscriptions:
                                return e.followersChange;
                            case we.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case we.NewFollowers:
                                return Object(ee.f)(e, [function(e) {
                                    return e.followersChange
                                }], [ee.a.Descending]);
                            case we.NewSubscriptions:
                                return Object(ee.f)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [ee.a.Descending]);
                            case we.AvgViewers:
                            default:
                                return Object(ee.f)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [ee.a.Descending])
                        }
                    }, n.state = {
                        sortType: we.AvgViewers
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? r.createElement(C._2, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(C._8, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? r.createElement("span", null) : r.createElement(C._2, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(O, null, Object(i.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement(C._25, {
                        elevation: 1,
                        background: C.m.Base
                    }, r.createElement(C._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: C.N.Flex
                    }, r.createElement(C._2, {
                        flexGrow: 1
                    }, r.createElement(C._35, {
                        type: C._40.H5,
                        bold: !0
                    }, Object(i.d)("Top {limit}", {
                        limit: ke
                    }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), r.createElement(C._2, null, this.sortDropdown())), this.streamsList()))
                }, t
            }(r.Component),
            Re = n("OAwv"),
            Ae = function() {
                function e(e, t, n) {
                    void 0 === n && (n = new Date);
                    var r = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = r.buildPathWithParams(e);
                        r.history.replace(t)
                    }, this.buildPathWithParams = function(e) {
                        var t = function(e) {
                                var t = {};
                                for (var n in e) {
                                    var a = e[n];
                                    "" !== a && (t[n] = a)
                                }
                                return t
                            }(a.__assign({}, r.rawParams, function(e) {
                                var t = {};
                                e.hasOwnProperty("end") && (t.end = De(e.end));
                                e.hasOwnProperty("start") && (t.start = De(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(n = e.topStatsIndex) && String(n) || "");
                                var n;
                                return t
                            }(e))),
                            n = Re.stringify(t);
                        return r.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = Re.parse(e.search);
                    var s = xe(this.rawParams.start) || Object(d.startOfDay)(Object(d.subDays)(n, y - 1)),
                        i = Object(d.endOfDay)(xe(this.rawParams.end) || n),
                        o = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex);
                    this.params = {
                        start: s,
                        end: i,
                        topStatsIndex: o
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }();

        function xe(e) {
            if (e) {
                var t = Object(d.parse)(e);
                if (Object(d.isValid)(t)) return t
            }
        }

        function De(e) {
            return e ? Object(d.format)(e, "YYYY-MM-DD") : ""
        }
        var Oe = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : v;
                    this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
                        return a.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var r = n.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(r)
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
            je = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : v;
                    this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
                        return a.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var r = n.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(r)
                }
                return e.fromPayload = function(t) {
                    var n = this;
                    return new e({
                        primeSubscriptions: this.normalizeTimeseries(t.prime_subscriptions),
                        twitchSubscriptionProducts: t.twitch_subscriptions.map(function(e) {
                            return {
                                defaultPrice: e.default_price,
                                productID: e.product_id,
                                timeseries: n.normalizeTimeseries(e.sub_counts)
                            }
                        })
                    })
                }, e.buildEmpty = function() {
                    return new e({
                        primeSubscriptions: [],
                        twitchSubscriptionProducts: []
                    })
                }, e.normalizeTimeseries = function(e) {
                    return e.map(function(e) {
                        return {
                            count: e.count,
                            date: new Date(e.timestamp)
                        }
                    })
                }, e.prototype.getTimeseriesWithTotal = function(e) {
                    return {
                        timeseries: e,
                        total: Math.floor(e.reduce(function(e, t) {
                            return e + t.count
                        }, 0))
                    }
                }, e
            }(),
            Pe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Ae(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = g,
                        n = Object(d.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(r.Component),
            Ne = n("pDcl");

        function Le(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function Ie(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var n, r, s, i;
                return a.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return e.role === N.d.None ? [2, {
                                isError: !1,
                                streams: Oe.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", r = Re.stringify(a.__assign({}, Le(t.start, t.end), {
                                fraction: "day"
                            })), s = [n, r].join("?"), [4, Object(ee.d)({
                                path: s
                            })]);
                        case 1:
                            return (i = o.sent()).isError() ? [2, {
                                isError: !0,
                                streams: Oe.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: Oe.fromPayload(i.body)
                            }]
                    }
                })
            })
        }
        var Fe = n("+TF1"),
            We = n("DNvj");
        var Be = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: Oe.buildEmpty(),
                            lookbackStreams: Oe.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            types: je.buildEmpty(),
                            isLoading: !0
                        },
                        streamSessions: {
                            sessions: [],
                            lookbackSessions: [],
                            isLoading: !0
                        }
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(N.f)(this.props.timeRange, e.timeRange) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : r.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, s, i = this;
                        return a.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (e = {
                                        start: this.props.lookbackTimeRange.start,
                                        end: this.props.timeRange.end
                                    }, this.setState({
                                        streamSessions: a.__assign({
                                            isLoading: !0
                                        }, this.state.streamSessions)
                                    }), [4, Object(Fe.a)({
                                        channelID: this.props.channel.id,
                                        channelName: this.props.channel.name,
                                        timeRange: e
                                    })]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? [2] : (n = function(e, t) {
                                        for (var n = [], a = [], r = 0, s = e; r < s.length; r++) {
                                            var i = s[r];
                                            t(i) ? n.push(i) : a.push(i)
                                        }
                                        return [n, a]
                                    }(t.streamSummaries, function(e) {
                                        return e.timeRange.start > i.props.lookbackTimeRange.end
                                    }), r = n[0], s = n[1], this.setState({
                                        streamSessions: {
                                            isLoading: !1,
                                            sessions: r,
                                            lookbackSessions: s
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchTopClips = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(We.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e = this;
                        return a.__generator(this, function(t) {
                            return this.props.channel ? (this.setState({
                                revenue: {
                                    streams: Oe.buildEmpty(),
                                    lookbackStreams: Oe.buildEmpty(),
                                    isLoading: !0
                                }
                            }), Ie(this.props.channel, this.props.timeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: a.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), Ie(this.props.channel, this.props.lookbackTimeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: a.__assign({}, e.revenue, {
                                            lookbackStreams: t.streams
                                        })
                                    }
                                })
                            }), [2]) : [2]
                        })
                    })
                }, t.prototype.fetchSubCounts = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            types: je.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), [4, function(e, t) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var n, r, s, i;
                                            return a.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === N.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: je.buildEmpty()
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", r = Re.stringify(a.__assign({}, Le(t.start, t.end), {
                                                            fraction: "day"
                                                        })), s = [n, r].join("?"), [4, Object(ee.d)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: je.buildEmpty()
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: je.fromPayload(i.body)
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, this.props.timeRange)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError ? [2] : (this.setState({
                                        subCounts: {
                                            types: e.subscriptions,
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(r.Component),
            Me = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.n.setPageTitle(Object(i.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = N.c.fromChannelData(this.props.data.channel);
                    return r.createElement(o.b, null, r.createElement(Pe, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return r.createElement(C._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, r.createElement(D, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), r.createElement(C._25, {
                            margin: {
                                bottom: 1
                            },
                            display: C.N.Flex,
                            flexDirection: C.P.Column,
                            flexWrap: C.Q.NoWrap,
                            alignItems: C.c.Stretch,
                            breakpointMedium: {
                                flexDirection: C.P.Row
                            }
                        }, r.createElement(C._2, {
                            display: C.N.Flex,
                            flexGrow: 1,
                            flexWrap: C.Q.NoWrap,
                            flexDirection: C.P.Column
                        }, r.createElement(Be, {
                            timeRange: t.params,
                            lookbackTimeRange: (n = t.params, a = Object(d.differenceInDays)(n.end, n.start) + 1, {
                                start: Object(d.subDays)(n.start, a),
                                end: Object(d.subDays)(n.end, a)
                            }),
                            channel: e
                        }, function(n) {
                            return r.createElement(r.Fragment, null, r.createElement(Ce, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                analyticsResponse: n
                            }), r.createElement(B, {
                                channel: e,
                                revenue: n.revenue,
                                subCounts: n.subCounts
                            }), r.createElement(H, {
                                channel: e.name,
                                topClips: n.topClips
                            }), r.createElement(Te, {
                                streamSessions: n.streamSessions
                            }))
                        }))));
                        var n, a
                    }))
                }, t
            }(r.Component)),
            Ve = Object(s.d)(Object(l.a)(Ne, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(m.d)("ChannelAnalyticsPage", {
                destination: u.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: p.PageviewLocation.DashboardChannelAnalytics
            }))(Me);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return Me
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return Ve
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-76aad9d6e05e552ae3bd901b70931306.js.map