webpackJsonp([78], {
    "+ear": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var n = r("TToO"),
            a = r("wuJz"),
            s = (r.n(a), r("OAwv")),
            o = (r.n(s), r("IJpv")),
            i = function() {
                function e(e, t, r) {
                    void 0 === r && (r = new Date);
                    var i = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = i.buildPathWithParams(e);
                        i.history.replace(t)
                    }, this.searchStringWith = function(e) {
                        void 0 === e && (e = {});
                        var t = function(e) {
                                var t = {};
                                for (var r in e) {
                                    var n = e[r];
                                    "" !== n && (t[r] = n)
                                }
                                return t
                            }(n.__assign({}, i.rawParams, function(e) {
                                var t = {};
                                e.hasOwnProperty("end") && (t.end = l(e.end));
                                e.hasOwnProperty("start") && (t.start = l(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(r = e.topStatsIndex) && String(r) || "");
                                var r;
                                e.hasOwnProperty("topStatsAggregation") && (t.topStatsAggregation = e.topStatsAggregation || "");
                                return t
                            }(e))),
                            r = s.stringify(t);
                        return r.length ? "?" + r : ""
                    }, this.buildPathWithParams = function(e) {
                        return "" + i.location.pathname + i.searchStringWith(e)
                    }, this.location = e, this.history = t, this.rawParams = s.parse(e.search);
                    var u = c(this.rawParams.start) || Object(a.startOfMonth)(r),
                        p = Object(a.endOfDay)(c(this.rawParams.end) || r),
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
    BoWu: function(e, t, r) {
        "use strict";
        r.d(t, "c", function() {
            return s
        }), r.d(t, "b", function() {
            return o
        }), r.d(t, "a", function() {
            return i
        });
        var n = r("6sO2"),
            a = function() {
                return Object(n.d)("Other", "DemographicsData")
            },
            s = function(e) {
                return {
                    unknown: Object(n.d)("Unknown", "DemographicsData"),
                    tv: Object(n.d)("TV", "DemographicsData"),
                    ios: Object(n.d)("iOS App", "DemographicsData"),
                    web: Object(n.d)("Web", "DemographicsData"),
                    android: Object(n.d)("Android App", "DemographicsData"),
                    mobile_web: Object(n.d)("Mobile Web", "DemographicsData"),
                    mobile_aggregated: Object(n.d)("Mobile", "DemographicsData"),
                    console: Object(n.d)("Console", "DemographicsData"),
                    other: a()
                }[e] || e
            },
            o = function(e) {
                return {
                    other: a(),
                    front_page_featured: Object(n.d)("Featured Section - Front Page", "DemographicsData"),
                    creative_page_featured: Object(n.d)("Featured Section - Creative Page", "DemographicsData"),
                    hosted: Object(n.d)("Hosts", "DemographicsData"),
                    email_live_notification: Object(n.d)("Notifications - Email", "DemographicsData"),
                    onsite_notification: Object(n.d)("Notifications - Onsite", "DemographicsData"),
                    followed_channel: Object(n.d)("Followers", "DemographicsData"),
                    directory_browse: Object(n.d)("Browse Page", "DemographicsData"),
                    search: Object(n.d)("Searches", "DemographicsData"),
                    clips_live: Object(n.d)("Clips", "DemographicsData"),
                    friend_presence: Object(n.d)("Friends", "DemographicsData"),
                    top_nav_bar: Object(n.d)("Your Channel Page", "DemographicsData"),
                    recommended_channel: Object(n.d)("Recommendations", "DemographicsData"),
                    other_channel_page: Object(n.d)("Other Channel Page", "DemographicsData")
                }[e] || Object(n.d)("{name}'s Channel Page", {
                    name: e
                }, "DemographicsData")
            },
            i = function(e) {
                var t;
                return ((t = {
                    facebook: Object(n.d)("Facebook", "DemographicsData"),
                    google: Object(n.d)("Google", "DemographicsData"),
                    reddit: Object(n.d)("Reddit", "DemographicsData"),
                    youtube: Object(n.d)("Youtube", "DemographicsData")
                })["t.co"] = Object(n.d)("Twitter", "DemographicsData"), t.unknown = Object(n.d)("Direct/Unknown", "DemographicsData"), t.twitch_aggregate = Object(n.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(n.d)("External", "DemographicsData"), t)[e] || e
            }
    },
    Goi1: function(e, t) {},
    HCOe: function(e, t) {
        var r = {
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
        r.loc.source = {
            body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    IJpv: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "a", function() {
                return n
            }), t.b = function(e) {
                if (e === n.Week || e === n.Month) return e;
                return n.Day
            },
            function(e) {
                e.Day = "day", e.Week = "week", e.Month = "month"
            }(n || (n = {}))
    },
    JczT: function(e, t) {},
    WHrl: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        }), r.d(t, "b", function() {
            return i
        });
        var n = r("TToO"),
            a = r("tiQ5"),
            s = r("x9gg"),
            o = {
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            i = function() {
                function e(e) {
                    var t = this,
                        r = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.b;
                    this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = r.map(function(e) {
                        return n.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
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
                }, e.partitionFromPayload = function(t, r) {
                    var n = this.normalizePayload(t),
                        a = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        o = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        i = function(e) {
                            return e.date > r.end
                        },
                        c = Object(s.a)(n.primeSubscriptions, i),
                        l = c[0],
                        u = c[1];
                    return a.primeSubscriptions = l, o.primeSubscriptions = u, n.twitchSubscriptionProducts.forEach(function(e) {
                        var t = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            r = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            n = Object(s.a)(e.timeseries, i),
                            c = n[0],
                            l = n[1];
                        t.timeseries = c, r.timeseries = l, a.twitchSubscriptionProducts.push(t), o.twitchSubscriptionProducts.push(r)
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
                            var r = {
                                defaultPrice: e.default_price,
                                productID: e.product_id
                            };
                            return n.__assign({}, r, {
                                timeseries: t.normalizeTimeseries(e.sub_counts, r)
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
    XTbU: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return a
        });
        var n = r("6sO2"),
            a = function(e) {
                var t = Object(n.e)(e, {
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
    ehuU: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("TToO"),
            a = r("GiK3"),
            s = r("CIox"),
            o = r("2KeS"),
            i = r("6sO2"),
            c = r("zCIC"),
            l = r("7vx8"),
            u = r("j7/Y"),
            p = r("w9tK"),
            d = r("vH/s"),
            m = r("CSlQ"),
            h = r("wuJz"),
            f = r("3zLD"),
            b = r("6UW8"),
            g = (r("eZz2"), function(e) {
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
                return n.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(h.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(h.startOfDay)(this.props.endRange)), this.picker.setMinDate(Object(h.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(h.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(h.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(a.Component)),
            y = r("AJEV"),
            O = r("Odds"),
            v = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this,
                        n = t.now || new Date,
                        a = Object(h.endOfDay)(n),
                        s = Object(h.startOfDay)(n),
                        o = Object(h.startOfMonth)(n);
                    return r.presets = [{
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
                            start: Object(h.startOfMonth)(Object(h.subMonths)(n, 1)),
                            end: Object(h.endOfMonth)(Object(h.subMonths)(n, 1))
                        }
                    }, {
                        message: Object(i.c)(Object(h.subMonths)(a, 2), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(h.startOfMonth)(Object(h.subMonths)(n, 2)),
                            end: Object(h.endOfMonth)(Object(h.subMonths)(n, 2))
                        }
                    }], r
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(O._4, {
                        display: O.P.Flex,
                        flexDirection: O.R.Column
                    }, this.presets.map(function(t, r) {
                        return a.createElement(O._27, {
                            color: O.J.Link,
                            key: r
                        }, a.createElement(O._2, {
                            selected: Object(y.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval)
                        }, a.createElement(O._27, {
                            padding: 1,
                            textAlign: O._37.Center
                        }, a.createElement(O.O, {
                            noWrap: !0,
                            fontSize: O.T.Size5
                        }, t.message))))
                    }))
                }, t.prototype.handleClickFor = function(e) {
                    var t = this;
                    return function() {
                        return t.props.onChange(e)
                    }
                }, t
            }(a.Component),
            S = r("tiQ5");

        function j(e, t, r) {
            void 0 === r && (r = new Date);
            var a = n.__assign({}, e, t);
            if (Object(h.differenceInDays)(a.end, a.start) >= 0) return a;
            var s = Object(h.differenceInDays)(e.end, e.start);
            if (Object(h.isEqual)(e.end, a.end)) {
                var o = Object(h.startOfDay)(r),
                    i = Object(h.addDays)(a.start, s);
                return i > o && (i = o), n.__assign({}, a, {
                    end: i
                })
            }
            return Object(h.isEqual)(e.start, a.start) ? n.__assign({}, a, {
                start: Object(h.subDays)(a.end, s)
            }) : e
        }
        var C = r("PGY2");

        function _(e) {
            return n.__awaiter(this, void 0, void 0, function() {
                var t, r, a, s, o;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", r = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(C.e)({
                                path: t
                            }), Object(C.e)({
                                path: r
                            })])];
                        case 1:
                            return a = n.sent(), s = a[0], o = a[1], s.isError() || o.isError() ? [2, {
                                isError: !0,
                                subscriptions: []
                            }] : [2, {
                                isError: !1,
                                subscriptions: function(e, t) {
                                    var r = e.active_products.reduce(function(e, t) {
                                        var r = {
                                            id: t.id,
                                            customName: t.custom_name,
                                            plan: t.plan,
                                            price: t.price,
                                            revenueSplit: t.revenue_split,
                                            count: 0,
                                            score: 0
                                        };
                                        return e.set(r.plan, r), e
                                    }, new Map);
                                    r = t.count_breakdown.reduce(function(e, t) {
                                        var r = e.get(t.plan);
                                        return r && (r.count = t.count, e.set(r.plan, r)), e
                                    }, r), r = t.score_breakdown.reduce(function(e, t) {
                                        var r = e.get(t.plan);
                                        return r && (r.score = t.score, e.set(r.plan, r)), e
                                    }, r);
                                    var n = Array.from(r.values());
                                    return Object(C.f)(n, [function(e) {
                                        return e.plan
                                    }], [C.a.Ascending])
                                }(s.body, o.body)
                            }]
                    }
                })
            })
        }
        var E = {
                "data-test-selector": "commit-button"
            },
            w = {
                "data-test-selector": "cancel-button"
            },
            D = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.handleStartChange = function(e) {
                        var t = j(r.state.interval, {
                            start: e
                        });
                        r.setState({
                            interval: t
                        })
                    }, r.handleEndChange = function(e) {
                        var t = j(r.state.interval, {
                            end: e
                        });
                        r.setState({
                            interval: t
                        })
                    }, r.handleUpdateClick = function() {
                        r.props.onCommit(r.state.interval)
                    }, r.state = {
                        interval: r.props.interval
                    }, r
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return a.createElement("div", null, a.createElement(O._4, {
                        display: O.P.Flex,
                        flexWrap: O.S.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(O._4, {
                        padding: {
                            right: 2
                        }
                    }, a.createElement(g, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: S.d,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), a.createElement(O._4, {
                        padding: {
                            right: 2
                        }
                    }, a.createElement(g, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), a.createElement(O._27, {
                        padding: {
                            left: 2
                        },
                        borderLeft: !0
                    }, a.createElement(v, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), a.createElement(O._4, {
                        display: O.P.Flex,
                        justifyContent: O._3.Center
                    }, a.createElement(O._4, {
                        margin: {
                            right: 2
                        }
                    }, a.createElement(O.u, n.__assign({}, E, {
                        onClick: this.handleUpdateClick
                    }), Object(i.d)("Update", "ChannelAnalyticsDateRangePicker"))), a.createElement(O.u, n.__assign({}, w, {
                        type: O.A.Text,
                        onClick: this.props.onDismiss
                    }), Object(i.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(a.Component);

        function T(e, t) {
            void 0 === t && (t = new Date);
            var r = S.d,
                n = Object(h.endOfDay)(t);
            return e.start <= e.end && e.start >= r && e.end <= n
        }
        var A = r("ylrR"),
            k = r("9uzc"),
            R = r("u4Vk"),
            P = {
                "data-test-selector": "time-range"
            },
            x = {
                "data-test-selector": "total-days"
            },
            L = {
                "data-test-selector": "date-picker-toggle"
            },
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore.params;
                    return a.createElement(O._4, {
                        position: O._11.Relative
                    }, a.createElement(A.a, {
                        control: function(r) {
                            var s = r.toggle;
                            return a.createElement(O._4, {
                                padding: {
                                    bottom: 2
                                }
                            }, a.createElement(k.a, {
                                previousPath: e.pathWithShiftedInterval(-1),
                                nextPath: e.pathWithShiftedInterval(1)
                            }, a.createElement(O.u, n.__assign({}, L, {
                                type: O.A.Text,
                                onClick: s,
                                fullWidth: !0
                            }), a.createElement(O.O, n.__assign({}, P, {
                                fontSize: O.T.Size4
                            }), e.formatDateRange(t)), a.createElement(O.O, n.__assign({}, x, {
                                fontSize: O.T.Size6,
                                color: O.J.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(r) {
                        var n = r.close;
                        return a.createElement(O._27, {
                            margin: {
                                top: 5
                            },
                            position: O._11.Absolute,
                            display: O.P.Flex,
                            alignItems: O.c.Center,
                            flexDirection: O.R.Column,
                            zIndex: O._53.Above,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(O._27, {
                            margin: {
                                top: .5
                            },
                            elevation: 4,
                            position: O._11.Relative,
                            display: O.P.Flex,
                            background: O.m.Base,
                            zIndex: O._53.Above,
                            attachTop: !0
                        }, a.createElement(O._4, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, a.createElement(D, {
                            interval: t,
                            onCommit: Object(f.compose)(n, e.props.urlStore.replace),
                            onDismiss: n
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
                    return T(t) ? this.props.urlStore.buildPathWithParams(t) : ""
                }, t
            }(a.Component),
            N = function(e) {
                return a.createElement(O._4, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H5,
                    bold: !0
                }, e.children))
            },
            M = r("FeZP"),
            I = r("vTHh"),
            B = r("K3NL"),
            V = 3;

        function W(e) {
            var t = e.referrals,
                r = e.isLoading,
                n = e.channelName,
                s = e.urlStore;
            return r ? a.createElement(O._4, {
                margin: {
                    bottom: 2
                }
            }, a.createElement(O._10, {
                height: 375
            })) : a.createElement(O._4, {
                margin: {
                    top: 3
                }
            }, a.createElement(N, null, Object(i.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")), a.createElement(O._27, {
                elevation: 1,
                background: O.m.Base
            }, a.createElement(I.a, {
                reportItems: t.byReferralType.internalTwitch.slice(0, V),
                totals: t.totals.referrer.internalTwitch,
                translationFunc: B.a,
                title: Object(i.d)("Twitch", "ChannelAnalyticsReferralPanel")
            }), a.createElement(I.a, {
                reportItems: t.byReferralType.internalChannel.slice(0, V),
                totals: t.totals.referrer.internalChannel,
                translationFunc: B.a,
                title: Object(i.d)("Channels", "ChannelAnalyticsReferralPanel")
            }), a.createElement(I.a, {
                reportItems: t.byReferralType.external.slice(0, V),
                totals: t.totals.referrer.external,
                translationFunc: B.a,
                title: Object(i.d)("External", "ChannelAnalyticsReferralPanel")
            }), a.createElement(M.a, {
                message: Object(i.d)("View details", "ChannelAnalyticsReferralPanel"),
                url: "/" + n + "/dashboard/channel-analytics/referrals" + s.searchStringWith()
            })))
        }
        var G = r("XTbU"),
            U = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.handleHover = function() {
                        r.setState(function(e) {
                            return {
                                isHovered: !e.isHovered
                            }
                        })
                    }, r.state = {
                        isHovered: !1
                    }, r
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, a.createElement(O._27, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: O._11.Relative
                    }, a.createElement(O._4, {
                        display: O.P.Flex,
                        justifyContent: O._3.Between
                    }, a.createElement(O._4, {
                        display: O.P.Flex,
                        alignItems: O.c.Center
                    }, a.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), a.createElement(O._4, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(O.O, {
                        type: O._41.H5
                    }, this.props.title))), a.createElement(O._4, {
                        textAlign: O._37.Right
                    }, a.createElement(O.O, {
                        type: O._41.H5,
                        bold: !0
                    }, this.props.revenue), a.createElement(O.O, {
                        type: O._41.H6,
                        color: O.J.Alt2
                    }, Object(i.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? a.createElement(O.p, {
                        show: !0,
                        direction: O.q.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(a.Component),
            z = function(e) {
                return Object(i.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            H = function(e) {
                return a.createElement(O._4, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, a.createElement("table", null, a.createElement("thead", null, a.createElement("tr", null, a.createElement("td", null, a.createElement(O._4, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(O.O, {
                    bold: !0
                }, Object(i.d)("Subscription", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(O._4, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(O.O, {
                    bold: !0
                }, Object(i.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), a.createElement("td", null, a.createElement(O._4, {
                    padding: {
                        right: 2
                    }
                }, a.createElement(O.O, {
                    bold: !0
                }, Object(i.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), a.createElement("tbody", null, e.subCounts.streams.twitchSubscriptionProducts.map(function(t, r) {
                    return a.createElement(K, {
                        key: r,
                        tier: z(t.defaultPrice),
                        subscribers: Object(i.e)(t.total),
                        revenue: function(e, t) {
                            var r = t.twitchSubscriptionProducts.filter(function(t) {
                                return e === t.productID
                            })[0];
                            if (!r) return Object(i.e)(0, {
                                style: "currency",
                                currency: "USD"
                            });
                            return Object(i.e)(r.total, {
                                style: "currency",
                                currency: "USD"
                            })
                        }(t.productID, e.revenue.streams)
                    })
                }))))
            };
        var K = function(e) {
                return a.createElement("tr", null, a.createElement("td", null, a.createElement(O.O, null, e.tier)), a.createElement("td", null, a.createElement(O.O, null, e.subscribers)), a.createElement("td", null, a.createElement(O.O, null, e.revenue)))
            },
            J = (r("JczT"), {
                "data-test-selector": "total-revenue"
            }),
            q = function(e) {
                if (e.revenue.isLoading) return a.createElement(O._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(O._10, {
                    height: 448
                }));
                if (e.channel.role === y.d.None) return null;
                var t = e.revenue,
                    r = t.streams,
                    n = t.lookbackStreams;
                return a.createElement(O._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(N, null, Object(i.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel")), a.createElement(O._27, {
                    elevation: 1,
                    background: O.m.Base
                }, a.createElement(Y, {
                    totalAmount: r.getTotalAmountAllStreams()
                }), a.createElement("div", null, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 2
                    }
                }, a.createElement(O.O, {
                    type: O._41.H6,
                    bold: !0,
                    color: O.J.Alt2
                }, Object(i.d)("Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel"))), a.createElement(U, {
                    title: Object(i.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(r.twitchSubscriptions.total),
                    lastRevenue: Z(n.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : a.createElement(H, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), a.createElement(U, {
                    title: Object(i.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(r.primeSubscriptions.total),
                    lastRevenue: Z(n.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), a.createElement(U, {
                    title: Object(i.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(r.ads.total),
                    lastRevenue: Z(n.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), a.createElement(U, {
                    title: Object(i.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(r.bits.total),
                    lastRevenue: Z(n.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), a.createElement(U, {
                    title: Object(i.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(r.gameCommerce.total),
                    lastRevenue: Z(n.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), a.createElement(U, {
                    title: Object(i.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(r.extensions.total),
                    lastRevenue: Z(n.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }))))
            },
            Y = function(e) {
                var t = Object(G.a)(e.totalAmount),
                    r = t.sign,
                    s = t.dollars,
                    o = t.cents;
                return a.createElement(O._4, n.__assign({
                    textAlign: O._37.Center,
                    padding: {
                        y: 2
                    }
                }, J), a.createElement(O._4, {
                    display: O.P.Flex,
                    justifyContent: O._3.Center
                }, a.createElement(O._27, {
                    padding: {
                        top: .5,
                        right: .5
                    },
                    alignSelf: O.d.Start,
                    color: O.J.Alt2
                }, r), a.createElement(O.O, {
                    type: O._41.H2,
                    bold: !0
                }, s), a.createElement(O._4, {
                    alignSelf: O.d.End
                }, a.createElement(O.O, {
                    type: O._41.Span,
                    bold: !0
                }, "." + o))), a.createElement(O.O, {
                    type: O._41.H6
                }, Object(i.d)("Total Estimated Revenue", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            Z = function(e) {
                return Object(i.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            };
        r("z39C");

        function Q(e) {
            var t = e.messages,
                r = e.urls;
            return a.createElement(O._27, {
                display: O.P.Flex
            }, t.map(function(e, t) {
                return [e, r[t]]
            }).map(function(e, t) {
                return a.createElement(O._27, {
                    className: "insight-panel-btn",
                    background: O.m.Alt,
                    display: O.P.Flex,
                    flexGrow: 1,
                    flexWrap: O.S.NoWrap,
                    borderLeft: t > 0,
                    key: t
                }, a.createElement(O.u, {
                    type: O.A.Text,
                    linkTo: e[1],
                    targetBlank: !0,
                    fullWidth: !0
                }, a.createElement(O.O, null, e[0])))
            }))
        }
        var X = {
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
            $ = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.subscriptionRows = function() {
                        return r.state.subscriptions.map(function(e) {
                            return a.createElement(te, {
                                name: X[e.plan](),
                                revSplit: e.revenueSplit + " / " + (100 - e.revenueSplit),
                                score: Object(i.e)(e.score),
                                count: Object(i.e)(e.count),
                                key: e.id
                            })
                        })
                    }, r.state = {
                        subscriptions: [],
                        isLoading: !0
                    }, r
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchSubscriptions()
                }, t.prototype.render = function() {
                    if (this.state.isLoading) return a.createElement(O._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(O._10, {
                        height: 448
                    }));
                    if (0 === this.state.subscriptions.length) return null;
                    var e = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return a.createElement(O._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(N, null, Object(i.d)("How many subscribers do I have now?", "ChannelAnalyticsSubscribersPanel")), a.createElement(O._27, {
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(ee, null), this.subscriptionRows(), a.createElement(te, {
                        name: Object(i.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                        score: Object(i.e)(e),
                        count: Object(i.e)(t)
                    }), a.createElement(Q, {
                        messages: [Object(i.d)("Email me my subs list", "ChannelAnalyticsSubscribersPanel"), Object(i.d)("Send email to my subs", "ChannelAnalyticsSubscribersPanel")],
                        urls: ["", ""]
                    })))
                }, t.prototype.fetchSubscriptions = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return n.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subscriptions: [],
                                        isLoading: !0
                                    }), [4, _(this.props.channel)]) : [2];
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
            ee = function() {
                return a.createElement(O._27, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: O._11.Relative
                }, a.createElement(O.W, null, a.createElement(O.K, {
                    cols: 8
                }, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H6,
                    bold: !0,
                    color: O.J.Alt2
                }, Object(i.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), a.createElement(O.K, {
                    cols: 2
                }, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H6,
                    bold: !0,
                    color: O.J.Alt2
                }, Object(i.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), a.createElement(O.K, {
                    cols: 2
                }, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H6,
                    bold: !0,
                    color: O.J.Alt2
                }, Object(i.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            },
            te = function(e) {
                return a.createElement(O._27, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: O._11.Relative
                }, a.createElement(O.W, null, a.createElement(O.K, {
                    cols: 6
                }, a.createElement(O._4, {
                    textAlign: O._37.Left,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H5,
                    bold: !0,
                    color: O.J.Alt
                }, e.name))), a.createElement(O.K, {
                    cols: 2
                }, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H5
                }, e.revSplit))), a.createElement(O.K, {
                    cols: 2
                }, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H5
                }, e.score))), a.createElement(O.K, {
                    cols: 2
                }, a.createElement(O._4, {
                    textAlign: O._37.Right,
                    padding: {
                        x: 1
                    }
                }, a.createElement(O.O, {
                    type: O._41.H5
                }, e.count)))))
            },
            re = r("a+9f"),
            ne = function(e) {
                var t = e.channel,
                    r = e.topClips;
                if (r.isLoading) return a.createElement(O._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(O._10, {
                    height: 448
                }));
                if (!r.isLoading && !r.clips.length) return a.createElement("span", null);
                var n = Object(i.d)("View Details", "ChannelAnalyticsTopClipsPanel");
                return a.createElement(O._4, {
                    margin: {
                        top: 3
                    }
                }, a.createElement(N, null, Object(i.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")), a.createElement(O._27, {
                    elevation: 1,
                    background: O.m.Base
                }, a.createElement(ae, {
                    clipsAttrs: r
                }), t ? a.createElement(M.a, {
                    message: n,
                    url: "/" + t + "/manager/clips/channel"
                }) : a.createElement("p", null, n)))
            },
            ae = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], r = 0; r < 5; r++) t.push(a.createElement(O._27, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: r
                    }, a.createElement(O._10, {
                        height: 50
                    })));
                return a.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return a.createElement(re.a, n.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            se = r("IJpv"),
            oe = function() {
                function e(e, t) {
                    var r = this;
                    switch (this.formatDateFromLabel = function(e) {
                        return r.formatDate(new Date(Number(e)))
                    }, this.formatShortDateFromLabel = function(e) {
                        return r.formatShortDate(new Date(Number(e)))
                    }, this.aggregationInterval = e, this.aggregationInterval) {
                        case se.a.Day:
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
                        case se.a.Week:
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
                        case se.a.Month:
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
                        return r.formatShortDate(e)
                    })
                }
                return e.prototype.sum = function(e, t) {
                    var r = this,
                        n = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.value,
                            o = a.date,
                            i = r.startOf(o).getTime(),
                            c = n.get(i) || 0;
                        n.set(i, c + s)
                    }), this.datesAsNumbers.map(function(e) {
                        return n.get(e) || 0
                    })
                }, e.prototype.weightedAverage = function(e, t) {
                    var r = this,
                        n = new Map;
                    return e.forEach(function(e) {
                        var a = t(e),
                            s = a.weight,
                            o = a.value,
                            i = a.date,
                            c = r.startOf(i).getTime(),
                            l = n.get(c);
                        l || (l = {
                            totalWeight: 0,
                            weightedValue: 0
                        }, n.set(c, l)), l.totalWeight += s, l.weightedValue += s * o
                    }), this.datesAsNumbers.map(function(e) {
                        var t = n.get(e) || {
                            totalWeight: 0,
                            weightedValue: 0
                        };
                        return t.weightedValue / t.totalWeight
                    })
                }, Object.defineProperty(e.prototype, "isByDay", {
                    get: function() {
                        return this.aggregationInterval === se.a.Day
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(e) {
                    return e.aggregationInterval === this.aggregationInterval
                }, e.prototype.datesInRange = function(e) {
                    for (var t = [], r = this.startOf(e.start); r <= e.end;) t.push(r), r = this.addInterval(r, 1);
                    return t
                }, e
            }(),
            ie = function(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var r = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(r, e)
                }
                var n = document.createElement("a"),
                    a = encodeURIComponent(t);
                void 0 === n.download ? n.href = "data:attachment/csv;charset=utf-8," + a : (n.href = "data:text/csv;charset=utf-8," + a, n.download = e), n.target = "_blank", n.setAttribute("style", "visibility: hidden"), document.body.appendChild(n), n.click(), document.body.removeChild(n)
            },
            ce = function(e, t, r) {
                var n = se.a.Day,
                    a = new oe(n, e).dates.map(function(e) {
                        return e.toDateString()
                    }),
                    s = [
                        ["Date"]
                    ];
                a.forEach(function(e) {
                    s.push([e])
                }), me(s, "Sub Revenue", ue(t.twitchSubscriptions.timeseries, n)), me(s, "Twitch Prime Revenue", ue(t.primeSubscriptions.timeseries, n)), me(s, "Bits Revenue", ue(t.bits.timeseries, n)), me(s, "Ad Revenue", ue(t.ads.timeseries, n)), me(s, "Game Sales Revenue", ue(t.gameCommerce.timeseries, n)), me(s, "Extensions Revenue", ue(t.extensions.timeseries, n)), me(s, "Twitch Prime Subs", pe(r.primeSubscriptions.timeseries, n)), me(s, "Subs", pe(r.twitchSubscriptions.timeseries, n)), de(s, r.twitchSubscriptionProducts, n);
                var o = "Revenue by " + n + " " + e.start.toLocaleDateString() + " to " + e.end.toLocaleDateString() + ".csv";
                return ie(o, s.join("\n")), s
            },
            le = function(e, t) {
                return e.toDateString()
            },
            ue = function(e, t) {
                var r = new Map;
                return e.forEach(function(e) {
                    var t = e.amount,
                        n = e.date,
                        a = le(n),
                        s = r.get(a);
                    r.set(a, (s || 0) + t)
                }), r
            },
            pe = function(e, t) {
                var r = new Map;
                return e.forEach(function(e) {
                    var t = e.count,
                        n = e.date,
                        a = le(n),
                        s = r.get(a);
                    r.set(a, (s || 0) + t)
                }), r
            },
            de = function(e, t, r) {
                t.forEach(function(t) {
                    var n = z(t.defaultPrice) + " Sub";
                    me(e, n, pe(t.timeseries, r))
                })
            },
            me = function(e, t, r) {
                e[0].push(t), e.slice(1).forEach(function(e) {
                    var t = e[0],
                        n = r.get(t);
                    e.push(void 0 !== n ? n.toString() : "0")
                })
            },
            he = function(e) {
                var t = e || [],
                    r = [
                        ["events.forms.startTime", "events.forms.endTime", "avgViewers", "maxViewers", "totalViews", "uniqueViews", "totalMW", "newFollowers", "chatters", "chatMessages", "clipsCreated", "clipViews", "adBreaks"]
                    ];
                t.map(function(e) {
                    var t = ['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + Math.ceil(e.avgViewerCount), "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialCount];
                    r.push(t.map(function(e) {
                        return e.toString()
                    }))
                });
                var n = t[0].interval.start.toLocaleDateString(),
                    a = t.slice(-1)[0].interval.end.toLocaleDateString();
                return ie("Stream Sessions " + n + " to " + a + ".csv", r.join("\n")), r
            },
            fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.downloadAllCSV = function() {
                        he(t.props.analyticsResponse.streamSessions.sessions), ce(t.props.interval, t.props.analyticsResponse.revenue.streams, t.props.analyticsResponse.subCounts.streams)
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : a.createElement("div", {
                        onClick: this.downloadAllCSV
                    }, a.createElement(M.a, {
                        message: Object(i.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                        url: ""
                    }))
                }, t
            }(a.Component),
            be = "channel-analytics-stats",
            ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedStats: S.a
                    }, t.handleUpdateStat = function(e, r) {
                        t.state.selectedStats.indexOf(e) !== r && t.setState(function(a) {
                            var s = a.selectedStats.slice(),
                                o = a.selectedStats.indexOf(e);
                            s[r] = e, -1 !== o && (s[o] = t.getRemainingStats(s)[0]);
                            var c, l = t.storedStats;
                            return i.l.set(be, n.__assign({}, l, ((c = {})[t.statsStorageKey] = s, c))), {
                                selectedStats: s,
                                remainingStats: t.getRemainingStats(s)
                            }
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        selectedStats: this.getValidStoredStats()
                    })
                }, t.prototype.render = function() {
                    return this.props.children({
                        stats: this.state.selectedStats,
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
                        return i.l.get(be, ((e = {})[this.statsStorageKey] = [], e));
                        var e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getValidStoredStats = function() {
                    var e = this.storedStats,
                        t = Array.isArray(e[this.statsStorageKey]) ? e[this.statsStorageKey] : [],
                        r = [],
                        n = Object.keys(S.e);
                    return t.forEach(function(e) {
                        if (S.e[e] && !r.includes(e)) return n.splice(n.indexOf(e), 1), r.push(e)
                    }), r.length ? r.length < S.c && (r = r.concat(n)) : r = S.a, r = r.slice(0, S.c)
                }, t.prototype.getRemainingStats = function(e) {
                    var t = Object.keys(S.e);
                    return e.forEach(function(e) {
                        t.splice(t.indexOf(e), 1)
                    }), t
                }, t
            }(a.Component),
            ye = {
                "data-test-selector": "stats-dropdown-title"
            },
            Oe = {
                "data-test-selector": "date-picker-toggle"
            },
            ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(O._4, {
                        position: O._11.Relative
                    }, a.createElement(A.a, {
                        control: function(e) {
                            var t = e.toggle;
                            return a.createElement(O._4, {
                                display: O.P.Flex,
                                fullHeight: !0
                            }, a.createElement(O.v, n.__assign({
                                ariaLabel: Object(i.d)("Select top statistic", "ChannelAnalyticsDropdownAria"),
                                icon: O._18.AngleDown,
                                onClick: t
                            }, Oe)))
                        }
                    }, function(t) {
                        var r = t.close;
                        return a.createElement(O.p, {
                            show: !0,
                            direction: O.q.BottomRight,
                            tailOffset: 8.5
                        }, Object.keys(S.e).map(function(t) {
                            return a.createElement(O._2, n.__assign({
                                onClick: Object(f.compose)(r, e.props.onUpdateStat.bind(e, t, e.props.index)),
                                key: t,
                                alpha: !0
                            }, ye), a.createElement(O._4, {
                                padding: 1
                            }, a.createElement(O.O, {
                                color: O.J.Link
                            }, S.e[t].title())))
                        }))
                    }))
                }, t
            }(a.Component),
            Se = {
                "data-test-selector": "current-chart"
            },
            je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleAggregationChange = function(e) {
                        t.props.urlStore.replace({
                            topStatsAggregation: e.currentTarget.value
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(ge, {
                        channel: this.props.channel
                    }, function(t) {
                        var r = t.stats,
                            n = t.onUpdateStat;
                        return a.createElement(O._27, {
                            background: O.m.Base,
                            elevation: 1
                        }, e.renderSelectedTopStats(e.getTabs(r), n), a.createElement(O._4, {
                            padding: 2
                        }, a.createElement(O._4, {
                            display: O.P.Flex,
                            flexDirection: O.R.RowReverse,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement("div", null, a.createElement(O._23, {
                            onChange: e.handleAggregationChange,
                            value: e.props.urlStore.params.topStatsAggregation
                        }, a.createElement("option", {
                            value: se.a.Day
                        }, Object(i.d)("Day", "ChannelAnalyticsTopStats")), a.createElement("option", {
                            value: se.a.Week
                        }, Object(i.d)("Week", "ChannelAnalyticsTopStats")), a.createElement("option", {
                            value: se.a.Month
                        }, Object(i.d)("Month", "ChannelAnalyticsTopStats"))))), e.renderChartAtIndex(e.getCharts(r))), a.createElement(fe, {
                            interval: e.props.urlStore.params,
                            analyticsResponse: e.props.analyticsResponse
                        }))
                    })
                }, t.prototype.renderSelectedTopStats = function(e, t) {
                    var r = this,
                        n = this.cappedIndex;
                    return a.createElement(O._29, null, e.map(function(e, s) {
                        return a.createElement(e, {
                            analyticsResponse: r.props.analyticsResponse,
                            linkTo: r.props.urlStore.buildPathWithParams({
                                topStatsIndex: s
                            }),
                            isActive: n === s,
                            key: s
                        }, a.createElement(ve, {
                            index: s,
                            onUpdateStat: t
                        }))
                    }))
                }, t.prototype.renderChartAtIndex = function(e) {
                    var t = e[this.cappedIndex],
                        r = new oe(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params);
                    return a.createElement(t, n.__assign({}, Se, {
                        analyticsResponse: this.props.analyticsResponse,
                        aggregation: r
                    }))
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        var e = S.c - 1;
                        return Math.min(e, this.props.urlStore.params.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getCharts = function(e) {
                    return e.map(function(e) {
                        return S.e[e].chart
                    })
                }, t.prototype.getTabs = function(e) {
                    return e.map(function(e) {
                        return S.e[e].tab
                    })
                }, t
            }(a.Component),
            Ce = {
                "data-test-selector": "card-image"
            },
            _e = function(e) {
                var t = e.stream,
                    r = e.statNum;
                return a.createElement(O._2, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id
                }, a.createElement(O._27, {
                    borderBottom: !0,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, a.createElement(O.B, {
                    row: !0
                }, a.createElement(O.D, n.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: O.E.Size8,
                    aspect: O.k.Aspect16x9
                }, Ce)), a.createElement(O._4, {
                    flexGrow: 1
                }, a.createElement(O.C, {
                    overflow: O._7.Hidden
                }, a.createElement(O._4, {
                    display: O.P.Flex,
                    alignItems: O.c.Center,
                    justifyContent: O._3.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, a.createElement(O._4, {
                    flexGrow: 1
                }, a.createElement(O.O, {
                    color: O.J.Base,
                    type: O._41.H5,
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
                }, "ChannelAnalyticsStreamCard")), a.createElement(O.O, {
                    color: O.J.Alt2,
                    type: O._41.Span,
                    ellipsis: !0
                }, t.startChannelStatus)), a.createElement(O._4, {
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, a.createElement(O.O, {
                    color: O.J.Alt2,
                    type: O._41.Span
                }, Object(i.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(r)
                }, "ChannelAnalyticsStreamCard")))))))))
            };
        var Ee, we = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers"
        }(Ee || (Ee = {}));
        var De = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.sortDropdown = function() {
                        return a.createElement(O._23, {
                            value: r.state.sortType,
                            onChange: r.handleSortTypeChange
                        }, a.createElement("option", {
                            value: Ee.AvgViewers
                        }, Object(i.d)("Avg Viewers", "ChannelAnalyticsTopStreamsPanel")), a.createElement("option", {
                            value: Ee.NewFollowers
                        }, Object(i.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")))
                    }, r.streamsList = function() {
                        return a.createElement("span", null, r.sortedStreamSummaries().slice(0, we).map(function(e, t) {
                            return a.createElement(_e, {
                                stream: e,
                                statNum: r.statNumForStreamSummary(e),
                                key: t
                            })
                        }))
                    }, r.handleSortTypeChange = function(e) {
                        r.setState({
                            sortType: e.target.value
                        })
                    }, r.statNumForStreamSummary = function(e) {
                        switch (r.state.sortType) {
                            case Ee.NewFollowers:
                                return e.followersChange;
                            case Ee.AvgViewers:
                            default:
                                return e.avgViewerCount
                        }
                    }, r.sortedStreamSummaries = function() {
                        var e = r.props.streamSessions.sessions.slice();
                        switch (r.state.sortType) {
                            case Ee.NewFollowers:
                                return Object(C.f)(e, [function(e) {
                                    return e.followersChange
                                }], [C.a.Descending]);
                            case Ee.AvgViewers:
                            default:
                                return Object(C.f)(e, [function(e) {
                                    return e.avgViewerCount
                                }], [C.a.Descending])
                        }
                    }, r.state = {
                        sortType: Ee.AvgViewers
                    }, r
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return this.props.streamSessions.isLoading ? a.createElement(O._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(O._10, {
                        height: 448
                    })) : this.props.streamSessions.sessions.length < 3 ? a.createElement("span", null) : a.createElement(O._4, {
                        margin: {
                            top: 3
                        }
                    }, a.createElement(N, null, Object(i.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")), a.createElement(O._27, {
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(O._4, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        margin: {
                            bottom: .5
                        },
                        display: O.P.Flex
                    }, a.createElement(O._4, {
                        flexGrow: 1
                    }, a.createElement(O.O, {
                        type: O._41.H5,
                        bold: !0
                    }, Object(i.d)("Top {limit}", {
                        limit: we
                    }, "ChannelAnalyticsTopStreamsPanel"))), a.createElement(O._4, null, this.sortDropdown())), this.streamsList()))
                }, t
            }(a.Component),
            Te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.urlStore,
                        r = e.channelAnalyticsResponse,
                        n = e.channel;
                    return a.createElement(a.Fragment, null, a.createElement(F, {
                        urlStore: t
                    }), a.createElement(je, {
                        channel: n,
                        urlStore: t,
                        analyticsResponse: r
                    }), a.createElement(q, {
                        channel: n,
                        revenue: r.revenue,
                        subCounts: r.subCounts
                    }), a.createElement(ne, {
                        channel: n.name,
                        topClips: r.topClips
                    }), a.createElement(W, {
                        referrals: r.referrals.referrals,
                        urlStore: t,
                        channelName: n.name,
                        isLoading: r.referrals.isLoading
                    }), a.createElement(De, {
                        streamSessions: r.streamSessions
                    }), a.createElement($, {
                        channel: n.name
                    }))
                }, t
            }(a.Component),
            Ae = Object(o.d)(Object(m.d)("ChannelAnalyticsIndexPage", {
                destination: p.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: d.PageviewLocation.DashboardChannelAnalytics
            }))(Te),
            ke = r("yLtb"),
            Re = r("BoWu"),
            Pe = (r("lV23"), function(e) {
                return e
            }),
            xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.channelAnalyticsResponse.referrals.referrals;
                    return a.createElement(a.Fragment, null, a.createElement(O._27, {
                        elevation: 1,
                        background: O.m.Base,
                        display: O.P.Flex,
                        position: O._11.Relative,
                        flexDirection: O.R.Row,
                        flexWrap: O.S.NoWrap,
                        className: "referrals-page-nav-bar",
                        borderBottom: !0
                    }, a.createElement(O._27, {
                        position: O._11.Absolute,
                        display: O.P.Flex,
                        flexDirection: O.R.Row,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, a.createElement(O.u, {
                        type: O.A.Text,
                        linkTo: "/" + this.props.channel.name + "/dashboard/channel-analytics" + this.props.urlStore.searchStringWith()
                    }, a.createElement(O._4, {
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(O.O, null, Object(i.d)("Back", "ChannelAnalyticsReferralPage"))))), a.createElement(O._27, {
                        display: O.P.Flex,
                        flexGrow: 1,
                        flexWrap: O.S.NoWrap,
                        justifyContent: O._3.Center,
                        alignItems: O.c.Center
                    }, a.createElement(O.O, {
                        type: O._41.H2,
                        fontSize: O.T.Size4,
                        bold: !0
                    }, Object(i.d)("Views by Source", "ChannelAnalyticsReferralPage")))), a.createElement(F, {
                        urlStore: this.props.urlStore
                    }), a.createElement(O._4, {
                        className: "channel-analytics-referrals-page",
                        display: O.P.Flex,
                        flexDirection: O.R.Column,
                        flexWrap: O.S.NoWrap,
                        alignItems: O.c.Stretch,
                        breakpointMedium: {
                            flexDirection: O.R.Row
                        },
                        margin: {
                            top: 3
                        }
                    }, a.createElement(O._4, {
                        className: "channel-analytics-referrals-page__col",
                        display: O.P.Flex,
                        flexWrap: O.S.NoWrap,
                        flexDirection: O.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(O._27, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(I.a, {
                        reportItems: e.byLocation.slice(0, 15),
                        totals: e.totals.location,
                        translationFunc: ke.a,
                        title: Object(i.d)("Views by Location", "ChannelAnalyticsReferralPage")
                    })), a.createElement(O._27, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(I.a, {
                        reportItems: e.byPlatform.slice(0, 15),
                        totals: e.totals.platform,
                        translationFunc: Re.c,
                        title: Object(i.d)("Views by Platform", "ChannelAnalyticsReferralPage")
                    }))), a.createElement(O._4, {
                        className: "channel-analytics-referrals-page__col",
                        display: O.P.Flex,
                        flexWrap: O.S.NoWrap,
                        flexDirection: O.R.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, a.createElement(O._27, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(I.a, {
                        reportItems: e.byReferralType.internalTwitch.slice(0, 15),
                        totals: e.totals.referrer.internalTwitch,
                        translationFunc: Re.b,
                        title: Object(i.d)("Views from Twitch", "ChannelAnalyticsReferralPage")
                    })), a.createElement(O._27, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(I.a, {
                        reportItems: e.byReferralType.internalChannel.slice(0, 15),
                        totals: e.totals.referrer.internalChannel,
                        translationFunc: Pe,
                        title: Object(i.d)("Views from Channels", "ChannelAnalyticsReferralPage")
                    })), a.createElement(O._27, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        background: O.m.Base
                    }, a.createElement(I.a, {
                        reportItems: e.byReferralType.external.slice(0, 15),
                        totals: e.totals.referrer.external,
                        translationFunc: Re.a,
                        title: Object(i.d)("Views from Outside Twitch", "ChannelAnalyticsReferralPage")
                    })))))
                }, t
            }(a.Component),
            Le = Object(o.d)(Object(m.d)("ChannelAnalyticsReferralsPage", {
                destination: p.a.ChannelDashboardChannelAnalyticsReferrals,
                autoReportInteractive: !0
            }), Object(u.a)({
                location: d.PageviewLocation.DashboardChannelAnalyticsReferrals
            }))(xe),
            Fe = r("kA6m"),
            Ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.pathname !== this.props.location.pathname || e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new Fe.URLStore(this.props.location, this.props.history, this.props.now);
                    return T(e.params, this.props.now) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t
            }(a.Component),
            Me = r("HCOe"),
            Ie = r("OAwv");

        function Be(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }

        function Ve(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var r, a, s, o;
                return n.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return e.role === y.d.None ? [2, {
                                isError: !1,
                                streams: Fe.RevenueStreams.buildEmpty()
                            }] : (r = "/kraken/channels/" + e.id + "/dashboard/revenues", a = Ie.stringify(n.__assign({}, Be(t.start, t.end), {
                                fraction: "day"
                            })), s = [r, a].join("?"), [4, Object(C.e)({
                                path: s
                            })]);
                        case 1:
                            return (o = i.sent()).isError() ? [2, {
                                isError: !0,
                                streams: Fe.RevenueStreams.buildEmpty()
                            }] : [2, {
                                isError: !1,
                                streams: Fe.RevenueStreams.fromPayload(o.body)
                            }]
                    }
                })
            })
        }
        var We = r("+TF1"),
            Ge = r("DNvj"),
            Ue = r("x9gg"),
            ze = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: Fe.RevenueStreams.buildEmpty(),
                            lookbackStreams: Fe.RevenueStreams.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            streams: Fe.SubCountStreams.buildEmpty(),
                            lookbackStreams: Fe.SubCountStreams.buildEmpty(),
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
                    }, r
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(y.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions(), this.fetchReferrals())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : a.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, a, s, o = this;
                        return n.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        streamSessions: n.__assign({}, this.state.streamSessions, {
                                            isLoading: !0
                                        })
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, Object(We.a)({
                                        channelID: this.props.channel.id,
                                        channelName: this.props.channel.name,
                                        interval: e
                                    })]) : [2];
                                case 1:
                                    return (t = i.sent()).isError ? [2] : (r = Object(Ue.a)(t.streamSummaries, function(e) {
                                        return e.interval.start > o.props.lookbackInterval.end
                                    }), a = r[0], s = r[1], this.setState({
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
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return n.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(Ge.a)(this.props.channel.name, this.props.interval)]) : [2];
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
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e = this;
                        return n.__generator(this, function(t) {
                            return this.props.channel ? (this.setState({
                                revenue: {
                                    streams: Fe.RevenueStreams.buildEmpty(),
                                    lookbackStreams: Fe.RevenueStreams.buildEmpty(),
                                    isLoading: !0
                                }
                            }), Ve(this.props.channel, this.props.interval).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: n.__assign({}, e.revenue, {
                                            streams: t.streams,
                                            isLoading: !1
                                        })
                                    }
                                })
                            }), Ve(this.props.channel, this.props.lookbackInterval).then(function(t) {
                                e.setState(function(e) {
                                    return {
                                        revenue: n.__assign({}, e.revenue, {
                                            lookbackStreams: t.streams
                                        })
                                    }
                                })
                            }), [2]) : [2]
                        })
                    })
                }, t.prototype.fetchSubCounts = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, a, s;
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            streams: Fe.SubCountStreams.buildEmpty(),
                                            lookbackStreams: Fe.SubCountStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return n.__awaiter(this, void 0, void 0, function() {
                                            var r, a, s, o;
                                            return n.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return e.role === y.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: Fe.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : (r = "/kraken/channels/" + e.id + "/dashboard/sub_counts", a = Ie.stringify(n.__assign({}, Be(t.start, Object(h.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), s = [r, a].join("?"), [4, Object(C.e)({
                                                            path: s
                                                        })]);
                                                    case 1:
                                                        return (o = i.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: Fe.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: o.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? [2] : (r = Fe.SubCountStreams.partitionFromPayload(t.subscriptions, this.props.lookbackInterval), a = r[0], s = r[1], this.setState({
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
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return n.__generator(this, function(t) {
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
            He = (r("Goi1"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.channel) return null;
                    var t = y.c.fromChannelData(this.props.data.channel);
                    return a.createElement(c.b, null, a.createElement(Ne, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(r) {
                        return a.createElement(ze, {
                            interval: r.params,
                            lookbackInterval: Object(R.f)(r.params, -1),
                            channel: t
                        }, function(n) {
                            return a.createElement(O._4, {
                                padding: 4,
                                className: "channel-analytics-page"
                            }, a.createElement(s.b, {
                                path: "/:channelName/dashboard/channel-analytics",
                                exact: !0,
                                render: Ke.bind(e, t, r, n)
                            }), a.createElement(s.b, {
                                path: "/:channelName/dashboard/channel-analytics/referrals",
                                exact: !0,
                                render: Je.bind(e, t, r, n)
                            }))
                        })
                    }))
                }, t
            }(a.Component)),
            Ke = function(e, t, r) {
                return a.createElement(Ae, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: r
                })
            },
            Je = function(e, t, r) {
                return a.createElement(Le, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: r
                })
            },
            qe = Object(o.d)(Object(l.a)(Me, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(He);
        r.d(t, "ChannelAnalyticsPageComponent", function() {
            return He
        }), r.d(t, "ChannelAnalyticsPageRoot", function() {
            return qe
        })
    },
    fnik: function(e, t) {},
    jUGK: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return s
        });
        var n = r("TToO"),
            a = r("tiQ5"),
            s = function() {
                function e(e) {
                    var t = this,
                        r = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : a.b;
                    this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = r.map(function(e) {
                        return n.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var s = r.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(s)
                }
                return e.fromPayload = function(t) {
                    var r = this;
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
                                timeseries: r.normalizeTimeseries(e.revenue)
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
    kA6m: function(e, t, r) {
        "use strict";
        var n = r("+ear");
        r.d(t, "URLStore", function() {
            return n.a
        });
        var a = r("jUGK");
        r.d(t, "RevenueStreams", function() {
            return a.a
        });
        var s = r("WHrl");
        r.d(t, "EMPTY_SUB_COUNT_RESPONSE", function() {
            return s.a
        }), r.d(t, "SubCountStreams", function() {
            return s.b
        });
        var o = r("0NoZ");
        r.n(o)
    },
    lV23: function(e, t) {},
    tiQ5: function(e, t, r) {
        "use strict";
        var n = r("6sO2"),
            a = r("TToO"),
            s = r("GiK3"),
            o = r("WaEV"),
            i = r("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(i.Y, {
                        fullWidth: !0
                    }, s.createElement("canvas", {
                        ref: this.handleCanvasReady
                    }))
                }, t.prototype.setCanvasResolution = function(e) {
                    var t = e.width,
                        r = e.height,
                        n = this.getPixelRatio(e.getContext("2d"));
                    e.width = t * n, e.height = r * n, e.style.width = t + "px", e.style.height = r + "px", e.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t.prototype.getPixelRatio = function(e) {
                    return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                }, t
            }(s.Component),
            l = "#898395",
            u = ["#7752ba", "#0e9bd8", "#c5b6e2", "#3dc6ae", "#ffb300", "#69d420"],
            p = "rgba(0, 0, 0, 0)",
            d = "#ffffff",
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        var r = {
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
                                            fontColor: l,
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
                                            fontColor: l,
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
                                    multiKeyBackground: p,
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
                        t.myChart = new o(e, r)
                    }, t.formatXAxes = function(e) {
                        if (t.props.formatXAxis) return t.props.formatXAxis(e);
                        var r = Number(e);
                        return isNaN(r) ? e : Object(n.c)(new Date(Number(e)), {
                            month: "short",
                            day: "numeric"
                        })
                    }, t.handleDatasetClick = function(e, r) {
                        if (t.props.onDatasetClick) return t.props.onDatasetClick(e, r)
                    }, t.formatTooltipTitle = function(e) {
                        var r = e[0].index,
                            n = {
                                label: t.props.labels[r],
                                value: e.reduce(function(e, t) {
                                    return e + Number(t.yLabel)
                                }, 0),
                                index: r
                            };
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(n)
                    }, t.formatTooltipLabel = function(e, r) {
                        var a = e.index,
                            s = r.datasets[e.datasetIndex].label;
                        if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                            label: s,
                            value: Number(e.yLabel),
                            index: a
                        });
                        var o = Number(e.yLabel);
                        return isNaN(o) ? e.yLabel : Object(n.e)(Number(e.yLabel))
                    }, t.formatTooltipAfterLabel = function(e, r) {
                        if (t.props.formatTooltipAfterLabel) {
                            var n = e.index,
                                a = Number(r.labels[n]),
                                s = r.datasets[e.datasetIndex].label;
                            return t.props.formatTooltipAfterLabel({
                                label: s,
                                time: a,
                                value: Number(e.yLabel),
                                index: n
                            })
                        }
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: p,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement("div", {
                        className: "top-stats-chart"
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
                            backgroundColor: e.color || u[t % u.length]
                        }
                    })
                }, t
            }(s.Component),
            h = {
                "data-test-selector": "no-data"
            },
            f = function() {
                return s.createElement(i._4, a.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    textAlign: i._37.Center
                }, h), s.createElement(i.O, {
                    type: i._41.H3
                }, Object(n.d)("Nothing to show yet", "ChannelAnalyticsChartNoData")), s.createElement(i.O, {
                    color: i.J.Alt2,
                    fontSize: i.T.Size5
                }, Object(n.d)("Not enough data for us to display", "ChannelAnalyticsChartNoData")))
            },
            b = r("u4Vk"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatasetClick = function(e, r) {
                        if (t.props.aggregation.isByDay) {
                            var n = t.props.streamSessionsResponse.sessions[0].channel.name;
                            if (n && r && r.length > 0) {
                                var a = r[0],
                                    s = a._chart.data.labels[a._index];
                                window.open("/" + n + "/dashboard/stream-summary/" + s)
                            }
                        }
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.aggregation.isByDay) {
                            var r = new Date(Number(e.label)),
                                a = t.props.streamSessionsResponse.sessions[e.index],
                                s = Object(n.c)(r, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                o = Object(b.b)(a.interval);
                            return Object(n.d)("{date} – {shortDuration}", {
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
                    if (this.props.streamSessionsResponse.isLoading) return s.createElement(i._4, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(i._10, {
                        height: 300
                    }));
                    var t, r, n = this.props.streamSessionsResponse.sessions;
                    return 0 === n.length ? s.createElement(f, null) : (this.props.aggregation.isByDay ? (t = n.map(function(e) {
                        return e.interval.start.getTime().toString()
                    }), r = this.props.datasetBuilders.map(function(e) {
                        return {
                            label: e.label,
                            data: n.map(e.getDataFromSession),
                            color: e.color
                        }
                    })) : (t = this.props.aggregation.datesAsLabels, r = this.props.datasetBuilders.map(function(t) {
                        return {
                            label: t.label,
                            data: t.aggregateDataFromSessions(e.props.streamSessionsResponse.sessions),
                            color: t.color
                        }
                    })), s.createElement(m, {
                        labels: t,
                        datasets: r,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                        onDatasetClick: this.handleDatasetClick
                    }))
                }, t
            }(s.Component),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = e.value;
                        return t = t < 10 ? Math.round(10 * t) / 10 : Math.round(t), Object(n.d)("{total, plural, one {# Avg. Viewer} other {# Avg. Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsAvgViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.avgViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(b.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Avg. Viewers", "ChannelAnalyticsViewerGraph"),
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
                        return Object(n.d)("{total, plural, one {# Message} other {# Messages}}", {
                            total: t
                        }, "ChannelAnalyticsChatMesssages")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Chat Messages", "ChannelAnalyticsChatMesssages"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            v = function(e) {
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
                        return Object(n.d)("{total, plural, one {# Chatter} other {# Chatters}}", {
                            total: t
                        }, "ChannelAnalyticsTopStatsChatters")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Chatters", "ChannelAnalyticsTopStatsChatters"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(s.Component),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return Object(n.d)("{views,number} {label}", {
                            views: e.value,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Twitch", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitch"),
                            aggregateDataFromSessions: this.aggregateData("twitch"),
                            color: "#7752ba"
                        }, {
                            label: Object(n.d)("Reddit", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("reddit"),
                            aggregateDataFromSessions: this.aggregateData("reddit"),
                            color: "#ff5700"
                        }, {
                            label: Object(n.d)("Facebook", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("facebook"),
                            aggregateDataFromSessions: this.aggregateData("facebook"),
                            color: "#3b5998"
                        }, {
                            label: Object(n.d)("Twitter", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitter"),
                            aggregateDataFromSessions: this.aggregateData("twitter"),
                            color: "#00aced"
                        }, {
                            label: Object(n.d)("Other", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("other"),
                            aggregateDataFromSessions: this.aggregateData("other"),
                            color: "#bdc3c7"
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t.prototype.getDataFromSession = function(e) {
                    return function(t) {
                        return t.clipPlaysBreakdown[e]
                    }
                }, t.prototype.aggregateData = function(e) {
                    var t = this;
                    return function(r) {
                        return t.props.aggregation.sum(r, function(t) {
                            return {
                                value: t.clipPlaysBreakdown[e],
                                date: t.interval.start
                            }
                        })
                    }
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
                        return Object(n.d)("{total, plural, one {# Live View} other {# Live Views}}", {
                            total: t
                        }, "ChannelAnalyticsLiveViews")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Live Views", "ChannelAnalyticsLiveViews"),
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
                        return e.followersChange
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Object(n.d)("{total, plural, one {New Follower} other {New Followers}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsNewFollowers");
                        return Object(n.d)("{total, number} {metric}", {
                            total: e.value,
                            metric: t
                        }, "ChannelAnalyticsTopStatsNewFollowers")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("New Followers", "ChannelAnalyticsTopStatsNewFollowers"),
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
                        var t = Object(n.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(n.d)("{currency} {label}", {
                            currency: t,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsRevenueTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var r = Object(n.e)(e.value, {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        });
                        return Object(n.d)("{currency} {label}", {
                            currency: r,
                            label: t.props.aggregation.formatDateFromLabel(e.label)
                        }, "ChannelAnalyticsTopStatsRevenueTitle")
                    }, t
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.revenue !== e.analyticsResponse.revenue || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.revenue.isLoading) return s.createElement(i._10, {
                        height: 300
                    });
                    var e = this.props.analyticsResponse.revenue.streams;
                    return s.createElement(m, {
                        labels: this.props.aggregation.datesAsLabels,
                        datasets: [{
                            label: Object(n.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.ads.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.bits.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.gameCommerce.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
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
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return Object(n.d)("{numOfSubs, number} {label}", {
                            numOfSubs: e.value,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipTitle = function(e) {
                        var r = t.props.aggregation.formatDate(new Date(Number(e.label)));
                        return Object(n.d)("{date} – {totalSubs, number} Subs", {
                            date: r,
                            totalSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipAfterLabel = function(e) {
                        if ("Paid subs" === e.label && e.value && e.time) {
                            var r = t.props.analyticsResponse.subCounts.streams.twitchSubscriptions.timeseries,
                                a = {};
                            return r.forEach(function(r) {
                                if (t.props.aggregation.startOf(r.date).getTime() === e.time) {
                                    var n = r.product.defaultPrice;
                                    void 0 === a[n] && (a[n] = 0), a[n] += r.count
                                }
                            }), Object.keys(a).map(function(e) {
                                var t = Object(n.e)(Number(e) / 100, {
                                        style: "currency",
                                        currency: "USD"
                                    }),
                                    r = a[e];
                                return Object(n.d)("{numOfSubs, number} {usd} Subs", {
                                    usd: t,
                                    numOfSubs: r
                                }, "ChannelAnalyticsTopStatsSubscriptions")
                            })
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.subCounts !== e.analyticsResponse.subCounts || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    var e = this.props.analyticsResponse.subCounts.streams;
                    return s.createElement(m, {
                        labels: this.props.aggregation.dates.map(function(e) {
                            return e.getTime().toString()
                        }),
                        datasets: [{
                            label: Object(n.d)("Paid subs", "ChannelAnalyticsTopStatsSubscriptions"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsSubscriptions"),
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
            }(s.Component),
            w = r("HW6M"),
            D = r("F8kA"),
            T = (r("fnik"), {
                "data-test-selector": "up-trend-indicator"
            }),
            A = {
                "data-test-selector": "down-trend-indicator"
            },
            k = {
                "data-test-selector": "tab-selector"
            },
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = w("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return s.createElement(i._4, a.__assign({
                        className: e,
                        display: i.P.Flex,
                        flexGrow: 1,
                        padding: {
                            y: .5
                        }
                    }, k), s.createElement(i.Y, {
                        flexGrow: 1,
                        padding: {
                            left: 2,
                            right: 1,
                            y: 1
                        },
                        textAlign: i._37.Center
                    }, s.createElement(D.a, {
                        to: this.props.linkTo,
                        className: "top-stats-tab__link",
                        replace: !0
                    }, s.createElement(i.O, {
                        type: i._41.H3
                    }, this.props.title, this.renderTrendIndicator()), s.createElement(i.O, {
                        type: i._41.H6
                    }, this.props.subtitle))), this.props.children)
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? s.createElement(i._4, {
                        display: i.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(i._17, a.__assign({
                        asset: i._18.GlyphArrUp,
                        type: i._19.Success
                    }, T))) : this.props.trend < 0 ? s.createElement(i._4, {
                        display: i.P.Inline,
                        margin: {
                            left: .5
                        }
                    }, s.createElement(i._17, a.__assign({
                        asset: i._18.GlyphArrDown,
                        type: i._19.Warn
                    }, A))) : null : null
                }, t
            }(s.Component),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        r = this.averageViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []);
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), s.createElement(R, {
                        title: e,
                        trend: Math.sign(t - r),
                        subtitle: Object(n.d)("Avg. Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.averageViewers = function(e) {
                    if (!e.length) return 0;
                    var t = [0, 0],
                        r = t[0],
                        n = t[1];
                    return e.forEach(function(e) {
                        var t = (e.interval.end.getTime() - e.interval.start.getTime()) / 1e3;
                        r += e.avgViewerCount * t, n += t
                    }), r / n
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(n.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(n.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(s.Component);

        function x(e, t) {
            return e.reduce(function(e, r) {
                return e + t(r)
            }, 0) / (e.length || 1)
        }
        var L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.chatMessages,
                        r = this.previousChatMessages;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(n.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(R, {
                        title: e,
                        trend: Math.sign(t - r),
                        subtitle: Object(n.d)("Avg. Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "chatMessages", {
                    get: function() {
                        return x(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousChatMessages", {
                    get: function() {
                        return x(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.messagesTotal
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.uniqueChatters,
                        r = this.previousUniqueChatters;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(n.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(R, {
                        title: e,
                        trend: Math.sign(t - r),
                        subtitle: Object(n.d)("Avg. Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "uniqueChatters", {
                    get: function() {
                        return x(this.props.analyticsResponse.streamSessions.sessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousUniqueChatters", {
                    get: function() {
                        return x(this.props.analyticsResponse.streamSessions.lookbackSessions || [], function(e) {
                            return e.uniqueChatters
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.previousTotalClipViews,
                        r = this.totalClipViews;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : Object(n.e)(r, {
                        maximumFractionDigits: 0
                    }), s.createElement(R, {
                        title: e,
                        subtitle: Object(n.d)("Clip Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: Math.sign(r - t)
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
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.liveViews,
                        r = this.previousLiveViews;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : this.formatTitle(t), s.createElement(R, {
                        title: e,
                        trend: Math.sign(t - r),
                        subtitle: Object(n.d)("Live Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
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
                    return e < 10 ? Object(n.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(n.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(s.Component),
            I = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.followersChange,
                        r = this.previousFollowersChange;
                    return e = this.props.analyticsResponse.streamSessions.isLoading ? "—" : function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(n.d)("{sign}{followersDiff, number}", {
                            followersDiff: Math.abs(e),
                            sign: t
                        }, "ChannelAnalyticsTopStats")
                    }(t), s.createElement(R, {
                        title: e,
                        trend: Math.sign(t - r),
                        subtitle: Object(n.d)("New Followers", "ChannelAnalyticsTopStats"),
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
        var B, V = r("XTbU"),
            W = (r("w5Qh"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return s.createElement(R, {
                        title: this.renderTitle(t),
                        trend: Math.sign(t - e),
                        subtitle: Object(n.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t.prototype.renderTitle = function(e) {
                    if (this.props.analyticsResponse.revenue.isLoading) return "–";
                    var t = Object(V.a)(e),
                        r = t.sign,
                        n = t.dollars,
                        a = t.cents;
                    return s.createElement("span", null, s.createElement(i.O, {
                        className: "top-stats-tab-revenue__super",
                        fontSize: i.T.Size6,
                        type: i._41.Span
                    }, r + " "), s.createElement(i.O, {
                        type: i._41.Span
                    }, n), s.createElement(i.O, {
                        className: "top-stats-tab-revenue__bottom",
                        fontSize: i.T.Size4,
                        type: i._41.Span
                    }, "." + a))
                }, t
            }(s.Component)),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.analyticsResponse.subCounts.streams.getTotalSubCount(),
                        r = this.props.analyticsResponse.subCounts.lookbackStreams.getTotalSubCount();
                    return e = this.props.analyticsResponse.subCounts.isLoading ? "—" : Object(n.e)(t, {
                        maximumFractionDigits: 0
                    }), s.createElement(R, {
                        title: e,
                        trend: Math.sign(t - r),
                        subtitle: Object(n.d)("Subscriptions", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive
                    }, this.props.children)
                }, t
            }(s.Component),
            U = ((B = {})["avg-viewers"] = {
                title: function() {
                    return Object(n.d)("Avg. Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: P,
                chart: y
            }, B["live-views"] = {
                title: function() {
                    return Object(n.d)("Live Views", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: M,
                chart: j
            }, B["chat-messages"] = {
                title: function() {
                    return Object(n.d)("Avg. Chat Messages", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: L,
                chart: O
            }, B.chatters = {
                title: function() {
                    return Object(n.d)("Avg. Chatters", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: F,
                chart: v
            }, B["new-followers"] = {
                title: function() {
                    return Object(n.d)("New Followers", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: I,
                chart: C
            }, B.revenue = {
                title: function() {
                    return Object(n.d)("Revenue", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: W,
                chart: _
            }, B.subscriptions = {
                title: function() {
                    return Object(n.d)("Subscriptions", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: G,
                chart: E
            }, B["clip-views"] = {
                title: function() {
                    return Object(n.d)("Clip Views", "ChannelAnalyticsTopStatsDropdown")
                },
                tab: N,
                chart: S
            }, B),
            z = ["avg-viewers", "live-views", "chat-messages", "revenue", "subscriptions"],
            H = r("wuJz"),
            K = Object(H.parse)("2011-01-01"),
            J = [{
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
        r.d(t, !1, function() {
            return "avg-viewers"
        }), r.d(t, !1, function() {
            return "live-views"
        }), r.d(t, !1, function() {
            return "chat-messages"
        }), r.d(t, !1, function() {
            return "chatters"
        }), r.d(t, !1, function() {
            return "new-followers"
        }), r.d(t, !1, function() {
            return "revenue"
        }), r.d(t, !1, function() {
            return "subscriptions"
        }), r.d(t, !1, function() {
            return "clip-views"
        }), r.d(t, "e", function() {
            return U
        }), r.d(t, "c", function() {
            return 5
        }), r.d(t, "a", function() {
            return z
        }), r.d(t, "d", function() {
            return K
        }), r.d(t, "b", function() {
            return J
        })
    },
    w5Qh: function(e, t) {},
    x9gg: function(e, t, r) {
        "use strict";
        t.a = function(e, t) {
            for (var r = [], n = [], a = 0, s = e; a < s.length; a++) {
                var o = s[a];
                t(o) ? r.push(o) : n.push(o)
            }
            return [r, n]
        }
    },
    yLtb: function(e, t, r) {
        "use strict";
        t.a = function(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(n.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(n.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(n.d)("Andorra", "format-country");
                case "AE":
                    return Object(n.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(n.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(n.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(n.d)("Anguilla", "format-country");
                case "AL":
                    return Object(n.d)("Albania", "format-country");
                case "AM":
                    return Object(n.d)("Armenia", "format-country");
                case "AO":
                    return Object(n.d)("Angola", "format-country");
                case "AP":
                    return Object(n.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(n.d)("Antarctica", "format-country");
                case "AR":
                    return Object(n.d)("Argentina", "format-country");
                case "AS":
                    return Object(n.d)("American Samoa", "format-country");
                case "AT":
                    return Object(n.d)("Austria", "format-country");
                case "AU":
                    return Object(n.d)("Australia", "format-country");
                case "AW":
                    return Object(n.d)("Aruba", "format-country");
                case "AX":
                    return Object(n.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(n.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(n.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(n.d)("Barbados", "format-country");
                case "BD":
                    return Object(n.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(n.d)("Belgium", "format-country");
                case "BF":
                    return Object(n.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(n.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(n.d)("Bahrain", "format-country");
                case "BI":
                    return Object(n.d)("Burundi", "format-country");
                case "BJ":
                    return Object(n.d)("Benin", "format-country");
                case "BL":
                    return Object(n.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(n.d)("Bermuda", "format-country");
                case "BN":
                    return Object(n.d)("Brunei", "format-country");
                case "BO":
                    return Object(n.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(n.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(n.d)("Brazil", "format-country");
                case "BS":
                    return Object(n.d)("Bahamas", "format-country");
                case "BT":
                    return Object(n.d)("Bhutan", "format-country");
                case "BV":
                    return Object(n.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(n.d)("Botswana", "format-country");
                case "BY":
                    return Object(n.d)("Belarus", "format-country");
                case "BZ":
                    return Object(n.d)("Belize", "format-country");
                case "CA":
                    return Object(n.d)("Canada", "format-country");
                case "CC":
                    return Object(n.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(n.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(n.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(n.d)("Congo", "format-country");
                case "CH":
                    return Object(n.d)("Switzerland", "format-country");
                case "CI":
                    return Object(n.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(n.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(n.d)("Chile", "format-country");
                case "CM":
                    return Object(n.d)("Cameroon", "format-country");
                case "CN":
                    return Object(n.d)("China", "format-country");
                case "CO":
                    return Object(n.d)("Colombia", "format-country");
                case "CR":
                    return Object(n.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(n.d)("Cuba", "format-country");
                case "CV":
                    return Object(n.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(n.d)("Curacao", "format-country");
                case "CX":
                    return Object(n.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(n.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(n.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(n.d)("Germany", "format-country");
                case "DJ":
                    return Object(n.d)("Djibouti", "format-country");
                case "DK":
                    return Object(n.d)("Denmark", "format-country");
                case "DM":
                    return Object(n.d)("Dominica", "format-country");
                case "DO":
                    return Object(n.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(n.d)("Algeria", "format-country");
                case "EC":
                    return Object(n.d)("Ecuador", "format-country");
                case "EE":
                    return Object(n.d)("Estonia", "format-country");
                case "EG":
                    return Object(n.d)("Egypt", "format-country");
                case "EH":
                    return Object(n.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(n.d)("Eritrea", "format-country");
                case "ES":
                    return Object(n.d)("Spain", "format-country");
                case "ET":
                    return Object(n.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(n.d)("Europe", "format-country");
                case "FI":
                    return Object(n.d)("Finland", "format-country");
                case "FJ":
                    return Object(n.d)("Fiji", "format-country");
                case "FK":
                    return Object(n.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(n.d)("Micronesia", "format-country");
                case "FO":
                    return Object(n.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(n.d)("France", "format-country");
                case "GA":
                    return Object(n.d)("Gabon", "format-country");
                case "GB":
                    return Object(n.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(n.d)("Grenada", "format-country");
                case "GE":
                    return Object(n.d)("Georgia", "format-country");
                case "GF":
                    return Object(n.d)("French Guiana", "format-country");
                case "GG":
                    return Object(n.d)("Guernsey", "format-country");
                case "GH":
                    return Object(n.d)("Ghana", "format-country");
                case "GI":
                    return Object(n.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(n.d)("Greenland", "format-country");
                case "GM":
                    return Object(n.d)("Gambia", "format-country");
                case "GN":
                    return Object(n.d)("Guinea", "format-country");
                case "GP":
                    return Object(n.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(n.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(n.d)("Greece", "format-country");
                case "GS":
                    return Object(n.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(n.d)("Guatemala", "format-country");
                case "GU":
                    return Object(n.d)("Guam", "format-country");
                case "GW":
                    return Object(n.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(n.d)("Guyana", "format-country");
                case "HK":
                    return Object(n.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(n.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(n.d)("Honduras", "format-country");
                case "HR":
                    return Object(n.d)("Croatia", "format-country");
                case "HT":
                    return Object(n.d)("Haiti", "format-country");
                case "HU":
                    return Object(n.d)("Hungary", "format-country");
                case "ID":
                    return Object(n.d)("Indonesia", "format-country");
                case "IE":
                    return Object(n.d)("Ireland", "format-country");
                case "IL":
                    return Object(n.d)("Israel", "format-country");
                case "IM":
                    return Object(n.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(n.d)("India", "format-country");
                case "IO":
                    return Object(n.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(n.d)("Iraq", "format-country");
                case "IR":
                    return Object(n.d)("Iran", "format-country");
                case "IS":
                    return Object(n.d)("Iceland", "format-country");
                case "IT":
                    return Object(n.d)("Italy", "format-country");
                case "JE":
                    return Object(n.d)("Jersey", "format-country");
                case "JM":
                    return Object(n.d)("Jamaica", "format-country");
                case "JO":
                    return Object(n.d)("Jordan", "format-country");
                case "JP":
                    return Object(n.d)("Japan", "format-country");
                case "KE":
                    return Object(n.d)("Kenya", "format-country");
                case "KG":
                    return Object(n.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(n.d)("Cambodia", "format-country");
                case "KI":
                    return Object(n.d)("Kiribati", "format-country");
                case "KM":
                    return Object(n.d)("Comoros", "format-country");
                case "KN":
                    return Object(n.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(n.d)("North Korea", "format-country");
                case "KR":
                    return Object(n.d)("South Korea", "format-country");
                case "KW":
                    return Object(n.d)("Kuwait", "format-country");
                case "KY":
                    return Object(n.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(n.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(n.d)("Laos", "format-country");
                case "LB":
                    return Object(n.d)("Lebanon", "format-country");
                case "LC":
                    return Object(n.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(n.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(n.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(n.d)("Liberia", "format-country");
                case "LS":
                    return Object(n.d)("Lesotho", "format-country");
                case "LT":
                    return Object(n.d)("Lithuania", "format-country");
                case "LU":
                    return Object(n.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(n.d)("Latvia", "format-country");
                case "LY":
                    return Object(n.d)("Libya", "format-country");
                case "MA":
                    return Object(n.d)("Morocco", "format-country");
                case "MC":
                    return Object(n.d)("Monaco", "format-country");
                case "MD":
                    return Object(n.d)("Moldova", "format-country");
                case "ME":
                    return Object(n.d)("Montenegro", "format-country");
                case "MF":
                    return Object(n.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(n.d)("Madagascar", "format-country");
                case "MH":
                    return Object(n.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(n.d)("Macedonia", "format-country");
                case "ML":
                    return Object(n.d)("Mali", "format-country");
                case "MM":
                    return Object(n.d)("Myanmar", "format-country");
                case "MN":
                    return Object(n.d)("Mongolia", "format-country");
                case "MO":
                    return Object(n.d)("Macao", "format-country");
                case "MP":
                    return Object(n.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(n.d)("Martinique", "format-country");
                case "MR":
                    return Object(n.d)("Mauritania", "format-country");
                case "MS":
                    return Object(n.d)("Montserrat", "format-country");
                case "MT":
                    return Object(n.d)("Malta", "format-country");
                case "MU":
                    return Object(n.d)("Mauritius", "format-country");
                case "MV":
                    return Object(n.d)("Maldives", "format-country");
                case "MW":
                    return Object(n.d)("Malawi", "format-country");
                case "MX":
                    return Object(n.d)("Mexico", "format-country");
                case "MY":
                    return Object(n.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(n.d)("Mozambique", "format-country");
                case "NA":
                    return Object(n.d)("Namibia", "format-country");
                case "NC":
                    return Object(n.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(n.d)("Niger", "format-country");
                case "NF":
                    return Object(n.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(n.d)("Nigeria", "format-country");
                case "NI":
                    return Object(n.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(n.d)("Netherlands", "format-country");
                case "NO":
                    return Object(n.d)("Norway", "format-country");
                case "NP":
                    return Object(n.d)("Nepal", "format-country");
                case "NR":
                    return Object(n.d)("Nauru", "format-country");
                case "NU":
                    return Object(n.d)("Niue", "format-country");
                case "NZ":
                    return Object(n.d)("New Zealand", "format-country");
                case "O1":
                    return Object(n.d)("Other Country", "format-country");
                case "OM":
                    return Object(n.d)("Oman", "format-country");
                case "PA":
                    return Object(n.d)("Panama", "format-country");
                case "PE":
                    return Object(n.d)("Peru", "format-country");
                case "PF":
                    return Object(n.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(n.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(n.d)("Philippines", "format-country");
                case "PK":
                    return Object(n.d)("Pakistan", "format-country");
                case "PL":
                    return Object(n.d)("Poland", "format-country");
                case "PM":
                    return Object(n.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(n.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(n.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(n.d)("Palestine", "format-country");
                case "PT":
                    return Object(n.d)("Portugal", "format-country");
                case "PW":
                    return Object(n.d)("Palau", "format-country");
                case "PY":
                    return Object(n.d)("Paraguay", "format-country");
                case "QA":
                    return Object(n.d)("Qatar", "format-country");
                case "RE":
                    return Object(n.d)("Reunion", "format-country");
                case "RO":
                    return Object(n.d)("Romania", "format-country");
                case "RS":
                    return Object(n.d)("Serbia", "format-country");
                case "RU":
                    return Object(n.d)("Russia", "format-country");
                case "RW":
                    return Object(n.d)("Rwanda", "format-country");
                case "SA":
                    return Object(n.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(n.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(n.d)("Seychelles", "format-country");
                case "SD":
                    return Object(n.d)("Sudan", "format-country");
                case "SE":
                    return Object(n.d)("Sweden", "format-country");
                case "SG":
                    return Object(n.d)("Singapore", "format-country");
                case "SH":
                    return Object(n.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(n.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(n.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(n.d)("Slovakia", "format-country");
                case "SL":
                    return Object(n.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(n.d)("San Marino", "format-country");
                case "SN":
                    return Object(n.d)("Senegal", "format-country");
                case "SO":
                    return Object(n.d)("Somalia", "format-country");
                case "SR":
                    return Object(n.d)("Suriname", "format-country");
                case "SS":
                    return Object(n.d)("South Sudan", "format-country");
                case "ST":
                    return Object(n.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(n.d)("El Salvador", "format-country");
                case "SX":
                    return Object(n.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(n.d)("Syria", "format-country");
                case "SZ":
                    return Object(n.d)("Swaziland", "format-country");
                case "TC":
                    return Object(n.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(n.d)("Chad", "format-country");
                case "TF":
                    return Object(n.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(n.d)("Togo", "format-country");
                case "TH":
                    return Object(n.d)("Thailand", "format-country");
                case "TJ":
                    return Object(n.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(n.d)("Tokelau", "format-country");
                case "TL":
                    return Object(n.d)("East Timor", "format-country");
                case "TM":
                    return Object(n.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(n.d)("Tunisia", "format-country");
                case "TO":
                    return Object(n.d)("Tonga", "format-country");
                case "TR":
                    return Object(n.d)("Turkey", "format-country");
                case "TT":
                    return Object(n.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(n.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(n.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(n.d)("Tanzania", "format-country");
                case "UA":
                    return Object(n.d)("Ukraine", "format-country");
                case "UG":
                    return Object(n.d)("Uganda", "format-country");
                case "UM":
                    return Object(n.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(n.d)("United States", "format-country");
                case "UY":
                    return Object(n.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(n.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(n.d)("Vatican City", "format-country");
                case "VC":
                    return Object(n.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(n.d)("Venezuela", "format-country");
                case "VG":
                    return Object(n.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(n.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(n.d)("Vietnam", "format-country");
                case "VU":
                    return Object(n.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(n.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(n.d)("Samoa", "format-country");
                case "YE":
                    return Object(n.d)("Yemen", "format-country");
                case "YT":
                    return Object(n.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(n.d)("South Africa", "format-country");
                case "ZM":
                    return Object(n.d)("Zambia", "format-country");
                case "ZW":
                    return Object(n.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        };
        var n = r("6sO2")
    },
    z39C: function(e, t) {}
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-root-23ccebec22c9c84eb8a4005840fd373d.js.map