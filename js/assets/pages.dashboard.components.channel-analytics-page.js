webpackJsonp([77], {
    "0wv6": function(e, t) {},
    Aalc: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            a = n("wuJz"),
            s = (n.n(a), n("OAwv")),
            i = (n.n(s), n("HR5e")),
            o = function() {
                function e(e, t, n) {
                    void 0 === n && (n = new Date);
                    var o = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = o.buildPathWithParams(e);
                        o.history.replace(t)
                    }, this.buildPathWithParams = function(e) {
                        var t = function(e) {
                                var t = {};
                                for (var n in e) {
                                    var r = e[n];
                                    "" !== r && (t[n] = r)
                                }
                                return t
                            }(r.__assign({}, o.rawParams, function(e) {
                                var t = {};
                                e.hasOwnProperty("end") && (t.end = c(e.end));
                                e.hasOwnProperty("start") && (t.start = c(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(n = e.topStatsIndex) && String(n) || "");
                                var n;
                                e.hasOwnProperty("topStatsAggregation") && (t.topStatsAggregation = e.topStatsAggregation || "");
                                return t
                            }(e))),
                            n = s.stringify(t);
                        return o.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = s.parse(e.search);
                    var u = l(this.rawParams.start) || Object(a.startOfMonth)(n),
                        p = Object(a.endOfDay)(l(this.rawParams.end) || n),
                        m = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex),
                        d = Object(i.b)(this.rawParams.topStatsAggregation);
                    this.params = {
                        start: u,
                        end: p,
                        topStatsIndex: m,
                        topStatsAggregation: d
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }();

        function l(e) {
            if (e) {
                var t = Object(a.parse)(e);
                if (Object(a.isValid)(t)) return t
            }
        }

        function c(e) {
            return e ? Object(a.format)(e, "YYYY-MM-DD") : ""
        }
    },
    ELpn: function(e, t) {},
    HQEQ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            a = n("VRrm"),
            s = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.a;
                    this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
                        return r.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var s = n.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(s)
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
            }()
    },
    HR5e: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }), t.b = function(e) {
                if (e === r.Week || e === r.Month) return e;
                return r.Day
            },
            function(e) {
                e.Day = "day", e.Week = "week", e.Month = "month"
            }(r || (r = {}))
    },
    UVy3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            a = n("GiK3"),
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
            g = n("6UW8"),
            f = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t.picker.destroy() : (t.picker = new g({
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
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(d.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(d.startOfDay)(this.props.endRange)), this.picker.setMinDate(Object(d.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(d.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(d.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(a.Component)),
            b = n("AJEV"),
            v = n("Odds"),
            y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = t.now || new Date,
                        a = Object(d.endOfDay)(r),
                        s = Object(d.startOfDay)(r),
                        o = Object(d.startOfMonth)(r);
                    return n.presets = [{
                        message: Object(i.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 6),
                            end: a
                        }
                    }, {
                        message: Object(i.d)("Last 30 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 29),
                            end: a
                        }
                    }, {
                        message: Object(i.c)(o, {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: o,
                            end: a
                        }
                    }, {
                        message: Object(i.c)(Object(d.subMonths)(a, 1), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(d.startOfMonth)(Object(d.subMonths)(r, 1)),
                            end: Object(d.endOfMonth)(Object(d.subMonths)(r, 1))
                        }
                    }, {
                        message: Object(i.c)(Object(d.subMonths)(a, 2), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(d.startOfMonth)(Object(d.subMonths)(r, 2)),
                            end: Object(d.endOfMonth)(Object(d.subMonths)(r, 2))
                        }
                    }], n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(v._4, {
                        display: v.P.Flex,
                        flexDirection: v.R.Column
                    }, this.presets.map(function(t, n) {
                        return a.createElement(v._27, {
                            color: v.J.Link,
                            key: n
                        }, a.createElement(v._2, {
                            selected: Object(b.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval)
                        }, a.createElement(v._27, {
                            padding: 1,
                            textAlign: v._37.Center
                        }, a.createElement(v.O, {
                            noWrap: !0,
                            fontSize: v.T.Size5
                        }, t.message))))
                    }))
                }, t.prototype.handleClickFor = function(e) {
                    var t = this;
                    return function() {
                        return t.props.onChange(e)
                    }
                }, t
            }(a.Component),
            S = n("VRrm");

        function _(e, t, n) {
            void 0 === n && (n = new Date);
            var a = r.__assign({}, e, t);
            if (Object(d.differenceInDays)(a.end, a.start) >= 0) return a;
            var s = Object(d.differenceInDays)(e.end, e.start);
            if (Object(d.isEqual)(e.end, a.end)) {
                var i = Object(d.startOfDay)(n),
                    o = Object(d.addDays)(a.start, s);
                return o > i && (o = i), r.__assign({}, a, {
                    end: o
                })
            }
            return Object(d.isEqual)(e.start, a.start) ? r.__assign({}, a, {
                start: Object(d.subDays)(a.end, s)
            }) : e
        }
        var C = n("PGY2");

        function E(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, a, s, i;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", n = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(C.e)({
                                path: t
                            }), Object(C.e)({
                                path: n
                            })])];
                        case 1:
                            return a = r.sent(), s = a[0], i = a[1], s.isError() || i.isError() ? [2, {
                                isError: !0,
                                subscriptions: []
                            }] : [2, {
                                isError: !1,
                                subscriptions: function(e, t) {
                                    var n = e.active_products.reduce(function(e, t) {
                                        var n = {
                                            id: t.id,
                                            customName: t.custom_name,
                                            plan: t.plan,
                                            price: t.price,
                                            revenueSplit: t.revenue_split,
                                            count: 0,
                                            score: 0
                                        };
                                        return e.set(n.plan, n), e
                                    }, new Map);
                                    n = t.count_breakdown.reduce(function(e, t) {
                                        var n = e.get(t.plan);
                                        return n && (n.count = t.count, e.set(n.plan, n)), e
                                    }, n), n = t.score_breakdown.reduce(function(e, t) {
                                        var n = e.get(t.plan);
                                        return n && (n.score = t.score, e.set(n.plan, n)), e
                                    }, n);
                                    var r = Array.from(n.values());
                                    return Object(C.f)(r, [function(e) {
                                        return e.plan
                                    }], [C.a.Ascending])
                                }(s.body, i.body)
                            }]
                    }
                })
            })
        }
        var O = {
                "data-test-selector": "commit-button"
            },
            w = {
                "data-test-selector": "cancel-button"
            },
            T = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return a.createElement("div", null, a.createElement(v._4, {
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(v._4, {
                        padding: {
                            right: 2
                        }
                    }, a.createElement(f, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: S.b,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), a.createElement(v._4, {
                        padding: {
                            right: 2
                        }
                    }, a.createElement(f, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), a.createElement(v._27, {
                        padding: {
                            left: 2
                        },
                        borderLeft: !0
                    }, a.createElement(y, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), a.createElement(v._4, {
                        display: v.P.Flex,
                        justifyContent: v._3.Center
                    }, a.createElement(v._4, {
                        margin: {
                            right: 2
                        }
                    }, a.createElement(v.u, r.__assign({}, O, {
                        onClick: this.handleUpdateClick
                    }), Object(i.d)("Update", "ChannelAnalyticsDateRangePicker"))), a.createElement(v.u, r.__assign({}, w, {
                        type: v.A.Text,
                        onClick: this.props.onDismiss
                    }), Object(i.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(a.Component),
            A = n("ylrR"),
            D = n("9uzc"),
            k = {
                "data-test-selector": "time-range"
            },
            R = {
                "data-test-selector": "total-days"
            },
            j = {
                "data-test-selector": "date-picker-toggle"
            },
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return a.createElement(v._4, {
                        position: v._11.Relative
                    }, a.createElement(A.a, {
                        control: function(n) {
                            var s = n.toggle;
                            return a.createElement(v._4, {
                                padding: {
                                    bottom: 2
                                }
                            }, a.createElement(D.a, {
                                previousPath: "",
                                nextPath: ""
                            }, a.createElement(v.u, r.__assign({}, j, {
                                type: v.A.Text,
                                onClick: s,
                                fullWidth: !0
                            }), a.createElement(v.O, r.__assign({}, k, {
                                fontSize: v.T.Size4
                            }), e.formatDateRange(t)), a.createElement(v.O, r.__assign({}, R, {
                                fontSize: v.T.Size6,
                                color: v.J.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var r = n.close;
                        return a.createElement(v.p, {
                            noTail: !0,
                            show: !0,
                            direction: v.q.BottomCenter
                        }, a.createElement(v._4, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, a.createElement(T, {
                            interval: t,
                            onCommit: Object(h.compose)(r, e.props.updateInterval),
                            onDismiss: r
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
            }(a.Component),
            P = n("5kgt"),
            L = function(e) {
                return a.createElement(v._4, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H5,
                    bold: !0
                }, e.children))
            },
            N = n("K3NL"),
            F = 3,
            M = {
                "data-test-selector": "referral-percentage"
            };

        function I(e) {
            var t = e.referrals;
            return e.isLoading ? a.createElement(v._4, {
                margin: {
                    bottom: 2
                }
            }, a.createElement(v._10, {
                height: 375
            })) : a.createElement(v._4, {
                margin: {
                    top: 3
                }
            }, a.createElement(L, null, Object(i.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), a.createElement(v._27, {
                elevation: 1,
                background: v.m.Base
            }, a.createElement(v._4, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, a.createElement(v.O, {
                type: v._41.H3,
                fontSize: v.T.Size4,
                bold: !0
            }, Object(i.d)("Twitch", "ChannelAnalyticsReferralPanel")), V(t.totals.referrer.internalTwitch)), W(t.byReferralType.internalTwitch), a.createElement(v._4, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, a.createElement(v.O, {
                type: v._41.H3,
                fontSize: v.T.Size4,
                bold: !0
            }, Object(i.d)("Channels", "ChannelAnalyticsReferralPanel")), V(t.totals.referrer.internalChannel)), W(t.byReferralType.internalChannel), a.createElement(v._4, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, a.createElement(v.O, {
                type: v._41.H3,
                fontSize: v.T.Size4,
                bold: !0
            }, Object(i.d)("External", "ChannelAnalyticsReferralPanel")), V(t.totals.referrer.external)), W(t.byReferralType.external)))
        }

        function V(e) {
            return a.createElement(v.O, {
                fontSize: v.T.Size5,
                color: v.J.Alt2
            }, Object(i.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                totalViewCount: e
            }, "ChannelAnalyticsReferralPanel"))
        }

        function W(e) {
            return e.length ? e.slice(0, F).map(function(e, t) {
                return a.createElement(z, {
                    reportItem: e,
                    key: t
                })
            }) : null
        }

        function z(e) {
            var t, n = e.reportItem;
            return t = n.share > 0 ? Object(i.d)("{share, number, percent}", {
                share: n.share / 100
            }, "ChannelAnalyticsReferralPanel") : Object(i.d)("< 1%", "ChannelAnalyticsReferralPanel"), a.createElement(B, {
                name: Object(N.a)(n.name),
                percentMessage: t,
                width: n.share || 1,
                count: n.count
            })
        }

        function B(e) {
            var t = "";
            return e.count && (t = Object(i.d)("{count, number} views", {
                count: e.count
            }, "ChannelAnalyticsReferralPanel")), a.createElement(v._27, r.__assign({
                padding: {
                    y: 1,
                    right: 2,
                    left: 2
                },
                borderBottom: !0,
                fontSize: v.T.Size5
            }, Object(P.a)(e)), a.createElement(v.W, null, a.createElement(v.K, {
                cols: {
                    default: 5,
                    xs: 5,
                    sm: 5
                }
            }, a.createElement(v._4, {
                padding: {
                    left: 0,
                    right: 1
                }
            }, a.createElement(v.O, {
                fontSize: v.T.Size5,
                ellipsis: !0
            }, e.name))), a.createElement(v.K, {
                cols: {
                    default: 2,
                    xs: 3,
                    sm: 2
                }
            }, a.createElement(v._4, {
                padding: {
                    right: 1
                },
                textAlign: v._37.Right
            }, a.createElement(v.O, r.__assign({
                color: v.J.Alt2,
                ellipsis: !0
            }, M), e.percentMessage))), a.createElement(v.K, {
                cols: {
                    default: 5,
                    xs: 4,
                    sm: 5
                }
            }, a.createElement(v._4, {
                padding: {
                    top: .5
                }
            }, a.createElement(v._44, {
                label: t,
                direction: v._46.Top,
                align: v._45.Center,
                display: v.P.Block
            }, a.createElement(v._27, {
                background: v.m.Alt2
            }, a.createElement(v._14, {
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
            U = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, a.createElement(v._27, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: v._11.Relative
                    }, a.createElement(v._4, {
                        display: v.P.Flex,
                        justifyContent: v._3.Between
                    }, a.createElement(v._4, {
                        display: v.P.Flex,
                        alignItems: v.c.Center
                    }, a.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), a.createElement(v._4, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(v.O, {
                        type: v._41.H5
                    }, this.props.title))), a.createElement(v._4, {
                        textAlign: v._37.Right
                    }, a.createElement(v.O, {
                        type: v._41.H5,
                        bold: !0
                    }, this.props.revenue), a.createElement(v.O, {
                        type: v._41.H6,
                        color: v.J.Alt2
                    }, Object(i.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? a.createElement(v.p, {
                        show: !0,
                        direction: v.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(a.Component),
            q = function(e) {
                return Object(i.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            J = function(e) {
                return a.createElement(v._4, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, a.createElement("table", null, a.createElement("thead", null, a.createElement("tr", null, a.createElement("td", null, a.createElement(v._4, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0
                }, Object(i.d)("Subscription", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(v._4, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0
                }, Object(i.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(v._4, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0
                }, Object(i.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), a.createElement("tbody", null, e.subCounts.streams.twitchSubscriptionProducts.map(function(t, n) {
                    return a.createElement(G, {
                        key: n,
                        tier: q(t.defaultPrice),
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
        var G = function(e) {
                return a.createElement("tr", null, a.createElement("td", null, a.createElement(v.O, null, e.tier)), a.createElement("td", null, a.createElement(v.O, null, e.subscribers)), a.createElement("td", null, a.createElement(v.O, null, e.revenue)))
            },
            K = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            Y = function(e) {
                if (e.revenue.isLoading) return a.createElement(v._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(v._10, {
                    height: 448
                }));
                if (e.channel.role === b.d.None) return null;
                var t = e.revenue,
                    n = t.streams,
                    r = t.lookbackStreams;
                return a.createElement(v._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(L, null, Object(i.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), a.createElement(v._27, {
                    elevation: 1,
                    background: v.m.Base
                }, a.createElement(X, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), a.createElement("div", null, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 2
                    }
                }, a.createElement(v.O, {
                    type: v._41.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), a.createElement(U, {
                    title: Object(i.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.twitchSubscriptions.total),
                    lastRevenue: Q(r.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : a.createElement(J, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), a.createElement(U, {
                    title: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.primeSubscriptions.total),
                    lastRevenue: Q(r.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), a.createElement(U, {
                    title: Object(i.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.ads.total),
                    lastRevenue: Q(r.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), a.createElement(U, {
                    title: Object(i.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.bits.total),
                    lastRevenue: Q(r.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), a.createElement(U, {
                    title: Object(i.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.gameCommerce.total),
                    lastRevenue: Q(r.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), a.createElement(U, {
                    title: Object(i.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Q(n.extensions.total),
                    lastRevenue: Q(r.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }))))
            },
            X = function(e) {
                var t = H(e.totalAmount),
                    n = t.sign,
                    s = t.dollars,
                    o = t.cents;
                return a.createElement(v._4, r.__assign({
                    textAlign: v._37.Center,
                    padding: {
                        y: 2
                    }
                }, K), a.createElement(v._4, {
                    display: v.P.Flex,
                    justifyContent: v._3.Center
                }, a.createElement(v._27, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: v.d.Start,
                    color: v.J.Alt2
                }, n), a.createElement(v.O, {
                    type: v._41.H2,
                    bold: !0
                }, s), a.createElement(v._4, {
                    alignSelf: v.d.End
                }, a.createElement(v.O, {
                    type: v._41.Span,
                    bold: !0
                }, "." + o))), a.createElement(v.O, {
                    type: v._41.H6
                }, Object(i.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            Q = function(e) {
                return Object(i.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            };
        n("z39C");

        function $(e) {
            var t = e.messages,
                n = e.urls;
            return a.createElement(v._27, {
                display: v.P.Flex
            }, t.map(function(e, t) {
                return [e, n[t]]
            }).map(function(e, t) {
                return a.createElement(v._27, {
                    className: "insight-panel-btn",
                    background: v.m.Alt,
                    display: v.P.Flex,
                    flexGrow: 1,
                    flexWrap: v.S.NoWrap,
                    borderLeft: t > 0,
                    key: t
                }, a.createElement(v.u, {
                    type: v.A.Text,
                    linkTo: e[1],
                    targetBlank: !0,
                    fullWidth: !0
                }, a.createElement(v.O, null, e[0])))
            }))
        }
        var Z = {
                1000: function() {
                    return Object(i.d)("Tier 1 subs", "ChannelAnalyticsSubscribersPanel")
                },
                2000: function() {
                    return Object(i.d)("Tier 2 subs", "ChannelAnalyticsSubscribersPanel")
                },
                3000: function() {
                    return Object(i.d)("Tier 3 subs", "ChannelAnalyticsSubscribersPanel")
                }
            },
            ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.subscriptionRows = function() {
                        return n.state.subscriptions.map(function(e) {
                            return a.createElement(ne, {
                                name: Z[e.plan](),
                                revSplit: e.revenueSplit + " / " + (100 - e.revenueSplit),
                                score: Object(i.e)(e.score),
                                count: Object(i.e)(e.count),
                                key: e.id
                            })
                        })
                    }, n.state = {
                        subscriptions: [],
                        isLoading: !0
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchSubscriptions()
                }, t.prototype.render = function() {
                    if (this.state.isLoading) return a.createElement(v._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(v._10, {
                        height: 448
                    }));
                    if (0 === this.state.subscriptions.length) return null;
                    var e = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return a.createElement(v._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(L, null, Object(i.d)("How many subscribers do I have now?", "ChannelAnalyticsSubscribersPanel")), a.createElement(v._27, {
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(te, null), this.subscriptionRows(), a.createElement(ne, {
                        name: Object(i.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                        score: Object(i.e)(e),
                        count: Object(i.e)(t)
                    }), a.createElement($, {
                        messages: [Object(i.d)("Email me my subs list", "ChannelAnalyticsSubscribersPanel"), Object(i.d)("Send email to my subs", "ChannelAnalyticsSubscribersPanel")],
                        urls: ["", ""]
                    })))
                }, t.prototype.fetchSubscriptions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subscriptions: [],
                                        isLoading: !0
                                    }), [4, E(this.props.channel)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError ? [2] : (this.setState({
                                        subscriptions: e.subscriptions,
                                        isLoading: !1
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(a.Component),
            te = function() {
                return a.createElement(v._27, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: v._11.Relative
                }, a.createElement(v.W, null, a.createElement(v.K, {
                    cols: 8
                }, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            },
            ne = function(e) {
                return a.createElement(v._27, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: v._11.Relative
                }, a.createElement(v.W, null, a.createElement(v.K, {
                    cols: 6
                }, a.createElement(v._4, {
                    textAlign: v._37.Left,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H5,
                    bold: !0,
                    color: v.J.Alt
                }, e.name))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H5
                }, e.revSplit))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H5
                }, e.score))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._4, {
                    textAlign: v._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(v.O, {
                    type: v._41.H5
                }, e.count)))))
            },
            re = n("a+9f"),
            ae = n("FeZP"),
            se = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return a.createElement(v._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(v._10, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return a.createElement("span", null);
                var r = Object(i.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return a.createElement(v._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(L, null, Object(i.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), a.createElement(v._27, {
                    elevation: 1,
                    background: v.m.Base
                }, a.createElement(ie, {
                    clipsAttrs: n
                }), t ? a.createElement(ae.a, {
                    message: r,
                    url: "/" + t + "/manager/clips/channel"
                }) : a.createElement("p", null, r)))
            },
            ie = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(a.createElement(v._27, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, a.createElement(v._10, {
                        height: 50
                    })));
                return a.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return a.createElement(re.a, r.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            oe = n("HR5e"),
            le = function() {
                function e(e, t) {
                    var n = this;
                    switch (this.formatDateFromLabel = function(e) {
                        return n.formatDate(new Date(Number(e)))
                    }, this.formatShortDateFromLabel = function(e) {
                        return n.formatShortDate(new Date(Number(e)))
                    }, this.aggregationInterval = e, this.aggregationInterval) {
                        case oe.a.Day:
                            this.addInterval = d.addDays, this.startOf = d.startOfDay, this.formatDate = function(e) {
                                return Object(i.c)(e, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(i.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case oe.a.Week:
                            this.addInterval = d.addWeeks, this.startOf = d.startOfWeek, this.formatDate = function(e) {
                                return Object(i.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                }) + " – " + Object(i.c)(Object(d.endOfWeek)(e), {
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(i.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case oe.a.Month:
                            this.addInterval = d.addMonths, this.startOf = d.startOfMonth, this.formatDate = function(e) {
                                return Object(i.c)(e, {
                                    month: "short",
                                    year: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(i.c)(e, {
                                    month: "short",
                                    year: "numeric"
                                })
                            };
                            break;
                        default:
                            throw new Error("Expected an AggregationInterval but received " + this.aggregationInterval)
                    }
                    this.dates = this.datesInRange(t), this.datesAsNumbers = this.dates.map(function(e) {
                        return e.getTime()
                    }), this.datesAsLabels = this.datesAsNumbers.map(function(e) {
                        return e.toString()
                    }), this.formattedDates = this.dates.map(function(e) {
                        return n.formatShortDate(e)
                    })
                }
                return e.prototype.sum = function(e, t) {
                    var n = this,
                        r = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.value,
                            i = a.date,
                            o = n.startOf(i).getTime(),
                            l = r.get(o) || 0;
                        r.set(o, l + s)
                    }), this.datesAsNumbers.map(function(e) {
                        return r.get(e) || 0
                    })
                }, e.prototype.weightedAverage = function(e, t) {
                    var n = this,
                        r = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.weight,
                            i = a.value,
                            o = a.date,
                            l = n.startOf(o).getTime(),
                            c = r.get(l);
                        c || (c = {
                            totalWeight: 0,
                            weightedValue: 0
                        }, r.set(l, c)), c.totalWeight += s, c.weightedValue += s * i
                    }), this.datesAsNumbers.map(function(e) {
                        var t = r.get(e) || {
                            totalWeight: 0,
                            weightedValue: 0
                        };
                        return t.weightedValue / t.totalWeight
                    })
                }, Object.defineProperty(e.prototype, "isByDay", {
                    get: function() {
                        return this.aggregationInterval === oe.a.Day
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(e) {
                    return e.aggregationInterval === this.aggregationInterval
                }, e.prototype.datesInRange = function(e) {
                    for (var t = [], n = this.startOf(e.start); n <= e.end;) t.push(n), n = this.addInterval(n, 1);
                    return t
                }, e
            }(),
            ce = function(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var n = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(n, e)
                }
                var r = document.createElement("a"),
                    a = encodeURIComponent(t);
                void 0 === r.download ? r.href = "data:attachment/csv;charset=utf-8," + a : (r.href = "data:text/csv;charset=utf-8," + a, r.download = e), r.target = "_blank", r.setAttribute("style", "visibility: hidden"), document.body.appendChild(r), r.click(), document.body.removeChild(r)
            },
            ue = function(e, t, n) {
                var r = oe.a.Day,
                    a = new le(r, e).dates.map(function(e) {
                        return e.toDateString()
                    }),
                    s = [
                        ["Date"]
                    ];
                a.forEach(function(e) {
                    s.push([e])
                }), ge(s, "Sub Revenue", me(t.twitchSubscriptions.timeseries, r)), ge(s, "Twitch Prime Revenue", me(t.primeSubscriptions.timeseries, r)), ge(s, "Bits Revenue", me(t.bits.timeseries, r)), ge(s, "Ad Revenue", me(t.ads.timeseries, r)), ge(s, "Game Sales Revenue", me(t.gameCommerce.timeseries, r)), ge(s, "Extensions Revenue", me(t.extensions.timeseries, r)), ge(s, "Twitch Prime Subs", de(n.primeSubscriptions.timeseries, r)), ge(s, "Subs", de(n.twitchSubscriptions.timeseries, r)), he(s, n.twitchSubscriptionProducts, r);
                var i = "Revenue by " + r + " " + e.start.toLocaleDateString() + " to " + e.end.toLocaleDateString() + ".csv";
                return ce(i, s.join("\n")), s
            },
            pe = function(e, t) {
                return e.toDateString()
            },
            me = function(e, t) {
                var n = new Map;
                return e.forEach(function(e) {
                    var t = e.amount,
                        r = e.date,
                        a = pe(r),
                        s = n.get(a);
                    n.set(a, (s || 0) + t)
                }), n
            },
            de = function(e, t) {
                var n = new Map;
                return e.forEach(function(e) {
                    var t = e.count,
                        r = e.date,
                        a = pe(r),
                        s = n.get(a);
                    n.set(a, (s || 0) + t)
                }), n
            },
            he = function(e, t, n) {
                t.forEach(function(t) {
                    var r = q(t.defaultPrice) + " Sub";
                    ge(e, r, de(t.timeseries, n))
                })
            },
            ge = function(e, t, n) {
                e[0].push(t), e.slice(1).forEach(function(e) {
                    var t = e[0],
                        r = n.get(t);
                    e.push(void 0 !== r ? r.toString() : "0")
                })
            },
            fe = function(e) {
                var t = e || [],
                    n = [
                        ["events.forms.startTime", "events.forms.endTime", "avgViewers", "maxViewers", "totalViews", "uniqueViews", "totalMW", "newFollowers", "chatters", "chatMessages", "clipsCreated", "clipViews", "adBreaks"]
                    ];
                t.map(function(e) {
                    var t = ['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + Math.ceil(e.avgViewerCount), "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialCount];
                    n.push(t.map(function(e) {
                        return e.toString()
                    }))
                });
                var r = t[0].interval.start.toLocaleDateString(),
                    a = t.slice(-1)[0].interval.end.toLocaleDateString();
                return ce("Stream Sessions " + r + " to " + a + ".csv", n.join("\n")), n
            },
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.downloadAllCSV = function() {
                        fe(t.props.analyticsResponse.streamSessions.sessions), ue(t.props.interval, t.props.analyticsResponse.revenue.streams, t.props.analyticsResponse.subCounts.streams)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : a.createElement("div", {
                        onClick: this.downloadAllCSV
                    }, a.createElement(ae.a, {
                        message: Object(i.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                        url: ""
                    }))
                }, t
            }(a.Component),
            ve = n("WaEV"),
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(v.Y, {
                        fullWidth: !0
                    }, a.createElement("canvas", {
                        ref: this.handleCanvasReady
                    }))
                }, t.prototype.setCanvasResolution = function(e) {
                    var t = e.width,
                        n = e.height,
                        r = this.getPixelRatio(e.getContext("2d"));
                    e.width = t * r, e.height = n * r, e.style.width = t + "px", e.style.height = n + "px", e.getContext("2d").setTransform(r, 0, 0, r, 0, 0)
                }, t.prototype.getPixelRatio = function(e) {
                    return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                }, t
            }(a.Component),
            Se = "#898395",
            _e = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            Ce = "rgba(0, 0, 0, 0)",
            Ee = "#ffffff",
            Oe = function(e) {
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
                                            fontColor: Se,
                                            fontSize: 10,
                                            padding: 5,
                                            callback: t.formatXAxes
                                        },
                                        gridLines: {
                                            color: Ee,
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
                                            fontColor: Se,
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
                                    bodyFontColor: Ee,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: Ce,
                                    footerFontStyle: "normal",
                                    callbacks: {
                                        title: t.formatTooltipTitle,
                                        label: t.formatTooltipLabel,
                                        afterLabel: t.formatTooltipAfterLabel,
                                        labelColor: t.getLabelColor
                                    }
                                },
                                onClick: t.handleDatasetClick,
                                responsive: !0
                            }
                        };
                        t.myChart = new ve(e, n)
                    }, t.formatXAxes = function(e) {
                        if (t.props.formatXAxis) return t.props.formatXAxis(e);
                        var n = Number(e);
                        return isNaN(n) ? e : Object(i.c)(new Date(Number(e)), {
                            month: "short",
                            day: "numeric"
                        })
                    }, t.handleDatasetClick = function(e, n) {
                        if (t.props.onDatasetClick) return t.props.onDatasetClick(e, n)
                    }, t.formatTooltipTitle = function(e) {
                        var n = e[0].index,
                            r = {
                                label: t.props.labels[n],
                                value: e.reduce(function(e, t) {
                                    return e + Number(t.yLabel)
                                }, 0),
                                index: n
                            };
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(r)
                    }, t.formatTooltipLabel = function(e, n) {
                        var r = e.index,
                            a = n.datasets[e.datasetIndex].label;
                        if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                            label: a,
                            value: Number(e.yLabel),
                            index: r
                        });
                        var s = Number(e.yLabel);
                        return isNaN(s) ? e.yLabel : Object(i.e)(Number(e.yLabel))
                    }, t.formatTooltipAfterLabel = function(e, n) {
                        if (t.props.formatTooltipAfterLabel) {
                            var r = e.index,
                                a = Number(n.labels[r]),
                                s = n.datasets[e.datasetIndex].label;
                            return t.props.formatTooltipAfterLabel({
                                label: s,
                                time: a,
                                value: Number(e.yLabel),
                                index: r
                            })
                        }
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: Ce,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        className: "top-stats-chart"
                    }, a.createElement(ye, {
                        onCanvasReady: this.handleCanvasReady
                    }))
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update())
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: _e[t]
                        }
                    })
                }, t
            }(a.Component),
            we = {
                "data-test-selector": "no-data"
            },
            Te = function() {
                return a.createElement(v._4, r.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    textAlign: v._37.Center
                }, we), a.createElement(v.O, {
                    type: v._41.H3
                }, Object(i.d)("Nothing to show yet", "ChannelAnalyticsChartNoData")), a.createElement(v.O, {
                    color: v.J.Alt2,
                    fontSize: v.T.Size5
                }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsChartNoData")))
            },
            Ae = n("u4Vk"),
            De = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatasetClick = function(e, n) {
                        if (t.props.aggregation.isByDay) {
                            var r = t.props.streamSessionsResponse.sessions[0].channel.name;
                            if (r && n && n.length > 0) {
                                var a = n[0],
                                    s = a._chart.data.labels[a._index];
                                window.open("/" + r + "/dashboard/stream-summary/" + s)
                            }
                        }
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.aggregation.isByDay) {
                            var n = new Date(Number(e.label)),
                                r = t.props.streamSessionsResponse.sessions[e.index],
                                a = Object(i.c)(n, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                s = Object(Ae.b)(r.interval);
                            return Object(i.d)("{date} – {shortDuration}", {
                                date: a,
                                shortDuration: s
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.streamSessionsResponse !== e.streamSessionsResponse || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.streamSessionsResponse.isLoading) return a.createElement(v._4, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(v._10, {
                        height: 300
                    }));
                    var e, t, n = this.props.streamSessionsResponse.sessions;
                    return 0 === n.length ? a.createElement(Te, null) : (this.props.aggregation.isByDay ? (e = n.map(function(e) {
                        return e.interval.start.getTime().toString()
                    }), t = n.map(this.props.getDataFromSession)) : (e = this.props.aggregation.datesAsLabels, t = this.props.aggregateDataFromSessions(this.props.streamSessionsResponse.sessions)), a.createElement(Oe, {
                        labels: e,
                        datasets: [{
                            label: this.props.datasetLabel,
                            data: t
                        }],
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                        onDatasetClick: this.handleDatasetClick
                    }))
                }, t
            }(a.Component),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = e.value;
                        return t = t < 10 ? Math.round(10 * t) / 10 : Math.round(t), Object(i.d)("{total, plural, one {# Avg. Viewer} other {# Avg. Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsAvgViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.avgViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(Ae.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(De, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetLabel: Object(i.d)("Avg. Viewers", "ChannelAnalyticsViewerGraph"),
                        getDataFromSession: this.getDataFromSession,
                        aggregateDataFromSessions: this.aggregateData,
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(a.Component),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.messagesTotal
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(i.d)("{total, plural, one {# Message} other {# Messages}}", {
                            total: t
                        }, "ChannelAnalyticsChatMesssages")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(De, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetLabel: Object(i.d)("Chat Messages", "ChannelAnalyticsChatMesssages"),
                        getDataFromSession: this.getDataFromSession,
                        aggregateDataFromSessions: this.aggregateData,
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(a.Component),
            je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.uniqueChatters
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(i.d)("{total, plural, one {# Chatter} other {# Chatters}}", {
                            total: t
                        }, "ChannelAnalyticsTopStatsChatters")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(De, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetLabel: Object(i.d)("Chatters", "ChannelAnalyticsTopStatsChatters"),
                        getDataFromSession: this.getDataFromSession,
                        aggregateDataFromSessions: this.aggregateData,
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(a.Component),
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.totalViewers
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.totalViewers,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(i.d)("{total, plural, one {# Live View} other {# Live Views}}", {
                            total: t
                        }, "ChannelAnalyticsLiveViews")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(De, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetLabel: Object(i.d)("Live Views", "ChannelAnalyticsLiveViews"),
                        getDataFromSession: this.getDataFromSession,
                        aggregateDataFromSessions: this.aggregateData,
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(a.Component),
            Pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.followersChange
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Object(i.d)("{total, plural, one {New Follower} other {New Followers}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsNewFollowers");
                        return Object(i.d)("{total, number} {metric}", {
                            total: e.value,
                            metric: t
                        }, "ChannelAnalyticsTopStatsNewFollowers")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(De, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetLabel: Object(i.d)("New Followers", "ChannelAnalyticsTopStatsNewFollowers"),
                        getDataFromSession: this.getDataFromSession,
                        aggregateDataFromSessions: this.aggregateData,
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(a.Component),
            Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
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
                        var n = Object(i.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(i.d)("{currency} {label}", {
                            currency: n,
                            label: t.props.aggregation.formatDateFromLabel(e.label)
                        }, "ChannelAnalyticsTopStatsRevenueTitle")
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.revenue !== e.analyticsResponse.revenue || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.revenue.isLoading) return a.createElement(v._10, {
                        height: 300
                    });
                    var e = this.props.analyticsResponse.revenue.streams;
                    return a.createElement(Oe, {
                        labels: this.props.aggregation.datesAsLabels,
                        datasets: [{
                            label: Object(i.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(i.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.ads.timeseries, this.getAggregationData)
                        }, {
                            label: Object(i.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.bits.timeseries, this.getAggregationData)
                        }, {
                            label: Object(i.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.gameCommerce.timeseries, this.getAggregationData)
                        }, {
                            label: Object(i.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.extensions.timeseries, this.getAggregationData)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel
                    })
                }, t.prototype.getAggregationData = function(e) {
                    return {
                        value: e.amount,
                        date: e.date
                    }
                }, t
            }(a.Component),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return Object(i.d)("{numOfSubs, number} {label}", {
                            numOfSubs: e.value,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipTitle = function(e) {
                        var n = t.props.aggregation.formatDate(new Date(Number(e.label)));
                        return Object(i.d)("{date} – {totalSubs, number} Subs", {
                            date: n,
                            totalSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipAfterLabel = function(e) {
                        if ("Paid subs" === e.label && e.value && e.time) {
                            var n = t.props.analyticsResponse.subCounts.streams.twitchSubscriptions.timeseries,
                                r = {};
                            return n.forEach(function(n) {
                                if (t.props.aggregation.startOf(n.date).getTime() === e.time) {
                                    var a = n.product.defaultPrice;
                                    void 0 === r[a] && (r[a] = 0), r[a] += n.count
                                }
                            }), Object.keys(r).map(function(e) {
                                var t = Object(i.e)(Number(e) / 100, {
                                        style: "currency",
                                        currency: "USD"
                                    }),
                                    n = r[e];
                                return Object(i.d)("{numOfSubs, number} {usd} Subs", {
                                    usd: t,
                                    numOfSubs: n
                                }, "ChannelAnalyticsTopStatsSubscriptions")
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.subCounts !== e.analyticsResponse.subCounts || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    var e = this.props.analyticsResponse.subCounts.streams;
                    return a.createElement(Oe, {
                        labels: this.props.aggregation.dates.map(function(e) {
                            return e.getTime().toString()
                        }),
                        datasets: [{
                            label: Object(i.d)("Paid subs", "ChannelAnalyticsTopStatsSubscriptions"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsSubscriptions"),
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatTooltipAfterLabel: this.formatTooltipAfterLabel
                    })
                }, t.prototype.getAggregationData = function(e) {
                    return {
                        value: e.count,
                        date: e.date
                    }
                }, t
            }(a.Component),
            Fe = n("HW6M"),
            Me = n("F8kA"),
            Ie = (n("h0zb"), {
                "data-test-selector": "up-trend-indicator"
            }),
            Ve = {
                "data-test-selector": "down-trend-indicator"
            },
            We = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Fe("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return a.createElement(v.Y, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: v._37.Center
                    }, a.createElement(Me.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, a.createElement(v.O, {
                        type: v._41.H3
                    }, this.props.title, this.renderTrendIndicator()), a.createElement(v.O, {
                        type: v._41.H6
                    }, this.props.subtitle)))
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? a.createElement(v._4, {
                        display: v.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(v._17, r.__assign({
                        asset: v._18.GlyphArrUp,
                        type: v._19.Success
                    }, Ie))) : this.props.trend < 0 ? a.createElement(v._4, {
                        display: v.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(v._17, r.__assign({
                        asset: v._18.GlyphArrDown,
                        type: v._19.Warn
                    }, Ve))) : null : null
                }, t
            }(a.Component),
            ze = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        n = this.averageViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []);
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), a.createElement(We, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, t.prototype.averageViewers = function(e) {
                    if (!e.length) return 0;
                    var t = [0, 0],
                        n = t[0],
                        r = t[1];
                    return e.forEach(function(e) {
                        var t = (e.interval.end.getTime() - e.interval.start.getTime()) / 1e3;
                        n += e.avgViewerCount * t, r += t
                    }), n / r
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(i.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(i.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(a.Component);

        function Be(e, t) {
            return e.reduce(function(e, n) {
                return e + t(n)
            }, 0) / (e.length || 1)
        }
        var He = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.chatMessages,
                        n = this.previousChatMessages;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), a.createElement(We, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "chatMessages", {
                    get: function() {
                        return Be(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousChatMessages", {
                    get: function() {
                        return Be(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            Ue = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.uniqueChatters,
                        n = this.previousUniqueChatters;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), a.createElement(We, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "uniqueChatters", {
                    get: function() {
                        return Be(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousUniqueChatters", {
                    get: function() {
                        return Be(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.liveViews,
                        n = this.previousLiveViews;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), a.createElement(We, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Live Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "liveViews", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.sessions || [];
                        return e.length ? e.reduce(function(e, t) {
                            return e + t.totalViewers
                        }, 0) : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousLiveViews", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.lookbackSessions || [];
                        return e.length ? e.reduce(function(e, t) {
                            return e + t.totalViewers
                        }, 0) : 0
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
            }(a.Component),
            Je = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.followersChange,
                        n = this.previousFollowersChange;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(i.d)("{sign}{followersDiff, number}", {
                            followersDiff: Math.abs(e),
                            sign: t
                        }, "ChannelAnalyticsTopStats")
                    }(t), a.createElement(We, {
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
            }(a.Component);
        n("gFt/");
        var Ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return a.createElement(We, {
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
                        r = t.dollars,
                        s = t.cents;
                    return a.createElement("span", null, a.createElement(v.O, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: v.T.Size6,
                        type: v._41.Span
                    }, n + " "), a.createElement(v.O, {
                        type: v._41.Span
                    }, r), a.createElement(v.O, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: v.T.Size4,
                        type: v._41.Span
                    }, "." + s))
                }, t
            }(a.Component),
            Ke = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.analyticsResponse.subCounts.streams.getTotalSubCount(),
                        n = this.props.analyticsResponse.subCounts.lookbackStreams.getTotalSubCount();
                    return e = this.props.analyticsResponse.subCounts.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), a.createElement(We, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Subscriptions", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, t
            }(a.Component),
            Ye = {
                "data-test-selector": "current-chart"
            },
            Xe = [ke, xe, Re, je, Pe, Le, Ne],
            Qe = Xe.length - 1,
            $e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleAggregationChange = function(e) {
                        t.props.urlStore.replace({
                            topStatsAggregation: e.currentTarget.value
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return a.createElement(v._27, {
                        background: v.m.Base,
                        elevation: 1
                    }, a.createElement(v._29, null, a.createElement(ze, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), a.createElement(qe, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    }), a.createElement(He, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 2
                        }),
                        isActive: 2 === e
                    }), a.createElement(Ue, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 3
                        }),
                        isActive: 3 === e
                    }), a.createElement(Je, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 4
                        }),
                        isActive: 4 === e
                    }), a.createElement(Ge, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 5
                        }),
                        isActive: 5 === e
                    }), a.createElement(Ke, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.urlStore.buildPathWithParams({
                            topStatsIndex: 6
                        }),
                        isActive: 6 === e
                    })), a.createElement(v._4, {
                        padding: 2
                    }, a.createElement(v._4, {
                        display: v.P.Flex,
                        flexDirection: v.R.RowReverse,
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement("div", null, a.createElement(v._23, {
                        onChange: this.handleAggregationChange,
                        value: this.props.urlStore.params.topStatsAggregation
                    }, a.createElement("option", {
                        value: oe.a.Day
                    }, Object(i.d)("Day", "ChannelAnalyticsTopStats")), a.createElement("option", {
                        value: oe.a.Week
                    }, Object(i.d)("Week", "ChannelAnalyticsTopStats")), a.createElement("option", {
                        value: oe.a.Month
                    }, Object(i.d)("Month", "ChannelAnalyticsTopStats"))))), this.renderChartAtIndex()), a.createElement(be, {
                        interval: this.props.urlStore.params,
                        analyticsResponse: this.props.analyticsResponse
                    }))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = Xe[this.cappedIndex],
                        t = new le(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params);
                    return a.createElement(e, r.__assign({}, Ye, {
                        analyticsResponse: this.props.analyticsResponse,
                        aggregation: t
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(Qe, this.props.urlStore.params.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            Ze = {
                "data-test-selector": "card-image"
            },
            et = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return a.createElement(v._2, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, a.createElement(v._27, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, a.createElement(v.B, {
                    row: !0
                }, a.createElement(v.D, r.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: v.E.Size8,
                    aspect: v.k.Aspect16x9
                }, Ze)), a.createElement(v._4, {
                    flexGrow: 1
                }, a.createElement(v.C, {
                    overflow: v._7.Hidden
                }, a.createElement(v._4, {
                    display: v.P.Flex,
                    alignItems: v.c.Center,
                    justifyContent: v._3.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, a.createElement(v._4, {
                    flexGrow: 1
                }, a.createElement(v.O, {
                    color: v.J.Base,
                    type: v._41.H5,
                    ellipsis: !0
                }, Object(i.d)("{start} - {end, time, short}", {
                    start: Object(i.c)(t.interval.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.interval.end
                }, "ChannelAnalyticsStreamCard")), a.createElement(v.O, {
                    color: v.J.Alt2,
                    type: v._41.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), a.createElement(v._4, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, a.createElement(v.O, {
                    color: v.J.Alt2,
                    type: v._41.Span
                }, Object(i.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))))
            };
        var tt, nt = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(tt || (tt = {}));
        var rt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return a.createElement(v._23, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, a.createElement("option", {
                            value: tt.AvgViewers
                        }, Object(i.d)("Avg Viewers", "ChannelAnalyticsTopStreamsPanel")), a.createElement("option", {
                            value: tt.NewFollowers
                        }, Object(i.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")), a.createElement("option", {
                            value: tt.NewSubscriptions
                        }, Object(i.d)("New Subscriptions", "ChannelAnalyticsTopStreamsPanel")))
                    }, n.streamsList = function() {
                        return a.createElement("span", null, n.sortedStreamSummaries().slice(0, nt).map(function(e, t) {
                            return a.createElement(et, {
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
                            case tt.NewFollowers:
                            case tt.NewSubscriptions:
                                return e.followersChange;
                            case tt.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case tt.NewFollowers:
                                return Object(C.f)(e, [function(e) {
                                    return e.followersChange
                                }], [C.a.Descending]);
                            case tt.NewSubscriptions:
                                return Object(C.f)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending]);
                            case tt.AvgViewers:
                            default:
                                return Object(C.f)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending])
                        }
                    }, n.state = {
                        sortType: tt.AvgViewers
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? a.createElement(v._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(v._10, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? a.createElement("span", null) : a.createElement(v._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(L, null, Object(i.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")), a.createElement(v._27, {
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(v._4, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: v.P.Flex
                    }, a.createElement(v._4, {
                        flexGrow: 1
                    }, a.createElement(v.O, {
                        type: v._41.H5,
                        bold: !0
                    }, Object(i.d)("Top {limit}", {
                        limit: nt
                    }, "ChannelAnalyticsTopStreamsPanel"))), a.createElement(v._4, null, this.sortDropdown())), this.streamsList()))
                }, t
            }(a.Component),
            at = n("XV0p"),
            st = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new at.URLStore(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = S.b,
                        n = Object(d.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(a.Component),
            it = n("pDcl"),
            ot = n("OAwv");

        function lt(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function ct(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, a, s, i;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return e.role === b.d.None ? [2, {
                                isError: !1,
                                streams: at.RevenueStreams.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = ot.stringify(r.__assign({}, lt(t.start, t.end), {
                                fraction: "day"
                            })), s = [n, a].join("?"), [4, Object(C.e)({
                                path: s
                            })]);
                        case 1:
                            return (i = o.sent()).isError() ? [2, {
                                isError: !0,
                                streams: at.RevenueStreams.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: at.RevenueStreams.fromPayload(i.body)
                            }]
                    }
                })
            })
        }
        var ut = n("+TF1"),
            pt = n("DNvj"),
            mt = n("x9gg"),
            dt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: at.RevenueStreams.buildEmpty(),
                            lookbackStreams: at.RevenueStreams.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            streams: at.SubCountStreams.buildEmpty(),
                            lookbackStreams: at.SubCountStreams.buildEmpty(),
                            isLoading: !0
                        },
                        streamSessions: {
                            sessions: [],
                            lookbackSessions: [],
                            isLoading: !0
                        },
                        referrals: {
                            referrals: C.b,
                            isLoading: !0
                        }
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(b.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : a.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a, s, i = this;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        streamSessions: r.__assign({}, this.state.streamSessions, {
                                            isLoading: !0
                                        })
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, Object(ut.a)({
                                        channelID: this.props.channel.id,
                                        channelName: this.props.channel.name,
                                        interval: e
                                    })]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? [2] : (n = Object(mt.a)(t.streamSummaries, function(e) {
                                        return e.interval.start > i.props.lookbackInterval.end
                                    }), a = n[0], s = n[1], this.setState({
                                        streamSessions: {
                                            isLoading: !1,
                                            sessions: a,
                                            lookbackSessions: s
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchTopClips = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(pt.a)(this.props.channel.name, this.props.interval)]) : [2];
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
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e = this;
                        return r.__generator(this, function(t) {
                            return this.props.channel ? (this.setState({
                                revenue: {
                                    streams: at.RevenueStreams.buildEmpty(),
                                    lookbackStreams: at.RevenueStreams.buildEmpty(),
                                    isLoading: !0
                                }
                            }), ct(this.props.channel, this.props.interval).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: r.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), ct(this.props.channel, this.props.lookbackInterval).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: r.__assign({}, e.revenue, {
                                            lookbackStreams: t.streams
                                        })
                                    }
                                })
                            }), [2]) : [2]
                        })
                    })
                }, t.prototype.fetchSubCounts = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a, s;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            streams: at.SubCountStreams.buildEmpty(),
                                            lookbackStreams: at.SubCountStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var n, a, s, i;
                                            return r.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === b.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: at.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", a = ot.stringify(r.__assign({}, lt(t.start, Object(d.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [n, a].join("?"), [4, Object(C.e)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: at.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: i.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = i.sent()).isError ? [2] : (n = at.SubCountStreams.partitionFromPayload(t.subscriptions, this.props.lookbackInterval), a = n[0], s = n[1], this.setState({
                                        subCounts: {
                                            isLoading: !1,
                                            streams: a,
                                            lookbackStreams: s
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchReferrals = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        referrals: {
                                            referrals: C.b,
                                            isLoading: !0
                                        }
                                    }), [4, Object(C.d)(this.props.channel, this.props.interval)]) : [2];
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
            }(a.Component),
            ht = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = b.c.fromChannelData(this.props.data.channel);
                    return a.createElement(o.b, null, a.createElement(st, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return a.createElement(v._4, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, a.createElement(x, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), a.createElement(v._27, {
                            margin: {
                                bottom: 1
                            },
                            display: v.P.Flex,
                            flexDirection: v.R.Column,
                            flexWrap: v.S.NoWrap,
                            alignItems: v.c.Stretch,
                            breakpointMedium: {
                                flexDirection: v.R.Row
                            }
                        }, a.createElement(v._4, {
                            display: v.P.Flex,
                            flexGrow: 1,
                            flexWrap: v.S.NoWrap,
                            flexDirection: v.R.Column
                        }, a.createElement(dt, {
                            interval: t.params,
                            lookbackInterval: (n = t.params, r = Object(d.differenceInDays)(n.end, n.start) + 1, {
                                start: Object(d.subDays)(n.start, r),
                                end: Object(d.subDays)(n.end, r)
                            }),
                            channel: e
                        }, function(n) {
                            return a.createElement(a.Fragment, null, a.createElement($e, {
                                urlStore: t,
                                analyticsResponse: n
                            }), a.createElement(Y, {
                                channel: e,
                                revenue: n.revenue,
                                subCounts: n.subCounts
                            }), a.createElement(se, {
                                channel: e.name,
                                topClips: n.topClips
                            }), a.createElement(rt, {
                                streamSessions: n.streamSessions
                            }), a.createElement(I, {
                                referrals: n.referrals.referrals,
                                isLoading: n.referrals.isLoading
                            }), a.createElement(ee, {
                                channel: e.name
                            }))
                        }))));
                        var n, r
                    }))
                }, t
            }(a.Component)),
            gt = Object(s.d)(Object(l.a)(it, {
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
            }))(ht);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return ht
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return gt
        })
    },
    VRrm: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        });
        var r = n("wuJz"),
            a = (n.n(r), Object(r.parse)("2011-01-01")),
            s = [{
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
            }]
    },
    Wc9c: function(e, t) {},
    XV0p: function(e, t, n) {
        "use strict";
        var r = n("Aalc");
        n.d(t, "URLStore", function() {
            return r.a
        });
        var a = n("HQEQ");
        n.d(t, "RevenueStreams", function() {
            return a.a
        });
        var s = n("qYB8");
        n.d(t, "EMPTY_SUB_COUNT_RESPONSE", function() {
            return s.a
        }), n.d(t, "SubCountStreams", function() {
            return s.b
        });
        var i = n("0wv6");
        n.n(i)
    },
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
    },
    qYB8: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        });
        var r = n("TToO"),
            a = n("VRrm"),
            s = n("x9gg"),
            i = {
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            o = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.a;
                    this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
                        return r.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var s = this.twitchSubscriptionProducts.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []).sort(function(e, t) {
                        return e.date.getTime() - t.date.getTime()
                    });
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(s)
                }
                return e.fromPayload = function(t) {
                    return new e(this.normalizePayload(t))
                }, e.partitionFromPayload = function(t, n) {
                    var r = this.normalizePayload(t),
                        a = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        i = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        o = function(e) {
                            return e.date > n.end
                        },
                        l = Object(s.a)(r.primeSubscriptions, o),
                        c = l[0],
                        u = l[1];
                    return a.primeSubscriptions = c, i.primeSubscriptions = u, r.twitchSubscriptionProducts.forEach(function(e) {
                        var t = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            n = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            r = Object(s.a)(e.timeseries, o),
                            l = r[0],
                            c = r[1];
                        t.timeseries = l, n.timeseries = c, a.twitchSubscriptionProducts.push(t), i.twitchSubscriptionProducts.push(n)
                    }), [new e(a), new e(i)]
                }, e.buildEmpty = function() {
                    return new e({
                        primeSubscriptions: [],
                        twitchSubscriptionProducts: []
                    })
                }, e.normalizePayload = function(e) {
                    var t = this;
                    return {
                        primeSubscriptions: this.normalizeTimeseries(e.prime_subscriptions),
                        twitchSubscriptionProducts: e.twitch_subscriptions.map(function(e) {
                            var n = {
                                defaultPrice: e.default_price,
                                productID: e.product_id
                            };
                            return r.__assign({}, n, {
                                timeseries: t.normalizeTimeseries(e.sub_counts, n)
                            })
                        })
                    }
                }, e.normalizeTimeseries = function(e, t) {
                    return e.map(function(e) {
                        return {
                            count: e.count,
                            date: new Date(e.timestamp),
                            product: t
                        }
                    })
                }, e.prototype.getTotalSubCount = function() {
                    return this.primeSubscriptions.total + this.twitchSubscriptions.total
                }, e.prototype.getTimeseriesWithTotal = function(e) {
                    return {
                        timeseries: e,
                        total: Math.floor(e.reduce(function(e, t) {
                            return e + t.count
                        }, 0))
                    }
                }, e
            }()
    },
    x9gg: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            for (var n = [], r = [], a = 0, s = e; a < s.length; a++) {
                var i = s[a];
                t(i) ? n.push(i) : r.push(i)
            }
            return [n, r]
        }
    },
    z39C: function(e, t) {}
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-f0dc6bed6d0fc2842be3f83aee4c7633.js.map