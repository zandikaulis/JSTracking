(window.webpackJsonp = window.webpackJsonp || []).push([
    [66], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            });
            var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function r(e) {
                return {
                    type: a,
                    languagePreferences: e
                }
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = r.n.getLastPageview();
                    return e && e.location || i.PageviewLocation.None
                },
                l = function(e) {
                    r.n.trackItemSectionClick({
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
                c = function(e) {
                    r.n.trackItemSectionClick({
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return a.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return a.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, r.o.apollo.client.query({
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
                                    return n = m.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), c = l.map(function() {
                                        return i.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), r.n.trackItemSectionLoad({
                                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
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
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("q1tI"),
                r = n("Ue10"),
                i = function() {
                    return a.createElement(r.G, null, a.createElement(r.o, {
                        ratio: r.p.Aspect16x9
                    }, a.createElement(r.cb, null)), a.createElement(r.H, null, a.createElement(r.Va, {
                        display: r.W.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(r.Va, {
                        display: r.W.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a.createElement(r.cb, {
                        width: 40,
                        height: 56
                    })), a.createElement(r.Va, {
                        display: r.W.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(r.V, null, a.createElement(r.cb, {
                        width: 150
                    })), a.createElement(r.V, {
                        fontSize: r.Aa.Size7
                    }, a.createElement(r.cb, {
                        width: 100
                    }))))))
                }
        },
        "1mcJ": function(e, t, n) {},
        "3sMy": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(a || (a = {}))
        },
        "5NSO": function(e, t, n) {},
        "5myU": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = 10;

            function r(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var r = window.getComputedStyle(document.documentElement).fontSize || a.toString(),
                    i = parseFloat(r) / a;
                return Math.floor(e / (t * i)) * n
            }
        },
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function l(e, t) {
                var n = this;
                return function(i) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, l;
                        return a.__generator(this, function(a) {
                            return n = new Set(d()), t ? n.add(e) : n.delete(e), l = Array.from(n), r.l.set(s, l), i(Object(o.b)(l)), [2]
                        })
                    })
                }
            }

            function c() {
                var e = this;
                return function(t) {
                    return a.__awaiter(e, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            return r.l.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function d() {
                return r.l.get(s, []).filter(function(e) {
                    return i.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return l
            });
            var a, r, i = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(i.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(i.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(i.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(i.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(i.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(i.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(i.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(i.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(i.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(i.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(i.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(i.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = r.Humanized), t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS), t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        n = a.Hour;
                        break;
                    case r.ClockMS:
                        n = a.Minute
                }
                var l = 2;
                t === r.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = a.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === a.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === a.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === a.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === a.Day ? n : n.days <= 26 || t === a.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== r.Humanized && t !== r.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? o(a.Month, e.months) : e.weeks && e.days ? o(a.Week, e.weeks) + " " + o(a.Day, e.days) : e.weeks ? o(a.Week, e.weeks) : e.days && e.hours ? o(a.Day, e.days) + " " + o(a.Hour, e.hours) : e.days ? o(a.Day, e.days) : e.hours && e.minutes ? o(a.Hour, e.hours) + " " + o(a.Minute, e.minutes) : e.hours ? o(a.Hour, e.hours) : e.minutes && e.seconds ? o(a.Minute, e.minutes) + " " + o(a.Second, e.seconds) : e.minutes ? o(a.Minute, e.minutes) : o(a.Second, e.seconds || 0)
                }(d);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(a.Month, e.months) : e.weeks && e.days ? "" + s(a.Week, e.weeks) + s(a.Day, e.days) : e.weeks ? s(a.Week, e.weeks) : e.days && e.hours ? "" + s(a.Day, e.days) + s(a.Hour, e.hours) : e.days ? s(a.Day, e.days) : e.hours && e.minutes ? "" + s(a.Hour, e.hours) + s(a.Minute, e.minutes) : e.hours ? s(a.Hour, e.hours) : e.minutes && e.seconds ? "" + s(a.Minute, e.minutes) + s(a.Second, e.seconds) : e.minutes ? s(a.Minute, e.minutes) : s(a.Second, e.seconds || 0)
                }(d);
                var m = ":",
                    p = !1;
                switch (i.o.intl.getLanguageCode()) {
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
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (p ? c(f, 2) : f) + m + c(h, 2);
                        return t === r.ClockHMS && (v += m + c(g, 2)), v;
                    case r.ClockMS:
                        return (p ? c(h, 2) : h) + m + c(g, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(a || (a = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(r || (r = {}))
        },
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "79jw": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "showTopTagsByCategory"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "categoryName"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                        value: "categoryName"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "include"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "showTopTagsByCategory"
                                        }
                                    }
                                }]
                            }],
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "TOP"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "tagFragment"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "topTags"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "limit"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "showTopTagsByCategory"
                                        }
                                    }
                                }]
                            }],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 341
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery TopTags($limit: Int! $showTopTagsByCategory: Boolean! $categoryName: String) {\ngame(name: $categoryName) @include(if: $showTopTagsByCategory) {\nid\ntags(tagType: TOP limit: $limit) {\n...tagFragment\n}\n}\ntopTags(limit: $limit) @skip(if: $showTopTagsByCategory) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "7ALk": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Directory_DirectoryBanner"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
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
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
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
                                        value: "name"
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
                                        value: "coverURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "1200"
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
                                        value: "avatarURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "285"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "380"
                                        }
                                    }],
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
                                        value: "followersCount"
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
                                            kind: "IntValue",
                                            value: "1"
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
                                                value: "activeDropCampaigns"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "applicableChannels"
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
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isEnabled"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tags"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "tagType"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "CONTENT"
                                                }
                                            }],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tagFragment"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "currentUser"
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
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
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
                    end: 536
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery Directory_DirectoryBanner($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\ndisplayName\ncoverURL(width: 1200 height: 180)\navatarURL(width: 285 height: 380)\nviewersCount\nfollowersCount\nstreams(first: 1) {\nedges {\nnode {\nid\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\n... on Game {\nactiveDropCampaigns {\napplicableChannels {\nid\n}\nisEnabled\n}\ntags(tagType: CONTENT) {\n...tagFragment\n}\n}\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "7sjZ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("rShu"),
                r = function(e) {
                    return e === a.a.Communities ? "COMMUNITY" : "GAME"
                }
        },
        "80G/": function(e, t, n) {},
        "8Ocm": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryHeader_GameID"
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
                body: "query DirectoryHeader_GameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        "97MP": function(e, t, n) {},
        "9DYP": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("rShu"),
                r = function(e) {
                    return e.startsWith("/communities") || e.startsWith("/directory/communities") ? a.a.Communities : a.a.Games
                }
        },
        "9x/k": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
                }(a || (a = {}))
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, a) {
                                "string" != typeof a && (a = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, a)
                            }, e
                        }
                        return a.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                l = n.shelf,
                                c = Object(i.f)(l.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: c,
                                        row_position: s
                                    }
                                };
                            return r.createElement(e, a.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(r.Component)
                }
            }
        },
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, r = n("/7QA"),
                i = n("2xye");

            function o(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                r.n.track(i.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(a || (a = {}))
        },
        B3R5: function(e, t, n) {},
        BEfv: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AnimatedTag_TagData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "contentTag"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 135
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnimatedTag_TagData($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        BIFG: function(e, t, n) {},
        C29h: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("N3I0"),
                c = n("8/mp"),
                d = n("f00E"),
                u = n("3W+h"),
                m = n("H/lO"),
                p = n("NZDK"),
                g = n("yR8l"),
                h = n("DMoW"),
                f = n("GIun"),
                v = n("Ue10"),
                k = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var i = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return r.createElement(f.a, null, r.createElement(v.Sa, {
                        onClick: t
                    }, r.createElement(v.Va, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(v.V, {
                        title: i
                    }, a.localizedName))))
                };
            var y, b = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(y || (y = {}));
            var S, C, T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            filteredTopTags: t.props.data.game && t.props.data.game.tags && t.props.data.game.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(e) {
                                return !t.props.selectedTagIDs.includes(e.id)
                            }).slice(0, 7) || []
                        }, t.renderTags = function() {
                            if (!t.props.data.game || !t.props.data.game.tags || !t.state.filteredTopTags) return null;
                            var e;
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), r.createElement(v.Va, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return r.createElement(k, {
                                "data-test-selector": y.SuggestedTags,
                                key: e.id,
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                },
                                tag: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.game,
                            n = e.data.game;
                        if (function(e, t) {
                                return e.length !== t.length || e.some(function(e, n) {
                                    return t[n] !== e
                                })
                            }(this.props.selectedTagIDs, e.selectedTagIDs) || function(e, t) {
                                var n = e || [],
                                    a = t || [];
                                return n.length !== a.length || n.some(function(e, t) {
                                    return e.id !== a[t].id
                                })
                            }(t && t.tags, n && n.tags)) {
                            var a = n && n.tags && n.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(t) {
                                return !e.selectedTagIDs.includes(t.id)
                            }).slice(0, 7) || [];
                            this.setState({
                                filteredTopTags: a
                            })
                        }
                    }, t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? r.createElement(v.Va, null, r.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.V, {
                            bold: !0
                        }, Object(s.d)("Suggestions", "TagSuggestions"))), this.renderTags(), r.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.V, {
                            bold: !0
                        }, Object(s.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(r.Component),
                w = Object(g.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: h.M.TOP,
                                limit: 50
                            }
                        }
                    }
                })(T),
                N = n("79jw"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTags = function() {
                            return t.props.categoryName ? t.props.data.game && t.props.data.game.tags && 0 !== t.props.data.game.tags.length ? t.props.data.game.tags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null : t.props.data.topTags && 0 !== t.props.data.topTags.length ? t.props.data.topTags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null
                        }, t.renderTag = function(e) {
                            return r.createElement(f.a, {
                                key: e.id
                            }, r.createElement(v.Sa, {
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                }
                            }, r.createElement(v.Va, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? r.createElement(v.Va, {
                            display: v.W.Flex,
                            justifyContent: v.Ua.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Xa, null)) : r.createElement(v.Va, null, this.renderTags())
                    }, t
                }(r.Component),
                E = Object(o.compose)(Object(g.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                categoryName: e.categoryName,
                                limit: e.tagsLimit || 5,
                                showTopTagsByCategory: !!e.categoryName
                            }
                        }
                    }
                }))(_),
                O = n("sLmD"),
                D = n("AZIu");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(S || (S = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(C || (C = {}));
            var I = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(O.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === S.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), r.createElement(c.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, r.createElement(v.Va, {
                                "data-test-selector": C.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(O.b)(e),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return r.createElement(k, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === S.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? r.createElement(E, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === S.TagAll && "" === n.state.searchTerm ? r.createElement(E, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === S.TagCategory && "SCOPE_ALL" === t ? s.o.history.push(u.a.Popular, {
                                    persistTags: !0
                                }) : n.props.type === S.TagAll && "SCOPE_CATEGORY" === t && s.o.history.push(u.a.Games, {
                                    persistTags: !0
                                }), n.props.onTagClick && (n.props.onTagClick(e), n.props.section && n.props.numSelectedTags)) {
                                var a = {
                                    section: n.props.section,
                                    tagPosition: n.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(D.b)(a)
                            }
                        }, n.onInputChange = function(e) {
                            n.props.onInputChange && n.props.onInputChange(e), clearTimeout(n.inputTimeout), n.toggleTagSearch(!0), n.setState({
                                searchTerm: e,
                                searching: !0
                            }, function() {
                                (n.props.type !== S.TagAll && n.props.type !== S.StreamTag || n.props.type === S.TagAll && "" !== n.state.searchTerm || n.props.type === S.StreamTag && "" !== n.state.searchTerm) && (n.inputTimeout = setTimeout(function() {
                                    n.search(n.state.searchTerm)
                                }, 200))
                            })
                        }, n.onFocusInput = function() {
                            "" === n.state.searchTerm ? n.onInputChange("") : n.toggleTagSearch(!0)
                        }, n.onSearchClose = function() {
                            n.toggleTagSearch(!1)
                        }, n.toggleTagSearch = function(e) {
                            n.tagSearch && n.tagSearch.toggle(e), n.setState({
                                isOpen: e
                            })
                        }, n.clearSearchTerm = function() {
                            n.tagSearch && n.tagSearch.setValue(""), n.setState({
                                searchTerm: "",
                                searching: !1
                            })
                        }, n.searchClient = new p.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.o.apollo.client,
                            logger: s.j,
                            config: s.a,
                            stats: s.o.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(l.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": C.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(s.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(v.Va, {
                            display: v.W.Flex,
                            justifyContent: v.Ua.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Xa, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : r.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(s.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== S.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return r.createElement(v.Va, null, r.createElement(w, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, n = m.a.Tags, this.props.type === S.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:SCOPE_ALL"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === S.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_ALL" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === S.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_CATEGORY" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === S.StreamTag && (n = m.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, d.a(), t)];
                                    case 1:
                                        return r = a.sent(), this.setState({
                                            searchResults: r,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(r.Component),
                L = Object(o.compose)(i.a)(I);
            n.d(t, "b", function() {
                return S
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return I
            }), n.d(t, "a", function() {
                return L
            })
        },
        CCqK: function(e, t, n) {},
        D9k0: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        FpZF: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryPage_InternationalSection"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "cursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
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
                                        value: "displayName"
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
                                            value: "after"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "cursor"
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
                                                        value: "browsePagePopularStreamsEdge"
                                                    },
                                                    directives: [{
                                                        kind: "Directive",
                                                        name: {
                                                            kind: "Name",
                                                            value: "skip"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "if"
                                                            },
                                                            value: {
                                                                kind: "Variable",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isTagsExperiment"
                                                                }
                                                            }
                                                        }]
                                                    }]
                                                }, {
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "browsePagePopularStreamsWithTagsEdge"
                                                    },
                                                    directives: [{
                                                        kind: "Directive",
                                                        name: {
                                                            kind: "Name",
                                                            value: "include"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "if"
                                                            },
                                                            value: {
                                                                kind: "Variable",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isTagsExperiment"
                                                                }
                                                            }
                                                        }]
                                                    }]
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "pageInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hasNextPage"
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
                    end: 522
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery DirectoryPage_InternationalSection($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor $isTagsExperiment: Boolean!) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\n...browsePagePopularStreamsEdge @skip(if: $isTagsExperiment)\n...browsePagePopularStreamsWithTagsEdge @include(if: $isTagsExperiment)\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("hKEm").definitions)), e.exports = a
        },
        GFmA: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        a = e.game.toLowerCase(),
                        i = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = a === l.a.CounterStrike, t)),
                        o = a === l.a.CounterStrike ? 40 : 20;
                    return r.createElement(c.Va, {
                        className: i
                    }, r.createElement("div", {
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
                u = n("On2s"),
                m = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = n.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = n.sent(), i.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, r.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, r.createElement("div", null, r.createElement(d, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), r.createElement(c.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: c.W.Flex,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(r.Component));
            var p = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(m),
                g = n("5zf8"),
                h = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, r.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, r.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, r.createElement(c.S, a.__assign({}, e))), r.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: c.f.Center,
                            background: c.r.Overlay,
                            color: c.O.Overlay,
                            display: c.W.Flex,
                            justifyContent: c.Ua.Center,
                            position: c.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(c.V, null, this.props.gameChange.label)), r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(c.V, null, Object(g.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                f = n("0INk"),
                v = n("8/mp"),
                k = n("eJ65"),
                y = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(f.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return r.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(k.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, r.createElement(c.V, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, r.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(v.b, null, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return r.createElement(h, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                b = n("kduP"),
                S = n("2xye"),
                C = function(e) {
                    return r.createElement(c.Va, null, r.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return r.createElement(c.Na, {
                            key: n
                        }, r.createElement(c.T, {
                            to: {
                                pathname: Object(b.c)(t.label),
                                state: {
                                    content: S.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, T(n, a.length - 1) ? null : ", "))
                    })))
                },
                T = function(e, t) {
                    return e === t
                },
                w = n("N0BP"),
                N = (n("XA5B"), function(e) {
                    var t = r.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, r.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, r.createElement(c.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(c.T, a.__assign({}, Object(w.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            N.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var _, E = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, r.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, r.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && r.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, r.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                O = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var i = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(E, a.__assign({}, e.topBar))), i = 3), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                D = (n("kF1+"), function(e) {
                    var t = e.icon && r.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, r.createElement(c.V, null, e.value)) : r.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(c.V, null, e.value))
                }),
                I = n("GnwI"),
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), r.createElement("div", a.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, a.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, a.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                x = Object(I.c)("PreviewCardThumbnail")(L),
                F = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(c.T, a.__assign({}, Object(w.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                P = n("H1ft"),
                R = n("ZbA5"),
                j = n("QVaV"),
                A = n("hyVY"),
                V = n("MXoD"),
                G = n("0LAi"),
                M = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(_ || (_ = {}));
            var U, B, H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? c.nb.Unlock : c.nb.Lock;
                    return r.createElement(c.Va, null, !t && r.createElement(c.xb, {
                        background: c.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: c.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: c.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: c.f.Center,
                        alignContent: c.e.Center,
                        flexDirection: c.Y.Column,
                        flexWrap: c.Z.Wrap,
                        justifyContent: c.Ua.Center,
                        "data-test-selector": _.LockSelector
                    }, r.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": _.UpsellSelector
                    }, Object(i.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(c.Va, null, r.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(c.xb, {
                        display: c.W.InlineFlex,
                        position: c.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: c.ac.Default,
                        fontSize: c.Aa.Size6,
                        background: c.r.Overlay,
                        borderRadius: c.x.Medium,
                        color: c.O.Overlay
                    }, r.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, r.createElement(c.mb, {
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function W(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function q(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(U || (U = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(B || (B = {}));
            var z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(M.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", a.__assign({
                            className: "preview-card"
                        }, Object(w.a)(this.props)), r.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(c.T, {
                            to: Object(V.a)(this.getTrackingContext(S.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(x, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: W(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(O, {
                            topLeft: r.createElement(R.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(D, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : W(this.props) ? r.createElement(O, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(D, {
                                value: Object(A.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(D, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(D, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(D, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : q(this.props) ? r.createElement(O, {
                            topLeft: r.createElement(D, {
                                value: Object(A.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(D, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(D, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return W(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return W(this.props) || q(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === B.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(N, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(V.a)(this.getTrackingContext(S.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": U.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === B.SingleGameList || this.props.context === B.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(N, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(V.a)(this.getTrackingContext(S.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": U.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(j.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(V.a)(this.getTrackingContext(S.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), q(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : W(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== B.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(V.a)(this.getTrackingContext(S.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(F, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(V.a)(this.getTrackingContext(S.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(G.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, r.createElement(p, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return W(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(H, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!W(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === P.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case P.a.Balloon:
                                return r.createElement(y, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case P.a.Inline:
                                return r.createElement(C, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case P.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                Y = Object(I.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(z);
            n.d(t, !1, function() {
                return U
            }), n.d(t, "b", function() {
                return B
            }), n.d(t, !1, function() {
                return z
            }), n.d(t, "a", function() {
                return Y
            })
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return r
            })
        },
        GxR5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            });
            var a = n("/7QA"),
                r = "https://passport.twitch.tv/forgot_username/new",
                i = "https://help.twitch.tv/customer/portal/emails/new",
                o = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                s = "https://www.twitch.tv/p/legal/terms-of-service/";

            function l() {
                return "https://passport.twitch.tv/password_resets/new?client_id=" + a.a.authSettings.clientID
            }
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, r = n("/7QA"),
                i = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(a || (a = {}));
            var o = function() {
                switch (r.o.experiments.getAssignment(i.b.Archer)) {
                    case "balloon":
                        return a.Balloon;
                    case "inline":
                        return a.Inline;
                    case "control":
                    default:
                        return a.None
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
            var a = n("/7QA"),
                r = [{
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
                    label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(r.concat(i()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = a.o.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return r.slice().sort(function(e, n) {
                    var a = t(e),
                        r = t(n);
                    return a !== r ? a - r : a + ":" + e.label < r + ":" + n.label ? -1 : 1
                }).concat(i(!0))
            }
        },
        HStj: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Live = "live", e.Videos = "videos", e.Clips = "clips", e.GameDetails = "game-details"
                }(a || (a = {}))
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n("q1tI"),
                r = n("2iEm"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = a.createElement(o.Va, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: o.Y.Column,
                    justifyContent: o.Ua.Center,
                    display: o.W.Flex
                }, a.createElement(o.V, {
                    color: o.O.Link,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, Object(i.d)("View All", "Following--ViewAllButton")), a.createElement(o.V, {
                    color: o.O.Alt2,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = a.createElement(r.a, {
                    to: e.linkTo,
                    className: "following__view-all__link"
                }, t)), a.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": s
                }, a.createElement(o.Va, {
                    margin: {
                        bottom: 5
                    }
                }, a.createElement(o.o, {
                    ratio: e.aspectRatio
                }, a.createElement(o.xb, {
                    background: o.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "i", function() {
                return d
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "k", function() {
                return m
            }), n.d(t, "l", function() {
                return p
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "m", function() {
                return h
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.LOL_CHAMPIONS_CHANGED",
                i = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function d(e) {
                return {
                    type: a,
                    languageTags: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function m(e) {
                return {
                    type: i,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function p(e) {
                var t = {},
                    n = e.data;
                for (var a in n) n.hasOwnProperty(a) && (t[n[a].id] = n[a]);
                return {
                    type: r,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function g(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function h(e, t) {
                return {
                    type: c,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        Iqxx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "broadcastTagFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tag"
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
                                value: "localizedName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tagName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isAutomated"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedDescription"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 98
                }
            };
            n.loc.source = {
                body: "fragment broadcastTagFragment on Tag {\nid\nlocalizedName\ntagName\nisAutomated\nlocalizedDescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Jl34: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_FollowGame"
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
                                    value: "FollowGameInput"
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
                                value: "followGame"
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
                                                        value: "follow"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "followedAt"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JoTo: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("f00E"),
                s = n("/IfK"),
                l = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderPortal = function(e) {
                            s.b ? s.b.provideContent(e, n.contentID) : i.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.removePortal = function() {
                            s.b ? s.b.removeContent() : i.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.contentID = Object(o.a)(), n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.children ? this.renderPortal(e.children) : this.removePortal()
                    }, t.prototype.componentDidMount = function() {
                        s.b || i.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content."), this.props.children && this.renderPortal(this.props.children)
                    }, t.prototype.componentWillUnmount = function() {
                        this.removePortal()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        KsLx: function(e, t, n) {},
        Lmqf: function(e, t, n) {
            e.exports = n.p + "assets/upsell-center-dark-6c092df86238db84cff1.png"
        },
        MJbm: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = i.o.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                a = e.offsetHeight,
                                r = e.offsetLeft,
                                i = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && a === t.height && i === t.top && r === t.left || (t.width = n, t.height = a, t.props.onResize(n, a, i, r)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            className: "resize-detector"
                        }, r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, r.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, r.createElement("div", {
                            className: "resize-detector__shrink"
                        })))
                    }, t.prototype.componentDidMount = function() {
                        if (this.growDiv) {
                            this.growDiv.parentElement || this.logger.warn("growDiv.parentElement is undefined!"), this.container = this.growDiv.parentElement.parentElement;
                            var e = this.container.style.position;
                            if ("relative" !== e && "absolute" !== e && "fixed" !== e) {
                                var t = window.getComputedStyle(this.container);
                                t && "static" === t.getPropertyValue("position") && (this.container.style.position = "relative")
                            }
                            this.onScroll(), this.growDiv.addEventListener("scroll", this.onScroll), this.shrinkDiv.addEventListener("scroll", this.onScroll)
                        } else this.logger.warn("growDiv is undefined!")
                    }, t.prototype.componentWillUnmount = function() {
                        this.growDiv.removeEventListener("scroll", this.onScroll), this.shrinkDiv.removeEventListener("scroll", this.onScroll)
                    }, t.prototype.reset = function() {
                        var e = this.growDiv,
                            t = this.shrinkDiv,
                            n = this.growChildDiv.style;
                        n.width = "100000px", n.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return r.createElement(s.Va, {
                        display: s.W.Flex,
                        flexDirection: s.Y.Column,
                        justifyContent: s.Ua.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.ac.Above
                    }, r.createElement(s.xb, {
                        color: s.O.Alt2,
                        textAlign: s.Jb.Center,
                        flexShrink: 1
                    }, r.createElement(s.mb, {
                        asset: s.nb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(s.Na, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Jb.Center
                    }, r.createElement(s.V, {
                        type: s.Nb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s.V, {
                        type: s.Nb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                c = n("8Ad5"),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === c.a.Down && (n(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var n = e.target.closest("[data-selectable]");
                            n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: n
                            }), t.props.onFocusChange && t.props.onFocusChange(n))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? r.createElement(l, null) : r.Children.only(this.props.children),
                            n = r.createElement(s.pb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(s.xb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.db.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(s.xb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.W.Block : s.W.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.db.Absolute,
                            zIndex: s.ac.Above,
                            elevation: 3
                        }, r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, n, e && r.createElement(s.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            a = document.activeElement,
                            r = Array.prototype.indexOf.call(n, a);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var i = n.item(t);
                            i.focus(), i.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: i
                            }), this.props.onFocusChange && this.props.onFocusChange(i)
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            r.o.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
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
                return a
            }), n.d(t, "b", function() {
                return v
            });
            var a, r = n("mrSG"),
                i = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                l = n("ZrRH"),
                c = n.n(l),
                d = n("6H22"),
                u = n.n(d),
                m = n("X7a7"),
                p = n("YhoA"),
                g = n("Pcnk"),
                h = n("mz1O"),
                f = i.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(a || (a = {}));
            var v = function(e, t) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var n, a, o, s, l, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = t.toLowerCase(), a = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, a && n === p.a.CounterStrike ? [4, k(a)] : [3, 2];
                                case 1:
                                    return [2, r.sent()];
                                case 2:
                                    return o && n === p.a.Hearthstone ? [4, y(o)] : [3, 4];
                                case 3:
                                    return [2, r.sent()];
                                case 4:
                                    return l && n === p.a.Overwatch ? [4, b(l)] : [3, 6];
                                case 5:
                                    return [2, r.sent()];
                                case 6:
                                    if (s && n === p.a.LeagueOfLegends && (c = i.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, S(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else i.o.store.dispatch(Object(m.b)());
                                    r.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                k = function(e) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                                case 1:
                                    return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(g.b)(g.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return a = r.sent(), f.error(a, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                                case 1:
                                    return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(g.b)(g.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: c.a
                                        }
                                    }];
                                case 2:
                                    return a = r.sent(), f.error(a, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                b = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, a, i, o, s, l, c, d, m, p, v;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                                case 1:
                                    for (n = r.sent(), a = void 0, i = 0, o = n; i < o.length; i++)
                                        for (s in a = o[i])
                                            if (a.hasOwnProperty(s))
                                                for (l = a[s], c = 0, d = l; c < d.length; c++)
                                                    if ((m = d[c]).character === e) return (t = {})[m.character] = m, [2, {
                                                        name: (p = t)[e].display_name,
                                                        label: Object(g.b)(g.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: p[e].image_width,
                                                            imageHeight: p[e].image_height,
                                                            spriteOffsetX: p[e].sprite_x_offset,
                                                            spriteOffsetY: p[e].sprite_y_offset,
                                                            spriteURL: u.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return v = r.sent(), f.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                S = function(e, t, n) {
                    if (!t || !e) return null;
                    var a = t[e],
                        r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + a.image.sprite;
                    return {
                        name: a.name,
                        label: Object(g.b)(g.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: a.image.w,
                            imageHeight: a.image.h,
                            spriteOffsetX: a.image.x,
                            spriteOffsetY: a.image.y,
                            spriteURL: r
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a, r = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(a || (a = {}));
            var i = function(e) {
                switch (e) {
                    case a.CSGOMap:
                        return Object(r.d)("Map", "CSGOMapFilter");
                    case a.CSGOSkillGroup:
                        return Object(r.d)("Rank", "CSGORankFilter");
                    case a.HearthstoneClass:
                        return Object(r.d)("Class", "HearthstoneClassFilter");
                    case a.HearthstoneMode:
                        return Object(r.d)("Mode", "HearthstoneModeFilter");
                    case a.LeagueChampion:
                        return Object(r.d)("Champion", "LeagueFilter");
                    case a.OverwatchCharacter:
                        return Object(r.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        QV0j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("oB8h"),
                r = function(e) {
                    switch (e) {
                        case a.a.Live:
                            return a.a.Live;
                        case a.a.Premiere:
                            return a.a.Premiere;
                        case a.a.Rerun:
                            return a.a.Rerun;
                        case a.a.WatchParty:
                            return a.a.WatchParty;
                        default:
                            return null
                    }
                }
        },
        RFKy: function(e, t, n) {},
        Ryvb: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SuggestedTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameName"
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
                                value: "tagType"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TagType"
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
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
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
                                        value: "gameName"
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tagType"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastTagFragment"
                                            },
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
                    end: 237
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery SuggestedTags($gameName: String! $tagType: TagType! $limit: Int!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType limit: $limit) {\n...broadcastTagFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = a
        },
        S58p: function(e, t, n) {},
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("2Ygb"),
                c = n("2xye"),
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
                    } : t, a.__assign({}, n, {
                        state: a.__assign({}, n.state, e)
                    })
                }
            }

            function f(e, t, n) {
                return n || (n = function() {}),
                    function(r) {
                        n && n(r), s.n.track(c.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return a.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.n.track(c.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: c.PageviewContent.Tag,
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
                                s.n.track(c.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return a.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (k === d.a) {
                                var e = this.props;
                                return r.createElement(k, a.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return r.createElement(k, a.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                a = e;
                            this.props.tagFilters.length > 0 && (a === c.PageviewMedium.Browse ? a = c.PageviewMedium.BrowseDirectoryTags : a === c.PageviewMedium.Game && (a = c.PageviewMedium.GameDirectoryTags));
                            var r = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: a
                            };
                            return "POP" === s.o.history.action ? r : (s.o.history.location.state && s.o.history.location.state.medium === c.PageviewMedium.TwitchHome && (r.item_tracking_id = s.o.history.location.state.item_tracking_id, r.medium = s.o.history.location.state.medium, r.content = s.o.history.location.state.content), r)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var a = this.props.trackingProps || {},
                                r = a.itemID,
                                i = a.category,
                                o = a.channelID,
                                s = a.itemPosition,
                                l = a.rowPosition,
                                c = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== r ? r : null,
                                item_position: void 0 !== s ? s : null,
                                item_subsection: null,
                                item_page: e,
                                reason_target: null,
                                reason_target_type: null,
                                reason_type: null,
                                request_id: null,
                                row_name: null,
                                row_position: void 0 !== l ? l : null,
                                section: void 0 !== n ? n : null,
                                model_tracking_id: null,
                                tag_set: JSON.stringify(c),
                                tag_streamer_set: "[]",
                                filtered: this.props.tagFilters.length > 0,
                                category: void 0 !== i ? i : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return a.__assign({
                                onVideoTitleClick: f(t, c.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: h(n, this.props.linkTo),
                                onThumbnailClick: f(t, c.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: h(n, e.channelLinkTo),
                                onChannelLoginClick: f(t, c.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: f(t, c.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: h(n, e.gameTitleLinkTo),
                                onGameTitleClick: f(t, c.PageviewContent.GameName, e.onGameTitleClick)
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
                            return a.__assign({
                                linkTo: h(n, e.linkTo),
                                onClick: f(t, c.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            })
                        }, o.displayName = Object(l.a)(o.name, k), o
                    }(r.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(i.connect)(function(t, n) {
                        var a = [];
                        if (e === c.PageviewMedium.Game) {
                            var r = n.trackingProps && n.trackingProps.categoryName;
                            a = r ? Object(p.a)(t, r) : []
                        } else a = Object(m.a)(t);
                        return {
                            tagFilters: a
                        }
                    }))(y)
                }
            }
        },
        TCeE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = 5
        },
        TJgk: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryPage_Game"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "cursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "filters"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "StreamMetadataFilterInput"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "StreamSort"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "tags"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "isTagsExperiment"
                                        }
                                    }
                                }]
                            }],
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
                                                    value: "after"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
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
                                                                value: "directoryPageCommunityStreamEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "pageInfo"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "hasNextPage"
                                                            },
                                                            arguments: [],
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
                                                    value: "after"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
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
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "filters"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "filters"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "sort"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
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
                                                                value: "directoryPageGameStreamEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "pageInfo"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "hasNextPage"
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
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "directoryWithTags"
                            },
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
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "include"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "isTagsExperiment"
                                        }
                                    }
                                }]
                            }],
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
                                            value: "after"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "cursor"
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
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "filters"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "filters"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sort"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "sort"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tags"
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
                                                        value: "directoryPageGameStreamWithTagsEdge"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "pageInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hasNextPage"
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
                        value: "directoryPageCommunityStreamEdge"
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
                                value: "cursor"
                            },
                            arguments: [],
                            directives: []
                        }, {
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
                                                    value: "50"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                                    value: "56"
                                                }
                                            }],
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
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "directoryPageGameStreamEdge"
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
                                value: "cursor"
                            },
                            arguments: [],
                            directives: []
                        }, {
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
                                                    value: "50"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                                    value: "56"
                                                }
                                            }],
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
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streamMetadata"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "counterStrikeGlobalOffensive"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "skill"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hearthstone"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "broadcasterHeroClass"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "overwatch"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "broadcasterCharacter"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "leagueOfLegends"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "championID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerDivision"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerRank"
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
                        value: "directoryPageGameStreamWithTagsEdge"
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
                                value: "cursor"
                            },
                            arguments: [],
                            directives: []
                        }, {
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
                                                    value: "50"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "tagFragment"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
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
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                                    value: "56"
                                                }
                                            }],
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
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streamMetadata"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "counterStrikeGlobalOffensive"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "skill"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hearthstone"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "broadcasterHeroClass"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "overwatch"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "broadcasterCharacter"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "leagueOfLegends"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "championID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerDivision"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summonerRank"
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
                    end: 2241
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery DirectoryPage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor $filters: StreamMetadataFilterInput $sort: StreamSort $tags: [String!] $isTagsExperiment: Boolean!) {\ndirectory(name: $name type: $type) @skip(if: $isTagsExperiment) {\nid\ndisplayName\n... on Community {\nid\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\n...directoryPageCommunityStreamEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n... on Game {\nid\nstreams(first: $limit after: $cursor languages: $languages filters: $filters sort: $sort) {\nedges {\n...directoryPageGameStreamEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\ndirectoryWithTags: game(name: $name) @include(if: $isTagsExperiment) {\nid\ndisplayName\nstreams(first: $limit after: $cursor languages: $languages filters: $filters sort: $sort tags: $tags) {\nedges {\n...directoryPageGameStreamWithTagsEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\nfragment directoryPageCommunityStreamEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\nfragment directoryPageGameStreamEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\nstreamMetadata {\ncounterStrikeGlobalOffensive {\nskill\n}\nhearthstone {\nbroadcasterHeroClass\n}\noverwatch {\nbroadcasterCharacter\n}\nleagueOfLegends {\nchampionID\nsummonerDivision\nsummonerID\nsummonerName\nsummonerRank\n}\n}\n}\n}\nfragment directoryPageGameStreamWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\nprofileImageURL(width: 50)\n}\ntags {\n...tagFragment\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\nstreamMetadata {\ncounterStrikeGlobalOffensive {\nskill\n}\nhearthstone {\nbroadcasterHeroClass\n}\noverwatch {\nbroadcasterCharacter\n}\nleagueOfLegends {\nchampionID\nsummonerDivision\nsummonerID\nsummonerName\nsummonerRank\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        Uive: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("N0BP"),
                l = n("MPw5"),
                c = n("cTNz"),
                d = n("KxT4"),
                u = n("YUvD"),
                m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.slotCreated) return [2];
                                            this.setState({
                                                slotCreated: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable, e.gdpr.blockConsentRequiredContent)];
                                        case 2:
                                            return t = n.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                                slot: t
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.logger.warn("Unable to create ad slot", {
                                                slotID: e.slotID,
                                                adUnit: e.adUnit,
                                                adSize: e.adSize,
                                                targeting: e.targeting,
                                                autoEnable: e.autoEnable,
                                                blockConsentRequiredContent: e.gdpr.blockConsentRequiredContent
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.setRef = function(e) {
                            return n.slotRef = e
                        }, n.onSlotRenderEnd = function(e) {
                            var t = e.slot.getSlotElementId();
                            if (n.state.slot && t === n.props.slotID) {
                                if (n.logger.debug("Ad slot render ended", {
                                        elementID: t,
                                        lineItemID: e.lineItemId,
                                        createdID: e.creativeId,
                                        isEmpty: e.isEmpty,
                                        serviceName: e.serviceName,
                                        size: e.size
                                    }), e.isEmpty) return;
                                if (!n.slotRef) return;
                                if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                var a;
                                if (n.props.slotID === c.b.directory.banner) return void((a = n.slotRef.querySelector(m)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                })
                            }
                        }, n.slotRendered = function(e) {
                            n.props.slotRendered && n.props.slotRendered(e)
                        }, n.shouldCreateSlot = function(e) {
                            return e.gdpr.status !== d.b.Loading && e.trackingSet
                        }, n.state = {
                            shouldDisplay: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = r.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", r.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(i.Component),
                h = Object(u.a)(d.c.Amazon)(g);
            var f = Object(a.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(h);
            n.d(t, "a", function() {
                return f
            })
        },
        VW9G: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("fvjX"),
                i = n("oA7Y"),
                o = n("Igt5"),
                s = n("mrSG"),
                l = n("q1tI"),
                c = n("yR8l"),
                d = n("fVj5"),
                u = n("coeN"),
                m = n("Ue10"),
                p = n("fbOE"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.wrapText = function(e) {
                            var n = t.props,
                                a = n.addTagFilterDirectory,
                                r = n.addTagFilterBrowse,
                                i = n.data,
                                o = n.directoryName,
                                s = i && i.contentTag;
                            if (!s) return e;
                            return l.createElement(m.T, {
                                onClick: function() {
                                    return o ? a(s, o) : r(s)
                                },
                                "data-test-selector": "international-section-header-link"
                            }, l.createElement("strong", null, e))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.languageCode;
                        return Object(d.a)() ? l.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(m.V, {
                            type: m.Nb.H4,
                            color: m.O.Base,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header-tags"
                        }, Object(u.a)(e, this.wrapText))) : l.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(m.V, {
                            type: m.Nb.H4,
                            color: m.O.Alt2,
                            fontSize: m.Aa.Size5,
                            transform: m.Mb.Uppercase,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header"
                        }, Object(u.b)(e)))
                    }, t
                }(l.Component),
                h = Object(c.a)(p, {
                    options: function(e) {
                        var t = Object(u.c)(e.languageCode);
                        return {
                            skip: !Object(d.a)() || !t,
                            variables: {
                                id: t
                            }
                        }
                    }
                })(g);
            var f = Object(a.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    addTagFilterBrowse: i.f,
                    addTagFilterDirectory: o.h
                }, e)
            })(h);
            n.d(t, "a", function() {
                return f
            })
        },
        Ve5Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UpsellCenter_Channel"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcastSettings"
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
                    end: 162
                }
            };
            n.loc.source = {
                body: "query UpsellCenter_Channel($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nprofileImageURL(width: 70)\nbroadcastSettings {\nid\ngame {\nid\ndisplayName\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        WRGI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function l(e) {
                return e.browse.tagFilters
            }
            r.o.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case i.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            r = e.tagFilters.slice();
                        return n && r.push(t.addedTag), a.__assign({}, e, {
                            tagFilters: r
                        });
                    case i.d:
                        return a.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case i.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return a.__assign({}, e, {
                            tagFilters: s
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
                i = n("/7QA"),
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
                l = function(e) {
                    return e && s[e] || "en_US"
                },
                c = n("Igt5");
            n.d(t, "b", function() {
                return p
            }), n.d(t, "d", function() {
                return g
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "a", function() {
                return f
            });
            var d = "languageTags",
                u = 0,
                m = 350;

            function p() {
                var e = this;
                return function(t) {
                    clearTimeout(u), u = setTimeout(function() {
                        return a.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, d, u, m;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = i.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), n = i.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(d)];
                                    case 2:
                                        return (u = a.sent()).body ? t(Object(c.l)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw m = a.sent(), t(Object(c.j)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, m)
                }
            }

            function g(e, t) {
                var n = this;
                return function(r) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return a.__generator(this, function(a) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), i.l.set(d, o), r(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function h(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return i.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function f() {
                return i.l.get(d, [])
            }
        },
        XA5B: function(e, t, n) {},
        YhoA: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(a || (a = {}))
        },
        Z8yi: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var a, r, i, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((a = {})[u.a.Live] = "stream-type-indicator--live", a[u.a.Premiere] = "stream-type-indicator--premiere", a[u.a.Rerun] = "stream-type-indicator--rerun", a[u.a.WatchParty] = "stream-type-indicator--rerun", a),
                g = ((r = {})[u.a.Premiere] = m.nb.VideoPremiere, r[u.a.Rerun] = m.nb.VideoRerun, r[u.a.WatchParty] = m.nb.VideoRerun, r),
                h = ((i = {})[u.a.Premiere] = m.ob.Live, i[u.a.Rerun] = m.ob.Inherit, i[u.a.WatchParty] = m.ob.Inherit, i),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(m.xb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.W.Flex
                        }, c.createElement(m.Va, {
                            display: m.W.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(m.V, {
                            type: m.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(m.xb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(m.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.W.Flex,
                            alignItems: m.f.Center
                        }, c.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : c.createElement(m.mb, {
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
                }(c.Component);
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
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var r, i, o, s;
                            return a.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, r), o = a.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = i.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, a.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return a.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = a.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(n) {
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
                            headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.o.store.getState(),
                            a = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(n);
                        return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            a[e] && delete a[e]
                        }), a
                    }, e.logger = r.o.logger.withCategory("legacy-api"), e
                }()
        },
        bUox: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10");
            ! function(e) {
                e[e.NoResults = 0] = "NoResults", e[e.TooManyTags = 1] = "TooManyTags"
            }(a || (a = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderRemoveButton = function() {
                        if (t.props.tagFilters && t.props.tagFilters.length && t.props.onClickRemoveLastTag) {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            return i.createElement(s.Va, {
                                margin: {
                                    top: 2
                                }
                            }, i.createElement(s.z, {
                                onClick: t.props.onClickRemoveLastTag,
                                type: s.F.Hollow
                            }, Object(o.d)("Remove the {lastAdded} tag and try again", {
                                lastAdded: e.localizedName || e.tagName
                            }, "TagError")))
                        }
                    }, t.getErrorMessage = function() {
                        switch (t.props.errorType) {
                            case a.NoResults:
                                return Object(o.d)("No results found", "TagError");
                            case a.TooManyTags:
                                return Object(o.d)("You cannot apply more than five tags", "TagError");
                            default:
                                return t.props.errorType
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(s.Va, null, i.createElement(s.V, {
                        type: s.Nb.H3
                    }, this.getErrorMessage()), i.createElement(s.V, {
                        color: s.O.Alt2,
                        fontSize: s.Aa.Size5
                    }, Object(o.d)("Try adjusting your tags to find what you're looking for.", "TagError")), this.renderRemoveButton())
                }, t
            }(i.Component);
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return l
            })
        },
        cRsL: function(e, t, n) {},
        cnlr: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("Lmqf"),
                d = n.n(c),
                u = n("yR8l"),
                m = n("1/iK"),
                p = n("y5D0"),
                g = n("ugtu"),
                h = n("D7An");
            ! function(e) {
                e.Learn = "learn", e.Support = "support", e.LiveUp = "liveup", e.Recommendation = "rec", e.Bullet = "bullet"
            }(a || (a = {}));
            var f, v, k = n("Ue10"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            upsellCenterChannelsAssignment: t.props.showDefault ? null : function() {
                                var e = l.o.experiments.getAssignment(h.b.WebSideNavUpsellCenterChannels);
                                return e === a.Learn || e === a.Support || e === a.LiveUp || e === a.Recommendation || e === a.Bullet ? e : null
                            }()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, this.renderText())
                    }, t.prototype.renderText = function() {
                        if (!this.props.data || this.props.showDefault || !this.state.upsellCenterChannelsAssignment) return this.renderDefault();
                        switch (this.state.upsellCenterChannelsAssignment) {
                            case a.Learn:
                                return this.renderTextContent(Object(l.d)("Want to master <x:bold>{game}</x:bold>?", {
                                    game: this.props.data.game,
                                    "x:bold": g.j
                                }, "UpsellCenterText"), Object(l.d)("Sign up to learn from the best.", "UpsellCenterText"));
                            case a.Support:
                                return this.renderTextContent(Object(l.d)("Sign up and follow to support <x:bold>{name}</x:bold> and all your favorite streamers!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"));
                            case a.LiveUp:
                                return this.renderTextContent(Object(l.d)("Late to the show?", "UpsellCenterText"), Object(l.d)("Sign up and get notifications next time <x:bold>{name}</x:bold> goes live.", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"));
                            case a.Recommendation:
                                return this.renderTextContent(Object(l.d)("Discover more streamers like <x:bold>{name}</x:bold>!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"), Object(l.d)("Sign up to see which channels we've picked just for you.", "UpsellCenterText"));
                            case a.Bullet:
                                return this.renderBulletPoints(Object(l.d)("Sign up to experience the best of <x:bold>{name}</x:bold>:", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"), [Object(l.d)("Chat with other fans", "UpsellCenterText"), Object(l.d)("Capture your favorite moments", "UpsellCenterText"), Object(l.d)("Watch in Dark Mode!", "UpsellCenterText")]);
                            default:
                                return this.renderDefault()
                        }
                    }, t.prototype.renderDefault = function() {
                        return this.renderTextContent(Object(l.d)("Join the Twitch community!", "UpsellCenterText"), Object(l.d)("Discover the best live streams anywhere.", "UpsellCenterText"))
                    }, t.prototype.renderTextContent = function(e, t) {
                        return i.createElement(i.Fragment, null, i.createElement(k.V, {
                            color: k.O.Base,
                            fontSize: k.Aa.Size4
                        }, e), i.createElement(k.V, {
                            color: k.O.Alt2,
                            fontSize: k.Aa.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return i.createElement(k.Va, {
                                key: "upsell-center-text-" + t,
                                display: k.W.Flex,
                                flexDirection: k.Y.Row,
                                alignItems: k.f.Start
                            }, i.createElement(k.mb, {
                                type: k.ob.Alt2,
                                asset: k.nb.Check
                            }), i.createElement(k.Va, {
                                margin: {
                                    left: 1
                                },
                                textAlign: k.Jb.Left
                            }, i.createElement(k.V, {
                                color: k.O.Alt2,
                                fontSize: k.Aa.Size6
                            }, e)))
                        });
                        return i.createElement(i.Fragment, null, i.createElement(k.V, {
                            color: k.O.Base,
                            fontSize: k.Aa.Size4
                        }, e), i.createElement(k.Va, {
                            margin: {
                                top: 1
                            }
                        }, n))
                    }, t
                }(i.Component),
                b = n("2xye");
            ! function(e) {
                e.SideNav = "sidenav"
            }(f || (f = {})),
            function(e) {
                e.Upsell = "upsell"
            }(v || (v = {}));
            var S = n("Ve5Q"),
                C = (n("wqI2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.signup = function() {
                            ! function(e) {
                                var t = r.__assign({
                                    section: f.SideNav,
                                    click_subsection: v.Upsell
                                }, e);
                                l.n.track(b.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return i.createElement(k.xb, {
                            background: k.r.AccentAlt2,
                            display: k.W.Flex,
                            flexDirection: k.Y.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), i.createElement(k.Va, {
                            textAlign: k.Jb.Center
                        }, this.renderText(), i.createElement(k.z, {
                            onClick: this.signup,
                            size: k.D.Large
                        }, i.createElement(k.Va, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement(k.V, {
                            color: k.O.Base
                        }, Object(l.d)("Sign up", "UpsellCenter"))))))
                    }, t.prototype.renderText = function() {
                        if (!this.props.channelLogin) return i.createElement(y, {
                            showDefault: !0
                        });
                        if (this.props.data && this.props.data.user) {
                            var e = {
                                game: this.props.data.user.broadcastSettings && this.props.data.user.broadcastSettings.game && this.props.data.user.broadcastSettings.game.displayName || "",
                                channelDisplayName: this.props.data.user.displayName || ""
                            };
                            return i.createElement(y, {
                                data: e
                            })
                        }
                    }, t.prototype.renderImage = function() {
                        var e = i.createElement(k.S, {
                            alt: Object(l.d)("Upsell Center", "UpsellCenter"),
                            src: d.a
                        });
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? i.createElement(k.Va, {
                            position: k.db.Relative
                        }, i.createElement(k.Va, {
                            className: "upsell-center__avatar",
                            position: k.db.Absolute,
                            zIndex: k.ac.Above
                        }, i.createElement(k.q, {
                            src: this.props.data.user.profileImageURL,
                            alt: Object(l.d)("{displayName}'s Profile Image", {
                                displayName: this.props.data.user.displayName || ""
                            }, "UpsellCenter"),
                            borderRadius: k.x.Large,
                            size: 40
                        })), e) : e
                    }, t.prototype.trackImpression = function() {
                        this.impressionEventFired || (! function(e) {
                            var t = r.__assign({
                                section: f.SideNav
                            }, e);
                            l.n.track(b.SpadeEventType.ItemDisplay, t)
                        }(), this.impressionEventFired = !0)
                    }, t
                }(i.PureComponent));
            var T = Object(s.compose)(Object(u.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin || ""
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(o.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        signup: function() {
                            return Object(p.g)(m.a.SideNavUpsellCenter)
                        }
                    }, e)
                }))(C),
                w = n("kRBY"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn || this.props.collapsed ? null : i.createElement(T, r.__assign({}, this.props))
                    }, t
                }(i.PureComponent);
            var _ = Object(o.connect)(function(e) {
                return {
                    collapsed: !e.ui.sideNavExpanded,
                    isLoggedIn: Object(w.f)(e)
                }
            })(N);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, "a", function() {
                return _
            })
        },
        coeN: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return s
            });
            var a = n("/7QA"),
                r = function(e) {
                    switch (e) {
                        case "ar":
                            return Object(a.d)("Channels in Arabic", "DirectoryInternationalSectionHeader");
                        case "asl":
                            return Object(a.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader");
                        case "bg":
                            return Object(a.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader");
                        case "cs":
                            return Object(a.d)("Channels in Czech", "DirectoryInternationalSectionHeader");
                        case "da":
                            return Object(a.d)("Channels in Danish", "DirectoryInternationalSectionHeader");
                        case "de":
                            return Object(a.d)("Channels in German", "DirectoryInternationalSectionHeader");
                        case "el":
                            return Object(a.d)("Channels in Greek", "DirectoryInternationalSectionHeader");
                        case "es":
                            return Object(a.d)("Channels in Spanish", "DirectoryInternationalSectionHeader");
                        case "fi":
                            return Object(a.d)("Channels in Finnish", "DirectoryInternationalSectionHeader");
                        case "fr":
                            return Object(a.d)("Channels in French", "DirectoryInternationalSectionHeader");
                        case "hu":
                            return Object(a.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader");
                        case "it":
                            return Object(a.d)("Channels in Italian", "DirectoryInternationalSectionHeader");
                        case "ja":
                            return Object(a.d)("Channels in Japanese", "DirectoryInternationalSectionHeader");
                        case "ko":
                            return Object(a.d)("Channels in Korean", "DirectoryInternationalSectionHeader");
                        case "nl":
                            return Object(a.d)("Channels in Dutch", "DirectoryInternationalSectionHeader");
                        case "no":
                            return Object(a.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader");
                        case "pl":
                            return Object(a.d)("Channels in Polish", "DirectoryInternationalSectionHeader");
                        case "pt":
                            return Object(a.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader");
                        case "ru":
                            return Object(a.d)("Channels in Russian", "DirectoryInternationalSectionHeader");
                        case "sk":
                            return Object(a.d)("Channels in Slovak", "DirectoryInternationalSectionHeader");
                        case "sv":
                            return Object(a.d)("Channels in Swedish", "DirectoryInternationalSectionHeader");
                        case "th":
                            return Object(a.d)("Channels in Thai", "DirectoryInternationalSectionHeader");
                        case "tr":
                            return Object(a.d)("Channels in Turkish", "DirectoryInternationalSectionHeader");
                        case "vi":
                            return Object(a.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader");
                        case "zh":
                            return Object(a.d)("Channels in Chinese", "DirectoryInternationalSectionHeader");
                        default:
                            return Object(a.d)("Channels in English", "DirectoryInternationalSectionHeader")
                    }
                };

            function i(e) {
                switch (e) {
                    case "en":
                        return "6ea6bca4-4712-4ab9-a906-e3336a9d8039";
                    case "it":
                        return "5b9935eb-1e9a-4217-98ad-62bda5cff0d1";
                    case "es":
                        return "d4bb9c58-2141-4881-bcdc-3fe0505457d1";
                    case "ko":
                        return "ab2975e3-b9ca-4b1a-a93e-fb61a5d5c3a4";
                    case "ru":
                        return "0569b171-2a2b-476e-a596-5bdfb45a1327";
                    case "fi":
                        return "220eb274-ab25-425b-8a9b-826103404997";
                    case "fr":
                        return "6f655045-9989-4ef7-8f85-1edcec42d648";
                    case "hu":
                        return "a298cca5-d408-47c7-a1e7-0c76ca878bc6";
                    case "sv":
                        return "145b073b-cb70-4e91-b170-f5fab2ebba05";
                    case "pt":
                        return "39ee8140-901a-4762-bfca-8260dea1310f";
                    case "de":
                        return "9166ad14-41f1-4b04-a3b8-c8eb838c6be6";
                    case "ja":
                        return "6ba1d230-e52f-4d81-b1e0-41f25a8a9f5d";
                    case "nl":
                        return "e13e6734-37ae-4d85-897b-3015f0168355";
                    case "pl":
                        return "f9d04efa-6e25-49bf-bf0a-da3e2addaf1b";
                    case "cs":
                        return "a6cddaba-f0ce-4526-9087-6de2f603a24d";
                    case "no":
                        return "5647bf35-f99e-49aa-8578-0e07d936188c";
                    case "tr":
                        return "f08d5873-f0c7-4912-94ba-a41933b4c141";
                    case "sk":
                        return "9b773670-05f8-4c06-ac99-e6649f906171";
                    case "th":
                        return "f19c7524-c18d-41af-9f39-034c8d0b0fee";
                    case "ar":
                        return "73cc486a-e56b-41ed-a1df-7afedbc84f6f";
                    case "da":
                        return "43e598cc-918b-4247-b02c-b13543a1eac9";
                    case "el":
                        return "902f6815-a655-4918-99e7-48c74a71feac";
                    case "zh":
                        return "74c92063-a389-4fd2-8460-b1bb82b04ec7";
                    case "ro":
                        return "75a99c80-0f15-4159-b1fd-3812c25b4aca";
                    case "bg":
                        return "21d85c73-701f-4259-8c4e-4321265847b5";
                    case "asl":
                        return "5ad4b978-495f-4093-9461-c194f58201ab";
                    case "zh-hk":
                        return "0c8c6543-4019-47d0-9b8a-57a81ee6ace5";
                    case "vi":
                        return "ba3b69fe-899c-4518-ac46-707275e3eba1";
                    case "other":
                        return "fd76c790-0505-4c4c-865a-d6bd139c0901";
                    default:
                        return null
                }
            }
            var o = function(e) {
                    return e
                },
                s = function(e, t) {
                    switch (void 0 === t && (t = o), e) {
                        case "ar":
                            return Object(a.d)("Channels in <x:bold>Arabic</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "asl":
                            return Object(a.d)("Channels in <x:bold>American Sign Language</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "bg":
                            return Object(a.d)("Channels in <x:bold>Bulgarian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "cs":
                            return Object(a.d)("Channels in <x:bold>Czech</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "da":
                            return Object(a.d)("Channels in <x:bold>Danish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "de":
                            return Object(a.d)("Channels in <x:bold>German</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "el":
                            return Object(a.d)("Channels in <x:bold>Greek</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "es":
                            return Object(a.d)("Channels in <x:bold>Spanish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "fi":
                            return Object(a.d)("Channels in <x:bold>Finnish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "fr":
                            return Object(a.d)("Channels in <x:bold>French</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "hu":
                            return Object(a.d)("Channels in <x:bold>Hungarian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "it":
                            return Object(a.d)("Channels in <x:bold>Italian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ja":
                            return Object(a.d)("Channels in <x:bold>Japanese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ko":
                            return Object(a.d)("Channels in <x:bold>Korean</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "nl":
                            return Object(a.d)("Channels in <x:bold>Dutch</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "no":
                            return Object(a.d)("Channels in <x:bold>Norwegian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "pl":
                            return Object(a.d)("Channels in <x:bold>Polish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "pt":
                            return Object(a.d)("Channels in <x:bold>Portuguese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ru":
                            return Object(a.d)("Channels in <x:bold>Russian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "sk":
                            return Object(a.d)("Channels in <x:bold>Slovak</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "sv":
                            return Object(a.d)("Channels in <x:bold>Swedish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "th":
                            return Object(a.d)("Channels in <x:bold>Thai</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeaer");
                        case "tr":
                            return Object(a.d)("Channels in <x:bold>Turkish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "vi":
                            return Object(a.d)("Channels in <x:bold>Vietnamese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "zh":
                            return Object(a.d)("Channels in <x:bold>Chinese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        default:
                            return Object(a.d)("Channels in <x:bold>English</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader")
                    }
                }
        },
        cras: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("fvjX"),
                o = n("/7QA"),
                s = n("vSJR"),
                l = n("yR8l"),
                c = n("kduP"),
                d = n("HStj");

            function u(e) {
                switch (e) {
                    case d.a.Live:
                        return Object(o.d)("Live Channels", "DirectoryContentDropdownLabels");
                    case d.a.Videos:
                        return Object(o.d)("Videos", "DirectoryContentDropdownLabels");
                    case d.a.Clips:
                        return Object(o.d)("Clips", "DirectoryContentDropdownLabels");
                    case d.a.GameDetails:
                        return Object(o.d)("Game Details", "DirectoryContentDropdownLabels");
                    default:
                        return e
                }
            }
            var m = n("7sjZ"),
                p = n("GnwI"),
                g = n("rShu"),
                h = n("Ue10"),
                f = n("lwN9"),
                v = (n("KsLx"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getLinkTo = function(e) {
                            var n = t.props.directoryType === g.a.Games ? Object(c.c)(t.props.directoryName) : Object(c.a)(t.props.directoryName);
                            switch (e) {
                                case d.a.Live:
                                    return n;
                                case d.a.Videos:
                                    return n + "/videos/all";
                                case d.a.Clips:
                                    return n + "/clips";
                                case d.a.GameDetails:
                                    return n + "/details";
                                default:
                                    return e
                            }
                        }, t.clickHandler = function() {
                            t.balloonWrapperRef && t.balloonWrapperRef.toggleBalloon(!1)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(r.Fragment, null, this.renderContentItems(d.a.Live), this.renderContentItems(d.a.Videos), this.renderContentItems(d.a.Clips), this.renderContentItems(d.a.GameDetails)),
                            t = r.createElement(h.Va, {
                                className: "content-type-dropdown__button-content"
                            }, u(this.props.contentType));
                        return r.createElement(h.Va, null, r.createElement(h.Va, {
                            margin: {
                                left: .5
                            }
                        }, r.createElement(h.V, null, Object(o.d)("Showing", "DirectoryHeader"))), r.createElement(s.a, {
                            buttonLabel: t,
                            "data-a-target": "content-type-dropdown"
                        }, e))
                    }, t.prototype.renderContentItems = function(e) {
                        if (e === d.a.GameDetails && this.props.data.directory && !this.props.data.directory.product) return null;
                        var t = this.props.contentType === e ? r.createElement(h.Va, {
                                attachRight: !0,
                                position: h.db.Absolute,
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(h.mb, {
                                asset: h.nb.Check,
                                height: 18,
                                width: 18
                            })) : null,
                            n = u(e).replace(/ /g, "-").toLowerCase();
                        return r.createElement(h.Sa, {
                            "data-filter-type": e,
                            linkTo: this.getLinkTo(e),
                            onClick: this.clickHandler,
                            "data-a-target": "game-directory-" + n + "-tab",
                            selected: !1
                        }, r.createElement(h.Va, {
                            display: h.W.Flex,
                            flexWrap: h.Z.Wrap,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u(e), t))
                    }, t
                }(r.Component)),
                k = Object(i.compose)(Object(l.a)(f, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(m.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(p.c)("DirectoryContentDropdown", {
                    autoReportInteractive: !0
                }))(v);
            n.d(t, !1, function() {
                return v
            }), n.d(t, "a", function() {
                return k
            })
        },
        cvJQ: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-modes-2bfeb4646fb1d85ddd6c.png"
        },
        efEE: function(e, t, n) {},
        fbOE: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "InternationalHeader_Tag"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "contentTag"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 139
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery InternationalHeader_Tag($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
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
        hKEm: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePagePopularStreamsEdge"
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
                                value: "cursor"
                            },
                            arguments: [],
                            directives: []
                        }, {
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
                                                    value: "50"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                                                value: "id"
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
                                                    value: "56"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePagePopularStreamsWithTagsEdge"
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
                                value: "cursor"
                            },
                            arguments: [],
                            directives: []
                        }, {
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
                                                    value: "50"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                                                value: "id"
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
                                                    value: "56"
                                                }
                                            }],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "tagFragment"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
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
                    end: 616
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment browsePagePopularStreamsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntype\n}\n}\nfragment browsePagePopularStreamsWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntags {\n...tagFragment\n}\ntype\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        hX9f: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("GFmA"),
                c = n("kduP"),
                d = n("2xye"),
                u = n("fVj5"),
                m = n("rShu"),
                p = n("yI6f"),
                g = n("T2RZ"),
                h = n("Ue10"),
                f = (n("zrz1"), Object(g.a)(d.PageviewMedium.Game, p.b.Live, p.c.BrowseInCategoryChannels)(l.a)),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(u.b)(), t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var r = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                                i = d.PageviewMedium.Game;
                            t.props.trackingMedium && (i = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: a.__assign({}, o, {
                                    medium: i,
                                    content: r,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== m.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e, t.props.streamNode.broadcaster && t.props.streamNode.broadcaster.id)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === m.a.Games ? l.b.SingleGameList : l.b.MixedGameAndChannelList,
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
                            gameTitleLinkTo: this.getLinkTo(Object(c.c)(this.shouldShowGame("name")), t),
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
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, r.createElement(h.Va, {
                            className: "stream-thumbnail__card",
                            position: h.db.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, r.createElement(f, a.__assign({}, n, {
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
                }(r.Component),
                k = Object(o.compose)(i.a)(v);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, "b", function() {
                return k
            })
        },
        k5cX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_UnfollowGame"
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
                                    value: "UnfollowGameInput"
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
                                value: "unfollowGame"
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
                                        value: "follow"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "followedAt"
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
                    end: 124
                }
            };
            n.loc.source = {
                body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "kF1+": function(e, t, n) {},
        kJyr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryRoot_Directory"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
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
                    end: 86
                }
            };
            n.loc.source = {
                body: "query DirectoryRoot_Directory($name: String!) {\ngame(name: $name) {\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kVMo: function(e, t, n) {},
        lRiI: function(e, t, n) {},
        lwN9: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Directory_ContentTypeDropdown"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
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
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
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
                                                value: "product"
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
                    end: 153
                }
            };
            n.loc.source = {
                body: "query Directory_ContentTypeDropdown($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\n... on Game {\nid\nproduct {\nid\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        m493: function(e, t, n) {},
        "mHR/": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            });
            var a = function(e) {
                    return "/communities/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName/:encodedLanguage" === e
                },
                r = function(e) {
                    return "/directory/game/:encodedCommunityName/clips" === e
                },
                i = function(e) {
                    return "/communities/:encodedCommunityName/details" === e || "/directory/game/:encodedCommunityName/details" === e
                },
                o = function(e) {
                    return "/directory/game/:encodedCommunityName/videos/:filter" === e
                }
        },
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function l(e) {
                return e.directory.languageTags
            }
            r.o.store.registerReducer("directory", function(e, t) {
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
                    case i.a:
                        return a.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            leagueOfLegends: {
                                apiData: t.apiData,
                                championsMap: t.championsMap,
                                isError: !1,
                                isLoading: !1,
                                version: t.apiVersion
                            }
                        });
                    case i.c:
                        return a.__assign({}, e, {
                            leagueOfLegends: a.__assign({}, e.leagueOfLegends, {
                                isError: t.leagueOfLegendsChampionsErrored,
                                isLoading: !1
                            })
                        });
                    case i.d:
                        return a.__assign({}, e, {
                            leagueOfLegends: a.__assign({}, e.leagueOfLegends, {
                                isError: !1,
                                isLoading: t.leagueOfLegendsChampionsLoading
                            })
                        });
                    case i.e:
                        var n = a.__assign({}, e.tagFilters),
                            r = n[t.categoryName];
                        return (void 0 === r || r.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), a.__assign({}, e, {
                            tagFilters: n
                        });
                    case i.f:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), a.__assign({}, e);
                    case i.g:
                        if (void 0 === e.tagFilters[t.categoryName]) return a.__assign({}, e);
                        var s = e.tagFilters[t.categoryName].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[t.categoryName] = s, a.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        mpcK: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("moLQ"),
                r = n("mrSG"),
                i = n("/7QA"),
                o = "core.game-filters.CSGO_MAP_PREFERENCES_UPDATED",
                s = "core.game-filters.LEAGUE_CHAMPION_PREFERENCES_UPDATED",
                l = "core.game-filters.OVERWATCH_CHARACTER_PREFERENCES_UPDATED",
                c = "core.game-filters.HEARTHSTONE_CLASS_PREFERENCES_UPDATED",
                d = "core.game-filters.HEARTHSTONE_MODE_PREFERENCES_UPDATED";

            function u(e) {
                return {
                    type: o,
                    csgoMap: e
                }
            }

            function m(e) {
                return {
                    type: s,
                    leagueChampion: e
                }
            }

            function p(e) {
                return {
                    type: l,
                    overwatchCharacter: e
                }
            }

            function g(e) {
                return {
                    type: c,
                    hearthstoneClass: e
                }
            }

            function h(e) {
                return {
                    type: d,
                    hearthstoneMode: e
                }
            }
            var f = "csgoMapFilter",
                v = "hearthstoneClassFilter",
                k = "hearthstoneModeFilter",
                y = "leagueChampionFilter",
                b = "overwatchHeroFilter",
                S = 0;

            function C(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.m.set(f, e), n(u(e)), [2]
                        })
                    })
                }
            }

            function T() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.remove(f), t(u("")), [2]
                        })
                    })
                }
            }

            function w(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.m.set(y, e), n(m(e)), [2]
                        })
                    })
                }
            }

            function N() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.remove(y), t(m(S)), [2]
                        })
                    })
                }
            }

            function _(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.m.set(b, e), n(p(e)), [2]
                        })
                    })
                }
            }

            function E(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.m.set(v, e), n(g(e)), [2]
                        })
                    })
                }
            }

            function O() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.remove(b), t(p("")), [2]
                        })
                    })
                }
            }

            function D() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.remove(v), t(g("")), [2]
                        })
                    })
                }
            }

            function I(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.m.set(k, e), n(h(e)), [2]
                        })
                    })
                }
            }

            function L() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.remove(k), t(h("")), [2]
                        })
                    })
                }
            }

            function x() {
                return {
                    csgoMap: i.m.get(f, ""),
                    hearthstoneClass: i.m.get(v, ""),
                    hearthstoneMode: i.m.get(k, ""),
                    leagueChampion: i.m.get(y, S),
                    overwatchCharacter: i.m.get(b, "")
                }
            }

            function F(e) {
                return e.gameFilters.csgoMap
            }

            function P(e) {
                return e.gameFilters.leagueChampion
            }

            function R(e) {
                return e.gameFilters.overwatchCharacter
            }

            function j(e) {
                return e.gameFilters.hearthstoneClass
            }

            function A(e) {
                return e.gameFilters.hearthstoneMode
            }
            i.o.store.registerReducer("gameFilters", function(e, t) {
                switch (void 0 === e && (e = x()), t.type) {
                    case o:
                        return r.__assign({}, e, {
                            csgoMap: t.csgoMap
                        });
                    case c:
                        return r.__assign({}, e, {
                            hearthstoneClass: t.hearthstoneClass
                        });
                    case d:
                        return r.__assign({}, e, {
                            hearthstoneMode: t.hearthstoneMode
                        });
                    case s:
                        return r.__assign({}, e, {
                            leagueChampion: t.leagueChampion
                        });
                    case l:
                        return r.__assign({}, e, {
                            overwatchCharacter: t.overwatchCharacter
                        });
                    default:
                        return e
                }
            });
            var V, G, M, U = "core.game-sorts.CSGO_GAME_SORT_UPDATED",
                B = "core.game-sorts.LEAGUE_GAME_SORT_UPDATED";

            function H(e) {
                return {
                    type: U,
                    sortOption: e
                }
            }

            function W(e) {
                return {
                    type: B,
                    sortOption: e
                }
            }

            function q(e) {
                return e.gameSorts.csgoSort
            }

            function z(e) {
                return e.gameSorts.leagueSort
            }! function(e) {
                e.CSGO = "counter-strike: global offensive", e.League = "league of legends"
            }(V || (V = {})),
            function(e) {
                e.Rank = "CSGO_SKILL", e.ViewerCount = "VIEWER_COUNT"
            }(G || (G = {})),
            function(e) {
                e.Rank = "LOL_SUMMONER_RANK", e.ViewerCount = "VIEWER_COUNT"
            }(M || (M = {})), i.o.store.registerReducer("gameSorts", function(e, t) {
                switch (void 0 === e && (e = {
                    csgoSort: G.ViewerCount,
                    leagueSort: M.ViewerCount
                }), t.type) {
                    case U:
                        return r.__assign({}, e, {
                            csgoSort: t.sortOption
                        });
                    case B:
                        return r.__assign({}, e, {
                            leagueSort: t.sortOption
                        });
                    default:
                        return e
                }
            });
            var Y = n("q1tI"),
                Q = n("/MKj"),
                $ = n("fvjX"),
                X = n("0GkP"),
                J = n("kRBY"),
                K = n("OhOW"),
                Z = n("Igt5"),
                ee = n("17x9"),
                te = n("sLlB"),
                ne = n("ZDlU"),
                ae = n("MJbm"),
                re = n("yR8l"),
                ie = n("V+GM"),
                oe = n("geRD"),
                se = n("NvVO"),
                le = n("MPw5"),
                ce = n("2xye"),
                de = n("Uive"),
                ue = n("cTNz"),
                me = n("GnwI"),
                pe = n("bUox"),
                ge = n("TCeE"),
                he = n("fVj5"),
                fe = n("AZIu"),
                ve = n("0Rl0"),
                ke = n("rShu"),
                ye = n("9DYP"),
                be = n("8/mp"),
                Se = n("eJ65"),
                Ce = n("Ue10"),
                Te = (n("D9k0"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                            t.props.onSearch(e.currentTarget.value)
                        }, t.onToggle = function(e) {
                            return t.balloonOpen = !e
                        }, t.renderSections = function() {
                            return t.props.sections ? t.props.sections.map(function(e) {
                                return [Y.createElement(Ce.Na, {
                                    padding: {
                                        x: 1,
                                        top: .5
                                    },
                                    key: "header"
                                }, Y.createElement(Ce.V, {
                                    color: Ce.O.Alt2
                                }, e.title)), e.items]
                            }) : null
                        }, t.renderSelected = function() {
                            return t.props.selected ? Y.createElement(Ce.xb, {
                                borderBottom: !0
                            }, Y.createElement(Ce.Na, {
                                padding: {
                                    x: 1,
                                    top: .5
                                }
                            }, Y.createElement(Ce.V, {
                                color: Ce.O.Alt2
                            }, t.props.selectedTitle)), t.props.selected) : null
                        }, t.setSearchRef = function(e) {
                            t.props.searchRefDelegate && t.props.searchRefDelegate(e)
                        }, t.setToggleRef = function(e) {
                            return t.toggleRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        (!this.props.selected && e.selected || this.props.selected && !e.selected) && this.balloonOpen && this.toggleRef && this.toggleRef.toggleBalloon(!1)
                    }, t.prototype.render = function() {
                        return this.props.isError ? null : this.props.isLoading ? Y.createElement(Ce.Va, {
                            display: Ce.W.Flex,
                            justifyContent: Ce.Ua.Center,
                            alignItems: Ce.f.Center
                        }, Y.createElement(Ce.cb, {
                            width: 70,
                            height: 30
                        })) : Y.createElement(Ce.Va, {
                            className: "selectable-filter"
                        }, Y.createElement(Se.a, {
                            onToggle: this.onToggle,
                            ref: this.setToggleRef
                        }, Y.createElement(Ce.z, r.__assign({
                            dropdown: !0,
                            type: Ce.F.Hollow
                        }, Object(Ce.bc)(this.props)), Y.createElement(Ce.Va, {
                            display: Ce.W.Flex
                        }, this.props.title)), Y.createElement(Ce.u, {
                            direction: Ce.v.BottomLeft,
                            noTail: !0
                        }, Y.createElement(Ce.Va, {
                            className: "selectable-filter__balloon",
                            padding: {
                                y: .5
                            }
                        }, Y.createElement(Ce.xb, {
                            padding: 1,
                            borderBottom: !0
                        }, Y.createElement(Ce.pb, {
                            refDelegate: this.setSearchRef,
                            onChange: this.onChangeSearchTerm,
                            placeholder: this.props.searchPlaceholder
                        })), this.renderSelected(), Y.createElement("div", {
                            className: "selectable-filter__scroll-container"
                        }, Y.createElement(be.b, null, Y.createElement("div", null, this.renderSections())))))))
                    }, t
                }(Y.Component)),
                we = (n("yHQj"), function(e) {
                    return Y.createElement(Ce.Sa, r.__assign({
                        onClick: e.onClick,
                        key: e.key,
                        disabled: e.disabled
                    }, Object(Ce.bc)(e)), Y.createElement(Ce.Va, {
                        className: "selectable-filter-item",
                        display: Ce.W.Flex,
                        flexDirection: Ce.Y.Row,
                        alignItems: Ce.f.Center,
                        margin: {
                            y: .5,
                            x: 1
                        },
                        flexWrap: Ce.Z.NoWrap
                    }, e.spriteWidth && Y.createElement(Ce.xb, {
                        className: "selectable-filter-item__avatar-container",
                        flexShrink: 0,
                        borderRadius: Ce.x.Small
                    }, Y.createElement("div", {
                        className: "selectable-filter-item__avatar",
                        style: {
                            backgroundImage: "url(" + e.spriteAsset + ")",
                            backgroundPositionX: e.spriteOffsetX ? -1 * e.spriteOffsetX : 0,
                            backgroundPositionY: e.spriteOffsetY ? -1 * e.spriteOffsetY : 0,
                            width: e.spriteWidth ? e.spriteWidth + "px" : "3rem",
                            height: e.spriteWidth ? e.spriteHeight + "px" : "3rem",
                            transform: "scale(" + (e.spriteWidth > 0 ? 30 / e.spriteWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    })), Y.createElement(Ce.Na, {
                        margin: {
                            left: 1
                        },
                        flexGrow: 1,
                        ellipsis: !0
                    }, Y.createElement(Ce.V, {
                        fontSize: Ce.Aa.Size5
                    }, e.name)), e.withClose && Y.createElement(Ce.mb, {
                        asset: Ce.nb.Close
                    })))
                }),
                Ne = [{
                    Maps: [{
                        name: "cs_agency",
                        display_name: "Agency"
                    }, {
                        name: "cs_assault",
                        display_name: "Assault"
                    }, {
                        name: "de_austria",
                        display_name: "Austria"
                    }, {
                        name: "de_cache",
                        display_name: "Cache"
                    }, {
                        name: "de_canals",
                        display_name: "Canals"
                    }, {
                        name: "de_cbble",
                        display_name: "Cobblestone"
                    }, {
                        name: "custom",
                        display_name: "Custom"
                    }, {
                        name: "deathmatch",
                        display_name: "Deathmatch"
                    }, {
                        name: "de_dust",
                        display_name: "Dust"
                    }, {
                        name: "de_dust2",
                        display_name: "Dust II"
                    }, {
                        name: "guardian",
                        display_name: "Guardian"
                    }, {
                        name: "de_inferno",
                        display_name: "Inferno"
                    }, {
                        name: "cs_insertion",
                        display_name: "Insertion"
                    }, {
                        name: "cs_italy",
                        display_name: "Italy"
                    }, {
                        name: "de_mirage",
                        display_name: "Mirage"
                    }, {
                        name: "de_nuke",
                        display_name: "Nuke"
                    }, {
                        name: "cs_office",
                        display_name: "Office"
                    }, {
                        name: "de_overpass",
                        display_name: "Overpass"
                    }, {
                        name: "de_train",
                        display_name: "Train"
                    }, {
                        name: "wargames",
                        display_name: "War Games"
                    }, {
                        name: "weaponsexpert",
                        display_name: "Weapons Expert"
                    }]
                }],
                _e = n("Pcnk"),
                Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1
                        }, t.getSections = function() {
                            var e = [];
                            if (t.state.content) {
                                var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                    a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                                t.state.content.forEach(function(r) {
                                    Object.keys(r).forEach(function(i) {
                                        var o = [];
                                        r[i].forEach(function(e) {
                                            t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && a && !e.name.match(a) || o.push(t.renderMap(e, function() {
                                                return t.onSelect(e)
                                            }))
                                        }), o.length && e.push({
                                            title: i,
                                            items: o
                                        })
                                    })
                                })
                            }
                            return e
                        }, t.getSelected = function() {
                            if (t.state.selected) {
                                return t.renderMap(t.state.selected, function() {
                                    return t.setState({
                                        selected: void 0,
                                        searchTerm: void 0
                                    }, function() {
                                        t.searchRef && (t.searchRef.value = ""), t.props.clearCSGOMapPreference()
                                    })
                                }, !0)
                            }
                        }, t.loadData = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    return this.state.isLoading || this.state.isError || this.state.content ? [2] : (this.setState({
                                        content: Ne
                                    }), [2])
                                })
                            })
                        }, t.onSearch = function(e) {
                            return t.setState({
                                searchTerm: e
                            })
                        }, t.onSelect = function(e) {
                            t.setState({
                                selected: e,
                                searchTerm: void 0
                            }, function() {
                                t.searchRef && (t.searchRef.value = ""), t.props.updateCSGOMapPreference(e.name)
                            })
                        }, t.renderMap = function(e, t, n) {
                            return void 0 === n && (n = !1), Y.createElement(we, {
                                key: e.name,
                                "data-a-name": e.name,
                                name: e.display_name,
                                onClick: t,
                                withClose: n
                            })
                        }, t.setSearchRef = function(e) {
                            return t.searchRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        if (this.props.firstPageLoaded && this.loadData(), this.props.csgoMap) {
                            var t = Ne[0].Maps.find(function(t) {
                                return t.name === e.props.csgoMap
                            });
                            t && this.setState({
                                selected: t
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                    }, t.prototype.render = function() {
                        return Y.createElement(Te, {
                            isError: this.state.isError || !1,
                            isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                            onSearch: this.onSearch,
                            searchRefDelegate: this.setSearchRef,
                            searchPlaceholder: Object(i.d)("Search by Map", "CSGOMapFilter"),
                            selected: this.getSelected(),
                            sections: this.getSections(),
                            selectedTitle: Object(i.d)("Selected Map", "CSGOMapFilter"),
                            title: this.state.selected ? this.state.selected.display_name : Object(_e.b)(_e.a.CSGOMap),
                            "data-test-selector": "csgo-filter-selector"
                        })
                    }, t
                }(Y.Component);
            var Oe = Object(Q.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded,
                        csgoMap: F(e)
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        updateCSGOMapPreference: C,
                        clearCSGOMapPreference: T
                    }, e)
                })(Ee),
                De = n("hX9f"),
                Ie = "directory-container",
                Le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + Ie + '"]'),
                                t = document.querySelector('[data-target="' + De.a + '"]'),
                                n = document.querySelector("#" + ue.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.updateDisplayAdOrder), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.updateDisplayAdOrder()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.updateDisplayAdOrder)
                    }, t.prototype.render = function() {
                        return Y.createElement(Ce.Va, {
                            flexShrink: 0,
                            "data-target": Ie,
                            "data-test-selector": "direectory-grid-grid-layout"
                        }, Y.createElement(Ce.Tb, {
                            gutterSize: Ce.Vb.Small,
                            childWidth: Ce.Ub.Large,
                            placeholderItems: 20
                        }, Y.createElement(de.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: ue.d.directory,
                            slotID: ue.b.directory.rectangle,
                            adSize: ue.c.directory.rectangle,
                            "data-a-target": "directory-card-ad-slot",
                            targeting: {
                                pagetype: ue.a.games,
                                game: this.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), this.props.children), Y.createElement(be.a, {
                            enabled: this.props.canLoadMore,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 500
                        }))
                    }, t.prototype.onRender = function() {
                        var e = Y.Children.count(this.props.children);
                        this.props.latencyTracking.reportInteractive(e > 12 ? 12 : e), this.updateDisplayAdOrder()
                    }, t
                }(Y.Component),
                xe = Object(me.c)("DirectoryGrid")(Le);
            var Fe, Pe, Re, je = Object(Q.connect)(function(e) {
                    return {
                        sideNavExpanded: e.ui.sideNavExpanded
                    }
                })(xe),
                Ae = n("oJmH"),
                Ve = n("oB8h"),
                Ge = n("kduP"),
                Me = n("7sjZ"),
                Ue = n("HrG3"),
                Be = n("5myU"),
                He = n("FpZF"),
                We = n("VW9G"),
                qe = n("coeN"),
                ze = n("x/sq"),
                Ye = n("QV0j"),
                Qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(he.b)(), t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                        var t, n = Object(qe.b)(this.props.languageCode),
                            a = this.props.directoryWidth,
                            r = ce.PageviewMedium.Game,
                            o = this.props.data.directory.streams && this.props.data.directory.streams.edges || [];
                        if (a && a > 0) {
                            var s = Object(Be.a)(a, 300, 1);
                            if (s - 1 < o.length) {
                                var l = this.isTagsExperiment ? 0 : 1;
                                o = o.slice(0, s - l)
                            }
                            this.isTagsExperiment || (t = Y.createElement("div", {
                                style: {
                                    order: o.length
                                }
                            }, Y.createElement(Ue.a, {
                                subHeader: n,
                                linkTo: {
                                    pathname: this.getViewAllPath(),
                                    state: {
                                        medium: r,
                                        content: ce.PageviewContent.Game
                                    }
                                }
                            })))
                        }
                        var c = o.filter(function(e) {
                            return e && e.node && e.node.broadcaster && e.node.broadcaster.login && e.node.broadcaster.id
                        }).map(function(t, n) {
                            if (t && t.node) {
                                var a = t.node,
                                    o = Object(ze.a)({
                                        tags: a.tags,
                                        section: fe.a.IncategoryChannels,
                                        onClickTag: e.props.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        scrollToTop: e.props.scrollToTop
                                    });
                                return Y.createElement(De.b, {
                                    directoryName: e.props.directoryName,
                                    directoryType: e.props.directoryType,
                                    streamIndex: n,
                                    streamNode: {
                                        id: a.id,
                                        title: a.title || "",
                                        viewersCount: a.viewersCount || 0,
                                        previewImageURL: a.previewImageURL || i.a.defaultStreamPreviewURL,
                                        broadcaster: a.broadcaster ? {
                                            id: a.broadcaster.id,
                                            login: a.broadcaster.login,
                                            displayName: a.broadcaster.displayName,
                                            roles: null,
                                            profileImageURL: a.broadcaster.profileImageURL || i.a.defaultAvatarURL
                                        } : null,
                                        game: a.game ? {
                                            id: a.game.id,
                                            boxArtURL: a.game.boxArtURL || i.a.defaultBoxArtURL,
                                            name: a.game.name
                                        } : null,
                                        type: Object(Ye.a)(a.type) || Ve.a.Live,
                                        streamMetadata: null
                                    },
                                    key: a.id,
                                    trackingMedium: r,
                                    trackingContent: ce.PageviewContent.LocalLiveChannel,
                                    trackImageLatency: 0 === n,
                                    tagListProps: o
                                })
                            }
                        });
                        return c.length > 0 ? Y.createElement(Ce.Va, null, Y.createElement(We.a, {
                            languageCode: this.props.languageCode,
                            directoryName: this.props.directoryName
                        }), Y.createElement(Ce.Tb, {
                            gutterSize: Ce.Vb.Small,
                            childWidth: Ce.Ub.Large,
                            placeholderItems: 20
                        }, c, t)) : null
                    }, t.prototype.getViewAllPath = function() {
                        return Object(Ge.c)(this.props.directoryName) + "/" + this.props.languageCode
                    }, t
                }(Y.Component),
                $e = Object(Ae.compose)(Object(re.a)(He, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                limit: 30,
                                languages: [e.languageCode],
                                type: Object(Me.a)(e.directoryType),
                                isTagsExperiment: Object(he.a)()
                            }
                        }
                    }
                }), Object(me.c)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                }))(Qe),
                Xe = n("ZrRH"),
                Je = n.n(Xe),
                Ke = n("mz1O"),
                Ze = n("On2s");

            function et(e) {
                i.n.track(ce.SpadeEventType.HearthstoneFilterAction, r.__assign({}, e))
            }

            function tt(e) {
                i.n.track(ce.SpadeEventType.OverwatchFilterAction, r.__assign({}, e))
            }

            function nt(e) {
                i.n.track(ce.SpadeEventType.FilterClick, e)
            }! function(e) {
                e.Deselect = "deselect", e.Select = "select"
            }(Fe || (Fe = {})),
            function(e) {
                e.RemainingPlayers = "remaining_players", e.TeamType = "team_type"
            }(Pe || (Pe = {})),
            function(e) {
                e.FewerThan25 = "fewer_than_25", e.MoreThan50 = "more_than_50", e.Range25To50 = "25-50"
            }(Re || (Re = {}));
            var at = "hearthstone-class-filter-item-selector",
                rt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1
                        }, t.logger = i.o.logger.withCategory("hearthstone-class-filter"), t.getSections = function() {
                            var e = [];
                            if (t.state.content) {
                                var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                    a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                                t.state.content.forEach(function(r) {
                                    Object.keys(r).forEach(function(i) {
                                        var o = [];
                                        r[i].forEach(function(e) {
                                            t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && a && !e.name.match(a) || o.push(t.renderCharacter(e, function() {
                                                return t.onSelect(e)
                                            }))
                                        }), o.length > 0 && e.push({
                                            title: i,
                                            items: o
                                        })
                                    })
                                })
                            }
                            return e
                        }, t.getSelected = function() {
                            if (t.state.selected) {
                                return t.renderCharacter(t.state.selected, function() {
                                    return t.setState({
                                        selected: void 0,
                                        searchTerm: void 0
                                    }, function() {
                                        t.searchRef && (t.searchRef.value = ""), t.props.clearHearthstoneClassPreference(), et({
                                            hero: "",
                                            mode: t.props.hearthstoneMode
                                        })
                                    })
                                }, !0)
                            }
                        }, t.loadData = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                            this.setState({
                                                isLoading: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Object(Ke.b)()];
                                        case 2:
                                            return e = a.sent(), this.setState({
                                                content: e,
                                                isLoading: !1
                                            }, function() {
                                                n.state.content && n.state.content.forEach(function(e) {
                                                    Object.keys(e).forEach(function(t) {
                                                        e[t].forEach(function(e) {
                                                            n.props.hearthstoneClass && n.props.hearthstoneClass === e.class && n.setState({
                                                                selected: e
                                                            })
                                                        })
                                                    })
                                                })
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), this.logger.error(t, "Failed to load Hearthstone class data"), this.setState({
                                                isError: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSearch = function(e) {
                            return t.setState({
                                searchTerm: e
                            })
                        }, t.onSelect = function(e) {
                            t.setState({
                                selected: e,
                                searchTerm: void 0
                            }, function() {
                                t.searchRef && (t.searchRef.value = ""), t.props.updateHearthstoneClassPreference(e.class), et({
                                    hero: e.class,
                                    mode: t.props.hearthstoneMode
                                })
                            })
                        }, t.renderCharacter = function(e, t, n) {
                            return void 0 === n && (n = !1), Y.createElement(we, {
                                key: e.name,
                                name: e.class,
                                onClick: t,
                                spriteAsset: Je.a,
                                spriteOffsetX: e.sprite_x_offset,
                                spriteOffsetY: e.sprite_y_offset,
                                spriteWidth: e.image_width,
                                spriteHeight: e.image_height,
                                withClose: n,
                                "data-test-selector": at
                            })
                        }, t.setSearchRef = function(e) {
                            return t.searchRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.firstPageLoaded && this.loadData()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                    }, t.prototype.render = function() {
                        return Y.createElement(Te, {
                            isError: this.state.isError || !1,
                            isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                            onSearch: this.onSearch,
                            searchRefDelegate: this.setSearchRef,
                            searchPlaceholder: Object(i.d)("Search by Class", "HearthstoneClassFilter"),
                            selected: this.getSelected(),
                            sections: this.getSections(),
                            selectedTitle: Object(i.d)("Selected Class", "HearthstoneClassFilter"),
                            title: this.state.selected ? this.state.selected.class : Object(_e.b)(_e.a.HearthstoneClass),
                            "data-test-selector": "hearthstone-class-filter-selector"
                        })
                    }, t
                }(Y.Component);
            var it = Object(Q.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded,
                        hearthstoneClass: j(e),
                        hearthstoneMode: A(e)
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        updateHearthstoneClassPreference: E,
                        clearHearthstoneClassPreference: D
                    }, e)
                })(rt),
                ot = n("cvJQ"),
                st = n.n(ot),
                lt = "hearthstone-mode-filter-item-selector",
                ct = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1
                        }, t.logger = i.o.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
                            var e = [];
                            if (t.state.content) {
                                var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                    a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                                t.state.content.forEach(function(r) {
                                    Object.keys(r).forEach(function(i) {
                                        var o = [];
                                        r[i].forEach(function(e) {
                                            t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && a && !e.name.match(a) || o.push(t.renderCharacter(e, function() {
                                                return t.onSelect(e)
                                            }))
                                        }), o.length && e.push({
                                            title: i,
                                            items: o
                                        })
                                    })
                                })
                            }
                            return e
                        }, t.getSelected = function() {
                            if (t.state.selected) {
                                return t.renderCharacter(t.state.selected, function() {
                                    return t.setState({
                                        selected: void 0,
                                        searchTerm: void 0
                                    }, function() {
                                        t.searchRef && (t.searchRef.value = ""), t.props.clearHearthstoneModePreference(), et({
                                            hero: t.props.hearthstoneClass,
                                            mode: ""
                                        })
                                    })
                                }, !0)
                            }
                        }, t.loadData = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                            this.setState({
                                                isLoading: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Object(Ke.c)()];
                                        case 2:
                                            return e = a.sent(), this.setState({
                                                content: e,
                                                isLoading: !1
                                            }, function() {
                                                n.state.content && n.state.content.forEach(function(e) {
                                                    Object.keys(e).forEach(function(t) {
                                                        e[t].forEach(function(e) {
                                                            n.props.hearthstoneMode && n.props.hearthstoneMode === e.name && n.setState({
                                                                selected: e
                                                            })
                                                        })
                                                    })
                                                })
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), this.logger.error(t, "Failed to load Hearthstone mode data"), this.setState({
                                                isError: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSearch = function(e) {
                            return t.setState({
                                searchTerm: e
                            })
                        }, t.onSelect = function(e) {
                            t.setState({
                                selected: e,
                                searchTerm: void 0
                            }, function() {
                                t.searchRef && (t.searchRef.value = ""), t.props.updateHearthstoneModePreference(e.name), et({
                                    hero: t.props.hearthstoneClass,
                                    mode: e.name
                                })
                            })
                        }, t.renderCharacter = function(e, t, n) {
                            return void 0 === n && (n = !1), Y.createElement(we, {
                                key: e.name,
                                name: e.display_name,
                                onClick: t,
                                spriteAsset: st.a,
                                spriteOffsetX: e.sprite_x_offset,
                                spriteOffsetY: e.sprite_y_offset,
                                spriteWidth: e.image_height,
                                spriteHeight: e.image_height,
                                withClose: n,
                                "data-test-selector": lt
                            })
                        }, t.setSearchRef = function(e) {
                            return t.searchRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.firstPageLoaded && this.loadData()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                    }, t.prototype.render = function() {
                        return Y.createElement(Te, {
                            isError: this.state.isError || !1,
                            isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                            onSearch: this.onSearch,
                            searchRefDelegate: this.setSearchRef,
                            searchPlaceholder: Object(i.d)("Search by Mode", "HearthstoneModeFilter"),
                            selected: this.getSelected(),
                            sections: this.getSections(),
                            selectedTitle: Object(i.d)("Selected Mode", "HearthstoneModeFilter"),
                            title: this.state.selected ? this.state.selected.display_name : Object(_e.b)(_e.a.HearthstoneMode),
                            "data-test-selector": "hearthstone-mode-filter-selector"
                        })
                    }, t
                }(Y.Component);
            var dt = Object(Q.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded,
                        hearthstoneClass: j(e),
                        hearthstoneMode: A(e)
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        updateHearthstoneModePreference: I,
                        clearHearthstoneModePreference: L
                    }, e)
                })(ct),
                ut = n("X7a7"),
                mt = "league-filter-item-selector",
                pt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.setSelectedChampion = function(e) {
                            Object.keys(e.data).forEach(function(n) {
                                var a = e.data[n];
                                a.id === t.props.leagueChampion && t.setState({
                                    selected: a
                                })
                            })
                        }, t.getSections = function() {
                            var e = [],
                                n = [];
                            if (t.props.leagueOfLegends.apiData) {
                                var a = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                    r = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                                Object.keys(t.props.leagueOfLegends.apiData.data).forEach(function(i) {
                                    if (t.props.leagueOfLegends.apiData) {
                                        var o = t.props.leagueOfLegends.apiData.data[i];
                                        if (t.state.selected && t.state.selected.name === o.name) return;
                                        if (a && !o.name.match(a) && r && !o.name.match(r)) return;
                                        var s = t.renderCharacter(o, function() {
                                            return t.onSelect(o)
                                        });
                                        o.channels > 0 ? e.push(s) : n.push(s)
                                    }
                                })
                            }
                            var o = [];
                            return e.length > 0 && o.push({
                                title: Object(i.d)("Champions Online", "LeagueFilter"),
                                items: e
                            }), n.length > 0 && o.push({
                                title: Object(i.d)("Champions Offline", "LeagueFilter"),
                                items: n
                            }), o
                        }, t.getSelected = function() {
                            if (t.state.selected) {
                                return t.renderCharacter(t.state.selected, function() {
                                    t.setState({
                                        selected: void 0,
                                        searchTerm: void 0
                                    }, function() {
                                        t.searchRef && (t.searchRef.value = ""), t.props.clearLeagueChampionPreference()
                                    })
                                }, !0)
                            }
                        }, t.loadData = function() {
                            t.props.leagueOfLegends.isLoading || t.props.leagueOfLegends.isError || t.props.leagueOfLegends.apiData || t.props.onLoadLeagueOfLegendsChampions()
                        }, t.onSearch = function(e) {
                            return t.setState({
                                searchTerm: e
                            })
                        }, t.onSelect = function(e) {
                            t.setState({
                                selected: e,
                                searchTerm: void 0
                            }, function() {
                                t.searchRef && (t.searchRef.value = ""), t.props.updateLeagueChampionPreference(e.id)
                            })
                        }, t.renderCharacter = function(e, n, a) {
                            void 0 === a && (a = !1);
                            var r = "https://ddragon.leagueoflegends.com/cdn/" + t.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite,
                                i = e.name.replace(/[.']/g, "").replace(/ /g, "").toLowerCase();
                            return Y.createElement(we, {
                                disabled: 0 === e.channels,
                                key: e.id,
                                name: e.name,
                                onClick: n,
                                spriteAsset: r,
                                spriteOffsetX: e.image.x,
                                spriteOffsetY: e.image.y,
                                spriteWidth: e.image.w,
                                spriteHeight: e.image.h,
                                withClose: a,
                                "data-a-target": "champion-filter-" + i,
                                "data-test-selector": mt
                            })
                        }, t.setSearchRef = function(e) {
                            return t.searchRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.firstPageLoaded && this.loadData(), this.props.leagueChampion && this.props.leagueOfLegends.apiData && this.setSelectedChampion(this.props.leagueOfLegends.apiData)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData(), this.props.leagueChampion && !this.props.leagueOfLegends.apiData && e.leagueOfLegends.apiData && this.setSelectedChampion(e.leagueOfLegends.apiData)
                    }, t.prototype.render = function() {
                        return Y.createElement(Te, {
                            isError: this.props.leagueOfLegends.isError || !1,
                            isLoading: !this.props.firstPageLoaded || this.props.leagueOfLegends.isLoading || !1,
                            onSearch: this.onSearch,
                            searchRefDelegate: this.setSearchRef,
                            searchPlaceholder: Object(i.d)("Search by Champion", "LeagueFilter"),
                            selected: this.getSelected(),
                            sections: this.getSections(),
                            selectedTitle: Object(i.d)("Selected Champion", "LeagueFilter"),
                            title: this.state.selected ? this.state.selected.name : Object(_e.b)(_e.a.LeagueChampion),
                            "data-a-target": "league-champion-filter-dropdown",
                            "data-test-selector": "league-filter-selector"
                        })
                    }, t
                }(Y.Component);
            var gt = Object(Q.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded,
                        leagueChampion: P(e),
                        leagueOfLegends: {
                            apiData: e.directory.leagueOfLegends.apiData,
                            isError: e.directory.leagueOfLegends.isError,
                            isLoading: e.directory.leagueOfLegends.isLoading,
                            version: e.directory.leagueOfLegends.version
                        }
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        updateLeagueChampionPreference: w,
                        clearLeagueChampionPreference: N,
                        onLoadLeagueOfLegendsChampions: ut.b
                    }, e)
                })(pt),
                ht = n("6H22"),
                ft = n.n(ht),
                vt = "overwatch-hero-filter-item-selector",
                kt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1
                        }, t.logger = i.o.logger.withCategory("overwatch-filter"), t.getSections = function() {
                            var e = [],
                                n = [],
                                a = [],
                                r = [];
                            if (t.state.content) {
                                var o = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                    s = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null,
                                    l = function(e, n) {
                                        t.state.selected && t.state.selected.character === e.character || o && !e.display_name.match(o) && s && !e.display_name.match(s) || n.push(t.renderCharacter(e, function() {
                                            return t.onSelectCharacter(e)
                                        }))
                                    };
                                t.state.content[0].Offense.forEach(function(t) {
                                    return l(t, e)
                                }), t.state.content[1].Defense.forEach(function(e) {
                                    return l(e, n)
                                }), t.state.content[2].Tank.forEach(function(e) {
                                    return l(e, a)
                                }), t.state.content[3].Support.forEach(function(e) {
                                    return l(e, r)
                                })
                            }
                            var c = [];
                            return e.length > 0 && c.push({
                                title: Object(i.d)("Offense", "OverwatchFilter"),
                                items: e
                            }), n.length > 0 && c.push({
                                title: Object(i.d)("Defense", "OverwatchFilter"),
                                items: n
                            }), a.length > 0 && c.push({
                                title: Object(i.d)("Tank", "OverwatchFilter"),
                                items: a
                            }), r.length > 0 && c.push({
                                title: Object(i.d)("Support", "OverwatchFilter"),
                                items: r
                            }), c
                        }, t.getSelected = function() {
                            if (t.state.selected) {
                                return t.renderCharacter(t.state.selected, function() {
                                    return t.setState({
                                        selected: void 0,
                                        searchTerm: void 0
                                    }, function() {
                                        t.searchRef && (t.searchRef.value = ""), t.props.clearOverwatchCharacterPreference(), tt({
                                            character: ""
                                        })
                                    })
                                }, !0)
                            }
                        }, t.loadData = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                            this.setState({
                                                isLoading: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Object(Ke.d)()];
                                        case 2:
                                            return e = a.sent(), this.setState({
                                                content: e,
                                                isLoading: !1
                                            }, function() {
                                                n.state.content && n.props.overwatchCharacter && n.state.content.forEach(function(e) {
                                                    Object.keys(e).forEach(function(t) {
                                                        e[t].forEach(function(e) {
                                                            n.props.overwatchCharacter === e.character && n.setState({
                                                                selected: e
                                                            })
                                                        })
                                                    })
                                                })
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), this.logger.error(t, "Failed to load Overwatch character data"), this.setState({
                                                isError: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSearch = function(e) {
                            return t.setState({
                                searchTerm: e
                            })
                        }, t.onSelectCharacter = function(e) {
                            t.setState({
                                selected: e,
                                searchTerm: void 0
                            }, function() {
                                t.searchRef && (t.searchRef.value = ""), t.props.updateOverwatchCharacterPreference(e.character), tt({
                                    character: e.character
                                })
                            })
                        }, t.renderCharacter = function(e, t, n) {
                            return void 0 === n && (n = !1), Y.createElement(we, {
                                key: e.character,
                                name: e.display_name,
                                onClick: t,
                                spriteAsset: ft.a,
                                spriteOffsetX: e.sprite_x_offset,
                                spriteOffsetY: e.sprite_y_offset,
                                spriteWidth: e.image_width,
                                spriteHeight: e.image_height,
                                withClose: n,
                                "data-test-selector": vt
                            })
                        }, t.setSearchRef = function(e) {
                            return t.searchRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.firstPageLoaded && this.loadData()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                    }, t.prototype.render = function() {
                        return Y.createElement(Te, {
                            isError: this.state.isError || !1,
                            isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                            onSearch: this.onSearch,
                            searchRefDelegate: this.setSearchRef,
                            searchPlaceholder: Object(i.d)("Search by Hero", "OverwatchFilter"),
                            selected: this.getSelected(),
                            sections: this.getSections(),
                            selectedTitle: Object(i.d)("Selected Hero", "OverwatchFilter"),
                            title: this.state.selected ? this.state.selected.display_name : Object(_e.b)(_e.a.OverwatchCharacter),
                            "data-test-selector": "overwatch-hero-filter-selector"
                        })
                    }, t
                }(Y.Component);
            var yt = Object(Q.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    overwatchCharacter: R(e)
                }
            }, function(e) {
                return Object($.bindActionCreators)({
                    updateOverwatchCharacterPreference: _,
                    clearOverwatchCharacterPreference: O
                }, e)
            })(kt);

            function bt(e) {
                switch (e) {
                    case "FewerThan25":
                        return Object(i.d)("Fewer Than 25", "PUBGRemainingPlayersFilter");
                    case "25-50":
                        return Object(i.d)("25-50", "PUBGRemainingPlayersFilter");
                    case "MoreThan50":
                        return Object(i.d)("More Than 50", "PUBGRemainingPlayersFilter");
                    case "Solo":
                        return Object(i.d)("Solo", "PUBGTeamTypeFilter");
                    case "Duo":
                        return Object(i.d)("Duo", "PUBGTeamTypeFilter");
                    case "Squad":
                        return Object(i.d)("Squad", "PUBGTeamTypeFilter");
                    default:
                        return ""
                }
            }
            var St = "pubg-dismiss-selector",
                Ct = "pubg-item-selector",
                Tt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1
                        }, t.logger = i.o.logger.withCategory("pubg-remaining-players-filter"), t.getRemainingPlayersFilters = function() {
                            var e = [];
                            return t.state.content && t.state.content.forEach(function(n) {
                                Object.keys(n).forEach(function(a) {
                                    n[a].forEach(function(n) {
                                        t.state.selected && t.state.selected.name === n.name || e.push(t.renderRemainingPlayer(n, function() {
                                            t.balloonWrapperRef.toggleBalloon(!1), t.onSelect(n)
                                        }))
                                    })
                                })
                            }), e
                        }, t.getSelected = function() {
                            return t.state.selected ? Y.createElement(Ce.Va, null, Y.createElement(Ce.Na, {
                                padding: {
                                    left: .5
                                }
                            }, Y.createElement("span", null, bt(t.state.selected.name)))) : Object(i.d)("Remaining Players", "PUBGRemainingPlayersFilter")
                        }, t.getSelectedListItem = function() {
                            if (!t.state.selected) return null;
                            return Y.createElement(Ce.xb, {
                                borderBottom: !0
                            }, Y.createElement(we, {
                                key: "pubg-" + t.state.selected.name,
                                name: bt(t.state.selected.name),
                                onClick: function(e) {
                                    e.stopPropagation(), nt({
                                        game: Ze.a.PUBG,
                                        item_action: Fe.Deselect,
                                        item_name: Pe.RemainingPlayers,
                                        item_value: t.state.selected ? t.state.selected.name.toLowerCase() : "",
                                        open_click: !1
                                    }), t.setState({
                                        selected: void 0
                                    }, function() {
                                        t.balloonWrapperRef.toggleBalloon(!1), t.props.onSelect()
                                    })
                                },
                                withClose: !0,
                                "data-test-selector": St
                            }))
                        }, t.loadRemainingPlayerData = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                            this.setState({
                                                isLoading: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(Ke.f)()];
                                        case 2:
                                            return e = n.sent(), this.setState({
                                                content: e,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), this.logger.error(t, "Failed to load PUBG Remaining Players data"), this.setState({
                                                isError: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onBalloonToggle = function(e) {
                            e || nt({
                                game: Ze.a.PUBG,
                                item_action: null,
                                item_name: Pe.RemainingPlayers,
                                item_value: null,
                                open_click: !0
                            })
                        }, t.onSelect = function(e) {
                            t.setState({
                                selected: e
                            }, function() {
                                e.max_value && e.min_value ? t.props.onSelect(e.max_value.toString(), e.min_value.toString()) : !e.max_value && e.min_value ? t.props.onSelect("", e.min_value.toString()) : e.max_value && !e.min_value && t.props.onSelect(e.max_value.toString(), ""), nt({
                                    game: Ze.a.PUBG,
                                    item_action: Fe.Select,
                                    item_name: Pe.RemainingPlayers,
                                    item_value: e.name.toLowerCase(),
                                    open_click: !1
                                })
                            })
                        }, t.renderRemainingPlayer = function(e, t, n) {
                            return void 0 === n && (n = !1), Y.createElement(we, {
                                key: e.name,
                                name: bt(e.name),
                                onClick: t,
                                withClose: n,
                                "data-test-selector": Ct
                            })
                        }, t.saveBalloonWrapperRef = function(e) {
                            t.balloonWrapperRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.firstPageLoaded && this.loadRemainingPlayerData()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadRemainingPlayerData()
                    }, t.prototype.render = function() {
                        return Y.createElement(Ce.Va, {
                            display: Ce.W.Flex
                        }, Y.createElement(Ce.Va, {
                            display: Ce.W.InlineFlex
                        }, Y.createElement(Se.a, {
                            ref: this.saveBalloonWrapperRef,
                            onToggle: this.onBalloonToggle
                        }, Y.createElement(Ce.z, {
                            type: Ce.F.Hollow,
                            dropdown: !0,
                            "data-test-selector": "pubg-button-selector"
                        }, this.getSelected()), Y.createElement(Ce.u, {
                            direction: Ce.v.Bottom,
                            noTail: !0
                        }, Y.createElement(Ce.Va, {
                            padding: {
                                y: 1
                            }
                        }, this.getSelectedListItem(), this.getRemainingPlayersFilters())))))
                    }, t
                }(Y.Component);
            var wt = Object(Q.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(Tt),
                Nt = "pubg-dismiss-selector",
                _t = "pubg-item-selector",
                Et = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1
                        }, t.logger = i.o.logger.withCategory("pubg-team-type-filter"), t.getTeamTypeFilters = function() {
                            var e = [];
                            return t.state.content && t.state.content.forEach(function(n) {
                                Object.keys(n).forEach(function(a) {
                                    n[a].forEach(function(n) {
                                        t.state.selected && t.state.selected.name === n.name || e.push(t.renderMode(n, function() {
                                            t.balloonWrapperRef.toggleBalloon(!1), t.onSelect(n)
                                        }))
                                    })
                                })
                            }), e
                        }, t.getSelected = function() {
                            return t.state.selected ? Y.createElement(Ce.Va, null, Y.createElement(Ce.Na, {
                                padding: {
                                    left: .5
                                }
                            }, Y.createElement("span", null, bt(t.state.selected.name)))) : Object(i.d)("Team Type", "PUBGTeamTypeFilter")
                        }, t.getSelectedListItem = function() {
                            if (!t.state.selected) return null;
                            return Y.createElement(Ce.xb, {
                                borderBottom: !0
                            }, Y.createElement(we, {
                                key: "pubg-" + t.state.selected.name,
                                name: bt(t.state.selected.name),
                                onClick: function(e) {
                                    e.stopPropagation(), nt({
                                        game: Ze.a.PUBG,
                                        item_action: Fe.Deselect,
                                        item_name: Pe.TeamType,
                                        item_value: t.state.selected ? t.state.selected.name.toLowerCase() : "",
                                        open_click: !1
                                    }), t.setState({
                                        selected: void 0
                                    }, function() {
                                        t.balloonWrapperRef.toggleBalloon(!1), t.props.onSelect()
                                    })
                                },
                                withClose: !0,
                                "data-test-selector": Nt
                            }))
                        }, t.loadTeamTypeData = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                            this.setState({
                                                isLoading: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(Ke.e)()];
                                        case 2:
                                            return e = n.sent(), this.setState({
                                                content: e,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), this.logger.error(t, "Failed to load PUBG Team Type data"), this.setState({
                                                isError: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onBalloonToggle = function(e) {
                            e || nt({
                                game: Ze.a.PUBG,
                                item_action: null,
                                item_name: Pe.TeamType,
                                item_value: null,
                                open_click: !0
                            })
                        }, t.onSelect = function(e) {
                            t.setState({
                                selected: e
                            }, function() {
                                t.props.onSelect(e.name), nt({
                                    game: Ze.a.PUBG,
                                    item_action: Fe.Select,
                                    item_name: Pe.TeamType,
                                    item_value: e.name.toLowerCase(),
                                    open_click: !1
                                })
                            })
                        }, t.renderMode = function(e, t, n) {
                            return void 0 === n && (n = !1), Y.createElement(we, {
                                key: e.name,
                                name: bt(e.name),
                                onClick: t,
                                withClose: n,
                                "data-test-selector": _t
                            })
                        }, t.saveBalloonWrapperRef = function(e) {
                            t.balloonWrapperRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.firstPageLoaded && this.loadTeamTypeData()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.firstPageLoaded && e.firstPageLoaded && this.loadTeamTypeData()
                    }, t.prototype.render = function() {
                        return Y.createElement(Ce.Va, {
                            display: Ce.W.Flex
                        }, Y.createElement(Ce.Va, {
                            display: Ce.W.InlineFlex
                        }, Y.createElement(Se.a, {
                            ref: this.saveBalloonWrapperRef,
                            onToggle: this.onBalloonToggle
                        }, Y.createElement(Ce.z, {
                            type: Ce.F.Hollow,
                            dropdown: !0,
                            "data-test-selector": "pubg-button-selector"
                        }, this.getSelected()), Y.createElement(Ce.u, {
                            direction: Ce.v.Bottom,
                            noTail: !0
                        }, Y.createElement(Ce.Va, {
                            padding: {
                                y: 1
                            }
                        }, this.getSelectedListItem(), this.getTeamTypeFilters())))))
                    }, t
                }(Y.Component);
            var Ot, Dt = Object(Q.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(Et),
                It = function(e, t) {
                    switch (e) {
                        case V.CSGO:
                            return t === G.Rank ? G.Rank : t === G.ViewerCount ? G.ViewerCount : null;
                        case V.League:
                            return t === M.Rank ? M.Rank : t === M.ViewerCount ? M.ViewerCount : null;
                        default:
                            return null
                    }
                };
            ! function(e) {
                e.StreamSort = "stream-sort-selector", e.StreamRankSort = "stream-rank-sort-selector", e.StreamViewSort = "stream-viewer-sort-selector"
            }(Ot || (Ot = {}));
            var Lt = "stream-sort-option",
                xt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderStreamSort = function(e, n) {
                            return Y.createElement(Ce.qb, {
                                "data-test-selector": Ot.StreamSort
                            }, Y.createElement(Ce.rb, {
                                name: Lt,
                                label: Object(i.d)("Viewers", "StreamSortOption"),
                                onChange: t.handleToggleChange,
                                value: e.ViewerCount,
                                defaultChecked: n === e.ViewerCount,
                                "data-test-selector": Ot.StreamViewSort
                            }), Y.createElement(Ce.rb, {
                                name: Lt,
                                label: Object(i.d)("Rank", "StreamSortOption"),
                                onChange: t.handleToggleChange,
                                value: e.Rank,
                                defaultChecked: n === e.Rank,
                                "data-test-selector": Ot.StreamRankSort
                            }))
                        }, t.handleToggleChange = function(e) {
                            var n = e.currentTarget.value,
                                a = It(t.props.gameName, n);
                            a && t.updateGameSort(a)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        switch (this.props.gameName) {
                            case V.CSGO:
                                return this.updateGameSort = this.props.updateCSGOSort, this.renderStreamSort(G, this.props.csgoSort);
                            case V.League:
                                return this.updateGameSort = this.props.updateLeagueSort, this.renderStreamSort(M, this.props.leagueSort);
                            default:
                                return null
                        }
                    }, t
                }(Y.Component);
            var Ft = Object(Q.connect)(function(e) {
                return {
                    csgoSort: q(e),
                    leagueSort: z(e)
                }
            }, function(e) {
                return Object($.bindActionCreators)({
                    updateCSGOSort: H,
                    updateLeagueSort: W
                }, e)
            })(xt);
            var Pt = function(e) {
                    var t = e.directory;
                    return Object(he.b)() && (t = e.directoryWithTags), (t && t.streams && t.streams.edges || []).filter(function(e) {
                        return e && e.node && e.node.id
                    })
                },
                Rt = n("TJgk"),
                jt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.isTagsExperiment = Object(he.b)(), n.getAdditionalFilters = function() {
                            var e = [];
                            if (n.props.match.params.encodedLanguage || e.push(Y.createElement(te.a, null)), n.state.directoryType === ke.a.Communities) return e;
                            switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                                case Ze.a.Hearthstone:
                                    e.push(Y.createElement(it, null), Y.createElement(dt, null));
                                    break;
                                case Ze.a.PUBG:
                                    e.push(Y.createElement(Dt, {
                                        onSelect: n.props.onSelectPubgTeamType,
                                        key: "pubg-team-type"
                                    }), Y.createElement(wt, {
                                        onSelect: n.props.onSelectPubgRemainingPlayers,
                                        key: "pubg-remaining-player"
                                    }));
                                    break;
                                case Ze.a.League:
                                    e.push(Y.createElement(gt, null));
                                    break;
                                case Ze.a.Overwatch:
                                    e.push(Y.createElement(yt, null));
                                    break;
                                case Ze.a.CSGO:
                                    e.push(Y.createElement(Oe, null))
                            }
                            return e
                        }, n.styleFilters = function() {
                            return n.getAdditionalFilters().map(function(e, t) {
                                return Y.createElement(Ce.Va, {
                                    margin: {
                                        right: 1
                                    },
                                    key: t
                                }, e)
                            })
                        }, n.addTagFilter = function(e) {
                            n.props.addTagFilter(e, decodeURIComponent(n.props.match.params.encodedCommunityName))
                        }, n.trackBrowseClick = function(e, t) {
                            var a = decodeURI(n.props.match.params.encodedCommunityName).toLowerCase(),
                                r = function(e, t) {
                                    switch (e) {
                                        case Ze.a.CSGO:
                                            return {
                                                map: t.csgoMap
                                            };
                                        case Ze.a.Hearthstone:
                                            return {
                                                hero_class: t.hearthstoneClass,
                                                game_mode: t.hearthstoneMode
                                            };
                                        case Ze.a.League:
                                            return {
                                                champion_id: t.leagueChampion
                                            };
                                        case Ze.a.Overwatch:
                                            return {
                                                character_name: t.overwatchCharacter
                                            };
                                        case Ze.a.PUBG:
                                            var n = void 0;
                                            return t.pubgPlayerAliveMax ? n = t.pubgPlayerAliveMin && "1" === t.pubgPlayerAliveMin ? Re.FewerThan25 : Re.Range25To50 : t.pubgPlayerAliveMin && (n = Re.MoreThan50), {
                                                team_type: t.pubgGameMode && t.pubgGameMode.toLowerCase(),
                                                remaining_players: n
                                            };
                                        default:
                                            return {}
                                    }
                                }(a, n.props);
                            ! function(e) {
                                i.n.track(ce.SpadeEventType.BrowseClick, e)
                            }({
                                channel_id: parseInt(t, 10),
                                filters_json: JSON.stringify(r),
                                game: a
                            })
                        }, n.onResize = function(e) {
                            n.setState({
                                directoryWidth: e
                            })
                        }, n.renderPlaceholders = function() {
                            for (var e = [], t = 0; t < 20; t++) e.push(Y.createElement(ve.a, {
                                key: t
                            }));
                            return e
                        }, n.removeLastTag = function() {
                            var e = decodeURIComponent(n.props.match.params.encodedCommunityName),
                                t = n.props.tagFilters[n.props.tagFilters.length - 1];
                            n.props.removeTagFilter(t, e)
                        }, n.onSlotAdded = function() {
                            n.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(ue.b.directory).length && le.a.display(ue.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, n.canLoadMoreGames = function() {
                            var e = n.props.data.directory;
                            return n.isTagsExperiment && (e = n.props.data.directoryWithTags), !(n.props.data.loading || n.props.data.error || !e || "" === e.id || !e.streams || !e.streams.pageInfo || !e.streams.pageInfo.hasNextPage)
                        }, n.state = {
                            directoryType: Object(ye.a)(t.match.path),
                            directoryWidth: -1,
                            numSlotsAdded: 0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentWillMount = function() {
                        ue.g.addListener(ue.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.match.path !== e.match.path && this.setState({
                            directoryType: Object(ye.a)(e.match.path)
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        ue.g.removeListener(ue.e, this.onSlotAdded)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = null;
                        if (this.isTagsExperiment && this.props.tagFilters.length > ge.a ? t = Y.createElement(pe.a, {
                                errorType: pe.b.TooManyTags,
                                onClickRemoveLastTag: this.removeLastTag,
                                tagFilters: this.props.tagFilters
                            }) : this.props.data.loading || this.props.data.directory || this.props.data.directoryWithTags ? this.props.data.error ? t = Y.createElement(ne.a, {
                                message: Object(i.d)("Error loading data.", "DirectoryGamePage")
                            }) : this.isTagsExperiment && this.props.data.directoryWithTags && this.props.data.directoryWithTags.streams && this.props.data.directoryWithTags.streams.edges && 0 === this.props.data.directoryWithTags.streams.edges.length && (t = Y.createElement(pe.a, {
                                errorType: pe.b.NoResults,
                                onClickRemoveLastTag: this.removeLastTag,
                                tagFilters: this.props.tagFilters
                            })) : t = Y.createElement(ne.a, {
                                message: Object(i.d)("Game does not exist", "DirectoryGamePage")
                            }), t) return Y.createElement(Ce.Va, {
                            padding: 3
                        }, t);
                        var n = null,
                            a = null;
                        if (this.props.match.params.encodedLanguage) a = Y.createElement(We.a, {
                            languageCode: this.props.match.params.encodedLanguage,
                            directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                        });
                        else if ("en" !== this.props.languageCode) {
                            var o = this.isTagsExperiment ? {
                                color: Ce.O.Base
                            } : {
                                color: Ce.O.Alt2,
                                fontSize: Ce.Aa.Size5,
                                transform: Ce.Mb.Uppercase
                            };
                            a = Y.createElement(Ce.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, Y.createElement(Ce.V, r.__assign({
                                type: Ce.Nb.H4
                            }, o, {
                                "data-a-target": "international-section-header"
                            }), Object(i.d)("All Channels", "DirectoryInternationalSection"))), this.props.tagFilters.length || (n = Y.createElement($e, {
                                directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                                directoryType: Object(ye.a)(this.props.match.path),
                                directoryWidth: this.state.directoryWidth,
                                languageCode: this.props.languageCode,
                                addTagFilter: this.addTagFilter,
                                tagFilters: this.props.tagFilters,
                                scrollToTop: this.context.scrollToTop
                            }))
                        }
                        var s, l = this.isTagsExperiment ? this.props.data.directoryWithTags : this.props.data.directory,
                            c = Pt(this.props.data).filter(function(e) {
                                var t = e.node;
                                return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                            }).map(function(t, n) {
                                var a = function(e) {
                                    var t = null,
                                        n = e.node;
                                    return n && (t = {
                                        id: n.id,
                                        title: n.title || "",
                                        viewersCount: n.viewersCount || 0,
                                        previewImageURL: n.previewImageURL || i.a.defaultStreamPreviewURL,
                                        broadcaster: n.broadcaster ? {
                                            id: n.broadcaster.id,
                                            login: n.broadcaster.login,
                                            displayName: n.broadcaster.displayName,
                                            roles: null,
                                            profileImageURL: n.broadcaster.profileImageURL
                                        } : null,
                                        game: n.game ? {
                                            id: n.game.id,
                                            boxArtURL: n.game.boxArtURL || i.a.defaultBoxArtURL,
                                            name: n.game.name
                                        } : null,
                                        type: Object(Ye.a)(n.type) || Ve.a.Live,
                                        streamMetadata: null
                                    }, (function(e) {
                                        var t = e.node;
                                        return !!t && ("streamMetadata" in t && !("tags" in t))
                                    }(e) || function(e) {
                                        var t = e.node;
                                        return !!t && "tags" in t
                                    }(e)) && (t.streamMetadata = e.node && e.node.streamMetadata)), t
                                }(t);
                                if (a && t.node) return Y.createElement(De.b, {
                                    onClick: e.trackBrowseClick,
                                    directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                                    directoryType: e.state.directoryType,
                                    streamIndex: n,
                                    streamNode: a,
                                    tagListProps: Object(ze.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: fe.a.IncategoryChannels,
                                        scrollToTop: e.context.scrollToTop
                                    }),
                                    key: t.node.id,
                                    trackImageLatency: 0 === n
                                })
                            });
                        if (c.length > 0) s = Y.createElement(je, {
                            directoryName: l ? l.displayName : "",
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: this.canLoadMoreGames(),
                            loadMore: this.props.loadMore
                        }, c);
                        else if (0 === c.length && this.props.data.loading) {
                            var d = this.renderPlaceholders();
                            s = Y.createElement(Ce.Va, {
                                flexShrink: 0
                            }, Y.createElement(Ce.Tb, {
                                gutterSize: Ce.Vb.Small,
                                childWidth: Ce.Ub.Large,
                                placeholderItems: 20
                            }, d))
                        } else {
                            var u = Object(i.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                            this.state.directoryType === ke.a.Games && (u = Object(i.d)("No live channels for this game", "DirectoryGamePage")), s = Y.createElement(Ce.Va, {
                                display: Ce.W.Flex,
                                alignItems: Ce.f.Center,
                                justifyContent: Ce.Ua.Center,
                                fullWidth: !0,
                                padding: {
                                    y: 3
                                }
                            }, Y.createElement(Ce.V, {
                                color: Ce.O.Alt2,
                                fontSize: Ce.Aa.Size4,
                                italic: !0
                            }, u))
                        }
                        return Y.createElement(Ce.Va, null, Y.createElement(Ce.Va, {
                            margin: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, !this.isTagsExperiment && l && Y.createElement(de.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 30
                            },
                            adUnit: ue.d.directory,
                            slotID: ue.b.directory.banner,
                            adSize: ue.c.directory.banner,
                            "data-a-target": "directory-banner-ad-slot",
                            targeting: {
                                pagetype: ue.a.games,
                                game: l.displayName
                            },
                            autoEnable: !1
                        }), n, a, !this.isTagsExperiment && Y.createElement(Ce.Va, {
                            margin: {
                                bottom: 2
                            },
                            display: Ce.W.Flex,
                            flexDirection: Ce.Y.Row
                        }, this.styleFilters(), Y.createElement(Ce.Va, {
                            display: Ce.W.Flex,
                            flexGrow: 1,
                            justifyContent: Ce.Ua.End
                        }, Y.createElement(Ft, {
                            gameName: decodeURIComponent(this.props.match.params.encodedCommunityName).toLowerCase()
                        }))), s, Y.createElement(ae.a, {
                            onResize: this.onResize
                        })))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && i.o.setPageTitle(this.props.data.directory.displayName), this.props.data.directoryWithTags && i.o.setPageTitle(this.props.data.directoryWithTags.displayName))
                    }, t.contextTypes = {
                        scrollToTop: ee.func
                    }, t
                }(Y.Component),
                At = Object($.compose)(Object(re.a)(Rt, {
                    options: function(e) {
                        var t = decodeURIComponent(e.match.params.encodedCommunityName).toLowerCase(),
                            n = [],
                            a = e.languageTags.concat(e.tagFilters.map(function(e) {
                                return e.id
                            }));
                        return Object(he.b)() || (n = e.languagePreferences), e.match.params.encodedLanguage && (n = [e.match.params.encodedLanguage], a = e.tagFilters.map(function(e) {
                            return e.id
                        })), {
                            fetchPolicy: "network-only",
                            variables: {
                                name: t,
                                limit: 30,
                                languages: n,
                                type: e.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME",
                                filters: {
                                    hearthstoneBroadcasterHeroName: "",
                                    pubgGameMode: t === Ze.a.PUBG ? e.pubgGameMode : "",
                                    pubgPlayerAliveMax: t === Ze.a.PUBG ? e.pubgPlayerAliveMax : "",
                                    pubgPlayerAliveMin: t === Ze.a.PUBG ? e.pubgPlayerAliveMin : "",
                                    hearthstoneBroadcasterHeroClass: t === Ze.a.Hearthstone ? e.hearthstoneClass : "",
                                    hearthstoneGameMode: t === Ze.a.Hearthstone ? e.hearthstoneMode : "",
                                    overwatchBroadcasterCharacter: t === Ze.a.Overwatch ? e.overwatchCharacter : "",
                                    leagueOfLegendsChampionID: t === Ze.a.League && e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: t === Ze.a.CSGO ? e.csgoMap : "",
                                    counterStrikeSkill: ""
                                },
                                sort: e.sortMode,
                                isTagsExperiment: Object(he.b)(),
                                tags: a
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Rt,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: function(e) {
                                            var t = e.directory;
                                            if (Object(he.b)() && (t = e.directoryWithTags), !t || !t.streams || !t.streams.edges) return null;
                                            var n = t.streams.edges,
                                                a = n[n.length - 5];
                                            return a ? a.cursor : null
                                        }(e.data)
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return Object(he.b)() ? {
                                            directoryWithTags: r.__assign({}, n.directoryWithTags, {
                                                streams: r.__assign({}, n.directoryWithTags && n.directoryWithTags.streams, {
                                                    edges: Object(oe.c)(Pt(e), Pt(n))
                                                })
                                            })
                                        } : {
                                            directory: r.__assign({}, n.directory, {
                                                streams: r.__assign({}, n.directory && n.directory.streams, {
                                                    edges: Object(oe.c)(Pt(e), Pt(n))
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(me.c)("DirectoryGamePage", {
                    destination: se.a.DirectoryGameIndex
                }), Object(ie.a)({
                    location: ce.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: e.match.path.startsWith("/communities") ? ce.PageviewDirectoryContentType.Communities : ce.PageviewDirectoryContentType.Games,
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                }))(jt),
                Vt = X.a.ViewerCount,
                Gt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.getDirectorySort = function() {
                            switch (decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()) {
                                case V.CSGO:
                                    return t.props.csgoSort;
                                case V.League:
                                    return t.props.leagueSort;
                                default:
                                    return Vt
                            }
                        }, t.onSelectPubgTeamType = function(e) {
                            return t.setState({
                                pubgGameMode: e
                            })
                        }, t.onSelectPubgRemainingPlayers = function(e, n) {
                            return t.setState({
                                pubgPlayerAliveMax: e,
                                pubgPlayerAliveMin: n
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return Y.createElement(At, r.__assign({
                            csgoMap: this.state.csgoMap,
                            hearthstoneClass: this.state.hearthstoneClass,
                            hearthstoneMode: this.state.hearthstoneMode,
                            pubgGameMode: this.state.pubgGameMode,
                            pubgPlayerAliveMax: this.state.pubgPlayerAliveMax,
                            pubgPlayerAliveMin: this.state.pubgPlayerAliveMin,
                            leagueChampion: this.state.leagueChampion,
                            onSelectPubgTeamType: this.onSelectPubgTeamType,
                            onSelectPubgRemainingPlayers: this.onSelectPubgRemainingPlayers,
                            overwatchCharacter: this.state.overwatchCharacter,
                            sortMode: this.getDirectorySort()
                        }, this.props))
                    }, t
                }(Y.Component);
            var Mt = Object(Q.connect)(function(e, t) {
                    return {
                        languagePreferences: Object(K.a)(e),
                        languageTags: Object(a.b)(e),
                        sideNavExpanded: e.ui.sideNavExpanded,
                        languageCode: Object(J.b)(e),
                        csgoMap: F(e),
                        hearthstoneClass: j(e),
                        hearthstoneMode: A(e),
                        leagueChampion: P(e),
                        overwatchCharacter: R(e),
                        csgoSort: q(e),
                        leagueSort: z(e),
                        tagFilters: Object(a.a)(e, decodeURIComponent(t.match.params.encodedCommunityName))
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        addTagFilter: Z.h,
                        removeTagFilter: Z.m
                    }, e)
                })(Gt),
                Ut = n("4p7I"),
                Bt = n("yoKv"),
                Ht = n("mLw1"),
                Wt = n("ZS2+"),
                qt = n("cras"),
                zt = n("si2W"),
                Yt = n("C29h"),
                Qt = n("HStj"),
                $t = n("8Ocm"),
                Xt = (n("yetU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderFilteredBy = function() {
                            return t.props.selectedContentType !== Qt.a.Live ? null : t.props.data.game && t.props.data.game.id ? Y.createElement(Ce.Va, null, Y.createElement(Ce.Va, {
                                margin: {
                                    left: .5,
                                    top: 1
                                }
                            }, Y.createElement(Ce.V, null, Object(i.d)("Filters", "DirectoryHeader"))), Y.createElement(zt.a, {
                                categoryID: t.props.data.game.id,
                                categoryName: t.props.directoryName,
                                onAddTagFilter: t.addTagFilter,
                                onRemoveTagFilter: t.removeTagFilter,
                                selectedTags: t.props.directoryTagFilters,
                                tagSearchType: Yt.b.StreamTag,
                                section: fe.a.IncategoryChannels
                            })) : null
                        }, t.addTagFilter = function(e) {
                            t.props.addTagFilter(e, t.props.directoryName)
                        }, t.removeTagFilter = function(e) {
                            t.props.removeTagFilter(e, t.props.directoryName)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return Y.createElement(Ce.xb, {
                            className: "directory-header__filters",
                            display: Ce.W.Flex,
                            flexWrap: Ce.Z.Wrap,
                            padding: {
                                right: 3
                            }
                        }, Y.createElement(Ce.Va, {
                            margin: {
                                top: 1
                            }
                        }, Y.createElement(qt.a, {
                            buttonSize: Ce.D.Large,
                            contentType: this.props.selectedContentType,
                            directoryType: ke.a.Games,
                            directoryName: this.props.directoryName
                        })), this.renderFilteredBy())
                    }, t
                }(Y.Component)),
                Jt = Object($.compose)(Object(re.a)($t, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    }
                }))(Xt);
            var Kt = Object(Q.connect)(function(e, t) {
                    return {
                        directoryTagFilters: Object(a.a)(e, t.directoryName)
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        addTagFilter: Z.h,
                        removeTagFilter: Z.m
                    }, e)
                })(Jt),
                Zt = n("TSYQ"),
                en = n("3W+h"),
                tn = n("1/iK"),
                nn = n("y5D0"),
                an = n("JcRA"),
                rn = n("Jl34"),
                on = n("y5Wm"),
                sn = n("k5cX"),
                ln = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.followClicked = function() {
                            t.props.isLoggedIn ? t.isFollowing ? t.unfollow() : t.follow() : t.props.showLoginModal()
                        }, t.showUnfollowButton = function() {
                            return t.props.isLoggedIn && t.isFollowing
                        }, t.follow = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.followGame && this.props.data && this.props.data.game ? (e = r.__assign({}, Object(oe.a)({
                                                gameID: this.props.data.game.id
                                            }), {
                                                optimisticResponse: {
                                                    followGame: {
                                                        __typename: "FollowGamePayload",
                                                        game: {
                                                            self: {
                                                                follow: {
                                                                    followedAt: (new Date).toISOString(),
                                                                    __typename: "GameFollow"
                                                                },
                                                                __typename: "GameSelfConnection"
                                                            },
                                                            __typename: "Game"
                                                        }
                                                    }
                                                },
                                                update: function(e, n) {
                                                    var a = n.data.followGame,
                                                        r = e.readQuery({
                                                            query: on,
                                                            variables: {
                                                                name: t.props.gameName
                                                            }
                                                        });
                                                    r && r.game && (r.game.self.follow = a.game.self.follow, e.writeQuery({
                                                        query: on,
                                                        variables: {
                                                            name: t.props.gameName
                                                        },
                                                        data: r
                                                    }))
                                                }
                                            }), [4, this.props.followGame(e)]) : [2];
                                        case 1:
                                            return n.sent(), this.track(ce.SpadeEventType.GameFollow), [2]
                                    }
                                })
                            })
                        }, t.unfollow = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = r.__assign({}, Object(oe.a)({
                                                gameID: this.props.data.game.id
                                            }), {
                                                optimisticResponse: {
                                                    unfollowGame: {
                                                        __typename: "UnfollowGamePayload",
                                                        follow: null
                                                    }
                                                },
                                                update: function(e) {
                                                    var n = e.readQuery({
                                                        query: on,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                    n && n.game && (n.game.self.follow = null, e.writeQuery({
                                                        query: on,
                                                        variables: {
                                                            name: t.props.gameName
                                                        },
                                                        data: n
                                                    }))
                                                }
                                            }), [4, this.props.unfollowGame(e)]) : [2];
                                        case 1:
                                            return n.sent(), this.track(ce.SpadeEventType.GameUnfollow), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(i.d)("Follow", "FollowGameButton"),
                            t = this.props.buttonType,
                            n = t && t === Ce.F.Hollow ? Ce.nb.FollowHollow : Ce.nb.Heart,
                            a = void 0 === this.props.fullWidthButton || this.props.fullWidthButton,
                            o = {};
                        if (a && (o.justifyContent = Ce.Ua.Center), this.props.isLoggedIn && this.isLoading) return Y.createElement(Ce.Va, r.__assign({
                            display: Ce.W.Flex
                        }, o), Y.createElement(Ce.Va, {
                            alignItems: Ce.f.Center
                        }, Y.createElement(Ce.cb, {
                            width: 70,
                            height: 30
                        })));
                        var s = this.showUnfollowButton() ? Object(i.d)("Unfollow", "FollowGameButton") : e,
                            l = this.showUnfollowButton() ? "game-directory-unfollow-button" : "game-directory-follow-button",
                            c = this.showUnfollowButton() ? Ce.nb.Heart : n,
                            d = !this.showUnfollowButton() && t && t === Ce.F.Hollow ? Ce.nb.Heart : Ce.nb.Unheart,
                            u = this.showUnfollowButton() ? Object(i.d)("Following", "FollowGameButton") : e;
                        return this.props.animatedButton ? Y.createElement(an.a, {
                            ariaLabel: s,
                            "data-a-target": l,
                            "data-test-selector": "follow-game-button-component",
                            icon: c,
                            iconOnHover: d,
                            onClick: this.followClicked,
                            text: u,
                            type: t || Ce.F.Default,
                            fullWidthButton: a
                        }) : Y.createElement(Ce.z, {
                            ariaLabel: s,
                            "data-a-target": l,
                            "data-test-selector": "follow-game-button-component",
                            icon: c,
                            onClick: this.followClicked,
                            statusAlertIcon: this.props.isLoggedIn ? d : void 0,
                            type: t || Ce.F.Default,
                            fullWidth: a
                        }, u)
                    }, Object.defineProperty(t.prototype, "isFollowing", {
                        get: function() {
                            return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isLoading", {
                        get: function() {
                            return !this.props.data || this.props.data.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.track = function(e) {
                        i.o.tracking.track(e, {
                            src: this.props.src,
                            kind: e === ce.SpadeEventType.GameFollow ? "follow" : "unfollow",
                            name: this.props.gameName
                        })
                    }, t
                }(Y.Component),
                cn = Object(Ae.compose)(Object(re.a)(on, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.gameName
                    }
                }), Object(re.a)(rn, {
                    name: "followGame"
                }), Object(re.a)(sn, {
                    name: "unfollowGame"
                }))(ln);
            var dn = Object(Q.connect)(function(e) {
                    return {
                        isLoggedIn: Object(J.f)(e)
                    }
                }, function(e) {
                    return Object($.bindActionCreators)({
                        showLoginModal: function() {
                            return Object(nn.e)(tn.a.FollowGameButton)
                        }
                    }, e)
                })(cn),
                un = n("0LAi"),
                mn = n("7ALk");
            n("Z8yi");
            var pn, gn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderDropsAvailable = function() {
                            var e = t.props.data.directory;
                            if (e && e.activeDropCampaigns && e.activeDropCampaigns.some(function(e) {
                                    return !!e.applicableChannels && 0 === e.applicableChannels.length
                                })) return Y.createElement(Ce.Va, {
                                margin: {
                                    bottom: .5
                                },
                                "data-test-selector": "directory-header-new-drops"
                            }, Y.createElement(Ce.V, {
                                color: Ce.O.Overlay
                            }, Object(i.d)("Offers in-game Drops. <x:link>Learn More.</x:link>", {
                                "x:link": function(e) {
                                    return Y.createElement("a", {
                                        href: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops",
                                        className: "directory-header__link",
                                        target: "_blank"
                                    }, e)
                                }
                            }, "drops")))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e;
                        e = this.props.data.directory && this.props.data.directory.followersCount && this.props.data.directory.viewersCount ? Y.createElement(Ce.V, {
                            color: Ce.O.Base,
                            type: Ce.Nb.P
                        }, function(e) {
                            return Object(i.d)("{followerCount,number} Followers", {
                                followerCount: e
                            }, "DirectoryHeader")
                        }(this.props.data.directory.followersCount), " · ", function(e) {
                            return Object(i.d)("{viewerCount,number} Viewers", {
                                viewerCount: e
                            }, "DirectoryHeader")
                        }(this.props.data.directory.viewersCount)) : Y.createElement(Ce.cb, {
                            width: 200,
                            height: 20,
                            overlay: !0
                        });
                        var t = !1,
                            n = {};
                        this.props.data.directory && (this.props.data.directory.coverURL ? n = {
                            backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                        } : this.props.data.directory.streams && this.props.data.directory.streams.edges && (t = this.props.data.directory.streams.edges.some(function(e) {
                            return !!(e && e.node && e.node.previewImageURL) && (n = {
                                backgroundImage: "url(" + e.node.previewImageURL + ")"
                            }, !0)
                        })));
                        var a = Zt("directory-header-new__banner", {
                                "directory-header-new__banner--blur": t
                            }),
                            r = this.props.data && this.props.data.directory && this.props.data.directory.displayName,
                            o = this.props.data && this.props.data.directory && this.props.data.directory.avatarURL;
                        return Y.createElement(Ce.Va, {
                            position: Ce.db.Relative,
                            overflow: Ce.Ya.Hidden
                        }, Y.createElement("div", {
                            className: a,
                            style: n,
                            "data-test-selector": "directory-banner-image"
                        }), Y.createElement("div", {
                            className: "directory-header-new__banner-cover"
                        }), Y.createElement(Ce.Va, {
                            margin: {
                                top: 3,
                                x: 3,
                                bottom: 2
                            },
                            position: Ce.db.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, Y.createElement(Ce.Va, {
                            display: Ce.W.Flex
                        }, Y.createElement(Ce.Va, {
                            margin: {
                                right: 2
                            }
                        }, o ? Y.createElement(Ce.Oa, {
                            elevation: 3
                        }, Y.createElement(Ce.S, {
                            className: "directory-header-new__box-image",
                            src: o,
                            alt: r || Object(i.d)("Game Image", "DirectoryHeader"),
                            "data-test-selector": "directory-header-new-avatar-image"
                        })) : Y.createElement(Ce.cb, {
                            width: 130,
                            height: 173
                        })), Y.createElement(Ce.Va, {
                            display: Ce.W.Flex,
                            flexDirection: Ce.Y.Column,
                            justifyContent: Ce.Ua.End
                        }, r ? Y.createElement(Y.Fragment, null, Y.createElement(Ce.V, {
                            color: Ce.O.Base,
                            type: Ce.Nb.H1,
                            bold: !0
                        }, r), this.renderDropsAvailable(), Y.createElement(Ce.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, e), this.renderTags()) : this.renderPlaceholders(), Y.createElement(Ce.Va, {
                            display: Ce.W.InlineFlex
                        }, Y.createElement(dn, {
                            animatedButton: !0,
                            gameName: this.props.directoryName,
                            src: "directory",
                            fullWidthButton: !1
                        }))))))
                    }, t.prototype.renderPlaceholders = function() {
                        return Y.createElement(Y.Fragment, null, Y.createElement(Ce.Va, {
                            margin: {
                                bottom: 1,
                                top: .5
                            }
                        }, Y.createElement(Ce.cb, {
                            width: 300,
                            height: 50
                        })), Y.createElement(Ce.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, Y.createElement(Ce.cb, {
                            width: 200,
                            height: 15
                        })), Y.createElement(Ce.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, Y.createElement(Ce.Va, {
                            display: Ce.W.InlineBlock,
                            margin: {
                                right: .5
                            }
                        }, Y.createElement(Ce.cb, {
                            width: 50,
                            height: 15
                        })), Y.createElement(Ce.Va, {
                            display: Ce.W.InlineBlock
                        }, Y.createElement(Ce.cb, {
                            width: 50,
                            height: 15
                        }))))
                    }, t.prototype.renderTags = function() {
                        var e = this.props.data.directory;
                        return !e.tags || e.tags.length <= 0 ? null : Y.createElement(Ce.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, Y.createElement(un.a, {
                            tags: e.tags,
                            linkPath: en.a.DirectoryTag,
                            style: Ce.Ib.Default
                        }))
                    }, t
                }(Y.Component),
                hn = Object(Ae.compose)(Object(re.a)(mn, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName,
                                type: Object(Me.a)(ke.a.Games)
                            }
                        }
                    }
                }), Object(me.c)("TagsDirectoryBanner", {
                    autoReportInteractive: !0
                }))(gn),
                fn = n("Bh3T"),
                vn = n("JoTo"),
                kn = n("cnlr"),
                yn = n("mHR/"),
                bn = n("kJyr"),
                Sn = Wt.a.wrap(function() {
                    return n.e(131).then(n.bind(null, "3f6U"))
                }, "DirectoryGameClipsPage"),
                Cn = Wt.a.wrap(function() {
                    return n.e(130).then(n.bind(null, "N7a1"))
                }, "DirectoryGameDetailsPage"),
                Tn = Wt.a.wrap(function() {
                    return n.e(129).then(n.bind(null, "TH8Y"))
                }, "DirectoryGameVideosPage"),
                wn = Wt.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "mpcK"))
                }, "DirectoryGamePage");
            ! function(e) {
                e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
            }(pn || (pn = {}));
            var Nn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAdBanner = function() {
                            return Object(yn.c)(t.props.match.path) && t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.game ? Y.createElement(de.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: 20,
                                    marginTop: 20
                                },
                                adUnit: ue.d.directory,
                                slotID: ue.b.directory.banner,
                                adSize: ue.c.directory.banner,
                                "data-a-target": "directory-banner-ad-slot",
                                targeting: {
                                    pagetype: ue.a.games,
                                    game: t.props.data.game.displayName
                                },
                                autoEnable: !1
                            }) : null
                        }, t.getContentType = function() {
                            return Object(yn.a)(t.props.match.path) ? Qt.a.Clips : Object(yn.b)(t.props.match.path) ? Qt.a.GameDetails : Object(yn.d)(t.props.match.path) ? Qt.a.Videos : Qt.a.Live
                        }, t.getScrollerName = function() {
                            var e = pn.DEFAULT;
                            return Object(yn.a)(t.props.match.path) ? e = pn.CLIPS : Object(yn.c)(t.props.match.path) && (e = pn.GAME), e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = decodeURIComponent(this.props.match.params.encodedCommunityName);
                        return Y.createElement(Ce.Va, {
                            "data-a-target": this.getScrollerName()
                        }, Y.createElement(vn.a, null, Y.createElement(kn.a, null)), Y.createElement(fn.b, {
                            suppressScrollX: !0,
                            addPaddingWhenPlayerIsPersisting: !0
                        }), Y.createElement(hn, {
                            directoryName: e
                        }), this.renderAdBanner(), Object(yn.c)(this.props.match.path) && Y.createElement(Kt, {
                            directoryName: e,
                            selectedContentType: this.getContentType()
                        }), Y.createElement(Bt.a, null, Y.createElement(Ut.a, {
                            path: "/communities/:encodedCommunityName/details",
                            render: this.redirectToMainDirectory
                        }), Y.createElement(Ut.a, {
                            path: "/communities/:encodedCommunityName/:encodedLanguage",
                            render: this.redirectToMainDirectory
                        }), Y.createElement(Ut.a, {
                            path: "/communities/:encodedCommunityName",
                            render: this.redirectToMainDirectory
                        }), Y.createElement(Ut.a, {
                            path: "/directory/game/:encodedCommunityName/clips",
                            component: Sn
                        }), Y.createElement(Ut.a, {
                            path: "/directory/game/:encodedCommunityName/details",
                            component: Cn
                        }), Y.createElement(Ut.a, {
                            path: "/directory/game/:encodedCommunityName/videos/:filter",
                            component: Tn
                        }), Y.createElement(Ut.a, {
                            path: "/directory/game/:encodedCommunityName/:encodedLanguage",
                            component: wn
                        }), Y.createElement(Ut.a, {
                            path: "/directory/game/:encodedCommunityName",
                            component: wn
                        })))
                    }, t.prototype.redirectToMainDirectory = function() {
                        return Y.createElement(Ht.a, {
                            path: "/",
                            to: "/directory"
                        })
                    }, t
                }(Y.Component),
                _n = Object($.compose)(Object(re.a)(bn, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName).toLowerCase()
                            }
                        }
                    },
                    skip: function() {
                        return !Object(he.b)()
                    }
                }))(Nn);
            n.d(t, "DirectoryGamePage", function() {
                return Mt
            }), n.d(t, "DirectoryRootPage", function() {
                return _n
            })
        },
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            });
            var a = n("mrSG"),
                r = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                i = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                l = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                c = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
        oA7Y: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "i", function() {
                return d
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "j", function() {
                return m
            });
            var a = "browse.BROWSE_TYPE_CHANGED",
                r = "browse.LAST_BROWSE_PATH",
                i = "browse.TAG_FILTER_ADDED",
                o = "browse.TAG_FILTER_CHANGED",
                s = "browse.TAG_FILTER_REMOVED";

            function l(e) {
                return {
                    type: i,
                    addedTag: e
                }
            }

            function c(e) {
                return {
                    type: a,
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
                    type: r,
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
        oJov: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return r.createElement(o.Va, a.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), r.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.xb, {
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
                    }, r.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = n("fVj5"),
                d = function(e) {
                    return r.createElement(o.Va, null, r.createElement(o.y, a.__assign({}, e)), Object(c.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(l.a, a.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && r.createElement(s, null))
                };
            n.d(t, "a", function() {
                return d
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                l = n("Ue10"),
                c = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = i.createElement(l.Ga, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: l.Qa.Large
                            })
                        } else this.props.formTagProps && (e = i.createElement(l.Ga, r.__assign({}, this.props.formTagProps)));
                        return i.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t
                }(i.Component),
                u = Object(o.compose)(Object(s.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.tagID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.getTagFromGQL
                    }
                }))(d);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
                }(a || (a = {}))
        },
        sLlB: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("5xw2"),
                s = n("OhOW"),
                l = n("mrSG"),
                c = n("q1tI"),
                d = n("wIs1"),
                u = n("/7QA"),
                m = n("vSJR"),
                p = n("8/mp"),
                g = n("HSqT"),
                h = n("2xye"),
                f = n("GnwI"),
                v = n("Ue10");
            n("S58p");
            ! function(e) {
                e.ClearAllButton = "language-select-menu__clear-all-button"
            }(a || (a = {}));
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLanguageChange = function(e) {
                            var n = e.currentTarget,
                                a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                            a && (t.props.updateLanguagePreferences(a, n.checked), t.trackLanguageChange(a, n.checked))
                        }, t.renderDropdownContent = function() {
                            return c.createElement(c.Fragment, null, c.createElement("div", {
                                className: "language-select-menu__balloon"
                            }, c.createElement(p.b, null, c.createElement(v.Va, {
                                padding: .5
                            }, Object(g.b)().map(t.renderLanguageOption)))), c.createElement(v.xb, {
                                background: v.r.Alt,
                                borderTop: !0,
                                className: "language-select-menu__footer"
                            }, c.createElement(v.z, {
                                type: v.F.Text,
                                onClick: t.props.clearLanguagePreferences,
                                "data-a-target": "language-clear-all",
                                "data-test-selector": a.ClearAllButton
                            }, Object(u.d)("Clear all", "LanguageSelectMenu"))))
                        }, t.renderLanguageOption = function(e) {
                            return c.createElement(v.Va, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                key: e.code
                            }, c.createElement(v.N, {
                                label: e.label,
                                checked: t.props.languagePreferences.includes(e.code),
                                "data-language-code": e.code,
                                "data-a-target": "language-filter-" + e.code + "-checkbox",
                                onChange: t.handleLanguageChange
                            }))
                        }, t.renderButtonContent = function() {
                            var e = t.props.languagePreferences.length,
                                n = Object(u.d)("Language", "LanguageSelectMenu");
                            return c.createElement(v.Va, {
                                display: v.W.Flex
                            }, n, c.createElement(v.Va, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && c.createElement(v.ab, {
                                type: v.bb.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var a = "";
                            t.props.match && t.props.match.params && (a = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), u.o.tracking.track(h.SpadeEventType.LanguageFilterChange, {
                                item_name: "language",
                                item_value: e,
                                item_action: n ? "select" : "deselect",
                                game: a || null,
                                open_click: !0
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return c.createElement(v.Va, {
                            className: "language-select-menu"
                        }, c.createElement(m.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(c.Component),
                y = Object(i.compose)(d.a, Object(f.c)("LanguageSelectMenu"))(k);
            var b = Object(r.connect)(function(e) {
                return {
                    languagePreferences: Object(s.a)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    updateLanguagePreferences: o.c,
                    clearLanguagePreferences: o.a
                }, e)
            })(y);
            n.d(t, "a", function() {
                return b
            })
        },
        si2W: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("X7a7"),
                s = n("moLQ"),
                l = n("mrSG"),
                c = n("q1tI"),
                d = n("wIs1"),
                u = n("/7QA"),
                m = n("3W+h"),
                p = n("odjZ"),
                g = n("C29h"),
                h = n("AZIu"),
                f = n("Ue10"),
                v = [m.a.Popular, m.a.PopularTag, "/directory/game/:encodedCommunityName"];
            ! function(e) {
                e.Tag = "tag-filter", e.TagAddButton = "tag-add-button-selector", e.TagAddButtonWrapper = "tag-add-button-wrapper-selector", e.TagSearchWrapper = "tag-search-wrapper-selector"
            }(a || (a = {}));
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingTagSearch: !1
                        }, t.renderLanguageTags = function() {
                            if (!v.includes(t.props.match.path)) return null;
                            var e = t.props.selectedTags.map(function(e) {
                                    return e.id
                                }),
                                n = t.props.languageTags.slice();
                            return (n = n.filter(function(t) {
                                return !e.includes(t)
                            })).map(function(e) {
                                return c.createElement(f.Va, {
                                    key: "language-tag-filter-" + e,
                                    margin: .5
                                }, c.createElement(p.a, {
                                    "data-test-selector": a.Tag,
                                    getTagFromGQL: !0,
                                    onClickForGQLTag: t.removeTagOnClick,
                                    tagID: e
                                }))
                            })
                        }, t.renderTags = function() {
                            return t.props.selectedTags.map(function(e) {
                                return c.createElement(f.Va, {
                                    key: "tag-filter-" + e.id,
                                    margin: .5
                                }, c.createElement(p.a, {
                                    "data-test-selector": a.Tag,
                                    formTagProps: {
                                        label: e.localizedName || e.tagName,
                                        onClick: t.removeTagOnClick.bind(t, e),
                                        selected: !0,
                                        size: f.Qa.Large
                                    },
                                    tagID: e.id
                                }))
                            })
                        }, t.renderAddTags = function() {
                            return c.createElement(c.Fragment, null, c.createElement(f.Va, {
                                "data-test-selector": a.TagSearchWrapper,
                                display: t.state.isShowingTagSearch ? f.W.Block : f.W.Hide,
                                margin: {
                                    right: 1
                                }
                            }, t.renderTagSearch()), c.createElement(f.Va, {
                                "data-test-selector": a.TagAddButtonWrapper,
                                display: t.state.isShowingTagSearch ? f.W.Hide : f.W.Block,
                                margin: {
                                    left: .5,
                                    y: .5
                                }
                            }, c.createElement(f.Ga, {
                                "data-test-selector": a.TagAddButton,
                                label: Object(u.d)("Add Filter", "TagFilter"),
                                onClick: t.showTagSearch,
                                size: f.Qa.Large
                            })))
                        }, t.renderTagSearch = function() {
                            if (t.props.tagSearchType === g.b.StreamTag) {
                                var e = {
                                    autoFocus: t.state.isShowingTagSearch,
                                    categoryID: t.props.categoryID,
                                    categoryName: t.props.categoryName,
                                    inline: !0,
                                    inputSize: f.Qa.Large,
                                    onTagClick: t.addTagOnClick,
                                    type: t.props.tagSearchType,
                                    section: t.props.section,
                                    selectedTags: t.props.selectedTags,
                                    numSelectedTags: t.props.selectedTags.length
                                };
                                return c.createElement(g.a, l.__assign({}, e))
                            }
                            var n = {
                                autoFocus: t.state.isShowingTagSearch,
                                inline: !0,
                                inputSize: f.Qa.Large,
                                onTagClick: t.addTagOnClick,
                                type: t.props.tagSearchType,
                                section: t.props.section,
                                selectedTags: t.props.selectedTags,
                                numSelectedTags: t.props.selectedTags.length
                            };
                            return c.createElement(g.a, l.__assign({}, n))
                        }, t.showTagSearch = function() {
                            t.setState({
                                isShowingTagSearch: !0
                            })
                        }, t.addTagOnClick = function(e) {
                            e.isLanguageTag && t.props.updateLanguageTags(e.id, !0), t.props.onAddTagFilter(e)
                        }, t.removeTagOnClick = function(e) {
                            t.props.match.params.tagID === e.id && t.removeTagFromPath(), e.isLanguageTag && t.props.updateLanguageTags(e.id, !1);
                            var n = t.props.selectedTags.findIndex(function(t) {
                                    return t.id === e.id
                                }),
                                a = {
                                    section: t.props.section,
                                    tagPosition: n,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !0
                                };
                            Object(h.b)(a), t.props.onRemoveTagFilter(e)
                        }, t.removeTagFromPath = function() {
                            t.props.match.path === m.a.DirectoryTag ? u.o.history.push(m.a.Games) : t.props.match.path === m.a.PopularTag && u.o.history.push(m.a.Popular)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(f.Va, {
                            display: f.W.Flex,
                            flexWrap: f.Z.Wrap
                        }, this.renderLanguageTags(), this.renderTags(), this.renderAddTags())
                    }, t
                }(c.Component),
                y = Object(i.compose)(d.a)(k);
            var b = Object(r.connect)(function(e) {
                return {
                    languageTags: Object(s.b)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    updateLanguageTags: o.d
                }, e)
            })(y);
            n.d(t, "a", function() {
                return b
            })
        },
        ugtu: function(e, t, n) {
            "use strict";
            n.d(t, "j", function() {
                return s
            }), n.d(t, "k", function() {
                return l
            }), n.d(t, "l", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "h", function() {
                return m
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "i", function() {
                return g
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "a", function() {
                return k
            });
            var a = n("q1tI"),
                r = n("/7QA"),
                i = n("GxR5"),
                o = n("Ue10");

            function s(e) {
                return a.createElement(o.V, {
                    type: o.Nb.Strong
                }, e)
            }

            function l(e, t) {
                return a.createElement(o.T, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function c(e, t) {
                return a.createElement(o.T, {
                    onClick: t
                }, e)
            }

            function d() {
                return Object(r.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return l(e, i.b)
                    }
                }, "ServerMessage")
            }

            function u() {
                return Object(r.d)("<x:link>Forgot your password</x:link>?", {
                    "x:link": function(e) {
                        return l(e, Object(i.e)())
                    }
                }, "ServerMessage")
            }

            function m() {
                return Object(r.d)("Please <x:link>reset your password</x:link>.", {
                    "x:link": function(e) {
                        return l(e, Object(i.e)())
                    }
                }, "ServerMessage")
            }

            function p() {
                return Object(r.d)("Please <x:link>contact support</x:link> for assistance.", {
                    "x:link": function(e) {
                        return l(e, i.a)
                    }
                }, "ServerMessage")
            }

            function g() {
                return Object(r.d)("To learn more, please read <x:link>this article</x:link>.", {
                    "x:link": function(e) {
                        return l(e, i.c)
                    }
                }, "ServerMessage")
            }

            function h(e) {
                return Object(r.d)("Want to <x:click>create a new account</x:click>?", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function f(e) {
                return Object(r.d)("Want to <x:click>log in</x:click> instead?", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function v(e) {
                return Object(r.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function k(e) {
                return Object(r.d)("If you want to use an existing Twitch ID, you can <x:click>connect it here</x:click>.", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }
        },
        vDRX: function(e, t, n) {},
        vSJR: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("u5aL"),
                s = n("N0BP"),
                l = n("Ue10");
            ! function(e) {
                e.DropdownInsideClickDetector = "dropdown-inside-click-detector", e.DropdownWrapper = "dropdown-wrapper"
            }(a || (a = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOpen: !!t.props.openByDefault
                    }, t.handleOnClickOut = function() {
                        t.hideDropdown()
                    }, t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                isOpen: !e.isOpen,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.isOpen)
                        })
                    }, t.hideDropdown = function() {
                        t.setState({
                            isOpen: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!0)
                        })
                    }, t.handleInsideDropdownClick = function() {
                        t.hideDropdown()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.children;
                    return this.props.hideDropdownOnInsideClick && (e = i.createElement("div", {
                        "data-test-selector": a.DropdownInsideClickDetector,
                        onClick: this.handleInsideDropdownClick
                    }, e)), i.createElement(o.a, {
                        onClickOut: this.handleOnClickOut
                    }, i.createElement(l.xb, r.__assign({
                        background: this.state.isOpen ? l.r.Base : void 0,
                        borderRadius: l.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: l.db.Relative
                    }, Object(s.a)(this.props)), i.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, i.createElement(l.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: l.D.Large,
                        type: l.F.Hollow
                    }, this.props.buttonLabel)), i.createElement(l.xb, {
                        attachLeft: !0,
                        background: l.r.Base,
                        borderRadius: l.x.Large,
                        "data-test-selector": a.DropdownWrapper,
                        display: this.state.isOpen ? l.W.Block : l.W.Hide,
                        elevation: 3,
                        fullWidth: !0,
                        padding: {
                            y: 1
                        },
                        position: l.db.Absolute,
                        zIndex: l.ac.Above
                    }, e)))
                }, t.prototype.toggleDropdown = function(e) {
                    void 0 === e && (e = !this.state.isOpen), this.setState({
                        isOpen: e
                    })
                }, t
            }(i.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        wqI2: function(e, t, n) {},
        "x/sq": function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                r = n("odjZ"),
                i = {},
                o = n("fVj5"),
                s = n("AZIu"),
                l = n("X7a7");
            n.d(t, "a", function() {
                return c
            });
            var c = function(e) {
                var t = e.tags,
                    n = e.section,
                    c = e.onClickTag,
                    d = e.tagFilters,
                    u = void 0 === d ? [] : d,
                    m = e.scrollToTop;
                if (Object(o.a)() && t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            if (m && m(), e.isLanguageTag && a.o.store.dispatch(Object(l.d)(e.id, !0)), u.every(function(t) {
                                    return t.id !== e.id
                                })) {
                                c && c(e);
                                var t = {
                                    section: n,
                                    tagPosition: u.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(s.b)(t)
                            } else ! function(e) {
                                var t = document.querySelector('[data-tag-filter="' + e + '"]');
                                if (t) {
                                    var n = i[e];
                                    n && clearTimeout(n), t.classList.contains(r.b.NoBounce) && (t.classList.remove(r.b.NoBounce), t.classList.add(r.b.Bounce));
                                    var a = setTimeout(function() {
                                        t.classList.remove(r.b.Bounce), t.classList.add(r.b.NoBounce), delete i[e]
                                    }, 750);
                                    i[e] = a
                                }
                            }(e.id)
                        }
                    }
                }
            }
        },
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var a = n("mrSG"),
                r = n("17x9"),
                i = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = {
                    cardIDtoItemTrackingIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func
                };

            function c() {
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
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.rowName,
                                    l = Object(s.e)(),
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: a,
                                        reasonTarget: r,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: i,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(c, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.reasonTargetType,
                                    l = t.rowName,
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: a,
                                        reasonTarget: r,
                                        reasonTargetType: i,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, a, r) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var i = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        l = o.reasonType,
                                        c = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: i,
                                            itemPosition: a,
                                            reasonType: l,
                                            reasonTarget: c,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = i, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, a, r, i, o) {
                                if (t.node) {
                                    var l = n.state,
                                        c = l.cardIDtoRequestIDMap,
                                        d = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
                                        m = u.reasonType,
                                        p = u.reasonTarget,
                                        g = u.reasonTargetType,
                                        h = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: c[t.node.id],
                                            itemPosition: a,
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
                                    Object(s.g)(f, r)
                                }
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return a.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                a = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], a, e.cardIDtoRequestIDMap)
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
                            return i.createElement(e, a.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(i.Component)
                }
            }
        },
        y5Wm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_Game"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
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
                                                value: "follow"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followedAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "currentUser"
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
                body: "query FollowGameButton_Game($name: String!) {\ngame(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        yHQj: function(e, t, n) {},
        yI6f: function(e, t, n) {
            "use strict";
            var a, r, i, o, s, l, c, d = n("/7QA"),
                u = n("f00E"),
                m = n("2xye"),
                p = n("3sMy"),
                g = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
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
            }(l || (l = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(c || (c = {}));
            var h = ((a = {})[p.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, a[p.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, a[p.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, a[p.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Clip,
                    rowName: e
                }
            }, a[p.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Vod,
                    rowName: e
                }
            }, a);

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
                var n, a = null,
                    o = null,
                    s = null,
                    l = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        a = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Live, l = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        a = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        a = (n = e.contentEdge.node).owner && n.owner.id, o = i.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, a = null, o = i.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: l,
                    channel_id: null === a ? null : Number(a),
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
                d.n.track(m.SpadeEventType.ItemClick, n)
            }

            function y(e, t) {
                var n = v(e, t);
                d.n.track(m.SpadeEventType.ItemDisplay, n)
            }

            function b(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.n.track(m.SpadeEventType.RecRequestClient, t)
            }
            var S = n("x75U"),
                C = n("A65o");
            n.d(t, "e", function() {
                return g
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return k
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, !1, function() {
                return S.a
            }), n.d(t, "j", function() {
                return S.b
            }), n.d(t, !1, function() {
                return C.a
            })
        },
        yetU: function(e, t, n) {},
        zrz1: function(e, t, n) {}
    }
]);