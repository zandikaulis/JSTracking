(window.webpackJsonp = window.webpackJsonp || []).push([
    [175], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            });
            var r = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function i(e) {
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
                return u
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = i.n.getLastPageview();
                    return e && e.location || a.PageviewLocation.None
                },
                c = function(e) {
                    i.n.trackItemSectionClick({
                        carousel_content: a.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                l = function(e) {
                    i.n.trackItemSectionClick({
                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                u = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, c, l, u, d = this;
                        return r.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return r.__awaiter(d, void 0, void 0, function() {
                                            var t;
                                            return r.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, i.o.apollo.client.query({
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
                                        return a.TwitchDataType.Game
                                    }), u = c.map(function() {
                                        return null
                                    }), i.n.trackItemSectionLoad({
                                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: c.length,
                                        rendered_item_list: c,
                                        rendered_item_types: l,
                                        rendered_items_viewcounts: u,
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
                i = n("q1tI"),
                a = n("MXoD"),
                o = n("2xye"),
                s = n("Ue10"),
                c = function(e) {
                    var t = e.tags;
                    return void 0 !== e.tagNumberLimit && e.tagNumberLimit > 0 && (t = t.slice(0, e.tagNumberLimit)), i.createElement(s.Va, {
                        display: s.W.InlineBlock,
                        fullWidth: !0
                    }, t.map(function(t) {
                        var n = r.__assign({}, e.linkTo) || {};
                        e.linkPath && (n.pathname = e.linkPath), n.pathname && (n.pathname = n.pathname.replace(":tagID", t.id));
                        return i.createElement(s.xb, {
                            key: t.id,
                            fontSize: s.Aa.Size7,
                            display: s.W.InlineBlock,
                            margin: {
                                right: .5,
                                bottom: .5
                            }
                        }, i.createElement(s.Gb, {
                            label: t.localizedName,
                            type: e.style,
                            linkTo: Object(a.a)({
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
                return u
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function c(e, t) {
                var n = this;
                return function(a) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, c;
                        return r.__generator(this, function(r) {
                            return n = new Set(u()), t ? n.add(e) : n.delete(e), c = Array.from(n), i.l.set(s, c), a(Object(o.b)(c)), [2]
                        })
                    })
                }
            }

            function l() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.l.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function u() {
                return i.l.get(s, []).filter(function(e) {
                    return a.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return c
            });
            var r, i, a = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function c(e, t) {
                var n;
                switch (void 0 === t && (t = i.Humanized), t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS), t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        n = r.Hour;
                        break;
                    case i.ClockMS:
                        n = r.Minute
                }
                var c = 2;
                t === i.ClockHMS && (c = 3);
                var u = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    d = Object.keys(u);
                if (d.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || u[e] || delete u[e], n < d.length - c && delete u[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(u);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(u);
                var m = ":",
                    p = !1;
                switch (a.o.intl.getLanguageCode()) {
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
                var h = u.seconds || 0,
                    g = u.minutes || 0,
                    f = u.hours || 0;
                switch (t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        var v = (p ? l(f, 2) : f) + m + l(g, 2);
                        return t === i.ClockHMS && (v += m + l(h, 2)), v;
                    case i.ClockMS:
                        return (p ? l(g, 2) : g) + m + l(h, 2)
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
            }(i || (i = {}))
        },
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "80G/": function(e, t, n) {},
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
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
                i = n("q1tI"),
                a = n("yI6f"),
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
                                l = Object(a.f)(c.title).rowName,
                                u = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: l,
                                        row_position: s
                                    }
                                };
                            return i.createElement(e, r.__assign({}, this.props, u))
                        }, n.contextTypes = o.a, n
                    }(i.Component)
                }
            }
        },
        B3R5: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        E8KT: function(e, t, n) {},
        ER97: function(e, t, n) {},
        EU9V: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("mLw1"),
                s = n("/7QA"),
                c = n("yR8l"),
                l = n("V+GM"),
                u = n("NvVO"),
                d = n("2xye"),
                m = n("GnwI"),
                p = n("igVx"),
                h = n("jmDq"),
                g = n("O4UZ"),
                f = n("uzin"),
                v = n("/MKj"),
                b = n("OhOW"),
                y = n("oB8h"),
                k = n("rShu"),
                w = n("hX9f"),
                _ = n("Ue10"),
                C = n("bk9Q"),
                T = (n("ER97"), function(e) {
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
                        if (e.loading) return i.createElement(_.Va, null, i.createElement(_.Xa, {
                            fillContent: !0
                        }));
                        var t = e.directory,
                            n = (t && t.streams && t.streams.edges || []).filter(function(e) {
                                var t = e.node;
                                return t && t.id && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                            }).map(function(e, t) {
                                var n = P(e);
                                if (n) return i.createElement(w.b, {
                                    directoryName: "fortnite",
                                    directoryType: k.a.Games,
                                    streamIndex: t,
                                    streamNode: n,
                                    key: n.id
                                })
                            });
                        return i.createElement(_.Va, {
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
                        }, i.createElement(_.Va, {
                            margin: {
                                y: 1
                            },
                            className: "twitch-prime-streamers__count"
                        }, i.createElement(_.V, {
                            type: _.Nb.H3,
                            color: _.O.Link,
                            bold: !0
                        }, Object(s.d)("Check out Fortnite on Twitch.tv", "TwitchPrimeStreamers")), i.createElement(_.V, {
                            type: _.Nb.H4,
                            color: _.O.Link
                        }, Object(s.d)("{viewers, number} viewers right now", {
                            viewers: e.directory && e.directory.viewersCount || 0
                        }, "TwitchPrimeStreamers"))), i.createElement(_.Tb, {
                            gutterSize: _.Vb.Small,
                            childWidth: _.Ub.Large,
                            children: n,
                            "data-test-selector": "twitch-prime-streamers-tower",
                            center: !0
                        }), i.createElement(_.Va, {
                            margin: {
                                y: 1
                            },
                            className: "twitch-prime-streamers__game-page",
                            textAlign: _.Jb.Center
                        }, i.createElement(_.T, {
                            to: "/directory/game/Fortnite",
                            hoverUnderlineNone: !1,
                            type: _.U.Default
                        }, Object(s.d)("View more Fortnite on Twitch.tv >", "TwitchPrimeStreamers"))))
                    }, t
                }(i.Component)),
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
                        type: y.a.Live,
                        streamMetadata: null
                    }), t
                },
                E = Object(a.compose)(Object(m.c)("TwitchPrimeStreamers"), Object(c.a)(C, {
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
                }))(T);
            var S = Object(v.connect)(function(e) {
                    return {
                        languagePreferences: Object(b.a)(e)
                    }
                }, null)(E),
                O = n("nNY8"),
                I = n("2BM9"),
                x = (n("QINq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getFortniteOffer = function() {
                            var e = t.props.data,
                                n = e && e.primeOffers,
                                r = s.b.get(O.b, O.a),
                                i = n && n.filter(function(e) {
                                    return e && e.id === r
                                });
                            return i && i[0]
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (e && e.loading) return i.createElement(_.Xa, {
                            fillContent: !0
                        });
                        var t = this.getFortniteOffer();
                        return e && e.error || !t || !t.self || !t.self.hasEntitlement ? i.createElement(o.a, {
                            to: "/prime/fortnite"
                        }) : i.createElement(_.Va, {
                            className: "twitch-prime-success",
                            "data-test-selector": "twitch-prime-success-page"
                        }, i.createElement(_.Va, {
                            textAlign: _.Jb.Center,
                            className: "twitch-prime-success__header"
                        }, i.createElement(f.a, {
                            renderOfferImage: !0
                        }, i.createElement(_.Va, null, i.createElement(_.Va, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(_.V, {
                            type: _.Nb.H1,
                            color: _.O.Overlay,
                            transform: _.Mb.Uppercase,
                            bold: !0
                        }, Object(s.d)("Loot acquired!", "FortniteSuccess"))), i.createElement(_.Va, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(_.V, {
                            type: _.Nb.H3,
                            color: _.O.Overlay,
                            transform: _.Mb.Uppercase,
                            bold: !0
                        }, Object(s.d)("Load up Fortnite and your rewards will be waiting for you!", "FortniteSuccess")))), i.createElement(_.Va, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(_.V, {
                            type: _.Nb.H3,
                            color: _.O.Overlay,
                            bold: !0
                        }, Object(s.d)("Problems? <x:link>Click here ›</x:link>", {
                            "x:link": function(e) {
                                return i.createElement(_.T, {
                                    to: "#faq",
                                    hoverUnderlineNone: !1,
                                    type: _.U.Overlay
                                }, e)
                            }
                        }, "FortniteSuccess"))))), i.createElement(S, null), i.createElement(p.a, {
                            hash: this.props.location.hash.replace("#", "")
                        }), i.createElement(h.a, {
                            partnerSocialLink: "https://twitter.com/FortniteGame",
                            partnerSocialText: "@FortniteGame"
                        }))
                    }, t
                }(i.Component)),
                L = Object(a.compose)(Object(c.a)(I, {
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(g.f)()
                            }
                        }
                    }
                }), Object(m.c)("TwitchPrimeSuccessPage", {
                    destination: u.a.TwitchPrimeSuccessPage
                }), Object(l.a)({
                    location: d.PageviewLocation.TwitchPrimeSuccessPage
                }))(x);
            n.d(t, "TEST_SELECTOR", function() {
                return "twitch-prime-success-page"
            }), n.d(t, "TwitchPrimeSuccessPageComponent", function() {
                return x
            }), n.d(t, "TwitchPrimeSuccessPage", function() {
                return L
            })
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                c = n("YhoA"),
                l = n("Ue10"),
                u = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        r = e.game.toLowerCase(),
                        a = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = r === c.a.CounterStrike, t)),
                        o = r === c.a.CounterStrike ? 40 : 20;
                    return i.createElement(l.Va, {
                        className: a
                    }, i.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    }))
                }),
                d = n("On2s"),
                m = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(d.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = n.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = n.sent(), a.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? i.createElement(l.Va, {
                            className: "preview-card-appendage",
                            display: l.W.Flex
                        }, i.createElement(l.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: l.W.Flex,
                            alignItems: l.f.Center,
                            justifyContent: l.Ua.End
                        }, i.createElement("div", null, i.createElement(u, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), i.createElement(l.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: l.W.Flex,
                            overflow: l.Ya.Hidden
                        }, i.createElement(l.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: l.Ya.Hidden
                        }, i.createElement(l.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), i.createElement(l.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(l.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(i.Component));
            var p = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(m),
                h = n("5zf8"),
                g = (n("Fj9y"), function(e) {
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
                        return i.createElement(l.Va, {
                            className: "preview-card-game-balloon-row",
                            display: l.W.Flex,
                            flexWrap: l.Z.NoWrap
                        }, i.createElement(l.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(l.Va, {
                            display: l.W.Flex,
                            flexDirection: l.Y.Row,
                            padding: .5
                        }, i.createElement(l.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: l.x.Small,
                            overflow: l.Ya.Hidden,
                            position: l.db.Relative
                        }, i.createElement(l.o, {
                            align: l.d.Center,
                            ratio: l.p.BoxArt
                        }, i.createElement(l.S, r.__assign({}, e))), i.createElement(l.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: l.f.Center,
                            background: l.r.Overlay,
                            color: l.O.Overlay,
                            display: l.W.Flex,
                            justifyContent: l.Ua.Center,
                            position: l.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(l.mb, {
                            asset: l.nb.Play,
                            type: l.ob.Inherit
                        }))), i.createElement(l.Va, {
                            display: l.W.Flex,
                            flexDirection: l.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(l.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(l.V, null, this.props.gameChange.label)), i.createElement(l.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, i.createElement(l.V, null, Object(h.b)(this.props.gameChange.duration)))))))
                    }, t
                }(i.Component)),
                f = n("0INk"),
                v = n("8/mp"),
                b = n("eJ65"),
                y = (n("vDRX"), function(e) {
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
                            Object(f.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return i.createElement(l.Va, {
                            className: "preview-card-game-balloon",
                            display: l.W.InlineBlock,
                            position: l.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.a, {
                            key: "game-balloon",
                            display: l.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(l.z, {
                            type: l.F.Hollow,
                            icon: l.nb.ViewerList
                        }, i.createElement(l.Va, {
                            display: l.W.Flex,
                            flexDirection: l.Y.Row
                        }, i.createElement(l.V, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(l.Va, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(l.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(l.u, {
                            direction: l.v.TopLeft,
                            size: l.w.Medium
                        }, i.createElement(l.Va, {
                            overflow: l.Ya.Hidden,
                            display: l.W.Flex,
                            flexDirection: l.Y.Column,
                            flexWrap: l.Z.NoWrap
                        }, i.createElement(l.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(l.V, {
                            color: l.O.Alt2
                        }, Object(a.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(l.Va, {
                            className: "preview-card-game-balloon__content",
                            display: l.W.Flex,
                            flexDirection: l.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: l.Z.NoWrap
                        }, i.createElement(v.b, null, i.createElement(l.Va, {
                            display: l.W.Flex,
                            flexDirection: l.Y.Column,
                            flexWrap: l.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return i.createElement(g, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(i.Component)),
                k = n("kduP"),
                w = n("2xye"),
                _ = function(e) {
                    return i.createElement(l.Va, null, i.createElement(l.V, {
                        color: l.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, r) {
                        return i.createElement(l.Na, {
                            key: n
                        }, i.createElement(l.T, {
                            to: {
                                pathname: Object(k.c)(t.label),
                                state: {
                                    content: w.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: l.U.Inherit
                        }, t.label, C(n, r.length - 1) ? null : ", "))
                    })))
                },
                C = function(e, t) {
                    return e === t
                },
                T = n("N0BP"),
                P = (n("XA5B"), function(e) {
                    var t = i.createElement(l.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: l.x.Small,
                        overflow: l.Ya.Hidden
                    }, i.createElement(l.o, {
                        ratio: e.aspect || l.p.BoxArt,
                        align: l.d.Center
                    }, i.createElement(l.S, r.__assign({}, e.imageProps))));
                    return e.linkTo && (t = i.createElement(l.T, r.__assign({}, Object(T.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            P.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var E, S = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return i.createElement(l.Va, {
                        display: l.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: l.Ua.Between,
                        alignItems: l.f.Center,
                        className: t
                    }, i.createElement(l.Va, {
                        display: l.W.InlineFlex
                    }, i.createElement(l.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: l.O.Overlay,
                        bold: !0,
                        transform: l.Mb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(l.Va, {
                        display: l.W.InlineFlex
                    }, i.createElement(l.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: l.O.Overlay
                    }, e.subTitle)))
                },
                O = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(l.gb, {
                        borderRadius: l.x.None,
                        size: l.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var a = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(S, r.__assign({}, e.topBar))), a = 3), i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(l.Va, {
                        position: l.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                I = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(l.Va, {
                        display: l.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(l.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(l.xb, {
                        alignItems: l.f.Center,
                        background: l.r.Overlay,
                        borderRadius: l.x.Small,
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.W.Flex,
                        fontSize: l.Aa.Size6,
                        justifyContent: l.Ua.Center
                    }, t, i.createElement(l.V, null, e.value)) : i.createElement(l.xb, {
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(l.V, null, e.value))
                }),
                x = n("GnwI"),
                L = (n("B3R5"), function(e) {
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
                        }), i.createElement("div", r.__assign({}, e, {
                            onClick: this.props.onClick
                        }), i.createElement(l.xb, {
                            background: l.r.Alt2,
                            overflow: l.Ya.Hidden
                        }, i.createElement(l.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                            className: n
                        }, i.createElement(l.S, r.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : i.createElement("div", {
                            className: n
                        }, i.createElement(l.S, r.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(i.Component)),
                N = Object(x.c)("PreviewCardThumbnail")(L),
                A = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(l.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, i.createElement(l.V, {
                            color: l.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : i.createElement(l.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: l.U.Inherit
                        }, e.text)))
                    })), i.createElement("div", null, i.createElement(l.T, r.__assign({}, Object(T.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: l.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), i.createElement(l.V, {
                        type: l.Nb.H3,
                        fontSize: l.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(l.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                D = n("H1ft"),
                F = n("ZbA5"),
                j = n("QVaV"),
                V = n("hyVY"),
                G = n("MXoD"),
                M = n("0LAi"),
                R = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(E || (E = {}));
            var H, B, W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
                        r = t ? l.nb.Unlock : l.nb.Lock;
                    return i.createElement(l.Va, null, !t && i.createElement(l.xb, {
                        background: l.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: l.O.Overlay,
                        display: l.W.Flex,
                        position: l.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: l.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: l.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: l.f.Center,
                        alignContent: l.e.Center,
                        flexDirection: l.Y.Column,
                        flexWrap: l.Z.Wrap,
                        justifyContent: l.Ua.Center,
                        "data-test-selector": E.LockSelector
                    }, i.createElement(l.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(l.V, {
                        color: l.O.Overlay,
                        fontSize: l.Aa.Size5,
                        "data-test-selector": E.UpsellSelector
                    }, Object(a.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(l.Va, null, i.createElement(l.z, {
                        type: l.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(l.xb, {
                        display: l.W.InlineFlex,
                        position: l.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: l.ac.Default,
                        fontSize: l.Aa.Size6,
                        background: l.r.Overlay,
                        borderRadius: l.x.Medium,
                        color: l.O.Overlay
                    }, i.createElement(l.Qb, {
                        direction: this.props.attachTop ? l.Sb.Bottom : l.Sb.Top,
                        align: l.Rb.Right,
                        label: n
                    }, i.createElement(l.mb, {
                        asset: r,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(i.PureComponent);
            n("5NSO");

            function U(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function Q(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(H || (H = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(B || (B = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(R.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", r.__assign({
                            className: "preview-card"
                        }, Object(T.a)(this.props)), i.createElement(l.xb, {
                            position: l.db.Relative,
                            borderRadius: l.x.Medium,
                            overflow: l.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(l.T, {
                            to: Object(G.a)(this.getTrackingContext(w.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: U(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(l.Va, {
                            display: l.W.Flex,
                            flexWrap: l.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(l.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(l.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(l.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, r.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(O, {
                            topLeft: i.createElement(F.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(I, {
                                value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? i.createElement(O, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(I, {
                                value: Object(V.b)(this.props.durationInSeconds),
                                icon: l.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(I, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(I, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : Q(this.props) ? i.createElement(O, {
                            topLeft: i.createElement(I, {
                                value: Object(V.b)(this.props.durationInSeconds),
                                icon: l.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(I, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || Q(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === B.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(l.Va, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(P, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(G.a)(this.getTrackingContext(w.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: l.p.BoxArt,
                            "data-test-selector": H.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === B.SingleGameList || this.props.context === B.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(l.Va, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(P, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(G.a)(this.getTrackingContext(w.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: l.p.Aspect1x1,
                            "data-test-selector": H.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(j.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(G.a)(this.getTrackingContext(w.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), Q(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(a.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== B.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(G.a)(this.getTrackingContext(w.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(A, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(G.a)(this.getTrackingContext(w.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(l.Va, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(M.a, r.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return i.createElement(l.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, i.createElement(p, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return U(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(W, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === D.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, r) {
                        switch (e) {
                            case D.a.Balloon:
                                return i.createElement(y, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: r
                                });
                            case D.a.Inline:
                                return i.createElement(_, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case D.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                z = Object(x.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(q);
            n.d(t, !1, function() {
                return H
            }), n.d(t, "b", function() {
                return B
            }), n.d(t, !1, function() {
                return q
            }), n.d(t, "a", function() {
                return z
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, i = n("/7QA"),
                a = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(r || (r = {}));
            var o = function() {
                switch (i.o.experiments.getAssignment(a.b.Archer)) {
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
                i = [{
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

            function a(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(i.concat(a()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = r.o.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, n) {
                    var r = t(e),
                        i = t(n);
                    return r !== i ? r - i : r + ":" + e.label < i + ":" + n.label ? -1 : 1
                }).concat(a(!0))
            }
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "i", function() {
                return u
            }), n.d(t, "j", function() {
                return d
            }), n.d(t, "k", function() {
                return m
            }), n.d(t, "l", function() {
                return p
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            });
            var r = "directory.LANGUAGE_TAGS_UPDATED",
                i = "directory.LOL_CHAMPIONS_CHANGED",
                a = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                c = "directory.TAG_FILTER_CHANGED",
                l = "directory.TAG_FILTER_REMOVED";

            function u(e) {
                return {
                    type: r,
                    languageTags: e
                }
            }

            function d(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function m(e) {
                return {
                    type: a,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function p(e) {
                var t = {},
                    n = e.data;
                for (var r in n) n.hasOwnProperty(r) && (t[n[r].id] = n[r]);
                return {
                    type: i,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function h(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function g(e, t) {
                return {
                    type: l,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        MXoD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                i = n("cr+I"),
                a = function(e, t) {
                    if (!(e.content || e.content_index || e.medium) || !t) return t;
                    if ("string" == typeof t && (/^\w+:\/\//.test(t) || t.startsWith("//"))) {
                        var n = new URL(t),
                            a = "" !== n.search ? i.parse(n.search) : {};
                        return e.content && (a.tt_content = e.content), e.content_index && (a.tt_content_index = e.content_index), e.medium && (a.tt_medium = e.medium), n.search = i.stringify(a), n.toString()
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
                i = n("/7QA"),
                a = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            i.o.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case a.a:
                        return r.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return v
            });
            var r, i = n("mrSG"),
                a = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                c = n("ZrRH"),
                l = n.n(c),
                u = n("6H22"),
                d = n.n(u),
                m = n("X7a7"),
                p = n("YhoA"),
                h = n("Pcnk"),
                g = n("mz1O"),
                f = a.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(r || (r = {}));
            var v = function(e, t) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var n, r, o, s, c, l;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = t.toLowerCase(), r = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, c = e.overwatch && e.overwatch.broadcasterCharacter, r && n === p.a.CounterStrike ? [4, b(r)] : [3, 2];
                                case 1:
                                    return [2, i.sent()];
                                case 2:
                                    return o && n === p.a.Hearthstone ? [4, y(o)] : [3, 4];
                                case 3:
                                    return [2, i.sent()];
                                case 4:
                                    return c && n === p.a.Overwatch ? [4, k(c)] : [3, 6];
                                case 5:
                                    return [2, i.sent()];
                                case 6:
                                    if (s && n === p.a.LeagueOfLegends && (l = a.o.store.getState()).directory)
                                        if (l.directory.leagueOfLegends.championsMap) {
                                            if (l.directory.leagueOfLegends.championsMap) return [2, w(s, l.directory.leagueOfLegends.championsMap, l.directory.leagueOfLegends.version)]
                                        } else a.o.store.dispatch(Object(m.b)());
                                    i.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                b = function(e) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                                case 1:
                                    return t = i.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return r = i.sent(), f.error(r, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                                case 1:
                                    return t = i.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: l.a
                                        }
                                    }];
                                case 2:
                                    return r = i.sent(), f.error(r, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, r, a, o, s, c, l, u, m, p, v;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                                case 1:
                                    for (n = i.sent(), r = void 0, a = 0, o = n; a < o.length; a++)
                                        for (s in r = o[a])
                                            if (r.hasOwnProperty(s))
                                                for (c = r[s], l = 0, u = c; l < u.length; l++)
                                                    if ((m = u[l]).character === e) return (t = {})[m.character] = m, [2, {
                                                        name: (p = t)[e].display_name,
                                                        label: Object(h.b)(h.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: p[e].image_width,
                                                            imageHeight: p[e].image_height,
                                                            spriteOffsetX: p[e].sprite_x_offset,
                                                            spriteOffsetY: p[e].sprite_y_offset,
                                                            spriteURL: d.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return v = i.sent(), f.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                w = function(e, t, n) {
                    if (!t || !e) return null;
                    var r = t[e],
                        i = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + r.image.sprite;
                    return {
                        name: r.name,
                        label: Object(h.b)(h.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: r.image.w,
                            imageHeight: r.image.h,
                            spriteOffsetX: r.image.x,
                            spriteOffsetY: r.image.y,
                            spriteURL: i
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var r, i = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(r || (r = {}));
            var a = function(e) {
                switch (e) {
                    case r.CSGOMap:
                        return Object(i.d)("Map", "CSGOMapFilter");
                    case r.CSGOSkillGroup:
                        return Object(i.d)("Rank", "CSGORankFilter");
                    case r.HearthstoneClass:
                        return Object(i.d)("Class", "HearthstoneClassFilter");
                    case r.HearthstoneMode:
                        return Object(i.d)("Mode", "HearthstoneModeFilter");
                    case r.LeagueChampion:
                        return Object(i.d)("Champion", "LeagueFilter");
                    case r.OverwatchCharacter:
                        return Object(i.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        QINq: function(e, t, n) {},
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("q1tI"),
                i = /^[\x00-\x7F]*$/,
                a = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : r.createElement("span", null, t, " ", r.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return i.test(e)
            }
        },
        QkMI: function(e, t, n) {},
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return b
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("2Ygb"),
                l = n("2xye"),
                u = n("oJov"),
                d = n("JVUd"),
                m = n("WRGI"),
                p = n("moLQ"),
                h = n("yI6f");

            function g(e, t) {
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
                    function(i) {
                        n && n(i), s.n.track(l.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return r.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.n.track(l.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: l.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function b(e, t, n) {
                return function(b) {
                    var y = function(a) {
                        function o() {
                            var e = null !== a && a.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(h.e)(), e.trackImpression = function() {
                                s.n.track(l.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return r.__extends(o, a), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (b === u.a) {
                                var e = this.props;
                                return i.createElement(b, r.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return i.createElement(b, r.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                r = e;
                            this.props.tagFilters.length > 0 && (r === l.PageviewMedium.Browse ? r = l.PageviewMedium.BrowseDirectoryTags : r === l.PageviewMedium.Game && (r = l.PageviewMedium.GameDirectoryTags));
                            var i = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: r
                            };
                            return "POP" === s.o.history.action ? i : (s.o.history.location.state && s.o.history.location.state.medium === l.PageviewMedium.TwitchHome && (i.item_tracking_id = s.o.history.location.state.item_tracking_id, i.medium = s.o.history.location.state.medium, i.content = s.o.history.location.state.content), i)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var r = this.props.trackingProps || {},
                                i = r.itemID,
                                a = r.category,
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
                                item_id: void 0 !== i ? i : null,
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
                                category: void 0 !== a ? a : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return r.__assign({
                                onVideoTitleClick: f(t, l.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: g(n, this.props.linkTo),
                                onThumbnailClick: f(t, l.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: g(n, e.channelLinkTo),
                                onChannelLoginClick: f(t, l.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: f(t, l.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: g(n, e.gameTitleLinkTo),
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
                                linkTo: g(n, e.linkTo),
                                onClick: f(t, l.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            })
                        }, o.displayName = Object(c.a)(o.name, b), o
                    }(i.Component);
                    return Object(o.compose)(Object(d.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(a.connect)(function(t, n) {
                        var r = [];
                        if (e === l.PageviewMedium.Game) {
                            var i = n.trackingProps && n.trackingProps.categoryName;
                            r = i ? Object(p.a)(t, i) : []
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
                i = n("cr+I"),
                a = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var i = n.call(this, t) || this;
                            return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                                if (!(i.tracked || e.skip && e.skip(i.props))) {
                                    i.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, i.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = i.referenceTracking,
                                        o = a.content,
                                        c = a.medium,
                                        l = a.content_index,
                                        u = a.email_id;
                                    s.o.tracking.trackPageview(r.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                        }
                        return r.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return a.createElement(t, r.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? i.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    a = i.stringify(t);
                                a.length > 0 && (r = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, o
                    }(a.Component);
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
                i = n("/7QA"),
                a = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function c(e) {
                return e.browse.tagFilters
            }
            i.o.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case a.a:
                        return r.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case a.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            i = e.tagFilters.slice();
                        return n && i.push(t.addedTag), r.__assign({}, e, {
                            tagFilters: i
                        });
                    case a.d:
                        return r.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case a.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return r.__assign({}, e, {
                            tagFilters: s
                        });
                    case a.b:
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
            var r = n("mrSG"),
                i = n("cr+I"),
                a = n("/7QA"),
                o = n("b6Yk"),
                s = {
                    en: "en_US",
                    de: "de_DE",
                    es: "es_ES",
                    "es-mx": "es_ES",
                    fr: "fr_FR",
                    it: "it_IT",
                    hu: "hu_HU",
                    pl: "pl_PL",
                    pt: "pt_BR",
                    "pt-br": "pt_BR",
                    vi: "vn_VN",
                    tr: "tr_TR",
                    ro: "ro_RO",
                    cs: "cs_CZ",
                    el: "el_GR",
                    ru: "ru_RU",
                    th: "th_TH",
                    "zh-cn": "zh_CN",
                    "zh-tw": "zh_TW",
                    ja: "ja_JP",
                    ko: "ko_KR"
                },
                c = function(e) {
                    return e && s[e] || "en_US"
                },
                l = n("Igt5");
            n.d(t, "b", function() {
                return p
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "a", function() {
                return f
            });
            var u = "languageTags",
                d = 0,
                m = 350;

            function p() {
                var e = this;
                return function(t) {
                    clearTimeout(d), d = setTimeout(function() {
                        return r.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, u, d, m;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = a.o.logger.withCategory("leagueoflegends-api"), t(Object(l.k)(!0)), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), n = a.o.intl.getLanguageCode(), s = c(n), u = o.a.getAPIURL("/api/lol/champions?" + i.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(u)];
                                    case 2:
                                        return (d = r.sent()).body ? t(Object(l.l)(d.body)) : (e.warn("LoL champion API response body was empty."), t(Object(l.j)(!0))), [3, 4];
                                    case 3:
                                        throw m = r.sent(), t(Object(l.j)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, m)
                }
            }

            function h(e, t) {
                var n = this;
                return function(i) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return r.__generator(this, function(r) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), a.l.set(u, o), i(Object(l.i)(o)), [2]
                        })
                    })
                }
            }

            function g(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return a.l.set(u, e), n(Object(l.i)(e)), [2]
                        })
                    })
                }
            }

            function f() {
                return a.l.get(u, [])
            }
        },
        XA5B: function(e, t, n) {},
        YhoA: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(r || (r = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var r, i, a, o, s = n("mrSG"),
                c = n("TSYQ"),
                l = n("q1tI"),
                u = n("/7QA"),
                d = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((r = {})[d.a.Live] = "stream-type-indicator--live", r[d.a.Premiere] = "stream-type-indicator--premiere", r[d.a.Rerun] = "stream-type-indicator--rerun", r[d.a.WatchParty] = "stream-type-indicator--rerun", r),
                h = ((i = {})[d.a.Premiere] = m.nb.VideoPremiere, i[d.a.Rerun] = m.nb.VideoRerun, i[d.a.WatchParty] = m.nb.VideoRerun, i),
                g = ((a = {})[d.a.Premiere] = m.ob.Live, a[d.a.Rerun] = m.ob.Inherit, a[d.a.WatchParty] = m.ob.Inherit, a),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(m.xb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.W.Flex
                        }, l.createElement(m.Va, {
                            display: m.W.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), l.createElement(m.V, {
                            type: m.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, c(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? l.createElement(m.xb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === d.a.Live ? l.createElement(m.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.W.Flex,
                            alignItems: m.f.Center
                        }, l.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : l.createElement(m.mb, {
                            asset: h[this.props.type],
                            type: g[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(u.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case d.a.Live:
                                return Object(u.d)("LIVE", "StreamTypeIndicator");
                            case d.a.Premiere:
                                return Object(u.d)("Premiere", "StreamTypeIndicator");
                            case d.a.Rerun:
                            case d.a.WatchParty:
                                return Object(u.d)("Rerun", "StreamTypeIndicator");
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
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i, a, o, s;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((i = a.sent()).requestError) throw i.requestError;
                                        if (i.error) throw new Error("Error while sending legacy-api request: " + i.error.status + " - " + i.error.message);
                                        return [2, r.__assign({}, i, {
                                            body: i.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, i.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, i, a;
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
                                        return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
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
                        var n = i.o.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(a.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = i.o.logger.withCategory("legacy-api"), e
                }()
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
        fVj5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            });
            var r = n("/7QA"),
                i = n("D7An");

            function a() {
                return "experiment" === r.o.experiments.getAssignment(i.b.Tags)
            }
            var o = null;

            function s() {
                return null === o && (o = a()), o
            }
        },
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
                i = n("q1tI"),
                a = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("GFmA"),
                l = n("kduP"),
                u = n("2xye"),
                d = n("fVj5"),
                m = n("rShu"),
                p = n("yI6f"),
                h = n("T2RZ"),
                g = n("Ue10"),
                f = (n("zrz1"), Object(h.a)(u.PageviewMedium.Game, p.b.Live, p.c.BrowseInCategoryChannels)(c.a)),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(d.b)(), t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var i = t.props.trackingContent ? t.props.trackingContent : u.PageviewContent.Live,
                                a = u.PageviewMedium.Game;
                            t.props.trackingMedium && (a = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: r.__assign({}, o, {
                                    medium: a,
                                    content: i,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== m.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e, t.props.streamNode.broadcaster && t.props.streamNode.broadcaster.id)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === m.a.Games ? c.b.SingleGameList : c.b.MixedGameAndChannelList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            onVideoTitleClick: this.onClick,
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            onThumbnailClick: this.onClick,
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            onChannelLoginClick: this.onClick,
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
                            playerMetadata: !this.isTagsExperiment && e.streamMetadata || void 0,
                            playerMetadataGame: e.streamMetadata ? this.props.directoryName : void 0,
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return i.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, i.createElement(g.Va, {
                            className: "stream-thumbnail__card",
                            position: g.db.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, i.createElement(f, r.__assign({}, n, {
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
                }(i.Component),
                b = Object(o.compose)(a.a)(v);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, "b", function() {
                return b
            })
        },
        hyVY: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Math.floor(e % 60),
                    r = Math.floor(e % 3600 / 60),
                    a = Math.floor(e / 3600);
                return t && t.zeroPadAll ? i(a, 2) + ":" + i(r, 2) + ":" + i(n, 2) : a ? a + ":" + i(r, 2) + ":" + i(n, 2) : r + ":" + i(n, 2)
            }

            function i(e, t) {
                return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
            }

            function a(e) {
                if ("" === e) return 0;
                var t = e.split(":");
                return t.length > 3 ? NaN : t.reduce(function(e, t) {
                    return 60 * e + ("-" === t[0] ? NaN : Math.round(parseInt(t, 10)))
                }, 0)
            }
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            })
        },
        igVx: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("i8i4"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = (n("2MIk"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        var e = this.props.hash,
                            t = e && a.findDOMNode(this.refs[e]);
                        t && t.scrollIntoView()
                    }, t.prototype.render = function() {
                        return i.createElement("div", {
                            id: "faq",
                            ref: "faq"
                        }, i.createElement(s.xb, {
                            className: "twitch-prime-faq",
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, i.createElement(s.lb, {
                            centered: !0
                        }, i.createElement(s.Ha, {
                            justifyContent: s.Ua.Center
                        }, i.createElement(s.P, {
                            cols: {
                                default: 12,
                                sm: 10,
                                md: 8,
                                lg: 7,
                                xl: 6
                            }
                        }, i.createElement(s.Va, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: s.Jb.Center,
                            fullWidth: !0
                        }, i.createElement(s.V, {
                            type: s.Nb.H2,
                            bold: !0
                        }, Object(o.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(o.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(o.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(o.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(o.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(o.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(o.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(o.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                            "x:link": function(e) {
                                return i.createElement(s.T, {
                                    to: "http://www.twitchprime.com"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(o.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(o.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                            "x:link": function(e) {
                                return i.createElement(s.T, {
                                    to: "https://www.epicgames.com/account/connected"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(o.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(o.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(o.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(o.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(o.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(o.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(o.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                            "x:link": function(e) {
                                return i.createElement(s.T, {
                                    to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), i.createElement(s.Va, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(s.z, {
                            linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                            fullWidth: !0
                        }, Object(o.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                    }, t.prototype.renderQuestion = function(e, t) {
                        return i.createElement("div", {
                            id: t,
                            ref: t
                        }, i.createElement(s.Va, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(s.V, {
                            type: s.Nb.H4,
                            bold: !0
                        }, e)))
                    }, t.prototype.renderAnswer = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return 1 === e.length ? i.createElement(s.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(s.V, null, e[0])) : i.createElement(s.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(s.Wb, null, i.createElement("ul", null, e.map(function(e) {
                            return i.createElement("li", {
                                key: e
                            }, i.createElement(s.V, null, e))
                        }))))
                    }, t.prototype.renderAnswerWithLink = function(e) {
                        return i.createElement(s.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(s.V, null, e))
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return c
            })
        },
        jmDq: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("GnwI"),
                s = n("Ue10"),
                c = (n("QkMI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                        return i.createElement(s.Va, {
                            className: "prime-footer",
                            position: s.db.Relative
                        }, i.createElement(s.xb, {
                            position: s.db.Absolute,
                            justifyContent: s.Ua.Center,
                            alignItems: s.f.Center,
                            className: "twitter-container"
                        }, i.createElement(s.mb, {
                            asset: s.nb.Twitter,
                            width: 40,
                            height: 40,
                            type: s.ob.Prime
                        })), i.createElement(s.xb, {
                            display: s.W.Flex,
                            justifyContent: s.Ua.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "social-twitch-prime",
                            padding: 4
                        }, i.createElement(s.Va, {
                            className: "prime-footer__twitter-links",
                            display: s.W.Flex,
                            justifyContent: e ? s.Ua.Between : s.Ua.Center
                        }, i.createElement(s.T, {
                            to: "https://twitter.com/TwitchPrime",
                            targetBlank: !0
                        }, i.createElement(s.V, {
                            bold: !0,
                            fontSize: s.Aa.Size5,
                            "data-a-target": "prime-footer-twitter-link"
                        }, Object(a.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && i.createElement(s.T, {
                            to: this.props.partnerSocialLink,
                            targetBlank: !0
                        }, i.createElement(s.V, {
                            bold: !0,
                            fontSize: s.Aa.Size5
                        }, this.props.partnerSocialText)))), i.createElement(s.xb, {
                            display: s.W.Flex,
                            justifyContent: s.Ua.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: {
                                top: 2
                            },
                            className: "prime-footer-links"
                        }, i.createElement(s.xb, {
                            padding: 2
                        }, i.createElement(s.T, {
                            to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-terms-link"
                        }, Object(a.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(s.xb, {
                            padding: 2
                        }, i.createElement(s.T, {
                            to: "https://www.amazon.com/twitchprivacy",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-privacy-link"
                        }, Object(a.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(s.xb, {
                            padding: 2
                        }, i.createElement(s.T, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-guide-link"
                        }, Object(a.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                    }, t
                }(i.Component)),
                l = Object(o.c)("PrimeFooter", {
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

            function i(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function a(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function o(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            })
        },
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function c(e) {
                return e.directory.languageTags
            }
            i.o.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTags: Object(o.a)(),
                    leagueOfLegends: {
                        apiData: null,
                        championsMap: null,
                        isError: !1,
                        isLoading: !1,
                        version: ""
                    },
                    tagFilters: {}
                }), t.type) {
                    case a.a:
                        return r.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case a.b:
                        return r.__assign({}, e, {
                            leagueOfLegends: {
                                apiData: t.apiData,
                                championsMap: t.championsMap,
                                isError: !1,
                                isLoading: !1,
                                version: t.apiVersion
                            }
                        });
                    case a.c:
                        return r.__assign({}, e, {
                            leagueOfLegends: r.__assign({}, e.leagueOfLegends, {
                                isError: t.leagueOfLegendsChampionsErrored,
                                isLoading: !1
                            })
                        });
                    case a.d:
                        return r.__assign({}, e, {
                            leagueOfLegends: r.__assign({}, e.leagueOfLegends, {
                                isError: !1,
                                isLoading: t.leagueOfLegendsChampionsLoading
                            })
                        });
                    case a.e:
                        var n = r.__assign({}, e.tagFilters),
                            i = n[t.categoryName];
                        return (void 0 === i || i.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), r.__assign({}, e, {
                            tagFilters: n
                        });
                    case a.f:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), r.__assign({}, e);
                    case a.g:
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
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "f", function() {
                return l
            });
            var r = n("mrSG"),
                i = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(172).then(function() {
                                        var e = n("vrl6");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                a = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(171).then(function() {
                                        var e = n("+4ZJ");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                o = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(170).then(function() {
                                        var e = n("nSs0");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                s = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(169).then(function() {
                                        var e = n("1Bro");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                c = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(168).then(function() {
                                        var e = n("Dpq/");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                l = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(167).then(function() {
                                        var e = n("bVYI");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                }
        },
        nNY8: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            });
            n("/7QA");
            var r = "twitch_prime_fortnite_offer_id",
                i = "c0b1816d-300b-d234-828e-59e76119bffe"
        },
        oA7Y: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "i", function() {
                return u
            }), n.d(t, "h", function() {
                return d
            }), n.d(t, "j", function() {
                return m
            });
            var r = "browse.BROWSE_TYPE_CHANGED",
                i = "browse.LAST_BROWSE_PATH",
                a = "browse.TAG_FILTER_ADDED",
                o = "browse.TAG_FILTER_CHANGED",
                s = "browse.TAG_FILTER_REMOVED";

            function c(e) {
                return {
                    type: a,
                    addedTag: e
                }
            }

            function l(e) {
                return {
                    type: r,
                    browseType: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    tagFilters: e
                }
            }

            function d(e) {
                return {
                    type: i,
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
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return i.createElement(o.Va, r.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), i.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(a.d)("Offers in-game Drops", "DropsBadge")
                    }, i.createElement(o.xb, {
                        className: "drops-badge__drops-icon",
                        position: o.db.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.Ya.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ac.Default
                    }, i.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, i.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                c = n("0LAi"),
                l = n("fVj5"),
                u = function(e) {
                    return i.createElement(o.Va, null, i.createElement(o.y, r.__assign({}, e)), Object(l.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && i.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(c.a, r.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && i.createElement(s, null))
                };
            n.d(t, "a", function() {
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
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("GnwI"),
                c = n("Ue10"),
                l = (n("E8KT"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOfferImage = function() {
                            return a.createElement(c.Va, {
                                textAlign: c.Jb.Center,
                                breakpointMedium: {
                                    textAlign: c.Jb.Right
                                },
                                className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                            }, a.createElement(c.S, {
                                alt: Object(o.d)("Offer items", "TwitchPrimeBrandedHeader"),
                                src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = i({
                                "twitch-prime-fortnite-header": !0,
                                "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                            }),
                            t = i({
                                "twitch-prime-fortnite__header__logo": !0,
                                "twitch-prime-fortnite__header__logo--centered": this.props.alwaysCentered
                            });
                        return a.createElement(c.Va, {
                            className: "twitch-prime-fortnite__header__container",
                            padding: {
                                x: 1,
                                top: 1
                            }
                        }, a.createElement(c.Va, {
                            className: e
                        }, a.createElement(c.Va, {
                            className: "twitch-prime-fortnite__header",
                            display: c.W.Flex,
                            alignItems: c.f.End,
                            justifyContent: c.Ua.Center,
                            flexWrap: c.Z.Wrap,
                            textAlign: c.Jb.Left,
                            "data-test-selector": "twitch-prime-fortnite-header",
                            margin: {
                                y: 0,
                                x: "auto"
                            },
                            padding: {
                                x: 1
                            }
                        }, a.createElement(c.Va, {
                            textAlign: c.Jb.Center,
                            breakpointMedium: {
                                textAlign: c.Jb.Left
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
                        }, a.createElement(c.Va, {
                            className: t,
                            margin: {
                                y: 2
                            }
                        }, a.createElement("img", {
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                        })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                    }, t
                }(a.Component)),
                u = Object(s.c)("TwitchPrimeBrandedHeader", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, !1, function() {
                return "twitch-prime-fortnite-header"
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return u
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
                i = n("17x9"),
                a = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                c = {
                    cardIDtoItemTrackingIDMap: i.object,
                    trackTitleClick: i.func,
                    trackTitleImpression: i.func,
                    trackImpression: i.func,
                    trackClick: i.func
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
                                    i = t.reasonTarget,
                                    a = t.rowName,
                                    c = Object(s.e)(),
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: c,
                                        itemPosition: null,
                                        reasonType: r,
                                        reasonTarget: i,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: a,
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
                                    i = t.reasonTarget,
                                    a = t.reasonTargetType,
                                    c = t.rowName,
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: r,
                                        reasonTarget: i,
                                        reasonTargetType: a,
                                        rowName: c,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(l, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, r, i) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var a = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        c = o.reasonType,
                                        l = o.reasonTarget,
                                        u = o.reasonTargetType,
                                        d = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: a,
                                            itemPosition: r,
                                            reasonType: c,
                                            reasonTarget: l,
                                            reasonTargetType: u,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: d,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = a, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, r, i, a, o) {
                                if (t.node) {
                                    var c = n.state,
                                        l = c.cardIDtoRequestIDMap,
                                        u = c.cardIDtoItemTrackingIDMap,
                                        d = Object(s.f)(e.title),
                                        m = d.reasonType,
                                        p = d.reasonTarget,
                                        h = d.reasonTargetType,
                                        g = d.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: u[t.node.id] || null,
                                            requestID: l[t.node.id],
                                            itemPosition: r,
                                            rowPosition: n.props.position,
                                            reasonType: m,
                                            reasonTarget: p,
                                            reasonTargetType: h,
                                            rowName: g,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(f, i)
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
                            return a.createElement(e, r.__assign({}, this.props, n))
                        }, n.childContextTypes = c, n
                    }(a.Component)
                }
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var r, i, a, o, s, c, l, u = n("/7QA"),
                d = n("f00E"),
                m = n("2xye"),
                p = n("3sMy"),
                h = function() {
                    return Object(d.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(i || (i = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(a || (a = {})),
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
            var g = ((r = {})[p.a.TopLiveChannels] = function(e) {
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
                return g[t] ? g[t](t, e) : {
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
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = a.Live, c = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = a.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        r = (n = e.contentEdge.node).owner && n.owner.id, o = a.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, r = null, o = a.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: i.TwitchHome,
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

            function b(e, t) {
                var n = v(e, t);
                u.n.track(m.SpadeEventType.ItemClick, n)
            }

            function y(e, t) {
                var n = v(e, t);
                u.n.track(m.SpadeEventType.ItemDisplay, n)
            }

            function k(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                u.n.track(m.SpadeEventType.RecRequestClient, t)
            }
            var w = n("x75U"),
                _ = n("A65o");
            n.d(t, "e", function() {
                return h
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return a
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
                return b
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, !1, function() {
                return w.a
            }), n.d(t, "j", function() {
                return w.b
            }), n.d(t, !1, function() {
                return _.a
            })
        },
        zrz1: function(e, t, n) {}
    }
]);