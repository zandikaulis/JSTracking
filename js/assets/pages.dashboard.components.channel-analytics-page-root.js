webpackJsonp([78], {
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
    XTbU: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var a = n("6sO2"),
            r = function(e) {
                var t = Object(a.e)(e, {
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
                return r.createElement(i._6, a.__assign({
                    alignItems: i.c.Center,
                    display: i.P.Flex,
                    flexDirection: i.R.Column,
                    justifyContent: i._5.Center,
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    padding: {
                        top: 5,
                        bottom: 5
                    }
                }, o), r.createElement(i._6, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(i.l, a.__assign({}, l, {
                    size: 50
                }))), r.createElement(i.O, {
                    color: i.J.Alt2,
                    fontSize: i.T.Size5
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
        var a = n("TToO"),
            r = n("GiK3"),
            s = n("CIox"),
            i = n("2KeS"),
            o = n("6sO2"),
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
                            minDate: t.props.minDate && Object(d.startOfDay)(t.props.minDate),
                            maxDate: Object(d.startOfDay)(t.props.maxDate),
                            defaultDate: Object(d.startOfDay)(t.props.date),
                            startRange: Object(d.startOfDay)(t.props.startRange),
                            endRange: Object(d.startOfDay)(t.props.endRange),
                            setDefaultDate: !0
                        }), e.appendChild(t.picker.el))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(d.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(d.startOfDay)(this.props.endRange)), this.props.minDate && this.picker.setMinDate(Object(d.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(d.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(d.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(r.Component)),
            b = n("AJEV"),
            v = n("Odds"),
            y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        a = t.now || new Date,
                        r = Object(d.endOfDay)(a),
                        s = Object(d.startOfDay)(a),
                        i = Object(d.startOfMonth)(a);
                    return n.presets = [{
                        message: Object(o.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 6),
                            end: r
                        }
                    }, {
                        message: Object(o.d)("Last 30 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(d.subDays)(s, 29),
                            end: r
                        }
                    }, {
                        message: Object(o.c)(i, {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: i,
                            end: r
                        }
                    }, {
                        message: Object(o.c)(Object(d.subMonths)(r, 1), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(d.startOfMonth)(Object(d.subMonths)(a, 1)),
                            end: Object(d.endOfMonth)(Object(d.subMonths)(a, 1))
                        }
                    }, {
                        message: Object(o.c)(Object(d.subMonths)(r, 2), {
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
                    return r.createElement(v._6, {
                        display: v.P.Flex,
                        flexDirection: v.R.Column
                    }, this.presets.map(function(t, n) {
                        return r.createElement(v._29, {
                            color: v.J.Link,
                            key: n
                        }, r.createElement(v._4, {
                            selected: Object(b.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval)
                        }, r.createElement(v._29, {
                            padding: 1,
                            textAlign: v._39.Center
                        }, r.createElement(v.O, {
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
            }(r.Component);

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
        var C = n("PGY2");

        function O(e) {
            return a.__awaiter(this, void 0, void 0, function() {
                var t, n, r, s, i;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", n = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(C.c)({
                                path: t
                            }), Object(C.c)({
                                path: n
                            })])];
                        case 1:
                            return r = a.sent(), s = r[0], i = r[1], s.isError() || i.isError() ? [2, {
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
                                    return Object(C.d)(a, [function(e) {
                                        return e.plan
                                    }], [C.a.Ascending])
                                }(s.body, i.body)
                            }]
                    }
                })
            })
        }
        var _ = n("tiQ5");

        function w(e) {
            return e === b.d.None ? _.f : Object.keys(_.g)
        }
        var E = {
                "data-test-selector": "commit-button"
            },
            T = {
                "data-test-selector": "cancel-button"
            },
            j = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = S(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = S(n.state.interval, {
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
                    return r.createElement("div", null, r.createElement(v._6, {
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(v._6, {
                        padding: {
                            right: 2
                        },
                        textAlign: v._39.Center
                    }, r.createElement(v.O, {
                        color: v.J.Alt2,
                        fontSize: v.T.Size4
                    }, Object(o.d)("Start date", "ChannelAnalyticsDateRangePicker")), r.createElement(f, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), r.createElement(v._6, {
                        padding: {
                            right: 2
                        },
                        textAlign: v._39.Center
                    }, r.createElement(v.O, {
                        color: v.J.Alt2,
                        fontSize: v.T.Size4
                    }, Object(o.d)("End date", "ChannelAnalyticsDateRangePicker")), r.createElement(f, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), r.createElement(v._29, {
                        padding: {
                            top: 1,
                            left: 2
                        },
                        borderLeft: !0
                    }, r.createElement(y, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), r.createElement(v._6, {
                        display: v.P.Flex,
                        justifyContent: v._5.Center
                    }, r.createElement(v._6, {
                        margin: {
                            right: 2
                        }
                    }, r.createElement(v.u, a.__assign({}, E, {
                        onClick: this.handleUpdateClick
                    }), Object(o.d)("Update", "ChannelAnalyticsDateRangePicker"))), r.createElement(v.u, a.__assign({}, T, {
                        type: v.A.Text,
                        onClick: this.props.onDismiss
                    }), Object(o.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(r.Component);

        function D(e, t) {
            return void 0 === t && (t = new Date), e.start <= e.end && e.end <= Object(d.endOfDay)(t)
        }
        var A = n("ylrR"),
            x = n("9uzc"),
            R = n("u4Vk"),
            k = {
                "data-test-selector": "time-range"
            },
            P = {
                "data-test-selector": "total-days"
            },
            V = {
                "data-test-selector": "date-picker-toggle"
            },
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore.params;
                    return r.createElement(v._6, {
                        position: v._13.Relative
                    }, r.createElement(A.a, {
                        control: function(n) {
                            var s = n.toggle;
                            return r.createElement(v._6, {
                                padding: {
                                    bottom: 2
                                }
                            }, r.createElement(x.a, {
                                previousPath: e.pathWithShiftedInterval(-1),
                                nextPath: e.pathWithShiftedInterval(1)
                            }, r.createElement(v.u, a.__assign({}, V, {
                                type: v.A.Text,
                                onClick: s,
                                fullWidth: !0
                            }), r.createElement(v.O, a.__assign({}, k, {
                                fontSize: v.T.Size4
                            }), e.formatDateRange(t)), r.createElement(v.O, a.__assign({}, P, {
                                fontSize: v.T.Size6,
                                color: v.J.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return r.createElement(v._29, {
                            margin: {
                                top: 5
                            },
                            position: v._13.Absolute,
                            display: v.P.Flex,
                            alignItems: v.c.Center,
                            flexDirection: v.R.Column,
                            zIndex: v._54.Above,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(v._29, {
                            margin: {
                                top: .5
                            },
                            elevation: 4,
                            position: v._13.Relative,
                            display: v.P.Flex,
                            background: v.m.Base,
                            zIndex: v._54.Above,
                            attachTop: !0
                        }, r.createElement(v._6, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, r.createElement(j, {
                            interval: t,
                            onCommit: Object(h.compose)(a, e.props.urlStore.replace),
                            onDismiss: a
                        }))))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(d.differenceInDays)(e.end, e.start) + 1 ? Object(o.c)(e.start, "medium") : Object(o.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(d.differenceInDays)(e.end, e.start) + 1;
                    return Object(o.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.pathWithShiftedInterval = function(e) {
                    var t = Object(R.h)(this.props.urlStore.params, e);
                    return D(t) ? this.props.urlStore.buildPathWithParams(t) : ""
                }, t
            }(r.Component),
            L = n("zCIC"),
            M = (n("JNds"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(L.b, null, r.createElement(v._6, {
                        padding: 4,
                        className: "channel-analytics-page"
                    }, this.props.children))
                }, t
            }(r.Component)),
            N = n("BoWu"),
            W = (n("Bgox"), function(e) {
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
                    var e = r.createElement(v._6, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, this.props.hoverText);
                    return r.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, r.createElement(v._29, {
                        display: v.P.Flex,
                        padding: {
                            x: 1
                        },
                        position: v._13.Relative
                    }, r.createElement(v._29, {
                        className: "hoverable-icon",
                        display: v.P.InlineFlex,
                        background: v.m.Overlay,
                        color: v.J.Overlay,
                        borderRadius: v.s.Rounded,
                        alignItems: v.c.Center,
                        justifyContent: v._5.Center
                    }, r.createElement(v._19, {
                        asset: v._20.QuestionMark,
                        width: 10,
                        height: 12
                    })), r.createElement(v.p, {
                        show: this.state.isHovered,
                        direction: v.q.Top,
                        offsetX: "1rem"
                    }, e)))
                }, t
            }(r.Component)),
            B = function(e) {
                return r.createElement(v._6, {
                    alignItems: v.c.Center,
                    display: v.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(v.O, {
                    type: v._43.H5,
                    bold: !0
                }, e.children), e.infoText && r.createElement(W, {
                    hoverText: e.infoText
                }))
            },
            I = n("dPMn"),
            U = n("FeZP"),
            z = n("xygp"),
            G = n("vTHh"),
            q = 3,
            H = function(e) {
                return e
            };

        function J(e) {
            var t = e.streamSessions,
                n = e.channelName,
                a = e.urlStore;
            if (t.isLoading) return r.createElement(v._6, {
                margin: {
                    top: 3,
                    bottom: 1
                }
            }, r.createElement(v._12, {
                height: 448
            }));
            var s = Object(z.a)(t.sessions.map(function(e) {
                    return e.videoPlayInternalTwitchReferrers
                })),
                i = Object(z.a)(t.sessions.map(function(e) {
                    return e.videoPlayInternalChannelsReferrers
                })),
                l = Object(z.a)(t.sessions.map(function(e) {
                    return e.videoPlayExternalReferrers
                })),
                c = r.createElement(I.a, null);
            return (s.totals || i.totals || l.totals) && (c = r.createElement(r.Fragment, null, r.createElement(v._29, {
                borderBottom: !0,
                padding: {
                    bottom: 1
                }
            }, r.createElement(G.a, {
                referrals: s.items.slice(0, q),
                totals: s.totals,
                translationFunc: N.b,
                title: Object(o.d)("Twitch", "ChannelAnalyticsReferralPanel")
            }), r.createElement(G.a, {
                referrals: i.items.slice(0, q),
                totals: i.totals,
                translationFunc: H,
                title: Object(o.d)("Channels", "ChannelAnalyticsReferralPanel")
            }), r.createElement(G.a, {
                referrals: l.items.slice(0, q),
                totals: l.totals,
                translationFunc: N.a,
                title: Object(o.d)("External", "ChannelAnalyticsReferralPanel")
            })), r.createElement(U.a, {
                message: Object(o.d)("View details", "ChannelAnalyticsReferralPanel"),
                url: "/" + n + "/dashboard/channel-analytics/referrals" + a.searchStringWith()
            }))), r.createElement(v._6, {
                margin: {
                    top: 3,
                    bottom: 1
                }
            }, r.createElement(B, null, Object(o.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), r.createElement(v._29, {
                elevation: 1,
                background: v.m.Base
            }, c))
        }
        var K = n("XTbU"),
            Y = (n("MXAS"), function(e) {
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
                        className: "breakdown-card-row",
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, r.createElement(v._29, {
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: v._13.Relative
                    }, r.createElement(v._6, {
                        display: v.P.Flex,
                        justifyContent: v._5.Between
                    }, r.createElement(v._6, {
                        display: v.P.Flex,
                        alignItems: v.c.Center
                    }, r.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), r.createElement(v._6, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(v.O, {
                        type: v._43.H5
                    }, this.props.title))), r.createElement(v._6, {
                        textAlign: v._39.Right
                    }, r.createElement(v.O, {
                        type: v._43.H5,
                        bold: !0
                    }, this.props.revenue), r.createElement(v.O, {
                        type: v._43.H6,
                        color: v.J.Alt2
                    }, Object(o.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? r.createElement(v.p, {
                        show: !0,
                        direction: v.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(r.Component)),
            X = function(e) {
                return Object(o.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            Q = function(e) {
                return r.createElement(v._6, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, r.createElement("table", null, r.createElement("thead", null, r.createElement("tr", null, r.createElement("td", null, r.createElement(v._6, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(v.O, {
                    bold: !0
                }, Object(o.d)("Subscription", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(v._6, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(v.O, {
                    bold: !0
                }, Object(o.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), r.createElement("td", null, r.createElement(v._6, {
                    padding: {
                        right: 2
                    }
                }, r.createElement(v.O, {
                    bold: !0
                }, Object(o.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), r.createElement("tbody", null, e.subCounts.streams.twitchSubscriptionProducts.map(function(t, n) {
                    return r.createElement($, {
                        key: n,
                        tier: X(t.defaultPrice),
                        subscribers: Object(o.e)(t.total),
                        revenue: function(e, t) {
                            var n = t.twitchSubscriptionProducts.filter(function(t) {
                                return e === t.productID
                            })[0];
                            if (!n) return Object(o.e)(0, {
                                style: "currency",
                                currency: "USD"
                            });
                            return Object(o.e)(n.total, {
                                style: "currency",
                                currency: "USD"
                            })
                        }(t.productID, e.revenue.streams)
                    })
                }))))
            };
        var $ = function(e) {
                return r.createElement("tr", null, r.createElement("td", null, r.createElement(v.O, null, e.tier)), r.createElement("td", null, r.createElement(v.O, null, e.subscribers)), r.createElement("td", null, r.createElement(v.O, null, e.revenue)))
            },
            Z = (n("JczT"), {
                "data-test-selector": "total-revenue"
            }),
            ee = function(e) {
                if (e.channel.role === b.d.None) return null;
                if (e.revenue.isLoading) return r.createElement(v._6, {
                    margin: {
                        top: 3
                    }
                }, r.createElement(v._12, {
                    height: 448
                }));
                var t = e.revenue,
                    n = t.streams,
                    a = t.lookbackStreams,
                    s = e.channel.role === b.d.Affiliate ? Object(o.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 60 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel") : Object(o.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 45 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel"),
                    i = r.createElement(I.a, null);
                return n.getTotalAmountAllStreams() && (i = r.createElement(r.Fragment, null, r.createElement(te, {
                    totalAmount: n.getTotalAmountAllStreams()
                }), r.createElement(v._6, {
                    padding: {
                        top: 2,
                        bottom: 1
                    }
                }, r.createElement(v._6, {
                    textAlign: v._39.Right,
                    padding: {
                        x: 2
                    }
                }, r.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(o.d)("Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel"))), r.createElement(v._6, null, r.createElement(Y, {
                    title: Object(o.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ne(n.twitchSubscriptions.total),
                    lastRevenue: ne(a.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : r.createElement(Q, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), r.createElement(Y, {
                    title: Object(o.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ne(n.primeSubscriptions.total),
                    lastRevenue: ne(a.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), r.createElement(Y, {
                    title: Object(o.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ne(n.ads.total),
                    lastRevenue: ne(a.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), r.createElement(Y, {
                    title: Object(o.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ne(n.bits.total),
                    lastRevenue: ne(a.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), r.createElement(Y, {
                    title: Object(o.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ne(n.gameCommerce.total),
                    lastRevenue: ne(a.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), r.createElement(Y, {
                    title: Object(o.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: ne(n.extensions.total),
                    lastRevenue: ne(a.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }))))), r.createElement(v._6, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, r.createElement(B, {
                    infoText: s
                }, Object(o.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), r.createElement(v._29, {
                    elevation: 1,
                    background: v.m.Base
                }, i))
            },
            te = function(e) {
                var t = Object(K.a)(e.totalAmount),
                    n = t.sign,
                    s = t.dollars,
                    i = t.cents;
                return r.createElement(v._6, a.__assign({
                    textAlign: v._39.Center,
                    padding: {
                        y: 2
                    }
                }, Z), r.createElement(v._6, {
                    display: v.P.Flex,
                    justifyContent: v._5.Center
                }, r.createElement(v._29, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: v.d.Start,
                    color: v.J.Alt2
                }, n), r.createElement(v.O, {
                    type: v._43.H2,
                    bold: !0
                }, s), r.createElement(v._6, {
                    alignSelf: v.d.End
                }, r.createElement(v.O, {
                    type: v._43.Span,
                    bold: !0
                }, "." + i))), r.createElement(v.O, {
                    type: v._43.H6
                }, Object(o.d)("Total Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            ne = function(e) {
                return Object(o.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            };
        n("z39C");

        function ae(e) {
            var t = e.messages,
                n = e.urls;
            return r.createElement(v._29, {
                display: v.P.Flex
            }, t.map(function(e, t) {
                return [e, n[t]]
            }).map(function(e, t) {
                return r.createElement(v._29, {
                    className: "insight-panel-btn",
                    background: v.m.Alt,
                    display: v.P.Flex,
                    flexGrow: 1,
                    flexWrap: v.S.NoWrap,
                    borderLeft: t > 0,
                    key: t
                }, r.createElement(v.u, {
                    type: v.A.Text,
                    linkTo: e[1],
                    targetBlank: !0,
                    fullWidth: !0
                }, r.createElement(v.O, null, e[0])))
            }))
        }
        n("G70b");
        var re = {
                1000: function() {
                    return Object(o.d)("Tier 1 subs", "ChannelAnalyticsSubscribersPanel")
                },
                2000: function() {
                    return Object(o.d)("Tier 2 subs", "ChannelAnalyticsSubscribersPanel")
                },
                3000: function() {
                    return Object(o.d)("Tier 3 subs", "ChannelAnalyticsSubscribersPanel")
                }
            },
            se = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.subscriptionRows = function() {
                        return n.state.subscriptions.map(function(e) {
                            return r.createElement(oe, {
                                name: re[e.plan](),
                                revSplit: e.revenueSplit + " / " + (100 - e.revenueSplit),
                                score: Object(o.e)(e.score),
                                count: Object(o.e)(e.count),
                                key: e.id
                            })
                        })
                    }, n.state = {
                        subscriptions: [],
                        isLoading: !0
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchSubscriptions()
                }, t.prototype.render = function() {
                    if (this.props.channel.role === b.d.None) return null;
                    if (this.state.isLoading) return r.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, r.createElement(v._12, {
                        height: 448
                    }));
                    var e = r.createElement(I.a, null),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        n = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return this.state.subscriptions.length && (e = r.createElement(r.Fragment, null, r.createElement(v._29, {
                        borderBottom: !0,
                        padding: {
                            top: 1,
                            bottom: 2
                        }
                    }, r.createElement(ie, null), this.subscriptionRows(), r.createElement(oe, {
                        name: Object(o.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                        score: Object(o.e)(t),
                        count: Object(o.e)(n)
                    })), r.createElement(ae, {
                        messages: [Object(o.d)("E-mail me my subscriber list", "ChannelAnalyticsSubscribersPanel"), Object(o.d)("Send e-mail to my subs", "ChannelAnalyticsSubscribersPanel")],
                        urls: ["", ""]
                    }))), r.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, r.createElement(B, null, Object(o.d)("How many subscribers do I have today?", "ChannelAnalyticsSubscribersPanel")), r.createElement(v._29, {
                        elevation: 1,
                        background: v.m.Base
                    }, e))
                }, t.prototype.fetchSubscriptions = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel.role === b.d.None ? [2, this.setState({
                                        isLoading: !1,
                                        subscriptions: []
                                    })] : (this.setState({
                                        isLoading: !0,
                                        subscriptions: []
                                    }), [4, O(this.props.channel.name)]);
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
            }(r.Component),
            ie = function() {
                return r.createElement(v._29, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: v._13.Relative
                }, r.createElement(v.W, null, r.createElement(v.K, {
                    cols: 8
                }, r.createElement(v._6, {
                    textAlign: v._39.Right
                }, r.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(o.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), r.createElement(v.K, {
                    cols: 2
                }, r.createElement(v._6, {
                    textAlign: v._39.Right
                }, r.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(o.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), r.createElement(v.K, {
                    cols: 2
                }, r.createElement(v._6, {
                    textAlign: v._39.Right
                }, r.createElement(v.O, {
                    type: v._43.H6,
                    bold: !0,
                    color: v.J.Alt2
                }, Object(o.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            },
            oe = function(e) {
                return r.createElement(v._29, {
                    className: "subscribers-panel-row",
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: v._13.Relative
                }, r.createElement(v.W, null, r.createElement(v.K, {
                    cols: 6
                }, r.createElement(v._6, {
                    textAlign: v._39.Left
                }, r.createElement(v.O, {
                    type: v._43.H5,
                    color: v.J.Alt
                }, e.name))), r.createElement(v.K, {
                    cols: 2
                }, r.createElement(v._6, {
                    textAlign: v._39.Right
                }, r.createElement(v.O, {
                    type: v._43.H5
                }, e.revSplit))), r.createElement(v.K, {
                    cols: 2
                }, r.createElement(v._6, {
                    textAlign: v._39.Right
                }, r.createElement(v.O, {
                    type: v._43.H5,
                    bold: !0
                }, e.score))), r.createElement(v.K, {
                    cols: 2
                }, r.createElement(v._6, {
                    textAlign: v._39.Right
                }, r.createElement(v.O, {
                    type: v._43.H5,
                    bold: !0
                }, e.count)))))
            },
            le = n("a+9f"),
            ce = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return r.createElement(v._6, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, r.createElement(v._12, {
                    height: 448
                }));
                var a = r.createElement(I.a, null),
                    s = Object(o.d)("View details", "ChannelAnalyticsTopClipsPanel");
                return n.clips.length && (a = r.createElement(r.Fragment, null, r.createElement(ue, {
                    clipsAttrs: n
                }), t ? r.createElement(U.a, {
                    message: s,
                    url: "/" + t + "/manager/clips/channel"
                }) : r.createElement("p", null, s))), r.createElement(v._6, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, r.createElement(B, null, Object(o.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), r.createElement(v._29, {
                    elevation: 1,
                    background: v.m.Base
                }, a))
            },
            ue = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(r.createElement(v._29, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, r.createElement(v._12, {
                        height: 50
                    })));
                return r.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return r.createElement(le.a, a.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            pe = function(e, t) {
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

        function me(e) {
            for (var t = [], n = e[0].length, a = function(n) {
                    t.push(e.map(function(e) {
                        return e[n]
                    }))
                }, r = 0; r < n; r++) a(r);
            return t
        }
        var de = function(e, t) {
                var n = e.revenue,
                    a = e.subscriptions,
                    r = [
                        [Object(o.d)("Date", "CSVExporterRevenue")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(o.d)("Sub Revenue", "CSVExporterRevenue")].concat(t.sum(n.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(o.d)("Twitch Prime Revenue", "CSVExporterRevenue")].concat(t.sum(n.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(o.d)("Bits Revenue", "CSVExporterRevenue")].concat(t.sum(n.bits.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(o.d)("Ad Revenue", "CSVExporterRevenue")].concat(t.sum(n.ads.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(o.d)("Game Sales Revenue", "CSVExporterRevenue")].concat(t.sum(n.gameCommerce.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(o.d)("Extensions Revenue", "CSVExporterRevenue")].concat(t.sum(n.extensions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(o.d)("Twitch Prime Subs", "CSVExporterRevenue")].concat(t.sum(a.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        })), [Object(o.d)("Subs", "CSVExporterRevenue")].concat(t.sum(a.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    ].concat(a.twitchSubscriptionProducts.map(function(e) {
                        return [Object(o.d)("{price} Sub", {
                            price: X(e.defaultPrice)
                        }, "CSVExporterRevenue")].concat(t.sum(e.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    }));
                return {
                    fileName: t.isByDay ? Object(o.d)("Revenue by day {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : t.isByWeek ? Object(o.d)("Revenue by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : Object(o.d)("Revenue by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue"),
                    csv: me(r).join("\n")
                }
            },
            he = function(e, t) {
                return t.isByDay ? function(e, t) {
                    var n = [
                        [Object(o.d)("Start Time", "CSVExporterStreamSessions"), Object(o.d)("End Time", "CSVExporterStreamSessions"), Object(o.d)("Average Viewers", "CSVExporterStreamSessions"), Object(o.d)("Max. Viewers", "CSVExporterStreamSessions"), Object(o.d)("Total Views", "CSVExporterStreamSessions"), Object(o.d)("Unique Views", "CSVExporterStreamSessions"), Object(o.d)("Minutes Watched", "CSVExporterStreamSessions"), Object(o.d)("New Followers", "CSVExporterStreamSessions"), Object(o.d)("Chatters", "CSVExporterStreamSessions"), Object(o.d)("Chat Messages", "CSVExporterStreamSessions"), Object(o.d)("Clips Created", "CSVExporterStreamSessions"), Object(o.d)("Clip Views", "CSVExporterStreamSessions"), Object(o.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessions"), Object(o.d)("Minutes Streamed", "CSVExporterStreamSessions")]
                    ];
                    return e.forEach(function(e) {
                        n.push(['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + e.avgViewerCount, "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialLengthTotal / 60, "" + Object(R.a)(e.interval)])
                    }), {
                        fileName: Object(o.d)("Stream Sessions {start, date} to {end, date}.csv", {
                            start: t.start,
                            end: t.end
                        }, "CSVExporterStreamSessions"),
                        csv: n.join("\n")
                    }
                }(e, t.interval) : function(e, t) {
                    var n, a = [
                        [Object(o.d)("Date", "CSVExporterStreamSessionsAggregated")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(o.d)("Average Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(R.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Max. Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.max(e, function(e) {
                            return {
                                value: e.maxViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Total Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalViewers,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Average Unique Views", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(R.a)(e.interval),
                                value: e.uniqueViewers,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Minutes Watched", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalMinutesWatched,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("New Followers", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Average Unique Chatters", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(R.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Chat Messages", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Clips Created", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipCreatesTotal,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Clip Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipPlaysTotal,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.commercialLengthTotal / 60,
                                date: e.interval.start
                            }
                        })), [Object(o.d)("Minutes Streamed", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: Object(R.a)(e.interval),
                                date: e.interval.start
                            }
                        }))
                    ];
                    n = t.isByWeek ? Object(o.d)("StreamSessions by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated") : Object(o.d)("StreamSessions by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated");
                    return {
                        fileName: n,
                        csv: me(a).join("\n")
                    }
                }(e, t)
            };
        var ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.download = function() {
                        var e;
                        e = t.props.dataGroup === _.b.StreamSummaries ? he(t.props.analyticsResponse.streamSessions.sessions, t.props.aggregation) : de({
                            revenue: t.props.analyticsResponse.revenue.streams,
                            subscriptions: t.props.analyticsResponse.subCounts.streams
                        }, t.props.aggregation), pe(e.fileName, e.csv)
                    }, t.isDataAvailable = function() {
                        return t.props.dataGroup === _.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : r.createElement(U.a, {
                        disabled: !this.isDataAvailable(),
                        message: Object(o.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                        onClick: this.download
                    })
                }, t
            }(r.Component),
            fe = n("IJpv"),
            be = function() {
                function e(e, t) {
                    var n = this;
                    switch (this.formatDateFromLabel = function(e) {
                        return n.formatDate(new Date(Number(e)))
                    }, this.formatShortDateFromLabel = function(e) {
                        return n.formatShortDate(new Date(Number(e)))
                    }, this.aggregationInterval = e, this.interval = t, this.aggregationInterval) {
                        case fe.a.Day:
                            this.addInterval = d.addDays, this.startOf = d.startOfDay, this.formatDate = function(e) {
                                return Object(o.c)(e, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(o.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case fe.a.Week:
                            this.addInterval = d.addWeeks, this.startOf = d.startOfWeek, this.formatDate = function(e) {
                                return Object(o.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                }) + " – " + Object(o.c)(Object(d.endOfWeek)(e), {
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(o.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case fe.a.Month:
                            this.addInterval = d.addMonths, this.startOf = d.startOfMonth, this.formatDate = function(e) {
                                return Object(o.c)(e, {
                                    month: "short",
                                    year: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(o.c)(e, {
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
                        return this.aggregationInterval === fe.a.Day
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByWeek", {
                    get: function() {
                        return this.aggregationInterval === fe.a.Week
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByMonth", {
                    get: function() {
                        return this.aggregationInterval === fe.a.Month
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
            ve = "channel-analytics-stats",
            ye = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.defaultTopStats = [], n.topStatsKeys = [], n.handleUpdateStat = function(e, t) {
                        n.state.selectedStats.indexOf(e) !== t && n.setState(function(r) {
                            var s = r.selectedStats.slice(),
                                i = r.selectedStats.indexOf(e);
                            s[t] = e, -1 !== i && (s[i] = n.getRemainingStats(s)[0]);
                            var l, c = n.storedStats;
                            return o.l.set(ve, a.__assign({}, c, ((l = {})[n.statsStorageKey] = s, l))), {
                                selectedStats: s
                            }
                        })
                    }, n.defaultTopStats = n.props.channel.role === b.d.None ? _.e : _.a, n.topStatsKeys = w(n.props.channel.role), n.state = {
                        selectedStats: n.defaultTopStats
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        selectedStats: this.getValidStoredStats()
                    })
                }, t.prototype.render = function() {
                    return this.props.children({
                        stats: this.state.selectedStats.map(function(e) {
                            return _.g[e]
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
                        return o.l.get(ve, ((e = {})[this.statsStorageKey] = [], e));
                        var e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getValidStoredStats = function() {
                    var e = this,
                        t = this.storedStats,
                        n = Array.isArray(t[this.statsStorageKey]) ? t[this.statsStorageKey] : [],
                        a = [],
                        r = this.topStatsKeys.slice();
                    return n.forEach(function(t) {
                        if (e.topStatsKeys.includes(t) && !a.includes(t)) return r.splice(r.indexOf(t), 1), a.push(t)
                    }), a.length ? a.length < _.d && (a = a.concat(r)) : a = this.defaultTopStats, a.slice(0, _.d)
                }, t.prototype.getRemainingStats = function(e) {
                    return this.topStatsKeys.filter(function(t) {
                        return !e.includes(t)
                    })
                }, t
            }(r.Component),
            Se = {
                "data-test-selector": "stats-dropdown-title"
            },
            Ce = {
                "data-test-selector": "date-picker-toggle"
            },
            Oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return r.createElement(v._6, {
                        position: v._13.Relative
                    }, r.createElement(A.a, {
                        control: function(e) {
                            var t = e.toggle;
                            return r.createElement(v._6, {
                                display: v.P.Flex,
                                fullHeight: !0
                            }, r.createElement(v.v, a.__assign({
                                ariaLabel: Object(o.d)("Select top statistic", "ChannelAnalyticsDropdownAria"),
                                icon: v._20.AngleDown,
                                onClick: t
                            }, Ce)))
                        }
                    }, function(t) {
                        var n = t.close;
                        return r.createElement(v.p, {
                            show: !0,
                            direction: v.q.BottomRight,
                            tailOffset: 8.5
                        }, e.props.availableStats.map(function(t) {
                            return r.createElement(v._4, a.__assign({
                                onClick: Object(h.compose)(n, e.props.onUpdateStat.bind(e, t, e.props.index)),
                                key: t,
                                alpha: !0
                            }, Se), r.createElement(v._6, {
                                padding: 1
                            }, r.createElement(v.O, {
                                color: v.J.Link
                            }, _.g[t].title())))
                        }))
                    }))
                }, t
            }(r.Component),
            _e = {
                "data-test-selector": "current-chart"
            },
            we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.chart = function(e) {
                        return r.createElement(e.definition.Chart, a.__assign({}, _e, {
                            analyticsResponse: t.props.analyticsResponse,
                            aggregation: e.aggregation
                        }))
                    }, t.handleAggregationChange = function(e) {
                        t.props.urlStore.replace({
                            topStatsAggregation: e.currentTarget.value
                        })
                    }, t.isDataAvailable = function(e) {
                        return e === _.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = new be(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params),
                        n = this.cappedIndex;
                    return r.createElement(ye, {
                        channel: this.props.channel
                    }, function(a) {
                        var s = a.stats,
                            i = a.onUpdateStat;
                        return r.createElement(v._29, {
                            background: v.m.Base,
                            elevation: 1
                        }, r.createElement(v._31, null, s.map(function(t, a) {
                            var s = t.Tab;
                            return r.createElement(s, {
                                analyticsResponse: e.props.analyticsResponse,
                                linkTo: e.props.urlStore.buildPathWithParams({
                                    topStatsIndex: a
                                }),
                                isActive: n === a,
                                key: a
                            }, r.createElement(Oe, {
                                availableStats: w(e.props.channel.role),
                                index: a,
                                onUpdateStat: i
                            }))
                        })), r.createElement(v._29, {
                            padding: 2,
                            borderBottom: !0
                        }, r.createElement(v._6, {
                            display: v.P.Flex,
                            flexDirection: v.R.RowReverse,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement("div", null, r.createElement(v._25, {
                            disabled: !e.isDataAvailable(s[n].dataGroup),
                            onChange: e.handleAggregationChange,
                            value: e.props.urlStore.params.topStatsAggregation
                        }, r.createElement("option", {
                            value: fe.a.Day
                        }, Object(o.d)("Day", "ChannelAnalyticsTopStats")), r.createElement("option", {
                            value: fe.a.Week
                        }, Object(o.d)("Week", "ChannelAnalyticsTopStats")), r.createElement("option", {
                            value: fe.a.Month
                        }, Object(o.d)("Month", "ChannelAnalyticsTopStats"))))), r.createElement(e.chart, {
                            definition: s[n],
                            aggregation: t
                        })), r.createElement(ge, {
                            analyticsResponse: e.props.analyticsResponse,
                            aggregation: t,
                            dataGroup: s[n].dataGroup
                        }))
                    })
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        var e = _.d - 1;
                        return Math.min(e, this.props.urlStore.params.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Ee = (n("G6h4"), {
                "data-test-selector": "card-image"
            }),
            Te = function(e) {
                var t = e.stream,
                    n = e.statNum;
                return r.createElement(v._6, {
                    className: "stream-card-row"
                }, r.createElement(v._4, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, r.createElement(v._29, {
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, r.createElement(v.B, {
                    row: !0
                }, r.createElement(v.D, a.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: v.E.Size8,
                    aspect: v.k.Aspect16x9
                }, Ee)), r.createElement(v.C, {
                    overflow: v._9.Hidden
                }, r.createElement(v._6, {
                    display: v.P.Flex,
                    flexGrow: 1,
                    alignItems: v.c.Center,
                    justifyContent: v._5.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, r.createElement(v._6, {
                    display: v.P.Flex,
                    flexDirection: v.R.Column,
                    ellipsis: !0
                }, r.createElement(v.O, {
                    color: v.J.Base,
                    type: v._43.H5,
                    ellipsis: !0
                }, Object(o.d)("{start} - {end, time, short}", {
                    start: Object(o.c)(t.interval.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.interval.end
                }, "ChannelAnalyticsStreamCard")), r.createElement(v.O, {
                    color: v.J.Alt2,
                    type: v._43.Span,
                    ellipsis: !0
                }, t.startChannelStatus)))), r.createElement(v._6, {
                    display: v.P.Flex,
                    flexGrow: 1,
                    justifyContent: v._5.End,
                    padding: {
                        left: 2
                    }
                }, r.createElement(v.O, {
                    bold: !0,
                    fontSize: v.T.Size5,
                    color: v.J.Alt,
                    type: v._43.Span
                }, Object(o.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(n)
                }, "ChannelAnalyticsStreamCard")))))))
            };
        var je, De = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers"
        }(je || (je = {}));
        var Ae = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortDropdown = function() {
                        return r.createElement(v._25, {
                            value: n.state.sortType,
                            onChange: n.handleSortTypeChange
                        }, r.createElement("option", {
                            value: je.AvgViewers
                        }, Object(o.d)("Average Viewers", "ChannelAnalyticsTopStreamsPanel")), r.createElement("option", {
                            value: je.NewFollowers
                        }, Object(o.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")))
                    }, n.streamsList = function() {
                        return r.createElement(v._6, null, n.sortedStreamSummaries().slice(0, De).map(function(e, t) {
                            return r.createElement(Te, {
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
                            case je.NewFollowers:
                                return e.followersChange;
                            case je.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, n.sortedStreamSummaries = function() {
                        var e = n.props.streamSessions.sessions.slice();
                        switch (n.state.sortType) {
                            case je.NewFollowers:
                                return Object(C.d)(e, [function(e) {
                                    return e.followersChange
                                }], [C.a.Descending]);
                            case je.AvgViewers:
                            default:
                                return Object(C.d)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending])
                        }
                    }, n.state = {
                        sortType: je.AvgViewers
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.streamSessions.isLoading) return r.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, r.createElement(v._12, {
                        height: 448
                    }));
                    var e = r.createElement(I.a, null);
                    return this.props.streamSessions.sessions.length >= 3 && (e = r.createElement(r.Fragment, null, r.createElement(v._6, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: v.P.Flex
                    }, r.createElement(v._6, {
                        flexGrow: 1
                    }, r.createElement(v.O, {
                        type: v._43.H5,
                        bold: !0
                    }, Object(o.d)("Top {limit}", {
                        limit: De
                    }, "ChannelAnalyticsTopStreamsPanel"))), r.createElement(v._6, null, this.sortDropdown())), r.createElement(v._6, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, this.streamsList()))), r.createElement(v._6, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, r.createElement(B, null, Object(o.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")), r.createElement(v._29, {
                        elevation: 1,
                        background: v.m.Base
                    }, e))
                }, t
            }(r.Component),
            xe = (n("T0UN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.urlStore,
                        n = e.channelAnalyticsResponse,
                        a = e.channel;
                    return r.createElement(M, null, r.createElement(F, {
                        urlStore: t
                    }), r.createElement(we, {
                        channel: a,
                        urlStore: t,
                        analyticsResponse: n
                    }), r.createElement(v._29, {
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
                    }, r.createElement(v._6, {
                        className: "channel-analytics-index-page__col",
                        display: v.P.Flex,
                        flexGrow: 1,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(ee, {
                        channel: a,
                        revenue: n.revenue,
                        subCounts: n.subCounts
                    }), r.createElement(J, {
                        streamSessions: n.streamSessions,
                        urlStore: t,
                        channelName: a.name
                    }), r.createElement(ce, {
                        channel: a.name,
                        topClips: n.topClips
                    })), r.createElement(v._6, {
                        className: "channel-analytics-index-page__col",
                        display: v.P.Flex,
                        flexGrow: 1,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(se, {
                        channel: a
                    }), r.createElement(Ae, {
                        streamSessions: n.streamSessions
                    }))))
                }, t
            }(r.Component)),
            Re = Object(i.d)(Object(m.d)("ChannelAnalyticsIndexPage", {
                destination: u.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: p.PageviewLocation.DashboardChannelAnalytics
            }))(xe),
            ke = n("yLtb"),
            Pe = (n("lV23"), function(e) {
                return e
            }),
            Ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.channelAnalyticsResponse.streamSessions,
                        t = e.isLoading,
                        n = e.sessions,
                        a = Object(z.a)(n.map(function(e) {
                            return e.videoPlayPlatforms
                        })),
                        s = Object(z.a)(n.map(function(e) {
                            return e.videoPlayGeographics
                        })),
                        i = Object(z.a)(n.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        l = Object(z.a)(n.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        c = Object(z.a)(n.map(function(e) {
                            return e.videoPlayExternalReferrers
                        }));
                    return r.createElement(M, null, r.createElement(v._29, {
                        elevation: 1,
                        background: v.m.Base,
                        display: v.P.Flex,
                        position: v._13.Relative,
                        flexDirection: v.R.Row,
                        flexWrap: v.S.NoWrap,
                        className: "referrals-page-nav-bar",
                        borderBottom: !0
                    }, r.createElement(v._29, {
                        position: v._13.Absolute,
                        display: v.P.Flex,
                        flexDirection: v.R.Row,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, r.createElement(v.u, {
                        type: v.A.Text,
                        linkTo: "/" + this.props.channel.name + "/dashboard/channel-analytics" + this.props.urlStore.searchStringWith()
                    }, r.createElement(v._6, {
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(v.O, null, Object(o.d)("Back", "ChannelAnalyticsReferralPage"))))), r.createElement(v._29, {
                        display: v.P.Flex,
                        flexGrow: 1,
                        flexWrap: v.S.NoWrap,
                        justifyContent: v._5.Center,
                        alignItems: v.c.Center
                    }, r.createElement(v.O, {
                        type: v._43.H2,
                        fontSize: v.T.Size4,
                        bold: !0
                    }, Object(o.d)("Views by Source", "ChannelAnalyticsReferralPage")))), r.createElement(F, {
                        urlStore: this.props.urlStore
                    }), r.createElement(v._6, {
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
                    }, r.createElement(v._6, {
                        className: "channel-analytics-referrals-page__col",
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(Fe, {
                        isLoading: t,
                        referrals: s.items.slice(0, 15),
                        totals: s.totals,
                        translationFunc: ke.b,
                        title: Object(o.d)("Views by Location", "ChannelAnalyticsReferralPage")
                    }), r.createElement(Fe, {
                        isLoading: t,
                        referrals: a.items.slice(0, 15),
                        totals: a.totals,
                        translationFunc: N.c,
                        title: Object(o.d)("Views by Platform", "ChannelAnalyticsReferralPage")
                    })), r.createElement(v._6, {
                        className: "channel-analytics-referrals-page__col",
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        flexDirection: v.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(Fe, {
                        isLoading: t,
                        referrals: l.items.slice(0, 15),
                        totals: l.totals,
                        translationFunc: N.b,
                        title: Object(o.d)("Views from Twitch", "ChannelAnalyticsReferralPage")
                    }), r.createElement(Fe, {
                        isLoading: t,
                        referrals: i.items.slice(0, 15),
                        totals: i.totals,
                        translationFunc: Pe,
                        title: Object(o.d)("Views from Channels", "ChannelAnalyticsReferralPage")
                    }), r.createElement(Fe, {
                        isLoading: t,
                        referrals: c.items.slice(0, 15),
                        totals: c.totals,
                        translationFunc: N.a,
                        title: Object(o.d)("Views from Outside Twitch", "ChannelAnalyticsReferralPage")
                    }))))
                }, t
            }(r.Component);

        function Fe(e) {
            var t = e.isLoading,
                n = e.referrals,
                a = e.totals,
                s = e.translationFunc,
                i = e.title;
            return t ? r.createElement(v._6, {
                margin: {
                    bottom: 2
                }
            }, r.createElement(v._12, {
                height: 350
            })) : r.createElement(v._29, {
                padding: {
                    bottom: 1
                },
                margin: {
                    bottom: 2
                },
                elevation: 1,
                background: v.m.Base
            }, r.createElement(G.a, {
                referrals: n,
                totals: a,
                translationFunc: s,
                title: i
            }))
        }
        var Le = Object(i.d)(Object(m.d)("ChannelAnalyticsReferralsPage", {
                destination: u.a.ChannelDashboardChannelAnalyticsReferrals,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: p.PageviewLocation.DashboardChannelAnalyticsReferrals
            }))(Ve),
            Me = n("kA6m"),
            Ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.pathname !== this.props.location.pathname || e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Me.URLStore(this.props.location, this.props.history, this.props.now);
                    return D(e.params, this.props.now) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t
            }(r.Component),
            We = n("HCOe"),
            Be = n("OAwv");

        function Ie(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }
        var Ue = n("+TF1"),
            ze = n("DNvj");
        var Ge = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: Me.RevenueStreams.buildEmpty(),
                            lookbackStreams: Me.RevenueStreams.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            streams: Me.SubCountStreams.buildEmpty(),
                            lookbackStreams: Me.SubCountStreams.buildEmpty(),
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
                    Object(b.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : r.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, s, i = this;
                        return a.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        streamSessions: a.__assign({}, this.state.streamSessions, {
                                            isLoading: !0
                                        })
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, Object(Ue.b)(this.props.channel, e)]) : [2];
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
                                    }), [4, Object(ze.a)(this.props.channel.name, this.props.interval)]) : [2];
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
                        var e, t, n, r, s;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        revenue: {
                                            streams: Me.RevenueStreams.buildEmpty(),
                                            lookbackStreams: Me.RevenueStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var n, r, s, i;
                                            return a.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === b.d.None ? [2, {
                                                            isError: !1,
                                                            streams: Me.EMPTY_REVENUE_RESPONSE
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", r = Be.stringify(a.__assign({}, Ie(t.start, Object(d.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [n, r].join("?"), [4, Object(C.c)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            streams: Me.EMPTY_REVENUE_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            streams: i.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = i.sent()).isError ? [2] : (n = Me.RevenueStreams.partitionFromPayload(t.streams, {
                                        splitAt: this.props.lookbackInterval.end,
                                        max: this.props.interval.end
                                    }), r = n[0], s = n[1], this.setState({
                                        revenue: {
                                            isLoading: !1,
                                            streams: r,
                                            lookbackStreams: s
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchSubCounts = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, s;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            streams: Me.SubCountStreams.buildEmpty(),
                                            lookbackStreams: Me.SubCountStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var n, r, s, i;
                                            return a.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === b.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: Me.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", r = Be.stringify(a.__assign({}, Ie(t.start, Object(d.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [n, r].join("?"), [4, Object(C.c)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (i = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: Me.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: i.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = i.sent()).isError ? [2] : (n = Me.SubCountStreams.partitionFromPayload(t.subscriptions, {
                                        splitAt: this.props.lookbackInterval.end,
                                        max: this.props.interval.end
                                    }), r = n[0], s = n[1], this.setState({
                                        subCounts: {
                                            isLoading: !1,
                                            streams: r,
                                            lookbackStreams: s
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(r.Component),
            qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle(Object(o.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.channel) return null;
                    var t = b.c.fromChannelData(this.props.data.channel);
                    return r.createElement(Ne, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(n) {
                        return r.createElement(Ge, {
                            interval: n.params,
                            lookbackInterval: Object(R.h)(n.params, -1),
                            channel: t
                        }, function(a) {
                            return r.createElement(r.Fragment, null, r.createElement(s.c, {
                                path: "/:channelName/dashboard/channel-analytics",
                                exact: !0,
                                render: He.bind(e, t, n, a)
                            }), r.createElement(s.c, {
                                path: "/:channelName/dashboard/channel-analytics/referrals",
                                exact: !0,
                                render: Je.bind(e, t, n, a)
                            }))
                        })
                    })
                }, t
            }(r.Component),
            He = function(e, t, n) {
                return r.createElement(Re, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: n
                })
            },
            Je = function(e, t, n) {
                return r.createElement(Le, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: n
                })
            },
            Ke = Object(i.d)(Object(l.a)(We, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(qe);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return qe
        }), n.d(t, "ChannelAnalyticsPageRoot", function() {
            return Ke
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
                    return s.createElement(l._0, {
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
            u = (n("i/9b"), "#898395"),
            p = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            m = "rgba(0, 0, 0, 0)",
            d = "#ffffff",
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
                                            color: d,
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
                                    bodyFontColor: d,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: m,
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
                            borderColor: m,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(l._6, {
                        className: "top-stats-chart",
                        position: l._13.Relative
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
                            backgroundColor: e.color || p[t % p.length]
                        }
                    })
                }, t
            }(s.Component),
            g = (n("RpnM"), function() {
                return s.createElement(l._6, {
                    className: "top-stats-chart-loading",
                    flexGrow: 1,
                    flexShrink: 0,
                    justifyContent: l._5.Center,
                    fullWidth: !0
                }, s.createElement(l._8, {
                    fillContent: !0
                }))
            }),
            f = n("dPMn"),
            b = (n("Ukf0"), function() {
                return s.createElement(l._6, {
                    className: "top-stats-chart-no-data",
                    display: l.P.Flex
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
                    if (this.props.streamSessionsResponse.isLoading) return s.createElement(g, null);
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
                    })), s.createElement(h, {
                        labels: t,
                        datasets: n,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                        onDatasetClick: this.handleDatasetClick
                    })) : s.createElement(b, null)
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
            C = function(e) {
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
            O = function(e) {
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
            _ = function(e) {
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
            w = function(e) {
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
            E = function(e) {
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
            T = function(e) {
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
            A = function(e) {
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
                    if (this.props.analyticsResponse.revenue.isLoading) return s.createElement(g, null);
                    var e = this.props.analyticsResponse.revenue.streams;
                    return e.getTotalAmountAllStreams() ? s.createElement(h, {
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
                    }) : s.createElement(b, null)
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
                    if (this.props.analyticsResponse.subCounts.isLoading) return s.createElement(g, null);
                    var e = this.props.analyticsResponse.subCounts.streams;
                    return e.getTotalSubCount() ? s.createElement(h, {
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
                    }) : s.createElement(b, null)
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
            P = n("yiqh"),
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
                        return Object(P.a)(t)
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
            F = n("HW6M"),
            L = n("F8kA"),
            M = (n("fnik"), {
                "data-test-selector": "up-trend-indicator"
            }),
            N = {
                "data-test-selector": "down-trend-indicator"
            },
            W = {
                "data-test-selector": "tab-selector"
            },
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = F("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return s.createElement(l._6, r.__assign({
                        className: e,
                        display: l.P.Flex,
                        flexGrow: 1
                    }, W), s.createElement(l._0, {
                        flexGrow: 1,
                        flexDirection: l.R.Column,
                        textAlign: l._39.Center
                    }, s.createElement(L.a, {
                        to: this.props.linkTo,
                        className: "top-stats-tab__link",
                        replace: !0
                    }, s.createElement(l._6, {
                        display: l.P.Flex,
                        flexGrow: 1,
                        flexDirection: l.R.Column,
                        padding: {
                            left: 2,
                            right: 1,
                            y: 1
                        },
                        ellipsis: !0
                    }, s.createElement(l.O, {
                        className: "top-stats-tab__title",
                        type: l._43.H3
                    }, this.props.title, this.renderTrendIndicator()), s.createElement(l.O, {
                        type: l._43.H6,
                        color: l.J.Alt2,
                        title: this.props.subtitle,
                        ellipsis: !0
                    }, this.props.subtitle)))), this.props.children)
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? s.createElement(l._6, {
                        display: l.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(l._19, r.__assign({
                        asset: l._20.GlyphArrUp,
                        type: l._21.Success
                    }, M))) : this.props.trend < 0 ? s.createElement(l._6, {
                        display: l.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(l._19, r.__assign({
                        asset: l._20.GlyphArrDown,
                        type: l._21.Warn
                    }, N))) : null : null
                }, t
            }(s.Component),
            I = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.adBreaks,
                        n = this.previousAdBreaks,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(i.b)(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Ad Breaks", "ChannelAnalyticsTopStats"),
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
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        n = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Unique Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
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
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
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
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageMessages(this.props.analyticsResponse.streamSessions.sessions),
                        n = this.averageMessages(this.props.analyticsResponse.streamSessions.lookbackSessions),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
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
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.sessions),
                        n = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.lookbackSessions),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Average Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
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
                    }), s.createElement(B, {
                        title: e,
                        subtitle: Object(a.d)("Clip Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: r.length ? Math.sign(n - t) : 0
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
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Clips Created", "ChannelAnalyticsTopStats"),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.liveViews,
                        n = this.previousLiveViews,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Live Views", "ChannelAnalyticsTopStats"),
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
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.maxViewers,
                        n = this.previousMaxViewers,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Max Viewers", "ChannelAnalyticsTopStats"),
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
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.minutesWatched,
                        n = this.previousMinutesWatched,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.e)(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Minutes Watched", "ChannelAnalyticsTopStats"),
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
                    }(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("New Followers", "ChannelAnalyticsTopStats"),
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
        var Z, ee, te = n("XTbU"),
            ne = (n("w5Qh"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return s.createElement(B, {
                        title: this.renderTitle(t),
                        trend: t ? Math.sign(t - e) : 0,
                        subtitle: Object(a.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.renderTitle = function(e) {
                    if (this.props.analyticsResponse.revenue.isLoading || !this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams()) return "—";
                    var t = Object(te.a)(e),
                        n = t.sign,
                        a = t.dollars,
                        r = t.cents;
                    return s.createElement("span", null, s.createElement(l.O, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: l.T.Size6,
                        type: l._43.Span
                    }, n + " "), s.createElement(l.O, {
                        type: l._43.Span
                    }, a), s.createElement(l.O, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: l.T.Size4,
                        type: l._43.Span
                    }, "." + r))
                }, t
            }(s.Component)),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.analyticsResponse.subCounts.streams.getTotalSubCount(),
                        n = this.props.analyticsResponse.subCounts.lookbackStreams.getTotalSubCount();
                    return e = this.props.analyticsResponse.subCounts.isLoading || !t ? "—" : Object(a.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(B, {
                        title: e,
                        trend: t ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Subscriptions", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t
            }(s.Component),
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.timeStreamed,
                        n = this.previousTimeStreamed,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(P.a)(t), s.createElement(B, {
                        title: e,
                        trend: r.length ? Math.sign(t - n) : 0,
                        subtitle: Object(a.d)("Time Streamed", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
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
            e.AdBreaks = "ad-breaks", e.AverageUniqueViewers = "avg-unique-viewers", e.AverageViewers = "avg-viewers", e.ChatMessages = "chat-messages", e.Chatters = "chatters", e.ClipsCreated = "clips-created", e.ClipViews = "clip-views", e.LiveViews = "live-views", e.MaxViewers = "max-viewers", e.MinutesWatched = "minutes-watched", e.NewFollowers = "new-followers", e.Revenue = "revenue", e.Subscriptions = "subscriptions", e.TimeStreamed = "time-streamed"
        }(Z || (Z = {})),
        function(e) {
            e[e.StreamSummaries = 0] = "StreamSummaries", e[e.Revenue = 1] = "Revenue"
        }(ee || (ee = {}));
        var se, ie = ((se = {})[Z.AverageViewers] = {
                title: function() {
                    return Object(a.d)("Average Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: G,
                Chart: O,
                dataGroup: ee.StreamSummaries
            }, se[Z.LiveViews] = {
                title: function() {
                    return Object(a.d)("Live Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Y,
                Chart: j,
                dataGroup: ee.StreamSummaries
            }, se[Z.NewFollowers] = {
                title: function() {
                    return Object(a.d)("New Followers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: $,
                Chart: x,
                dataGroup: ee.StreamSummaries
            }, se[Z.Subscriptions] = {
                title: function() {
                    return Object(a.d)("Subscriptions", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ae,
                Chart: k,
                dataGroup: ee.Revenue
            }, se[Z.Revenue] = {
                title: function() {
                    return Object(a.d)("Revenue", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ne,
                Chart: R,
                dataGroup: ee.Revenue
            }, se[Z.MinutesWatched] = {
                title: function() {
                    return Object(a.d)("Minutes Watched", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Q,
                Chart: A,
                dataGroup: ee.StreamSummaries
            }, se[Z.TimeStreamed] = {
                title: function() {
                    return Object(a.d)("Time Streamed", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: re,
                Chart: V,
                dataGroup: ee.StreamSummaries
            }, se[Z.MaxViewers] = {
                title: function() {
                    return Object(a.d)("Max Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: X,
                Chart: D,
                dataGroup: ee.StreamSummaries
            }, se[Z.AverageUniqueViewers] = {
                title: function() {
                    return Object(a.d)("Average Unique Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: U,
                Chart: C,
                dataGroup: ee.StreamSummaries
            }, se[Z.Chatters] = {
                title: function() {
                    return Object(a.d)("Average Chatters", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: H,
                Chart: w,
                dataGroup: ee.StreamSummaries
            }, se[Z.ChatMessages] = {
                title: function() {
                    return Object(a.d)("Average Chat Messages", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: q,
                Chart: _,
                dataGroup: ee.StreamSummaries
            }, se[Z.ClipsCreated] = {
                title: function() {
                    return Object(a.d)("Clips Created", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: K,
                Chart: T,
                dataGroup: ee.StreamSummaries
            }, se[Z.ClipViews] = {
                title: function() {
                    return Object(a.d)("Clip Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: J,
                Chart: E,
                dataGroup: ee.StreamSummaries
            }, se[Z.AdBreaks] = {
                title: function() {
                    return Object(a.d)("Ad Breaks", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: I,
                Chart: S,
                dataGroup: ee.StreamSummaries
            }, se),
            oe = [Z.AverageViewers, Z.LiveViews, Z.ChatMessages, Z.Revenue, Z.Subscriptions],
            le = [Z.AverageViewers, Z.LiveViews, Z.ChatMessages, Z.NewFollowers, Z.MinutesWatched],
            ce = [Z.AverageViewers, Z.LiveViews, Z.NewFollowers, Z.MinutesWatched, Z.TimeStreamed, Z.MaxViewers, Z.AverageUniqueViewers, Z.Chatters, Z.ChatMessages, Z.ClipsCreated, Z.ClipViews, Z.AdBreaks],
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
            return Z
        }), n.d(t, "b", function() {
            return ee
        }), n.d(t, "g", function() {
            return ie
        }), n.d(t, "d", function() {
            return 5
        }), n.d(t, "a", function() {
            return oe
        }), n.d(t, "e", function() {
            return le
        }), n.d(t, "f", function() {
            return ce
        }), n.d(t, "c", function() {
            return ue
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
    },
    z39C: function(e, t) {}
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-root-d12268942f64b1333ac0590bf5c11a74.js.map