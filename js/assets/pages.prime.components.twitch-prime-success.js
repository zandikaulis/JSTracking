(window.webpackJsonp = window.webpackJsonp || []).push([
    [169], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var r = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function a(e) {
                return {
                    type: r,
                    languagePreferences: e
                }
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || i.PageviewLocation.None
                },
                c = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: i.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: i.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: i.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                l = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: i.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: i.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, c, l, d, u = this;
                        return r.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return r.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return r.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = n.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return n = m.sent(), c = n.filter(function(e) {
                                        return !!e
                                    }), l = c.map(function() {
                                        return i.TwitchDataType.Game
                                    }), d = c.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: c.length,
                                        rendered_item_list: c,
                                        rendered_item_types: l,
                                        rendered_items_viewcounts: d,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return m.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0LAi": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("MXoD"),
                o = n("2xye"),
                s = n("Ue10"),
                c = function(e) {
                    var t = e.tags;
                    return void 0 !== e.tagNumberLimit && e.tagNumberLimit > 0 && (t = t.slice(0, e.tagNumberLimit)), a.createElement(s.Wa, {
                        display: s.X.InlineBlock,
                        fullWidth: !0
                    }, t.map(function(t) {
                        var n = r.__assign({}, e.linkTo) || {};
                        e.linkPath && (n.pathname = e.linkPath), n.pathname && (n.pathname = n.pathname.replace(":tagID", t.id));
                        return a.createElement(s.yb, {
                            key: t.id,
                            fontSize: s.Ba.Size7,
                            display: s.X.InlineBlock,
                            margin: {
                                right: .5,
                                bottom: .5
                            }
                        }, a.createElement(s.Hb, {
                            label: t.localizedName,
                            type: e.style,
                            linkTo: Object(i.a)({
                                content: o.PageviewContent.Tag
                            }, n),
                            onClick: function() {
                                e.callback && e.callback(t)
                            },
                            "data-a-target": t.localizedName
                        }))
                    }))
                };
            n.d(t, "a", function() {
                return c
            })
        },
        "1mcJ": function(e, t, n) {},
        "2BM9": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOffers_ClaimedPrimeOffer"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
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
                                value: "primeOffers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
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
                                                value: "hasEntitlement"
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
                    end: 138
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_ClaimedPrimeOffer($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "2MIk": function(e, t, n) {},
        "3sMy": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(r || (r = {}))
        },
        "5NSO": function(e, t, n) {},
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function c(e, t) {
                var n = this;
                return function(i) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, c;
                        return r.__generator(this, function(r) {
                            return n = new Set(d()), t ? n.add(e) : n.delete(e), c = Array.from(n), a.m.set(s, c), i(Object(o.b)(c)), [2]
                        })
                    })
                }
            }

            function l() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return a.m.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function d() {
                return a.m.get(s, []).filter(function(e) {
                    return i.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            });
            var r, a, i = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(i.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(i.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(i.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(i.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(i.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(i.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(i.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(i.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(i.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(i.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(i.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(i.d)("{monthCount}mo", {
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
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < u.length - c && delete d[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(d);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(d);
                var m = ":",
                    p = !1;
                switch (i.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        m = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        p = !0
                }
                var g = d.seconds || 0,
                    h = d.minutes || 0,
                    f = d.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var v = (p ? l(f, 2) : f) + m + l(h, 2);
                        return t === a.ClockHMS && (v += m + l(g, 2)), v;
                    case a.ClockMS:
                        return (p ? l(h, 2) : h) + m + l(g, 2)
                }
            }

            function l(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(r || (r = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(a || (a = {}))
        },
        "80G/": function(e, t, n) {},
        "9x/k": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
                }(r || (r = {}))
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, r) {
                                "string" != typeof r && (r = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, r)
                            }, e
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                c = n.shelf,
                                l = Object(i.f)(c.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: l,
                                        row_position: s
                                    }
                                };
                            return a.createElement(e, r.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(a.Component)
                }
            }
        },
        B3R5: function(e, t, n) {},
        E8KT: function(e, t, n) {},
        ER97: function(e, t, n) {},
        EU9V: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("oJmH"),
                o = n("mLw1"),
                s = n("/7QA"),
                c = n("yR8l"),
                l = n("V+GM"),
                d = n("NvVO"),
                u = n("2xye"),
                m = n("GnwI"),
                p = n("igVx"),
                g = n("jmDq"),
                h = n("O4UZ"),
                f = n("uzin"),
                v = n("/MKj"),
                k = n("OhOW"),
                y = n("oB8h"),
                b = n("rShu"),
                w = n("hX9f"),
                C = n("Ue10"),
                T = n("bk9Q"),
                _ = (n("ER97"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (e.error) return null;
                        if (e.loading) return a.createElement(C.Wa, null, a.createElement(C.Ya, {
                            fillContent: !0
                        }));
                        var t = e.directory,
                            n = (t && t.streams && t.streams.edges || []).filter(function(e) {
                                var t = e.node;
                                return t && t.id && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                            }).map(function(e, t) {
                                var n = P(e);
                                if (n) return a.createElement(w.b, {
                                    directoryName: "fortnite",
                                    directoryType: b.a.Games,
                                    streamIndex: t,
                                    streamNode: n,
                                    key: n.id
                                })
                            });
                        return a.createElement(C.Wa, {
                            className: "twitch-prime-streamers__tower",
                            flexShrink: 0,
                            "data-target": "twitch-prime-streamers",
                            "data-test-selector": "twitch-prime-streamers-grid",
                            padding: {
                                x: 2
                            },
                            margin: {
                                x: "auto"
                            }
                        }, a.createElement(C.Wa, {
                            margin: {
                                y: 1
                            },
                            className: "twitch-prime-streamers__count"
                        }, a.createElement(C.W, {
                            type: C.Ob.H3,
                            color: C.O.Link,
                            bold: !0
                        }, Object(s.d)("Check out Fortnite on Twitch.tv", "TwitchPrimeStreamers")), a.createElement(C.W, {
                            type: C.Ob.H4,
                            color: C.O.Link
                        }, Object(s.d)("{viewers, number} viewers right now", {
                            viewers: e.directory && e.directory.viewersCount || 0
                        }, "TwitchPrimeStreamers"))), a.createElement(C.Ub, {
                            gutterSize: C.Wb.Small,
                            childWidth: C.Vb.Large,
                            children: n,
                            "data-test-selector": "twitch-prime-streamers-tower",
                            center: !0
                        }), a.createElement(C.Wa, {
                            margin: {
                                y: 1
                            },
                            className: "twitch-prime-streamers__game-page",
                            textAlign: C.Kb.Center
                        }, a.createElement(C.U, {
                            to: "/directory/game/Fortnite",
                            hoverUnderlineNone: !0,
                            type: C.V.Default
                        }, Object(s.d)("View more Fortnite on Twitch.tv >", "TwitchPrimeStreamers"))))
                    }, t
                }(a.Component)),
                P = function(e) {
                    var t = null,
                        n = e.node;
                    return n && (t = {
                        id: n.id,
                        title: n.title || "",
                        viewersCount: n.viewersCount || 0,
                        previewImageURL: n.previewImageURL || "",
                        broadcaster: n.broadcaster ? {
                            id: n.broadcaster.id,
                            login: n.broadcaster.login,
                            displayName: n.broadcaster.displayName,
                            roles: null,
                            profileImageURL: ""
                        } : null,
                        game: null,
                        type: y.a.Live
                    }), t
                },
                I = Object(i.compose)(Object(m.b)("TwitchPrimeStreamers"), Object(c.a)(T, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent("fortnite"),
                                limit: 4,
                                languages: e.languagePreferences
                            }
                        }
                    }
                }))(_);
            var E = Object(v.connect)(function(e) {
                    return {
                        languagePreferences: Object(k.a)(e)
                    }
                }, null)(I),
                S = n("nNY8"),
                N = n("2BM9"),
                x = (n("QINq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getFortniteOffer = function() {
                            var e = t.props.data,
                                n = e && e.primeOffers,
                                r = s.b.get(S.b, S.a),
                                a = n && n.filter(function(e) {
                                    return e && e.id === r
                                });
                            return a && a[0]
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (e && e.loading) return a.createElement(C.Ya, {
                            fillContent: !0
                        });
                        var t = this.getFortniteOffer();
                        return e && e.error || !t || !t.self || !t.self.hasEntitlement ? a.createElement(o.a, {
                            to: "/prime/fortnite"
                        }) : a.createElement(C.Wa, {
                            className: "twitch-prime-success",
                            "data-test-selector": "twitch-prime-success-page"
                        }, a.createElement(C.Wa, {
                            textAlign: C.Kb.Center,
                            className: "twitch-prime-success__header"
                        }, a.createElement(f.a, {
                            renderOfferImage: !0
                        }, a.createElement(C.Wa, null, a.createElement(C.Wa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(C.W, {
                            type: C.Ob.H1,
                            color: C.O.Overlay,
                            transform: C.Nb.Uppercase,
                            bold: !0
                        }, Object(s.d)("Loot acquired!", "FortniteSuccess"))), a.createElement(C.Wa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(C.W, {
                            type: C.Ob.H3,
                            color: C.O.Overlay,
                            transform: C.Nb.Uppercase,
                            bold: !0
                        }, Object(s.d)("Load up Fortnite and your rewards will be waiting for you!", "FortniteSuccess")))), a.createElement(C.Wa, {
                            padding: {
                                y: 2
                            }
                        }, a.createElement(C.W, {
                            type: C.Ob.H3,
                            color: C.O.Overlay,
                            bold: !0
                        }, Object(s.d)("Problems? <x:link>Click here ›</x:link>", {
                            "x:link": function(e) {
                                return a.createElement(C.U, {
                                    to: "#faq",
                                    hoverUnderlineNone: !1,
                                    type: C.V.Overlay
                                }, e)
                            }
                        }, "FortniteSuccess"))))), a.createElement(E, null), a.createElement(p.a, {
                            hash: this.props.location.hash.replace("#", "")
                        }), a.createElement(g.a, {
                            partnerSocialLink: "https://twitter.com/FortniteGame",
                            partnerSocialText: "@FortniteGame"
                        }))
                    }, t
                }(a.Component)),
                O = Object(i.compose)(Object(c.a)(N, {
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(h.f)()
                            }
                        }
                    }
                }), Object(m.b)("TwitchPrimeSuccessPage", {
                    destination: d.a.TwitchPrimeSuccessPage
                }), Object(l.a)({
                    location: u.PageviewLocation.TwitchPrimeSuccessPage
                }))(x);
            n.d(t, "TEST_SELECTOR", function() {
                return "twitch-prime-success-page"
            }), n.d(t, "TwitchPrimeSuccessPageComponent", function() {
                return x
            }), n.d(t, "TwitchPrimeSuccessPage", function() {
                return O
            })
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                c = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap
                        }, a.createElement(s.Ta, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Row,
                            padding: .5
                        }, a.createElement(s.yb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.Za.Hidden,
                            position: s.eb.Relative
                        }, a.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, a.createElement(s.S, r.__assign({}, e))), a.createElement(s.yb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Va.Center,
                            position: s.eb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(s.nb, {
                            asset: s.ob.Play,
                            type: s.pb.Inherit
                        }))), a.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(s.W, null, this.props.gameChange.label)), a.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                l = n("0INk"),
                d = n("8/mp"),
                u = n("eJ65"),
                m = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(l.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(s.Wa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.eb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.ob.ViewerList
                        }, a.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Row
                        }, a.createElement(s.W, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(s.Wa, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(s.bb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, a.createElement(s.Wa, {
                            overflow: s.Za.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexWrap: s.Aa.NoWrap
                        }, a.createElement(s.Wa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(s.Wa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Aa.NoWrap
                        }, a.createElement(d.b, null, a.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexWrap: s.Aa.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(c, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                p = n("kduP"),
                g = n("2xye"),
                h = function(e) {
                    return a.createElement(s.Wa, null, a.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, r) {
                        return a.createElement(s.Oa, {
                            key: n
                        }, a.createElement(s.U, {
                            to: {
                                pathname: Object(p.c)(t.label),
                                state: {
                                    content: g.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, f(n, r.length - 1) ? null : ", "))
                    })))
                },
                f = function(e, t) {
                    return e === t
                },
                v = n("N0BP"),
                k = (n("XA5B"), function(e) {
                    var t = a.createElement(s.yb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.Za.Hidden
                    }, a.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, a.createElement(s.S, r.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(s.U, r.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            k.displayName = "PreviewCardIconicImage";
            var y, b = n("TSYQ"),
                w = (n("cRsL"), function(e) {
                    var t = b("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(s.Wa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Va.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, a.createElement(s.Wa, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Nb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(s.Wa, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                C = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(s.hb, {
                        borderRadius: s.x.None,
                        size: s.jb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var i = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(w, r.__assign({}, e.topBar))), i = 3), a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                T = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(s.Wa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(s.nb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(s.yb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ba.Size6,
                        justifyContent: s.Va.Center
                    }, t, a.createElement(s.W, null, e.value)) : a.createElement(s.yb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(s.W, null, e.value))
                }),
                _ = n("GnwI"),
                P = (n("B3R5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1,
                            isHovered: !1
                        }, t.onImageError = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onImageLoad = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onAnimatedImageLoad = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onAnimatedImageLoadError = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), a.createElement("div", r.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(s.yb, {
                            background: s.r.Alt2,
                            overflow: s.Za.Hidden
                        }, a.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = b("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, r.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, r.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                I = Object(_.b)("PreviewCardThumbnail")(P),
                E = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(s.Wa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(s.U, r.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(s.W, {
                        type: s.Ob.H3,
                        fontSize: s.Ba.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(s.Wa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                S = n("H1ft"),
                N = n("ZbA5"),
                x = n("QVaV"),
                O = n("hyVY"),
                A = n("MXoD"),
                L = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(y || (y = {}));
            var F, D, j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        r = t ? s.ob.Unlock : s.ob.Lock;
                    return a.createElement(s.Wa, null, !t && a.createElement(s.yb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.bc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Kb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Z.Column,
                        flexWrap: s.Aa.Wrap,
                        justifyContent: s.Va.Center,
                        "data-test-selector": y.LockSelector
                    }, a.createElement(s.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ba.Size5,
                        "data-test-selector": y.UpsellSelector
                    }, Object(i.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(s.Wa, null, a.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(s.yb, {
                        display: s.X.InlineFlex,
                        position: s.eb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.bc.Default,
                        fontSize: s.Ba.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, a.createElement(s.Rb, {
                        direction: this.props.attachTop ? s.Tb.Bottom : s.Tb.Top,
                        align: s.Sb.Right,
                        label: n
                    }, a.createElement(s.nb, {
                        asset: r,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function G(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function W(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(F || (F = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(D || (D = {}));
            var M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", r.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), a.createElement(s.yb, {
                            position: s.eb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.Za.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(s.U, {
                            to: Object(A.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(I, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: G(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(s.Wa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(s.Wa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(s.Wa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, r.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(C, {
                            topLeft: a.createElement(N.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(T, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : G(this.props) ? a.createElement(C, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(T, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.ob.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(T, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(T, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(T, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : W(this.props) ? a.createElement(C, {
                            topLeft: a.createElement(T, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.ob.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(T, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(T, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return G(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return G(this.props) || W(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === D.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(s.Wa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": F.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === D.SingleGameList || this.props.context === D.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(s.Wa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": F.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(x.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), W(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : G(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== D.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(E, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(s.Wa, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(L.a, r.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return G(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(j, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!G(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === S.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, r) {
                        switch (e) {
                            case S.a.Balloon:
                                return a.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: r
                                });
                            case S.a.Inline:
                                return a.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case S.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                B = Object(_.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(M);
            n.d(t, !1, function() {
                return F
            }), n.d(t, "b", function() {
                return D
            }), n.d(t, !1, function() {
                return M
            }), n.d(t, "a", function() {
                return B
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, a = n("/7QA"),
                i = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(r || (r = {}));
            var o = function() {
                switch (a.p.experiments.getAssignment(i.b.Archer)) {
                    case "balloon":
                        return r.Balloon;
                    case "inline":
                        return r.Inline;
                    case "control":
                    default:
                        return r.None
                }
            }
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var r = n("/7QA"),
                a = [{
                    code: "ar",
                    label: "العربية"
                }, {
                    code: "bg",
                    label: "Български"
                }, {
                    code: "cs",
                    label: "Čeština"
                }, {
                    code: "da",
                    label: "Dansk"
                }, {
                    code: "de",
                    label: "Deutsch"
                }, {
                    code: "el",
                    label: "Ελληνικά"
                }, {
                    code: "en",
                    label: "English"
                }, {
                    code: "es",
                    label: "Español"
                }, {
                    code: "fi",
                    label: "Suomi"
                }, {
                    code: "fr",
                    label: "Français"
                }, {
                    code: "hu",
                    label: "Magyar"
                }, {
                    code: "it",
                    label: "Italiano"
                }, {
                    code: "ja",
                    label: "日本語"
                }, {
                    code: "ko",
                    label: "한국어"
                }, {
                    code: "nl",
                    label: "Nederlands"
                }, {
                    code: "no",
                    label: "Norsk"
                }, {
                    code: "pl",
                    label: "Polski"
                }, {
                    code: "pt",
                    label: "Português"
                }, {
                    code: "ro",
                    label: "Română"
                }, {
                    code: "ru",
                    label: "Русский"
                }, {
                    code: "sk",
                    label: "Slovenčina"
                }, {
                    code: "sv",
                    label: "Svenska"
                }, {
                    code: "th",
                    label: "ภาษาไทย"
                }, {
                    code: "tr",
                    label: "Türkçe"
                }, {
                    code: "vi",
                    label: "Tiếng Việt"
                }, {
                    code: "zh-hk",
                    label: "中文(粵語)"
                }, {
                    code: "zh",
                    label: "中文"
                }];

            function i(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(a.concat(i()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = r.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return a.slice().sort(function(e, n) {
                    var r = t(e),
                        a = t(n);
                    return r !== a ? r - a : r + ":" + e.label < a + ":" + n.label ? -1 : 1
                }).concat(i(!0))
            }
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            });
            var r = "directory.LANGUAGE_TAGS_UPDATED",
                a = "directory.TAG_FILTER_ADDED",
                i = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function s(e) {
                return {
                    type: r,
                    languageTags: e
                }
            }

            function c(e, t) {
                return {
                    type: a,
                    addedTag: e,
                    categoryName: t
                }
            }

            function l(e, t) {
                return {
                    type: o,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        MXoD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("cr+I"),
                i = function(e, t) {
                    if (!(e.content || e.content_index || e.medium) || !t) return t;
                    if ("string" == typeof t && (/^\w+:\/\//.test(t) || t.startsWith("//"))) {
                        var n = new URL(t),
                            i = "" !== n.search ? a.parse(n.search) : {};
                        return e.content && (i.tt_content = e.content), e.content_index && (i.tt_content_index = e.content_index), e.medium && (i.tt_medium = e.medium), n.search = a.stringify(i), n.toString()
                    }
                    var o = "string" == typeof t ? {
                        pathname: t
                    } : t;
                    return r.__assign({}, o, {
                        state: r.__assign({}, o.state, {
                            content: e.content || o.state && o.state.content,
                            content_index: e.content_index || o.state && o.state.content_index,
                            medium: e.medium || o.state && o.state.medium
                        })
                    })
                }
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            a.p.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case i.a:
                        return r.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        QINq: function(e, t, n) {},
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("q1tI"),
                a = /^[\x00-\x7F]*$/,
                i = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : r.createElement("span", null, t, " ", r.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return a.test(e)
            }
        },
        QkMI: function(e, t, n) {},
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("2Ygb"),
                l = n("2xye"),
                d = n("oJov"),
                u = n("JVUd"),
                m = n("WRGI"),
                p = n("moLQ"),
                g = n("yI6f");

            function h(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, r.__assign({}, n, {
                        state: r.__assign({}, n.state, e)
                    })
                }
            }

            function f(e, t, n) {
                return n || (n = function() {}),
                    function(a) {
                        n && n(a), s.o.track(l.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return r.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.o.track(l.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: l.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function k(e, t, n) {
                return function(k) {
                    var y = function(i) {
                        function o() {
                            var e = null !== i && i.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(g.e)(), e.trackImpression = function() {
                                s.o.track(l.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return r.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (k === d.a) {
                                var e = this.props;
                                return a.createElement(k, r.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return a.createElement(k, r.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                r = e;
                            this.props.tagFilters.length > 0 && (r === l.PageviewMedium.Browse ? r = l.PageviewMedium.BrowseDirectoryTags : r === l.PageviewMedium.Game && (r = l.PageviewMedium.GameDirectoryTags));
                            var a = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: r
                            };
                            return "POP" === s.p.history.action ? a : (s.p.history.location.state && s.p.history.location.state.medium === l.PageviewMedium.TwitchHome && (a.item_tracking_id = s.p.history.location.state.item_tracking_id, a.medium = s.p.history.location.state.medium, a.content = s.p.history.location.state.content), a)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var r = this.props.trackingProps || {},
                                a = r.itemID,
                                i = r.category,
                                o = r.channelID,
                                s = r.itemPosition,
                                c = r.rowPosition,
                                l = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== a ? a : null,
                                item_position: void 0 !== s ? s : null,
                                item_subsection: null,
                                item_page: e,
                                reason_target: null,
                                reason_target_type: null,
                                reason_type: null,
                                request_id: null,
                                row_name: null,
                                row_position: void 0 !== c ? c : null,
                                section: void 0 !== n ? n : null,
                                model_tracking_id: null,
                                tag_set: JSON.stringify(l),
                                tag_streamer_set: "[]",
                                filtered: this.props.tagFilters.length > 0,
                                category: void 0 !== i ? i : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return r.__assign({
                                onVideoTitleClick: f(t, l.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: h(n, this.props.linkTo),
                                onThumbnailClick: f(t, l.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: h(n, e.channelLinkTo),
                                onChannelLoginClick: f(t, l.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: f(t, l.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: h(n, e.gameTitleLinkTo),
                                onGameTitleClick: f(t, l.PageviewContent.GameName, e.onGameTitleClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            }, n.medium && {
                                trackingContext: {
                                    medium: n.medium,
                                    content: n.content
                                }
                            })
                        }, o.prototype.wrapGameCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return r.__assign({
                                linkTo: h(n, e.linkTo),
                                onClick: f(t, l.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            })
                        }, o.displayName = Object(c.a)(o.name, k), o
                    }(a.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(i.connect)(function(t, n) {
                        var r = [];
                        if (e === l.PageviewMedium.Game) {
                            var a = n.trackingProps && n.trackingProps.categoryName;
                            r = a ? Object(p.a)(t, a) : []
                        } else r = Object(m.a)(t);
                        return {
                            tagFilters: r
                        }
                    }))(y)
                }
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("cr+I"),
                i = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var a = n.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, a.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var i = a.referenceTracking,
                                        o = i.content,
                                        c = i.medium,
                                        l = i.content_index,
                                        d = i.email_id;
                                    s.p.tracking.trackPageview(r.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: l,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return r.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return i.createElement(t, r.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    i = a.stringify(t);
                                i.length > 0 && (r = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, o
                    }(i.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        WRGI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function c(e) {
                return e.browse.tagFilters
            }
            a.p.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case i.a:
                        return r.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case i.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            a = e.tagFilters.slice();
                        return n && a.push(t.addedTag), r.__assign({}, e, {
                            tagFilters: a
                        });
                    case i.d:
                        return r.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case i.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return r.__assign({}, e, {
                            tagFilters: s
                        });
                    case i.b:
                        return r.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("Igt5"),
                o = "languageTags";

            function s(e, t) {
                var n = this;
                return function(s) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, c;
                        return r.__generator(this, function(r) {
                            return n = new Set(l()), t ? n.add(e) : n.delete(e), c = Array.from(n), a.m.set(o, c), s(Object(i.f)(c)), [2]
                        })
                    })
                }
            }

            function c(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return a.m.set(o, e), n(Object(i.f)(e)), [2]
                        })
                    })
                }
            }

            function l() {
                return a.m.get(o, [])
            }
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var r, a, i, o, s = n("mrSG"),
                c = n("TSYQ"),
                l = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((r = {})[u.a.Live] = "stream-type-indicator--live", r[u.a.Premiere] = "stream-type-indicator--premiere", r[u.a.Rerun] = "stream-type-indicator--rerun", r[u.a.WatchParty] = "stream-type-indicator--rerun", r),
                g = ((a = {})[u.a.Premiere] = m.ob.VideoPremiere, a[u.a.Rerun] = m.ob.VideoRerun, a[u.a.WatchParty] = m.ob.VideoRerun, a),
                h = ((i = {})[u.a.Premiere] = m.pb.Live, i[u.a.Rerun] = m.pb.Inherit, i[u.a.WatchParty] = m.pb.Inherit, i),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(m.yb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.X.Flex
                        }, l.createElement(m.Wa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), l.createElement(m.W, {
                            type: m.Ob.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, c(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? l.createElement(m.yb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? l.createElement(m.Wa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, l.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : l.createElement(m.nb, {
                            asset: g[this.props.type],
                            type: h[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(d.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(d.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(d.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(l.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return f
            })
        },
        bk9Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimePage_Streams"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "languages"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "directory"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "GAME"
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
                                        value: "displayName"
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
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Game"
                                        }
                                    },
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
                                                value: "streams"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "first"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "limit"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "languages"
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
                                                        value: "edges"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "primePageGameStreamEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Community"
                                        }
                                    },
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
                                                value: "streams"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "first"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "limit"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "languages"
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
                                                        value: "edges"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "primePageCommunityStreamEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "primePageGameStreamEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamEdge"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "node"
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
                                        value: "title"
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
                                        value: "previewImageURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "320"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "180"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcaster"
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
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "primePageCommunityStreamEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamEdge"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "node"
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
                                        value: "title"
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
                                        value: "previewImageURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "320"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "180"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcaster"
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
                    end: 722
                }
            };
            n.loc.source = {
                body: "query PrimePage_Streams($name: String! $limit: Int $languages: [String!]) {\ndirectory(name:$name type:GAME) {\nid\ndisplayName\nviewersCount\n... on Game {\nid\nstreams(first: $limit languages:$languages) {\nedges {\n...primePageGameStreamEdge\n}\n}\n}\n... on Community {\nid\nstreams(first: $limit languages:$languages) {\nedges {\n...primePageCommunityStreamEdge\n}\n}\n}\n}\n}\nfragment primePageGameStreamEdge on StreamEdge {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\n}\n}\n}\nfragment primePageCommunityStreamEdge on StreamEdge {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cRsL: function(e, t, n) {},
        gAd6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCardGameID"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 73
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hX9f: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("GFmA"),
                l = n("kduP"),
                d = n("2xye"),
                u = n("rShu"),
                m = n("yI6f"),
                p = n("T2RZ"),
                g = n("Ue10"),
                h = (n("zrz1"), Object(p.a)(d.PageviewMedium.Game, m.b.Live, m.c.BrowseInCategoryChannels)(c.a)),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var a = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                                i = d.PageviewMedium.Game;
                            t.props.trackingMedium && (i = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: r.__assign({}, o, {
                                    medium: i,
                                    content: a,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== u.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === u.a.Games ? c.b.SingleGameList : c.b.MixedGameAndChannelList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: this.shouldShowGame("name"),
                            gameTitleLinkTo: this.getLinkTo(Object(l.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return a.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, a.createElement(g.Wa, {
                            className: "stream-thumbnail__card",
                            position: g.eb.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, a.createElement(h, r.__assign({}, n, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, ""),
                            trackingProps: {
                                category: e.game ? e.game.id : void 0,
                                categoryName: e.game ? e.game.name : void 0,
                                itemPosition: t,
                                rowPosition: 0,
                                channelID: e.broadcaster.id || void 0
                            }
                        }))))
                    }, t
                }(a.Component),
                v = Object(o.compose)(i.a)(f);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "b", function() {
                return v
            })
        },
        hyVY: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Math.floor(e % 60),
                    r = Math.floor(e % 3600 / 60),
                    i = Math.floor(e / 3600);
                return t && t.zeroPadAll ? a(i, 2) + ":" + a(r, 2) + ":" + a(n, 2) : i ? i + ":" + a(r, 2) + ":" + a(n, 2) : r + ":" + a(n, 2)
            }

            function a(e, t) {
                return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
            }

            function i(e) {
                if ("" === e) return 0;
                var t = e.split(":");
                return t.length > 3 ? NaN : t.reduce(function(e, t) {
                    return 60 * e + ("-" === t[0] ? NaN : Math.round(parseInt(t, 10)))
                }, 0)
            }
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            })
        },
        igVx: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("i8i4"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = (n("2MIk"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        var e = this.props.hash,
                            t = e && i.findDOMNode(this.refs[e]);
                        t && t.scrollIntoView()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            id: "faq",
                            ref: "faq"
                        }, a.createElement(s.yb, {
                            className: "twitch-prime-faq",
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, a.createElement(s.mb, {
                            centered: !0
                        }, a.createElement(s.Ia, {
                            justifyContent: s.Va.Center
                        }, a.createElement(s.P, {
                            cols: {
                                default: 12,
                                sm: 10,
                                md: 8,
                                lg: 7,
                                xl: 6
                            }
                        }, a.createElement(s.Wa, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: s.Kb.Center,
                            fullWidth: !0
                        }, a.createElement(s.W, {
                            type: s.Ob.H2,
                            bold: !0
                        }, Object(o.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(o.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(o.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(o.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(o.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(o.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(o.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(o.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                            "x:link": function(e) {
                                return a.createElement(s.U, {
                                    to: "http://www.twitchprime.com"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(o.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(o.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                            "x:link": function(e) {
                                return a.createElement(s.U, {
                                    to: "https://www.epicgames.com/account/connected"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(o.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(o.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(o.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(o.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(o.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(o.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(o.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                            "x:link": function(e) {
                                return a.createElement(s.U, {
                                    to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), a.createElement(s.Wa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(s.z, {
                            linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                            fullWidth: !0
                        }, Object(o.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                    }, t.prototype.renderQuestion = function(e, t) {
                        return a.createElement("div", {
                            id: t,
                            ref: t
                        }, a.createElement(s.Wa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(s.W, {
                            type: s.Ob.H4,
                            bold: !0
                        }, e)))
                    }, t.prototype.renderAnswer = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return 1 === e.length ? a.createElement(s.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(s.W, null, e[0])) : a.createElement(s.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(s.Xb, null, a.createElement("ul", null, e.map(function(e) {
                            return a.createElement("li", {
                                key: e
                            }, a.createElement(s.W, null, e))
                        }))))
                    }, t.prototype.renderAnswerWithLink = function(e) {
                        return a.createElement(s.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(s.W, null, e))
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return c
            })
        },
        jmDq: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("GnwI"),
                s = n("Ue10"),
                c = (n("QkMI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                        return a.createElement(s.Wa, {
                            className: "prime-footer",
                            position: s.eb.Relative
                        }, a.createElement(s.yb, {
                            position: s.eb.Absolute,
                            justifyContent: s.Va.Center,
                            alignItems: s.f.Center,
                            className: "twitter-container"
                        }, a.createElement(s.nb, {
                            asset: s.ob.Twitter,
                            width: 40,
                            height: 40,
                            type: s.pb.Prime
                        })), a.createElement(s.yb, {
                            display: s.X.Flex,
                            justifyContent: s.Va.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "social-twitch-prime",
                            padding: 4
                        }, a.createElement(s.Wa, {
                            className: "prime-footer__twitter-links",
                            display: s.X.Flex,
                            justifyContent: e ? s.Va.Between : s.Va.Center
                        }, a.createElement(s.U, {
                            to: "https://twitter.com/TwitchPrime",
                            targetBlank: !0
                        }, a.createElement(s.W, {
                            bold: !0,
                            fontSize: s.Ba.Size5,
                            "data-a-target": "prime-footer-twitter-link"
                        }, Object(i.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && a.createElement(s.U, {
                            to: this.props.partnerSocialLink,
                            targetBlank: !0
                        }, a.createElement(s.W, {
                            bold: !0,
                            fontSize: s.Ba.Size5
                        }, this.props.partnerSocialText)))), a.createElement(s.yb, {
                            display: s.X.Flex,
                            justifyContent: s.Va.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: {
                                top: 2
                            },
                            className: "prime-footer-links"
                        }, a.createElement(s.yb, {
                            padding: 2
                        }, a.createElement(s.U, {
                            to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-terms-link"
                        }, Object(i.d)("Terms", "PrimeSubsiteFooter"))), a.createElement(s.yb, {
                            padding: 2
                        }, a.createElement(s.U, {
                            to: "https://www.amazon.com/twitchprivacy",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-privacy-link"
                        }, Object(i.d)("Privacy Policy", "PrimeSubsiteFooter"))), a.createElement(s.yb, {
                            padding: 2
                        }, a.createElement(s.U, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-guide-link"
                        }, Object(i.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                    }, t
                }(a.Component)),
                l = Object(o.b)("PrimeFooter", {
                    autoReportInteractive: !0
                })(c);
            n.d(t, "a", function() {
                return l
            })
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        kduP: function(e, t, n) {
            "use strict";

            function r(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function a(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function i(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function o(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            })
        },
        m493: function(e, t, n) {},
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function c(e) {
                return e.directory.languageTags
            }
            a.p.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTags: Object(o.a)(),
                    tagFilters: {}
                }), t.type) {
                    case i.a:
                        return r.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case i.b:
                        var n = r.__assign({}, e.tagFilters),
                            a = n[t.categoryName];
                        return (void 0 === a || a.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), r.__assign({}, e, {
                            tagFilters: n
                        });
                    case i.c:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), r.__assign({}, e);
                    case i.d:
                        if (void 0 === e.tagFilters[t.categoryName]) return r.__assign({}, e);
                        var s = e.tagFilters[t.categoryName].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[t.categoryName] = s, r.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        nNY8: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            });
            n("/7QA");
            var r = "twitch_prime_fortnite_offer_id",
                a = "c0b1816d-300b-d234-828e-59e76119bffe"
        },
        oA7Y: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "i", function() {
                return d
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "j", function() {
                return m
            });
            var r = "browse.BROWSE_TYPE_CHANGED",
                a = "browse.LAST_BROWSE_PATH",
                i = "browse.TAG_FILTER_ADDED",
                o = "browse.TAG_FILTER_CHANGED",
                s = "browse.TAG_FILTER_REMOVED";

            function c(e) {
                return {
                    type: i,
                    addedTag: e
                }
            }

            function l(e) {
                return {
                    type: r,
                    browseType: e
                }
            }

            function d(e) {
                return {
                    type: o,
                    tagFilters: e
                }
            }

            function u(e) {
                return {
                    type: a,
                    lastBrowsePath: e
                }
            }

            function m(e) {
                return {
                    type: s,
                    removedTag: e
                }
            }
        },
        oB8h: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Live = "live", e.WatchParty = "watch_party", e.Premiere = "premiere", e.Rerun = "rerun"
                }(r || (r = {}))
        },
        oJov: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return a.createElement(o.Wa, r.__assign({
                        className: "drops-badge",
                        position: o.eb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.cc)(e)), a.createElement(o.Rb, {
                        direction: o.Tb.Top,
                        align: o.Sb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, a.createElement(o.yb, {
                        className: "drops-badge__drops-icon",
                        position: o.eb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.Za.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.bc.Default
                    }, a.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, a.createElement(o.nb, {
                        asset: o.ob.Drops
                    })))))
                }),
                c = n("0LAi"),
                l = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function d(e) {
                for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
                    var a = r[n];
                    l.has(a) && (t[a] = e[a])
                }
                return t
            }
            var u = function(e) {
                var t;
                return e.placeholder ? a.createElement(a.Fragment, null, a.createElement(o.Wa, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, a.createElement(o.db, null))), a.createElement(o.W, null, a.createElement(o.db, {
                    width: 150
                })), a.createElement(o.W, {
                    fontSize: o.Ba.Size7
                }, a.createElement(o.db, {
                    width: 100
                }))) : (t = a.createElement(a.Fragment, null, a.createElement(o.Wa, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, a.createElement(o.I, r.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), a.createElement(o.H, null, a.createElement(o.Wa, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    }
                }, a.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Ob.H3,
                    fontSize: o.Ba.Size5,
                    lineHeight: o.Xa.Body,
                    ellipsis: !0
                }, e.title)), a.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = a.createElement(o.T, {
                    className: "tw-box-art-card__link " + (e.disabled ? "tw-box-art-card__link--disabled" : ""),
                    "data-a-target": "tw-box-art-card-link",
                    disabled: e.disabled,
                    download: e.download,
                    linkTo: e.linkTo,
                    ariaLabel: e.title,
                    blurAfterClick: e.blurAfterClick,
                    onClick: e.onClick,
                    renderLink: e.renderLink,
                    targetBlank: e.targetBlank,
                    tabIndex: e.tabIndex
                }, t)), a.createElement("div", r.__assign({
                    className: "tw-box-art-card"
                }, Object(o.cc)(e)), a.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && a.createElement(o.Wa, {
                    margin: {
                        top: .5
                    }
                }, a.createElement(c.a, r.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && a.createElement(s, null)))
            };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
                }(r || (r = {}))
        },
        uzin: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("GnwI"),
                c = n("Ue10"),
                l = (n("E8KT"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOfferImage = function() {
                            return i.createElement(c.Wa, {
                                textAlign: c.Kb.Center,
                                breakpointMedium: {
                                    textAlign: c.Kb.Right
                                },
                                className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                            }, i.createElement(c.S, {
                                alt: Object(o.d)("Offer items", "TwitchPrimeBrandedHeader"),
                                src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = a({
                                "twitch-prime-fortnite-header": !0,
                                "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                            }),
                            t = a({
                                "twitch-prime-fortnite__header__logo": !0,
                                "twitch-prime-fortnite__header__logo--centered": this.props.alwaysCentered
                            });
                        return i.createElement(c.Wa, {
                            className: "twitch-prime-fortnite__header__container",
                            padding: {
                                x: 1,
                                top: 1
                            }
                        }, i.createElement(c.Wa, {
                            className: e
                        }, i.createElement(c.Wa, {
                            className: "twitch-prime-fortnite__header",
                            display: c.X.Flex,
                            alignItems: c.f.End,
                            justifyContent: c.Va.Center,
                            flexWrap: c.Aa.Wrap,
                            textAlign: c.Kb.Left,
                            "data-test-selector": "twitch-prime-fortnite-header",
                            margin: {
                                y: 0,
                                x: "auto"
                            },
                            padding: {
                                x: 1
                            }
                        }, i.createElement(c.Wa, {
                            textAlign: c.Kb.Center,
                            breakpointMedium: {
                                textAlign: c.Kb.Left
                            },
                            breakpointLarge: {
                                margin: {
                                    bottom: 5
                                },
                                padding: {
                                    left: 5
                                }
                            },
                            alignSelf: c.g.Center,
                            className: "twitch-prime-fortnite__header__section"
                        }, i.createElement(c.Wa, {
                            className: t,
                            margin: {
                                y: 2
                            }
                        }, i.createElement("img", {
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                        })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                    }, t
                }(i.Component)),
                d = Object(s.b)("TwitchPrimeBrandedHeader", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, !1, function() {
                return "twitch-prime-fortnite-header"
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return d
            })
        },
        vDRX: function(e, t, n) {},
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("17x9"),
                i = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                c = {
                    cardIDtoItemTrackingIDMap: a.object,
                    trackTitleClick: a.func,
                    trackTitleImpression: a.func,
                    trackImpression: a.func,
                    trackClick: a.func
                };

            function l() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.f)(e.title),
                                    r = t.reasonType,
                                    a = t.reasonTarget,
                                    i = t.rowName,
                                    c = Object(s.e)(),
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: c,
                                        itemPosition: null,
                                        reasonType: r,
                                        reasonTarget: a,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: i,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(l, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: c
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
                                    r = t.reasonType,
                                    a = t.reasonTarget,
                                    i = t.reasonTargetType,
                                    c = t.rowName,
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: r,
                                        reasonTarget: a,
                                        reasonTargetType: i,
                                        rowName: c,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(l, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, r, a) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var i = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        c = o.reasonType,
                                        l = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: i,
                                            itemPosition: r,
                                            reasonType: c,
                                            reasonTarget: l,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = i, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, r, a, i, o) {
                                if (t.node) {
                                    var c = n.state,
                                        l = c.cardIDtoRequestIDMap,
                                        d = c.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
                                        m = u.reasonType,
                                        p = u.reasonTarget,
                                        g = u.reasonTargetType,
                                        h = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: l[t.node.id],
                                            itemPosition: r,
                                            rowPosition: n.props.position,
                                            reasonType: m,
                                            reasonTarget: p,
                                            reasonTargetType: g,
                                            rowName: h,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(f, a)
                                }
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return r.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                r = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], r, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(s.f)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return i.createElement(e, r.__assign({}, this.props, n))
                        }, n.childContextTypes = c, n
                    }(i.Component)
                }
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var r, a, i, o, s, c, l, d = n("/7QA"),
                u = n("f00E"),
                m = n("2xye"),
                p = n("3sMy"),
                g = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(a || (a = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(i || (i = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(c || (c = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(l || (l = {}));
            var h = ((r = {})[p.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Live,
                    rowName: e
                }
            }, r[p.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, r[p.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, r[p.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: c.Live,
                    rowName: e
                }
            }, r[p.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, r[p.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, r[p.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, r[p.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Clip,
                    rowName: e
                }
            }, r[p.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Vod,
                    rowName: e
                }
            }, r);

            function f(e) {
                var t = e.key;
                return h[t] ? h[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function v(e, t) {
                var n, r = null,
                    o = null,
                    s = null,
                    c = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Live, c = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        r = (n = e.contentEdge.node).owner && n.owner.id, o = i.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, r = null, o = i.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: a.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: c,
                    channel_id: null === r ? null : Number(r),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: m.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: o,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: s,
                    tag_id: e.tagID
                }
            }

            function k(e, t) {
                var n = v(e, t);
                d.o.track(m.SpadeEventType.ItemClick, n)
            }

            function y(e, t) {
                var n = v(e, t);
                d.o.track(m.SpadeEventType.ItemDisplay, n)
            }

            function b(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.o.track(m.SpadeEventType.RecRequestClient, t)
            }
            var w = n("x75U"),
                C = n("A65o");
            n.d(t, "e", function() {
                return g
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return c
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return k
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, !1, function() {
                return w.a
            }), n.d(t, "j", function() {
                return w.b
            }), n.d(t, !1, function() {
                return C.a
            })
        },
        zrz1: function(e, t, n) {}
    }
]);