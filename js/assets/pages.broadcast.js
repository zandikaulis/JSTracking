(window.webpackJsonp = window.webpackJsonp || []).push([
    [70], {
        "1rIY": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                i = n("2Ygb");

            function s(e, t) {
                var n = a.createContext(t),
                    s = n.Consumer,
                    c = n.Provider;
                return {
                    withContext: function(t) {
                        return function(n) {
                            var o;
                            return (o = function(e) {
                                function o() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return r.__extends(o, e), o.prototype.render = function() {
                                    var e = this;
                                    return a.createElement(s, null, function(o) {
                                        var i = t(o);
                                        return a.createElement(n, r.__assign({}, e.props, i))
                                    })
                                }, o
                            }(a.Component)).displayName = Object(i.a)("With" + e, n), o
                        }
                    },
                    InnerProvider: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r.__extends(n, t), n.prototype.componentDidMount = function() {
                            "object" === typeof this.props.value && this.props.value || o.k.error(new Error(n.displayName + " rendered without an appropriate initial value"), "Set an initial value in your provider component at mount time.")
                        }, n.prototype.render = function() {
                            return a.createElement(c, {
                                value: this.props.value
                            }, this.props.children)
                        }, n.displayName = "Inner" + e + "Provider", n
                    }(a.Component)
                }
            }
        },
        "4mBO": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("1rIY"),
                s = (r = Object(i.a)("LiveDashboardDeferredLoading", {
                    canRenderAnyComponent: !1,
                    loadFirst: {},
                    registerReportLoaded: function() {
                        return function() {
                            return null
                        }
                    },
                    reportLoaded: function() {
                        return null
                    }
                })).InnerProvider,
                c = r.withContext,
                u = function(e, t) {
                    return void 0 === t && (t = {}),
                        function(n) {
                            return {
                                canRenderAnyComponent: n.canRenderAnyComponent,
                                loadFirst: n.loadFirst,
                                reportLoaded: n.registerReportLoaded(e, t)
                            }
                        }
                };

            function d(e, t) {
                return void 0 === t && (t = {}),
                    function(n) {
                        return c(u(e, t))(function(t) {
                            return void 0 !== t.loadFirst[e] || t.canRenderAnyComponent ? o.createElement(n, a.__assign({}, t)) : null
                        })
                    }
            }
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canRenderDeferredComponents: 0 === t.props.loadFirst.length,
                        loadFirst: t.props.loadFirst.reduce(function(e, t) {
                            return e[t] = !1, e
                        }, {})
                    }, t.autoReportLoadedNames = {}, t.hasLoadedDeferredComponents = !1, t.initialLoadTimestamp = Date.now(), t.registerReportLoaded = function(e, n) {
                        return void 0 !== t.state.loadFirst[e] ? (n.autoReportLoaded && (t.autoReportLoadedNames[e] = !0), function() {
                            t.setState(function(t) {
                                var n;
                                return {
                                    loadFirst: a.__assign({}, t.loadFirst, (n = {}, n[e] = !0, n))
                                }
                            })
                        }) : function() {
                            return null
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.setState(function(t) {
                        return {
                            loadFirst: a.__assign({}, t.loadFirst, e.autoReportLoadedNames)
                        }
                    })
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    if (!this.hasLoadedDeferredComponents) {
                        var t = this.state.loadFirst,
                            n = Object.keys(t).every(function(e) {
                                return t[e]
                            });
                        n && this.setState({
                            canRenderDeferredComponents: n
                        }, function() {
                            e.hasLoadedDeferredComponents = !0
                        })
                    }
                }, t.prototype.render = function() {
                    return o.createElement(s, {
                        value: {
                            canRenderAnyComponent: this.state.canRenderDeferredComponents || this.hasReachedMaximumDeferredTime,
                            loadFirst: this.state.loadFirst,
                            registerReportLoaded: this.registerReportLoaded
                        }
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "hasReachedMaximumDeferredTime", {
                    get: function() {
                        var e = this.props.maximumDeferredTime,
                            t = void 0 !== e ? e : 15e3;
                        return Date.now() >= this.initialLoadTimestamp + t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component);
            n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return c
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "a", function() {
                return l
            })
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            });
            var r, a, o = n("/7QA");

            function i(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(o.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(o.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(o.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(o.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(o.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(o.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(o.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(o.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(o.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(o.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(o.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(o.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function c(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = r.Hour;
                        break;
                    case a.ClockMS:
                        n = r.Minute
                }
                var c = 2;
                t === a.ClockHMS && (c = 3);
                var d = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    l = Object.keys(d);
                if (l.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < l.length - c && delete d[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? i(r.Month, e.months) : e.weeks && e.days ? i(r.Week, e.weeks) + " " + i(r.Day, e.days) : e.weeks ? i(r.Week, e.weeks) : e.days && e.hours ? i(r.Day, e.days) + " " + i(r.Hour, e.hours) : e.days ? i(r.Day, e.days) : e.hours && e.minutes ? i(r.Hour, e.hours) + " " + i(r.Minute, e.minutes) : e.hours ? i(r.Hour, e.hours) : e.minutes && e.seconds ? i(r.Minute, e.minutes) + " " + i(r.Second, e.seconds) : e.minutes ? i(r.Minute, e.minutes) : i(r.Second, e.seconds || 0)
                }(d);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (o.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        p = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        m = !0
                }
                var h = d.seconds || 0,
                    f = d.minutes || 0,
                    g = d.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var v = (m ? u(g, 2) : g) + p + u(f, 2);
                        return t === a.ClockHMS && (v += p + u(h, 2)), v;
                    case a.ClockMS:
                        return (m ? u(f, 2) : f) + p + u(h, 2)
                }
            }

            function u(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(r || (r = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(a || (a = {}))
        },
        "6Ll5": function(e, t, n) {},
        "6XEL": function(e, t, n) {
            "use strict";
            var r = {};

            function a(e) {
                return "/" + e + "/dashboard/achievements/"
            }

            function o(e) {
                return "/" + e.channelLogin + "/dashboard/achievements/" + e.id
            }
            n.d(r, "channelAchievements", function() {
                return a
            }), n.d(r, "achievement", function() {
                return o
            });
            var i, s = n("dG1e"),
                c = n("rSo7"),
                u = n("eAwD");

            function d(e, t, n) {
                return e.sort(function(e, r) {
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a],
                            s = n[a] || i.Ascending,
                            c = l(o(e), o(r)) * s;
                        if (0 !== c) return c
                    }
                    return 0
                })
            }

            function l(e, t) {
                var n = null !== e && void 0 !== e,
                    r = null !== t && void 0 !== t;
                return n && r ? e > t ? 1 : e < t ? -1 : 0 : n ? -1 : r ? 1 : 0
            }! function(e) {
                e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
            }(i || (i = {})), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return s.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return c.a
            }), n.d(t, !1, function() {
                return u.a
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return d
            })
        },
        "7WKn": function(e, t, n) {},
        "87PB": function(e, t, n) {
            e.exports = n.p + "assets/player_me_1x-658cc62393d46c6062b2.png"
        },
        "9kwc": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "StatsWidget"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                        value: "login"
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
                                        value: "stream"
                                    },
                                    arguments: [],
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
                                                value: "viewersCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "profileViewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriberScore"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "countBreakdown"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "count"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "current"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "next"
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
                    end: 202
                }
            };
            n.loc.source = {
                body: "query StatsWidget($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\nviewersCount\ncreatedAt\n}\nprofileViewCount\nfollowers {\ntotalCount\n}\nsubscriberScore {\ncountBreakdown {\ncount\n}\ncurrent\nnext\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        EkNY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "m", function() {
                return h
            }), n.d(t, "k", function() {
                return f
            }), n.d(t, "j", function() {
                return g
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "e", function() {
                return C
            }), n.d(t, "f", function() {
                return y
            }), n.d(t, "h", function() {
                return w
            });
            var r, a, o, i, s, c, u = n("mrSG"),
                d = n("/7QA"),
                l = n("2xye"),
                p = n("lDS7");
            ! function(e) {
                e.Added = "added", e.Removed = "removed"
            }(r || (r = {})),
            function(e) {
                e.SliderMove = "slidermove", e.StreamDelayClick = "streamdelayclick"
            }(a || (a = {})),
            function(e) {
                e.Click = "click"
            }(o || (o = {})),
            function(e) {
                e.Hover = "hover"
            }(i || (i = {})),
            function(e) {
                e.StorePastBroadcasts = "store_past_broadcasts"
            }(s || (s = {})),
            function(e) {
                e.ExpandedView = "expanded_view", e.RunAd = "run_ad", e.StreamDelay = "stream_delay", e.StreamInformation = "stream_info_update", e.StreamMarker = "stream_marker", e.BountyBoard = "bounty_board", e.StartBounty = "start_bounty", e.CancelBounty = "cancel_bounty", e.StopBounty = "stop_bounty", e.CheckBounties = "check_bounties"
            }(c || (c = {}));
            var m = function(e) {
                    var t = e.streamTime;
                    d.p.tracking.track(l.SpadeEventType.StreamSummaryBannerClick, {
                        stream_time: new Date(t).getTime() / 1e3
                    })
                },
                h = function(e) {
                    w(c.StreamInformation, {
                        target_name: "update",
                        update_successful: e
                    })
                },
                f = function(e) {
                    d.p.tracking.track(l.SpadeEventType.LiveDashboardStreamStats, {
                        action: i.Hover,
                        target_name: e,
                        stats_configuration: JSON.stringify(d.m.get("streamStatsConfiguration", p.a))
                    })
                },
                g = function(e) {
                    d.p.tracking.track(l.SpadeEventType.LiveDashboardStreamHealthEvent, {
                        action: o.Click,
                        target_name: e
                    })
                },
                v = function(e, t, n) {
                    d.p.tracking.track(l.SpadeEventType.AutoHostChannelUpdate, {
                        time: Date.now(),
                        location: "dashboard",
                        login: t,
                        target_channel: e,
                        action: n
                    })
                },
                b = function(e, t, n, r) {
                    w(c.StreamDelay, {
                        type: e,
                        slider_start_position: t,
                        slider_position: n,
                        update_successful: r
                    })
                },
                C = function(e) {
                    d.p.tracking.track(l.SpadeEventType.BroadcastPageClick, {
                        time: Date.now(),
                        broadcast_software: e
                    })
                },
                y = function(e) {
                    d.p.tracking.track(l.SpadeEventType.DashboardSettingsInteraction, {
                        setting_name: e.settingName,
                        setting_value: e.settingValue,
                        content: e.content,
                        medium: e.medium,
                        channel_id: e.channelID
                    })
                },
                w = function(e, t) {
                    d.p.tracking.track(l.SpadeEventType.LiveDashboardInteraction, u.__assign({
                        action: e
                    }, t || {}))
                }
        },
        IFXb: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("8/mp"),
                i = n("Ue10"),
                s = (n("wPMx"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.b, null, a.createElement(i.Ya, {
                            className: "dashboard-centered-page",
                            margin: {
                                y: 4
                            },
                            padding: {
                                x: 4
                            },
                            position: i.kb.Relative
                        }, this.props.children))
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return s
            })
        },
        JBqe: function(e, t, n) {
            "use strict";
            var r, a, o = n("mrSG"),
                i = n("q1tI"),
                s = n("x7UT"),
                c = n("0Log"),
                u = n("/aPz"),
                d = n("1rIY"),
                l = n("kxrW"),
                p = n("b6Yk"),
                m = function(e) {
                    return o.__awaiter(void 0, void 0, void 0, function() {
                        var t;
                        return o.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, p.a.get("/v5/streams/" + e)];
                                case 1:
                                    return [2, !(!(t = n.sent()).body || !t.body.stream)]
                            }
                        })
                    })
                },
                h = (r = Object(d.a)("IsStreamLiveContext", {
                    isLive: void 0,
                    onStreamStatusChange: function() {
                        return null
                    }
                })).InnerProvider,
                f = r.withContext,
                g = function(e) {
                    return e
                };

            function v(e) {
                return f(g)(e)
            }
            var b = 3e5,
                C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.fetchIsStreamLiveLegacyAPI = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, m(this.props.channelID)];
                                        case 1:
                                            return e = t.sent(), this.setState({
                                                isLive: e
                                            }), [2]
                                    }
                                })
                            })
                        }, n.onStreamStatusChange = function(e) {
                            n.setLiveState(e === l.a.Online)
                        }, n.pollLegacyAPI = function() {
                            n.legacyAPIIntervalID = setInterval(n.fetchIsStreamLiveLegacyAPI, b)
                        }, n.resetLegacyAPIPoll = function() {
                            n.legacyAPIIntervalID && (clearInterval(n.legacyAPIIntervalID), n.pollLegacyAPI())
                        }, n.setInitialLiveState = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return void 0 !== this.state.isLive ? [3, 2] : [4, m(this.props.channelID)];
                                        case 1:
                                            e = t.sent(), void 0 === this.state.isLive && this.setState({
                                                isLive: e
                                            }), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = {
                            onStreamStatusChange: n.onStreamStatusChange
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onPubsubUpdate(), this.setInitialLiveState(), this.pollLegacyAPI()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onPubsubUpdate()
                    }, t.prototype.componentWillUnmount = function() {
                        this.legacyAPIIntervalID && clearInterval(this.legacyAPIIntervalID)
                    }, t.prototype.render = function() {
                        return i.createElement(h, {
                            value: this.state
                        }, this.props.children)
                    }, t.prototype.onPubsubUpdate = function() {
                        var e = this.props.pubsub.messages,
                            t = e.streamUp && e.streamUp.server_time || 0,
                            n = e.streamDown && e.streamDown.server_time || 0;
                        (t || n) && this.setLiveState(t > n)
                    }, t.prototype.setLiveState = function(e) {
                        this.resetLegacyAPIPoll(), e !== this.state.isLive && this.setState({
                            isLive: e
                        })
                    }, t
                }(i.Component),
                y = Object(s.a)([{
                    topic: function(e) {
                        return Object(u.J)(e.channelID)
                    },
                    mapMessageTypesToProps: (a = {}, a[c.PubsubMessageType.ChannelStreamUp] = "streamUp", a[c.PubsubMessageType.ChannelStreamDown] = "streamDown", a)
                }])(C);
            n.d(t, !1, function() {
                return h
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "b", function() {
                return v
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, "a", function() {
                return y
            })
        },
        "L/BW": function(e, t, n) {},
        LWua: function(e, t, n) {
            e.exports = n.p + "assets/xsplit_broadcaster_1x-404b22413674582ad019.png"
        },
        NQSV: function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("/7QA"),
                s = n("UWzm"),
                c = n.n(s),
                u = n("zJLP"),
                d = n.n(u),
                l = n("SX9i"),
                p = n.n(l),
                m = n("87PB"),
                h = n.n(m),
                f = n("Nmvj"),
                g = n.n(f),
                v = n("g/LZ"),
                b = n.n(v),
                C = n("wcfy"),
                y = n.n(C),
                w = n("LWua"),
                S = n.n(w),
                _ = n("EkNY"),
                E = n("Ue10");
            ! function(e) {
                e.DownloadButton = "broadast-items-card__download-button"
            }(r || (r = {}));
            var k = function(e) {
                    var t = e.link,
                        n = e.title;
                    return o.createElement(E.Fb, {
                        background: E.r.Base,
                        elevation: 1,
                        padding: 2,
                        display: E.X.Flex,
                        flexDirection: E.Aa.Column,
                        fullHeight: !0
                    }, o.createElement(E.Ya, {
                        display: E.X.Flex,
                        justifyContent: E.Xa.Center,
                        margin: {
                            top: 1
                        }
                    }, o.createElement(E.S, {
                        alt: n,
                        src: e.imgURL
                    })), o.createElement(E.Ya, {
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(E.W, {
                        fontSize: E.Ca.Size5
                    }, n), o.createElement(E.U, {
                        targetBlank: !0,
                        to: t
                    }, t)), o.createElement(E.W, {
                        type: E.Wb.P,
                        color: E.O.Alt2
                    }, e.longDescription), o.createElement(E.Ya, {
                        display: E.X.Flex,
                        flexDirection: E.Aa.Column,
                        fullWidth: !0,
                        flexGrow: 1,
                        justifyContent: E.Xa.End,
                        margin: {
                            top: 2
                        }
                    }, o.createElement(E.z, {
                        "data-test-selector": r.DownloadButton,
                        fullWidth: !0,
                        type: E.F.Hollow,
                        linkTo: t,
                        onClick: _.e.bind(null, n)
                    }, Object(i.d)("Download", "BroadcastItemCard")), o.createElement(E.Ya, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(E.z, {
                        fullWidth: !0,
                        type: E.F.Text,
                        linkTo: e.setupGuideLink
                    }, Object(i.d)("Setup Guide", "BroadcastItemCard")))))
                },
                L = n("IFXb"),
                O = (n("L/BW"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        i.p.setPageTitle(Object(i.d)("Broadcast", "BroadcastPage"))
                    }, t.prototype.render = function() {
                        return o.createElement(E.Ya, {
                            display: E.X.Flex,
                            flexDirection: E.Aa.Column,
                            flexWrap: E.Ba.NoWrap,
                            fullHeight: !0
                        }, o.createElement(E.Ya, {
                            className: "broadcast-container",
                            position: E.kb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: E.db.Hidden
                        }, o.createElement(L.a, null, o.createElement(E.W, {
                            bold: !0,
                            type: E.Wb.H4
                        }, Object(i.d)("Broadcast While You Play", "BroadcastRootPage")), o.createElement(E.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(E.W, {
                            color: E.O.Alt2,
                            type: E.Wb.P
                        }, Object(i.d)("Here are the most common tools for broadcasting.", "BroadcastRootPage")), o.createElement(E.W, {
                            color: E.O.Alt2
                        }, Object(i.d)("For more info, visit the <x:link>Support Center</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement(E.U, {
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/topics/301257-getting-started/articles"
                                }, e)
                            }
                        }, "BroadcastRootPage"))), o.createElement(E.W, {
                            color: E.O.Alt2
                        }, Object(i.d)("Looking for your stream key? You can find it on your <x:link>dashboard</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement(E.U, {
                                    to: "/dashboard/settings"
                                }, e)
                            }
                        }, "BroadcastRootPage")), o.createElement(E.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(E.W, {
                            bold: !0,
                            type: E.Wb.H4
                        }, Object(i.d)("Broadcasting Applications", "BroadcastRootPage"))), o.createElement(E.cc, {
                            childWidth: E.dc.Large,
                            gutterSize: E.ec.Small,
                            noGrow: !0,
                            placeholderItems: 8
                        }, o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: h.a,
                            title: "Player.me",
                            link: "https://player.me/",
                            longDescription: Object(i.d)("Free, easy-to-use, all-in-one application for streaming and recording. Includes thousands of professionally designed overlays with alerts, a stream dashboard for tracking events, live stream chat and scene switching.", "BroadcastRootPage"),
                            setupGuideLink: "https://helpdesk.player.me/en/article/streaming-setup-guide-svsjha"
                        })), o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: y.a,
                            title: "Streamlabs OBS",
                            link: "https://streamlabs.com/streamlabs-obs/",
                            longDescription: Object(i.d)("Streamlabs OBS is free, open source, and easy way to get started streaming. The app is built on top of OBS with a whole lot of exciting features: facemasks, built-in widgets & chat, game specific encoders and thousands of free overlays and themes.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/115004797393-Streamlabs-OBS-All-In-One-Window-Walk-Through"
                        })), o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: S.a,
                            title: "XSplit Broadcaster",
                            link: "http://www.xsplit.com/",
                            longDescription: Object(i.d)("Simple yet powerful live streaming and recording software. XSplit Broadcaster is a revolutionary audio/video mixing application that allows for highly customizable professional quality live broadcasts by using simple and intuitive interface anyone can master.", "BroadcastRootPage"),
                            setupGuideLink: "https://www.xsplit.com/support"
                        })), o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: d.a,
                            title: "Open Broadcast Software",
                            link: "http://obsproject.com/",
                            longDescription: Object(i.d)("Free and open source software for recording and live streaming. Source code is available to everyone to contribute and improve.", "BroadcastRootPage"),
                            setupGuideLink: "https://obsproject.com/help"
                        }))), o.createElement(E.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(E.W, {
                            bold: !0,
                            type: E.Wb.H4
                        }, Object(i.d)("Broadcasting Tools", "BroadcastRootPage"))), o.createElement(E.cc, {
                            childWidth: E.dc.Large,
                            gutterSize: E.ec.Small,
                            noGrow: !0,
                            placeholderItems: 3
                        }, o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: b.a,
                            title: "Streamlabs",
                            link: "https://streamlabs.com/",
                            longDescription: Object(i.d)("Level up your stream with alerts, donations, and 20+ interactive widgets.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/217741147-Setting-up-your-Streamlabs-widgets-"
                        })), o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: g.a,
                            title: "StreamElements",
                            link: "https://streamelements.com/",
                            longDescription: Object(i.d)("A full suite for all your streaming needs: Bot, Overlays, Loyalty points, Giveaways and much more for new and veteran streamers alike.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamelements.com/hc/en-us/articles/115003424812-Quick-Start-Guide"
                        })), o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: c.a,
                            title: "Muxy",
                            link: "https://www.muxy.io/",
                            longDescription: Object(i.d)("Muxy provides alerts, tips, a real-time Live Feed, Cheer visualizations, and stream analytics.", "BroadcastRootPage"),
                            setupGuideLink: "https://muxy.io/tutorial/"
                        })), o.createElement(E.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(k, {
                            imgURL: p.a,
                            title: "Opera Event",
                            link: "https://gather.operaevent.co/",
                            longDescription: Object(i.d)("Opera Event is a platform for arming broadcasters with the ability to engage, grow, enhance and monetize their audience.", "BroadcastRootPage"),
                            setupGuideLink: "https://gather.operaevent.co/"
                        }))))))
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return O
            })
        },
        NkOX: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.ActivityFeed = "activity-feed", e.AdsWidget = "ads-widget", e.BountyBoardWidget = "bounty-board-widget", e.ExtensionLiveConfigure = "extension-live-configure", e.HostWidget = "host-widget", e.LiveChat = "live-chat", e.SquadStream = "squad-stream", e.Stats = "stats", e.StreamDelay = "stream-delay", e.StreamHealth = "stream-health", e.StreamInformation = "stream-information", e.StreamMarker = "stream-marker", e.VideoPreview = "video-preview", e.VideoProducerWidget = "video-producer-widget"
                }(r || (r = {})),
                function(e) {
                    e.ActivityFeedWidget = "activity_feed_widget", e.AdsWidget = "ads_widget", e.BountyBoardWidget = "bounty_board_widget", e.ExtensionLiveConfigureWidget = "extension_config_widget", e.HostWidget = "host_widget", e.LiveChatWidget = "chat_widget", e.SquadStreamWidget = "squad_stream_widget", e.StatsWidget = "stats_widget", e.StreamDelayWidget = "stream_delay_widget", e.StreamHealthWidget = "stream_health_widget", e.StreamInformationWidget = "stream_information_widget", e.StreamMarkerWidget = "stream_marker_widget", e.VideoPreviewWidget = "video_preview_widget", e.VideoProducerWidget = "video_producer_widget"
                }(a || (a = {}))
        },
        Nmvj: function(e, t, n) {
            e.exports = n.p + "assets/streamelements_1x-5a78a214c1701af3da1d.png"
        },
        SMeG: function(e, t, n) {},
        SX9i: function(e, t, n) {
            e.exports = n.p + "assets/opera_1x-2766d8f4415bd7218cc9.png"
        },
        UWzm: function(e, t, n) {
            e.exports = n.p + "assets/muxy_1x-f7ab6fe3091595df63f6.png"
        },
        "b+ID": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("8Ad5"),
                s = n("1rIY"),
                c = (r = Object(s.a)("ExpandedViewButtonContext", {
                    isExpandedView: !1,
                    toggleExpandedView: function() {
                        return null
                    }
                })).InnerProvider,
                u = r.withContext,
                d = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleKeyUp = function(e) {
                            e.keyCode === i.a.Esc && n.state.isExpandedView && n.toggleExpandedView()
                        }, n.toggleExpandedView = function(e) {
                            n.setState(function(t) {
                                return {
                                    isExpandedView: void 0 !== e ? e : !t.isExpandedView
                                }
                            })
                        }, n.state = {
                            isExpandedView: !1,
                            toggleExpandedView: n.toggleExpandedView
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("keyup", this.handleKeyUp)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("keyup", this.handleKeyUp)
                    }, t.prototype.render = function() {
                        return o.createElement(c, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                o = n("kRBY"),
                i = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a, o, i, s;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, a), i = r.__assign({}, t, {
                                            body: o
                                        }), [4, this._fetch(e, i)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return r.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = o.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, r.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw o.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, o;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return a = r.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = a.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var i = Object(o.e)(n);
                        return i && (r.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (r["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        dG1e: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("b6Yk");

            function o(e, t) {
                return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, a.a.request(e.path, e, t)];
                            case 1:
                                return n = r.sent(), [2, new i(n, e)]
                        }
                    })
                })
            }
            var i = function() {
                function e(e, t) {
                    this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = t
                }
                return e.prototype.isSuccess = function() {
                    return this.status >= 200 && this.status < 400 && !this.requestError
                }, e.prototype.isError = function() {
                    return !this.isSuccess()
                }, e
            }()
        },
        eAwD: function(e, t, n) {
            "use strict";

            function r(e) {
                e && requestAnimationFrame(function() {
                    e.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "g/LZ": function(e, t, n) {
            e.exports = n.p + "assets/streamlabs-dc0be2830d3658fa69d4.png"
        },
        lDS7: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                i = n("/7QA"),
                s = n("yR8l"),
                c = n("5zf8"),
                u = n("GnwI"),
                d = n("EkNY"),
                l = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hidden: !t.props.showStat
                        }, t.handleHover = function() {
                            var e;
                            switch (t.props.statType) {
                                case w.CURRENT_VIEWERS:
                                    e = "viewers_value";
                                    break;
                                case w.STREAM_UP_TIME:
                                    e = "uptime_value";
                                    break;
                                case w.NUMBER_OF_CLIPS:
                                    e = "clips_value";
                                    break;
                                case w.TOTAL_VIEWS:
                                    e = "views_value";
                                    break;
                                case w.FOLLOWERS:
                                    e = "followers_value";
                                    break;
                                case w.SUBSCRIPTIONS:
                                    e = "subscribers_value";
                                    break;
                                default:
                                    e = "unknown"
                            }
                            Object(d.k)(e)
                        }, t.handleClick = function() {
                            t.setState({
                                hidden: !t.state.hidden
                            });
                            var e = i.m.get("streamStatsConfiguration", S);
                            e[t.props.statType] = !e[t.props.statType], i.m.set("streamStatsConfiguration", e)
                        }, t.renderStat = function() {
                            var e = Object(i.d)("Offline", "LiveDashboard");
                            return t.state.hidden ? a.createElement(l.Zb, {
                                label: t.props.statDescription || e,
                                direction: l.bc.Right
                            }, Object(i.d)("Hover to view", "LiveDashboard")) : a.createElement(l.Zb, {
                                label: Object(i.d)("Click to hide", "LiveDashboard"),
                                direction: l.bc.Right
                            }, t.props.statDescription || e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.color;
                        return a.createElement(l.Fb, {
                            margin: {
                                left: 1
                            },
                            fontSize: l.Ca.Size5,
                            color: e
                        }, a.createElement("span", {
                            onClick: this.handleClick,
                            onMouseOver: this.handleHover
                        }, this.renderStat()))
                    }, t
                }(a.Component),
                m = n("xTFG"),
                h = n("NkOX"),
                f = n("qYDK"),
                g = n("4mBO"),
                v = n("JBqe"),
                b = n("6XEL"),
                C = n("9kwc");
            n.d(t, "a", function() {
                return S
            }), n.d(t, "b", function() {
                return w
            }), n.d(t, "c", function() {
                return E
            });
            var y, w, S = {
                showViewers: !0,
                showUptime: !0,
                showViews: !0,
                showFollowers: !0,
                showSubs: !0,
                showClips: !0,
                showSubScore: !0
            };
            ! function(e) {
                e.CURRENT_VIEWERS_COUNT = "current-viewers-count", e.NUMBER_OF_CLIPS = "number-of-clips"
            }(y || (y = {})),
            function(e) {
                e.CURRENT_VIEWERS = "showViewers", e.STREAM_UP_TIME = "showUptime", e.TOTAL_VIEWS = "showViews", e.FOLLOWERS = "showFollowers", e.NUMBER_OF_CLIPS = "showClips", e.SUBSCRIPTIONS = "showSubs"
            }(w || (w = {}));
            var _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.getStreamInfo = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.stream
                        }, n.renderViewersCount = function() {
                            var e = n.getStreamInfo(),
                                t = e && null !== e.viewersCount ? Object(i.f)(e.viewersCount) : 0,
                                r = n.state.statsConfig && n.state.statsConfig[w.CURRENT_VIEWERS],
                                o = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": y.CURRENT_VIEWERS_COUNT,
                                statDescription: o ? t + " " + Object(i.d)("Viewers", "LiveDashboard") : null,
                                statType: w.CURRENT_VIEWERS,
                                showStat: r,
                                color: o ? l.O.Live : void 0
                            })
                        }, n.renderStreamTime = function() {
                            var e = n.getStreamInfo(),
                                t = e && e.createdAt || (new Date).toISOString(),
                                r = n.props.isLive;
                            return a.createElement(p, {
                                statDescription: r ? Object(c.b)((Date.now() - new Date(t).getTime()) / 1e3, c.a.ClockHM) : null,
                                statType: w.STREAM_UP_TIME,
                                showStat: !n.state.statsConfig || n.state.statsConfig[w.STREAM_UP_TIME],
                                color: r ? l.O.Base : void 0
                            })
                        }, n.renderNumberOfClips = function() {
                            var e = n.state.broadcastClipsCount,
                                t = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": y.NUMBER_OF_CLIPS,
                                statDescription: t ? Object(i.f)(e) + " " + (1 === e ? Object(i.d)("Clip", "LiveDashboard") : Object(i.d)("Clips", "LiveDashboard")) : null,
                                statType: w.NUMBER_OF_CLIPS,
                                showStat: n.state.statsConfig && n.state.statsConfig[w.NUMBER_OF_CLIPS],
                                color: t ? l.O.Base : void 0
                            })
                        }, n.renderSubscriptionStat = function() {
                            var e = Object(i.d)("Subscribers", "LiveDashboard"),
                                t = Object(i.d)("Sub Points", "LiveDashboard"),
                                r = n.props.data && n.props.data.user && null !== n.props.data.user.subscriberScore ? n.props.data.user.subscriberScore : null,
                                o = r && r.countBreakdown;
                            if (!r || !o) return null;
                            var s = Object(i.f)(o.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)),
                                c = Object(i.f)(r.current);
                            return r.next ? a.createElement(l.Fb, {
                                color: l.O.Alt2,
                                display: l.X.Flex,
                                alignItems: l.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(l.Zb, {
                                label: Object(i.d)("Subscribers shows number of active subs.\n Sub points unlock additional emote slots.", "LiveDashboard"),
                                direction: l.bc.Right
                            }, a.createElement(l.tb, {
                                asset: l.ub.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + c + " / " + Object(i.f)(r.next) + " " + t + ")",
                                statType: w.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[w.SUBSCRIPTIONS],
                                color: l.O.Base
                            })) : a.createElement(l.Fb, {
                                color: l.O.Alt2,
                                display: l.X.Flex,
                                alignItems: l.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(l.Zb, {
                                label: Object(i.d)("Congrats on reaching the max number of emote slots", "LiveDashboard"),
                                direction: l.bc.Right
                            }, a.createElement(l.tb, {
                                asset: l.ub.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + c + " " + t + ")",
                                statType: w.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[w.SUBSCRIPTIONS],
                                color: l.O.Base
                            }))
                        }, n.setFetchBroadcastClipsCountInterval = function() {
                            n.intervalID && clearInterval(n.intervalID), n.fetchBroadcastClipsCount(), n.intervalID = setInterval(n.fetchBroadcastClipsCount, 3e4)
                        }, n.fetchBroadcastClipsCount = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.getStreamInfo(), (t = e && e.id) ? [4, Object(b.c)({
                                                path: "/v4/broadcasts/" + t + "/clips/count"
                                            })] : (this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]);
                                        case 1:
                                            return (n = r.sent()).body && !n.error ? (a = n.body.count, this.setState({
                                                broadcastClipsCount: a
                                            })) : (o = "Unable to fetch broadcast clips count", i.k.error(new Error(o), o)), this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]
                                    }
                                })
                            })
                        };
                        var o = i.m.get("streamStatsConfiguration", null);
                        return n.state = {
                            statsConfig: o || S,
                            broadcastClipsCount: 0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.setFetchBroadcastClipsCountInterval()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.setFetchBroadcastClipsCountInterval()
                    }, t.prototype.componentWillUnmount = function() {
                        this.intervalID && clearInterval(this.intervalID)
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return null;
                        var e = this.props.data.user,
                            t = e && e.followers,
                            n = Object(i.f)(e && e.profileViewCount || 0),
                            r = e && t && null !== t.totalCount ? Object(i.f)(t.totalCount) : 0;
                        return a.createElement(f.a, {
                            title: Object(i.d)("Stats", "LiveDashboard")
                        }, a.createElement(l.Ya, {
                            padding: 2
                        }, a.createElement(l.Fb, {
                            color: l.O.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.Zb, {
                            label: Object(i.d)("The number of people currently watching your channel", "LiveDashboard"),
                            direction: l.bc.Right
                        }, a.createElement(l.tb, {
                            asset: l.ub.GlyphLive
                        })), this.renderViewersCount()), a.createElement(l.Fb, {
                            color: l.O.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.Zb, {
                            label: Object(i.d)("How long you have been broadcasting for this session", "LiveDashboard"),
                            direction: l.bc.Right
                        }, a.createElement(l.tb, {
                            asset: l.ub.Timeout
                        })), this.renderStreamTime()), a.createElement(l.Fb, {
                            color: l.O.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.Zb, {
                            label: Object(i.d)("The number of clips that have been created", "LiveDashboard"),
                            direction: l.bc.Right
                        }, a.createElement(l.Fb, {
                            className: "stats-widget-clips-icon",
                            display: l.X.InlineFlex
                        }, a.createElement(l.tb, {
                            asset: l.ub.Clip,
                            height: 20,
                            width: 20
                        }))), this.renderNumberOfClips()), a.createElement(l.Fb, {
                            color: l.O.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.Zb, {
                            label: Object(i.d)("The number of people who have viewed the channel", "LiveDashboard"),
                            direction: l.bc.Right
                        }, a.createElement(l.tb, {
                            asset: l.ub.GlyphViews
                        })), a.createElement(p, {
                            statDescription: n + " " + Object(i.d)("Views", "LiveDashboard"),
                            statType: w.TOTAL_VIEWS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[w.TOTAL_VIEWS],
                            color: l.O.Base
                        })), a.createElement(l.Fb, {
                            color: l.O.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.Zb, {
                            label: Object(i.d)("The number of people currently following your channel", "LiveDashboard"),
                            direction: l.bc.Right
                        }, a.createElement(l.tb, {
                            asset: l.ub.Heart
                        })), a.createElement(p, {
                            statDescription: r + " " + Object(i.d)("Followers", "LiveDashboard"),
                            statType: w.FOLLOWERS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[w.FOLLOWERS],
                            color: l.O.Base
                        })), this.renderSubscriptionStat()))
                    }, t
                }(a.Component),
                E = Object(o.compose)(Object(g.b)(h.a.Stats), v.b, Object(m.b)(h.a.Stats, {
                    autoReportCardVisibility: !0
                }), Object(s.a)(C, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            pollInterval: 3e4,
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(u.b)("Stats"))(_)
        },
        moen: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n("/MKj"),
                o = n("mLw1"),
                i = n("fvjX"),
                s = n("V+GM"),
                c = n("NvVO"),
                u = n("2xye"),
                d = n("kRBY"),
                l = n("GnwI"),
                p = n("NQSV");
            var m = Object(i.compose)(Object(a.connect)(function(e) {
                var t = Object(d.e)(e);
                return {
                    isLoggedIn: Object(d.f)(e),
                    userLogin: t && t.login
                }
            }), Object(l.b)("BroadcastPage", {
                autoReportInteractive: !0,
                destination: c.a.BroadcastPage
            }), Object(s.a)({
                location: u.PageviewLocation.Broadcast
            }))(function(e) {
                return e.isLoggedIn ? r.createElement(o.a, {
                    to: "/" + e.userLogin + "/dashboard/broadcast"
                }) : r.createElement(p.a, null)
            });
            n.d(t, "BroadcastPage", function() {
                return m
            })
        },
        odMz: function(e, t, n) {
            "use strict";
            var r, a;
            ! function(e) {
                e[e.RemoveTarget = 0] = "RemoveTarget", e[e.SetGrabbed = 1] = "SetGrabbed", e[e.SetTarget = 2] = "SetTarget"
            }(r || (r = {})),
            function(e) {
                e.Bottom = "bottom", e.Top = "top"
            }(a || (a = {}));
            var o = function() {
                return function(e, t) {
                    void 0 === t && (t = !1), this.name = e, this.isCollapsed = t, this.isGrabbed = !1
                }
            }();
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            })
        },
        qYDK: function(e, t, n) {
            "use strict";
            var r, a, o, i, s = n("fvjX"),
                c = n("1rIY"),
                u = (r = Object(c.a)("DragAndDropLayoutContext", {
                    dropCard: function() {
                        return null
                    },
                    onCardsUpdate: function() {
                        return null
                    },
                    updateCard: function() {
                        return null
                    }
                })).InnerProvider,
                d = r.withContext,
                l = n("mrSG"),
                p = n("q1tI"),
                m = n("/7QA"),
                h = n("odMz"),
                f = n("Ue10"),
                g = (n("7WKn"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.componentDidUpdate = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.render = function() {
                        return p.createElement(f.Ya, {
                            breakpointLarge: {
                                margin: {
                                    bottom: 2
                                }
                            },
                            className: "drag-and-drop-card-placeholder" + (this.props.show ? "" : " drag-and-drop-card-placeholder__hide"),
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            refDelegate: this.setContainerRef
                        })
                    }, t.prototype.setPlaceholderStyles = function() {
                        var e = this.props.cloneStyleRef;
                        if (e && this.containerRef) {
                            var t = e.getBoundingClientRect(),
                                n = t.height,
                                r = t.width;
                            this.containerRef.style.height = n + "px", this.containerRef.style.width = r + "px"
                        }
                    }, t
                }(p.Component)),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return p.createElement(f.Fb, {
                            className: "drag-and-drop-card-title",
                            color: f.O.Base,
                            fontSize: f.Ca.Size5,
                            margin: {
                                y: "auto"
                            }
                        }, this.props.title)
                    }, t
                }(p.Component);
            n("SMeG");
            ! function(e) {
                e.ContentCollapsed = "drag-and-drop-card-content__collapsed"
            }(a || (a = {})),
            function(e) {
                e.Card = "drag-and-drop-card", e.Container = "drag-and-drop-card-container", e.Content = "drag-and-drop-card-content"
            }(o || (o = {})),
            function(e) {
                e.Carat = "carat", e.Card = "card", e.Container = "container", e.Header = "header", e.Menu = "drag-and-drop-card-menu"
            }(i || (i = {}));
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContainerMouseEnter = function(e) {
                        var n = e.clientY;
                        if (t.props.grabbedCard && !t.isHoveringSelf) {
                            var r = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: r
                            }, h.b.SetTarget)
                        }
                    }, t.handleContainerMouseLeave = function() {
                        if (t.props.grabbedCard) {
                            var e = t.props.card;
                            t.props.updateCard(e.name, {
                                placeholderPosition: void 0
                            }, h.b.RemoveTarget)
                        }
                    }, t.handleContainerMouseMove = function(e) {
                        var n = e.clientY;
                        if (t.isHoveringOtherCard) {
                            var r = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: r
                            }, h.b.SetTarget)
                        }
                    }, t.getPlaceholderPosition = function(e) {
                        var n = t[i.Container].getBoundingClientRect();
                        return e > n.top + n.height / 2 ? h.c.Bottom : h.c.Top
                    }, t.handleCaratClick = function() {
                        var e = t.props.card,
                            n = e.name,
                            r = e.isCollapsed;
                        t.props.updateCard(n, {
                            isCollapsed: !r
                        })
                    }, t.stopMouseDownPropagation = function(e) {
                        e.stopPropagation()
                    }, t.handleCardMouseMove = function(e) {
                        var n = e.movementX,
                            r = e.movementY;
                        if (t.props.card.isGrabbed) {
                            var a = t[i.Card];
                            a.style.left = parseInt(a.style.left || "0", 10) + n + "px", a.style.top = parseInt(a.style.top || "0", 10) + r + "px"
                        }
                    }, t.handleHeaderMouseDown = function(e) {
                        var n = e.clientY,
                            r = t[i.Card],
                            a = r.getBoundingClientRect(),
                            o = a.top,
                            s = a.left,
                            c = a.width;
                        r.style.left = s + "px", r.style.top = o + "px", r.style.width = c + "px";
                        var u = t.getPlaceholderPosition(n),
                            d = t.props.card.name;
                        t.props.updateCard(d, {
                            placeholderPosition: u
                        }, h.b.SetGrabbed), t.props.updateCard(d, {}, h.b.SetTarget)
                    }, t.handleCardMouseUp = function() {
                        if (t.props.card.isGrabbed) {
                            var e = t[i.Card];
                            e.style.left = null, e.style.top = null, e.style.width = "100%", t.props.dropCard()
                        }
                        var n = t.props.card;
                        (n.placeholderPosition || n.isGrabbed) && t.props.updateCard(n.name, {
                            isGrabbed: !1,
                            placeholderPosition: void 0
                        })
                    }, t.registerRef = function(e, n) {
                        t[e] = n
                    }, t.addEventListeners = function() {
                        var e = t[i.Container];
                        e.addEventListener("mousemove", t.handleContainerMouseMove), e.addEventListener("mouseleave", t.handleContainerMouseLeave), e.addEventListener("mouseenter", t.handleContainerMouseEnter), t[i.Carat].addEventListener("mousedown", t.stopMouseDownPropagation), t[i.Header].addEventListener("mousedown", t.handleHeaderMouseDown), t[i.Menu].addEventListener("mousedown", t.stopMouseDownPropagation), window.addEventListener("mouseup", t.handleCardMouseUp), window.addEventListener("mousemove", t.handleCardMouseMove)
                    }, t.removeEventListeners = function() {
                        var e = t[i.Container];
                        e.removeEventListener("mousemove", t.handleContainerMouseMove), e.removeEventListener("mouseleave", t.handleContainerMouseLeave), e.removeEventListener("mouseenter", t.handleContainerMouseEnter), t[i.Carat].removeEventListener("mousedown", t.stopMouseDownPropagation), t[i.Header].removeEventListener("mousedown", t.handleHeaderMouseDown), t[i.Menu].removeEventListener("mousedown", t.stopMouseDownPropagation), window.removeEventListener("mouseup", t.handleCardMouseUp), window.removeEventListener("mousemove", t.handleCardMouseMove)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.card.isCollapsed !== this.props.card.isCollapsed && this.props.onCardsUpdate()
                }, t.prototype.componentDidMount = function() {
                    this.addEventListeners(), this.props.updateCard(this.props.card.name, {
                        cardRef: this[i.Card]
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.removeEventListeners()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.card,
                        n = t.isCollapsed,
                        r = t.isGrabbed,
                        s = t.placeholderPosition,
                        c = e.grabbedCard,
                        u = e.menu;
                    return p.createElement(f.Ya, {
                        "data-test-selector": o.Container,
                        display: f.X.Flex,
                        flexDirection: f.Aa.Column,
                        refDelegate: this.registerRef.bind(this, i.Container)
                    }, p.createElement(g, {
                        cloneStyleRef: c && c.cardRef,
                        show: s === h.c.Top
                    }), p.createElement(f.Fb, {
                        background: f.r.Base,
                        border: !0,
                        breakpointLarge: {
                            margin: {
                                bottom: 2
                            }
                        },
                        className: "drag-and-drop-card-container" + (r ? " drag-and-drop-card-container__grabbed" : ""),
                        "data-test-selector": o.Card,
                        display: f.X.Flex,
                        elevation: r ? 4 : 1,
                        flexDirection: f.Aa.Column,
                        margin: {
                            bottom: 1
                        },
                        refDelegate: this.registerRef.bind(this, i.Card)
                    }, p.createElement(f.Fb, {
                        alignContent: f.e.Center,
                        alignItems: f.f.Center,
                        borderBottom: !0,
                        className: "drag-and-drop-card-header",
                        display: f.X.Flex,
                        justifyContent: f.Xa.Between,
                        padding: {
                            x: 1
                        },
                        position: f.kb.Relative,
                        refDelegate: this.registerRef.bind(this, i.Header)
                    }, p.createElement(f.Ya, {
                        display: f.X.Flex,
                        justifyContent: f.Xa.Center
                    }, p.createElement(f.Ya, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(f.Ya, {
                        className: "drag-and-drop-card-carat" + (n ? "__collapsed" : ""),
                        refDelegate: this.registerRef.bind(this, i.Carat)
                    }, p.createElement(f.A, {
                        ariaLabel: Object(m.d)("Collapse/Expand", "DragAndDropCard"),
                        icon: f.ub.GlyphArrDown,
                        onClick: this.handleCaratClick
                    }))), p.createElement(v, {
                        title: this.props.title
                    })), p.createElement(f.Ya, {
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, p.createElement(f.Ya, {
                        refDelegate: this.registerRef.bind(this, i.Menu)
                    }, u), p.createElement(f.Ya, {
                        margin: {
                            left: 1
                        }
                    }, p.createElement(f.A, {
                        ariaLabel: Object(m.d)("Drag", "DragAndDropCard"),
                        icon: f.ub.DragHandle
                    })))), p.createElement(f.Ya, {
                        className: "drag-and-drop-card-content" + (n ? " " + a.ContentCollapsed : ""),
                        "data-test-selector": o.Content,
                        position: f.kb.Relative
                    }, n && this.props.unmountOnCollapse ? null : this.props.children)), p.createElement(g, {
                        cloneStyleRef: c && c.cardRef,
                        show: s === h.c.Bottom
                    }))
                }, Object.defineProperty(t.prototype, "isHoveringOtherCard", {
                    get: function() {
                        var e = this.props.targetCard;
                        return !(!e || e.cardRef !== this[i.Card] || !this.props.grabbedCard)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isHoveringSelf", {
                    get: function() {
                        var e = this.props.grabbedCard;
                        return !(!e || e.cardRef !== this[i.Card])
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(p.Component);
            i.Carat, i.Card, i.Container, i.Header, i.Menu;
            var C, y = b,
                w = (C = Object(c.a)("DragAndDropCardContext", {
                    card: new h.a("unknown")
                })).InnerProvider,
                S = C.withContext;
            var _ = Object(s.compose)(d(function(e) {
                    return e
                }), S(function(e) {
                    return e
                }))(y),
                E = n("i8i4"),
                k = n("8/mp"),
                L = n("b+ID"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setRootContainerRef = function(e) {
                            t.rootContainerRef = e
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.rootContainerRef.appendChild(this.props.element)
                    }, t.prototype.render = function() {
                        return p.createElement(f.Ya, {
                            refDelegate: this.setRootContainerRef
                        })
                    }, t
                }(p.Component),
                D = (n("6Ll5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContainerMouseOver = function() {
                            var e = t.props.grabbedCard;
                            e && e.cardRef && !t.props.targetCard && t.props.updateCard(t.placeholderName, {
                                column: t.props.column,
                                placeholderPosition: h.c.Bottom,
                                row: t.props.row
                            }, h.b.SetTarget)
                        }, t.handleContainerMouseLeave = function() {
                            t.props.grabbedCard && t.props.targetCard && t.props.updateCard(t.placeholderName, {}, h.b.RemoveTarget)
                        }, t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.containerRef.addEventListener("mouseover", this.handleContainerMouseOver), this.containerRef.addEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.componentWillUnmount = function() {
                        this.containerRef.removeEventListener("mouseove", this.handleContainerMouseOver), this.containerRef.removeEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.grabbedCard,
                            n = e.targetCard;
                        return p.createElement(f.Fb, {
                            alignContent: f.e.Stretch,
                            alignItems: f.f.Stretch,
                            breakpointLarge: {
                                margin: {
                                    right: 2
                                },
                                padding: {
                                    y: 2
                                }
                            },
                            className: "drag-and-drop-layout-column",
                            display: f.X.Flex,
                            flexDirection: f.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: f.Xa.Start,
                            margin: {
                                right: 1
                            },
                            padding: {
                                y: 1
                            },
                            refDelegate: this.setContainerRef
                        }, this.props.children, p.createElement(g, {
                            cloneStyleRef: t && t.cardRef,
                            show: !(!n || n.name !== this.placeholderName)
                        }))
                    }, Object.defineProperty(t.prototype, "placeholderName", {
                        get: function() {
                            return this.props.column + "-" + this.props.row + "-placeholder"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(p.Component)),
                R = (n("uZYF"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleCardsUpdate = function() {
                            var e = n.props.onCardsUpdate;
                            e && e(n.state.roots.map(function(e) {
                                return e.map(function(e) {
                                    return n.state.cards[e.name]
                                })
                            }))
                        }, n.dropCard = function() {
                            n.setState(function(e) {
                                var t, n, r = e.common,
                                    a = r.grabbedCard,
                                    o = r.targetCard,
                                    i = e.cards,
                                    s = e.roots;
                                if (a && o && a.name !== o.name && (s.forEach(function(e, r) {
                                        e.forEach(function(e, i) {
                                            e.name === a.name ? t = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: i
                                            } : e.name === o.name && (n = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: i
                                            })
                                        })
                                    }), n || (n = {
                                        column: o.column || 0,
                                        el: o.el,
                                        name: o.name,
                                        row: o.row || 0
                                    }), t && n)) {
                                    var c = s[t.column],
                                        u = s[n.column],
                                        d = o.placeholderPosition === h.c.Bottom;
                                    u.splice(n.row + (d ? 1 : 0), 0, t), t.column === n.column ? u.splice(t.row + (t.row > n.row ? 1 : 0), 1) : c.splice(t.row, 1)
                                }
                                return {
                                    cards: i,
                                    common: l.__assign({}, e.common, {
                                        grabbedCard: void 0,
                                        targetCard: void 0
                                    }),
                                    roots: s
                                }
                            }, n.handleCardsUpdate)
                        }, n.updateCard = function(e, t, r) {
                            void 0 === t && (t = {}), n.setState(function(n) {
                                var a = l.__assign({}, n),
                                    o = a.cards,
                                    i = !!o[e],
                                    s = l.__assign({}, o[e] || new h.a(e), t);
                                switch (r) {
                                    case h.b.RemoveTarget:
                                        a.common = l.__assign({}, n.common, {
                                            targetCard: void 0
                                        });
                                        break;
                                    case h.b.SetGrabbed:
                                        s.isGrabbed = !0, a.common = l.__assign({}, a.common, {
                                            grabbedCard: s
                                        });
                                        break;
                                    case h.b.SetTarget:
                                        a.common = l.__assign({}, a.common, {
                                            targetCard: s
                                        })
                                }
                                return i && (a.cards[e] = s), a
                            })
                        };
                        var r = {},
                            a = t.initialCardsState.map(function(e) {
                                return e.map(function(e) {
                                    return e.el = document.createElement("div"), r[e.name] = e, {
                                        el: e.el,
                                        name: e.name
                                    }
                                })
                            });
                        return n.state = {
                            cards: r,
                            common: {
                                dropCard: n.dropCard,
                                onCardsUpdate: n.handleCardsUpdate,
                                updateCard: n.updateCard
                            },
                            roots: a
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.handleCardsUpdate()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.isExpandedView;
                        return p.createElement(p.Fragment, null, p.createElement(k.b, {
                            className: "drag-and-drop-layout-scrollable-area" + (t ? "__expanded-view" : "")
                        }, p.createElement(f.Ya, {
                            alignContent: f.e.Stretch,
                            alignItems: f.f.Stretch,
                            className: "drag-and-drop-layout",
                            display: f.X.Flex,
                            flexDirection: f.Aa.Row,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: f.Xa.Between
                        }, this.state.roots.map(function(t, n) {
                            return p.createElement(D, {
                                column: n,
                                key: n,
                                grabbedCard: e.state.common.grabbedCard,
                                targetCard: e.state.common.targetCard,
                                row: t.length - 1,
                                updateCard: e.updateCard
                            }, t.map(function(e) {
                                var t = e.el,
                                    n = e.name;
                                return p.createElement(O, {
                                    element: t,
                                    key: n
                                })
                            }))
                        }))), p.createElement(u, {
                            value: this.state.common
                        }, Object.keys(this.state.cards).map(function(t) {
                            var n = e.state.cards[t];
                            return E.createPortal(p.createElement(w, {
                                value: {
                                    card: n
                                }
                            }, e.props.cards[n.name]), n.el)
                        })))
                    }, t
                }(p.Component));
            var I = Object(L.b)(function(e) {
                    return {
                        isExpandedView: e.isExpandedView
                    }
                })(R),
                x = n("eJ65"),
                P = n("N0BP"),
                M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return p.createElement(f.Ya, {
                            margin: {
                                left: 1
                            },
                            position: f.kb.Relative
                        }, p.createElement(x.a, null, p.createElement(f.A, l.__assign({
                            ariaLabel: this.props.ariaIconLabel,
                            icon: this.props.icon
                        }, Object(P.a)(this.props))), p.createElement(f.u, {
                            offsetY: "0",
                            offsetX: "1rem",
                            direction: f.v.Left,
                            size: f.w.Small
                        }, this.props.children)))
                    }, t
                }(p.Component);
            n.d(t, "a", function() {
                return _
            }), n.d(t, "c", function() {
                return I
            }), n.d(t, "b", function() {
                return M
            })
        },
        rSo7: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA");

            function a(e) {
                var t = Math.floor(e / 60),
                    n = e % 60;
                return t && n ? Object(r.d)("{hours, number}h{minutes, number}m", {
                    hours: t,
                    minutes: n
                }, "StreamSummaryDuration") : t ? Object(r.d)("{hours, number}h", {
                    hours: t
                }, "StreamSummaryDuration") : Object(r.d)("{minutes, number}m", {
                    minutes: n
                }, "StreamSummaryDuration")
            }
        },
        uZYF: function(e, t, n) {},
        wPMx: function(e, t, n) {},
        wcfy: function(e, t, n) {
            e.exports = n.p + "assets/streamlabs_obs_small-6949e63f4c841043cd4f.png"
        },
        xTFG: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return c
            });
            var r, a = n("1rIY"),
                o = (r = Object(a.a)("CardsTrackingContext", {
                    registerReportCardVisibility: function() {
                        return function() {
                            return null
                        }
                    }
                })).InnerProvider,
                i = r.withContext,
                s = function(e, t) {
                    return function(n) {
                        return {
                            reportCardVisibility: (0, n.registerReportCardVisibility)(e, t)
                        }
                    }
                };

            function c(e, t) {
                return function(n) {
                    return i(s(e, t))(n)
                }
            }
        },
        zJLP: function(e, t, n) {
            e.exports = n.p + "assets/obs_logors_1x-ea09acc52659eb5399b6.png"
        }
    }
]);