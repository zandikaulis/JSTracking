webpackJsonp([81], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("2KeS"),
            s = n("6sO2"),
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
            y = Object(d.parse)("2011-01-01"),
            g = 28,
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
            var i = Object(d.differenceInDays)(e.end, e.start);
            if (Object(d.isEqual)(e.end, r.end)) {
                var s = Object(d.startOfDay)(n),
                    o = Object(d.addDays)(r.start, i);
                return o > s && (o = s), a.__assign({}, r, {
                    end: o
                })
            }
            return Object(d.isEqual)(e.start, r.start) ? a.__assign({}, r, {
                start: Object(d.subDays)(r.end, i)
            }) : e
        }
        var E = n("Odds"),
            C = {
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
                    return r.createElement("div", null, r.createElement(E._2, {
                        display: E.N.Flex,
                        flexWrap: E.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(E._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement(b, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: y,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), r.createElement(b, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), r.createElement(E._2, {
                        display: E.N.Flex,
                        justifyContent: E._1.Center
                    }, r.createElement(E._2, {
                        margin: {
                            right: 2
                        }
                    }, r.createElement(E.u, a.__assign({}, C, {
                        onClick: this.handleUpdateClick
                    }), Object(s.d)("Update", "ChannelAnalyticsDateRangePicker"))), r.createElement(E.u, a.__assign({}, S, {
                        type: E.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(s.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(r.Component),
            k = n("ylrR"),
            T = n("9uzc"),
            x = {
                "data-test-selector": "time-range"
            },
            R = {
                "data-test-selector": "total-days"
            },
            D = {
                "data-test-selector": "date-picker-toggle"
            },
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return r.createElement(E._2, {
                        position: E._9.Relative
                    }, r.createElement(k.a, {
                        control: function(n) {
                            var i = n.toggle;
                            return r.createElement(E._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, r.createElement(T.a, {
                                previousPath: "",
                                nextPath: ""
                            }, r.createElement(E.u, a.__assign({}, D, {
                                type: E.z.Text,
                                onClick: i,
                                fullWidth: !0
                            }), r.createElement(E._35, a.__assign({}, x, {
                                fontSize: 4
                            }), e.formatDateRange(t)), r.createElement(E._35, a.__assign({}, R, {
                                fontSize: 6,
                                color: E.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return r.createElement(E.p, {
                            noTail: !0,
                            show: !0,
                            direction: E.q.BottomCenter
                        }, r.createElement(E._2, {
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
                    return 1 === Object(d.differenceInDays)(e.end, e.start) + 1 ? Object(s.c)(e.start, "medium") : Object(s.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(d.differenceInDays)(e.end, e.start) + 1;
                    return Object(s.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(r.Component),
            O = function(e) {
                return r.createElement(E._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(E._35, {
                    type: E._40.H5,
                    bold: !0
                }, e.children))
            },
            P = function(e) {
                var t = Object(s.e)(e, {
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
            j = n("FeZP"),
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
                    }, r.createElement(E._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: E._9.Relative
                    }, r.createElement(E._2, {
                        display: E.N.Flex,
                        justifyContent: E._1.Between
                    }, r.createElement(E._2, {
                        display: E.N.Flex,
                        alignItems: E.c.Center
                    }, r.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), r.createElement(E._2, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(E._35, {
                        type: E._40.H5
                    }, this.props.title))), r.createElement(E._2, {
                        textAlign: E._36.Right
                    }, r.createElement(E._35, {
                        type: E._40.H5,
                        bold: !0
                    }, this.props.revenue), r.createElement(E._35, {
                        type: E._40.H6,
                        color: E.I.Alt2
                    }, Object(s.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? r.createElement(E.p, {
                        show: !0,
                        direction: E.q.TopCenter,
                        offsetY: "-1rem"
                    }, this.props.children) : null))
                }, t
            }(r.Component),
            I = function(e) {
                return r.createElement(E._2, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, r.createElement("table", null, r.createElement("thead", null, r.createElement("tr", null, r.createElement("td", null, r.createElement(E._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(E._35, {
                    bold: !0
                }, Object(s.d)("Subscription", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(E._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(E._35, {
                    bold: !0
                }, Object(s.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(E._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(E._35, {
                    bold: !0
                }, Object(s.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), r.createElement("tbody", null, e.subCounts.types.twitchSubscriptionProducts.map(function(t, n) {
                    return r.createElement(W, {
                        key: n,
                        tier: Object(s.e)(t.defaultPrice / 100, {
                            style: "currency",
                            currency: "USD"
                        }),
                        subscribers: Object(s.e)(t.total),
                        revenue: function(e, t) {
                            var n = t.twitchSubscriptionProducts.filter(function(t) {
                                return e === t.productID
                            })[0];
                            if (!n) return Object(s.e)(0, {
                                style: "currency",
                                currency: "USD"
                            });
                            return Object(s.e)(n.total, {
                                style: "currency",
                                currency: "USD"
                            })
                        }(t.productID, e.revenue.streams)
                    })
                }))))
            };
        var W = function(e) {
                return r.createElement("tr", null, r.createElement("td", null, r.createElement(E._35, null, e.tier)), r.createElement("td", null, r.createElement(E._35, null, e.subscribers)), r.createElement("td", null, r.createElement(E._35, null, e.revenue)))
            },
            B = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            F = function(e) {
                if (e.revenue.isLoading) return r.createElement(E._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(E._8, {
                    height: 448
                }));
                if (e.channel.role === N.d.None) return r.createElement("div", null);
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams;
                return r.createElement(E._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(O, null, Object(s.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), r.createElement(E._25, {
                    elevation: 1,
                    background: E.m.Base
                }, r.createElement(z, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), r.createElement("div", null, r.createElement(E._2, {
                    textAlign: E._36.Right,
                    padding: {
                        x: 2
                    }
                }, r.createElement(E._35, {
                    type: E._40.H6,
                    bold: !0,
                    color: E.I.Alt2
                }, Object(s.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), r.createElement(L, {
                    title: Object(s.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.twitchSubscriptions.total),
                    lastRevenue: V(a.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : r.createElement(I, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), r.createElement(L, {
                    title: Object(s.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.primeSubscriptions.total),
                    lastRevenue: V(a.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), r.createElement(L, {
                    title: Object(s.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.ads.total),
                    lastRevenue: V(a.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), r.createElement(L, {
                    title: Object(s.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.bits.total),
                    lastRevenue: V(a.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), r.createElement(L, {
                    title: Object(s.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.gameCommerce.total),
                    lastRevenue: V(a.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), r.createElement(L, {
                    title: Object(s.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: V(n.extensions.total),
                    lastRevenue: V(a.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }), r.createElement(j.a, {
                    message: Object(s.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                    url: ""
                }))))
            },
            z = function(e) {
                var t = P(e.totalAmount),
                    n = t.sign,
                    i = t.dollars,
                    o = t.cents;
                return r.createElement(E._2, a.__assign({
                    textAlign: E._36.Center,
                    padding: {
                        y: 2
                    }
                }, B), r.createElement(E._2, {
                    display: E.N.Flex,
                    justifyContent: E._1.Center
                }, r.createElement(E._25, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: E.d.Start,
                    color: E.I.Alt2
                }, n), r.createElement(E._35, {
                    type: E._40.H2,
                    bold: !0
                }, i), r.createElement(E._2, {
                    alignSelf: E.d.End
                }, r.createElement(E._35, {
                    type: E._40.Span,
                    bold: !0
                }, "." + o))), r.createElement(E._35, {
                    type: E._40.H6
                }, Object(s.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            V = function(e) {
                return Object(s.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            },
            M = n("a+9f"),
            H = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return r.createElement(E._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(E._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return r.createElement("span", null);
                var a = Object(s.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return r.createElement(E._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(O, null, Object(s.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), r.createElement(E._25, {
                    elevation: 1,
                    background: E.m.Base
                }, r.createElement(U, {
                    clipsAttrs: n
                }), t ? r.createElement(j.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : r.createElement("p", null, a)))
            },
            U = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(r.createElement(E._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, r.createElement(E._8, {
                        height: 50
                    })));
                return r.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return r.createElement(M.a, a.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            G = n("WaEV"),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(E.W, {
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
            Y = "#898395",
            J = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            Q = "rgba(0, 0, 0, 0)",
            K = "#ffffff",
            $ = function(e) {
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
                                            fontColor: Y,
                                            fontSize: 10,
                                            padding: 5
                                        },
                                        gridLines: {
                                            color: K,
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
                                            fontColor: Y,
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
                                    bodyFontColor: K,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: Q,
                                    callbacks: {
                                        title: t.formatTooltipTitle,
                                        label: t.formatTooltipLabel,
                                        labelColor: t.getLabelColor
                                    }
                                },
                                responsive: !0
                            }
                        };
                        t.myChart = new G(e, n)
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
                            borderColor: Q,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(q, {
                        onCanvasReady: this.handleCanvasReady
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update(0))
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: J[t]
                        }
                    })
                }, t
            }(r.Component),
            Z = {
                "data-test-selector": "no-data"
            },
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(E._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(E._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(E._2, a.__assign({
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        textAlign: E._36.Center
                    }, Z), r.createElement(E._35, {
                        type: E._40.H3
                    }, Object(s.d)("Nothing to show yet", "ChannelAnalyticsViewerGraph")), r.createElement(E._35, {
                        color: E.I.Alt2,
                        fontSize: 5
                    }, Object(s.d)("Not enough data for us to display", "ChannelAnalyticsViewerGraph"))) : r.createElement("div", {
                        className: "average-viewers-chart"
                    }, r.createElement($, {
                        labels: e.map(function(e) {
                            return Object(s.c)(new Date(e.id), {
                                month: "short",
                                day: "numeric"
                            })
                        }),
                        datasets: [{
                            label: Object(s.d)("Avg. Viewers", "ChannelAnalyticsViewerGraph"),
                            data: e.map(function(e) {
                                return function(e) {
                                    if (e < 10) return Math.floor(10 * e) / 10;
                                    return Math.floor(e)
                                }(e.avgViewerCount)
                            })
                        }],
                        formatTooltipTitle: ee
                    }))
                }, t
            }(r.Component);

        function ee(e) {
            return e.label
        }
        var te = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.formatTooltipLabel = function(e) {
                    return Object(s.e)(e.value)
                }, t.formatTooltipTitle = function(e) {
                    return e.label
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = this.props.analyticsResponse.streamSessions.sessions,
                    t = [],
                    n = [];
                return e.forEach(function(e) {
                    t.push(Object(s.c)(e.timeRange.start, {
                        month: "short",
                        day: "numeric"
                    })), n.push(e.uniqueChatters)
                }), r.createElement($, {
                    labels: t,
                    datasets: [{
                        label: Object(s.d)("Chatters", "ChannelAnalyticsTopStatsChatters"),
                        data: n
                    }],
                    formatTooltipLabel: this.formatTooltipLabel,
                    formatTooltipTitle: this.formatTooltipTitle
                })
            }, t
        }(r.Component);
        var ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toDataList = function(e, t) {
                        var n = new Map;
                        return e.forEach(function(e) {
                            var t = e.amount,
                                a = e.date,
                                r = Object(d.startOfDay)(a).getTime(),
                                i = n.get(r) || 0;
                            n.set(r, i + t)
                        }), t.map(function(e) {
                            return n.get(e.getTime()) || 0
                        })
                    }, t.formatTooltipLabel = function(e) {
                        return Object(s.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        }) + " " + e.label
                    }, t.formatTooltipTitle = function(e) {
                        return Object(s.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        }) + " " + e.label
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                            for (var t = [], n = e.start; n <= e.end;) t.push(n), n = Object(d.addDays)(n, 1);
                            return t
                        }(this.props.interval),
                        t = this.props.analyticsResponse.revenue.streams;
                    return r.createElement($, {
                        labels: e.map(function(e) {
                            return Object(s.c)(e, {
                                month: "short",
                                day: "numeric"
                            })
                        }),
                        datasets: [{
                            label: Object(s.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.twitchSubscriptions.timeseries, e)
                        }, {
                            label: Object(s.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.primeSubscriptions.timeseries, e)
                        }, {
                            label: Object(s.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.ads.timeseries, e)
                        }, {
                            label: Object(s.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.bits.timeseries, e)
                        }, {
                            label: Object(s.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.gameCommerce.timeseries, e)
                        }, {
                            label: Object(s.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.toDataList(t.extensions.timeseries, e)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle
                    })
                }, t
            }(r.Component),
            ae = n("HW6M"),
            re = n("F8kA"),
            ie = (n("h0zb"), {
                "data-test-selector": "up-trend-indicator"
            }),
            se = {
                "data-test-selector": "down-trend-indicator"
            },
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = ae("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return r.createElement(E.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: E._36.Center
                    }, r.createElement(re.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, r.createElement(E._35, {
                        type: E._40.H3
                    }, this.props.title, r.createElement(E._2, {
                        display: E.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, this.renderTrendIndicator())), r.createElement(E._35, {
                        type: E._40.H6
                    }, this.props.subtitle)))
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? r.createElement(E._15, a.__assign({
                        asset: E._16.GlyphArrUp,
                        type: E._17.Success
                    }, ie)) : this.props.trend < 0 ? r.createElement(E._15, a.__assign({
                        asset: E._16.GlyphArrDown,
                        type: E._17.Warn
                    }, se)) : r.createElement("span", null) : r.createElement("span", null)
                }, t
            }(r.Component);
        var le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t, n;
                    if (this.props.streamSummaries.length) {
                        var a = (t = this.props.streamSummaries, n = function(e) {
                            return e.avgViewerCount
                        }, t.reduce(function(e, t) {
                            return e + n(t)
                        }, 0) / t.length);
                        e = Object(s.e)(a, {
                            maximumFractionDigits: 0
                        })
                    } else e = "–";
                    return r.createElement(oe, {
                        title: e,
                        subtitle: Object(s.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, t
            }(r.Component),
            ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.uniqueChatters,
                        n = this.previousUniqueChatters;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(s.e)(t), r.createElement(oe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(s.d)("Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "uniqueChatters", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.uniqueChatters
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousUniqueChatters", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.uniqueChatters
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            ue = (n("gFt/"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return r.createElement(oe, {
                        title: this.renderTitle(t),
                        subtitle: Object(s.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: Math.sign(t - e)
                    })
                }, t.prototype.renderTitle = function(e) {
                    if (this.props.analyticsResponse.revenue.isLoading) return "–";
                    var t = P(e),
                        n = t.sign,
                        a = t.dollars,
                        i = t.cents;
                    return r.createElement("span", null, r.createElement(E._35, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: E.R.Size6,
                        type: E._40.Span
                    }, n + " "), r.createElement(E._35, {
                        type: E._40.Span
                    }, a), r.createElement(E._35, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: E.R.Size4,
                        type: E._40.Span
                    }, "." + i))
                }, t
            }(r.Component)),
            pe = {
                "data-test-selector": "current-chart"
            },
            me = [X, ne, te],
            de = me.length - 1,
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return r.createElement(E._25, {
                        background: E.m.Base,
                        elevation: 1
                    }, r.createElement(E._27, null, r.createElement(le, {
                        streamSummaries: this.props.analyticsResponse.streamSessions.sessions,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), r.createElement(ue, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    }), r.createElement(ce, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 2
                        }),
                        isActive: 2 === e
                    })), r.createElement(E._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = me[this.cappedIndex];
                    return r.createElement(e, a.__assign({}, pe, {
                        analyticsResponse: this.props.analyticsResponse,
                        interval: this.props.paramStore
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(de, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            fe = {
                "data-test-selector": "card-image"
            },
            be = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return r.createElement(E._0, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, r.createElement(E._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, r.createElement(E.A, {
                    row: !0
                }, r.createElement(E.C, a.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: E.D.Size8,
                    aspect: E.k.Aspect16x9
                }, fe)), r.createElement(E._2, {
                    flexGrow: 1
                }, r.createElement(E.B, {
                    overflow: E._5.Hidden
                }, r.createElement(E._2, {
                    display: E.N.Flex,
                    alignItems: E.c.Center,
                    justifyContent: E._1.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, r.createElement(E._2, {
                    flexGrow: 1
                }, r.createElement(E._35, {
                    color: E.I.Base,
                    type: E._40.H5,
                    ellipsis: !0
                }, Object(s.d)("{start} - {end, time, short}", {
                    start: Object(s.c)(t.timeRange.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.timeRange.end
                }, "ChannelAnalyticsStreamCard")), r.createElement(E._35, {
                    color: E.I.Alt2,
                    type: E._40.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), r.createElement(E._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, r.createElement(E._35, {
                    color: E.I.Alt2,
                    type: E._40.Span
                }, Object(s.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))))
            };
        var ye, ge = n("PGY2"),
            ve = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(ye || (ye = {}));
        var _e = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return r.createElement(E._21, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, r.createElement("option", {
                            value: ye.AvgViewers
                        }, Object(s.d)("Avg Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement("option", {
                            value: ye.NewFollowers
                        }, Object(s.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement("option", {
                            value: ye.NewSubscriptions
                        }, Object(s.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
                    }, n.streamsList = function() {
                        return r.createElement("span", null, n.sortedStreamSummaries().slice(0, ve).map(function(e, t) {
                            return r.createElement(be, {
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
                            case ye.NewFollowers:
                            case ye.NewSubscriptions:
                                return e.followersChange;
                            case ye.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case ye.NewFollowers:
                                return Object(ge.e)(e, [function(e) {
                                    return e.followersChange
                                }], [ge.a.Descending]);
                            case ye.NewSubscriptions:
                                return Object(ge.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [ge.a.Descending]);
                            case ye.AvgViewers:
                            default:
                                return Object(ge.e)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [ge.a.Descending])
                        }
                    }, n.state = {
                        sortType: ye.AvgViewers
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? r.createElement(E._2, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(E._8, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? r.createElement("span", null) : r.createElement(E._2, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(O, null, Object(s.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement(E._25, {
                        elevation: 1,
                        background: E.m.Base
                    }, r.createElement(E._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: E.N.Flex
                    }, r.createElement(E._2, {
                        flexGrow: 1
                    }, r.createElement(E._35, {
                        type: E._40.H5,
                        bold: !0
                    }, Object(s.d)("Top {limit}", {
                        limit: ve
                    }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), r.createElement(E._2, null, this.sortDropdown())), this.streamsList()))
                }, t
            }(r.Component),
            Ee = n("OAwv"),
            Ce = function() {
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
                                e.hasOwnProperty("end") && (t.end = we(e.end));
                                e.hasOwnProperty("start") && (t.start = we(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(n = e.topStatsIndex) && String(n) || "");
                                var n;
                                return t
                            }(e))),
                            n = Ee.stringify(t);
                        return r.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = Ee.parse(e.search);
                    var i = Se(this.rawParams.start) || Object(d.startOfDay)(Object(d.subDays)(n, g - 1)),
                        s = Object(d.endOfDay)(Se(this.rawParams.end) || n),
                        o = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex);
                    this.params = {
                        start: i,
                        end: s,
                        topStatsIndex: o
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }();

        function Se(e) {
            if (e) {
                var t = Object(d.parse)(e);
                if (Object(d.isValid)(t)) return t
            }
        }

        function we(e) {
            return e ? Object(d.format)(e, "YYYY-MM-DD") : ""
        }
        var ke = function() {
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
            Te = function() {
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
            xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Ce(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = y,
                        n = Object(d.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(r.Component),
            Re = n("pDcl");

        function De(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function Ae(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var n, r, i, s;
                return a.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return e.role === N.d.None ? [2, {
                                isError: !1,
                                streams: ke.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", r = Ee.stringify(a.__assign({}, De(t.start, t.end), {
                                fraction: "day"
                            })), i = [n, r].join("?"), [4, Object(ge.d)({
                                path: i
                            })]);
                        case 1:
                            return (s = o.sent()).isError() ? [2, {
                                isError: !0,
                                streams: ke.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: ke.fromPayload(s.body)
                            }]
                    }
                })
            })
        }
        var Oe = n("+TF1"),
            Pe = n("DNvj");
        var je = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: ke.buildEmpty(),
                            lookbackStreams: ke.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            types: Te.buildEmpty(),
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
                        var e, t, n, r, i, s = this;
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
                                    }), [4, Object(Oe.a)({
                                        channelID: this.props.channel.id,
                                        channelName: this.props.channel.name,
                                        timeRange: e
                                    })]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? [2] : (n = function(e, t) {
                                        for (var n = [], a = [], r = 0, i = e; r < i.length; r++) {
                                            var s = i[r];
                                            t(s) ? n.push(s) : a.push(s)
                                        }
                                        return [n, a]
                                    }(t.streamSummaries, function(e) {
                                        return e.timeRange.start > s.props.lookbackTimeRange.end
                                    }), r = n[0], i = n[1], this.setState({
                                        streamSessions: {
                                            isLoading: !1,
                                            sessions: r,
                                            lookbackSessions: i
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
                                    }), [4, Object(Pe.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
                                    streams: ke.buildEmpty(),
                                    lookbackStreams: ke.buildEmpty(),
                                    isLoading: !0
                                }
                            }), Ae(this.props.channel, this.props.timeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: a.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), Ae(this.props.channel, this.props.lookbackTimeRange).then(function(t) {
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
                                            types: Te.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), [4, function(e, t) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var n, r, i, s;
                                            return a.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === N.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: Te.buildEmpty()
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", r = Ee.stringify(a.__assign({}, De(t.start, t.end), {
                                                            fraction: "day"
                                                        })), i = [n, r].join("?"), [4, Object(ge.d)({
                                                            path: i
                                                        })]);
                                                    case 1:
                                                        return (s = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: Te.buildEmpty()
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: Te.fromPayload(s.body)
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
            Ne = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.n.setPageTitle(Object(s.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = N.c.fromChannelData(this.props.data.channel);
                    return r.createElement(o.b, null, r.createElement(xe, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return r.createElement(E._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, r.createElement(A, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), r.createElement(E._25, {
                            margin: {
                                bottom: 1
                            },
                            display: E.N.Flex,
                            flexDirection: E.P.Column,
                            flexWrap: E.Q.NoWrap,
                            alignItems: E.c.Stretch,
                            breakpointMedium: {
                                flexDirection: E.P.Row
                            }
                        }, r.createElement(E._2, {
                            display: E.N.Flex,
                            flexGrow: 1,
                            flexWrap: E.Q.NoWrap,
                            flexDirection: E.P.Column
                        }, r.createElement(je, {
                            timeRange: t.params,
                            lookbackTimeRange: (n = t.params, a = Object(d.differenceInDays)(n.end, n.start) + 1, {
                                start: Object(d.subDays)(n.start, a),
                                end: Object(d.subDays)(n.end, a)
                            }),
                            channel: e
                        }, function(n) {
                            return r.createElement(r.Fragment, null, r.createElement(he, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                analyticsResponse: n
                            }), r.createElement(F, {
                                channel: e,
                                revenue: n.revenue,
                                subCounts: n.subCounts
                            }), r.createElement(H, {
                                channel: e.name,
                                topClips: n.topClips
                            }), r.createElement(_e, {
                                streamSessions: n.streamSessions
                            }))
                        }))));
                        var n, a
                    }))
                }, t
            }(r.Component)),
            Le = Object(i.d)(Object(l.a)(Re, {
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
            }))(Ne);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return Ne
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return Le
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-41c4006a824cbf71f77eaadb2f111d7b.js.map