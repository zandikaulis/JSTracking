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
                        null === e ? t.picker.destroy() : (t.picker = new f({
                            onSelect: t.props.onChange,
                            theme: "inline",
                            minDate: Object(d.startOfDay)(t.props.minDate),
                            maxDate: Object(d.startOfDay)(t.props.maxDate),
                            defaultDate: Object(d.startOfDay)(t.props.date),
                            startRange: Object(d.startOfDay)(t.props.startRange),
                            endRange: Object(d.startOfDay)(t.props.endRange),
                            setDefaultDate: !0
                        }), e.appendChild(t.picker.el))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(d.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(d.startOfDay)(this.props.endRange)), this.picker.setMinDate(Object(d.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(d.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(d.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(r.Component)),
            g = n("AJEV"),
            y = n("Odds"),
            v = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        a = t.now || new Date,
                        r = Object(d.endOfDay)(a),
                        s = Object(d.startOfDay)(a),
                        o = Object(d.startOfMonth)(a);
                    return n.presets = [{
                        message: Object(i.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 6),
                            end: r
                        }
                    }, {
                        message: Object(i.d)("Last 28 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 27),
                            end: r
                        }
                    }, {
                        message: Object(i.c)(o, {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: o,
                            end: r
                        }
                    }, {
                        message: Object(i.c)(Object(d.subMonths)(r, 1), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(d.startOfMonth)(Object(d.subMonths)(a, 1)),
                            end: Object(d.endOfMonth)(Object(d.subMonths)(a, 1))
                        }
                    }, {
                        message: Object(i.c)(Object(d.subMonths)(r, 2), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(d.startOfMonth)(Object(d.subMonths)(a, 2)),
                            end: Object(d.endOfMonth)(Object(d.subMonths)(a, 2))
                        }
                    }], n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return r.createElement(y._2, {
                        display: y.N.Flex,
                        flexDirection: y.P.Column
                    }, this.presets.map(function(t, n) {
                        return r.createElement(y._25, {
                            color: y.I.Link,
                            key: n
                        }, r.createElement(y._0, {
                            selected: Object(g.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval)
                        }, r.createElement(y._25, {
                            padding: 1,
                            textAlign: y._36.Center
                        }, r.createElement(y._35, {
                            noWrap: !0,
                            fontSize: y.R.Size5
                        }, t.message))))
                    }))
                }, t.prototype.handleClickFor = function(e) {
                    var t = this;
                    return function() {
                        return t.props.onChange(e)
                    }
                }, t
            }(r.Component),
            _ = Object(d.parse)("2011-01-01"),
            C = 28,
            E = [{
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

        function S(e, t, n) {
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
        var w = {
                "data-test-selector": "commit-button"
            },
            O = {
                "data-test-selector": "cancel-button"
            },
            k = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = S(n.state.interval, {
                            start: e
                        });
                        n.handleIntervalChange(t)
                    }, n.handleEndChange = function(e) {
                        var t = S(n.state.interval, {
                            end: e
                        });
                        n.handleIntervalChange(t)
                    }, n.handleIntervalChange = function(e) {
                        n.setState({
                            interval: e
                        })
                    }, n.handleUpdateClick = function() {
                        n.props.onCommit(n.state.interval)
                    }, n.state = {
                        interval: n.props.interval
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return r.createElement("div", null, r.createElement(y._2, {
                        display: y.N.Flex,
                        flexWrap: y.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(y._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement(b, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: _,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), r.createElement(y._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement(b, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), r.createElement(y._25, {
                        padding: {
                            left: 2
                        },
                        borderLeft: !0
                    }, r.createElement(v, {
                        interval: this.state.interval,
                        onChange: this.handleIntervalChange
                    }))), r.createElement(y._2, {
                        display: y.N.Flex,
                        justifyContent: y._1.Center
                    }, r.createElement(y._2, {
                        margin: {
                            right: 2
                        }
                    }, r.createElement(y.u, a.__assign({}, w, {
                        onClick: this.handleUpdateClick
                    }), Object(i.d)("Update", "ChannelAnalyticsDateRangePicker"))), r.createElement(y.u, a.__assign({}, O, {
                        type: y.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(i.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(r.Component),
            T = n("ylrR"),
            j = n("9uzc"),
            R = {
                "data-test-selector": "time-range"
            },
            A = {
                "data-test-selector": "total-days"
            },
            D = {
                "data-test-selector": "date-picker-toggle"
            },
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return r.createElement(y._2, {
                        position: y._9.Relative
                    }, r.createElement(T.a, {
                        control: function(n) {
                            var s = n.toggle;
                            return r.createElement(y._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, r.createElement(j.a, {
                                previousPath: "",
                                nextPath: ""
                            }, r.createElement(y.u, a.__assign({}, D, {
                                type: y.z.Text,
                                onClick: s,
                                fullWidth: !0
                            }), r.createElement(y._35, a.__assign({}, R, {
                                fontSize: 4
                            }), e.formatDateRange(t)), r.createElement(y._35, a.__assign({}, A, {
                                fontSize: 6,
                                color: y.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return r.createElement(y.p, {
                            noTail: !0,
                            show: !0,
                            direction: y.q.BottomCenter
                        }, r.createElement(y._2, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, r.createElement(k, {
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
            P = n("5kgt"),
            N = function(e) {
                return r.createElement(y._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(y._35, {
                    type: y._40.H5,
                    bold: !0
                }, e.children))
            },
            L = n("K3NL"),
            I = 3,
            F = {
                "data-test-selector": "referral-percentage"
            };

        function M(e) {
            var t = e.referrals;
            return e.isLoading ? r.createElement(y._2, {
                margin: {
                    bottom: 2
                }
            }, r.createElement(y._8, {
                height: 375
            })) : r.createElement(y._2, {
                margin: {
                    top: 3
                }
            }, r.createElement(N, null, Object(i.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), r.createElement(y._25, {
                elevation: 1,
                background: y.m.Base
            }, r.createElement(y._2, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, r.createElement(y._35, {
                type: y._40.H3,
                fontSize: y.R.Size4,
                bold: !0
            }, Object(i.d)("Twitch", "ChannelAnalyticsReferralPanel")), W(t.totals.referrer.internalTwitch)), z(t.byReferralType.internalTwitch), r.createElement(y._2, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, r.createElement(y._35, {
                type: y._40.H3,
                fontSize: y.R.Size4,
                bold: !0
            }, Object(i.d)("Channels", "ChannelAnalyticsReferralPanel")), W(t.totals.referrer.internalChannel)), z(t.byReferralType.internalChannel), r.createElement(y._2, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, r.createElement(y._35, {
                type: y._40.H3,
                fontSize: y.R.Size4,
                bold: !0
            }, Object(i.d)("External", "ChannelAnalyticsReferralPanel")), W(t.totals.referrer.external)), z(t.byReferralType.external)))
        }

        function W(e) {
            return r.createElement(y._35, {
                fontSize: y.R.Size5,
                color: y.I.Alt2
            }, Object(i.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                totalViewCount: e
            }, "ChannelAnalyticsReferralPanel"))
        }

        function z(e) {
            return e.length ? e.slice(0, I).map(function(e, t) {
                return r.createElement(B, {
                    reportItem: e,
                    key: t
                })
            }) : null
        }

        function B(e) {
            var t, n = e.reportItem;
            return t = n.share > 0 ? Object(i.d)("{share, number, percent}", {
                share: n.share / 100
            }, "ChannelAnalyticsReferralPanel") : Object(i.d)("< 1%", "ChannelAnalyticsReferralPanel"), r.createElement(V, {
                name: Object(L.a)(n.name),
                percentMessage: t,
                width: n.share || 1,
                count: n.count
            })
        }

        function V(e) {
            var t = "";
            return e.count && (t = Object(i.d)("{count, number} views", {
                count: e.count
            }, "ChannelAnalyticsReferralPanel")), r.createElement(y._25, a.__assign({
                padding: {
                    y: 1,
                    right: 2,
                    left: 2
                },
                borderBottom: !0,
                fontSize: y.R.Size5
            }, Object(P.a)(e)), r.createElement(y.U, null, r.createElement(y.J, {
                cols: {
                    default: 5,
                    xs: 5,
                    sm: 5
                }
            }, r.createElement(y._2, {
                padding: {
                    left: 0,
                    right: 1
                }
            }, r.createElement(y._35, {
                fontSize: y.R.Size5,
                ellipsis: !0
            }, e.name))), r.createElement(y.J, {
                cols: {
                    default: 2,
                    xs: 3,
                    sm: 2
                }
            }, r.createElement(y._2, {
                padding: {
                    right: 1
                },
                textAlign: y._36.Right
            }, r.createElement(y._35, a.__assign({
                color: y.I.Alt2,
                ellipsis: !0
            }, F), e.percentMessage))), r.createElement(y.J, {
                cols: {
                    default: 5,
                    xs: 4,
                    sm: 5
                }
            }, r.createElement(y._2, {
                padding: {
                    top: .5
                }
            }, r.createElement(y._43, {
                label: t,
                direction: y._45.Top,
                align: y._44.Center,
                display: y.N.Block
            }, r.createElement(y._25, {
                background: y.m.Alt2
            }, r.createElement(y._12, {
                value: e.width
            })))))))
        }
        var H = function(e) {
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
            U = n("FeZP"),
            q = function(e) {
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
                    }, r.createElement(y._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: y._9.Relative
                    }, r.createElement(y._2, {
                        display: y.N.Flex,
                        justifyContent: y._1.Between
                    }, r.createElement(y._2, {
                        display: y.N.Flex,
                        alignItems: y.c.Center
                    }, r.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), r.createElement(y._2, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(y._35, {
                        type: y._40.H5
                    }, this.props.title))), r.createElement(y._2, {
                        textAlign: y._36.Right
                    }, r.createElement(y._35, {
                        type: y._40.H5,
                        bold: !0
                    }, this.props.revenue), r.createElement(y._35, {
                        type: y._40.H6,
                        color: y.I.Alt2
                    }, Object(i.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? r.createElement(y.p, {
                        show: !0,
                        direction: y.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(r.Component),
            G = function(e) {
                return r.createElement(y._2, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, r.createElement("table", null, r.createElement("thead", null, r.createElement("tr", null, r.createElement("td", null, r.createElement(y._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(y._35, {
                    bold: !0
                }, Object(i.d)("Subscription", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(y._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(y._35, {
                    bold: !0
                }, Object(i.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(y._2, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(y._35, {
                    bold: !0
                }, Object(i.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), r.createElement("tbody", null, e.subCounts.types.twitchSubscriptionProducts.map(function(t, n) {
                    return r.createElement(J, {
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
        var J = function(e) {
                return r.createElement("tr", null, r.createElement("td", null, r.createElement(y._35, null, e.tier)), r.createElement("td", null, r.createElement(y._35, null, e.subscribers)), r.createElement("td", null, r.createElement(y._35, null, e.revenue)))
            },
            Y = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            K = function(e) {
                if (e.revenue.isLoading) return r.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(y._8, {
                    height: 448
                }));
                if (e.channel.role === g.d.None) return r.createElement("div", null);
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams;
                return r.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(N, null, Object(i.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), r.createElement(y._25, {
                    elevation: 1,
                    background: y.m.Base
                }, r.createElement(Q, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), r.createElement("div", null, r.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 2
                    }
                }, r.createElement(y._35, {
                    type: y._40.H6,
                    bold: !0,
                    color: y.I.Alt2
                }, Object(i.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), r.createElement(q, {
                    title: Object(i.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.twitchSubscriptions.total),
                    lastRevenue: X(a.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : r.createElement(G, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), r.createElement(q, {
                    title: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.primeSubscriptions.total),
                    lastRevenue: X(a.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), r.createElement(q, {
                    title: Object(i.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.ads.total),
                    lastRevenue: X(a.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), r.createElement(q, {
                    title: Object(i.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.bits.total),
                    lastRevenue: X(a.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), r.createElement(q, {
                    title: Object(i.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.gameCommerce.total),
                    lastRevenue: X(a.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), r.createElement(q, {
                    title: Object(i.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.extensions.total),
                    lastRevenue: X(a.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }), r.createElement(U.a, {
                    message: Object(i.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                    url: ""
                }))))
            },
            Q = function(e) {
                var t = H(e.totalAmount),
                    n = t.sign,
                    s = t.dollars,
                    o = t.cents;
                return r.createElement(y._2, a.__assign({
                    textAlign: y._36.Center,
                    padding: {
                        y: 2
                    }
                }, Y), r.createElement(y._2, {
                    display: y.N.Flex,
                    justifyContent: y._1.Center
                }, r.createElement(y._25, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: y.d.Start,
                    color: y.I.Alt2
                }, n), r.createElement(y._35, {
                    type: y._40.H2,
                    bold: !0
                }, s), r.createElement(y._2, {
                    alignSelf: y.d.End
                }, r.createElement(y._35, {
                    type: y._40.Span,
                    bold: !0
                }, "." + o))), r.createElement(y._35, {
                    type: y._40.H6
                }, Object(i.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            X = function(e) {
                return Object(i.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            },
            $ = n("a+9f"),
            Z = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return r.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(y._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return r.createElement("span", null);
                var a = Object(i.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return r.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(N, null, Object(i.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), r.createElement(y._25, {
                    elevation: 1,
                    background: y.m.Base
                }, r.createElement(ee, {
                    clipsAttrs: n
                }), t ? r.createElement(U.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : r.createElement("p", null, a)))
            },
            ee = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(r.createElement(y._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, r.createElement(y._8, {
                        height: 50
                    })));
                return r.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return r.createElement($.a, a.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            te = {
                "data-test-selector": "no-data"
            },
            ne = function() {
                return r.createElement(y._2, a.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    textAlign: y._36.Center
                }, te), r.createElement(y._35, {
                    type: y._40.H3
                }, Object(i.d)("Nothing to show yet", "ChannelAnalyticsChartNoData")), r.createElement(y._35, {
                    color: y.I.Alt2,
                    fontSize: 5
                }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsChartNoData")))
            },
            ae = n("WaEV"),
            re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(y.W, {
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
            se = "#898395",
            ie = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            oe = "rgba(0, 0, 0, 0)",
            le = "#ffffff",
            ce = function(e) {
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
                                            fontColor: se,
                                            fontSize: 10,
                                            padding: 5,
                                            callback: t.formatXAxes
                                        },
                                        gridLines: {
                                            color: le,
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
                                            fontColor: se,
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
                                    bodyFontColor: le,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: oe,
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
                        t.myChart = new ae(e, n)
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
                            borderColor: oe,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        className: "top-stats-chart"
                    }, r.createElement(re, {
                        onCanvasReady: this.handleCanvasReady
                    }))
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update(0))
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: ie[t]
                        }
                    })
                }, t
            }(r.Component),
            ue = n("PGY2"),
            pe = function(e) {
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
                                s = Object(ue.g)(a);
                            return Object(i.d)("{date} – {shortDuration}", {
                                date: r,
                                shortDuration: s
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(ce, {
                        labels: this.props.labels,
                        datasets: this.props.datasets,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        onDatasetClick: this.handleDatasetClick
                    })
                }, t
            }(r.Component),
            me = function(e) {
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
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(ne, null) : r.createElement(pe, {
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
        var de = function(e) {
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
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(ne, null) : r.createElement(pe, {
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
            he = function(e) {
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
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    if (0 === e.length) return r.createElement(ne, null);
                    var t = [],
                        n = [];
                    return e.forEach(function(e) {
                        t.push(e.id.toString()), n.push(e.uniqueChatters)
                    }), r.createElement(pe, {
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
            fe = function(e) {
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
                    if (this.props.analyticsResponse.streamSessions.isLoading) return r.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? r.createElement(ne, null) : r.createElement(pe, {
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
        var be = function(e) {
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
                    return r.createElement(ce, {
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
            ge = n("HW6M"),
            ye = n("F8kA"),
            ve = (n("h0zb"), {
                "data-test-selector": "up-trend-indicator"
            }),
            _e = {
                "data-test-selector": "down-trend-indicator"
            },
            Ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = ge("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return r.createElement(y.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: y._36.Center
                    }, r.createElement(ye.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, r.createElement(y._35, {
                        type: y._40.H3
                    }, this.props.title, this.renderTrendIndicator()), r.createElement(y._35, {
                        type: y._40.H6
                    }, this.props.subtitle)))
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? r.createElement(y._2, {
                        display: y.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(y._15, a.__assign({
                        asset: y._16.GlyphArrUp,
                        type: y._17.Success
                    }, ve))) : this.props.trend < 0 ? r.createElement(y._2, {
                        display: y.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(y._15, a.__assign({
                        asset: y._16.GlyphArrDown,
                        type: y._17.Warn
                    }, _e))) : null : null
                }, t
            }(r.Component);

        function Ee(e, t) {
            return e.reduce(function(e, n) {
                return e + t(n)
            }, 0) / (e.length || 1)
        }
        var Se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers,
                        n = this.previousAverageViewers;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), r.createElement(Ce, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "averageViewers", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.sessions || [];
                        return e.length ? Ee(e, function(e) {
                            return e.avgViewerCount
                        }) : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousAverageViewers", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.lookbackSessions || [];
                        return e.length ? Ee(e, function(e) {
                            return e.avgViewerCount
                        }) : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(i.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(i.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(r.Component),
            we = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.chatMessages,
                        n = this.previousChatMessages;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), r.createElement(Ce, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "chatMessages", {
                    get: function() {
                        return Ee(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousChatMessages", {
                    get: function() {
                        return Ee(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.uniqueChatters,
                        n = this.previousUniqueChatters;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), r.createElement(Ce, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "uniqueChatters", {
                    get: function() {
                        return Ee(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousUniqueChatters", {
                    get: function() {
                        return Ee(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            ke = function(e) {
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
                    }(t), r.createElement(Ce, {
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
        var Te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return r.createElement(Ce, {
                        title: this.renderTitle(t),
                        subtitle: Object(i.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: Math.sign(t - e)
                    })
                }, t.prototype.renderTitle = function(e) {
                    if (this.props.analyticsResponse.revenue.isLoading) return "–";
                    var t = H(e),
                        n = t.sign,
                        a = t.dollars,
                        s = t.cents;
                    return r.createElement("span", null, r.createElement(y._35, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: y.R.Size6,
                        type: y._40.Span
                    }, n + " "), r.createElement(y._35, {
                        type: y._40.Span
                    }, a), r.createElement(y._35, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: y.R.Size4,
                        type: y._40.Span
                    }, "." + s))
                }, t
            }(r.Component),
            je = {
                "data-test-selector": "current-chart"
            },
            Re = [me, de, be, he, fe],
            Ae = Re.length - 1,
            De = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return r.createElement(y._25, {
                        background: y.m.Base,
                        elevation: 1
                    }, r.createElement(y._27, null, r.createElement(Se, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), r.createElement(we, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    }), r.createElement(Te, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 2
                        }),
                        isActive: 2 === e
                    }), r.createElement(Oe, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 3
                        }),
                        isActive: 3 === e
                    }), r.createElement(ke, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 4
                        }),
                        isActive: 4 === e
                    })), r.createElement(y._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = Re[this.cappedIndex];
                    return r.createElement(e, a.__assign({}, je, {
                        analyticsResponse: this.props.analyticsResponse,
                        interval: this.props.paramStore
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(Ae, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            xe = {
                "data-test-selector": "card-image"
            },
            Pe = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return r.createElement(y._0, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, r.createElement(y._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, r.createElement(y.A, {
                    row: !0
                }, r.createElement(y.C, a.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: y.D.Size8,
                    aspect: y.k.Aspect16x9
                }, xe)), r.createElement(y._2, {
                    flexGrow: 1
                }, r.createElement(y.B, {
                    overflow: y._5.Hidden
                }, r.createElement(y._2, {
                    display: y.N.Flex,
                    alignItems: y.c.Center,
                    justifyContent: y._1.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, r.createElement(y._2, {
                    flexGrow: 1
                }, r.createElement(y._35, {
                    color: y.I.Base,
                    type: y._40.H5,
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
                }, "ChannelAnalyticsStreamCard")), r.createElement(y._35, {
                    color: y.I.Alt2,
                    type: y._40.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), r.createElement(y._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, r.createElement(y._35, {
                    color: y.I.Alt2,
                    type: y._40.Span
                }, Object(i.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))))
            };
        var Ne, Le = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(Ne || (Ne = {}));
        var Ie = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return r.createElement(y._21, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, r.createElement("option", {
                            value: Ne.AvgViewers
                        }, Object(i.d)("Avg Viewers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement("option", {
                            value: Ne.NewFollowers
                        }, Object(i.d)("New Followers", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement("option", {
                            value: Ne.NewSubscriptions
                        }, Object(i.d)("New Subscriptions", "ChannelAnalyticsTopStreamsByAverageViewersPanel")))
                    }, n.streamsList = function() {
                        return r.createElement("span", null, n.sortedStreamSummaries().slice(0, Le).map(function(e, t) {
                            return r.createElement(Pe, {
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
                            case Ne.NewFollowers:
                            case Ne.NewSubscriptions:
                                return e.followersChange;
                            case Ne.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case Ne.NewFollowers:
                                return Object(ue.h)(e, [function(e) {
                                    return e.followersChange
                                }], [ue.a.Descending]);
                            case Ne.NewSubscriptions:
                                return Object(ue.h)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [ue.a.Descending]);
                            case Ne.AvgViewers:
                            default:
                                return Object(ue.h)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [ue.a.Descending])
                        }
                    }, n.state = {
                        sortType: Ne.AvgViewers
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? r.createElement(y._2, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(y._8, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? r.createElement("span", null) : r.createElement(y._2, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(N, null, Object(i.d)("What were my top streams?", "ChannelAnalyticsTopStreamsByAverageViewersPanel")), r.createElement(y._25, {
                        elevation: 1,
                        background: y.m.Base
                    }, r.createElement(y._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: y.N.Flex
                    }, r.createElement(y._2, {
                        flexGrow: 1
                    }, r.createElement(y._35, {
                        type: y._40.H5,
                        bold: !0
                    }, Object(i.d)("Top {limit}", {
                        limit: Le
                    }, "ChannelAnalyticsTopStreamsByAverageViewersPanel"))), r.createElement(y._2, null, this.sortDropdown())), this.streamsList()))
                }, t
            }(r.Component),
            Fe = n("OAwv"),
            Me = function() {
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
                                e.hasOwnProperty("end") && (t.end = ze(e.end));
                                e.hasOwnProperty("start") && (t.start = ze(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(n = e.topStatsIndex) && String(n) || "");
                                var n;
                                return t
                            }(e))),
                            n = Fe.stringify(t);
                        return r.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = Fe.parse(e.search);
                    var s = We(this.rawParams.start) || Object(d.startOfDay)(Object(d.subDays)(n, C - 1)),
                        i = Object(d.endOfDay)(We(this.rawParams.end) || n),
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

        function We(e) {
            if (e) {
                var t = Object(d.parse)(e);
                if (Object(d.isValid)(t)) return t
            }
        }

        function ze(e) {
            return e ? Object(d.format)(e, "YYYY-MM-DD") : ""
        }
        var Be = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : E;
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
            Ve = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : E;
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
            He = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Me(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = _,
                        n = Object(d.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(r.Component),
            Ue = n("pDcl");

        function qe(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function Ge(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var n, r, s, i;
                return a.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return e.role === g.d.None ? [2, {
                                isError: !1,
                                streams: Be.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", r = Fe.stringify(a.__assign({}, qe(t.start, t.end), {
                                fraction: "day"
                            })), s = [n, r].join("?"), [4, Object(ue.f)({
                                path: s
                            })]);
                        case 1:
                            return (i = o.sent()).isError() ? [2, {
                                isError: !0,
                                streams: Be.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: Be.fromPayload(i.body)
                            }]
                    }
                })
            })
        }
        var Je = n("+TF1"),
            Ye = n("DNvj");
        var Ke = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: Be.buildEmpty(),
                            lookbackStreams: Be.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            types: Ve.buildEmpty(),
                            isLoading: !0
                        },
                        streamSessions: {
                            sessions: [],
                            lookbackSessions: [],
                            isLoading: !0
                        },
                        referrals: {
                            referrals: ue.b,
                            isLoading: !0
                        }
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(g.f)(this.props.timeRange, e.timeRange) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals())
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
                                    }), [4, Object(Je.a)({
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
                                    }), [4, Object(Ye.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
                                    streams: Be.buildEmpty(),
                                    lookbackStreams: Be.buildEmpty(),
                                    isLoading: !0
                                }
                            }), Ge(this.props.channel, this.props.timeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: a.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), Ge(this.props.channel, this.props.lookbackTimeRange).then(function(t) {
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
                                            types: Ve.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), [4, function(e, t) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var n, r, s, i;
                                            return a.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === g.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: Ve.buildEmpty()
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", r = Fe.stringify(a.__assign({}, qe(t.start, t.end), {
                                                            fraction: "day"
                                                        })), s = [n, r].join("?"), [4, Object(ue.f)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: Ve.buildEmpty()
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: Ve.fromPayload(i.body)
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
                }, t.prototype.fetchReferrals = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        referrals: {
                                            referrals: ue.b,
                                            isLoading: !0
                                        }
                                    }), [4, Object(ue.e)(this.props.channel, this.props.timeRange)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError ? [2] : (this.setState({
                                        referrals: {
                                            referrals: e.referrals,
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(r.Component),
            Qe = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.n.setPageTitle(Object(i.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = g.c.fromChannelData(this.props.data.channel);
                    return r.createElement(o.b, null, r.createElement(He, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return r.createElement(y._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, r.createElement(x, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), r.createElement(y._25, {
                            margin: {
                                bottom: 1
                            },
                            display: y.N.Flex,
                            flexDirection: y.P.Column,
                            flexWrap: y.Q.NoWrap,
                            alignItems: y.c.Stretch,
                            breakpointMedium: {
                                flexDirection: y.P.Row
                            }
                        }, r.createElement(y._2, {
                            display: y.N.Flex,
                            flexGrow: 1,
                            flexWrap: y.Q.NoWrap,
                            flexDirection: y.P.Column
                        }, r.createElement(Ke, {
                            timeRange: t.params,
                            lookbackTimeRange: (n = t.params, a = Object(d.differenceInDays)(n.end, n.start) + 1, {
                                start: Object(d.subDays)(n.start, a),
                                end: Object(d.subDays)(n.end, a)
                            }),
                            channel: e
                        }, function(n) {
                            return r.createElement(r.Fragment, null, r.createElement(De, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                analyticsResponse: n
                            }), r.createElement(K, {
                                channel: e,
                                revenue: n.revenue,
                                subCounts: n.subCounts
                            }), r.createElement(Z, {
                                channel: e.name,
                                topClips: n.topClips
                            }), r.createElement(Ie, {
                                streamSessions: n.streamSessions
                            }), r.createElement(M, {
                                referrals: n.referrals.referrals,
                                isLoading: n.referrals.isLoading
                            }))
                        }))));
                        var n, a
                    }))
                }, t
            }(r.Component)),
            Xe = Object(s.d)(Object(l.a)(Ue, {
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
            }))(Qe);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return Qe
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return Xe
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
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-0a69ff389da6d6665f201f3c439d6f69.js.map