webpackJsonp([78], {
    "+ear": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n("TToO"),
            a = n("wuJz"),
            s = (n.n(a), n("OAwv")),
            o = (n.n(s), n("IJpv")),
            i = function() {
                function e(e, t, n) {
                    void 0 === n && (n = new Date);
                    var i = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = i.buildPathWithParams(e);
                        i.history.replace(t)
                    }, this.searchStringWith = function(e) {
                        void 0 === e && (e = {});
                        var t = function(e) {
                                var t = {};
                                for (var n in e) {
                                    var r = e[n];
                                    "" !== r && (t[n] = r)
                                }
                                return t
                            }(r.__assign({}, i.rawParams, function(e) {
                                var t = {};
                                e.hasOwnProperty("end") && (t.end = l(e.end));
                                e.hasOwnProperty("start") && (t.start = l(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(n = e.topStatsIndex) && String(n) || "");
                                var n;
                                e.hasOwnProperty("topStatsAggregation") && (t.topStatsAggregation = e.topStatsAggregation || "");
                                return t
                            }(e))),
                            n = s.stringify(t);
                        return n.length ? "?" + n : ""
                    }, this.buildPathWithParams = function(e) {
                        return "" + i.location.pathname + i.searchStringWith(e)
                    }, this.location = e, this.history = t, this.rawParams = s.parse(e.search);
                    var u = c(this.rawParams.start) || Object(a.startOfMonth)(n),
                        p = Object(a.endOfDay)(c(this.rawParams.end) || n),
                        d = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex),
                        m = Object(o.b)(this.rawParams.topStatsAggregation);
                    this.params = {
                        start: u,
                        end: p,
                        topStatsIndex: d,
                        topStatsAggregation: m
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }();

        function c(e) {
            if (e) {
                var t = Object(a.parse)(e);
                if (Object(a.isValid)(t)) return t
            }
        }

        function l(e) {
            return e ? Object(a.format)(e, "YYYY-MM-DD") : ""
        }
    },
    "0NoZ": function(e, t) {},
    Bgox: function(e, t) {},
    BoWu: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return i
        });
        var r = n("6sO2"),
            a = function() {
                return Object(r.d)("Other", "DemographicsData")
            },
            s = function(e) {
                return {
                    unknown: Object(r.d)("Unknown", "DemographicsData"),
                    tv: Object(r.d)("TV", "DemographicsData"),
                    ios: Object(r.d)("iOS App", "DemographicsData"),
                    web: Object(r.d)("Web", "DemographicsData"),
                    android: Object(r.d)("Android App", "DemographicsData"),
                    mobile_web: Object(r.d)("Mobile Web", "DemographicsData"),
                    mobile_aggregated: Object(r.d)("Mobile", "DemographicsData"),
                    console: Object(r.d)("Console", "DemographicsData"),
                    other: a()
                }[e] || e
            },
            o = function(e) {
                return {
                    other: a(),
                    front_page_featured: Object(r.d)("Featured Section - Front Page", "DemographicsData"),
                    creative_page_featured: Object(r.d)("Featured Section - Creative Page", "DemographicsData"),
                    hosted: Object(r.d)("Hosts", "DemographicsData"),
                    email_live_notification: Object(r.d)("Notifications - Email", "DemographicsData"),
                    onsite_notification: Object(r.d)("Notifications - Onsite", "DemographicsData"),
                    followed_channel: Object(r.d)("Followers", "DemographicsData"),
                    directory_browse: Object(r.d)("Browse Page", "DemographicsData"),
                    search: Object(r.d)("Searches", "DemographicsData"),
                    clips_live: Object(r.d)("Clips", "DemographicsData"),
                    friend_presence: Object(r.d)("Friends", "DemographicsData"),
                    top_nav_bar: Object(r.d)("Your Channel Page", "DemographicsData"),
                    recommended_channel: Object(r.d)("Recommendations", "DemographicsData"),
                    other_channel_page: Object(r.d)("Other Channel Page", "DemographicsData")
                }[e] || Object(r.d)("{name}'s Channel Page", {
                    name: e
                }, "DemographicsData")
            },
            i = function(e) {
                var t;
                return ((t = {
                    facebook: Object(r.d)("Facebook", "DemographicsData"),
                    google: Object(r.d)("Google", "DemographicsData"),
                    reddit: Object(r.d)("Reddit", "DemographicsData"),
                    youtube: Object(r.d)("Youtube", "DemographicsData")
                })["t.co"] = Object(r.d)("Twitter", "DemographicsData"), t.unknown = Object(r.d)("Direct", "DemographicsData"), t.twitch_aggregate = Object(r.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(r.d)("External", "DemographicsData"), t)[e] || e
            }
    },
    G6h4: function(e, t) {},
    G70b: function(e, t) {},
    Goi1: function(e, t) {},
    HCOe: function(e, t) {
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
    IJpv: function(e, t, n) {
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
    JczT: function(e, t) {},
    MXAS: function(e, t) {},
    RpnM: function(e, t) {},
    T0UN: function(e, t) {},
    WHrl: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return i
        });
        var r = n("TToO"),
            a = n("tiQ5"),
            s = n("x9gg"),
            o = {
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            i = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.c;
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
                        o = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        i = function(e) {
                            return e.date > n.end
                        },
                        c = Object(s.a)(r.primeSubscriptions, i),
                        l = c[0],
                        u = c[1];
                    return a.primeSubscriptions = l, o.primeSubscriptions = u, r.twitchSubscriptionProducts.forEach(function(e) {
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
                            r = Object(s.a)(e.timeseries, i),
                            c = r[0],
                            l = r[1];
                        t.timeseries = c, n.timeseries = l, a.twitchSubscriptionProducts.push(t), o.twitchSubscriptionProducts.push(n)
                    }), [new e(a), new e(o)]
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
    XTbU: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("6sO2"),
            a = function(e) {
                var t = Object(r.e)(e, {
                    minimumIntegerDigits: 1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).split(".");
                return {
                    sign: "$",
                    dollars: t[0],
                    cents: t[1]
                }
            }
    },
    ehuU: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            a = n("GiK3"),
            s = n("CIox"),
            o = n("2KeS"),
            i = n("6sO2"),
            c = n("zCIC"),
            l = n("7vx8"),
            u = n("j7/Y"),
            p = n("w9tK"),
            d = n("vH/s"),
            m = n("CSlQ"),
            h = n("wuJz"),
            f = n("3zLD"),
            b = n("6UW8"),
            g = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t.picker.destroy() : (t.picker = new b({
                            onSelect: t.props.onChange,
                            theme: "inline",
                            minDate: Object(h.startOfDay)(t.props.minDate),
                            maxDate: Object(h.startOfDay)(t.props.maxDate),
                            defaultDate: Object(h.startOfDay)(t.props.date),
                            startRange: Object(h.startOfDay)(t.props.startRange),
                            endRange: Object(h.startOfDay)(t.props.endRange),
                            setDefaultDate: !0
                        }), e.appendChild(t.picker.el))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(h.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(h.startOfDay)(this.props.endRange)), this.picker.setMinDate(Object(h.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(h.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(h.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(a.Component)),
            y = n("AJEV"),
            v = n("Odds"),
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = t.now || new Date,
                        a = Object(h.endOfDay)(r),
                        s = Object(h.startOfDay)(r),
                        o = Object(h.startOfMonth)(r);
                    return n.presets = [{
                        message: Object(i.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(h.subDays)(s, 6),
                            end: a
                        }
                    }, {
                        message: Object(i.d)("Last 30 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(h.subDays)(s, 29),
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
                        message: Object(i.c)(Object(h.subMonths)(a, 1), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(h.startOfMonth)(Object(h.subMonths)(r, 1)),
                            end: Object(h.endOfMonth)(Object(h.subMonths)(r, 1))
                        }
                    }, {
                        message: Object(i.c)(Object(h.subMonths)(a, 2), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(h.startOfMonth)(Object(h.subMonths)(r, 2)),
                            end: Object(h.endOfMonth)(Object(h.subMonths)(r, 2))
                        }
                    }], n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(v._6, {
                        display: v.P.Flex,
                        flexDirection: v.R.Column
                    }, this.presets.map(function(t, n) {
                        return a.createElement(v._29, {
                            color: v.J.Link,
                            key: n
                        }, a.createElement(v._4, {
                            selected: Object(y.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval)
                        }, a.createElement(v._29, {
                            padding: 1,
                            textAlign: v._39.Center
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
            O = n("tiQ5");

        function j(e, t, n) {
            void 0 === n && (n = new Date);
            var a = r.__assign({}, e, t);
            if (Object(h.differenceInDays)(a.end, a.start) >= 0) return a;
            var s = Object(h.differenceInDays)(e.end, e.start);
            if (Object(h.isEqual)(e.end, a.end)) {
                var o = Object(h.startOfDay)(n),
                    i = Object(h.addDays)(a.start, s);
                return i > o && (i = o), r.__assign({}, a, {
                    end: i
                })
            }
            return Object(h.isEqual)(e.start, a.start) ? r.__assign({}, a, {
                start: Object(h.subDays)(a.end, s)
            }) : e
        }
        var C = n("PGY2");

        function w(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, a, s, o;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", n = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(C.c)({
                                path: t
                            }), Object(C.c)({
                                path: n
                            })])];
                        case 1:
                            return a = r.sent(), s = a[0], o = a[1], s.isError() || o.isError() ? [2, {
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
                                    return Object(C.d)(r, [function(e) {
                                        return e.plan
                                    }], [C.a.Ascending])
                                }(s.body, o.body)
                            }]
                    }
                })
            })
        }
        var _ = {
                "data-test-selector": "commit-button"
            },
            E = {
                "data-test-selector": "cancel-button"
            },
            T = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = j(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = j(n.state.interval, {
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
                    return a.createElement("div", null, a.createElement(v._6, {
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(v._6, {
                        padding: {
                            right: 2
                        },
                        textAlign: v._39.Center
                    }, a.createElement(v.O, {
                        color: v.J.Alt2,
                        fontSize: v.T.Size4
                    }, Object(i.d)("Start date", "ChannelAnalyticsDateRangePicker")), a.createElement(g, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: O.e,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), a.createElement(v._6, {
                        padding: {
                            right: 2
                        },
                        textAlign: v._39.Center
                    }, a.createElement(v.O, {
                        color: v.J.Alt2,
                        fontSize: v.T.Size4
                    }, Object(i.d)("End date", "ChannelAnalyticsDateRangePicker")), a.createElement(g, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), a.createElement(v._29, {
                        padding: {
                            top: 1,
                            left: 2
                        },
                        borderLeft: !0
                    }, a.createElement(S, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), a.createElement(v._6, {
                        display: v.P.Flex,
                        justifyContent: v._5.Center
                    }, a.createElement(v._6, {
                        margin: {
                            right: 2
                        }
                    }, a.createElement(v.u, r.__assign({}, _, {
                        onClick: this.handleUpdateClick
                    }), Object(i.d)("Update", "ChannelAnalyticsDateRangePicker"))), a.createElement(v.u, r.__assign({}, E, {
                        type: v.A.Text,
                        onClick: this.props.onDismiss
                    }), Object(i.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(a.Component);

        function A(e, t) {
            void 0 === t && (t = new Date);
            var n = O.e,
                r = Object(h.endOfDay)(t);
            return e.start <= e.end && e.start >= n && e.end <= r
        }
        var D = n("ylrR"),
            x = n("9uzc"),
            R = n("u4Vk"),
            k = {
                "data-test-selector": "time-range"
            },
            P = {
                "data-test-selector": "total-days"
            },
            M = {
                "data-test-selector": "date-picker-toggle"
            },
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore.params;
                    return a.createElement(v._6, {
                        position: v._13.Relative
                    }, a.createElement(D.a, {
                        control: function(n) {
                            var s = n.toggle;
                            return a.createElement(v._6, {
                                padding: {
                                    bottom: 2
                                }
                            }, a.createElement(x.a, {
                                previousPath: e.pathWithShiftedInterval(-1),
                                nextPath: e.pathWithShiftedInterval(1)
                            }, a.createElement(v.u, r.__assign({}, M, {
                                type: v.A.Text,
                                onClick: s,
                                fullWidth: !0
                            }), a.createElement(v.O, r.__assign({}, k, {
                                fontSize: v.T.Size4
                            }), e.formatDateRange(t)), a.createElement(v.O, r.__assign({}, P, {
                                fontSize: v.T.Size6,
                                color: v.J.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var r = n.close;
                        return a.createElement(v._29, {
                            margin: {
                                top: 5
                            },
                            position: v._13.Absolute,
                            display: v.P.Flex,
                            alignItems: v.c.Center,
                            flexDirection: v.R.Column,
                            zIndex: v._55.Above,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(v._29, {
                            margin: {
                                top: .5
                            },
                            elevation: 4,
                            position: v._13.Relative,
                            display: v.P.Flex,
                            background: v.m.Base,
                            zIndex: v._55.Above,
                            attachTop: !0
                        }, a.createElement(v._6, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, a.createElement(T, {
                            interval: t,
                            onCommit: Object(f.compose)(r, e.props.urlStore.replace),
                            onDismiss: r
                        }))))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(h.differenceInDays)(e.end, e.start) + 1 ? Object(i.c)(e.start, "medium") : Object(i.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(h.differenceInDays)(e.end, e.start) + 1;
                    return Object(i.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.pathWithShiftedInterval = function(e) {
                    var t = Object(R.f)(this.props.urlStore.params, e);
                    return A(t) ? this.props.urlStore.buildPathWithParams(t) : ""
                }, t
            }(a.Component),
            L = n("BoWu"),
            F = (n("Bgox"), function(e) {
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
                    var e = a.createElement(v._6, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, this.props.hoverText);
                    return a.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, a.createElement(v._29, {
                        display: v.P.Flex,
                        padding: {
                            x: 1
                        },
                        position: v._13.Relative
                    }, a.createElement(v._29, {
                        className: "hoverable-icon",
                        display: v.P.InlineFlex,
                        background: v.m.Overlay,
                        color: v.J.Overlay,
                        borderRadius: v.s.Rounded,
                        alignItems: v.c.Center,
                        justifyContent: v._5.Center
                    }, a.createElement(v._19, {
                        asset: v._20.QuestionMark,
                        width: 10,
                        height: 12
                    })), a.createElement(v.p, {
                        show: this.state.isHovered,
                        direction: v.q.Top,
                        offsetX: "1rem"
                    }, e)))
                }, t
            }(a.Component)),
            N = function(e) {
                return a.createElement(v._6, {
                    alignItems: v.c.Center,
                    display: v.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(v.O, {
                    type: v._43.H5,
                    bold: !0
                }, e.children), e.infoText && a.createElement(F, {
                    hoverText: e.infoText
                }))
            },
            B = n("FeZP"),
            I = n("xygp"),
            W = n("vTHh"),
            G = 3,
            U = function(e) {
                return e
            };

        function H(e) {
            var t = e.streamSessions,
                n = e.channelName,
                r = e.urlStore;
            if (t.isLoading) return a.createElement(v._6, {
                margin: {
                    top: 3,
                    bottom: 1
                }
            }, a.createElement(v._12, {
                height: 375
            }));
            var s = Object(I.a)(t.sessions.map(function(e) {
                    return e.videoPlayInternalTwitchReferrers
                })),
                o = Object(I.a)(t.sessions.map(function(e) {
                    return e.videoPlayInternalChannelsReferrers
                })),
                c = Object(I.a)(t.sessions.map(function(e) {
                    return e.videoPlayExternalReferrers
                }));
            return a.createElement(v._6, {
                margin: {
                    top: 3,
                    bottom: 1
                }
            }, a.createElement(N, null, Object(i.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), a.createElement(v._29, {
                elevation: 1,
                background: v.m.Base
            }, a.createElement(v._29, {
                borderBottom: !0,
                padding: {
                    bottom: 1
                }
            }, a.createElement(W.a, {
                referrals: s.items.slice(0, G),
                totals: s.totals,
                translationFunc: L.b,
                title: Object(i.d)("Twitch", "ChannelAnalyticsReferralPanel")
            }), a.createElement(W.a, {
                referrals: o.items.slice(0, G),
                totals: o.totals,
                translationFunc: U,
                title: Object(i.d)("Channels", "ChannelAnalyticsReferralPanel")
            }), a.createElement(W.a, {
                referrals: c.items.slice(0, G),
                totals: c.totals,
                translationFunc: L.a,
                title: Object(i.d)("External", "ChannelAnalyticsReferralPanel")
            })), a.createElement(B.a, {
                message: Object(i.d)("View details", "ChannelAnalyticsReferralPanel"),
                url: "/" + n + "/dashboard/channel-analytics/referrals" + r.searchStringWith()
            })))
        }
        var z = n("XTbU"),
            q = (n("MXAS"), function(e) {
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
                        className: "breakdown-card-row",
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, a.createElement(v._29, {
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: v._13.Relative
                    }, a.createElement(v._6, {
                        display: v.P.Flex,
                        justifyContent: v._5.Between
                    }, a.createElement(v._6, {
                        display: v.P.Flex,
                        alignItems: v.c.Center
                    }, a.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), a.createElement(v._6, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(v.O, {
                        type: v._43.H5
                    }, this.props.title))), a.createElement(v._6, {
                        textAlign: v._39.Right
                    }, a.createElement(v.O, {
                        type: v._43.H5,
                        bold: !0
                    }, this.props.revenue), a.createElement(v.O, {
                        type: v._43.H6,
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
            }(a.Component)),
            K = function(e) {
                return Object(i.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            J = function(e) {
                return a.createElement(v._6, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, a.createElement("table", null, a.createElement("thead", null, a.createElement("tr", null, a.createElement("td", null, a.createElement(v._6, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0
                }, Object(i.d)("Subscription", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(v._6, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0
                }, Object(i.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(v._6, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0
                }, Object(i.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), a.createElement("tbody", null, e.subCounts.streams.twitchSubscriptionProducts.map(function(t, n) {
                    return a.createElement(Y, {
                        key: n,
                        tier: K(t.defaultPrice),
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
        var Y = function(e) {
                return a.createElement("tr", null, a.createElement("td", null, a.createElement(v.O, null, e.tier)), a.createElement("td", null, a.createElement(v.O, null, e.subscribers)), a.createElement("td", null, a.createElement(v.O, null, e.revenue)))
            },
            Z = (n("JczT"), {
                "data-test-selector": "total-revenue"
            }),
            X = function(e) {
                if (e.revenue.isLoading) return a.createElement(v._6, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(v._12, {
                    height: 448
                }));
                if (e.channel.role === y.d.None) return null;
                var t = e.revenue,
                    n = t.streams,
                    r = t.lookbackStreams,
                    s = e.channel.role === y.d.Affiliate ? Object(i.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 60 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel") : Object(i.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 45 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel");
                return a.createElement(v._6, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, a.createElement(N, {
                    infoText: s
                }, Object(i.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), a.createElement(v._29, {
                    elevation: 1,
                    background: v.m.Base
                }, a.createElement(Q, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), a.createElement(v._6, {
                    padding: {
                        top: 2,
                        bottom: 1
                    }
                }, a.createElement(v._6, {
                    textAlign: v._39.Right,
                    padding: {
                        x: 2
                    }
                }, a.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel"))), a.createElement(v._6, null, a.createElement(q, {
                    title: Object(i.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: $(n.twitchSubscriptions.total),
                    lastRevenue: $(r.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : a.createElement(J, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), a.createElement(q, {
                    title: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: $(n.primeSubscriptions.total),
                    lastRevenue: $(r.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), a.createElement(q, {
                    title: Object(i.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: $(n.ads.total),
                    lastRevenue: $(r.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), a.createElement(q, {
                    title: Object(i.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: $(n.bits.total),
                    lastRevenue: $(r.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), a.createElement(q, {
                    title: Object(i.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: $(n.gameCommerce.total),
                    lastRevenue: $(r.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), a.createElement(q, {
                    title: Object(i.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: $(n.extensions.total),
                    lastRevenue: $(r.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                })))))
            },
            Q = function(e) {
                var t = Object(z.a)(e.totalAmount),
                    n = t.sign,
                    s = t.dollars,
                    o = t.cents;
                return a.createElement(v._6, r.__assign({
                    textAlign: v._39.Center,
                    padding: {
                        y: 2
                    }
                }, Z), a.createElement(v._6, {
                    display: v.P.Flex,
                    justifyContent: v._5.Center
                }, a.createElement(v._29, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: v.d.Start,
                    color: v.J.Alt2
                }, n), a.createElement(v.O, {
                    type: v._43.H2,
                    bold: !0
                }, s), a.createElement(v._6, {
                    alignSelf: v.d.End
                }, a.createElement(v.O, {
                    type: v._43.Span,
                    bold: !0
                }, "." + o))), a.createElement(v.O, {
                    type: v._43.H6
                }, Object(i.d)("Total Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            $ = function(e) {
                return Object(i.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            };
        n("z39C");

        function ee(e) {
            var t = e.messages,
                n = e.urls;
            return a.createElement(v._29, {
                display: v.P.Flex
            }, t.map(function(e, t) {
                return [e, n[t]]
            }).map(function(e, t) {
                return a.createElement(v._29, {
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
        n("G70b");
        var te = {
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
            ne = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.subscriptionRows = function() {
                        return n.state.subscriptions.map(function(e) {
                            return a.createElement(ae, {
                                name: te[e.plan](),
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
                    if (this.state.isLoading) return a.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, a.createElement(v._12, {
                        height: 448
                    }));
                    if (0 === this.state.subscriptions.length) return null;
                    var e = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return a.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, a.createElement(N, null, Object(i.d)("How many subscribers do I have today?", "ChannelAnalyticsSubscribersPanel")), a.createElement(v._29, {
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(v._29, {
                        borderBottom: !0,
                        padding: {
                            top: 1,
                            bottom: 2
                        }
                    }, a.createElement(re, null), this.subscriptionRows(), a.createElement(ae, {
                        name: Object(i.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                        score: Object(i.e)(e),
                        count: Object(i.e)(t)
                    })), a.createElement(ee, {
                        messages: [Object(i.d)("E-mail me my subscriber list", "ChannelAnalyticsSubscribersPanel"), Object(i.d)("Send e-mail to my subs", "ChannelAnalyticsSubscribersPanel")],
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
                                    }), [4, w(this.props.channel)]) : [2];
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
            re = function() {
                return a.createElement(v._29, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: v._13.Relative
                }, a.createElement(v.W, null, a.createElement(v.K, {
                    cols: 8
                }, a.createElement(v._6, {
                    textAlign: v._39.Right
                }, a.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._6, {
                    textAlign: v._39.Right
                }, a.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._6, {
                    textAlign: v._39.Right
                }, a.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(i.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            },
            ae = function(e) {
                return a.createElement(v._29, {
                    className: "subscribers-panel-row",
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: v._13.Relative
                }, a.createElement(v.W, null, a.createElement(v.K, {
                    cols: 6
                }, a.createElement(v._6, {
                    textAlign: v._39.Left
                }, a.createElement(v.O, {
                    type: v._43.H5,
                    color: v.J.Alt
                }, e.name))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._6, {
                    textAlign: v._39.Right
                }, a.createElement(v.O, {
                    type: v._43.H5
                }, e.revSplit))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._6, {
                    textAlign: v._39.Right
                }, a.createElement(v.O, {
                    type: v._43.H5,
                    bold: !0
                }, e.score))), a.createElement(v.K, {
                    cols: 2
                }, a.createElement(v._6, {
                    textAlign: v._39.Right
                }, a.createElement(v.O, {
                    type: v._43.H5,
                    bold: !0
                }, e.count)))))
            },
            se = n("a+9f"),
            oe = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return a.createElement(v._6, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, a.createElement(v._12, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return null;
                var r = Object(i.d)("View details", "ChannelAnalyticsTopClipsPanel");
                return a.createElement(v._6, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, a.createElement(N, null, Object(i.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), a.createElement(v._29, {
                    elevation: 1,
                    background: v.m.Base
                }, a.createElement(ie, {
                    clipsAttrs: n
                }), t ? a.createElement(B.a, {
                    message: r,
                    url: "/" + t + "/manager/clips/channel"
                }) : a.createElement("p", null, r)))
            },
            ie = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(a.createElement(v._29, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, a.createElement(v._12, {
                        height: 50
                    })));
                return a.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return a.createElement(se.a, r.__assign({}, e, {
                        key: t
                    }))
                }))
            },
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
            };

        function le(e) {
            for (var t = [], n = e[0].length, r = function(n) {
                    t.push(e.map(function(e) {
                        return e[n]
                    }))
                }, a = 0; a < n; a++) r(a);
            return t
        }
        var ue = function(e, t) {
                var n = e.revenue,
                    r = e.subscriptions,
                    a = [
                        [Object(i.d)("Date", "CSVExporterRevenue")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(i.d)("Sub Revenue", "CSVExporterRevenue")].concat(t.sum(n.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(i.d)("Twitch Prime Revenue", "CSVExporterRevenue")].concat(t.sum(n.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(i.d)("Bits Revenue", "CSVExporterRevenue")].concat(t.sum(n.bits.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(i.d)("Ad Revenue", "CSVExporterRevenue")].concat(t.sum(n.ads.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(i.d)("Game Sales Revenue", "CSVExporterRevenue")].concat(t.sum(n.gameCommerce.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(i.d)("Extensions Revenue", "CSVExporterRevenue")].concat(t.sum(n.extensions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(i.d)("Twitch Prime Subs", "CSVExporterRevenue")].concat(t.sum(r.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        })), [Object(i.d)("Subs", "CSVExporterRevenue")].concat(t.sum(r.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    ].concat(r.twitchSubscriptionProducts.map(function(e) {
                        return [Object(i.d)("{price} Sub", {
                            price: K(e.defaultPrice)
                        }, "CSVExporterRevenue")].concat(t.sum(e.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    }));
                return {
                    fileName: t.isByDay ? Object(i.d)("Revenue by day {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : t.isByWeek ? Object(i.d)("Revenue by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : Object(i.d)("Revenue by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue"),
                    csv: le(a).join("\n")
                }
            },
            pe = function(e, t) {
                return t.isByDay ? function(e, t) {
                    var n = [
                        [Object(i.d)("Start Time", "CSVExporterStreamSessions"), Object(i.d)("End Time", "CSVExporterStreamSessions"), Object(i.d)("Average Viewers", "CSVExporterStreamSessions"), Object(i.d)("Max. Viewers", "CSVExporterStreamSessions"), Object(i.d)("Total Views", "CSVExporterStreamSessions"), Object(i.d)("Unique Views", "CSVExporterStreamSessions"), Object(i.d)("Minutes Watched", "CSVExporterStreamSessions"), Object(i.d)("New Followers", "CSVExporterStreamSessions"), Object(i.d)("Chatters", "CSVExporterStreamSessions"), Object(i.d)("Chat Messages", "CSVExporterStreamSessions"), Object(i.d)("Clips Created", "CSVExporterStreamSessions"), Object(i.d)("Clip Views", "CSVExporterStreamSessions"), Object(i.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessions"), Object(i.d)("Minutes Streamed", "CSVExporterStreamSessions")]
                    ];
                    return e.forEach(function(e) {
                        n.push(['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + e.avgViewerCount, "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialLengthTotal / 60, "" + Object(R.a)(e.interval)])
                    }), {
                        fileName: Object(i.d)("Stream Sessions {start, date} to {end, date}.csv", {
                            start: t.start,
                            end: t.end
                        }, "CSVExporterStreamSessions"),
                        csv: n.join("\n")
                    }
                }(e, t.interval) : function(e, t) {
                    var n, r = [
                        [Object(i.d)("Date", "CSVExporterStreamSessionsAggregated")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(i.d)("Average Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(R.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Max. Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.max(e, function(e) {
                            return {
                                value: e.maxViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Total Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalViewers,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Average Unique Views", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(R.a)(e.interval),
                                value: e.uniqueViewers,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Minutes Watched", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalMinutesWatched,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("New Followers", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Average Unique Chatters", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(R.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Chat Messages", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Clips Created", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipCreatesTotal,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Clip Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipPlaysTotal,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.commercialLengthTotal / 60,
                                date: e.interval.start
                            }
                        })), [Object(i.d)("Minutes Streamed", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: Object(R.a)(e.interval),
                                date: e.interval.start
                            }
                        }))
                    ];
                    n = t.isByWeek ? Object(i.d)("StreamSessions by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated") : Object(i.d)("StreamSessions by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated");
                    return {
                        fileName: n,
                        csv: le(r).join("\n")
                    }
                }(e, t)
            };
        var de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.download = function() {
                        var e;
                        e = t.props.dataGroup === O.b.StreamSummaries ? pe(t.props.analyticsResponse.streamSessions.sessions, t.props.aggregation) : ue({
                            revenue: t.props.analyticsResponse.revenue.streams,
                            subscriptions: t.props.analyticsResponse.subCounts.streams
                        }, t.props.aggregation), ce(e.fileName, e.csv)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : a.createElement(B.a, {
                        message: Object(i.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                        onClick: this.download
                    })
                }, t
            }(a.Component),
            me = n("IJpv"),
            he = function() {
                function e(e, t) {
                    var n = this;
                    switch (this.formatDateFromLabel = function(e) {
                        return n.formatDate(new Date(Number(e)))
                    }, this.formatShortDateFromLabel = function(e) {
                        return n.formatShortDate(new Date(Number(e)))
                    }, this.aggregationInterval = e, this.interval = t, this.aggregationInterval) {
                        case me.a.Day:
                            this.addInterval = h.addDays, this.startOf = h.startOfDay, this.formatDate = function(e) {
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
                        case me.a.Week:
                            this.addInterval = h.addWeeks, this.startOf = h.startOfWeek, this.formatDate = function(e) {
                                return Object(i.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                }) + " – " + Object(i.c)(Object(h.endOfWeek)(e), {
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
                        case me.a.Month:
                            this.addInterval = h.addMonths, this.startOf = h.startOfMonth, this.formatDate = function(e) {
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
                            o = a.date,
                            i = n.startOf(o).getTime(),
                            c = r.get(i) || 0;
                        r.set(i, c + s)
                    }), this.datesAsNumbers.map(function(e) {
                        return r.get(e) || 0
                    })
                }, e.prototype.average = function(e, t) {
                    var n = this,
                        r = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.value,
                            o = a.date,
                            i = n.startOf(o).getTime(),
                            c = r.get(i);
                        c || (c = {
                            total: 0,
                            count: 0
                        }, r.set(i, c)), c.count += 1, c.total += s
                    }), this.datesAsNumbers.map(function(e) {
                        var t = r.get(e) || {
                            total: 0,
                            count: 1
                        };
                        return t.total / t.count
                    })
                }, e.prototype.weightedAverage = function(e, t) {
                    var n = this,
                        r = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.weight,
                            o = a.value,
                            i = a.date,
                            c = n.startOf(i).getTime(),
                            l = r.get(c);
                        l || (l = {
                            totalWeight: 0,
                            weightedValue: 0
                        }, r.set(c, l)), l.totalWeight += s, l.weightedValue += s * o
                    }), this.datesAsNumbers.map(function(e) {
                        var t = r.get(e) || {
                            totalWeight: 0,
                            weightedValue: 0
                        };
                        return t.weightedValue / t.totalWeight
                    })
                }, e.prototype.max = function(e, t) {
                    var n = this,
                        r = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.value,
                            o = a.date,
                            i = n.startOf(o).getTime(),
                            c = r.get(i) || 0;
                        r.set(i, Math.max(c, s))
                    }), this.datesAsNumbers.map(function(e) {
                        return r.get(e) || 0
                    })
                }, Object.defineProperty(e.prototype, "isByDay", {
                    get: function() {
                        return this.aggregationInterval === me.a.Day
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByWeek", {
                    get: function() {
                        return this.aggregationInterval === me.a.Week
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByMonth", {
                    get: function() {
                        return this.aggregationInterval === me.a.Month
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
            fe = "channel-analytics-stats",
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedStats: O.a
                    }, t.handleUpdateStat = function(e, n) {
                        t.state.selectedStats.indexOf(e) !== n && t.setState(function(a) {
                            var s = a.selectedStats.slice(),
                                o = a.selectedStats.indexOf(e);
                            s[n] = e, -1 !== o && (s[o] = t.getRemainingStats(s)[0]);
                            var c, l = t.storedStats;
                            return i.l.set(fe, r.__assign({}, l, ((c = {})[t.statsStorageKey] = s, c))), {
                                selectedStats: s,
                                remainingStats: t.getRemainingStats(s)
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        selectedStats: this.getValidStoredStats()
                    })
                }, t.prototype.render = function() {
                    return this.props.children({
                        stats: this.state.selectedStats.map(function(e) {
                            return O.f[e]
                        }),
                        onUpdateStat: this.handleUpdateStat
                    })
                }, Object.defineProperty(t.prototype, "statsStorageKey", {
                    get: function() {
                        return this.props.channel.name + "-top"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "storedStats", {
                    get: function() {
                        return i.l.get(fe, ((e = {})[this.statsStorageKey] = [], e));
                        var e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getValidStoredStats = function() {
                    var e = this.storedStats,
                        t = Array.isArray(e[this.statsStorageKey]) ? e[this.statsStorageKey] : [],
                        n = [],
                        r = Object.keys(O.f);
                    return t.forEach(function(e) {
                        if (O.f[e] && !n.includes(e)) return r.splice(r.indexOf(e), 1), n.push(e)
                    }), n.length ? n.length < O.d && (n = n.concat(r)) : n = O.a, n = n.slice(0, O.d)
                }, t.prototype.getRemainingStats = function(e) {
                    var t = Object.keys(O.f);
                    return e.forEach(function(e) {
                        t.splice(t.indexOf(e), 1)
                    }), t
                }, t
            }(a.Component),
            ge = {
                "data-test-selector": "stats-dropdown-title"
            },
            ye = {
                "data-test-selector": "date-picker-toggle"
            },
            ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(v._6, {
                        position: v._13.Relative
                    }, a.createElement(D.a, {
                        control: function(e) {
                            var t = e.toggle;
                            return a.createElement(v._6, {
                                display: v.P.Flex,
                                fullHeight: !0
                            }, a.createElement(v.v, r.__assign({
                                ariaLabel: Object(i.d)("Select top statistic", "ChannelAnalyticsDropdownAria"),
                                icon: v._20.AngleDown,
                                onClick: t
                            }, ye)))
                        }
                    }, function(t) {
                        var n = t.close;
                        return a.createElement(v.p, {
                            show: !0,
                            direction: v.q.BottomRight,
                            tailOffset: 8.5
                        }, Object.keys(O.f).map(function(t) {
                            return a.createElement(v._4, r.__assign({
                                onClick: Object(f.compose)(n, e.props.onUpdateStat.bind(e, t, e.props.index)),
                                key: t,
                                alpha: !0
                            }, ge), a.createElement(v._6, {
                                padding: 1
                            }, a.createElement(v.O, {
                                color: v.J.Link
                            }, O.f[t].title())))
                        }))
                    }))
                }, t
            }(a.Component),
            Se = {
                "data-test-selector": "current-chart"
            },
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.chart = function(e) {
                        return a.createElement(e.definition.Chart, r.__assign({}, Se, {
                            analyticsResponse: t.props.analyticsResponse,
                            aggregation: e.aggregation
                        }))
                    }, t.handleAggregationChange = function(e) {
                        t.props.urlStore.replace({
                            topStatsAggregation: e.currentTarget.value
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = new he(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params),
                        n = this.cappedIndex;
                    return a.createElement(be, {
                        channel: this.props.channel
                    }, function(r) {
                        var s = r.stats,
                            o = r.onUpdateStat;
                        return a.createElement(v._29, {
                            background: v.m.Base,
                            elevation: 1
                        }, a.createElement(v._31, null, s.map(function(t, r) {
                            var s = t.Tab;
                            return a.createElement(s, {
                                analyticsResponse: e.props.analyticsResponse,
                                linkTo: e.props.urlStore.buildPathWithParams({
                                    topStatsIndex: r
                                }),
                                isActive: n === r,
                                key: r
                            }, a.createElement(ve, {
                                index: r,
                                onUpdateStat: o
                            }))
                        })), a.createElement(v._29, {
                            padding: 2,
                            borderBottom: !0
                        }, a.createElement(v._6, {
                            display: v.P.Flex,
                            flexDirection: v.R.RowReverse,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement("div", null, a.createElement(v._25, {
                            onChange: e.handleAggregationChange,
                            value: e.props.urlStore.params.topStatsAggregation
                        }, a.createElement("option", {
                            value: me.a.Day
                        }, Object(i.d)("Day", "ChannelAnalyticsTopStats")), a.createElement("option", {
                            value: me.a.Week
                        }, Object(i.d)("Week", "ChannelAnalyticsTopStats")), a.createElement("option", {
                            value: me.a.Month
                        }, Object(i.d)("Month", "ChannelAnalyticsTopStats"))))), a.createElement(e.chart, {
                            definition: s[n],
                            aggregation: t
                        })), a.createElement(de, {
                            analyticsResponse: e.props.analyticsResponse,
                            aggregation: t,
                            dataGroup: s[n].dataGroup
                        }))
                    })
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        var e = O.d - 1;
                        return Math.min(e, this.props.urlStore.params.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            je = (n("G6h4"), {
                "data-test-selector": "card-image"
            }),
            Ce = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return a.createElement(v._6, {
                    className: "stream-card-row"
                }, a.createElement(v._4, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, a.createElement(v._29, {
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
                }, je)), a.createElement(v.C, {
                    overflow: v._9.Hidden
                }, a.createElement(v._6, {
                    display: v.P.Flex,
                    flexGrow: 1,
                    alignItems: v.c.Center,
                    justifyContent: v._5.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, a.createElement(v._6, {
                    display: v.P.Flex,
                    flexDirection: v.R.Column,
                    ellipsis: !0
                }, a.createElement(v.O, {
                    color: v.J.Base,
                    type: v._43.H5,
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
                    type: v._43.Span,
                    ellipsis: !0
                }, t.startChannelStatus)))), a.createElement(v._6, {
                    display: v.P.Flex,
                    flexGrow: 1,
                    justifyContent: v._5.End,
                    padding: {
                        left: 2
                    }
                }, a.createElement(v.O, {
                    bold: !0,
                    fontSize: v.T.Size5,
                    color: v.J.Alt,
                    type: v._43.Span
                }, Object(i.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))
            };
        var we, _e = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers"
        }(we || (we = {}));
        var Ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return a.createElement(v._25, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, a.createElement("option", {
                            value: we.AvgViewers
                        }, Object(i.d)("Average Viewers", "ChannelAnalyticsTopStreamsPanel")), a.createElement("option", {
                            value: we.NewFollowers
                        }, Object(i.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")))
                    }, n.streamsList = function() {
                        return a.createElement(v._6, null, n.sortedStreamSummaries().slice(0, _e).map(function(e, t) {
                            return a.createElement(Ce, {
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
                                return e.followersChange;
                            case we.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case we.NewFollowers:
                                return Object(C.d)(e, [function(e) {
                                    return e.followersChange
                                }], [C.a.Descending]);
                            case we.AvgViewers:
                            default:
                                return Object(C.d)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending])
                        }
                    }, n.state = {
                        sortType: we.AvgViewers
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? a.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, a.createElement(v._12, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? null : a.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, a.createElement(N, null, Object(i.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")), a.createElement(v._29, {
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(v._6, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: v.P.Flex
                    }, a.createElement(v._6, {
                        flexGrow: 1
                    }, a.createElement(v.O, {
                        type: v._43.H5,
                        bold: !0
                    }, Object(i.d)("Top {limit}", {
                        limit: _e
                    }, "ChannelAnalyticsTopStreamsPanel"))), a.createElement(v._6, null, this.sortDropdown())), a.createElement(v._6, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, this.streamsList())))
                }, t
            }(a.Component),
            Te = (n("T0UN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.urlStore,
                        n = e.channelAnalyticsResponse,
                        r = e.channel;
                    return a.createElement(a.Fragment, null, a.createElement(V, {
                        urlStore: t
                    }), a.createElement(Oe, {
                        channel: r,
                        urlStore: t,
                        analyticsResponse: n
                    }), a.createElement(v._29, {
                        className: "channel-analytics-index-page",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: v.P.Flex,
                        flexDirection: v.R.Column,
                        flexWrap: v.S.NoWrap,
                        alignItems: v.c.Stretch,
                        breakpointMedium: {
                            flexDirection: v.R.Row
                        }
                    }, a.createElement(v._6, {
                        className: "channel-analytics-index-page__col",
                        display: v.P.Flex,
                        flexGrow: 1,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(X, {
                        channel: r,
                        revenue: n.revenue,
                        subCounts: n.subCounts
                    }), a.createElement(H, {
                        streamSessions: n.streamSessions,
                        urlStore: t,
                        channelName: r.name
                    }), a.createElement(oe, {
                        channel: r.name,
                        topClips: n.topClips
                    })), a.createElement(v._6, {
                        className: "channel-analytics-index-page__col",
                        display: v.P.Flex,
                        flexGrow: 1,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(ne, {
                        channel: r.name
                    }), a.createElement(Ee, {
                        streamSessions: n.streamSessions
                    }))))
                }, t
            }(a.Component)),
            Ae = Object(o.d)(Object(m.d)("ChannelAnalyticsIndexPage", {
                destination: p.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: d.PageviewLocation.DashboardChannelAnalytics
            }))(Te),
            De = n("yLtb"),
            xe = (n("lV23"), function(e) {
                return e
            }),
            Re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.channelAnalyticsResponse.streamSessions.isLoading) return null;
                    var e = this.props.channelAnalyticsResponse.streamSessions.sessions,
                        t = Object(I.a)(e.map(function(e) {
                            return e.videoPlayPlatforms
                        })),
                        n = Object(I.a)(e.map(function(e) {
                            return e.videoPlayGeographics
                        })),
                        r = Object(I.a)(e.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        s = Object(I.a)(e.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        o = Object(I.a)(e.map(function(e) {
                            return e.videoPlayExternalReferrers
                        }));
                    return a.createElement(a.Fragment, null, a.createElement(v._29, {
                        elevation: 1,
                        background: v.m.Base,
                        display: v.P.Flex,
                        position: v._13.Relative,
                        flexDirection: v.R.Row,
                        flexWrap: v.S.NoWrap,
                        className: "referrals-page-nav-bar",
                        borderBottom: !0
                    }, a.createElement(v._29, {
                        position: v._13.Absolute,
                        display: v.P.Flex,
                        flexDirection: v.R.Row,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, a.createElement(v.u, {
                        type: v.A.Text,
                        linkTo: "/" + this.props.channel.name + "/dashboard/channel-analytics" + this.props.urlStore.searchStringWith()
                    }, a.createElement(v._6, {
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(v.O, null, Object(i.d)("Back", "ChannelAnalyticsReferralPage"))))), a.createElement(v._29, {
                        display: v.P.Flex,
                        flexGrow: 1,
                        flexWrap: v.S.NoWrap,
                        justifyContent: v._5.Center,
                        alignItems: v.c.Center
                    }, a.createElement(v.O, {
                        type: v._43.H2,
                        fontSize: v.T.Size4,
                        bold: !0
                    }, Object(i.d)("Views by Source", "ChannelAnalyticsReferralPage")))), a.createElement(V, {
                        urlStore: this.props.urlStore
                    }), a.createElement(v._6, {
                        className: "channel-analytics-referrals-page",
                        display: v.P.Flex,
                        flexDirection: v.R.Column,
                        flexWrap: v.S.NoWrap,
                        alignItems: v.c.Stretch,
                        breakpointMedium: {
                            flexDirection: v.R.Row
                        },
                        margin: {
                            top: 3
                        }
                    }, a.createElement(v._6, {
                        className: "channel-analytics-referrals-page__col",
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(v._29, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(W.a, {
                        referrals: n.items.slice(0, 15),
                        totals: n.totals,
                        translationFunc: De.a,
                        title: Object(i.d)("Views by Location", "ChannelAnalyticsReferralPage")
                    })), a.createElement(v._29, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(W.a, {
                        referrals: t.items.slice(0, 15),
                        totals: t.totals,
                        translationFunc: L.c,
                        title: Object(i.d)("Views by Platform", "ChannelAnalyticsReferralPage")
                    }))), a.createElement(v._6, {
                        className: "channel-analytics-referrals-page__col",
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(v._29, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(W.a, {
                        referrals: s.items.slice(0, 15),
                        totals: s.totals,
                        translationFunc: L.b,
                        title: Object(i.d)("Views from Twitch", "ChannelAnalyticsReferralPage")
                    })), a.createElement(v._29, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(W.a, {
                        referrals: r.items.slice(0, 15),
                        totals: r.totals,
                        translationFunc: xe,
                        title: Object(i.d)("Views from Channels", "ChannelAnalyticsReferralPage")
                    })), a.createElement(v._29, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: v.m.Base
                    }, a.createElement(W.a, {
                        referrals: o.items.slice(0, 15),
                        totals: o.totals,
                        translationFunc: L.a,
                        title: Object(i.d)("Views from Outside Twitch", "ChannelAnalyticsReferralPage")
                    })))))
                }, t
            }(a.Component),
            ke = Object(o.d)(Object(m.d)("ChannelAnalyticsReferralsPage", {
                destination: p.a.ChannelDashboardChannelAnalyticsReferrals,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: d.PageviewLocation.DashboardChannelAnalyticsReferrals
            }))(Re),
            Pe = n("kA6m"),
            Me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.pathname !== this.props.location.pathname || e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Pe.URLStore(this.props.location, this.props.history, this.props.now);
                    return A(e.params, this.props.now) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t
            }(a.Component),
            Ve = n("HCOe"),
            Le = n("OAwv");

        function Fe(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function Ne(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, a, s, o;
                return r.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return e.role === y.d.None ? [2, {
                                isError: !1,
                                streams: Pe.RevenueStreams.buildEmpty()
                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = Le.stringify(r.__assign({}, Fe(t.start, t.end), {
                                fraction: "day"
                            })), s = [n, a].join("?"), [4, Object(C.c)({
                                path: s
                            })]);
                        case 1:
                            return (o = i.sent()).isError() ? [2, {
                                isError: !0,
                                streams: Pe.RevenueStreams.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: Pe.RevenueStreams.fromPayload(o.body)
                            }]
                    }
                })
            })
        }
        var Be = n("+TF1"),
            Ie = n("DNvj"),
            We = n("x9gg"),
            Ge = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: Pe.RevenueStreams.buildEmpty(),
                            lookbackStreams: Pe.RevenueStreams.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            streams: Pe.SubCountStreams.buildEmpty(),
                            lookbackStreams: Pe.SubCountStreams.buildEmpty(),
                            isLoading: !0
                        },
                        streamSessions: {
                            sessions: [],
                            lookbackSessions: [],
                            isLoading: !0
                        }
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(y.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : a.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a, s, o = this;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        streamSessions: r.__assign({}, this.state.streamSessions, {
                                            isLoading: !0
                                        })
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, Object(Be.a)({
                                        channelID: this.props.channel.id,
                                        channelName: this.props.channel.name,
                                        interval: e
                                    })]) : [2];
                                case 1:
                                    return (t = i.sent()).isError ? [2] : (n = Object(We.a)(t.streamSummaries, function(e) {
                                        return e.interval.start > o.props.lookbackInterval.end
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
                                    }), [4, Object(Ie.a)(this.props.channel.name, this.props.interval)]) : [2];
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
                                    streams: Pe.RevenueStreams.buildEmpty(),
                                    lookbackStreams: Pe.RevenueStreams.buildEmpty(),
                                    isLoading: !0
                                }
                            }), Ne(this.props.channel, this.props.interval).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: r.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), Ne(this.props.channel, this.props.lookbackInterval).then(function(t) {
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
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            streams: Pe.SubCountStreams.buildEmpty(),
                                            lookbackStreams: Pe.SubCountStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var n, a, s, o;
                                            return r.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return e.role === y.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: Pe.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", a = Le.stringify(r.__assign({}, Fe(t.start, Object(h.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [n, a].join("?"), [4, Object(C.c)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (o = i.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: Pe.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: o.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? [2] : (n = Pe.SubCountStreams.partitionFromPayload(t.subscriptions, this.props.lookbackInterval), a = n[0], s = n[1], this.setState({
                                        subCounts: {
                                            isLoading: !1,
                                            streams: a,
                                            lookbackStreams: s
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(a.Component),
            Ue = (n("Goi1"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.channel) return null;
                    var t = y.c.fromChannelData(this.props.data.channel);
                    return a.createElement(c.b, null, a.createElement(Me, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(n) {
                        return a.createElement(Ge, {
                            interval: n.params,
                            lookbackInterval: Object(R.f)(n.params, -1),
                            channel: t
                        }, function(r) {
                            return a.createElement(v._6, {
                                padding: 4,
                                className: "channel-analytics-page"
                            }, a.createElement(s.c, {
                                path: "/:channelName/dashboard/channel-analytics",
                                exact: !0,
                                render: He.bind(e, t, n, r)
                            }), a.createElement(s.c, {
                                path: "/:channelName/dashboard/channel-analytics/referrals",
                                exact: !0,
                                render: ze.bind(e, t, n, r)
                            }))
                        })
                    }))
                }, t
            }(a.Component)),
            He = function(e, t, n) {
                return a.createElement(Ae, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: n
                })
            },
            ze = function(e, t, n) {
                return a.createElement(ke, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: n
                })
            },
            qe = Object(o.d)(Object(l.a)(Ve, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(Ue);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return Ue
        }), n.d(t, "ChannelAnalyticsPageRoot", function() {
            return qe
        })
    },
    fnik: function(e, t) {},
    "i/9b": function(e, t) {},
    jUGK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            a = n("tiQ5"),
            s = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.c;
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
                        total: Math.round(100 * e.reduce(function(e, t) {
                            return e + t.amount
                        }, 0)) / 100
                    }
                }, e
            }()
    },
    kA6m: function(e, t, n) {
        "use strict";
        var r = n("+ear");
        n.d(t, "URLStore", function() {
            return r.a
        });
        var a = n("jUGK");
        n.d(t, "RevenueStreams", function() {
            return a.a
        });
        var s = n("WHrl");
        n.d(t, "EMPTY_SUB_COUNT_RESPONSE", function() {
            return s.a
        }), n.d(t, "SubCountStreams", function() {
            return s.b
        });
        var o = n("0NoZ");
        n.n(o)
    },
    lV23: function(e, t) {},
    tiQ5: function(e, t, n) {
        "use strict";
        var r = n("6sO2"),
            a = n("TToO"),
            s = n("GiK3"),
            o = n("FsFC"),
            i = n("WaEV"),
            c = n("Odds"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(c._0, {
                        fullWidth: !0
                    }, s.createElement("canvas", {
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
            }(s.Component),
            u = (n("i/9b"), "#898395"),
            p = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            d = "rgba(0, 0, 0, 0)",
            m = "#ffffff",
            h = function(e) {
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
                                            fontColor: u,
                                            fontSize: 10,
                                            padding: 5,
                                            callback: t.formatXAxes
                                        },
                                        gridLines: {
                                            color: m,
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
                                            fontColor: u,
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
                                    bodyFontColor: m,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: d,
                                    footerFontStyle: "normal",
                                    callbacks: {
                                        title: t.formatTooltipTitle,
                                        label: t.formatTooltipLabel,
                                        afterLabel: t.formatTooltipAfterLabel,
                                        labelColor: t.getLabelColor
                                    }
                                },
                                onClick: t.handleDatasetClick,
                                responsive: !0,
                                maintainAspectRatio: !1
                            }
                        };
                        t.myChart = new i(e, n)
                    }, t.formatXAxes = function(e) {
                        if (t.props.formatXAxis) return t.props.formatXAxis(e);
                        var n = Number(e);
                        return isNaN(n) ? e : Object(r.c)(new Date(Number(e)), {
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
                        var a = e.index,
                            s = n.datasets[e.datasetIndex].label;
                        if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                            label: s,
                            value: Number(e.yLabel),
                            index: a
                        });
                        var o = Number(e.yLabel);
                        return isNaN(o) ? e.yLabel : Object(r.e)(Number(e.yLabel))
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
                            borderColor: d,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(c._6, {
                        className: "top-stats-chart",
                        position: c._13.Relative
                    }, s.createElement(l, {
                        onCanvasReady: this.handleCanvasReady
                    }))
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update())
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: e.color || p[t % p.length]
                        }
                    })
                }, t
            }(s.Component),
            f = (n("RpnM"), function() {
                return s.createElement(c._6, {
                    className: "top-stats-chart-loading",
                    flexGrow: 1,
                    flexShrink: 0,
                    justifyContent: c._5.Center,
                    fullWidth: !0
                }, s.createElement(c._8, {
                    fillContent: !0
                }))
            }),
            b = {
                "data-test-selector": "no-data"
            },
            g = function() {
                return s.createElement(c._6, a.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    textAlign: c._39.Center
                }, b), s.createElement(c.O, {
                    type: c._43.H3
                }, Object(r.d)("Nothing to show yet", "ChannelAnalyticsChartNoData")), s.createElement(c.O, {
                    color: c.J.Alt2,
                    fontSize: c.T.Size5
                }, Object(r.d)("Not enough data for us to display", "ChannelAnalyticsChartNoData")))
            },
            y = n("u4Vk"),
            v = function(e) {
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
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(e);
                        if (t.props.aggregation.isByDay) {
                            var n = new Date(Number(e.label)),
                                a = t.props.streamSessionsResponse.sessions[e.index],
                                s = Object(r.c)(n, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                o = Object(y.b)(a.interval);
                            return Object(r.d)("{date} – {shortDuration}", {
                                date: s,
                                shortDuration: o
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.streamSessionsResponse !== e.streamSessionsResponse || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.streamSessionsResponse.isLoading) return s.createElement(f, null);
                    var t, n, r = this.props.streamSessionsResponse.sessions;
                    return 0 === r.length ? s.createElement(g, null) : (this.props.aggregation.isByDay ? (t = r.map(function(e) {
                        return e.interval.start.getTime().toString()
                    }), n = this.props.datasetBuilders.map(function(e) {
                        return {
                            label: e.label,
                            data: r.map(e.getDataFromSession),
                            color: e.color
                        }
                    })) : (t = this.props.aggregation.datesAsLabels, n = this.props.datasetBuilders.map(function(t) {
                        return {
                            label: t.label,
                            data: t.aggregateDataFromSessions(e.props.streamSessionsResponse.sessions),
                            color: t.color
                        }
                    })), s.createElement(h, {
                        labels: t,
                        datasets: n,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                        onDatasetClick: this.handleDatasetClick
                    }))
                }, t
            }(s.Component),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.commercialLengthTotal / 60
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.commercialLengthTotal / 60,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = 60 * e.value;
                        return Object(r.d)("{adTime} Ad Breaks", {
                            adTime: Object(o.b)(t)
                        }, "ChannelAnalyticsAdBreaks")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Ad Breaks", "ChannelAnalyticsAdBreaks"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var n = e.value;
                        return n = n < 10 ? Math.round(10 * n) / 10 : Math.round(n), t.props.aggregation.isByDay ? Object(r.d)("{total, plural, one {# Unique Viewer} other {# Unique Viewers}}", {
                            total: n
                        }, "ChannelAnalyticsAverageUniqueViewers") : Object(r.d)("{total, plural, one {# Average Unique Viewer} other {# Average Unique Viewers}}", {
                            total: n
                        }, "ChannelAnalyticsAverageUniqueViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.uniqueViewers
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.average(e, function(e) {
                            return {
                                value: e.uniqueViewers,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Average Unique Viewers", "ChannelAnalyticsAverageUniqueViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = e.value;
                        return t = t < 10 ? Math.round(10 * t) / 10 : Math.round(t), Object(r.d)("{total, plural, one {# Average Viewer} other {# Average Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsAvgViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.avgViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(y.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Average Viewers", "ChannelAnalyticsAvgViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.messagesTotal
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(y.a)(e.interval),
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.round(e.value);
                        return Object(r.d)("{total, plural, one {# Message} other {# Messages}}", {
                            total: t
                        }, "ChannelAnalyticsChatMessages")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Average Chat Messages", "ChannelAnalyticsChatMessages"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.uniqueChatters
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(y.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.round(e.value);
                        return Object(r.d)("{total, plural, one {# Chatter} other {# Chatters}}", {
                            total: t
                        }, "ChannelAnalyticsTopStatsChatters")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Average Chatters", "ChannelAnalyticsTopStatsChatters"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return Object(r.d)("{views,number} {label}", {
                            views: e.value,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var n;
                        if (t.props.aggregation.isByDay) {
                            var a = new Date(Number(e.label)),
                                s = Object(r.c)(a, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                o = t.props.analyticsResponse.streamSessions.sessions[e.index],
                                i = Object(y.b)(o.interval);
                            n = Object(r.d)("{date} - {shortDuration}", {
                                date: s,
                                shortDuration: i
                            }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                        } else n = t.props.aggregation.formatDateFromLabel(e.label);
                        return Object(r.d)("{total,number} {date}", {
                            date: n,
                            total: e.value
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Twitch", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitch"),
                            aggregateDataFromSessions: this.aggregateData("twitch"),
                            color: "#7752ba"
                        }, {
                            label: Object(r.d)("Reddit", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("reddit"),
                            aggregateDataFromSessions: this.aggregateData("reddit"),
                            color: "#ff5700"
                        }, {
                            label: Object(r.d)("Facebook", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("facebook"),
                            aggregateDataFromSessions: this.aggregateData("facebook"),
                            color: "#3b5998"
                        }, {
                            label: Object(r.d)("Twitter", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitter"),
                            aggregateDataFromSessions: this.aggregateData("twitter"),
                            color: "#00aced"
                        }, {
                            label: Object(r.d)("Other", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("other"),
                            aggregateDataFromSessions: this.aggregateData("other"),
                            color: "#bdc3c7"
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle
                    })
                }, t.prototype.getDataFromSession = function(e) {
                    return function(t) {
                        return t.clipPlaysBreakdown[e]
                    }
                }, t.prototype.aggregateData = function(e) {
                    var t = this;
                    return function(n) {
                        return t.props.aggregation.sum(n, function(t) {
                            return {
                                value: t.clipPlaysBreakdown[e],
                                date: t.interval.start
                            }
                        })
                    }
                }, t
            }(s.Component),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.clipCreatesTotal
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.clipCreatesTotal,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(r.d)("{total, plural, one {# Clip Created} other {# Clips Created}}", {
                            total: t
                        }, "ChannelAnalyticsClipsCreated")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Clips Created", "ChannelAnalyticsClipsCreated"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            T = function(e) {
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
                        return Object(r.d)("{total, plural, one {# Live View} other {# Live Views}}", {
                            total: t
                        }, "ChannelAnalyticsLiveViews")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Live Views", "ChannelAnalyticsLiveViews"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.maxViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.max(e, function(e) {
                            return {
                                value: e.maxViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(r.d)("{total, plural, one {# Max Viewer} other {# Max Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsMaxViewers")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Max Viewers", "ChannelAnalyticsMaxViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.totalMinutesWatched
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.totalMinutesWatched,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(r.d)("{total, plural, one {# Minute Watched} other {# Minutes Watched}}", {
                            total: t
                        }, "ChannelAnalyticsMinutesWatched")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("Minutes Watched", "ChannelAnalyticsMinutesWatched"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            x = function(e) {
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
                        return Object(r.d)("{total, plural, one {# New Follower} other {# New Followers}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsNewFollowers")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(r.d)("New Followers", "ChannelAnalyticsTopStatsNewFollowers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = Object(r.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(r.d)("{currency} {label}", {
                            currency: t,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsRevenueTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var n = Object(r.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(r.d)("{currency} {label}", {
                            currency: n,
                            label: t.props.aggregation.formatDateFromLabel(e.label)
                        }, "ChannelAnalyticsTopStatsRevenueTitle")
                    }, t
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.revenue !== e.analyticsResponse.revenue || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.revenue.isLoading) return s.createElement(f, null);
                    var e = this.props.analyticsResponse.revenue.streams;
                    return s.createElement(h, {
                        labels: this.props.aggregation.datesAsLabels,
                        datasets: [{
                            label: Object(r.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(r.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(r.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.ads.timeseries, this.getAggregationData)
                        }, {
                            label: Object(r.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.bits.timeseries, this.getAggregationData)
                        }, {
                            label: Object(r.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.gameCommerce.timeseries, this.getAggregationData)
                        }, {
                            label: Object(r.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
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
            }(s.Component),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return e.label === t.paidSubMessage ? Object(r.d)("{numOfSubs, plural, one {# Paid sub} other {# Paid subs}}", {
                            numOfSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions") : Object(r.d)("{numOfSubs, plural, one {# Twitch Prime sub} other {# Twitch Prime subs}}", {
                            numOfSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipTitle = function(e) {
                        var n = t.props.aggregation.formatDate(new Date(Number(e.label)));
                        return Object(r.d)("{totalSubs, plural, one {{date} – # Sub} other {{date} – # Subs}}", {
                            date: n,
                            totalSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipAfterLabel = function(e) {
                        if (e.label === t.paidSubMessage && e.value && e.time) {
                            var n = t.props.analyticsResponse.subCounts.streams.twitchSubscriptions.timeseries,
                                a = {};
                            return n.forEach(function(n) {
                                if (t.props.aggregation.startOf(n.date).getTime() === e.time) {
                                    var r = n.product.defaultPrice;
                                    void 0 === a[r] && (a[r] = 0), a[r] += n.count
                                }
                            }), Object.keys(a).map(function(e) {
                                var t = Object(r.e)(Number(e) / 100, {
                                        style: "currency",
                                        currency: "USD"
                                    }),
                                    n = a[e];
                                return Object(r.d)("{numOfSubs, plural, one {# {usd} Sub} other {# {usd} Subs}}", {
                                    usd: t,
                                    numOfSubs: n
                                }, "ChannelAnalyticsTopStatsSubscriptions")
                            })
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.subCounts !== e.analyticsResponse.subCounts || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.subCounts.isLoading) return s.createElement(f, null);
                    var e = this.props.analyticsResponse.subCounts.streams;
                    return s.createElement(h, {
                        labels: this.props.aggregation.dates.map(function(e) {
                            return e.getTime().toString()
                        }),
                        datasets: [{
                            label: this.paidSubMessage,
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: this.twitchSubMessage,
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatTooltipAfterLabel: this.formatTooltipAfterLabel
                    })
                }, Object.defineProperty(t.prototype, "paidSubMessage", {
                    get: function() {
                        return Object(r.d)("Paid subs", "ChannelAnalyticsTopStatsSubscriptions")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "twitchSubMessage", {
                    get: function() {
                        return Object(r.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsSubscriptions")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getAggregationData = function(e) {
                    return {
                        value: e.count,
                        date: e.date
                    }
                }, t
            }(s.Component),
            P = n("yiqh"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return Object(y.a)(e.interval)
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: Object(y.a)(e.interval),
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(P.a)(t)
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.aggregation.isByDay) {
                            var n = new Date(Number(e.label));
                            return Object(r.c)(n, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            })
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        datasetBuilders: [{
                            label: Object(r.d)("Live Views", "ChannelAnalyticsTimeStreamed"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }]
                    })
                }, t
            }(s.Component),
            V = n("HW6M"),
            L = n("F8kA"),
            F = (n("fnik"), {
                "data-test-selector": "up-trend-indicator"
            }),
            N = {
                "data-test-selector": "down-trend-indicator"
            },
            B = {
                "data-test-selector": "tab-selector"
            },
            I = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = V("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return s.createElement(c._6, a.__assign({
                        className: e,
                        display: c.P.Flex,
                        flexGrow: 1
                    }, B), s.createElement(c._0, {
                        flexGrow: 1,
                        flexDirection: c.R.Column,
                        textAlign: c._39.Center
                    }, s.createElement(L.a, {
                        to: this.props.linkTo,
                        className: "top-stats-tab__link",
                        replace: !0
                    }, s.createElement(c._6, {
                        display: c.P.Flex,
                        flexGrow: 1,
                        flexDirection: c.R.Column,
                        padding: {
                            left: 2,
                            right: 1,
                            y: 1
                        },
                        ellipsis: !0
                    }, s.createElement(c.O, {
                        className: "top-stats-tab__title",
                        type: c._43.H3
                    }, this.props.title, this.renderTrendIndicator()), s.createElement(c.O, {
                        type: c._43.H6,
                        color: c.J.Alt2,
                        title: this.props.subtitle,
                        ellipsis: !0
                    }, this.props.subtitle)))), this.props.children)
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? s.createElement(c._6, {
                        display: c.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(c._19, a.__assign({
                        asset: c._20.GlyphArrUp,
                        type: c._21.Success
                    }, F))) : this.props.trend < 0 ? s.createElement(c._6, {
                        display: c.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(c._19, a.__assign({
                        asset: c._20.GlyphArrDown,
                        type: c._21.Warn
                    }, N))) : null : null
                }, t
            }(s.Component),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.adBreaks,
                        n = this.previousAdBreaks;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(o.b)(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Ad Breaks", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "adBreaks", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.commercialLengthTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousAdBreaks", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.commercialLengthTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        n = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []);
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Average Unique Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.averageUniqueViewers = function(e) {
                    return 0 === e.length ? 0 : e.reduce(function(e, t) {
                        return e + t.uniqueViewers
                    }, 0) / e.length
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(r.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(r.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(s.Component);

        function U(e, t) {
            var n = 0,
                r = 0;
            return e.forEach(function(e) {
                var a = t(e);
                r += a.weight * a.value, n += a.weight
            }), 0 === n ? 0 : r / n
        }
        var H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        n = this.averageViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []);
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Average Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.averageViewers = function(e) {
                    return U(e, function(e) {
                        return {
                            weight: Object(y.a)(e.interval),
                            value: e.avgViewerCount
                        }
                    })
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(r.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(r.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(s.Component),
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageMessages(this.props.analyticsResponse.streamSessions.sessions),
                        n = this.averageMessages(this.props.analyticsResponse.streamSessions.lookbackSessions);
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Average Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.averageMessages = function(e) {
                    return U(e, function(e) {
                        return {
                            weight: Object(y.a)(e.interval),
                            value: e.messagesTotal
                        }
                    })
                }, t
            }(s.Component),
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.sessions),
                        n = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.lookbackSessions);
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Average Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.averageUniqueChatters = function(e) {
                    return U(e, function(e) {
                        return {
                            weight: Object(y.a)(e.interval),
                            value: e.uniqueChatters
                        }
                    })
                }, t
            }(s.Component),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.previousTotalClipViews,
                        n = this.totalClipViews;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(n, {
                        maximumFractionDigits: 0
                    }), s.createElement(I, {
                        title: e,
                        subtitle: Object(r.d)("Clip Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: Math.sign(n - t)
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "totalClipViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.clipPlaysTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousTotalClipViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.clipPlaysTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.clipsCreated,
                        n = this.previousClipsCreated;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Clips Created", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "clipsCreated", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.clipCreatesTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousClipsCreated", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.clipCreatesTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.liveViews,
                        n = this.previousLiveViews;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Live Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "liveViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.totalViewers
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousLiveViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.totalViewers
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.maxViewers,
                        n = this.previousMaxViewers;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Max Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "maxViewers", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e < t.maxViewerCount ? t.maxViewerCount : e
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousMaxViewers", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e < t.maxViewerCount ? t.maxViewerCount : e
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.minutesWatched,
                        n = this.previousMinutesWatched;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(r.e)(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Minutes Watched", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "minutesWatched", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.totalMinutesWatched
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousMinutesWatched", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.totalMinutesWatched
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.followersChange,
                        n = this.previousFollowersChange;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(r.d)("{sign}{followersDiff, number}", {
                            followersDiff: Math.abs(e),
                            sign: t
                        }, "ChannelAnalyticsTopStats")
                    }(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("New Followers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
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
            }(s.Component);
        var $, ee, te = n("XTbU"),
            ne = (n("w5Qh"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return s.createElement(I, {
                        title: this.renderTitle(t),
                        trend: Math.sign(t - e),
                        subtitle: Object(r.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.renderTitle = function(e) {
                    if (this.props.analyticsResponse.revenue.isLoading) return "–";
                    var t = Object(te.a)(e),
                        n = t.sign,
                        r = t.dollars,
                        a = t.cents;
                    return s.createElement("span", null, s.createElement(c.O, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: c.T.Size6,
                        type: c._43.Span
                    }, n + " "), s.createElement(c.O, {
                        type: c._43.Span
                    }, r), s.createElement(c.O, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: c.T.Size4,
                        type: c._43.Span
                    }, "." + a))
                }, t
            }(s.Component)),
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.analyticsResponse.subCounts.streams.getTotalSubCount(),
                        n = this.props.analyticsResponse.subCounts.lookbackStreams.getTotalSubCount();
                    return e = this.props.analyticsResponse.subCounts.isLoading ? "—" : Object(r.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Subscriptions", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t
            }(s.Component),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.timeStreamed,
                        n = this.previousTimeStreamed;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(P.a)(t), s.createElement(I, {
                        title: e,
                        trend: Math.sign(t - n),
                        subtitle: Object(r.d)("Time Streamed", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "timeStreamed", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + Object(y.a)(t.interval)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousTimeStreamed", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + Object(y.a)(t.interval)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component);
        ! function(e) {
            e.AdBreaks = "ad-breaks", e.AverageUniqueViewers = "avg-unique-viewers", e.AverageViewers = "avg-viewers", e.ChatMessages = "chat-messages", e.Chatters = "chatters", e.ClipsCreated = "clips-created", e.ClipViews = "clip-views", e.LiveViews = "live-views", e.MaxViewers = "max-viewers", e.MinutesWatched = "minutes-watched", e.NewFollowers = "new-followers", e.Revenue = "revenue", e.Subscriptions = "subscriptions", e.TimeStreamed = "time-streamed"
        }($ || ($ = {})),
        function(e) {
            e[e.StreamSummaries = 0] = "StreamSummaries", e[e.Revenue = 1] = "Revenue"
        }(ee || (ee = {}));
        var se, oe = ((se = {})[$.AverageViewers] = {
                title: function() {
                    return Object(r.d)("Average Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: H,
                Chart: j,
                dataGroup: ee.StreamSummaries
            }, se[$.LiveViews] = {
                title: function() {
                    return Object(r.d)("Live Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Y,
                Chart: T,
                dataGroup: ee.StreamSummaries
            }, se[$.NewFollowers] = {
                title: function() {
                    return Object(r.d)("New Followers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Q,
                Chart: x,
                dataGroup: ee.StreamSummaries
            }, se[$.Subscriptions] = {
                title: function() {
                    return Object(r.d)("Subscriptions", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: re,
                Chart: k,
                dataGroup: ee.Revenue
            }, se[$.Revenue] = {
                title: function() {
                    return Object(r.d)("Revenue", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ne,
                Chart: R,
                dataGroup: ee.Revenue
            }, se[$.MinutesWatched] = {
                title: function() {
                    return Object(r.d)("Minutes Watched", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: X,
                Chart: D,
                dataGroup: ee.StreamSummaries
            }, se[$.TimeStreamed] = {
                title: function() {
                    return Object(r.d)("Time Streamed", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ae,
                Chart: M,
                dataGroup: ee.StreamSummaries
            }, se[$.MaxViewers] = {
                title: function() {
                    return Object(r.d)("Max Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Z,
                Chart: A,
                dataGroup: ee.StreamSummaries
            }, se[$.AverageUniqueViewers] = {
                title: function() {
                    return Object(r.d)("Average Unique Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: G,
                Chart: O,
                dataGroup: ee.StreamSummaries
            }, se[$.Chatters] = {
                title: function() {
                    return Object(r.d)("Average Chatters", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: q,
                Chart: w,
                dataGroup: ee.StreamSummaries
            }, se[$.ChatMessages] = {
                title: function() {
                    return Object(r.d)("Average Chat Messages", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: z,
                Chart: C,
                dataGroup: ee.StreamSummaries
            }, se[$.ClipsCreated] = {
                title: function() {
                    return Object(r.d)("Clips Created", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: J,
                Chart: E,
                dataGroup: ee.StreamSummaries
            }, se[$.ClipViews] = {
                title: function() {
                    return Object(r.d)("Clip Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: K,
                Chart: _,
                dataGroup: ee.StreamSummaries
            }, se[$.AdBreaks] = {
                title: function() {
                    return Object(r.d)("Ad Breaks", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: W,
                Chart: S,
                dataGroup: ee.StreamSummaries
            }, se),
            ie = [$.AverageViewers, $.LiveViews, $.ChatMessages, $.Revenue, $.Subscriptions],
            ce = n("wuJz"),
            le = Object(ce.parse)("2011-01-01"),
            ue = [{
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
        n.d(t, !1, function() {
            return $
        }), n.d(t, "b", function() {
            return ee
        }), n.d(t, "f", function() {
            return oe
        }), n.d(t, "d", function() {
            return 5
        }), n.d(t, "a", function() {
            return ie
        }), n.d(t, "e", function() {
            return le
        }), n.d(t, "c", function() {
            return ue
        })
    },
    w5Qh: function(e, t) {},
    x9gg: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            for (var n = [], r = [], a = 0, s = e; a < s.length; a++) {
                var o = s[a];
                t(o) ? n.push(o) : r.push(o)
            }
            return [n, r]
        }
    },
    yLtb: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(r.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(r.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(r.d)("Andorra", "format-country");
                case "AE":
                    return Object(r.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(r.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(r.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(r.d)("Anguilla", "format-country");
                case "AL":
                    return Object(r.d)("Albania", "format-country");
                case "AM":
                    return Object(r.d)("Armenia", "format-country");
                case "AO":
                    return Object(r.d)("Angola", "format-country");
                case "AP":
                    return Object(r.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(r.d)("Antarctica", "format-country");
                case "AR":
                    return Object(r.d)("Argentina", "format-country");
                case "AS":
                    return Object(r.d)("American Samoa", "format-country");
                case "AT":
                    return Object(r.d)("Austria", "format-country");
                case "AU":
                    return Object(r.d)("Australia", "format-country");
                case "AW":
                    return Object(r.d)("Aruba", "format-country");
                case "AX":
                    return Object(r.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(r.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(r.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(r.d)("Barbados", "format-country");
                case "BD":
                    return Object(r.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(r.d)("Belgium", "format-country");
                case "BF":
                    return Object(r.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(r.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(r.d)("Bahrain", "format-country");
                case "BI":
                    return Object(r.d)("Burundi", "format-country");
                case "BJ":
                    return Object(r.d)("Benin", "format-country");
                case "BL":
                    return Object(r.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(r.d)("Bermuda", "format-country");
                case "BN":
                    return Object(r.d)("Brunei", "format-country");
                case "BO":
                    return Object(r.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(r.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(r.d)("Brazil", "format-country");
                case "BS":
                    return Object(r.d)("Bahamas", "format-country");
                case "BT":
                    return Object(r.d)("Bhutan", "format-country");
                case "BV":
                    return Object(r.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(r.d)("Botswana", "format-country");
                case "BY":
                    return Object(r.d)("Belarus", "format-country");
                case "BZ":
                    return Object(r.d)("Belize", "format-country");
                case "CA":
                    return Object(r.d)("Canada", "format-country");
                case "CC":
                    return Object(r.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(r.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(r.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(r.d)("Congo", "format-country");
                case "CH":
                    return Object(r.d)("Switzerland", "format-country");
                case "CI":
                    return Object(r.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(r.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(r.d)("Chile", "format-country");
                case "CM":
                    return Object(r.d)("Cameroon", "format-country");
                case "CN":
                    return Object(r.d)("China", "format-country");
                case "CO":
                    return Object(r.d)("Colombia", "format-country");
                case "CR":
                    return Object(r.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(r.d)("Cuba", "format-country");
                case "CV":
                    return Object(r.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(r.d)("Curacao", "format-country");
                case "CX":
                    return Object(r.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(r.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(r.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(r.d)("Germany", "format-country");
                case "DJ":
                    return Object(r.d)("Djibouti", "format-country");
                case "DK":
                    return Object(r.d)("Denmark", "format-country");
                case "DM":
                    return Object(r.d)("Dominica", "format-country");
                case "DO":
                    return Object(r.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(r.d)("Algeria", "format-country");
                case "EC":
                    return Object(r.d)("Ecuador", "format-country");
                case "EE":
                    return Object(r.d)("Estonia", "format-country");
                case "EG":
                    return Object(r.d)("Egypt", "format-country");
                case "EH":
                    return Object(r.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(r.d)("Eritrea", "format-country");
                case "ES":
                    return Object(r.d)("Spain", "format-country");
                case "ET":
                    return Object(r.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(r.d)("Europe", "format-country");
                case "FI":
                    return Object(r.d)("Finland", "format-country");
                case "FJ":
                    return Object(r.d)("Fiji", "format-country");
                case "FK":
                    return Object(r.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(r.d)("Micronesia", "format-country");
                case "FO":
                    return Object(r.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(r.d)("France", "format-country");
                case "GA":
                    return Object(r.d)("Gabon", "format-country");
                case "GB":
                    return Object(r.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(r.d)("Grenada", "format-country");
                case "GE":
                    return Object(r.d)("Georgia", "format-country");
                case "GF":
                    return Object(r.d)("French Guiana", "format-country");
                case "GG":
                    return Object(r.d)("Guernsey", "format-country");
                case "GH":
                    return Object(r.d)("Ghana", "format-country");
                case "GI":
                    return Object(r.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(r.d)("Greenland", "format-country");
                case "GM":
                    return Object(r.d)("Gambia", "format-country");
                case "GN":
                    return Object(r.d)("Guinea", "format-country");
                case "GP":
                    return Object(r.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(r.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(r.d)("Greece", "format-country");
                case "GS":
                    return Object(r.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(r.d)("Guatemala", "format-country");
                case "GU":
                    return Object(r.d)("Guam", "format-country");
                case "GW":
                    return Object(r.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(r.d)("Guyana", "format-country");
                case "HK":
                    return Object(r.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(r.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(r.d)("Honduras", "format-country");
                case "HR":
                    return Object(r.d)("Croatia", "format-country");
                case "HT":
                    return Object(r.d)("Haiti", "format-country");
                case "HU":
                    return Object(r.d)("Hungary", "format-country");
                case "ID":
                    return Object(r.d)("Indonesia", "format-country");
                case "IE":
                    return Object(r.d)("Ireland", "format-country");
                case "IL":
                    return Object(r.d)("Israel", "format-country");
                case "IM":
                    return Object(r.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(r.d)("India", "format-country");
                case "IO":
                    return Object(r.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(r.d)("Iraq", "format-country");
                case "IR":
                    return Object(r.d)("Iran", "format-country");
                case "IS":
                    return Object(r.d)("Iceland", "format-country");
                case "IT":
                    return Object(r.d)("Italy", "format-country");
                case "JE":
                    return Object(r.d)("Jersey", "format-country");
                case "JM":
                    return Object(r.d)("Jamaica", "format-country");
                case "JO":
                    return Object(r.d)("Jordan", "format-country");
                case "JP":
                    return Object(r.d)("Japan", "format-country");
                case "KE":
                    return Object(r.d)("Kenya", "format-country");
                case "KG":
                    return Object(r.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(r.d)("Cambodia", "format-country");
                case "KI":
                    return Object(r.d)("Kiribati", "format-country");
                case "KM":
                    return Object(r.d)("Comoros", "format-country");
                case "KN":
                    return Object(r.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(r.d)("North Korea", "format-country");
                case "KR":
                    return Object(r.d)("South Korea", "format-country");
                case "KW":
                    return Object(r.d)("Kuwait", "format-country");
                case "KY":
                    return Object(r.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(r.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(r.d)("Laos", "format-country");
                case "LB":
                    return Object(r.d)("Lebanon", "format-country");
                case "LC":
                    return Object(r.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(r.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(r.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(r.d)("Liberia", "format-country");
                case "LS":
                    return Object(r.d)("Lesotho", "format-country");
                case "LT":
                    return Object(r.d)("Lithuania", "format-country");
                case "LU":
                    return Object(r.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(r.d)("Latvia", "format-country");
                case "LY":
                    return Object(r.d)("Libya", "format-country");
                case "MA":
                    return Object(r.d)("Morocco", "format-country");
                case "MC":
                    return Object(r.d)("Monaco", "format-country");
                case "MD":
                    return Object(r.d)("Moldova", "format-country");
                case "ME":
                    return Object(r.d)("Montenegro", "format-country");
                case "MF":
                    return Object(r.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(r.d)("Madagascar", "format-country");
                case "MH":
                    return Object(r.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(r.d)("Macedonia", "format-country");
                case "ML":
                    return Object(r.d)("Mali", "format-country");
                case "MM":
                    return Object(r.d)("Myanmar", "format-country");
                case "MN":
                    return Object(r.d)("Mongolia", "format-country");
                case "MO":
                    return Object(r.d)("Macao", "format-country");
                case "MP":
                    return Object(r.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(r.d)("Martinique", "format-country");
                case "MR":
                    return Object(r.d)("Mauritania", "format-country");
                case "MS":
                    return Object(r.d)("Montserrat", "format-country");
                case "MT":
                    return Object(r.d)("Malta", "format-country");
                case "MU":
                    return Object(r.d)("Mauritius", "format-country");
                case "MV":
                    return Object(r.d)("Maldives", "format-country");
                case "MW":
                    return Object(r.d)("Malawi", "format-country");
                case "MX":
                    return Object(r.d)("Mexico", "format-country");
                case "MY":
                    return Object(r.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(r.d)("Mozambique", "format-country");
                case "NA":
                    return Object(r.d)("Namibia", "format-country");
                case "NC":
                    return Object(r.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(r.d)("Niger", "format-country");
                case "NF":
                    return Object(r.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(r.d)("Nigeria", "format-country");
                case "NI":
                    return Object(r.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(r.d)("Netherlands", "format-country");
                case "NO":
                    return Object(r.d)("Norway", "format-country");
                case "NP":
                    return Object(r.d)("Nepal", "format-country");
                case "NR":
                    return Object(r.d)("Nauru", "format-country");
                case "NU":
                    return Object(r.d)("Niue", "format-country");
                case "NZ":
                    return Object(r.d)("New Zealand", "format-country");
                case "O1":
                    return Object(r.d)("Other Country", "format-country");
                case "OM":
                    return Object(r.d)("Oman", "format-country");
                case "PA":
                    return Object(r.d)("Panama", "format-country");
                case "PE":
                    return Object(r.d)("Peru", "format-country");
                case "PF":
                    return Object(r.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(r.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(r.d)("Philippines", "format-country");
                case "PK":
                    return Object(r.d)("Pakistan", "format-country");
                case "PL":
                    return Object(r.d)("Poland", "format-country");
                case "PM":
                    return Object(r.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(r.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(r.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(r.d)("Palestine", "format-country");
                case "PT":
                    return Object(r.d)("Portugal", "format-country");
                case "PW":
                    return Object(r.d)("Palau", "format-country");
                case "PY":
                    return Object(r.d)("Paraguay", "format-country");
                case "QA":
                    return Object(r.d)("Qatar", "format-country");
                case "RE":
                    return Object(r.d)("Reunion", "format-country");
                case "RO":
                    return Object(r.d)("Romania", "format-country");
                case "RS":
                    return Object(r.d)("Serbia", "format-country");
                case "RU":
                    return Object(r.d)("Russia", "format-country");
                case "RW":
                    return Object(r.d)("Rwanda", "format-country");
                case "SA":
                    return Object(r.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(r.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(r.d)("Seychelles", "format-country");
                case "SD":
                    return Object(r.d)("Sudan", "format-country");
                case "SE":
                    return Object(r.d)("Sweden", "format-country");
                case "SG":
                    return Object(r.d)("Singapore", "format-country");
                case "SH":
                    return Object(r.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(r.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(r.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(r.d)("Slovakia", "format-country");
                case "SL":
                    return Object(r.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(r.d)("San Marino", "format-country");
                case "SN":
                    return Object(r.d)("Senegal", "format-country");
                case "SO":
                    return Object(r.d)("Somalia", "format-country");
                case "SR":
                    return Object(r.d)("Suriname", "format-country");
                case "SS":
                    return Object(r.d)("South Sudan", "format-country");
                case "ST":
                    return Object(r.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(r.d)("El Salvador", "format-country");
                case "SX":
                    return Object(r.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(r.d)("Syria", "format-country");
                case "SZ":
                    return Object(r.d)("Swaziland", "format-country");
                case "TC":
                    return Object(r.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(r.d)("Chad", "format-country");
                case "TF":
                    return Object(r.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(r.d)("Togo", "format-country");
                case "TH":
                    return Object(r.d)("Thailand", "format-country");
                case "TJ":
                    return Object(r.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(r.d)("Tokelau", "format-country");
                case "TL":
                    return Object(r.d)("East Timor", "format-country");
                case "TM":
                    return Object(r.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(r.d)("Tunisia", "format-country");
                case "TO":
                    return Object(r.d)("Tonga", "format-country");
                case "TR":
                    return Object(r.d)("Turkey", "format-country");
                case "TT":
                    return Object(r.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(r.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(r.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(r.d)("Tanzania", "format-country");
                case "UA":
                    return Object(r.d)("Ukraine", "format-country");
                case "UG":
                    return Object(r.d)("Uganda", "format-country");
                case "UM":
                    return Object(r.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(r.d)("United States", "format-country");
                case "UY":
                    return Object(r.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(r.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(r.d)("Vatican City", "format-country");
                case "VC":
                    return Object(r.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(r.d)("Venezuela", "format-country");
                case "VG":
                    return Object(r.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(r.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(r.d)("Vietnam", "format-country");
                case "VU":
                    return Object(r.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(r.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(r.d)("Samoa", "format-country");
                case "YE":
                    return Object(r.d)("Yemen", "format-country");
                case "YT":
                    return Object(r.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(r.d)("South Africa", "format-country");
                case "ZM":
                    return Object(r.d)("Zambia", "format-country");
                case "ZW":
                    return Object(r.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        };
        var r = n("6sO2")
    },
    z39C: function(e, t) {}
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-root-922fa9f03421b134841fd7ee5f0c6f8d.js.map