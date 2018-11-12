(window.webpackJsonp = window.webpackJsonp || []).push([
    [179], {
        "+lD8": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("Ue10"),
                s = (n("j/Uj"), function() {
                    return a.createElement(r.Xa, {
                        className: "top-stats-chart-loading",
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: r.Wa.Center,
                        fullWidth: !0
                    }, a.createElement(r.Za, {
                        fillContent: !0
                    }))
                });
            n.d(t, "a", function() {
                return s
            })
        },
        "+zwc": function(e, t, n) {},
        "17YR": function(e, t, n) {
            "use strict";

            function a(e) {
                return e.map(function(e) {
                    return e.join(",")
                }).join("\n")
            }

            function r(e) {
                for (var t = [], n = e[0].length, a = function(n) {
                        t.push(e.map(function(e) {
                            return e[n]
                        }))
                    }, r = 0; r < n; r++) a(r);
                return t
            }

            function s(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var n = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(n, e)
                }
                var a = document.createElement("a"),
                    r = encodeURIComponent(t);
                void 0 === a.download ? a.href = "data:attachment/csv;charset=utf-8," + r : (a.href = "data:text/csv;charset=utf-8," + r, a.download = e), a.target = "_blank", a.setAttribute("style", "visibility: hidden"), document.body.appendChild(a), a.click(), document.body.removeChild(a)
            }
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            })
        },
        "1AsC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("q1tI"),
                r = n("gq0V"),
                s = n("mZc/"),
                i = n("Ue10"),
                o = function(e) {
                    var t = e.children,
                        n = e.tooltip,
                        s = e.title;
                    return a.createElement(i.Xa, {
                        margin: {
                            bottom: 4
                        }
                    }, a.createElement(l, {
                        tooltip: n
                    }, s), a.createElement(i.Eb, {
                        borderRadius: Object(r.b)() ? i.x.Large : void 0,
                        elevation: 1,
                        background: i.r.Base
                    }, t))
                },
                l = function(e) {
                    var t = e.children,
                        n = e.tooltip;
                    return a.createElement(i.Xa, {
                        alignItems: i.f.Center,
                        display: i.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(i.W, {
                        type: i.Vb.H5,
                        bold: !0
                    }, t), n && a.createElement(s.a, {
                        direction: i.v.TopRight
                    }, n))
                }
        },
        "2DZx": function(e, t, n) {},
        "4+Xb": function(e, t, n) {},
        "4sTx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("NAv5"),
                s = n("cr+I"),
                i = n("TDse"),
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
                                    e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = function(e) {
                                        return "number" == typeof e && String(e) || ""
                                    }(e.topStatsIndex));
                                    e.hasOwnProperty("topStatsAggregation") && (t.topStatsAggregation = e.topStatsAggregation || "");
                                    return t
                                }(e))),
                                n = s.stringify(t);
                            return n.length ? "?" + n : ""
                        }, this.buildPathWithParams = function(e) {
                            return "" + o.location.pathname + o.searchStringWith(e)
                        }, this.location = e, this.history = t, this.rawParams = s.parse(e.search);
                        var u = l(this.rawParams.start) || Object(r.startOfDay)(Object(r.subDays)(n, 29)),
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
        "6E8S": function(e, t, n) {
            "use strict";
            var a = n("1AsC");
            n.d(t, "a", function() {
                return a.a
            })
        },
        "8kcC": function(e, t, n) {},
        A2wf: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("/7QA"),
                r = {
                    499: function() {
                        return Object(a.d)("Tier 1 subs", "ChannelAnalyticsTier")
                    },
                    999: function() {
                        return Object(a.d)("Tier 2 subs", "ChannelAnalyticsTier")
                    },
                    2499: function() {
                        return Object(a.d)("Tier 3 subs", "ChannelAnalyticsTier")
                    }
                },
                s = {
                    499: function(e) {
                        return Object(a.d)("{numOfSubs, plural, one {# Tier 1 sub} other {# Tier 1 subs}}", {
                            numOfSubs: e
                        }, "ChannelAnalyticsTiers")
                    },
                    999: function(e) {
                        return Object(a.d)("{numOfSubs, plural, one {# Tier 2 sub} other {# Tier 2 subs}}", {
                            numOfSubs: e
                        }, "ChannelAnalyticsTiers")
                    },
                    2499: function(e) {
                        return Object(a.d)("{numOfSubs, plural, one {# Tier 3 sub} other {# Tier 3 subs}}", {
                            numOfSubs: e
                        }, "ChannelAnalyticsTiers")
                    }
                },
                i = function(e, t) {
                    return void 0 !== t ? s[e](t) : r[e]()
                },
                o = {
                    499: function() {
                        return Object(a.d)("Gifted Tier 1 subs", "ChannelAnalyticsTier")
                    },
                    999: function() {
                        return Object(a.d)("Gifted Tier 2 subs", "ChannelAnalyticsTier")
                    },
                    2499: function() {
                        return Object(a.d)("Gifted Tier 3 subs", "ChannelAnalyticsTier")
                    }
                },
                l = {
                    499: function(e) {
                        return Object(a.d)("{numOfSubs, plural, one {# Gifted Tier 1 sub} other {# Gifted Tier 1 subs}}", {
                            numOfSubs: e
                        }, "ChannelAnalyticsTiers")
                    },
                    999: function(e) {
                        return Object(a.d)("{numOfSubs, plural, one {# Gifted Tier 2 sub} other {# Gifted Tier 2 subs}}", {
                            numOfSubs: e
                        }, "ChannelAnalyticsTiers")
                    },
                    2499: function(e) {
                        return Object(a.d)("{numOfSubs, plural, one {# Gifted Tier 3 sub} other {# Gifted Tier 3 subs}}", {
                            numOfSubs: e
                        }, "ChannelAnalyticsTiers")
                    }
                },
                c = function(e, t) {
                    return void 0 !== t ? l[e](t) : o[e]()
                }
        },
        "B+LW": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("/MKj"),
                i = n("fvjX"),
                o = n("aCAx"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                n = function(t) {
                                    function n() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return a.__extends(n, t), n.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, n
                                }(r.Component);
                            t.props.showModal(n, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(r.Component);
            var c = Object(s.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: o.d,
                    closeModal: o.c
                }, e)
            })(l);
            n.d(t, "a", function() {
                return c
            })
        },
        "Dg4+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("cr+I"),
                s = n("CFgy"),
                i = n("6XEL");

            function o(e, t) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var n, o, l, c;
                    return a.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return n = "/kraken/clips/top", o = r.stringify(a.__assign({
                                    channel: e
                                }, Object(s.i)(t))), l = [n, o].join("?"), [4, Object(i.c)({
                                    path: l
                                })];
                            case 1:
                                return (c = u.sent()).isError() ? [2, {
                                    isError: !0,
                                    topClips: []
                                }] : [2, {
                                    isError: !1,
                                    topClips: function(e) {
                                        return e.clips.map(function(e) {
                                            var t = {
                                                title: e.title,
                                                views: e.views,
                                                url: e.url,
                                                curatorName: e.curator.display_name,
                                                thumbnailURL: e.thumbnails.tiny
                                            };
                                            return t
                                        })
                                    }(c.body)
                                }]
                        }
                    })
                })
            }
        },
        FXHi: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("/7QA"),
                s = n("2xye"),
                i = n("Ue10"),
                o = (n("qZmV"), function(e) {
                    return a.createElement(i.Xa, {
                        className: "clip-card-row"
                    }, a.createElement(i.Ua, {
                        type: i.Va.Alpha,
                        blurAfterClick: !0,
                        targetBlank: !0,
                        linkTo: e.url + "?tt_content=" + s.PageviewContent.TopClips + "&tt_medium=" + s.PageviewMedium.ChannelAnalytics,
                        onClick: e.onClick
                    }, a.createElement(i.Eb, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, a.createElement(i.G, {
                        row: !0
                    }, a.createElement(i.I, {
                        src: e.thumbnailURL,
                        alt: e.title,
                        size: i.J.Size8,
                        aspect: i.p.Aspect16x9
                    }), a.createElement(i.H, {
                        overflow: i.cb.Hidden
                    }, a.createElement(i.Xa, {
                        display: i.X.Flex,
                        flexGrow: 1,
                        alignItems: i.f.Center,
                        justifyContent: i.Wa.Between,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, a.createElement(i.Xa, {
                        display: i.X.Flex,
                        flexDirection: i.Aa.Column,
                        ellipsis: !0
                    }, a.createElement(i.W, {
                        color: i.O.Base,
                        type: i.Vb.H5,
                        ellipsis: !0
                    }, e.title), a.createElement(i.Xa, {
                        display: i.X.Flex,
                        flexWrap: i.Ba.NoWrap
                    }, a.createElement(i.sb, {
                        asset: i.tb.GlyphLive,
                        type: i.ub.Alt2
                    }), a.createElement(i.Xa, {
                        display: i.X.Inline,
                        padding: {
                            left: .5
                        },
                        ellipsis: !0
                    }, a.createElement(i.W, {
                        type: i.Vb.Span
                    }, e.curatorName)))))), a.createElement(i.Xa, {
                        display: i.X.Flex,
                        flexGrow: 1,
                        justifyContent: i.Wa.End,
                        padding: {
                            left: 2
                        }
                    }, a.createElement(i.sb, {
                        asset: i.tb.GlyphViews,
                        type: i.ub.Alt2
                    }), a.createElement(i.Xa, {
                        display: i.X.Flex,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(i.W, {
                        bold: !0,
                        fontSize: i.Ca.Size5,
                        color: i.O.Alt,
                        type: i.Vb.Span
                    }, Object(r.d)("{views, number}", {
                        views: e.views
                    }, "StreamSummaryClipViews"))))))))
                });
            n.d(t, "a", function() {
                return o
            })
        },
        "H+Kr": function(e, t, n) {},
        HURE: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("mrSG"),
                s = n("q1tI"),
                i = n("/MKj"),
                o = n("4p7I"),
                l = n("yoKv"),
                c = n("fvjX"),
                u = n("/7QA"),
                p = n("yR8l"),
                d = n("kRBY"),
                m = n("2INN"),
                h = n("lZCe"),
                g = n("V+GM"),
                b = n("D7An"),
                f = n("NvVO"),
                y = n("2xye"),
                v = n("GnwI"),
                S = n("NAv5"),
                C = n("oJmH"),
                E = n("FOa4"),
                w = (n("WHSC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            null === e ? t.picker.destroy() : (t.picker = new E({
                                onSelect: t.props.onChange,
                                theme: "inline",
                                minDate: t.props.minDate && Object(S.startOfDay)(t.props.minDate),
                                maxDate: Object(S.startOfDay)(t.props.maxDate),
                                defaultDate: Object(S.startOfDay)(t.props.date),
                                startRange: Object(S.startOfDay)(t.props.startRange),
                                endRange: Object(S.startOfDay)(t.props.endRange),
                                setDefaultDate: !0
                            }), e.appendChild(t.picker.el))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.picker.setStartRange(Object(S.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(S.startOfDay)(this.props.endRange)), this.props.minDate && this.picker.setMinDate(Object(S.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(S.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(S.startOfDay)(this.props.date), !0)
                    }, t.prototype.render = function() {
                        return s.createElement("div", {
                            ref: this.setContainerRef
                        })
                    }, t
                }(s.Component)),
                j = n("u2gS"),
                O = n("Ue10");
            ! function(e) {
                e.Custom = "custom", e.Default = "default", e.Last7Days = "last_7_days", e.Last30Days = "last_30_days", e.CurrentMonth = "current_month", e.oneMonthAgo = "t_minus_1_month", e.twoMonthsAgo = "t_minus_2_month"
            }(a || (a = {}));
            var k = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = t.now || new Date,
                        s = Object(S.endOfDay)(r),
                        i = Object(S.startOfDay)(r),
                        o = Object(S.startOfMonth)(r);
                    return n.presets = [{
                        message: Object(u.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(S.subDays)(i, 6),
                            end: s,
                            id: a.Last7Days
                        }
                    }, {
                        message: Object(u.d)("Last 30 Days", "ChannelAnalyticsDateRangePickerPresets"),
                        interval: {
                            start: Object(S.subDays)(i, 29),
                            end: s,
                            id: a.Last30Days
                        }
                    }, {
                        message: Object(u.c)(o, {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: o,
                            end: s,
                            id: a.CurrentMonth
                        }
                    }, {
                        message: Object(u.c)(Object(S.subMonths)(s, 1), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(S.startOfMonth)(Object(S.subMonths)(r, 1)),
                            end: Object(S.endOfMonth)(Object(S.subMonths)(r, 1)),
                            id: a.oneMonthAgo
                        }
                    }, {
                        message: Object(u.c)(Object(S.subMonths)(s, 2), {
                            month: "long",
                            year: "numeric"
                        }),
                        interval: {
                            start: Object(S.startOfMonth)(Object(S.subMonths)(r, 2)),
                            end: Object(S.endOfMonth)(Object(S.subMonths)(r, 2)),
                            id: a.twoMonthsAgo
                        }
                    }], n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return s.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexDirection: O.Aa.Column
                    }, this.presets.map(function(t, n) {
                        return s.createElement(O.Eb, {
                            color: O.O.Link,
                            margin: {
                                bottom: .5
                            },
                            key: n
                        }, s.createElement(O.Ua, {
                            selected: Object(j.f)(e.props.interval, t.interval),
                            onClick: e.handleClickFor(t.interval),
                            borderRadius: O.x.Small
                        }, s.createElement(O.Eb, {
                            padding: 1,
                            textAlign: O.Rb.Center
                        }, s.createElement(O.W, {
                            noWrap: !0,
                            fontSize: O.Ca.Size5
                        }, t.message))))
                    }))
                }, t.prototype.handleClickFor = function(e) {
                    var t = this;
                    return function() {
                        return t.props.onChange(e)
                    }
                }, t
            }(s.Component);

            function A(e, t, n) {
                void 0 === n && (n = new Date);
                var a = r.__assign({}, e, t);
                if (Object(S.differenceInDays)(a.end, a.start) >= 0) return a;
                var s = Object(S.differenceInDays)(e.end, e.start);
                if (Object(S.isEqual)(e.end, a.end)) {
                    var i = Object(S.startOfDay)(n),
                        o = Object(S.addDays)(a.start, s);
                    return o > i && (o = i), r.__assign({}, a, {
                        end: o
                    })
                }
                return Object(S.isEqual)(e.start, a.start) ? r.__assign({}, a, {
                    start: Object(S.subDays)(a.end, s)
                }) : e
            }
            var T = n("6XEL");

            function x(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n, a, s, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = "/api/channels/" + e + "/revenue_splits", n = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(T.c)({
                                    path: t
                                }, {
                                    excludeHeaders: ["Twitch-Api-Token"]
                                }), Object(T.c)({
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
                                        return Object(T.d)(a, [function(e) {
                                            return e.plan
                                        }], [T.a.Ascending])
                                    }(s.body, i.body)
                                }]
                        }
                    })
                })
            }
            var D = n("bM8u");

            function R(e) {
                return e === j.d.None ? D.e : D.a
            }

            function _(e) {
                return e === j.d.None ? D.f : Object.keys(D.g)
            }
            var P, V = {
                    "data-test-selector": "commit-button"
                },
                F = {
                    "data-test-selector": "cancel-button"
                },
                L = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleStartChange = function(e) {
                            var t = A(n.state.interval, {
                                start: e
                            });
                            n.setState({
                                interval: t
                            })
                        }, n.handleEndChange = function(e) {
                            var t = A(n.state.interval, {
                                end: Object(S.endOfDay)(e)
                            });
                            n.setState({
                                interval: t
                            })
                        }, n.handleUpdateClick = function() {
                            n.props.onCommit(r.__assign({}, n.state.interval, {
                                id: a.Custom
                            }))
                        }, n.state = {
                            interval: n.props.interval
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = new Date;
                        return s.createElement("div", null, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            flexWrap: O.Ba.NoWrap,
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(O.Xa, {
                            padding: {
                                right: 2
                            },
                            textAlign: O.Rb.Center
                        }, s.createElement(O.W, {
                            color: O.O.Alt2,
                            fontSize: O.Ca.Size4
                        }, Object(u.d)("Start date", "ChannelAnalyticsDateRangePicker")), s.createElement(w, {
                            date: this.state.interval.start,
                            startRange: this.state.interval.start,
                            endRange: this.state.interval.end,
                            maxDate: e,
                            onChange: this.handleStartChange
                        })), s.createElement(O.Xa, {
                            padding: {
                                right: 2
                            },
                            textAlign: O.Rb.Center
                        }, s.createElement(O.W, {
                            color: O.O.Alt2,
                            fontSize: O.Ca.Size4
                        }, Object(u.d)("End date", "ChannelAnalyticsDateRangePicker")), s.createElement(w, {
                            date: this.state.interval.end,
                            startRange: this.state.interval.start,
                            endRange: this.state.interval.end,
                            minDate: this.state.interval.start,
                            maxDate: e,
                            onChange: this.handleEndChange
                        })), s.createElement(O.Eb, {
                            padding: {
                                top: .5,
                                left: 2
                            },
                            borderLeft: !0
                        }, s.createElement(k, {
                            interval: this.state.interval,
                            onChange: this.props.onCommit
                        }))), s.createElement(O.Xa, {
                            display: O.X.Flex,
                            justifyContent: O.Wa.Center
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: 2
                            }
                        }, s.createElement(O.z, r.__assign({}, V, {
                            onClick: this.handleUpdateClick
                        }), Object(u.d)("Update", "ChannelAnalyticsDateRangePicker"))), s.createElement(O.z, r.__assign({}, F, {
                            type: O.F.Text,
                            onClick: this.props.onDismiss
                        }), Object(u.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                    }, t
                }(s.Component);

            function N(e, t) {
                return void 0 === t && (t = new Date), e.start <= e.end && e.end <= Object(S.endOfDay)(t)
            }

            function M(e) {
                u.o.track(y.SpadeEventType.ChannelAnalyticsInteraction, e)
            }! function(e) {
                e.OpenDatePicker = "open_date_picker", e.VisitPreviousDateRange = "visit_previous_date_range", e.VisitNextDateRange = "visit_next_date_range", e.ExportDataRevenue = "export_data_revenue", e.ExportDataStream = "export_data_stream", e.ViewDetailsReferrers = "view_details_referrers", e.ViewDetailsClips = "view_details_clips", e.TopStreamsSelectDate = "topstreams_select_date", e.TopStreamsSelectAvgViewers = "topstreams_select_avg_viewers", e.TopStreamsSelectNewFollowers = "topstreams_select_new_followers", e.TopStreamsSelectNewSubscribers = "topstreams_select_new_subscribers", e.TopStreamsStream = "topstreams_stream", e.TopClipsClip = "topclips_clip", e.DownloadMySubs = "download_my_subs", e.DownloadMySubsSuccess = "download_my_subs_success", e.EmailToSubs = "email_to_subs", e.OverlapChannel = "overlap_channel", e.OverlapGame = "overlap_game"
            }(P || (P = {}));
            var W = n("bket"),
                X = n("Snp4"),
                I = n("CFgy"),
                B = {
                    "data-test-selector": "time-range"
                },
                U = {
                    "data-test-selector": "total-days"
                },
                z = {
                    "data-test-selector": "date-picker-toggle"
                },
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleDatePickerOpen = function() {
                            M({
                                action: P.OpenDatePicker
                            })
                        }, t.handlePrevious = function() {
                            M({
                                action: P.VisitPreviousDateRange
                            })
                        }, t.handleNext = function() {
                            M({
                                action: P.VisitNextDateRange
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.urlStore.params;
                        return s.createElement(O.Xa, {
                            position: O.jb.Relative,
                            zIndex: O.ic.Above
                        }, s.createElement(W.a, {
                            onOpen: this.handleDatePickerOpen,
                            control: function(n) {
                                var a = n.toggle;
                                return s.createElement(O.Xa, {
                                    padding: {
                                        bottom: 2
                                    }
                                }, s.createElement(X.a, {
                                    previousPath: e.pathWithShiftedInterval(-1),
                                    nextPath: e.pathWithShiftedInterval(1),
                                    onPrevious: e.handlePrevious,
                                    onNext: e.handleNext
                                }, s.createElement(O.Ua, r.__assign({}, z, {
                                    type: O.Va.Base,
                                    onClick: a
                                }), s.createElement(O.Xa, {
                                    textAlign: O.Rb.Center
                                }, s.createElement(O.W, r.__assign({
                                    color: O.O.Link
                                }, B, {
                                    fontSize: O.Ca.Size4
                                }), e.formatDateRange(t)), s.createElement(O.W, r.__assign({}, U, {
                                    fontSize: O.Ca.Size6,
                                    color: O.O.Alt2
                                }), e.formatDaysInRange(t))))))
                            }
                        }, function(n) {
                            var a = n.close;
                            return s.createElement(O.Eb, {
                                margin: {
                                    top: 5
                                },
                                position: O.jb.Absolute,
                                display: O.X.Flex,
                                alignItems: O.f.Center,
                                flexDirection: O.Aa.Column,
                                zIndex: O.ic.Above,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0
                            }, s.createElement(O.Eb, {
                                margin: {
                                    top: .5
                                },
                                elevation: 4,
                                position: O.jb.Relative,
                                display: O.X.Flex,
                                background: O.r.Base,
                                zIndex: O.ic.Above,
                                attachTop: !0
                            }, s.createElement(O.Xa, {
                                padding: {
                                    top: 2,
                                    right: 2,
                                    bottom: 1,
                                    left: 2
                                }
                            }, s.createElement(L, {
                                interval: t,
                                onCommit: Object(C.compose)(a, e.props.onDateSelect),
                                onDismiss: a
                            }))))
                        }))
                    }, t.prototype.formatDateRange = function(e) {
                        return 1 === Object(S.differenceInDays)(e.end, e.start) + 1 ? Object(u.c)(e.start, "medium") : Object(u.d)("{start, date, medium} – {end, date, medium}", {
                            start: e.start,
                            end: e.end
                        }, "ChannelAnalyticsNavBar")
                    }, t.prototype.formatDaysInRange = function(e) {
                        var t = Object(S.differenceInDays)(e.end, e.start) + 1;
                        return Object(u.d)("{numDays, plural, one {# day} other {# days}}", {
                            numDays: t
                        }, "ChannelAnalyticsNavBar")
                    }, t.prototype.pathWithShiftedInterval = function(e) {
                        var t = Object(I.h)(this.props.urlStore.params, e);
                        return N(t) ? this.props.urlStore.buildPathWithParams(t) : ""
                    }, t
                }(s.Component),
                G = n("kduP"),
                q = n("a7UW"),
                Y = n("6E8S"),
                K = n("vxFv"),
                Q = (n("8kcC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.gameOverlaps && 0 !== this.props.gameOverlaps.length ? s.createElement(O.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.props.gameOverlaps.slice(0, 5).map(function(e, t) {
                            return s.createElement(J, {
                                name: e.game.name,
                                boxArtURL: e.game.boxArtURL,
                                percentage: e.score,
                                key: t
                            })
                        }), s.createElement(J, {
                            name: "",
                            boxArtURL: u.a.defaultBoxArtURL,
                            percentage: this.remainingPercentage()
                        })) : s.createElement(q.a, null), s.createElement(Y.a, {
                            title: Object(u.d)("What games / categories do my viewers like to watch?", "ChannelAnalyticsViewerOverlapPanel"),
                            tooltip: Object(u.d)("When they were not watching your channel, your viewers spent x% of their watch time watching these categories over the past 7 days.", "ChannelAnalyticsViewerOverlapPanel")
                        }, e)
                    }, t.prototype.remainingPercentage = function() {
                        return this.props.gameOverlaps.slice(0, 5).reduce(function(e, t) {
                            return e - t.score
                        }, 1)
                    }, t
                }(s.Component)),
                J = function(e) {
                    var t = function() {
                        M({
                            action: P.OverlapGame
                        })
                    };
                    return s.createElement(O.Eb, {
                        className: "game-card-row",
                        padding: {
                            y: 1,
                            right: 2,
                            left: 2
                        },
                        fontSize: O.Ca.Size5
                    }, s.createElement(O.Ja, null, s.createElement(O.P, {
                        cols: {
                            default: 5,
                            xs: 5,
                            sm: 5
                        }
                    }, s.createElement(O.Xa, {
                        padding: {
                            left: 0,
                            right: 1
                        },
                        fullHeight: !0,
                        display: O.X.Flex,
                        alignItems: O.f.Center
                    }, s.createElement(O.Xa, {
                        margin: {
                            right: 1
                        }
                    }, e.name && s.createElement(O.U, {
                        onClick: t,
                        to: e.name && Object(G.c)(e.name),
                        targetBlank: !0
                    }, s.createElement(O.I, {
                        src: e.boxArtURL,
                        alt: e.name,
                        aspect: O.p.Aspect3x4,
                        size: O.J.Size4
                    })), !e.name && s.createElement(O.I, {
                        src: e.boxArtURL,
                        alt: "",
                        aspect: O.p.Aspect3x4,
                        size: O.J.Size4
                    })), s.createElement(O.Xa, {
                        ellipsis: !0
                    }, e.name && s.createElement(O.U, {
                        onClick: t,
                        to: e.name && Object(G.c)(e.name),
                        hoverUnderlineNone: !0,
                        targetBlank: !0
                    }, s.createElement(O.W, {
                        className: "game-card-row__link-text",
                        fontSize: O.Ca.Size5,
                        ellipsis: !0
                    }, e.name)), !e.name && Object(u.d)("Other", "ChannelAnalyticsViewerOverlapPanel")))), s.createElement(O.P, {
                        cols: {
                            default: 2,
                            xs: 3,
                            sm: 2
                        }
                    }, s.createElement(O.Xa, {
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        justifyContent: O.Wa.End
                    }, s.createElement(O.W, {
                        color: O.O.Alt2,
                        ellipsis: !0
                    }, Object(K.a)(e.percentage)))), s.createElement(O.P, {
                        cols: {
                            default: 5,
                            xs: 4,
                            sm: 5
                        }
                    }, s.createElement(O.Xa, {
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        fullHeight: !0
                    }, s.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexGrow: 1
                    }, s.createElement(O.Eb, {
                        fullWidth: !0,
                        background: O.r.Alt2,
                        borderRadius: O.x.Small
                    }, s.createElement(O.mb, {
                        value: Math.max(100 * e.percentage, 1)
                    })))))))
                },
                Z = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(O.ib, {
                        height: 510
                    }))
                },
                $ = n("GIFg"),
                ee = n("kYmV"),
                te = n("cuu2"),
                ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement($.a, null, s.createElement(te.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2927997",
                            page: ee.b.ChannelAnalytics
                        }))
                    }, t
                }(s.Component),
                ae = n("L9xt");

            function re() {
                return u.b.get("dashboard_payout_history", !1)
            }
            var se, ie, oe = n("sBDM"),
                le = n("Knvm"),
                ce = (n("2DZx"), function(e) {
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
                        }, s.createElement(O.Eb, {
                            padding: {
                                x: 2,
                                y: 1
                            },
                            className: this.props.children ? "breakdown-card" : "",
                            position: O.jb.Relative
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            justifyContent: O.Wa.Between
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            alignItems: O.f.Center
                        }, s.createElement("div", {
                            className: "revenue-breakdown-panel__key",
                            style: {
                                backgroundColor: this.props.keyColor
                            }
                        }), s.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(O.W, {
                            type: O.Vb.H5
                        }, this.props.title))), s.createElement(O.Xa, {
                            textAlign: O.Rb.Right
                        }, s.createElement(O.W, {
                            type: O.Vb.H5,
                            bold: !0
                        }, this.props.revenue), s.createElement(O.W, {
                            type: O.Vb.H6,
                            color: O.O.Alt2
                        }, Object(u.d)("{lastRevenue} last period", {
                            lastRevenue: this.props.lastRevenue
                        }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? s.createElement(O.u, {
                            show: !0,
                            direction: O.v.TopRight,
                            offsetY: "-0.5rem",
                            offsetX: "2rem"
                        }, this.props.children) : null))
                    }, t
                }(s.Component)),
                ue = n("A2wf"),
                pe = {
                    "data-test-selector": "tier"
                },
                de = {
                    "data-test-selector": "subscribers"
                },
                me = {
                    "data-test-selector": "revenue"
                },
                he = function(e, t) {
                    var n = t.filter(function(t) {
                        return e === t.productID
                    })[0];
                    return n ? Object(u.f)(n.total, {
                        style: "currency",
                        currency: "USD"
                    }) : Object(u.f)(0, {
                        style: "currency",
                        currency: "USD"
                    })
                },
                ge = function(e) {
                    return s.createElement(O.Xa, {
                        padding: {
                            x: 1,
                            y: 2
                        }
                    }, s.createElement("table", null, s.createElement("thead", null, s.createElement("tr", null, s.createElement("td", null, s.createElement(O.Xa, {
                        padding: {
                            right: 2
                        }
                    }, s.createElement(O.W, {
                        bold: !0
                    }, Object(u.d)("Subscription", "ChannelAnalyticsPaidSubs")))), s.createElement("td", null, s.createElement(O.Xa, {
                        padding: {
                            right: 2
                        }
                    }, s.createElement(O.W, {
                        bold: !0
                    }, Object(u.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), s.createElement("td", null, s.createElement(O.Xa, {
                        padding: {
                            right: 2
                        }
                    }, s.createElement(O.W, {
                        bold: !0
                    }, Object(u.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), s.createElement("tbody", null, function(e) {
                        var t = e.revenue;
                        return e.subCounts.map(function(e) {
                            return {
                                tier: Object(ue.b)(e.defaultPrice),
                                subscribers: Object(u.f)(e.total),
                                revenue: he(e.productID, t)
                            }
                        })
                    }(e).map(function(e, t) {
                        return s.createElement("tr", {
                            key: t
                        }, s.createElement("td", null, s.createElement(O.W, r.__assign({}, pe), e.tier)), s.createElement("td", null, s.createElement(O.W, r.__assign({}, de), e.subscribers)), s.createElement("td", null, s.createElement(O.W, r.__assign({}, me), e.revenue)))
                    }))))
                },
                be = (n("WuTM"), {
                    "data-test-selector": "total-revenue"
                }),
                fe = {
                    "data-test-selector": "payout-link"
                },
                ye = function(e) {
                    if (e.channel.role === j.d.None) return null;
                    if (e.revenue.isLoading) return s.createElement(ve, null);
                    var t = e.revenue,
                        n = t.streams,
                        a = t.lookbackStreams,
                        i = s.createElement(q.a, null);
                    return n.getTotalAmountAllStreams() && (i = s.createElement(s.Fragment, null, s.createElement(Se, {
                        totalAmount: n.getTotalAmountAllStreams()
                    }), s.createElement(O.Xa, {
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right,
                        padding: {
                            x: 2
                        }
                    }, s.createElement(O.W, {
                        type: O.Vb.H6,
                        bold: !0,
                        color: O.O.Alt2
                    }, Object(u.d)("Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel"))), s.createElement(O.Xa, null, s.createElement(ce, {
                        title: Object(u.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.twitchSubscriptions.total),
                        lastRevenue: Ce(a.twitchSubscriptions.total),
                        keyColor: O.R.Purple8
                    }, !e.subCounts.isLoading && s.createElement(ge, {
                        revenue: e.revenue.streams.twitchSubscriptionProducts,
                        subCounts: e.subCounts.streams.twitchSubscriptionProducts
                    })), s.createElement(ce, {
                        title: Object(u.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.primeSubscriptions.total),
                        lastRevenue: Ce(a.primeSubscriptions.total),
                        keyColor: O.R.PrimeBlue
                    }), s.createElement(ce, {
                        title: Object(u.d)("Gifted subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.giftSubscriptions.total),
                        lastRevenue: Ce(a.giftSubscriptions.total),
                        keyColor: O.R.Purple6
                    }, !e.subCounts.isLoading && s.createElement(ge, {
                        revenue: e.revenue.streams.giftSubscriptionProducts,
                        subCounts: e.subCounts.streams.giftSubscriptionProducts
                    })), s.createElement(ce, {
                        title: Object(u.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.ads.total),
                        lastRevenue: Ce(a.ads.total),
                        keyColor: O.R.Purple11
                    }), s.createElement(ce, {
                        title: Object(u.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.bits.total),
                        lastRevenue: Ce(a.bits.total),
                        keyColor: "#3dc6ae"
                    }), s.createElement(ce, {
                        title: Object(u.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.gameCommerce.total),
                        lastRevenue: Ce(a.gameCommerce.total),
                        keyColor: O.R.Orange
                    }), s.createElement(ce, {
                        title: Object(u.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.extensions.total),
                        lastRevenue: Ce(a.extensions.total),
                        keyColor: "#69d420"
                    }), s.createElement(ce, {
                        title: Object(u.d)("Bounties", "ChannelAnalyticsRevenueBreakdownPanel"),
                        revenue: Ce(n.bountyBoard.total),
                        lastRevenue: Ce(a.bountyBoard.total),
                        keyColor: O.R.Yellow
                    }))), re() && s.createElement(oe.a, r.__assign({
                        message: Object(u.d)("View payout history", "ChannelAnalyticsRevenueBreakdownPanel"),
                        linkTo: {
                            pathname: "/" + e.channel.name + "/dashboard/channel-analytics/payouts",
                            state: {
                                content: ae.PageviewContent.PayoutsHistoryBack,
                                medium: ae.PageviewMedium.ChannelAnalytics,
                                returnLocation: e.location
                            }
                        },
                        borderTop: !0
                    }, fe)))), s.createElement(Y.a, {
                        title: Object(u.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel"),
                        tooltip: Object(u.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 45 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel")
                    }, i)
                },
                ve = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(O.ib, {
                        height: 448
                    }))
                },
                Se = function(e) {
                    return s.createElement(O.Xa, r.__assign({
                        textAlign: O.Rb.Center,
                        padding: {
                            y: 2
                        }
                    }, be), s.createElement(O.Xa, {
                        display: O.X.Flex,
                        justifyContent: O.Wa.Center
                    }, s.createElement(O.W, {
                        type: O.Vb.H2
                    }, Object(le.a)(e.totalAmount, function(e, t) {
                        switch (e.type) {
                            case "currency":
                                return s.createElement(O.Pa, {
                                    key: t,
                                    display: O.X.InlineBlock,
                                    padding: {
                                        top: .5,
                                        right: .5
                                    },
                                    verticalAlign: 0 === t ? O.fc.TextTop : O.fc.Baseline
                                }, s.createElement(O.W, {
                                    color: O.O.Alt2,
                                    fontSize: O.Ca.Size6,
                                    type: O.Vb.Span
                                }, e.value));
                            case "integer":
                            case "group":
                                return s.createElement(O.W, {
                                    key: t,
                                    type: O.Vb.Span,
                                    bold: !0
                                }, e.value);
                            case "decimal":
                            case "fraction":
                                return s.createElement(O.W, {
                                    key: t,
                                    type: O.Vb.Span,
                                    fontSize: O.Ca.Size6,
                                    bold: !0
                                }, e.value);
                            default:
                                return s.createElement(O.W, {
                                    key: t,
                                    type: O.Vb.Span,
                                    bold: !0
                                }, e.value)
                        }
                    }, function(e) {
                        return s.createElement(O.W, {
                            key: "key",
                            type: O.Vb.Span,
                            bold: !0
                        }, e)
                    }))), s.createElement(O.W, {
                        type: O.Vb.H6
                    }, Object(u.d)("Total Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel")))
                },
                Ce = function(e) {
                    return Object(u.f)(e, {
                        style: "currency",
                        currency: "USD"
                    })
                },
                Ee = function(e) {
                    return s.createElement(o.a, null, function(t) {
                        var n = t.location;
                        return s.createElement(ye, r.__assign({}, e, {
                            location: n
                        }))
                    })
                },
                we = n("cZKs"),
                je = n("x7UT"),
                Oe = n("0Log"),
                ke = n("geRD"),
                Ae = n("/aPz"),
                Te = n("fWgO"),
                xe = (n("dxV6"), {
                    "data-test-selector": "cancel-button"
                }),
                De = function(e) {
                    return s.createElement(O.Xa, {
                        padding: {
                            y: 2
                        }
                    }, s.createElement(O.W, {
                        color: O.O.Alt2
                    }, Object(u.d)("A CSV of your subscribers is being generated.", "ChannelAnalyticsEmailSubsList")), s.createElement(O.W, {
                        color: O.O.Alt2
                    }, Object(u.d)("This may take several minutes if you have a large number of subscribers.", "ChannelAnalyticsEmailSubsList")), s.createElement(O.Xa, {
                        padding: {
                            top: 2
                        }
                    }, s.createElement(O.mb, {
                        mask: !0,
                        value: e.progress
                    })))
                },
                Re = function() {
                    return s.createElement(O.Xa, {
                        padding: {
                            y: 2
                        }
                    }, s.createElement(O.W, {
                        color: O.O.Alt2
                    }, Object(u.d)("An error occurred.", "ChannelAnalyticsEmailSubsList")), s.createElement(O.W, {
                        color: O.O.Alt2
                    }, Object(u.d)("Please wait a few minutes and try again.", "ChannelAnalyticsEmailSubsList")))
                },
                _e = function(e) {
                    return s.createElement(O.Xa, {
                        padding: {
                            y: 2
                        }
                    }, s.createElement(O.W, {
                        color: O.O.Alt2
                    }, Object(u.d)("Your download is ready. If it did not download automatically", "ChannelAnalyticsEmailSubsList"), " ", s.createElement(O.U, {
                        onClick: e.downloadFile
                    }, Object(u.d)("please click this link", "ChannelAnalyticsEmailSubsList")), "."), s.createElement(O.Xa, {
                        padding: {
                            top: 1
                        }
                    }, s.createElement(O.W, {
                        color: O.O.Alt2,
                        fontSize: O.Ca.Size7
                    }, Object(u.d)("The download link will expire after 10 minutes. If the link has expired, please close this modal and try again.", "ChannelAnalyticsEmailSubsList"))))
                },
                Pe = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.downloadFile = function() {
                            var e = document.createElement("a");
                            e.href = n.getS3URL(), e.download = "subscribers-list.csv", e.target = "_blank", e.setAttribute("style", "visibility: hidden"), document.body.appendChild(e), e.click(), document.body.removeChild(e), n.trackDownloadSuccess()
                        }, n.downloaded = !1, n.state = {
                            error: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.generateCSV()
                    }, t.prototype.componentDidUpdate = function() {
                        !this.downloaded && this.props.pubsub.messages.subscribersCSVComplete && (this.downloaded = !0, this.downloadFile())
                    }, t.prototype.render = function() {
                        return s.createElement(O.Eb, {
                            className: "download-subs-list-modal",
                            background: O.r.Base,
                            elevation: 3,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 2
                            }
                        }, s.createElement(O.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(O.W, {
                            type: O.Vb.H4,
                            color: O.O.Alt
                        }, Object(u.d)("Download Subscriber List", "ChannelAnalyticsEmailSubsList"))), s.createElement(O.Eb, {
                            borderBottom: !0
                        }, this.renderModalBody()), s.createElement(O.Xa, {
                            display: O.X.Flex,
                            justifyContent: O.Wa.Center,
                            padding: {
                                top: 2
                            }
                        }, s.createElement(O.z, r.__assign({}, xe, {
                            type: O.F.Text,
                            onClick: this.props.onClose
                        }), Object(u.d)("Close", "ChannelAnalyticsEmailSubsList"))), s.createElement(we.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.prototype.renderModalBody = function() {
                        return this.props.pubsub.messages.subscribersCSVComplete ? s.createElement(_e, {
                            downloadFile: this.downloadFile
                        }) : this.state.error || this.props.pubsub.messages.subscribersCSVInProgress && this.props.pubsub.messages.subscribersCSVInProgress.error ? s.createElement(Re, null) : s.createElement(De, {
                            progress: this.getDownloadProgress()
                        })
                    }, t.prototype.generateCSV = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        e = {
                                            channelID: this.props.channelID
                                        }, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.downloadSubsList(Object(ke.a)(e))];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.getS3URL = function() {
                        return this.props.pubsub.messages.subscribersCSVComplete ? this.props.pubsub.messages.subscribersCSVComplete.s3_url : ""
                    }, t.prototype.getDownloadProgress = function() {
                        return this.props.pubsub.messages.subscribersCSVInProgress ? this.props.pubsub.messages.subscribersCSVInProgress.percent : 0
                    }, t.prototype.trackDownloadSuccess = function() {
                        M({
                            action: P.DownloadMySubsSuccess
                        })
                    }, t
                }(s.Component),
                Ve = Object(c.compose)(Object(p.a)(Te, {
                    name: "downloadSubsList"
                }), Object(je.a)([{
                    topic: function(e) {
                        return Object(Ae.z)(e.channelID || "")
                    },
                    mapMessageTypesToProps: (se = {}, se[Oe.PubsubMessageType.SubscribersCSVComplete] = "subscribersCSVComplete", se[Oe.PubsubMessageType.SubscribersCSVInProgress] = "subscribersCSVInProgress", se),
                    skip: function(e) {
                        return !e.channelID
                    }
                }]))(Pe),
                Fe = {
                    "data-test-selector": "cancel-button"
                },
                Le = {
                    "data-test-selector": "send-email-button"
                };
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
            }(ie || (ie = {}));
            var Ne = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleSendEmail = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: ie.InFlight
                                            }), [4, Object(T.c)({
                                                path: "/api/channels/" + this.props.channelLogin + "/subscriber_emails",
                                                method: "POST",
                                                body: {
                                                    body: this.state.body,
                                                    title: this.state.title,
                                                    on_site: "1"
                                                }
                                            }, {
                                                excludeHeaders: ["Twitch-Api-Token"]
                                            })];
                                        case 1:
                                            return e.sent().isError() ? (this.setState({
                                                requestState: ie.Failed
                                            }), [2]) : (this.setState({
                                                requestState: ie.Success
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
                            requestState: ie.Pending,
                            title: ""
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = s.createElement(O.W, {
                                color: O.O.Error
                            }, Object(u.d)("Oops, something went wrong. Please try again.", "ChannelAnalyticsEmailSubs")),
                            t = s.createElement(s.Fragment, null, s.createElement(O.Eb, {
                                borderBottom: !0
                            }, s.createElement(O.Xa, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(O.W, {
                                color: O.O.Alt2
                            }, Object(u.d)("Use this form to send a message to all {subscribers,number} of your active subscribers.", {
                                subscribers: this.props.totalSubscribers
                            }, "ChannelAnalyticsEmailSubs")), s.createElement(O.Xa, {
                                padding: {
                                    top: 2,
                                    bottom: 1
                                }
                            }, s.createElement(O.Ea, {
                                label: Object(u.d)("Message Title", "ChannelAnalyticsEmailSubs")
                            }, s.createElement(O.Ra, {
                                type: O.Ta.Text,
                                onChange: this.handleTitleChange
                            }))), s.createElement(O.Xa, {
                                padding: {
                                    y: 1
                                }
                            }, s.createElement(O.Ea, {
                                label: Object(u.d)("Message Body", "ChannelAnalyticsEmailSubs")
                            }, s.createElement(O.Sb, {
                                onChange: this.handleBodyChange,
                                rows: 6
                            }))), this.state.requestState === ie.Failed && e)), s.createElement(O.Xa, {
                                display: O.X.Flex,
                                justifyContent: O.Wa.Center,
                                padding: {
                                    top: 2
                                }
                            }, s.createElement(O.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(O.z, r.__assign({}, Fe, {
                                onClick: this.props.onClose,
                                type: O.F.Text
                            }), Object(u.d)("Cancel", "ChannelAnalyticsEmailSubs"))), s.createElement(O.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(O.z, r.__assign({}, Le, {
                                disabled: "" === this.state.body || "" === this.state.title || this.state.requestState === ie.InFlight,
                                onClick: this.handleSendEmail
                            }), this.state.requestState === ie.InFlight ? Object(u.d)("Sending Email...", "ChannelAnalyticsEmailSubs") : Object(u.d)("Send Email", "ChannelAnalyticsEmailSubs"))))),
                            n = s.createElement(s.Fragment, null, s.createElement(O.Eb, {
                                borderBottom: !0
                            }, s.createElement(O.Xa, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(O.W, {
                                color: O.O.Alt2
                            }, Object(u.d)("Your email has been sent!", "ChannelAnalyticsEmailSubs")))), s.createElement(O.Xa, {
                                display: O.X.Flex,
                                justifyContent: O.Wa.Center,
                                padding: {
                                    top: 2
                                }
                            }, s.createElement(O.z, {
                                onClick: this.props.onClose
                            }, Object(u.d)("Close", "ChannelAnalyticsEmailSubs"))));
                        return s.createElement(O.Eb, {
                            background: O.r.Base,
                            elevation: 3,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 2
                            }
                        }, s.createElement(O.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(O.W, {
                            type: O.Vb.H4,
                            color: O.O.Alt
                        }, Object(u.d)("Send Email to Subscribers", "ChannelAnalyticsEmailSubs"))), this.state.requestState === ie.Success ? n : t, s.createElement(we.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(s.Component),
                Me = n("B+LW"),
                We = n("1AsC"),
                Xe = (n("N8uI"), {
                    1000: function() {
                        return Object(u.d)("Tier 1 subs", "ChannelAnalyticsSubscribersPanel")
                    },
                    2000: function() {
                        return Object(u.d)("Tier 2 subs", "ChannelAnalyticsSubscribersPanel")
                    },
                    3000: function() {
                        return Object(u.d)("Tier 3 subs", "ChannelAnalyticsSubscribersPanel")
                    }
                }),
                Ie = {
                    "data-test-selector": "download-my-subs"
                },
                Be = {
                    "data-test-selector": "email-my-subs"
                },
                Ue = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.emailButtons = function(e) {
                            return s.createElement(O.Eb, {
                                display: O.X.Flex
                            }, s.createElement(Me.a, {
                                triggerModal: function(e) {
                                    return s.createElement(Ve, {
                                        channelID: n.props.channel.id,
                                        onClose: e
                                    })
                                }
                            }, function(e) {
                                return s.createElement(oe.a, r.__assign({}, Ie, {
                                    message: Object(u.d)("Download my subscriber list", "ChannelAnalyticsSubscribersPanel"),
                                    onClick: Object(C.compose)(e, Ge)
                                }))
                            }), s.createElement(Me.a, {
                                triggerModal: function(t) {
                                    return s.createElement(Ne, {
                                        channelLogin: n.props.channel.name,
                                        totalSubscribers: e,
                                        onClose: t
                                    })
                                }
                            }, function(e) {
                                return s.createElement(O.Eb, {
                                    borderLeft: !0,
                                    flexGrow: 1
                                }, s.createElement(oe.a, r.__assign({}, Be, {
                                    message: Object(u.d)("Send e-mail to my subs", "ChannelAnalyticsSubscribersPanel"),
                                    onClick: Object(C.compose)(e, He)
                                })))
                            }))
                        }, n.subscriptionRows = function() {
                            return n.state.subscriptions.map(function(e) {
                                return s.createElement(qe, {
                                    name: Xe[e.plan](),
                                    revSplit: e.revenueSplit + " / " + (100 - e.revenueSplit),
                                    score: Object(u.f)(e.score),
                                    count: Object(u.f)(e.count),
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
                        if (this.props.channel.role === j.d.None) return null;
                        if (this.state.isLoading) return s.createElement(Ye, null);
                        var e = s.createElement(q.a, null),
                            t = this.state.subscriptions.reduce(function(e, t) {
                                return e + t.score
                            }, 0),
                            n = this.state.subscriptions.reduce(function(e, t) {
                                return e + t.count
                            }, 0);
                        return this.state.subscriptions.length && (e = s.createElement(s.Fragment, null, s.createElement(O.Eb, {
                            borderBottom: !0,
                            padding: {
                                top: 1,
                                bottom: 2
                            }
                        }, s.createElement(ze, null), this.subscriptionRows(), s.createElement(qe, {
                            name: Object(u.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                            score: Object(u.f)(t),
                            count: Object(u.f)(n)
                        })), this.emailButtons(n))), s.createElement(We.a, {
                            title: Object(u.d)("How many subscribers do I have today?", "ChannelAnalyticsSubscribersPanel")
                        }, e)
                    }, t.prototype.fetchSubscriptions = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.channel.role === j.d.None ? [2, this.setState({
                                            isLoading: !1,
                                            subscriptions: []
                                        })] : (this.setState({
                                            isLoading: !0,
                                            subscriptions: []
                                        }), [4, x(this.props.channel.name)]);
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
                ze = function() {
                    return s.createElement(O.Eb, {
                        padding: {
                            x: 2,
                            top: 2
                        },
                        position: O.jb.Relative
                    }, s.createElement(O.Ja, null, s.createElement(O.P, {
                        cols: 8
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right
                    }, s.createElement(O.W, {
                        type: O.Vb.H6,
                        bold: !0,
                        color: O.O.Alt2
                    }, Object(u.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), s.createElement(O.P, {
                        cols: 2
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right
                    }, s.createElement(O.W, {
                        type: O.Vb.H6,
                        bold: !0,
                        color: O.O.Alt2
                    }, Object(u.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), s.createElement(O.P, {
                        cols: 2
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right
                    }, s.createElement(O.W, {
                        type: O.Vb.H6,
                        bold: !0,
                        color: O.O.Alt2
                    }, Object(u.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
                };

            function He() {
                M({
                    action: P.EmailToSubs
                })
            }

            function Ge() {
                M({
                    action: P.DownloadMySubs
                })
            }
            var qe = function(e) {
                    return s.createElement(O.Eb, {
                        className: "subscribers-panel-row",
                        padding: {
                            x: 2,
                            y: 1
                        },
                        position: O.jb.Relative
                    }, s.createElement(O.Ja, null, s.createElement(O.P, {
                        cols: 6
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Left
                    }, s.createElement(O.W, {
                        type: O.Vb.H5,
                        color: O.O.Alt
                    }, e.name))), s.createElement(O.P, {
                        cols: 2
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right
                    }, s.createElement(O.W, {
                        type: O.Vb.H5
                    }, e.revSplit))), s.createElement(O.P, {
                        cols: 2
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right
                    }, s.createElement(O.W, {
                        type: O.Vb.H5,
                        bold: !0
                    }, e.score))), s.createElement(O.P, {
                        cols: 2
                    }, s.createElement(O.Xa, {
                        textAlign: O.Rb.Right
                    }, s.createElement(O.W, {
                        type: O.Vb.H5,
                        bold: !0
                    }, e.count)))))
                },
                Ye = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(O.ib, {
                        height: 510
                    }))
                },
                Ke = n("FXHi"),
                Qe = function(e) {
                    var t = e.channel,
                        n = e.topClips;
                    if (n.isLoading) return s.createElement(et, null);
                    var a = s.createElement(q.a, null);
                    if (n.clips.length) {
                        var r = Object(u.d)("View details", "ChannelAnalyticsTopClipsPanel"),
                            i = {
                                pathname: "/" + t.name + "/manager/clips/channel",
                                state: {
                                    medium: y.PageviewMedium.ChannelAnalytics,
                                    content: y.PageviewContent.TopClipsDetails
                                }
                            };
                        a = s.createElement(s.Fragment, null, s.createElement(Je, {
                            clipsAttrs: n
                        }), s.createElement(oe.a, {
                            message: r,
                            onClick: Ze,
                            linkTo: i
                        }))
                    }
                    return s.createElement(Y.a, {
                        title: Object(u.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")
                    }, a)
                },
                Je = function(e) {
                    if (e.clipsAttrs.isLoading)
                        for (var t = [], n = 0; n < 5; n++) t.push(s.createElement(O.Eb, {
                            borderBottom: !0,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            key: n
                        }, s.createElement(O.ib, {
                            height: 50
                        })));
                    return s.createElement(O.Eb, {
                        borderBottom: !0
                    }, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                        return s.createElement(Ke.a, r.__assign({}, e, {
                            key: t,
                            onClick: $e
                        }))
                    }))
                };

            function Ze() {
                M({
                    action: P.ViewDetailsClips
                })
            }

            function $e() {
                M({
                    action: P.TopClipsClip
                })
            }
            var et = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(O.ib, {
                        height: 448
                    }))
                },
                tt = n("17YR"),
                nt = function(e, t) {
                    var n = e.revenue,
                        a = e.subscriptions,
                        r = [
                            [Object(u.d)("Date", "CSVExporterRevenue")].concat(t.dates.map(function(e) {
                                return e.toDateString()
                            })), [Object(u.d)("Sub Revenue", "CSVExporterRevenue")].concat(t.sum(n.twitchSubscriptions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Twitch Prime Revenue", "CSVExporterRevenue")].concat(t.sum(n.primeSubscriptions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Gifted Subs Revenue", "CSVExporterRevenue")].concat(t.sum(n.giftSubscriptions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Bits Revenue", "CSVExporterRevenue")].concat(t.sum(n.bits.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Ad Revenue", "CSVExporterRevenue")].concat(t.sum(n.ads.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Game Sales Revenue", "CSVExporterRevenue")].concat(t.sum(n.gameCommerce.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Extensions Revenue", "CSVExporterRevenue")].concat(t.sum(n.extensions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Bounties Revenue", "CSVExporterRevenue")].concat(t.sum(n.bountyBoard.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.amount
                                }
                            })), [Object(u.d)("Twitch Prime Subs", "CSVExporterRevenue")].concat(t.sum(a.primeSubscriptions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.count
                                }
                            })), [Object(u.d)("Subs", "CSVExporterRevenue")].concat(t.sum(a.twitchSubscriptions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.count
                                }
                            }))
                        ].concat(a.twitchSubscriptionProducts.map(function(e) {
                            return [Object(ue.b)(e.defaultPrice)].concat(t.sum(e.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.count
                                }
                            }))
                        }), [
                            [Object(u.d)("Gifted Subs", "CSVExporterRevenue")].concat(t.sum(a.giftSubscriptions.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.count
                                }
                            }))
                        ], a.giftSubscriptionProducts.map(function(e) {
                            return [Object(ue.a)(e.defaultPrice)].concat(t.sum(e.timeseries, function(e) {
                                return {
                                    date: e.date,
                                    value: e.count
                                }
                            }))
                        }));
                    return {
                        fileName: t.isByDay ? Object(u.d)("Revenue by day {start, date} to {end, date}.csv", {
                            start: t.interval.start,
                            end: t.interval.end
                        }, "CSVExporterRevenue") : t.isByWeek ? Object(u.d)("Revenue by week {start, date} to {end, date}.csv", {
                            start: t.interval.start,
                            end: t.interval.end
                        }, "CSVExporterRevenue") : Object(u.d)("Revenue by month {start, date} to {end, date}.csv", {
                            start: t.interval.start,
                            end: t.interval.end
                        }, "CSVExporterRevenue"),
                        csv: Object(tt.c)(r).join("\n")
                    }
                },
                at = function(e, t) {
                    return t.isByDay ? function(e, t) {
                        var n = [
                            [Object(u.d)("Start Time", "CSVExporterStreamSessions"), Object(u.d)("End Time", "CSVExporterStreamSessions"), Object(u.d)("Average Viewers", "CSVExporterStreamSessions"), Object(u.d)("Max. Viewers", "CSVExporterStreamSessions"), Object(u.d)("Total Views", "CSVExporterStreamSessions"), Object(u.d)("Unique Views", "CSVExporterStreamSessions"), Object(u.d)("Minutes Watched", "CSVExporterStreamSessions"), Object(u.d)("New Followers", "CSVExporterStreamSessions"), Object(u.d)("Chatters", "CSVExporterStreamSessions"), Object(u.d)("Chat Messages", "CSVExporterStreamSessions"), Object(u.d)("Clips Created", "CSVExporterStreamSessions"), Object(u.d)("Clip Views", "CSVExporterStreamSessions"), Object(u.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessions"), Object(u.d)("Minutes Streamed", "CSVExporterStreamSessions")]
                        ];
                        return e.forEach(function(e) {
                            n.push(['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + e.avgViewerCount, "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialLengthTotal / 60, "" + Object(I.a)(e.interval)])
                        }), {
                            fileName: Object(u.d)("Stream Sessions {start, date} to {end, date}.csv", {
                                start: t.start,
                                end: t.end
                            }, "CSVExporterStreamSessions"),
                            csv: n.join("\n")
                        }
                    }(e, t.interval) : function(e, t) {
                        var n, a = [
                            [Object(u.d)("Date", "CSVExporterStreamSessionsAggregated")].concat(t.dates.map(function(e) {
                                return e.toDateString()
                            })), [Object(u.d)("Average Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                                return {
                                    weight: Object(I.a)(e.interval),
                                    value: e.avgViewerCount,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Max. Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.max(e, function(e) {
                                return {
                                    value: e.maxViewerCount,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Total Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.totalViewers,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Average Unique Views", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                                return {
                                    weight: Object(I.a)(e.interval),
                                    value: e.uniqueViewers,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Minutes Watched", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.totalMinutesWatched,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("New Followers", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.followersChange,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Average Unique Chatters", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                                return {
                                    weight: Object(I.a)(e.interval),
                                    value: e.uniqueChatters,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Chat Messages", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.messagesTotal,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Clips Created", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.clipCreatesTotal,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Clip Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.clipPlaysTotal,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: e.commercialLengthTotal / 60,
                                    date: e.interval.start
                                }
                            })), [Object(u.d)("Minutes Streamed", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                                return {
                                    value: Object(I.a)(e.interval),
                                    date: e.interval.start
                                }
                            }))
                        ];
                        n = t.isByWeek ? Object(u.d)("StreamSessions by week {start, date} to {end, date}.csv", {
                            start: t.interval.start,
                            end: t.interval.end
                        }, "CSVExporterStreamSessionsAggregated") : Object(u.d)("StreamSessions by month {start, date} to {end, date}.csv", {
                            start: t.interval.start,
                            end: t.interval.end
                        }, "CSVExporterStreamSessionsAggregated");
                        return {
                            fileName: n,
                            csv: Object(tt.c)(a).join("\n")
                        }
                    }(e, t)
                };
            var rt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.download = function() {
                            var e;
                            t.props.dataGroup === D.b.StreamSummaries ? (M({
                                action: P.ExportDataStream
                            }), e = at(t.props.analyticsResponse.streamSessions.sessions, t.props.aggregation)) : (M({
                                action: P.ExportDataRevenue
                            }), e = nt({
                                revenue: t.props.analyticsResponse.revenue.streams,
                                subscriptions: t.props.analyticsResponse.subCounts.streams
                            }, t.props.aggregation)), Object(tt.a)(e.fileName, e.csv)
                        }, t.isDataAvailable = function() {
                            return t.props.dataGroup === D.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : s.createElement(oe.a, {
                            disabled: !this.isDataAvailable(),
                            message: Object(u.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                            onClick: this.download
                        })
                    }, t
                }(s.Component),
                st = n("dfkd"),
                it = n("TDse"),
                ot = function() {
                    function e(e) {
                        this.defaultTopStats = [], this.topStatsKeys = [], this.channel = e, this.defaultTopStats = R(this.channel.role), this.topStatsKeys = _(this.channel.role), this.statsStorageKey = this.channel.name + "-top"
                    }
                    return e.prototype.store = function(e) {
                        var t;
                        u.m.set("channel-analytics-stats", r.__assign({}, this.storedStats(), ((t = {})[this.statsStorageKey] = e, t)))
                    }, e.prototype.storedStats = function() {
                        var e;
                        return u.m.get("channel-analytics-stats", ((e = {})[this.statsStorageKey] = [], e))
                    }, e.prototype.getValidStoredStats = function() {
                        var e = this,
                            t = this.storedStats(),
                            n = Array.isArray(t[this.statsStorageKey]) ? t[this.statsStorageKey] : [],
                            a = [],
                            r = this.topStatsKeys.slice();
                        return n.forEach(function(t) {
                            if (e.topStatsKeys.includes(t) && !a.includes(t)) return r.splice(r.indexOf(t), 1), a.push(t)
                        }), a.length ? a.length < D.d && (a = a.concat(r)) : a = this.defaultTopStats, a.slice(0, D.d)
                    }, e
                }(),
                lt = function(e) {
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
                        }, n.statsStorage = new ot(n.props.channel), n.defaultTopStats = R(n.props.channel.role), n.topStatsKeys = _(n.props.channel.role), n.state = {
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
                                return D.g[e]
                            }),
                            onUpdateStat: this.handleUpdateStat
                        })
                    }, t.prototype.getRemainingStats = function(e) {
                        return this.topStatsKeys.filter(function(t) {
                            return !e.includes(t)
                        })
                    }, t
                }(s.Component),
                ct = {
                    "data-test-selector": "stats-dropdown-title"
                },
                ut = {
                    "data-test-selector": "date-picker-toggle"
                },
                pt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return s.createElement(O.Xa, {
                            position: O.jb.Relative
                        }, s.createElement(W.a, {
                            control: function(e) {
                                var t = e.toggle;
                                return s.createElement(O.Xa, {
                                    display: O.X.Flex,
                                    fullHeight: !0
                                }, s.createElement(O.A, r.__assign({
                                    ariaLabel: Object(u.d)("Select top statistic", "ChannelAnalyticsDropdownAria"),
                                    icon: O.tb.GlyphArrUpDown,
                                    onClick: t,
                                    size: O.B.Small
                                }, ut)))
                            }
                        }, function(t) {
                            var n = t.close;
                            return s.createElement(O.u, {
                                show: !0,
                                direction: O.v.BottomRight,
                                tailOffset: 5
                            }, e.props.availableStats.map(function(t) {
                                return s.createElement(O.Ua, r.__assign({
                                    onClick: Object(C.compose)(n, e.props.onUpdateStat.bind(e, t, e.props.index)),
                                    key: t,
                                    type: O.Va.Alpha
                                }, ct), s.createElement(O.Xa, {
                                    padding: 1
                                }, s.createElement(O.W, {
                                    color: O.O.Link
                                }, D.g[t].title())))
                            }))
                        }))
                    }, t
                }(s.Component),
                dt = {
                    "data-test-selector": "current-chart"
                },
                mt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.chart = function(e) {
                            return s.createElement(e.definition.Chart, r.__assign({}, dt, {
                                analyticsResponse: t.props.analyticsResponse,
                                aggregation: e.aggregation
                            }))
                        }, t.handleAggregationChange = function(e) {
                            t.props.onAggregationSelect(e.currentTarget.value)
                        }, t.isDataAvailable = function(e) {
                            return e === D.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                        }, t.handleTabClick = function(e) {
                            return t.props.onTabSelect(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = new st.a(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params),
                            n = this.cappedIndex;
                        return s.createElement(lt, {
                            channel: this.props.channel,
                            onSelect: this.props.onStatsSelect
                        }, function(a) {
                            var r = a.stats,
                                i = a.onUpdateStat;
                            return s.createElement(O.Eb, {
                                margin: {
                                    bottom: 4
                                },
                                background: O.r.Base,
                                elevation: 1
                            }, s.createElement(O.Eb, {
                                display: O.X.Flex,
                                flexWrap: O.Ba.Wrap
                            }, r.map(function(t, a) {
                                var r = t.Tab;
                                return s.createElement(r, {
                                    analyticsResponse: e.props.analyticsResponse,
                                    linkTo: e.props.urlStore.buildPathWithParams({
                                        topStatsIndex: a
                                    }),
                                    isActive: n === a,
                                    key: a,
                                    onClick: e.handleTabClick
                                }, s.createElement(pt, {
                                    availableStats: _(e.props.channel.role),
                                    index: a,
                                    onUpdateStat: i
                                }))
                            })), s.createElement(O.Eb, {
                                padding: 2,
                                borderBottom: !0
                            }, s.createElement(O.Xa, {
                                display: O.X.Flex,
                                flexDirection: O.Aa.RowReverse,
                                padding: {
                                    bottom: 1
                                }
                            }, s.createElement("div", null, s.createElement(O.zb, {
                                disabled: !e.isDataAvailable(r[n].dataGroup),
                                onChange: e.handleAggregationChange,
                                value: e.props.urlStore.params.topStatsAggregation
                            }, s.createElement("option", {
                                value: it.a.Day
                            }, Object(u.d)("Day", "ChannelAnalyticsTopStats")), s.createElement("option", {
                                value: it.a.Week
                            }, Object(u.d)("Week", "ChannelAnalyticsTopStats")), s.createElement("option", {
                                value: it.a.Month
                            }, Object(u.d)("Month", "ChannelAnalyticsTopStats"))))), s.createElement(e.chart, {
                                definition: r[n],
                                aggregation: t
                            })), s.createElement(rt, {
                                analyticsResponse: e.props.analyticsResponse,
                                aggregation: t,
                                dataGroup: r[n].dataGroup
                            }))
                        })
                    }, Object.defineProperty(t.prototype, "cappedIndex", {
                        get: function() {
                            var e = D.d - 1;
                            return Math.min(e, this.props.urlStore.params.topStatsIndex)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                ht = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(O.ib, {
                        height: 510
                    }))
                },
                gt = {
                    "data-test-selector": "page-numbers-wrapper"
                },
                bt = {
                    "data-test-selector": "pagination-ellipsis"
                },
                ft = {
                    "data-test-selector": "left-button"
                },
                yt = {
                    "data-test-selector": "right-button"
                },
                vt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            lastIndexes: [],
                            currentPageIndex: 0
                        }, t.handleNavLeft = function() {
                            t.state.currentPageIndex > 0 && t.setState(function(e) {
                                return {
                                    currentPageIndex: e.currentPageIndex - 1
                                }
                            })
                        }, t.handleNavTo = function(e) {
                            t.setState({
                                currentPageIndex: e
                            })
                        }, t.handleNavRight = function() {
                            t.state.currentPageIndex < t.totalPages && t.setState(function(e) {
                                return {
                                    currentPageIndex: e.currentPageIndex + 1
                                }
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        for (var e = [], t = this.totalPages, n = 0; t > 1;) n += this.props.itemsPerPage, e.push(n), t--;
                        this.setState({
                            lastIndexes: e
                        })
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.currentPageIndex,
                            n = e.lastIndexes,
                            a = 0 !== t ? n[t - 1] : 0,
                            i = a + this.props.itemsPerPage;
                        return s.createElement(O.Xa, null, this.props.children({
                            firstItemIndex: a,
                            lastItemIndex: i
                        }), s.createElement(O.Eb, {
                            display: O.X.Flex,
                            justifyContent: O.Wa.Between,
                            alignItems: O.f.Center,
                            borderTop: !0
                        }, s.createElement(O.Eb, {
                            borderRight: !0,
                            display: O.X.Flex
                        }, s.createElement(O.z, r.__assign({
                            type: O.F.Text,
                            onClick: this.handleNavLeft,
                            disabled: 0 === t
                        }, ft), s.createElement(O.Xa, {
                            padding: 1,
                            display: O.X.Flex
                        }, s.createElement(O.sb, {
                            asset: O.tb.GlyphArrLeft
                        })))), this.renderPageButtons(), s.createElement(O.Eb, {
                            borderLeft: !0,
                            display: O.X.Flex
                        }, s.createElement(O.z, r.__assign({
                            type: O.F.Text,
                            onClick: this.handleNavRight,
                            disabled: t === this.totalPages - 1
                        }, yt), s.createElement(O.Xa, {
                            padding: 1,
                            display: O.X.Flex
                        }, s.createElement(O.sb, {
                            asset: O.tb.GlyphArrRight
                        }))))))
                    }, t.prototype.renderPageButtons = function() {
                        var e = this.state.currentPageIndex,
                            t = [],
                            n = this.totalPages,
                            a = this.props.marginPagesToDisplay || 0;
                        if (n <= 8)
                            for (var i = 0; i < n; i++) t.push(s.createElement(O.z, {
                                key: i,
                                type: O.F.Text,
                                onClick: this.handleNavTo.bind(this, i),
                                disabled: e === i
                            }, s.createElement(O.Xa, {
                                padding: {
                                    x: .5
                                }
                            }, i + 1)));
                        else {
                            var o = Math.max(e - 1, a),
                                l = Math.min(e + 1, n - a - 1);
                            for (i = 0; i < a; i++) t.push(this.renderPageAtIndex(i));
                            o > a && t.push(s.createElement(O.Xa, r.__assign({
                                key: "ellipsis-1",
                                padding: 1
                            }, bt), "..."));
                            for (i = o; i <= l; i++) t.push(this.renderPageAtIndex(i));
                            l < n - a - 1 && t.push(s.createElement(O.Xa, r.__assign({
                                key: "ellipsis-2",
                                padding: 1
                            }, bt), "..."));
                            for (i = n - a; i < n; i++) t.push(this.renderPageAtIndex(i))
                        }
                        return s.createElement(O.Xa, r.__assign({
                            display: O.X.Flex,
                            justifyContent: O.Wa.Around
                        }, gt), t)
                    }, t.prototype.renderPageAtIndex = function(e) {
                        return s.createElement(O.z, {
                            key: e,
                            type: O.F.Text,
                            onClick: this.handleNavTo.bind(this, e),
                            disabled: this.state.currentPageIndex === e
                        }, s.createElement(O.Xa, {
                            padding: {
                                x: .5
                            }
                        }, e + 1))
                    }, Object.defineProperty(t.prototype, "totalPages", {
                        get: function() {
                            return Math.ceil(this.props.totalItems / this.props.itemsPerPage)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                St = (n("y8Ud"), {
                    "data-test-selector": "card-image"
                }),
                Ct = {
                    "data-test-selector": "statnum"
                },
                Et = function(e) {
                    var t = e.stream,
                        n = e.statNum;
                    return s.createElement(O.Xa, {
                        className: "stream-card-row"
                    }, s.createElement(O.Ua, {
                        type: O.Va.Alpha,
                        blurAfterClick: !0,
                        targetBlank: !0,
                        linkTo: {
                            pathname: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                            search: "?tt_content=" + y.PageviewContent.TopStreams + "&tt_medium=" + y.PageviewMedium.ChannelAnalytics
                        },
                        onClick: wt
                    }, s.createElement(O.Eb, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, s.createElement(O.G, {
                        row: !0
                    }, s.createElement(O.I, r.__assign({
                        src: t.videoSmallThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                        alt: t.startChannelStatus,
                        size: O.J.Size8,
                        aspect: O.p.Aspect16x9
                    }, St)), s.createElement(O.H, {
                        overflow: O.cb.Hidden
                    }, s.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexGrow: 1,
                        alignItems: O.f.Center,
                        justifyContent: O.Wa.Between,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, s.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexDirection: O.Aa.Column,
                        ellipsis: !0
                    }, s.createElement(O.W, {
                        color: O.O.Base,
                        type: O.Vb.H5,
                        ellipsis: !0
                    }, t.startChannelStatus), s.createElement(O.W, {
                        color: O.O.Alt2,
                        type: O.Vb.Span,
                        ellipsis: !0
                    }, Object(u.d)("{start} - {end, time, short}", {
                        start: Object(u.c)(t.interval.start, {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        }),
                        end: t.interval.end
                    }, "ChannelAnalyticsStreamCard"))))), void 0 !== n && s.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexGrow: 1,
                        justifyContent: O.Wa.End,
                        padding: {
                            left: 2
                        }
                    }, s.createElement(O.W, r.__assign({
                        bold: !0,
                        fontSize: O.Ca.Size5,
                        color: O.O.Alt,
                        type: O.Vb.Span
                    }, Ct), Object(u.d)("{statNum, number}", {
                        statNum: function(e) {
                            if (e < 10) return Math.floor(10 * e) / 10;
                            return Math.floor(e)
                        }(n)
                    }, "ChannelAnalyticsStreamCard")))))))
                };

            function wt() {
                M({
                    action: P.TopStreamsStream
                })
            }
            var jt;
            ! function(e) {
                e.Date = "date", e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscribers = "new_subscribers"
            }(jt || (jt = {}));
            var Ot, kt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortType: jt.Date
                        }, t.sortDropdown = function() {
                            return s.createElement(O.zb, {
                                value: t.state.sortType,
                                onChange: t.handleSortTypeChange
                            }, s.createElement("option", {
                                value: jt.Date
                            }, Object(u.d)("Date", "ChannelAnalyticsTopStreamsPanel")), s.createElement("option", {
                                value: jt.AvgViewers
                            }, Object(u.d)("Average Viewers", "ChannelAnalyticsTopStreamsPanel")), s.createElement("option", {
                                value: jt.NewFollowers
                            }, Object(u.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")), s.createElement("option", {
                                value: jt.NewSubscribers
                            }, Object(u.d)("New Subscriptions", "ChannelAnalyticsTopStreamsPanel")))
                        }, t.streamsListInView = function(e) {
                            var n = e.firstItemIndex,
                                a = e.lastItemIndex;
                            return s.createElement(O.Xa, null, t.sortedStreamSummaries().slice(n, a).map(function(e, n) {
                                return s.createElement(Et, {
                                    stream: e,
                                    statNum: t.state.sortType !== jt.Date ? t.statNumForStreamSummary(e) : void 0,
                                    key: n
                                })
                            }))
                        }, t.handleSortTypeChange = function(e) {
                            var n = e.target.value;
                            switch (n) {
                                case jt.NewFollowers:
                                    M({
                                        action: P.TopStreamsSelectNewFollowers
                                    });
                                    break;
                                case jt.AvgViewers:
                                    M({
                                        action: P.TopStreamsSelectAvgViewers
                                    });
                                    break;
                                case jt.NewSubscribers:
                                    M({
                                        action: P.TopStreamsSelectNewSubscribers
                                    });
                                    break;
                                case jt.Date:
                                    M({
                                        action: P.TopStreamsSelectDate
                                    })
                            }
                            t.setState({
                                sortType: n
                            })
                        }, t.statNumForStreamSummary = function(e) {
                            switch (t.state.sortType) {
                                case jt.NewFollowers:
                                    return e.followersChange;
                                case jt.NewSubscribers:
                                    return e.subscriptionsNew;
                                case jt.AvgViewers:
                                default:
                                    return e.avgViewerCount
                            }
                        }, t.sortedStreamSummaries = function() {
                            var e = t.props.streamSessions.sessions.slice();
                            switch (t.state.sortType) {
                                case jt.NewFollowers:
                                    return Object(T.d)(e, [function(e) {
                                        return e.followersChange
                                    }], [T.a.Descending]);
                                case jt.NewSubscribers:
                                    return Object(T.d)(e, [function(e) {
                                        return e.subscriptionsNew
                                    }], [T.a.Descending]);
                                case jt.Date:
                                    return Object(T.d)(e, [function(e) {
                                        return e.interval.start
                                    }], [T.a.Descending]);
                                case jt.AvgViewers:
                                default:
                                    return Object(T.d)(e, [function(e) {
                                        return e.avgViewerCount
                                    }], [T.a.Descending])
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.streamSessions;
                        if (t.isLoading) return s.createElement(At, null);
                        var n = t.sessions.length,
                            a = s.createElement(q.a, null);
                        return n && (a = s.createElement(s.Fragment, null, s.createElement(O.Xa, {
                            padding: {
                                x: 2,
                                top: 2
                            },
                            margin: {
                                bottom: .5
                            },
                            display: O.X.Flex,
                            justifyContent: O.Wa.Between
                        }, s.createElement(O.Xa, null, s.createElement(O.W, {
                            type: O.Vb.H5,
                            noWrap: !0
                        }, Object(u.d)("{count} streams", {
                            count: s.createElement("strong", null, n)
                        }, "ChannelAnalyticsTopStreamsPanel"))), s.createElement(O.Xa, {
                            display: O.X.Flex,
                            alignItems: O.f.Center
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.W, {
                            noWrap: !0
                        }, Object(u.d)("Sort by:", "ChannelAnalyticsTopStreamsPanel"))), this.sortDropdown())), s.createElement(vt, {
                            totalItems: n,
                            itemsPerPage: 5,
                            marginPagesToDisplay: 1
                        }, function(t) {
                            return s.createElement(O.Xa, {
                                padding: {
                                    top: 1,
                                    bottom: 1
                                }
                            }, e.streamsListInView(t))
                        }))), s.createElement(Y.a, {
                            title: Object(u.d)("What were my streams during this period?", "ChannelAnalyticsTopStreamsPanel")
                        }, a)
                    }, t
                }(s.Component),
                At = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(O.ib, {
                        height: 448
                    }))
                },
                Tt = (n("mvbP"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e;
                        if (this.props.channelOverlaps && 0 !== this.props.channelOverlaps.length) {
                            var t = this.props.channelOverlaps.filter(function(e) {
                                return e.channel.displayName
                            });
                            e = s.createElement(O.Xa, {
                                padding: {
                                    y: 1
                                }
                            }, t.slice(0, 5).map(function(e, t) {
                                return s.createElement(xt, {
                                    login: e.channel.login || "",
                                    displayName: e.channel.displayName || "",
                                    image: e.channel.profileImageURL,
                                    percentage: e.score,
                                    key: t
                                })
                            }))
                        } else e = s.createElement(q.a, null);
                        return s.createElement(Y.a, {
                            title: Object(u.d)("Which channels have viewers in common with mine?", "ChannelAnalyticsViewerOverlapPanel"),
                            tooltip: Object(u.d)("You and another channel had x% of viewers in common over the past 30 days.", "ChannelAnalyticsViewerOverlapPanel")
                        }, e)
                    }, t
                }(s.Component)),
                xt = function(e) {
                    var t = function() {
                            M({
                                action: P.OverlapChannel
                            })
                        },
                        n = null;
                    return n = function(e, t) {
                        return e.toLowerCase() !== t.toLowerCase()
                    }(e.login, e.displayName) ? s.createElement(O.Xa, {
                        className: "channel-card-row__link-text"
                    }, s.createElement(O.W, {
                        fontSize: O.Ca.Size5,
                        ellipsis: !0
                    }, e.login), s.createElement(O.W, {
                        fontSize: O.Ca.Size6,
                        color: O.O.Alt2,
                        ellipsis: !0
                    }, e.displayName)) : s.createElement(O.W, {
                        className: "channel-card-row__link-text",
                        fontSize: O.Ca.Size5,
                        ellipsis: !0
                    }, e.displayName), s.createElement(O.Eb, {
                        className: "channel-card-row",
                        padding: {
                            y: 1,
                            right: 2,
                            left: 2
                        },
                        fontSize: O.Ca.Size5
                    }, s.createElement(O.Ja, null, s.createElement(O.P, {
                        cols: {
                            default: 5,
                            xs: 5,
                            sm: 5
                        }
                    }, s.createElement(O.Xa, {
                        padding: {
                            left: 0,
                            right: 1
                        },
                        fullHeight: !0,
                        display: O.X.Flex,
                        alignItems: O.f.Center
                    }, e.image && s.createElement(O.Xa, {
                        margin: {
                            right: 1
                        }
                    }, s.createElement(O.U, {
                        onClick: t,
                        to: "/" + e.login,
                        targetBlank: !0
                    }, s.createElement(O.q, {
                        src: e.image,
                        size: 40,
                        alt: e.displayName
                    }))), s.createElement(O.Xa, {
                        ellipsis: !0
                    }, s.createElement(O.U, {
                        onClick: t,
                        to: "/" + e.login,
                        hoverUnderlineNone: !0,
                        targetBlank: !0
                    }, n)))), s.createElement(O.P, {
                        cols: {
                            default: 2,
                            xs: 3,
                            sm: 2
                        }
                    }, s.createElement(O.Xa, {
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        justifyContent: O.Wa.End
                    }, s.createElement(O.W, {
                        color: O.O.Alt2,
                        ellipsis: !0
                    }, Object(K.a)(e.percentage)))), s.createElement(O.P, {
                        cols: {
                            default: 5,
                            xs: 4,
                            sm: 5
                        }
                    }, s.createElement(O.Xa, {
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        fullHeight: !0
                    }, s.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexGrow: 1
                    }, s.createElement(O.Eb, {
                        fullWidth: !0,
                        background: O.r.Alt2,
                        borderRadius: O.x.Small
                    }, s.createElement(O.mb, {
                        value: Math.max(100 * e.percentage, 1)
                    })))))))
                },
                Dt = function() {
                    return s.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(O.ib, {
                        height: 448
                    }))
                },
                Rt = function() {
                    function e(e, t) {
                        this.channels = e.map(function(e) {
                            return {
                                channel: {
                                    id: e.channel.id,
                                    login: e.channel.login,
                                    displayName: e.channel.displayName,
                                    profileImageURL: e.channel.profileImageURL
                                },
                                score: e.score
                            }
                        }).sort(function(e, t) {
                            return t.score - e.score
                        }), this.games = t.map(function(e) {
                            return {
                                game: {
                                    id: e.game.id,
                                    name: e.game.name,
                                    displayName: e.game.displayName,
                                    boxArtURL: e.game.boxArtURL
                                },
                                score: e.score
                            }
                        }).sort(function(e, t) {
                            return t.score - e.score
                        })
                    }
                    return e.fromData = function(t) {
                        return t && t.channel && t.channel.channelAnalyticsContentOverlap ? new e(t.channel.channelAnalyticsContentOverlap.channels || [], t.channel.channelAnalyticsContentOverlap.games || []) : {
                            channels: [],
                            games: []
                        }
                    }, e
                }();
            ! function(e) {
                e.Pageview = "pageview", e.DateSelect = "date_select", e.DateAggregationSelect = "date_aggregation_select", e.TabSelect = "tab_select", e.TabDropdownSelect = "tab_dropdown_select"
            }(Ot || (Ot = {}));
            var _t = {
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
                Pt = function(e) {
                    return "tab_" + e.replace(/-/g, "_")
                },
                Vt = function(e) {
                    return function(e) {
                        return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
                    }(e).getTime() / 1e3
                };
            var Ft = n("IFXb"),
                Lt = n("VxtK"),
                Nt = n("n/0j"),
                Mt = (n("+zwc"), function(e) {
                    return s.createElement(O.Xa, {
                        className: "channel-analytics-responsive-column",
                        display: O.X.Flex,
                        flexGrow: 1,
                        flexWrap: O.Ba.NoWrap,
                        flexDirection: O.Aa.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, e.children)
                }),
                Wt = (n("ct6I"), function(e) {
                    return s.createElement(O.Eb, {
                        className: "channel-analytics-responsive-column-container",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: O.X.Flex,
                        flexDirection: O.Aa.Column,
                        flexWrap: O.Ba.NoWrap,
                        alignItems: O.f.Stretch,
                        breakpointMedium: {
                            flexDirection: O.Aa.Row
                        }
                    }, e.children)
                }),
                Xt = (n("wOe/"), {
                    "data-test-selector": "live-dashboard-link"
                }),
                It = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                    alt: "VoHiYo"
                },
                Bt = "https://help.twitch.tv/customer/portal/articles/2927997";

            function Ut(e) {
                var t = function(e) {
                    var t = e.role === j.d.Partner || e.role === j.d.Affiliate;
                    return {
                        link: t ? "/" + e.name + "/dashboard/live" : "/" + e.name + "/dashboard/broadcast",
                        text: t ? Object(u.d)("Go to Live Dashboard", "NoAvailableChannelAnalyticsNotice") : Object(u.d)("Go to Streaming Tools", "NoAvailableChannelAnalyticsNotice")
                    }
                }(e.channel);
                return s.createElement(O.Xa, {
                    position: O.jb.Relative
                }, s.createElement(O.Xa, {
                    display: O.X.Flex,
                    justifyContent: O.Wa.Center
                }, s.createElement(O.Xa, {
                    position: O.jb.Absolute,
                    fullWidth: !0,
                    margin: {
                        top: 5
                    },
                    zIndex: O.ic.Default
                }, s.createElement(O.bc, {
                    childWidth: O.cc.Medium,
                    center: !0
                }, s.createElement("div", {
                    className: "ca-welcome-modal"
                }, s.createElement(O.i, {
                    type: O.n.SlideInBottom,
                    duration: O.k.Medium,
                    enabled: !0,
                    timing: O.m.EaseInOut
                }, s.createElement(O.Eb, {
                    border: !0,
                    padding: 2,
                    background: O.r.Base,
                    elevation: 3
                }, s.createElement(O.Xa, {
                    display: O.X.Flex,
                    alignItems: O.f.Center,
                    margin: {
                        bottom: 1
                    }
                }, s.createElement(O.q, r.__assign({}, It, {
                    size: 30
                })), s.createElement(O.Xa, {
                    margin: {
                        left: .5
                    }
                }, s.createElement(O.W, {
                    type: O.Vb.H4,
                    bold: !0
                }, Object(u.d)("Welcome to Channel Analytics", "NoAvailableChannelAnalyticsNotice")))), s.createElement(O.ec, null, s.createElement(O.W, {
                    fontSize: O.Ca.Size5
                }, Object(u.d)("Your stream and revenue stats – all in one place. Stream to get started!", "NoAvailableChannelAnalyticsNotice"))), s.createElement(O.Xa, {
                    padding: {
                        top: 1
                    }
                }, s.createElement(O.Xa, {
                    margin: {
                        right: 1
                    },
                    display: O.X.InlineBlock
                }, s.createElement(O.z, r.__assign({
                    linkTo: t.link
                }, Xt), t.text)), s.createElement(O.z, {
                    linkTo: Bt,
                    type: O.F.Text
                }, Object(u.d)("Learn More", "NoAvailableChannelAnalyticsNotice"))))))))))
            }
            var zt = function(e) {
                    return s.createElement(s.Fragment, null, s.createElement(Ut, {
                        channel: e.channel
                    }), s.createElement(ht, null), s.createElement(Wt, null, s.createElement(Mt, null, s.createElement(ve, null), s.createElement(Lt.b, null), s.createElement(et, null)), s.createElement(Mt, null, s.createElement(Ye, null), s.createElement(At, null), s.createElement(Dt, null), s.createElement(Z, null))))
                },
                Ht = n("Pf3A");
            var Gt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.track = function(e) {
                            var t = n.props.urlStore;
                            ! function(e) {
                                u.o.track(y.SpadeEventType.ChannelAnalyticsTopStatsView, e)
                            }(function(e, t) {
                                var n = t.selectedStats,
                                    a = n[t.topStatsIndex],
                                    s = {};
                                return n.forEach(function(e) {
                                    s[Pt(e)] = !0
                                }), r.__assign({
                                    action: e,
                                    chart: a,
                                    date_range_selection: t.dateRangeSelection,
                                    date_start: Vt(t.start),
                                    date_end: Vt(t.end),
                                    date_aggregation: t.topStatsAggregation
                                }, _t, s)
                            }(e, r.__assign({
                                dateRangeSelection: n.dateRangeSelection,
                                selectedStats: n.statsStorage.getValidStoredStats()
                            }, t.params)))
                        }, n.handleSelectStat = function(e, t, a) {
                            n.props.urlStore.replace({
                                topStatsIndex: t
                            }), n.track(Ot.TabDropdownSelect)
                        }, n.handleDateSelect = function(e) {
                            var t = e.start,
                                a = e.end,
                                r = e.id;
                            n.dateRangeSelection = r, n.props.urlStore.replace({
                                start: t,
                                end: a
                            }), n.track(Ot.DateSelect)
                        }, n.handleAggregationSelect = function(e) {
                            n.props.urlStore.replace({
                                topStatsAggregation: e
                            }), n.track(Ot.DateAggregationSelect)
                        }, n.handleTabSelect = function(e) {
                            n.track(Ot.TabSelect)
                        };
                        var s = n.props.channel;
                        return n.statsStorage = new ot(s), n.dateRangeSelection = a.Default, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.track(Ot.Pageview), u.m.set(Nt.a, !0)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.urlStore,
                            n = e.channel,
                            a = e.channelAnalyticsResponse,
                            r = e.recentStreamSummaryQuery,
                            i = a.streamSessions,
                            o = function(e) {
                                var t = e.viewingSessions,
                                    n = e.recentSessions,
                                    a = e.role,
                                    r = t.isLoading || n.isLoading,
                                    s = n.hasSessions,
                                    i = t.hasSessions,
                                    o = a !== j.d.None;
                                return !(r || s || i || o)
                            }({
                                viewingSessions: {
                                    isLoading: i.isLoading,
                                    hasSessions: i.sessions.length > 0
                                },
                                recentSessions: {
                                    isLoading: r.isLoading,
                                    hasSessions: r.streamSummaries.length > 0
                                },
                                role: n.role
                            });
                        return s.createElement(s.Fragment, null, s.createElement(Ft.a, null, s.createElement(H, {
                            urlStore: t,
                            onDateSelect: this.handleDateSelect
                        }), o ? s.createElement(zt, {
                            channel: n
                        }) : this.renderPanels()), s.createElement(ne, null))
                    }, t.prototype.renderPanels = function() {
                        var e = this.props,
                            t = e.urlStore,
                            n = e.channelAnalyticsResponse,
                            a = e.channel,
                            r = n.streamSessions,
                            i = n.topClips,
                            o = Rt.fromData(this.props.data);
                        return s.createElement(s.Fragment, null, s.createElement(mt, {
                            channel: a,
                            urlStore: t,
                            analyticsResponse: n,
                            onStatsSelect: this.handleSelectStat,
                            onAggregationSelect: this.handleAggregationSelect,
                            onTabSelect: this.handleTabSelect
                        }), s.createElement(Wt, null, s.createElement(Mt, null, s.createElement(Ee, {
                            channel: a,
                            revenue: n.revenue,
                            subCounts: n.subCounts
                        }), s.createElement(m.a, null, function(e) {
                            var t = e.location;
                            return s.createElement(Lt.a, {
                                streamSessionsQuery: r,
                                onViewDetails: Yt,
                                linkToDetails: {
                                    pathname: "/" + a.name + "/dashboard/channel-analytics/referrals",
                                    search: t.search,
                                    state: {
                                        content: y.PageviewContent.ReferralsDetails,
                                        medium: y.PageviewMedium.ChannelAnalytics
                                    }
                                }
                            })
                        }), s.createElement(Qe, {
                            channel: a,
                            topClips: i
                        })), s.createElement(Mt, null, s.createElement(Ue, {
                            channel: a
                        }), s.createElement(kt, {
                            streamSessions: r
                        }), s.createElement(h.a, {
                            name: b.b.ChannelAnalyticsContentOverlapPanels,
                            assignments: {
                                fallback: function() {
                                    return null
                                },
                                no: function() {
                                    return null
                                },
                                yes: function() {
                                    return s.createElement(s.Fragment, null, s.createElement(Tt, {
                                        channelOverlaps: o.channels
                                    }), s.createElement(Q, {
                                        gameOverlaps: o.games
                                    }))
                                }
                            }
                        }))))
                    }, t
                }(s.Component),
                qt = Object(c.compose)(Object(p.a)(Ht, {
                    skip: function() {
                        return "yes" !== u.p.experiments.getAssignment(b.b.ChannelAnalyticsContentOverlapPanels)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.channel.name
                            }
                        }
                    }
                }), Object(v.b)("ChannelAnalyticsIndexPage", {
                    destination: f.a.ChannelDashboardChannelAnalytics,
                    autoReportInteractive: !0
                }), Object(g.a)({
                    location: y.PageviewLocation.DashboardChannelAnalytics
                }))(Gt);

            function Yt() {
                M({
                    action: P.ViewDetailsReferrers
                })
            }
            var Kt = n("LA8z"),
                Qt = n("4rCz"),
                Jt = n("lBsv"),
                Zt = n("MDe2");

            function $t(e) {
                return e.sessionUser && e.sessionUser.login === e.channelLogin
            }
            var en = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderError = function(e) {
                            return s.createElement(O.Xa, {
                                display: O.X.Flex,
                                flexDirection: O.Aa.Column,
                                alignItems: O.f.Center,
                                alignContent: O.e.Center,
                                justifyContent: O.Wa.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, s.createElement(O.Xa, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, s.createElement(O.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                alt: "BibleThump",
                                size: 50
                            })), s.createElement(O.W, {
                                color: O.O.Alt2,
                                fontSize: O.Ca.Size5
                            }, e))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this,
                            n = s.createElement(Jt.a, {
                                message: Object(Qt.d)("Payout History", "ChannelAnalyticsPayoutsPage"),
                                backLinkTo: this.returnLocation
                            });
                        if (!re()) return s.createElement(Kt.a, null);
                        if ($t(this.props))
                            if (!this.props.data || this.props.data.error) e = this.renderError(Object(Qt.d)("Sorry, something went wrong loading your payout history. Please try again later", "ChannelAnalyticsPayoutsPage"));
                            else if (this.props.data.loading) e = s.createElement(O.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: O.Rb.Center,
                            padding: {
                                y: 4
                            },
                            margin: {
                                y: 4
                            }
                        }, s.createElement(O.Za, {
                            fillContent: !0
                        }));
                        else {
                            var a = this.props.data.user;
                            e = s.createElement(s.Fragment, null, a && a.payout && a.payout.history && a.payout.history.iframeURL && s.createElement("iframe", {
                                height: "600px",
                                width: "100%",
                                src: a.payout.history.iframeURL
                            }), s.createElement(O.Xa, {
                                textAlign: O.Rb.Left,
                                margin: 1
                            }, s.createElement(O.W, {
                                type: O.Vb.P
                            }, Object(Qt.d)("Showing all payouts since October 2016. For information regarding payouts before that date, please <x:link>contact support</x:link>.", {
                                "x:link": function(e) {
                                    return s.createElement(O.U, {
                                        to: "https://help.twitch.tv/customer/portal/emails/new",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "ChannelAnalyticsPayoutsPage"))), s.createElement(O.Xa, {
                                textAlign: O.Rb.Left,
                                margin: 1
                            }, s.createElement(O.W, {
                                type: O.Vb.P
                            }, Object(Qt.d)("This page shows your earnings from Twitch for each pay period. These numbers may not exactly match your revenue on the Channel Analytics page, as the latter is an estimate of your earnings.", "ChannelAnalyticsPayoutsPage"))), s.createElement(O.Xa, {
                                textAlign: O.Rb.Left,
                                margin: 1
                            }, s.createElement(O.W, {
                                type: O.Vb.P,
                                bold: !0
                            }, Object(Qt.d)("Have a new payout method you would like to use? <x:link>Change your payout method.</x:link>", {
                                "x:link": function(e) {
                                    return s.createElement(O.U, {
                                        to: "/" + t.props.channelLogin + "/dashboard/settings/revenue/payouts",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "ChannelAnalyticsPayoutsPage"))))
                        } else e = this.renderError(Object(Qt.d)("This page is restricted to the channel owner only. For further help, please contact the channel owner or Twitch support.", "ChannelAnalyticsPayoutsPage"));
                        return s.createElement(Ft.a, null, n, s.createElement(O.Eb, {
                            margin: {
                                top: 2
                            },
                            padding: 2,
                            elevation: 1,
                            background: O.r.Base
                        }, e))
                    }, Object.defineProperty(t.prototype, "returnLocation", {
                        get: function() {
                            return this.props.location.state && this.props.location.state.returnLocation || "/" + this.props.channelLogin + "/dashboard/channel-analytics"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                tn = Object(c.compose)(Object(v.b)("ChannelAnalyticsPayoutsPage", {
                    destination: f.a.ChannelDashboardChannelAnalyticsPayouts,
                    autoReportInteractive: !0
                }), Object(g.a)({
                    location: y.PageviewLocation.DashboardChannelAnalyticsPayouts
                }), Object(i.connect)(function(e) {
                    return {
                        sessionUser: Object(d.e)(e)
                    }
                }), Object(p.a)(Zt, {
                    skip: function(e) {
                        return !$t(e)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            },
                            fetchPolicy: "network-only"
                        }
                    }
                }))(en),
                nn = n("cpGa"),
                an = function(e) {
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
                        var e = this,
                            t = this.props.channelAnalyticsResponse.streamSessions,
                            n = t.isLoading,
                            a = t.sessions;
                        return s.createElement(s.Fragment, null, s.createElement(Ft.a, null, s.createElement(o.a, null, function(t) {
                            var n = t.location;
                            return s.createElement(Jt.a, {
                                backLinkTo: {
                                    pathname: "/" + e.props.channel.name + "/dashboard/channel-analytics",
                                    search: n.search,
                                    state: {
                                        content: y.PageviewContent.ReferralsBack,
                                        medium: y.PageviewMedium.ChannelAnalytics
                                    }
                                },
                                message: Object(u.d)("Views by Source", "ChannelAnalyticsReferralPage")
                            })
                        }), s.createElement(H, {
                            urlStore: this.props.urlStore,
                            onDateSelect: this.handleDateSelect
                        }), s.createElement(nn.a, {
                            isLoading: n,
                            streamSummaries: a
                        })), s.createElement(ne, null))
                    }, t
                }(s.Component),
                rn = Object(c.compose)(Object(v.b)("ChannelAnalyticsReferralsPage", {
                    destination: f.a.ChannelDashboardChannelAnalyticsReferrals,
                    autoReportInteractive: !0
                }), Object(g.a)({
                    location: y.PageviewLocation.DashboardChannelAnalyticsReferrals
                }))(an),
                sn = n("ySo8"),
                on = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = new sn.URLStore(this.props.location, this.props.history, this.props.now);
                        return N(e.params, this.props.now) ? this.props.children(e) : (e.replace({
                            start: void 0,
                            end: void 0
                        }), null)
                    }, t
                }(s.Component),
                ln = n("m9vr"),
                cn = n("uy/s"),
                un = n("cr+I"),
                pn = n("P+v/"),
                dn = n("yLSs"),
                mn = {
                    ads: [],
                    bits: [],
                    bountyBoard: [],
                    extensions: [],
                    gameCommerce: [],
                    primeSubscriptions: [],
                    twitchSubscriptionProducts: [],
                    giftSubscriptionProducts: []
                },
                hn = function(e) {
                    var t = e.gift_subscriptions || [];
                    return {
                        ads: gn(e.ads),
                        bits: gn(e.bits),
                        bountyBoard: gn(e.bounty_board),
                        extensions: gn(e.extensions),
                        gameCommerce: gn(e.game_commerce),
                        primeSubscriptions: gn(e.prime_subscriptions),
                        twitchSubscriptionProducts: e.twitch_subscriptions.map(function(e) {
                            return {
                                defaultPrice: e.default_price,
                                productID: e.product_id,
                                timeseries: gn(e.revenue)
                            }
                        }),
                        giftSubscriptionProducts: t.map(function(e) {
                            return {
                                defaultPrice: e.default_price,
                                productID: e.product_id,
                                timeseries: gn(e.revenue)
                            }
                        })
                    }
                },
                gn = function(e) {
                    return e.map(function(e) {
                        return {
                            amount: e.amount / 100,
                            date: Object(pn.a)(e.timestamp)
                        }
                    })
                };
            var bn = n("ueVa"),
                fn = n("yCxs"),
                yn = n("Dg4+");
            var vn = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            topClips: {
                                clips: [],
                                isLoading: !0
                            },
                            revenue: {
                                streams: sn.RevenueStreams.buildEmpty(),
                                lookbackStreams: sn.RevenueStreams.buildEmpty(),
                                isLoading: !0
                            },
                            subCounts: {
                                streams: sn.SubCountStreams.buildEmpty(),
                                lookbackStreams: sn.SubCountStreams.buildEmpty(),
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
                        Object(j.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions())
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
                                        }, [4, Object(fn.b)(this.props.channel, e)]) : [2];
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
                                        }), [4, Object(yn.a)(this.props.channel.name, this.props.interval)]) : [2];
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
                            var e, t, n, a, s, i = this;
                            return r.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.channel ? (this.setState({
                                            revenue: {
                                                streams: sn.RevenueStreams.buildEmpty(),
                                                lookbackStreams: sn.RevenueStreams.buildEmpty(),
                                                isLoading: !0
                                            }
                                        }), e = {
                                            start: this.props.lookbackInterval.start,
                                            end: this.props.interval.end
                                        }, [4, function(e, t) {
                                            return r.__awaiter(this, void 0, Promise, function() {
                                                var n, a, s, i;
                                                return r.__generator(this, function(o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return e.role === j.d.None ? [2, {
                                                                isError: !1,
                                                                streams: mn
                                                            }] : (n = "/kraken/channels/" + e.id + "/dashboard/revenues", a = un.stringify(r.__assign({}, Object(dn.a)(t.start, Object(S.addDays)(t.end, 1)), {
                                                                fraction: "day"
                                                            })), s = [n, a].join("?"), [4, Object(T.c)({
                                                                path: s
                                                            })]);
                                                        case 1:
                                                            return (i = o.sent()).isError() ? [2, {
                                                                isError: !0,
                                                                streams: mn
                                                            }] : [2, {
                                                                isError: !1,
                                                                streams: hn(i.body)
                                                            }]
                                                    }
                                                })
                                            })
                                        }(this.props.channel, e)]) : [2];
                                    case 1:
                                        return (t = o.sent()).isError ? [2] : (n = new sn.RevenueStreams(t.streams), a = n.filter(function(e) {
                                            return e.date >= i.props.interval.start && e.date <= i.props.interval.end
                                        }), s = n.filter(function(e) {
                                            return e.date <= i.props.lookbackInterval.end
                                        }), this.setState({
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
                            var e, t, n, a, s, i = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.channel ? (this.setState({
                                            subCounts: {
                                                streams: sn.SubCountStreams.buildEmpty(),
                                                lookbackStreams: sn.SubCountStreams.buildEmpty(),
                                                isLoading: !0
                                            }
                                        }), e = {
                                            start: this.props.lookbackInterval.start,
                                            end: this.props.interval.end
                                        }, [4, Object(bn.b)(this.props.channel, e)]) : [2];
                                    case 1:
                                        return (t = r.sent()).isError ? [2] : (n = new sn.SubCountStreams(t.subscriptions), a = n.filter(function(e) {
                                            return e.date >= i.props.interval.start && e.date <= i.props.interval.end
                                        }), s = n.filter(function(e) {
                                            return e.date <= i.props.lookbackInterval.end
                                        }), this.setState({
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
                }(s.PureComponent),
                Sn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                    }, t.prototype.render = function() {
                        var e = this,
                            t = j.c.fromChannelData(this.props.data);
                        if (!t) return null;
                        if (!this.props.data.loading && this.props.data.channel) {
                            var n = this.props.userID === this.props.data.channel.id,
                                a = this.props.data.channel.self && this.props.data.channel.self.isEditor;
                            if (!this.props.isStaff && !n && !a) return s.createElement(ln.a, null)
                        }
                        return s.createElement(l.a, null, s.createElement(o.a, {
                            path: "/:channelName/dashboard/channel-analytics/payouts",
                            render: function(e) {
                                var n = e.location;
                                return s.createElement(tn, {
                                    location: n,
                                    channelLogin: t.name
                                })
                            }
                        }), s.createElement(o.a, {
                            render: this.withChannelAnalyticsResponse(t, function(n, a) {
                                return s.createElement(l.a, null, s.createElement(o.a, {
                                    path: "/:channelName/dashboard/channel-analytics/referrals",
                                    render: function() {
                                        return s.createElement(rn, {
                                            channel: t,
                                            urlStore: n,
                                            channelAnalyticsResponse: a
                                        })
                                    }
                                }), s.createElement(o.a, {
                                    render: function() {
                                        return s.createElement(qt, {
                                            channel: t,
                                            urlStore: n,
                                            channelAnalyticsResponse: a,
                                            recentStreamSummaryQuery: e.props.streamSummaryQuery
                                        })
                                    }
                                }))
                            })
                        }))
                    }, t.prototype.withChannelAnalyticsResponse = function(e, t) {
                        var n = this;
                        return function() {
                            return s.createElement(on, {
                                location: n.props.location,
                                history: n.props.history
                            }, function(n) {
                                return s.createElement(vn, {
                                    interval: n.params,
                                    lookbackInterval: Object(I.h)(n.params, -1),
                                    channel: e
                                }, function(e) {
                                    return t(n, e)
                                })
                            })
                        }
                    }, t
                }(s.Component);
            var Cn = Object(c.compose)(Object(p.a)(cn, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(i.connect)(function(e) {
                var t = Object(d.e)(e);
                return {
                    userID: t && t.id,
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            }))(Sn);
            n.d(t, "ChannelAnalyticsPageComponent", function() {
                return Sn
            }), n.d(t, "ChannelAnalyticsRoot", function() {
                return Cn
            })
        },
        JfkF: function(e, t, n) {},
        Knvm: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("/7QA");

            function r(e, t, n) {
                if (Boolean(Intl && Intl.NumberFormat && Intl.NumberFormat.prototype.formatToParts)) {
                    var r = a.p.intl.getLanguageCode() || "en";
                    return Intl.NumberFormat(r, {
                        style: "currency",
                        currency: "USD"
                    }).formatToParts(e).map(t)
                }
                return [n(Object(a.f)(e, {
                    style: "currency",
                    currency: "USD"
                }))]
            }
        },
        MDe2: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PayoutHistoryPage"
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
                                        value: "payout"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "history"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "iframeURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 104
                }
            };
            n.loc.source = {
                body: "query PayoutHistoryPage($login: String!) {\nuser(login: $login) {\nid\npayout {\nhistory {\niframeURL\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        N8uI: function(e, t, n) {},
        NCCa: function(e, t, n) {},
        NZO2: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                r = n("bM8u"),
                s = function() {
                    function e(e) {
                        this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.bountyBoard = this.getTimeseriesWithTotal(e.bountyBoard), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = this.extractSubscriptionProducts(e.twitchSubscriptionProducts);
                        var t = this.extractTimeseries(this.twitchSubscriptionProducts);
                        this.twitchSubscriptions = this.getTimeseriesWithTotal(t), this.giftSubscriptionProducts = this.extractSubscriptionProducts(e.giftSubscriptionProducts);
                        var n = this.extractTimeseries(this.giftSubscriptionProducts);
                        this.giftSubscriptions = this.getTimeseriesWithTotal(n)
                    }
                    return e.buildEmpty = function() {
                        return new e({
                            ads: [],
                            bits: [],
                            bountyBoard: [],
                            extensions: [],
                            gameCommerce: [],
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: [],
                            giftSubscriptionProducts: []
                        })
                    }, e.prototype.filter = function(t) {
                        return new e({
                            ads: this.ads.timeseries.filter(t),
                            bits: this.bits.timeseries.filter(t),
                            bountyBoard: this.bountyBoard.timeseries.filter(t),
                            extensions: this.extensions.timeseries.filter(t),
                            gameCommerce: this.gameCommerce.timeseries.filter(t),
                            primeSubscriptions: this.primeSubscriptions.timeseries.filter(t),
                            twitchSubscriptionProducts: this.twitchSubscriptionProducts.map(function(e) {
                                return a.__assign({}, e, {
                                    timeseries: e.timeseries.filter(t)
                                })
                            }),
                            giftSubscriptionProducts: this.giftSubscriptionProducts.map(function(e) {
                                return a.__assign({}, e, {
                                    timeseries: e.timeseries.filter(t)
                                })
                            })
                        })
                    }, e.prototype.getTotalAmountAllStreams = function() {
                        return this.ads.total + this.bits.total + this.bountyBoard.total + this.extensions.total + this.gameCommerce.total + this.primeSubscriptions.total + this.twitchSubscriptions.total + this.giftSubscriptions.total
                    }, e.prototype.getTimeseriesWithTotal = function(e) {
                        return {
                            timeseries: e,
                            total: Math.round(100 * e.reduce(function(e, t) {
                                return e + t.amount
                            }, 0)) / 100
                        }
                    }, e.prototype.extractSubscriptionProducts = function(e) {
                        var t = this;
                        return (e = e.length ? e : r.c).map(function(e) {
                            return a.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                        }).sort(function(e, t) {
                            return e.defaultPrice - t.defaultPrice
                        })
                    }, e.prototype.extractTimeseries = function(e) {
                        return e.reduce(function(e, t) {
                            return e.concat(t.timeseries)
                        }, [])
                    }, e
                }()
        },
        OGSR: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("Ue10"),
                i = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCanvasReady = function(e) {
                            e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Pa, {
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
                }(r.Component);
            n.d(t, "a", function() {
                return i
            })
        },
        "P+v/": function(e, t, n) {
            "use strict";

            function a(e) {
                var t = new Date(e);
                return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
            }
            n.d(t, "a", function() {
                return a
            })
        },
        Pf3A: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardChannelAnalytics_ContentOverlap"
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
                                        value: "channelAnalyticsContentOverlap"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "channels"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "channel"
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
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "displayName"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "70"
                                                                }
                                                            }],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "score"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "games"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "game"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "boxArtURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "40"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "55"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
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
                                                                value: "displayName"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "name"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "score"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 306
                }
            };
            n.loc.source = {
                body: "query DashboardChannelAnalytics_ContentOverlap($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nchannelAnalyticsContentOverlap {\nchannels {\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\nscore\n}\ngames {\ngame {\nboxArtURL(width: 40 height: 55)\nid\ndisplayName\nname\n}\nscore\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        R4hK: function(e, t, n) {},
        RnhZ: function(e, t, n) {
            var a = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function r(e) {
                var t = s(e);
                return n(t)
            }

            function s(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = s, e.exports = r, r.id = "RnhZ"
        },
        SAvX: function(e, t) {},
        TDse: function(e, t, n) {
            "use strict";
            var a;

            function r(e) {
                return e === a.Week || e === a.Month ? e : a.Day
            }
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Day = "day", e.Week = "week", e.Month = "month"
                }(a || (a = {}))
        },
        VxtK: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("/7QA"),
                s = n("cSnd"),
                i = n("a7UW"),
                o = n("6E8S"),
                l = n("sBDM"),
                c = n("nlSm"),
                u = n("g3ZN"),
                p = n("Ue10"),
                d = {
                    "data-test-selector": "referral-percentage"
                },
                m = function(e) {
                    return e
                },
                h = function(e) {
                    var t = e.streamSessionsQuery,
                        n = e.linkToDetails,
                        d = e.onViewDetails;
                    if (t.isLoading) return a.createElement(g, null);
                    var h = t.sessions,
                        b = Object(c.a)(h.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        f = Object(c.a)(h.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        y = Object(c.a)(h.map(function(e) {
                            return e.videoPlayExternalReferrers
                        })),
                        v = a.createElement(i.a, null);
                    return (b.total || f.total || y.total) && (v = a.createElement(a.Fragment, null, a.createElement(p.Eb, {
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(u.a, {
                        referrals: b.items.slice(0, 3),
                        total: b.total,
                        translationFunc: s.b,
                        title: Object(r.d)("Twitch", "DashboardReferralPanel")
                    }), a.createElement(u.a, {
                        referrals: f.items.slice(0, 3),
                        total: f.total,
                        translationFunc: m,
                        title: Object(r.d)("Channels", "DashboardReferralPanel")
                    }), a.createElement(u.a, {
                        referrals: y.items.slice(0, 3),
                        total: y.total,
                        translationFunc: s.a,
                        title: Object(r.d)("External", "DashboardReferralPanel")
                    })), a.createElement(l.a, {
                        onClick: d,
                        message: Object(r.d)("View details", "DashboardReferralPanel"),
                        linkTo: n
                    }))), a.createElement(o.a, {
                        title: Object(r.d)("Where did my views come from?", "DashboardReferralPanel")
                    }, v)
                },
                g = function() {
                    return a.createElement(p.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(p.ib, {
                        height: 448
                    }))
                };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return g
            })
        },
        WHSC: function(e, t, n) {},
        WuTM: function(e, t, n) {},
        a7UW: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("/7QA"),
                i = n("Ue10"),
                o = {
                    "data-test-selector": "no-data"
                },
                l = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                    alt: "TearGlove"
                },
                c = function() {
                    return r.createElement(i.Xa, a.__assign({
                        alignItems: i.f.Center,
                        display: i.X.Flex,
                        flexDirection: i.Aa.Column,
                        justifyContent: i.Wa.Center,
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        padding: {
                            top: 5,
                            bottom: 5
                        }
                    }, o), r.createElement(i.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(i.q, a.__assign({}, l, {
                        size: 50
                    }))), r.createElement(i.W, {
                        color: i.O.Alt2,
                        fontSize: i.Ca.Size5
                    }, Object(s.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
                };
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return c
            })
        },
        bM8u: function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                r = n("mrSG"),
                s = n("q1tI"),
                i = n("5zf8"),
                o = n("2xye"),
                l = n("z0Ka"),
                c = n("+lD8"),
                u = n("a7UW"),
                p = n("Ue10"),
                d = (n("JfkF"), function() {
                    return s.createElement(p.Xa, {
                        className: "top-stats-chart-no-data",
                        display: p.X.Flex
                    }, s.createElement(u.a, null))
                }),
                m = n("CFgy"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleDatasetClick = function(e, n) {
                            if (t.props.aggregation.isByDay) {
                                var a = t.props.streamSessionsResponse.sessions[0].channel.name;
                                if (a && n && n.length > 0) {
                                    var r = n[0],
                                        s = t.props.streamSessionsResponse.sessions[r._index];
                                    window.open("/" + a + "/dashboard/stream-summary/" + s.id + "?tt_content=" + o.PageviewContent.TopStatsChart + "&tt_medium=" + o.PageviewMedium.ChannelAnalytics)
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
                                    i = Object(m.b)(r.interval);
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
                        if (this.props.streamSessionsResponse.isLoading) return s.createElement(c.a, null);
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
                        })), s.createElement(l.a, {
                            labels: t,
                            datasets: n,
                            formatTooltipLabel: this.props.formatTooltipLabel,
                            formatTooltipTitle: this.formatTooltipTitle,
                            formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                            formatYAxis: this.props.formatYAxis,
                            onDatasetClick: this.handleDatasetClick
                        })) : s.createElement(d, null)
                    }, t
                }(s.Component),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDataFromSession = function(e) {
                            return e.commercialLengthTotal
                        }, t.aggregateData = function(e) {
                            return t.props.aggregation.sum(e, function(e) {
                                return {
                                    value: e.commercialLengthTotal,
                                    date: e.interval.start
                                }
                            })
                        }, t.formatTooltipLabel = function(e) {
                            var t = e.value;
                            return Object(a.d)("{adTime} Ad Breaks", {
                                adTime: Object(i.b)(t, i.a.HumanizedShort)
                            }, "ChannelAnalyticsAdBreaks")
                        }, t.formatYAxis = function(e) {
                            var t = Number(e);
                            if (isNaN(t)) return e;
                            var n = Math.floor(100 * t) / 100;
                            return Object(i.b)(n, i.a.HumanizedShort)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                            aggregation: this.props.aggregation,
                            datasetBuilders: [{
                                label: Object(a.d)("Ad Breaks", "ChannelAnalyticsAdBreaks"),
                                getDataFromSession: this.getDataFromSession,
                                aggregateDataFromSessions: this.aggregateData
                            }],
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatYAxis: this.formatYAxis
                        })
                    }, t
                }(s.Component),
                b = 60,
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDataFromSession = function(e) {
                            var t = Object(m.a)(e.interval) / b;
                            return t && Math.round(e.commercialLengthTotal / t)
                        }, t.aggregateData = function(e) {
                            return t.props.aggregation.ratio(e, function(e) {
                                var t = Object(m.a)(e.interval) / b;
                                return {
                                    numerator: e.commercialLengthTotal,
                                    denominator: t,
                                    date: e.interval.start
                                }
                            })
                        }, t.formatTooltipLabel = function(e) {
                            var t = e.value;
                            return Object(a.d)("{adTime} Ad Time Per Hour", {
                                adTime: Object(i.b)(t, i.a.HumanizedShort)
                            }, "ChannelAnalyticsAdTimePerHour")
                        }, t.formatYAxis = function(e) {
                            var t = Number(e);
                            if (isNaN(t)) return e;
                            var n = Math.floor(100 * t) / 100;
                            return Object(i.b)(n, i.a.HumanizedShort)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                            aggregation: this.props.aggregation,
                            datasetBuilders: [{
                                label: Object(a.d)("Ad Time Per Hour", "ChannelAnalyticsAdTimePerHour"),
                                getDataFromSession: this.getDataFromSession,
                                aggregateDataFromSessions: this.aggregateData
                            }],
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatYAxis: this.formatYAxis
                        })
                    }, t
                }(s.Component),
                y = function(e) {
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
                        return s.createElement(h, {
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
                v = function(e) {
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
                                    weight: Object(m.a)(e.interval),
                                    value: e.avgViewerCount,
                                    date: e.interval.start
                                }
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
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
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDataFromSession = function(e) {
                            return e.messagesTotal
                        }, t.aggregateData = function(e) {
                            return t.props.aggregation.weightedAverage(e, function(e) {
                                return {
                                    weight: Object(m.a)(e.interval),
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
                        return s.createElement(h, {
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
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDataFromSession = function(e) {
                            return e.uniqueChatters
                        }, t.aggregateData = function(e) {
                            return t.props.aggregation.weightedAverage(e, function(e) {
                                return {
                                    weight: Object(m.a)(e.interval),
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
                        return s.createElement(h, {
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
                                    o = Object(m.b)(i.interval);
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
                        return s.createElement(h, {
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
                w = function(e) {
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
                        return s.createElement(h, {
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
                        return t.formatTooltipLabel = function(e) {
                            return Object(a.d)("{percent} Host/Raid Viewers", {
                                percent: Object(a.f)(e.value, {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 0,
                                    style: "percent"
                                })
                            }, "ChannelAnalyticsHostRaidViewers")
                        }, t.getDataFromSession = function(e) {
                            return e.hostedRaidedPercentage
                        }, t.aggregateData = function(e) {
                            return t.props.aggregation.weightedAverage(e, function(e) {
                                return {
                                    weight: Object(m.a)(e.interval),
                                    value: e.hostedRaidedPercentage,
                                    date: e.interval.start
                                }
                            })
                        }, t.formatYAxis = function(e) {
                            var t = Number(e);
                            return isNaN(t) ? e : Object(a.f)(t, {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 0,
                                style: "percent"
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                            aggregation: this.props.aggregation,
                            datasetBuilders: [{
                                label: Object(a.d)("Host/Raid Viewers", "ChannelAnalyticsHostRaidViewers"),
                                getDataFromSession: this.getDataFromSession,
                                aggregateDataFromSessions: this.aggregateData
                            }],
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatYAxis: this.formatYAxis
                        })
                    }, t
                }(s.Component),
                O = function(e) {
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
                        return s.createElement(h, {
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
                k = function(e) {
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
                        return s.createElement(h, {
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
                        return s.createElement(h, {
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
                T = function(e) {
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
                        return s.createElement(h, {
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
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.formatTooltipLabel = function(e) {
                            var t = e.value <= 10 && 0 !== e.value ? 2 : 0,
                                n = Object(a.f)(e.value, {
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
                                r = Object(a.f)(e.value, {
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
                        if (this.props.analyticsResponse.revenue.isLoading) return s.createElement(c.a, null);
                        var e = this.props.analyticsResponse.revenue.streams;
                        return e.getTotalAmountAllStreams() ? s.createElement(l.a, {
                            labels: this.props.aggregation.datesAsLabels,
                            datasets: [{
                                label: Object(a.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                                data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                            }, {
                                label: Object(a.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                                data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                            }, {
                                label: Object(a.d)("Gifted subs", "ChannelAnalyticsTopStatsRevenue"),
                                data: this.props.aggregation.sum(e.giftSubscriptions.timeseries, this.getAggregationData)
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
                            }, {
                                label: Object(a.d)("Bounties", "ChannelAnalyticsTopStatsRevenue"),
                                data: this.props.aggregation.sum(e.bountyBoard.timeseries, this.getAggregationData)
                            }],
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatTooltipTitle: this.formatTooltipTitle,
                            formatXAxis: this.props.aggregation.formatShortDateFromLabel
                        }) : s.createElement(d, null)
                    }, t.prototype.getAggregationData = function(e) {
                        return {
                            value: e.amount,
                            date: e.date
                        }
                    }, t
                }(s.Component),
                D = n("A2wf"),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.formatTooltipLabel = function(e) {
                            return e.label === t.paidSubMessage ? Object(a.d)("{numOfSubs, plural, one {# Paid sub} other {# Paid subs}}", {
                                numOfSubs: e.value
                            }, "ChannelAnalyticsTopStatsSubscriptions") : e.label === t.giftedSubMessage ? Object(a.d)("{numOfSubs, plural, one {# Gifted sub} other {# Gifted subs}}", {
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
                            var n = e.label,
                                a = e.time,
                                r = e.value;
                            if (n !== t.primeSubMessage && r && a) {
                                if (n === t.giftedSubMessage) {
                                    var s = t.buildProductBreakdowns(e, t.props.analyticsResponse.subCounts.streams.giftSubscriptions.timeseries);
                                    return Object.keys(s).map(function(e) {
                                        return Object(D.a)(Number(e), s[e])
                                    })
                                }
                                var i = t.buildProductBreakdowns(e, t.props.analyticsResponse.subCounts.streams.twitchSubscriptions.timeseries);
                                return Object.keys(i).map(function(e) {
                                    return Object(D.b)(Number(e), i[e])
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.analyticsResponse.subCounts !== e.analyticsResponse.subCounts || !this.props.aggregation.isEqual(e.aggregation)
                    }, t.prototype.render = function() {
                        if (this.props.analyticsResponse.subCounts.isLoading) return s.createElement(c.a, null);
                        var e = this.props.analyticsResponse.subCounts.streams;
                        if (!e.getTotalSubCount()) return s.createElement(d, null);
                        var t = [{
                            label: this.paidSubMessage,
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: this.primeSubMessage,
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: this.giftedSubMessage,
                            data: this.props.aggregation.sum(e.giftSubscriptions.timeseries, this.getAggregationData)
                        }];
                        return s.createElement(l.a, {
                            labels: this.props.aggregation.dates.map(function(e) {
                                return e.getTime().toString()
                            }),
                            datasets: t,
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatTooltipTitle: this.formatTooltipTitle,
                            formatTooltipAfterLabel: this.formatTooltipAfterLabel
                        })
                    }, Object.defineProperty(t.prototype, "paidSubMessage", {
                        get: function() {
                            return Object(a.d)("Paid subs", "ChannelAnalyticsTopStatsSubscriptions")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "primeSubMessage", {
                        get: function() {
                            return Object(a.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsSubscriptions")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftedSubMessage", {
                        get: function() {
                            return Object(a.d)("Gifted subs", "ChannelAnalyticsTopStatsSubscriptions")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getAggregationData = function(e) {
                        return {
                            value: e.count,
                            date: e.date
                        }
                    }, t.prototype.buildProductBreakdowns = function(e, t) {
                        var n = this,
                            a = e.time,
                            r = {};
                        return t.forEach(function(e) {
                            if (n.props.aggregation.startOf(e.date).getTime() === a) {
                                var t = e.product.defaultPrice;
                                r[t] = r[t] || 0, r[t] += e.count
                            }
                        }), r
                    }, t
                }(s.Component),
                _ = n("rSo7"),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDataFromSession = function(e) {
                            return Object(m.a)(e.interval)
                        }, t.aggregateData = function(e) {
                            return t.props.aggregation.sum(e, function(e) {
                                return {
                                    value: Object(m.a)(e.interval),
                                    date: e.interval.start
                                }
                            })
                        }, t.formatTooltipLabel = function(e) {
                            var t = Math.floor(e.value);
                            return Object(_.a)(t)
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
                        }, t.formatYAxis = function(e) {
                            var t = Number(e);
                            if (isNaN(t)) return e;
                            var n = Math.floor(60 * t);
                            return Object(i.b)(n, i.a.HumanizedShort)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                            aggregation: this.props.aggregation,
                            formatTooltipLabel: this.formatTooltipLabel,
                            formatTooltipTitle: this.formatTooltipTitle,
                            formatYAxis: this.formatYAxis,
                            datasetBuilders: [{
                                label: Object(a.d)("Time Streamed", "ChannelAnalyticsTimeStreamed"),
                                getDataFromSession: this.getDataFromSession,
                                aggregateDataFromSessions: this.aggregateData
                            }]
                        })
                    }, t
                }(s.Component),
                V = n("TSYQ"),
                F = (n("H+Kr"), {
                    "data-test-selector": "up-trend-indicator"
                }),
                L = {
                    "data-test-selector": "down-trend-indicator"
                },
                N = {
                    "data-test-selector": "tab-selector"
                },
                M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = V("top-stats-tab", {
                            "top-stats-tab--active": this.props.isActive
                        });
                        return s.createElement(p.Xa, r.__assign({
                            className: e,
                            display: p.X.Flex,
                            flexGrow: 1
                        }, N), s.createElement(p.Pa, {
                            flexGrow: 1,
                            flexDirection: p.Aa.Column,
                            textAlign: p.Rb.Center
                        }, s.createElement(p.U, {
                            onClick: this.props.onClick,
                            to: this.props.linkTo,
                            className: "top-stats-tab__link",
                            replace: !0,
                            hoverUnderlineNone: !0
                        }, s.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexGrow: 1,
                            flexDirection: p.Aa.Column,
                            padding: {
                                left: 3,
                                right: 1,
                                y: 1
                            },
                            ellipsis: !0
                        }, s.createElement(p.W, {
                            className: "top-stats-tab__title",
                            type: p.Vb.H3
                        }, this.props.title, this.renderTrendIndicator()), s.createElement(p.W, {
                            type: p.Vb.H6,
                            color: p.O.Alt2,
                            title: this.props.subtitle,
                            ellipsis: !0
                        }, this.props.subtitle)))), this.props.children)
                    }, t.prototype.renderTrendIndicator = function() {
                        return this.props.trend ? this.props.trend > 0 ? s.createElement(p.Xa, {
                            display: p.X.Inline,
                            margin: {
                                left: .5
                            }
                        }, s.createElement(p.sb, r.__assign({
                            asset: p.tb.GlyphArrUp,
                            type: p.ub.Success
                        }, F))) : this.props.trend < 0 ? s.createElement(p.Xa, {
                            display: p.X.Inline,
                            margin: {
                                left: .5
                            }
                        }, s.createElement(p.sb, r.__assign({
                            asset: p.tb.GlyphArrDown,
                            type: p.ub.Warn
                        }, L))) : null : null
                    }, t
                }(s.Component),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.adBreaks,
                            n = this.previousAdBreaks,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(i.b)(t, i.a.HumanizedShort), s.createElement(M, {
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
                X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.adTimePerHour,
                            n = this.previousAdTimePerHour,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(i.b)(t, i.a.HumanizedShort), s.createElement(M, {
                            title: e,
                            trend: r.length ? Math.sign(t - n) : 0,
                            subtitle: Object(a.d)("Ad Time Per Hour", "ChannelAnalyticsTopStats"),
                            linkTo: this.props.linkTo,
                            isActive: this.props.isActive,
                            onClick: this.props.onClick
                        }, this.props.children)
                    }, Object.defineProperty(t.prototype, "adTimePerHour", {
                        get: function() {
                            var e = 0,
                                t = 0;
                            return (this.props.analyticsResponse.streamSessions.sessions || []).forEach(function(n) {
                                e += n.commercialLengthTotal, t += Object(m.a)(n.interval) / 60
                            }), t && Math.round(e / t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "previousAdTimePerHour", {
                        get: function() {
                            var e = 0,
                                t = 0;
                            return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).forEach(function(n) {
                                e += n.commercialLengthTotal, t += Object(m.a)(n.interval) / 60
                            }), t && Math.round(e / t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                            n = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(M, {
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
                        return e < 10 ? Object(a.f)(e, {
                            maximumFractionDigits: 1,
                            minimumFractionDigits: 1
                        }) : Object(a.f)(e, {
                            maximumFractionDigits: 0
                        })
                    }, t
                }(s.Component);

            function B(e, t) {
                var n = 0,
                    a = 0;
                return e.forEach(function(e) {
                    var r = t(e);
                    a += r.weight * r.value, n += r.weight
                }), 0 === n ? 0 : a / n
            }
            var U = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.averageViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                            n = this.averageViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(M, {
                            title: e,
                            trend: r.length ? Math.sign(t - n) : 0,
                            subtitle: Object(a.d)("Average Viewers", "ChannelAnalyticsTopStats"),
                            linkTo: this.props.linkTo,
                            isActive: this.props.isActive,
                            onClick: this.props.onClick
                        }, this.props.children)
                    }, t.prototype.averageViewers = function(e) {
                        return B(e, function(e) {
                            return {
                                weight: Object(m.a)(e.interval),
                                value: e.avgViewerCount
                            }
                        })
                    }, t.prototype.formatTitle = function(e) {
                        return e < 10 ? Object(a.f)(e, {
                            maximumFractionDigits: 1,
                            minimumFractionDigits: 1
                        }) : Object(a.f)(e, {
                            maximumFractionDigits: 0
                        })
                    }, t
                }(s.Component),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.averageMessages(this.props.analyticsResponse.streamSessions.sessions),
                            n = this.averageMessages(this.props.analyticsResponse.streamSessions.lookbackSessions),
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(t, {
                            maximumFractionDigits: 0
                        }), s.createElement(M, {
                            title: e,
                            trend: r.length ? Math.sign(t - n) : 0,
                            subtitle: Object(a.d)("Average Chat Messages", "ChannelAnalyticsTopStats"),
                            linkTo: this.props.linkTo,
                            isActive: this.props.isActive,
                            onClick: this.props.onClick
                        }, this.props.children)
                    }, t.prototype.averageMessages = function(e) {
                        return B(e, function(e) {
                            return {
                                weight: Object(m.a)(e.interval),
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
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(t, {
                            maximumFractionDigits: 0
                        }), s.createElement(M, {
                            title: e,
                            trend: r.length ? Math.sign(t - n) : 0,
                            subtitle: Object(a.d)("Average Chatters", "ChannelAnalyticsTopStats"),
                            linkTo: this.props.linkTo,
                            isActive: this.props.isActive,
                            onClick: this.props.onClick
                        }, this.props.children)
                    }, t.prototype.averageUniqueChatters = function(e) {
                        return B(e, function(e) {
                            return {
                                weight: Object(m.a)(e.interval),
                                value: e.uniqueChatters
                            }
                        })
                    }, t
                }(s.Component),
                G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.previousTotalClipViews,
                            n = this.totalClipViews,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(n, {
                            maximumFractionDigits: 0
                        }), s.createElement(M, {
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
                q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.clipsCreated,
                            n = this.previousClipsCreated,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(t), s.createElement(M, {
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
                        var e, t = this.hostRaidViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                            n = this.hostRaidViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), s.createElement(M, {
                            title: e,
                            trend: r.length ? Math.sign(t - n) : 0,
                            subtitle: Object(a.d)("Host/Raid Viewers", "ChannelAnalyticsTopStats"),
                            linkTo: this.props.linkTo,
                            isActive: this.props.isActive,
                            onClick: this.props.onClick
                        }, this.props.children)
                    }, t.prototype.hostRaidViewers = function(e) {
                        return B(e, function(e) {
                            return {
                                weight: Object(m.a)(e.interval),
                                value: e.hostedRaidedPercentage
                            }
                        })
                    }, t.prototype.formatTitle = function(e) {
                        return Object(a.f)(e, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0,
                            style: "percent"
                        })
                    }, t
                }(s.Component),
                K = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.liveViews,
                            n = this.previousLiveViews,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(t), s.createElement(M, {
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
                Q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.maxViewers,
                            n = this.previousMaxViewers,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(t), s.createElement(M, {
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
                J = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.minutesWatched,
                            n = this.previousMinutesWatched,
                            r = this.props.analyticsResponse.streamSessions.sessions;
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(a.f)(t), s.createElement(M, {
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
                Z = function(e) {
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
                        }(t), s.createElement(M, {
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
            var $, ee, te, ne = n("Knvm"),
                ae = (n("4+Xb"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                            t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                        return s.createElement(M, {
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
                                    return s.createElement(p.W, {
                                        className: "top-stats-tab-revenue__currency",
                                        fontSize: p.Ca.Size5,
                                        type: p.Vb.Span,
                                        key: t
                                    }, e.value);
                                case "fraction":
                                case "decimal":
                                    return s.createElement(p.W, {
                                        className: "top-stats-tab-revenue__fraction",
                                        fontSize: p.Ca.Size4,
                                        type: p.Vb.Span,
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
                        return e = this.props.analyticsResponse.subCounts.isLoading || !t ? "—" : Object(a.f)(t, {
                            maximumFractionDigits: 0
                        }), s.createElement(M, {
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
                        return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(_.a)(t), s.createElement(M, {
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
                                return e + Object(m.a)(t.interval)
                            }, 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "previousTimeStreamed", {
                        get: function() {
                            return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                                return e + Object(m.a)(t.interval)
                            }, 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component);
            ! function(e) {
                e.AdBreaks = "ad-breaks", e.AdTimePerHour = "ad-time-per-hour", e.AverageUniqueViewers = "avg-unique-viewers", e.AverageViewers = "avg-viewers", e.ChatMessages = "avg-chat-messages", e.Chatters = "avg-chatters", e.ClipsCreated = "clips-created", e.ClipViews = "clip-views", e.HostRaidViewers = "host-raid-viewers", e.LiveViews = "live-views", e.MaxViewers = "max-viewers", e.MinutesWatched = "minutes-watched", e.NewFollowers = "new-followers", e.Revenue = "revenue", e.Subscriptions = "subscriptions", e.TimeStreamed = "time-streamed"
            }(ee || (ee = {})),
            function(e) {
                e[e.StreamSummaries = 0] = "StreamSummaries", e[e.Revenue = 1] = "Revenue"
            }(te || (te = {}));
            var ie = (($ = {})[ee.AverageViewers] = {
                    title: function() {
                        return Object(a.d)("Average Viewers", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: U,
                    Chart: v,
                    dataGroup: te.StreamSummaries
                }, $[ee.LiveViews] = {
                    title: function() {
                        return Object(a.d)("Live Views", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: K,
                    Chart: O,
                    dataGroup: te.StreamSummaries
                }, $[ee.NewFollowers] = {
                    title: function() {
                        return Object(a.d)("New Followers", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: Z,
                    Chart: T,
                    dataGroup: te.StreamSummaries
                }, $[ee.Subscriptions] = {
                    title: function() {
                        return Object(a.d)("Subscriptions", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: re,
                    Chart: R,
                    dataGroup: te.Revenue
                }, $[ee.Revenue] = {
                    title: function() {
                        return Object(a.d)("Revenue", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: ae,
                    Chart: x,
                    dataGroup: te.Revenue
                }, $[ee.MinutesWatched] = {
                    title: function() {
                        return Object(a.d)("Minutes Watched", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: J,
                    Chart: A,
                    dataGroup: te.StreamSummaries
                }, $[ee.TimeStreamed] = {
                    title: function() {
                        return Object(a.d)("Time Streamed", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: se,
                    Chart: P,
                    dataGroup: te.StreamSummaries
                }, $[ee.MaxViewers] = {
                    title: function() {
                        return Object(a.d)("Max Viewers", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: Q,
                    Chart: k,
                    dataGroup: te.StreamSummaries
                }, $[ee.AverageUniqueViewers] = {
                    title: function() {
                        return Object(a.d)("Average Unique Viewers", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: I,
                    Chart: y,
                    dataGroup: te.StreamSummaries
                }, $[ee.HostRaidViewers] = {
                    title: function() {
                        return Object(a.d)("Host/Raid Viewers", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: Y,
                    Chart: j,
                    dataGroup: te.StreamSummaries
                }, $[ee.Chatters] = {
                    title: function() {
                        return Object(a.d)("Average Chatters", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: H,
                    Chart: C,
                    dataGroup: te.StreamSummaries
                }, $[ee.ChatMessages] = {
                    title: function() {
                        return Object(a.d)("Average Chat Messages", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: z,
                    Chart: S,
                    dataGroup: te.StreamSummaries
                }, $[ee.ClipsCreated] = {
                    title: function() {
                        return Object(a.d)("Clips Created", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: q,
                    Chart: w,
                    dataGroup: te.StreamSummaries
                }, $[ee.ClipViews] = {
                    title: function() {
                        return Object(a.d)("Clip Views", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: G,
                    Chart: E,
                    dataGroup: te.StreamSummaries
                }, $[ee.AdBreaks] = {
                    title: function() {
                        return Object(a.d)("Ad Breaks", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: W,
                    Chart: g,
                    dataGroup: te.StreamSummaries
                }, $[ee.AdTimePerHour] = {
                    title: function() {
                        return Object(a.d)("Ad Time Per Hour", "ChannelAnalyticsTopStatsDropdown")
                    },
                    Tab: X,
                    Chart: f,
                    dataGroup: te.StreamSummaries
                }, $),
                oe = [ee.AverageViewers, ee.LiveViews, ee.NewFollowers, ee.Subscriptions, ee.Revenue],
                le = [ee.AverageViewers, ee.LiveViews, ee.NewFollowers, ee.ChatMessages, ee.MinutesWatched],
                ce = [ee.AverageViewers, ee.LiveViews, ee.NewFollowers, ee.MinutesWatched, ee.TimeStreamed, ee.MaxViewers, ee.AverageUniqueViewers, ee.HostRaidViewers, ee.Chatters, ee.ChatMessages, ee.ClipsCreated, ee.ClipViews, ee.AdBreaks, ee.AdTimePerHour],
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
                return ee
            }), n.d(t, "b", function() {
                return te
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
        ct6I: function(e, t, n) {},
        dfkd: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("NAv5"),
                r = n("/7QA"),
                s = n("TDse"),
                i = function() {
                    function e(e, t) {
                        var n = this;
                        switch (this.formatDateFromLabel = function(e) {
                            return n.formatDate(new Date(Number(e)))
                        }, this.formatShortDateFromLabel = function(e) {
                            return n.formatShortDate(new Date(Number(e)))
                        }, this.aggregationInterval = e, this.interval = t, this.aggregationInterval) {
                            case s.a.Day:
                                this.addInterval = a.addDays, this.startOf = a.startOfDay, this.formatDate = function(e) {
                                    return Object(r.c)(e, {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric"
                                    })
                                }, this.formatShortDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        day: "numeric"
                                    })
                                };
                                break;
                            case s.a.Week:
                                this.addInterval = a.addWeeks, this.startOf = a.startOfWeek, this.formatDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        day: "numeric"
                                    }) + " – " + Object(r.c)(Object(a.endOfWeek)(e), {
                                        month: "short",
                                        day: "numeric"
                                    })
                                }, this.formatShortDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        day: "numeric"
                                    })
                                };
                                break;
                            case s.a.Month:
                                this.addInterval = a.addMonths, this.startOf = a.startOfMonth, this.formatDate = function(e) {
                                    return Object(r.c)(e, {
                                        month: "short",
                                        year: "numeric"
                                    })
                                }, this.formatShortDate = function(e) {
                                    return Object(r.c)(e, {
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
                    }, e.prototype.ratio = function(e, t) {
                        var n = this,
                            a = new Map;
                        return e.forEach(function(e) {
                            var r = t(e),
                                s = r.numerator,
                                i = r.denominator,
                                o = r.date,
                                l = n.startOf(o).getTime(),
                                c = a.get(l);
                            c || (c = {
                                numerator: 0,
                                denominator: 0
                            }, a.set(l, c)), c.numerator += s, c.denominator += i
                        }), this.datesAsNumbers.map(function(e) {
                            var t = a.get(e) || {
                                numerator: 0,
                                denominator: 1
                            };
                            return Math.round(t.numerator / t.denominator)
                        })
                    }, Object.defineProperty(e.prototype, "isByDay", {
                        get: function() {
                            return this.aggregationInterval === s.a.Day
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isByWeek", {
                        get: function() {
                            return this.aggregationInterval === s.a.Week
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isByMonth", {
                        get: function() {
                            return this.aggregationInterval === s.a.Month
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(e) {
                        return e.aggregationInterval === this.aggregationInterval
                    }, e.prototype.datesInRange = function(e) {
                        for (var t = [], n = this.startOf(e.start); n <= e.end;) t.push(n), n = this.addInterval(n, 1);
                        return t
                    }, e
                }()
        },
        dxV6: function(e, t, n) {},
        fWgO: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DownloadSubsListMutation"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "GenerateSubscribersCSVInput"
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
                                value: "generateSubscribersCSV"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "channelID"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 127
                }
            };
            n.loc.source = {
                body: "mutation DownloadSubsListMutation($input: GenerateSubscribersCSVInput!) {\ngenerateSubscribersCSV(input: $input) {\nchannelID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "j/Uj": function(e, t, n) {},
        jI6X: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("mrSG"),
                r = n("bM8u"),
                s = n("ueVa"),
                i = function() {
                    function e(e) {
                        this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = this.extractSubscriptionProducts(e.twitchSubscriptionProducts);
                        var t = this.extractTimeseries(this.twitchSubscriptionProducts);
                        this.twitchSubscriptions = this.getTimeseriesWithTotal(t), this.giftSubscriptionProducts = this.extractSubscriptionProducts(e.giftSubscriptionProducts);
                        var n = this.extractTimeseries(this.giftSubscriptionProducts);
                        this.giftSubscriptions = this.getTimeseriesWithTotal(n)
                    }
                    return e.buildEmpty = function() {
                        return new e(s.a)
                    }, e.prototype.filter = function(t) {
                        return new e({
                            primeSubscriptions: this.primeSubscriptions.timeseries.filter(t),
                            twitchSubscriptionProducts: this.twitchSubscriptionProducts.map(function(e) {
                                return a.__assign({}, e, {
                                    timeseries: e.timeseries.filter(t)
                                })
                            }),
                            giftSubscriptionProducts: (this.giftSubscriptionProducts || []).map(function(e) {
                                return a.__assign({}, e, {
                                    timeseries: e.timeseries.filter(t)
                                })
                            })
                        })
                    }, e.prototype.getTotalSubCount = function() {
                        return this.primeSubscriptions.total + this.twitchSubscriptions.total + this.giftSubscriptions.total
                    }, e.prototype.getTimeseriesWithTotal = function(e) {
                        return {
                            timeseries: e,
                            total: Math.floor(e.reduce(function(e, t) {
                                return e + t.count
                            }, 0))
                        }
                    }, e.prototype.extractTimeseries = function(e) {
                        return e.reduce(function(e, t) {
                            return e.concat(t.timeseries)
                        }, []).sort(function(e, t) {
                            return e.date.getTime() - t.date.getTime()
                        })
                    }, e.prototype.extractSubscriptionProducts = function(e) {
                        var t = this;
                        return (e = e.length ? e : r.c).map(function(e) {
                            return a.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                        }).sort(function(e, t) {
                            return e.defaultPrice - t.defaultPrice
                        })
                    }, e
                }()
        },
        "mZc/": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("Ue10"),
                i = (n("NCCa"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isHovered: !1
                        }, t.handleMouseEnter = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleMouseLeave = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.direction,
                            a = e.size;
                        return r.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, r.createElement(s.Eb, {
                            display: s.X.Flex,
                            margin: {
                                x: 1
                            },
                            position: s.jb.Relative
                        }, r.createElement(s.Eb, {
                            className: "hoverable-icon",
                            display: s.X.InlineFlex,
                            color: s.O.Alt2,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.sb, {
                            asset: s.tb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), r.createElement(s.u, {
                            show: this.state.isHovered,
                            direction: n,
                            size: a
                        }, r.createElement(s.Xa, {
                            padding: {
                                x: 1,
                                y: 1
                            }
                        }, t))))
                    }, t.defaultProps = {
                        direction: s.v.Bottom,
                        size: s.w.Small
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return i
            })
        },
        mvbP: function(e, t, n) {},
        qZmV: function(e, t, n) {},
        qnLe: function(e, t, n) {},
        sBDM: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("Ue10");
            n("qnLe");

            function s(e) {
                return a.createElement(r.Eb, {
                    className: "insight-panel-btn",
                    background: e.background || r.r.Alt,
                    display: r.X.Flex,
                    flexGrow: 1,
                    flexWrap: r.Ba.NoWrap,
                    borderTop: e.borderTop
                }, a.createElement(r.z, {
                    disabled: e.disabled,
                    type: r.F.Text,
                    linkTo: e.linkTo,
                    onClick: e.onClick,
                    targetBlank: e.targetBlank,
                    fullWidth: !0
                }, a.createElement(r.W, {
                    color: e.color
                }, e.message)))
            }
            n.d(t, "a", function() {
                return s
            })
        },
        ueVa: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return h
            });
            var a = n("mrSG"),
                r = n("NAv5"),
                s = n("cr+I"),
                i = n("P+v/"),
                o = n("u2gS"),
                l = n("6XEL"),
                c = n("yLSs"),
                u = {
                    giftSubscriptionProducts: [],
                    primeSubscriptions: [],
                    twitchSubscriptionProducts: []
                },
                p = function(e) {
                    var t = e.gift_subscriptions || [];
                    return {
                        giftSubscriptionProducts: d(t),
                        primeSubscriptions: m(e.prime_subscriptions),
                        twitchSubscriptionProducts: d(e.twitch_subscriptions)
                    }
                },
                d = function(e) {
                    return e.map(function(e) {
                        var t = {
                            defaultPrice: e.default_price,
                            productID: e.product_id
                        };
                        return a.__assign({}, t, {
                            timeseries: m(e.sub_counts, t)
                        })
                    })
                },
                m = function(e, t) {
                    return e.map(function(e) {
                        return {
                            count: e.count,
                            date: Object(i.a)(e.timestamp),
                            product: t
                        }
                    })
                };

            function h(e, t) {
                return a.__awaiter(this, void 0, Promise, function() {
                    var n, i, d, m;
                    return a.__generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return e.role === o.d.None ? [2, {
                                    isError: !1,
                                    subscriptions: u
                                }] : (n = "/kraken/channels/" + e.id + "/dashboard/sub_counts", i = s.stringify(a.__assign({}, Object(c.a)(t.start, Object(r.addDays)(t.end, 1)), {
                                    fraction: "day"
                                })), d = [n, i].join("?"), [4, Object(l.c)({
                                    path: d
                                })]);
                            case 1:
                                return (m = h.sent()).isError() ? [2, {
                                    isError: !0,
                                    subscriptions: u
                                }] : [2, {
                                    isError: !1,
                                    subscriptions: p(m.body)
                                }]
                        }
                    })
                })
            }
        },
        "uy/s": function(e, t) {
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isEditor"
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
                    end: 164
                }
            };
            n.loc.source = {
                body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\nself {\nisEditor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "wOe/": function(e, t, n) {},
        y8Ud: function(e, t, n) {},
        yLSs: function(e, t, n) {
            "use strict";

            function a(e, t) {
                return {
                    start_date: e.toJSON(),
                    end_date: t.toJSON()
                }
            }
            n.d(t, "a", function() {
                return a
            })
        },
        ySo8: function(e, t, n) {
            "use strict";
            var a = n("4sTx");
            n.d(t, "URLStore", function() {
                return a.a
            });
            var r = n("NZO2");
            n.d(t, "RevenueStreams", function() {
                return r.a
            });
            var s = n("jI6X");
            n.d(t, "SubCountStreams", function() {
                return s.a
            });
            n("SAvX")
        },
        z0Ka: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("WyAD"),
                s = n("q1tI"),
                i = n("/7QA"),
                o = n("OGSR"),
                l = n("Ue10"),
                c = (n("R4hK"), l.R.HintedGrey8),
                u = [l.R.Purple8, l.R.PrimeBlue, l.R.Purple6, l.R.Purple11, "#3dc6ae", l.R.Orange, "#69d420", l.R.Yellow],
                p = "rgba(0, 0, 0, 0)",
                d = l.R.HintedGrey11,
                m = l.R.HintedGrey15,
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
                                                fontColor: c,
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
                                            ticks: a.__assign({
                                                min: 0,
                                                maxTicksLimit: 6,
                                                fontColor: c,
                                                fontSize: 10,
                                                padding: 5
                                            }, t.formatYAxisConfig),
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
                                            fontColor: c,
                                            padding: 15
                                        }
                                    },
                                    tooltips: {
                                        backgroundColor: "rgba(0,0,0,0.95)",
                                        intersect: !1,
                                        mode: "index",
                                        titleFontColor: m,
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
                                    responsive: !0,
                                    maintainAspectRatio: !1
                                }
                            };
                            t.myChart = new r(e, n)
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
                            return isNaN(s) ? e.yLabel : Object(i.f)(Number(e.yLabel))
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
                                borderColor: p,
                                backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(l.Xa, {
                            className: "top-stats-chart",
                            position: l.jb.Relative
                        }, s.createElement(o.a, {
                            onCanvasReady: this.handleCanvasReady
                        }))
                    }, t.prototype.componentDidUpdate = function() {
                        this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update())
                    }, t.prototype.datasetsWithColor = function() {
                        return this.props.datasets.map(function(e, t) {
                            return {
                                label: e.label,
                                data: e.data,
                                backgroundColor: e.color || u[t % u.length],
                                borderWidth: 0
                            }
                        })
                    }, Object.defineProperty(t.prototype, "formatYAxisConfig", {
                        get: function() {
                            var e = this.props.formatYAxis;
                            return e ? {
                                callback: function(t) {
                                    return e(t)
                                }
                            } : {}
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component);
            n.d(t, "a", function() {
                return h
            })
        }
    }
]);