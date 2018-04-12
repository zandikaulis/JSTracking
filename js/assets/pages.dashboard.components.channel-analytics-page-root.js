webpackJsonp([79], {
    "+ear": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n("TToO"),
            r = n("wuJz"),
            s = (n.n(r), n("OAwv")),
            i = (n.n(s), n("IJpv")),
            o = function() {
                function e(e, t, n) {
                    void 0 === n && (n = new Date);
                    var o = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = o.buildPathWithParams(e);
                        o.history.replace(t)
                    }, this.searchStringWith = function(e) {
                        void 0 === e && (e = {});
                        var t = function(e) {
                                var t = {};
                                for (var n in e) {
                                    var a = e[n];
                                    "" !== a && (t[n] = a)
                                }
                                return t
                            }(a.__assign({}, o.rawParams, function(e) {
                                var t = {};
                                e.hasOwnProperty("end") && (t.end = c(e.end));
                                e.hasOwnProperty("start") && (t.start = c(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(n = e.topStatsIndex) && String(n) || "");
                                var n;
                                e.hasOwnProperty("topStatsAggregation") && (t.topStatsAggregation = e.topStatsAggregation || "");
                                return t
                            }(e))),
                            n = s.stringify(t);
                        return n.length ? "?" + n : ""
                    }, this.buildPathWithParams = function(e) {
                        return "" + o.location.pathname + o.searchStringWith(e)
                    }, this.location = e, this.history = t, this.rawParams = s.parse(e.search);
                    var u = l(this.rawParams.start) || Object(r.startOfMonth)(n),
                        p = Object(r.endOfDay)(l(this.rawParams.end) || n),
                        d = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex),
                        m = Object(i.b)(this.rawParams.topStatsAggregation);
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

        function l(e) {
            if (e) {
                var t = Object(r.parse)(e);
                if (Object(r.isValid)(t)) return t
            }
        }

        function c(e) {
            return e ? Object(r.format)(e, "YYYY-MM-DD") : ""
        }
    },
    "0NoZ": function(e, t) {},
    Bgox: function(e, t) {},
    BoWu: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        });
        var a = n("6sO2"),
            r = function() {
                return Object(a.d)("Other", "DemographicsData")
            },
            s = function(e) {
                return {
                    unknown: Object(a.d)("Unknown", "DemographicsData"),
                    tv: Object(a.d)("TV", "DemographicsData"),
                    ios: Object(a.d)("iOS App", "DemographicsData"),
                    web: Object(a.d)("Web", "DemographicsData"),
                    android: Object(a.d)("Android App", "DemographicsData"),
                    mobile_web: Object(a.d)("Mobile Web", "DemographicsData"),
                    mobile_aggregated: Object(a.d)("Mobile", "DemographicsData"),
                    console: Object(a.d)("Console", "DemographicsData"),
                    other: r()
                }[e] || e
            },
            i = function(e) {
                return {
                    other: r(),
                    front_page_featured: Object(a.d)("Featured Section - Front Page", "DemographicsData"),
                    creative_page_featured: Object(a.d)("Featured Section - Creative Page", "DemographicsData"),
                    hosted: Object(a.d)("Hosts", "DemographicsData"),
                    email_live_notification: Object(a.d)("Notifications - Email", "DemographicsData"),
                    onsite_notification: Object(a.d)("Notifications - Onsite", "DemographicsData"),
                    followed_channel: Object(a.d)("Followers", "DemographicsData"),
                    directory_browse: Object(a.d)("Browse Page", "DemographicsData"),
                    search: Object(a.d)("Searches", "DemographicsData"),
                    clips_live: Object(a.d)("Clips", "DemographicsData"),
                    friend_presence: Object(a.d)("Friends", "DemographicsData"),
                    top_nav_bar: Object(a.d)("Your Channel Page", "DemographicsData"),
                    recommended_channel: Object(a.d)("Recommendations", "DemographicsData"),
                    other_channel_page: Object(a.d)("Other Channel Page", "DemographicsData")
                }[e] || Object(a.d)("{name}'s Channel Page", {
                    name: e
                }, "DemographicsData")
            },
            o = function(e) {
                var t;
                return ((t = {
                    facebook: Object(a.d)("Facebook", "DemographicsData"),
                    google: Object(a.d)("Google", "DemographicsData"),
                    reddit: Object(a.d)("Reddit", "DemographicsData"),
                    youtube: Object(a.d)("Youtube", "DemographicsData")
                })["t.co"] = Object(a.d)("Twitter", "DemographicsData"), t.unknown = Object(a.d)("Direct", "DemographicsData"), t.twitch_aggregate = Object(a.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(a.d)("External", "DemographicsData"), t)[e] || e
            }
    },
    G6h4: function(e, t) {},
    G70b: function(e, t) {},
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
        var a;
        n.d(t, "a", function() {
                return a
            }), t.b = function(e) {
                if (e === a.Week || e === a.Month) return e;
                return a.Day
            },
            function(e) {
                e.Day = "day", e.Week = "week", e.Month = "month"
            }(a || (a = {}))
    },
    JNds: function(e, t) {},
    JczT: function(e, t) {},
    KiQY: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = new Date(e);
            return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
        }
    },
    MXAS: function(e, t) {},
    RpnM: function(e, t) {},
    T0UN: function(e, t) {},
    Ukf0: function(e, t) {},
    WHrl: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        });
        var a = n("TToO"),
            r = n("tiQ5"),
            s = n("yvDY"),
            i = n("KiQY"),
            o = {
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            l = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : r.c;
                    this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
                        return a.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
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
                    var a = this.normalizePayload(t),
                        r = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        i = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        o = Object(s.a)(a.primeSubscriptions, n),
                        l = o[0],
                        c = o[1];
                    return r.primeSubscriptions = l, i.primeSubscriptions = c, a.twitchSubscriptionProducts.forEach(function(e) {
                        var t = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            a = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            o = Object(s.a)(e.timeseries, n),
                            l = o[0],
                            c = o[1];
                        t.timeseries = l, a.timeseries = c, r.twitchSubscriptionProducts.push(t), i.twitchSubscriptionProducts.push(a)
                    }), [new e(r), new e(i)]
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
                            return a.__assign({}, n, {
                                timeseries: t.normalizeTimeseries(e.sub_counts, n)
                            })
                        })
                    }
                }, e.normalizeTimeseries = function(e, t) {
                    return e.map(function(e) {
                        return {
                            count: e.count,
                            date: Object(i.a)(e.timestamp),
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
    dPMn: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            s = n("6sO2"),
            i = n("Odds"),
            o = {
                "data-test-selector": "no-data"
            },
            l = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                alt: "TearGlove"
            },
            c = function() {
                return r.createElement(i._7, a.__assign({
                    alignItems: i.c.Center,
                    display: i.Q.Flex,
                    flexDirection: i.S.Column,
                    justifyContent: i._6.Center,
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    padding: {
                        top: 5,
                        bottom: 5
                    }
                }, o), r.createElement(i._7, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(i.l, a.__assign({}, l, {
                    size: 50
                }))), r.createElement(i.P, {
                    color: i.J.Alt2,
                    fontSize: i.U.Size5
                }, Object(s.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
            };
        n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return c
        })
    },
    ehuU: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n("TToO"),
            s = n("GiK3"),
            i = n("CIox"),
            o = n("2KeS"),
            l = n("6sO2"),
            c = n("7vx8"),
            u = n("j7/Y"),
            p = n("w9tK"),
            d = n("vH/s"),
            m = n("CSlQ"),
            h = n("wuJz"),
            g = n("3zLD"),
            b = n("6UW8"),
            f = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t.picker.destroy() : (t.picker = new b({
                            onSelect: t.props.onChange,
                            theme: "inline",
                            minDate: t.props.minDate && Object(h.startOfDay)(t.props.minDate),
                            maxDate: Object(h.startOfDay)(t.props.maxDate),
                            defaultDate: Object(h.startOfDay)(t.props.date),
                            startRange: Object(h.startOfDay)(t.props.startRange),
                            endRange: Object(h.startOfDay)(t.props.endRange),
                            setDefaultDate: !0
                        }), e.appendChild(t.picker.el))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(h.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(h.startOfDay)(this.props.endRange)), this.props.minDate && this.picker.setMinDate(Object(h.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(h.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(h.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return s.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(s.Component)),
            S = n("AJEV"),
            v = n("Odds");
        ! function(e) {
            e.Last7Days = "last_7_days", e.Last30Days = "last_30_days", e.CurrentMonth = "current_month", e.oneMonthAgo = "t_minus_1_month", e.twoMonthsAgo = "t_minus_2_month"
        }(a || (a = {}));
        var y = function(e) {
            function t(t) {
                var n = e.call(this, t) || this,
                    r = t.now || new Date,
                    s = Object(h.endOfDay)(r),
                    i = Object(h.startOfDay)(r),
                    o = Object(h.startOfMonth)(r);
                return n.presets = [{
                    message: Object(l.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                    interval: {
                        start: Object(h.subDays)(i, 6),
                        end: s,
                        id: a.Last7Days
                    }
                }, {
                    message: Object(l.d)("Last 30 Days", "ChannelAnalyticsDateRangePickerPresets"),
                    interval: {
                        start: Object(h.subDays)(i, 29),
                        end: s,
                        id: a.Last30Days
                    }
                }, {
                    message: Object(l.c)(o, {
                        month: "long",
                        year: "numeric"
                    }),
                    interval: {
                        start: o,
                        end: s,
                        id: a.CurrentMonth
                    }
                }, {
                    message: Object(l.c)(Object(h.subMonths)(s, 1), {
                        month: "long",
                        year: "numeric"
                    }),
                    interval: {
                        start: Object(h.startOfMonth)(Object(h.subMonths)(r, 1)),
                        end: Object(h.endOfMonth)(Object(h.subMonths)(r, 1)),
                        id: a.oneMonthAgo
                    }
                }, {
                    message: Object(l.c)(Object(h.subMonths)(s, 2), {
                        month: "long",
                        year: "numeric"
                    }),
                    interval: {
                        start: Object(h.startOfMonth)(Object(h.subMonths)(r, 2)),
                        end: Object(h.endOfMonth)(Object(h.subMonths)(r, 2)),
                        id: a.twoMonthsAgo
                    }
                }], n
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this;
                return s.createElement(v._7, {
                    display: v.Q.Flex,
                    flexDirection: v.S.Column
                }, this.presets.map(function(t, n) {
                    return s.createElement(v._30, {
                        color: v.J.Link,
                        key: n
                    }, s.createElement(v._5, {
                        selected: Object(S.f)(e.props.interval, t.interval),
                        onClick: e.handleClickFor(t.interval)
                    }, s.createElement(v._30, {
                        padding: 1,
                        textAlign: v._40.Center
                    }, s.createElement(v.P, {
                        noWrap: !0,
                        fontSize: v.U.Size5
                    }, t.message))))
                }))
            }, t.prototype.handleClickFor = function(e) {
                var t = this;
                return function() {
                    return t.props.onChange(e)
                }
            }, t
        }(s.Component);

        function C(e, t, n) {
            void 0 === n && (n = new Date);
            var a = r.__assign({}, e, t);
            if (Object(h.differenceInDays)(a.end, a.start) >= 0) return a;
            var s = Object(h.differenceInDays)(e.end, e.start);
            if (Object(h.isEqual)(e.end, a.end)) {
                var i = Object(h.startOfDay)(n),
                    o = Object(h.addDays)(a.start, s);
                return o > i && (o = i), r.__assign({}, a, {
                    end: o
                })
            }
            return Object(h.isEqual)(e.start, a.start) ? r.__assign({}, a, {
                start: Object(h.subDays)(a.end, s)
            }) : e
        }
        var _ = n("PGY2");

        function E(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, a, s, i;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", n = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(_.c)({
                                path: t
                            }, {
                                excludeHeaders: ["Twitch-Api-Token"]
                            }), Object(_.c)({
                                path: n
                            }, {
                                excludeHeaders: ["Twitch-Api-Token"]
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
                                    var a = Array.from(n.values());
                                    return Object(_.d)(a, [function(e) {
                                        return e.plan
                                    }], [_.a.Ascending])
                                }(s.body, i.body)
                            }]
                    }
                })
            })
        }
        var w = n("tiQ5");

        function O(e) {
            return e === S.d.None ? w.e : w.a
        }

        function T(e) {
            return e === S.d.None ? w.f : Object.keys(w.g)
        }
        var A = {
                "data-test-selector": "commit-button"
            },
            j = {
                "data-test-selector": "cancel-button"
            },
            D = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = C(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = C(n.state.interval, {
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
                    return s.createElement("div", null, s.createElement(v._7, {
                        display: v.Q.Flex,
                        flexWrap: v.T.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(v._7, {
                        padding: {
                            right: 2
                        },
                        textAlign: v._40.Center
                    }, s.createElement(v.P, {
                        color: v.J.Alt2,
                        fontSize: v.U.Size4
                    }, Object(l.d)("Start date", "ChannelAnalyticsDateRangePicker")), s.createElement(f, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), s.createElement(v._7, {
                        padding: {
                            right: 2
                        },
                        textAlign: v._40.Center
                    }, s.createElement(v.P, {
                        color: v.J.Alt2,
                        fontSize: v.U.Size4
                    }, Object(l.d)("End date", "ChannelAnalyticsDateRangePicker")), s.createElement(f, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), s.createElement(v._30, {
                        padding: {
                            top: 1,
                            left: 2
                        },
                        borderLeft: !0
                    }, s.createElement(y, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), s.createElement(v._7, {
                        display: v.Q.Flex,
                        justifyContent: v._6.Center
                    }, s.createElement(v._7, {
                        margin: {
                            right: 2
                        }
                    }, s.createElement(v.u, r.__assign({}, A, {
                        onClick: this.handleUpdateClick
                    }), Object(l.d)("Update", "ChannelAnalyticsDateRangePicker"))), s.createElement(v.u, r.__assign({}, j, {
                        type: v.A.Text,
                        onClick: this.props.onDismiss
                    }), Object(l.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(s.Component);

        function k(e, t) {
            return void 0 === t && (t = new Date), e.start <= e.end && e.end <= Object(h.endOfDay)(t)
        }
        var x = n("BSOV"),
            R = n("ylrR"),
            P = n("9uzc"),
            F = n("u4Vk"),
            V = {
                "data-test-selector": "time-range"
            },
            L = {
                "data-test-selector": "total-days"
            },
            M = {
                "data-test-selector": "date-picker-toggle"
            },
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatePickerOpen = function() {
                        Object(x.b)({
                            action: x.a.OpenDatePicker
                        })
                    }, t.handlePrevious = function() {
                        Object(x.b)({
                            action: x.a.VisitPreviousDateRange
                        })
                    }, t.handleNext = function() {
                        Object(x.b)({
                            action: x.a.VisitNextDateRange
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore.params;
                    return s.createElement(v._7, {
                        position: v._14.Relative
                    }, s.createElement(R.a, {
                        onOpen: this.handleDatePickerOpen,
                        control: function(n) {
                            var a = n.toggle;
                            return s.createElement(v._7, {
                                padding: {
                                    bottom: 2
                                }
                            }, s.createElement(P.a, {
                                previousPath: e.pathWithShiftedInterval(-1),
                                nextPath: e.pathWithShiftedInterval(1),
                                onPrevious: e.handlePrevious,
                                onNext: e.handleNext
                            }, s.createElement(v.u, r.__assign({}, M, {
                                type: v.A.Text,
                                onClick: a,
                                fullWidth: !0
                            }), s.createElement(v.P, r.__assign({}, V, {
                                fontSize: v.U.Size4
                            }), e.formatDateRange(t)), s.createElement(v.P, r.__assign({}, L, {
                                fontSize: v.U.Size6,
                                color: v.J.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return s.createElement(v._30, {
                            margin: {
                                top: 5
                            },
                            position: v._14.Absolute,
                            display: v.Q.Flex,
                            alignItems: v.c.Center,
                            flexDirection: v.S.Column,
                            zIndex: v._56.Above,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, s.createElement(v._30, {
                            margin: {
                                top: .5
                            },
                            elevation: 4,
                            position: v._14.Relative,
                            display: v.Q.Flex,
                            background: v.m.Base,
                            zIndex: v._56.Above,
                            attachTop: !0
                        }, s.createElement(v._7, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, s.createElement(D, {
                            interval: t,
                            onCommit: Object(g.compose)(a, e.props.onDateSelect),
                            onDismiss: a
                        }))))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(h.differenceInDays)(e.end, e.start) + 1 ? Object(l.c)(e.start, "medium") : Object(l.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(h.differenceInDays)(e.end, e.start) + 1;
                    return Object(l.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.pathWithShiftedInterval = function(e) {
                    var t = Object(F.h)(this.props.urlStore.params, e);
                    return k(t) ? this.props.urlStore.buildPathWithParams(t) : ""
                }, t
            }(s.Component),
            B = n("zCIC"),
            I = (n("JNds"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(B.b, null, s.createElement(v._7, {
                        padding: 4,
                        className: "channel-analytics-page"
                    }, this.props.children))
                }, t
            }(s.Component)),
            W = n("BoWu"),
            U = (n("Bgox"), function(e) {
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
                    var e = s.createElement(v._7, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, this.props.hoverText);
                    return s.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, s.createElement(v._30, {
                        display: v.Q.Flex,
                        padding: {
                            x: 1
                        },
                        position: v._14.Relative
                    }, s.createElement(v._30, {
                        className: "hoverable-icon",
                        display: v.Q.InlineFlex,
                        background: v.m.Overlay,
                        color: v.J.Overlay,
                        borderRadius: v.s.Rounded,
                        alignItems: v.c.Center,
                        justifyContent: v._6.Center
                    }, s.createElement(v._20, {
                        asset: v._21.QuestionMark,
                        width: 10,
                        height: 12
                    })), s.createElement(v.p, {
                        show: this.state.isHovered,
                        direction: v.q.Top,
                        offsetX: "1rem"
                    }, e)))
                }, t
            }(s.Component)),
            q = function(e) {
                return s.createElement(v._7, {
                    alignItems: v.c.Center,
                    display: v.Q.Flex,
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(v.P, {
                    type: v._44.H5,
                    bold: !0
                }, e.children), e.infoText && s.createElement(U, {
                    hoverText: e.infoText
                }))
            },
            z = n("dPMn"),
            G = n("FeZP"),
            H = n("xygp"),
            Q = n("vTHh"),
            J = 3,
            K = function(e) {
                return e
            };

        function Y(e) {
            var t = e.streamSessions,
                n = e.channelName,
                a = e.urlStore;
            if (t.isLoading) return s.createElement(v._7, {
                margin: {
                    top: 3,
                    bottom: 1
                }
            }, s.createElement(v._13, {
                height: 448
            }));
            var r = Object(H.a)(t.sessions.map(function(e) {
                    return e.videoPlayInternalTwitchReferrers
                })),
                i = Object(H.a)(t.sessions.map(function(e) {
                    return e.videoPlayInternalChannelsReferrers
                })),
                o = Object(H.a)(t.sessions.map(function(e) {
                    return e.videoPlayExternalReferrers
                })),
                c = s.createElement(z.a, null);
            return (r.totals || i.totals || o.totals) && (c = s.createElement(s.Fragment, null, s.createElement(v._30, {
                borderBottom: !0,
                padding: {
                    bottom: 1
                }
            }, s.createElement(Q.a, {
                referrals: r.items.slice(0, J),
                totals: r.totals,
                translationFunc: W.b,
                title: Object(l.d)("Twitch", "ChannelAnalyticsReferralPanel")
            }), s.createElement(Q.a, {
                referrals: i.items.slice(0, J),
                totals: i.totals,
                translationFunc: K,
                title: Object(l.d)("Channels", "ChannelAnalyticsReferralPanel")
            }), s.createElement(Q.a, {
                referrals: o.items.slice(0, J),
                totals: o.totals,
                translationFunc: W.a,
                title: Object(l.d)("External", "ChannelAnalyticsReferralPanel")
            })), s.createElement(G.a, {
                message: Object(l.d)("View details", "ChannelAnalyticsReferralPanel"),
                url: "/" + n + "/dashboard/channel-analytics/referrals" + a.searchStringWith()
            }))), s.createElement(v._7, {
                margin: {
                    top: 3,
                    bottom: 1
                }
            }, s.createElement(q, null, Object(l.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), s.createElement(v._30, {
                elevation: 1,
                background: v.m.Base
            }, c))
        }
        var X = n("jqvb"),
            Z = (n("MXAS"), function(e) {
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
                    return s.createElement("div", {
                        className: "breakdown-card-row",
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, s.createElement(v._30, {
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: v._14.Relative
                    }, s.createElement(v._7, {
                        display: v.Q.Flex,
                        justifyContent: v._6.Between
                    }, s.createElement(v._7, {
                        display: v.Q.Flex,
                        alignItems: v.c.Center
                    }, s.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), s.createElement(v._7, {
                        margin: {
                            left: 1
                        }
                    }, s.createElement(v.P, {
                        type: v._44.H5
                    }, this.props.title))), s.createElement(v._7, {
                        textAlign: v._40.Right
                    }, s.createElement(v.P, {
                        type: v._44.H5,
                        bold: !0
                    }, this.props.revenue), s.createElement(v.P, {
                        type: v._44.H6,
                        color: v.J.Alt2
                    }, Object(l.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? s.createElement(v.p, {
                        show: !0,
                        direction: v.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(s.Component)),
            $ = function(e) {
                return Object(l.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            ee = function(e) {
                return s.createElement(v._7, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, s.createElement("table", null, s.createElement("thead", null, s.createElement("tr", null, s.createElement("td", null, s.createElement(v._7, {
                    padding: {
                        right: 2
                    }
                }, s.createElement(v.P, {
                    bold: !0
                }, Object(l.d)("Subscription", "ChannelAnalyticsPaidSubs")))), s.createElement("td", null, s.createElement(v._7, {
                    padding: {
                        right: 2
                    }
                }, s.createElement(v.P, {
                    bold: !0
                }, Object(l.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), s.createElement("td", null, s.createElement(v._7, {
                    padding: {
                        right: 2
                    }
                }, s.createElement(v.P, {
                    bold: !0
                }, Object(l.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), s.createElement("tbody", null, e.subCounts.streams.twitchSubscriptionProducts.map(function(t, n) {
                    return s.createElement(ne, {
                        key: n,
                        tier: $(t.defaultPrice),
                        subscribers: Object(l.e)(t.total),
                        revenue: function(e, t) {
                            var n = t.twitchSubscriptionProducts.filter(function(t) {
                                return e === t.productID
                            })[0];
                            if (!n) return Object(l.e)(0, {
                                style: "currency",
                                currency: "USD"
                            });
                            return Object(l.e)(n.total, {
                                style: "currency",
                                currency: "USD"
                            })
                        }(t.productID, e.revenue.streams)
                    })
                }))))
            };
        var te, ne = function(e) {
                return s.createElement("tr", null, s.createElement("td", null, s.createElement(v.P, null, e.tier)), s.createElement("td", null, s.createElement(v.P, null, e.subscribers)), s.createElement("td", null, s.createElement(v.P, null, e.revenue)))
            },
            ae = (n("JczT"), {
                "data-test-selector": "total-revenue"
            }),
            re = function(e) {
                if (e.channel.role === S.d.None) return null;
                if (e.revenue.isLoading) return s.createElement(v._7, {
                    margin: {
                        top: 3
                    }
                }, s.createElement(v._13, {
                    height: 448
                }));
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams,
                    r = e.channel.role === S.d.Affiliate ? Object(l.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 60 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel") : Object(l.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 45 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel"),
                    i = s.createElement(z.a, null);
                return n.getTotalAmountAllStreams() && (i = s.createElement(s.Fragment, null, s.createElement(se, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), s.createElement(v._7, {
                    padding: {
                        top: 2,
                        bottom: 1
                    }
                }, s.createElement(v._7, {
                    textAlign: v._40.Right,
                    padding: {
                        x: 2
                    }
                }, s.createElement(v.P, {
                    type: v._44.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(l.d)("Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel"))), s.createElement(v._7, null, s.createElement(Z, {
                    title: Object(l.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ie(n.twitchSubscriptions.total),
                    lastRevenue: ie(a.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : s.createElement(ee, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), s.createElement(Z, {
                    title: Object(l.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ie(n.primeSubscriptions.total),
                    lastRevenue: ie(a.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), s.createElement(Z, {
                    title: Object(l.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ie(n.ads.total),
                    lastRevenue: ie(a.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), s.createElement(Z, {
                    title: Object(l.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ie(n.bits.total),
                    lastRevenue: ie(a.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), s.createElement(Z, {
                    title: Object(l.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ie(n.gameCommerce.total),
                    lastRevenue: ie(a.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), s.createElement(Z, {
                    title: Object(l.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ie(n.extensions.total),
                    lastRevenue: ie(a.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }))))), s.createElement(v._7, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, s.createElement(q, {
                    infoText: r
                }, Object(l.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), s.createElement(v._30, {
                    elevation: 1,
                    background: v.m.Base
                }, i))
            },
            se = function(e) {
                return s.createElement(v._7, r.__assign({
                    textAlign: v._40.Center,
                    padding: {
                        y: 2
                    }
                }, ae), s.createElement(v._7, {
                    display: v.Q.Flex,
                    justifyContent: v._6.Center
                }, s.createElement(v.P, {
                    type: v._44.H2
                }, Object(X.a)(e.totalAmount, function(e, t) {
                    switch (e.type) {
                        case "currency":
                            return s.createElement(v._1, {
                                key: t,
                                display: v.Q.InlineBlock,
                                padding: {
                                    top: .5,
                                    right: .5
                                },
                                verticalAlign: 0 === t ? v._54.TextTop : v._54.Baseline
                            }, s.createElement(v.P, {
                                color: v.J.Alt2,
                                fontSize: v.U.Size6,
                                type: v._44.Span
                            }, e.value));
                        case "integer":
                        case "group":
                            return s.createElement(v.P, {
                                key: t,
                                type: v._44.Span,
                                bold: !0
                            }, e.value);
                        case "decimal":
                        case "fraction":
                            return s.createElement(v.P, {
                                key: t,
                                type: v._44.Span,
                                fontSize: v.U.Size6,
                                bold: !0
                            }, e.value);
                        default:
                            return s.createElement(v.P, {
                                key: t,
                                type: v._44.Span,
                                bold: !0
                            }, e.value)
                    }
                }, function(e) {
                    return s.createElement(v.P, {
                        key: "key",
                        type: v._44.Span,
                        bold: !0
                    }, e)
                }))), s.createElement(v.P, {
                    type: v._44.H6
                }, Object(l.d)("Total Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            ie = function(e) {
                return Object(l.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            },
            oe = {
                "data-test-selector": "cancel-button"
            },
            le = {
                "data-test-selector": "send-email-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(te || (te = {}));
        var ce, ue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleSendEmail = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: te.InFlight
                                        }), e = "/api/channels/" + this.props.channelLogin + "/subscriber_list_email", [4, Object(_.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                on_site: "1"
                                            }
                                        })];
                                    case 1:
                                        return (t = n.sent()).isError() ? (this.setState({
                                            requestState: te.Failed
                                        }), [2]) : (this.setState({
                                            emailAddress: t.body.message.substring(20),
                                            requestState: te.Success
                                        }), [2])
                                }
                            })
                        })
                    }, n.state = {
                        emailAddress: "",
                        requestState: te.Pending
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = s.createElement(v.P, {
                            color: v.J.Error
                        }, Object(l.d)("Oops, something went wrong. Please try again.", "ChannelAnalyticsEmailSubsList")),
                        t = s.createElement(s.Fragment, null, s.createElement(v._30, {
                            borderBottom: !0
                        }, s.createElement(v._7, {
                            padding: {
                                y: 2
                            }
                        }, s.createElement(v.P, {
                            color: v.J.Alt2
                        }, Object(l.d)("Do you wish to be emailed a list of your active subscribers?", "ChannelAnalyticsEmailSubsList")), s.createElement(v.P, {
                            color: v.J.Alt2
                        }, Object(l.d)("An email with a CSV attachment will be sent to you.", "ChannelAnalyticsEmailSubsList")), this.state.requestState === te.Failed && e)), s.createElement(v._7, {
                            display: v.Q.Flex,
                            justifyContent: v._6.Center,
                            padding: {
                                top: 2
                            }
                        }, s.createElement(v._7, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(v.u, r.__assign({}, oe, {
                            onClick: this.props.onClose,
                            type: v.A.Text
                        }), Object(l.d)("Cancel", "ChannelAnalyticsEmailSubsList"))), s.createElement(v._7, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(v.u, r.__assign({}, le, {
                            disabled: this.state.requestState === te.InFlight,
                            onClick: this.handleSendEmail
                        }), this.state.requestState === te.InFlight ? Object(l.d)("Sending Email...", "ChannelAnalyticsEmailSubsList") : Object(l.d)("Send Me Email", "ChannelAnalyticsEmailSubsList"))))),
                        n = s.createElement(s.Fragment, null, s.createElement(v._30, {
                            borderBottom: !0
                        }, s.createElement(v._7, {
                            padding: {
                                y: 2
                            }
                        }, s.createElement(v.P, {
                            color: v.J.Alt2
                        }, Object(l.d)("An email with a CSV attachment is being sent to {email}.", {
                            email: this.state.emailAddress
                        }, "ChannelAnalyticsEmailSubsList")), s.createElement(v.P, {
                            color: v.J.Alt2
                        }, Object(l.d)("This may take several minutes if you have a large number of subscribers.", "ChannelAnalyticsEmailSubsList")))), s.createElement(v._7, {
                            display: v.Q.Flex,
                            justifyContent: v._6.Center,
                            padding: {
                                top: 2
                            }
                        }, s.createElement(v.u, {
                            onClick: this.props.onClose
                        }, Object(l.d)("Close", "ChannelAnalyticsEmailSubsList"))));
                    return s.createElement(s.Fragment, null, s.createElement(v._30, {
                        background: v.m.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, s.createElement(v._30, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, s.createElement(v.P, {
                        type: v._44.H4,
                        color: v.J.Alt
                    }, Object(l.d)("Receive Subscriber List", "ChannelAnalyticsEmailSubsList"))), this.state.requestState === te.Success ? n : t, s.createElement(v._7, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: v._14.Absolute
                    }, s.createElement(v.u, {
                        onClick: this.props.onClose,
                        type: v.A.Text,
                        overlay: !0
                    }, s.createElement(v._20, {
                        asset: v._21.RemoveTag,
                        width: 16,
                        height: 16
                    })))))
                }, t
            }(s.Component),
            pe = {
                "data-test-selector": "cancel-button"
            },
            de = {
                "data-test-selector": "send-email-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(ce || (ce = {}));
        var me = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleSendEmail = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: ce.InFlight
                                        }), [4, Object(_.c)({
                                            path: "/api/channels/" + this.props.channelLogin + "/subscriber_emails",
                                            method: "POST",
                                            body: {
                                                body: this.state.body,
                                                title: this.state.title,
                                                on_site: "1"
                                            }
                                        })];
                                    case 1:
                                        return e.sent().isError() ? (this.setState({
                                            requestState: ce.Failed
                                        }), [2]) : (this.setState({
                                            requestState: ce.Success
                                        }), [2])
                                }
                            })
                        })
                    }, n.handleBodyChange = function(e) {
                        n.setState({
                            body: e.currentTarget.value
                        })
                    }, n.handleTitleChange = function(e) {
                        n.setState({
                            title: e.currentTarget.value
                        })
                    }, n.state = {
                        body: "",
                        requestState: ce.Pending,
                        title: ""
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = s.createElement(v.P, {
                            color: v.J.Error
                        }, Object(l.d)("Oops, something went wrong. Please try again.", "ChannelAnalyticsEmailSubs")),
                        t = s.createElement(s.Fragment, null, s.createElement(v._30, {
                            borderBottom: !0
                        }, s.createElement(v._7, {
                            padding: {
                                y: 2
                            }
                        }, s.createElement(v.P, {
                            color: v.J.Alt2
                        }, Object(l.d)("Use this form to send a message to all {subscribers,number} of your active subscribers.", {
                            subscribers: this.props.totalSubscribers
                        }, "ChannelAnalyticsEmailSubs")), s.createElement(v._7, {
                            padding: {
                                top: 2,
                                bottom: 1
                            }
                        }, s.createElement(v.V, {
                            label: Object(l.d)("Message Title", "ChannelAnalyticsEmailSubs")
                        }, s.createElement(v._3, {
                            type: v._4.Text,
                            onChange: this.handleTitleChange
                        }))), s.createElement(v._7, {
                            padding: {
                                y: 1
                            }
                        }, s.createElement(v.V, {
                            label: Object(l.d)("Message Body", "ChannelAnalyticsEmailSubs")
                        }, s.createElement(v._41, {
                            onChange: this.handleBodyChange,
                            rows: 6
                        }))), this.state.requestState === ce.Failed && e)), s.createElement(v._7, {
                            display: v.Q.Flex,
                            justifyContent: v._6.Center,
                            padding: {
                                top: 2
                            }
                        }, s.createElement(v._7, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(v.u, r.__assign({}, pe, {
                            onClick: this.props.onClose,
                            type: v.A.Text
                        }), Object(l.d)("Cancel", "ChannelAnalyticsEmailSubs"))), s.createElement(v._7, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(v.u, r.__assign({}, de, {
                            disabled: "" === this.state.body || "" === this.state.title || this.state.requestState === ce.InFlight,
                            onClick: this.handleSendEmail
                        }), this.state.requestState === ce.InFlight ? Object(l.d)("Sending Email...", "ChannelAnalyticsEmailSubs") : Object(l.d)("Send Email", "ChannelAnalyticsEmailSubs"))))),
                        n = s.createElement(s.Fragment, null, s.createElement(v._30, {
                            borderBottom: !0
                        }, s.createElement(v._7, {
                            padding: {
                                y: 2
                            }
                        }, s.createElement(v.P, {
                            color: v.J.Alt2
                        }, Object(l.d)("Your email has been sent!", "ChannelAnalyticsEmailSubs")))), s.createElement(v._7, {
                            display: v.Q.Flex,
                            justifyContent: v._6.Center,
                            padding: {
                                top: 2
                            }
                        }, s.createElement(v.u, {
                            onClick: this.props.onClose
                        }, Object(l.d)("Close", "ChannelAnalyticsEmailSubs"))));
                    return s.createElement(s.Fragment, null, s.createElement(v._30, {
                        background: v.m.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, s.createElement(v._30, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, s.createElement(v.P, {
                        type: v._44.H4,
                        color: v.J.Alt
                    }, Object(l.d)("Send Email to Subscribers", "ChannelAnalyticsEmailSubs"))), this.state.requestState === ce.Success ? n : t, s.createElement(v._7, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: v._14.Absolute
                    }, s.createElement(v.u, {
                        type: v.A.Text,
                        onClick: this.props.onClose,
                        overlay: !0
                    }, s.createElement(v._20, {
                        asset: v._21.RemoveTag,
                        width: 16,
                        height: 16
                    })))))
                }, t
            }(s.Component),
            he = n("RH2O"),
            ge = n("+8VM"),
            be = n("V5M+"),
            fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t,
                            n = function(t) {
                                function n() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return r.__extends(n, t), n.prototype.render = function() {
                                    return e.props.triggerModal(e.closeModal)
                                }, n
                            }(s.Component);
                        t.props.showModal(n, {})
                    }, t.closeModal = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(s.Fragment, null, this.props.children(this.openModal), s.createElement(ge.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(s.Component);
        var Se = Object(he.b)(null, function(e) {
                return Object(o.b)({
                    showModal: be.d,
                    closeModal: be.c
                }, e)
            })(fe),
            ve = (n("G70b"), {
                1000: function() {
                    return Object(l.d)("Tier 1 subs", "ChannelAnalyticsSubscribersPanel")
                },
                2000: function() {
                    return Object(l.d)("Tier 2 subs", "ChannelAnalyticsSubscribersPanel")
                },
                3000: function() {
                    return Object(l.d)("Tier 3 subs", "ChannelAnalyticsSubscribersPanel")
                }
            }),
            ye = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.emailButtons = function(e) {
                        return s.createElement(v._30, {
                            display: v.Q.Flex
                        }, s.createElement(Se, {
                            triggerModal: function(e) {
                                return s.createElement(ue, {
                                    channelLogin: n.props.channel.name,
                                    onClose: e
                                })
                            }
                        }, function(e) {
                            return s.createElement(G.a, {
                                message: Object(l.d)("E-mail me my subscriber list", "ChannelAnalyticsSubscribersPanel"),
                                onClick: e
                            })
                        }), s.createElement(Se, {
                            triggerModal: function(t) {
                                return s.createElement(me, {
                                    channelLogin: n.props.channel.name,
                                    totalSubscribers: e,
                                    onClose: t
                                })
                            }
                        }, function(e) {
                            return s.createElement(v._30, {
                                borderLeft: !0,
                                flexGrow: 1
                            }, s.createElement(G.a, {
                                message: Object(l.d)("Send e-mail to my subs", "ChannelAnalyticsSubscribersPanel"),
                                onClick: e
                            }))
                        }))
                    }, n.subscriptionRows = function() {
                        return n.state.subscriptions.map(function(e) {
                            return s.createElement(_e, {
                                name: ve[e.plan](),
                                revSplit: e.revenueSplit + " / " + (100 - e.revenueSplit),
                                score: Object(l.e)(e.score),
                                count: Object(l.e)(e.count),
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
                    if (this.props.channel.role === S.d.None) return null;
                    if (this.state.isLoading) return s.createElement(v._7, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, s.createElement(v._13, {
                        height: 448
                    }));
                    var e = s.createElement(z.a, null),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        n = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return this.state.subscriptions.length && (e = s.createElement(s.Fragment, null, s.createElement(v._30, {
                        borderBottom: !0,
                        padding: {
                            top: 1,
                            bottom: 2
                        }
                    }, s.createElement(Ce, null), this.subscriptionRows(), s.createElement(_e, {
                        name: Object(l.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                        score: Object(l.e)(t),
                        count: Object(l.e)(n)
                    })), this.emailButtons(n))), s.createElement(v._7, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, s.createElement(q, null, Object(l.d)("How many subscribers do I have today?", "ChannelAnalyticsSubscribersPanel")), s.createElement(v._30, {
                        elevation: 1,
                        background: v.m.Base
                    }, e))
                }, t.prototype.fetchSubscriptions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel.role === S.d.None ? [2, this.setState({
                                        isLoading: !1,
                                        subscriptions: []
                                    })] : (this.setState({
                                        isLoading: !0,
                                        subscriptions: []
                                    }), [4, E(this.props.channel.name)]);
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isLoading: !1
                                    }), e.isError ? [2] : (this.setState({
                                        subscriptions: e.subscriptions
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(s.Component),
            Ce = function() {
                return s.createElement(v._30, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: v._14.Relative
                }, s.createElement(v.X, null, s.createElement(v.K, {
                    cols: 8
                }, s.createElement(v._7, {
                    textAlign: v._40.Right
                }, s.createElement(v.P, {
                    type: v._44.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(l.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), s.createElement(v.K, {
                    cols: 2
                }, s.createElement(v._7, {
                    textAlign: v._40.Right
                }, s.createElement(v.P, {
                    type: v._44.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(l.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), s.createElement(v.K, {
                    cols: 2
                }, s.createElement(v._7, {
                    textAlign: v._40.Right
                }, s.createElement(v.P, {
                    type: v._44.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(l.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            },
            _e = function(e) {
                return s.createElement(v._30, {
                    className: "subscribers-panel-row",
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: v._14.Relative
                }, s.createElement(v.X, null, s.createElement(v.K, {
                    cols: 6
                }, s.createElement(v._7, {
                    textAlign: v._40.Left
                }, s.createElement(v.P, {
                    type: v._44.H5,
                    color: v.J.Alt
                }, e.name))), s.createElement(v.K, {
                    cols: 2
                }, s.createElement(v._7, {
                    textAlign: v._40.Right
                }, s.createElement(v.P, {
                    type: v._44.H5
                }, e.revSplit))), s.createElement(v.K, {
                    cols: 2
                }, s.createElement(v._7, {
                    textAlign: v._40.Right
                }, s.createElement(v.P, {
                    type: v._44.H5,
                    bold: !0
                }, e.score))), s.createElement(v.K, {
                    cols: 2
                }, s.createElement(v._7, {
                    textAlign: v._40.Right
                }, s.createElement(v.P, {
                    type: v._44.H5,
                    bold: !0
                }, e.count)))))
            },
            Ee = n("a+9f"),
            we = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return s.createElement(v._7, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, s.createElement(v._13, {
                    height: 448
                }));
                var a = s.createElement(z.a, null),
                    r = Object(l.d)("View details", "ChannelAnalyticsTopClipsPanel");
                return n.clips.length && (a = s.createElement(s.Fragment, null, s.createElement(Oe, {
                    clipsAttrs: n
                }), t ? s.createElement(G.a, {
                    message: r,
                    url: "/" + t + "/manager/clips/channel"
                }) : s.createElement("p", null, r))), s.createElement(v._7, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, s.createElement(q, null, Object(l.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), s.createElement(v._30, {
                    elevation: 1,
                    background: v.m.Base
                }, a))
            },
            Oe = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(s.createElement(v._30, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, s.createElement(v._13, {
                        height: 50
                    })));
                return s.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return s.createElement(Ee.a, r.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            Te = function(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var n = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(n, e)
                }
                var a = document.createElement("a"),
                    r = encodeURIComponent(t);
                void 0 === a.download ? a.href = "data:attachment/csv;charset=utf-8," + r : (a.href = "data:text/csv;charset=utf-8," + r, a.download = e), a.target = "_blank", a.setAttribute("style", "visibility: hidden"), document.body.appendChild(a), a.click(), document.body.removeChild(a)
            };

        function Ae(e) {
            for (var t = [], n = e[0].length, a = function(n) {
                    t.push(e.map(function(e) {
                        return e[n]
                    }))
                }, r = 0; r < n; r++) a(r);
            return t
        }
        var je = function(e, t) {
                var n = e.revenue,
                    a = e.subscriptions,
                    r = [
                        [Object(l.d)("Date", "CSVExporterRevenue")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(l.d)("Sub Revenue", "CSVExporterRevenue")].concat(t.sum(n.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Twitch Prime Revenue", "CSVExporterRevenue")].concat(t.sum(n.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Bits Revenue", "CSVExporterRevenue")].concat(t.sum(n.bits.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Ad Revenue", "CSVExporterRevenue")].concat(t.sum(n.ads.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Game Sales Revenue", "CSVExporterRevenue")].concat(t.sum(n.gameCommerce.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Extensions Revenue", "CSVExporterRevenue")].concat(t.sum(n.extensions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Twitch Prime Subs", "CSVExporterRevenue")].concat(t.sum(a.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        })), [Object(l.d)("Subs", "CSVExporterRevenue")].concat(t.sum(a.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    ].concat(a.twitchSubscriptionProducts.map(function(e) {
                        return [Object(l.d)("{price} Sub", {
                            price: $(e.defaultPrice)
                        }, "CSVExporterRevenue")].concat(t.sum(e.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    }));
                return {
                    fileName: t.isByDay ? Object(l.d)("Revenue by day {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : t.isByWeek ? Object(l.d)("Revenue by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : Object(l.d)("Revenue by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue"),
                    csv: Ae(r).join("\n")
                }
            },
            De = function(e, t) {
                return t.isByDay ? function(e, t) {
                    var n = [
                        [Object(l.d)("Start Time", "CSVExporterStreamSessions"), Object(l.d)("End Time", "CSVExporterStreamSessions"), Object(l.d)("Average Viewers", "CSVExporterStreamSessions"), Object(l.d)("Max. Viewers", "CSVExporterStreamSessions"), Object(l.d)("Total Views", "CSVExporterStreamSessions"), Object(l.d)("Unique Views", "CSVExporterStreamSessions"), Object(l.d)("Minutes Watched", "CSVExporterStreamSessions"), Object(l.d)("New Followers", "CSVExporterStreamSessions"), Object(l.d)("Chatters", "CSVExporterStreamSessions"), Object(l.d)("Chat Messages", "CSVExporterStreamSessions"), Object(l.d)("Clips Created", "CSVExporterStreamSessions"), Object(l.d)("Clip Views", "CSVExporterStreamSessions"), Object(l.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessions"), Object(l.d)("Minutes Streamed", "CSVExporterStreamSessions")]
                    ];
                    return e.forEach(function(e) {
                        n.push(['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + e.avgViewerCount, "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialLengthTotal / 60, "" + Object(F.a)(e.interval)])
                    }), {
                        fileName: Object(l.d)("Stream Sessions {start, date} to {end, date}.csv", {
                            start: t.start,
                            end: t.end
                        }, "CSVExporterStreamSessions"),
                        csv: n.join("\n")
                    }
                }(e, t.interval) : function(e, t) {
                    var n, a = [
                        [Object(l.d)("Date", "CSVExporterStreamSessionsAggregated")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(l.d)("Average Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(F.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Max. Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.max(e, function(e) {
                            return {
                                value: e.maxViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Total Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalViewers,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Average Unique Views", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(F.a)(e.interval),
                                value: e.uniqueViewers,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Minutes Watched", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalMinutesWatched,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("New Followers", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Average Unique Chatters", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(F.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Chat Messages", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Clips Created", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipCreatesTotal,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Clip Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipPlaysTotal,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.commercialLengthTotal / 60,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Minutes Streamed", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: Object(F.a)(e.interval),
                                date: e.interval.start
                            }
                        }))
                    ];
                    n = t.isByWeek ? Object(l.d)("StreamSessions by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated") : Object(l.d)("StreamSessions by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated");
                    return {
                        fileName: n,
                        csv: Ae(a).join("\n")
                    }
                }(e, t)
            };
        var ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.download = function() {
                        var e;
                        t.props.dataGroup === w.b.StreamSummaries ? (Object(x.b)({
                            action: x.a.ExportDataStream
                        }), e = De(t.props.analyticsResponse.streamSessions.sessions, t.props.aggregation)) : (Object(x.b)({
                            action: x.a.ExportDataRevenue
                        }), e = je({
                            revenue: t.props.analyticsResponse.revenue.streams,
                            subscriptions: t.props.analyticsResponse.subCounts.streams
                        }, t.props.aggregation)), Te(e.fileName, e.csv)
                    }, t.isDataAvailable = function() {
                        return t.props.dataGroup === w.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : s.createElement(G.a, {
                        disabled: !this.isDataAvailable(),
                        message: Object(l.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                        onClick: this.download
                    })
                }, t
            }(s.Component),
            xe = n("IJpv"),
            Re = function() {
                function e(e, t) {
                    var n = this;
                    switch (this.formatDateFromLabel = function(e) {
                        return n.formatDate(new Date(Number(e)))
                    }, this.formatShortDateFromLabel = function(e) {
                        return n.formatShortDate(new Date(Number(e)))
                    }, this.aggregationInterval = e, this.interval = t, this.aggregationInterval) {
                        case xe.a.Day:
                            this.addInterval = h.addDays, this.startOf = h.startOfDay, this.formatDate = function(e) {
                                return Object(l.c)(e, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case xe.a.Week:
                            this.addInterval = h.addWeeks, this.startOf = h.startOfWeek, this.formatDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                }) + " – " + Object(l.c)(Object(h.endOfWeek)(e), {
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case xe.a.Month:
                            this.addInterval = h.addMonths, this.startOf = h.startOfMonth, this.formatDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    year: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(l.c)(e, {
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
                        a = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            s = r.value,
                            i = r.date,
                            o = n.startOf(i).getTime(),
                            l = a.get(o) || 0;
                        a.set(o, l + s)
                    }), this.datesAsNumbers.map(function(e) {
                        return a.get(e) || 0
                    })
                }, e.prototype.average = function(e, t) {
                    var n = this,
                        a = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            s = r.value,
                            i = r.date,
                            o = n.startOf(i).getTime(),
                            l = a.get(o);
                        l || (l = {
                            total: 0,
                            count: 0
                        }, a.set(o, l)), l.count += 1, l.total += s
                    }), this.datesAsNumbers.map(function(e) {
                        var t = a.get(e) || {
                            total: 0,
                            count: 1
                        };
                        return t.total / t.count
                    })
                }, e.prototype.weightedAverage = function(e, t) {
                    var n = this,
                        a = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            s = r.weight,
                            i = r.value,
                            o = r.date,
                            l = n.startOf(o).getTime(),
                            c = a.get(l);
                        c || (c = {
                            totalWeight: 0,
                            weightedValue: 0
                        }, a.set(l, c)), c.totalWeight += s, c.weightedValue += s * i
                    }), this.datesAsNumbers.map(function(e) {
                        var t = a.get(e) || {
                            totalWeight: 0,
                            weightedValue: 0
                        };
                        return t.weightedValue / t.totalWeight
                    })
                }, e.prototype.max = function(e, t) {
                    var n = this,
                        a = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            s = r.value,
                            i = r.date,
                            o = n.startOf(i).getTime(),
                            l = a.get(o) || 0;
                        a.set(o, Math.max(l, s))
                    }), this.datesAsNumbers.map(function(e) {
                        return a.get(e) || 0
                    })
                }, Object.defineProperty(e.prototype, "isByDay", {
                    get: function() {
                        return this.aggregationInterval === xe.a.Day
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByWeek", {
                    get: function() {
                        return this.aggregationInterval === xe.a.Week
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByMonth", {
                    get: function() {
                        return this.aggregationInterval === xe.a.Month
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
            Pe = function() {
                function e(e) {
                    this.defaultTopStats = [], this.topStatsKeys = [], this.channel = e, this.defaultTopStats = O(this.channel.role), this.topStatsKeys = T(this.channel.role), this.statsStorageKey = this.channel.name + "-top"
                }
                return e.prototype.store = function(e) {
                    var t;
                    l.l.set("channel-analytics-stats", r.__assign({}, this.storedStats(), ((t = {})[this.statsStorageKey] = e, t)))
                }, e.prototype.storedStats = function() {
                    return l.l.get("channel-analytics-stats", ((e = {})[this.statsStorageKey] = [], e));
                    var e
                }, e.prototype.getValidStoredStats = function() {
                    var e = this,
                        t = this.storedStats(),
                        n = Array.isArray(t[this.statsStorageKey]) ? t[this.statsStorageKey] : [],
                        a = [],
                        r = this.topStatsKeys.slice();
                    return n.forEach(function(t) {
                        if (e.topStatsKeys.includes(t) && !a.includes(t)) return r.splice(r.indexOf(t), 1), a.push(t)
                    }), a.length ? a.length < w.d && (a = a.concat(r)) : a = this.defaultTopStats, a.slice(0, w.d)
                }, e
            }(),
            Fe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.defaultTopStats = [], n.topStatsKeys = [], n.handleUpdateStat = function(e, t) {
                        n.state.selectedStats.indexOf(e) !== t && n.setState(function(a) {
                            var r = a.selectedStats.slice(),
                                s = a.selectedStats.indexOf(e);
                            return r[t] = e, -1 !== s && (r[s] = n.getRemainingStats(r)[0]), n.statsStorage.store(r), n.props.onSelect(e, t, r), {
                                selectedStats: r
                            }
                        })
                    }, n.statsStorage = new Pe(n.props.channel), n.defaultTopStats = O(n.props.channel.role), n.topStatsKeys = T(n.props.channel.role), n.state = {
                        selectedStats: n.defaultTopStats
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        selectedStats: this.statsStorage.getValidStoredStats()
                    })
                }, t.prototype.render = function() {
                    return this.props.children({
                        stats: this.state.selectedStats.map(function(e) {
                            return w.g[e]
                        }),
                        onUpdateStat: this.handleUpdateStat
                    })
                }, t.prototype.getRemainingStats = function(e) {
                    return this.topStatsKeys.filter(function(t) {
                        return !e.includes(t)
                    })
                }, t
            }(s.Component),
            Ve = {
                "data-test-selector": "stats-dropdown-title"
            },
            Le = {
                "data-test-selector": "date-picker-toggle"
            },
            Me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return s.createElement(v._7, {
                        position: v._14.Relative
                    }, s.createElement(R.a, {
                        control: function(e) {
                            var t = e.toggle;
                            return s.createElement(v._7, {
                                display: v.Q.Flex,
                                fullHeight: !0
                            }, s.createElement(v.v, r.__assign({
                                ariaLabel: Object(l.d)("Select top statistic", "ChannelAnalyticsDropdownAria"),
                                icon: v._21.GlyphArrUpDown,
                                onClick: t,
                                size: v.w.Small
                            }, Le)))
                        }
                    }, function(t) {
                        var n = t.close;
                        return s.createElement(v.p, {
                            show: !0,
                            direction: v.q.BottomRight,
                            tailOffset: 5
                        }, e.props.availableStats.map(function(t) {
                            return s.createElement(v._5, r.__assign({
                                onClick: Object(g.compose)(n, e.props.onUpdateStat.bind(e, t, e.props.index)),
                                key: t,
                                alpha: !0
                            }, Ve), s.createElement(v._7, {
                                padding: 1
                            }, s.createElement(v.P, {
                                color: v.J.Link
                            }, w.g[t].title())))
                        }))
                    }))
                }, t
            }(s.Component),
            Ne = {
                "data-test-selector": "current-chart"
            },
            Be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.chart = function(e) {
                        return s.createElement(e.definition.Chart, r.__assign({}, Ne, {
                            analyticsResponse: t.props.analyticsResponse,
                            aggregation: e.aggregation
                        }))
                    }, t.handleAggregationChange = function(e) {
                        t.props.onAggregationSelect(e.currentTarget.value)
                    }, t.isDataAvailable = function(e) {
                        return e === w.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                    }, t.handleTabClick = function(e) {
                        return t.props.onTabSelect(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = new Re(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params),
                        n = this.cappedIndex;
                    return s.createElement(Fe, {
                        channel: this.props.channel,
                        onSelect: this.props.onStatsSelect
                    }, function(a) {
                        var r = a.stats,
                            i = a.onUpdateStat;
                        return s.createElement(v._30, {
                            background: v.m.Base,
                            elevation: 1
                        }, s.createElement(v._32, null, r.map(function(t, a) {
                            var r = t.Tab;
                            return s.createElement(r, {
                                analyticsResponse: e.props.analyticsResponse,
                                linkTo: e.props.urlStore.buildPathWithParams({
                                    topStatsIndex: a
                                }),
                                isActive: n === a,
                                key: a,
                                onClick: e.handleTabClick
                            }, s.createElement(Me, {
                                availableStats: T(e.props.channel.role),
                                index: a,
                                onUpdateStat: i
                            }))
                        })), s.createElement(v._30, {
                            padding: 2,
                            borderBottom: !0
                        }, s.createElement(v._7, {
                            display: v.Q.Flex,
                            flexDirection: v.S.RowReverse,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement("div", null, s.createElement(v._26, {
                            disabled: !e.isDataAvailable(r[n].dataGroup),
                            onChange: e.handleAggregationChange,
                            value: e.props.urlStore.params.topStatsAggregation
                        }, s.createElement("option", {
                            value: xe.a.Day
                        }, Object(l.d)("Day", "ChannelAnalyticsTopStats")), s.createElement("option", {
                            value: xe.a.Week
                        }, Object(l.d)("Week", "ChannelAnalyticsTopStats")), s.createElement("option", {
                            value: xe.a.Month
                        }, Object(l.d)("Month", "ChannelAnalyticsTopStats"))))), s.createElement(e.chart, {
                            definition: r[n],
                            aggregation: t
                        })), s.createElement(ke, {
                            analyticsResponse: e.props.analyticsResponse,
                            aggregation: t,
                            dataGroup: r[n].dataGroup
                        }))
                    })
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        var e = w.d - 1;
                        return Math.min(e, this.props.urlStore.params.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            Ie = (n("G6h4"), {
                "data-test-selector": "card-image"
            }),
            We = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return s.createElement(v._7, {
                    className: "stream-card-row"
                }, s.createElement(v._5, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                    onClick: Ue
                }, s.createElement(v._30, {
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, s.createElement(v.B, {
                    row: !0
                }, s.createElement(v.D, r.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: v.E.Size8,
                    aspect: v.k.Aspect16x9
                }, Ie)), s.createElement(v.C, {
                    overflow: v._10.Hidden
                }, s.createElement(v._7, {
                    display: v.Q.Flex,
                    flexGrow: 1,
                    alignItems: v.c.Center,
                    justifyContent: v._6.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, s.createElement(v._7, {
                    display: v.Q.Flex,
                    flexDirection: v.S.Column,
                    ellipsis: !0
                }, s.createElement(v.P, {
                    color: v.J.Base,
                    type: v._44.H5,
                    ellipsis: !0
                }, Object(l.d)("{start} - {end, time, short}", {
                    start: Object(l.c)(t.interval.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.interval.end
                }, "ChannelAnalyticsStreamCard")), s.createElement(v.P, {
                    color: v.J.Alt2,
                    type: v._44.Span,
                    ellipsis: !0
                }, t.startChannelStatus)))), s.createElement(v._7, {
                    display: v.Q.Flex,
                    flexGrow: 1,
                    justifyContent: v._6.End,
                    padding: {
                        left: 2
                    }
                }, s.createElement(v.P, {
                    bold: !0,
                    fontSize: v.U.Size5,
                    color: v.J.Alt,
                    type: v._44.Span
                }, Object(l.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))
            };

        function Ue() {
            Object(x.b)({
                action: x.a.TopStreamsStream
            })
        }
        var qe, ze = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers"
        }(qe || (qe = {}));
        var Ge, He = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.sortDropdown = function() {
                    return s.createElement(v._26, {
                        value: n.state.sortType,
                        onChange: n.handleSortTypeChange
                    }, s.createElement("option", {
                        value: qe.AvgViewers
                    }, Object(l.d)("Average Viewers", "ChannelAnalyticsTopStreamsPanel")), s.createElement("option", {
                        value: qe.NewFollowers
                    }, Object(l.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")))
                }, n.streamsList = function() {
                    return s.createElement(v._7, null, n.sortedStreamSummaries().slice(0, ze).map(function(e, t) {
                        return s.createElement(We, {
                            stream: e,
                            statNum: n.statNumForStreamSummary(e),
                            key: t
                        })
                    }))
                }, n.handleSortTypeChange = function(e) {
                    var t = e.target.value;
                    switch (t) {
                        case qe.NewFollowers:
                            Object(x.b)({
                                action: x.a.TopStreamsSelectNewFollowers
                            });
                            break;
                        case qe.AvgViewers:
                            Object(x.b)({
                                action: x.a.TopStreamsSelectAvgViewers
                            })
                    }
                    n.setState({
                        sortType: t
                    })
                }, n.statNumForStreamSummary = function(e) {
                    switch (n.state.sortType) {
                        case qe.NewFollowers:
                            return e.followersChange;
                        case qe.AvgViewers:
                        default:
                            return e.avgViewerCount
                    }
                }, n.sortedStreamSummaries = function() {
                    var e = n.props.streamSessions.sessions.slice();
                    switch (n.state.sortType) {
                        case qe.NewFollowers:
                            return Object(_.d)(e, [function(e) {
                                return e.followersChange
                            }], [_.a.Descending]);
                        case qe.AvgViewers:
                        default:
                            return Object(_.d)(e, [function(e) {
                                return e.avgViewerCount
                            }], [_.a.Descending])
                    }
                }, n.state = {
                    sortType: qe.AvgViewers
                }, n
            }
            return r.__extends(t, e), t.prototype.render = function() {
                if (this.props.streamSessions.isLoading) return s.createElement(v._7, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, s.createElement(v._13, {
                    height: 448
                }));
                var e = s.createElement(z.a, null);
                return this.props.streamSessions.sessions.length >= 3 && (e = s.createElement(s.Fragment, null, s.createElement(v._7, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    margin: {
                        bottom: .5
                    },
                    display: v.Q.Flex
                }, s.createElement(v._7, {
                    flexGrow: 1
                }, s.createElement(v.P, {
                    type: v._44.H5,
                    bold: !0
                }, Object(l.d)("Top {limit}", {
                    limit: ze
                }, "ChannelAnalyticsTopStreamsPanel"))), s.createElement(v._7, null, this.sortDropdown())), s.createElement(v._7, {
                    padding: {
                        top: 1,
                        bottom: 1
                    }
                }, this.streamsList()))), s.createElement(v._7, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, s.createElement(q, null, Object(l.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")), s.createElement(v._30, {
                    elevation: 1,
                    background: v.m.Base
                }, e))
            }, t
        }(s.Component);
        ! function(e) {
            e.Pageview = "pageview", e.DateSelect = "date_select", e.DateAggregationSelect = "date_aggregation_select", e.TabSelect = "tab_select", e.TabDropdownSelect = "tab_dropdown_select"
        }(Ge || (Ge = {}));
        var Qe = {
                tab_ad_breaks: !1,
                tab_avg_chat_messages: !1,
                tab_avg_chatters: !1,
                tab_avg_unique_viewers: !1,
                tab_avg_viewers: !1,
                tab_clip_views: !1,
                tab_clips_created: !1,
                tab_live_views: !1,
                tab_max_viewers: !1,
                tab_minutes_watched: !1,
                tab_new_followers: !1,
                tab_revenue: !1,
                tab_subscriptions: !1,
                tab_time_streamed: !1
            },
            Je = function(e) {
                return "tab_" + e.replace(/-/g, "_")
            },
            Ke = function(e) {
                return function(e) {
                    return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
                }(e).getTime() / 1e3
            };
        n("T0UN");
        var Ye = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.track = function(e) {
                        var t, a = n.props.urlStore,
                            s = n.dateRangeSelection || "default",
                            i = r.__assign({
                                dateRangeSelection: s,
                                selectedStats: n.statsStorage.getValidStoredStats()
                            }, a.params);
                        t = function(e, t) {
                            var n = t.selectedStats,
                                a = n[t.topStatsIndex],
                                s = {};
                            return n.forEach(function(e) {
                                s[Je(e)] = !0
                            }), r.__assign({
                                action: e,
                                chart: a,
                                date_range_selection: t.dateRangeSelection,
                                date_start: Ke(t.start),
                                date_end: Ke(t.end),
                                date_aggregation: t.topStatsAggregation
                            }, Qe, s)
                        }(e, i), l.n.track(d.SpadeEventType.ChannelAnalyticsTopStatsView, t)
                    }, n.handleSelectStat = function(e, t, a) {
                        n.props.urlStore.replace({
                            topStatsIndex: t
                        }), n.track(Ge.TabDropdownSelect)
                    }, n.handleDateSelect = function(e) {
                        var t = e.start,
                            a = e.end,
                            r = e.id;
                        n.dateRangeSelection = r, n.props.urlStore.replace({
                            start: t,
                            end: a
                        }), n.track(Ge.DateSelect)
                    }, n.handleAggregationSelect = function(e) {
                        n.props.urlStore.replace({
                            topStatsAggregation: e
                        }), n.track(Ge.DateAggregationSelect)
                    }, n.handleTabSelect = function(e) {
                        n.track(Ge.TabSelect)
                    };
                    var a = n.props.channel;
                    return n.statsStorage = new Pe(a), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.track(Ge.Pageview)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.urlStore,
                        n = e.channelAnalyticsResponse,
                        a = e.channel;
                    return s.createElement(I, null, s.createElement(N, {
                        urlStore: t,
                        onDateSelect: this.handleDateSelect
                    }), s.createElement(Be, {
                        channel: a,
                        urlStore: t,
                        analyticsResponse: n,
                        onStatsSelect: this.handleSelectStat,
                        onAggregationSelect: this.handleAggregationSelect,
                        onTabSelect: this.handleTabSelect
                    }), s.createElement(v._30, {
                        className: "channel-analytics-index-page",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        flexWrap: v.T.NoWrap,
                        alignItems: v.c.Stretch,
                        breakpointMedium: {
                            flexDirection: v.S.Row
                        }
                    }, s.createElement(v._7, {
                        className: "channel-analytics-index-page__col",
                        display: v.Q.Flex,
                        flexGrow: 1,
                        flexWrap: v.T.NoWrap,
                        flexDirection: v.S.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, s.createElement(re, {
                        channel: a,
                        revenue: n.revenue,
                        subCounts: n.subCounts
                    }), s.createElement(Y, {
                        streamSessions: n.streamSessions,
                        urlStore: t,
                        channelName: a.name
                    })), s.createElement(v._7, {
                        className: "channel-analytics-index-page__col",
                        display: v.Q.Flex,
                        flexGrow: 1,
                        flexWrap: v.T.NoWrap,
                        flexDirection: v.S.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, s.createElement(ye, {
                        channel: a
                    }), s.createElement(He, {
                        streamSessions: n.streamSessions
                    }), s.createElement(we, {
                        channel: a.name,
                        topClips: n.topClips
                    }))))
                }, t
            }(s.Component),
            Xe = Object(o.d)(Object(m.d)("ChannelAnalyticsIndexPage", {
                destination: p.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: d.PageviewLocation.DashboardChannelAnalytics
            }))(Ye),
            Ze = n("yLtb"),
            $e = (n("lV23"), function(e) {
                return e
            }),
            et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDateSelect = function(e) {
                        var n = e.start,
                            a = e.end;
                        t.setState({
                            startDate: n,
                            endDate: a
                        }, function() {
                            t.props.urlStore.replace({
                                start: n,
                                end: a
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.channelAnalyticsResponse.streamSessions,
                        t = e.isLoading,
                        n = e.sessions,
                        a = Object(H.a)(n.map(function(e) {
                            return e.videoPlayPlatforms
                        })),
                        r = Object(H.a)(n.map(function(e) {
                            return e.videoPlayGeographics
                        })),
                        i = Object(H.a)(n.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        o = Object(H.a)(n.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        c = Object(H.a)(n.map(function(e) {
                            return e.videoPlayExternalReferrers
                        }));
                    return s.createElement(I, null, s.createElement(v._30, {
                        elevation: 1,
                        background: v.m.Base,
                        display: v.Q.Flex,
                        position: v._14.Relative,
                        flexDirection: v.S.Row,
                        flexWrap: v.T.NoWrap,
                        className: "referrals-page-nav-bar",
                        borderBottom: !0
                    }, s.createElement(v._30, {
                        position: v._14.Absolute,
                        display: v.Q.Flex,
                        flexDirection: v.S.Row,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, s.createElement(v.u, {
                        type: v.A.Text,
                        linkTo: "/" + this.props.channel.name + "/dashboard/channel-analytics" + this.props.urlStore.searchStringWith()
                    }, s.createElement(v._7, {
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, s.createElement(v.P, null, Object(l.d)("Back", "ChannelAnalyticsReferralPage"))))), s.createElement(v._30, {
                        display: v.Q.Flex,
                        flexGrow: 1,
                        flexWrap: v.T.NoWrap,
                        justifyContent: v._6.Center,
                        alignItems: v.c.Center
                    }, s.createElement(v.P, {
                        type: v._44.H2,
                        fontSize: v.U.Size4,
                        bold: !0
                    }, Object(l.d)("Views by Source", "ChannelAnalyticsReferralPage")))), s.createElement(N, {
                        urlStore: this.props.urlStore,
                        onDateSelect: this.handleDateSelect
                    }), s.createElement(v._7, {
                        className: "channel-analytics-referrals-page",
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        flexWrap: v.T.NoWrap,
                        alignItems: v.c.Stretch,
                        breakpointMedium: {
                            flexDirection: v.S.Row
                        },
                        margin: {
                            top: 3
                        }
                    }, s.createElement(v._7, {
                        className: "channel-analytics-referrals-page__col",
                        display: v.Q.Flex,
                        flexWrap: v.T.NoWrap,
                        flexDirection: v.S.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, s.createElement(tt, {
                        isLoading: t,
                        referrals: r.items.slice(0, 15),
                        totals: r.totals,
                        translationFunc: Ze.b,
                        title: Object(l.d)("Views by Location", "ChannelAnalyticsReferralPage")
                    }), s.createElement(tt, {
                        isLoading: t,
                        referrals: a.items.slice(0, 15),
                        totals: a.totals,
                        translationFunc: W.c,
                        title: Object(l.d)("Views by Platform", "ChannelAnalyticsReferralPage")
                    })), s.createElement(v._7, {
                        className: "channel-analytics-referrals-page__col",
                        display: v.Q.Flex,
                        flexWrap: v.T.NoWrap,
                        flexDirection: v.S.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, s.createElement(tt, {
                        isLoading: t,
                        referrals: o.items.slice(0, 15),
                        totals: o.totals,
                        translationFunc: W.b,
                        title: Object(l.d)("Views from Twitch", "ChannelAnalyticsReferralPage")
                    }), s.createElement(tt, {
                        isLoading: t,
                        referrals: i.items.slice(0, 15),
                        totals: i.totals,
                        translationFunc: $e,
                        title: Object(l.d)("Views from Channels", "ChannelAnalyticsReferralPage")
                    }), s.createElement(tt, {
                        isLoading: t,
                        referrals: c.items.slice(0, 15),
                        totals: c.totals,
                        translationFunc: W.a,
                        title: Object(l.d)("Views from Outside Twitch", "ChannelAnalyticsReferralPage")
                    }))))
                }, t
            }(s.Component);

        function tt(e) {
            var t = e.isLoading,
                n = e.referrals,
                a = e.totals,
                r = e.translationFunc,
                i = e.title;
            return t ? s.createElement(v._7, {
                margin: {
                    bottom: 2
                }
            }, s.createElement(v._13, {
                height: 350
            })) : s.createElement(v._30, {
                padding: {
                    bottom: 1
                },
                margin: {
                    bottom: 2
                },
                elevation: 1,
                background: v.m.Base
            }, s.createElement(Q.a, {
                referrals: n,
                totals: a,
                translationFunc: r,
                title: i
            }))
        }
        var nt = Object(o.d)(Object(m.d)("ChannelAnalyticsReferralsPage", {
                destination: p.a.ChannelDashboardChannelAnalyticsReferrals,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: d.PageviewLocation.DashboardChannelAnalyticsReferrals
            }))(et),
            at = n("kA6m"),
            rt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.pathname !== this.props.location.pathname || e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new at.URLStore(this.props.location, this.props.history, this.props.now);
                    return k(e.params, this.props.now) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t
            }(s.Component),
            st = n("HCOe"),
            it = n("OAwv");

        function ot(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }
        var lt = n("+TF1"),
            ct = n("DNvj");
        var ut = function(e) {
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
                        }
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(S.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : s.createElement("span", null)
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
                                    }, [4, Object(lt.b)(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? (this.setState({
                                        streamSessions: {
                                            isLoading: !1,
                                            sessions: [],
                                            lookbackSessions: []
                                        }
                                    }), [2]) : (n = function(e, t) {
                                        for (var n = [], a = [], r = 0, s = e; r < s.length; r++) {
                                            var i = s[r];
                                            t(i) ? n.push(i) : a.push(i)
                                        }
                                        return [n, a]
                                    }(t.streamSummaries, function(e) {
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
                                    }), [4, Object(ct.a)(this.props.channel.name, this.props.interval)]) : [2];
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
                        var e, t, n, a, s;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        revenue: {
                                            streams: at.RevenueStreams.buildEmpty(),
                                            lookbackStreams: at.RevenueStreams.buildEmpty(),
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
                                                        return e.role === S.d.None ? [2, {
                                                            isError: !1,
                                                            streams: at.EMPTY_REVENUE_RESPONSE
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = it.stringify(r.__assign({}, ot(t.start, Object(h.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [n, a].join("?"), [4, Object(_.c)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            streams: at.EMPTY_REVENUE_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            streams: i.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = i.sent()).isError ? [2] : (n = at.RevenueStreams.partitionFromPayload(t.streams, {
                                        splitAt: this.props.lookbackInterval.end,
                                        max: this.props.interval.end
                                    }), a = n[0], s = n[1], this.setState({
                                        revenue: {
                                            isLoading: !1,
                                            streams: a,
                                            lookbackStreams: s
                                        }
                                    }), [2])
                            }
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
                                                        return e.role === S.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: at.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", a = it.stringify(r.__assign({}, ot(t.start, Object(h.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [n, a].join("?"), [4, Object(_.c)({
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
                                    return (t = i.sent()).isError ? [2] : (n = at.SubCountStreams.partitionFromPayload(t.subscriptions, {
                                        splitAt: this.props.lookbackInterval.end,
                                        max: this.props.interval.end
                                    }), a = n[0], s = n[1], this.setState({
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
            }(s.Component),
            pt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.o.setPageTitle(Object(l.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.channel) return null;
                    var t = S.c.fromChannelData(this.props.data.channel);
                    return s.createElement(rt, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(n) {
                        return s.createElement(ut, {
                            interval: n.params,
                            lookbackInterval: Object(F.h)(n.params, -1),
                            channel: t
                        }, function(a) {
                            return s.createElement(s.Fragment, null, s.createElement(i.c, {
                                path: "/:channelName/dashboard/channel-analytics",
                                exact: !0,
                                render: dt.bind(e, t, n, a)
                            }), s.createElement(i.c, {
                                path: "/:channelName/dashboard/channel-analytics/referrals",
                                exact: !0,
                                render: mt.bind(e, t, n, a)
                            }))
                        })
                    })
                }, t
            }(s.Component),
            dt = function(e, t, n) {
                return s.createElement(Xe, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: n
                })
            },
            mt = function(e, t, n) {
                return s.createElement(nt, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: n
                })
            },
            ht = Object(o.d)(Object(c.a)(st, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(pt);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return pt
        }), n.d(t, "ChannelAnalyticsPageRoot", function() {
            return ht
        })
    },
    fnik: function(e, t) {},
    "i/9b": function(e, t) {},
    jUGK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        });
        var a = n("TToO"),
            r = n("tiQ5"),
            s = n("yvDY"),
            i = n("KiQY"),
            o = {
                ads: [],
                bits: [],
                extensions: [],
                game_commerce: [],
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            l = function() {
                function e(e) {
                    var t = this,
                        n = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : r.c;
                    this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = n.map(function(e) {
                        return a.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var s = n.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(s)
                }
                return e.fromPayload = function(t) {
                    return new e(this.normalizePayload(t))
                }, e.partitionFromPayload = function(t, n) {
                    var a, r, i, o, l, c = this.normalizePayload(t),
                        u = {
                            ads: [],
                            bits: [],
                            extensions: [],
                            gameCommerce: [],
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        p = {
                            ads: [],
                            bits: [],
                            extensions: [],
                            gameCommerce: [],
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        };
                    return a = Object(s.a)(c.ads, n), u.ads = a[0], p.ads = a[1], r = Object(s.a)(c.bits, n), u.bits = r[0], p.bits = r[1], i = Object(s.a)(c.extensions, n), u.extensions = i[0], p.extensions = i[1], o = Object(s.a)(c.gameCommerce, n), u.gameCommerce = o[0], p.gameCommerce = o[1], l = Object(s.a)(c.primeSubscriptions, n), u.primeSubscriptions = l[0], p.primeSubscriptions = l[1], c.twitchSubscriptionProducts.forEach(function(e) {
                        var t = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            a = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            r = Object(s.a)(e.timeseries, n),
                            i = r[0],
                            o = r[1];
                        t.timeseries = i, a.timeseries = o, u.twitchSubscriptionProducts.push(t), p.twitchSubscriptionProducts.push(a)
                    }), [new e(u), new e(p)]
                }, e.buildEmpty = function() {
                    return new e({
                        ads: [],
                        bits: [],
                        extensions: [],
                        gameCommerce: [],
                        primeSubscriptions: [],
                        twitchSubscriptionProducts: []
                    })
                }, e.normalizePayload = function(e) {
                    var t = this;
                    return {
                        ads: this.normalizeTimeseries(e.ads),
                        bits: this.normalizeTimeseries(e.bits),
                        extensions: this.normalizeTimeseries(e.extensions),
                        gameCommerce: this.normalizeTimeseries(e.game_commerce),
                        primeSubscriptions: this.normalizeTimeseries(e.prime_subscriptions),
                        twitchSubscriptionProducts: e.twitch_subscriptions.map(function(e) {
                            return {
                                defaultPrice: e.default_price,
                                productID: e.product_id,
                                timeseries: t.normalizeTimeseries(e.revenue)
                            }
                        })
                    }
                }, e.normalizeTimeseries = function(e) {
                    return e.map(function(e) {
                        return {
                            amount: e.amount / 100,
                            date: Object(i.a)(e.timestamp)
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
    jqvb: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            if (Boolean(Intl && Intl.NumberFormat && Intl.NumberFormat.prototype.formatToParts)) {
                var r = a.o.intl.getLanguageCode() || "en",
                    s = Intl.NumberFormat(r, {
                        style: "currency",
                        currency: "USD"
                    });
                return s.formatToParts(e).map(t)
            }
            var i = Object(a.e)(e, {
                style: "currency",
                currency: "USD"
            });
            return [n(i)]
        };
        var a = n("6sO2")
    },
    kA6m: function(e, t, n) {
        "use strict";
        var a = n("+ear");
        n.d(t, "URLStore", function() {
            return a.a
        });
        var r = n("jUGK");
        n.d(t, "EMPTY_REVENUE_RESPONSE", function() {
            return r.a
        }), n.d(t, "RevenueStreams", function() {
            return r.b
        });
        var s = n("WHrl");
        n.d(t, "EMPTY_SUB_COUNT_RESPONSE", function() {
            return s.a
        }), n.d(t, "SubCountStreams", function() {
            return s.b
        });
        var i = n("0NoZ");
        n.n(i)
    },
    lV23: function(e, t) {},
    tiQ5: function(e, t, n) {
        "use strict";
        var a = n("6sO2"),
            r = n("TToO"),
            s = n("GiK3"),
            i = n("FsFC"),
            o = n("WaEV"),
            l = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(l._1, {
                        fullWidth: !0
                    }, s.createElement("canvas", {
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
            }(s.Component),
            u = (n("i/9b"), l.L.HintedGrey8),
            p = [l.L.Purple8, l.L.PrimeBlue, l.L.Purple11, "#3dc6ae", l.L.Orange, "#69d420"],
            d = "rgba(0, 0, 0, 0)",
            m = l.L.HintedGrey11,
            h = l.L.HintedGrey15,
            g = function(e) {
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
                                            color: h,
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
                                        boxWidth: 12,
                                        fontColor: u,
                                        padding: 15
                                    }
                                },
                                tooltips: {
                                    backgroundColor: "rgba(0,0,0,0.95)",
                                    intersect: !1,
                                    mode: "index",
                                    titleFontColor: h,
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
                        t.myChart = new o(e, n)
                    }, t.formatXAxes = function(e) {
                        if (t.props.formatXAxis) return t.props.formatXAxis(e);
                        var n = Number(e);
                        return isNaN(n) ? e : Object(a.c)(new Date(Number(e)), {
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
                        var r = e.index,
                            s = n.datasets[e.datasetIndex].label;
                        if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                            label: s,
                            value: Number(e.yLabel),
                            index: r
                        });
                        var i = Number(e.yLabel);
                        return isNaN(i) ? e.yLabel : Object(a.e)(Number(e.yLabel))
                    }, t.formatTooltipAfterLabel = function(e, n) {
                        if (t.props.formatTooltipAfterLabel) {
                            var a = e.index,
                                r = Number(n.labels[a]),
                                s = n.datasets[e.datasetIndex].label;
                            return t.props.formatTooltipAfterLabel({
                                label: s,
                                time: r,
                                value: Number(e.yLabel),
                                index: a
                            })
                        }
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: d,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(l._7, {
                        className: "top-stats-chart",
                        position: l._14.Relative
                    }, s.createElement(c, {
                        onCanvasReady: this.handleCanvasReady
                    }))
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update())
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: e.color || p[t % p.length],
                            borderWidth: 0
                        }
                    })
                }, t
            }(s.Component),
            b = (n("RpnM"), function() {
                return s.createElement(l._7, {
                    className: "top-stats-chart-loading",
                    flexGrow: 1,
                    flexShrink: 0,
                    justifyContent: l._6.Center,
                    fullWidth: !0
                }, s.createElement(l._9, {
                    fillContent: !0
                }))
            }),
            f = n("dPMn"),
            S = (n("Ukf0"), function() {
                return s.createElement(l._7, {
                    className: "top-stats-chart-no-data",
                    display: l.Q.Flex
                }, s.createElement(f.a, null))
            }),
            v = n("u4Vk"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatasetClick = function(e, n) {
                        if (t.props.aggregation.isByDay) {
                            var a = t.props.streamSessionsResponse.sessions[0].channel.name;
                            if (a && n && n.length > 0) {
                                var r = n[0],
                                    s = t.props.streamSessionsResponse.sessions[r._index];
                                window.open("/" + a + "/dashboard/stream-summary/" + s.id)
                            }
                        }
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(e);
                        if (t.props.aggregation.isByDay) {
                            var n = new Date(Number(e.label)),
                                r = t.props.streamSessionsResponse.sessions[e.index],
                                s = Object(a.c)(n, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                i = Object(v.b)(r.interval);
                            return Object(a.d)("{date} – {shortDuration}", {
                                date: s,
                                shortDuration: i
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.streamSessionsResponse !== e.streamSessionsResponse || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.streamSessionsResponse.isLoading) return s.createElement(b, null);
                    var t, n, a = this.props.streamSessionsResponse.sessions;
                    return a.length ? (this.props.aggregation.isByDay ? (t = a.map(function(e) {
                        return e.interval.start.getTime().toString()
                    }), n = this.props.datasetBuilders.map(function(e) {
                        return {
                            label: e.label,
                            data: a.map(e.getDataFromSession),
                            color: e.color
                        }
                    })) : (t = this.props.aggregation.datesAsLabels, n = this.props.datasetBuilders.map(function(t) {
                        return {
                            label: t.label,
                            data: t.aggregateDataFromSessions(e.props.streamSessionsResponse.sessions),
                            color: t.color
                        }
                    })), s.createElement(g, {
                        labels: t,
                        datasets: n,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                        onDatasetClick: this.handleDatasetClick
                    })) : s.createElement(S, null)
                }, t
            }(s.Component),
            C = function(e) {
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
                        return Object(a.d)("{adTime} Ad Breaks", {
                            adTime: Object(i.b)(t)
                        }, "ChannelAnalyticsAdBreaks")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Ad Breaks", "ChannelAnalyticsAdBreaks"),
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
                        var n = e.value;
                        return n = n < 10 ? Math.round(10 * n) / 10 : Math.round(n), t.props.aggregation.isByDay ? Object(a.d)("{total, plural, one {# Unique Viewer} other {# Unique Viewers}}", {
                            total: n
                        }, "ChannelAnalyticsAverageUniqueViewers") : Object(a.d)("{total, plural, one {# Average Unique Viewer} other {# Average Unique Viewers}}", {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Average Unique Viewers", "ChannelAnalyticsAverageUniqueViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = e.value;
                        return t = t < 10 ? Math.round(10 * t) / 10 : Math.round(t), Object(a.d)("{total, plural, one {# Average Viewer} other {# Average Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsAvgViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.avgViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(v.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Average Viewers", "ChannelAnalyticsAvgViewers"),
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
                        return e.messagesTotal
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(v.a)(e.interval),
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.round(e.value);
                        return Object(a.d)("{total, plural, one {# Message} other {# Messages}}", {
                            total: t
                        }, "ChannelAnalyticsChatMessages")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Average Chat Messages", "ChannelAnalyticsChatMessages"),
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
                    return t.getDataFromSession = function(e) {
                        return e.uniqueChatters
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(v.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.round(e.value);
                        return Object(a.d)("{total, plural, one {# Chatter} other {# Chatters}}", {
                            total: t
                        }, "ChannelAnalyticsTopStatsChatters")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Average Chatters", "ChannelAnalyticsTopStatsChatters"),
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
                    return t.formatTooltipLabel = function(e) {
                        return Object(a.d)("{views,number} {label}", {
                            views: e.value,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var n;
                        if (t.props.aggregation.isByDay) {
                            var r = new Date(Number(e.label)),
                                s = Object(a.c)(r, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                i = t.props.analyticsResponse.streamSessions.sessions[e.index],
                                o = Object(v.b)(i.interval);
                            n = Object(a.d)("{date} - {shortDuration}", {
                                date: s,
                                shortDuration: o
                            }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                        } else n = t.props.aggregation.formatDateFromLabel(e.label);
                        return Object(a.d)("{total,number} {date}", {
                            date: n,
                            total: e.value
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Twitch", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitch"),
                            aggregateDataFromSessions: this.aggregateData("twitch"),
                            color: "#7752ba"
                        }, {
                            label: Object(a.d)("Reddit", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("reddit"),
                            aggregateDataFromSessions: this.aggregateData("reddit"),
                            color: "#ff5700"
                        }, {
                            label: Object(a.d)("Facebook", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("facebook"),
                            aggregateDataFromSessions: this.aggregateData("facebook"),
                            color: "#3b5998"
                        }, {
                            label: Object(a.d)("Twitter", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitter"),
                            aggregateDataFromSessions: this.aggregateData("twitter"),
                            color: "#00aced"
                        }, {
                            label: Object(a.d)("Other", "ChannelAnalyticsTopStatsClipViews"),
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
            A = function(e) {
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
                        return Object(a.d)("{total, plural, one {# Clip Created} other {# Clips Created}}", {
                            total: t
                        }, "ChannelAnalyticsClipsCreated")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Clips Created", "ChannelAnalyticsClipsCreated"),
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
                        return Object(a.d)("{total, plural, one {# Live View} other {# Live Views}}", {
                            total: t
                        }, "ChannelAnalyticsLiveViews")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Live Views", "ChannelAnalyticsLiveViews"),
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
                        return Object(a.d)("{total, plural, one {# Max Viewer} other {# Max Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsMaxViewers")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Max Viewers", "ChannelAnalyticsMaxViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            k = function(e) {
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
                        return Object(a.d)("{total, plural, one {# Minute Watched} other {# Minutes Watched}}", {
                            total: t
                        }, "ChannelAnalyticsMinutesWatched")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("Minutes Watched", "ChannelAnalyticsMinutesWatched"),
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
                        return Object(a.d)("{total, plural, one {# New Follower} other {# New Followers}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsNewFollowers")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(a.d)("New Followers", "ChannelAnalyticsTopStatsNewFollowers"),
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
                        var t = e.value <= 10 && 0 !== e.value ? 2 : 0,
                            n = Object(a.e)(e.value, {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: t,
                                minimumFractionDigits: t
                            });
                        return Object(a.d)("{currency} {label}", {
                            currency: n,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsRevenueTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var n = e.value <= 10 && 0 !== e.value ? 2 : 0,
                            r = Object(a.e)(e.value, {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: n,
                                minimumFractionDigits: n
                            });
                        return Object(a.d)("{currency} {label}", {
                            currency: r,
                            label: t.props.aggregation.formatDateFromLabel(e.label)
                        }, "ChannelAnalyticsTopStatsRevenueTitle")
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.revenue !== e.analyticsResponse.revenue || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.revenue.isLoading) return s.createElement(b, null);
                    var e = this.props.analyticsResponse.revenue.streams;
                    return e.getTotalAmountAllStreams() ? s.createElement(g, {
                        labels: this.props.aggregation.datesAsLabels,
                        datasets: [{
                            label: Object(a.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(a.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(a.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.ads.timeseries, this.getAggregationData)
                        }, {
                            label: Object(a.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.bits.timeseries, this.getAggregationData)
                        }, {
                            label: Object(a.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.gameCommerce.timeseries, this.getAggregationData)
                        }, {
                            label: Object(a.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.extensions.timeseries, this.getAggregationData)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel
                    }) : s.createElement(S, null)
                }, t.prototype.getAggregationData = function(e) {
                    return {
                        value: e.amount,
                        date: e.date
                    }
                }, t
            }(s.Component),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return e.label === t.paidSubMessage ? Object(a.d)("{numOfSubs, plural, one {# Paid sub} other {# Paid subs}}", {
                            numOfSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions") : Object(a.d)("{numOfSubs, plural, one {# Twitch Prime sub} other {# Twitch Prime subs}}", {
                            numOfSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipTitle = function(e) {
                        var n = t.props.aggregation.formatDate(new Date(Number(e.label)));
                        return Object(a.d)("{totalSubs, plural, one {{date} – # Sub} other {{date} – # Subs}}", {
                            date: n,
                            totalSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipAfterLabel = function(e) {
                        if (e.label === t.paidSubMessage && e.value && e.time) {
                            var n = {};
                            return t.props.analyticsResponse.subCounts.streams.twitchSubscriptions.timeseries.forEach(function(a) {
                                if (t.props.aggregation.startOf(a.date).getTime() === e.time) {
                                    var r = a.product.defaultPrice;
                                    void 0 === n[r] && (n[r] = 0), n[r] += a.count
                                }
                            }), Object.keys(n).map(function(e) {
                                var t = Object(a.e)(Number(e) / 100, {
                                        style: "currency",
                                        currency: "USD"
                                    }),
                                    r = n[e];
                                return Object(a.d)("{numOfSubs, plural, one {# {usd} Sub} other {# {usd} Subs}}", {
                                    usd: t,
                                    numOfSubs: r
                                }, "ChannelAnalyticsTopStatsSubscriptions")
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.subCounts !== e.analyticsResponse.subCounts || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.subCounts.isLoading) return s.createElement(b, null);
                    var e = this.props.analyticsResponse.subCounts.streams;
                    return e.getTotalSubCount() ? s.createElement(g, {
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
                    }) : s.createElement(S, null)
                }, Object.defineProperty(t.prototype, "paidSubMessage", {
                    get: function() {
                        return Object(a.d)("Paid subs", "ChannelAnalyticsTopStatsSubscriptions")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "twitchSubMessage", {
                    get: function() {
                        return Object(a.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsSubscriptions")
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
            F = n("yiqh"),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return Object(v.a)(e.interval)
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: Object(v.a)(e.interval),
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(F.a)(t)
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.aggregation.isByDay) {
                            var n = new Date(Number(e.label));
                            return Object(a.c)(n, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            })
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(y, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        datasetBuilders: [{
                            label: Object(a.d)("Live Views", "ChannelAnalyticsTimeStreamed"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }]
                    })
                }, t
            }(s.Component),
            L = n("HW6M"),
            M = n("F8kA"),
            N = (n("fnik"), {
                "data-test-selector": "up-trend-indicator"
            }),
            B = {
                "data-test-selector": "down-trend-indicator"
            },
            I = {
                "data-test-selector": "tab-selector"
            },
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = L("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return s.createElement(l._7, r.__assign({
                        className: e,
                        display: l.Q.Flex,
                        flexGrow: 1
                    }, I), s.createElement(l._1, {
                        flexGrow: 1,
                        flexDirection: l.S.Column,
                        textAlign: l._40.Center
                    }, s.createElement(M.a, {
                        onClick: this.props.onClick,
                        to: this.props.linkTo,
                        className: "top-stats-tab__link",
                        replace: !0
                    }, s.createElement(l._7, {
                        display: l.Q.Flex,
                        flexGrow: 1,
                        flexDirection: l.S.Column,
                        padding: {
                            left: 3,
                            right: 1,
                            y: 1
                        },
                        ellipsis: !0
                    }, s.createElement(l.P, {
                        className: "top-stats-tab__title",
                        type: l._44.H3
                    }, this.props.title, this.renderTrendIndicator()), s.createElement(l.P, {
                        type: l._44.H6,
                        color: l.J.Alt2,
                        title: this.props.subtitle,
                        ellipsis: !0
                    }, this.props.subtitle)))), this.props.children)
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? s.createElement(l._7, {
                        display: l.Q.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(l._20, r.__assign({
                        asset: l._21.GlyphArrUp,
                        type: l._22.Success
                    }, N))) : this.props.trend < 0 ? s.createElement(l._7, {
                        display: l.Q.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(l._20, r.__assign({
                        asset: l._21.GlyphArrDown,
                        type: l._22.Warn
                    }, B))) : null : null
                }, t
            }(s.Component),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.adBreaks,
                        n = this.previousAdBreaks,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(i.b)(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Ad Breaks", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
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
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        n = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Unique Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageUniqueViewers = function(e) {
                    return 0 === e.length ? 0 : e.reduce(function(e, t) {
                        return e + t.uniqueViewers
                    }, 0) / e.length
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(a.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(a.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(s.Component);

        function z(e, t) {
            var n = 0,
                a = 0;
            return e.forEach(function(e) {
                var r = t(e);
                a += r.weight * r.value, n += r.weight
            }), 0 === n ? 0 : a / n
        }
        var G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        n = this.averageViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageViewers = function(e) {
                    return z(e, function(e) {
                        return {
                            weight: Object(v.a)(e.interval),
                            value: e.avgViewerCount
                        }
                    })
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(a.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(a.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(s.Component),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageMessages(this.props.analyticsResponse.streamSessions.sessions),
                        n = this.averageMessages(this.props.analyticsResponse.streamSessions.lookbackSessions),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageMessages = function(e) {
                    return z(e, function(e) {
                        return {
                            weight: Object(v.a)(e.interval),
                            value: e.messagesTotal
                        }
                    })
                }, t
            }(s.Component),
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.sessions),
                        n = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.lookbackSessions),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageUniqueChatters = function(e) {
                    return z(e, function(e) {
                        return {
                            weight: Object(v.a)(e.interval),
                            value: e.uniqueChatters
                        }
                    })
                }, t
            }(s.Component),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.previousTotalClipViews,
                        n = this.totalClipViews,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(n, {
                        maximumFractionDigits: 0
                    }), s.createElement(W, {
                        title: e,
                        subtitle: Object(a.d)("Clip Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: r.length ? Math.sign(n - t) : 0,
                        onClick: this.props.onClick
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
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.clipsCreated,
                        n = this.previousClipsCreated,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Clips Created", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.liveViews,
                        n = this.previousLiveViews,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Live Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
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
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.maxViewers,
                        n = this.previousMaxViewers,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Max Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
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
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.minutesWatched,
                        n = this.previousMinutesWatched,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Minutes Watched", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
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
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.followersChange,
                        n = this.previousFollowersChange,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(a.d)("{sign}{followersDiff, number}", {
                            followersDiff: Math.abs(e),
                            sign: t
                        }, "ChannelAnalyticsTopStats")
                    }(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("New Followers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
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
        var ee, te, ne = n("jqvb"),
            ae = (n("w5Qh"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return s.createElement(W, {
                        title: this.renderTitle(t),
                        trend: t ? Math.sign(t - e) : 0,
                        subtitle: Object(a.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.renderTitle = function(e) {
                    return this.props.analyticsResponse.revenue.isLoading || !this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() ? "—" : Object(ne.a)(e, function(e, t) {
                        switch (e.type) {
                            case "currency":
                                return s.createElement(l.P, {
                                    className: "top-stats-tab-revenue__currency",
                                    fontSize: l.U.Size5,
                                    type: l._44.Span,
                                    key: t
                                }, e.value);
                            case "fraction":
                            case "decimal":
                                return s.createElement(l.P, {
                                    className: "top-stats-tab-revenue__fraction",
                                    fontSize: l.U.Size4,
                                    type: l._44.Span,
                                    key: t
                                }, e.value);
                            default:
                                return e.value
                        }
                    }, function(e) {
                        return e
                    })
                }, t
            }(s.Component)),
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.analyticsResponse.subCounts.streams.getTotalSubCount(),
                        n = this.props.analyticsResponse.subCounts.lookbackStreams.getTotalSubCount();
                    return e = this.props.analyticsResponse.subCounts.isLoading || !t ? "—" : Object(a.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(W, {
                        title: e,
                        trend: t ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Subscriptions", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t
            }(s.Component),
            se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.timeStreamed,
                        n = this.previousTimeStreamed,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(F.a)(t), s.createElement(W, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Time Streamed", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "timeStreamed", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + Object(v.a)(t.interval)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousTimeStreamed", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + Object(v.a)(t.interval)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component);
        ! function(e) {
            e.AdBreaks = "ad-breaks", e.AverageUniqueViewers = "avg-unique-viewers", e.AverageViewers = "avg-viewers", e.ChatMessages = "avg-chat-messages", e.Chatters = "avg-chatters", e.ClipsCreated = "clips-created", e.ClipViews = "clip-views", e.LiveViews = "live-views", e.MaxViewers = "max-viewers", e.MinutesWatched = "minutes-watched", e.NewFollowers = "new-followers", e.Revenue = "revenue", e.Subscriptions = "subscriptions", e.TimeStreamed = "time-streamed"
        }(ee || (ee = {})),
        function(e) {
            e[e.StreamSummaries = 0] = "StreamSummaries", e[e.Revenue = 1] = "Revenue"
        }(te || (te = {}));
        var ie, oe = ((ie = {})[ee.AverageViewers] = {
                title: function() {
                    return Object(a.d)("Average Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: G,
                Chart: E,
                dataGroup: te.StreamSummaries
            }, ie[ee.LiveViews] = {
                title: function() {
                    return Object(a.d)("Live Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Y,
                Chart: j,
                dataGroup: te.StreamSummaries
            }, ie[ee.NewFollowers] = {
                title: function() {
                    return Object(a.d)("New Followers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: $,
                Chart: x,
                dataGroup: te.StreamSummaries
            }, ie[ee.Subscriptions] = {
                title: function() {
                    return Object(a.d)("Subscriptions", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: re,
                Chart: P,
                dataGroup: te.Revenue
            }, ie[ee.Revenue] = {
                title: function() {
                    return Object(a.d)("Revenue", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ae,
                Chart: R,
                dataGroup: te.Revenue
            }, ie[ee.MinutesWatched] = {
                title: function() {
                    return Object(a.d)("Minutes Watched", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Z,
                Chart: k,
                dataGroup: te.StreamSummaries
            }, ie[ee.TimeStreamed] = {
                title: function() {
                    return Object(a.d)("Time Streamed", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: se,
                Chart: V,
                dataGroup: te.StreamSummaries
            }, ie[ee.MaxViewers] = {
                title: function() {
                    return Object(a.d)("Max Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: X,
                Chart: D,
                dataGroup: te.StreamSummaries
            }, ie[ee.AverageUniqueViewers] = {
                title: function() {
                    return Object(a.d)("Average Unique Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: q,
                Chart: _,
                dataGroup: te.StreamSummaries
            }, ie[ee.Chatters] = {
                title: function() {
                    return Object(a.d)("Average Chatters", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Q,
                Chart: O,
                dataGroup: te.StreamSummaries
            }, ie[ee.ChatMessages] = {
                title: function() {
                    return Object(a.d)("Average Chat Messages", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: H,
                Chart: w,
                dataGroup: te.StreamSummaries
            }, ie[ee.ClipsCreated] = {
                title: function() {
                    return Object(a.d)("Clips Created", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: K,
                Chart: A,
                dataGroup: te.StreamSummaries
            }, ie[ee.ClipViews] = {
                title: function() {
                    return Object(a.d)("Clip Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: J,
                Chart: T,
                dataGroup: te.StreamSummaries
            }, ie[ee.AdBreaks] = {
                title: function() {
                    return Object(a.d)("Ad Breaks", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: U,
                Chart: C,
                dataGroup: te.StreamSummaries
            }, ie),
            le = [ee.AverageViewers, ee.LiveViews, ee.NewFollowers, ee.Subscriptions, ee.Revenue],
            ce = [ee.AverageViewers, ee.LiveViews, ee.NewFollowers, ee.ChatMessages, ee.MinutesWatched],
            ue = [ee.AverageViewers, ee.LiveViews, ee.NewFollowers, ee.MinutesWatched, ee.TimeStreamed, ee.MaxViewers, ee.AverageUniqueViewers, ee.Chatters, ee.ChatMessages, ee.ClipsCreated, ee.ClipViews, ee.AdBreaks],
            pe = [{
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
            return ee
        }), n.d(t, "b", function() {
            return te
        }), n.d(t, "g", function() {
            return oe
        }), n.d(t, "d", function() {
            return 5
        }), n.d(t, "a", function() {
            return le
        }), n.d(t, "e", function() {
            return ce
        }), n.d(t, "f", function() {
            return ue
        }), n.d(t, "c", function() {
            return pe
        })
    },
    w5Qh: function(e, t) {},
    yvDY: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = [],
                a = [];
            return e.forEach(function(e) {
                e.date > t.splitAt ? e.date <= t.max && n.push(e) : a.push(e)
            }), [n, a]
        }
    }
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-root-1a8703c2fe07f8130d73c3ba13687c63.js.map