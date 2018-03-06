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
            i = (n.n(s), n("VRrm")),
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
                                return t
                            }(e))),
                            n = s.stringify(t);
                        return o.location.pathname + "?" + n
                    }, this.location = e, this.history = t, this.rawParams = s.parse(e.search);
                    var u = l(this.rawParams.start) || Object(a.startOfDay)(Object(a.subDays)(n, i.a - 1)),
                        p = Object(a.endOfDay)(l(this.rawParams.end) || n),
                        m = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex);
                    this.params = {
                        start: u,
                        end: p,
                        topStatsIndex: m
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
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.b;
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
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(d.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(d.startOfDay)(this.props.endRange)), this.picker.setMinDate(Object(d.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(d.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(d.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(a.Component)),
            g = n("AJEV"),
            y = n("Odds"),
            v = function(e) {
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
                        message: Object(i.d)("Last 28 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 27),
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
                    return a.createElement(y._2, {
                        display: y.N.Flex,
                        flexDirection: y.P.Column
                    }, this.presets.map(function(t, n) {
                        return a.createElement(y._25, {
                            color: y.I.Link,
                            key: n
                        }, a.createElement(y._0, {
                            selected: Object(g.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval)
                        }, a.createElement(y._25, {
                            padding: 1,
                            textAlign: y._36.Center
                        }, a.createElement(y._35, {
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
            }(a.Component),
            _ = n("VRrm");

        function E(e, t, n) {
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

        function S(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, a, s, i;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", n = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(C.f)({
                                path: t
                            }), Object(C.f)({
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
                                    return Object(C.h)(r, [function(e) {
                                        return e.plan
                                    }], [C.a.Ascending])
                                }(s.body, i.body)
                            }]
                    }
                })
            })
        }
        var w = {
                "data-test-selector": "commit-button"
            },
            O = {
                "data-test-selector": "cancel-button"
            },
            R = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = E(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = E(n.state.interval, {
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
                    return a.createElement("div", null, a.createElement(y._2, {
                        display: y.N.Flex,
                        flexWrap: y.Q.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._2, {
                        padding: {
                            right: 2
                        }
                    }, a.createElement(b, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: _.c,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), a.createElement(y._2, {
                        padding: {
                            right: 2
                        }
                    }, a.createElement(b, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), a.createElement(y._25, {
                        padding: {
                            left: 2
                        },
                        borderLeft: !0
                    }, a.createElement(v, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), a.createElement(y._2, {
                        display: y.N.Flex,
                        justifyContent: y._1.Center
                    }, a.createElement(y._2, {
                        margin: {
                            right: 2
                        }
                    }, a.createElement(y.u, r.__assign({}, w, {
                        onClick: this.handleUpdateClick
                    }), Object(i.d)("Update", "ChannelAnalyticsDateRangePicker"))), a.createElement(y.u, r.__assign({}, O, {
                        type: y.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(i.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(a.Component),
            T = n("ylrR"),
            k = n("9uzc"),
            j = {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.interval;
                    return a.createElement(y._2, {
                        position: y._9.Relative
                    }, a.createElement(T.a, {
                        control: function(n) {
                            var s = n.toggle;
                            return a.createElement(y._2, {
                                padding: {
                                    bottom: 2
                                }
                            }, a.createElement(k.a, {
                                previousPath: "",
                                nextPath: ""
                            }, a.createElement(y.u, r.__assign({}, x, {
                                type: y.z.Text,
                                onClick: s,
                                fullWidth: !0
                            }), a.createElement(y._35, r.__assign({}, j, {
                                fontSize: 4
                            }), e.formatDateRange(t)), a.createElement(y._35, r.__assign({}, A, {
                                fontSize: 6,
                                color: y.I.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var r = n.close;
                        return a.createElement(y.p, {
                            noTail: !0,
                            show: !0,
                            direction: y.q.BottomCenter
                        }, a.createElement(y._2, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, a.createElement(R, {
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
            N = function(e) {
                return a.createElement(y._2, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(y._35, {
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
            return e.isLoading ? a.createElement(y._2, {
                margin: {
                    bottom: 2
                }
            }, a.createElement(y._8, {
                height: 375
            })) : a.createElement(y._2, {
                margin: {
                    top: 3
                }
            }, a.createElement(N, null, Object(i.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), a.createElement(y._25, {
                elevation: 1,
                background: y.m.Base
            }, a.createElement(y._2, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, a.createElement(y._35, {
                type: y._40.H3,
                fontSize: y.R.Size4,
                bold: !0
            }, Object(i.d)("Twitch", "ChannelAnalyticsReferralPanel")), z(t.totals.referrer.internalTwitch)), W(t.byReferralType.internalTwitch), a.createElement(y._2, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, a.createElement(y._35, {
                type: y._40.H3,
                fontSize: y.R.Size4,
                bold: !0
            }, Object(i.d)("Channels", "ChannelAnalyticsReferralPanel")), z(t.totals.referrer.internalChannel)), W(t.byReferralType.internalChannel), a.createElement(y._2, {
                padding: {
                    top: 2,
                    bottom: 1,
                    right: 2,
                    left: 2
                }
            }, a.createElement(y._35, {
                type: y._40.H3,
                fontSize: y.R.Size4,
                bold: !0
            }, Object(i.d)("External", "ChannelAnalyticsReferralPanel")), z(t.totals.referrer.external)), W(t.byReferralType.external)))
        }

        function z(e) {
            return a.createElement(y._35, {
                fontSize: y.R.Size5,
                color: y.I.Alt2
            }, Object(i.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                totalViewCount: e
            }, "ChannelAnalyticsReferralPanel"))
        }

        function W(e) {
            return e.length ? e.slice(0, I).map(function(e, t) {
                return a.createElement(B, {
                    reportItem: e,
                    key: t
                })
            }) : null
        }

        function B(e) {
            var t, n = e.reportItem;
            return t = n.share > 0 ? Object(i.d)("{share, number, percent}", {
                share: n.share / 100
            }, "ChannelAnalyticsReferralPanel") : Object(i.d)("< 1%", "ChannelAnalyticsReferralPanel"), a.createElement(V, {
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
            }, "ChannelAnalyticsReferralPanel")), a.createElement(y._25, r.__assign({
                padding: {
                    y: 1,
                    right: 2,
                    left: 2
                },
                borderBottom: !0,
                fontSize: y.R.Size5
            }, Object(P.a)(e)), a.createElement(y.U, null, a.createElement(y.J, {
                cols: {
                    default: 5,
                    xs: 5,
                    sm: 5
                }
            }, a.createElement(y._2, {
                padding: {
                    left: 0,
                    right: 1
                }
            }, a.createElement(y._35, {
                fontSize: y.R.Size5,
                ellipsis: !0
            }, e.name))), a.createElement(y.J, {
                cols: {
                    default: 2,
                    xs: 3,
                    sm: 2
                }
            }, a.createElement(y._2, {
                padding: {
                    right: 1
                },
                textAlign: y._36.Right
            }, a.createElement(y._35, r.__assign({
                color: y.I.Alt2,
                ellipsis: !0
            }, F), e.percentMessage))), a.createElement(y.J, {
                cols: {
                    default: 5,
                    xs: 4,
                    sm: 5
                }
            }, a.createElement(y._2, {
                padding: {
                    top: .5
                }
            }, a.createElement(y._43, {
                label: t,
                direction: y._45.Top,
                align: y._44.Center,
                display: y.N.Block
            }, a.createElement(y._25, {
                background: y.m.Alt2
            }, a.createElement(y._12, {
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
            J = function(e) {
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
                    }, a.createElement(y._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: y._9.Relative
                    }, a.createElement(y._2, {
                        display: y.N.Flex,
                        justifyContent: y._1.Between
                    }, a.createElement(y._2, {
                        display: y.N.Flex,
                        alignItems: y.c.Center
                    }, a.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), a.createElement(y._2, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(y._35, {
                        type: y._40.H5
                    }, this.props.title))), a.createElement(y._2, {
                        textAlign: y._36.Right
                    }, a.createElement(y._35, {
                        type: y._40.H5,
                        bold: !0
                    }, this.props.revenue), a.createElement(y._35, {
                        type: y._40.H6,
                        color: y.I.Alt2
                    }, Object(i.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? a.createElement(y.p, {
                        show: !0,
                        direction: y.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(a.Component),
            q = function(e) {
                return a.createElement(y._2, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, a.createElement("table", null, a.createElement("thead", null, a.createElement("tr", null, a.createElement("td", null, a.createElement(y._2, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(y._35, {
                    bold: !0
                }, Object(i.d)("Subscription", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(y._2, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(y._35, {
                    bold: !0
                }, Object(i.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(y._2, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(y._35, {
                    bold: !0
                }, Object(i.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), a.createElement("tbody", null, e.subCounts.types.twitchSubscriptionProducts.map(function(t, n) {
                    return a.createElement(G, {
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
        var G = function(e) {
                return a.createElement("tr", null, a.createElement("td", null, a.createElement(y._35, null, e.tier)), a.createElement("td", null, a.createElement(y._35, null, e.subscribers)), a.createElement("td", null, a.createElement(y._35, null, e.revenue)))
            },
            Q = (n("Wc9c"), {
                "data-test-selector": "total-revenue"
            }),
            Y = function(e) {
                if (e.revenue.isLoading) return a.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(y._8, {
                    height: 448
                }));
                if (e.channel.role === g.d.None) return a.createElement("div", null);
                var t = e.revenue,
                    n = t.streams,
                    r = t.lookbackStreams;
                return a.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(N, null, Object(i.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), a.createElement(y._25, {
                    elevation: 1,
                    background: y.m.Base
                }, a.createElement(K, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), a.createElement("div", null, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 2
                    }
                }, a.createElement(y._35, {
                    type: y._40.H6,
                    bold: !0,
                    color: y.I.Alt2
                }, Object(i.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), a.createElement(J, {
                    title: Object(i.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.twitchSubscriptions.total),
                    lastRevenue: X(r.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : a.createElement(q, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), a.createElement(J, {
                    title: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.primeSubscriptions.total),
                    lastRevenue: X(r.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), a.createElement(J, {
                    title: Object(i.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.ads.total),
                    lastRevenue: X(r.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), a.createElement(J, {
                    title: Object(i.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.bits.total),
                    lastRevenue: X(r.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), a.createElement(J, {
                    title: Object(i.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.gameCommerce.total),
                    lastRevenue: X(r.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), a.createElement(J, {
                    title: Object(i.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: X(n.extensions.total),
                    lastRevenue: X(r.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }), a.createElement(U.a, {
                    message: Object(i.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                    url: ""
                }))))
            },
            K = function(e) {
                var t = H(e.totalAmount),
                    n = t.sign,
                    s = t.dollars,
                    o = t.cents;
                return a.createElement(y._2, r.__assign({
                    textAlign: y._36.Center,
                    padding: {
                        y: 2
                    }
                }, Q), a.createElement(y._2, {
                    display: y.N.Flex,
                    justifyContent: y._1.Center
                }, a.createElement(y._25, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: y.d.Start,
                    color: y.I.Alt2
                }, n), a.createElement(y._35, {
                    type: y._40.H2,
                    bold: !0
                }, s), a.createElement(y._2, {
                    alignSelf: y.d.End
                }, a.createElement(y._35, {
                    type: y._40.Span,
                    bold: !0
                }, "." + o))), a.createElement(y._35, {
                    type: y._40.H6
                }, Object(i.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            X = function(e) {
                return Object(i.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            };
        n("z39C");

        function $(e) {
            var t = e.messages,
                n = e.urls;
            return a.createElement(y._25, {
                display: y.N.Flex
            }, t.map(function(e, t) {
                return [e, n[t]]
            }).map(function(e, t) {
                return a.createElement(y._25, {
                    className: "insight-panel-btn",
                    background: y.m.Alt,
                    display: y.N.Flex,
                    flexGrow: 1,
                    flexWrap: y.Q.NoWrap,
                    borderLeft: t > 0,
                    key: t
                }, a.createElement(y.u, {
                    type: y.z.Text,
                    linkTo: e[1],
                    targetBlank: !0,
                    fullWidth: !0
                }, a.createElement(y._35, null, e[0])))
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
                    if (this.state.isLoading) return a.createElement(y._2, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(y._8, {
                        height: 448
                    }));
                    if (0 === this.state.subscriptions.length) return null;
                    var e = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return a.createElement(y._2, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(N, null, Object(i.d)("How many subscribers do I have now?", "ChannelAnalyticsSubscribersPanel")), a.createElement(y._25, {
                        elevation: 1,
                        background: y.m.Base
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
                                    }), [4, S(this.props.channel)]) : [2];
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
                return a.createElement(y._25, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: y._9.Relative
                }, a.createElement(y.U, null, a.createElement(y.J, {
                    cols: 8
                }, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H6,
                    bold: !0,
                    color: y.I.Alt2
                }, Object(i.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), a.createElement(y.J, {
                    cols: 2
                }, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H6,
                    bold: !0,
                    color: y.I.Alt2
                }, Object(i.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), a.createElement(y.J, {
                    cols: 2
                }, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H6,
                    bold: !0,
                    color: y.I.Alt2
                }, Object(i.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            },
            ne = function(e) {
                return a.createElement(y._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: y._9.Relative
                }, a.createElement(y.U, null, a.createElement(y.J, {
                    cols: 6
                }, a.createElement(y._2, {
                    textAlign: y._36.Left,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H5,
                    bold: !0,
                    color: y.I.Alt
                }, e.name))), a.createElement(y.J, {
                    cols: 2
                }, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H5
                }, e.revSplit))), a.createElement(y.J, {
                    cols: 2
                }, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H5
                }, e.score))), a.createElement(y.J, {
                    cols: 2
                }, a.createElement(y._2, {
                    textAlign: y._36.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(y._35, {
                    type: y._40.H5
                }, e.count)))))
            },
            re = n("a+9f"),
            ae = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return a.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(y._8, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return a.createElement("span", null);
                var r = Object(i.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return a.createElement(y._2, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(N, null, Object(i.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), a.createElement(y._25, {
                    elevation: 1,
                    background: y.m.Base
                }, a.createElement(se, {
                    clipsAttrs: n
                }), t ? a.createElement(U.a, {
                    message: r,
                    url: "/" + t + "/manager/clips/channel"
                }) : a.createElement("p", null, r)))
            },
            se = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(a.createElement(y._25, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, a.createElement(y._8, {
                        height: 50
                    })));
                return a.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return a.createElement(re.a, r.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            ie = {
                "data-test-selector": "no-data"
            },
            oe = function() {
                return a.createElement(y._2, r.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    textAlign: y._36.Center
                }, ie), a.createElement(y._35, {
                    type: y._40.H3
                }, Object(i.d)("Nothing to show yet", "ChannelAnalyticsChartNoData")), a.createElement(y._35, {
                    color: y.I.Alt2,
                    fontSize: 5
                }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsChartNoData")))
            },
            le = n("WaEV"),
            ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(y.W, {
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
            ue = "#898395",
            pe = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            me = "rgba(0, 0, 0, 0)",
            de = "#ffffff",
            he = function(e) {
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
                                            fontColor: ue,
                                            fontSize: 10,
                                            padding: 5,
                                            callback: t.formatXAxes
                                        },
                                        gridLines: {
                                            color: de,
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
                                            fontColor: ue,
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
                                    bodyFontColor: de,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: me,
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
                        t.myChart = new le(e, n)
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
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: me,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        className: "top-stats-chart"
                    }, a.createElement(ce, {
                        onCanvasReady: this.handleCanvasReady
                    }))
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update(0))
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: pe[t]
                        }
                    })
                }, t
            }(a.Component),
            fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatasetClick = function(e, n) {
                        if (t.props.onDatasetClick) return t.props.onDatasetClick(e, n);
                        if (t.props.channelName && n && n.length > 0) {
                            var r = t.props.labels[n[0]._index];
                            window.open("/" + t.props.channelName + "/dashboard/stream-summary/" + r)
                        }
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(e);
                        var n = e.label;
                        if (t.props.durations) {
                            var r = t.props.durations[e.index],
                                a = Object(i.c)(new Date(Number(n)), {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                s = Object(C.g)(r);
                            return Object(i.d)("{date} – {shortDuration}", {
                                date: a,
                                shortDuration: s
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(he, {
                        labels: this.props.labels,
                        datasets: this.props.datasets,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        onDatasetClick: this.handleDatasetClick
                    })
                }, t
            }(a.Component),
            be = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return a.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? a.createElement(oe, null) : a.createElement(fe, {
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
            }(a.Component);
        var ge = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return a.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? a.createElement(oe, null) : a.createElement(fe, {
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
            }(a.Component),
            ye = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return a.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    if (0 === e.length) return a.createElement(oe, null);
                    var t = [],
                        n = [];
                    return e.forEach(function(e) {
                        t.push(e.id.toString()), n.push(e.uniqueChatters)
                    }), a.createElement(fe, {
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
            }(a.Component),
            ve = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.analyticsResponse.streamSessions.isLoading) return a.createElement(y._2, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._8, {
                        height: 300
                    }));
                    var e = this.props.analyticsResponse.streamSessions.sessions;
                    return 0 === e.length ? a.createElement(oe, null) : a.createElement(fe, {
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
            }(a.Component);
        var _e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toDataList = function(e, t) {
                        var n = new Map;
                        return e.forEach(function(e) {
                            var t = e.amount,
                                r = e.date,
                                a = Object(d.startOfDay)(r).getTime(),
                                s = n.get(a) || 0;
                            n.set(a, s + t)
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                            for (var t = [], n = e.start; n <= e.end;) t.push(n), n = Object(d.addDays)(n, 1);
                            return t
                        }(this.props.interval),
                        t = this.props.analyticsResponse.revenue.streams;
                    return a.createElement(he, {
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
            }(a.Component),
            Ee = n("HW6M"),
            Ce = n("F8kA"),
            Se = (n("h0zb"), {
                "data-test-selector": "up-trend-indicator"
            }),
            we = {
                "data-test-selector": "down-trend-indicator"
            },
            Oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Ee("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return a.createElement(y.W, {
                        flexGrow: 1,
                        padding: {
                            y: 1
                        },
                        textAlign: y._36.Center
                    }, a.createElement(Ce.a, {
                        to: this.props.linkTo,
                        className: e,
                        replace: !0
                    }, a.createElement(y._35, {
                        type: y._40.H3
                    }, this.props.title, this.renderTrendIndicator()), a.createElement(y._35, {
                        type: y._40.H6
                    }, this.props.subtitle)))
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? a.createElement(y._2, {
                        display: y.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(y._15, r.__assign({
                        asset: y._16.GlyphArrUp,
                        type: y._17.Success
                    }, Se))) : this.props.trend < 0 ? a.createElement(y._2, {
                        display: y.N.Inline,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(y._15, r.__assign({
                        asset: y._16.GlyphArrDown,
                        type: y._17.Warn
                    }, we))) : null : null
                }, t
            }(a.Component);

        function Re(e, t) {
            return e.reduce(function(e, n) {
                return e + t(n)
            }, 0) / (e.length || 1)
        }
        var Te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers,
                        n = this.previousAverageViewers;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), a.createElement(Oe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "averageViewers", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.sessions || [];
                        return e.length ? Re(e, function(e) {
                            return e.avgViewerCount
                        }) : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousAverageViewers", {
                    get: function() {
                        var e = this.props.analyticsResponse.streamSessions.lookbackSessions || [];
                        return e.length ? Re(e, function(e) {
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
            }(a.Component),
            ke = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.chatMessages,
                        n = this.previousChatMessages;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), a.createElement(Oe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "chatMessages", {
                    get: function() {
                        return Re(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousChatMessages", {
                    get: function() {
                        return Re(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            je = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.uniqueChatters,
                        n = this.previousUniqueChatters;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(i.e)(t, {
                        maximumFractionDigits: 0
                    }), a.createElement(Oe, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(i.d)("Avg. Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    })
                }, Object.defineProperty(t.prototype, "uniqueChatters", {
                    get: function() {
                        return Re(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousUniqueChatters", {
                    get: function() {
                        return Re(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            Ae = function(e) {
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
                    }(t), a.createElement(Oe, {
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
        var xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return a.createElement(Oe, {
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
                    return a.createElement("span", null, a.createElement(y._35, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: y.R.Size6,
                        type: y._40.Span
                    }, n + " "), a.createElement(y._35, {
                        type: y._40.Span
                    }, r), a.createElement(y._35, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: y.R.Size4,
                        type: y._40.Span
                    }, "." + s))
                }, t
            }(a.Component),
            De = {
                "data-test-selector": "current-chart"
            },
            Pe = [be, ge, _e, ye, ve],
            Ne = Pe.length - 1,
            Le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.cappedIndex;
                    return a.createElement(y._25, {
                        background: y.m.Base,
                        elevation: 1
                    }, a.createElement(y._27, null, a.createElement(Te, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 0
                        }),
                        isActive: 0 === e
                    }), a.createElement(ke, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 1
                        }),
                        isActive: 1 === e
                    }), a.createElement(xe, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 2
                        }),
                        isActive: 2 === e
                    }), a.createElement(je, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 3
                        }),
                        isActive: 3 === e
                    }), a.createElement(Ae, {
                        analyticsResponse: this.props.analyticsResponse,
                        linkTo: this.props.buildPathWithParams({
                            topStatsIndex: 4
                        }),
                        isActive: 4 === e
                    })), a.createElement(y._2, {
                        padding: 2
                    }, this.renderChartAtIndex()))
                }, t.prototype.renderChartAtIndex = function() {
                    var e = Pe[this.cappedIndex];
                    return a.createElement(e, r.__assign({}, De, {
                        analyticsResponse: this.props.analyticsResponse,
                        interval: this.props.paramStore
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        return Math.min(Ne, this.props.paramStore.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            Ie = {
                "data-test-selector": "card-image"
            },
            Fe = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return a.createElement(y._0, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, a.createElement(y._25, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, a.createElement(y.A, {
                    row: !0
                }, a.createElement(y.C, r.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: y.D.Size8,
                    aspect: y.k.Aspect16x9
                }, Ie)), a.createElement(y._2, {
                    flexGrow: 1
                }, a.createElement(y.B, {
                    overflow: y._5.Hidden
                }, a.createElement(y._2, {
                    display: y.N.Flex,
                    alignItems: y.c.Center,
                    justifyContent: y._1.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, a.createElement(y._2, {
                    flexGrow: 1
                }, a.createElement(y._35, {
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
                }, "ChannelAnalyticsStreamCard")), a.createElement(y._35, {
                    color: y.I.Alt2,
                    type: y._40.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), a.createElement(y._2, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, a.createElement(y._35, {
                    color: y.I.Alt2,
                    type: y._40.Span
                }, Object(i.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))))
            };
        var Me, ze = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscriptions = "new_subscriptions"
        }(Me || (Me = {}));
        var We = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return a.createElement(y._21, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, a.createElement("option", {
                            value: Me.AvgViewers
                        }, Object(i.d)("Avg Viewers", "ChannelAnalyticsTopStreamsPanel")), a.createElement("option", {
                            value: Me.NewFollowers
                        }, Object(i.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")), a.createElement("option", {
                            value: Me.NewSubscriptions
                        }, Object(i.d)("New Subscriptions", "ChannelAnalyticsTopStreamsPanel")))
                    }, n.streamsList = function() {
                        return a.createElement("span", null, n.sortedStreamSummaries().slice(0, ze).map(function(e, t) {
                            return a.createElement(Fe, {
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
                            case Me.NewFollowers:
                            case Me.NewSubscriptions:
                                return e.followersChange;
                            case Me.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case Me.NewFollowers:
                                return Object(C.h)(e, [function(e) {
                                    return e.followersChange
                                }], [C.a.Descending]);
                            case Me.NewSubscriptions:
                                return Object(C.h)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending]);
                            case Me.AvgViewers:
                            default:
                                return Object(C.h)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending])
                        }
                    }, n.state = {
                        sortType: Me.AvgViewers
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? a.createElement(y._2, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(y._8, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? a.createElement("span", null) : a.createElement(y._2, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(N, null, Object(i.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")), a.createElement(y._25, {
                        elevation: 1,
                        background: y.m.Base
                    }, a.createElement(y._2, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: y.N.Flex
                    }, a.createElement(y._2, {
                        flexGrow: 1
                    }, a.createElement(y._35, {
                        type: y._40.H5,
                        bold: !0
                    }, Object(i.d)("Top {limit}", {
                        limit: ze
                    }, "ChannelAnalyticsTopStreamsPanel"))), a.createElement(y._2, null, this.sortDropdown())), this.streamsList()))
                }, t
            }(a.Component),
            Be = n("XV0p"),
            Ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Be.URLStore(this.props.location, this.props.history, this.props.now);
                    return this.isValidDateRange(e.params) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = _.c,
                        n = Object(d.endOfDay)(this.props.now || new Date);
                    return e.start <= e.end && e.start >= t && e.end <= n
                }, t
            }(a.Component),
            He = n("pDcl"),
            Ue = n("OAwv");

        function Je(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function qe(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, a, s, i;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return e.role === g.d.None ? [2, {
                                isError: !1,
                                streams: Be.RevenueStreams.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = Ue.stringify(r.__assign({}, Je(t.start, t.end), {
                                fraction: "day"
                            })), s = [n, a].join("?"), [4, Object(C.f)({
                                path: s
                            })]);
                        case 1:
                            return (i = o.sent()).isError() ? [2, {
                                isError: !0,
                                streams: Be.RevenueStreams.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: Be.RevenueStreams.fromPayload(i.body)
                            }]
                    }
                })
            })
        }
        var Ge = n("+TF1"),
            Qe = n("DNvj");
        var Ye = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: Be.RevenueStreams.buildEmpty(),
                            lookbackStreams: Be.RevenueStreams.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            types: Be.SubCountStreams.buildEmpty(),
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
                    Object(g.f)(this.props.timeRange, e.timeRange) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : a.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a, s, i = this;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (e = {
                                        start: this.props.lookbackTimeRange.start,
                                        end: this.props.timeRange.end
                                    }, this.setState({
                                        streamSessions: r.__assign({
                                            isLoading: !0
                                        }, this.state.streamSessions)
                                    }), [4, Object(Ge.a)({
                                        channelID: this.props.channel.id,
                                        channelName: this.props.channel.name,
                                        timeRange: e
                                    })]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? [2] : (n = function(e, t) {
                                        for (var n = [], r = [], a = 0, s = e; a < s.length; a++) {
                                            var i = s[a];
                                            t(i) ? n.push(i) : r.push(i)
                                        }
                                        return [n, r]
                                    }(t.streamSummaries, function(e) {
                                        return e.timeRange.start > i.props.lookbackTimeRange.end
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
                                    }), [4, Object(Qe.a)(this.props.channel.name, this.props.timeRange)]) : [2];
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
                                    streams: Be.RevenueStreams.buildEmpty(),
                                    lookbackStreams: Be.RevenueStreams.buildEmpty(),
                                    isLoading: !0
                                }
                            }), qe(this.props.channel, this.props.timeRange).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: r.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), qe(this.props.channel, this.props.lookbackTimeRange).then(function(t) {
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
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            types: Be.SubCountStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), [4, function(e, t) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var n, a, s, i;
                                            return r.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === g.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: Be.SubCountStreams.buildEmpty()
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", a = Ue.stringify(r.__assign({}, Je(t.start, t.end), {
                                                            fraction: "day"
                                                        })), s = [n, a].join("?"), [4, Object(C.f)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: Be.SubCountStreams.buildEmpty()
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: Be.SubCountStreams.fromPayload(i.body)
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
                                    }), [4, Object(C.e)(this.props.channel, this.props.timeRange)]) : [2];
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
            Ke = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = g.c.fromChannelData(this.props.data.channel);
                    return a.createElement(o.b, null, a.createElement(Ve, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return a.createElement(y._2, {
                            padding: 4,
                            className: "channel-analytics-page__width"
                        }, a.createElement(D, {
                            interval: t.params,
                            updateInterval: t.replace
                        }), a.createElement(y._25, {
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
                        }, a.createElement(y._2, {
                            display: y.N.Flex,
                            flexGrow: 1,
                            flexWrap: y.Q.NoWrap,
                            flexDirection: y.P.Column
                        }, a.createElement(Ye, {
                            timeRange: t.params,
                            lookbackTimeRange: (n = t.params, r = Object(d.differenceInDays)(n.end, n.start) + 1, {
                                start: Object(d.subDays)(n.start, r),
                                end: Object(d.subDays)(n.end, r)
                            }),
                            channel: e
                        }, function(n) {
                            return a.createElement(a.Fragment, null, a.createElement(Le, {
                                paramStore: t.params,
                                buildPathWithParams: t.buildPathWithParams,
                                analyticsResponse: n
                            }), a.createElement(Y, {
                                channel: e,
                                revenue: n.revenue,
                                subCounts: n.subCounts
                            }), a.createElement(ae, {
                                channel: e.name,
                                topClips: n.topClips
                            }), a.createElement(We, {
                                streamSessions: n.streamSessions
                            }), a.createElement(M, {
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
            Xe = Object(s.d)(Object(l.a)(He, {
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
            }))(Ke);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return Ke
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return Xe
        })
    },
    VRrm: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return i
        });
        var r = n("wuJz"),
            a = (n.n(r), Object(r.parse)("2011-01-01")),
            s = 28,
            i = [{
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
        n.d(t, "SubCountStreams", function() {
            return s.a
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
            return s
        });
        var r = n("TToO"),
            a = n("VRrm"),
            s = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.b;
                    this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
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
            }()
    },
    z39C: function(e, t) {}
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-0c4600ef393e6623455e227058b19a8f.js.map